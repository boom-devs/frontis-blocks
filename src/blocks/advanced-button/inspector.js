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
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    ICON_ALIGN,
    FONT_FAMILYS,
    BORDER_STYLES,
} from "./constants/constants";

import { useState, useEffect } from "@wordpress/element";
// import ResponsiveControl from '../../components/responsivecontrol';
import FB_ResponsiveControl from '@Components/responsive-control';
import FBIconPicker from "../../components/icon-picker";
import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const { 
        blockID,
        DeviceType,
        ButtonAlignment,
        ButtonText,
        ButtonUrl,
        ButtonTargetUrl,
        ButtonWidth,
        ButtonFontFamily,
        ButtonFontSize,
        ButtonFontSizeUnits,
        ButtonFontWeight,
        ButtonFontStyle,
        ButtonTextTransform,
        ButtonTextDecoration,
        ButtonLetterSpacing,
        ButtonLetterSpacingUnits,
        ButtonLineHeight,
        ButtonLineHeightUnits,
        ButtonColorSwitcher,
        ButtonColor,
        ButtonHoverColor,
        ButtonBgColorSwitcher,
        ButtonBgColor,
        ButtonBgHoverColor,
        ButtonBorder,
        ButtonBorderColor,
        ButtonBorderHoverColor,
        ButtonBorderColorSwitcher,
        ButtonBorderUnits,
        ButtonDesktopBorderWidth,
        ButtonTabBorderWidth,
        ButtonMobileBorderWidth,
        ButtonBorderLink,
        ButtonBorderRadiusUnits,
        ButtonDesktopBorderRadiusWidth,
        ButtonTabBorderRadiusWidth,
        ButtonMobileBorderRadiusWidth,
        ButtonBorderRadiusLink,
        ButtonPaddingUnits,
        ButtonDesktopPadding,
        ButtonTabPadding,
        ButtonMobilePadding,
        ButtonPaddingLink,
        ButtonMarginUnits,
        ButtonDesktopMargin,
        ButtonTabMargin,
        ButtonMobileMargin,
        ButtonMarginLink,
        ButtonIconAlign,
        ButtonIcon,

        ButtonZIndex

    } = attributes;
    
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-button-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    /** Start Padding */
    const [previousPadding, setPreviousPadding] = useState(ButtonDesktopPadding);
    /** Function to update all padding values */
    const updateAllPadding = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    ButtonDesktopPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    ButtonTabPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    ButtonMobilePadding: {
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
                setAttributes({ ButtonDesktopPadding: { ...ButtonDesktopPadding, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ ButtonTabPadding: { ...ButtonTabPadding, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ ButtonMobilePadding: { ...ButtonMobilePadding, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if ButtonPaddingLink is true */
        if (ButtonPaddingLink) {
            updateAllPadding(value, DeviceType);
        }
    };

    /** Function to handle ButtonPaddingLink toggle */
    const handleButtonPaddingLinkToggle = () => {
        if (!ButtonPaddingLink) {
            setAttributes({ ButtonDesktopPadding: previousPadding });
        }
        /** setButtonPaddingLink(!ButtonPaddingLink) */
        setAttributes({ButtonPaddingLink: !ButtonPaddingLink})
    };

    /** Update previousPadding state when padding changes */
    useEffect(() => {
        setPreviousPadding(ButtonDesktopPadding);
    }, [ButtonDesktopPadding]);

    /** Function to handle device click for padding */
    const handlePaddingDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default padding for desktop (using desktop_padding) */
    const padding = `${ButtonDesktopPadding.top}${ButtonPaddingUnits} ${ButtonDesktopPadding.right}${ButtonPaddingUnits} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits} ${ButtonDesktopPadding.left}${ButtonPaddingUnits}`;
    /** End Padding */

    /** Start Margin */
    const [previousMargin, setPreviousMargin] = useState(ButtonDesktopMargin);
    /** Function to update all margin values */
    const updateAllMargin = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    ButtonDesktopMargin: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    ButtonTabMargin: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    ButtonMobileMargin: {
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
                setAttributes({ ButtonDesktopMargin: { ...ButtonDesktopMargin, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ ButtonTabMargin: { ...ButtonTabMargin, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ ButtonMobileMargin: { ...ButtonMobileMargin, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all margin values if marginLink is true */
        if (ButtonMarginLink) {
            updateAllMargin(value, DeviceType);
        }
    };

    /** Function to handle marginLink toggle */
    const handleMarginLinkToggle = () => {
        if (!ButtonMarginLink) {
            setAttributes({ ButtonDesktopMargin: previousMargin });
        }
        /** setmarginLink(!marginLink) */
        setAttributes({ButtonMarginLink: !ButtonMarginLink})
    };

    /** Update previousMargin state when margin changes */
    useEffect(() => {
        setPreviousMargin(ButtonDesktopMargin);
    }, [ButtonDesktopMargin]);

    /** Function to handle device click for margin */
    const handleMarginDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default margin for desktop (using desktop_margin) */
    const margin = `${ButtonDesktopMargin.top}${ButtonPaddingUnits} ${ButtonDesktopMargin.right}${ButtonPaddingUnits} ${ButtonDesktopMargin.bottom}${ButtonPaddingUnits} ${ButtonDesktopMargin.left}${ButtonPaddingUnits}`;
    /** End Margin */

    /** Start Border Width */
    const [previousBorderWidth, setPreviousBorderWidth] = useState(ButtonDesktopBorderWidth);
    /** Function to update all Border Width values */
    const updateAllBorderWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    ButtonDesktopBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    ButtonTabBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    ButtonMobileBorderWidth: {
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
                setAttributes({ ButtonDesktopBorderWidth: { ...ButtonDesktopBorderWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ ButtonTabBorderWidth: { ...ButtonTabBorderWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ ButtonMobileBorderWidth: { ...ButtonMobileBorderWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if ButtonBorderLink is true */
        if (ButtonBorderLink) {
            updateAllBorderWidth(value, DeviceType);
        }
    };

    /** Function to handle ButtonBorderLink toggle */
    const handleBorderWidthLinkToggle = () => {
        if (!ButtonBorderLink) {
            setAttributes({ ButtonDesktopBorderWidth: previousBorderWidth });
        }
        /** setButtonBorderLinkLink(!ButtonBorderLink) */
        setAttributes({ButtonBorderLink: !ButtonBorderLink})
    };

    /** Update previousborderWidth state when Border Width changes */
    useEffect(() => {
        setPreviousBorderWidth(ButtonDesktopBorderWidth);
    }, [ButtonDesktopBorderWidth]);

    /** Function to handle device click for Border Width */
    const handleBorderWidthDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default Border Width for desktop (using ButtonDesktopBorderWidth) */
    const borderWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits}`;
    /** End Border Width */

    /** Start Border Radius Width */
    const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(ButtonDesktopBorderRadiusWidth);
    /** Function to update all Border Width values */
    const updateAllBorderRadiusWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    ButtonDesktopBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    ButtonTabBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    ButtonMobileBorderRadiusWidth: {
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
                setAttributes({ ButtonDesktopBorderRadiusWidth: { ...ButtonDesktopBorderRadiusWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ ButtonTabBorderRadiusWidth: { ...ButtonTabBorderRadiusWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ ButtonMobileBorderRadiusWidth: { ...ButtonMobileBorderRadiusWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if ButtonBorderRadiusLink is true */
        if (ButtonBorderRadiusLink) {
            updateAllBorderRadiusWidth(value, DeviceType);
        }
    };

    /** Function to handle ButtonBorderRadiusLink toggle */
    const handleBorderRadiusWidthLinkToggle = () => {
        if (!ButtonBorderRadiusLink) {
            setAttributes({ ButtonDesktopBorderRadiusWidth: previousBorderRadiusWidth });
        }
        /** setButtonBorderRadiusLinkLink(!ButtonBorderRadiusLink) */
        setAttributes({ButtonBorderRadiusLink: !ButtonBorderRadiusLink})
    };

    /** Update previousBorderRadiusWidth state when Border Width changes */
    useEffect(() => {
        setPreviousBorderRadiusWidth(ButtonDesktopBorderRadiusWidth);
    }, [ButtonDesktopBorderRadiusWidth]);

    /** Function to handle device click for Border Width */
    const handleBorderRadiusWidthDeviceClick = (device) => {
        setAttributes({ DeviceType: device });
    };

    /** Default Border Width for desktop (using ButtonDesktopBorderWidth) */
    const borderRadiusWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits}`;
    /** End Border Radius Width */ 


    /* set default values for the style attributes */
    useEffect(() => {
        if (ButtonFontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${ButtonFontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    }, [ButtonFontFamily]);

    const iconHandler = (IconName) => {
		setAttributes({ButtonIcon: IconName})

	}
    
    
    
    return (
        <>
            <style>
            {`
                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button {
                    ${ButtonBgColor !== undefined ? `background-color: ${ButtonBgColor};` : ''}
                    font-family: ${ButtonFontFamily !== 'default' ? ButtonFontFamily : ButtonFontFamily};
                    font-size: ${ButtonFontSize !== undefined ? `${ButtonFontSize}${ButtonFontSizeUnits}` : ''};
                    font-weight: ${ButtonFontWeight};
                    font-style: ${ButtonFontStyle};
                    text-transform: ${ButtonTextTransform};
                    text-decoration: ${ButtonTextDecoration};
                    ${ButtonLetterSpacing !== undefined ? `letter-spacing: ${ButtonLetterSpacing}${ButtonLetterSpacingUnits};` : ''}
                    ${ButtonLineHeight !== undefined ? `line-height: ${ButtonLineHeight}${ButtonLineHeightUnits};` : ''}
                    padding: ${padding};
                    margin: ${margin};
                    border: ${ButtonBorder};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${ButtonBorderColor !== undefined ? `border-color: ${ButtonBorderColor};` : ''}
                    z-index: ${ButtonZIndex !== undefined ? ButtonZIndex : ''};
                    width: ${ButtonWidth !== undefined ? `${ButtonWidth}%` : ''};
                }
                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button .fb-advanced-button-text {
                    ${ButtonColor !== undefined ? `color: ${ButtonColor};` : ''}
                }
                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button:hover .fb-advanced-button-text {
                    ${ButtonHoverColor !== undefined ? `color: ${ButtonHoverColor};` : ''}
                }

                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button:hover {
                    ${ButtonBgHoverColor !== undefined ? `background-color: ${ButtonBgHoverColor};` : ''}
                }
                @media only screen and (max-width: 1024px) {
                    .fb-advanced-button-wrapper.${blockID} .fb-advanced-button {
                        padding: ${ButtonTabPadding.top}${ButtonPaddingUnits} ${ButtonTabPadding.right}${ButtonPaddingUnits} ${ButtonTabPadding.bottom}${ButtonPaddingUnits} ${ButtonTabPadding.left}${ButtonPaddingUnits} !important;
                        margin: ${ButtonTabMargin.top}${ButtonMarginUnits} ${ButtonTabMargin.right}${ButtonMarginUnits} ${ButtonTabMargin.bottom}${ButtonMarginUnits} ${ButtonTabMargin.left}${ButtonMarginUnits} !important;
                        border-width: ${ButtonTabBorderWidth.top}${ButtonBorderUnits} ${ButtonTabBorderWidth.right}${ButtonBorderUnits} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits} ${ButtonTabBorderWidth.left}${ButtonBorderUnits} !important;
                        border-radius: ${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-button-wrapper.${blockID} .fb-advanced-button {
                        padding: ${ButtonMobilePadding.top}${ButtonPaddingUnits} ${ButtonMobilePadding.right}${ButtonPaddingUnits} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits} ${ButtonMobilePadding.left}${ButtonPaddingUnits} !important;
                        margin: ${ButtonMobileMargin.top}${ButtonMarginUnits} ${ButtonMobileMargin.right}${ButtonMarginUnits} ${ButtonMobileMargin.bottom}${ButtonMarginUnits} ${ButtonMobileMargin.left}${ButtonMarginUnits} !important;
                        border-width: ${ButtonMobileBorderWidth.top}${ButtonBorderUnits} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits} !important;
                        border-radius: ${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits} !important;
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
                                                                onClick={() => setAttributes({ ButtonAlignment: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${ButtonAlignment === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                <TextControl
                                                    label={__("Text", "frontis-blocks")}
                                                    value={ButtonText}
                                                    onChange={(value) => setAttributes({ ButtonText: value })}
                                                    className="fb-advanced-button-text"
                                                />
                                                <div className="fb-link-control-wrapper">
                                                    <BaseControl 
                                                        label={__("URL", "frontis-blocks")}
                                                    >
                                                        <div className="fb-link-control-inner-wrapper">
                                                            <TextControl
                                                                value={ButtonUrl}
                                                                onChange={(value) => setAttributes({ ButtonUrl: value })}
                                                                className="fb-link-control-url"
                                                                placeholder={__('https://', 'frontis-blocks')}
                                                            />
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
                                                                        <Dashicon icon="color-picker" className="fb-setting-dropdown-icon" />
                                                                    </Button>
                                                                )}
                                                                renderContent={() => (
                                                                    <div className="fb-link-control-icon-popup">
                                                                        <BaseControl className="fb-link-control-icon-popup-inner">
                                                                            <ToggleControl
                                                                                label={__("Open in new tab", "frontis-blocks")}
                                                                                checked={ButtonTargetUrl}
                                                                                onChange={(value) => setAttributes({ ButtonTargetUrl: value })}
                                                                            />
                                                                        </BaseControl>
                                                                    </div>
                                                                )}
                                                            />
                                                        </div>
                                                    </BaseControl>
                                                </div>
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
                                                                    onClick={() => setAttributes({ ButtonIconAlign: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${ButtonIconAlign === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                        {ButtonIconAlign === 'icon' && (
                                                            <FBIconPicker value={ButtonIcon} setIconHandler={iconHandler} /> 
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
                                            <BaseControl 
                                                label={__("Width", "frontis-blocks")}
                                                className="fb-advanced-button-width"
                                            >
                                                <RangeControl
                                                    value={ButtonWidth}
                                                    onChange={(value) => setAttributes({ ButtonWidth: value === 0 ? undefined : value })}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                    allowReset
                                                    resetFallbackValue={undefined}
                                                />
                                            </BaseControl>
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
                                                                        value={ButtonFontFamily}
                                                                        onChange={(value) => setAttributes({ ButtonFontFamily: value })}
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
                                                                                        onClick={() => setAttributes({ ButtonFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${ ButtonFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={ButtonFontSize}
                                                                            onChange={(value) => setAttributes({ ButtonFontSize: value })}
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
                                                                        value={ButtonFontWeight}
                                                                        onChange={(value) => setAttributes({ ButtonFontWeight: value })}
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
                                                                        value={ButtonFontStyle}
                                                                        onChange={(value) => setAttributes({ ButtonFontStyle: value })}
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
                                                                        value={ButtonTextTransform}
                                                                        onChange={(value) => setAttributes({ ButtonTextTransform: value })}
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
                                                                        value={ButtonTextDecoration}
                                                                        onChange={(value) => setAttributes({ ButtonTextDecoration: value })}
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
                                                                                        onClick={() => setAttributes({ ButtonLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${ ButtonLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={ButtonLetterSpacing}
                                                                        onChange={(value) => setAttributes({ ButtonLetterSpacing: value === 0 ? undefined : value })}
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
                                                                                        onClick={() => setAttributes({ ButtonLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${ ButtonLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={ButtonLineHeight}
                                                                        onChange={(value) => setAttributes({ ButtonLineHeight: value === 1 ? undefined : value })}
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
                                                            onClick={() => setAttributes({ ButtonColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${ButtonColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {ButtonColorSwitcher === 'normal' && (
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
                                                                            color={ButtonColor}
                                                                            onChange={(value) => setAttributes({ ButtonColor: value })}
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
                                                                            value={ButtonColor}
                                                                            onChange={(value) => setAttributes({ ButtonColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {ButtonColorSwitcher === 'hover' && (
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
                                                                            color={ButtonHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonHoverColor: value })}
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
                                                                            value={ButtonHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            <BaseControl
                                                label={__("Background Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ ButtonBgColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${ButtonBgColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {ButtonBgColorSwitcher === 'normal' && (
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
                                                                            color={ButtonBgColor}
                                                                            onChange={(value) => setAttributes({ ButtonBgColor: value })}
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
                                                                            value={ButtonBgColor}
                                                                            onChange={(value) => setAttributes({ ButtonBgColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {ButtonBgColorSwitcher === 'hover' && (
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
                                                                            color={ButtonBgHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonBgHoverColor: value })}
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
                                                                            value={ButtonBgHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonBgHoverColor: value })}
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
                                                    value={ButtonBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ ButtonBorder: value })}
                                                />

                                            <BaseControl
                                                label={__("Border Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ ButtonBorderColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${ButtonBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {ButtonBorderColorSwitcher === 'normal' && (
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
                                                                            color={ButtonBorderColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderColor: value })}
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
                                                                            value={ButtonBorderColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {ButtonBorderColorSwitcher === 'hover' && (
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
                                                                            color={ButtonBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderHoverColor: value })}
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
                                                                            value={ButtonBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderHoverColor: value })}
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
                                                                        onClick={() => setAttributes({ ButtonBorderUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ ButtonBorderUnits === item.value ? 'active' : ''}`}
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
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderWidth.top : DeviceType === 'Tablet' ? ButtonTabBorderWidth.top : ButtonMobileBorderWidth.top}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderWidth.right : DeviceType === 'Tablet' ? ButtonTabBorderWidth.right : ButtonMobileBorderWidth.right}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderWidth.bottom : DeviceType === 'Tablet' ? ButtonTabBorderWidth.bottom : ButtonMobileBorderWidth.bottom}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderWidth.left : DeviceType === 'Tablet' ? ButtonTabBorderWidth.left : ButtonMobileBorderWidth.left}
                                                                onChange={(e) => handleBorderWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${ButtonBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${ButtonBorderLink ? 'is-checked' : ''}`}
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
                                                                        onClick={() => setAttributes({ ButtonBorderRadiusUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ ButtonBorderRadiusUnits === item.value ? 'active' : ''}`}
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
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderRadiusWidth.top : DeviceType === 'Tablet' ? ButtonTabBorderRadiusWidth.top : ButtonMobileBorderRadiusWidth.top}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderRadiusWidth.right : DeviceType === 'Tablet' ? ButtonTabBorderRadiusWidth.right : ButtonMobileBorderRadiusWidth.right}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderRadiusWidth.bottom : DeviceType === 'Tablet' ? ButtonTabBorderRadiusWidth.bottom : ButtonMobileBorderRadiusWidth.bottom}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopBorderRadiusWidth.left : DeviceType === 'Tablet' ? ButtonTabBorderRadiusWidth.left : ButtonMobileBorderRadiusWidth.left}
                                                                onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${ButtonBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${ButtonBorderRadiusLink ? 'is-checked' : ''}`}
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
                                                                        onClick={() => setAttributes({ ButtonPaddingUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ ButtonPaddingUnits === item.value ? 'active' : ''}`}
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
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopPadding.top : DeviceType === 'Tablet' ? ButtonTabPadding.top : ButtonMobilePadding.top}
                                                                onChange={(e) => handlePaddingInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopPadding.right : DeviceType === 'Tablet' ? ButtonTabPadding.right : ButtonMobilePadding.right}
                                                                onChange={(e) => handlePaddingInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopPadding.bottom : DeviceType === 'Tablet' ? ButtonTabPadding.bottom : ButtonMobilePadding.bottom}
                                                                onChange={(e) => handlePaddingInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopPadding.left : DeviceType === 'Tablet' ? ButtonTabPadding.left : ButtonMobilePadding.left}
                                                                onChange={(e) => handlePaddingInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${ButtonPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${ButtonPaddingLink ? 'is-checked' : ''}`}
                                                                onClick={handleButtonPaddingLinkToggle}
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
                                                                        onClick={() => setAttributes({ ButtonMarginUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ ButtonMarginUnits === item.value ? 'active' : ''}`}
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
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopMargin.top : DeviceType === 'Tablet' ? ButtonTabMargin.top : ButtonMobileMargin.top}
                                                                onChange={(e) => handleMarginInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopMargin.right : DeviceType === 'Tablet' ? ButtonTabMargin.right : ButtonMobileMargin.right}
                                                                onChange={(e) => handleMarginInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopMargin.bottom : DeviceType === 'Tablet' ? ButtonTabMargin.bottom : ButtonMobileMargin.bottom}
                                                                onChange={(e) => handleMarginInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? ButtonDesktopMargin.left : DeviceType === 'Tablet' ? ButtonTabMargin.left : ButtonMobileMargin.left}
                                                                onChange={(e) => handleMarginInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${ButtonMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${ButtonMarginLink ? 'is-checked' : ''}`}
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
                                                        value={ButtonZIndex}
                                                        onChange={(value) => setAttributes({ ButtonZIndex: value === 0 ? undefined : value })}
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