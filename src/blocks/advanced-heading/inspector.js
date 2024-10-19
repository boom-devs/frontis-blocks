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
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    SEPARATOR_POSITION,
    SUBHEADING_POSITION,
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    FONT_FAMILIES,
    BORDER_STYLES,
} from "./constants/constants";

import { useState, useEffect } from "@wordpress/element";
import FB_Spacing from '@Components/spacing';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const { 
        blockId,
        deviceType,
        headingText, 
        headingTag,
        headingBackgroundColor,
        headingAlignment,
        separator,
        subHeadingSwitcher,
        showSeparatorSwitcher,
        subHeadingText,
        subHeadingTag,
        separatorPosition,
        subHeadingPosition,
        headingFontFamily,
        headingFontSize,
        headingFontSizeUnits,
        headingFontWeight,
        headingFontStyle,
        headingTextTransform,
        headingTextDecoration,
        headingLetterSpacing,
        headingLineHeight,
        headingLetterSpacingUnits,
        headingLineHeightUnits,
        headingColorSwitcher,
        headingColor,
        headingHoverColor,
        headingBorder,
        headingBorderColor,
        headingBorderHoverColor,
        headingBorderColorSwitcher,
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
        headingPaddingUnits,
        headingDesktopPadding,
        headingTabPadding,
        headingMobilePadding,
        headingPaddingLink,
        headingMarginUnits,
        headingDesktopMargin,
        headingTabMargin,
        headingMobileMargin,
        headingMarginLink,
        headingZIndex,
        headingZIndexUnits,
        
    } = attributes;
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-headings-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start Heading Padding */
    const headingPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobilePadding: {
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
                    setAttributes({ headingDesktopPadding: { ...headingDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabPadding: { ...headingTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobilePadding: { ...headingMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingPaddingLinkBtn = () => {
        setAttributes({
            headingPaddingLink: !headingPaddingLink
        });
    };

    const headingPaddingUnitsHandler = (unit) => {
        setAttributes({
            headingPaddingUnits: {
                ...headingPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Heading */
    const headingDesktopPaddingWidth = `${headingDesktopPadding.top}${headingPaddingUnits.Desktop} ${headingDesktopPadding.right}${headingPaddingUnits.Desktop} ${headingDesktopPadding.bottom}${headingPaddingUnits.Desktop} ${headingDesktopPadding.left}${headingPaddingUnits.Desktop}`;
    const headingTabletPaddingWidth = `${headingTabPadding.top}${headingPaddingUnits.Tablet} ${headingTabPadding.right}${headingPaddingUnits.Tablet} ${headingTabPadding.bottom}${headingPaddingUnits.Tablet} ${headingTabPadding.left}${headingPaddingUnits.Tablet}`;
    const headingMobilePaddingWidth = `${headingMobilePadding.top}${headingPaddingUnits.Mobile} ${headingMobilePadding.right}${headingPaddingUnits.Mobile} ${headingMobilePadding.bottom}${headingPaddingUnits.Mobile} ${headingMobilePadding.left}${headingPaddingUnits.Mobile}`;
    /** End Heading Padding */

    /** Start Heading Margin */
    const headingMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobileMargin: {
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
                    setAttributes({ headingDesktopMargin: { ...headingDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabMargin: { ...headingTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobileMargin: { ...headingMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingMarginLinkBtn = () => {
        setAttributes({
            headingMarginLink: !headingMarginLink
        });
    };

    const headingMarginUnitsHandler = (unit) => {
        setAttributes({
            headingMarginUnits: {
                ...headingMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Heading */
    const headingDesktopMarginWidth = `${headingDesktopMargin.top}${headingMarginUnits.Desktop} ${headingDesktopMargin.right}${headingMarginUnits.Desktop} ${headingDesktopMargin.bottom}${headingMarginUnits.Desktop} ${headingDesktopMargin.left}${headingMarginUnits.Desktop}`;
    const headingTabletMarginWidth = `${headingTabMargin.top}${headingMarginUnits.Tablet} ${headingTabMargin.right}${headingMarginUnits.Tablet} ${headingTabMargin.bottom}${headingMarginUnits.Tablet} ${headingTabMargin.left}${headingMarginUnits.Tablet}`;
    const headingMobileMarginWidth = `${headingMobileMargin.top}${headingMarginUnits.Mobile} ${headingMobileMargin.right}${headingMarginUnits.Mobile} ${headingMobileMargin.bottom}${headingMarginUnits.Mobile} ${headingMobileMargin.left}${headingMarginUnits.Mobile}`;
    /** End Heading Margin */

    /** Start Heading Border */
    const headingBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobileBorder: {
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
                    setAttributes({ headingDesktopBorder: { ...headingDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabBorder: { ...headingTabBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobileBorder: { ...headingMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingBorderLinkBtn = () => {
        setAttributes({
            headingBorderLink: !headingBorderLink
        });
    };

    const headingBorderUnitsHandler = (unit) => {
        setAttributes({
            headingBorderUnits: {
                ...headingBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border for Heading */
    const headingDesktopBorderWidth = `${headingDesktopBorder.top}${headingBorderUnits.Desktop} ${headingDesktopBorder.right}${headingBorderUnits.Desktop} ${headingDesktopBorder.bottom}${headingBorderUnits.Desktop} ${headingDesktopBorder.left}${headingBorderUnits.Desktop}`;
    const headingTabletBorderWidth = `${headingTabBorder.top}${headingBorderUnits.Tablet} ${headingTabBorder.right}${headingBorderUnits.Tablet} ${headingTabBorder.bottom}${headingBorderUnits.Tablet} ${headingTabBorder.left}${headingBorderUnits.Tablet}`;
    const headingMobileBorderWidth = `${headingMobileBorder.top}${headingBorderUnits.Mobile} ${headingMobileBorder.right}${headingBorderUnits.Mobile} ${headingMobileBorder.bottom}${headingBorderUnits.Mobile} ${headingMobileBorder.left}${headingBorderUnits.Mobile}`;
    /** End Heading Border */


    /** Start Heading Border Radius */
    const headingBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobileBorderRadius: {
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
                    setAttributes({ headingDesktopBorderRadius: { ...headingDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabBorderRadius: { ...headingTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobileBorderRadius: { ...headingMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingBorderRadiusLinkBtn = () => {
        setAttributes({
            headingBorderRadiusLink: !headingBorderRadiusLink
        });
    };

    const headingBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            headingBorderRadiusUnits: {
                ...headingBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Heading */
    const headingDesktopBorderRadiusWidth = `${headingDesktopBorderRadius.top}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.right}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.bottom}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.left}${headingBorderRadiusUnits.Desktop}`;
    const headingTabletBorderRadiusWidth = `${headingTabBorderRadius.top}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.right}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.bottom}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.left}${headingBorderRadiusUnits.Tablet}`;
    const headingMobileBorderRadiusWidth = `${headingMobileBorderRadius.top}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.right}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.bottom}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.left}${headingBorderRadiusUnits.Mobile}`;
    /** End Heading Border Radius */

    /* set default values for the style attributes */
    useEffect(() => {
        if (headingFontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${headingFontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    }, [headingFontFamily]);
    
        // Define the CSS as a string
        const css = `
        #${blockId} {
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    `;
    
    return (
        <>
        
            <style>
            {`
                .fb-advanced-wrapper.${blockId} .fb-advanced {
                    ${headingColor ? `color: ${headingColor};` : ''}
                    ${headingBackgroundColor ? `background-color: ${headingBackgroundColor};` : ''}
                    ${headingFontFamily ? `font-family: ${headingFontFamily};` : ''}
                    ${headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
                    ${headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
                    ${headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
                    ${headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
                    ${headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
                    ${headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
                    ${headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}
                    ${headingDesktopPaddingWidth ? `padding: ${headingDesktopPaddingWidth};` : ''}
                    ${headingDesktopMarginWidth ? `margin: ${headingDesktopMarginWidth};` : ''}
                    ${headingBorder ? `border: ${headingBorder};` : ''} 
                    ${headingDesktopBorderWidth ? `border-width: ${headingDesktopBorderWidth};` : ''}
                    ${headingDesktopBorderRadiusWidth ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ''}
                    ${headingBorderColor ? `border-color: ${headingBorderColor};` : ''}
                     transition: all .3s ease-in-out;
                    ${headingZIndex.Desktop && headingZIndexUnits.Desktop  ? `z-index: ${headingZIndex.Desktop}${headingZIndexUnits.Desktop};` : ''}
                }
                .fb-advanced-wrapper.${blockId} .fb-advanced:hover {
                    ${headingHoverColor !== undefined ? `color: ${headingHoverColor};` : ''}
                    ${headingBorderHoverColor !== undefined ? `border-color: ${headingBorderHoverColor};` : ''}
                }

                .fb-advanced-wrapper.${blockId} .fb-advanced-title-separator {
                    display: inline-block;
                    margin: 0 0 10px 0;
                    width: 12%;
                    margin-bottom: 15px;
                    border-top: 2px ${separator} #0170b9;
                }

                @media only screen and (max-width: 1024px) {
                    .fb-advanced-wrapper.${blockId} .fb-advanced {
                        ${headingTabletPaddingWidth ? `padding: ${headingTabletPaddingWidth};` : ''}
                        ${headingTabletMarginWidth ? `margin: ${headingTabletMarginWidth};` : ''}
                        ${headingTabletBorderWidth ? `border-width: ${headingTabletBorderWidth};` : ''}
                        ${headingTabletBorderRadiusWidth ? `border-radius: ${headingTabletBorderRadiusWidth};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-wrapper.${blockId} .fb-advanced {
                        ${headingMobilePaddingWidth ? `padding: ${headingMobilePaddingWidth};` : ''}
                        ${headingMobileMarginWidth ? `margin: ${headingMobileMarginWidth};` : ''}
                        ${headingMobileBorderWidth ? `border-width: ${headingMobileBorderWidth};` : ''}
                        ${headingMobileBorderRadiusWidth ? `border-radius: ${headingMobileBorderRadiusWidth};` : ''}
                    }
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
                                        <div className="fb-advanced-wrapper">
                                            <PanelBody
                                                title={__("Heading", "frontis-blocks")}
                                                initialOpen={true}
                                            >
                                                <BaseControl
                                                    label={__("Heading Alignment", "frontis-blocks")}
                                                    id="fb-setting-text-alignment"
                                                    className="fb-setting-text-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-setting-text-alignment-group-btn"
                                                    >
                                                        {TEXT_ALIGN.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ headingAlignment: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${headingAlignment === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

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
                                                                onClick={() => setAttributes({ headingTag: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${ headingTag === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <TextareaControl
                                                    label={__("Heading Text", "frontis-blocks")}
                                                    value={headingText}
                                                    onChange={(value) => setAttributes({ headingText: value })}
                                                    className="fb-advanced-text"
                                                />
                                            </PanelBody>
                                        </div>
                                        <div className="fb-advanced-sub-heading-wrapper">
                                            <PanelBody
                                                title={__("Sub Heading", "frontis-blocks")}
                                                initialOpen={false}
                                            >
                                                <ToggleControl
                                                    label={__("Show Sub Heading", "frontis-blocks")}
                                                    checked={subHeadingSwitcher}
                                                    onChange={(value) => setAttributes({ subHeadingSwitcher: value })}
                                                />

                                                {subHeadingSwitcher && (
                                                    <>
                                                        <BaseControl className="fb-advanced-sub-heading-position" >
                                                            <SelectControl
                                                                label={__("Sub Heading Position", "frontis-blocks")}
                                                                value={subHeadingPosition}
                                                                options={SUBHEADING_POSITION}
                                                                onChange={(value) => setAttributes({ subHeadingPosition: value})}
                                                            />
                                                        </BaseControl>
                                                        <BaseControl
                                                            label={__("Sub Heading Tag", "frontis-blocks")}
                                                            className="fb-setting-text-alignment"
                                                        >
                                                            <ButtonGroup className="fb-setting-text-alignment-group-btn">
                                                                {HEADING.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ subHeadingTag: item.value })}
                                                                        className={`fb-setting-text-alignment-single-btn ${subHeadingTag === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                            
                                                        </BaseControl>

                                                        <TextareaControl
                                                            label={__("Sub Heading Text", "frontis-blocks")}
                                                            value={subHeadingText}
                                                            onChange={(value) => setAttributes({ subHeadingText: value })}
                                                            className="fb-advanced-sub-heading-text"
                                                        />
                                                    </>
                                                )}
                                            </PanelBody>
                                        </div>

                                        <div className="fb-advanced-separator-wrapper">
                                            <PanelBody
                                                title={__("Separator", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-advanced-Heading-separator"
                                            >
                                                <ToggleControl
                                                    label={__("Show Separator", "frontis-blocks")}
                                                    checked={showSeparatorSwitcher}
                                                    onChange={(value) => setAttributes({ showSeparatorSwitcher: value })}
                                                />
                                                { showSeparatorSwitcher && (
                                                    <>
                                                        <BaseControl className="fb-advanced-separator-position" >
                                                            <SelectControl
                                                                label={__("Separator Position", "frontis-blocks")}
                                                                value={separatorPosition}
                                                                options={SEPARATOR_POSITION}
                                                                onChange={(value) => setAttributes({ separatorPosition: value})}
                                                            />
                                                        </BaseControl>

                                                        <BaseControl className="fb-advanced-separator-style" >
                                                            <SelectControl
                                                                label={__("Separator Style", "frontis-blocks")}
                                                                value={separator}
                                                                options={SEPERATOR_STYLES}
                                                                onChange={(value) => setAttributes({ separator: value })}
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
                                        <PanelBody
                                            title={__("Styles", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            <FB_TypographyControl
                                                fontFamily={headingFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value })}

                                                fontSize={headingFontSize}
                                                onChangeFontSize={(value) => setAttributes({ headingFontSize: value })}

                                                fontSizeUnits={headingFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

                                                fontWeight={headingFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value })}

                                                fontStyle={headingFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value })}

                                                textTransform={headingTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value })}

                                                textDecoration={headingTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value })}

                                                letterSpacing={headingLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value })}

                                                letterSpacingUnits={headingLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

                                                lineHeight={headingLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value })}

                                                lineHeightUnits={headingLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Color
                                                label={__("Text Color", "frontis-blocks")}
                                                globalColorSwitcher={headingColorSwitcher}
                                                globalColor={headingColor}
                                                globalHoverColor={headingHoverColor}
                                                handleColorSwitcherChange={(value) => setAttributes({ headingColorSwitcher: value })}
                                                handleGlobalColorChange={(value) => setAttributes({ headingColor: value })}
                                                handleGlobalHoverColorChange={(value) => setAttributes({ headingHoverColor: value })}
                                            />
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Border", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-border-setting-wrapper"
                                            >
                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={headingBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ headingBorder: value })}
                                                />
                                                <FB_Color
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalColorSwitcher={headingBorderColorSwitcher}
                                                    globalColor={headingBorderColor}
                                                    globalHoverColor={headingBorderHoverColor}
                                                    handleColorSwitcherChange={(value) => setAttributes({ headingBorderColorSwitcher: value })}
                                                    handleGlobalColorChange={(value) => setAttributes({ headingBorderColor: value })}
                                                    handleGlobalHoverColorChange={(value) => setAttributes({ headingBorderHoverColor: value })}
                                                />
                                                <FB_Spacing
                                                    label={__("Border", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={headingBorderUnitsHandler}
                                                    spacingUnits={headingBorderUnits}
                                                    spacingDesktop={headingDesktopBorder}
                                                    spacingTablet={headingMobileBorder}
                                                    spacingMobile={headingMobileBorderWidth}
                                                    handleSpacingUnitHandler={headingBorderUnitsChange}
                                                    spacingCombineBtn={headingBorderLink}
                                                    spacingCombineBtnHandler={headingBorderLinkBtn}
                                                    setAttributes={setAttributes}
                                                />
                                                <FB_Spacing
                                                    label={__("Border Radius", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={headingBorderRadiusUnitsHandler}
                                                    spacingUnits={headingBorderRadiusUnits}
                                                    spacingDesktop={headingDesktopBorderRadius}
                                                    spacingTablet={headingTabBorderRadius}
                                                    spacingMobile={headingMobileBorderRadius}
                                                    handleSpacingUnitHandler={headingBorderRadiusUnitsChange}
                                                    spacingCombineBtn={headingBorderRadiusLink}
                                                    spacingCombineBtnHandler={headingBorderRadiusLinkBtn}
                                                    setAttributes={setAttributes}
                                                />
                                        </PanelBody>
                                        <PanelBody title="Spacing" initialOpen={false}>
                                        <FB_Spacing
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={headingPaddingUnitsHandler}
                                                spacingUnits={headingPaddingUnits}
                                                spacingDesktop={headingDesktopPadding}
                                                spacingTablet={headingTabPadding}
                                                spacingMobile={headingMobilePadding}
                                                handleSpacingUnitHandler={headingPaddingUnitsChange}
                                                spacingCombineBtn={headingPaddingLink}
                                                spacingCombineBtnHandler={headingPaddingLinkBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing
                                                label={__("Margin", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={headingMarginUnitsHandler}
                                                spacingUnits={headingMarginUnits}
                                                spacingDesktop={headingDesktopMargin}
                                                spacingTablet={headingTabMargin}
                                                spacingMobile={headingMobileMargin}
                                                handleSpacingUnitHandler={headingMarginUnitsChange}
                                                spacingCombineBtn={headingMarginLink}
                                                spacingCombineBtnHandler={headingMarginLinkBtn}
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
                                                    title={__("Z Index", "frontis-blocks")}
                                                    initialOpen={true}
                                                    className='fb-setting-z-index-header'
                                                >
                                                    <FB_Range
                                                        min={1}
                                                        max={100000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={headingZIndex}
                                                        onChangeHandler={(value) => setAttributes({ headingZIndex: value })}
                                                        rangeUnitHandler={(value) => setAttributes({ headingZIndexUnits: value })}
                                                        deviceType={deviceType}
                                                        units={headingZIndexUnits}
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