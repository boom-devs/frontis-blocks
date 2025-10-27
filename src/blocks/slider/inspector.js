import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { PanelBody, TabPanel, ToggleControl, RangeControl, SelectControl, BaseControl, ButtonGroup, Button } from '@wordpress/components';
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
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from '@Config/displayType';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';


import './editor.scss';

import {
    BORDER_STYLES,
    EFFECT_OPTIONS,
    SLIDER_EFFECT_OPTIONS,
    CAROUSEL_EFFECT_OPTIONS,
    OVERFLOW_OP,
    PAGINATION_TYPE,
    SLIDER_TYPE,
    SLIDER_ARROW_POSITION_TYPE,
    SLIDER_ARROW_POSITION,
    SLIDER_ARROW_DIRECTION,
    ARROW_ICON_ALIGN,
} from "./constants/constants";

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
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
				blockId: "fb-slider-" + clientId.slice(0, 8),
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
    const sliderArrowsBorderDesktopWidth = `${sliderArrowsBorderDesktop?.top}${sliderArrowsBorderUnits?.Desktop} ${sliderArrowsBorderDesktop?.right}${sliderArrowsBorderUnits?.Desktop} ${sliderArrowsBorderDesktop?.bottom}${sliderArrowsBorderUnits?.Desktop} ${sliderArrowsBorderDesktop?.left}${sliderArrowsBorderUnits?.Desktop}`;
    const sliderArrowsBorderTabletWidth = `${sliderArrowsBorderTablet?.top}${sliderArrowsBorderUnits?.Tablet} ${sliderArrowsBorderTablet?.right}${sliderArrowsBorderUnits?.Tablet} ${sliderArrowsBorderTablet?.bottom}${sliderArrowsBorderUnits?.Tablet} ${sliderArrowsBorderTablet?.left}${sliderArrowsBorderUnits?.Tablet}`;
    const sliderArrowsBorderMobileWidth = `${sliderArrowsBorderMobile?.top}${sliderArrowsBorderUnits?.Mobile} ${sliderArrowsBorderMobile?.right}${sliderArrowsBorderUnits?.Mobile} ${sliderArrowsBorderMobile?.bottom}${sliderArrowsBorderUnits?.Mobile} ${sliderArrowsBorderMobile?.left}${sliderArrowsBorderUnits?.Mobile}`;
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

    const sliderArrowsBorderRadiusDesktopWidth = `${sliderArrowsBorderRadiusDesktop?.top}${sliderArrowsBorderRadiusUnits?.Desktop} ${sliderArrowsBorderRadiusDesktop?.right}${sliderArrowsBorderRadiusUnits?.Desktop} ${sliderArrowsBorderRadiusDesktop?.bottom}${sliderArrowsBorderRadiusUnits?.Desktop} ${sliderArrowsBorderRadiusDesktop?.left}${sliderArrowsBorderRadiusUnits?.Desktop}`;
    const sliderArrowsBorderRadiusTabletWidth = `${sliderArrowsBorderRadiusTablet?.top}${sliderArrowsBorderRadiusUnits?.Tablet} ${sliderArrowsBorderRadiusTablet?.right}${sliderArrowsBorderRadiusUnits?.Tablet} ${sliderArrowsBorderRadiusTablet?.bottom}${sliderArrowsBorderRadiusUnits?.Tablet} ${sliderArrowsBorderRadiusTablet?.left}${sliderArrowsBorderRadiusUnits?.Tablet}`;
    const sliderArrowsBorderRadiusMobileWidth = `${sliderArrowsBorderRadiusMobile?.top}${sliderArrowsBorderRadiusUnits?.Mobile} ${sliderArrowsBorderRadiusMobile?.right}${sliderArrowsBorderRadiusUnits?.Mobile} ${sliderArrowsBorderRadiusMobile?.bottom}${sliderArrowsBorderRadiusUnits?.Mobile} ${sliderArrowsBorderRadiusMobile?.left}${sliderArrowsBorderRadiusUnits?.Mobile}`;

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
    const sliderDotsMarginDesktopWidth = `${sliderDotsMarginDesktop?.top}${sliderDotsMarginUnits?.Desktop} ${sliderDotsMarginDesktop?.right}${sliderDotsMarginUnits?.Desktop} ${sliderDotsMarginDesktop?.bottom}${sliderDotsMarginUnits?.Desktop} ${sliderDotsMarginDesktop?.left}${sliderDotsMarginUnits?.Desktop}`;
    const sliderDotsMarginTabletWidth = `${sliderDotsMarginTablet?.top}${sliderDotsMarginUnits?.Tablet} ${sliderDotsMarginTablet?.right}${sliderDotsMarginUnits?.Tablet} ${sliderDotsMarginTablet?.bottom}${sliderDotsMarginUnits?.Tablet} ${sliderDotsMarginTablet?.left}${sliderDotsMarginUnits?.Tablet}`;
    const sliderDotsMarginMobileWidth = `${sliderDotsMarginMobile?.top}${sliderDotsMarginUnits?.Mobile} ${sliderDotsMarginMobile?.right}${sliderDotsMarginUnits?.Mobile} ${sliderDotsMarginMobile?.bottom}${sliderDotsMarginUnits?.Mobile} ${sliderDotsMarginMobile?.left}${sliderDotsMarginUnits?.Mobile}`;
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
    const sliderNormalDotsBorderDesktopWidth = `${sliderNormalDotsBorderDesktop?.top}${sliderNormalDotsBorderUnits?.Desktop} ${sliderNormalDotsBorderDesktop?.right}${sliderNormalDotsBorderUnits?.Desktop} ${sliderNormalDotsBorderDesktop?.bottom}${sliderNormalDotsBorderUnits?.Desktop} ${sliderNormalDotsBorderDesktop?.left}${sliderNormalDotsBorderUnits?.Desktop}`;
    const sliderNormalDotsBorderTabletWidth = `${sliderNormalDotsBorderTablet?.top}${sliderNormalDotsBorderUnits?.Tablet} ${sliderNormalDotsBorderTablet?.right}${sliderNormalDotsBorderUnits?.Tablet} ${sliderNormalDotsBorderTablet?.bottom}${sliderNormalDotsBorderUnits?.Tablet} ${sliderNormalDotsBorderTablet?.left}${sliderNormalDotsBorderUnits?.Tablet}`;
    const sliderNormalDotsBorderMobileWidth = `${sliderNormalDotsBorderMobile?.top}${sliderNormalDotsBorderUnits?.Mobile} ${sliderNormalDotsBorderMobile?.right}${sliderNormalDotsBorderUnits?.Mobile} ${sliderNormalDotsBorderMobile?.bottom}${sliderNormalDotsBorderUnits?.Mobile} ${sliderNormalDotsBorderMobile?.left}${sliderNormalDotsBorderUnits?.Mobile}`;
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

    const sliderNormalDotsBorderRadiusDesktopWidth = `${sliderNormalDotsBorderRadiusDesktop?.top}${sliderNormalDotsBorderRadiusUnits?.Desktop} ${sliderNormalDotsBorderRadiusDesktop?.right}${sliderNormalDotsBorderRadiusUnits?.Desktop} ${sliderNormalDotsBorderRadiusDesktop?.bottom}${sliderNormalDotsBorderRadiusUnits?.Desktop} ${sliderNormalDotsBorderRadiusDesktop?.left}${sliderNormalDotsBorderRadiusUnits?.Desktop}`;
    const sliderNormalDotsBorderRadiusTabletWidth = `${sliderNormalDotsBorderRadiusTablet?.top}${sliderNormalDotsBorderRadiusUnits?.Tablet} ${sliderNormalDotsBorderRadiusTablet?.right}${sliderNormalDotsBorderRadiusUnits?.Tablet} ${sliderNormalDotsBorderRadiusTablet?.bottom}${sliderNormalDotsBorderRadiusUnits?.Tablet} ${sliderNormalDotsBorderRadiusTablet?.left}${sliderNormalDotsBorderRadiusUnits?.Tablet}`;
    const sliderNormalDotsBorderRadiusMobileWidth = `${sliderNormalDotsBorderRadiusMobile?.top}${sliderNormalDotsBorderRadiusUnits?.Mobile} ${sliderNormalDotsBorderRadiusMobile?.right}${sliderNormalDotsBorderRadiusUnits?.Mobile} ${sliderNormalDotsBorderRadiusMobile?.bottom}${sliderNormalDotsBorderRadiusUnits?.Mobile} ${sliderNormalDotsBorderRadiusMobile?.left}${sliderNormalDotsBorderRadiusUnits?.Mobile}`;


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
    const sliderActiveDotsBorderDesktopWidth = `${sliderActiveDotsBorderDesktop?.top}${sliderActiveDotsBorderUnits?.Desktop} ${sliderActiveDotsBorderDesktop?.right}${sliderActiveDotsBorderUnits?.Desktop} ${sliderActiveDotsBorderDesktop?.bottom}${sliderActiveDotsBorderUnits?.Desktop} ${sliderActiveDotsBorderDesktop?.left}${sliderActiveDotsBorderUnits?.Desktop}`;
    const sliderActiveDotsBorderTabletWidth = `${sliderActiveDotsBorderTablet?.top}${sliderActiveDotsBorderUnits?.Tablet} ${sliderActiveDotsBorderTablet?.right}${sliderActiveDotsBorderUnits?.Tablet} ${sliderActiveDotsBorderTablet?.bottom}${sliderActiveDotsBorderUnits?.Tablet} ${sliderActiveDotsBorderTablet?.left}${sliderActiveDotsBorderUnits?.Tablet}`;
    const sliderActiveDotsBorderMobileWidth = `${sliderActiveDotsBorderMobile?.top}${sliderActiveDotsBorderUnits?.Mobile} ${sliderActiveDotsBorderMobile?.right}${sliderActiveDotsBorderUnits?.Mobile} ${sliderActiveDotsBorderMobile?.bottom}${sliderActiveDotsBorderUnits?.Mobile} ${sliderActiveDotsBorderMobile?.left}${sliderActiveDotsBorderUnits?.Mobile}`;
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

    const sliderActiveDotsBorderRadiusDesktopWidth = `${sliderActiveDotsBorderRadiusDesktop?.top}${sliderActiveDotsBorderRadiusUnits?.Desktop} ${sliderActiveDotsBorderRadiusDesktop?.right}${sliderActiveDotsBorderRadiusUnits?.Desktop} ${sliderActiveDotsBorderRadiusDesktop?.bottom}${sliderActiveDotsBorderRadiusUnits?.Desktop} ${sliderActiveDotsBorderRadiusDesktop?.left}${sliderActiveDotsBorderRadiusUnits?.Desktop}`;
    const sliderActiveDotsBorderRadiusTabletWidth = `${sliderActiveDotsBorderRadiusTablet?.top}${sliderActiveDotsBorderRadiusUnits?.Tablet} ${sliderActiveDotsBorderRadiusTablet?.right}${sliderActiveDotsBorderRadiusUnits?.Tablet} ${sliderActiveDotsBorderRadiusTablet?.bottom}${sliderActiveDotsBorderRadiusUnits?.Tablet} ${sliderActiveDotsBorderRadiusTablet?.left}${sliderActiveDotsBorderRadiusUnits?.Tablet}`;
    const sliderActiveDotsBorderRadiusMobileWidth = `${sliderActiveDotsBorderRadiusMobile?.top}${sliderActiveDotsBorderRadiusUnits?.Mobile} ${sliderActiveDotsBorderRadiusMobile?.right}${sliderActiveDotsBorderRadiusUnits?.Mobile} ${sliderActiveDotsBorderRadiusMobile?.bottom}${sliderActiveDotsBorderRadiusUnits?.Mobile} ${sliderActiveDotsBorderRadiusMobile?.left}${sliderActiveDotsBorderRadiusUnits?.Mobile}`;

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
    const sliderGlobalPaddingDesktopWidth = `${sliderGlobalPaddingDesktop?.top}${sliderGlobalPaddingUnits?.Desktop} ${sliderGlobalPaddingDesktop?.right}${sliderGlobalPaddingUnits?.Desktop} ${sliderGlobalPaddingDesktop?.bottom}${sliderGlobalPaddingUnits?.Desktop} ${sliderGlobalPaddingDesktop?.left}${sliderGlobalPaddingUnits?.Desktop}`;
    const sliderGlobalPaddingTabletWidth = `${sliderGlobalPaddingTablet?.top}${sliderGlobalPaddingUnits?.Tablet} ${sliderGlobalPaddingTablet?.right}${sliderGlobalPaddingUnits?.Tablet} ${sliderGlobalPaddingTablet?.bottom}${sliderGlobalPaddingUnits?.Tablet} ${sliderGlobalPaddingTablet?.left}${sliderGlobalPaddingUnits?.Tablet}`;
    const sliderGlobalPaddingMobileWidth = `${sliderGlobalPaddingMobile?.top}${sliderGlobalPaddingUnits?.Mobile} ${sliderGlobalPaddingMobile?.right}${sliderGlobalPaddingUnits?.Mobile} ${sliderGlobalPaddingMobile?.bottom}${sliderGlobalPaddingUnits?.Mobile} ${sliderGlobalPaddingMobile?.left}${sliderGlobalPaddingUnits?.Mobile}`;
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

    const sliderGlobalMarginDesktopWidth = `${sliderGlobalMarginDesktop?.top}${sliderGlobalMarginUnits?.Desktop} ${sliderGlobalMarginDesktop?.right}${sliderGlobalMarginUnits?.Desktop} ${sliderGlobalMarginDesktop?.bottom}${sliderGlobalMarginUnits?.Desktop} ${sliderGlobalMarginDesktop?.left}${sliderGlobalMarginUnits?.Desktop}`;
    const sliderGlobalMarginTabletWidth = `${sliderGlobalMarginTablet?.top}${sliderGlobalMarginUnits?.Tablet} ${sliderGlobalMarginTablet?.right}${sliderGlobalMarginUnits?.Tablet} ${sliderGlobalMarginTablet?.bottom}${sliderGlobalMarginUnits?.Tablet} ${sliderGlobalMarginTablet?.left}${sliderGlobalMarginUnits?.Tablet}`;
    const sliderGlobalMarginMobileWidth = `${sliderGlobalMarginMobile?.top}${sliderGlobalMarginUnits?.Mobile} ${sliderGlobalMarginMobile?.right}${sliderGlobalMarginUnits?.Mobile} ${sliderGlobalMarginMobile?.bottom}${sliderGlobalMarginUnits?.Mobile} ${sliderGlobalMarginMobile?.left}${sliderGlobalMarginUnits?.Mobile}`;
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
    const sliderGlobalBorderDesktopWidth = `${sliderGlobalBorderDesktop?.top}${sliderGlobalBorderUnits?.Desktop} ${sliderGlobalBorderDesktop?.right}${sliderGlobalBorderUnits?.Desktop} ${sliderGlobalBorderDesktop?.bottom}${sliderGlobalBorderUnits?.Desktop} ${sliderGlobalBorderDesktop?.left}${sliderGlobalBorderUnits?.Desktop}`;
    const sliderGlobalBorderTabletWidth = `${sliderGlobalBorderTablet?.top}${sliderGlobalBorderUnits?.Tablet} ${sliderGlobalBorderTablet?.right}${sliderGlobalBorderUnits?.Tablet} ${sliderGlobalBorderTablet?.bottom}${sliderGlobalBorderUnits?.Tablet} ${sliderGlobalBorderTablet?.left}${sliderGlobalBorderUnits?.Tablet}`;
    const sliderGlobalBorderMobileWidth = `${sliderGlobalBorderMobile?.top}${sliderGlobalBorderUnits?.Mobile} ${sliderGlobalBorderMobile?.right}${sliderGlobalBorderUnits?.Mobile} ${sliderGlobalBorderMobile?.bottom}${sliderGlobalBorderUnits?.Mobile} ${sliderGlobalBorderMobile?.left}${sliderGlobalBorderUnits?.Mobile}`;
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

    const sliderGlobalBorderRadiusDesktopWidth = `${sliderGlobalBorderRadiusDesktop?.top}${sliderGlobalBorderRadiusUnits?.Desktop} ${sliderGlobalBorderRadiusDesktop?.right}${sliderGlobalBorderRadiusUnits?.Desktop} ${sliderGlobalBorderRadiusDesktop?.bottom}${sliderGlobalBorderRadiusUnits?.Desktop} ${sliderGlobalBorderRadiusDesktop?.left}${sliderGlobalBorderRadiusUnits?.Desktop}`;
    const sliderGlobalBorderRadiusTabletWidth = `${sliderGlobalBorderRadiusTablet?.top}${sliderGlobalBorderRadiusUnits?.Tablet} ${sliderGlobalBorderRadiusTablet?.right}${sliderGlobalBorderRadiusUnits?.Tablet} ${sliderGlobalBorderRadiusTablet?.bottom}${sliderGlobalBorderRadiusUnits?.Tablet} ${sliderGlobalBorderRadiusTablet?.left}${sliderGlobalBorderRadiusUnits?.Tablet}`;
    const sliderGlobalBorderRadiusMobileWidth = `${sliderGlobalBorderRadiusMobile?.top}${sliderGlobalBorderRadiusUnits?.Mobile} ${sliderGlobalBorderRadiusMobile?.right}${sliderGlobalBorderRadiusUnits?.Mobile} ${sliderGlobalBorderRadiusMobile?.bottom}${sliderGlobalBorderRadiusUnits?.Mobile} ${sliderGlobalBorderRadiusMobile?.left}${sliderGlobalBorderRadiusUnits?.Mobile}`;

    const sliderBlockStyle = useMemo(() => `
        .${blockId}.fb-slider-container{
            ${sliderPositionType === 'default' ? `position: relative;` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' ? `width: 100%;` : ''}
            ${sliderPositionType !== 'default' ? `position: ${sliderPositionType};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset?.Desktop !== undefined ? `left: ${sliderHZLeftOffset?.Desktop}${sliderHZLeftOffsetUnits?.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset?.Desktop !== undefined ? `right: ${sliderHZRightOffset?.Desktop}${sliderHZRightOffsetUnits?.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset?.Desktop !== undefined ? `top: ${sliderVRTopOffset?.Desktop}${sliderVRTopOffsetUnits?.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset?.Desktop !== undefined ? `bottom: ${sliderVRBottomOffset?.Desktop}${sliderVRBottomOffsetUnits?.Desktop};` : ''}
            ${sliderGlobalZIndex?.Desktop ? `z-index: ${sliderGlobalZIndex?.Desktop};` : ''}
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
        .${blockId}.fb-slider-container:hover{
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
        .${blockId} .swiper-wrapper.fb-swiper-wrapper {
            align-items: center;
            ${sliderHeight?.Desktop ? `min-height: ${sliderHeight?.Desktop}${sliderHeightUnits?.Desktop};` : ''}
        }

        .${blockId}.fb-slider-container.outside {
            ${sliderArrowPosition === 'top-left' || sliderArrowPosition === 'top-center' || sliderArrowPosition === 'top-right' ? `
                padding: ${sliderArrowPositionOutsidePadding?.Desktop}${sliderArrowPositionOutsidePaddingUnits?.Desktop} 0 0;
            ` : ''}

            ${sliderArrowPosition === 'bottom-left' || sliderArrowPosition === 'bottom-center' || sliderArrowPosition === 'bottom-right' ? `
                padding: 0 0 ${sliderArrowPositionOutsidePadding?.Desktop}${sliderArrowPositionOutsidePaddingUnits?.Desktop};
            ` : ''}

            ${sliderArrowPosition === 'center' ? `
                padding: 0 ${sliderArrowPositionOutsidePadding?.Desktop}${sliderArrowPositionOutsidePaddingUnits?.Desktop};

            ` : ''}
        }

        ${sliderArrowPosition && sliderArrowPosition !== 'center' ? `

            .${blockId} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition},
            .${blockId} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: ${sliderArrowDirection};
                gap: ${sliderArrowGap?.Desktop}${sliderArrowGapUnits?.Desktop};
                position: absolute;
                z-index: 100;

                ${sliderArrowPosition === 'top-left' ? `
                    top: ${sliderArrowPositionTopOffset?.Desktop ? `${sliderArrowPositionTopOffset?.Desktop}${sliderArrowPositionTopOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderArrowPosition === 'top-center' ? `
                    top: ${sliderArrowPositionTopOffset?.Desktop ? `${sliderArrowPositionTopOffset?.Desktop}${sliderArrowPositionTopOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '50%'};
                    transform: translateX(-50%);
                ` : ''}

                ${sliderArrowPosition === 'top-right' ? `
                    top: ${sliderArrowPositionTopOffset?.Desktop ? `${sliderArrowPositionTopOffset?.Desktop}${sliderArrowPositionTopOffsetUnits?.Desktop}` : '0'};
                    right: ${sliderArrowPositionRightOffset?.Desktop ? `${sliderArrowPositionRightOffset?.Desktop}${sliderArrowPositionRightOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderArrowPosition === 'bottom-left' ? `
                    bottom: ${sliderArrowPositionBottomOffset?.Desktop ? `${sliderArrowPositionBottomOffset?.Desktop}${sliderArrowPositionBottomOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderArrowPosition === 'bottom-center' ? `
                    bottom: ${sliderArrowPositionBottomOffset?.Desktop ? `${sliderArrowPositionBottomOffset?.Desktop}${sliderArrowPositionBottomOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '50%'};
                    transform: translateX(-50%);
                ` : ''}

                ${sliderArrowPosition === 'bottom-right' ? `
                    bottom: ${sliderArrowPositionBottomOffset?.Desktop ? `${sliderArrowPositionBottomOffset?.Desktop}${sliderArrowPositionBottomOffsetUnits?.Desktop}` : '0'};
                    right: ${sliderArrowPositionRightOffset?.Desktop ? `${sliderArrowPositionRightOffset?.Desktop}${sliderArrowPositionRightOffsetUnits?.Desktop}` : '0'};
                ` : ''}
            }

            .${blockId} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-prev,
            .${blockId} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-next,
            .${blockId} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-prev,
            .${blockId} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-next {
                position: relative;
                top: auto;
                right: auto;
                bottom: auto;
                left: auto;
                margin: 0 !important;
            }
        ` : ''}

        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev:after,
        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next:after {
            display: none !important;
        }
        .${blockId} .swiper-button-prev,
        .${blockId} .swiper-button-next {
            ${sliderArrowsBorder ? `border: ${sliderArrowsBorder};` : ''}
            ${sliderArrowsBorderDesktopWidth && sliderArrowsBorderDesktop?.top ? `border-width: ${sliderArrowsBorderDesktopWidth};` : ''}
            ${sliderArrowsBorderRadiusDesktopWidth && sliderArrowsBorderRadiusDesktop?.top ? `border-radius: ${sliderArrowsBorderRadiusDesktopWidth};` : ''}
            ${sliderArrowsBorderColor ? `border-color: ${sliderArrowsBorderColor};` : ''}
            ${sliderArrowsBoxShadowCssValue ? `box-shadow: ${sliderArrowsBoxShadowCssValue};` : ''}
            ${sliderArrowsBgColor ? `background-color: ${sliderArrowsBgColor};` : ''}
            ${sliderArrowsColor ? `color: ${sliderArrowsColor};` : ''}
            ${sliderArrowsWidth?.Desktop ? `width: ${sliderArrowsWidth?.Desktop}${sliderArrowsWidthUnits?.Desktop};` : ''}
            ${sliderArrowsHeight?.Desktop ? `height: ${sliderArrowsHeight?.Desktop}${sliderArrowsHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockId} .swiper-button-prev:hover,
        .${blockId} .swiper-button-next:hover {
            ${sliderArrowsBgColorHover ? `background-color: ${sliderArrowsBgColorHover};` : ''}
            ${sliderArrowsColorHover ? `color: ${sliderArrowsColorHover};` : ''}
            ${sliderArrowsBorderHoverColor ? `border-color: ${sliderArrowsBorderHoverColor};` : ''}
            ${sliderArrowsBoxShadowHoverCssValue ? `box-shadow: ${sliderArrowsBoxShadowHoverCssValue};` : ''}
        }

        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next svg {
            ${sliderArrowsColor ? `fill: ${sliderArrowsColor};` : ''}
            ${sliderArrowsSize?.Desktop ? `width: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
            ${sliderArrowsSize?.Desktop ? `height: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next img {
            ${sliderArrowsSize?.Desktop ? `width: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
            ${sliderArrowsSize?.Desktop ? `height: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover svg,
        .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next:hover svg {
            ${sliderArrowsColorHover ? `fill: ${sliderArrowsColorHover};` : ''}
        }

        .${blockId} .swiper-button-prev:after,
        .${blockId} .swiper-button-next:after {
            ${sliderArrowsSize?.Desktop ? `font-size: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockId} .swiper-pagination {
            ${sliderDotsPosition?.Desktop ? `bottom: ${sliderDotsPosition?.Desktop}${sliderDotsPositionUnits?.Desktop} !important;` : ''}
            ${sliderDotsMarginDesktopWidth && sliderDotsMarginDesktop?.top ? `margin: ${sliderDotsMarginDesktopWidth};` : ''}
        }

        .${blockId} .swiper-pagination-bullet {
            ${sliderNormalDotsBgColor ? `background-color: ${sliderNormalDotsBgColor};` : ''}
            ${sliderNormalDotsBorder ? `border: ${sliderNormalDotsBorder};` : ''}
            ${sliderNormalDotsBorderDesktopWidth && sliderNormalDotsBorderDesktop?.top ? `border-width: ${sliderNormalDotsBorderDesktopWidth};` : ''}
            ${sliderNormalDotsBorderRadiusDesktopWidth && sliderNormalDotsBorderRadiusDesktop?.top ? `border-radius: ${sliderNormalDotsBorderRadiusDesktopWidth};` : ''}
            ${sliderNormalDotsBorderColor ? `border-color: ${sliderNormalDotsBorderColor};` : ''}
            ${sliderNormalDotsWidth?.Desktop ? `width: ${sliderNormalDotsWidth?.Desktop}${sliderNormalDotsWidthUnits?.Desktop};` : ''}
            ${sliderNormalDotsHeight?.Desktop ? `height: ${sliderNormalDotsHeight?.Desktop}${sliderNormalDotsHeightUnits?.Desktop};` : ''}
        }

        .${blockId} .swiper-pagination-bullet-active {
            ${sliderActiveDotsBgColor ? `background-color: ${sliderActiveDotsBgColor};` : ''}
            ${sliderActiveDotsBorder ? `border: ${sliderActiveDotsBorder};` : ''}
            ${sliderActiveDotsBorderDesktopWidth && sliderActiveDotsBorderDesktop?.top ? `border-width: ${sliderActiveDotsBorderDesktopWidth};` : ''}
            ${sliderActiveDotsBorderRadiusDesktopWidth && sliderActiveDotsBorderRadiusDesktop?.top ? `border-radius: ${sliderActiveDotsBorderRadiusDesktopWidth};` : ''}
            ${sliderActiveDotsBorderColor ? `border-color: ${sliderActiveDotsBorderColor};` : ''}
            ${sliderActiveDotsWidth?.Desktop ? `width: ${sliderActiveDotsWidth?.Desktop}${sliderActiveDotsWidthUnits?.Desktop};` : ''}
            ${sliderActiveDotsHeight?.Desktop ? `height: ${sliderActiveDotsHeight?.Desktop}${sliderActiveDotsHeightUnits?.Desktop};` : ''}
        }

        .${blockId} .swiper-pagination-fraction {
            ${sliderFractionGlobalTypoSwitcher?.fontFamily === true && sliderFractionGlobalTypographyData?.fontFamily ? `font-family: ${sliderFractionGlobalTypographyData?.fontFamily};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontSize === true && sliderFractionGlobalTypographyData?.fontSize ? `font-size: ${sliderFractionGlobalTypographyData?.fontSize};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontWeight === true && sliderFractionGlobalTypographyData?.fontWeight ? `font-weight: ${sliderFractionGlobalTypographyData?.fontWeight};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontStyle === true && sliderFractionGlobalTypographyData?.fontStyle ? `font-style: ${sliderFractionGlobalTypographyData?.fontStyle};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textTransform === true && sliderFractionGlobalTypographyData?.textTransform ? `text-transform: ${sliderFractionGlobalTypographyData?.textTransform};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textDecoration === true && sliderFractionGlobalTypographyData?.textDecoration ? `text-decoration: ${sliderFractionGlobalTypographyData?.textDecoration};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.letterSpacing === true && sliderFractionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${sliderFractionGlobalTypographyData?.letterSpacing};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.lineHeight === true && sliderFractionGlobalTypographyData?.lineHeight ? `line-height: ${sliderFractionGlobalTypographyData?.lineHeight};` : ''}

            ${sliderFractionGlobalTypoSwitcher?.fontFamily === false && sliderFractionFontFamily && sliderFractionFontFamily !== 'Default' ? `font-family: ${sliderFractionFontFamily};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontSize === false && sliderFractionFontSize?.Desktop && sliderFractionFontSizeUnits?.Desktop ? `font-size: ${sliderFractionFontSize?.Desktop}${sliderFractionFontSizeUnits?.Desktop};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontWeight === false && sliderFractionFontWeight ? `font-weight: ${sliderFractionFontWeight};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontStyle === false && sliderFractionFontStyle ? `font-style: ${sliderFractionFontStyle};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textTransform === false && sliderFractionTextTransform ? `text-transform: ${sliderFractionTextTransform};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textDecoration === false && sliderFractionTextDecoration ? `text-decoration: ${sliderFractionTextDecoration};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.letterSpacing === false && sliderFractionLetterSpacing?.Desktop && sliderFractionLetterSpacingUnits?.Desktop ? `letter-spacing: ${sliderFractionLetterSpacing?.Desktop}${sliderFractionLetterSpacingUnits?.Desktop};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.lineHeight === false && sliderFractionLineHeight?.Desktop && sliderFractionLineHeightUnits?.Desktop ? `line-height: ${sliderFractionLineHeight?.Desktop}${sliderFractionLineHeightUnits?.Desktop};` : ''}
            ${sliderFractionColor ? `color: ${sliderFractionColor};` : ''}
        }
        .${blockId} .swiper-pagination-fraction:hover {
            ${sliderFractionHoverColor ? `color: ${sliderFractionHoverColor};` : ''}
        }

        .${blockId} .swiper-pagination-progressbar {
            ${sliderProgressbarBGColor ? `background-color: ${sliderProgressbarBGColor};` : ''}
            ${sliderProgressbarHeight?.Desktop ? `height: ${sliderProgressbarHeight?.Desktop}${sliderProgressbarHeightUnits?.Desktop};` : ''}
        }
        .${blockId} .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            ${sliderProgressbarBGActiveColor ? `background-color: ${sliderProgressbarBGActiveColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${ blockId }.fb-slider-container{
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset?.Tablet !== undefined ? `left: ${sliderHZLeftOffset?.Tablet}${sliderHZLeftOffsetUnits?.Tablet};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset?.Tablet !== undefined ? `right: ${sliderHZRightOffset?.Tablet}${sliderHZRightOffsetUnits?.Tablet};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset?.Tablet !== undefined ? `top: ${sliderVRTopOffset?.Tablet}${sliderVRTopOffsetUnits?.Tablet};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset?.Tablet !== undefined ? `bottom: ${sliderVRBottomOffset?.Tablet}${sliderVRBottomOffsetUnits?.Tablet};` : ''}
                ${sliderGlobalZIndex?.Tablet ? `z-index: ${sliderGlobalZIndex?.Tablet};` : ''}
                ${sliderGlobalPaddingTabletWidth ? `padding: ${sliderGlobalPaddingTabletWidth};` : ''}
                ${sliderGlobalMarginTabletWidth ? `margin: ${sliderGlobalMarginTabletWidth};` : ''}
                ${sliderGlobalBorderTabletWidth ? `border-width: ${sliderGlobalBorderTabletWidth};` : ''}
                ${sliderGlobalBorderRadiusTabletWidth ? `border-radius: ${sliderGlobalBorderRadiusTabletWidth};` : ''}
            }

            .${blockId} .swiper-wrapper.fb-swiper-wrapper {
                ${sliderHeight?.Tablet ? `min-height: ${sliderHeight?.Tablet}${sliderHeightUnits?.Tablet};` : ''}
            }

            .${blockId}.fb-slider-container.outside {
                ${sliderArrowPosition === 'top-left' || sliderArrowPosition === 'top-center' || sliderArrowPosition === 'top-right' ? `
                    padding: ${sliderArrowPositionOutsidePadding?.Tablet}${sliderArrowPositionOutsidePaddingUnits?.Tablet} 0 0;
                ` : ''}

                ${sliderArrowPosition === 'bottom-left' || sliderArrowPosition === 'bottom-center' || sliderArrowPosition === 'bottom-right' ? `
                    padding: 0 0 ${sliderArrowPositionOutsidePadding?.Tablet}${sliderArrowPositionOutsidePaddingUnits?.Tablet};
                ` : ''}

                ${sliderArrowPosition === 'center' ? `
                    padding: 0 ${sliderArrowPositionOutsidePadding?.Tablet}${sliderArrowPositionOutsidePaddingUnits?.Tablet};

                ` : ''}
            }

            ${sliderArrowPosition && sliderArrowPosition !== 'center' ? `

                .${blockId} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition},
                .${blockId} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} {

                    gap: ${sliderArrowGap?.Tablet}${sliderArrowGapUnits?.Tablet};

                    ${sliderArrowPosition === 'top-left' ? `
                        top: ${sliderArrowPositionTopOffset?.Tablet ? `${sliderArrowPositionTopOffset?.Tablet}${sliderArrowPositionTopOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'top-center' ? `
                        top: ${sliderArrowPositionTopOffset?.Tablet ? `${sliderArrowPositionTopOffset?.Tablet}${sliderArrowPositionTopOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'top-right' ? `
                        top: ${sliderArrowPositionTopOffset?.Tablet ? `${sliderArrowPositionTopOffset?.Tablet}${sliderArrowPositionTopOffsetUnits?.Tablet}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Tablet ? `${sliderArrowPositionRightOffset?.Tablet}${sliderArrowPositionRightOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-left' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Tablet ? `${sliderArrowPositionBottomOffset?.Tablet}${sliderArrowPositionBottomOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-center' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Tablet ? `${sliderArrowPositionBottomOffset?.Tablet}${sliderArrowPositionBottomOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-right' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Tablet ? `${sliderArrowPositionBottomOffset?.Tablet}${sliderArrowPositionBottomOffsetUnits?.Tablet}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Tablet ? `${sliderArrowPositionRightOffset?.Tablet}${sliderArrowPositionRightOffsetUnits?.Tablet}` : '0'};
                    ` : ''}
                }
            ` : ''}


            .${blockId} .swiper-button-prev,
            .${blockId} .swiper-button-next {
                ${sliderArrowsBorderTabletWidth && sliderArrowsBorderTablet?.top ? `border-width: ${sliderArrowsBorderTabletWidth};` : ''}
                ${sliderArrowsBorderRadiusTabletWidth && sliderArrowsBorderRadiusTablet?.top ? `border-radius: ${sliderArrowsBorderRadiusTabletWidth};` : ''}
                ${sliderArrowsWidth?.Tablet ? `width: ${sliderArrowsWidth?.Tablet}${sliderArrowsWidthUnits?.Tablet};` : ''}
                ${sliderArrowsHeight?.Tablet ? `height: ${sliderArrowsHeight?.Tablet}${sliderArrowsHeightUnits?.Tablet};` : ''}
            }

            .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
            .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next svg {
                ${sliderArrowsSize?.Tablet ? `width: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
                ${sliderArrowsSize?.Tablet ? `height: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
            }

			.${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
			.${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next img {
				${sliderArrowsSize?.Tablet ? `width: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
				${sliderArrowsSize?.Tablet ? `height: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
			}

            .${blockId} .swiper-button-prev:after,
            .${blockId} .swiper-button-next:after {
                ${sliderArrowsSize?.Tablet ? `font-size: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockId} .swiper-pagination {
                ${sliderDotsPosition?.Tablet ? `bottom: ${sliderDotsPosition?.Tablet}${sliderDotsPositionUnits?.Tablet} !important;` : ''}
                ${sliderDotsMarginTabletWidth && sliderDotsMarginTablet?.top ? `margin: ${sliderDotsMarginTabletWidth};` : ''}
            }

            .${blockId} .swiper-pagination-bullet {
                ${sliderNormalDotsBorderTabletWidth && sliderNormalDotsBorderTablet?.top ? `border-width: ${sliderNormalDotsBorderTabletWidth};` : ''}
                ${sliderNormalDotsBorderRadiusTabletWidth && sliderNormalDotsBorderRadiusTablet?.top ? `border-radius: ${sliderNormalDotsBorderRadiusTabletWidth};` : ''}
                ${sliderNormalDotsWidth?.Tablet ? `width: ${sliderNormalDotsWidth?.Tablet}${sliderNormalDotsWidthUnits?.Tablet};` : ''}
                ${sliderNormalDotsHeight?.Tablet ? `height: ${sliderNormalDotsHeight?.Tablet}${sliderNormalDotsHeightUnits?.Tablet};` : ''}
            }

            .${blockId} .swiper-pagination-bullet-active {
                ${sliderActiveDotsBorderTabletWidth && sliderActiveDotsBorderTablet?.top ? `border-width: ${sliderActiveDotsBorderTabletWidth};` : ''}
                ${sliderActiveDotsBorderRadiusTabletWidth && sliderActiveDotsBorderRadiusTablet?.top ? `border-radius: ${sliderActiveDotsBorderRadiusTabletWidth};` : ''}
                ${sliderActiveDotsWidth?.Tablet ? `width: ${sliderActiveDotsWidth?.Tablet}${sliderActiveDotsWidthUnits?.Tablet};` : ''}
                ${sliderActiveDotsHeight?.Tablet ? `height: ${sliderActiveDotsHeight?.Tablet}${sliderActiveDotsHeightUnits?.Tablet};` : ''}
            }
            .${blockId} .swiper-pagination-fraction {
                ${sliderFractionGlobalTypoSwitcher?.fontSize === false && sliderFractionFontSize?.Tablet && sliderFractionFontSizeUnits?.Tablet ? `font-size: ${sliderFractionFontSize?.Tablet}${sliderFractionFontSizeUnits?.Tablet};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.letterSpacing === false && sliderFractionLetterSpacing?.Tablet && sliderFractionLetterSpacingUnits?.Tablet ? `letter-spacing: ${sliderFractionLetterSpacing?.Tablet}${sliderFractionLetterSpacingUnits?.Tablet};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.lineHeight === false && sliderFractionLineHeight?.Tablet && sliderFractionLineHeightUnits?.Tablet ? `line-height: ${sliderFractionLineHeight?.Tablet}${sliderFractionLineHeightUnits?.Tablet};` : ''}
            }
            .${blockId} .swiper-pagination-progressbar {
                ${sliderProgressbarHeight?.Tablet ? `height: ${sliderProgressbarHeight?.Tablet}${sliderProgressbarHeightUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${ blockId }.fb-slider-container{
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset?.Mobile !== undefined ? `left: ${sliderHZLeftOffset?.Mobile}${sliderHZLeftOffsetUnits?.Mobile};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset?.Mobile !== undefined ? `right: ${sliderHZRightOffset?.Mobile}${sliderHZRightOffsetUnits?.Mobile};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset?.Mobile !== undefined ? `top: ${sliderVRTopOffset?.Mobile}${sliderVRTopOffsetUnits?.Mobile};` : ''}
				${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset?.Mobile !== undefined ? `bottom: ${sliderVRBottomOffset?.Mobile}${sliderVRBottomOffsetUnits?.Mobile};` : ''}
                ${sliderGlobalZIndex?.Mobile ? `z-index: ${sliderGlobalZIndex?.Mobile};` : ''}
                ${sliderGlobalPaddingMobileWidth ? `padding: ${sliderGlobalPaddingMobileWidth};` : ''}
                ${sliderGlobalMarginMobileWidth ? `margin: ${sliderGlobalMarginMobileWidth};` : ''}
                ${sliderGlobalBorderMobileWidth ? `border-width: ${sliderGlobalBorderMobileWidth};` : ''}
                ${sliderGlobalBorderRadiusMobileWidth ? `border-radius: ${sliderGlobalBorderRadiusMobileWidth};` : ''}
            }

            .${blockId} .swiper-wrapper.fb-swiper-wrapper {
                ${sliderHeight?.Mobile ? `min-height: ${sliderHeight?.Mobile}${sliderHeightUnits?.Mobile};` : ''}
            }

            .${blockId}.fb-slider-container.outside {
                ${sliderArrowPosition === 'top-left' || sliderArrowPosition === 'top-center' || sliderArrowPosition === 'top-right' ? `
                    padding: ${sliderArrowPositionOutsidePadding?.Mobile}${sliderArrowPositionOutsidePaddingUnits?.Mobile} 0 0;
                ` : ''}

                ${sliderArrowPosition === 'bottom-left' || sliderArrowPosition === 'bottom-center' || sliderArrowPosition === 'bottom-right' ? `
                    padding: 0 0 ${sliderArrowPositionOutsidePadding?.Mobile}${sliderArrowPositionOutsidePaddingUnits?.Mobile};
                ` : ''}

                ${sliderArrowPosition === 'center' ? `
                    padding: 0 ${sliderArrowPositionOutsidePadding?.Mobile}${sliderArrowPositionOutsidePaddingUnits?.Mobile};

                ` : ''}
            }

            ${sliderArrowPosition && sliderArrowPosition !== 'center' ? `

                .${blockId} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition},
                .${blockId} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} {

                    gap: ${sliderArrowGap?.Mobile}${sliderArrowGapUnits?.Mobile};

                    ${sliderArrowPosition === 'top-left' ? `
                        top: ${sliderArrowPositionTopOffset?.Mobile ? `${sliderArrowPositionTopOffset?.Mobile}${sliderArrowPositionTopOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'top-center' ? `
                        top: ${sliderArrowPositionTopOffset?.Mobile ? `${sliderArrowPositionTopOffset?.Mobile}${sliderArrowPositionTopOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'top-right' ? `
                        top: ${sliderArrowPositionTopOffset?.Mobile ? `${sliderArrowPositionTopOffset?.Mobile}${sliderArrowPositionTopOffsetUnits?.Mobile}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Mobile ? `${sliderArrowPositionRightOffset?.Mobile}${sliderArrowPositionRightOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-left' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Mobile ? `${sliderArrowPositionBottomOffset?.Mobile}${sliderArrowPositionBottomOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-center' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Mobile ? `${sliderArrowPositionBottomOffset?.Mobile}${sliderArrowPositionBottomOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-right' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Mobile ? `${sliderArrowPositionBottomOffset?.Mobile}${sliderArrowPositionBottomOffsetUnits?.Mobile}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Mobile ? `${sliderArrowPositionRightOffset?.Mobile}${sliderArrowPositionRightOffsetUnits?.Mobile}` : '0'};
                    ` : ''}
                }
            ` : ''}

            .${blockId} .swiper-button-prev,
            .${blockId} .swiper-button-next {
                ${sliderArrowsBorderMobileWidth && sliderArrowsBorderMobile?.top ? `border-width: ${sliderArrowsBorderMobileWidth};` : ''}
                ${sliderArrowsBorderRadiusMobileWidth && sliderArrowsBorderRadiusMobile?.top ? `border-radius: ${sliderArrowsBorderRadiusMobileWidth};` : ''}
                ${sliderArrowsWidth?.Mobile ? `width: ${sliderArrowsWidth?.Mobile}${sliderArrowsWidthUnits?.Mobile};` : ''}
                ${sliderArrowsHeight?.Mobile ? `height: ${sliderArrowsHeight?.Mobile}${sliderArrowsHeightUnits?.Mobile};` : ''}
            }

            .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
            .${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next svg {
                ${sliderArrowsSize?.Mobile ? `width: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
                ${sliderArrowsSize?.Mobile ? `height: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
            }

			.${blockId} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
			.${blockId} .fb-slider-custom-icon-wrapper .swiper-button-next img {
				${sliderArrowsSize?.Mobile ? `width: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
				${sliderArrowsSize?.Mobile ? `height: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
			}

            .${blockId} .swiper-button-prev:after,
            .${blockId} .swiper-button-next:after {
                ${sliderArrowsSize?.Mobile ? `font-size: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockId} .swiper-pagination {
                ${sliderDotsPosition?.Mobile ? `bottom: ${sliderDotsPosition?.Mobile}${sliderDotsPositionUnits?.Mobile} !important;` : ''}
                ${sliderDotsMarginMobileWidth && sliderDotsMarginMobile?.top ? `margin: ${sliderDotsMarginMobileWidth};` : ''}
            }

            .${blockId} .swiper-pagination-bullet {
                ${sliderNormalDotsBorderMobileWidth && sliderNormalDotsBorderMobile?.top ? `border-width: ${sliderNormalDotsBorderMobileWidth};` : ''}
                ${sliderNormalDotsBorderRadiusMobileWidth && sliderNormalDotsBorderRadiusMobile?.top ? `border-radius: ${sliderNormalDotsBorderRadiusMobileWidth};` : ''}
                ${sliderNormalDotsWidth?.Mobile ? `width: ${sliderNormalDotsWidth?.Mobile}${sliderNormalDotsWidthUnits?.Mobile};` : ''}
                ${sliderNormalDotsHeight?.Mobile ? `height: ${sliderNormalDotsHeight?.Mobile}${sliderNormalDotsHeightUnits?.Mobile};` : ''}
            }

            .${blockId} .swiper-pagination-bullet-active {
                ${sliderActiveDotsBorderMobileWidth && sliderActiveDotsBorderMobile?.top ? `border-width: ${sliderActiveDotsBorderMobileWidth};` : ''}
                ${sliderActiveDotsBorderRadiusMobileWidth && sliderActiveDotsBorderRadiusMobile?.top ? `border-radius: ${sliderActiveDotsBorderRadiusMobileWidth};` : ''}
                ${sliderActiveDotsWidth?.Mobile ? `width: ${sliderActiveDotsWidth?.Mobile}${sliderActiveDotsWidthUnits?.Mobile};` : ''}
                ${sliderActiveDotsHeight?.Mobile ? `height: ${sliderActiveDotsHeight?.Mobile}${sliderActiveDotsHeightUnits?.Mobile};` : ''}
            }
            .${blockId} .swiper-pagination-fraction {
                ${sliderFractionGlobalTypoSwitcher?.fontSize === false && sliderFractionFontSize?.Mobile && sliderFractionFontSizeUnits?.Mobile ? `font-size: ${sliderFractionFontSize?.Mobile}${sliderFractionFontSizeUnits?.Mobile};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.letterSpacing === false && sliderFractionLetterSpacing?.Mobile && sliderFractionLetterSpacingUnits?.Mobile ? `letter-spacing: ${sliderFractionLetterSpacing?.Mobile}${sliderFractionLetterSpacingUnits?.Mobile};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.lineHeight === false && sliderFractionLineHeight?.Mobile && sliderFractionLineHeightUnits?.Mobile ? `line-height: ${sliderFractionLineHeight?.Mobile}${sliderFractionLineHeightUnits?.Mobile};` : ''}
            }
            .${blockId} .swiper-pagination-progressbar {
                ${sliderProgressbarHeight?.Mobile ? `height: ${sliderProgressbarHeight?.Mobile}${sliderProgressbarHeightUnits?.Mobile};` : ''}
            }
        }

    `, [
        blockId,

        sliderHeight,
        sliderHeightUnits,

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
        sliderArrowsBorderDesktopWidth,
        sliderArrowsBorderTabletWidth,
        sliderArrowsBorderMobileWidth,

        /** Border Radius */
        sliderArrowsBorderRadiusUnits,
        sliderArrowsBorderRadiusDesktop,
        sliderArrowsBorderRadiusTablet,
        sliderArrowsBorderRadiusMobile,
        sliderArrowsBorderRadiusLink,
        sliderArrowsBorderRadiusDesktopWidth,
        sliderArrowsBorderRadiusTabletWidth,
        sliderArrowsBorderRadiusMobileWidth,

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
        sliderDotsMarginDesktopWidth,
        sliderDotsMarginTabletWidth,
        sliderDotsMarginMobileWidth,

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
        sliderNormalDotsBorderDesktopWidth,
        sliderNormalDotsBorderTabletWidth,
        sliderNormalDotsBorderMobileWidth,

        sliderNormalDotsBorderRadiusUnits,
        sliderNormalDotsBorderRadiusDesktop,
        sliderNormalDotsBorderRadiusTablet,
        sliderNormalDotsBorderRadiusMobile,
        sliderNormalDotsBorderRadiusLink,
        sliderNormalDotsBorderRadiusDesktopWidth,
        sliderNormalDotsBorderRadiusTabletWidth,
        sliderNormalDotsBorderRadiusMobileWidth,

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
        sliderActiveDotsBorderDesktopWidth,
        sliderActiveDotsBorderTabletWidth,
        sliderActiveDotsBorderMobileWidth,

        sliderActiveDotsBorderRadiusUnits,
        sliderActiveDotsBorderRadiusDesktop,
        sliderActiveDotsBorderRadiusTablet,
        sliderActiveDotsBorderRadiusMobile,
        sliderActiveDotsBorderRadiusLink,
        sliderActiveDotsBorderRadiusDesktopWidth,
        sliderActiveDotsBorderRadiusTabletWidth,
        sliderActiveDotsBorderRadiusMobileWidth,

        sliderFractionColorSwitcher,
        sliderFractionColor,
        sliderFractionHoverColor,

        sliderFractionGlobalTypographyData,
        sliderFractionGlobalTypoSwitcher,
        sliderFractionGlobalTypoType,

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
                            resetFallbackValue={"60"}
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
                        options={PAGINATION_TYPE}
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
