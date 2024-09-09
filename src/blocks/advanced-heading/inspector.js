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

import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const { 
        blockID,
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
        HeadingActiveBorderDevice,
        HeadingBorderLink,
        HeadingBorderRadiusUnits,
        HeadingDesktopBorderRadiusWidth,
        HeadingTabBorderRadiusWidth,
        HeadingMobileBorderRadiusWidth,
        HeadingActiveBorderRadiusDevice,
        HeadingBorderRadiusLink,
        HeadingPaddingUnits,
        HeadingDesktopPadding,
        HeadingTabPadding,
        HeadingMobilePadding,
        HeadingActivePaddingDevice,
        HeadingPaddingLink,
        HeadingMarginUnits,
        HeadingDesktopMargin,
        HeadingTabMargin,
        HeadingMobileMargin,
        HeadingActiveMarginDevice,
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
            case 'desktop':
                setAttributes({
                    HeadingDesktopPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'tab':
                setAttributes({
                    HeadingTabPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'mobile':
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
        switch(HeadingActivePaddingDevice) {
            case 'desktop':
                setAttributes({ HeadingDesktopPadding: { ...HeadingDesktopPadding, [direction]: value } });
                break;
            case 'tab':
                setAttributes({ HeadingTabPadding: { ...HeadingTabPadding, [direction]: value } });
                break;
            case 'mobile':
                setAttributes({ HeadingMobilePadding: { ...HeadingMobilePadding, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if HeadingPaddingLink is true */
        if (HeadingPaddingLink) {
            updateAllPadding(value, HeadingActivePaddingDevice);
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
        setAttributes({ HeadingActivePaddingDevice: device });
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
        switch(HeadingActiveMarginDevice) {
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
            updateAllMargin(value, HeadingActiveMarginDevice);
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
        setAttributes({ HeadingActiveMarginDevice: device });
    };

    /**
     * This effect is responsible for setting the preview device type in the WordPress block editor.
     * It listens for changes in the `HeadingActiveMarginDevice` and updates the preview mode accordingly.
     * The preview device type can be set to values like mobile, tablet, or desktop.
     */
    useEffect(() => {
        try {
            if (typeof wp !== 'undefined' && wp.data && wp.data.dispatch) {
                wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType(HeadingActiveMarginDevice);
            }
        } catch (error) {
            console.error('Error setting preview device type:', error);
        }
    }, [HeadingActiveMarginDevice]);

    /** Default margin for desktop (using desktop_margin) */
    const margin = `${HeadingDesktopMargin.top}${HeadingPaddingUnits} ${HeadingDesktopMargin.right}${HeadingPaddingUnits} ${HeadingDesktopMargin.bottom}${HeadingPaddingUnits} ${HeadingDesktopMargin.left}${HeadingPaddingUnits}`;
    /** End Margin */

    /** Start Border Width */
    const [previousBorderWidth, setPreviousBorderWidth] = useState(HeadingDesktopBorderWidth);
    /** Function to update all Border Width values */
    const updateAllBorderWidth = (value, device) => {
        switch(device) {
            case 'desktop':
                setAttributes({
                    HeadingDesktopBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'tab':
                setAttributes({
                    HeadingTabBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'mobile':
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
        switch(HeadingActiveBorderDevice) {
            case 'desktop':
                setAttributes({ HeadingDesktopBorderWidth: { ...HeadingDesktopBorderWidth, [direction]: value } });
                break;
            case 'tab':
                setAttributes({ HeadingTabBorderWidth: { ...HeadingTabBorderWidth, [direction]: value } });
                break;
            case 'mobile':
                setAttributes({ HeadingMobileBorderWidth: { ...HeadingMobileBorderWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if HeadingBorderLink is true */
        if (HeadingBorderLink) {
            updateAllBorderWidth(value, HeadingActiveBorderDevice);
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
        setAttributes({ HeadingActiveBorderDevice: device });
    };

    /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
    const borderWidth = `${HeadingDesktopBorderWidth.top}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.right}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.bottom}${HeadingBorderUnits} ${HeadingDesktopBorderWidth.left}${HeadingBorderUnits}`;
    /** End Border Width */

    /** Start Border Radius Width */
    const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(HeadingDesktopBorderRadiusWidth);
    /** Function to update all Border Width values */
    const updateAllBorderRadiusWidth = (value, device) => {
        switch(device) {
            case 'desktop':
                setAttributes({
                    HeadingDesktopBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'tab':
                setAttributes({
                    HeadingTabBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'mobile':
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
        switch(HeadingActiveBorderRadiusDevice) {
            case 'desktop':
                setAttributes({ HeadingDesktopBorderRadiusWidth: { ...HeadingDesktopBorderRadiusWidth, [direction]: value } });
                break;
            case 'tab':
                setAttributes({ HeadingTabBorderRadiusWidth: { ...HeadingTabBorderRadiusWidth, [direction]: value } });
                break;
            case 'mobile':
                setAttributes({ HeadingMobileBorderRadiusWidth: { ...HeadingMobileBorderRadiusWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if HeadingBorderRadiusLink is true */
        if (HeadingBorderRadiusLink) {
            updateAllBorderRadiusWidth(value, HeadingActiveBorderRadiusDevice);
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
        setAttributes({ HeadingActiveBorderRadiusDevice: device });
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
                                className: "fb-tab advance",
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
                                                    id="fb-advanced-alignment"
                                                    className="fb-advanced-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-advanced-alignment-group-btn"
                                                    >
                                                        {TEXT_ALIGN.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ HeadingAlignment: item.value })}
                                                                className={`fb-advanced-alignment-single-btn ${HeadingAlignment === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <BaseControl
                                                    label={__("Heading Tag", "frontis-blocks")}
                                                    className="fb-advanced-tag-wrapper"
                                                >
                                                    <ButtonGroup
                                                     className="fb-advanced-tag-inner-wrapper"
                                                     >
                                                        {HEADING.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ HeadingTag: item.value })}
                                                                className={`fb-advanced-tag-single-btn ${ HeadingTag === item.value ? 'active' : ''}`}
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
                                                            className="fb-advanced-sub-heading-tag"
                                                        >
                                                            <ButtonGroup className="fb-advanced-sub-heading-tag-btn-group">
                                                                {HEADING.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ SubHeadingTag: item.value })}
                                                                        className={`fb-advanced-sub-heading-single-btn ${SubHeadingTag === item.value ? 'active' : ''}`}
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
                                                className="fb-advanced-typography"
                                            >
                                                <Dropdown
                                                    className="fb-advanced-typography-icon-dropdown"
                                                    contentClassName="fb-advanced-typography-dropdown-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-advanced-typography-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-advanced-typography-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-advanced-typography-popup">
                                                            <BaseControl className="fb-advanced-typography-popup-inner" >
                                                                <div className="fb-advanced-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={HeadingFontFamily}
                                                                        onChange={(value) => setAttributes({ HeadingFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-advanced-fontsize-wrapper">
                                                                    <div className="fb-advanced-fontsize-header">
                                                                        <div className="fb-advanced-fontsize-label">
                                                                            <span>{__("Font Size", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-advanced-fontsize-units">
                                                                            <ButtonGroup className="fb-advanced-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ HeadingFontSizeUnits: item.value })}
                                                                                        className={`fb-advanced-fontsize-units-switcher ${ HeadingFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-advanced-fontsize-rangecontrol">
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
                                                                <div className="fb-advanced-fontweight-wrapper">
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
                                                                <div className="fb-advanced-fontstyle-wrapper">
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
                                                                <div className="fb-advanced-texttransform-wrapper">
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
                                                                <div className="fb-advanced-textdecoration-wrapper">
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
                                                                <div className="fb-advanced-letterspacing-wrapper">
                                                                    <div className="fb-advanced-letterspacing-header">
                                                                        <div className="fb-advanced-letterspacing-label">
                                                                            <span>{__("Letter Spacing", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-advanced-letterspacing-units">
                                                                            <ButtonGroup className="fb-advanced-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ HeadingLetterSpacingUnits: item.value })}
                                                                                        className={`fb-advanced-letterspacing-units-switcher ${ HeadingLetterSpacingUnits === item.value ? 'active' : ''}`}
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
                                                                <div className="fb-advanced-lineheight-wrapper">
                                                                    <div className="fb-advanced-lineheight-header">
                                                                        <div className="fb-advanced-lineheight-label">
                                                                            <span>{__("Line Height", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-advanced-lineheight-units">
                                                                            <ButtonGroup className="fb-advanced-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ HeadingLineHeightUnits: item.value })}
                                                                                        className={`fb-advanced-lineheight-units-switcher ${ HeadingLineHeightUnits === item.value ? 'active' : ''}`}
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
                                                className="fb-advanced-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-advanced-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ HeadingColorSwitcher: item.value })}
                                                            className={`fb-advanced-color-panel-btn-switchr ${HeadingColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {HeadingColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-advanced-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-advanced-color-setting-icon-dropdown"
                                                        contentClassName="fb-advanced-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-advanced-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-advanced-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-advanced-color-setting-icon-popup">
                                                                <BaseControl className="fb-advanced-color-setting-icon-popup-inner">
                                                                    <div className="fb-advanced-normal-color">
                                                                        <ColorPicker
                                                                            color={HeadingColor}
                                                                            onChange={(value) => setAttributes({ HeadingColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-advanced-color-label">{__("Default Colors", "frontis-blocks")}</div>
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
                                                    className="fb-advanced-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-advanced-color-setting-icon-dropdown"
                                                        contentClassName="fb-advanced-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-advanced-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-advanced-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-advanced-color-setting-icon-popup">
                                                                <BaseControl className="fb-advanced-color-setting-icon-popup-inner">
                                                                    <div className="fb-advanced-hover-color">
                                                                        <ColorPicker
                                                                            color={HeadingHoverColor}
                                                                            onChange={(value) => setAttributes({ HeadingHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-advanced-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
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
                                            className="fb-advanced-border-setting-wrapper"
                                            >
                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={HeadingBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ HeadingBorder: value })}
                                                />

                                            <BaseControl
                                                label={__("Border Color", "frontis-blocks")}
                                                className="fb-advanced-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-advanced-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ HeadingBorderColorSwitcher: item.value })}
                                                            className={`fb-advanced-color-panel-btn-switchr ${HeadingBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {HeadingBorderColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
                                                    className="fb-advanced-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-advanced-color-setting-icon-dropdown"
                                                        contentClassName="fb-advanced-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-advanced-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-advanced-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-advanced-color-setting-icon-popup">
                                                                <BaseControl className="fb-advanced-color-setting-icon-popup-inner">
                                                                    <div className="fb-advanced-normal-color">
                                                                        <ColorPicker
                                                                            color={HeadingBorderColor}
                                                                            onChange={(value) => setAttributes({ HeadingBorderColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-advanced-color-label">{__("Default Colors", "frontis-blocks")}</div>
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
                                                    className="fb-advanced-color-setting-wrapper"
                                                >
                                                    <Dropdown
                                                        className="fb-advanced-color-setting-icon-dropdown"
                                                        contentClassName="fb-advanced-color-setting-icon-dropdown-content"
                                                        popoverProps={{ placement: 'bottom-start' }}
                                                        renderToggle={({ isOpen, onToggle }) => (
                                                            <Button
                                                                variant="primary"
                                                                onClick={onToggle}
                                                                aria-expanded={isOpen}
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-advanced-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-advanced-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-advanced-color-setting-icon-popup">
                                                                <BaseControl className="fb-advanced-color-setting-icon-popup-inner">
                                                                    <div className="fb-advanced-hover-color">
                                                                        <ColorPicker
                                                                            color={HeadingBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ HeadingBorderHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-advanced-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
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




                                            <div className="sh_heading_spacing_container">
                                                <div className="sh_heading_spacing_inner_container">
                                                    {/* Border Width */}
                                                    <div className="sh_heading_label_container">
                                                        <div className="sh_heading_label">
                                                            <p className="sh_heading_label_text">{__("Border Width", "frontis-blocks")}</p>
                                                            <div className="sh_heading_responsive_devices">
                                                                <button className={`sh_heading_desktop_device ${HeadingActiveBorderDevice === 'desktop' ? 'active' : ''}`} onClick={() => handleBorderWidthDeviceClick('desktop')}>
                                                                    <svg width="8" height="7" viewBox="0 0 8 7"><path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_tab_device ${HeadingActiveBorderDevice === 'tab' ? 'active' : ''}`} onClick={() => handleBorderWidthDeviceClick('tab')}>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7"><path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_mobile_device ${HeadingActiveBorderDevice === 'mobile' ? 'active' : ''}`} onClick={() => handleBorderWidthDeviceClick('mobile')}>
                                                                    <svg width="4" height="7" viewBox="0 0 4 7"><path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="fb-advanced-units-type">
                                                            <ButtonGroup className="fb-advanced-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingBorderUnits: item.value })}
                                                                        className={`fb-advanced-units-type-switcher ${ HeadingBorderUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>

                                                    </div>
                                                    <div className="sh_heading_input_container">
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={HeadingActiveBorderDevice === 'desktop' ? HeadingDesktopBorderWidth.top : HeadingActiveBorderDevice === 'tab' ? HeadingTabBorderWidth.top : HeadingMobileBorderWidth.top}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={HeadingActiveBorderDevice === 'desktop' ? HeadingDesktopBorderWidth.right : HeadingActiveBorderDevice === 'tab' ? HeadingTabBorderWidth.right : HeadingMobileBorderWidth.right}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={HeadingActiveBorderDevice === 'desktop' ? HeadingDesktopBorderWidth.bottom : HeadingActiveBorderDevice === 'tab' ? HeadingTabBorderWidth.bottom : HeadingMobileBorderWidth.bottom}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={HeadingActiveBorderDevice === 'desktop' ? HeadingDesktopBorderWidth.left : HeadingActiveBorderDevice === 'tab' ? HeadingTabBorderWidth.left : HeadingMobileBorderWidth.left}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label"></label>
                                                            <span
                                                                className={`dashicons ${HeadingBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingBorderLink ? 'is-checked' : ''}`}
                                                                onClick={handleBorderWidthLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>










                                            <div className="sh_heading_spacing_container">
                                                <div className="sh_heading_spacing_inner_container">
                                                    {/* Border radius Width */}
                                                    <div className="sh_heading_label_container">
                                                        <div className="sh_heading_label">
                                                            <p className="sh_heading_label_text">{__("Border Radius Width", "frontis-blocks")}</p>
                                                            <div className="sh_heading_responsive_devices">
                                                                <button className={`sh_heading_desktop_device ${HeadingActiveBorderRadiusDevice === 'desktop' ? 'active' : ''}`} onClick={() => handleBorderRadiusWidthDeviceClick('desktop')}>
                                                                    <svg width="8" height="7" viewBox="0 0 8 7"><path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_tab_device ${HeadingActiveBorderRadiusDevice === 'tab' ? 'active' : ''}`} onClick={() => handleBorderRadiusWidthDeviceClick('tab')}>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7"><path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_mobile_device ${HeadingActiveBorderRadiusDevice === 'mobile' ? 'active' : ''}`} onClick={() => handleBorderRadiusWidthDeviceClick('mobile')}>
                                                                    <svg width="4" height="7" viewBox="0 0 4 7"><path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="fb-advanced-units-type">
                                                            <ButtonGroup className="fb-advanced-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingBorderRadiusUnits: item.value })}
                                                                        className={`fb-advanced-units-type-switcher ${ HeadingBorderRadiusUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="sh_heading_input_container">
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={HeadingActiveBorderRadiusDevice === 'desktop' ? HeadingDesktopBorderRadiusWidth.top : HeadingActiveBorderRadiusDevice === 'tab' ? HeadingTabBorderRadiusWidth.top : HeadingMobileBorderRadiusWidth.top}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={HeadingActiveBorderRadiusDevice === 'desktop' ? HeadingDesktopBorderRadiusWidth.right : HeadingActiveBorderRadiusDevice === 'tab' ? HeadingTabBorderRadiusWidth.right : HeadingMobileBorderRadiusWidth.right}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={HeadingActiveBorderRadiusDevice === 'desktop' ? HeadingDesktopBorderRadiusWidth.bottom : HeadingActiveBorderRadiusDevice === 'tab' ? HeadingTabBorderRadiusWidth.bottom : HeadingMobileBorderRadiusWidth.bottom}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={HeadingActiveBorderRadiusDevice === 'desktop' ? HeadingDesktopBorderRadiusWidth.left : HeadingActiveBorderRadiusDevice === 'tab' ? HeadingTabBorderRadiusWidth.left : HeadingMobileBorderRadiusWidth.left}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label"></label>
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
                                            <div className="sh_heading_spacing_container">
                                                <div className="sh_heading_spacing_inner_container">
                                                    {/* Padding */}
                                                    <div className="sh_heading_label_container">
                                                        <div className="sh_heading_label">
                                                            <p className="sh_heading_label_text">{__("Padding", "frontis-blocks")}</p>
                                                            <div className="sh_heading_responsive_devices">
                                                                <button className={`sh_heading_desktop_device ${HeadingActivePaddingDevice === 'desktop' ? 'active' : ''}`} onClick={() => handlePaddingDeviceClick('desktop')}>
                                                                    <svg width="8" height="7" viewBox="0 0 8 7"><path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_tab_device ${HeadingActivePaddingDevice === 'tab' ? 'active' : ''}`} onClick={() => handlePaddingDeviceClick('tab')}>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7"><path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_mobile_device ${HeadingActivePaddingDevice === 'mobile' ? 'active' : ''}`} onClick={() => handlePaddingDeviceClick('mobile')}>
                                                                    <svg width="4" height="7" viewBox="0 0 4 7"><path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="fb-advanced-units-type">
                                                            <ButtonGroup className="fb-advanced-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingPaddingUnits: item.value })}
                                                                        className={`fb-advanced-units-type-switcher ${ HeadingPaddingUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="sh_heading_input_container">
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={HeadingActivePaddingDevice === 'desktop' ? HeadingDesktopPadding.top : HeadingActivePaddingDevice === 'tab' ? HeadingTabPadding.top : HeadingMobilePadding.top}
                                                                onChange={(e) => handlePaddingInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={HeadingActivePaddingDevice === 'desktop' ? HeadingDesktopPadding.right : HeadingActivePaddingDevice === 'tab' ? HeadingTabPadding.right : HeadingMobilePadding.right}
                                                                onChange={(e) => handlePaddingInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={HeadingActivePaddingDevice === 'desktop' ? HeadingDesktopPadding.bottom : HeadingActivePaddingDevice === 'tab' ? HeadingTabPadding.bottom : HeadingMobilePadding.bottom}
                                                                onChange={(e) => handlePaddingInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={HeadingActivePaddingDevice === 'desktop' ? HeadingDesktopPadding.left : HeadingActivePaddingDevice === 'tab' ? HeadingTabPadding.left : HeadingMobilePadding.left}
                                                                onChange={(e) => handlePaddingInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label"></label>
                                                            <span
                                                                className={`dashicons ${HeadingPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${HeadingPaddingLink ? 'is-checked' : ''}`}
                                                                onClick={handleHeadingPaddingLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>
                                            <div className="sh_heading_spacing_container">
                                                <div className="sh_heading_spacing_inner_container">
                                                    {/* Margin */}
                                                    <div className="sh_heading_label_container">
                                                        <div className="sh_heading_label">
                                                            <p className="sh_heading_label_text">{__("Margin", "frontis-blocks")}</p>
                                                            <div className="sh_heading_responsive_devices">
                                                                <button className={`sh_heading_desktop_device ${HeadingActiveMarginDevice === 'Desktop' ? 'active' : ''}`} onClick={() => handleMarginDeviceClick('Desktop')}>
                                                                    <svg width="8" height="7" viewBox="0 0 8 7"><path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_tab_device ${HeadingActiveMarginDevice === 'Tablet' ? 'active' : ''}`} onClick={() => handleMarginDeviceClick('Tablet')}>
                                                                    <svg width="6" height="7" viewBox="0 0 6 7"><path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path></svg>
                                                                </button>
                                                                <button className={`sh_heading_mobile_device ${HeadingActiveMarginDevice === 'Mobile' ? 'active' : ''}`} onClick={() => handleMarginDeviceClick('Mobile')}>
                                                                    <svg width="4" height="7" viewBox="0 0 4 7"><path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="fb-advanced-units-type">
                                                            <ButtonGroup className="fb-advanced-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ HeadingMarginUnits: item.value })}
                                                                        className={`fb-advanced-units-type-switcher ${ HeadingMarginUnits === item.value ? 'active' : ''}`}
                                                                    >
                                                                        {item.label}
                                                                    </Button>
                                                                ))}
                                                            </ButtonGroup>
                                                        </div>
                                                    </div>
                                                    <div className="sh_heading_input_container">
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Top", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="top"
                                                                value={HeadingActiveMarginDevice === 'Desktop' ? HeadingDesktopMargin.top : HeadingActiveMarginDevice === 'Tablet' ? HeadingTabMargin.top : HeadingMobileMargin.top}
                                                                onChange={(e) => handleMarginInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={HeadingActiveMarginDevice === 'Desktop' ? HeadingDesktopMargin.right : HeadingActiveMarginDevice === 'Tablet' ? HeadingTabMargin.right : HeadingMobileMargin.right}
                                                                onChange={(e) => handleMarginInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={HeadingActiveMarginDevice === 'Desktop' ? HeadingDesktopMargin.bottom : HeadingActiveMarginDevice === 'Tablet' ? HeadingTabMargin.bottom : HeadingMobileMargin.bottom}
                                                                onChange={(e) => handleMarginInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={HeadingActiveMarginDevice === 'Desktop' ? HeadingDesktopMargin.left : HeadingActiveMarginDevice === 'Tablet' ? HeadingTabMargin.left : HeadingMobileMargin.left}
                                                                onChange={(e) => handleMarginInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="sh_heading_input_wrapper">
                                                            <label className="sh_heading_spacing_input_label"></label>
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
                                        <div className="fb-advanced-z-index-wrapper">
                                            <PanelBody
                                                title={__("Z Index", "frontis-blocks")}
                                                initialOpen={true}
                                                className='fb-advanced-z-index-header'
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