import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { PanelBody, TabPanel, ToggleControl, RangeControl, SelectControl } from '@wordpress/components';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
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
        loop,
        slidePerView,
        spaceBetween,
        transitionSpeed,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
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
        sliderGlobalZIndex,
        
        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,

        sliderGlobalBgColorSwitcher,
        sliderGlobalBgNormalBackgroundType,
        sliderGlobalBgNormalClassicColor,
        sliderGlobalBgNormalGradientColor,
        sliderGlobalBgNormalCustomGradientSwitcher,
        sliderGlobalBgNormalCustomGradientInputValue,
        sliderGlobalBgHoverBackgroundType,
        sliderGlobalBgHoverClassicColor,
        sliderGlobalBgHoverGradientColor,
        sliderGlobalBgHoverCustomGradientSwitcher,
        sliderGlobalBgHoverCustomGradientInputValue,

        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,

        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue
        /** End Global Setting */

    } = attributes;
    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId) {
            setAttributes({ blockId: `fb-slider-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    // const toggleAutoplay = () => {
    //     setAttributes( { autoplay: ! autoplay } );
    // };
    // const toggleArrows = () => {
    //     setAttributes( { displayArrows: ! displayArrows } );
    // };
    // const toggleDots = () => {
    //     setAttributes( { displayDots: ! displayDots } );
    // };
    // const toggleInfinteLoop = () => {
    //     setAttributes( { loop: ! loop } );
    // };

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
        if ( sliderGlobalPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderGlobalPaddingMobile: {
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
                    setAttributes( {sliderGlobalPaddingDesktop: {...sliderGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderGlobalPaddingTablet: {...sliderGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderGlobalPaddingMobile: {...sliderGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {sliderGlobalPaddingLink: !sliderGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            sliderGlobalPaddingUnits: {
                ...sliderGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const sliderGlobalPaddingDesktopWidth = `${sliderGlobalPaddingDesktop.top}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.right}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.bottom}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.left}${sliderGlobalPaddingUnits.Desktop}`;
    const sliderGlobalPaddingTabletWidth = `${sliderGlobalPaddingTablet.top}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.right}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.bottom}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.left}${sliderGlobalPaddingUnits.Tablet}`;
    const sliderGlobalPaddingMobileWidth = `${sliderGlobalPaddingMobile.top}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.right}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.bottom}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.left}${sliderGlobalPaddingUnits.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderGlobalMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderGlobalMarginMobile: {
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
                    setAttributes( {sliderGlobalMarginDesktop: {...sliderGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderGlobalMarginTablet: {...sliderGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderGlobalMarginMobile: {...sliderGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {sliderGlobalMarginLink: !sliderGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            sliderGlobalMarginUnits: {
                ...sliderGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const sliderGlobalMarginDesktopWidth = `${sliderGlobalMarginDesktop.top}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.right}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.bottom}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.left}${sliderGlobalMarginUnits.Desktop}`;
    const sliderGlobalMarginTabletWidth = `${sliderGlobalMarginTablet.top}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.right}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.bottom}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.left}${sliderGlobalMarginUnits.Tablet}`;
    const sliderGlobalMarginMobileWidth = `${sliderGlobalMarginMobile.top}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.right}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.bottom}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.left}${sliderGlobalMarginUnits.Mobile}`;
    /** End Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderGlobalBorderMobile: {
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
                    setAttributes( {sliderGlobalBorderDesktop: {...sliderGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderGlobalBorderTablet: {...sliderGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderGlobalBorderMobile: {...sliderGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {sliderGlobalBorderLink: !sliderGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            sliderGlobalBorderUnits: {
                ...sliderGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const sliderGlobalBorderDesktopWidth = `${sliderGlobalBorderDesktop.top}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.right}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.bottom}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.left}${sliderGlobalBorderUnits.Desktop}`;
    const sliderGlobalBorderTabletWidth = `${sliderGlobalBorderTablet.top}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.right}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.bottom}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.left}${sliderGlobalBorderUnits.Tablet}`;
    const sliderGlobalBorderMobileWidth = `${sliderGlobalBorderMobile.top}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.right}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.bottom}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.left}${sliderGlobalBorderUnits.Mobile}`;
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderGlobalBorderRadiusMobile: {
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
                    setAttributes( {sliderGlobalBorderRadiusDesktop: {...sliderGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderGlobalBorderRadiusTablet: {...sliderGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderGlobalBorderRadiusMobile: {...sliderGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {sliderGlobalBorderRadiusLink: !sliderGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            sliderGlobalBorderRadiusUnits: {
                ...sliderGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */

    const sliderGlobalBorderRadiusDesktopWidth = `${sliderGlobalBorderRadiusDesktop.top}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.right}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.bottom}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.left}${sliderGlobalBorderRadiusUnits.Desktop}`;
    const sliderGlobalBorderRadiusTabletWidth = `${sliderGlobalBorderRadiusTablet.top}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.right}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.bottom}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.left}${sliderGlobalBorderRadiusUnits.Tablet}`;
    const sliderGlobalBorderRadiusMobileWidth = `${sliderGlobalBorderRadiusMobile.top}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.right}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.bottom}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.left}${sliderGlobalBorderRadiusUnits.Mobile}`;

    const sliderBlockStyle = useMemo(() => `
        .fb-block-${ blockId }.fb-slider-container{
            ${sliderGlobalZIndex.Desktop ? `z-index: ${sliderGlobalZIndex.Desktop};` : ''}
            ${sliderGlobalPaddingDesktopWidth ? `padding: ${sliderGlobalPaddingDesktopWidth};` : ''}
            ${sliderGlobalMarginDesktopWidth ? `margin: ${sliderGlobalMarginDesktopWidth};` : ''}
            ${sliderGlobalBorder ? `border: ${sliderGlobalBorder};` : ''}
            ${sliderGlobalBorderDesktopWidth ? `border-width: ${sliderGlobalBorderDesktopWidth};` : ''}
            ${sliderGlobalBorderRadiusDesktopWidth ? `border-radius: ${sliderGlobalBorderRadiusDesktopWidth};` : ''}
            ${sliderGlobalBorderColor ? `border-color: ${sliderGlobalBorderColor};` : ''}
            ${sliderGlobalBoxShadowCssValue ? `box-shadow: ${sliderGlobalBoxShadowCssValue};` : ''}
            ${sliderGlobalBgNormalBackgroundType === 'gradient' ? `  
                background: ${
                    sliderGlobalBgNormalCustomGradientSwitcher && sliderGlobalBgNormalCustomGradientInputValue 
                        ? sliderGlobalBgNormalCustomGradientInputValue 
                        : sliderGlobalBgNormalGradientColor || sliderGlobalBgNormalClassicColor
                };
            ` : `
                background: ${sliderGlobalBgNormalClassicColor};
            `}
            transition: all .3s ease-in-out;
            position: relative;
            box-sizing: border-box;
        }
        .fb-block-${ blockId }.fb-slider-container:hover{
            ${sliderGlobalBgHoverBackgroundType === 'gradient' ? `  
                background: ${
                    sliderGlobalBgHoverCustomGradientSwitcher && sliderGlobalBgHoverCustomGradientInputValue 
                        ? sliderGlobalBgHoverCustomGradientInputValue 
                        : sliderGlobalBgHoverGradientColor || sliderGlobalBgHoverClassicColor
                };
            ` : `
                background: ${sliderGlobalBgHoverClassicColor};
            `}
            ${sliderGlobalBorderHoverColor ? `border-color: ${sliderGlobalBorderHoverColor};` : ''}
            ${sliderGlobalBoxShadowHoverCssValue ? `box-shadow: ${sliderGlobalBoxShadowHoverCssValue};` : ''}
        }
        {/* Arrow Color* /}
        .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:after,
        .fb-block-${ blockId }.fb-slider-container .swiper-button-next:after{
            ${sliderArrowColor ? `color: ${sliderArrowColor};` : ''}
        }
        .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:hover:after,
        .fb-block-${ blockId }.fb-slider-container .swiper-button-next:hover:after {
            ${sliderArrowHoverColor ? `color: ${sliderArrowHoverColor};` : ''}
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
        {/*Arrow Size*/}
        .fb-block-${ blockId }.fb-slider-container .swiper-button-prev:after,
        .fb-block-${ blockId }.fb-slider-container .swiper-button-next:after{
            ${arrowSize.Desktop ? `font-size: ${arrowSize.Desktop}${arrowSizeUnits.Desktop};` : ''}
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
            .fb-block-${ blockId }.fb-slider-container{
                ${sliderGlobalZIndex.Desktop ? `z-index: ${sliderGlobalZIndex.Desktop};` : ''}
                ${sliderGlobalPaddingTabletWidth ? `padding: ${sliderGlobalPaddingTabletWidth};` : ''}
                ${sliderGlobalMarginTabletWidth ? `margin: ${sliderGlobalMarginTabletWidth};` : ''}
                ${sliderGlobalBorderTabletWidth ? `border-width: ${sliderGlobalBorderTabletWidth};` : ''}
                ${sliderGlobalBorderRadiusTabletWidth ? `border-radius: ${sliderGlobalBorderRadiusTabletWidth};` : ''}
                ${sliderGlobalBorder ? `border: ${sliderGlobalBorder};` : ''}
                ${sliderGlobalBorderColor ? `border-color: ${sliderGlobalBorderColor};` : ''}
                ${sliderGlobalBoxShadowCssValue ? `box-shadow: ${sliderGlobalBoxShadowCssValue};` : ''}
                ${sliderGlobalBgNormalBackgroundType === 'gradient' ? `  
                    background: ${
                        sliderGlobalBgNormalCustomGradientSwitcher && sliderGlobalBgNormalCustomGradientInputValue 
                            ? sliderGlobalBgNormalCustomGradientInputValue 
                            : sliderGlobalBgNormalGradientColor || sliderGlobalBgNormalClassicColor
                    };
                ` : `
                    background: ${sliderGlobalBgNormalClassicColor};
                `}
                transition: all .3s ease-in-out;
                position: relative;
                box-sizing: border-box;
            }
            .fb-block-${ blockId }.fb-slider-container:hover{
                ${sliderGlobalBgHoverBackgroundType === 'gradient' ? `  
                    background: ${
                        sliderGlobalBgHoverCustomGradientSwitcher && sliderGlobalBgHoverCustomGradientInputValue 
                            ? sliderGlobalBgHoverCustomGradientInputValue 
                            : sliderGlobalBgHoverGradientColor || sliderGlobalBgHoverClassicColor
                    };
                ` : `
                    background: ${sliderGlobalBgHoverClassicColor};
                `}
                ${sliderGlobalBorderHoverColor ? `border-color: ${sliderGlobalBorderHoverColor};` : ''}
                ${sliderGlobalBoxShadowHoverCssValue ? `box-shadow: ${sliderGlobalBoxShadowHoverCssValue};` : ''}
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
            .fb-block-${ blockId }.fb-slider-container{
                ${sliderGlobalZIndex.Desktop ? `z-index: ${sliderGlobalZIndex.Desktop};` : ''}
                ${sliderGlobalPaddingMobileWidth ? `padding: ${sliderGlobalPaddingMobileWidth};` : ''}
                ${sliderGlobalMarginMobileWidth ? `margin: ${sliderGlobalMarginMobileWidth};` : ''}
                ${sliderGlobalBorderMobileWidth ? `border-width: ${sliderGlobalBorderMobileWidth};` : ''}
                ${sliderGlobalBorderRadiusMobileWidth ? `border-radius: ${sliderGlobalBorderRadiusMobileWidth};` : ''}
                ${sliderGlobalBorder ? `border: ${sliderGlobalBorder};` : ''}
                ${sliderGlobalBorderColor ? `border-color: ${sliderGlobalBorderColor};` : ''}
                ${sliderGlobalBoxShadowCssValue ? `box-shadow: ${sliderGlobalBoxShadowCssValue};` : ''}
                ${sliderGlobalBgNormalBackgroundType === 'gradient' ? `  
                    background: ${
                        sliderGlobalBgNormalCustomGradientSwitcher && sliderGlobalBgNormalCustomGradientInputValue 
                            ? sliderGlobalBgNormalCustomGradientInputValue 
                            : sliderGlobalBgNormalGradientColor || sliderGlobalBgNormalClassicColor
                    };
                ` : `
                    background: ${sliderGlobalBgNormalClassicColor};
                `}
                transition: all .3s ease-in-out;
                position: relative;
                box-sizing: border-box;
            }
            .fb-block-${ blockId }.fb-slider-container:hover{
                ${sliderGlobalBgHoverBackgroundType === 'gradient' ? `  
                    background: ${
                        sliderGlobalBgHoverCustomGradientSwitcher && sliderGlobalBgHoverCustomGradientInputValue 
                            ? sliderGlobalBgHoverCustomGradientInputValue 
                            : sliderGlobalBgHoverGradientColor || sliderGlobalBgHoverClassicColor
                    };
                ` : `
                    background: ${sliderGlobalBgHoverClassicColor};
                `}
                ${sliderGlobalBorderHoverColor ? `border-color: ${sliderGlobalBorderHoverColor};` : ''}
                ${sliderGlobalBoxShadowHoverCssValue ? `box-shadow: ${sliderGlobalBoxShadowHoverCssValue};` : ''}
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
        autoplay,
        autoplaySpeed,
        loop,
        allowTouchMove,
        displayArrows,
        displayDots,
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

        /** Global Settings */
        sliderGlobalZIndex,
        
        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,
        sliderGlobalPaddingDesktopWidth,
        sliderGlobalPaddingTabletWidth,
        sliderGlobalPaddingMobileWidth,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,
        sliderGlobalMarginDesktopWidth,
        sliderGlobalMarginTabletWidth,
        sliderGlobalMarginMobileWidth,

        sliderGlobalBgColorSwitcher,
        sliderGlobalBgNormalBackgroundType,
        sliderGlobalBgNormalClassicColor,
        sliderGlobalBgNormalGradientColor,
        sliderGlobalBgNormalCustomGradientSwitcher,
        sliderGlobalBgNormalCustomGradientInputValue,
        sliderGlobalBgHoverBackgroundType,
        sliderGlobalBgHoverClassicColor,
        sliderGlobalBgHoverGradientColor,
        sliderGlobalBgHoverCustomGradientSwitcher,
        sliderGlobalBgHoverCustomGradientInputValue,

        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,

        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,
        sliderGlobalBorderDesktopWidth,
        sliderGlobalBorderTabletWidth,
        sliderGlobalBorderMobileWidth,
        

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,
        sliderGlobalBorderRadiusDesktopWidth,
        sliderGlobalBorderRadiusTabletWidth,
        sliderGlobalBorderRadiusMobileWidth,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue
        /** End Global Setting */
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
                                    <PanelBody title={__("Slider Options", "frontis-blocks")} initialOpen>
                                        <ToggleControl
                                            label={ __( 'Enable Loop', 'frontis-blocks' ) }
                                            checked={ loop }
                                            onChange={(value) => setAttributes({ loop: value })}
                                        />
                                        <ToggleControl
                                            label={ __( 'Enable Allow TouchMove', 'frontis-blocks' ) }
                                            checked={ allowTouchMove }
                                            onChange={(value) => setAttributes({ allowTouchMove: value })}
                                        />
                                        <ToggleControl
                                            label={__("Pause on Hover", "frontis-blocks")}
                                            checked={pauseOnHover}
                                            onChange={(value) => setAttributes({ pauseOnHover: value })}
                                        />
                                        <ToggleControl
                                            label={__("Stop on Last Slide", "frontis-blocks")}
                                            checked={stopOnLastSlide}
                                            onChange={(value) => {
                                                setAttributes({ stopOnLastSlide: value });
                                                if (value) {
                                                    setAttributes({ loop: false });
                                                }
                                            }}
                                        />
                                        <ToggleControl
                                            label={__("Reverse Direction", "frontis-blocks")}
                                            checked={reverseDirection}
                                            onChange={(value) => setAttributes({ reverseDirection: value })}
                                        />
                                        <ToggleControl
                                            label={__("Enable Mouse Wheel", "frontis-blocks")}
                                            checked={enableMouseWheel}
                                            onChange={(value) => setAttributes({ enableMouseWheel: value })}
                                        />
                                        <ToggleControl
                                            label={ __( 'Enable Autoplay', 'frontis-blocks' ) }
                                            checked={ autoplay }
                                            onChange={(value) => setAttributes({ autoplay: value })}
                                        />
                                        { autoplay && (
                                        <RangeControl
                                            label={__('Autoplay Speed (ms)', 'frontis-blocks')}
                                            value={autoplaySpeed}
                                            onChange={(value) => setAttributes({ autoplaySpeed: value })}
                                            min={1000}
                                            max={10000}
                                            step={500}
                                            initialPosition={2000}
                                        />
                                        )}
                                        <RangeControl
                                             label={__("Transition Speed (ms)", "frontis-blocks")}
                                            value={transitionSpeed}
                                            onChange={(value) => setAttributes({ transitionSpeed: value })}
                                            min={100}
                                            max={3000}
                                            step={100}
                                            initialPosition={500}
                                        />
                                        <RangeControl
                                            label={__('Slide Per View', 'frontis-blocks')}
                                            value={slidePerView}
                                            onChange={(value) => setAttributes({ slidePerView: value })}
                                            min={1}
                                            max={10}
                                            step={1}
                                            initialPosition={1}
                                        />
                                        <RangeControl
                                            label={__('Space Between Slide', 'frontis-blocks')}
                                            value={spaceBetween}
                                            onChange={(value) => setAttributes({ spaceBetween: value })}
                                            min={0}
                                            max={200}
                                            step={1}
                                            initialPosition={1}
                                        />
                                    </PanelBody>
                                    <PanelBody title={__("Navigation", "frontis-blocks")} initialOpen={false}>
                                        <ToggleControl
                                            label={ __( 'Arrows', 'frontis-blocks' ) }
                                            checked={ displayArrows }
                                            onChange={(value) => setAttributes({ displayArrows: value })}
                                        />
                                        <ToggleControl
                                            label={ __( 'Dots', 'frontis-blocks' ) }
                                            checked={ displayDots }
                                            onChange={(value) => setAttributes({ displayDots: value })}
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
                                                    rangeValue={sliderGlobalZIndex}
                                                    onChangeHandler={(value) => setAttributes({ sliderGlobalZIndex: value === 0 ? undefined : value })}
                                                    deviceType={deviceType}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={""}
                                                    isRangeUnit={false}
                                                />
                                            </PanelBody>
                                            <PanelBody
                                                title={__("Background Color", "frontis-blocks")}
                                                initialOpen={false}
                                            >
                                                <FB_BackgroundColorControl
                                                    label={__("Background Color", "frontis-blocks")}
                                                    bgColorSwitcher={sliderGlobalBgColorSwitcher}
                                                    setBgColorSwitcher={(value) => setAttributes({ sliderGlobalBgColorSwitcher: value })}
                                                    
                                                    normalBackgroundType={sliderGlobalBgNormalBackgroundType}
                                                    setNormalBackgroundType={(value) => setAttributes({ sliderGlobalBgNormalBackgroundType: value })}
                                                    normalClassicColor={sliderGlobalBgNormalClassicColor}
                                                    setNormalClassicColor={(value) => setAttributes({ sliderGlobalBgNormalClassicColor: value })}
                                                    normalGradientColor={sliderGlobalBgNormalGradientColor}
                                                    setNormalGradientColor={(value) => setAttributes({ sliderGlobalBgNormalGradientColor: value })}
                                                    normalCustomGradientSwitcher={sliderGlobalBgNormalCustomGradientSwitcher}
                                                    setNormalCustomGradientSwitcher={(value) => setAttributes({ sliderGlobalBgNormalCustomGradientSwitcher: value })}
                                                    normalCustomGradientInputValue={sliderGlobalBgNormalCustomGradientInputValue}
                                                    setNormalCustomGradientInputValue={(value) => setAttributes({ sliderGlobalBgNormalCustomGradientInputValue: value })}
                                                    
                                                    hoverBackgroundType={sliderGlobalBgHoverBackgroundType}
                                                    setHoverBackgroundType={(value) => setAttributes({ sliderGlobalBgHoverBackgroundType: value })}
                                                    hoverClassicColor={sliderGlobalBgHoverClassicColor}
                                                    setHoverClassicColor={(value) => setAttributes({ sliderGlobalBgHoverClassicColor: value })}
                                                    hoverGradientColor={sliderGlobalBgHoverGradientColor}
                                                    setHoverGradientColor={(value) => setAttributes({ sliderGlobalBgHoverGradientColor: value })}
                                                    hoverCustomGradientSwitcher={sliderGlobalBgHoverCustomGradientSwitcher}
                                                    setHoverCustomGradientSwitcher={(value) => setAttributes({ sliderGlobalBgHoverCustomGradientSwitcher: value })}
                                                    hoverCustomGradientInputValue={sliderGlobalBgHoverCustomGradientInputValue}
                                                    setHoverCustomGradientInputValue={(value) => setAttributes({ sliderGlobalBgHoverCustomGradientInputValue: value })}

                                                    isBackgroundImage={false}
                                                />

                                            </PanelBody>

                                            <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                                                <FB_Spacing
                                                    label={__("Padding", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                                                    spacingUnits={sliderGlobalPaddingUnits}
                                                    spacingDesktop={sliderGlobalPaddingDesktop}
                                                    spacingTablet={sliderGlobalPaddingTablet}
                                                    spacingMobile={sliderGlobalPaddingMobile}
                                                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                                                    spacingCombineBtn={sliderGlobalPaddingLink}
                                                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                                <FB_Spacing
                                                    label={__("Margin", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                                                    spacingUnits={sliderGlobalMarginUnits}
                                                    spacingDesktop={sliderGlobalMarginDesktop}
                                                    spacingTablet={sliderGlobalMarginTablet}
                                                    spacingMobile={sliderGlobalMarginMobile}
                                                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                                                    spacingCombineBtn={sliderGlobalMarginLink}
                                                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                            </PanelBody>
                                            <PanelBody
                                                title={__("Border and Shadow", "frontis-blocks")}
                                                initialOpen={false}
                                            >

                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={sliderGlobalBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ sliderGlobalBorder: value })}
                                                />

                                                <FB_SwitcherControl
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalSwitcher={sliderGlobalBorderColorSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBorderColorSwitcher: value })}
                                                />

                                                {sliderGlobalBorderColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={sliderGlobalBorderColor}
                                                        setGlobalColor={(value) => setAttributes({ sliderGlobalBorderColor: value })}
                                                    />
                                                )}

                                                {sliderGlobalBorderColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={sliderGlobalBorderHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ sliderGlobalBorderHoverColor: value })}
                                                    />
                                                )}

                                                <FB_Spacing
                                                    label={__("Border", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                                                    spacingUnits={sliderGlobalBorderUnits}
                                                    spacingDesktop={sliderGlobalBorderDesktop}
                                                    spacingTablet={sliderGlobalBorderTablet}
                                                    spacingMobile={sliderGlobalBorderMobile}
                                                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                                                    spacingCombineBtn={sliderGlobalBorderLink}
                                                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_Spacing
                                                    label={__("Border Radius", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                                                    spacingUnits={sliderGlobalBorderRadiusUnits}
                                                    spacingDesktop={sliderGlobalBorderRadiusDesktop}
                                                    spacingTablet={sliderGlobalBorderRadiusTablet}
                                                    spacingMobile={sliderGlobalBorderRadiusMobile}
                                                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                                                    spacingCombineBtn={sliderGlobalBorderRadiusLink}
                                                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_SwitcherControl
                                                    label={__("Box Shadow", "frontis-blocks")}
                                                    globalSwitcher={sliderGlobalBoxShadowSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBoxShadowSwitcher: value })}
                                                />

                                                {sliderGlobalBoxShadowSwitcher === 'normal' && (
                                                    <FB_BoxShadowControl
                                                        label={__("Normal Shadow", "frontis-blocks")}
                                                        onBoxShadowChange={(value) => setAttributes({ sliderGlobalBoxShadowValues: value })}
                                                        initialShadowValue={sliderGlobalBoxShadowValues}
                                                        onBoxShadowStyleChange={(value) => setAttributes({ sliderGlobalBoxShadowCssValue: value })}
                                                    />
                                                )}

                                                {sliderGlobalBoxShadowSwitcher === 'hover' && (
                                                    <FB_BoxShadowControl
                                                        label={__("Hover Shadow", "frontis-blocks")}
                                                        onBoxShadowChange={(value) => setAttributes({ sliderGlobalBoxShadowHoverValues: value })}
                                                        initialShadowValue={sliderGlobalBoxShadowHoverValues}
                                                        onBoxShadowStyleChange={(value) => setAttributes({ sliderGlobalBoxShadowHoverCssValue: value })}
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