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
        DeviceType,
        videoGlobalZIndex,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,

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




    /** Start Global padding */
    const handleSocialPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalPaddingLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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

    const handleSocialPaddingCombineBtn = () => {
        setAttributes( {videoGlobalPaddingLink: !videoGlobalPaddingLink} );
    }

    const handleSocialPaddingUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalPaddingUnits: {
                ...videoGlobalPaddingUnits,
                [DeviceType]: unit
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
    const handleSocialMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalMarginLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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

    const handleSocialMarginCombineBtn = () => {
        setAttributes( {videoGlobalMarginLink: !videoGlobalMarginLink} );
    }

    const handleSocialMarginUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalMarginUnits: {
                ...videoGlobalMarginUnits,
                [DeviceType]: unit
            }
        })
    }
    /** end Global margin */

    const DesktopMargin = `${videoGlobalMarginDesktop.top}${videoGlobalMarginUnits.Desktop} ${videoGlobalMarginDesktop.right}${videoGlobalMarginUnits.Desktop} ${videoGlobalMarginDesktop.bottom}${videoGlobalMarginUnits.Desktop} ${videoGlobalMarginDesktop.left}${videoGlobalMarginUnits.Desktop}`;
    const TabletMargin = `${videoGlobalMarginTablet.top}${videoGlobalMarginUnits.Tablet} ${videoGlobalMarginTablet.right}${videoGlobalMarginUnits.Tablet} ${videoGlobalMarginTablet.bottom}${videoGlobalMarginUnits.Tablet} ${videoGlobalMarginTablet.left}${videoGlobalMarginUnits.Tablet}`;
    const MobileMargin = `${videoGlobalMarginMobile.top}${videoGlobalMarginUnits.Mobile} ${videoGlobalMarginMobile.right}${videoGlobalMarginUnits.Mobile} ${videoGlobalMarginMobile.bottom}${videoGlobalMarginUnits.Mobile} ${videoGlobalMarginMobile.left}${videoGlobalMarginUnits.Mobile}`;
    /** End Margin */


    /** Start Global border */
    const handleSocialBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalBorderLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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

    const handleSocialBorderCombineBtn = () => {
        setAttributes( {videoGlobalBorderLink: !videoGlobalBorderLink} );
    }

    const handleSocialBorderUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalBorderUnits: {
                ...videoGlobalBorderUnits,
                [DeviceType]: unit
            }
        })
    }
    /** End Global border */
    const BorderDesktopWidth = `${videoGlobalBorderDesktop.top}${videoGlobalBorderUnits.Desktop} ${videoGlobalBorderDesktop.right}${videoGlobalBorderUnits.Desktop} ${videoGlobalBorderDesktop.bottom}${videoGlobalBorderUnits.Desktop} ${videoGlobalBorderDesktop.left}${videoGlobalBorderUnits.Desktop}`;
    const BorderTabletWidth = `${videoGlobalBorderTablet.top}${videoGlobalBorderUnits.Tablet} ${videoGlobalBorderTablet.right}${videoGlobalBorderUnits.Tablet} ${videoGlobalBorderTablet.bottom}${videoGlobalBorderUnits.Tablet} ${videoGlobalBorderTablet.left}${videoGlobalBorderUnits.Tablet}`;
    const BorderMobileWidth = `${videoGlobalBorderMobile.top}${videoGlobalBorderUnits.Mobile} ${videoGlobalBorderMobile.right}${videoGlobalBorderUnits.Mobile} ${videoGlobalBorderMobile.bottom}${videoGlobalBorderUnits.Mobile} ${videoGlobalBorderMobile.left}${videoGlobalBorderUnits.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
    const handleSocialBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoGlobalBorderRadiusLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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

    const handleSocialBorderRadiusCombineBtn = () => {
        setAttributes( {videoGlobalBorderRadiusLink: !videoGlobalBorderRadiusLink} );
    }

    const handleSocialBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            videoGlobalBorderRadiusUnits: {
                ...videoGlobalBorderRadiusUnits,
                [DeviceType]: unit
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
                .fb-advanced-video-main-wrapper.${blockID} {
                    z-index: ${videoGlobalZIndex !== undefined ? videoGlobalZIndex : ''};
                }
                .fb-advanced-video-wrapper {
                    ${videoGlobalBgColor !== undefined ? `background-color: ${videoGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${videoGlobalBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${videoGlobalBorderColor !== undefined ? `border-color: ${videoGlobalBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .fb-advanced-video-wrapper:hover {
                    ${videoGlobalBgHoverColor !== undefined ? `background-color: ${videoGlobalBgHoverColor};` : ''};
                    ${videoGlobalBorderHoverColor !== undefined ? `border-color: ${videoGlobalBorderHoverColor};` : ''};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-advanced-video-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-video-wrapper {
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
                                                    onChange={(value) => setAttributes({ autoPlaySwitcher: value })}
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
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleSocialPaddingUnitsHandler}
                                                        spacingUnits={videoGlobalPaddingUnits}
                                                        spacingDesktop={videoGlobalPaddingDesktop}
                                                        spacingTablet={videoGlobalPaddingTablet}
                                                        spacingMobile={videoGlobalPaddingMobile}
                                                        handleSpacingUnitHandler={handleSocialPaddingUnitChange}
                                                        spacingCombineBtn={videoGlobalPaddingLink}
                                                        spacingCombineBtnHandler={handleSocialPaddingCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                    <FB_Spacing 
                                                        label={__("Margin", "frontis-blocks")}
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleSocialMarginUnitsHandler}
                                                        spacingUnits={videoGlobalMarginUnits}
                                                        spacingDesktop={videoGlobalMarginDesktop}
                                                        spacingTablet={videoGlobalMarginTablet}
                                                        spacingMobile={videoGlobalMarginMobile}
                                                        handleSpacingUnitHandler={handleSocialMarginUnitChange}
                                                        spacingCombineBtn={videoGlobalMarginLink}
                                                        spacingCombineBtnHandler={handleSocialMarginCombineBtn}
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
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleSocialBorderUnitsHandler}
                                                        spacingUnits={videoGlobalBorderUnits}
                                                        spacingDesktop={videoGlobalBorderDesktop}
                                                        spacingTablet={videoGlobalBorderTablet}
                                                        spacingMobile={videoGlobalBorderMobile}
                                                        handleSpacingUnitHandler={handleSocialBorderUnitChange}
                                                        spacingCombineBtn={videoGlobalBorderLink}
                                                        spacingCombineBtnHandler={handleSocialBorderCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_Spacing 
                                                        label={__("Radius Border", "frontis-blocks")}
                                                        DeviceType={DeviceType}
                                                        spacingUnitsHandler={handleSocialBorderRadiusUnitsHandler}
                                                        spacingUnits={videoGlobalBorderRadiusUnits}
                                                        spacingDesktop={videoGlobalBorderRadiusDesktop}
                                                        spacingTablet={videoGlobalBorderRadiusTablet}
                                                        spacingMobile={videoGlobalBorderRadiusMobile}
                                                        handleSpacingUnitHandler={handleSocialBorderRadiusUnitChange}
                                                        spacingCombineBtn={videoGlobalBorderRadiusLink}
                                                        spacingCombineBtnHandler={handleSocialBorderRadiusCombineBtn}
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