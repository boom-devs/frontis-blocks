import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { PanelBody, TabPanel, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import { useDeviceType } from '@Config/displayType';
import './editor.scss';

import {
    BORDER_STYLES,
    TRANSITION_EFFECTS
} from "./constants/constants";

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
        sliderItems,
        blockStyle,
        autoplay,
        autoplaySpeed,
        infiniteLoop,
        transitionSpeed,
        transitionSwitcher,
        allowTouchMove,
        displayArrows,
        displayDots,
        /** Arrow Color **/
        sliderArrowColorSwitcher,
        sliderArrowColor,
        sliderArrowHoverColor,
        /** Arrow Bg Color **/
        sliderArrowBgColorSwitcher,
        sliderArrowBgColor,
        sliderArrowBgHoverColor,
        /** Arrow Size */
        arrowSize,
        arrowSizeUnits,
        /** Arrow Space From Edge */
        arrowSpaceFromEdges,
        arrowSpaceFromEdgesUnits,
        /** Arrow Border */
        arrowBorder,
        arrowBorderColorSwitcher,
        arrowBorderColor,
        arrowBorderHoverColor,
        arrowBorderUnits,
        arrowDesktopBorder,
        arrowTabletBorder,
        arrowMobileBorder,
        arrowBorderLink,
        arrowBorderRadiusUnits,
        arrowDesktopBorderRadius,
        arrowTabletBorderRadius,
        arrowMobileBorderRadius,
        arrowBorderRadiusLink,
        /** Arrow Spacing */
        arrowPaddingUnits,
        arrowDesktopPadding,
        arrowTabPadding,
        arrowMobilePadding,
        arrowPaddingLink,
        arrowMarginUnits,
        arrowDesktopMargin,
        arrowTabMargin,
        arrowMobileMargin,
        arrowMarginLink,
        /** Dots Spacing */
        dotsSpacingFromTop,
        dotsSpacingFromTopUnits,
        /** Global Settings */
        arrowGlobalZIndex,
        arrowGlobalPaddingUnits,
        arrowGlobalPaddingDesktop,
        arrowGlobalPaddingTablet,
        arrowGlobalPaddingMobile,
        arrowGlobalPaddingLink,
        arrowGlobalMarginUnits,
        arrowGlobalMarginDesktop,
        arrowGlobalMarginTablet,
        arrowGlobalMarginMobile,
        arrowGlobalMarginLink,
        arrowGlobalBgColorSwitcher,
        arrowGlobalBgColor,
        arrowGlobalBgHoverColor,
        arrowGlobalBorder,
        arrowGlobalBorderColorSwitcher,
        arrowGlobalBorderColor,
        arrowGlobalBorderHoverColor,
        arrowGlobalBorderUnits,
        arrowGlobalBorderDesktop,
        arrowGlobalBorderTablet,
        arrowGlobalBorderMobile,
        arrowGlobalBorderLink,
        arrowGlobalBorderRadiusUnits,
        arrowGlobalBorderRadiusDesktop,
        arrowGlobalBorderRadiusTablet,
        arrowGlobalBorderRadiusMobile,
        arrowGlobalBorderRadiusLink,
        arrowGlobalBoxShadowSwitcher,
        arrowGlobalBoxShadowValues,
        arrowGlobalBoxShadowCssValue,
        arrowGlobalBoxShadowHoverValues,
        arrowGlobalBoxShadowHoverCssValue

    } = attributes;
    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId) {
            setAttributes({ blockId: `fb-slider-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    const toggleAutoplay = () => {
        setAttributes( { autoplay: ! autoplay } );
    };

    const toggleInfiniteLoop = () => {
        setAttributes( { infiniteLoop: ! infiniteLoop } );
    };

    const toggleTouchMove = () => {
        setAttributes( { allowTouchMove: ! allowTouchMove } );
    };
    const toggleArrow = () => {
        setAttributes( { displayArrows: ! displayArrows } );
    };
    const toggleDots = () => {
        setAttributes( { displayDots: ! displayDots } );
    };
    /** Start Arrow Padding */
    const arrowPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (arrowPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        arrowDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        arrowTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        arrowMobilePadding: {
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
                    setAttributes({ arrowDesktopPadding: { ...arrowDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ arrowTabPadding: { ...arrowTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ arrowMobilePadding: { ...arrowMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const arrowPaddingLinkBtn = () => {
        setAttributes({
            arrowPaddingLink: !arrowPaddingLink
        });
    };

    const arrowPaddingUnitsHandler = (unit) => {
        setAttributes({
            arrowPaddingUnits: {
                ...arrowPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Arrow */
    const arrowDesktopPaddingWidth = `${arrowDesktopPadding.top}${arrowPaddingUnits.Desktop} ${arrowDesktopPadding.right}${arrowPaddingUnits.Desktop} ${arrowDesktopPadding.bottom}${arrowPaddingUnits.Desktop} ${arrowDesktopPadding.left}${arrowPaddingUnits.Desktop}`;
    const arrowTabletPaddingWidth = `${arrowTabPadding.top}${arrowPaddingUnits.Tablet} ${arrowTabPadding.right}${arrowPaddingUnits.Tablet} ${arrowTabPadding.bottom}${arrowPaddingUnits.Tablet} ${arrowTabPadding.left}${arrowPaddingUnits.Tablet}`;
    const arrowMobilePaddingWidth = `${arrowMobilePadding.top}${arrowPaddingUnits.Mobile} ${arrowMobilePadding.right}${arrowPaddingUnits.Mobile} ${arrowMobilePadding.bottom}${arrowPaddingUnits.Mobile} ${arrowMobilePadding.left}${arrowPaddingUnits.Mobile}`;
    /** End Arrow Padding */

    /** Start Arrow Margin */
    const arrowMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (arrowMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        arrowDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        arrowTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        arrowMobileMargin: {
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
                    setAttributes({ arrowDesktopMargin: { ...arrowDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ arrowTabMargin: { ...arrowTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ arrowMobileMargin: { ...arrowMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const arrowMarginLinkBtn = () => {
        setAttributes({
            arrowMarginLink: !arrowMarginLink
        });
    };

    const arrowMarginUnitsHandler = (unit) => {
        setAttributes({
            arrowMarginUnits: {
                ...arrowMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Arrow */
    const arrowDesktopMarginWidth = `${arrowDesktopMargin.top}${arrowMarginUnits.Desktop} ${arrowDesktopMargin.right}${arrowMarginUnits.Desktop} ${arrowDesktopMargin.bottom}${arrowMarginUnits.Desktop} ${arrowDesktopMargin.left}${arrowMarginUnits.Desktop}`;
    const arrowTabletMarginWidth = `${arrowTabMargin.top}${arrowMarginUnits.Tablet} ${arrowTabMargin.right}${arrowMarginUnits.Tablet} ${arrowTabMargin.bottom}${arrowMarginUnits.Tablet} ${arrowTabMargin.left}${arrowMarginUnits.Tablet}`;
    const arrowMobileMarginWidth = `${arrowMobileMargin.top}${arrowMarginUnits.Mobile} ${arrowMobileMargin.right}${arrowMarginUnits.Mobile} ${arrowMobileMargin.bottom}${arrowMarginUnits.Mobile} ${arrowMobileMargin.left}${arrowMarginUnits.Mobile}`;
    /** End Arrow Margin */

    /** Start Arrow Border */
    const arrowBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (arrowBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        arrowDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        arrowTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        arrowMobileBorder: {
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
                    setAttributes({ arrowDesktopBorder: { ...arrowDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ arrowTabletBorder: { ...arrowTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ arrowMobileBorder: { ...arrowMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const arrowBorderLinkBtn = () => {
        setAttributes({
            arrowBorderLink: !arrowBorderLink
        });
    };

    const arrowBorderUnitsHandler = (unit) => {
        setAttributes({
            arrowBorderUnits: {
                ...arrowBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border for Arrow */
    const arrowDesktopBorderWidth = `${arrowDesktopBorder.top}${arrowBorderUnits.Desktop} ${arrowDesktopBorder.right}${arrowBorderUnits.Desktop} ${arrowDesktopBorder.bottom}${arrowBorderUnits.Desktop} ${arrowDesktopBorder.left}${arrowBorderUnits.Desktop}`;
    const arrowTabletBorderWidth = `${arrowTabletBorder.top}${arrowBorderUnits.Tablet} ${arrowTabletBorder.right}${arrowBorderUnits.Tablet} ${arrowTabletBorder.bottom}${arrowBorderUnits.Tablet} ${arrowTabletBorder.left}${arrowBorderUnits.Tablet}`;
    const arrowMobileBorderWidth = `${arrowMobileBorder.top}${arrowBorderUnits.Mobile} ${arrowMobileBorder.right}${arrowBorderUnits.Mobile} ${arrowMobileBorder.bottom}${arrowBorderUnits.Mobile} ${arrowMobileBorder.left}${arrowBorderUnits.Mobile}`;
    /** End Arrow Border */

    /** Start Arrow Border Radius */
    const arrowBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (arrowBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        arrowDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        arrowTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        arrowMobileBorderRadius: {
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
                    setAttributes({ arrowDesktopBorderRadius: { ...arrowDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ arrowTabletBorderRadius: { ...arrowTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ arrowMobileBorderRadius: { ...arrowMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const arrowBorderRadiusLinkBtn = () => {
        setAttributes({
            arrowBorderRadiusLink: !arrowBorderRadiusLink
        });
    };

    const arrowBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            arrowBorderRadiusUnits: {
                ...arrowBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Arrow */
    const arrowDesktopBorderRadiusWidth = `${arrowDesktopBorderRadius.top}${arrowBorderRadiusUnits.Desktop} ${arrowDesktopBorderRadius.right}${arrowBorderRadiusUnits.Desktop} ${arrowDesktopBorderRadius.bottom}${arrowBorderRadiusUnits.Desktop} ${arrowDesktopBorderRadius.left}${arrowBorderRadiusUnits.Desktop}`;
    const arrowTabletBorderRadiusWidth = `${arrowTabletBorderRadius.top}${arrowBorderRadiusUnits.Tablet} ${arrowTabletBorderRadius.right}${arrowBorderRadiusUnits.Tablet} ${arrowTabletBorderRadius.bottom}${arrowBorderRadiusUnits.Tablet} ${arrowTabletBorderRadius.left}${arrowBorderRadiusUnits.Tablet}`;
    const arrowMobileBorderRadiusWidth = `${arrowMobileBorderRadius.top}${arrowBorderRadiusUnits.Mobile} ${arrowMobileBorderRadius.right}${arrowBorderRadiusUnits.Mobile} ${arrowMobileBorderRadius.bottom}${arrowBorderRadiusUnits.Mobile} ${arrowMobileBorderRadius.left}${arrowBorderRadiusUnits.Mobile}`;
    /** End Arrow Border Radius */

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( arrowGlobalPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        arrowGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        arrowGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        arrowGlobalPaddingMobile: {
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
                    setAttributes( {arrowGlobalPaddingDesktop: {...arrowGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {arrowGlobalPaddingTablet: {...arrowGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {arrowGlobalPaddingMobile: {...arrowGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {arrowGlobalPaddingLink: !arrowGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            arrowGlobalPaddingUnits: {
                ...arrowGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopPadding = `${arrowGlobalPaddingDesktop.top}${arrowGlobalPaddingUnits.Desktop} ${arrowGlobalPaddingDesktop.right}${arrowGlobalPaddingUnits.Desktop} ${arrowGlobalPaddingDesktop.bottom}${arrowGlobalPaddingUnits.Desktop} ${arrowGlobalPaddingDesktop.left}${arrowGlobalPaddingUnits.Desktop}`;
    const globalTabletPadding = `${arrowGlobalPaddingTablet.top}${arrowGlobalPaddingUnits.Tablet} ${arrowGlobalPaddingTablet.right}${arrowGlobalPaddingUnits.Tablet} ${arrowGlobalPaddingTablet.bottom}${arrowGlobalPaddingUnits.Tablet} ${arrowGlobalPaddingTablet.left}${arrowGlobalPaddingUnits.Tablet}`;
    const globalMobilePadding = `${arrowGlobalPaddingMobile.top}${arrowGlobalPaddingUnits.Mobile} ${arrowGlobalPaddingMobile.right}${arrowGlobalPaddingUnits.Mobile} ${arrowGlobalPaddingMobile.bottom}${arrowGlobalPaddingUnits.Mobile} ${arrowGlobalPaddingMobile.left}${arrowGlobalPaddingUnits.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( arrowGlobalMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        arrowGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        arrowGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        arrowGlobalMarginMobile: {
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
                    setAttributes( {arrowGlobalMarginDesktop: {...arrowGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {arrowGlobalMarginTablet: {...arrowGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {arrowGlobalMarginMobile: {...arrowGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {arrowGlobalMarginLink: !arrowGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            arrowGlobalMarginUnits: {
                ...arrowGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopMargin = `${arrowGlobalMarginDesktop.top}${arrowGlobalMarginUnits.Desktop} ${arrowGlobalMarginDesktop.right}${arrowGlobalMarginUnits.Desktop} ${arrowGlobalMarginDesktop.bottom}${arrowGlobalMarginUnits.Desktop} ${arrowGlobalMarginDesktop.left}${arrowGlobalMarginUnits.Desktop}`;
    const globalTabletMargin = `${arrowGlobalMarginTablet.top}${arrowGlobalMarginUnits.Tablet} ${arrowGlobalMarginTablet.right}${arrowGlobalMarginUnits.Tablet} ${arrowGlobalMarginTablet.bottom}${arrowGlobalMarginUnits.Tablet} ${arrowGlobalMarginTablet.left}${arrowGlobalMarginUnits.Tablet}`;
    const globalMobileMargin = `${arrowGlobalMarginMobile.top}${arrowGlobalMarginUnits.Mobile} ${arrowGlobalMarginMobile.right}${arrowGlobalMarginUnits.Mobile} ${arrowGlobalMarginMobile.bottom}${arrowGlobalMarginUnits.Mobile} ${arrowGlobalMarginMobile.left}${arrowGlobalMarginUnits.Mobile}`;
    /** End Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( arrowGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        arrowGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        arrowGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        arrowGlobalBorderMobile: {
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
                    setAttributes( {arrowGlobalBorderDesktop: {...arrowGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {arrowGlobalBorderTablet: {...arrowGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {arrowGlobalBorderMobile: {...arrowGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {arrowGlobalBorderLink: !arrowGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            arrowGlobalBorderUnits: {
                ...arrowGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopBorderWidth = `${arrowGlobalBorderDesktop.top}${arrowGlobalBorderUnits.Desktop} ${arrowGlobalBorderDesktop.right}${arrowGlobalBorderUnits.Desktop} ${arrowGlobalBorderDesktop.bottom}${arrowGlobalBorderUnits.Desktop} ${arrowGlobalBorderDesktop.left}${arrowGlobalBorderUnits.Desktop}`;
    const globalTabletBorderWidth = `${arrowGlobalBorderTablet.top}${arrowGlobalBorderUnits.Tablet} ${arrowGlobalBorderTablet.right}${arrowGlobalBorderUnits.Tablet} ${arrowGlobalBorderTablet.bottom}${arrowGlobalBorderUnits.Tablet} ${arrowGlobalBorderTablet.left}${arrowGlobalBorderUnits.Tablet}`;
    const globalMobileBorderWidth = `${arrowGlobalBorderMobile.top}${arrowGlobalBorderUnits.Mobile} ${arrowGlobalBorderMobile.right}${arrowGlobalBorderUnits.Mobile} ${arrowGlobalBorderMobile.bottom}${arrowGlobalBorderUnits.Mobile} ${arrowGlobalBorderMobile.left}${arrowGlobalBorderUnits.Mobile}`;
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( arrowGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        arrowGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        arrowGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        arrowGlobalBorderRadiusMobile: {
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
                    setAttributes( {arrowGlobalBorderRadiusDesktop: {...arrowGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {arrowGlobalBorderRadiusTablet: {...arrowGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {arrowGlobalBorderRadiusMobile: {...arrowGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {arrowGlobalBorderRadiusLink: !arrowGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            arrowGlobalBorderRadiusUnits: {
                ...arrowGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */

    const globalDesktopBorderRadiusWidth = `${arrowGlobalBorderRadiusDesktop.top}${arrowGlobalBorderRadiusUnits.Desktop} ${arrowGlobalBorderRadiusDesktop.right}${arrowGlobalBorderRadiusUnits.Desktop} ${arrowGlobalBorderRadiusDesktop.bottom}${arrowGlobalBorderRadiusUnits.Desktop} ${arrowGlobalBorderRadiusDesktop.left}${arrowGlobalBorderRadiusUnits.Desktop}`;
    const globalTabletBorderRadiusWidth = `${arrowGlobalBorderRadiusTablet.top}${arrowGlobalBorderRadiusUnits.Tablet} ${arrowGlobalBorderRadiusTablet.right}${arrowGlobalBorderRadiusUnits.Tablet} ${arrowGlobalBorderRadiusTablet.bottom}${arrowGlobalBorderRadiusUnits.Tablet} ${arrowGlobalBorderRadiusTablet.left}${arrowGlobalBorderRadiusUnits.Tablet}`;
    const globalMobileBorderRadiusWidth = `${arrowGlobalBorderRadiusMobile.top}${arrowGlobalBorderRadiusUnits.Mobile} ${arrowGlobalBorderRadiusMobile.right}${arrowGlobalBorderRadiusUnits.Mobile} ${arrowGlobalBorderRadiusMobile.bottom}${arrowGlobalBorderRadiusUnits.Mobile} ${arrowGlobalBorderRadiusMobile.left}${arrowGlobalBorderRadiusUnits.Mobile}`;

    const sliderBlockStyle = useMemo(() => `
            {/** Parent Style */}
            .fb-block-${ blockId }.fb-slider-container{
                ${arrowGlobalZIndex.Desktop ? `z-index: ${arrowGlobalZIndex.Desktop};` : ''}
                ${arrowGlobalBgColor ? `background-color: ${arrowGlobalBgColor};` : ''}
                ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
                ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''}
                ${arrowGlobalBorder ? `border: ${arrowGlobalBorder};` : ''}
                ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
                ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
                ${arrowGlobalBorderColor ? `border-color: ${arrowGlobalBorderColor};` : ''}
                ${arrowGlobalBoxShadowCssValue ? `box-shadow: ${arrowGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
                position: relative;
            }
            .fb-block-${ blockId }.fb-slider-container:hover{
                ${arrowGlobalBgHoverColor ? `background-color: ${arrowGlobalBgHoverColor};` : ''}
                ${arrowGlobalBorderHoverColor ? `border-color: ${arrowGlobalBorderHoverColor};` : ''}
                ${arrowGlobalBoxShadowHoverCssValue ? `box-shadow: ${arrowGlobalBoxShadowHoverCssValue};` : ''}
            }
            
            {/*Arrow Background Color*/}
            .fb-block-${ blockId }.fb-slider-container .swiper-button-prev,
            .fb-block-${ blockId }.fb-slider-container .swiper-button-next{
                ${sliderArrowBgColor ? `background-color: ${sliderArrowBgColor};` : ''}
                ${arrowBorder ? `border: ${arrowBorder};` : ''}
                ${arrowDesktopPaddingWidth ? `padding: ${arrowDesktopPaddingWidth};` : ''}
                ${arrowDesktopMarginWidth ? `margin: ${arrowDesktopMarginWidth};` : ''}
                ${arrowDesktopBorderWidth ? `border-width: ${arrowDesktopBorderWidth};` : ''}
                ${arrowDesktopBorderRadiusWidth ? `border-radius: ${arrowDesktopBorderRadiusWidth};` : ''}
                ${arrowBorderColor ? `border-color: ${arrowBorderColor};` : ''}
            }
            .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:hover,
            .fb-block-${ blockId }.fb-slider-container .swiper-button-next:hover {
                ${sliderArrowBgHoverColor ? `background-color: ${sliderArrowBgHoverColor};` : ''}
            }
            {/ *Arrow Size, Color */}
            .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:after,
            .fb-block-${ blockId }.fb-slider-container .swiper-button-next:after{
                ${sliderArrowColor ? `color: ${sliderArrowColor};` : ''}
                ${arrowSize.Desktop ? `font-size: ${arrowSize.Desktop}${arrowSizeUnits.Desktop};` : ''}
            }
            .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:hover:after,
            .fb-block-${ blockId }.fb-slider-container .swiper-button-next:hover:after {
                ${sliderArrowHoverColor ? `color: ${sliderArrowHoverColor};` : ''}
            }
            {/* Arrow Space From Edges Prev */}
            .fb-block-${ blockId }.fb-slider-container .swiper-button-prev{
                ${arrowSpaceFromEdges.Desktop ? `left: ${arrowSpaceFromEdges.Desktop}${arrowSpaceFromEdgesUnits.Desktop};` : ''}
            }
            {/* Arrow Space From Edges Next */}
            .fb-block-${ blockId }.fb-slider-container .swiper-button-next{
                ${arrowSpaceFromEdges.Desktop ? `right: ${arrowSpaceFromEdges.Desktop}${arrowSpaceFromEdgesUnits.Desktop};` : ''}
            }
            {/* Dots Space From Top */}
            .fb-block-${ blockId }.fb-slider-container .swiper-pagination{
                ${dotsSpacingFromTop.Desktop ? `bottom: ${dotsSpacingFromTop.Desktop}${dotsSpacingFromTopUnits.Desktop};` : ''}
            }

            @media only screen and (max-width: 1024px) {
                {/** Parent Style */}
                .fb-block-${ blockId }.fb-slider-container{
                    ${arrowGlobalZIndex.Tablet ? `z-index: ${arrowGlobalZIndex.Tablet};` : ''}
                    ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                    ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''}
                    ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                    ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                }
                .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:after,
                .fb-block-${ blockId }.fb-slider-container .swiper-button-next:after{
                    ${arrowSize.Tablet ? `font-size: ${arrowSize.Tablet}${arrowSizeUnits.Tablet};` : ''}
                }
                .fb-block-${ blockId }.fb-slider-container .swiper-button-prev,
                .fb-block-${ blockId }.fb-slider-container .swiper-button-next{
                    ${arrowTabletPaddingWidth ? `padding: ${arrowTabletPaddingWidth};` : ''}
                    ${arrowTabletMarginWidth ? `margin: ${arrowTabletMarginWidth};` : ''}
                    ${arrowTabletBorderWidth ? `border-width: ${arrowTabletBorderWidth};` : ''}
                    ${arrowTabletBorderRadiusWidth ? `border-radius: ${arrowTabletBorderRadiusWidth};` : ''}
                }
                {/* Arrow Space From Edges Prev */}
                .fb-block-${ blockId }.fb-slider-container .swiper-button-prev{
                    ${arrowSpaceFromEdges.Tablet ? `left: ${arrowSpaceFromEdges.Tablet}${arrowSpaceFromEdgesUnits.Tablet};` : ''}
                }
                {/* Arrow Space From Edges Next */}
                .fb-block-${ blockId }.fb-slider-container .swiper-button-next{
                    ${arrowSpaceFromEdges.Tablet ? `right: ${arrowSpaceFromEdges.Tablet}${arrowSpaceFromEdgesUnits.Tablet};` : ''}
                }
                {/* Dots Space From Top */}
                .fb-block-${ blockId }.fb-slider-container .swiper-pagination{
                    ${dotsSpacingFromTop.Tablet ? `bottom: ${dotsSpacingFromTop.Tablet}${dotsSpacingFromTopUnits.Tablet};` : ''}
                }
            }
            
            @media only screen and (max-width: 767px) {
                {/** Parent Style */}
                .fb-block-${ blockId }.fb-slider-container{
                    ${arrowGlobalZIndex.Mobile ? `z-index: ${arrowGlobalZIndex.Mobile};` : ''}
                    ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                    ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''}
                    ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                    ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                }
                .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:after,
                .fb-block-${ blockId }.fb-slider-container .swiper-button-next:after{
                    ${arrowSize.Mobile ? `font-size: ${arrowSize.Mobile}${arrowSizeUnits.Mobile};` : ''}
                }
                .fb-block-${ blockId }.fb-slider-container .swiper-button-prev,
                .fb-block-${ blockId }.fb-slider-container .swiper-button-next{
                    ${arrowMobilePaddingWidth ? `padding: ${arrowMobilePaddingWidth};` : ''}
                    ${arrowMobileMarginWidth ? `margin: ${arrowMobileMarginWidth};` : ''}
                    ${arrowMobileBorderWidth ? `border-width: ${arrowMobileBorderWidth};` : ''}
                    ${arrowMobileBorderRadiusWidth ? `border-radius: ${arrowMobileBorderRadiusWidth};` : ''}
                }
                {/* Arrow Space From Edges Prev */}
                .fb-block-${ blockId }.fb-slider-container .swiper-button-prev{
                    ${arrowSpaceFromEdges.Mobile ? `left: ${arrowSpaceFromEdges.Mobile}${arrowSpaceFromEdgesUnits.Mobile};` : ''}
                }
                {/* Arrow Space From Edges Next */}
                .fb-block-${ blockId }.fb-slider-container .swiper-button-next{
                    ${arrowSpaceFromEdges.Mobile ? `right: ${arrowSpaceFromEdges.Mobile}${arrowSpaceFromEdgesUnits.Mobile};` : ''}
                }
                {/* Dots Space From Top */}
                .fb-block-${ blockId }.fb-slider-container .swiper-pagination{
                    ${dotsSpacingFromTop.Mobile ? `bottom: ${dotsSpacingFromTop.Mobile}${dotsSpacingFromTopUnits.Mobile};` : ''}
                }
            }
    `, [
        blockId,
        sliderArrowColor,
        sliderArrowHoverColor,
        sliderArrowBgColor,
        sliderArrowBgHoverColor,
        arrowSize,
        arrowSizeUnits,
        arrowSpaceFromEdges,
        arrowSpaceFromEdgesUnits,
        arrowBorder,
        arrowBorderColor,
        arrowDesktopBorderWidth,
        arrowTabletBorderWidth,
        arrowMobileBorderWidth,
        arrowDesktopBorderRadiusWidth,
        arrowTabletBorderRadiusWidth,
        arrowMobileBorderRadiusWidth,
        arrowDesktopPaddingWidth,
        arrowTabletPaddingWidth,
        arrowMobilePaddingWidth,
        arrowDesktopMarginWidth,
        arrowTabletMarginWidth,
        arrowMobileMarginWidth,
        dotsSpacingFromTop,
        dotsSpacingFromTopUnits,
        arrowGlobalBgHoverColor,
        arrowGlobalBorderHoverColor,
        arrowGlobalBoxShadowHoverCssValue,
        arrowGlobalZIndex,
        arrowGlobalBgColor,
        globalDesktopPadding,
        globalDesktopMargin,
        arrowGlobalBorder,
        globalDesktopBorderWidth,
        globalDesktopBorderRadiusWidth,
        arrowGlobalBorderColor,
        arrowGlobalBoxShadowCssValue
    ]);

    useEffect(() => {
    setAttributes({blockStyle: `${sliderBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [sliderBlockStyle]);

    const editorStyle = sliderBlockStyle.replace(/\s+/g, ' ').trim();


    return (
        <>
            <style>
                {editorStyle}
            </style>

            <InspectorControls>
                <div className="fb-inspector-control">
                    <TabPanel
                        className="fb-parent-tab-panel"
                        activeClass="active-tab"
                        tabs={[
                            { name: "general", title: __("General", "frontis-blocks"), className: "fb-tab general" },
                            { name: "styles", title: __("Style", "frontis-blocks"), className: "fb-tab styles" },
                            { name: "advanced", title: __("Advanced", "frontis-blocks"), className: "fb-tab advanced" },
                        ]}
                    >
                        {(tab) => (
                            <div className={`fb-tab-controls ${tab.name}`}>
                                {tab.name === "general" && (
                                    <>
                                        <PanelBody title={__("Slider", "frontis-blocks")} initialOpen>
                                            <ToggleControl
                                                label={ __( 'Autoplay', 'frontis-blocks' ) }
                                                checked={ autoplay }
                                                onChange={ toggleAutoplay }
                                                help={ __(
                                                    "Above setting will only take effect once you are on the live page, and not while you're editing.",
                                                    'frontis-blocks'
                                                ) }
                                            />
                                            { autoplay === true && (
                                            <>
                                                <RangeControl
                                                    __nextHasNoMarginBottom
                                                    __next40pxDefaultSize
                                                    label={ __( 'Autoplay Speed (ms)', 'frontis-blocks' ) }
                                                    setAttributes={ setAttributes }
                                                    value={ autoplaySpeed }
                                                    onChange={ ( value ) => setAttributes( value ) }
                                                    min={ 0 }
                                                    max={ 15000 }
                                                />
                                            </>
                                            ) }
                                            <ToggleControl
                                            label={ __( 'Infinite Loop', 'frontis-blocks' ) }
                                            checked={ infiniteLoop }
                                            onChange={ toggleInfiniteLoop }
                                            help={ __(
                                                "Above setting will only take effect once you are on the live page, and not while you're editing.",
                                                'frontis-blocks'
                                            ) }
                                            />
                                            <SelectControl
                                                label={__("Transition Effect", "frontis-block")}
                                                value={transitionSwitcher}
                                                options={TRANSITION_EFFECTS}
                                                onChange={(value) =>
                                                    setAttributes({ transitionSwitcher: value })
                                                }
                                            />
                                            <RangeControl
                                                __nextHasNoMarginBottom
                                                __next40pxDefaultSize
                                                label={ __( 'Transition Speed (ms)', 'frontis-blocks' ) }
                                                setAttributes={ setAttributes }
                                                value={ '' }
                                                onChange={ ( value ) => setAttributes( value ) }
                                                min={ 0 }
                                                max={ 15000 }
                                            />
                                            <ToggleControl
                                            label={ __( 'Allow Touch Move?', 'frontis-blocks' ) }
                                            checked={ allowTouchMove }
                                            onChange={ toggleTouchMove }
                                            help={ __(
                                                "Above setting will only take effect once you are on the live page, and not while you're editing.",
                                                'frontis-blocks'
                                            ) }
                                            />
                                    </PanelBody>
                                    <PanelBody title={__("Navigation", "frontis-blocks")} initialOpen={false}>
                                        <ToggleControl
                                            label={ __( 'Arrows', 'frontis-blocks' ) }
                                            checked={ displayArrows }
                                            onChange={ toggleArrow }
                                            help={ __(
                                                "Above setting will only take effect once you are on the live page, and not while you're editing.",
                                                'frontis-blocks'
                                            ) }
                                        />
                                        <ToggleControl
                                            label={ __( 'Dots', 'frontis-blocks' ) }
                                            checked={ displayDots }
                                            onChange={ toggleDots }
                                            help={ __(
                                                "Above setting will only take effect once you are on the live page, and not while you're editing.",
                                                'frontis-blocks'
                                            ) }
                                        />
                                    </PanelBody>
                                    </>
                                    
                                )}

                                {tab.name === "styles" && (
                                    <>
                                    <PanelBody title={__("Arrows", "frontis-blocks")} initialOpen>
                                        <FB_SwitcherControl
                                            label={__("Color", "frontis-blocks")}
                                            globalSwitcher={sliderArrowColorSwitcher}
                                            setGlobalSwitcher={(value) => setAttributes({ sliderArrowColorSwitcher: value })}
                                        />

                                        {sliderArrowColorSwitcher === 'normal' && (
                                            <FB_ColorControl
                                                label={__("Normal Color", "frontis-blocks")}
                                                globalColor={sliderArrowColor}
                                                setGlobalColor={(value) => setAttributes({ sliderArrowColor: value })}
                                            />
                                        )}

                                        {sliderArrowColorSwitcher === 'hover' && (
                                            <FB_ColorControl
                                                label={__("Hover Color", "frontis-blocks")}
                                                globalColor={sliderArrowHoverColor}
                                                setGlobalColor={(value) => setAttributes({ sliderArrowHoverColor: value })}
                                            />
                                        )}

                                        {/* Background Color */}
                                        <FB_SwitcherControl
                                            label={__("Background Color", "frontis-blocks")}
                                            globalSwitcher={sliderArrowBgColorSwitcher}
                                            setGlobalSwitcher={(value) => setAttributes({ sliderArrowBgColorSwitcher: value })}
                                        />

                                        {sliderArrowBgColorSwitcher === 'normal' && (
                                            <FB_ColorControl
                                                label={__("Normal Color", "frontis-blocks")}
                                                globalColor={sliderArrowBgColor}
                                                setGlobalColor={(value) => setAttributes({ sliderArrowBgColor: value })}
                                            />
                                        )}

                                        {sliderArrowBgColorSwitcher === 'hover' && (
                                            <FB_ColorControl
                                                label={__("Hover Color", "frontis-blocks")}
                                                globalColor={sliderArrowBgHoverColor}
                                                setGlobalColor={(value) => setAttributes({ sliderArrowBgHoverColor: value })}
                                            />
                                        )}
                                        {/* Arrow Size */}
                                        <FB_Range
                                            min={0}
                                            max={200}
                                            label={__("Size", "frontis-blocks")}
                                            rangeValue={arrowSize}
                                            onChangeHandler={(value) => setAttributes({ arrowSize: value })}
                                            rangeUnitHandler={(value) => setAttributes({ arrowSizeUnits: value })}
                                            deviceType={deviceType}
                                            units={arrowSizeUnits}
                                            setAttributes={setAttributes}
                                            rangeStep={1}
                                            resetFallbackValue={""}
                                        />
                                        <FB_Range
                                            min={-50}
                                            max={50}
                                            label={__("Space From Edges", "frontis-blocks")}
                                            rangeValue={arrowSpaceFromEdges}
                                            onChangeHandler={(value) => setAttributes({ arrowSpaceFromEdges: value })}
                                            rangeUnitHandler={(value) => setAttributes({ arrowSpaceFromEdgesUnits: value })}
                                            deviceType={deviceType}
                                            units={arrowSpaceFromEdgesUnits}
                                            setAttributes={setAttributes}
                                            rangeStep={1}
                                            resetFallbackValue={""}
                                        />
                                        {/* Spacing */}
                                        <FB_Spacing
                                            label={__("Padding", "frontis-blocks")}
                                            deviceType={deviceType}
                                            spacingUnitsHandler={arrowPaddingUnitsHandler}
                                            spacingUnits={arrowPaddingUnits}
                                            spacingDesktop={arrowDesktopPadding}
                                            spacingTablet={arrowTabPadding}
                                            spacingMobile={arrowMobilePadding}
                                            handleSpacingUnitHandler={arrowPaddingUnitsChange}
                                            spacingCombineBtn={arrowPaddingLink}
                                            spacingCombineBtnHandler={arrowPaddingLinkBtn}
                                            setAttributes={setAttributes}
                                        />
                                        <FB_Spacing
                                            label={__("Margin", "frontis-blocks")}
                                            deviceType={deviceType}
                                            spacingUnitsHandler={arrowMarginUnitsHandler}
                                            spacingUnits={arrowMarginUnits}
                                            spacingDesktop={arrowDesktopMargin}
                                            spacingTablet={arrowTabMargin}
                                            spacingMobile={arrowMobileMargin}
                                            handleSpacingUnitHandler={arrowMarginUnitsChange}
                                            spacingCombineBtn={arrowMarginLink}
                                            spacingCombineBtnHandler={arrowMarginLinkBtn}
                                            setAttributes={setAttributes}
                                        />

                                        {/* Border, Border Radius */}
                                        <SelectControl
                                            label={__("Border Style", "frontis-blocks")}
                                            value={arrowBorder}
                                            options={BORDER_STYLES}
                                            onChange={(value) => setAttributes({ arrowBorder: value })}
                                        />

                                        <FB_SwitcherControl
                                            label={__("Border Color", "frontis-blocks")}
                                            globalSwitcher={arrowBorderColorSwitcher}
                                            setGlobalSwitcher={(value) => setAttributes({ arrowBorderColorSwitcher: value })}
                                        />

                                        {arrowBorderColorSwitcher === 'normal' && (
                                            <FB_ColorControl
                                                label={__("Normal Color", "frontis-blocks")}
                                                globalColor={arrowBorderColor}
                                                setGlobalColor={(value) => setAttributes({ arrowBorderColor: value })}
                                            />
                                        )}

                                        {arrowBorderColorSwitcher === 'hover' && (
                                            <FB_ColorControl
                                                label={__("Hover Color", "frontis-blocks")}
                                                globalColor={arrowBorderHoverColor}
                                                setGlobalColor={(value) => setAttributes({ arrowBorderHoverColor: value })}
                                            />
                                        )}

                                        <FB_Spacing
                                            label={__("Border", "frontis-blocks")}
                                            deviceType={deviceType}
                                            spacingUnitsHandler={arrowBorderUnitsHandler}
                                            spacingUnits={arrowBorderUnits}
                                            spacingDesktop={arrowDesktopBorder}
                                            spacingTablet={arrowTabletBorder}
                                            spacingMobile={arrowMobileBorder}
                                            handleSpacingUnitHandler={arrowBorderUnitsChange}
                                            spacingCombineBtn={arrowBorderLink}
                                            spacingCombineBtnHandler={arrowBorderLinkBtn}
                                            setAttributes={setAttributes}
                                        />

                                        <FB_Spacing
                                            label={__("Border Radius", "frontis-blocks")}
                                            deviceType={deviceType}
                                            spacingUnitsHandler={arrowBorderRadiusUnitsHandler}
                                            spacingUnits={arrowBorderRadiusUnits}
                                            spacingDesktop={arrowDesktopBorderRadius}
                                            spacingTablet={arrowTabletBorderRadius}
                                            spacingMobile={arrowMobileBorderRadius}
                                            handleSpacingUnitHandler={arrowBorderRadiusUnitsChange}
                                            spacingCombineBtn={arrowBorderRadiusLink}
                                            spacingCombineBtnHandler={arrowBorderRadiusLinkBtn}
                                            setAttributes={setAttributes}
                                        />

                                    </PanelBody>
                                    <PanelBody title={__("Dots", "frontis-blocks")} initialOpen>
                                        <FB_Range
                                            min={-100}
                                            max={100}
                                            label={__("Spacing From Top", "frontis-blocks")}
                                            rangeValue={dotsSpacingFromTop}
                                            onChangeHandler={(value) => setAttributes({ dotsSpacingFromTop: value })}
                                            rangeUnitHandler={(value) => setAttributes({ dotsSpacingFromTopUnits: value })}
                                            deviceType={deviceType}
                                            units={dotsSpacingFromTopUnits}
                                            setAttributes={setAttributes}
                                            rangeStep={1}
                                            resetFallbackValue={""}
                                        />
                                    </PanelBody>
                                    </>
                                )}

                                {tab.name === "advanced" && (
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
                                                        rangeValue={arrowGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({ arrowGlobalZIndex: value === 0 ? undefined : value })}
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
                                                        spacingUnits={arrowGlobalPaddingUnits}
                                                        spacingDesktop={arrowGlobalPaddingDesktop}
                                                        spacingTablet={arrowGlobalPaddingTablet}
                                                        spacingMobile={arrowGlobalPaddingMobile}
                                                        handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                                                        spacingCombineBtn={arrowGlobalPaddingLink}
                                                        spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
                                                    <FB_Spacing
                                                        label={__("Margin", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                                                        spacingUnits={arrowGlobalMarginUnits}
                                                        spacingDesktop={arrowGlobalMarginDesktop}
                                                        spacingTablet={arrowGlobalMarginTablet}
                                                        spacingMobile={arrowGlobalMarginMobile}
                                                        handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                                                        spacingCombineBtn={arrowGlobalMarginLink}
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
                                                        globalSwitcher={arrowGlobalBgColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ arrowGlobalBgColorSwitcher: value })}
                                                    />

                                                    {arrowGlobalBgColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Normal Color", "frontis-blocks")}
                                                            globalColor={arrowGlobalBgColor}
                                                            setGlobalColor={(value) => setAttributes({ arrowGlobalBgColor: value })}
                                                        />
                                                    )}

                                                    {arrowGlobalBgColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={arrowGlobalBgHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ arrowGlobalBgHoverColor: value })}
                                                        />
                                                    )}
                                                </PanelBody>
                                                <PanelBody
                                                    title={__("Border and Shadow", "frontis-blocks")}
                                                    initialOpen={false}
                                                >

                                                    <SelectControl
                                                        label={__("Border Style", "frontis-blocks")}
                                                        value={arrowGlobalBorder}
                                                        options={BORDER_STYLES}
                                                        onChange={(value) => setAttributes({ arrowGlobalBorder: value })}
                                                    />

                                                    <FB_SwitcherControl
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalSwitcher={arrowGlobalBorderColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ arrowGlobalBorderColorSwitcher: value })}
                                                    />

                                                    {arrowGlobalBorderColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Normal Color", "frontis-blocks")}
                                                            globalColor={arrowGlobalBorderColor}
                                                            setGlobalColor={(value) => setAttributes({ arrowGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {arrowGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={arrowGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ arrowGlobalBorderHoverColor: value })}
                                                        />
                                                    )}

                                                    <FB_Spacing
                                                        label={__("Border", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                                                        spacingUnits={arrowGlobalBorderUnits}
                                                        spacingDesktop={arrowGlobalBorderDesktop}
                                                        spacingTablet={arrowGlobalBorderTablet}
                                                        spacingMobile={arrowGlobalBorderMobile}
                                                        handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                                                        spacingCombineBtn={arrowGlobalBorderLink}
                                                        spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_Spacing
                                                        label={__("Border Radius", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                                                        spacingUnits={arrowGlobalBorderRadiusUnits}
                                                        spacingDesktop={arrowGlobalBorderRadiusDesktop}
                                                        spacingTablet={arrowGlobalBorderRadiusTablet}
                                                        spacingMobile={arrowGlobalBorderRadiusMobile}
                                                        handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                                                        spacingCombineBtn={arrowGlobalBorderRadiusLink}
                                                        spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_SwitcherControl
                                                        label={__("Box Shadow", "frontis-blocks")}
                                                        globalSwitcher={arrowGlobalBoxShadowSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ arrowGlobalBoxShadowSwitcher: value })}
                                                    />

                                                    {arrowGlobalBoxShadowSwitcher === 'normal' && (
                                                        <FB_BoxShadowControl
                                                            label={__("Normal Shadow", "frontis-blocks")}
                                                            onBoxShadowChange={(value) => setAttributes({ arrowGlobalBoxShadowValues: value })}
                                                            initialShadowValue={arrowGlobalBoxShadowValues}
                                                            onBoxShadowStyleChange={(value) => setAttributes({ arrowGlobalBoxShadowCssValue: value })}
                                                        />
                                                    )}

                                                    {arrowGlobalBoxShadowSwitcher === 'hover' && (
                                                        <FB_BoxShadowControl
                                                            label={__("Hover Shadow", "frontis-blocks")}
                                                            onBoxShadowChange={(value) => setAttributes({ arrowGlobalBoxShadowHoverValues: value })}
                                                            initialShadowValue={arrowGlobalBoxShadowHoverValues}
                                                            onBoxShadowStyleChange={(value) => setAttributes({ arrowGlobalBoxShadowHoverCssValue: value })}
                                                        />
                                                    )}
                                                </PanelBody>
                                            </div>
                                        </div>
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>
        </>
    );
}
