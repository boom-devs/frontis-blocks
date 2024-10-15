import { __ } from '@wordpress/i18n';

import { 
    InspectorControls, 
} from '@wordpress/block-editor';

import { 
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    TEXT_ALIGN,
    ICON_ALIGN,
    BORDER_STYLES,
} from "./constants/constants";

import { useState, useEffect } from "@wordpress/element";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_UrlControl from '@Components/url-control';

import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const { 
        blockId,
        deviceType,
        buttonAlignment,
        buttonText,
        buttonUrl,
        buttonTargetUrl,
        buttonWidth,
        buttonWidthUnits,

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
        buttonBgColorSwitcher,
        buttonBgColor,
        buttonBgHoverColor,
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

        buttonboxShadowValues,
        buttonboxShadowCssValue,

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
        buttonZIndex,
        buttonZIndexUnits,
        customCSS,
    } = attributes;    
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-button-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


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



    /* set default values for the style attributes */
    useEffect(() => {
        if (buttonFontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${buttonFontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    }, [buttonFontFamily]);

    const iconHandler = (IconName) => {
		setAttributes({buttonIcon: IconName})

	}

    console.log(buttonboxShadowCssValue);
    
    
    return (
        <>
            <style>
            {` 
                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button {
                    ${buttonBgColor ? `background-color: ${buttonBgColor};` : ''}
                    ${buttonFontFamily ? `font-family: ${buttonFontFamily};` : ''}
                    ${buttonFontSize.Desktop && buttonFontSizeUnits.Desktop ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ''}
                    ${buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
                    ${buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
                    ${buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
                    ${buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
                    ${buttonLetterSpacing.Desktop && buttonLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ''}
                    ${buttonLineHeight.Desktop && buttonLineHeightUnits.Desktop ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ''}
                    ${buttonDesktopPaddingStr ? `padding: ${buttonDesktopPaddingStr};` : ''}
                    ${buttonDesktopMarginStr ? `margin: ${buttonDesktopMarginStr};` : ''}
                    ${buttonBorder ? `border: ${buttonBorder};` : ''}
                    ${buttonDesktopBorderWidthStr ? `border-width: ${buttonDesktopBorderWidthStr};` : ''}
                    ${buttonDesktopBorderRadiusStr ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ''}
                    ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
                    ${buttonboxShadowCssValue ? `box-shadow: ${buttonboxShadowCssValue};` : ''}
                    ${buttonZIndex.Desktop && buttonZIndexUnits.Desktop ? `z-index: ${buttonZIndex.Desktop}${buttonZIndexUnits.Desktop};` : ''}
                    ${buttonWidth.Desktop && buttonWidthUnits.Desktop ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};` : ''}
                    display: ${buttonAlignment === 'justify' ? 'flex' : 'inline-flex'};
                    transition: all 0.3s ease;
                }

                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button:hover {
                    ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
                }

                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button .fb-advanced-button-text {
                    ${buttonColor !== undefined ? `color: ${buttonColor};` : ''}
                }
                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button:hover .fb-advanced-button-text {
                    ${buttonHoverColor !== undefined ? `color: ${buttonHoverColor};` : ''}
                }

                .fb-advanced-button-wrapper.${blockId} .fb-advanced-button:hover {
                    ${buttonBgHoverColor !== undefined ? `background-color: ${buttonBgHoverColor};` : ''}
                }
                @media only screen and (max-width: 1024px) {
                    .fb-advanced-button-wrapper.${blockId} .fb-advanced-button {
                        ${buttonTabletPaddingStr ? `padding: ${buttonTabletPaddingStr};` : ''}
                        ${buttonTabletMarginStr ? `margin: ${buttonTabletMarginStr};` : ''}
                        ${buttonBorder ? `border: ${buttonBorder};` : ''}
                        ${buttonTabletBorderWidthStr ? `border-width: ${buttonTabletBorderWidthStr};` : ''}
                        ${buttonTabletBorderRadiusStr ? `border-radius: ${buttonTabletBorderRadiusStr};` : ''}
                        ${buttonWidth.Tablet && buttonWidthUnits.Tablet ? `width: ${buttonWidth.Tablet}${buttonWidthUnits.Tablet};` : ''}
                        ${buttonFontSize.Tablet && buttonFontSizeUnits.Tablet ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : ''}
                        ${buttonLetterSpacing.Tablet && buttonLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : ''}
                        ${buttonLineHeight.Tablet && buttonLineHeightUnits.Tablet ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : ''}
                        ${buttonZIndex.Tablet && buttonZIndexUnits.Tablet ? `z-index: ${buttonZIndex.Tablet}${buttonZIndexUnits.Tablet};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-button-wrapper.${blockId} .fb-advanced-button {
                        ${buttonMobilePaddingStr ? `padding: ${buttonMobilePaddingStr};` : ''}
                        ${buttonMobileMarginStr ? `margin: ${buttonMobileMarginStr};` : ''}
                        ${buttonBorder ? `border: ${buttonBorder};` : ''}
                        ${buttonMobileBorderWidthStr ? `border-width: ${buttonMobileBorderWidthStr};` : ''}
                        ${buttonMobileBorderRadiusStr ? `border-radius: ${buttonMobileBorderRadiusStr};` : ''}
                        ${buttonWidth.Mobile && buttonWidthUnits.Mobile ? `width: ${buttonWidth.Mobile}${buttonWidthUnits.Mobile};` : ''}
                        ${buttonFontSize.Mobile && buttonFontSizeUnits.Mobile ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : ''}
                        ${buttonLetterSpacing.Mobile && buttonLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : ''}
                        ${buttonLineHeight.Mobile && buttonLineHeightUnits.Mobile ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : ''}
                        ${buttonZIndex.Mobile && buttonZIndexUnits.Mobile ? `z-index: ${buttonZIndex.Mobile}${buttonZIndexUnits.Mobile};` : ''}
                }
            `}
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
                                        <div className="fb-advanced-button-wrapper">
                                            <PanelBody
                                                title={__("Button", "frontis-blocks")}
                                                initialOpen={true}
                                            >
                                                <BaseControl
                                                    label={__("Alignment", "frontis-blocks")}
                                                    id="fb-setting-text-alignment"
                                                    className="fb-setting-text-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-setting-text-alignment-group-btn"
                                                    >
                                                        {TEXT_ALIGN.map((item, key) => (
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

                                                <TextControl
                                                    label={__("Text", "frontis-blocks")}
                                                    value={buttonText}
                                                    onChange={(value) => setAttributes({ buttonText: value })}
                                                    className="fb-advanced-button-text"
                                                />
                                                <FB_UrlControl
                                                    url={buttonUrl}
                                                    onChangeUrl={(value) => setAttributes({ buttonUrl: value })}
                                                    openInNewTab={buttonTargetUrl}
                                                    onChangeOpenInNewTab={(value) => setAttributes({ buttonTargetUrl: value })}
                                                />
                                                <div className='fb-advanced-btn-icon-wrapper'>
                                                    <BaseControl
                                                        label={__("Icon", "frontis-blocks")}
                                                            id="fb-setting-text-alignment"
                                                            className="fb-setting-text-alignment"
                                                    >
                                                        <ButtonGroup
                                                            className="fb-setting-text-alignment-group-btn"
                                                        >
                                                            {ICON_ALIGN.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ buttonIconAlign: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${buttonIconAlign === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                        {buttonIconAlign === 'icon' && (
                                                            <FBIconPicker value={buttonIcon} setIconHandler={iconHandler} /> 
                                                        )}
                                                    </BaseControl>
                                                </div>
                                            </PanelBody>
                                        </div>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Styles", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            <FB_Range
                                                min={1}
                                                max={100}
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
                                                fontFamily={buttonFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value })}

                                                fontSize={buttonFontSize}
                                                onChangeFontSize={(value) => setAttributes({ buttonFontSize: value })}

                                                fontSizeUnits={buttonFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

                                                fontWeight={buttonFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value })}

                                                fontStyle={buttonFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value })}

                                                textTransform={buttonTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value })}

                                                textDecoration={buttonTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value })}

                                                letterSpacing={buttonLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value })}

                                                letterSpacingUnits={buttonLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

                                                lineHeight={buttonLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value })}

                                                lineHeightUnits={buttonLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ buttonLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Color
                                                label={__("Color", "frontis-blocks")}
                                                globalColorSwitcher={buttonColorSwitcher}
                                                globalColor={buttonColor}
                                                globalHoverColor={buttonHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ buttonColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ buttonColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ buttonHoverColor: value })}
                                            />

                                            <FB_Color
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColorSwitcher={buttonBgColorSwitcher}
                                                globalColor={buttonBgColor}
                                                globalHoverColor={buttonBgHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ buttonBgColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ buttonBgColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ buttonBgHoverColor: value })}
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

                                                <FB_Color
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalColorSwitcher={buttonBorderColorSwitcher}
                                                    globalColor={buttonBorderColor}
                                                    globalHoverColor={buttonBorderHoverColor}
                                                    handleColorSwitcherChange={(value) => setAttributes({ buttonBorderColorSwitcher: value })}
                                                    handleGlobalColorChange={(value) => setAttributes({ buttonBorderColor: value })}
                                                    handleGlobalHoverColorChange={(value) => setAttributes({ buttonBorderHoverColor: value })}
                                                />
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
                                                <FB_BoxShadowControl
                                                    onBoxShadowChange={(value) => setAttributes({ buttonboxShadowValues: value })}
                                                    initialShadowValue={buttonboxShadowValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ buttonBoxShadowCssValue: value })}
                                                />
                                        </PanelBody>
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
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
                                        <div className="fb-setting-advanced-tab-wrapper">
                                            <div className="fb-setting-z-index-wrapper">
                                                <PanelBody
                                                    initialOpen={true}
                                                >
                                                    <FB_Range
                                                        min={1}
                                                        max={100000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={buttonZIndex}
                                                        onChangeHandler={(value) => setAttributes({ buttonZIndex: value })}
                                                        rangeUnitHandler={(value) => setAttributes({ buttonZIndexUnits: value })}
                                                        deviceType={deviceType}
                                                        units={buttonZIndexUnits}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
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