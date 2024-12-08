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
} from '@wordpress/components';

import {
    PROGRESS_TEXT_OPTIONS,
	HEADING,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
        progressGlobalZIndex,
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

	} = attributes;
    
    useEffect(() => {
        if (!blockID) {
            setAttributes({
                blockID: "progressbar-" + clientId.slice(0, 8),
            });
        }
    }, [blockID, clientId, setAttributes]);

    // Helper function to load fonts
    const loadFont = (fontFamily) => {
        if (fontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${fontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    };

    // Apply font family styles using useEffect
    useEffect(() => {
        loadFont(progressFontFamily);
    }, [progressFontFamily]);

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

        .${blockID} .progress-bar-wrapper {
            ${progressGlobalZIndex.Desktop ? `z-index: ${progressGlobalZIndex.Desktop};` : ''}
            position: relative;
        }
        .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
            ${progressTextColor ? `color: ${progressTextColor} !important;` : ''}
            ${progressFontFamily ? `font-family: ${progressFontFamily};` : ''}
            ${progressFontSize.Desktop && progressFontSizeUnits.Desktop ? `font-size: ${progressFontSize.Desktop}${progressFontSizeUnits.Desktop};` : ''}
            ${progressFontWeight ? `font-weight: ${progressFontWeight};` : ''}
            ${progressFontStyle ? `font-style: ${progressFontStyle};` : ''}
            ${progressTextTransform ? `text-transform: ${progressTextTransform};` : ''}
            ${progressTextDecoration ? `text-decoration: ${progressTextDecoration};` : ''}
            ${progressLetterSpacing.Desktop && progressLetterSpacingUnits.Desktop ? `letter-spacing: ${progressLetterSpacing.Desktop}${progressLetterSpacingUnits.Desktop};` : ''}
            ${progressLineHeight.Desktop && progressLineHeightUnits.Desktop ? `line-height: ${progressLineHeight.Desktop}${progressLineHeightUnits.Desktop};` : ''}
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

            .${blockID} .progress-bar-wrapper {
                ${progressGlobalZIndex.Tablet ? `z-index: ${progressGlobalZIndex.Tablet};` : ''}
                position: relative;
            }
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
            .${blockID} .progress-bar-text-inSide-wrapper,
            .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                border-radius: ${progressTabletBorderRadiusWidth} !important;                     
            }

            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
                ${progressFontSize.Tablet && progressFontSizeUnits.Tablet ? `font-size: ${progressFontSize.Tablet}${progressFontSizeUnits.Tablet};` : ''}
                ${progressLetterSpacing.Tablet && progressLetterSpacingUnits.Tablet ? `letter-spacing: ${progressLetterSpacing.Tablet}${progressLetterSpacingUnits.Tablet};` : ''}
                ${progressLineHeight.Tablet && progressLineHeightUnits.Tablet ? `line-height: ${progressLineHeight.Tablet}${progressLineHeightUnits.Tablet};` : ''}   
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID} .progress-bar-wrapper {
                ${progressGlobalZIndex.Mobile ? `z-index: ${progressGlobalZIndex.Mobile};` : ''}
                position: relative;
            }
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
            .${blockID} .progress-bar-text-inSide-wrapper,
            .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                border-radius: ${progressMobileBorderRadiusWidth} !important;                      
            }
            .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label { 
                ${progressFontSize.Mobile && progressFontSizeUnits.Mobile ? `font-size: ${progressFontSize.Mobile}${progressFontSizeUnits.Mobile};` : ''}
                ${progressLetterSpacing.Mobile && progressLetterSpacingUnits.Mobile ? `letter-spacing: ${progressLetterSpacing.Mobile}${progressLetterSpacingUnits.Mobile};` : ''}
                ${progressLineHeight.Mobile && progressLineHeightUnits.Mobile ? `line-height: ${progressLineHeight.Mobile}${progressLineHeightUnits.Mobile};` : ''}  
            }
        }

    `, [
		blockID,
		deviceType,
        progressGlobalZIndex,
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

    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle]);

    const editorStyle = allBlockStyle.replace(/\s+/g, ' ').trim();


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
                                                        allowReset
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
                                                        allowReset
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
                                                fontFamily={progressFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ progressFontFamily: value })}
                                                
                                                fontSize={progressFontSize}
                                                onChangeFontSize={(value) => setAttributes({ progressFontSize: value })}
                                                
                                                fontSizeUnits={progressFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ progressFontSizeUnits: value })}
                                                
                                                fontWeight={progressFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ progressFontWeight: value })}
                                                
                                                fontStyle={progressFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ progressFontStyle: value })}
                                                
                                                textTransform={progressTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ progressTextTransform: value })}
                                                
                                                textDecoration={progressTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ progressTextDecoration: value })}
                                                
                                                letterSpacing={progressLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ progressLetterSpacing: value })}
                                                
                                                letterSpacingUnits={progressLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ progressLetterSpacingUnits: value })}
                                                
                                                lineHeight={progressLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ progressLineHeight: value })}
                                                
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
                                                    title={__("Z Index", "frontis-blocks")}
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