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
    OVERFLOW_OP,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_BackgroundImageControl from '@Components/background-image-control';
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_ScaleControl from '@Components/scale-control';
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        // deviceType,
        blockStyle,
        videoGlobalZIndex,
        advancedVideoOverflow,
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

        videoPlayIconSwitcher,
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

        videoGlobalWraperID,
        videoGlobalWraperClass,

        advancedVideoDesktopSwitcher,
		advancedVideoTabletSwitcher,
		advancedVideoMobileSwitcher,
        
        // Position
        advancedVideoPositionType,
        advancedVideoHZOrientationType,
        advancedVideoVROrientationType,
        advancedVideoHZLeftOffset,
        advancedVideoHZLeftOffsetUnits,
        advancedVideoHZRightOffset,
        advancedVideoHZRightOffsetUnits,
        advancedVideoVRTopOffset,
        advancedVideoVRTopOffsetUnits,
        advancedVideoVRBottomOffset,
        advancedVideoVRBottomOffsetUnits,

        advancedVideoCustomCSS,

		//Transform
		advancedVideoTransformSwitcher,
		advancedVideoTransformNormalProportions,
		advancedVideoTransformNormalScale,
		advancedVideoTransformNormalScaleX,
		advancedVideoTransformNormalScaleY,

		advancedVideoTransformHoverProportions,
		advancedVideoTransformHoverScale,
		advancedVideoTransformHoverScaleX,
		advancedVideoTransformHoverScaleY,

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
            ${advancedVideoPositionType === 'default' ? `position: relative;` : ''}
            ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' ? `width: 100%;` : ''}
            ${advancedVideoPositionType !== 'default' ? `position: ${advancedVideoPositionType};` : ''}
            ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoHZOrientationType === 'left' && advancedVideoHZLeftOffset.Desktop ? `left: ${advancedVideoHZLeftOffset.Desktop}${advancedVideoHZLeftOffsetUnits.Desktop};` : ''}
            ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoHZOrientationType === 'right' && advancedVideoHZRightOffset.Desktop ? `right: ${advancedVideoHZRightOffset.Desktop}${advancedVideoHZRightOffsetUnits.Desktop};` : ''}
            ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoVROrientationType === 'top' && advancedVideoVRTopOffset.Desktop ? `top: ${advancedVideoVRTopOffset.Desktop}${advancedVideoVRTopOffsetUnits.Desktop};` : ''}
            ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoVROrientationType === 'bottom' && advancedVideoVRBottomOffset.Desktop ? `bottom: ${advancedVideoVRBottomOffset.Desktop}${advancedVideoVRBottomOffsetUnits.Desktop};` : ''}
            ${videoGlobalZIndex.Desktop ? `z-index: ${videoGlobalZIndex.Desktop};` : ''}
            ${advancedVideoOverflow !== 'default' ? `overflow: ${advancedVideoOverflow};` : ''}
        }
        .${blockID} .fb-advanced-video-wrapper {
            ${videoGlobalBgColor ? `background-color: ${videoGlobalBgColor};` : ''}
            ${DesktopPadding && videoGlobalPaddingDesktop.top ? `padding: ${DesktopPadding};` : ''}
            ${DesktopMargin && videoGlobalMarginDesktop.top ? `margin: ${DesktopMargin};` : ''}
            ${videoGlobalBorder ? `border: ${videoGlobalBorder};` : ''}
            ${BorderDesktopWidth && videoGlobalBorderDesktop.top ? `border-width: ${BorderDesktopWidth};` : ''}
            ${BorderRadiusDesktopWidth && videoGlobalBorderRadiusDesktop.top ? `border-radius: ${BorderRadiusDesktopWidth} !important;` : ''}
            ${videoGlobalBorderColor ? `border-color: ${videoGlobalBorderColor};` : ''}
            ${videoGlobalBoxShadowCssValue ? `box-shadow: ${videoGlobalBoxShadowCssValue};` : ''}

            ${advancedVideoTransformNormalProportions 
				? (advancedVideoTransformNormalScale?.Desktop 
					? `transform: scale(${advancedVideoTransformNormalScale.Desktop});` 
					: ''
				) 
				: (
					(advancedVideoTransformNormalScaleX?.Desktop || advancedVideoTransformNormalScaleY?.Desktop) 
					? `transform: ${advancedVideoTransformNormalScaleX?.Desktop ? `scaleX(${advancedVideoTransformNormalScaleX.Desktop}) ` : ''}${advancedVideoTransformNormalScaleY?.Desktop ? `scaleY(${advancedVideoTransformNormalScaleY.Desktop})` : ''};` 
					: ''
				)
			}			
			transition: all .3s ease-in-out;
			position: relative;
        }
        .${blockID} .fb-advanced-video-wrapper:hover {
            ${videoGlobalBgHoverColor ? `background-color: ${videoGlobalBgHoverColor};` : ''}
            ${videoGlobalBorderHoverColor ? `border-color: ${videoGlobalBorderHoverColor};` : ''}
            ${videoGlobalBoxShadowHoverCssValue ? `box-shadow: ${videoGlobalBoxShadowHoverCssValue};` : ''}

            ${advancedVideoTransformHoverProportions 
				? (advancedVideoTransformHoverScale?.Desktop 
					? `transform: scale(${advancedVideoTransformHoverScale.Desktop});` 
					: ''
				) 
				: (
					(advancedVideoTransformHoverScaleX?.Desktop || advancedVideoTransformHoverScaleY?.Desktop) 
					? `transform: ${advancedVideoTransformHoverScaleX?.Desktop ? `scaleX(${advancedVideoTransformHoverScaleX.Desktop}) ` : ''}${advancedVideoTransformHoverScaleY?.Desktop ? `scaleY(${advancedVideoTransformHoverScaleY.Desktop})` : ''};` 
					: ''
				)
			}
        }

        .${blockID} .fb-player-wrapper {
            ${videoWidth.Desktop ?  `width: ${videoWidth.Desktop}${videoWidthUnits.Desktop};` : 'width: auto;'}
        }
        .${blockID} .fb-player-wrapper .react-player__preview {
            ${previewImageSize ? `background-size: ${previewImageSize} !important;` : 'background-size: cover !important;'}
            ${previewImagePosition ? `background-position: ${previewImagePosition} !important;` : 'background-position: center center !important;'}
            ${previewImageAttachment ? `background-attachment: ${previewImageAttachment} !important;` : 'background-attachment: scroll !important;'}
            ${previewImageRepeat ? `background-repeat: ${previewImageRepeat} !important;` : 'background-repeat: no-repeat !important;'}
        }

        .${blockID} .fb-player-wrapper .react-player__preview svg {
            ${videoPlayIconSize.Desktop ? `width: ${videoPlayIconSize.Desktop}${videoPlayIconSizeUnits.Desktop} !important;` : 'width: 64px !important;'}
            ${videoPlayIconSize.Desktop ? `height: ${videoPlayIconSize.Desktop}${videoPlayIconSizeUnits.Desktop} !important;` : 'height: 64px !important;'}
            ${videoPlayIconPaddingDesktopWidth && videoPlayIconPaddingDesktop.top ? `padding: ${videoPlayIconPaddingDesktopWidth};` : ''}
            ${videoPlayIconColor ? `fill: ${videoPlayIconColor};` : 'fill: #fff;'}
            ${videoPlayIconBgColor ? `background-color: ${videoPlayIconBgColor};` : ''}
            ${videoPlayIconBorder ? `border: ${videoPlayIconBorder};` : ''}
            ${videoPlayIconBorderDesktopWidth && videoPlayIconBorderDesktop.top ? `border-width: ${videoPlayIconBorderDesktopWidth};` : ''}
            ${videoPlayIconBorderRadiusDesktopWidth && videoPlayIconBorderRadiusDesktop.top ? `border-radius: ${videoPlayIconBorderRadiusDesktopWidth} !important;` : ''}
            ${videoPlayIconBorderColor ? `border-color: ${videoPlayIconBorderColor};` : ''}
        }
        .${blockID} .fb-player-wrapper .react-player__preview svg:hover {
            ${videoPlayIconHoverColor ? `fill: ${videoPlayIconHoverColor};` : 'fill: #fff;'}
            ${videoPlayIconBgHoverColor ? `background-color: ${videoPlayIconBgHoverColor};` : ''}
            ${videoPlayIconBorderHoverColor ? `border-color: ${videoPlayIconBorderHoverColor};` : ''}  
        }
        .${blockID} .fb-player-wrapper .fb-play-icon svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            ${videoPlayIconSize.Desktop ? `width: ${videoPlayIconSize.Desktop}${videoPlayIconSizeUnits.Desktop} !important;` : 'width: 64px !important;'}
            ${videoPlayIconSize.Desktop ? `height: ${videoPlayIconSize.Desktop}${videoPlayIconSizeUnits.Desktop} !important;` : 'height: 64px !important;'}
            ${videoPlayIconPaddingDesktopWidth && videoPlayIconPaddingDesktop.top ? `padding: ${videoPlayIconPaddingDesktopWidth};` : ''}
            ${videoPlayIconColor ? `fill: ${videoPlayIconColor};` : 'fill: #fff;'}
            ${videoPlayIconBgColor ? `background-color: ${videoPlayIconBgColor};` : ''}
            ${videoPlayIconBorder ? `border: ${videoPlayIconBorder};` : ''}
            ${videoPlayIconBorderDesktopWidth && videoPlayIconBorderDesktop.top ? `border-width: ${videoPlayIconBorderDesktopWidth};` : ''}
            ${videoPlayIconBorderRadiusDesktopWidth && videoPlayIconBorderRadiusDesktop.top ? `border-radius: ${videoPlayIconBorderRadiusDesktopWidth} !important;` : ''}
            ${videoPlayIconBorderColor ? `border-color: ${videoPlayIconBorderColor};` : ''}
            cursor: pointer;
            z-index: 999999;
        }

        .${blockID} .fb-player-wrapper .fb-play-icon svg:hover {
            ${videoPlayIconHoverColor ? `fill: ${videoPlayIconHoverColor};` : 'fill: #fff;'}
            ${videoPlayIconBgHoverColor ? `background-color: ${videoPlayIconBgHoverColor};` : ''}
            ${videoPlayIconBorderHoverColor ? `border-color: ${videoPlayIconBorderHoverColor};` : ''}  
        }

        .${blockID} .fb-react-player iframe {
            ${videoBorder ? `border: ${videoBorder};` : ''}
            ${IframeBorderDesktopWidth && videoBorderDesktop.top ? `border-width: ${IframeBorderDesktopWidth};` : ''}
            ${IframeBorderRadiusDesktopWidth && videoBorderRadiusDesktop.top ? `border-radius: ${IframeBorderRadiusDesktopWidth} !important;` : ''}
            ${videoBorderColor ? `border-color: ${videoBorderColor}` : ''}
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-advanced-video-main-wrapper {
                ${advancedVideoPositionType !== 'default' ? `position: ${advancedVideoPositionType};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoHZOrientationType === 'left' && advancedVideoHZLeftOffset.Tablet ? `left: ${advancedVideoHZLeftOffset.Tablet}${advancedVideoHZLeftOffsetUnits.Tablet};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoHZOrientationType === 'right' && advancedVideoHZRightOffset.Tablet ? `right: ${advancedVideoHZRightOffset.Tablet}${advancedVideoHZRightOffsetUnits.Tablet};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoVROrientationType === 'top' && advancedVideoVRTopOffset.Tablet ? `top: ${advancedVideoVRTopOffset.Tablet}${advancedVideoVRTopOffsetUnits.Tablet};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoVROrientationType === 'bottom' && advancedVideoVRBottomOffset.Tablet ? `bottom: ${advancedVideoVRBottomOffset.Tablet}${advancedVideoVRBottomOffsetUnits.Tablet};` : ''}
                ${videoGlobalZIndex.Tablet ? `z-index: ${videoGlobalZIndex.Tablet};` : ''}
            }

            .${blockID} .fb-advanced-video-wrapper {
                ${TabletPadding && videoGlobalPaddingTablet.top ? `padding: ${TabletPadding};` : ''}
                ${TabletMargin && videoGlobalMarginTablet.top ? `margin: ${TabletMargin};` : ''}
                ${BorderTabletWidth && videoGlobalBorderTablet.top ? `border-width: ${BorderTabletWidth};` : ''}
                ${BorderRadiusTabletWidth && videoGlobalBorderRadiusTablet.top ? `border-radius: ${BorderRadiusTabletWidth} !important;` : ''}
				${advancedVideoTransformNormalProportions 
						? (advancedVideoTransformNormalScale?.Tablet 
							? `transform: scale(${advancedVideoTransformNormalScale.Tablet});` 
							: ''
					) 
					: (
						(advancedVideoTransformNormalScaleX?.Tablet || advancedVideoTransformNormalScaleY?.Tablet) 
						? `transform: ${advancedVideoTransformNormalScaleX?.Tablet ? `scaleX(${advancedVideoTransformNormalScaleX.Tablet}) ` : ''}${advancedVideoTransformNormalScaleY?.Tablet ? `scaleY(${advancedVideoTransformNormalScaleY.Tablet})` : ''};` 
						: ''
					)
				}
            }

            .${blockID} .fb-advanced-video-wrapper:hover {
                ${advancedVideoTransformHoverProportions 
                    ? (advancedVideoTransformHoverScale?.Tablet 
                        ? `transform: scale(${advancedVideoTransformHoverScale.Tablet});` 
                        : ''
                    ) 
                    : (
                        (advancedVideoTransformHoverScaleX?.Tablet || advancedVideoTransformHoverScaleY?.Tablet) 
                        ? `transform: ${advancedVideoTransformHoverScaleX?.Tablet ? `scaleX(${advancedVideoTransformHoverScaleX.Tablet}) ` : ''}${advancedVideoTransformHoverScaleY?.Tablet ? `scaleY(${advancedVideoTransformHoverScaleY.Tablet})` : ''};` 
                        : ''
                    )
                }
            }

            .${blockID} .fb-player-wrapper {
                ${videoWidth.Tablet ? `width: ${videoWidth.Tablet + videoWidthUnits.Tablet};` : 'width: auto;'}
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg {
                ${videoPlayIconSize.Tablet ? `width: ${videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet} !important;` : 'width: 64px !important;'}
                ${videoPlayIconSize.Tablet ? `height: ${videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet} !important;` : 'height: 64px !important;'}
                ${videoPlayIconPaddingTabletWidth && videoPlayIconPaddingTablet.top ? `padding: ${videoPlayIconPaddingTabletWidth};` : ''}
                ${videoPlayIconBorderTabletWidth && videoPlayIconBorderTablet.top ? `border-width: ${videoPlayIconBorderTabletWidth};` : ''}
                ${videoPlayIconBorderRadiusTabletWidth && videoPlayIconBorderRadiusTablet.top ? `border-radius: ${videoPlayIconBorderRadiusTabletWidth} !important;` : ''}
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg:hover {
                ${videoPlayIconHoverColor ? `fill: ${videoPlayIconHoverColor};` : 'fill: #fff;'}
                ${videoPlayIconBgHoverColor ? `background-color: ${videoPlayIconBgHoverColor};` : ''}
                ${videoPlayIconBorderHoverColor ? `border-color: ${videoPlayIconBorderHoverColor};` : ''}  
            }

            .${blockID} .fb-player-wrapper .fb-play-icon svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                ${videoPlayIconSize.Tablet ? `width: ${videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet} !important;` : 'width: 64px !important;'}
                ${videoPlayIconSize.Tablet ? `height: ${videoPlayIconSize.Tablet + videoPlayIconSizeUnits.Tablet} !important;` : 'height: 64px !important;'}
                ${videoPlayIconPaddingTabletWidth && videoPlayIconPaddingTablet.top ? `padding: ${videoPlayIconPaddingTabletWidth};` : ''}
                ${videoPlayIconColor ? `fill: ${videoPlayIconColor};` : 'fill: #fff;'}
                ${videoPlayIconBgColor ? `background-color: ${videoPlayIconBgColor};` : ''}
                ${videoPlayIconBorder ? `border: ${videoPlayIconBorder};` : ''}
                ${videoPlayIconBorderTabletWidth && videoPlayIconBorderTablet.top ? `border-width: ${videoPlayIconBorderTabletWidth};` : ''}
                ${videoPlayIconBorderRadiusTabletWidth && videoPlayIconBorderRadiusTablet.top ? `border-radius: ${videoPlayIconBorderRadiusTabletWidth} !important;` : ''}
                ${videoPlayIconBorderColor ? `border-color: ${videoPlayIconBorderColor};` : ''}
                cursor: pointer;
                z-index: 999999;
            }

            .${blockID} .fb-player-wrapper .fb-play-icon svg:hover {
                ${videoPlayIconHoverColor ? `fill: ${videoPlayIconHoverColor};` : 'fill: #fff;'}
                ${videoPlayIconBgHoverColor ? `background-color: ${videoPlayIconBgHoverColor};` : ''}
                ${videoPlayIconBorderHoverColor ? `border-color: ${videoPlayIconBorderHoverColor};` : ''}  
            }

            .${blockID} .fb-react-player iframe {
                ${IframeBorderTabletWidth && videoBorderTablet.top ? `border-width: ${IframeBorderTabletWidth};` : ''}
                ${IframeBorderRadiusTabletWidth && videoBorderRadiusTablet.top ? `border-radius: ${IframeBorderRadiusTabletWidth} !important;` : ''}
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID}.fb-advanced-video-main-wrapper {
                ${advancedVideoPositionType !== 'default' ? `position: ${advancedVideoPositionType};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoHZOrientationType === 'left' && advancedVideoHZLeftOffset.Mobile ? `left: ${advancedVideoHZLeftOffset.Mobile}${advancedVideoHZLeftOffsetUnits.Mobile};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoHZOrientationType === 'right' && advancedVideoHZRightOffset.Mobile ? `right: ${advancedVideoHZRightOffset.Mobile}${advancedVideoHZRightOffsetUnits.Mobile};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoVROrientationType === 'top' && advancedVideoVRTopOffset.Mobile ? `top: ${advancedVideoVRTopOffset.Mobile}${advancedVideoVRTopOffsetUnits.Mobile};` : ''}
                ${advancedVideoPositionType !== 'default' && advancedVideoPositionType !== 'relative' && advancedVideoVROrientationType === 'bottom' && advancedVideoVRBottomOffset.Mobile ? `bottom: ${advancedVideoVRBottomOffset.Mobile}${advancedVideoVRBottomOffsetUnits.Mobile};` : ''}
                ${videoGlobalZIndex.Mobile ? `z-index: ${videoGlobalZIndex.Mobile};` : ''}
            }

            .${blockID} .fb-advanced-video-wrapper {
                ${MobilePadding && videoGlobalPaddingMobile.top ? `padding: ${MobilePadding};` : ''}
                ${MobileMargin && videoGlobalMarginMobile.top ? `margin: ${MobileMargin};` : ''}
                ${BorderMobileWidth && videoGlobalBorderMobile.top ? `border-width: ${BorderMobileWidth};` : ''}
                ${BorderRadiusMobileWidth && videoGlobalBorderRadiusMobile.top ? `border-radius: ${BorderRadiusMobileWidth} !important;` : ''}

                ${advancedVideoTransformNormalProportions 
						? (advancedVideoTransformNormalScale?.Mobile 
							? `transform: scale(${advancedVideoTransformNormalScale.Mobile});` 
							: ''
					) 
					: (
						(advancedVideoTransformNormalScaleX?.Mobile || advancedVideoTransformNormalScaleY?.Mobile) 
						? `transform: ${advancedVideoTransformNormalScaleX?.Mobile ? `scaleX(${advancedVideoTransformNormalScaleX.Mobile}) ` : ''}${advancedVideoTransformNormalScaleY?.Mobile ? `scaleY(${advancedVideoTransformNormalScaleY.Mobile})` : ''};` 
						: ''
					)
				}
            }

            .${blockID} .fb-advanced-video-wrapper:hover {
                ${advancedVideoTransformHoverProportions 
                    ? (advancedVideoTransformHoverScale?.Mobile 
                        ? `transform: scale(${advancedVideoTransformHoverScale.Mobile});` 
                        : ''
                    ) 
                    : (
                        (advancedVideoTransformHoverScaleX?.Mobile || advancedVideoTransformHoverScaleY?.Mobile) 
                        ? `transform: ${advancedVideoTransformHoverScaleX?.Mobile ? `scaleX(${advancedVideoTransformHoverScaleX.Mobile}) ` : ''}${advancedVideoTransformHoverScaleY?.Mobile ? `scaleY(${advancedVideoTransformHoverScaleY.Mobile})` : ''};` 
                        : ''
                    )
                }
            }

            .${blockID} .fb-player-wrapper {
                ${videoWidth.Mobile ? `width: ${videoWidth.Mobile + videoWidthUnits.Mobile};` : 'width: auto;'}
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg {
                ${videoPlayIconSize.Mobile ? `width: ${videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile} !important;` : 'width: 64px !important;'}
                ${videoPlayIconSize.Mobile ? `height: ${videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile} !important;` : 'height: 64px !important;'}
                ${videoPlayIconPaddingMobileWidth && videoPlayIconPaddingMobile.top ? `padding: ${videoPlayIconPaddingMobileWidth};` : ''}
                ${videoPlayIconBorderMobileWidth && videoPlayIconBorderMobile.top ? `border-width: ${videoPlayIconBorderMobileWidth};` : ''}
                ${videoPlayIconBorderRadiusMobileWidth && videoPlayIconBorderRadiusMobile.top ? `border-radius: ${videoPlayIconBorderRadiusMobileWidth} !important;` : ''}
            }

            .${blockID} .fb-player-wrapper .react-player__preview svg:hover {
                ${videoPlayIconHoverColor ? `fill: ${videoPlayIconHoverColor};` : 'fill: #fff;'}
                ${videoPlayIconBgHoverColor ? `background-color: ${videoPlayIconBgHoverColor};` : ''}
                ${videoPlayIconBorderHoverColor ? `border-color: ${videoPlayIconBorderHoverColor};` : ''}
            }

            
            .${blockID} .fb-player-wrapper .fb-play-icon svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                ${videoPlayIconSize.Mobile ? `width: ${videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile} !important;` : 'width: 64px !important;'}
                ${videoPlayIconSize.Mobile ? `height: ${videoPlayIconSize.Mobile + videoPlayIconSizeUnits.Mobile} !important;` : 'height: 64px !important;'}
                ${videoPlayIconPaddingMobileWidth && videoPlayIconPaddingMobile.top ? `padding: ${videoPlayIconPaddingMobileWidth};` : ''}
                ${videoPlayIconColor ? `fill: ${videoPlayIconColor};` : 'fill: #fff;'}
                ${videoPlayIconBgColor ? `background-color: ${videoPlayIconBgColor};` : ''}
                ${videoPlayIconBorder ? `border: ${videoPlayIconBorder};` : ''}
                ${videoPlayIconBorderMobileWidth && videoPlayIconBorderMobile.top ? `border-width: ${videoPlayIconBorderMobileWidth};` : ''}
                ${videoPlayIconBorderRadiusMobileWidth && videoPlayIconBorderRadiusMobile.top ? `border-radius: ${videoPlayIconBorderRadiusMobileWidth} !important;` : ''}
                ${videoPlayIconBorderColor ? `border-color: ${videoPlayIconBorderColor};` : ''}
                cursor: pointer;
                z-index: 999999;
            }

            .${blockID} .fb-player-wrapper .fb-play-icon svg:hover {
                ${videoPlayIconHoverColor ? `fill: ${videoPlayIconHoverColor};` : 'fill: #fff;'}
                ${videoPlayIconBgHoverColor ? `background-color: ${videoPlayIconBgHoverColor};` : ''}
                ${videoPlayIconBorderHoverColor ? `border-color: ${videoPlayIconBorderHoverColor};` : ''}  
            }

            .${blockID} .fb-react-player iframe {
                ${IframeBorderMobileWidth && videoBorderMobile.top ? `border-width: ${IframeBorderMobileWidth};` : ''}
                ${IframeBorderRadiusMobileWidth && videoBorderRadiusMobile.top ? `border-radius: ${IframeBorderRadiusMobileWidth} !important;` : ''}
            }
        }
    `, [
        blockID,
        deviceType,
        blockStyle,
        videoGlobalZIndex,
        advancedVideoOverflow,
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
        videoPlayIconSwitcher,
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
        IframeBorderRadiusMobileWidth,

        // Position
        advancedVideoPositionType,
        advancedVideoHZOrientationType,
        advancedVideoVROrientationType,
        advancedVideoHZLeftOffset,
        advancedVideoHZLeftOffsetUnits,
        advancedVideoHZRightOffset,
        advancedVideoHZRightOffsetUnits,
        advancedVideoVRTopOffset,
        advancedVideoVRTopOffsetUnits,
        advancedVideoVRBottomOffset,
        advancedVideoVRBottomOffsetUnits,

        advancedVideoTransformSwitcher,
		advancedVideoTransformNormalProportions,
		advancedVideoTransformNormalScale,
		advancedVideoTransformNormalScaleX,
		advancedVideoTransformNormalScaleY,

		advancedVideoTransformHoverProportions,
		advancedVideoTransformHoverScale,
		advancedVideoTransformHoverScaleX,
		advancedVideoTransformHoverScaleY,
    ]);


    const customCss = getCustomCss(advancedVideoCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss] );

    const editorStyle = `${allBlockStyle}${customCss}`.replace(/\s+/g, ' ').trim();


    /**
	 * Inspector General Controls
	 */
	const generalControls = (
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
                    <FB_BackgroundImageControl 
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

                    <ToggleControl
                        label={__("Play Icon", "frontis-blocks")}
                        checked={videoPlayIconSwitcher}
                        onChange={(value) => setAttributes({ videoPlayIconSwitcher: value })}
                    />

                    {previewImageUrl && videoPlayIconSwitcher && (
                        <FBIconPicker value={videoPlayIcon} setIconHandler={(value) => setAttributes({ videoPlayIcon: value })} />
                    )}
                    </>
                )}

            </PanelBody>

        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
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
                        setGlobalColor={(value) => setAttributes({ videoBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {videoBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={videoBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ videoBorderHoverColor: value === undefined ? '' : value })}
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
                        setGlobalColor={(value) => setAttributes({ videoPlayIconColor: value === undefined ? '' : value })}
                    />
                )}

                {videoPlayIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={videoPlayIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ videoPlayIconHoverColor: value === undefined ? '' : value })}
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
                        setGlobalColor={(value) => setAttributes({ videoPlayIconBgColor: value === undefined ? '' : value })}
                    />
                )}

                {videoPlayIconBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={videoPlayIconBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ videoPlayIconBgHoverColor: value === undefined ? '' : value })}
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
                        setGlobalColor={(value) => setAttributes({ videoPlayIconBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {videoPlayIconBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={videoPlayIconBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ videoPlayIconBorderHoverColor: value === undefined ? '' : value })}
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
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header' 
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
                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={advancedVideoOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ advancedVideoOverflow: value })}
                        />
                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={advancedVideoPositionType}
                            setPositionType={(value) => setAttributes({ advancedVideoPositionType: value })}
                                                                            
                            HZOrientationType={advancedVideoHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ advancedVideoHZOrientationType: value })
                            }
                            VROrientationType={advancedVideoVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ advancedVideoVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={advancedVideoHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ advancedVideoHZLeftOffset: value })}
                            HZLeftOffsetUnits={advancedVideoHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ advancedVideoHZLeftOffsetUnits: value })}
                            HZRightOffset={advancedVideoHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ advancedVideoHZRightOffset: value })}
                            HZRightOffsetUnits={advancedVideoHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ advancedVideoHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={advancedVideoVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ advancedVideoVRTopOffset: value })}
                            VRTopOffsetUnits={advancedVideoVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ advancedVideoVRTopOffsetUnits: value })}
                            VRBottomOffset={advancedVideoVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ advancedVideoVRBottomOffset: value })}
                            VRBottomOffsetUnits={advancedVideoVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ advancedVideoVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />
                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={videoGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ videoGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={videoGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ videoGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
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
                                setGlobalColor={(value) => setAttributes({ videoGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {videoGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={videoGlobalBgHoverColor}
                                setGlobalColor={(value) => setAttributes({ videoGlobalBgHoverColor: value === undefined ? '' : value })}
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
                                setGlobalColor={(value) => setAttributes({ videoGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {videoGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={videoGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ videoGlobalBorderHoverColor: value === undefined ? '' : value })}
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

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={advancedVideoDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ advancedVideoDesktopSwitcher: value })}

                            tabletValue={advancedVideoTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ advancedVideoTabletSwitcher: value })}

                            mobileValue={advancedVideoMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ advancedVideoMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Transform", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-transform-control-wrapper"
                    >
                        <FB_SwitcherControl
                            label={__("Transform Style", "frontis-blocks")}
                            globalSwitcher={advancedVideoTransformSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ advancedVideoTransformSwitcher: value })}
                        />

                        {advancedVideoTransformSwitcher === 'normal' && (
                            <FB_ScaleControl
                                proportions={advancedVideoTransformNormalProportions}
                                setProportions={(value) => setAttributes({ advancedVideoTransformNormalProportions: value })}
                                scale={advancedVideoTransformNormalScale}
                                setScale={(value) => setAttributes({ advancedVideoTransformNormalScale: value })}
                                scaleX={advancedVideoTransformNormalScaleX}
                                setScaleX={(value) => setAttributes({ advancedVideoTransformNormalScaleX: value })}
                                scaleY={advancedVideoTransformNormalScaleY}	
                                setScaleY={(value) => setAttributes({ advancedVideoTransformNormalScaleY: value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                            />
                        )}

                        {advancedVideoTransformSwitcher === 'hover' && (
                            <FB_ScaleControl
                                proportions={advancedVideoTransformHoverProportions}
                                setProportions={(value) => setAttributes({ advancedVideoTransformHoverProportions: value })}
                                scale={advancedVideoTransformHoverScale}
                                setScale={(value) => setAttributes({ advancedVideoTransformHoverScale: value })}
                                scaleX={advancedVideoTransformHoverScaleX}
                                setScaleX={(value) => setAttributes({ advancedVideoTransformHoverScaleX: value })}
                                scaleY={advancedVideoTransformHoverScaleY}	
                                setScaleY={(value) => setAttributes({ advancedVideoTransformHoverScaleY: value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={advancedVideoCustomCSS} 
                            onChangeValue={(value) => setAttributes({ advancedVideoCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
	);

    return (
        <>
            <style>
                {editorStyle}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}