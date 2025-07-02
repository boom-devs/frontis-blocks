import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    PROGRESS_TEXT_OPTIONS,
	HEADING,
    OVERFLOW_OP,
    PROGRESSBAR_TYPE,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Range from '@Components/range';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';


import './editor.scss';
import FB_HtmlTagControl from '../../components/html-tag-control';
import FB_BackgroundColorControl from '../../components/background-color-control';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		// deviceType,
        progressGlobalZIndex,
        progressbarOverflow,
        progressbarType,
		progressTextPosition,
		progressNumber,


        progressNumberColorSwitcher,
		progressNumberColor,
        progressNumberHoverColor,
        

        // progress color
        progressZebraTrackSwitcher,
        progressZebraTrackWidth,
        progressColorSwitcher,
        progressColor,
        progressGradientColor,
        progressCustomGradientSwitcher,
        progressCustomGradientInputValue,
        progressImageUrl,
        progressImageAlt,
        progressImageID,
        progressImagePosition,
        progressImageAttachment,
        progressImageRepeat,
        progressImageSize,

        // progress Background
        progressBgZebraTrackSwitcher,
        progressBgZebraTrackWidth,
        progressBgColorSwitcher,
        progressBgType,
        progressBgColor,
        progressBgGradientColor,
        progressBgCustomGradientSwitcher,
        progressBgCustomGradientInputValue,
        progressBgImageUrl,
        progressBgImageAlt,
        progressBgImageID,
        progressBgImagePosition,
        progressBgImageAttachment,
        progressBgImageRepeat,
        progressBgImageSize,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,
        progressBarHeightUnits,

        progressTitleColorSwitcher,
        progressTitleColor,
        progressTitleHoverColor,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,
		progressBorderRadiusLink,

        progressTitleGlobalTypoSwitcher,
        progressTitleGlobalTypographyData,
        progressTitleGlobalTypoType,
        progressTitleGlobalTypoOption,
        progressTitleFontFamily,
        progressTitleFontSize,
        progressTitleFontSizeUnits,
        progressTitleFontWeight,
        progressTitleFontStyle,
        progressTitleTextTransform,
        progressTitleTextDecoration,
        progressTitleLetterSpacing,
        progressTitleLetterSpacingUnits,
        progressTitleLineHeight,
        progressTitleLineHeightUnits,

        progressNumberGlobalTypoSwitcher,
        progressNumberGlobalTypographyData,
        progressNumberGlobalTypoType,
        progressNumberGlobalTypoOption,
        progressNumberFontFamily,
        progressNumberFontSize,
        progressNumberFontSizeUnits,
        progressNumberFontWeight,
        progressNumberFontStyle,
        progressNumberTextTransform,
        progressNumberTextDecoration,
        progressNumberLetterSpacing,
        progressNumberLetterSpacingUnits,
        progressNumberLineHeight,
        progressNumberLineHeightUnits,

        blockStyle,

        progressbarDesktopSwitcher,
		progressbarTabletSwitcher,
		progressbarMobileSwitcher,

        progressGlobalCustomCSS,
        progressGlobalWraperID,
		progressGlobalWraperClass,

        // Position
        progressbarPositionType,
        progressbarHZOrientationType,
        progressbarVROrientationType,
        progressbarHZLeftOffset,
        progressbarHZLeftOffsetUnits,
        progressbarHZRightOffset,
        progressbarHZRightOffsetUnits,
        progressbarVRTopOffset,
        progressbarVRTopOffsetUnits,
        progressbarVRBottomOffset,
        progressbarVRBottomOffsetUnits,

        progressTitleMarginUnits,
        progressTitleMarginDesktop,
        progressTitleMarginTablet,
        progressTitleMarginMobile,
        progressTitleMarginLink,

        // Background
        progressbarBgColorSwitcher,
        progressbarBgType,
        progressbarBgClassicColor,
        progressbarBgGradientColor,
        progressbarBgCustomGradientSwitcher,
        progressbarBgCustomGradientInputValue,
        progressbarBgImageUrl,
        progressbarBgImageAlt,
        progressbarBgImageID,
        progressbarBgImagePosition,
        progressbarBgImageAttachment,
        progressbarBgImageRepeat,
        progressbarBgImageSize,
        progressbarBgHoverType,
        progressbarBgHoverClassicColor,
        progressbarBgHoverGradientColor,
        progressbarBgHoverCustomGradientSwitcher,
        progressbarBgHoverCustomGradientInputValue,
        progressbarBgHoverImageUrl,
        progressbarBgHoverImageAlt,
        progressbarBgHoverImageID,
        progressbarBgHoverImagePosition,
        progressbarBgHoverImageAttachment,
        progressbarBgHoverImageRepeat,
        progressbarBgHoverImageSize,
	} = attributes;
    
    const deviceType= useDeviceType();

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "progressbar-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    /** Start load font */
    useEffect(() => {
        loadGoogleFont(progressTitleFontFamily); 
        loadGoogleFont(progressNumberFontFamily); 
    }, [progressTitleFontFamily, progressNumberFontFamily]);
    /** End load font */

    /** Start Progress Border Radius */
    const progressBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressBorderRadiusMobile: {
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
                    setAttributes({ progressBorderRadiusDesktop: { ...progressBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressBorderRadiusTablet: { ...progressBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressBorderRadiusMobile: { ...progressBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressBorderRadiusLinkBtn = () => {
        setAttributes({
            progressBorderRadiusLink: !progressBorderRadiusLink
        });
    };

    const progressBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            progressBorderRadiusUnits: {
                ...progressBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    
    /** Start Progress Title Margin */
    const progressTitleMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressTitleMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressTitleMarginMobile: {
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
                    setAttributes({ progressTitleMarginDesktop: { ...progressTitleMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressTitleMarginTablet: { ...progressTitleMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressTitleMarginMobile: { ...progressTitleMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressTitleMarginLinkBtn = () => {
        setAttributes({
            progressTitleMarginLink: !progressTitleMarginLink
        });
    };

    const progressTitleMarginUnitsHandler = (unit) => {
        setAttributes({
            progressTitleMarginUnits: {
                ...progressTitleMarginUnits,
                [deviceType]: unit
            }
        });
    };


    /** Default border radius for Progress */
    const progressDesktopBorderRadiusWidth = `${progressBorderRadiusDesktop.top}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.right}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.bottom}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.left}${progressBorderRadiusUnits.Desktop}`;
    const progressTabletBorderRadiusWidth = `${progressBorderRadiusTablet.top}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.right}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.bottom}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.left}${progressBorderRadiusUnits.Tablet}`;
    const progressMobileBorderRadiusWidth = `${progressBorderRadiusMobile.top}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.right}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.bottom}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.left}${progressBorderRadiusUnits.Mobile}`;
    /** End Progress Border Radius */


    /** Progress Title Margin */
    const progressDesktopTitleMargin = `${progressTitleMarginDesktop.top}${progressTitleMarginUnits.Desktop} ${progressTitleMarginDesktop.right}${progressTitleMarginUnits.Desktop} ${progressTitleMarginDesktop.bottom}${progressTitleMarginUnits.Desktop} ${progressTitleMarginDesktop.left}${progressTitleMarginUnits.Desktop}`;
    const progressTabletTitleMargin = `${progressTitleMarginTablet.top}${progressTitleMarginUnits.Tablet} ${progressTitleMarginTablet.right}${progressTitleMarginUnits.Tablet} ${progressTitleMarginTablet.bottom}${progressTitleMarginUnits.Tablet} ${progressTitleMarginTablet.left}${progressTitleMarginUnits.Tablet}`;
    const progressMobileTitleMargin = `${progressTitleMarginMobile.top}${progressTitleMarginUnits.Mobile} ${progressTitleMarginMobile.right}${progressTitleMarginUnits.Mobile} ${progressTitleMarginMobile.bottom}${progressTitleMarginUnits.Mobile} ${progressTitleMarginMobile.left}${progressTitleMarginUnits.Mobile}`;
    /** Progress Title Margin */

    /**
     * Get all block style
     */
    const allBlockStyle = useMemo(() => `

        .${blockID}.fb-progress-bar-main-wrapper {
            ${progressbarPositionType === 'default' ? `position: relative;` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' ? `width: 100%;` : ''}
            ${progressbarPositionType !== 'default' ? `position: ${progressbarPositionType};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset.Desktop !== undefined ? `left: ${progressbarHZLeftOffset.Desktop}${progressbarHZLeftOffsetUnits.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset.Desktop !== undefined ? `right: ${progressbarHZRightOffset.Desktop}${progressbarHZRightOffsetUnits.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset.Desktop !== undefined ? `top: ${progressbarVRTopOffset.Desktop}${progressbarVRTopOffsetUnits.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset.Desktop !== undefined ? `bottom: ${progressbarVRBottomOffset.Desktop}${progressbarVRBottomOffsetUnits.Desktop};` : ''}
            ${progressGlobalZIndex.Desktop ? `z-index: ${progressGlobalZIndex.Desktop};` : ''}
            ${progressbarOverflow !== 'default' ? `overflow: ${progressbarOverflow};` : ''}
        }
        
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
            ${progressTitleColor ? `color: ${progressTitleColor} !important;` : ''}

            ${progressTitleGlobalTypoSwitcher.fontFamily === true && progressTitleGlobalTypographyData.fontFamily ? `font-family: ${progressTitleGlobalTypographyData.fontFamily};` : ''}
            ${progressTitleGlobalTypoSwitcher.fontSize === true && progressTitleGlobalTypographyData.fontSize ? `font-size: ${progressTitleGlobalTypographyData.fontSize};` : ''}
            ${progressTitleGlobalTypoSwitcher.fontWeight === true && progressTitleGlobalTypographyData.fontWeight ? `font-weight: ${progressTitleGlobalTypographyData.fontWeight};` : ''}
            ${progressTitleGlobalTypoSwitcher.fontStyle === true && progressTitleGlobalTypographyData.fontStyle ? `font-style: ${progressTitleGlobalTypographyData.fontStyle};` : ''}
            ${progressTitleGlobalTypoSwitcher.textTransform === true && progressTitleGlobalTypographyData.textTransform ? `text-transform: ${progressTitleGlobalTypographyData.textTransform};` : ''}
            ${progressTitleGlobalTypoSwitcher.textDecoration === true && progressTitleGlobalTypographyData.textDecoration ? `text-decoration: ${progressTitleGlobalTypographyData.textDecoration};` : ''}
            ${progressTitleGlobalTypoSwitcher.letterSpacing === true && progressTitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${progressTitleGlobalTypographyData.letterSpacing};` : ''}
            ${progressTitleGlobalTypoSwitcher.lineHeight === true && progressTitleGlobalTypographyData.lineHeight ? `line-height: ${progressTitleGlobalTypographyData.lineHeight};` : ''}

            ${progressTitleGlobalTypoSwitcher.fontFamily === false && progressTitleFontFamily && progressTitleFontFamily !== 'Default' ? `font-family: ${progressTitleFontFamily};` : ''}
            ${progressTitleGlobalTypoSwitcher.fontSize === false && progressTitleFontSize.Desktop && progressTitleFontSizeUnits.Desktop ? `font-size: ${progressTitleFontSize.Desktop}${progressTitleFontSizeUnits.Desktop};` : ''}
            ${progressTitleGlobalTypoSwitcher.fontWeight === false && progressTitleFontWeight ? `font-weight: ${progressTitleFontWeight};` : ''}
            ${progressTitleGlobalTypoSwitcher.fontStyle === false && progressTitleFontStyle ? `font-style: ${progressTitleFontStyle};` : ''}
            ${progressTitleGlobalTypoSwitcher.textTransform === false && progressTitleTextTransform ? `text-transform: ${progressTitleTextTransform};` : ''}
            ${progressTitleGlobalTypoSwitcher.textDecoration === false && progressTitleTextDecoration ? `text-decoration: ${progressTitleTextDecoration};` : ''}
            ${progressTitleGlobalTypoSwitcher.letterSpacing === false && progressTitleLetterSpacing.Desktop && progressTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${progressTitleLetterSpacing.Desktop}${progressTitleLetterSpacingUnits.Desktop};` : ''}
            ${progressTitleGlobalTypoSwitcher.lineHeight === false && progressTitleLineHeight.Desktop && progressTitleLineHeightUnits.Desktop ? `line-height: ${progressTitleLineHeight.Desktop}${progressTitleLineHeightUnits.Desktop};` : ''}
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label:hover {
            color: ${progressTitleHoverColor} !important;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line {
            ${progressBgZebraTrackSwitcher === false ? `background-color: ${progressBgColor}` : ''};
            ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth.Desktop}px, transparent ${progressBgZebraTrackWidth.Desktop}px, transparent calc(${progressBgZebraTrackWidth.Desktop * 2}px));` : ''};
            ${progressBorderRadiusDesktop.top ? `border-radius: ${progressDesktopBorderRadiusWidth};` : ''}
            position: relative;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar {
            ${progressBarHeight.Desktop ? `height: ${progressBarHeight.Desktop}${progressBarHeightUnits.Desktop};` : ''}
            background-color: ${progressColor};
            ${progressBorderRadiusDesktop.top ? `border-radius: ${progressDesktopBorderRadiusWidth};` : ''}
            transition: width 0.5s ease-in-out;
            width: ${progressNumber}%;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number {
            position: absolute;
            top: -30px;
            transform: translateX(-100%);
            transition: left 0.5s ease-in-out;
            color: ${progressNumberColor};
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number:hover {
            color: ${progressNumberHoverColor};
        }

        .${blockID} .progress-bar-text-inSide-wrapper {
            background-color: ${progressBgColor};
            ${progressBorderRadiusDesktop.top ? `border-radius: ${progressDesktopBorderRadiusWidth};` : ''}
            ${progressBarHeight.Desktop ? `height: ${progressBarHeight.Desktop}${progressBarHeightUnits.Desktop};` : ''}
            overflow: hidden;
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
            background-color: ${progressColor};
            ${progressBorderRadiusDesktop.top ? `border-radius: ${progressDesktopBorderRadiusWidth};` : ''}
            transition: width 0.5s ease-in-out;
            width: ${progressNumber}%;
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info {
            ${progressBorderRadiusDesktop.top ? `border-radius: ${progressDesktopBorderRadiusWidth};` : ''}
            color: ${progressNumberColor};
            font-size: 14px;
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info:hover {
            color: ${progressNumberHoverColor};
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-progress-bar-main-wrapper {
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset.Tablet !== undefined ? `left: ${progressbarHZLeftOffset.Tablet}${progressbarHZLeftOffsetUnits.Tablet};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset.Tablet !== undefined ? `right: ${progressbarHZRightOffset.Tablet}${progressbarHZRightOffsetUnits.Tablet};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset.Tablet !== undefined ? `top: ${progressbarVRTopOffset.Tablet}${progressbarVRTopOffsetUnits.Tablet};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset.Tablet !== undefined ? `bottom: ${progressbarVRBottomOffset.Tablet}${progressbarVRBottomOffsetUnits.Tablet};` : ''}
                ${progressGlobalZIndex.Tablet ? `z-index: ${progressGlobalZIndex.Tablet};` : ''}
            }

            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
            .${blockID} .progress-bar-text-inSide-wrapper,
            .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                ${progressBorderRadiusTablet.top ? `border-radius: ${progressTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
                ${progressTitleGlobalTypoSwitcher.fontSize === false && progressTitleFontSize.Tablet && progressTitleFontSizeUnits.Tablet ? `font-size: ${progressTitleFontSize.Tablet}${progressTitleFontSizeUnits.Tablet};` : ''}
                ${progressTitleGlobalTypoSwitcher.letterSpacing === false && progressTitleLetterSpacing.Tablet && progressTitleLetterSpacingUnits.Tablet ? `letter-spacing: ${progressTitleLetterSpacing.Tablet}${progressTitleLetterSpacingUnits.Tablet};` : ''}
                ${progressTitleGlobalTypoSwitcher.lineHeight === false && progressTitleLineHeight.Tablet && progressTitleLineHeightUnits.Tablet ? `line-height: ${progressTitleLineHeight.Tablet}${progressTitleLineHeightUnits.Tablet};` : ''}   
            }

            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar {
                ${progressBarHeight.Tablet ? `height: ${progressBarHeight.Tablet}${progressBarHeightUnits.Tablet};` : ''}
                ${progressBorderRadiusTablet.top ? `border-radius: ${progressTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .progress-bar-text-inSide-wrapper {
                ${progressBorderRadiusTablet.top ? `border-radius: ${progressTabletBorderRadiusWidth};` : ''}
                ${progressBarHeight.Tablet ? `height: ${progressBarHeight.Tablet}${progressBarHeightUnits.Tablet};` : ''}
                overflow: hidden;
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID}.fb-progress-bar-main-wrapper {
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset.Mobile !== undefined ? `left: ${progressbarHZLeftOffset.Mobile}${progressbarHZLeftOffsetUnits.Mobile};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset.Mobile !== undefined ? `right: ${progressbarHZRightOffset.Mobile}${progressbarHZRightOffsetUnits.Mobile};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset.Mobile !== undefined ? `top: ${progressbarVRTopOffset.Mobile}${progressbarVRTopOffsetUnits.Mobile};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset.Mobile !== undefined ? `bottom: ${progressbarVRBottomOffset.Mobile}${progressbarVRBottomOffsetUnits.Mobile};` : ''} 
                ${progressGlobalZIndex.Mobile ? `z-index: ${progressGlobalZIndex.Mobile};` : ''}
            }

            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
            .${blockID} .progress-bar-text-inSide-wrapper,
            .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                ${progressBorderRadiusMobile.top ? `border-radius: ${progressMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label { 
                ${progressTitleGlobalTypoSwitcher.fontSize === false && progressTitleFontSize.Mobile && progressTitleFontSizeUnits.Mobile ? `font-size: ${progressTitleFontSize.Mobile}${progressTitleFontSizeUnits.Mobile};` : ''}
                ${progressTitleGlobalTypoSwitcher.letterSpacing === false && progressTitleLetterSpacing.Mobile && progressTitleLetterSpacingUnits.Mobile ? `letter-spacing: ${progressTitleLetterSpacing.Mobile}${progressTitleLetterSpacingUnits.Mobile};` : ''}
                ${progressTitleGlobalTypoSwitcher.lineHeight === false && progressTitleLineHeight.Mobile && progressTitleLineHeightUnits.Mobile ? `line-height: ${progressTitleLineHeight.Mobile}${progressTitleLineHeightUnits.Mobile};` : ''}  
            }
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar {
                ${progressBarHeight.Mobile ? `height: ${progressBarHeight.Mobile}${progressBarHeightUnits.Mobile};` : ''}
                ${progressBorderRadiusMobile.top ? `border-radius: ${progressMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .progress-bar-text-inSide-wrapper {
                ${progressBorderRadiusMobile.top ? `border-radius: ${progressMobileBorderRadiusWidth};` : ''}
                ${progressBarHeight.Mobile ? `height: ${progressBarHeight.Mobile}${progressBarHeightUnits.Mobile};` : ''}
                overflow: hidden;
            }
        }

    `, [
		blockID,
		deviceType,
        progressGlobalZIndex,
        progressbarOverflow,
		progressTextPosition,
		progressNumber,

        progressNumberColorSwitcher,
		progressNumberColor,
        progressNumberHoverColor,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,
        progressBarHeightUnits,

        progressTitleColorSwitcher,
        progressTitleColor,
        progressTitleHoverColor,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,
		progressBorderRadiusLink,

        progressTitleGlobalTypoSwitcher,
        progressTitleGlobalTypographyData,
        progressTitleGlobalTypoType,
        progressTitleGlobalTypoOption,
        progressTitleFontFamily,
        progressTitleFontSize,
        progressTitleFontSizeUnits,
        progressTitleFontWeight,
        progressTitleFontStyle,
        progressTitleTextTransform,
        progressTitleTextDecoration,
        progressTitleLetterSpacing,
        progressTitleLetterSpacingUnits,
        progressTitleLineHeight,
        progressTitleLineHeightUnits,

        progressNumberGlobalTypoSwitcher,
        progressNumberGlobalTypographyData,
        progressNumberGlobalTypoType,
        progressNumberGlobalTypoOption,
        progressNumberFontFamily,
        progressNumberFontSize,
        progressNumberFontSizeUnits,
        progressNumberFontWeight,
        progressNumberFontStyle,
        progressNumberTextTransform,
        progressNumberTextDecoration,
        progressNumberLetterSpacing,
        progressNumberLetterSpacingUnits,
        progressNumberLineHeight,
        progressNumberLineHeightUnits,

        progressDesktopBorderRadiusWidth,
        progressTabletBorderRadiusWidth,
        progressMobileBorderRadiusWidth,

        // Position
        progressbarPositionType,
        progressbarHZOrientationType,
        progressbarVROrientationType,
        progressbarHZLeftOffset,
        progressbarHZLeftOffsetUnits,
        progressbarHZRightOffset,
        progressbarHZRightOffsetUnits,
        progressbarVRTopOffset,
        progressbarVRTopOffsetUnits,
        progressbarVRBottomOffset,
        progressbarVRBottomOffsetUnits,

        progressTitleMarginUnits,
        progressTitleMarginDesktop,
        progressTitleMarginTablet,
        progressTitleMarginMobile,
    ]);

    const customCss = getCustomCss(progressGlobalCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
        <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
            <SelectControl
                label={__("Layout Type", "frontis-blocks")}
                value={progressbarType}
                options={PROGRESSBAR_TYPE}
                onChange={(value) => setAttributes({ progressbarType: value })}
            />

            <div className='text-position'>
                <SelectControl
                    label={__("Text Position", "frontis-blocks")}
                    value={progressTextPosition}
                    options={PROGRESS_TEXT_OPTIONS}
                    onChange={(value) => setAttributes({ progressTextPosition: value })}
                />
            </div>

            <div className="progress-general-wrapper">
                <div className="progress-percentage">
                    <RangeControl
                        label={__("Progress Percentage", "frontis-blocks")}
                        value={progressNumber}
                        onChange={(value) => setAttributes({ progressNumber: value })}
                        min={1}
                        max={100}
                        resetFallbackValue={50}
                    />
                </div>

                <FB_Range
                    min={0}
                    max={100}
                    label={__("progress Bar Height", "frontis-blocks")}
                    rangeValue={progressBarHeight}
                    onChangeHandler={(value) => setAttributes({ progressBarHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ progressBarHeightUnits: value })}
                    deviceType={deviceType}
                    units={progressBarHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
            </div>
        </PanelBody>
        <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
                <TextControl
                    label={__("Title", "frontis-blocks")}
                    value={progressTitle}
                    onChange={(value) => setAttributes({ progressTitle: value })}
                />

                <FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={progressHeadingTag}
                    setGlobalHtmlTag={(value) => setAttributes({ progressHeadingTag: value })}
                />
        </PanelBody>
        </>
    );
    
    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
                <ToggleControl
                    label={__("Zebra Track Color", "frontis-blocks")}
                    checked={progressZebraTrackSwitcher}
                    onChange={(value) => setAttributes({ progressZebraTrackSwitcher: value })}
                />

                <br/>

                {progressZebraTrackSwitcher && (<>
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Color Zebra Track Width", "frontis-blocks")}
                        rangeValue={progressZebraTrackWidth}
                        onChangeHandler={(value) => setAttributes({ progressZebraTrackWidth: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                    <FB_ColorControl
                        label={__("Progress Color", "frontis-blocks")}
                        globalColor={progressColor}
                        setGlobalColor={(value) => setAttributes({ progressColor: value })}
                    />
                </>)}

                {!progressZebraTrackSwitcher &&(
                        <FB_BackgroundColorControl
                            label={__("Progress Color", "frontis-blocks")}
                            normalLabel = {__("Progress Color", "frontis-blocks")}
                            bgColorSwitcher={progressColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ progressColorSwitcher: value })
                            }
                            normalBackgroundType={progressbarType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ progressType: value })
                            }
                            normalClassicColor={progressColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ progressColor: value })
                            }
                            normalGradientColor={progressGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ progressGradientColor: value })
                            }
                            normalCustomGradientSwitcher={
                                progressCustomGradientSwitcher
                            }
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={
                                progressCustomGradientInputValue
                            }
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={progressImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ progressImageUrl: value })
                            }
                            normalBackgroundImageAlt={progressImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ progressImageAlt: value })
                            }
                            normalBackgroundImageID={progressImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ progressImageID: value })
                            }
                            normalBackgroundImagePosition={
                                progressImagePosition
                            }
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    progressImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={
                                progressImageAttachment
                            }
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    progressImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={
                                progressImageRepeat
                            }
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    progressImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={progressImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ progressImageSize: value })
                            }
                            isBackgroundHover={false}
                        />
                )}

                <ToggleControl
                    label={__("Zebra Track Background", "frontis-blocks")}
                    checked={progressBgZebraTrackSwitcher}
                    onChange={(value) => setAttributes({ progressBgZebraTrackSwitcher: value })}
                />

                <br/>

                {progressBgZebraTrackSwitcher && (<>
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Background Zebra Track Width", "frontis-blocks")}
                        rangeValue={progressBgZebraTrackWidth}
                        onChangeHandler={(value) => setAttributes({ progressBgZebraTrackWidth: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />

                    <FB_ColorControl
                        label={__("Background Color", "frontis-blocks")}
                        globalColor={progressBgColor}
                        setGlobalColor={(value) => setAttributes({ progressBgColor: value })}
                    />
                </>)}

                {!progressBgZebraTrackSwitcher && (
                    <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            normalLabel = {__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={progressBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ progressBgColorSwitcher: value })
                            }
                            normalBackgroundType={progressBgType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ progressBgType: value })
                            }
                            normalClassicColor={progressBgColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ progressBgColor: value })
                            }
                            normalGradientColor={progressBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ progressBgGradientColor: value })
                            }
                            normalCustomGradientSwitcher={
                                progressBgCustomGradientSwitcher
                            }
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={
                                progressBgCustomGradientInputValue
                            }
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={progressBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ progressBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={progressBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ progressBgImageAlt: value })
                            }
                            normalBackgroundImageID={progressBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ progressBgImageID: value })
                            }
                            normalBackgroundImagePosition={
                                progressBgImagePosition
                            }
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    progressBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={
                                progressBgImageAttachment
                            }
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    progressBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={
                                progressBgImageRepeat
                            }
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    progressBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={progressBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ progressBgImageSize: value })
                            }
                            isBackgroundHover={false}
                        />
                )}


                <FB_Spacing 
                    label={__("Radius Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressBorderRadiusUnitsHandler}
                    spacingUnits={progressBorderRadiusUnits}
                    spacingDesktop={progressBorderRadiusDesktop}
                    spacingTablet={progressBorderRadiusTablet}
                    spacingMobile={progressBorderRadiusMobile}
                    handleSpacingUnitHandler={progressBorderRadiusUnitsChange}
                    spacingCombineBtn={progressBorderRadiusLink}
                    spacingCombineBtnHandler={progressBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__("Number", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={progressNumberGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ progressNumberGlobalTypographyData: value })}

                    globalTypoType={progressNumberGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            progressNumberGlobalTypoType: value, 
                            progressNumberGlobalTypoSwitcher: value === 'default' ? {...progressNumberGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...progressNumberGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={progressNumberGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ progressNumberGlobalTypoOption: value })}

                    fontFamily={progressNumberFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ progressNumberFontFamily: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={progressNumberFontSize}
                    onChangeFontSize={(value) => setAttributes({ progressNumberFontSize: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={progressNumberFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ progressNumberFontSizeUnits: value })}

                    fontWeight={progressNumberFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ progressNumberFontWeight: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={progressNumberFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ progressNumberFontStyle: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={progressNumberTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ progressNumberTextTransform: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={progressNumberTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ progressNumberTextDecoration: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={progressNumberLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ progressNumberLetterSpacing: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={progressNumberLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ progressNumberLetterSpacingUnits: value })}

                    lineHeight={progressNumberLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ progressNumberLineHeight: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={progressNumberLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ progressNumberLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Number Color", "frontis-blocks")}
                    globalSwitcher={progressNumberColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ progressNumberColorSwitcher: value })}
                />

                {progressNumberColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={progressNumberColor}
                        setGlobalColor={(value) => setAttributes({ progressNumberColor: value })}
                    />
                )}

                {progressNumberColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={progressNumberHoverColor}
                        setGlobalColor={(value) => setAttributes({ progressNumberHoverColor: value })}
                    />
                )}
            </PanelBody>

            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={progressTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ progressTitleGlobalTypoSwitcher: value })}

                    globalTypoType={progressTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            progressTitleGlobalTypoType: value, 
                            progressTitleGlobalTypoSwitcher: value === 'default' ? {...progressTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...progressTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={progressTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ progressTitleGlobalTypoOption: value })}

                    fontFamily={progressTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ progressTitleFontFamily: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={progressTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ progressTitleFontSize: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={progressTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ progressTitleFontSizeUnits: value })}

                    fontWeight={progressTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ progressTitleFontWeight: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={progressTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ progressTitleFontStyle: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={progressTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ progressTitleTextTransform: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={progressTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ progressTitleTextDecoration: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={progressTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ progressTitleLetterSpacing: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={progressTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ progressTitleLetterSpacingUnits: value })}

                    lineHeight={progressTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ progressTitleLineHeight: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={progressTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ progressTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={progressTitleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ progressTitleColorSwitcher: value })}
                />

                {progressColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={progressTitleColor}
                        setGlobalColor={(value) => setAttributes({ progressTitleColor: value })}
                    />
                )}

                {progressColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={progressTitleHoverColor}
                        setGlobalColor={(value) => setAttributes({ progressTitleHoverColor: value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressTitleMarginUnitsHandler}
                    spacingUnits={progressTitleMarginUnits}
                    spacingDesktop={progressTitleMarginDesktop}
                    spacingTablet={progressTitleMarginTablet}
                    spacingMobile={progressTitleMarginMobile}
                    handleSpacingUnitHandler={progressTitleMarginUnitsChange}
                    spacingCombineBtn={progressTitleMarginLink}
                    spacingCombineBtnHandler={progressTitleMarginLinkBtn}
                    setAttributes={setAttributes}
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
                            rangeValue={progressGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ progressGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={progressbarOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ progressbarOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={progressbarPositionType}
                            setPositionType={(value) => setAttributes({ progressbarPositionType: value })}
                                                                            
                            HZOrientationType={progressbarHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ progressbarHZOrientationType: value })
                            }
                            VROrientationType={progressbarVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ progressbarVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={progressbarHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ progressbarHZLeftOffset: value })}
                            HZLeftOffsetUnits={progressbarHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ progressbarHZLeftOffsetUnits: value })}
                            HZRightOffset={progressbarHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ progressbarHZRightOffset: value })}
                            HZRightOffsetUnits={progressbarHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ progressbarHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={progressbarVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ progressbarVRTopOffset: value })}
                            VRTopOffsetUnits={progressbarVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ progressbarVRTopOffsetUnits: value })}
                            VRBottomOffset={progressbarVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ progressbarVRBottomOffset: value })}
                            VRBottomOffsetUnits={progressbarVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ progressbarVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={progressGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ progressGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />
                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={progressGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ progressGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                        
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={progressbarBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ progressbarBgColorSwitcher: value })
                            }
                            normalBackgroundType={progressbarBgType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ progressbarBgType: value })
                            }
                            normalClassicColor={progressbarBgClassicColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ progressbarBgClassicColor: value })
                            }
                            normalGradientColor={progressbarBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ progressbarBgGradientColor: value })
                            }
                            normalCustomGradientSwitcher={
                                progressbarBgCustomGradientSwitcher
                            }
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressbarBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={
                                progressbarBgCustomGradientInputValue
                            }
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressbarBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={progressbarBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ progressbarBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={progressbarBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ progressbarBgImageAlt: value })
                            }
                            normalBackgroundImageID={progressbarBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ progressbarBgImageID: value })
                            }
                            normalBackgroundImagePosition={
                                progressbarBgImagePosition
                            }
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    progressbarBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={
                                progressbarBgImageAttachment
                            }
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    progressbarBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={
                                progressbarBgImageRepeat
                            }
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    progressbarBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={progressbarBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ progressbarBgImageSize: value })
                            }
                            hoverBackgroundType={progressbarBgHoverType}
                            setHoverBackgroundType ={(value) =>
                                setAttributes({ progressbarBgHoverType: value })
                            }
                            hoverClassicColor={progressbarBgHoverClassicColor}
                            setHoverClassicColor={(value) =>
                                setAttributes({ progressbarBgHoverClassicColor: value })
                            }
                            hoverGradientColor={progressbarBgHoverGradientColor}
                            setHoverGradientColor={(value) =>
                                setAttributes({ progressbarBgHoverGradientColor: value })
                            }
                            hoverCustomGradientSwitcher={
                                progressbarBgHoverCustomGradientSwitcher
                            }
                            setHoverCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressbarBgHoverCustomGradientSwitcher: value,
                                })
                            }
                            hoverCustomGradientInputValue={
                                progressbarBgHoverCustomGradientInputValue
                            }
                            setHoverCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressbarBgHoverCustomGradientInputValue: value,
                                })
                            }
                            hoverBackgroundImageUrl={progressbarBgHoverImageUrl}
                            setBgHoverImageUrl={(value) =>
                                setAttributes({ progressbarBgHoverImageUrl: value })
                            }
                            hoverBackgroundImageAlt={progressbarBgHoverImageAlt}
                            setBgHoverImageAlt={(value) =>
                                setAttributes({ progressbarBgHoverImageAlt: value })
                            }
                            hoverBackgroundImageID={progressbarBgHoverImageID}
                            setBgHoverImageID={(value) =>
                                setAttributes({ progressbarBgHoverImageID: value })
                            }
                            hoverBackgroundImagePosition={
                                progressbarBgHoverImagePosition
                            }
                            setBgHoverImagePosition={(value) =>
                                setAttributes({
                                    progressbarBgHoverImagePosition: value,
                                })
                            }
                            hoverBackgroundImageAttachment={
                                progressbarBgHoverImageAttachment
                            }
                            setBgHoverImageAttachment={(value) =>
                                setAttributes({
                                    progressbarBgHoverImageAttachment: value,
                                })
                            }
                            hoverBackgroundImageRepeat={
                                progressbarBgHoverImageRepeat
                            }
                            setBgHoverImageRepeat={(value) =>
                                setAttributes({
                                    progressbarBgHoverImageRepeat: value,
                                })
                            }
                            hoverBackgroundImageSize={progressbarBgHoverImageSize}
                            setBgHoverImageSize={(value) =>
                                setAttributes({ progressbarBgHoverImageSize: value })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={progressbarDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ progressbarDesktopSwitcher: value })}

                            tabletValue={progressbarTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ progressbarTabletSwitcher: value })}

                            mobileValue={progressbarMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ progressbarMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >   
                        <FB_CustomCSSEditor  
                            value={progressGlobalCustomCSS} 
                            onChangeValue={(value) => setAttributes({ progressGlobalCustomCSS: value })}
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