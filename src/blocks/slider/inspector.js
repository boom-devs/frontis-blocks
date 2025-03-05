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
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from '@Config/displayType';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';

import './editor.scss';

import {
    BORDER_STYLES,
    EFFECT_OPTIONS,
    OVERFLOW_OP,
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
        effect,
        displayArrows,
        displayDots,

        /** Global Settings */
        sliderGlobalZIndex,
        sliderOverflow,
        
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
        sliderGlobalBoxShadowHoverCssValue,
        /** End Global Setting */

        sliderDesktopSwitcher,
		sliderTabletSwitcher,
		sliderMobileSwitcher,

        sliderGlobalCustomCSS,
        sliderGlobalWraperClass,

        // Position
        sliderPositionType,
        sliderHZOrientationType,
        sliderVROrientationType,
        sliderHZLeftOffset,
        sliderHZLeftOffsetUnits,
        sliderHZRightOffset,
        sliderHZRightOffsetUnits,
        sliderVRTopOffset,
        sliderVRTopOffsetUnits,
        sliderVRBottomOffset,
        sliderVRBottomOffsetUnits,
    } = attributes;
    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId) {
            setAttributes({ blockId: `fb-slider-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

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
            ${sliderPositionType === 'default' ? `position: relative;` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' ? `width: 100%;` : ''}
            ${sliderPositionType !== 'default' ? `position: ${sliderPositionType};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset.Desktop !== undefined ? `left: ${sliderHZLeftOffset.Desktop}${sliderHZLeftOffsetUnits.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset.Desktop !== undefined ? `right: ${sliderHZRightOffset.Desktop}${sliderHZRightOffsetUnits.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset.Desktop !== undefined ? `top: ${sliderVRTopOffset.Desktop}${sliderVRTopOffsetUnits.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset.Desktop !== undefined ? `bottom: ${sliderVRBottomOffset.Desktop}${sliderVRBottomOffsetUnits.Desktop};` : ''}
            ${sliderGlobalZIndex.Desktop ? `z-index: ${sliderGlobalZIndex.Desktop};` : ''}
            ${sliderOverflow !== 'default' ? `overflow: ${sliderOverflow};` : ''}
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

        @media only screen and (max-width: 1024px) {
            .fb-block-${ blockId }.fb-slider-container{
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset.Tablet !== undefined ? `left: ${sliderHZLeftOffset.Tablet}${sliderHZLeftOffsetUnits.Tablet};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset.Tablet !== undefined ? `right: ${sliderHZRightOffset.Tablet}${sliderHZRightOffsetUnits.Tablet};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset.Tablet !== undefined ? `top: ${sliderVRTopOffset.Tablet}${sliderVRTopOffsetUnits.Tablet};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset.Tablet !== undefined ? `bottom: ${sliderVRBottomOffset.Tablet}${sliderVRBottomOffsetUnits.Tablet};` : ''}
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
        }
            
        @media only screen and (max-width: 767px) {
            .fb-block-${ blockId }.fb-slider-container{
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset.Mobile !== undefined ? `left: ${sliderHZLeftOffset.Mobile}${sliderHZLeftOffsetUnits.Mobile};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset.Mobile !== undefined ? `right: ${sliderHZRightOffset.Mobile}${sliderHZRightOffsetUnits.Mobile};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset.Mobile !== undefined ? `top: ${sliderVRTopOffset.Mobile}${sliderVRTopOffsetUnits.Mobile};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset.Mobile !== undefined ? `bottom: ${sliderVRBottomOffset.Mobile}${sliderVRBottomOffsetUnits.Mobile};` : ''} 
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
        }
            
           
    `, [
        blockId,

        /** Global Settings */
        sliderGlobalZIndex,
        sliderOverflow,
        
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
        sliderGlobalBoxShadowHoverCssValue,
        /** End Global Setting */

        // Position
        sliderPositionType,
        sliderHZOrientationType,
        sliderVROrientationType,
        sliderHZLeftOffset,
        sliderHZLeftOffsetUnits,
        sliderHZRightOffset,
        sliderHZRightOffsetUnits,
        sliderVRTopOffset,
        sliderVRTopOffsetUnits,
        sliderVRBottomOffset,
        sliderVRBottomOffsetUnits,
    ]);

    const customCss = getCustomCss(sliderGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${sliderBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [sliderBlockStyle, customCss]);

    const editorStyle = `${sliderBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();


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
                                    <PanelBody title={__("Effect", "frontis-blocks")} initialOpen={false}>
                                        <SelectControl
                                            label={__('Slide Effect', 'your-text-domain')}
                                            value={effect}
                                            options={EFFECT_OPTIONS}
                                            onChange={(value) => setAttributes({ effect: value })}
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
                                        styles
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

                                                    <SelectControl
                                                        label={__("Overflow", "frontis-blocks")}
                                                        value={sliderOverflow}
                                                        options={OVERFLOW_OP}
                                                        onChange={(value) => setAttributes({ sliderOverflow: value })}
                                                    />

                                                <FB_PositionControl
                                                    deviceType={deviceType}
                                                    positionType={sliderPositionType}
                                                    setPositionType={(value) => setAttributes({ sliderPositionType: value })}
                                                                                                    
                                                    HZOrientationType={sliderHZOrientationType}
                                                    setHZOrientationType={(value) =>
                                                        setAttributes({ sliderHZOrientationType: value })
                                                    }
                                                    VROrientationType={sliderVROrientationType}
                                                    setVROrientationType={(value) =>
                                                        setAttributes({ sliderVROrientationType: value })
                                                    }
                                                                                                        
                                                    HZLeftOffset={sliderHZLeftOffset}
                                                    setHZLeftOffset={(value) => setAttributes({ sliderHZLeftOffset: value })}
                                                    HZLeftOffsetUnits={sliderHZLeftOffsetUnits}
                                                    setHZLeftOffsetUnits={(value) => setAttributes({ sliderHZLeftOffsetUnits: value })}
                                                    HZRightOffset={sliderHZRightOffset}
                                                    setHZRightOffset={(value) => setAttributes({ sliderHZRightOffset: value })}
                                                    HZRightOffsetUnits={sliderHZRightOffsetUnits}
                                                    setHZRightOffsetUnits={(value) => setAttributes({ sliderHZRightOffsetUnits: value })}
                                                                                                    
                                                    VRTopOffset={sliderVRTopOffset}
                                                    setVRTopOffset={(value) => setAttributes({ sliderVRTopOffset: value })}
                                                    VRTopOffsetUnits={sliderVRTopOffsetUnits}
                                                    setVRTopOffsetUnits={(value) => setAttributes({ sliderVRTopOffsetUnits: value })}
                                                    VRBottomOffset={sliderVRBottomOffset}
                                                    setVRBottomOffset={(value) => setAttributes({ sliderVRBottomOffset: value })}
                                                    VRBottomOffsetUnits={sliderVRBottomOffsetUnits}
                                                    setVRBottomOffsetUnits={(value) => setAttributes({ sliderVRBottomOffsetUnits: value })}

                                                    setAttributes={setAttributes}
                                                />
                                                <FB_InputControl
                                                    label={__("CSS Class", "frontis-blocks")}
                                                    value={sliderGlobalWraperClass}
                                                    onChangeValue={(value) => setAttributes({ sliderGlobalWraperClass: value })}
                                                    helpText={__("Separate with spaces key.", "frontis-blocks")}
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

                                            <PanelBody
													title={__("Responsive Control", "frontis-blocks")}
													initialOpen={false}
													className="fb-setting-responsive-control-wrapper"
												>
                                                    <FB_VisibilityControl
                                                        desktopValue={sliderDesktopSwitcher}
                                                        setDesktopValue={(value) => setAttributes({ sliderDesktopSwitcher: value })}

                                                        tabletValue={sliderTabletSwitcher}
                                                        setTabletValue={(value) => setAttributes({ sliderTabletSwitcher: value })}

                                                        mobileValue={sliderMobileSwitcher}
                                                        setMobileValue={(value) => setAttributes({ sliderMobileSwitcher: value })}
                                                    />
											</PanelBody>

                                            <PanelBody
													title={__("Custom CSS", "frontis-blocks")}
													initialOpen={false}
												>
                                                    <FB_CustomCSSEditor  
                                                        value={sliderGlobalCustomCSS} 
                                                        onChangeValue={(value) => setAttributes({ sliderGlobalCustomCSS: value })}
                                                    />
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