import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
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
        deviceType,
        videoGlobalZIndex,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,

        videoBorder,
        videoBorderColorSwitcher,
        videoBorderColor,
        videoBorderHoverColor,

        videoBorderUnits,
        videoBorderDesktop,
        videoBorderTablet,
        videoBorderMobile,
        videoBorderLink,

        videoBorderRadiusUnits,
        videoBorderRadiusDesktop,
        videoBorderRadiusTablet,
        videoBorderRadiusMobile,
        videoBorderRadiusLink,





        videoGlobalPaddingUnits,
        videoGlobalPaddingDesktop,
        videoGlobalPaddingTablet,
        videoGlobalPaddingMobile,
        videoGlobalPaddingLink,

        videoGlobalMarginUnits,
        videoGlobalMarginDesktop,
        videoGlobalMarginTablet,
        videoGlobalMarginMobile,
        videoGlobalMarginLink,

        videoGlobalBgColorSwitcher,
        videoGlobalBgColor,
        videoGlobalBgHoverColor,

        videoGlobalBorder,
        videoGlobalBorderColorSwitcher,
        videoGlobalBorderColor,
        videoGlobalBorderHoverColor,

        videoGlobalBorderUnits,
        videoGlobalBorderDesktop,
        videoGlobalBorderTablet,
        videoGlobalBorderMobile,
        videoGlobalBorderLink,

        videoGlobalBorderRadiusUnits,
        videoGlobalBorderRadiusDesktop,
        videoGlobalBorderRadiusTablet,
        videoGlobalBorderRadiusMobile,
        videoGlobalBorderRadiusLink,

    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-video-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);





    /** Start border */
    const handleIframeBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoBorderMobile: {
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
                    setAttributes( {videoBorderDesktop: {...videoBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoBorderTablet: {...videoBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoBorderMobile: {...videoBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleIframeBorderCombineBtn = () => {
        setAttributes( {videoBorderLink: !videoBorderLink} );
    }

    const handleIframeBorderUnitsHandler = (unit) => {
        setAttributes( {
            videoBorderUnits: {
                ...videoBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */
    const IframeBorderDesktopWidth = `${videoBorderDesktop.top}${videoBorderUnits.Desktop} ${videoBorderDesktop.right}${videoBorderUnits.Desktop} ${videoBorderDesktop.bottom}${videoBorderUnits.Desktop} ${videoBorderDesktop.left}${videoBorderUnits.Desktop}`;
    const IframeBorderTabletWidth = `${videoBorderTablet.top}${videoBorderUnits.Tablet} ${videoBorderTablet.right}${videoBorderUnits.Tablet} ${videoBorderTablet.bottom}${videoBorderUnits.Tablet} ${videoBorderTablet.left}${videoBorderUnits.Tablet}`;
    const IframeBorderMobileWidth = `${videoBorderMobile.top}${videoBorderUnits.Mobile} ${videoBorderMobile.right}${videoBorderUnits.Mobile} ${videoBorderMobile.bottom}${videoBorderUnits.Mobile} ${videoBorderMobile.left}${videoBorderUnits.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
    const handleIframeBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoBorderRadiusMobile: {
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
                    setAttributes( {videoBorderRadiusDesktop: {...videoBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoBorderRadiusTablet: {...videoBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoBorderRadiusMobile: {...videoBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleIframeBorderRadiusCombineBtn = () => {
        setAttributes( {videoBorderRadiusLink: !videoBorderRadiusLink} );
    }

    const handleIframeBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            videoBorderRadiusUnits: {
                ...videoBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const IframeBorderRadiusDesktopWidth = `${videoBorderRadiusDesktop.top}${videoBorderRadiusUnits.Desktop} ${videoBorderRadiusDesktop.right}${videoBorderRadiusUnits.Desktop} ${videoBorderRadiusDesktop.bottom}${videoBorderRadiusUnits.Desktop} ${videoBorderRadiusDesktop.left}${videoBorderRadiusUnits.Desktop}`;
    const IframeBorderRadiusTabletWidth = `${videoBorderRadiusTablet.top}${videoBorderRadiusUnits.Tablet} ${videoBorderRadiusTablet.right}${videoBorderRadiusUnits.Tablet} ${videoBorderRadiusTablet.bottom}${videoBorderRadiusUnits.Tablet} ${videoBorderRadiusTablet.left}${videoBorderRadiusUnits.Tablet}`;
    const IframeBorderRadiusMobileWidth = `${videoBorderRadiusMobile.top}${videoBorderRadiusUnits.Mobile} ${videoBorderRadiusMobile.right}${videoBorderRadiusUnits.Mobile} ${videoBorderRadiusMobile.bottom}${videoBorderRadiusUnits.Mobile} ${videoBorderRadiusMobile.left}${videoBorderRadiusUnits.Mobile}`;
    /** End Border Radius */


    /** Start Global Border Color */
    const handleBorderColorSwitcherChange = (value) => {
        setAttributes({ videoBorderColorSwitcher: value });
    };
    const handleBorderColorChange = (value) => {
        setAttributes({ videoBorderColor: value });
    };
    const handleBorderHoverColorChange = (value) => {
        setAttributes({ videoBorderHoverColor: value });
    };
    /** End Global Border Color */

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoGlobalPaddingMobile: {
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
                    setAttributes( {videoGlobalPaddingDesktop: {...videoGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoGlobalPaddingTablet: {...videoGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoGlobalPaddingMobile: {...videoGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {videoGlobalPaddingLink: !videoGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalPaddingUnits: {
                ...videoGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global padding */


    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${videoGlobalPaddingDesktop.top}${videoGlobalPaddingUnits.Desktop} ${videoGlobalPaddingDesktop.right}${videoGlobalPaddingUnits.Desktop} ${videoGlobalPaddingDesktop.bottom}${videoGlobalPaddingUnits.Desktop} ${videoGlobalPaddingDesktop.left}${videoGlobalPaddingUnits.Desktop}`;
    const TabletPadding     = `${videoGlobalPaddingTablet.top}${videoGlobalPaddingUnits.Tablet} ${videoGlobalPaddingTablet.right}${videoGlobalPaddingUnits.Tablet} ${videoGlobalPaddingTablet.bottom}${videoGlobalPaddingUnits.Tablet} ${videoGlobalPaddingTablet.left}${videoGlobalPaddingUnits.Tablet}`;
    const MobilePadding     = `${videoGlobalPaddingMobile.top}${videoGlobalPaddingUnits.Mobile} ${videoGlobalPaddingMobile.right}${videoGlobalPaddingUnits.Mobile} ${videoGlobalPaddingMobile.bottom}${videoGlobalPaddingUnits.Mobile} ${videoGlobalPaddingMobile.left}${videoGlobalPaddingUnits.Mobile}`;
    /** End Padding */
    

    /** Start Global margin */
    const handleGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoGlobalMarginMobile: {
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
                    setAttributes( {videoGlobalMarginDesktop: {...videoGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoGlobalMarginTablet: {...videoGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoGlobalMarginMobile: {...videoGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {videoGlobalMarginLink: !videoGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalMarginUnits: {
                ...videoGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global margin */

    const DesktopMargin = `${videoGlobalMarginDesktop.top}${videoGlobalMarginUnits.Desktop} ${videoGlobalMarginDesktop.right}${videoGlobalMarginUnits.Desktop} ${videoGlobalMarginDesktop.bottom}${videoGlobalMarginUnits.Desktop} ${videoGlobalMarginDesktop.left}${videoGlobalMarginUnits.Desktop}`;
    const TabletMargin = `${videoGlobalMarginTablet.top}${videoGlobalMarginUnits.Tablet} ${videoGlobalMarginTablet.right}${videoGlobalMarginUnits.Tablet} ${videoGlobalMarginTablet.bottom}${videoGlobalMarginUnits.Tablet} ${videoGlobalMarginTablet.left}${videoGlobalMarginUnits.Tablet}`;
    const MobileMargin = `${videoGlobalMarginMobile.top}${videoGlobalMarginUnits.Mobile} ${videoGlobalMarginMobile.right}${videoGlobalMarginUnits.Mobile} ${videoGlobalMarginMobile.bottom}${videoGlobalMarginUnits.Mobile} ${videoGlobalMarginMobile.left}${videoGlobalMarginUnits.Mobile}`;
    /** End Margin */


    /** Start Global border */
    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoGlobalBorderMobile: {
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
                    setAttributes( {videoGlobalBorderDesktop: {...videoGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoGlobalBorderTablet: {...videoGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoGlobalBorderMobile: {...videoGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {videoGlobalBorderLink: !videoGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalBorderUnits: {
                ...videoGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */
    const BorderDesktopWidth = `${videoGlobalBorderDesktop.top}${videoGlobalBorderUnits.Desktop} ${videoGlobalBorderDesktop.right}${videoGlobalBorderUnits.Desktop} ${videoGlobalBorderDesktop.bottom}${videoGlobalBorderUnits.Desktop} ${videoGlobalBorderDesktop.left}${videoGlobalBorderUnits.Desktop}`;
    const BorderTabletWidth = `${videoGlobalBorderTablet.top}${videoGlobalBorderUnits.Tablet} ${videoGlobalBorderTablet.right}${videoGlobalBorderUnits.Tablet} ${videoGlobalBorderTablet.bottom}${videoGlobalBorderUnits.Tablet} ${videoGlobalBorderTablet.left}${videoGlobalBorderUnits.Tablet}`;
    const BorderMobileWidth = `${videoGlobalBorderMobile.top}${videoGlobalBorderUnits.Mobile} ${videoGlobalBorderMobile.right}${videoGlobalBorderUnits.Mobile} ${videoGlobalBorderMobile.bottom}${videoGlobalBorderUnits.Mobile} ${videoGlobalBorderMobile.left}${videoGlobalBorderUnits.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoGlobalBorderRadiusMobile: {
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
                    setAttributes( {videoGlobalBorderRadiusDesktop: {...videoGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoGlobalBorderRadiusTablet: {...videoGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoGlobalBorderRadiusMobile: {...videoGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {videoGlobalBorderRadiusLink: !videoGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalBorderRadiusUnits: {
                ...videoGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const BorderRadiusDesktopWidth = `${videoGlobalBorderRadiusDesktop.top}${videoGlobalBorderRadiusUnits.Desktop} ${videoGlobalBorderRadiusDesktop.right}${videoGlobalBorderRadiusUnits.Desktop} ${videoGlobalBorderRadiusDesktop.bottom}${videoGlobalBorderRadiusUnits.Desktop} ${videoGlobalBorderRadiusDesktop.left}${videoGlobalBorderRadiusUnits.Desktop}`;
    const BorderRadiusTabletWidth = `${videoGlobalBorderRadiusTablet.top}${videoGlobalBorderRadiusUnits.Tablet} ${videoGlobalBorderRadiusTablet.right}${videoGlobalBorderRadiusUnits.Tablet} ${videoGlobalBorderRadiusTablet.bottom}${videoGlobalBorderRadiusUnits.Tablet} ${videoGlobalBorderRadiusTablet.left}${videoGlobalBorderRadiusUnits.Tablet}`;
    const BorderRadiusMobileWidth = `${videoGlobalBorderRadiusMobile.top}${videoGlobalBorderRadiusUnits.Mobile} ${videoGlobalBorderRadiusMobile.right}${videoGlobalBorderRadiusUnits.Mobile} ${videoGlobalBorderRadiusMobile.bottom}${videoGlobalBorderRadiusUnits.Mobile} ${videoGlobalBorderRadiusMobile.left}${videoGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */



    /** Start Global Bg Color */
    const handleGlobalBgColorSwitcherChange = (value) => {
        setAttributes({ videoGlobalBgColorSwitcher: value });
    };
    const handleGlobalBgColorChange = (value) => {
        setAttributes({ videoGlobalBgColor: value });
    };
    const handleGlobalBgHoverColorChange = (value) => {
        setAttributes({ videoGlobalBgHoverColor: value });
    };
    /** End Global Bg Color */


    /** Start Global Border Color */
    const handleGlobalBorderColorSwitcherChange = (value) => {
        setAttributes({ videoGlobalBorderColorSwitcher: value });
    };
    const handleGlobalBorderColorChange = (value) => {
        setAttributes({ videoGlobalBorderColor: value });
    };
    const handleGlobalBorderHoverColorChange = (value) => {
        setAttributes({ videoGlobalBorderHoverColor: value });
    };
    /** End Global Border Color */

    return (
        <>

            <style>
            {`
                .${blockID}.fb-advanced-video-main-wrapper {
                    z-index: ${videoGlobalZIndex !== undefined ? videoGlobalZIndex : ''};
                }
                .${blockID}.fb-advanced-video-wrapper {
                    ${videoGlobalBgColor !== undefined ? `background-color: ${videoGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${videoGlobalBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${videoGlobalBorderColor !== undefined ? `border-color: ${videoGlobalBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .${blockID}.fb-advanced-video-wrapper:hover {
                    ${videoGlobalBgHoverColor !== undefined ? `background-color: ${videoGlobalBgHoverColor};` : ''};
                    ${videoGlobalBorderHoverColor !== undefined ? `border-color: ${videoGlobalBorderHoverColor};` : ''};
                }

                .${blockID} .fb-react-player iframe {
                    border: ${videoBorder};
                    border-width: ${IframeBorderDesktopWidth};
                    border-radius: ${IframeBorderRadiusDesktopWidth} !important;
                    ${videoBorderColor !== undefined ? `border-color: ${videoBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }

                @media only screen and (max-width: 1024px) {

                    .${blockID}.fb-advanced-video-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }

                    .${blockID} .fb-react-player iframe {
                        border-width: ${IframeBorderTabletWidth};
                        border-radius: ${IframeBorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .${blockID}.fb-advanced-video-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
                    }
                        
                    .${blockID} .fb-react-player iframe {
                        border-width: ${IframeBorderMobileWidth};
                        border-radius: ${IframeBorderRadiusMobileWidth} !important;
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
                                        <PanelBody title={__("General Info", "frontis-blocks")} initialOpen={true}>
                                            <TextareaControl
                                                label={__("Video URL", "frontis-blocks")}
                                                value={videoURL}
                                                onChange={(videoURL) => setAttributes({ videoURL })}
                                            />

                                            <BaseControl 
                                                label={__("Video Options", "frontis-blocks")}
                                                className="fb-video-options-setting"
                                            >
                                                <ToggleControl
                                                    label={__("Autoplay", "frontis-blocks")}
                                                    checked={autoPlaySwitcher}
                                                    onChange={(value) => {
                                                        setAttributes({ autoPlaySwitcher: value });
                                                        setAttributes({ muteSwitcher: value ? true : muteSwitcher });
                                                    }}
                                                />
                                                <ToggleControl
                                                    label={__("Mute", "frontis-blocks")}
                                                    checked={muteSwitcher}
                                                    onChange={(value) => setAttributes({ muteSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Loop", "frontis-blocks")}
                                                    checked={loopSwitcher}
                                                    onChange={(value) => setAttributes({ loopSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Show Controls", "frontis-blocks")}
                                                    checked={showControlsSwitcher}
                                                    onChange={(value) => setAttributes({ showControlsSwitcher: value })}
                                                />
                                            </BaseControl>

                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>

                                            <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={videoBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ videoBorder: value })}
                                            />

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={videoBorderColorSwitcher}
                                                globalColor={videoBorderColor}
                                                globalHoverColor={videoBorderHoverColor}
                                                handleColorSwitcherChange={handleBorderColorSwitcherChange}
                                                handleGlobalColorChange={handleBorderColorChange}
                                                handleGlobalHoverColorChange={handleBorderHoverColorChange}
                                            />

                                            <FB_Spacing 
                                                label={__("Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleIframeBorderUnitsHandler}
                                                spacingUnits={videoBorderUnits}
                                                spacingDesktop={videoBorderDesktop}
                                                spacingTablet={videoBorderTablet}
                                                spacingMobile={videoBorderMobile}
                                                handleSpacingUnitHandler={handleIframeBorderUnitChange}
                                                spacingCombineBtn={videoBorderLink}
                                                spacingCombineBtnHandler={handleIframeBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing 
                                                label={__("Radius Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleIframeBorderRadiusUnitsHandler}
                                                spacingUnits={videoBorderRadiusUnits}
                                                spacingDesktop={videoBorderRadiusDesktop}
                                                spacingTablet={videoBorderRadiusTablet}
                                                spacingMobile={videoBorderRadiusMobile}
                                                handleSpacingUnitHandler={handleIframeBorderRadiusUnitChange}
                                                spacingCombineBtn={videoBorderRadiusLink}
                                                spacingCombineBtnHandler={handleIframeBorderRadiusCombineBtn}
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
                                                    <RangeControl
                                                        value={videoGlobalZIndex}
                                                        onChange={(value) => setAttributes({ videoGlobalZIndex: value === 0 ? undefined : value })}
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
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                                                        spacingUnits={videoGlobalPaddingUnits}
                                                        spacingDesktop={videoGlobalPaddingDesktop}
                                                        spacingTablet={videoGlobalPaddingTablet}
                                                        spacingMobile={videoGlobalPaddingMobile}
                                                        handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                                                        spacingCombineBtn={videoGlobalPaddingLink}
                                                        spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                    <FB_Spacing 
                                                        label={__("Margin", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                                                        spacingUnits={videoGlobalMarginUnits}
                                                        spacingDesktop={videoGlobalMarginDesktop}
                                                        spacingTablet={videoGlobalMarginTablet}
                                                        spacingMobile={videoGlobalMarginMobile}
                                                        handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                                                        spacingCombineBtn={videoGlobalMarginLink}
                                                        spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                </PanelBody>

                                                <PanelBody title="Background Color" initialOpen={false} >
                                                    <FB_Color
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalColorSwitcher={videoGlobalBgColorSwitcher}
                                                        globalColor={videoGlobalBgColor}
                                                        globalHoverColor={videoGlobalBgHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBgColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBgColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBgHoverColorChange}
                                                    />
                                                </PanelBody>
                                                <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>

                                                    <SelectControl
                                                            label={__("Border Style", "frontis-blocks")}
                                                            value={videoGlobalBorder}
                                                            options={BORDER_STYLES}
                                                            onChange={(value) => setAttributes({ videoGlobalBorder: value })}
                                                    />

                                                    <FB_Color
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalColorSwitcher={videoGlobalBorderColorSwitcher}
                                                        globalColor={videoGlobalBorderColor}
                                                        globalHoverColor={videoGlobalBorderHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBorderColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBorderColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBorderHoverColorChange}
                                                    />

                                                    <FB_Spacing 
                                                        label={__("Border", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                                                        spacingUnits={videoGlobalBorderUnits}
                                                        spacingDesktop={videoGlobalBorderDesktop}
                                                        spacingTablet={videoGlobalBorderTablet}
                                                        spacingMobile={videoGlobalBorderMobile}
                                                        handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                                                        spacingCombineBtn={videoGlobalBorderLink}
                                                        spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_Spacing 
                                                        label={__("Radius Border", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                                                        spacingUnits={videoGlobalBorderRadiusUnits}
                                                        spacingDesktop={videoGlobalBorderRadiusDesktop}
                                                        spacingTablet={videoGlobalBorderRadiusTablet}
                                                        spacingMobile={videoGlobalBorderRadiusMobile}
                                                        handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                                                        spacingCombineBtn={videoGlobalBorderRadiusLink}
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