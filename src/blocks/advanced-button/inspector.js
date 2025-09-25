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
import { useState, useEffect, useMemo } from "@wordpress/element";
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
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_ImageControl from '@Components/image-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ScaleControl from '@Components/scale-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';
import generateSvgIcon from '@Utils/generateSvgIcon';


import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
	const {
		blockId,
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

	const deviceType= useDeviceType();

	let defaultImageUrl = [];
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = [
			FrontisBlocksData.pluginUrl + 'assets/images/search.svg',
			FrontisBlocksData.pluginUrl + 'assets/images/search-black.svg'
		];
	}	
	// Set default value for buttonIconImageUrl
	useEffect(() => {
		if (!buttonIconImageUrl) {
			setAttributes({ buttonIconImageUrl: defaultImageUrl });
		}
	}, []);

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-button-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

	/** Start Preset Style */
	const changeAdvancedButtonPreset = (selectedPreset) => {
        const presetConfigurations = {
			"preset-1": {
				buttonBgColor: "#399CFF",
				buttonBorder: "none",
				buttonBorderColor: "",
				buttonColor: "#fff",
				buttonIconImageUrl: "",
				buttonIcon: "",
				buttonIconColor: "#fff",
				buttonIconBorder: "none",
				buttonTextSwitcher: true,
				buttonText: "Add Text",
				buttonIconRotate: {
					Desktop: '0',
					Tablet: '0',
					Mobile: '0'
				},
				buttonIconPaddingDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonFontSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopBorderRadiusWidth: {
					top: "4",
					bottom: "4",
					left: "4",
					right: "4",
				},
            },
			"preset-2": {
				buttonBgColor: "#fff",
				buttonBorder: "",
				buttonBorderColor: "#C3C8D2",
				buttonColor: "#399CFF",
				buttonIconImageUrl: "",
				buttonIcon: "",
				buttonIconColor: "#399CFF",
				buttonIconBorder: "none",
				buttonTextSwitcher: true,
				buttonText: "Link Button",
				buttonIconRotate: {
					Desktop: '0',
					Tablet: '0',
					Mobile: '0'
				},
				buttonIconPaddingDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonFontSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonTabBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonMobileBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonDesktopBorderRadiusWidth: {
					top: "4",
					bottom: "4",
					left: "4",
					right: "4",
				},
            },
			"preset-3": {
				buttonBgColor: "#399CFF",
				buttonBorder: "none",
				buttonBorderColor: "",
				buttonColor: "#fff",
				buttonIcon: "",
				buttonIconColor: "#fff",
				buttonIconBgColor: "transparent",
				buttonIconAlign: "image",
				buttonIconPosition: "left",
				buttonIconBorder: "none",
				buttonIconImageUrl: defaultImageUrl[0],
				buttonTextSwitcher: true,
				buttonText: "Search",
				buttonIconRotate: {
					Desktop: '0',
					Tablet: '0',
					Mobile: '0'
				},
				buttonIconPaddingDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconPaddingDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonDesktopPadding: {
					top: "14",
					bottom: "14",
					left: "20",
					right: "20",
				},
				buttonIconImageWidth: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonIconImageHeight: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonFontSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopBorderRadiusWidth: {
					top: "4",
					bottom: "4",
					left: "4",
					right: "4",
				},
            },
			
			"preset-4": {
				buttonBgColor: "#399CFF",
				buttonBorder: "none",
				buttonBorderColor: "#C3C8D2",
				buttonColor: "#fff",
				buttonIconBgColor: "#fff",
				buttonIconColor: "#399CFF",
				buttonIcon: "arrow-left-long",
				buttonIconAlign: "icon-text",
				buttonIconPosition: "left",
				buttonIconBorder: "none",
				buttonIconImageUrl: "",
				buttonTextSwitcher: true,
				buttonText: "Style - 1",
				buttonIconRotate: {
					Desktop: '180',
					Tablet: '180',
					Mobile: '180'
				},
				buttonDesktopPadding: {
					top: "8",
					bottom: "8",
					left: "8",
					right: "16",
				},
				buttonIconPaddingDesktop: {
					top: "8",
					bottom: "8",
					left: "8",
					right: "8",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconImageWidth: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonIconBorderRadiusDesktop: {
					top: "4",
					bottom: "4",
					left: "4",
					right: "4",
				},
				buttonDesktopBorderRadiusWidth: {
					top: "8",
					bottom: "8",
					left: "8",
					right: "8",
				},
				buttonIconImageHeight: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonFontSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonTabBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonMobileBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
            },
			"preset-5": {
				buttonBgColor: "#399CFF",
				buttonBorder: "none",
				buttonBorderColor: "#C3C8D2",
				buttonColor: "#fff",
				buttonIconBgColor: "#fff",
				buttonIconColor: "#399CFF",
				buttonIcon: "arrow-left-long",
				buttonIconAlign: "icon-text",
				buttonIconPosition: "right",
				buttonIconBorder: "none",
				buttonIconImageUrl: "",
				buttonTextSwitcher: true,
				buttonText: "Style - 2",
				buttonIconRotate: {
					Desktop: '180',
					Tablet: '180',
					Mobile: '180'
				},
				buttonDesktopPadding: {
					top: "8",
					bottom: "8",
					left: "24",
					right: "8",
				},
				buttonIconPaddingDesktop: {
					top: "8",
					bottom: "8",
					left: "8",
					right: "8",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				buttonIconImageWidth: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonIconBorderRadiusDesktop: {
					top: "999",
					bottom: "999",
					left: "999",
					right: "999",
				},
				buttonDesktopBorderRadiusWidth: {
					top: "8",
					bottom: "8",
					left: "8",
					right: "8",
				},
				buttonIconImageHeight: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonFontSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonTabBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonMobileBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
            },
			"preset-6": {
				buttonBgColor: "#399CFF",
				buttonBorder: "none",
				buttonBorderColor: "#C3C8D2",
				buttonColor: "#fff",
				buttonIconBgColor: "#399CFF",
				buttonIconColor: "#fff",
				buttonIcon: "arrow-left-long",
				buttonIconAlign: "icon-text",
				buttonIconPosition: "right",
				buttonIconBorder: "solid",
				buttonIconBorderColor: "#fff",
				buttonIconRotate: {
					Desktop: '180',
					Tablet: '180',
					Mobile: '180'
				},
				buttonIconBorderDesktop: {
					top: "3",
					bottom: "3",
					left: "3",
					right: "3",
				},
				buttonIconImageUrl: "",
				buttonTextSwitcher: true,
				buttonText: "Style - 3",
				buttonIconSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopPadding: {
					top: "8",
					bottom: "8",
					left: "24",
					right: "24",
				},
				buttonIconGapSize: {
					Desktop: '13',
					Tablet: '13',
					Mobile: '13'
				},
				buttonIconPaddingDesktop: {
					top: "6",
					bottom: "6",
					left: "6",
					right: "6",
				},
				buttonIconMarginDesktop: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "-38",
				},
				buttonIconImageWidth: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonIconBorderRadiusDesktop: {
					top: "999",
					bottom: "999",
					left: "999",
					right: "999",
				},
				buttonDesktopBorderRadiusWidth: {
					top: "8",
					bottom: "8",
					left: "8",
					right: "8",
				},
				buttonIconImageHeight: {
					Desktop: '18',
					Tablet: '18',
					Mobile: '18'
				},
				buttonFontSize: {
					Desktop: '14',
					Tablet: '14',
					Mobile: '14'
				},
				buttonDesktopBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonTabBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
				buttonMobileBorderWidth:{
					top: "1",
					bottom: "1",
					left: "1",
					right: "1",
				},
            },
		}
		const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                buttonPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Advanced Button: Preset "${selectedPreset}" not found.`);
        }
	}
	/** End Preset Style */
	/**
     * Generate SVG Icons for Icon
     */
	useEffect(() => {
		setAttributes({
			buttonIconFrontend: generateSvgIcon(buttonIcon), 
		})
	}, [buttonIcon]);

    /** Start Icon border */
    const handlebuttonIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonIconBorderMobile: {
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
                    setAttributes( {buttonIconBorderDesktop: {...buttonIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonIconBorderTablet: {...buttonIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonIconBorderMobile: {...buttonIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlebuttonIconBorderCombineBtn = () => {
        setAttributes( {buttonIconBorderLink: !buttonIconBorderLink} );
    }

    const handlebuttonIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            buttonIconBorderUnits: {
                ...buttonIconBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon border */
    const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop.top}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.right}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.bottom}${buttonIconBorderUnits.Desktop} ${buttonIconBorderDesktop.left}${buttonIconBorderUnits.Desktop}`;
    const buttonIconBorderTabletWidth = `${buttonIconBorderTablet.top}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.right}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.bottom}${buttonIconBorderUnits.Tablet} ${buttonIconBorderTablet.left}${buttonIconBorderUnits.Tablet}`;
    const buttonIconBorderMobileWidth = `${buttonIconBorderMobile.top}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.right}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.bottom}${buttonIconBorderUnits.Mobile} ${buttonIconBorderMobile.left}${buttonIconBorderUnits.Mobile}`;
    /** End Border */

    /** Start Icon border radius*/
    const handlebuttonIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonIconBorderRadiusMobile: {
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
                    setAttributes( {buttonIconBorderRadiusDesktop: {...buttonIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonIconBorderRadiusTablet: {...buttonIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonIconBorderRadiusMobile: {...buttonIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlebuttonIconBorderRadiusCombineBtn = () => {
        setAttributes( {buttonIconBorderRadiusLink: !buttonIconBorderRadiusLink} );
    }

    const handlebuttonIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            buttonIconBorderRadiusUnits: {
                ...buttonIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Icon Border Radius */
    const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop.top}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.right}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.bottom}${buttonIconBorderRadiusUnits.Desktop} ${buttonIconBorderRadiusDesktop.left}${buttonIconBorderRadiusUnits.Desktop}`;
    const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet.top}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.right}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.bottom}${buttonIconBorderRadiusUnits.Tablet} ${buttonIconBorderRadiusTablet.left}${buttonIconBorderRadiusUnits.Tablet}`;
    const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile.top}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.right}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.bottom}${buttonIconBorderRadiusUnits.Mobile} ${buttonIconBorderRadiusMobile.left}${buttonIconBorderRadiusUnits.Mobile}`;
    /** End Border Radius */


	/** Start Icon padding*/
	const handlebuttonIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonIconPaddingLink ) { 
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonIconPaddingMobile: {
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
					setAttributes( {buttonIconPaddingDesktop: {...buttonIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonIconPaddingTablet: {...buttonIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonIconPaddingMobile: {...buttonIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlebuttonIconPaddingCombineBtn = () => {
		setAttributes( {buttonIconPaddingLink: !buttonIconPaddingLink} );
	}

	const handlebuttonIconPaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonIconPaddingUnits: {
				...buttonIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global padding */

	/** End Icon Padding */
	const buttonIconPaddingDesktopWidth = `${buttonIconPaddingDesktop.top}${buttonIconPaddingUnits.Desktop} ${buttonIconPaddingDesktop.right}${buttonIconPaddingUnits.Desktop} ${buttonIconPaddingDesktop.bottom}${buttonIconPaddingUnits.Desktop} ${buttonIconPaddingDesktop.left}${buttonIconPaddingUnits.Desktop}`;
	const buttonIconPaddingTabletWidth = `${buttonIconPaddingTablet.top}${buttonIconPaddingUnits.Tablet} ${buttonIconPaddingTablet.right}${buttonIconPaddingUnits.Tablet} ${buttonIconPaddingTablet.bottom}${buttonIconPaddingUnits.Tablet} ${buttonIconPaddingTablet.left}${buttonIconPaddingUnits.Tablet}`;
	const buttonIconPaddingMobileWidth = `${buttonIconPaddingMobile.top}${buttonIconPaddingUnits.Mobile} ${buttonIconPaddingMobile.right}${buttonIconPaddingUnits.Mobile} ${buttonIconPaddingMobile.bottom}${buttonIconPaddingUnits.Mobile} ${buttonIconPaddingMobile.left}${buttonIconPaddingUnits.Mobile}`;
	/** End Padding */
	
	/** Start Icon Margin*/
	const handlebuttonIconMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonIconMarginLink ) { 
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonIconMarginMobile: {
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
					setAttributes( {buttonIconMarginDesktop: {...buttonIconMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonIconMarginTablet: {...buttonIconMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonIconMarginMobile: {...buttonIconMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handlebuttonIconMarginCombineBtn = () => {
		setAttributes( {buttonIconMarginLink: !buttonIconMarginLink} );
	}

	const handlebuttonIconMarginUnitsHandler = (unit) => {
		setAttributes( {
			buttonIconMarginUnits: {
				...buttonIconMarginUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global Margin */

	/** End Icon Margin */
	const buttonIconMarginDesktopWidth = `${buttonIconMarginDesktop.top}${buttonIconMarginUnits.Desktop} ${buttonIconMarginDesktop.right}${buttonIconMarginUnits.Desktop} ${buttonIconMarginDesktop.bottom}${buttonIconMarginUnits.Desktop} ${buttonIconMarginDesktop.left}${buttonIconMarginUnits.Desktop}`;
	const buttonIconMarginTabletWidth = `${buttonIconMarginTablet.top}${buttonIconMarginUnits.Tablet} ${buttonIconMarginTablet.right}${buttonIconMarginUnits.Tablet} ${buttonIconPaddingTablet.bottom}${buttonIconMarginUnits.Tablet} ${buttonIconMarginTablet.left}${buttonIconMarginUnits.Tablet}`;
	const buttonIconMarginMobileWidth = `${buttonIconMarginMobile.top}${buttonIconMarginUnits.Mobile} ${buttonIconMarginMobile.right}${buttonIconMarginUnits.Mobile} ${buttonIconMarginMobile.bottom}${buttonIconMarginUnits.Mobile} ${buttonIconPaddingMobile.left}${buttonIconMarginUnits.Mobile}`;
	/** End Margin */


    /** Start padding */
    const handlePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( buttonPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        buttonDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        buttonTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        buttonMobilePadding: {
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
                    setAttributes( {buttonDesktopPadding: {...buttonDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {buttonTabPadding: {...buttonTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {buttonMobilePadding: {...buttonMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

	const handlePaddingCombineBtn = () => {
		setAttributes( {buttonPaddingLink: !buttonPaddingLink} );
	}

	const handlePaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonPaddingUnits: {
				...buttonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end padding */

	/** Default padding for each device */
	const buttonDesktopPaddingStr = `${buttonDesktopPadding.top}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.right}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.bottom}${buttonPaddingUnits.Desktop} ${buttonDesktopPadding.left}${buttonPaddingUnits.Desktop}`;
	const buttonTabletPaddingStr = `${buttonTabPadding.top}${buttonPaddingUnits.Tablet} ${buttonTabPadding.right}${buttonPaddingUnits.Tablet} ${buttonTabPadding.bottom}${buttonPaddingUnits.Tablet} ${buttonTabPadding.left}${buttonPaddingUnits.Tablet}`;
	const buttonMobilePaddingStr = `${buttonMobilePadding.top}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.right}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.bottom}${buttonPaddingUnits.Mobile} ${buttonMobilePadding.left}${buttonPaddingUnits.Mobile}`;
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
	const buttonDesktopMarginStr = `${buttonDesktopMargin.top}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.right}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.bottom}${buttonMarginUnits.Desktop} ${buttonDesktopMargin.left}${buttonMarginUnits.Desktop}`;
	const buttonTabletMarginStr = `${buttonTabMargin.top}${buttonMarginUnits.Tablet} ${buttonTabMargin.right}${buttonMarginUnits.Tablet} ${buttonTabMargin.bottom}${buttonMarginUnits.Tablet} ${buttonTabMargin.left}${buttonMarginUnits.Tablet}`;
	const buttonMobileMarginStr = `${buttonMobileMargin.top}${buttonMarginUnits.Mobile} ${buttonMobileMargin.right}${buttonMarginUnits.Mobile} ${buttonMobileMargin.bottom}${buttonMarginUnits.Mobile} ${buttonMobileMargin.left}${buttonMarginUnits.Mobile}`;
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
	const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth.top}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.right}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.bottom}${buttonBorderUnits.Desktop} ${buttonDesktopBorderWidth.left}${buttonBorderUnits.Desktop}`;
	const buttonTabletBorderWidthStr = `${buttonTabBorderWidth.top}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.right}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.bottom}${buttonBorderUnits.Tablet} ${buttonTabBorderWidth.left}${buttonBorderUnits.Tablet}`;
	const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth.top}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.right}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.bottom}${buttonBorderUnits.Mobile} ${buttonMobileBorderWidth.left}${buttonBorderUnits.Mobile}`;
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
	const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth.top}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.right}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonDesktopBorderRadiusWidth.left}${buttonBorderRadiusUnits.Desktop}`;
	const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth.top}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.right}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonTabBorderRadiusWidth.left}${buttonBorderRadiusUnits.Tablet}`;
	const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth.top}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.right}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonMobileBorderRadiusWidth.left}${buttonBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalPaddingMobile: {
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
					setAttributes( {buttonGlobalPaddingDesktop: {...buttonGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalPaddingTablet: {...buttonGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalPaddingMobile: {...buttonGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {buttonGlobalPaddingLink: !buttonGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalPaddingUnits: {
				...buttonGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${buttonGlobalPaddingDesktop.top}${buttonGlobalPaddingUnits.Desktop} ${buttonGlobalPaddingDesktop.right}${buttonGlobalPaddingUnits.Desktop} ${buttonGlobalPaddingDesktop.bottom}${buttonGlobalPaddingUnits.Desktop} ${buttonGlobalPaddingDesktop.left}${buttonGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${buttonGlobalPaddingTablet.top}${buttonGlobalPaddingUnits.Tablet} ${buttonGlobalPaddingTablet.right}${buttonGlobalPaddingUnits.Tablet} ${buttonGlobalPaddingTablet.bottom}${buttonGlobalPaddingUnits.Tablet} ${buttonGlobalPaddingTablet.left}${buttonGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${buttonGlobalPaddingMobile.top}${buttonGlobalPaddingUnits.Mobile} ${buttonGlobalPaddingMobile.right}${buttonGlobalPaddingUnits.Mobile} ${buttonGlobalPaddingMobile.bottom}${buttonGlobalPaddingUnits.Mobile} ${buttonGlobalPaddingMobile.left}${buttonGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalMarginMobile: {
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
					setAttributes( {buttonGlobalMarginDesktop: {...buttonGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalMarginTablet: {...buttonGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalMarginMobile: {...buttonGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {buttonGlobalMarginLink: !buttonGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalMarginUnits: {
				...buttonGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${buttonGlobalMarginDesktop.top}${buttonGlobalMarginUnits.Desktop} ${buttonGlobalMarginDesktop.right}${buttonGlobalMarginUnits.Desktop} ${buttonGlobalMarginDesktop.bottom}${buttonGlobalMarginUnits.Desktop} ${buttonGlobalMarginDesktop.left}${buttonGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${buttonGlobalMarginTablet.top}${buttonGlobalMarginUnits.Tablet} ${buttonGlobalMarginTablet.right}${buttonGlobalMarginUnits.Tablet} ${buttonGlobalMarginTablet.bottom}${buttonGlobalMarginUnits.Tablet} ${buttonGlobalMarginTablet.left}${buttonGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${buttonGlobalMarginMobile.top}${buttonGlobalMarginUnits.Mobile} ${buttonGlobalMarginMobile.right}${buttonGlobalMarginUnits.Mobile} ${buttonGlobalMarginMobile.bottom}${buttonGlobalMarginUnits.Mobile} ${buttonGlobalMarginMobile.left}${buttonGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalBorderMobile: {
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
					setAttributes( {buttonGlobalBorderDesktop: {...buttonGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalBorderTablet: {...buttonGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalBorderMobile: {...buttonGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {buttonGlobalBorderLink: !buttonGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalBorderUnits: {
				...buttonGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${buttonGlobalBorderDesktop.top}${buttonGlobalBorderUnits.Desktop} ${buttonGlobalBorderDesktop.right}${buttonGlobalBorderUnits.Desktop} ${buttonGlobalBorderDesktop.bottom}${buttonGlobalBorderUnits.Desktop} ${buttonGlobalBorderDesktop.left}${buttonGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${buttonGlobalBorderTablet.top}${buttonGlobalBorderUnits.Tablet} ${buttonGlobalBorderTablet.right}${buttonGlobalBorderUnits.Tablet} ${buttonGlobalBorderTablet.bottom}${buttonGlobalBorderUnits.Tablet} ${buttonGlobalBorderTablet.left}${buttonGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${buttonGlobalBorderMobile.top}${buttonGlobalBorderUnits.Mobile} ${buttonGlobalBorderMobile.right}${buttonGlobalBorderUnits.Mobile} ${buttonGlobalBorderMobile.bottom}${buttonGlobalBorderUnits.Mobile} ${buttonGlobalBorderMobile.left}${buttonGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( buttonGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						buttonGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						buttonGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						buttonGlobalBorderRadiusMobile: {
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
					setAttributes( {buttonGlobalBorderRadiusDesktop: {...buttonGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {buttonGlobalBorderRadiusTablet: {...buttonGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {buttonGlobalBorderRadiusMobile: {...buttonGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {buttonGlobalBorderRadiusLink: !buttonGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			buttonGlobalBorderRadiusUnits: {
				...buttonGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${buttonGlobalBorderRadiusDesktop.top}${buttonGlobalBorderRadiusUnits.Desktop} ${buttonGlobalBorderRadiusDesktop.right}${buttonGlobalBorderRadiusUnits.Desktop} ${buttonGlobalBorderRadiusDesktop.bottom}${buttonGlobalBorderRadiusUnits.Desktop} ${buttonGlobalBorderRadiusDesktop.left}${buttonGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${buttonGlobalBorderRadiusTablet.top}${buttonGlobalBorderRadiusUnits.Tablet} ${buttonGlobalBorderRadiusTablet.right}${buttonGlobalBorderRadiusUnits.Tablet} ${buttonGlobalBorderRadiusTablet.bottom}${buttonGlobalBorderRadiusUnits.Tablet} ${buttonGlobalBorderRadiusTablet.left}${buttonGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${buttonGlobalBorderRadiusMobile.top}${buttonGlobalBorderRadiusUnits.Mobile} ${buttonGlobalBorderRadiusMobile.right}${buttonGlobalBorderRadiusUnits.Mobile} ${buttonGlobalBorderRadiusMobile.bottom}${buttonGlobalBorderRadiusUnits.Mobile} ${buttonGlobalBorderRadiusMobile.left}${buttonGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */    

	/** Start Load Google Font */
	useEffect(() => {
		if (buttonFontFamily) {
			loadGoogleFont(buttonFontFamily);
		}
	}, [buttonFontFamily]);
	/** End Load Google Font */

	/** Start Icon Handler */
	const iconHandler = (IconName) => {
		setAttributes({buttonIcon: IconName})
	}
	/** End Icon Handler */

	const allBlockStyle = useMemo(() => `
		.${blockId}.fb-advanced-button-main-wrapper {
			${advancedBtnPositionType === 'default' ? `position: relative;` : ''}
			${advancedBtnPositionType !== 'default' ? `position: ${advancedBtnPositionType} !important;` : ''}
			${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'left' && advancedBtnHZLeftOffset.Desktop ? `left: ${advancedBtnHZLeftOffset.Desktop}${advancedBtnHZLeftOffsetUnits.Desktop};` : ''}
			${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'right' && advancedBtnHZRightOffset.Desktop ? `right: ${advancedBtnHZRightOffset.Desktop}${advancedBtnHZRightOffsetUnits.Desktop};` : ''}
			${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'top' && advancedBtnVRTopOffset.Desktop ? `top: ${advancedBtnVRTopOffset.Desktop}${advancedBtnVRTopOffsetUnits.Desktop};` : ''}
			${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'bottom' && advancedBtnVRBottomOffset.Desktop ? `bottom: ${advancedBtnVRBottomOffset.Desktop}${advancedBtnVRBottomOffsetUnits.Desktop};` : ''}
			${buttonGlobalZIndex.Desktop ? `z-index: ${buttonGlobalZIndex.Desktop};` : ''}
			${advancedBtnOverflow !== 'default' ? `overflow: ${advancedBtnOverflow};` : ''}
		}
		.${blockId} .fb-advanced-button-wrapper {
            ${buttonGlobalNormalBackgroundType === 'gradient' ? `  
                ${buttonGlobalNormalCustomGradientSwitcher && buttonGlobalNormalCustomGradientInputValue ? `background: ${buttonGlobalNormalCustomGradientInputValue};` : `background: ${buttonGlobalNormalGradientColor};`}
            `: `
                ${buttonGlobalNormalClassicColor ? `background: ${buttonGlobalNormalClassicColor};` : ''}
            `}
			${globalDesktopPadding && buttonGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
			${globalDesktopMargin && buttonGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
			${buttonGlobalBorder ? `border: ${buttonGlobalBorder};` : ''} 
			${globalDesktopBorderWidth && buttonGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
			${globalDesktopBorderRadiusWidth && buttonGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
			${buttonGlobalBorderColor ? `border-color: ${buttonGlobalBorderColor};` : ''}
			${buttonGlobalBoxShadowCssValue ? `box-shadow: ${buttonGlobalBoxShadowCssValue};` : ''}

			${buttonTransformNormalProportions 
				? (buttonTransformNormalScale?.Desktop 
					? `transform: scale(${buttonTransformNormalScale.Desktop});` 
					: ''
				) 
				: (
					(buttonTransformNormalScaleX?.Desktop || buttonTransformNormalScaleY?.Desktop) 
					? `transform: ${buttonTransformNormalScaleX?.Desktop ? `scaleX(${buttonTransformNormalScaleX.Desktop}) ` : ''}${buttonTransformNormalScaleY?.Desktop ? `scaleY(${buttonTransformNormalScaleY.Desktop})` : ''};` 
					: ''
				)
			}			
			transition: all .3s ease-in-out;
			position: relative;
		}
		.${blockId} .fb-advanced-button-wrapper:hover {
            ${buttonGlobalHoverBackgroundType	 === 'gradient' ? `   	
                ${buttonGlobalHoverCustomGradientSwitcher && buttonGlobalHoverCustomGradientInputValue ? `background: ${buttonGlobalHoverCustomGradientInputValue};` : `background: ${buttonGlobalHoverGradientColor};`}
            `: `
                ${buttonGlobalHoverClassicColor ? `background: ${buttonGlobalHoverClassicColor};` : ''}
            `}
			${buttonGlobalBorderHoverColor ? `border-color: ${buttonGlobalBorderHoverColor};` : ''}
			${buttonGlobalBoxShadowHoverCssValue ? `box-shadow: ${buttonGlobalBoxShadowHoverCssValue};` : ''}

			${buttonTransformHoverProportions 
				? (buttonTransformHoverScale?.Desktop 
					? `transform: scale(${buttonTransformHoverScale.Desktop});` 
					: ''
				) 
				: (
					(buttonTransformHoverScaleX?.Desktop || buttonTransformHoverScaleY?.Desktop) 
					? `transform: ${buttonTransformHoverScaleX?.Desktop ? `scaleX(${buttonTransformHoverScaleX.Desktop}) ` : ''}${buttonTransformHoverScaleY?.Desktop ? `scaleY(${buttonTransformHoverScaleY.Desktop})` : ''};` 
					: ''
				)
			}
		}
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button {
			${buttonIconGapSize.Desktop ? `gap: ${buttonIconGapSize.Desktop}${buttonIconGapUnits.Desktop};` : ''}
			
			${buttonGlobalTypoSwitcher.fontFamily === true && buttonGlobalTypographyData.fontFamily ? `font-family: ${buttonGlobalTypographyData.fontFamily};` : ''}
			${buttonGlobalTypoSwitcher.fontSize === true && buttonGlobalTypographyData.fontSize ? `font-size: ${buttonGlobalTypographyData.fontSize};` : ''}
			${buttonGlobalTypoSwitcher.fontWeight === true && buttonGlobalTypographyData.fontWeight ? `font-weight: ${buttonGlobalTypographyData.fontWeight};` : ''}
			${buttonGlobalTypoSwitcher.fontStyle === true && buttonGlobalTypographyData.fontStyle ? `font-style: ${buttonGlobalTypographyData.fontStyle};` : ''}
			${buttonGlobalTypoSwitcher.textTransform === true && buttonGlobalTypographyData.textTransform ? `text-transform: ${buttonGlobalTypographyData.textTransform};` : ''}
			${buttonGlobalTypoSwitcher.textDecoration === true && buttonGlobalTypographyData.textDecoration ? `text-decoration: ${buttonGlobalTypographyData.textDecoration};` : ''}
			${buttonGlobalTypoSwitcher.letterSpacing === true && buttonGlobalTypographyData.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData.letterSpacing};` : ''}
			${buttonGlobalTypoSwitcher.lineHeight === true && buttonGlobalTypographyData.lineHeight ? `line-height: ${buttonGlobalTypographyData.lineHeight};` : ''}
			
			${buttonGlobalTypoSwitcher.fontFamily === false && buttonFontFamily && buttonFontFamily !== 'Default' ? `font-family: ${buttonFontFamily};` : ''}
			${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Desktop && buttonFontSizeUnits.Desktop ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ''}
			${buttonGlobalTypoSwitcher.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
			${buttonGlobalTypoSwitcher.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
			${buttonGlobalTypoSwitcher.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
			${buttonGlobalTypoSwitcher.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
			${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Desktop && buttonLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ''}
			${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Desktop && buttonLineHeightUnits.Desktop ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ''}
			
			${buttonNormalBackgroundType === 'gradient' ? `   	
                ${buttonNormalCustomGradientSwitcher && buttonNormalCustomGradientInputValue ? `background: ${buttonNormalCustomGradientInputValue};` : `background: ${buttonNormalGradientColor};`}
            `: `
                ${buttonBgColor ? `background: ${buttonBgColor};` : ''}
            `}
			${buttonDesktopPaddingStr && buttonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingStr};` : ''}
			${buttonDesktopMarginStr && buttonDesktopMargin?.top ? `margin: ${buttonDesktopMarginStr};` : ''}
			${buttonBorder ? `border: ${buttonBorder};` : ''}
			${buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderWidthStr};` : ''}
			${buttonDesktopBorderRadiusStr && buttonDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ''}
			${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
			${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ''} 
			${buttonWidth.Desktop && buttonWidthUnits.Desktop ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};` : ''}
			display: ${buttonAlignment === 'justify' ? 'flex' : 'inline-flex'};
			transition: all 0.3s ease;
		}

		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover {
			${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
			${buttonHoverBackgroundType === 'gradient' ? `   	
                ${buttonHoverCustomGradientSwitcher && buttonHoverCustomGradientInputValue ? `background: ${buttonHoverCustomGradientInputValue};` : `background: ${buttonHoverGradientColor};`}
            `: `
                ${buttonBgHoverColor ? `background: ${buttonBgHoverColor};` : ''}
            `}
			${buttonBoxShadowHoverCssValue ? `box-shadow: ${buttonBoxShadowHoverCssValue};` : ''} 
		}

		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-text {
			${buttonColor ? `color: ${buttonColor};` : ''}  
		}
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-text {
			${buttonHoverColor ? `color: ${buttonHoverColor};` : ''}
		}
		
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
			${buttonIconNormalBackgroundType === 'gradient' ? `   	
                ${buttonIconNormalCustomGradientSwitcher && buttonIconNormalCustomGradientInputValue ? `background: ${buttonIconNormalCustomGradientInputValue};` : `background: ${buttonIconNormalGradientColor};`}
            `: `
                ${buttonIconBgColor ? `background: ${buttonIconBgColor};` : ''}
            `}
			${buttonIconPaddingDesktopWidth && buttonIconPaddingDesktop?.top ? `padding: ${buttonIconPaddingDesktopWidth};` : ''}
			${buttonIconMarginDesktopWidth && buttonIconPaddingDesktop?.top ? `margin: ${buttonIconMarginDesktopWidth};` : ''}

			${buttonIconBorder ? `border: ${buttonIconBorder};` : ''}
			${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ''}
			${buttonIconBorderDesktopWidth !== 'px px px px' ? `border-width: ${buttonIconBorderDesktopWidth};` : ''}
			${buttonIconBorderRadiusDesktopWidth !== 'px px px px' ? `border-radius: ${buttonIconBorderRadiusDesktopWidth};` : ''}
		}
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper {
			${buttonIconHoverBackgroundType === 'gradient' ? `   	
                ${buttonIconHoverCustomGradientSwitcher && buttonIconHoverCustomGradientInputValue ? `background: ${buttonIconHoverCustomGradientInputValue};` : `background: ${buttonIconHoverGradientColor};`}
            `: `
                ${ buttonIconBgHoverColor ? `background: ${ buttonIconBgHoverColor};` : ''}
            `}
			${buttonIconBorderHoverColor ? `border-color: ${buttonIconBorderHoverColor};` : ''}
		}
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
			${buttonIconSize.Desktop && buttonIconSizeUnits.Desktop ? `width: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};` : ''}
			${buttonIconSize.Desktop && buttonIconSizeUnits.Desktop ? `height: ${buttonIconSize.Desktop}${buttonIconSizeUnits.Desktop};` : ''}
			${buttonIconColor ? `fill: ${buttonIconColor};` : ''}
			transform: rotate(${buttonIconRotate.Desktop}deg);
			transition: all .3s ease-in-out;
			
		}
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper svg {
			${buttonIconHoverColor ? `fill: ${buttonIconHoverColor};` : ''}
			transform: rotate(${buttonIconRotateHover.Desktop}deg); 
		}

		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
			${buttonIconImageWidth ? `width: ${buttonIconImageWidth.Desktop}${buttonIconImageWidthUnits.Desktop};` : ''}
			${buttonIconImageHeight ? `height: ${buttonIconImageHeight.Desktop}${buttonIconImageHeightUnits.Desktop};` : ''}
			${buttonIconImagedisplay ? `object-fit: ${buttonIconImagedisplay};` : ''}
			transform: rotate(${buttonImageRotate.Desktop}deg);
			transition: all .3s ease-in-out;
		}
		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
			transform: rotate(${buttonImageRotateHover.Desktop}deg);
		}

		@media only screen and (max-width: 1024px) {
			.${blockId}.fb-advanced-button-main-wrapper {
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'left' && advancedBtnHZLeftOffset.Tablet ? `left: ${advancedBtnHZLeftOffset.Tablet}${advancedBtnHZLeftOffsetUnits.Tablet};` : ''}
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'right' && advancedBtnHZRightOffset.Tablet ? `right: ${advancedBtnHZRightOffset.Tablet}${advancedBtnHZRightOffsetUnits.Tablet};` : ''}
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'top' && advancedBtnVRTopOffset.Tablet ? `top: ${advancedBtnVRTopOffset.Tablet}${advancedBtnVRTopOffsetUnits.Tablet};` : ''}
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'bottom' && advancedBtnVRBottomOffset.Tablet ? `bottom: ${advancedBtnVRBottomOffset.Tablet}${advancedBtnVRBottomOffsetUnits.Tablet};` : ''}
				${buttonGlobalZIndex.Tablet ? `z-index: ${buttonGlobalZIndex.Tablet};` : ''}
			}
			.${blockId} .fb-advanced-button-wrapper {
				${globalTabletPadding && buttonGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
				${globalTabletMargin && buttonGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
				${globalTabletBorderWidth && buttonGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
				${globalTabletBorderRadiusWidth && buttonGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}

				${buttonTransformNormalProportions 
						? (buttonTransformNormalScale?.Tablet 
							? `transform: scale(${buttonTransformNormalScale.Tablet});` 
							: ''
					) 
					: (
						(buttonTransformNormalScaleX?.Tablet || buttonTransformNormalScaleY?.Tablet) 
						? `transform: ${buttonTransformNormalScaleX?.Tablet ? `scaleX(${buttonTransformNormalScaleX.Tablet}) ` : ''}${buttonTransformNormalScaleY?.Tablet ? `scaleY(${buttonTransformNormalScaleY.Tablet})` : ''};` 
						: ''
					)
				}
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button {
				${buttonIconGapSize.Tablet ? `gap: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};` : ''}
				
				${buttonTabletPaddingStr && buttonTabPadding?.top ? `padding: ${buttonTabletPaddingStr};` : ''}
				${buttonTabletMarginStr && buttonTabMargin?.top ? `margin: ${buttonTabletMarginStr};` : ''}
				${buttonTabletBorderWidthStr && buttonTabBorderWidth?.top ? `border-width: ${buttonTabletBorderWidthStr};` : ''}
				${buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top ? `border-radius: ${buttonTabletBorderRadiusStr};` : ''}
				${buttonWidth.Tablet && buttonWidthUnits.Tablet ? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};` : ''}
				${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Tablet && buttonFontSizeUnits.Tablet ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : ''}
				${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Tablet && buttonLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : ''}
				${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Tablet && buttonLineHeightUnits.Tablet ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : ''}
			}

			.${blockId} .fb-advanced-button-wrapper:hover {

				${buttonTransformHoverProportions 
					? (buttonTransformHoverScale?.Tablet 
						? `transform: scale(${buttonTransformHoverScale.Tablet});` 
						: ''
					) 
					: (
						(buttonTransformHoverScaleX?.Tablet || buttonTransformHoverScaleY?.Tablet) 
						? `transform: ${buttonTransformHoverScaleX?.Tablet ? `scaleX(${buttonTransformHoverScaleX.Tablet}) ` : ''}${buttonTransformHoverScaleY?.Tablet ? `scaleY(${buttonTransformHoverScaleY.Tablet})` : ''};` 
						: ''
					)
				}
			}

			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
				${buttonIconPaddingTabletWidth && buttonIconPaddingTablet?.top ? `padding: ${buttonIconPaddingTabletWidth};` : ''}
				${buttonIconMarginTabletWidth && buttonIconMarginTablet?.top ? `margin: ${buttonIconMarginTabletWidth};` : ''}
				${buttonIconPosition === 'left' && buttonIconGapSize.Tablet ? `margin-right: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};` : ''}
				${buttonIconPosition === 'right' && buttonIconGapSize.Tablet ? `margin-left: ${buttonIconGapSize.Tablet}${buttonIconGapUnits.Tablet};` : ''}
				${buttonIconBorderTabletWidth !== 'px px px px' ? `border-width: ${buttonIconBorderTabletWidth};` : ''}
				${buttonIconBorderRadiusTabletWidth !== 'px px px px' ? `border-radius: ${buttonIconBorderRadiusTabletWidth};` : ''}
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
				${buttonIconSize.Tablet && buttonIconSizeUnits.Tablet ? `width: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};` : ''}
				${buttonIconSize.Tablet && buttonIconSizeUnits.Tablet ? `height: ${buttonIconSize.Tablet}${buttonIconSizeUnits.Tablet};` : ''}
				transform: rotate(${buttonIconRotate.Tablet}deg);
			}

			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper svg {
				transform: rotate(${buttonIconRotateHover.Tablet}deg); 
			}

			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
				${buttonIconImageWidth ? `width: ${buttonIconImageWidth.Tablet}${buttonIconImageWidthUnits.Tablet};` : ''}
				${buttonIconImageHeight ? `height: ${buttonIconImageHeight.Tablet}${buttonIconImageHeightUnits.Tablet};` : ''}
				transform: rotate(${buttonImageRotate.Tablet}deg);
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
				transform: rotate(${buttonImageRotateHover.Tablet}deg);
			}
		}

		@media only screen and (max-width: 767px) {
			.${blockId}.fb-advanced-button-main-wrapper {
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'left' && advancedBtnHZLeftOffset.Mobile ? `left: ${advancedBtnHZLeftOffset.Mobile}${advancedBtnHZLeftOffsetUnits.Mobile};` : ''}
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'right' && advancedBtnHZRightOffset.Mobile ? `right: ${advancedBtnHZRightOffset.Mobile}${advancedBtnHZRightOffsetUnits.Mobile};` : ''}
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'top' && advancedBtnVRTopOffset.Mobile ? `top: ${advancedBtnVRTopOffset.Mobile}${advancedBtnVRTopOffsetUnits.Mobile};` : ''}
				${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'bottom' && advancedBtnVRBottomOffset.Mobile ? `bottom: ${advancedBtnVRBottomOffset.Mobile}${advancedBtnVRBottomOffsetUnits.Mobile};` : ''}
				${buttonGlobalZIndex.Mobile ? `z-index: ${buttonGlobalZIndex.Mobile};` : ''}
			}
			.${blockId} .fb-advanced-button-wrapper {
				${globalMobilePadding && buttonGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
				${globalMobileMargin && buttonGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
				${globalMobileBorderWidth && buttonGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
				${globalMobileBorderRadiusWidth && buttonGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}

				${buttonTransformNormalProportions 
						? (buttonTransformNormalScale?.Mobile 
							? `transform: scale(${buttonTransformNormalScale.Mobile});` 
							: ''
					) 
					: (
						(buttonTransformNormalScaleX?.Mobile || buttonTransformNormalScaleY?.Mobile) 
						? `transform: ${buttonTransformNormalScaleX?.Mobile ? `scaleX(${buttonTransformNormalScaleX.Mobile}) ` : ''}${buttonTransformNormalScaleY?.Mobile ? `scaleY(${buttonTransformNormalScaleY.Mobile})` : ''};` 
						: ''
					)
				}
			}

			.${blockId} .fb-advanced-button-wrapper:hover {
				${buttonTransformHoverProportions 
					? (buttonTransformHoverScale?.Mobile 
						? `transform: scale(${buttonTransformHoverScale.Mobile});` 
						: ''
					) 
					: (
						(buttonTransformHoverScaleX?.Mobile || buttonTransformHoverScaleY?.Mobile) 
						? `transform: ${buttonTransformHoverScaleX?.Mobile ? `scaleX(${buttonTransformHoverScaleX.Mobile}) ` : ''}${buttonTransformHoverScaleY?.Mobile ? `scaleY(${buttonTransformHoverScaleY.Mobile})` : ''};` 
						: ''
					)
				}
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button {
				${buttonIconGapSize.Mobile ? `gap: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};` : ''}
				${buttonMobilePaddingStr && buttonMobilePadding?.top ? `padding: ${buttonMobilePaddingStr};` : ''}
				${buttonMobileMarginStr && buttonMobileMargin?.top ? `margin: ${buttonMobileMarginStr};` : ''}
				${buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderWidthStr};` : ''}
				${buttonMobileBorderRadiusStr && buttonMobileBorderRadiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusStr};` : ''}
				${buttonWidth.Mobile && buttonWidthUnits.Mobile ? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};` : ''}
				${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Mobile && buttonFontSizeUnits.Mobile ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : ''}
				${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Mobile && buttonLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : ''}
				${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Mobile && buttonLineHeightUnits.Mobile ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : ''}
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
				${buttonIconPaddingMobileWidth && buttonIconPaddingMobile?.top ? `padding: ${buttonIconPaddingMobileWidth};` : ''}
				${buttonIconMarginMobileWidth && buttonIconPaddingMobile?.top ? `margin: ${buttonIconMarginMobileWidth};` : ''}
				${buttonIconPosition === 'left' && buttonIconGapSize.Mobile ? `margin-right: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};` : ''}
				${buttonIconPosition === 'right' && buttonIconGapSize.Mobile ? `margin-left: ${buttonIconGapSize.Mobile}${buttonIconGapUnits.Mobile};` : ''}
				${buttonIconBorderMobileWidth !== 'px px px px' ? `border-width: ${buttonIconBorderMobileWidth};` : ''}
				${buttonIconBorderRadiusMobileWidth !== 'px px px px' ? `border-radius: ${buttonIconBorderRadiusMobileWidth};` : ''}
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
				${buttonIconSize.Mobile && buttonIconSizeUnits.Mobile ? `width: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};` : ''}
				${buttonIconSize.Mobile && buttonIconSizeUnits.Mobile ? `height: ${buttonIconSize.Mobile}${buttonIconSizeUnits.Mobile};` : ''}
				transform: rotate(${buttonIconRotate.Mobile}deg);
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper svg {
				transform: rotate(${buttonIconRotateHover.Mobile}deg); 
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
				${buttonIconImageWidth.Mobile ? `width: ${buttonIconImageWidth.Mobile}${buttonIconImageWidthUnits.Mobile};` : ''}
				${buttonIconImageHeight.Mobile ? `height: ${buttonIconImageHeight.Mobile}${buttonIconImageHeightUnits.Mobile};` : ''}
				transform: rotate(${buttonImageRotate.Mobile}deg);
			}
			.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
				transform: rotate(${buttonImageRotateHover.Mobile}deg);
			}
		}
	`, [
		blockId,
		blockStyle,
		buttonGlobalZIndex,
		advancedBtnOverflow,
		globalDesktopPadding,
		globalDesktopMargin,
		buttonGlobalBorder,
		globalDesktopBorderWidth,
		globalDesktopBorderRadiusWidth,
		buttonGlobalBorderColor,
		buttonGlobalBoxShadowSwitcher,
        buttonGlobalBoxShadowValues,
        buttonGlobalBoxShadowCssValue,
		buttonGlobalBoxShadowHoverValues,
		buttonGlobalBoxShadowHoverCssValue,
		buttonGlobalBorderHoverColor,
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

		buttonDesktopMarginStr,
		buttonBorder,
		buttonDesktopBorderWidthStr,
		buttonDesktopBorderRadiusStr,
		buttonBorderColor,
		buttonBoxShadowSwitcher,
		buttonBoxShadowValues,
		buttonBoxShadowCssValue,
		buttonBoxShadowHoverValues,
		buttonBoxShadowHoverCssValue,
		buttonWidth,
		buttonWidthUnits,
		buttonAlignment,
		buttonHoverColor,
		buttonIconPosition,
		buttonIconGapSize,
		buttonIconGapUnits,
		buttonIconBorder,
		buttonIconBorderColor,

		buttonIconBorderHoverColor,
		buttonIconSize,
		buttonIconSizeUnits,
		buttonIconColor,
		globalTabletPadding,
		globalTabletMargin,
		globalTabletBorderWidth,
		globalTabletBorderRadiusWidth,
		buttonTabletMarginStr,
		buttonTabletBorderWidthStr,
		buttonTabletBorderRadiusStr,
		globalMobilePadding,
		globalMobileMargin,
		globalMobileBorderWidth,
		globalMobileBorderRadiusWidth,

		buttonMobileMarginStr,
		buttonMobileBorderWidthStr,
		buttonMobileBorderRadiusStr,
		buttonTargetUrl,
		buttonColorSwitcher,
		buttonColor,
		buttonHoverColor,

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

		buttonBorderColorSwitcher,
		buttonBorderHoverColor,
		buttonPaddingUnits,
		buttonTabPadding,
		buttonMobilePadding,
		buttonPaddingLink,
		buttonMarginUnits,
		buttonTabMargin,
		buttonMobileMargin,
		buttonMarginLink,
		buttonIconAlign,
		buttonIcon,
		buttonIconColorSwitcher,
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

		buttonIconBorderColorSwitcher,
		buttonIconBorderUnits,
		buttonIconBorderLink,
		buttonIconBorderRadiusUnits,
		buttonIconBorderRadiusLink,

		/** Start Icon Padding */
		buttonIconPaddingUnits,
		buttonIconPaddingDesktop,
		buttonIconPaddingTablet,
		buttonIconPaddingMobile,
		buttonIconPaddingLink,
		buttonIconPaddingDesktopWidth,
		buttonIconPaddingTabletWidth,
		buttonIconPaddingMobileWidth,
		/** End Icon Padding */

		/** Start Icon Padding */
		buttonIconPaddingUnits,
		buttonIconPaddingDesktop,
		buttonIconPaddingTablet,
		buttonIconPaddingMobile,
		buttonIconPaddingLink,
		buttonIconMarginDesktopWidth,
		buttonIconMarginTabletWidth,
		buttonIconMarginMobileWidth,
		/** End Icon Padding */

		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,

		buttonImageRotateSwitcher,
		buttonImageRotate,
		buttonImageRotateHover,

		buttonIconImageUrl,
		buttonIconImageAlt,
		buttonIconImageID,
		buttonIconImageWidth,
		buttonIconImageWidthUnits,
		buttonIconImageHeight,
		buttonIconImageHeightUnits,
		buttonIconImagedisplay,

		buttonGlobalWraperID,
		buttonGlobalWraperClass,

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

		/** convert formate */
		buttonIconBorderDesktopWidth,
		buttonIconBorderTabletWidth,
		buttonIconBorderMobileWidth,

		buttonIconBorderRadiusDesktopWidth,
		buttonIconBorderRadiusTabletWidth,
		buttonIconBorderRadiusMobileWidth,

		buttonDesktopPaddingStr,
		buttonTabletPaddingStr,
		buttonMobilePaddingStr,

		buttonTransformSwitcher,
		buttonTransformNormalProportions,
		buttonTransformNormalScale,
		buttonTransformNormalScaleX,
		buttonTransformNormalScaleY,

		buttonTransformHoverProportions,
		buttonTransformHoverScale,
		buttonTransformHoverScaleX,
		buttonTransformHoverScaleY,

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
		
	]);


	const customCss = getCustomCss(buttonCustomCSS, `.${blockId}`);

	useEffect(() => {
		setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
	}, [allBlockStyle, customCss]);


	const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	/**
     * Date and Time Format Options
     */
	const dateFormatOptions = getdynamicTextDateFormatOptions(new Date());
	const timeFormatOptions = getdynamicTextTimeFormatOptions(new Date());

	/**
	 * Exclude Post Types
	 */
	const EXCLUDE_POST_TYPES = [
		'attachment','revision','nav_menu_item','custom_css','customize_changeset',
		'oembed_cache','user_request','wp_block','wp_navigation',
		'wp_template','wp_template_part','wp_global_styles',
		'wp_font_family','wp_font_face','wp_font_collection'
	];

	/**
	 * Post Types
	 */
	const postTypes = useSelect((select) => {
		const all = select(coreStore).getPostTypes({ per_page: -1 }) || [];
		return all.filter(
		(pt) => pt.viewable && pt.supports?.title && !EXCLUDE_POST_TYPES.includes(pt.slug)
		);
	}, []);
	
	/**
	 * Post Options
	 */
	const postOptions = useSelect((select) => {
		const types = (postTypes || []).map((t) => t.slug);
		if (!types.length) return [];
		
		const items = [];
		types.forEach((t) => {
			const recs = select(coreStore).getEntityRecords('postType', t, {
			status: 'publish',
			per_page: 20,
			orderby: 'date',
			order: 'desc',
			_fields: ['id', 'title', 'type'],
			}) || [];
			recs.forEach((r) => items.push(r));
		});
		
		return items.map((r) => ({
			value: r.id,
			label: r.title?.rendered
			? r.title.rendered.replace(/<[^>]+>/g, '')
			: '(no title)',
			meta: r.type,
		}));
	}, [postTypes]);

	const isPostBasedSource = dynamicTextEnabled && (dynamicTextSource === 'current_post' || dynamicTextSource === 'post_type');

	/**  
	 * Featured Image Field
	 */
	const [featuredField, setFeaturedField] = useState(dynamicFeaturedImageField || "title");

	useEffect(() => {
		setFeaturedField(dynamicFeaturedImageField || "title");
	}, [dynamicFeaturedImageField]);

	const selectedFeaturedField = useMemo(() => {
		const v = featuredField || "title";
		return (
		DYNAMIC_FEATURED_IMAGE_OPTIONS.find((o) => o.value === v) ||
		DYNAMIC_FEATURED_IMAGE_OPTIONS[0]
		);
	}, [featuredField]);

	const handleFeaturedFieldChange = (opt) => {
		const val = opt && typeof opt.value === "string" ? opt.value : "title";
		setFeaturedField(val);
		setAttributes({ dynamicFeaturedImageField: val });
	};

	/**
	 * dynamicTextTermsTaxonomy
	 */

	const [termsTaxonomy, setTermsTaxonomy] = useState(dynamicTextTermsTaxonomy || "category");

	useEffect(() => {
		setTermsTaxonomy(dynamicTextTermsTaxonomy || "category");
	}, [dynamicTextTermsTaxonomy]);

	const selectedTermsTaxonomy = useMemo(() => {
		const v = termsTaxonomy || "category";
		return (
		DYNAMIC_TAXONOMY_OPTIONS.find((o) => o.value === v) ||
		DYNAMIC_TAXONOMY_OPTIONS[0]
		);
	}, [termsTaxonomy]);

	const handleTermsTaxonomyChange = (opt) => {
		const val = opt && typeof opt.value === "string" ? opt.value : "category";
		setTermsTaxonomy(val);
		setAttributes({ dynamicTextTermsTaxonomy: val });
	};

	/**
	 * Dynamic Data Source
	 */
	const [dataSource, setDataSource] = useState(dynamicTextSource || "current_post");

	useEffect(() => {
		setDataSource(dynamicTextSource || "current_post");
	}, [dynamicTextSource]);

	const selectedDataSource = useMemo(() => {
		const v = dataSource || "current_post";
		return (
			DYNAMIC_DATA_SOURCE_OPTIONS.find((o) => o.value === v) ||
			DYNAMIC_DATA_SOURCE_OPTIONS[0]
		);
	}, [dataSource]);

	const handleDataSourceChange = (opt) => {
		const val = (opt && typeof opt.value === "string") ? opt.value : "current_post";
		setDataSource(val);
		setAttributes({ dynamicTextSource: val });
	};

	/**
	 * dynamic link source
	 */
	const [linkSource, setLinkSource] = useState(dynamicTextLinkSource || "post_permalink");

	useEffect(() => {
		setLinkSource(dynamicTextLinkSource || "post_permalink");
	}, [dynamicTextLinkSource]);

	const selectedLinkSource = useMemo(() => {
		const v = linkSource || "post_permalink";
		return (
		DYNAMIC_LINK_SOURCE_OPTIONS.find((o) => o.value === v) ||
		DYNAMIC_LINK_SOURCE_OPTIONS[0]
		);
	}, [linkSource]);

	const handleLinkSourceChange = (opt) => {
		const val = opt && typeof opt.value === "string" ? opt.value : "post_permalink";
		setLinkSource(val);
		setAttributes({ dynamicTextLinkSource: val });
	};

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
						<SelectControl
							value={buttonPresetStyle}
							options={ADVANCED_BUTTON_PRESETS}
							onChange={(selected) => changeAdvancedButtonPreset(selected)}
						/>
					</BaseControl>

					<ToggleControl
                        label={__("Enable Dynamic Content", "frontis-blocks")}
                        checked={dynamicTextEnabled}
                        onChange={(value) => setAttributes({ dynamicTextEnabled: value })}
                    />

                    {dynamicTextEnabled && (
                        <>
                            <BaseControl
                                label={__("Data Source", "frontis-blocks")}
                                >
                                    <Select2 
                                        options={DYNAMIC_DATA_SOURCE_OPTIONS}
										value={selectedDataSource}
										onChange={handleDataSourceChange}
                                        className="fb-select2-control"
                                    />
                            </BaseControl>

                            {dynamicTextSource === 'post_type' && (
                                <>
                                    <BaseControl label={__("Search Posts","frontis-blocks")}>
                                        <Select2
                                            options={postOptions}
                                            value={ postOptions.find(o => o.value === dynamicTextPostId) || null }
                                            onChange={(opt)=> setAttributes({
                                            dynamicTextPostId: opt?.value ?? 0,
                                            dynamicTextPostType: opt?.meta ?? '',
                                            dynamicTextPostLabel: opt?.label ?? ''
                                            })}
                                            className="fb-select2-control"
                                        />
                                    </BaseControl>
                                </>
                            )}

                            {isPostBasedSource && (
                                <>
                                <BaseControl
                                    label={__("Source Field", "frontis-blocks")}
                                    >
                                        <Select2 
                                            options={DYNAMIC_DATA_SOURCE_FIELD_OPTIONS}
                                            value={DYNAMIC_DATA_SOURCE_FIELD_OPTIONS.find(o => o.value === dynamicTextField) || null }                                                     // option object
                                            onChange={(opt) => setAttributes({ dynamicTextField: opt?.value ?? '' })}
                                            className="fb-select2-control"
                                        />
                                </BaseControl>

                                {dynamicTextField === 'post_thumbnail' && (
                                    <BaseControl
                                        label={__("Featured Image", "frontis-blocks")}
                                        >
                                            <Select2 
                                                options={DYNAMIC_FEATURED_IMAGE_OPTIONS} 
                                                value={selectedFeaturedField}
                                                onChange={handleFeaturedFieldChange}
                                                className="fb-select2-control"
                                            />
                                    </BaseControl>
                                )}

                                {dynamicTextField === 'post_date' && (
                                    <>
                                        <BaseControl
                                            label={__("Date Type", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={DYNAMIC_DATE_TIME_TYPE_OPTIONS} 
                                                    value={DYNAMIC_DATE_TIME_TYPE_OPTIONS.find(o => o.value === dynamicTextDateType) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicTextDateType: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                        <BaseControl
                                            label={__("Date Format", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={dateFormatOptions} 
                                                    value={dateFormatOptions.find(o => o.value === dynamicTextDateFormat) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicTextDateFormat: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                    </>
                                )}

                                {dynamicTextField === 'post_time' && (
                                    <>
                                        <BaseControl
                                            label={__("Date Type", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={DYNAMIC_DATE_TIME_TYPE_OPTIONS} 
                                                    value={DYNAMIC_DATE_TIME_TYPE_OPTIONS.find(o => o.value === dynamicTextTimeType) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicTextTimeType: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                        <BaseControl
                                            label={__("Time Format", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={timeFormatOptions}  
                                                    value={timeFormatOptions.find(o => o.value === dynamicTextTimeFormat) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicTextTimeFormat: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                    </>
                                )}

                                {dynamicTextField === 'comments_number' && (
                                    <>
                                        <TextControl
                                            label={__('No Comments Format', 'frontis-blocks')}
                                            value={dynamicTextCommentsZeroText}
                                            onChange={(value) => setAttributes({ dynamicTextCommentsZeroText: value })}
                                            help={__('Shown when there are 0 comments', 'frontis-blocks')}
                                        />
                                        <TextControl
                                            label={__('One Comment Format', 'frontis-blocks')}
                                            value={dynamicTextCommentsOneText}
                                            onChange={(value) => setAttributes({ dynamicTextCommentsOneText: value })}
                                            help={__('Shown when there is exactly 1 comment', 'frontis-blocks')}
                                        />
                                        <TextControl
                                            label={__('Many Comment Format', 'frontis-blocks')}
                                            value={dynamicTextCommentsManyText}
                                            onChange={(value) => setAttributes({ dynamicTextCommentsManyText: value })}
                                            help={__('Use {num} to insert the number', 'frontis-blocks')}
                                        />
                                    </>
                                )}

                                {dynamicTextField === 'post_terms' && (
                                    <>
                                        <BaseControl
                                            label={__("Taxonomy", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={DYNAMIC_TAXONOMY_OPTIONS} 
                                                    value={selectedTermsTaxonomy}
                                                    onChange={handleTermsTaxonomyChange}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>

                                        <TextControl
                                            label={__("Separator", "frontis-blocks")}
                                            value={dynamicTextTermsSeparator}
                                            onChange={(value) => setAttributes({ dynamicTextTermsSeparator: value })}
                                        />
                                    </>
                                )}
                                </>
                            )}
                        </>
                    )}

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

					{buttonTextSwitcher && (
						<TextControl
							label={__("Text", "frontis-blocks")}
							value={buttonText}
							onChange={(value) => setAttributes({ buttonText: value })}
							className="fb-advanced-button-text"
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

					<ToggleControl
						label={__("Enable Dynamic Link", "frontis-blocks")} 
						checked={dynamicTextEnableLink}
						onChange={(value) => setAttributes({ dynamicTextEnableLink: value })}
					/>

					{dynamicTextEnableLink ? (
						<BaseControl label={__("Link Source", "frontis-blocks")}>
							<Select2 
							options={DYNAMIC_LINK_SOURCE_OPTIONS}
							value={selectedLinkSource}
							onChange={handleLinkSourceChange}
							className="fb-select2-control"
							/>
						</BaseControl>
						) : (
						<FB_UrlControl
							url={buttonUrl}
							onChangeUrl={(value) => setAttributes({ buttonUrl: value })}
							openInNewTab={buttonTargetUrl}
							onChangeOpenInNewTab={(value) => setAttributes({ buttonTargetUrl: value })}
						/>
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
								buttonGlobalTypoSwitcher: value === 'default' ? {...buttonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
							})
						}}

						globalTypoOption={buttonGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ buttonGlobalTypoOption: value })}

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

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={buttonColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ buttonColorSwitcher: value })}
					/>

					{buttonColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={buttonColor}
							setGlobalColor={(value) => setAttributes({ buttonColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonHoverColor: value === undefined ? '' : value })}
						/>
					)}


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
						hoverClassicColor={ buttonIconBgHoverColor}
						setHoverClassicColor={(value) => setAttributes({  buttonIconBgHoverColor: value === undefined ? '' : value })}
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
			{(buttonIconAlign === 'image') &&(
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
