import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    RangeControl,
    SelectControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components';

import {
    BORDER_STYLES,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_ImageControl from '@Components/image-control';
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import {useDeviceType} from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        // deviceType,
        blockStyle,
        videoGlobalZIndex,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,

        imageOverlaySwitcher,
        previewImageUrl,
        previewImageAlt,
        previewImageID,
        previewImagePosition,
        previewImageAttachment,
        previewImageRepeat,
        previewImageSize,

        videoPlayIcon,
        videoPlayIconSize,
        videoPlayIconSizeUnits,

        videoPlayIconColorSwitcher,
        videoPlayIconColor,
        videoPlayIconHoverColor,
        videoPlayIconBgColorSwitcher,
        videoPlayIconBgColor,
        videoPlayIconBgHoverColor,

        videoPlayIconBorder,
        videoPlayIconBorderColorSwitcher,
        videoPlayIconBorderColor,
        videoPlayIconBorderHoverColor,

        videoPlayIconBorderUnits,
        videoPlayIconBorderDesktop,
        videoPlayIconBorderTablet,
        videoPlayIconBorderMobile,
        videoPlayIconBorderLink,

        videoPlayIconBorderRadiusUnits,
        videoPlayIconBorderRadiusDesktop,
        videoPlayIconBorderRadiusTablet,
        videoPlayIconBorderRadiusMobile,
        videoPlayIconBorderRadiusLink,

        videoPlayIconPaddingUnits,
        videoPlayIconPaddingDesktop,
        videoPlayIconPaddingTablet,
        videoPlayIconPaddingMobile,
        videoPlayIconPaddingLink,

        videoWidth,
        videoWidthUnits,

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

        videoGlobalBoxShadowSwitcher,
        videoGlobalBoxShadowValues,
        videoGlobalBoxShadowCssValue,
        videoGlobalBoxShadowHoverValues,
        videoGlobalBoxShadowHoverCssValue,

    } = attributes;

    const deviceType= useDeviceType();
    
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

    /** Start Video Play Icon Border */
    const handleVideoPlayIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoPlayIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoPlayIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoPlayIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoPlayIconBorderMobile: {
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
                    setAttributes( {videoPlayIconBorderDesktop: {...videoPlayIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoPlayIconBorderTablet: {...videoPlayIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoPlayIconBorderMobile: {...videoPlayIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleVideoPlayIconBorderCombineBtn = () => {
        setAttributes( {videoPlayIconBorderLink: !videoPlayIconBorderLink} );
    }

    const handleVideoPlayIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            videoPlayIconBorderUnits: {
                ...videoPlayIconBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const videoPlayIconBorderDesktopWidth = `${videoPlayIconBorderDesktop.top}${videoPlayIconBorderUnits.Desktop} ${videoPlayIconBorderDesktop.right}${videoPlayIconBorderUnits.Desktop} ${videoPlayIconBorderDesktop.bottom}${videoPlayIconBorderUnits.Desktop} ${videoPlayIconBorderDesktop.left}${videoPlayIconBorderUnits.Desktop}`;
    const videoPlayIconBorderTabletWidth = `${videoPlayIconBorderTablet.top}${videoPlayIconBorderUnits.Tablet} ${videoPlayIconBorderTablet.right}${videoPlayIconBorderUnits.Tablet} ${videoPlayIconBorderTablet.bottom}${videoPlayIconBorderUnits.Tablet} ${videoPlayIconBorderTablet.left}${videoPlayIconBorderUnits.Tablet}`;
    const videoPlayIconBorderMobileWidth = `${videoPlayIconBorderMobile.top}${videoPlayIconBorderUnits.Mobile} ${videoPlayIconBorderMobile.right}${videoPlayIconBorderUnits.Mobile} ${videoPlayIconBorderMobile.bottom}${videoPlayIconBorderUnits.Mobile} ${videoPlayIconBorderMobile.left}${videoPlayIconBorderUnits.Mobile}`;
    /** End Video Play Icon Border */   

    /** Start Video Play Icon Border Radius*/   
    const handleVideoPlayIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoPlayIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoPlayIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoPlayIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoPlayIconBorderRadiusMobile: {
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
                    setAttributes( {videoPlayIconBorderRadiusDesktop: {...videoPlayIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoPlayIconBorderRadiusTablet: {...videoPlayIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoPlayIconBorderRadiusMobile: {...videoPlayIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleVideoPlayIconBorderRadiusCombineBtn = () => {
        setAttributes( {videoPlayIconBorderRadiusLink: !videoPlayIconBorderRadiusLink} );
    }

    const handleVideoPlayIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            videoPlayIconBorderRadiusUnits: {
                ...videoPlayIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const videoPlayIconBorderRadiusDesktopWidth = `${videoPlayIconBorderRadiusDesktop.top}${videoPlayIconBorderRadiusUnits.Desktop} ${videoPlayIconBorderRadiusDesktop.right}${videoPlayIconBorderRadiusUnits.Desktop} ${videoPlayIconBorderRadiusDesktop.bottom}${videoPlayIconBorderRadiusUnits.Desktop} ${videoPlayIconBorderRadiusDesktop.left}${videoPlayIconBorderRadiusUnits.Desktop}`;
    const videoPlayIconBorderRadiusTabletWidth = `${videoPlayIconBorderRadiusTablet.top}${videoPlayIconBorderRadiusUnits.Tablet} ${videoPlayIconBorderRadiusTablet.right}${videoPlayIconBorderRadiusUnits.Tablet} ${videoPlayIconBorderRadiusTablet.bottom}${videoPlayIconBorderRadiusUnits.Tablet} ${videoPlayIconBorderRadiusTablet.left}${videoPlayIconBorderRadiusUnits.Tablet}`;
    const videoPlayIconBorderRadiusMobileWidth = `${videoPlayIconBorderRadiusMobile.top}${videoPlayIconBorderRadiusUnits.Mobile} ${videoPlayIconBorderRadiusMobile.right}${videoPlayIconBorderRadiusUnits.Mobile} ${videoPlayIconBorderRadiusMobile.bottom}${videoPlayIconBorderRadiusUnits.Mobile} ${videoPlayIconBorderRadiusMobile.left}${videoPlayIconBorderRadiusUnits.Mobile}`;
    /** End Video Play Icon Border Radius */


    /** Start Video Play Icon Padding*/   
    const handleVideoPlayIconPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( videoPlayIconPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        videoPlayIconPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        videoPlayIconPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        videoPlayIconPaddingMobile: {
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
                    setAttributes( {videoPlayIconPaddingDesktop: {...videoPlayIconPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {videoPlayIconPaddingTablet: {...videoPlayIconPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {videoPlayIconPaddingMobile: {...videoPlayIconPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleVideoPlayIconPaddingCombineBtn = () => {
        setAttributes( {videoPlayIconPaddingLink: !videoPlayIconPaddingLink} );
    }

    const handleVideoPlayIconPaddingUnitsHandler = (unit) => {
        setAttributes( {
            videoPlayIconPaddingUnits: {
                ...videoPlayIconPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const videoPlayIconPaddingDesktopWidth = `${videoPlayIconPaddingDesktop.top}${videoPlayIconPaddingUnits.Desktop} ${videoPlayIconPaddingDesktop.right}${videoPlayIconPaddingUnits.Desktop} ${videoPlayIconPaddingDesktop.bottom}${videoPlayIconPaddingUnits.Desktop} ${videoPlayIconPaddingDesktop.left}${videoPlayIconPaddingUnits.Desktop}`;
    const videoPlayIconPaddingTabletWidth = `${videoPlayIconPaddingTablet.top}${videoPlayIconPaddingUnits.Tablet} ${videoPlayIconPaddingTablet.right}${videoPlayIconPaddingUnits.Tablet} ${videoPlayIconPaddingTablet.bottom}${videoPlayIconPaddingUnits.Tablet} ${videoPlayIconPaddingTablet.left}${videoPlayIconPaddingUnits.Tablet}`;
    const videoPlayIconPaddingMobileWidth = `${videoPlayIconPaddingMobile.top}${videoPlayIconPaddingUnits.Mobile} ${videoPlayIconPaddingMobile.right}${videoPlayIconPaddingUnits.Mobile} ${videoPlayIconPaddingMobile.bottom}${videoPlayIconPaddingUnits.Mobile} ${videoPlayIconPaddingMobile.left}${videoPlayIconPaddingUnits.Mobile}`;
    /** End Video Play Icon Padding */

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



    const allBlockStyle = useMemo(() => `
        .${blockID}.fb-advanced-video-main-wrapper {
            ${videoGlobalZIndex.Desktop ? `z-index: ${videoGlobalZIndex.Desktop};` : ''}
        }
        .${blockID}.fb-advanced-video-wrapper {
            ${videoGlobalBgColor !== undefined ? `background-color: ${videoGlobalBgColor};` : ''};
            padding: ${DesktopPadding};
            margin: ${DesktopMargin};
            border: ${videoGlobalBorder};
            border-width: ${BorderDesktopWidth};
            border-radius: ${BorderRadiusDesktopWidth} !important;
            ${videoGlobalBorderColor !== undefined ? `border-color: ${videoGlobalBorderColor};` : ''};
            ${videoGlobalBoxShadowCssValue ? `box-shadow: ${videoGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-advanced-video-wrapper:hover {
            ${videoGlobalBgHoverColor !== undefined ? `background-color: ${videoGlobalBgHoverColor};` : ''};
            ${videoGlobalBorderHoverColor !== undefined ? `border-color: ${videoGlobalBorderHoverColor};` : ''};
            ${videoGlobalBoxShadowHoverCssValue ? `box-shadow: ${videoGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-player-wrapper {
            width: ${videoWidth.Desktop ? videoWidth.Desktop + videoWidthUnits.Desktop : 'auto'};
        }
        .${blockID} .fb-player-wrapper .react-player__preview {
            background-size: ${previewImageSize ? previewImageSize : 'cover'} !important;
            background-position: ${previewImagePosition ? previewImagePosition : 'center center'} !important;
            background-attachment: ${previewImageAttachment ? previewImageAttachment : 'scroll'} !important;
            background-repeat: ${previewImageRepeat ? previewImageRepeat : 'no-repeat'} !important;
        }

        .${blockID} .fb-player-wrapper .react-player__preview svg {
            width: ${videoPlayIconSize.Desktop ? videoPlayIconSize.Desktop + videoPlayIconSizeUnits.Desktop : '64px'} !important;
            height: ${videoPlayIconSize.Desktop ? videoPlayIconSize.Desktop + videoPlayIconSizeUnits.Desktop : '64px'} !important;
            padding: ${videoPlayIconPaddingDesktopWidth};
            fill: ${videoPlayIconColor ? videoPlayIconColor : '#fff'};
            background-color: ${videoPlayIconBgColor ? videoPlayIconBgColor : ''};
            border: ${videoPlayIconBorder};
            border-width: ${videoPlayIconBorderDesktopWidth};
            border-radius: ${videoPlayIconBorderRadiusDesktopWidth} !important;
            border-color: ${videoPlayIconBorderColor ? videoPlayIconBorderColor : ''};
        }
        .${blockID} .fb-player-wrapper .react-player__preview svg:hover {
            fill: ${videoPlayIconHoverColor ? videoPlayIconHoverColor : '#fff'};
            background-color: ${videoPlayIconBgHoverColor ? videoPlayIconBgHoverColor : ''};
            border-color: ${videoPlayIconBorderHoverColor ? videoPlayIconBorderHoverColor : ''};  
        }
        .${blockID} .fb-player-wrapper .fb-play-icon svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: ${videoPlayIconSize.Desktop ? videoPlayIconSize.Desktop + videoPlayIconSizeUnits.Desktop : '64px'} !important;
            height: ${videoPlayIconSize.Desktop ? videoPlayIconSize.Desktop + videoPlayIconSizeUnits.Desktop : '64px'} !important;
            padding: ${videoPlayIconPaddingDesktopWidth};
            fill: ${videoPlayIconColor ? videoPlayIconColor : '#fff'};
            background-color: ${videoPlayIconBgColor ? videoPlayIconBgColor : ''};
            border: ${videoPlayIconBorder};
            border-width: ${videoPlayIconBorderDesktopWidth};
            border-radius: ${videoPlayIconBorderRadiusDesktopWidth} !important;
            border-color: ${videoPlayIconBorderColor ? videoPlayIconBorderColor : ''};
            cursor: pointer;
            z-index: 999999;
        }

        .${blockID} .fb-player-wrapper .fb-play-icon svg:hover {
            fill: ${videoPlayIconHoverColor ? videoPlayIconHoverColor : '#fff'};
            background-color: ${videoPlayIconBgHoverColor ? videoPlayIconBgHoverColor : ''};
            border-color: ${videoPlayIconBorderHoverColor ? videoPlayIconBorderHoverColor : ''};  
        }

        .${blockID} .fb-react-player iframe {
            border: ${videoBorder};
            border-width: ${IframeBorderDesktopWidth};
            border-radius: ${IframeBorderRadiusDesktopWidth} !important;
            ${videoBorderColor !== undefined ? `border-color: ${videoBorderColor};` : ''};
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-advanced-video-main-wrapper {
                ${videoGlobalZIndex.Tablet ? `z-index: ${videoGlobalZIndex.Tablet};` : ''}
            }

            .${blockID}.fb-advanced-video-wrapper {
                padding: ${TabletPadding};
                margin: ${TabletMargin};
                border-width: ${BorderTabletWidth};
                border-radius: ${BorderRadiusTabletWidth} !important;
            }

            .${blockID} .fb-player-wrapper {
                width: ${videoWidth.Tablet ? videoWidth.Tablet + videoWidthUnits.Tablet : 'auto'};
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg {
                width: ${videoPlayIconSize.Tablet ? videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet : '64px'} !important;
                height: ${videoPlayIconSize.Tablet ? videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet : '64px'} !important;
                padding: ${videoPlayIconPaddingTabletWidth};
                border-width: ${videoPlayIconBorderTabletWidth};
                border-radius: ${videoPlayIconBorderRadiusTabletWidth} !important;
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg:hover {
                fill: ${videoPlayIconHoverColor ? videoPlayIconHoverColor : '#fff'};
                background-color: ${videoPlayIconBgHoverColor ? videoPlayIconBgHoverColor : ''};
                border-color: ${videoPlayIconBorderHoverColor ? videoPlayIconBorderHoverColor : ''};  
            }

            .${blockID} .fb-player-wrapper .fb-play-icon svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: ${videoPlayIconSize.Tablet ? videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet : '64px'} !important;
                height: ${videoPlayIconSize.Tablet ? videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet : '64px'} !important;
                padding: ${videoPlayIconPaddingTabletWidth};
                fill: ${videoPlayIconColor ? videoPlayIconColor : '#fff'};
                background-color: ${videoPlayIconBgColor ? videoPlayIconBgColor : ''};
                border: ${videoPlayIconBorder};
                border-width: ${videoPlayIconBorderTabletWidth};
                border-radius: ${videoPlayIconBorderRadiusTabletWidth} !important;
                border-color: ${videoPlayIconBorderColor ? videoPlayIconBorderColor : ''};
                cursor: pointer;
                z-index: 999999;
            }

            .${blockID} .fb-player-wrapper .fb-play-icon svg:hover {
                fill: ${videoPlayIconHoverColor ? videoPlayIconHoverColor : '#fff'};
                background-color: ${videoPlayIconBgHoverColor ? videoPlayIconBgHoverColor : ''};
                border-color: ${videoPlayIconBorderHoverColor ? videoPlayIconBorderHoverColor : ''};  
            }

            .${blockID} .fb-react-player iframe {
                border-width: ${IframeBorderTabletWidth};
                border-radius: ${IframeBorderRadiusTabletWidth} !important;
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID}.fb-advanced-video-main-wrapper {
                ${videoGlobalZIndex.Mobile ? `z-index: ${videoGlobalZIndex.Mobile};` : ''}
            }

            .${blockID}.fb-advanced-video-wrapper {
                padding: ${MobilePadding};
                margin: ${MobileMargin};
                border-width: ${BorderMobileWidth};
                border-radius: ${BorderRadiusMobileWidth} !important;
            }

            .${blockID} .fb-player-wrapper {
                width: ${videoWidth.Mobile ? videoWidth.Mobile + videoWidthUnits.Mobile : 'auto'};
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg {
                width: ${videoPlayIconSize.Mobile ? videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile : '64px'} !important;
                height: ${videoPlayIconSize.Mobile ? videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile : '64px'} !important;
                padding: ${videoPlayIconPaddingMobileWidth};
                border-width: ${videoPlayIconBorderMobileWidth};
                border-radius: ${videoPlayIconBorderRadiusMobileWidth} !important;
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg:hover {
                fill: ${videoPlayIconHoverColor ? videoPlayIconHoverColor : '#fff'};
                background-color: ${videoPlayIconBgHoverColor ? videoPlayIconBgHoverColor : ''};
                border-color: ${videoPlayIconBorderHoverColor ? videoPlayIconBorderHoverColor : ''};  
            }

            
            .${blockID} .fb-player-wrapper .fb-play-icon svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: ${videoPlayIconSize.Mobile ? videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile : '64px'} !important;
                height: ${videoPlayIconSize.Mobile ? videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile : '64px'} !important;
                padding: ${videoPlayIconPaddingMobileWidth};
                fill: ${videoPlayIconColor ? videoPlayIconColor : '#fff'};
                background-color: ${videoPlayIconBgColor ? videoPlayIconBgColor : ''};
                border: ${videoPlayIconBorder};
                border-width: ${videoPlayIconBorderMobileWidth};
                border-radius: ${videoPlayIconBorderRadiusMobileWidth} !important;
                border-color: ${videoPlayIconBorderColor ? videoPlayIconBorderColor : ''};
                cursor: pointer;
                z-index: 999999;
            }

            .${blockID} .fb-player-wrapper .fb-play-icon svg:hover {
                fill: ${videoPlayIconHoverColor ? videoPlayIconHoverColor : '#fff'};
                background-color: ${videoPlayIconBgHoverColor ? videoPlayIconBgHoverColor : ''};
                border-color: ${videoPlayIconBorderHoverColor ? videoPlayIconBorderHoverColor : ''};  
            }

            .${blockID} .fb-react-player iframe {
                border-width: ${IframeBorderMobileWidth};
                border-radius: ${IframeBorderRadiusMobileWidth} !important;
            }
        }
    `, [
        blockID,
        deviceType,
        blockStyle,
        videoGlobalZIndex,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,
        imageOverlaySwitcher,
        previewImageUrl,
        previewImageAlt,
        previewImageID,
        previewImagePosition,
        previewImageAttachment,
        previewImageRepeat,
        previewImageSize,
        videoPlayIcon,
        videoPlayIconSize,
        videoPlayIconSizeUnits,
        videoPlayIconColorSwitcher,
        videoPlayIconColor,
        videoPlayIconHoverColor,
        videoPlayIconBgColorSwitcher,
        videoPlayIconBgColor,
        videoPlayIconBgHoverColor,
        videoPlayIconBorder,
        videoPlayIconBorderColorSwitcher,
        videoPlayIconBorderColor,
        videoPlayIconBorderHoverColor,
        videoPlayIconBorderUnits,
        videoPlayIconBorderDesktop,
        videoPlayIconBorderTablet,
        videoPlayIconBorderMobile,
        videoPlayIconBorderLink,
        videoPlayIconBorderRadiusUnits,
        videoPlayIconBorderRadiusDesktop,
        videoPlayIconBorderRadiusTablet,
        videoPlayIconBorderRadiusMobile,
        videoPlayIconBorderRadiusLink,
        videoPlayIconPaddingUnits,
        videoPlayIconPaddingDesktop,
        videoPlayIconPaddingTablet,
        videoPlayIconPaddingMobile,
        videoPlayIconPaddingLink,
        videoWidth,
        videoWidthUnits,
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
        videoGlobalBoxShadowValues,
        videoGlobalBoxShadowSwitcher,
        videoGlobalBoxShadowValues,
        videoGlobalBoxShadowCssValue,
        videoGlobalBoxShadowHoverValues,
        videoGlobalBoxShadowHoverCssValue,
        DesktopPadding,
        DesktopMargin,
        BorderDesktopWidth,
        BorderRadiusDesktopWidth,
        videoGlobalBorderColor,
        videoGlobalBgHoverColor,
        videoGlobalBorderHoverColor,
        videoWidth,
        videoWidthUnits,
        videoPlayIconSize,
        videoPlayIconSizeUnits,
        videoPlayIconPaddingDesktopWidth,
        videoPlayIconColor,
        videoPlayIconBgColor,
        videoPlayIconBorder,
        videoPlayIconBorderDesktopWidth,
        videoPlayIconBorderRadiusDesktopWidth,
        videoPlayIconBorderColor,
        videoPlayIconHoverColor,
        videoPlayIconBgHoverColor,
        videoPlayIconBorderHoverColor,
        videoBorder,
        IframeBorderDesktopWidth,
        IframeBorderRadiusDesktopWidth,
        videoBorderColor,
        TabletPadding,
        TabletMargin,
        BorderTabletWidth,
        BorderRadiusTabletWidth,
        videoPlayIconPaddingTabletWidth,
        videoPlayIconBorderTabletWidth,
        videoPlayIconBorderRadiusTabletWidth,
        IframeBorderTabletWidth,
        IframeBorderRadiusTabletWidth,
        MobilePadding,
        MobileMargin,
        BorderMobileWidth,
        BorderRadiusMobileWidth,
        videoPlayIconPaddingMobileWidth,
        videoPlayIconBorderMobileWidth,
        videoPlayIconBorderRadiusMobileWidth,
        IframeBorderMobileWidth,
        IframeBorderRadiusMobileWidth
    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [ allBlockStyle]);

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

                                            <ToggleControl
                                                label={__("Image Overlay", "frontis-blocks")}
                                                checked={imageOverlaySwitcher}
                                                onChange={(value) => setAttributes({ imageOverlaySwitcher: value })}
                                            />

                                            {imageOverlaySwitcher && (
                                                <>
                                                <FB_ImageControl 
                                                    globalBackgroundImageUrl={previewImageUrl}
                                                    setGlobalBackgroundImageUrl={(value) => setAttributes({ previewImageUrl: value })}
                                                    globalBackgroundImageAlt={previewImageAlt}
                                                    setGlobalBackgroundImageAlt={(value) => setAttributes({ previewImageAlt: value })}
                                                    globalBackgroundImageID={previewImageID}
                                                    setGlobalBackgroundImageID={(value) => setAttributes({ previewImageID: value })}
                                                    globalBackgroundImagePosition={previewImagePosition}
                                                    setGlobalBackgroundImagePosition={(value) => setAttributes({ previewImagePosition: value })}
                                                    globalBackgroundImageAttachment={previewImageAttachment} 
                                                    setGlobalBackgroundImageAttachment={(value) => setAttributes({ previewImageAttachment: value })}
                                                    globalBackgroundImageRepeat={previewImageRepeat}
                                                    setGlobalBackgroundImageRepeat={(value) => setAttributes({ previewImageRepeat: value })}
                                                    globalBackgroundImageSize={previewImageSize}
                                                    setGlobalBackgroundImageSize={(value) => setAttributes({ previewImageSize: value })}
                                                />
                                                {previewImageUrl && (
                                                    <FBIconPicker value={videoPlayIcon} setIconHandler={(value) => setAttributes({ videoPlayIcon: value })} />
                                                )}
                                                </>
                                            )}

                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Border", "frontis-blocks")} initialOpen={true}>

                                            <FB_Range
                                                min={0}
                                                max={100}
                                                label={__("Width", "frontis-blocks")}
                                                rangeValue={videoWidth}
                                                onChangeHandler={(value) => setAttributes({ videoWidth: value })}
                                                rangeUnitHandler={(value) => setAttributes({ videoWidthUnits: value })}
                                                deviceType={deviceType}
                                                units={videoWidthUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={""}
                                            />

                                            <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={videoBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ videoBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={videoBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ videoBorderColorSwitcher: value })}
                                            />

                                            {videoBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={videoBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ videoBorderColor: value })}
                                                />
                                            )}

                                            {videoBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={videoBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ videoBorderHoverColor: value })}
                                                />
                                            )}

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
                                                label={__("Border Radius", "frontis-blocks")}
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
                                        <PanelBody title={__("Play Icon", "frontis-blocks")} initialOpen={false}>
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Icon Size", "frontis-blocks")}
                                                rangeValue={videoPlayIconSize}
                                                onChangeHandler={(value) => setAttributes({ videoPlayIconSize: value })}
                                                rangeUnitHandler={(value) => setAttributes({ videoPlayIconSizeUnits: value })}
                                                deviceType={deviceType}
                                                units={videoPlayIconSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={64}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Icon Color", "frontis-blocks")}
                                                globalSwitcher={videoPlayIconColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ videoPlayIconColorSwitcher: value })}
                                            />

                                            {videoPlayIconColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={videoPlayIconColor}
                                                    setGlobalColor={(value) => setAttributes({ videoPlayIconColor: value })}
                                                />
                                            )}

                                            {videoPlayIconColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={videoPlayIconHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ videoPlayIconHoverColor: value })}
                                                />
                                            )}

                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={videoPlayIconBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ videoPlayIconBgColorSwitcher: value })}
                                            />

                                            {videoPlayIconBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={videoPlayIconBgColor}
                                                    setGlobalColor={(value) => setAttributes({ videoPlayIconBgColor: value })}
                                                />
                                            )}

                                            {videoPlayIconBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={videoPlayIconBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ videoPlayIconBgHoverColor: value })}
                                                />
                                            )}

                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={videoPlayIconBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ videoPlayIconBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={videoPlayIconBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ videoPlayIconBorderColorSwitcher: value })}
                                            />

                                            {videoPlayIconBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={videoPlayIconBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ videoPlayIconBorderColor: value })}
                                                />
                                            )}

                                            {videoPlayIconBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={videoPlayIconBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ videoPlayIconBorderHoverColor: value })}
                                                />
                                            )}

                                            <FB_Spacing 
                                                label={__("Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleVideoPlayIconBorderUnitsHandler}
                                                spacingUnits={videoPlayIconBorderUnits}
                                                spacingDesktop={videoPlayIconBorderDesktop}
                                                spacingTablet={videoPlayIconBorderTablet}
                                                spacingMobile={videoPlayIconBorderMobile}
                                                handleSpacingUnitHandler={handleVideoPlayIconBorderUnitChange}
                                                spacingCombineBtn={videoPlayIconBorderLink}
                                                spacingCombineBtnHandler={handleVideoPlayIconBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing 
                                                label={__("Border Radius", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleVideoPlayIconBorderRadiusUnitsHandler}
                                                spacingUnits={videoPlayIconBorderRadiusUnits}
                                                spacingDesktop={videoPlayIconBorderRadiusDesktop}
                                                spacingTablet={videoPlayIconBorderRadiusTablet}
                                                spacingMobile={videoPlayIconBorderRadiusMobile}
                                                handleSpacingUnitHandler={handleVideoPlayIconBorderRadiusUnitChange}
                                                spacingCombineBtn={videoPlayIconBorderRadiusLink}
                                                spacingCombineBtnHandler={handleVideoPlayIconBorderRadiusCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleVideoPlayIconPaddingUnitsHandler}
                                                spacingUnits={videoPlayIconPaddingUnits}
                                                spacingDesktop={videoPlayIconPaddingDesktop}
                                                spacingTablet={videoPlayIconPaddingTablet}
                                                spacingMobile={videoPlayIconPaddingMobile}
                                                handleSpacingUnitHandler={handleVideoPlayIconPaddingUnitChange}
                                                spacingCombineBtn={videoPlayIconPaddingLink}
                                                spacingCombineBtnHandler={handleVideoPlayIconPaddingCombineBtn}
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
                                                        rangeValue={videoGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({ videoGlobalZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
                                                        isRangeUnit={false}

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

                                                <PanelBody 
                                                    title={__("Background Color", "frontis-blocks")}  
                                                    initialOpen={false} 
                                                > 
                                                    <FB_SwitcherControl
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalSwitcher={videoGlobalBgColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ videoGlobalBgColorSwitcher: value })}
                                                    />

                                                    {videoGlobalBgColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Normal Color", "frontis-blocks")}
                                                            globalColor={videoGlobalBgColor}
                                                            setGlobalColor={(value) => setAttributes({ videoGlobalBgColor: value })}
                                                        />
                                                    )}

                                                    {videoGlobalBgColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={videoGlobalBgHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ videoGlobalBgHoverColor: value })}
                                                        />
                                                    )}
                                                </PanelBody>
                                                <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                                                    <SelectControl
                                                            label={__("Border Style", "frontis-blocks")}
                                                            value={videoGlobalBorder}
                                                            options={BORDER_STYLES}
                                                            onChange={(value) => setAttributes({ videoGlobalBorder: value })}
                                                    />

                                                    <FB_SwitcherControl
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalSwitcher={videoGlobalBorderColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ videoGlobalBorderColorSwitcher: value })}
                                                    />

                                                    {videoGlobalBorderColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Normal Color", "frontis-blocks")}
                                                            globalColor={videoGlobalBorderColor}
                                                            setGlobalColor={(value) => setAttributes({ videoGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {videoGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={videoGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ videoGlobalBorderHoverColor: value })}
                                                        />
                                                    )}

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
                                                        label={__("Border Radius", "frontis-blocks")}
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

                                                    <FB_SwitcherControl
                                                        label={__("Box Shadow", "frontis-blocks")}
                                                        globalSwitcher={videoGlobalBoxShadowSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ videoGlobalBoxShadowSwitcher: value })}
                                                    />

                                                    {videoGlobalBoxShadowSwitcher === 'normal' && (
                                                        <FB_BoxShadowControl
                                                            label={__("Normal Shadow", "frontis-blocks")}
                                                            onBoxShadowChange={(value) => setAttributes({ videoGlobalBoxShadowValues: value })}
                                                            initialShadowValue={videoGlobalBoxShadowValues}
                                                            onBoxShadowStyleChange={(value) => setAttributes({ videoGlobalBoxShadowCssValue: value })}
                                                        />
                                                    )}

                                                    {videoGlobalBoxShadowSwitcher === 'hover' && (
                                                        <FB_BoxShadowControl
                                                            label={__("Hover Shadow", "frontis-blocks")}
                                                            onBoxShadowChange={(value) => setAttributes({ videoGlobalBoxShadowHoverValues: value })}
                                                            initialShadowValue={videoGlobalBoxShadowHoverValues}
                                                            onBoxShadowStyleChange={(value) => setAttributes({ videoGlobalBoxShadowHoverCssValue: value })}
                                                        />
                                                    )}
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