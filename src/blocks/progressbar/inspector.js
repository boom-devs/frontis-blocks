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


import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		// deviceType,
        progressGlobalZIndex,
        progressbarOverflow,
		progressTextPosition,
		progressNumber,

        progressColorSwitcher,
		progressColor,
        progressHoverColor,

        progressTextColorSwitcher,
		progressTextColor,
        progressTextHoverColor,

        progressBgColorSwitcher,
		progressBgColor,
        progressBgHoverColor,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,
		progressBorderRadiusLink,

        progressGlobalTypoSwitcher,
        progressGlobalTypographyData,
        progressGlobalTypoType,
        progressFontFamily,
        progressFontSize,
        progressFontSizeUnits,
        progressFontWeight,
        progressFontStyle,
        progressTextTransform,
        progressTextDecoration,
        progressLetterSpacing,
        progressLetterSpacingUnits,
        progressLineHeight,
        progressLineHeightUnits,

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
	} = attributes;
    
    const deviceType= useDeviceType();
    
    useEffect(() => {
        if (!blockID) {
            setAttributes({
                blockID: "progressbar-" + clientId.slice(0, 8),
            });
        }
    }, [blockID, clientId, setAttributes]);

    /** Start load font */
    useEffect(() => {
        loadGoogleFont(progressFontFamily); 
    }, [progressFontFamily]);
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

    /** Default border radius for Progress */
    const progressDesktopBorderRadiusWidth = `${progressBorderRadiusDesktop.top}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.right}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.bottom}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.left}${progressBorderRadiusUnits.Desktop}`;
    const progressTabletBorderRadiusWidth = `${progressBorderRadiusTablet.top}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.right}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.bottom}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.left}${progressBorderRadiusUnits.Tablet}`;
    const progressMobileBorderRadiusWidth = `${progressBorderRadiusMobile.top}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.right}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.bottom}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.left}${progressBorderRadiusUnits.Mobile}`;
    /** End Progress Border Radius */


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
            ${progressTextColor ? `color: ${progressTextColor} !important;` : ''}

            ${progressGlobalTypoSwitcher.fontFamily === true && progressGlobalTypographyData.fontFamily ? `font-family: ${progressGlobalTypographyData.fontFamily};` : ''}
            ${progressGlobalTypoSwitcher.fontSize === true && progressGlobalTypographyData.fontSize ? `font-size: ${progressGlobalTypographyData.fontSize};` : ''}
            ${progressGlobalTypoSwitcher.fontWeight === true && progressGlobalTypographyData.fontWeight ? `font-weight: ${progressGlobalTypographyData.fontWeight};` : ''}
            ${progressGlobalTypoSwitcher.fontStyle === true && progressGlobalTypographyData.fontStyle ? `font-style: ${progressGlobalTypographyData.fontStyle};` : ''}
            ${progressGlobalTypoSwitcher.textTransform === true && progressGlobalTypographyData.textTransform ? `text-transform: ${progressGlobalTypographyData.textTransform};` : ''}
            ${progressGlobalTypoSwitcher.textDecoration === true && progressGlobalTypographyData.textDecoration ? `text-decoration: ${progressGlobalTypographyData.textDecoration};` : ''}
            ${progressGlobalTypoSwitcher.letterSpacing === true && progressGlobalTypographyData.letterSpacing ? `letter-spacing: ${progressGlobalTypographyData.letterSpacing};` : ''}
            ${progressGlobalTypoSwitcher.lineHeight === true && progressGlobalTypographyData.lineHeight ? `line-height: ${progressGlobalTypographyData.lineHeight};` : ''}

            ${progressGlobalTypoSwitcher.fontFamily === false && progressFontFamily ? `font-family: ${progressFontFamily};` : ''}
            ${progressGlobalTypoSwitcher.fontSize === false && progressFontSize.Desktop && progressFontSizeUnits.Desktop ? `font-size: ${progressFontSize.Desktop}${progressFontSizeUnits.Desktop};` : ''}
            ${progressGlobalTypoSwitcher.fontWeight === false && progressFontWeight ? `font-weight: ${progressFontWeight};` : ''}
            ${progressGlobalTypoSwitcher.fontStyle === false && progressFontStyle ? `font-style: ${progressFontStyle};` : ''}
            ${progressGlobalTypoSwitcher.textTransform === false && progressTextTransform ? `text-transform: ${progressTextTransform};` : ''}
            ${progressGlobalTypoSwitcher.textDecoration === false && progressTextDecoration ? `text-decoration: ${progressTextDecoration};` : ''}
            ${progressGlobalTypoSwitcher.letterSpacing === false && progressLetterSpacing.Desktop && progressLetterSpacingUnits.Desktop ? `letter-spacing: ${progressLetterSpacing.Desktop}${progressLetterSpacingUnits.Desktop};` : ''}
            ${progressGlobalTypoSwitcher.lineHeight === false && progressLineHeight.Desktop && progressLineHeightUnits.Desktop ? `line-height: ${progressLineHeight.Desktop}${progressLineHeightUnits.Desktop};` : ''}
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label:hover {
            color: ${progressTextHoverColor} !important;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line {
            background-color: ${progressBgColor};
            border-radius: ${progressDesktopBorderRadiusWidth};
            position: relative;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line:hover {
            background-color: ${progressBgHoverColor};
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar {
            height: ${progressBarHeight ? `${progressBarHeight}px` : '2px'};
            background-color: ${progressColor};
            border-radius: ${progressDesktopBorderRadiusWidth};
            transition: width 0.5s ease-in-out;
            width: ${progressNumber}%;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar:hover {
            background-color: ${progressHoverColor};
            transition: ease-in-out .5s;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number {
            position: absolute;
            top: -30px;
            transform: translateX(-100%);
            transition: left 0.5s ease-in-out;
            color: ${progressTextColor};
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number:hover {
            color: ${progressTextHoverColor};
        }

        .${blockID} .progress-bar-text-inSide-wrapper {
            background-color: ${progressBgColor};
            border-radius: ${progressDesktopBorderRadiusWidth};
            height: ${progressBarHeight ? `${progressBarHeight}px` : '30px'};
            overflow: hidden;
        }
        .${blockID} .progress-bar-text-inSide-wrapper:hover {
            background-color: ${progressBgHoverColor};
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
            background-color: ${progressColor};
            border-radius: ${progressDesktopBorderRadiusWidth};
            transition: width 0.5s ease-in-out;
            width: ${progressNumber}%;
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label:hover {
            background-color: ${progressHoverColor};
            transition: ease-in-out .5s;
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info {
            border-radius: ${progressDesktopBorderRadiusWidth};
            color: ${progressTextColor};
            font-size: 14px;
        }
        .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info:hover {
            color: ${progressTextHoverColor};
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
                border-radius: ${progressTabletBorderRadiusWidth} !important;                     
            }

            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
                ${progressGlobalTypoSwitcher.fontSize === false && progressFontSize.Tablet && progressFontSizeUnits.Tablet ? `font-size: ${progressFontSize.Tablet}${progressFontSizeUnits.Tablet};` : ''}
                ${progressGlobalTypoSwitcher.letterSpacing === false && progressLetterSpacing.Tablet && progressLetterSpacingUnits.Tablet ? `letter-spacing: ${progressLetterSpacing.Tablet}${progressLetterSpacingUnits.Tablet};` : ''}
                ${progressGlobalTypoSwitcher.lineHeight === false && progressLineHeight.Tablet && progressLineHeightUnits.Tablet ? `line-height: ${progressLineHeight.Tablet}${progressLineHeightUnits.Tablet};` : ''}   
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
                border-radius: ${progressMobileBorderRadiusWidth} !important;                      
            }
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label { 
                ${progressGlobalTypoSwitcher.fontSize === false && progressFontSize.Mobile && progressFontSizeUnits.Mobile ? `font-size: ${progressFontSize.Mobile}${progressFontSizeUnits.Mobile};` : ''}
                ${progressGlobalTypoSwitcher.letterSpacing === false && progressLetterSpacing.Mobile && progressLetterSpacingUnits.Mobile ? `letter-spacing: ${progressLetterSpacing.Mobile}${progressLetterSpacingUnits.Mobile};` : ''}
                ${progressGlobalTypoSwitcher.lineHeight === false && progressLineHeight.Mobile && progressLineHeightUnits.Mobile ? `line-height: ${progressLineHeight.Mobile}${progressLineHeightUnits.Mobile};` : ''}  
            }
        }

    `, [
		blockID,
		deviceType,
        progressGlobalZIndex,
        progressbarOverflow,
		progressTextPosition,
		progressNumber,

        progressColorSwitcher,
		progressColor,
        progressHoverColor,

        progressTextColorSwitcher,
		progressTextColor,
        progressTextHoverColor,

        progressBgColorSwitcher,
		progressBgColor,
        progressBgHoverColor,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,
		progressBorderRadiusLink,

        progressGlobalTypoSwitcher,
        progressGlobalTypographyData,
        progressGlobalTypoType,
        progressFontFamily,
        progressFontSize,
        progressFontSizeUnits,
        progressFontWeight,
        progressFontStyle,
        progressTextTransform,
        progressTextDecoration,
        progressLetterSpacing,
        progressLetterSpacingUnits,
        progressLineHeight,
        progressLineHeightUnits,

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
    ]);

    const customCss = getCustomCss(progressGlobalCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();


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
                                {tab.name === 'general' && (
                                    <>
                                        <PanelBody title={__("General Info", "frontis-blocks")} initialOpen={true}>
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

                                                <div className="progress-bar-height">
                                                    <RangeControl
                                                        label={__("progress Bar Height", "frontis-blocks")}
                                                        value={progressBarHeight}
                                                        onChange={(value) => setAttributes({ progressBarHeight: value })}
                                                        min={1}
                                                        max={100}
                                                        resetFallbackValue={30}
                                                    />
                                                </div>

                                                <div className="progress-title">
                                                    <TextControl
                                                        label={__("Title", "frontis-blocks")}
                                                        value={progressTitle}
                                                        onChange={(value) => setAttributes({ progressTitle: value })}
                                                    />
                                                </div>

                                                <div className='progress-heading-tag-wrapper'>
                                                    <BaseControl
                                                        label={__("Heading Tag", "frontis-blocks")}
                                                            id="fb-setting-text-alignment"
                                                            className="fb-setting-text-alignment"
                                                    >
                                                        <ButtonGroup
                                                            className="fb-setting-text-alignment-group-btn"
                                                        >
                                                            {HEADING.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ progressHeadingTag: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${ progressHeadingTag === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </BaseControl>
                                                </div>
                                            </div>
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Style", "frontis-blocks")} initialOpen={true}>
                                            <FB_TypographyControl
                                                globalTypoControlActive={true}
                                                globalTypoSwitcher={progressGlobalTypoSwitcher}
                                                storeGlobalTypographyData={(value) => setAttributes({ progressGlobalTypographyData: value })}

                                                globalTypoType={progressGlobalTypoType}
                                                onChangeGlobalTypoType={(value) => {
                                                    setAttributes({ 
                                                        progressGlobalTypoType: value, 
                                                        progressGlobalTypoSwitcher: value === 'default' ? {...progressGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...progressGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                                    })
                                                }}

                                                fontFamily={progressFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ progressFontFamily: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, fontFamily: value && false} })}

                                                fontSize={progressFontSize}
                                                onChangeFontSize={(value) => setAttributes({ progressFontSize: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, fontSize: value && false} })}

                                                fontSizeUnits={progressFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ progressFontSizeUnits: value })}

                                                fontWeight={progressFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ progressFontWeight: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, fontWeight: value && false} })}

                                                fontStyle={progressFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ progressFontStyle: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, fontStyle: value && false} })}

                                                textTransform={progressTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ progressTextTransform: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, textTransform: value && false} })}

                                                textDecoration={progressTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ progressTextDecoration: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, textDecoration: value && false} })}

                                                letterSpacing={progressLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ progressLetterSpacing: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, letterSpacing: value && false} })}

                                                letterSpacingUnits={progressLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ progressLetterSpacingUnits: value })}

                                                lineHeight={progressLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ progressLineHeight: value, progressGlobalTypoSwitcher: {...progressGlobalTypoSwitcher, lineHeight: value && false} })}

                                                lineHeightUnits={progressLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ progressLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_SwitcherControl
													label={__("Color", "frontis-blocks")}
													globalSwitcher={progressColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ progressColorSwitcher: value })}
											/>

											{progressColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={progressColor}
													setGlobalColor={(value) => setAttributes({ progressColor: value })}
												/>
											)}

											{progressColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={progressHoverColor}
													setGlobalColor={(value) => setAttributes({ progressHoverColor: value })}
												/>
											)}

                                            <FB_SwitcherControl
													label={__("Label Color", "frontis-blocks")}
													globalSwitcher={progressTextColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ progressTextColorSwitcher: value })}
											/>

											{progressTextColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={progressTextColor}
													setGlobalColor={(value) => setAttributes({ progressTextColor: value })}
												/>
											)}

											{progressTextColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={progressTextHoverColor}
													setGlobalColor={(value) => setAttributes({ progressTextHoverColor: value })}
												/>
											)}

                                            <FB_SwitcherControl
													label={__("Base Color", "frontis-blocks")}
													globalSwitcher={progressBgColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ progressBgColorSwitcher: value })}
											/>

											{progressBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={progressBgColor}
													setGlobalColor={(value) => setAttributes({ progressBgColor: value })}
												/>
											)}

											{progressBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={progressBgHoverColor}
													setGlobalColor={(value) => setAttributes({ progressBgHoverColor: value })}
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
                                    </>
                                )}

                                {tab.name === "advanced" && (
                                    <>
                                        <div className="fb-setting-advanced-tab-wrapper">
                                            <div className="fb-setting-inner-wrapper">
                                                <PanelBody
                                                    title={__("Advanced", "frontis-blocks")}
                                                    initialOpen={true}
                                                    className='fb-setting-z-index-header'
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
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>
        </>
    );
}