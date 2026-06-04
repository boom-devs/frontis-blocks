import { __ } from '@wordpress/i18n';
import {
    BORDER_STYLES,
    SLIDER_EFFECT_OPTIONS,
    CAROUSEL_EFFECT_OPTIONS,
    OVERFLOW_OP,
    SLIDER_PAGINATION_TYPE,
    SLIDER_TYPE,
    SLIDER_ARROW_POSITION_TYPE,
    SLIDER_ARROW_POSITION,
    SLIDER_ARROW_DIRECTION,
    ARROW_ICON_ALIGN,
} from '@Constants/fbConstants';
import { useEffect, memo } from '@wordpress/element';
import { PanelBody, ToggleControl, RangeControl, SelectControl, BaseControl, ButtonGroup, Button } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_NormalActiveSwitcherControl from '@Components/switcher-normal-active-control';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from '@Config/displayType';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';
import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        blockID,
        sliderItems,
        blockStyle,
        autoplay,
        autoplaySpeed,
        loop,
        transitionSpeed,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        enableKeyboardNavigation,
        displayArrows,
        displayDots,
        paginationType,
        sliderHeight,
        sliderHeightUnits,
        sliderType,
        slideEffect,
        carouselEffect,
        carouselPerColumn,
        carouselPerColumnGap,
        carouselPerColumnGapUnits,

        /** Start Position */
        sliderArrowPositionType,
        sliderArrowPosition,
        sliderArrowDirection,
        sliderArrowGap,
        sliderArrowGapUnits,

        sliderArrowPositionTopOffset,
        sliderArrowPositionTopOffsetUnits,
        sliderArrowPositionLeftOffset,
        sliderArrowPositionLeftOffsetUnits,
        sliderArrowPositionRightOffset,
        sliderArrowPositionRightOffsetUnits,
        sliderArrowPositionBottomOffset,
        sliderArrowPositionBottomOffsetUnits,

        sliderArrowPositionOutsidePadding,
        sliderArrowPositionOutsidePaddingUnits,
        /** End Position */

        /** Slider Arrows Style */
        sliderArrowsIconSwitcher,

        sliderArrowsIconLeftAlign,
        sliderArrowsIconLeft,
        sliderArrowsIconLeftImageUrl,
        sliderArrowsIconLeftImageAlt,
        sliderArrowsIconLeftImageID,

        sliderArrowsIconRightAlign,
        sliderArrowsIconRight,
        sliderArrowsIconRightImageUrl,
        sliderArrowsIconRightImageAlt,
        sliderArrowsIconRightImageID,

        sliderArrowsSize,
        sliderArrowsSizeUnits,
        sliderArrowsColorSwitcher,
        sliderArrowsColor,
        sliderArrowsColorHover,

        sliderArrowsBgColorSwitcher,
        sliderArrowsBgColor,
        sliderArrowsBgColorHover,

        sliderArrowsWidth,
        sliderArrowsWidthUnits,
        sliderArrowsHeight,
        sliderArrowsHeightUnits,

        /** Border Settings */
        sliderArrowsBorder,
        sliderArrowsBorderColorSwitcher,
        sliderArrowsBorderColor,
        sliderArrowsBorderHoverColor,
        sliderArrowsBorderUnits,
        sliderArrowsBorderDesktop,
        sliderArrowsBorderTablet,
        sliderArrowsBorderMobile,
        sliderArrowsBorderLink,

        /** Border Radius */
        sliderArrowsBorderRadiusUnits,
        sliderArrowsBorderRadiusDesktop,
        sliderArrowsBorderRadiusTablet,
        sliderArrowsBorderRadiusMobile,
        sliderArrowsBorderRadiusLink,

        /** Box Shadow */
        sliderArrowsBoxShadowSwitcher,
        sliderArrowsBoxShadowValues,
        sliderArrowsBoxShadowCssValue,
        sliderArrowsBoxShadowHoverValues,
        sliderArrowsBoxShadowHoverCssValue,

        /** Dots Style */

        sliderDotsMarginUnits,
        sliderDotsMarginDesktop,
        sliderDotsMarginTablet,
        sliderDotsMarginMobile,
        sliderDotsMarginLink,

        sliderDotsPosition,
        sliderDotsPositionUnits,

        sliderDotsSwitcher,
        sliderNormalDotsBgColor,
        sliderNormalDotsWidth,
        sliderNormalDotsWidthUnits,
        sliderNormalDotsHeight,
        sliderNormalDotsHeightUnits,

        sliderNormalDotsBorder,
        sliderNormalDotsBorderColorSwitcher,
        sliderNormalDotsBorderColor,
        sliderNormalDotsBorderHoverColor,

        sliderNormalDotsBorderUnits,
        sliderNormalDotsBorderDesktop,
        sliderNormalDotsBorderTablet,
        sliderNormalDotsBorderMobile,
        sliderNormalDotsBorderLink,

        sliderNormalDotsBorderRadiusUnits,
        sliderNormalDotsBorderRadiusDesktop,
        sliderNormalDotsBorderRadiusTablet,
        sliderNormalDotsBorderRadiusMobile,
        sliderNormalDotsBorderRadiusLink,

        sliderActiveDotsBgColor,
        sliderActiveDotsWidth,
        sliderActiveDotsWidthUnits,
        sliderActiveDotsHeight,
        sliderActiveDotsHeightUnits,

        sliderActiveDotsBorder,
        sliderActiveDotsBorderColorSwitcher,
        sliderActiveDotsBorderColor,
        sliderActiveDotsBorderHoverColor,

        sliderActiveDotsBorderUnits,
        sliderActiveDotsBorderDesktop,
        sliderActiveDotsBorderTablet,
        sliderActiveDotsBorderMobile,
        sliderActiveDotsBorderLink,

        sliderActiveDotsBorderRadiusUnits,
        sliderActiveDotsBorderRadiusDesktop,
        sliderActiveDotsBorderRadiusTablet,
        sliderActiveDotsBorderRadiusMobile,
        sliderActiveDotsBorderRadiusLink,

        sliderFractionColorSwitcher,
        sliderFractionColor,
        sliderFractionHoverColor,

        sliderFractionGlobalTypographyData,
        sliderFractionGlobalTypoSwitcher,
        sliderFractionGlobalTypoType,
        sliderFractionGlobalTypoOption,

        sliderFractionFontFamily,
        sliderFractionFontSize,
        sliderFractionFontSizeUnits,
        sliderFractionFontWeight,
        sliderFractionFontStyle,
        sliderFractionTextTransform,
        sliderFractionTextDecoration,
        sliderFractionLetterSpacing,
        sliderFractionLetterSpacingUnits,
        sliderFractionLineHeight,
        sliderFractionLineHeightUnits,

        sliderProgressbarBGColorSwitcher,
        sliderProgressbarBGColor,
        sliderProgressbarBGActiveColor,
        sliderProgressbarHeight,
        sliderProgressbarHeightUnits,

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
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-slider-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const sliderArrowsIconLeftHandler = (IconName) => {
		setAttributes({sliderArrowsIconLeft: IconName})

	}
    const sliderArrowsIconRightHandler = (IconName) => {
		setAttributes({sliderArrowsIconRight: IconName})

	}

    /** Start Arrows border */
    const handleArrowsBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderArrowsBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderArrowsBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderArrowsBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderArrowsBorderMobile: {
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
                    setAttributes( {sliderArrowsBorderDesktop: {...sliderArrowsBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderArrowsBorderTablet: {...sliderArrowsBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderArrowsBorderMobile: {...sliderArrowsBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleArrowsBorderCombineBtn = () => {
        setAttributes( {sliderArrowsBorderLink: !sliderArrowsBorderLink} );
    }

    const handleArrowsBorderUnitsHandler = (unit) => {
        setAttributes( {
            sliderArrowsBorderUnits: {
                ...sliderArrowsBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Arrows border radius*/
    const handleArrowsBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderArrowsBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderArrowsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderArrowsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderArrowsBorderRadiusMobile: {
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
                    setAttributes( {sliderArrowsBorderRadiusDesktop: {...sliderArrowsBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderArrowsBorderRadiusTablet: {...sliderArrowsBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderArrowsBorderRadiusMobile: {...sliderArrowsBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleArrowsBorderRadiusCombineBtn = () => {
        setAttributes( {sliderArrowsBorderRadiusLink: !sliderArrowsBorderRadiusLink} );
    }

    const handleArrowsBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            sliderArrowsBorderRadiusUnits: {
                ...sliderArrowsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Arrows border radius */

    /** Start Dots Margin */
    const handleDotsMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderDotsMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderDotsMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderDotsMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderDotsMarginMobile: {
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
                    setAttributes( {sliderDotsMarginDesktop: {...sliderDotsMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderDotsMarginTablet: {...sliderDotsMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderDotsMarginMobile: {...sliderDotsMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleDotsMarginCombineBtn = () => {
        setAttributes( {sliderDotsMarginLink: !sliderDotsMarginLink} );
    }

    const handleDotsMarginUnitsHandler = (unit) => {
        setAttributes( {
            sliderDotsMarginUnits: {
                ...sliderDotsMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Dots Margin */

    /** Start Normal Dots border */
    const handleNormalDotsBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderNormalDotsBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderNormalDotsBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderNormalDotsBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderNormalDotsBorderMobile: {
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
                    setAttributes( {sliderNormalDotsBorderDesktop: {...sliderNormalDotsBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderNormalDotsBorderTablet: {...sliderNormalDotsBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderNormalDotsBorderMobile: {...sliderNormalDotsBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleNormalDotsBorderCombineBtn = () => {
        setAttributes( {sliderNormalDotsBorderLink: !sliderNormalDotsBorderLink} );
    }

    const handleNormalDotsBorderUnitsHandler = (unit) => {
        setAttributes( {
            sliderNormalDotsBorderUnits: {
                ...sliderNormalDotsBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Normal Dots border radius*/
    const handleNormalDotsBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderNormalDotsBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderNormalDotsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderNormalDotsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderNormalDotsBorderRadiusMobile: {
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
                    setAttributes( {sliderNormalDotsBorderRadiusDesktop: {...sliderNormalDotsBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderNormalDotsBorderRadiusTablet: {...sliderNormalDotsBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderNormalDotsBorderRadiusMobile: {...sliderNormalDotsBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleNormalDotsBorderRadiusCombineBtn = () => {
        setAttributes( {sliderNormalDotsBorderRadiusLink: !sliderNormalDotsBorderRadiusLink} );
    }

    const handleNormalDotsBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            sliderNormalDotsBorderRadiusUnits: {
                ...sliderNormalDotsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Normal Dots border radius */

    /** Start Active Dots border */
    const handleActiveDotsBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderActiveDotsBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderActiveDotsBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderActiveDotsBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderActiveDotsBorderMobile: {
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
                    setAttributes( {sliderActiveDotsBorderDesktop: {...sliderActiveDotsBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderActiveDotsBorderTablet: {...sliderActiveDotsBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderActiveDotsBorderMobile: {...sliderActiveDotsBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleActiveDotsBorderCombineBtn = () => {
        setAttributes( {sliderActiveDotsBorderLink: !sliderActiveDotsBorderLink} );
    }

    const handleActiveDotsBorderUnitsHandler = (unit) => {
        setAttributes( {
            sliderActiveDotsBorderUnits: {
                ...sliderActiveDotsBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Active Dots border radius*/
    const handleActiveDotsBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( sliderActiveDotsBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        sliderActiveDotsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        sliderActiveDotsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        sliderActiveDotsBorderRadiusMobile: {
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
                    setAttributes( {sliderActiveDotsBorderRadiusDesktop: {...sliderActiveDotsBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {sliderActiveDotsBorderRadiusTablet: {...sliderActiveDotsBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {sliderActiveDotsBorderRadiusMobile: {...sliderActiveDotsBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleActiveDotsBorderRadiusCombineBtn = () => {
        setAttributes( {sliderActiveDotsBorderRadiusLink: !sliderActiveDotsBorderRadiusLink} );
    }

    const handleActiveDotsBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            sliderActiveDotsBorderRadiusUnits: {
                ...sliderActiveDotsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Active Dots border radius */

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

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>

            <PanelBody title={__("Basic Settings", "frontis-blocks")} initialOpen={true}>

                <ToggleControl
                    label={ __( 'Show Navigation', 'frontis-blocks' ) }
                    checked={ displayArrows }
                    onChange={(value) => setAttributes({ displayArrows: value })}
                />
                <ToggleControl
                    label={ __( 'Show Pagination', 'frontis-blocks' ) }
                    checked={ displayDots }
                    onChange={(value) => setAttributes({ displayDots: value })}
                />
                <FB_Range
                    min={100}
                    max={1000}
                    label={__("Minimum Height", "frontis-blocks")}
                    rangeValue={sliderHeight}
                    onChangeHandler={(value) => setAttributes({ sliderHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ sliderHeightUnits: value })}
                    deviceType={deviceType}
                    units={sliderHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"350"}
                />
            </PanelBody>
            <PanelBody title={__("Slider Type", "frontis-blocks")} initialOpen={false}>
                <div className="fb-setting-switcher-container">
                    <BaseControl
                        label={__("Slider Type", "frontis-blocks")}
                        className="fb-setting-switcher-panel-wrapper"
                    >
                        <ButtonGroup className="fb-setting-switcher-panel-btn">
                            {SLIDER_TYPE.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ sliderType: item.value })}
                                    className={`fb-setting-switcher-panel-btn-switcher ${sliderType === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                </div>
            </PanelBody>

            {sliderType === 'carousel' && (
                <>
                <PanelBody title={__("Carousel Settings", "frontis-blocks")} initialOpen={false}>
                    <FB_Range
                        min={1}
                        max={10}
                        label={__("Number of Columns", "frontis-blocks")}
                        rangeValue={carouselPerColumn}
                        onChangeHandler={(value) => setAttributes({ carouselPerColumn: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                    <FB_Range
                        min={0}
                        max={200}
                        label={__("Column Gap", "frontis-blocks")}
                        rangeValue={carouselPerColumnGap}
                        onChangeHandler={(value) => setAttributes({ carouselPerColumnGap: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                </PanelBody>
                </>
            )}

            {sliderType === 'carousel' && (
                <PanelBody title={__("Carousel Effect", "frontis-blocks")} initialOpen={false}>
                    <SelectControl
                        label={__('Select Carousel Effect', 'frontis-blocks')}
                        value={carouselEffect}
                        options={CAROUSEL_EFFECT_OPTIONS}
                        onChange={(value) => setAttributes({ carouselEffect: value })}
                    />
                </PanelBody>
            )}

            {sliderType === 'slider' && (
                <PanelBody title={__("Slider Effect", "frontis-blocks")} initialOpen={false}>
                    <SelectControl
                        label={__('Select Slider Effect', 'frontis-blocks')}
                        value={slideEffect}
                        options={SLIDER_EFFECT_OPTIONS}
                        onChange={(value) => setAttributes({ slideEffect: value })}
                    />
                </PanelBody>
            )}

            <PanelBody title={__("Slider Options", "frontis-blocks")} initialOpen={false}>
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
                    label={__("Enable Keyboard Navigation", "frontis-blocks")}
                    checked={enableKeyboardNavigation}
                    onChange={(value) => setAttributes({ enableKeyboardNavigation: value })}
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
            </PanelBody>

            {displayArrows && (
                <PanelBody title={__("Navigation", "frontis-blocks")} initialOpen={false}>
                    <>
                        <ToggleControl
                            label={ __( 'Custom Icon', 'frontis-blocks' ) }
                            checked={ sliderArrowsIconSwitcher }
                            onChange={(value) => setAttributes({ sliderArrowsIconSwitcher: value })}
                        />

                        {sliderArrowsIconSwitcher && (
                            <>
                                <BaseControl
                                    label={__("Left Icon", "frontis-blocks")}
                                    className="fb-setting-switcher-panel-wrapper"
                                >
                                    <ButtonGroup
                                        className="fb-setting-text-alignment-group-btn"
                                    >
                                        {ARROW_ICON_ALIGN.map((item, key) => (
                                            <Button
                                                key={key}
                                                onClick={() => setAttributes({ sliderArrowsIconLeftAlign: item.value })}
                                                className={`fb-setting-text-alignment-single-btn ${sliderArrowsIconLeftAlign === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                    {sliderArrowsIconLeftAlign === 'icon' && (
                                        <FBIconPicker value={sliderArrowsIconLeft} setIconHandler={sliderArrowsIconLeftHandler} />
                                    )}

                                    {sliderArrowsIconLeftAlign === 'image' && (
                                        <FB_ImageControl
                                            globalImageUrl={sliderArrowsIconLeftImageUrl}
                                            setglobalImageUrl={(value) => setAttributes({ sliderArrowsIconLeftImageUrl: value })}
                                            globalImageAlt={sliderArrowsIconLeftImageAlt}
                                            setglobalImageAlt={(value) => setAttributes({ sliderArrowsIconLeftImageAlt: value })}
                                            globalImageID={sliderArrowsIconLeftImageID}
                                            setglobalImageID={(value) => setAttributes({ sliderArrowsIconLeftImageID: value })}
                                            isImageSize={false}
                                        />
                                    )}
                                </BaseControl>

                                <BaseControl
                                    label={__("Right Icon", "frontis-blocks")}
                                    className="fb-setting-switcher-panel-wrapper"
                                >
                                    <ButtonGroup
                                        className="fb-setting-text-alignment-group-btn"
                                    >
                                        {ARROW_ICON_ALIGN.map((item, key) => (
                                            <Button
                                                key={key}
                                                onClick={() => setAttributes({ sliderArrowsIconRightAlign: item.value })}
                                                className={`fb-setting-text-alignment-single-btn ${sliderArrowsIconRightAlign === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                    {sliderArrowsIconRightAlign === 'icon' && (
                                        <FBIconPicker value={sliderArrowsIconRight} setIconHandler={sliderArrowsIconRightHandler} />
                                    )}

                                    {sliderArrowsIconRightAlign === 'image' && (
                                        <FB_ImageControl
                                            globalImageUrl={sliderArrowsIconRightImageUrl}
                                            setglobalImageUrl={(value) => setAttributes({ sliderArrowsIconRightImageUrl: value })}
                                            globalImageAlt={sliderArrowsIconRightImageAlt}
                                            setglobalImageAlt={(value) => setAttributes({ sliderArrowsIconRightImageAlt: value })}
                                            globalImageID={sliderArrowsIconRightImageID}
                                            setglobalImageID={(value) => setAttributes({ sliderArrowsIconRightImageID: value })}
                                            isImageSize={false}
                                        />
                                    )}
                                </BaseControl>
                            </>
                        )}

                    <BaseControl
                        label={__("Position Type", "frontis-blocks")}
                    >
                        <ButtonGroup className="frontis-setting-switcher-panel-btn">
                            {SLIDER_ARROW_POSITION_TYPE.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ sliderArrowPositionType: item.value })}
                                    className={`frontis-setting-switcher-panel-btn-switcher ${sliderArrowPositionType === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                    <SelectControl
                        label={__("Position", "frontis-blocks")}
                        value={sliderArrowPosition}
                        options={SLIDER_ARROW_POSITION}
                        onChange={(value) => setAttributes({ sliderArrowPosition: value })}
                    />

                    {sliderArrowPosition !== 'center' && (

                        <SelectControl
                            label={__("Arrow Direction", "frontis-blocks")}
                            value={sliderArrowDirection}
                            options={SLIDER_ARROW_DIRECTION}
                            onChange={(value) => setAttributes({ sliderArrowDirection: value })}
                        />

                    )}

                    {sliderArrowPosition === 'top-left' && (
                        <>
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Top Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionTopOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionTopOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionTopOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionTopOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Left Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionLeftOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionLeftOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionLeftOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionLeftOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                        </>
                    )}
                    {sliderArrowPosition === 'top-center' && (
                        <>
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Top Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionTopOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionTopOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionTopOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionTopOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Left Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionLeftOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionLeftOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionLeftOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionLeftOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                        </>
                    )}

                    {sliderArrowPosition === 'top-right' && (
                        <>
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Top Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionTopOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionTopOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionTopOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionTopOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Right Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionRightOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionRightOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionRightOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionRightOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                        </>
                    )}

                    {sliderArrowPosition === 'bottom-left' && (
                        <>
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Bottom Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionBottomOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionBottomOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionBottomOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionBottomOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Left Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionLeftOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionLeftOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionLeftOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionLeftOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                        </>
                    )}
                    {sliderArrowPosition === 'bottom-center' && (
                        <>
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Bottom Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionBottomOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionBottomOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionBottomOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionBottomOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Left Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionLeftOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionLeftOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionLeftOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionLeftOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                        </>
                    )}

                    {sliderArrowPosition === 'bottom-right' && (
                        <>
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Bottom Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionBottomOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionBottomOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionBottomOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionBottomOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Right Offset", "frontis-blocks")}
                                rangeValue={sliderArrowPositionRightOffset}
                                onChangeHandler={(value) => setAttributes({ sliderArrowPositionRightOffset: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionRightOffsetUnits: value })}
                                deviceType={deviceType}
                                units={sliderArrowPositionRightOffsetUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"0"}
                            />
                        </>
                    )}

                    {sliderArrowPositionType === 'outside' && (

                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Padding", "frontis-blocks")}
                            rangeValue={sliderArrowPositionOutsidePadding}
                            onChangeHandler={(value) => setAttributes({ sliderArrowPositionOutsidePadding: value })}
                            rangeUnitHandler={(value) => setAttributes({ sliderArrowPositionOutsidePaddingUnits: value })}
                            deviceType={deviceType}
                            units={sliderArrowPositionOutsidePaddingUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                    )}
                    {sliderArrowPosition !== 'center' && (

                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Gap", "frontis-blocks")}
                            rangeValue={sliderArrowGap}
                            onChangeHandler={(value) => setAttributes({ sliderArrowGap: value })}
                            rangeUnitHandler={(value) => setAttributes({ sliderArrowGapUnits: value })}
                            deviceType={deviceType}
                            units={sliderArrowGapUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"10"}
                        />

                    )}
                    </>
                </PanelBody>
            )}

            {displayDots && (
                <PanelBody title={__("Pagination", "frontis-blocks")} initialOpen={false}>
                    <SelectControl
                        label={__('Pagination Type', 'frontis-blocks')}
                        value={paginationType}
                        options={SLIDER_PAGINATION_TYPE}
                        onChange={(value) => setAttributes({ paginationType: value })}
                    />
                </PanelBody>
            )}
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <> 
            {displayArrows && (
                <PanelBody title={__("Navigation Style", "frontis-blocks")} initialOpen={true}>
                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={sliderArrowsColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ sliderArrowsColorSwitcher: value })}
                    />

                    {sliderArrowsColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={sliderArrowsColor}
                            setGlobalColor={(value) => setAttributes({ sliderArrowsColor: value === undefined ? '' : value })}
                        />
                    )}
                    {sliderArrowsColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={sliderArrowsColorHover}
                            setGlobalColor={(value) => setAttributes({ sliderArrowsColorHover: value })}
                        />
                    )}

                    <FB_SwitcherControl
                        label={__("Background", "frontis-blocks")}
                        globalSwitcher={sliderArrowsBgColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ sliderArrowsBgColorSwitcher: value })}
                    />

                    {sliderArrowsBgColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={sliderArrowsBgColor}
                            setGlobalColor={(value) => setAttributes({ sliderArrowsBgColor: value === undefined ? '' : value })}
                        />
                    )}
                    {sliderArrowsBgColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={sliderArrowsBgColorHover}
                            setGlobalColor={(value) => setAttributes({ sliderArrowsBgColorHover: value })}
                        />
                    )}


                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={sliderArrowsSize}
                        onChangeHandler={(value) => setAttributes({ sliderArrowsSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ sliderArrowsSizeUnits: value })}
                        deviceType={deviceType}
                        units={sliderArrowsSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"16"}
                    />
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={sliderArrowsWidth}
                        onChangeHandler={(value) => setAttributes({ sliderArrowsWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ sliderArrowsWidthUnits: value })}
                        deviceType={deviceType}
                        units={sliderArrowsWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"46"}
                    />
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Height", "frontis-blocks")}
                        rangeValue={sliderArrowsHeight}
                        onChangeHandler={(value) => setAttributes({ sliderArrowsHeight: value })}
                        rangeUnitHandler={(value) => setAttributes({ sliderArrowsHeightUnits: value })}
                        deviceType={deviceType}
                        units={sliderArrowsHeightUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"46"}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={sliderArrowsBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ sliderArrowsBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={sliderArrowsBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ sliderArrowsBorderColorSwitcher: value })}
                    />

                    {sliderArrowsBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={sliderArrowsBorderColor}
                            setGlobalColor={(value) => setAttributes({ sliderArrowsBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {sliderArrowsBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={sliderArrowsBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ sliderArrowsBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleArrowsBorderUnitsHandler}
                        spacingUnits={sliderArrowsBorderUnits}
                        spacingDesktop={sliderArrowsBorderDesktop}
                        spacingTablet={sliderArrowsBorderTablet}
                        spacingMobile={sliderArrowsBorderMobile}
                        handleSpacingUnitHandler={handleArrowsBorderUnitChange}
                        spacingCombineBtn={sliderArrowsBorderLink}
                        spacingCombineBtnHandler={handleArrowsBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleArrowsBorderRadiusUnitsHandler}
                        spacingUnits={sliderArrowsBorderRadiusUnits}
                        spacingDesktop={sliderArrowsBorderRadiusDesktop}
                        spacingTablet={sliderArrowsBorderRadiusTablet}
                        spacingMobile={sliderArrowsBorderRadiusMobile}
                        handleSpacingUnitHandler={handleArrowsBorderRadiusUnitChange}
                        spacingCombineBtn={sliderArrowsBorderRadiusLink}
                        spacingCombineBtnHandler={handleArrowsBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Box Shadow", "frontis-blocks")}
                        globalSwitcher={sliderArrowsBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ sliderArrowsBoxShadowSwitcher: value })}
                    />

                    {sliderArrowsBoxShadowSwitcher === 'normal' && (
                        <FB_BoxShadowControl
                            label={__("Normal Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ sliderArrowsBoxShadowValues: value })}
                            initialShadowValue={sliderArrowsBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ sliderArrowsBoxShadowCssValue: value })}
                        />
                    )}

                    {sliderArrowsBoxShadowSwitcher === 'hover' && (
                        <FB_BoxShadowControl
                            label={__("Hover Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ sliderArrowsBoxShadowHoverValues: value })}
                            initialShadowValue={sliderArrowsBoxShadowHoverValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ sliderArrowsBoxShadowHoverCssValue: value })}
                        />
                    )}
                </PanelBody>
            )}
            {displayDots && (
                <PanelBody title={__("Pagination Style", "frontis-blocks")} initialOpen={false}>

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Position", "frontis-blocks")}
                        rangeValue={sliderDotsPosition}
                        onChangeHandler={(value) => setAttributes({ sliderDotsPosition: value })}
                        rangeUnitHandler={(value) => setAttributes({ sliderDotsPositionUnits: value })}
                        deviceType={deviceType}
                        units={sliderDotsPositionUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"0"}
                    />
                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleDotsMarginUnitsHandler}
                        spacingUnits={sliderDotsMarginUnits}
                        spacingDesktop={sliderDotsMarginDesktop}
                        spacingTablet={sliderDotsMarginTablet}
                        spacingMobile={sliderDotsMarginMobile}
                        handleSpacingUnitHandler={handleDotsMarginUnitChange}
                        spacingCombineBtn={sliderDotsMarginLink}
                        spacingCombineBtnHandler={handleDotsMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    {paginationType === 'bullets' && (
                        <>
                            <FB_NormalActiveSwitcherControl
                                label={__("Pagination Style", "frontis-blocks")}
                                globalSwitcher={sliderDotsSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ sliderDotsSwitcher: value })}
                            />

                            {sliderDotsSwitcher === 'normal' && (
                                <>
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Width", "frontis-blocks")}
                                        rangeValue={sliderNormalDotsWidth}
                                        onChangeHandler={(value) => setAttributes({ sliderNormalDotsWidth: value })}
                                        rangeUnitHandler={(value) => setAttributes({ sliderNormalDotsWidthUnits: value })}
                                        deviceType={deviceType}
                                        units={sliderNormalDotsWidthUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Height", "frontis-blocks")}
                                        rangeValue={sliderNormalDotsHeight}
                                        onChangeHandler={(value) => setAttributes({ sliderNormalDotsHeight: value })}
                                        rangeUnitHandler={(value) => setAttributes({ sliderNormalDotsHeightUnits: value })}
                                        deviceType={deviceType}
                                        units={sliderNormalDotsHeightUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_ColorControl
                                        label={__("Color", "frontis-blocks")}
                                        globalColor={sliderNormalDotsBgColor}
                                        setGlobalColor={(value) => setAttributes({ sliderNormalDotsBgColor: value === undefined ? '' : value })}
                                    />
                                    <SelectControl
                                        label={__("Border Style", "frontis-blocks")}
                                        value={sliderNormalDotsBorder}
                                        options={BORDER_STYLES}
                                        onChange={(value) => setAttributes({ sliderNormalDotsBorder: value })}
                                    />

                                    <FB_SwitcherControl
                                        label={__("Border Color", "frontis-blocks")}
                                        globalSwitcher={sliderNormalDotsBorderColorSwitcher}
                                        setGlobalSwitcher={(value) => setAttributes({ sliderNormalDotsBorderColorSwitcher: value })}
                                    />

                                    {sliderNormalDotsBorderColorSwitcher === 'normal' && (
                                        <FB_ColorControl
                                            label={__("Normal Color", "frontis-blocks")}
                                            globalColor={sliderNormalDotsBorderColor}
                                            setGlobalColor={(value) => setAttributes({ sliderNormalDotsBorderColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    {sliderArrowsBorderColorSwitcher === 'hover' && (
                                        <FB_ColorControl
                                            label={__("Hover Color", "frontis-blocks")}
                                            globalColor={sliderNormalDotsBorderHoverColor}
                                            setGlobalColor={(value) => setAttributes({ sliderNormalDotsBorderHoverColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    <FB_Spacing
                                        label={__("Border", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleNormalDotsBorderUnitsHandler}
                                        spacingUnits={sliderNormalDotsBorderUnits}
                                        spacingDesktop={sliderNormalDotsBorderDesktop}
                                        spacingTablet={sliderNormalDotsBorderTablet}
                                        spacingMobile={sliderNormalDotsBorderMobile}
                                        handleSpacingUnitHandler={handleNormalDotsBorderUnitChange}
                                        spacingCombineBtn={sliderNormalDotsBorderLink}
                                        spacingCombineBtnHandler={handleNormalDotsBorderCombineBtn}
                                        setAttributes={setAttributes}
                                    />

                                    <FB_Spacing
                                        label={__("Border Radius", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleNormalDotsBorderRadiusUnitsHandler}
                                        spacingUnits={sliderNormalDotsBorderRadiusUnits}
                                        spacingDesktop={sliderNormalDotsBorderRadiusDesktop}
                                        spacingTablet={sliderNormalDotsBorderRadiusTablet}
                                        spacingMobile={sliderNormalDotsBorderRadiusMobile}
                                        handleSpacingUnitHandler={handleNormalDotsBorderRadiusUnitChange}
                                        spacingCombineBtn={sliderNormalDotsBorderRadiusLink}
                                        spacingCombineBtnHandler={handleNormalDotsBorderRadiusCombineBtn}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}

                            {sliderDotsSwitcher === 'active' && (
                                <>
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Width", "frontis-blocks")}
                                        rangeValue={sliderActiveDotsWidth}
                                        onChangeHandler={(value) => setAttributes({ sliderActiveDotsWidth: value })}
                                        rangeUnitHandler={(value) => setAttributes({ sliderActiveDotsWidthUnits: value })}
                                        deviceType={deviceType}
                                        units={sliderActiveDotsWidthUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Height", "frontis-blocks")}
                                        rangeValue={sliderActiveDotsHeight}
                                        onChangeHandler={(value) => setAttributes({ sliderActiveDotsHeight: value })}
                                        rangeUnitHandler={(value) => setAttributes({ sliderActiveDotsHeightUnits: value })}
                                        deviceType={deviceType}
                                        units={sliderActiveDotsHeightUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_ColorControl
                                        label={__("Color", "frontis-blocks")}
                                        globalColor={sliderActiveDotsBgColor}
                                        setGlobalColor={(value) => setAttributes({ sliderActiveDotsBgColor: value === undefined ? '' : value })}
                                    />
                                    <SelectControl
                                        label={__("Border Style", "frontis-blocks")}
                                        value={sliderActiveDotsBorder}
                                        options={BORDER_STYLES}
                                        onChange={(value) => setAttributes({ sliderActiveDotsBorder: value })}
                                    />

                                    <FB_SwitcherControl
                                        label={__("Border Color", "frontis-blocks")}
                                        globalSwitcher={sliderActiveDotsBorderColorSwitcher}
                                        setGlobalSwitcher={(value) => setAttributes({ sliderActiveDotsBorderColorSwitcher: value })}
                                    />

                                    {sliderActiveDotsBorderColorSwitcher === 'normal' && (
                                        <FB_ColorControl
                                            label={__("Normal Color", "frontis-blocks")}
                                            globalColor={sliderActiveDotsBorderColor}
                                            setGlobalColor={(value) => setAttributes({ sliderActiveDotsBorderColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    {sliderActiveDotsBorderColorSwitcher === 'hover' && (
                                        <FB_ColorControl
                                            label={__("Hover Color", "frontis-blocks")}
                                            globalColor={sliderActiveDotsBorderHoverColor}
                                            setGlobalColor={(value) => setAttributes({ sliderActiveDotsBorderHoverColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    <FB_Spacing
                                        label={__("Border", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleActiveDotsBorderUnitsHandler}
                                        spacingUnits={sliderActiveDotsBorderUnits}
                                        spacingDesktop={sliderActiveDotsBorderDesktop}
                                        spacingTablet={sliderActiveDotsBorderTablet}
                                        spacingMobile={sliderActiveDotsBorderMobile}
                                        handleSpacingUnitHandler={handleActiveDotsBorderUnitChange}
                                        spacingCombineBtn={sliderActiveDotsBorderLink}
                                        spacingCombineBtnHandler={handleActiveDotsBorderCombineBtn}
                                        setAttributes={setAttributes}
                                    />

                                    <FB_Spacing
                                        label={__("Border Radius", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleActiveDotsBorderRadiusUnitsHandler}
                                        spacingUnits={sliderActiveDotsBorderRadiusUnits}
                                        spacingDesktop={sliderActiveDotsBorderRadiusDesktop}
                                        spacingTablet={sliderActiveDotsBorderRadiusTablet}
                                        spacingMobile={sliderActiveDotsBorderRadiusMobile}
                                        handleSpacingUnitHandler={handleActiveDotsBorderRadiusUnitChange}
                                        spacingCombineBtn={sliderActiveDotsBorderRadiusLink}
                                        spacingCombineBtnHandler={handleActiveDotsBorderRadiusCombineBtn}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}

                        </>
                    )}

                    {paginationType === 'fraction' && (
                        <>
                            <FB_SwitcherControl
                                label={__("Color", "frontis-blocks")}
                                globalSwitcher={sliderFractionColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ sliderFractionColorSwitcher: value })}
                            />

                            {sliderFractionColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={sliderFractionColor}
                                    setGlobalColor={(value) => setAttributes({ sliderFractionColor: value === undefined ? '' : value })}
                                />
                            )}

                            {sliderFractionColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={sliderFractionHoverColor}
                                    setGlobalColor={(value) => setAttributes({ sliderFractionHoverColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_TypographyControl
                                globalTypoControlActive={true}
                                globalTypoSwitcher={sliderFractionGlobalTypoSwitcher}
                                storeGlobalTypographyData={(value) => setAttributes({ sliderFractionGlobalTypographyData: value })}

                                globalTypoType={sliderFractionGlobalTypoType}
                                onChangeGlobalTypoType={(value) => {
                                    setAttributes({
                                        sliderFractionGlobalTypoType: value,
                                        sliderFractionGlobalTypoSwitcher: value === 'default' ? {...sliderFractionGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...sliderFractionGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                                    })
                                }}

                                globalTypoOption={sliderFractionGlobalTypoOption}
                                onChangeGlobalTypoOption={(value) => setAttributes({ sliderFractionGlobalTypoOption: value })}

                                fontFamily={sliderFractionFontFamily}
                                onChangeFontFamily={(value) => setAttributes({ sliderFractionFontFamily: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, fontFamily: value && false} })}

                                fontSize={sliderFractionFontSize}
                                onChangeFontSize={(value) => setAttributes({ sliderFractionFontSize: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, fontSize: value && false} })}

                                fontSizeUnits={sliderFractionFontSizeUnits}
                                onChangeFontSizeUnit={(value) => setAttributes({ sliderFractionFontSizeUnits: value })}

                                fontWeight={sliderFractionFontWeight}
                                onChangeFontWeight={(value) => setAttributes({ sliderFractionFontWeight: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, fontWeight: value && false} })}

                                fontStyle={sliderFractionFontStyle}
                                onChangeFontStyle={(value) => setAttributes({ sliderFractionFontStyle: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, fontStyle: value && false} })}

                                textTransform={sliderFractionTextTransform}
                                onChangeTextTransform={(value) => setAttributes({ sliderFractionTextTransform: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, textTransform: value && false} })}

                                textDecoration={sliderFractionTextDecoration}
                                onChangeTextDecoration={(value) => setAttributes({ sliderFractionTextDecoration: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, textDecoration: value && false} })}

                                letterSpacing={sliderFractionLetterSpacing}
                                onChangeLetterSpacing={(value) => setAttributes({ sliderFractionLetterSpacing: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, letterSpacing: value && false} })}

                                letterSpacingUnits={sliderFractionLetterSpacingUnits}
                                onChangeLetterSpacingUnit={(value) => setAttributes({ sliderFractionLetterSpacingUnits: value })}

                                lineHeight={sliderFractionLineHeight}
                                onChangeLineHeight={(value) => setAttributes({ sliderFractionLineHeight: value, sliderFractionGlobalTypoSwitcher: {...sliderFractionGlobalTypoSwitcher, lineHeight: value && false} })}

                                lineHeightUnits={sliderFractionLineHeightUnits}
                                onChangeLineHeightUnit={(value) => setAttributes({ sliderFractionLineHeightUnits: value })}

                                deviceType={deviceType}
                                setAttributes={setAttributes}
                            />
                        </>
                    )}

                    {paginationType === 'progressbar' && (
                        <>
                            <FB_NormalActiveSwitcherControl
                                label={__("Pagination Style", "frontis-blocks")}
                                globalSwitcher={sliderProgressbarBGColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ sliderProgressbarBGColorSwitcher: value })}
                            />
                            {sliderProgressbarBGColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={sliderProgressbarBGColor}
                                    setGlobalColor={(value) => setAttributes({ sliderProgressbarBGColor: value === undefined ? '' : value })}
                                />
                            )}
                            {sliderProgressbarBGColorSwitcher === 'active' && (
                                <FB_ColorControl
                                    label={__("Active Color", "frontis-blocks")}
                                    globalColor={sliderProgressbarBGActiveColor}
                                    setGlobalColor={(value) => setAttributes({ sliderProgressbarBGActiveColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Height", "frontis-blocks")}
                                rangeValue={sliderProgressbarHeight}
                                onChangeHandler={(value) => setAttributes({ sliderProgressbarHeight: value })}
                                rangeUnitHandler={(value) => setAttributes({ sliderProgressbarHeightUnits: value })}
                                deviceType={deviceType}
                                units={sliderProgressbarHeightUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"4"}
                            />
                        </>
                    )}

                </PanelBody>
            )}
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
                            setNormalClassicColor={(value) => setAttributes({ sliderGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={sliderGlobalBgNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ sliderGlobalBgNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={sliderGlobalBgNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ sliderGlobalBgNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={sliderGlobalBgNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ sliderGlobalBgNormalCustomGradientInputValue: value })}

                            hoverBackgroundType={sliderGlobalBgHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ sliderGlobalBgHoverBackgroundType: value })}
                            hoverClassicColor={sliderGlobalBgHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ sliderGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={sliderGlobalBgHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ sliderGlobalBgHoverGradientColor: value === undefined ? null : value })}
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
                                setGlobalColor={(value) => setAttributes({ sliderGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {sliderGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={sliderGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ sliderGlobalBorderHoverColor: value === undefined ? '' : value })}
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
		</>
	);

    return (

        <>
            {/* <style>
                {editorStyle}
            </style> */}

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />

        </>
    );
}
export default memo(Inspector);