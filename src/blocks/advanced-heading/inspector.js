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
    separator_POSITION,
    subheading_POSITION,
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    FONT_FAMILYS,
    BORDER_STYLES,
} from "./constants/constants";

import { useState, useEffect } from "@wordpress/element";
// import ResponsiveControl from '../../components/responsivecontrol';
import FB_ResponsiveControl from '@Components/responsive-control';
import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const { 
        blockID,
        DeviceType,
        HeadingText, 
        HeadingTag,
        HeadingBackgroundColor,
        HeadingAlignment,
        Separator,
        SubHeadingSwitcher,
        ShowSeparatorSwitcher,
        SubHeadingText,
        SubHeadingTag,
        SeperatorPosition,
        SubHeadingPosition,
        HeadingFontFamily,
        HeadingFontSize,
        HeadingFontSizeUnits,
        HeadingFontWeight,
        HeadingFontStyle,
        HeadingTextTransform,
        HeadingTextDecoration,
        HeadingLetterSpacing,
        HeadingLineHeight,
        HeadingLetterSpacingUnits,
        HeadingLineHeightUnits,
        HeadingColorSwitcher,
        HeadingColor,
        HeadingHoverColor,
        HeadingBorder,
        HeadingBorderColor,
        HeadingBorderHoverColor,
        HeadingBorderColorSwitcher,
        HeadingBorderUnits,
        HeadingDesktopBorderWidth,
        HeadingTabBorderWidth,
        HeadingMobileBorderWidth,
        HeadingBorderLink,
        HeadingBorderRadiusUnits,
        HeadingDesktopBorderRadiusWidth,
        HeadingTabBorderRadiusWidth,
        HeadingMobileBorderRadiusWidth,
        HeadingBorderRadiusLink,
        HeadingPaddingUnits,
        HeadingDesktopPadding,
        HeadingTabPadding,
        HeadingMobilePadding,
        HeadingPaddingLink,
        HeadingMarginUnits,
        HeadingDesktopMargin,
        HeadingTabMargin,
        HeadingMobileMargin,
        HeadingMarginLink,
        HeadingZIndex


    } = attributes;
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-headings-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    /** Start Padding */
    const [previousPadding, setPreviousPadding] = useState(HeadingDesktopPadding);
    /** Function to update all padding values */
    const updateAllPadding = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    HeadingDesktopPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    HeadingTabPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    HeadingMobilePadding: {
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
    };

    /** Function to handle input change */
    const handlePaddingInputChange = (e, direction) => {
        const value = e.target.value;
        switch(DeviceType) {
            case 'Desktop':
                setAttributes({ HeadingDesktopPadding: { ...HeadingDesktopPadding, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ HeadingTabPadding: { ...HeadingTabPadding, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ HeadingMobilePadding: { ...HeadingMobilePadding, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if HeadingPaddingLink is true */
        if (HeadingPaddingLink) {
            updateAllPadding(value, DeviceType);
        }
    };

    /** Function to handle HeadingPaddingLink toggle */
    const handleHeadingPaddingLinkToggle = () => {
        if (!HeadingPaddingLink) {
            setAttributes({ HeadingDesktopPadding: previousPadding });
        }
        /** setHeadingPaddingLink(!HeadingPaddingLink) */
        setAttributes({HeadingPaddingLink: !HeadingPaddingLink})
    };

    /** Update previousPadding state when padding changes */
    useEffect(() => {
        setPreviousPadding(HeadingDesktopPadding);
    }, [HeadingDesktopPadding]);

    /** Function to handle device click for padding */
    const handlePaddingDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default padding for desktop (using desktop_padding) */
    const padding = `${HeadingDesktopPadding.top}${HeadingPaddingUnits} ${HeadingDesktopPadding.right}${HeadingPaddingUnits} ${HeadingDesktopPadding.bottom}${HeadingPaddingUnits} ${HeadingDesktopPadding.left}${HeadingPaddingUnits}`;
    /** End Padding */

    /** Start Margin */
    const [previousMargin, setPreviousMargin] = useState(HeadingDesktopMargin);
    /** Function to update all margin values */
    const updateAllMargin = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    HeadingDesktopMargin: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    HeadingTabMargin: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    HeadingMobileMargin: {
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
    };

    /** Function to handle input change */
    const handleMarginInputChange = (e, direction) => {
        const value = e.target.value;
        switch(DeviceType) {
            case 'Desktop':
                setAttributes({ HeadingDesktopMargin: { ...HeadingDesktopMargin, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ HeadingTabMargin: { ...HeadingTabMargin, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ HeadingMobileMargin: { ...HeadingMobileMargin, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all margin values if marginLink is true */
        if (HeadingMarginLink) {
            updateAllMargin(value, DeviceType);
        }
    };

    /** Function to handle marginLink toggle */
    const handleMarginLinkToggle = () => {
        if (!HeadingMarginLink) {
            setAttributes({ HeadingDesktopMargin: previousMargin });
        }
        /** setmarginLink(!marginLink) */
        setAttributes({HeadingMarginLink: !HeadingMarginLink})
    };

    /** Update previousMargin state when margin changes */
    useEffect(() => {
        setPreviousMargin(HeadingDesktopMargin);
    }, [HeadingDesktopMargin]);

    /** Function to handle device click for margin */
    const handleMarginDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default margin for desktop (using desktop_margin) */
    const margin = `${HeadingDesktopMargin.top}${HeadingPaddingUnits} ${HeadingDesktopMargin.right}${HeadingPaddingUnits} ${HeadingDesktopMargin.bottom}${HeadingPaddingUnits} ${HeadingDesktopMargin.left}${HeadingPaddingUnits}`;
    /** End Margin */

    /** Start Border Width */
    const [previousBorderWidth, setPreviousBorderWidth] = useState(HeadingDesktopBorderWidth);
    /** Function to update all Border Width values */
    const updateAllBorderWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    HeadingDesktopBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    HeadingTabBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    HeadingMobileBorderWidth: {
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
    };

    /** Function to handle input change */
    const handleBorderWidthInputChange = (e, direction) => {
        const value = e.target.value;
        switch(DeviceType) {
            case 'Desktop':
                setAttributes({ HeadingDesktopBorderWidth: { ...HeadingDesktopBorderWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ HeadingTabBorderWidth: { ...HeadingTabBorderWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ HeadingMobileBorderWidth: { ...HeadingMobileBorderWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if HeadingBorderLink is true */
        if (HeadingBorderLink) {
            updateAllBorderWidth(value, DeviceType);
        }
    };

    /** Function to handle HeadingBorderLink toggle */
    const handleBorderWidthLinkToggle = () => {
        if (!HeadingBorderLink) {
            setAttributes({ HeadingDesktopBorderWidth: previousBorderWidth });
        }
        /** setHeadingBorderLinkLink(!HeadingBorderLink) */
        setAttributes({HeadingBorderLink: !HeadingBorderLink})
    };

    /** Update previousborderWidth state when Border Width changes */
    useEffect(() => {
        setPreviousBorderWidth(HeadingDesktopBorderWidth);
    }, [HeadingDesktopBorderWidth]);

    /** Function to handle device click for Border Width */
    const handleBorderWidthDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
    const borderWidth = `${HeadingDesktopBorderWidth.top}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.right}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.bottom}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.left}${HeadingBorderUnits}`;
    /** End Border Width */

    /** Start Border Radius Width */
    const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(HeadingDesktopBorderRadiusWidth);
    /** Function to update all Border Width values */
    const updateAllBorderRadiusWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    HeadingDesktopBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    HeadingTabBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    HeadingMobileBorderRadiusWidth: {
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
    };

    /** Function to handle input change */
    const handleBorderRadiusWidthInputChange = (e, direction) => {
        const value = e.target.value;
        switch(DeviceType) {
            case 'Desktop':
                setAttributes({ HeadingDesktopBorderRadiusWidth: { ...HeadingDesktopBorderRadiusWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ HeadingTabBorderRadiusWidth: { ...HeadingTabBorderRadiusWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ HeadingMobileBorderRadiusWidth: { ...HeadingMobileBorderRadiusWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if HeadingBorderRadiusLink is true */
        if (HeadingBorderRadiusLink) {
            updateAllBorderRadiusWidth(value, DeviceType);
        }
    };

    /** Function to handle HeadingBorderRadiusLink toggle */
    const handleBorderRadiusWidthLinkToggle = () => {
        if (!HeadingBorderRadiusLink) {
            setAttributes({ HeadingDesktopBorderRadiusWidth: previousBorderRadiusWidth });
        }
        /** setHeadingBorderRadiusLinkLink(!HeadingBorderRadiusLink) */
        setAttributes({HeadingBorderRadiusLink: !HeadingBorderRadiusLink})
    };

    /** Update previousBorderRadiusWidth state when Border Width changes */
    useEffect(() => {
        setPreviousBorderRadiusWidth(HeadingDesktopBorderRadiusWidth);
    }, [HeadingDesktopBorderRadiusWidth]);

    /** Function to handle device click for Border Width */
    const handleBorderRadiusWidthDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
    const borderRadiusWidth = `${HeadingDesktopBorderRadiusWidth.top}${HeadingBorderRadiusUnits} ${HeadingDesktopBorderRadiusWidth.right}${HeadingBorderRadiusUnits} ${HeadingDesktopBorderRadiusWidth.bottom}${HeadingBorderRadiusUnits} ${HeadingDesktopBorderRadiusWidth.left}${HeadingBorderRadiusUnits}`;
    /** End Border Radius Width */ 

    /* set default values for the style attributes */
    useEffect(() => {
        if (HeadingFontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${HeadingFontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    }, [HeadingFontFamily]);
    
        // Define the CSS as a string
        const css = `
        #${blockID} {
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    `;
    
    return (
        <>
        
            <style>
            {`
                .fb-advanced-wrapper.${blockID} .fb-advanced {
                    ${HeadingColor !== undefined ? `color: ${HeadingColor};` : ''}
                    ${HeadingBackgroundColor !== undefined ? `background-color: ${HeadingBackgroundColor};` : ''}
                    font-family: ${HeadingFontFamily !== 'default' ? HeadingFontFamily : HeadingFontFamily};
                    font-size: ${HeadingFontSize !== undefined ? `${HeadingFontSize}${HeadingFontSizeUnits}` : ''};
                    font-weight: ${HeadingFontWeight};
                    font-style: ${HeadingFontStyle};
                    text-transform: ${HeadingTextTransform};
                    text-decoration: ${HeadingTextDecoration};
                    ${HeadingLetterSpacing !== undefined ? `letter-spacing: ${HeadingLetterSpacing}${HeadingLetterSpacingUnits};` : ''}
                    ${HeadingLineHeight !== undefined ? `line-height: ${HeadingLineHeight}${HeadingLineHeightUnits};` : ''}
                    transition: all .3s ease-in-out;
                    padding: ${padding};
                    margin: ${margin};
                    border: ${HeadingBorder};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${HeadingBorderColor !== undefined ? `border-color: ${HeadingBorderColor};` : ''}
                    z-index: ${HeadingZIndex !== undefined ? HeadingZIndex : ''};
                }
                .fb-advanced-wrapper.${blockID} .fb-advanced:hover {
                    ${HeadingHoverColor !== undefined ? `color: ${HeadingHoverColor};` : ''}
                    ${HeadingBorderHoverColor !== undefined ? `border-color: ${HeadingBorderHoverColor};` : ''}
                }

                .fb-advanced-wrapper.${blockID} .fb-advanced-title-separator {
                    display: inline-block;
                    margin: 0 0 10px 0;
                    width: 12%;
                    margin-bottom: 15px;
                    border-top: 2px ${Separator} #0170b9;
                }

                @media only screen and (max-width: 1024px) {
                    .fb-advanced-wrapper.${blockID} .fb-advanced {
                        padding: ${HeadingTabPadding.top}${HeadingPaddingUnits} ${HeadingTabPadding.right}${HeadingPaddingUnits} ${HeadingTabPadding.bottom}${HeadingPaddingUnits} ${HeadingTabPadding.left}${HeadingPaddingUnits} !important;
                        margin: ${HeadingTabMargin.top}${HeadingMarginUnits} ${HeadingTabMargin.right}${HeadingMarginUnits} ${HeadingTabMargin.bottom}${HeadingMarginUnits} ${HeadingTabMargin.left}${HeadingMarginUnits} !important;
                        border-width: ${HeadingTabBorderWidth.top}${HeadingBorderUnits} ${HeadingTabBorderWidth.right}${HeadingBorderUnits} ${HeadingTabBorderWidth.bottom}${HeadingBorderUnits} ${HeadingTabBorderWidth.left}${HeadingBorderUnits} !important;
                        border-radius: ${HeadingTabBorderRadiusWidth.top}${HeadingBorderRadiusUnits} ${HeadingTabBorderRadiusWidth.right}${HeadingBorderRadiusUnits} ${HeadingTabBorderRadiusWidth.bottom}${HeadingBorderRadiusUnits} ${HeadingTabBorderRadiusWidth.left}${HeadingBorderRadiusUnits} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-wrapper.${blockID} .fb-advanced {
                        padding: ${HeadingMobilePadding.top}${HeadingPaddingUnits} ${HeadingMobilePadding.right}${HeadingPaddingUnits} ${HeadingMobilePadding.bottom}${HeadingPaddingUnits} ${HeadingMobilePadding.left}${HeadingPaddingUnits} !important;
                        margin: ${HeadingMobileMargin.top}${HeadingMarginUnits} ${HeadingMobileMargin.right}${HeadingMarginUnits} ${HeadingMobileMargin.bottom}${HeadingMarginUnits} ${HeadingMobileMargin.left}${HeadingMarginUnits} !important;
                        border-width: ${HeadingMobileBorderWidth.top}${HeadingBorderUnits} ${HeadingMobileBorderWidth.right}${HeadingBorderUnits} ${HeadingMobileBorderWidth.bottom}${HeadingBorderUnits} ${HeadingMobileBorderWidth.left}${HeadingBorderUnits} !important;
                        border-radius: ${HeadingMobileBorderRadiusWidth.top}${HeadingBorderRadiusUnits} ${HeadingMobileBorderRadiusWidth.right}${HeadingBorderRadiusUnits} ${HeadingMobileBorderRadiusWidth.bottom}${HeadingBorderRadiusUnits} ${HeadingMobileBorderRadiusWidth.left}${HeadingBorderRadiusUnits} !important;
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
                                                                onClick={() => setAttributes({ HeadingAlignment: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${HeadingAlignment === item.value ? 'active' : ''}`}
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
                                                                onClick={() => setAttributes({ HeadingTag: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${ HeadingTag === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <TextareaControl
                                                    label={__("Heading Text", "frontis-blocks")}
                                                    value={HeadingText}
                                                    onChange={(value) => setAttributes({ HeadingText: value })}
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
                                                    checked={SubHeadingSwitcher}
                                                    onChange={(value) => setAttributes({ SubHeadingSwitcher: value })}
                                                />

                                                {SubHeadingSwitcher && (
                                                    <>
                                                        <BaseControl className="fb-advanced-sub-heading-position" >
                                                            <SelectControl
                                                                label={__("Sub Heading Position", "frontis-blocks")}
                                                                value={SubHeadingPosition}
                                                                options={subheading_POSITION}
                                                                onChange={(value) => setAttributes({ SubHeadingPosition: value})}
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
                                                                        onClick={() => setAttributes({ SubHeadingTag: item.value })}
                                                                        className={`fb-setting-text-alignment-single-btn ${SubHeadingTag === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                            
                                                        </BaseControl>

                                                        <TextareaControl
                                                            label={__("Sub Heading Text", "frontis-blocks")}
                                                            value={SubHeadingText}
                                                            onChange={(value) => setAttributes({ SubHeadingText: value })}
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
                                                    checked={ShowSeparatorSwitcher}
                                                    onChange={(value) => setAttributes({ ShowSeparatorSwitcher: value })}
                                                />
                                                { ShowSeparatorSwitcher && (
                                                    <>
                                                        <BaseControl className="fb-advanced-separator-position" >
                                                            <SelectControl
                                                                label={__("Separator Position", "frontis-blocks")}
                                                                value={SeperatorPosition}
                                                                options={separator_POSITION}
                                                                onChange={(value) => setAttributes({ SeperatorPosition: value})}
                                                            />
                                                        </BaseControl>

                                                        <BaseControl className="fb-advanced-separator-style" >
                                                            <SelectControl
                                                                label={__("Separator Style", "frontis-blocks")}
                                                                value={Separator}
                                                                options={SEPERATOR_STYLES}
                                                                onChange={(value) => setAttributes({ Separator: value })}
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
                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={HeadingFontFamily}
                                                                        onChange={(value) => setAttributes({ HeadingFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <div className="fb-setting-fontsize-label">
                                                                            <span>{__("Font Size", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ HeadingFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${ HeadingFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={HeadingFontSize}
                                                                            onChange={(value) => setAttributes({ HeadingFontSize: value })}
                                                                            min={1}
                                                                            max={200}
                                                                            allowReset
                                                                            resetFallbackValue={undefined}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "700" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={HeadingFontWeight}
                                                                        onChange={(value) => setAttributes({ HeadingFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={HeadingFontStyle}
                                                                        onChange={(value) => setAttributes({ HeadingFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={HeadingTextTransform}
                                                                        onChange={(value) => setAttributes({ HeadingTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={HeadingTextDecoration}
                                                                        onChange={(value) => setAttributes({ HeadingTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <div className="fb-setting-letterspacing-label">
                                                                            <span>{__("Letter Spacing", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ HeadingLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${ HeadingLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={HeadingLetterSpacing}
                                                                        onChange={(value) => setAttributes({ HeadingLetterSpacing: value === 0 ? undefined : value })}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <div className="fb-setting-lineheight-label">
                                                                            <span>{__("Line Height", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ HeadingLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${ HeadingLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={HeadingLineHeight}
                                                                        onChange={(value) => setAttributes({ HeadingLineHeight: value === 1 ? undefined : value })}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Text Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ HeadingColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${HeadingColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {HeadingColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={HeadingColor}
                                                                            onChange={(value) => setAttributes({ HeadingColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={HeadingColor}
                                                                            onChange={(value) => setAttributes({ HeadingColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {HeadingColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={HeadingHoverColor}
                                                                            onChange={(value) => setAttributes({ HeadingHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={HeadingHoverColor}
                                                                            onChange={(value) => setAttributes({ HeadingHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Border", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-border-setting-wrapper"
                                            >
                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={HeadingBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ HeadingBorder: value })}
                                                />

                                            <BaseControl
                                                label={__("Border Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ HeadingBorderColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${HeadingBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {HeadingBorderColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-normal-color">
                                                                        <ColorPicker
                                                                            color={HeadingBorderColor}
                                                                            onChange={(value) => setAttributes({ HeadingBorderColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={HeadingBorderColor}
                                                                            onChange={(value) => setAttributes({ HeadingBorderColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {HeadingBorderColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    className="fb-setting-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-setting-color-setting-icon-dropdown"
                                                        contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={HeadingBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ HeadingBorderHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={HeadingBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ HeadingBorderHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    {/* Border Width */}
                                                    <div className="fb-setting-spacing-label-container">
                                                        <FB_ResponsiveControl labelText={__('Border', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderWidthDeviceClick}/>
                                                        <div className="fb-setting-units-type">
                                                            <ButtonGroup className="fb-setting-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingBorderUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ HeadingBorderUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>

                                                    </div>
                                                    <div className="fb-setting-spacing-input-container">
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderWidth.top : DeviceType === 'Tablet' ? HeadingTabBorderWidth.top : HeadingMobileBorderWidth.top}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderWidth.right : DeviceType === 'Tablet' ? HeadingTabBorderWidth.right : HeadingMobileBorderWidth.right}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderWidth.bottom : DeviceType === 'Tablet' ? HeadingTabBorderWidth.bottom : HeadingMobileBorderWidth.bottom}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderWidth.left : DeviceType === 'Tablet' ? HeadingTabBorderWidth.left : HeadingMobileBorderWidth.left}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${HeadingBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingBorderLink ? 'is-checked' : ''}`}
                                                                onClick={handleBorderWidthLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>
                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    {/* Border radius Width */}
                                                    <div className="fb-setting-spacing-label-container">
                                                        <FB_ResponsiveControl labelText={__('Border Radius', 'frontis-block')} device={DeviceType} deviceHandler={handleBorderRadiusWidthDeviceClick}/>
                                                        <div className="fb-setting-units-type">
                                                            <ButtonGroup className="fb-setting-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingBorderRadiusUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ HeadingBorderRadiusUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="fb-setting-spacing-input-container">
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderRadiusWidth.top : DeviceType === 'Tablet' ? HeadingTabBorderRadiusWidth.top : HeadingMobileBorderRadiusWidth.top}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderRadiusWidth.right : DeviceType === 'Tablet' ? HeadingTabBorderRadiusWidth.right : HeadingMobileBorderRadiusWidth.right}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderRadiusWidth.bottom : DeviceType === 'Tablet' ? HeadingTabBorderRadiusWidth.bottom : HeadingMobileBorderRadiusWidth.bottom}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopBorderRadiusWidth.left : DeviceType === 'Tablet' ? HeadingTabBorderRadiusWidth.left : HeadingMobileBorderRadiusWidth.left}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${HeadingBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingBorderRadiusLink ? 'is-checked' : ''}`}
                                                                onClick={handleBorderRadiusWidthLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>
                                        </PanelBody>
                                        <PanelBody title="Spacing" initialOpen={false}>
                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    {/* Padding */}
                                                    <div className="fb-setting-spacing-label-container">
                                                        <FB_ResponsiveControl labelText={__('Padding', 'frontis-block')} device={DeviceType} deviceHandler={handlePaddingDeviceClick}/>
                                                        <div className="fb-setting-units-type">
                                                            <ButtonGroup className="fb-setting-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingPaddingUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ HeadingPaddingUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="fb-setting-spacing-input-container">
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopPadding.top : DeviceType === 'Tablet' ? HeadingTabPadding.top : HeadingMobilePadding.top}
                                                                onChange={(e) => handlePaddingInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopPadding.right : DeviceType === 'Tablet' ? HeadingTabPadding.right : HeadingMobilePadding.right}
                                                                onChange={(e) => handlePaddingInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopPadding.bottom : DeviceType === 'Tablet' ? HeadingTabPadding.bottom : HeadingMobilePadding.bottom}
                                                                onChange={(e) => handlePaddingInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopPadding.left : DeviceType === 'Tablet' ? HeadingTabPadding.left : HeadingMobilePadding.left}
                                                                onChange={(e) => handlePaddingInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${HeadingPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingPaddingLink ? 'is-checked' : ''}`}
                                                                onClick={handleHeadingPaddingLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>
                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    {/* Margin */}
                                                    <div className="fb-setting-spacing-label-container">
                                                        <FB_ResponsiveControl labelText={__('Margin', 'frontis-block')} device={DeviceType} deviceHandler={handleMarginDeviceClick}/>
                                                        <div className="fb-setting-units-type">
                                                            <ButtonGroup className="fb-setting-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingMarginUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ HeadingMarginUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="fb-setting-spacing-input-container">
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopMargin.top : DeviceType === 'Tablet' ? HeadingTabMargin.top : HeadingMobileMargin.top}
                                                                onChange={(e) => handleMarginInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopMargin.right : DeviceType === 'Tablet' ? HeadingTabMargin.right : HeadingMobileMargin.right}
                                                                onChange={(e) => handleMarginInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopMargin.bottom : DeviceType === 'Tablet' ? HeadingTabMargin.bottom : HeadingMobileMargin.bottom}
                                                                onChange={(e) => handleMarginInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? HeadingDesktopMargin.left : DeviceType === 'Tablet' ? HeadingTabMargin.left : HeadingMobileMargin.left}
                                                                onChange={(e) => handleMarginInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${HeadingMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingMarginLink ? 'is-checked' : ''}`}
                                                                onClick={handleMarginLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>                                       
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
                                                    <RangeControl
                                                        value={HeadingZIndex}
                                                        onChange={(value) => setAttributes({ HeadingZIndex: value === 0 ? undefined : value })}
                                                        min={1}
                                                        max={100}
                                                        step={1}
                                                        allowReset
                                                        resetFallbackValue={undefined}
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