import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    Dropdown,
    RangeControl,
    SelectControl,
    Dashicon,
    ColorPicker,
    ColorPalette,
    TextControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components';

import {
    FORM_LISTS,
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_Color from '@Components/color';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        DeviceType,
        fluentFormGlobalZIndex,
        formId,
        showLabels,
        showPlaceholder,
        showErrorMessage,



        fluentFormGlobalPaddingUnits,
        fluentFormGlobalPaddingDesktop,
        fluentFormGlobalPaddingTablet,
        fluentFormGlobalPaddingMobile,
        fluentFormGlobalPaddingLink,

        fluentFormGlobalMarginUnits,
        fluentFormGlobalMarginDesktop,
        fluentFormGlobalMarginTablet,
        fluentFormGlobalMarginMobile,
        fluentFormGlobalMarginLink,

        fluentFormGlobalBgColorSwitcher,
        fluentFormGlobalBgColor,
        fluentFormGlobalBgHoverColor,

        fluentFormGlobalBorder,
        fluentFormGlobalBorderColorSwitcher,
        fluentFormGlobalBorderColor,
        fluentFormGlobalBorderHoverColor,

        fluentFormGlobalBorderUnits,
        fluentFormGlobalBorderDesktop,
        fluentFormGlobalBorderTablet,
        fluentFormGlobalBorderMobile,
        fluentFormGlobalBorderLink,

        fluentFormGlobalBorderRadiusUnits,
        fluentFormGlobalBorderRadiusDesktop,
        fluentFormGlobalBorderRadiusTablet,
        fluentFormGlobalBorderRadiusMobile,
        fluentFormGlobalBorderRadiusLink,


    } = attributes;
    

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-fluent-form-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);





    /** Start Global padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalPaddingLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalPaddingMobile: {
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
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormGlobalPaddingDesktop: {...fluentFormGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalPaddingTablet: {...fluentFormGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalPaddingMobile: {...fluentFormGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {fluentFormGlobalPaddingLink: !fluentFormGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalPaddingUnits: {
                ...fluentFormGlobalPaddingUnits,
                [DeviceType]: unit
            }
        })
    }
    /** end Global padding */


    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${fluentFormGlobalPaddingDesktop.top}${fluentFormGlobalPaddingUnits.Desktop} ${fluentFormGlobalPaddingDesktop.right}${fluentFormGlobalPaddingUnits.Desktop} ${fluentFormGlobalPaddingDesktop.bottom}${fluentFormGlobalPaddingUnits.Desktop} ${fluentFormGlobalPaddingDesktop.left}${fluentFormGlobalPaddingUnits.Desktop}`;
    const TabletPadding     = `${fluentFormGlobalPaddingTablet.top}${fluentFormGlobalPaddingUnits.Tablet} ${fluentFormGlobalPaddingTablet.right}${fluentFormGlobalPaddingUnits.Tablet} ${fluentFormGlobalPaddingTablet.bottom}${fluentFormGlobalPaddingUnits.Tablet} ${fluentFormGlobalPaddingTablet.left}${fluentFormGlobalPaddingUnits.Tablet}`;
    const MobilePadding     = `${fluentFormGlobalPaddingMobile.top}${fluentFormGlobalPaddingUnits.Mobile} ${fluentFormGlobalPaddingMobile.right}${fluentFormGlobalPaddingUnits.Mobile} ${fluentFormGlobalPaddingMobile.bottom}${fluentFormGlobalPaddingUnits.Mobile} ${fluentFormGlobalPaddingMobile.left}${fluentFormGlobalPaddingUnits.Mobile}`;
    /** End Padding */
    

    /** Start Global margin */
    const handleGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalMarginLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalMarginMobile: {
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
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormGlobalMarginDesktop: {...fluentFormGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalMarginTablet: {...fluentFormGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalMarginMobile: {...fluentFormGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {fluentFormGlobalMarginLink: !fluentFormGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalMarginUnits: {
                ...fluentFormGlobalMarginUnits,
                [DeviceType]: unit
            }
        })
    }
    /** end Global margin */

    const DesktopMargin = `${fluentFormGlobalMarginDesktop.top}${fluentFormGlobalMarginUnits.Desktop} ${fluentFormGlobalMarginDesktop.right}${fluentFormGlobalMarginUnits.Desktop} ${fluentFormGlobalMarginDesktop.bottom}${fluentFormGlobalMarginUnits.Desktop} ${fluentFormGlobalMarginDesktop.left}${fluentFormGlobalMarginUnits.Desktop}`;
    const TabletMargin = `${fluentFormGlobalMarginTablet.top}${fluentFormGlobalMarginUnits.Tablet} ${fluentFormGlobalMarginTablet.right}${fluentFormGlobalMarginUnits.Tablet} ${fluentFormGlobalMarginTablet.bottom}${fluentFormGlobalMarginUnits.Tablet} ${fluentFormGlobalMarginTablet.left}${fluentFormGlobalMarginUnits.Tablet}`;
    const MobileMargin = `${fluentFormGlobalMarginMobile.top}${fluentFormGlobalMarginUnits.Mobile} ${fluentFormGlobalMarginMobile.right}${fluentFormGlobalMarginUnits.Mobile} ${fluentFormGlobalMarginMobile.bottom}${fluentFormGlobalMarginUnits.Mobile} ${fluentFormGlobalMarginMobile.left}${fluentFormGlobalMarginUnits.Mobile}`;
    /** End Margin */


    /** Start Global border */
    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalBorderLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalBorderMobile: {
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
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormGlobalBorderDesktop: {...fluentFormGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalBorderTablet: {...fluentFormGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalBorderMobile: {...fluentFormGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {fluentFormGlobalBorderLink: !fluentFormGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalBorderUnits: {
                ...fluentFormGlobalBorderUnits,
                [DeviceType]: unit
            }
        })
    }
    /** End Global border */
    const BorderDesktopWidth = `${fluentFormGlobalBorderDesktop.top}${fluentFormGlobalBorderUnits.Desktop} ${fluentFormGlobalBorderDesktop.right}${fluentFormGlobalBorderUnits.Desktop} ${fluentFormGlobalBorderDesktop.bottom}${fluentFormGlobalBorderUnits.Desktop} ${fluentFormGlobalBorderDesktop.left}${fluentFormGlobalBorderUnits.Desktop}`;
    const BorderTabletWidth = `${fluentFormGlobalBorderTablet.top}${fluentFormGlobalBorderUnits.Tablet} ${fluentFormGlobalBorderTablet.right}${fluentFormGlobalBorderUnits.Tablet} ${fluentFormGlobalBorderTablet.bottom}${fluentFormGlobalBorderUnits.Tablet} ${fluentFormGlobalBorderTablet.left}${fluentFormGlobalBorderUnits.Tablet}`;
    const BorderMobileWidth = `${fluentFormGlobalBorderMobile.top}${fluentFormGlobalBorderUnits.Mobile} ${fluentFormGlobalBorderMobile.right}${fluentFormGlobalBorderUnits.Mobile} ${fluentFormGlobalBorderMobile.bottom}${fluentFormGlobalBorderUnits.Mobile} ${fluentFormGlobalBorderMobile.left}${fluentFormGlobalBorderUnits.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalBorderRadiusLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalBorderRadiusMobile: {
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
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormGlobalBorderRadiusDesktop: {...fluentFormGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalBorderRadiusTablet: {...fluentFormGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalBorderRadiusMobile: {...fluentFormGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {fluentFormGlobalBorderRadiusLink: !fluentFormGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalBorderRadiusUnits: {
                ...fluentFormGlobalBorderRadiusUnits,
                [DeviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const BorderRadiusDesktopWidth = `${fluentFormGlobalBorderRadiusDesktop.top}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.right}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.bottom}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.left}${fluentFormGlobalBorderRadiusUnits.Desktop}`;
    const BorderRadiusTabletWidth = `${fluentFormGlobalBorderRadiusTablet.top}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.right}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.bottom}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.left}${fluentFormGlobalBorderRadiusUnits.Tablet}`;
    const BorderRadiusMobileWidth = `${fluentFormGlobalBorderRadiusMobile.top}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.right}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.bottom}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.left}${fluentFormGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */



    /** Start Global Bg Color */
    const handleGlobalBgColorSwitcherChange = (value) => {
        setAttributes({ fluentFormGlobalBgColorSwitcher: value });
    };
    const handleGlobalBgColorChange = (value) => {
        setAttributes({ fluentFormGlobalBgColor: value });
    };
    const handleGlobalBgHoverColorChange = (value) => {
        setAttributes({ fluentFormGlobalBgHoverColor: value });
    };
    /** End Global Bg Color */


    /** Start Global Border Color */
    const handleGlobalBorderColorSwitcherChange = (value) => {
        setAttributes({ fluentFormGlobalBorderColorSwitcher: value });
    };
    const handleGlobalBorderColorChange = (value) => {
        setAttributes({ fluentFormGlobalBorderColor: value });
    };
    const handleGlobalBorderHoverColorChange = (value) => {
        setAttributes({ fluentFormGlobalBorderHoverColor: value });
    };
    /** End Global Border Color */

    return (
        <>
            <style>
            {`
                .${blockID}.fb-fluent-form-wrapper {
                    z-index: ${fluentFormGlobalZIndex !== undefined ? fluentFormGlobalZIndex : ''};
                }
                .${blockID}.fb-fluent-form-wrapper {
                    ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${fluentFormGlobalBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .${blockID}.fb-fluent-form-wrapper:hover {
                    ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''};
                    ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''};
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group label:not(.ff-el-form-check-label),
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group .ff-el-input--label,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .fb-fluent-form-rendered .ff-el-group .error.text-danger {
                    display: none;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
                    opacity: 0;
                    visibility: hidden;
                }


                @media only screen and (max-width: 1024px) {

                    .${blockID}.fb-fluent-form-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .${blockID}.fb-fluent-form-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
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
                                        <PanelBody title={__("Fluent Form", "frontis-blocks")} initialOpen={true}>
                                            <BaseControl className="fb-fluent-from" >
                                                <SelectControl
                                                    label={__("Select Form", "frontis-blocks")}
                                                    value={formId}
                                                    options={FORM_LISTS}
                                                    onChange={(newFormId) =>
                                                        setAttributes({ formId: newFormId })
                                                    }
                                                />

                                                <ToggleControl
                                                    label={__("Show Labels", "frontis-blocks")}
                                                    checked={showLabels}
                                                    onChange={(showLabels) =>
                                                        setAttributes({ showLabels })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__("Show Placeholder", "frontis-blocks")}
                                                    checked={showPlaceholder}
                                                    onChange={(showPlaceholder) =>
                                                        setAttributes({
                                                            showPlaceholder,
                                                        })
                                                    }
                                                />
                                                <ToggleControl
                                                    label={__("Show Error Message", "frontis-blocks")}
                                                    checked={showErrorMessage}
                                                    onChange={(showErrorMessage) =>
                                                        setAttributes({
                                                            showErrorMessage,
                                                        })
                                                    }
                                                />

                                            </BaseControl>
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Style", "frontis-blocks")} initialOpen={true}>

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
                                                    <RangeControl
                                                        value={fluentFormGlobalZIndex}
                                                        onChange={(value) => setAttributes({ fluentFormGlobalZIndex: value === 0 ? undefined : value })}
                                                        min={1}
                                                        max={10000}
                                                        step={1}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />
                                                </PanelBody>

                                                <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                                                    <FB_Spacing 
                                                        label={__("Padding", "frontis-blocks")}
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                                                        spacingUnits={fluentFormGlobalPaddingUnits}
                                                        spacingDesktop={fluentFormGlobalPaddingDesktop}
                                                        spacingTablet={fluentFormGlobalPaddingTablet}
                                                        spacingMobile={fluentFormGlobalPaddingMobile}
                                                        handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                                                        spacingCombineBtn={fluentFormGlobalPaddingLink}
                                                        spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                    <FB_Spacing 
                                                        label={__("Margin", "frontis-blocks")}
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                                                        spacingUnits={fluentFormGlobalMarginUnits}
                                                        spacingDesktop={fluentFormGlobalMarginDesktop}
                                                        spacingTablet={fluentFormGlobalMarginTablet}
                                                        spacingMobile={fluentFormGlobalMarginMobile}
                                                        handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                                                        spacingCombineBtn={fluentFormGlobalMarginLink}
                                                        spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                </PanelBody>

                                                <PanelBody title="Background Color" initialOpen={false} >
                                                    <FB_Color
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalColorSwitcher={fluentFormGlobalBgColorSwitcher}
                                                        globalColor={fluentFormGlobalBgColor}
                                                        globalHoverColor={fluentFormGlobalBgHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBgColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBgColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBgHoverColorChange}
                                                    />
                                                </PanelBody>
                                                <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>

                                                    <SelectControl
                                                            label={__("Border Style", "frontis-blocks")}
                                                            value={fluentFormGlobalBorder}
                                                            options={BORDER_STYLES}
                                                            onChange={(value) => setAttributes({ fluentFormGlobalBorder: value })}
                                                    />

                                                    <FB_Color
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalColorSwitcher={fluentFormGlobalBorderColorSwitcher}
                                                        globalColor={fluentFormGlobalBorderColor}
                                                        globalHoverColor={fluentFormGlobalBorderHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBorderColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBorderColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBorderHoverColorChange}
                                                    />

                                                    <FB_Spacing 
                                                        label={__("Border", "frontis-blocks")}
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                                                        spacingUnits={fluentFormGlobalBorderUnits}
                                                        spacingDesktop={fluentFormGlobalBorderDesktop}
                                                        spacingTablet={fluentFormGlobalBorderTablet}
                                                        spacingMobile={fluentFormGlobalBorderMobile}
                                                        handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                                                        spacingCombineBtn={fluentFormGlobalBorderLink}
                                                        spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_Spacing 
                                                        label={__("Radius Border", "frontis-blocks")}
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                                                        spacingUnits={fluentFormGlobalBorderRadiusUnits}
                                                        spacingDesktop={fluentFormGlobalBorderRadiusDesktop}
                                                        spacingTablet={fluentFormGlobalBorderRadiusTablet}
                                                        spacingMobile={fluentFormGlobalBorderRadiusMobile}
                                                        handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                                                        spacingCombineBtn={fluentFormGlobalBorderRadiusLink}
                                                        spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                                                        setAttributes={setAttributes}
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