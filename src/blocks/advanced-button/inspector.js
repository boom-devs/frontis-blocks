import { __ } from '@wordpress/i18n';

import {
	SelectControl,
	PanelBody,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
	ADVANCED_BUTTON_PRESETS,
	TEXT_ALIGN_JUSTIFY,
	ICON_TEXT_ALIGN,
	BORDER_STYLES,
	ICON_POSITION,
	OVERFLOW_OP,
	DYNAMIC_DATA_SOURCE_OPTIONS,
	DYNAMIC_DATA_SOURCE_FIELD_OPTIONS,
	DYNAMIC_FEATURED_IMAGE_OPTIONS,
	DYNAMIC_DATE_TIME_TYPE_OPTIONS,
	DYNAMIC_TAXONOMY_OPTIONS,
	getdynamicTextDateFormatOptions,
	getdynamicTextTimeFormatOptions,
	DYNAMIC_LINK_SOURCE_OPTIONS,
} from '@Constants/fbConstants';

import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import Select2 from "react-select";
import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_UrlControl from '@Components/url-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_ImageControl from '@Components/image-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ScaleControl from '@Components/scale-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import getProActive from '@Utils/getProActive';
import FB_Presets from '@Components/presets';
import './editor.scss';
import { advancedButtonPresets } from './preset';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		blockStyle,
		// deviceType,
		buttonAlignment,
		buttonTextSwitcher,
		buttonText,
		buttonUrl,
		buttonTargetUrl,
		buttonWidth,
		buttonWidthUnits,

		buttonPresetStyle,
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
		buttonColor,
		buttonHoverColor,

		buttonTextColorType,
		buttonTextCustomGradientColorSwitcher,
		buttonTextCustomGradientColor,
		buttonTextGradientColor,
		buttonTextHoverColorType,
		buttonTextHoverGradientColor,
		buttonTextHoverCustomGradientColorSwitcher,
		buttonTextHoverCustomGradientColor,

		/** Start Background */
		buttonBgColorSwitcher,
		buttonNormalBackgroundType,
		buttonBgColor,
		buttonNormalGradientColor,
		buttonNormalCustomGradientSwitcher,
		buttonNormalCustomGradientInputValue,
		buttonHoverBackgroundType,
		buttonBgHoverColor,
		buttonHoverGradientColor,
		buttonHoverCustomGradientSwitcher,
		buttonHoverCustomGradientInputValue,
		/** End Background */

		buttonBorder,
		buttonBorderColorSwitcher,
		buttonBorderColor,
		buttonBorderHoverColor,

		buttonBorderUnits,
		buttonDesktopBorderWidth,
		buttonTabBorderWidth,
		buttonMobileBorderWidth,
		buttonBorderLink,

		buttonBorderRadiusUnits,
		buttonDesktopBorderRadiusWidth,
		buttonTabBorderRadiusWidth,
		buttonMobileBorderRadiusWidth,
		buttonBorderRadiusLink,

		buttonBoxShadowSwitcher,
		buttonBoxShadowValues,
		buttonBoxShadowCssValue,
		buttonBoxShadowHoverValues,
		buttonBoxShadowHoverCssValue,

		buttonPaddingUnits,
		buttonDesktopPadding,
		buttonTabPadding,
		buttonMobilePadding,
		buttonPaddingLink,

		buttonMarginUnits,
		buttonDesktopMargin,
		buttonTabMargin,
		buttonMobileMargin,
		buttonMarginLink,

		buttonIconAlign,
		buttonIcon,
		buttonIconFrontend,
		buttonIconPosition,

		buttonIconSize,
		buttonIconSizeUnits,
		buttonIconColorSwitcher,
		buttonIconColor,
		buttonIconHoverColor,

		/** Start Background */
		buttonIconBgColorSwitcher,
		buttonIconNormalBackgroundType,
		buttonIconBgColor,
		buttonIconNormalGradientColor,
		buttonIconNormalCustomGradientSwitcher,
		buttonIconNormalCustomGradientInputValue,
		buttonIconHoverBackgroundType,
		buttonIconBgHoverColor,
		buttonIconHoverGradientColor,
		buttonIconHoverCustomGradientSwitcher,
		buttonIconHoverCustomGradientInputValue,
		/** End Background */

		buttonIconBorder,
		buttonIconBorderColorSwitcher,
		buttonIconBorderColor,
		buttonIconBorderHoverColor,
		buttonIconBorderUnits,
		buttonIconBorderDesktop,
		buttonIconBorderTablet,
		buttonIconBorderMobile,
		buttonIconBorderLink,
		buttonIconBorderRadiusUnits,
		buttonIconBorderRadiusDesktop,
		buttonIconBorderRadiusTablet,
		buttonIconBorderRadiusMobile,
		buttonIconBorderRadiusLink,

		/** Start Icon Padding */
		buttonIconPaddingUnits,
		buttonIconPaddingDesktop,
		buttonIconPaddingTablet,
		buttonIconPaddingMobile,
		buttonIconPaddingLink,
		/** End Icon Padding */

		/** Start Icon margin */
		buttonIconMarginUnits,
		buttonIconMarginDesktop,
		buttonIconMarginTablet,
		buttonIconMarginMobile,
		buttonIconMarginLink,
		/** End Icon Margin */


		buttonIconGapSize,
		buttonIconGapUnits,
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,
		buttonImageRotateSwitcher,
		buttonImageRotate,
		buttonImageRotateHover,


		/** Start Global Setting */
		buttonGlobalZIndex,
		advancedBtnOverflow,
		buttonGlobalPaddingUnits,
		buttonGlobalPaddingDesktop,
		buttonGlobalPaddingTablet,
		buttonGlobalPaddingMobile,
		buttonGlobalPaddingLink,

		buttonGlobalMarginUnits,
		buttonGlobalMarginDesktop,
		buttonGlobalMarginTablet,
		buttonGlobalMarginMobile,
		buttonGlobalMarginLink,

		/** Start Background */
		buttonGlobalBgColorSwitcher,
		buttonGlobalNormalBackgroundType,
		buttonGlobalNormalClassicColor,
		buttonGlobalNormalGradientColor,
		buttonGlobalNormalCustomGradientSwitcher,
		buttonGlobalNormalCustomGradientInputValue,

		buttonGlobalHoverBackgroundType,
		buttonGlobalHoverClassicColor,
		buttonGlobalHoverGradientColor,
		buttonGlobalHoverCustomGradientSwitcher,
		buttonGlobalHoverCustomGradientInputValue,
		/** End Background */

		buttonGlobalBorder,
		buttonGlobalBorderColorSwitcher,
		buttonGlobalBorderColor,
		buttonGlobalBorderHoverColor,

		buttonGlobalBorderUnits,
		buttonGlobalBorderDesktop,
		buttonGlobalBorderTablet,
		buttonGlobalBorderMobile,
		buttonGlobalBorderLink,

		buttonGlobalBorderRadiusUnits,
		buttonGlobalBorderRadiusDesktop,
		buttonGlobalBorderRadiusTablet,
		buttonGlobalBorderRadiusMobile,
		buttonGlobalBorderRadiusLink,

		buttonGlobalBoxShadowSwitcher,
		buttonGlobalBoxShadowValues,
		buttonGlobalBoxShadowCssValue,
		buttonGlobalBoxShadowHoverValues,
		buttonGlobalBoxShadowHoverCssValue,
		/** End Global Setting */

		/** Start button Icon Image */
		buttonIconImageUrl,
		buttonIconImageAlt,
		buttonIconImageID,
		buttonIconImageWidth,
		buttonIconImageWidthUnits,
		buttonIconImageHeight,
		buttonIconImageHeightUnits,
		buttonIconImagedisplay,
		/** end Icon Button Image*/

		advancedBtnDesktopSwitcher,
		advancedBtnTabletSwitcher,
		advancedBtnMobileSwitcher,

		/** Start Global Setting */
		buttonGlobalWraperID,
		buttonGlobalWraperClass,
		buttonCustomCSS,
		/** End Global Setting */

		// Position
		advancedBtnPositionType,
		advancedBtnHZOrientationType,
		advancedBtnVROrientationType,
		advancedBtnHZLeftOffset,
		advancedBtnHZLeftOffsetUnits,
		advancedBtnHZRightOffset,
		advancedBtnHZRightOffsetUnits,
		advancedBtnVRTopOffset,
		advancedBtnVRTopOffsetUnits,
		advancedBtnVRBottomOffset,
		advancedBtnVRBottomOffsetUnits,

		//Transform
		buttonTransformSwitcher,
		buttonTransformNormalProportions,
		buttonTransformNormalScale,
		buttonTransformNormalScaleX,
		buttonTransformNormalScaleY,

		buttonTransformHoverProportions,
		buttonTransformHoverScale,
		buttonTransformHoverScaleX,
		buttonTransformHoverScaleY,

		//Start Dynamic Text
		dynamicTextEnabled,
		dynamicTextSource,
		dynamicTextPostId,
		dynamicTextPostType,
		dynamicTextPostLabel,
		dynamicTextField,
		dynamicFeaturedImageField,

		dynamicTextDateType,
		dynamicTextDateFormat,

		dynamicTextTimeType,
		dynamicTextTimeFormat,

		dynamicTextCommentsZeroText,
		dynamicTextCommentsOneText,
		dynamicTextCommentsManyText,

		dynamicTextTermsTaxonomy,
		dynamicTextTermsSeparator,
		dynamicTextEnableLink,
		dynamicTextLinkSource,
	} = attributes;

	const deviceType = useDeviceType();

	/**
	 * Generate SVG Icons for Icon
	 */
	useEffect(() => {
		setAttributes({
			buttonIconFrontend: generateSvgIcon(buttonIcon),
		})
	}, [buttonIcon]);

	/** Start Icon border */
	const handlebuttonIconBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonIconBorderMobile: {
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
					setAttributes({ buttonIconBorderDesktop: { ...buttonIconBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonIconBorderTablet: { ...buttonIconBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonIconBorderMobile: { ...buttonIconBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlebuttonIconBorderCombineBtn = () => {
		setAttributes({ buttonIconBorderLink: !buttonIconBorderLink });
	}

	const handlebuttonIconBorderUnitsHandler = (unit) => {
		setAttributes({
			buttonIconBorderUnits: {
				...buttonIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Icon border */
	/** End Border */

	/** Start Icon border radius*/
	const handlebuttonIconBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonIconBorderRadiusMobile: {
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
					setAttributes({ buttonIconBorderRadiusDesktop: { ...buttonIconBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonIconBorderRadiusTablet: { ...buttonIconBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonIconBorderRadiusMobile: { ...buttonIconBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlebuttonIconBorderRadiusCombineBtn = () => {
		setAttributes({ buttonIconBorderRadiusLink: !buttonIconBorderRadiusLink });
	}

	const handlebuttonIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			buttonIconBorderRadiusUnits: {
				...buttonIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */
	/** End Icon Border Radius */
	/** End Border Radius */

	/** Start Icon padding*/
	const handlebuttonIconPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonIconPaddingMobile: {
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
					setAttributes({ buttonIconPaddingDesktop: { ...buttonIconPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonIconPaddingTablet: { ...buttonIconPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonIconPaddingMobile: { ...buttonIconPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlebuttonIconPaddingCombineBtn = () => {
		setAttributes({ buttonIconPaddingLink: !buttonIconPaddingLink });
	}

	const handlebuttonIconPaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonIconPaddingUnits: {
				...buttonIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global padding */
	/** End Icon Padding */
	/** End Padding */

	/** Start Icon Margin*/
	const handlebuttonIconMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonIconMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonIconMarginMobile: {
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
					setAttributes({ buttonIconMarginDesktop: { ...buttonIconMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonIconMarginTablet: { ...buttonIconMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonIconMarginMobile: { ...buttonIconMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handlebuttonIconMarginCombineBtn = () => {
		setAttributes({ buttonIconMarginLink: !buttonIconMarginLink });
	}

	const handlebuttonIconMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonIconMarginUnits: {
				...buttonIconMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global Margin */
	/** End Icon Margin */
	/** End Margin */


	/** Start padding */
	const handlePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobilePadding: {
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
					setAttributes({ buttonDesktopPadding: { ...buttonDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonTabPadding: { ...buttonTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonMobilePadding: { ...buttonMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handlePaddingCombineBtn = () => {
		setAttributes({ buttonPaddingLink: !buttonPaddingLink });
	}

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end padding */
	/** Default padding for each device */
	/** End Padding */

	/** Start Margin */
	const handleMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileMargin: {
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
					setAttributes({ buttonDesktopMargin: { ...buttonDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonTabMargin: { ...buttonTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonMobileMargin: { ...buttonMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleMarginCombineBtn = () => {
		setAttributes({ buttonMarginLink: !buttonMarginLink });
	}

	const handleMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonMarginUnits: {
				...buttonMarginUnits,
				[deviceType]: unit
			}
		});
	}
	/** Default margin for each device */
	/** End margin */

	/** Start border width */
	const handleBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderWidth: {
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
					setAttributes({
						buttonDesktopBorderWidth: {
							...buttonDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderWidth: {
							...buttonTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderWidth: {
							...buttonMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderLinkToggle = () => {
		setAttributes({ buttonBorderLink: !buttonBorderLink });
	};

	const handleBorderUnitsChange = (unit) => {
		setAttributes({
			buttonBorderUnits: {
				...buttonBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */
	/** Default border width for different devices */
	/** End border width */

	/** Start border radius */
	const handleBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (buttonBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderRadiusWidth: {
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
					setAttributes({
						buttonDesktopBorderRadiusWidth: {
							...buttonDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonTabBorderRadiusWidth: {
							...buttonTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonMobileBorderRadiusWidth: {
							...buttonMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleBorderRadiusLinkToggle = () => {
		setAttributes({ buttonBorderRadiusLink: !buttonBorderRadiusLink });
	};

	const handleBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			buttonBorderRadiusUnits: {
				...buttonBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */
	/** Default border radius for different devices */
	/** End Border Radius */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonGlobalPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonGlobalPaddingMobile: {
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
					setAttributes({ buttonGlobalPaddingDesktop: { ...buttonGlobalPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonGlobalPaddingTablet: { ...buttonGlobalPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonGlobalPaddingMobile: { ...buttonGlobalPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ buttonGlobalPaddingLink: !buttonGlobalPaddingLink });
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			buttonGlobalPaddingUnits: {
				...buttonGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonGlobalMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonGlobalMarginMobile: {
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
					setAttributes({ buttonGlobalMarginDesktop: { ...buttonGlobalMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonGlobalMarginTablet: { ...buttonGlobalMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonGlobalMarginMobile: { ...buttonGlobalMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ buttonGlobalMarginLink: !buttonGlobalMarginLink });
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			buttonGlobalMarginUnits: {
				...buttonGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonGlobalBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonGlobalBorderMobile: {
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
					setAttributes({ buttonGlobalBorderDesktop: { ...buttonGlobalBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonGlobalBorderTablet: { ...buttonGlobalBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonGlobalBorderMobile: { ...buttonGlobalBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ buttonGlobalBorderLink: !buttonGlobalBorderLink });
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			buttonGlobalBorderUnits: {
				...buttonGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (buttonGlobalBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						buttonGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						buttonGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						buttonGlobalBorderRadiusMobile: {
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
					setAttributes({ buttonGlobalBorderRadiusDesktop: { ...buttonGlobalBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ buttonGlobalBorderRadiusTablet: { ...buttonGlobalBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ buttonGlobalBorderRadiusMobile: { ...buttonGlobalBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ buttonGlobalBorderRadiusLink: !buttonGlobalBorderRadiusLink });
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			buttonGlobalBorderRadiusUnits: {
				...buttonGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */
	/** End Global Border Radius */
	/** End Border Radius */

	/** Start Icon Handler */
	const iconHandler = (IconName) => {
		setAttributes({ buttonIcon: IconName })
	}
	/** End Icon Handler */

	// Check if Pro is active
	const getProActiveState = getProActive();
	useEffect(() => {
		if (!getProActiveState) {
			setAttributes({
				dynamicTextEnabled: false,
				dynamicTextEnableLink: false,
			});
		}
	}, [getProActiveState]);

	/**
	 * Toggle Controls for Dynamic Content
	 */
	const dynamicContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-advanced-button-dynamic-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicTextEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'advanced-button-dynamic-content',
		isProActive: getProActiveState
	});

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-advanced-button-wrapper">
				<PanelBody
					title={__("Button", "frontis-blocks")}
					initialOpen={true}
				>
					<BaseControl label={__("Preset Style", "frontis-blocks")}>
						<FB_Presets
							className="fb-advanced-button-presets"
							label={__('Select Preset', 'frontis-blocks')}
							presets={advancedButtonPresets}
							value={buttonPresetStyle}
							onChangeValue='buttonPresetStyle'
							defaultPresetValue="preset-1"
							setAttributes={setAttributes}
						/>
					</BaseControl>

					<BaseControl
						label={__("Alignment", "frontis-blocks")}
						id="fb-setting-text-alignment"
						className="fb-setting-text-alignment"
					>
						<ButtonGroup
							className="fb-setting-text-alignment-group-btn"
						>
							{TEXT_ALIGN_JUSTIFY.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({ buttonAlignment: item.value })}
									className={`fb-setting-text-alignment-single-btn ${buttonAlignment === item.value ? 'active' : ''}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<ToggleControl
						label={__("Show Text", "frontis-blocks")}
						checked={buttonTextSwitcher}
						onChange={(value) => setAttributes({ buttonTextSwitcher: value })}
					/>

					{dynamicContentToggleControls.map((control, index) => (
						<div key={control.key || index}>{control.comp}</div>
					))}

					<DynamicDataSourceControl
						enabled={dynamicTextEnabled}

						source={dynamicTextSource}
						setSource={(value) => setAttributes({ dynamicTextSource: value })}
						postId={dynamicTextPostId}
						setPostId={(value) => setAttributes({ dynamicTextPostId: value })}
						postType={dynamicTextPostType}
						setPostType={(value) => setAttributes({ dynamicTextPostType: value })}
						postLabel={dynamicTextPostLabel}
						setPostLabel={(value) => setAttributes({ dynamicTextPostLabel: value })}

						field={dynamicTextField}
						setField={(value) => setAttributes({ dynamicTextField: value })}
						featuredImageField={dynamicFeaturedImageField}
						setFeaturedImageField={(value) => setAttributes({ dynamicFeaturedImageField: value })}

						dateType={dynamicTextDateType}
						setDateType={(value) => setAttributes({ dynamicTextDateType: value })}
						dateFormat={dynamicTextDateFormat}
						setDateFormat={(value) => setAttributes({ dynamicTextDateFormat: value })}
						timeType={dynamicTextTimeType}
						setTimeType={(value) => setAttributes({ dynamicTextTimeType: value })}
						timeFormat={dynamicTextTimeFormat}
						setTimeFormat={(value) => setAttributes({ dynamicTextTimeFormat: value })}

						commentsZeroText={dynamicTextCommentsZeroText}
						setCommentsZeroText={(value) => setAttributes({ dynamicTextCommentsZeroText: value })}
						commentsOneText={dynamicTextCommentsOneText}
						setCommentsOneText={(value) => setAttributes({ dynamicTextCommentsOneText: value })}
						commentsManyText={dynamicTextCommentsManyText}
						setCommentsManyText={(value) => setAttributes({ dynamicTextCommentsManyText: value })}

						termsTaxonomy={dynamicTextTermsTaxonomy}
						setTermsTaxonomy={(value) => setAttributes({ dynamicTextTermsTaxonomy: value })}
						termsSeparator={dynamicTextTermsSeparator}
						setTermsSeparator={(value) => setAttributes({ dynamicTextTermsSeparator: value })}
					/>

					{dynamicTextEnabled && (
						<DynamicDataLinkControl
							enableLink={dynamicTextEnableLink}
							setEnableLink={(value) => setAttributes({ dynamicTextEnableLink: value })}
							linkSource={dynamicTextLinkSource}
							setLinkSource={(value) => setAttributes({ dynamicTextLinkSource: value })}
						/>
					)}

					{buttonTextSwitcher && !dynamicTextEnabled && (
						<TextControl
							label={__("Text", "frontis-blocks")}
							value={buttonText}
							onChange={(value) => setAttributes({ buttonText: value })}
							className="fb-advanced-button-text"
						/>
					)}

					{!dynamicTextEnableLink && (
						<FB_UrlControl
							url={buttonUrl}
							onChangeUrl={(value) => setAttributes({ buttonUrl: value })}
							openInNewTab={buttonTargetUrl}
							onChangeOpenInNewTab={(value) => setAttributes({ buttonTargetUrl: value })}
						/>
					)}

					<div className='fb-advanced-btn-icon-wrapper'>
						<BaseControl
							label={__("Icon", "frontis-blocks")}
							id="fb-setting-text-alignment"
							className="fb-setting-text-alignment"
						>
							<ButtonGroup
								className="fb-setting-text-alignment-group-btn"
							>
								{ICON_TEXT_ALIGN.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ buttonIconAlign: item.value })}
										className={`fb-setting-text-alignment-single-btn ${buttonIconAlign === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
							{(buttonIconAlign === 'icon-text') && (
								<FBIconPicker value={buttonIcon} setIconHandler={iconHandler} />
							)}

							{(buttonIconAlign === 'image') && (
								<FB_ImageControl
									globalImageUrl={buttonIconImageUrl}
									setglobalImageUrl={(value) => setAttributes({ buttonIconImageUrl: value })}
									globalImageAlt={buttonIconImageAlt}
									setglobalImageAlt={(value) => setAttributes({ buttonIconImageAlt: value })}
									globalImageID={buttonIconImageID}
									setglobalImageID={(value) => setAttributes({ buttonIconImageID: value })}
									globalImageSize={buttonIconImagedisplay}
									setglobalImageSize={(value) => setAttributes({ buttonIconImagedisplay: value })}
								/>
							)}

						</BaseControl>
					</div>
				</PanelBody>
			</div>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			{buttonTextSwitcher && (
				<PanelBody
					title={__("Text Styles", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_Range
						min={1}
						max={buttonWidthUnits === '%' ? 100 : 1000}
						label={__("Width", "frontis-blocks")}
						rangeValue={buttonWidth}
						onChangeHandler={(value) => setAttributes({ buttonWidth: value })}
						rangeUnitHandler={(value) => setAttributes({ buttonWidthUnits: value })}
						deviceType={deviceType}
						units={buttonWidthUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

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

					<FB_BackgroundColorControl
						label={__("Text Color", "frontis-blocks")}
						bgColorSwitcher={buttonColorSwitcher}
						setBgColorSwitcher={(value) => setAttributes({ buttonColorSwitcher: value })}

						normalLabel={__("Text Color Type", "frontis-blocks")}
						normalBackgroundType={buttonTextColorType}
						setNormalBackgroundType={(value) => setAttributes({ buttonTextColorType: value })}
						normalClassicColor={buttonColor}
						setNormalClassicColor={(value) => setAttributes({ buttonColor: value === undefined ? '' : value })}
						normalGradientColor={buttonTextGradientColor}
						setNormalGradientColor={(value) => setAttributes({ buttonTextGradientColor: value === undefined ? null : value })}
						normalCustomGradientSwitcher={buttonTextCustomGradientColorSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ buttonTextCustomGradientColorSwitcher: value })}
						normalCustomGradientInputValue={buttonTextCustomGradientColor}
						setNormalCustomGradientInputValue={(value) => setAttributes({ buttonTextCustomGradientColor: value === undefined ? null : value })}

						hoverLabel={__("Text Hover Color", "frontis-blocks")}
						hoverBackgroundType={buttonTextHoverColorType}
						setHoverBackgroundType={(value) => setAttributes({ buttonTextHoverColorType: value })}
						hoverClassicColor={buttonHoverColor}
						setHoverClassicColor={(value) => setAttributes({ buttonHoverColor: value === undefined ? '' : value })}
						hoverGradientColor={buttonTextHoverGradientColor}
						setHoverGradientColor={(value) => setAttributes({ buttonTextHoverGradientColor: value === undefined ? null : value })}
						hoverCustomGradientSwitcher={buttonTextHoverCustomGradientColorSwitcher}
						setHoverCustomGradientSwitcher={(value) => setAttributes({ buttonTextHoverCustomGradientColorSwitcher: value })}
						hoverCustomGradientInputValue={buttonTextHoverCustomGradientColor}
						setHoverCustomGradientInputValue={(value) => setAttributes({ buttonTextHoverCustomGradientColor: value === undefined ? null : value })}

						isBackgroundImage={false}
					/>

					<FB_BackgroundColorControl
						label={__("Background Color", "frontis-blocks")}
						bgColorSwitcher={buttonBgColorSwitcher}
						setBgColorSwitcher={(value) => setAttributes({ buttonBgColorSwitcher: value })}

						normalBackgroundType={buttonNormalBackgroundType}
						setNormalBackgroundType={(value) => setAttributes({ buttonNormalBackgroundType: value })}
						normalClassicColor={buttonBgColor}
						setNormalClassicColor={(value) => setAttributes({ buttonBgColor: value === undefined ? '' : value })}
						normalGradientColor={buttonNormalGradientColor}
						setNormalGradientColor={(value) => setAttributes({ buttonNormalGradientColor: value === undefined ? null : value })}
						normalCustomGradientSwitcher={buttonNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ buttonNormalCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={buttonNormalCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ buttonNormalCustomGradientInputValue: value })}

						hoverBackgroundType={buttonHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ buttonHoverBackgroundType: value })}
						hoverClassicColor={buttonBgHoverColor}
						setHoverClassicColor={(value) => setAttributes({ buttonBgHoverColor: value === undefined ? '' : value })}
						hoverGradientColor={buttonHoverGradientColor}
						setHoverGradientColor={(value) => setAttributes({ buttonHoverGradientColor: value === undefined ? null : value })}
						hoverCustomGradientSwitcher={buttonHoverCustomGradientSwitcher}
						setHoverCustomGradientSwitcher={(value) => setAttributes({ buttonHoverCustomGradientSwitcher: value })}
						hoverCustomGradientInputValue={buttonHoverCustomGradientInputValue}
						setHoverCustomGradientInputValue={(value) => setAttributes({ buttonHoverCustomGradientInputValue: value })}

						isBackgroundImage={false}

					/>

				</PanelBody>
			)}
			<PanelBody title="Padding and Margin" initialOpen={false}>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handlePaddingUnitsHandler}
					spacingUnits={buttonPaddingUnits}
					spacingDesktop={buttonDesktopPadding}
					spacingTablet={buttonTabPadding}
					spacingMobile={buttonMobilePadding}
					handleSpacingUnitHandler={handlePaddingUnitChange}
					spacingCombineBtn={buttonPaddingLink}
					spacingCombineBtnHandler={handlePaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleMarginUnitsHandler}
					spacingUnits={buttonMarginUnits}
					spacingDesktop={buttonDesktopMargin}
					spacingTablet={buttonTabMargin}
					spacingMobile={buttonMobileMargin}
					handleSpacingUnitHandler={handleMarginUnitChange}
					spacingCombineBtn={buttonMarginLink}
					spacingCombineBtnHandler={handleMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
			<PanelBody
				title={__("Border and Shadow", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-border-setting-wrapper"
			>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={buttonBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ buttonBorder: value })}
				/>


				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={buttonBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
				/>

				{buttonBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={buttonBorderColor}
						setGlobalColor={(value) => setAttributes({ buttonBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{buttonBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={buttonBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ buttonBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBorderUnitsChange}
					spacingUnits={buttonBorderUnits}
					spacingDesktop={buttonDesktopBorderWidth}
					spacingTablet={buttonTabBorderWidth}
					spacingMobile={buttonMobileBorderWidth}
					handleSpacingUnitHandler={handleBorderWidthChange}
					spacingCombineBtn={buttonBorderLink}
					spacingCombineBtnHandler={handleBorderLinkToggle}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleBorderRadiusUnitsChange}
					spacingUnits={buttonBorderRadiusUnits}
					spacingDesktop={buttonDesktopBorderRadiusWidth}
					spacingTablet={buttonTabBorderRadiusWidth}
					spacingMobile={buttonMobileBorderRadiusWidth}
					handleSpacingUnitHandler={handleBorderRadiusChange}
					spacingCombineBtn={buttonBorderRadiusLink}
					spacingCombineBtnHandler={handleBorderRadiusLinkToggle}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={buttonBoxShadowSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ buttonBoxShadowSwitcher: value })}
				/>

				{buttonBoxShadowSwitcher === 'normal' && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ buttonBoxShadowValues: value })}
						initialShadowValue={buttonBoxShadowValues}
						onBoxShadowStyleChange={(value) => setAttributes({ buttonBoxShadowCssValue: value })}
					/>
				)}

				{buttonBoxShadowSwitcher === 'hover' && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ buttonBoxShadowHoverValues: value })}
						initialShadowValue={buttonBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) => setAttributes({ buttonBoxShadowHoverCssValue: value })}
					/>
				)}
			</PanelBody>

			{(buttonIconAlign === 'icon-text') && (
				<PanelBody
					title={__("Icon Styles", "frontis-blocks")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Icon Position", "frontis-blocks")}
						value={buttonIconPosition}
						options={ICON_POSITION}
						onChange={(value) => setAttributes({ buttonIconPosition: value })}
					/>
					<FB_Range
						min={1}
						max={100}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={buttonIconSize}
						onChangeHandler={(value) => setAttributes({ buttonIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ buttonIconSizeUnits: value })}
						deviceType={deviceType}
						units={buttonIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={25}
					/>

					<FB_SwitcherControl
						label={__("Icon Color", "frontis-blocks")}
						globalSwitcher={buttonIconColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ buttonIconColorSwitcher: value })}
					/>

					{buttonIconColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={buttonIconColor}
							setGlobalColor={(value) => setAttributes({ buttonIconColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonIconColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonIconHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonIconHoverColor: value === undefined ? '' : value })}
						/>
					)}


					<FB_BackgroundColorControl
						label={__("Background Color", "frontis-blocks")}
						bgColorSwitcher={buttonIconBgColorSwitcher}
						setBgColorSwitcher={(value) => setAttributes({ buttonIconBgColorSwitcher: value })}

						normalBackgroundType={buttonIconNormalBackgroundType}
						setNormalBackgroundType={(value) => setAttributes({ buttonIconNormalBackgroundType: value })}
						normalClassicColor={buttonIconBgColor}
						setNormalClassicColor={(value) => setAttributes({ buttonIconBgColor: value === undefined ? '' : value })}
						normalGradientColor={buttonIconNormalGradientColor}
						setNormalGradientColor={(value) => setAttributes({ buttonIconNormalGradientColor: value === undefined ? null : value })}
						normalCustomGradientSwitcher={buttonIconNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ buttonIconNormalCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={buttonIconNormalCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ buttonIconNormalCustomGradientInputValue: value })}

						hoverBackgroundType={buttonIconHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ buttonIconHoverBackgroundType: value })}
						hoverClassicColor={buttonIconBgHoverColor}
						setHoverClassicColor={(value) => setAttributes({ buttonIconBgHoverColor: value === undefined ? '' : value })}
						hoverGradientColor={buttonIconHoverGradientColor}
						setHoverGradientColor={(value) => setAttributes({ buttonIconHoverGradientColor: value === undefined ? null : value })}
						hoverCustomGradientSwitcher={buttonIconHoverCustomGradientSwitcher}
						setHoverCustomGradientSwitcher={(value) => setAttributes({ buttonIconHoverCustomGradientSwitcher: value })}
						hoverCustomGradientInputValue={buttonIconHoverCustomGradientInputValue}
						setHoverCustomGradientInputValue={(value) => setAttributes({ buttonIconHoverCustomGradientInputValue: value })}

						isBackgroundImage={false}

					/>

					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={buttonIconBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ buttonIconBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={buttonIconBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ buttonIconBorderColorSwitcher: value })}
					/>

					{buttonIconBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={buttonIconBorderColor}
							setGlobalColor={(value) => setAttributes({ buttonIconBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonIconBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonIconBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonIconBorderHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlebuttonIconBorderUnitsHandler}
						spacingUnits={buttonIconBorderUnits}
						spacingDesktop={buttonIconBorderDesktop}
						spacingTablet={buttonIconBorderTablet}
						spacingMobile={buttonIconBorderMobile}
						handleSpacingUnitHandler={handlebuttonIconBorderUnitChange}
						spacingCombineBtn={buttonIconBorderLink}
						spacingCombineBtnHandler={handlebuttonIconBorderCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlebuttonIconBorderRadiusUnitsHandler}
						spacingUnits={buttonIconBorderRadiusUnits}
						spacingDesktop={buttonIconBorderRadiusDesktop}
						spacingTablet={buttonIconBorderRadiusTablet}
						spacingMobile={buttonIconBorderRadiusMobile}
						handleSpacingUnitHandler={handlebuttonIconBorderRadiusUnitChange}
						spacingCombineBtn={buttonIconBorderRadiusLink}
						spacingCombineBtnHandler={handlebuttonIconBorderRadiusCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlebuttonIconPaddingUnitsHandler}
						spacingUnits={buttonIconPaddingUnits}
						spacingDesktop={buttonIconPaddingDesktop}
						spacingTablet={buttonIconPaddingTablet}
						spacingMobile={buttonIconPaddingMobile}
						handleSpacingUnitHandler={handlebuttonIconPaddingUnitChange}
						spacingCombineBtn={buttonIconPaddingLink}
						spacingCombineBtnHandler={handlebuttonIconPaddingCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlebuttonIconMarginUnitsHandler}
						spacingUnits={buttonIconMarginUnits}
						spacingDesktop={buttonIconMarginDesktop}
						spacingTablet={buttonIconMarginTablet}
						spacingMobile={buttonIconMarginMobile}
						handleSpacingUnitHandler={handlebuttonIconMarginUnitChange}
						spacingCombineBtn={buttonIconMarginLink}
						spacingCombineBtnHandler={handlebuttonIconMarginCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_Range
						min={0}
						max={100}
						label={__("Icon Gap", "frontis-blocks")}
						rangeValue={buttonIconGapSize}
						onChangeHandler={(value) => setAttributes({ buttonIconGapSize: value })}
						rangeUnitHandler={(value) => setAttributes({ buttonIconGapUnits: value })}
						deviceType={deviceType}
						units={buttonIconGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={''}
					/>

					<FB_SwitcherControl
						label={__("Icon Rotation", "frontis-blocks")}
						globalSwitcher={buttonIconRotateSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ buttonIconRotateSwitcher: value })}
					/>

					{buttonIconRotateSwitcher === 'normal' && (
						<FB_Range
							min={-360}
							max={360}
							label={__("Icon Rotation", "frontis-blocks")}
							rangeValue={buttonIconRotate}
							onChangeHandler={(value) => setAttributes({ buttonIconRotate: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>
					)}

					{buttonIconRotateSwitcher === 'hover' && (
						<FB_Range
							min={-360}
							max={360}
							label={__("Icon Rotation", "frontis-blocks")}
							rangeValue={buttonIconRotateHover}
							onChangeHandler={(value) => setAttributes({ buttonIconRotateHover: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>
					)}

				</PanelBody>
			)}
			{(buttonIconAlign === 'image') && (
				<PanelBody
					title={__("Image Styles", "frontis-blocks")}
					initialOpen={false}
				>
					<SelectControl
						label={__("Image Position", "frontis-blocks")}
						value={buttonIconPosition}
						options={ICON_POSITION}
						onChange={(value) => setAttributes({ buttonIconPosition: value })}
					/>
					<FB_Range
						min={1}
						max={100}
						label={__("Image Width", "frontis-blocks")}
						rangeValue={buttonIconImageWidth}
						onChangeHandler={(value) => setAttributes({ buttonIconImageWidth: value })}
						rangeUnitHandler={(value) => setAttributes({ buttonIconImageWidthUnits: value })}
						deviceType={deviceType}
						units={buttonIconImageWidthUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>

					<FB_Range
						min={1}
						max={100}
						label={__("Image Height", "frontis-blocks")}
						rangeValue={buttonIconImageHeight}
						onChangeHandler={(value) => setAttributes({ buttonIconImageHeight: value })}
						rangeUnitHandler={(value) => setAttributes({ buttonIconImageHeightUnits: value })}
						deviceType={deviceType}
						units={buttonIconImageHeightUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={20}
					/>

					<FB_Range
						min={0}
						max={100}
						label={__("Image Gap", "frontis-blocks")}
						rangeValue={buttonIconGapSize}
						onChangeHandler={(value) => setAttributes({ buttonIconGapSize: value })}
						rangeUnitHandler={(value) => setAttributes({ buttonIconGapUnits: value })}
						deviceType={deviceType}
						units={buttonIconGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={''}
					/>


					<FB_SwitcherControl
						label={__("Image Rotation", "frontis-blocks")}
						globalSwitcher={buttonImageRotateSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ buttonImageRotateSwitcher: value })}
					/>

					{buttonImageRotateSwitcher === 'normal' && (
						<FB_Range
							min={-360}
							max={360}
							label={__("Image Rotation", "frontis-blocks")}
							rangeValue={buttonImageRotate}
							onChangeHandler={(value) => setAttributes({ buttonImageRotate: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>
					)}

					{buttonImageRotateSwitcher === 'hover' && (
						<FB_Range
							min={-360}
							max={360}
							label={__("Image Rotation", "frontis-blocks")}
							rangeValue={buttonImageRotateHover}
							onChangeHandler={(value) => setAttributes({ buttonImageRotateHover: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>
					)}
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
						className='fb-setting-layout-header'
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={buttonGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ buttonGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={advancedBtnOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ advancedBtnOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={advancedBtnPositionType}
							setPositionType={(value) => setAttributes({ advancedBtnPositionType: value })}

							HZOrientationType={advancedBtnHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ advancedBtnHZOrientationType: value })
							}
							VROrientationType={advancedBtnVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ advancedBtnVROrientationType: value })
							}

							HZLeftOffset={advancedBtnHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ advancedBtnHZLeftOffset: value })}
							HZLeftOffsetUnits={advancedBtnHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ advancedBtnHZLeftOffsetUnits: value })}
							HZRightOffset={advancedBtnHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ advancedBtnHZRightOffset: value })}
							HZRightOffsetUnits={advancedBtnHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ advancedBtnHZRightOffsetUnits: value })}

							VRTopOffset={advancedBtnVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ advancedBtnVRTopOffset: value })}
							VRTopOffsetUnits={advancedBtnVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ advancedBtnVRTopOffsetUnits: value })}
							VRBottomOffset={advancedBtnVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ advancedBtnVRBottomOffset: value })}
							VRBottomOffsetUnits={advancedBtnVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ advancedBtnVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={buttonGlobalWraperID}
							onChangeValue={(value) => setAttributes({ buttonGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={buttonGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ buttonGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={buttonGlobalPaddingUnits}
							spacingDesktop={buttonGlobalPaddingDesktop}
							spacingTablet={buttonGlobalPaddingTablet}
							spacingMobile={buttonGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={buttonGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={buttonGlobalMarginUnits}
							spacingDesktop={buttonGlobalMarginDesktop}
							spacingTablet={buttonGlobalMarginTablet}
							spacingMobile={buttonGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={buttonGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false} >

						<FB_BackgroundColorControl
							label={__("Background Color", "frontis-blocks")}
							bgColorSwitcher={buttonGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) => setAttributes({ buttonGlobalBgColorSwitcher: value })}

							normalBackgroundType={buttonGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) => setAttributes({ buttonGlobalNormalBackgroundType: value })}
							normalClassicColor={buttonGlobalNormalClassicColor}
							setNormalClassicColor={(value) => setAttributes({ buttonGlobalNormalClassicColor: value === undefined ? '' : value })}
							normalGradientColor={buttonGlobalNormalGradientColor}
							setNormalGradientColor={(value) => setAttributes({ buttonGlobalNormalGradientColor: value === undefined ? null : value })}
							normalCustomGradientSwitcher={buttonGlobalNormalCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ buttonGlobalNormalCustomGradientSwitcher: value })}
							normalCustomGradientInputValue={buttonGlobalNormalCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ buttonGlobalNormalCustomGradientInputValue: value })}

							hoverBackgroundType={buttonGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ buttonGlobalHoverBackgroundType: value })}
							hoverClassicColor={buttonGlobalHoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ buttonGlobalHoverClassicColor: value === undefined ? '' : value })}
							hoverGradientColor={buttonGlobalHoverGradientColor}
							setHoverGradientColor={(value) => setAttributes({ buttonGlobalHoverGradientColor: value === undefined ? null : value })}
							hoverCustomGradientSwitcher={buttonGlobalHoverCustomGradientSwitcher}
							setHoverCustomGradientSwitcher={(value) => setAttributes({ buttonGlobalHoverCustomGradientSwitcher: value })}
							hoverCustomGradientInputValue={buttonGlobalHoverCustomGradientInputValue}
							setHoverCustomGradientInputValue={(value) => setAttributes({ buttonGlobalHoverCustomGradientInputValue: value })}

							isBackgroundImage={false}

						/>
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={buttonGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ buttonGlobalBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={buttonGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ buttonGlobalBorderColorSwitcher: value })}
						/>

						{buttonGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={buttonGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ buttonGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{buttonGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={buttonGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ buttonGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={buttonGlobalBorderUnits}
							spacingDesktop={buttonGlobalBorderDesktop}
							spacingTablet={buttonGlobalBorderTablet}
							spacingMobile={buttonGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={buttonGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={buttonGlobalBorderRadiusUnits}
							spacingDesktop={buttonGlobalBorderRadiusDesktop}
							spacingTablet={buttonGlobalBorderRadiusTablet}
							spacingMobile={buttonGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={buttonGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={buttonGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ buttonGlobalBoxShadowSwitcher: value })}
						/>

						{buttonGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ buttonGlobalBoxShadowValues: value })}
								initialShadowValue={buttonGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ buttonGlobalBoxShadowCssValue: value })}
							/>
						)}

						{buttonGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ buttonGlobalBoxShadowHoverValues: value })}
								initialShadowValue={buttonGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ buttonGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={advancedBtnDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ advancedBtnDesktopSwitcher: value })}

							tabletValue={advancedBtnTabletSwitcher}
							setTabletValue={(value) => setAttributes({ advancedBtnTabletSwitcher: value })}

							mobileValue={advancedBtnMobileSwitcher}
							setMobileValue={(value) => setAttributes({ advancedBtnMobileSwitcher: value })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Transform", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-transform-control-wrapper"
					>
						<FB_SwitcherControl
							label={__("Transform Style", "frontis-blocks")}
							globalSwitcher={buttonTransformSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ buttonTransformSwitcher: value })}
						/>

						{buttonTransformSwitcher === 'normal' && (
							<FB_ScaleControl
								proportions={buttonTransformNormalProportions}
								setProportions={(value) => setAttributes({ buttonTransformNormalProportions: value })}
								scale={buttonTransformNormalScale}
								setScale={(value) => setAttributes({ buttonTransformNormalScale: value })}
								scaleX={buttonTransformNormalScaleX}
								setScaleX={(value) => setAttributes({ buttonTransformNormalScaleX: value })}
								scaleY={buttonTransformNormalScaleY}
								setScaleY={(value) => setAttributes({ buttonTransformNormalScaleY: value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
							/>
						)}

						{buttonTransformSwitcher === 'hover' && (
							<FB_ScaleControl
								proportions={buttonTransformHoverProportions}
								setProportions={(value) => setAttributes({ buttonTransformHoverProportions: value })}
								scale={buttonTransformHoverScale}
								setScale={(value) => setAttributes({ buttonTransformHoverScale: value })}
								scaleX={buttonTransformHoverScaleX}
								setScaleX={(value) => setAttributes({ buttonTransformHoverScaleX: value })}
								scaleY={buttonTransformHoverScaleY}
								setScaleY={(value) => setAttributes({ buttonTransformHoverScaleY: value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
							/>
						)}
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={buttonCustomCSS}
							onChangeValue={(value) => setAttributes({ buttonCustomCSS: value })}
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