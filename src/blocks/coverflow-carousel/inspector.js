import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';

import {
    TabPanel,
    PanelBody,
    TextControl,
    ColorPicker,
    BaseControl,
    RangeControl,
    ToggleControl,
    DateTimePicker,
    Dropdown,
    Button,
    Dashicon,
    SelectControl,
    ButtonGroup,
    ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';

import { useEffect, useRef, memo } from '@wordpress/element';
import './editor.scss';
import {
    BORDER_STYLES,
    OVERFLOW_OP,
    SLIDER_PAGINATION_TYPE,
    SLIDER_ARROW_POSITION_TYPE,
    SLIDER_ARROW_POSITION,
    SLIDER_ARROW_DIRECTION,
    ARROW_ICON_ALIGN,
} from '@Constants/fbConstants';
import FB_NormalActiveSwitcherControl from '@Components/switcher-normal-active-control';
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import { useDeviceType } from "@Config/displayType";
import FB_ImageControl from '@Components/image-control';
import FB_PositionControl from '@Components/position-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        showNavigation,
        showPagination,
        paginationType,

        CarouselWidth,
        CarouselWidthUnits,
        CarouselHeight,
        CarouselHeightUnits,
        carouselItem,

        carouselItemTranslateX,
        carouselItemTranslateXUnits,
        carouselItemTranslateY,
        carouselItemTranslateYUnits,
        carouselItemTranslateZ,
        carouselItemTranslateZUnits,
        carouselItemRotateX,
        carouselItemRotateXUnits,
        carouselItemRotateY,
        carouselItemRotateYUnits,
        carouselItemRotateZ,
        carouselItemRotateZUnits,

        carouselPerspective,
        carouselPerspectiveUnits,
        carouselItemScale,
        carouselItemScaleUnits,

        transitionSpeed,
        carouselReflection,
        carouselReflectionGap,
        carouselReflectionOpacity,
        carouselTransitionEasing,
        autoplay,
        autoplaySpeed,
        loop,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        enableKeyboardNavigation,

        carouselArrowPositionType,
        carouselArrowPosition,
        carouselArrowDirection,
        carouselArrowGap,
        carouselArrowGapUnits,

        carouselArrowPositionTopOffset,
        carouselArrowPositionTopOffsetUnits,
        carouselArrowPositionLeftOffset,
        carouselArrowPositionLeftOffsetUnits,
        carouselArrowPositionRightOffset,
        carouselArrowPositionRightOffsetUnits,
        carouselArrowPositionBottomOffset,
        carouselArrowPositionBottomOffsetUnits,

        carouselArrowPositionOutsidePadding,
        carouselArrowPositionOutsidePaddingUnits,
        /** End Position */


        coverflowCarouselItemBgColorSwitcher,
        coverflowCarouselItemBgColor,
        coverflowCarouselItemBgHoverColor,

        /** carousel Arrows Style */
        carouselArrowsIconSwitcher,

        carouselArrowsIconLeftAlign,
        carouselArrowsIconLeft,
        carouselArrowsIconLeftImageUrl,
        carouselArrowsIconLeftImageAlt,
        carouselArrowsIconLeftImageID,

        carouselArrowsIconRightAlign,
        carouselArrowsIconRight,
        carouselArrowsIconRightImageUrl,
        carouselArrowsIconRightImageAlt,
        carouselArrowsIconRightImageID,

        carouselArrowsSize,
        carouselArrowsSizeUnits,
        carouselArrowsColorSwitcher,
        carouselArrowsColor,
        carouselArrowsColorHover,

        carouselArrowsBgColorSwitcher,
        carouselArrowsBgColor,
        carouselArrowsBgColorHover,

        carouselArrowsWidth,
        carouselArrowsWidthUnits,
        carouselArrowsHeight,
        carouselArrowsHeightUnits,

        /** Border Settings */
        carouselArrowsBorder,
        carouselArrowsBorderColorSwitcher,
        carouselArrowsBorderColor,
        carouselArrowsBorderHoverColor,
        carouselArrowsBorderUnits,
        carouselArrowsBorderDesktop,
        carouselArrowsBorderTablet,
        carouselArrowsBorderMobile,
        carouselArrowsBorderLink,

        /** Border Radius */
        carouselArrowsBorderRadiusUnits,
        carouselArrowsBorderRadiusDesktop,
        carouselArrowsBorderRadiusTablet,
        carouselArrowsBorderRadiusMobile,
        carouselArrowsBorderRadiusLink,

        /** Box Shadow */
        carouselArrowsBoxShadowSwitcher,
        carouselArrowsBoxShadowValues,
        carouselArrowsBoxShadowCssValue,
        carouselArrowsBoxShadowHoverValues,
        carouselArrowsBoxShadowHoverCssValue,

        /** Dots Style */

        carouselDotsMarginUnits,
        carouselDotsMarginDesktop,
        carouselDotsMarginTablet,
        carouselDotsMarginMobile,
        carouselDotsMarginLink,

        carouselDotsPosition,
        carouselDotsPositionUnits,

        carouselDotsSwitcher,
        carouselNormalDotsBgColor,
        carouselNormalDotsWidth,
        carouselNormalDotsWidthUnits,
        carouselNormalDotsHeight,
        carouselNormalDotsHeightUnits,

        carouselNormalDotsBorder,
        carouselNormalDotsBorderColorSwitcher,
        carouselNormalDotsBorderColor,
        carouselNormalDotsBorderHoverColor,

        carouselNormalDotsBorderUnits,
        carouselNormalDotsBorderDesktop,
        carouselNormalDotsBorderTablet,
        carouselNormalDotsBorderMobile,
        carouselNormalDotsBorderLink,

        carouselNormalDotsBorderRadiusUnits,
        carouselNormalDotsBorderRadiusDesktop,
        carouselNormalDotsBorderRadiusTablet,
        carouselNormalDotsBorderRadiusMobile,
        carouselNormalDotsBorderRadiusLink,

        carouselActiveDotsBgColor,
        carouselActiveDotsWidth,
        carouselActiveDotsWidthUnits,
        carouselActiveDotsHeight,
        carouselActiveDotsHeightUnits,

        carouselActiveDotsBorder,
        carouselActiveDotsBorderColorSwitcher,
        carouselActiveDotsBorderColor,
        carouselActiveDotsBorderHoverColor,

        carouselActiveDotsBorderUnits,
        carouselActiveDotsBorderDesktop,
        carouselActiveDotsBorderTablet,
        carouselActiveDotsBorderMobile,
        carouselActiveDotsBorderLink,

        carouselActiveDotsBorderRadiusUnits,
        carouselActiveDotsBorderRadiusDesktop,
        carouselActiveDotsBorderRadiusTablet,
        carouselActiveDotsBorderRadiusMobile,
        carouselActiveDotsBorderRadiusLink,

        carouselFractionColorSwitcher,
        carouselFractionColor,
        carouselFractionHoverColor,

        carouselFractionGlobalTypographyData,
        carouselFractionGlobalTypoSwitcher,
        carouselFractionGlobalTypoType,
        carouselFractionGlobalTypoOption,

        carouselFractionFontFamily,
        carouselFractionFontSize,
        carouselFractionFontSizeUnits,
        carouselFractionFontWeight,
        carouselFractionFontStyle,
        carouselFractionTextTransform,
        carouselFractionTextDecoration,
        carouselFractionLetterSpacing,
        carouselFractionLetterSpacingUnits,
        carouselFractionLineHeight,
        carouselFractionLineHeightUnits,

        carouselProgressbarBGColorSwitcher,
        carouselProgressbarBGColor,
        carouselProgressbarBGActiveColor,
        carouselProgressbarHeight,
        carouselProgressbarHeightUnits,

        //Global attributes
        coverflowCarouselGlobalZIndex,
        coverflowCarouselOverflow,
        coverflowCarouselGlobalPaddingUnits,
        coverflowCarouselGlobalPaddingDesktop,
        coverflowCarouselGlobalPaddingTablet,
        coverflowCarouselGlobalPaddingMobile,
        coverflowCarouselGlobalPaddingLink,
        coverflowCarouselGlobalMarginUnits,
        coverflowCarouselGlobalMarginDesktop,
        coverflowCarouselGlobalMarginTablet,
        coverflowCarouselGlobalMarginMobile,
        coverflowCarouselGlobalMarginLink,
        coverflowCarouselGlobalBgColorSwitcher,
        coverflowCarouselGlobalBgColor,
        coverflowCarouselGlobalBgHoverColor,
        coverflowCarouselGlobalBorder,
        coverflowCarouselGlobalBorderColorSwitcher,
        coverflowCarouselGlobalBorderColor,
        coverflowCarouselGlobalBorderHoverColor,
        coverflowCarouselGlobalBorderUnits,
        coverflowCarouselGlobalBorderDesktop,
        coverflowCarouselGlobalBorderTablet,
        coverflowCarouselGlobalBorderMobile,
        coverflowCarouselGlobalBorderLink,
        coverflowCarouselGlobalBorderRadiusUnits,
        coverflowCarouselGlobalBorderRadiusDesktop,
        coverflowCarouselGlobalBorderRadiusTablet,
        coverflowCarouselGlobalBorderRadiusMobile,
        coverflowCarouselGlobalBorderRadiusLink,
        coverflowCarouselGlobalBoxShadowValues,
        coverflowCarouselGlobalBoxShadowCssValue,

        coverflowCarouselDesktopSwitcher,
        coverflowCarouselTabletSwitcher,
        coverflowCarouselMobileSwitcher,

        // Position
        coverflowCarouselPositionType,
        coverflowCarouselHZOrientationType,
        coverflowCarouselVROrientationType,
        coverflowCarouselHZLeftOffset,
        coverflowCarouselHZLeftOffsetUnits,
        coverflowCarouselHZRightOffset,
        coverflowCarouselHZRightOffsetUnits,
        coverflowCarouselVRTopOffset,
        coverflowCarouselVRTopOffsetUnits,
        coverflowCarouselVRBottomOffset,
        coverflowCarouselVRBottomOffsetUnits,

        coverflowCarouselGlobalWraperCustomCSS,
        coverflowCarouselGlobalWraperID,
        coverflowCarouselGlobalWraperClass,
        coverflowCarouselPresetStyle
    } = attributes;

    const deviceType = useDeviceType();

    const blockProps = useBlockProps();

    const carouselArrowsIconLeftHandler = (IconName) => {
        setAttributes({ carouselArrowsIconLeft: IconName })

    }
    const carouselArrowsIconRightHandler = (IconName) => {
        setAttributes({ carouselArrowsIconRight: IconName })

    }

    /** Start Arrows border */
    const handleArrowsBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselArrowsBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselArrowsBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselArrowsBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselArrowsBorderMobile: {
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
                    setAttributes({ carouselArrowsBorderDesktop: { ...carouselArrowsBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselArrowsBorderTablet: { ...carouselArrowsBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselArrowsBorderMobile: { ...carouselArrowsBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleArrowsBorderCombineBtn = () => {
        setAttributes({ carouselArrowsBorderLink: !carouselArrowsBorderLink });
    }

    const handleArrowsBorderUnitsHandler = (unit) => {
        setAttributes({
            carouselArrowsBorderUnits: {
                ...carouselArrowsBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Arrows border radius*/
    const handleArrowsBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselArrowsBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselArrowsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselArrowsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselArrowsBorderRadiusMobile: {
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
                    setAttributes({ carouselArrowsBorderRadiusDesktop: { ...carouselArrowsBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselArrowsBorderRadiusTablet: { ...carouselArrowsBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselArrowsBorderRadiusMobile: { ...carouselArrowsBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleArrowsBorderRadiusCombineBtn = () => {
        setAttributes({ carouselArrowsBorderRadiusLink: !carouselArrowsBorderRadiusLink });
    }

    const handleArrowsBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            carouselArrowsBorderRadiusUnits: {
                ...carouselArrowsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Arrows border radius */

    /** Start Dots Margin */
    const handleDotsMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselDotsMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselDotsMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselDotsMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselDotsMarginMobile: {
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
                    setAttributes({ carouselDotsMarginDesktop: { ...carouselDotsMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselDotsMarginTablet: { ...carouselDotsMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselDotsMarginMobile: { ...carouselDotsMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleDotsMarginCombineBtn = () => {
        setAttributes({ carouselDotsMarginLink: !carouselDotsMarginLink });
    }

    const handleDotsMarginUnitsHandler = (unit) => {
        setAttributes({
            carouselDotsMarginUnits: {
                ...carouselDotsMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Dots Margin */

    /** Start Normal Dots border */
    const handleNormalDotsBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselNormalDotsBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselNormalDotsBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselNormalDotsBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselNormalDotsBorderMobile: {
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
                    setAttributes({ carouselNormalDotsBorderDesktop: { ...carouselNormalDotsBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselNormalDotsBorderTablet: { ...carouselNormalDotsBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselNormalDotsBorderMobile: { ...carouselNormalDotsBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleNormalDotsBorderCombineBtn = () => {
        setAttributes({ carouselNormalDotsBorderLink: !carouselNormalDotsBorderLink });
    }

    const handleNormalDotsBorderUnitsHandler = (unit) => {
        setAttributes({
            carouselNormalDotsBorderUnits: {
                ...carouselNormalDotsBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Normal Dots border radius*/
    const handleNormalDotsBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselNormalDotsBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselNormalDotsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselNormalDotsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselNormalDotsBorderRadiusMobile: {
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
                    setAttributes({ carouselNormalDotsBorderRadiusDesktop: { ...carouselNormalDotsBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselNormalDotsBorderRadiusTablet: { ...carouselNormalDotsBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselNormalDotsBorderRadiusMobile: { ...carouselNormalDotsBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleNormalDotsBorderRadiusCombineBtn = () => {
        setAttributes({ carouselNormalDotsBorderRadiusLink: !carouselNormalDotsBorderRadiusLink });
    }

    const handleNormalDotsBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            carouselNormalDotsBorderRadiusUnits: {
                ...carouselNormalDotsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Normal Dots border radius */

    /** Start Active Dots border */
    const handleActiveDotsBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselActiveDotsBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselActiveDotsBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselActiveDotsBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselActiveDotsBorderMobile: {
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
                    setAttributes({ carouselActiveDotsBorderDesktop: { ...carouselActiveDotsBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselActiveDotsBorderTablet: { ...carouselActiveDotsBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselActiveDotsBorderMobile: { ...carouselActiveDotsBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleActiveDotsBorderCombineBtn = () => {
        setAttributes({ carouselActiveDotsBorderLink: !carouselActiveDotsBorderLink });
    }

    const handleActiveDotsBorderUnitsHandler = (unit) => {
        setAttributes({
            carouselActiveDotsBorderUnits: {
                ...carouselActiveDotsBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Active Dots border radius*/
    const handleActiveDotsBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (carouselActiveDotsBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        carouselActiveDotsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        carouselActiveDotsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        carouselActiveDotsBorderRadiusMobile: {
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
                    setAttributes({ carouselActiveDotsBorderRadiusDesktop: { ...carouselActiveDotsBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ carouselActiveDotsBorderRadiusTablet: { ...carouselActiveDotsBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ carouselActiveDotsBorderRadiusMobile: { ...carouselActiveDotsBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleActiveDotsBorderRadiusCombineBtn = () => {
        setAttributes({ carouselActiveDotsBorderRadiusLink: !carouselActiveDotsBorderRadiusLink });
    }

    const handleActiveDotsBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            carouselActiveDotsBorderRadiusUnits: {
                ...carouselActiveDotsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Active Dots border radius */

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalPaddingDesktop: {
                            ...coverflowCarouselGlobalPaddingDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalPaddingTablet: {
                            ...coverflowCarouselGlobalPaddingTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalPaddingMobile: {
                            ...coverflowCarouselGlobalPaddingMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalPaddingLink: !coverflowCarouselGlobalPaddingLink });
    };

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalPaddingUnits: {
                ...coverflowCarouselGlobalPaddingUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalMarginDesktop: {
                            ...coverflowCarouselGlobalMarginDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalMarginTablet: {
                            ...coverflowCarouselGlobalMarginTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalMarginMobile: {
                            ...coverflowCarouselGlobalMarginMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalMarginLink: !coverflowCarouselGlobalMarginLink });
    };

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalMarginUnits: {
                ...coverflowCarouselGlobalMarginUnits,
                [deviceType]: unit,
            },
        });
    };
    /** End Global Margin */

    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalBorderMobile: {
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
                    setAttributes({ coverflowCarouselGlobalBorderDesktop: { ...coverflowCarouselGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ coverflowCarouselGlobalBorderTablet: { ...coverflowCarouselGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ coverflowCarouselGlobalBorderMobile: { ...coverflowCarouselGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalBorderLink: !coverflowCarouselGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalBorderUnits: {
                ...coverflowCarouselGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (coverflowCarouselGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        coverflowCarouselGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        coverflowCarouselGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        coverflowCarouselGlobalBorderRadiusMobile: {
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
                    setAttributes({ coverflowCarouselGlobalBorderRadiusDesktop: { ...coverflowCarouselGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ coverflowCarouselGlobalBorderRadiusTablet: { ...coverflowCarouselGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ coverflowCarouselGlobalBorderRadiusMobile: { ...coverflowCarouselGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ coverflowCarouselGlobalBorderRadiusLink: !coverflowCarouselGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            coverflowCarouselGlobalBorderRadiusUnits: {
                ...coverflowCarouselGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border Radius */

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("Basic Settings", "frontis-blocks")} initialOpen={true}>

                <ToggleControl
                    label={__('Show Navigation', 'frontis-blocks')}
                    checked={showNavigation}
                    onChange={(value) => setAttributes({ showNavigation: value })}
                />
                <ToggleControl
                    label={__('Show Pagination', 'frontis-blocks')}
                    checked={showPagination}
                    onChange={(value) => setAttributes({ showPagination: value })}
                />
                <FB_Range
                    min={100}
                    max={1000}
                    label={__("Carousel Width", "frontis-blocks")}
                    rangeValue={CarouselWidth}
                    onChangeHandler={(value) => setAttributes({ CarouselWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ CarouselWidthUnits: value })}
                    deviceType={deviceType}
                    units={CarouselWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"450"}
                />
                <FB_Range
                    min={100}
                    max={1000}
                    label={__("Carousel Height", "frontis-blocks")}
                    rangeValue={CarouselHeight}
                    onChangeHandler={(value) => setAttributes({ CarouselHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ CarouselHeightUnits: value })}
                    deviceType={deviceType}
                    units={CarouselHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"300"}
                />
                <FB_Range
                    min={1}
                    max={20}
                    label={__("Visible Items", "frontis-blocks")}
                    rangeValue={carouselItem}
                    onChangeHandler={(value) => setAttributes({ carouselItem: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />
            </PanelBody>

            <PanelBody title={__("3D Coverflow Settings", "frontis-blocks")} initialOpen={false}>
                <FB_Range
                    min={-1000}
                    max={1000}
                    label={__("Translate X", "frontis-blocks")}
                    rangeValue={carouselItemTranslateX}
                    onChangeHandler={(value) => setAttributes({ carouselItemTranslateX: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemTranslateXUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemTranslateXUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"260"}
                />
                <FB_Range
                    min={-500}
                    max={500}
                    label={__("Translate Y", "frontis-blocks")}
                    rangeValue={carouselItemTranslateY}
                    onChangeHandler={(value) => setAttributes({ carouselItemTranslateY: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemTranslateYUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemTranslateYUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"0"}
                />
                <FB_Range
                    min={-1000}
                    max={1000}
                    label={__("Translate Z (Depth)", "frontis-blocks")}
                    rangeValue={carouselItemTranslateZ}
                    onChangeHandler={(value) => setAttributes({ carouselItemTranslateZ: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemTranslateZUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemTranslateZUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"-100"}
                />
                <FB_Range
                    min={-90}
                    max={90}
                    label={__("Rotate X", "frontis-blocks")}
                    rangeValue={carouselItemRotateX}
                    onChangeHandler={(value) => setAttributes({ carouselItemRotateX: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemRotateXUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemRotateXUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"55"}
                    UNIT_TYPES={[{ label: 'deg', value: 'deg' }]}
                />
                <FB_Range
                    min={-90}
                    max={90}
                    label={__("Rotate Y", "frontis-blocks")}
                    rangeValue={carouselItemRotateY}
                    onChangeHandler={(value) => setAttributes({ carouselItemRotateY: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemRotateYUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemRotateYUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"55"}
                    UNIT_TYPES={[{ label: 'deg', value: 'deg' }]}
                />
                <FB_Range
                    min={-90}
                    max={90}
                    label={__("Rotate Z", "frontis-blocks")}
                    rangeValue={carouselItemRotateZ}
                    onChangeHandler={(value) => setAttributes({ carouselItemRotateZ: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemRotateZUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemRotateZUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"55"}
                    UNIT_TYPES={[{ label: 'deg', value: 'deg' }]}
                />
                <FB_Range
                    min={400}
                    max={3000}
                    label={__("3D Perspective", "frontis-blocks")}
                    rangeValue={carouselPerspective}
                    onChangeHandler={(value) => setAttributes({ carouselPerspective: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselPerspectiveUnits: value })}
                    deviceType={deviceType}
                    units={carouselPerspectiveUnits}
                    setAttributes={setAttributes}
                    rangeStep={50}
                    resetFallbackValue={"2000"}
                />
                <FB_Range
                    min={0.1}
                    max={1.5}
                    label={__("Inactive Items Scale", "frontis-blocks")}
                    rangeValue={carouselItemScale}
                    onChangeHandler={(value) => setAttributes({ carouselItemScale: value })}
                    rangeUnitHandler={(value) => setAttributes({ carouselItemScaleUnits: value })}
                    deviceType={deviceType}
                    units={carouselItemScaleUnits}
                    setAttributes={setAttributes}
                    rangeStep={0.05}
                    resetFallbackValue={"0.85"}
                />
                <ToggleControl
                    label={__("Enable Card Reflection", "frontis-blocks")}
                    checked={carouselReflection}
                    onChange={(value) => setAttributes({ carouselReflection: value })}
                />
                {carouselReflection && (
                    <>
                        <RangeControl
                            label={__("Reflection Gap (px)", "frontis-blocks")}
                            value={carouselReflectionGap}
                            onChange={(value) => setAttributes({ carouselReflectionGap: value })}
                            min={0}
                            max={50}
                            step={1}
                        />
                        <RangeControl
                            label={__("Reflection Opacity (%)", "frontis-blocks")}
                            value={carouselReflectionOpacity}
                            onChange={(value) => setAttributes({ carouselReflectionOpacity: value })}
                            min={0}
                            max={100}
                            step={1}
                        />
                    </>
                )}
            </PanelBody>

            <PanelBody title={__("Carousel Options", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__('Enable Loop', 'frontis-blocks')}
                    checked={loop}
                    onChange={(value) => setAttributes({ loop: value })}
                />
                <ToggleControl
                    label={__('Enable Allow TouchMove', 'frontis-blocks')}
                    checked={allowTouchMove}
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
                    label={__('Enable Autoplay', 'frontis-blocks')}
                    checked={autoplay}
                    onChange={(value) => setAttributes({ autoplay: value })}
                />
                {autoplay && (
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
                <SelectControl
                    label={__("Transition Easing", "frontis-blocks")}
                    value={carouselTransitionEasing}
                    options={[
                        { label: __('Smooth Bezier (Premium)', 'frontis-blocks'), value: 'cubic-bezier(0.16, 1, 0.3, 1)' },
                        { label: __('Ease', 'frontis-blocks'), value: 'ease' },
                        { label: __('Ease In Out', 'frontis-blocks'), value: 'ease-in-out' },
                        { label: __('Ease Out', 'frontis-blocks'), value: 'ease-out' },
                        { label: __('Ease In', 'frontis-blocks'), value: 'ease-in' },
                        { label: __('Linear', 'frontis-blocks'), value: 'linear' },
                    ]}
                    onChange={(value) => setAttributes({ carouselTransitionEasing: value })}
                />
            </PanelBody>

            {showNavigation && (
                <PanelBody title={__("Navigation", "frontis-blocks")} initialOpen={false}>
                    <>
                        <ToggleControl
                            label={__("Custom Icon", "frontis-blocks")}
                            checked={carouselArrowsIconSwitcher}
                            onChange={(value) => setAttributes({ carouselArrowsIconSwitcher: value })}
                        />
                        {carouselArrowsIconSwitcher && (
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
                                                onClick={() => setAttributes({ carouselArrowsIconLeftAlign: item.value })}
                                                className={`fb-setting-text-alignment-single-btn ${carouselArrowsIconLeftAlign === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                    {carouselArrowsIconLeftAlign === 'icon' && (
                                        <FBIconPicker value={carouselArrowsIconLeft} setIconHandler={carouselArrowsIconLeftHandler} />
                                    )}

                                    {carouselArrowsIconLeftAlign === 'image' && (
                                        <FB_ImageControl
                                            globalImageUrl={carouselArrowsIconLeftImageUrl}
                                            setglobalImageUrl={(value) => setAttributes({ carouselArrowsIconLeftImageUrl: value })}
                                            globalImageAlt={carouselArrowsIconLeftImageAlt}
                                            setglobalImageAlt={(value) => setAttributes({ carouselArrowsIconLeftImageAlt: value })}
                                            globalImageID={carouselArrowsIconLeftImageID}
                                            setglobalImageID={(value) => setAttributes({ carouselArrowsIconLeftImageID: value })}
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
                                                onClick={() => setAttributes({ carouselArrowsIconRightAlign: item.value })}
                                                className={`fb-setting-text-alignment-single-btn ${carouselArrowsIconRightAlign === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                    {carouselArrowsIconRightAlign === 'icon' && (
                                        <FBIconPicker value={carouselArrowsIconRight} setIconHandler={carouselArrowsIconRightHandler} />
                                    )}

                                    {carouselArrowsIconRightAlign === 'image' && (
                                        <FB_ImageControl
                                            globalImageUrl={carouselArrowsIconRightImageUrl}
                                            setglobalImageUrl={(value) => setAttributes({ carouselArrowsIconRightImageUrl: value })}
                                            globalImageAlt={carouselArrowsIconRightImageAlt}
                                            setglobalImageAlt={(value) => setAttributes({ carouselArrowsIconRightImageAlt: value })}
                                            globalImageID={carouselArrowsIconRightImageID}
                                            setglobalImageID={(value) => setAttributes({ carouselArrowsIconRightImageID: value })}
                                            isImageSize={false}
                                        />
                                    )}
                                </BaseControl>
                            </>
                        )}

                        {/* <BaseControl
                            label={__("Position Type", "frontis-blocks")}
                        >
                            <ButtonGroup className="frontis-setting-switcher-panel-btn">
                                {SLIDER_ARROW_POSITION_TYPE.map((item, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => setAttributes({ carouselArrowPositionType: item.value })}
                                        className={`frontis-setting-switcher-panel-btn-switcher ${carouselArrowPositionType === item.value ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <SelectControl
                            label={__("Position", "frontis-blocks")}
                            value={carouselArrowPosition}
                            options={SLIDER_ARROW_POSITION}
                            onChange={(value) => setAttributes({ carouselArrowPosition: value })}
                        />

                        {carouselArrowPosition !== 'center' && (

                            <SelectControl
                                label={__("Arrow Direction", "frontis-blocks")}
                                value={carouselArrowDirection}
                                options={SLIDER_ARROW_DIRECTION}
                                onChange={(value) => setAttributes({ carouselArrowDirection: value })}
                            />

                        )}

                        {carouselArrowPosition === 'top-left' && (
                            <>
                                <FB_Range
                                    min={-100}
                                    max={100}
                                    label={__("Top Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionTopOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionTopOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionTopOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionTopOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                                <FB_Range
                                    min={-100}
                                    max={100}
                                    label={__("Left Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionLeftOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionLeftOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionLeftOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionLeftOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                            </>
                        )}
                        {carouselArrowPosition === 'top-center' && (
                            <>
                                <FB_Range
                                    min={-100}
                                    max={100}
                                    label={__("Top Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionTopOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionTopOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionTopOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionTopOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                                <FB_Range
                                    min={-100}
                                    max={100}
                                    label={__("Left Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionLeftOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionLeftOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionLeftOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionLeftOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                            </>
                        )}

                        {carouselArrowPosition === 'top-right' && (
                            <>
                                <FB_Range
                                    min={-100}
                                    max={100}
                                    label={__("Top Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionTopOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionTopOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionTopOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionTopOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                                <FB_Range
                                    min={-100}
                                    max={100}
                                    label={__("Right Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionRightOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionRightOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionRightOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionRightOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                            </>
                        )}

                        {carouselArrowPosition === 'bottom-left' && (
                            <>
                                <FB_Range
                                    min={0}
                                    max={100}
                                    label={__("Bottom Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionBottomOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionBottomOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionBottomOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionBottomOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                                <FB_Range
                                    min={0}
                                    max={100}
                                    label={__("Left Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionLeftOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionLeftOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionLeftOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionLeftOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                            </>
                        )}
                        {carouselArrowPosition === 'bottom-center' && (
                            <>
                                <FB_Range
                                    min={0}
                                    max={100}
                                    label={__("Bottom Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionBottomOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionBottomOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionBottomOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionBottomOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                                <FB_Range
                                    min={0}
                                    max={100}
                                    label={__("Left Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionLeftOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionLeftOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionLeftOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionLeftOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                            </>
                        )}

                        {carouselArrowPosition === 'bottom-right' && (
                            <>
                                <FB_Range
                                    min={0}
                                    max={100}
                                    label={__("Bottom Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionBottomOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionBottomOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionBottomOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionBottomOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                                <FB_Range
                                    min={0}
                                    max={100}
                                    label={__("Right Offset", "frontis-blocks")}
                                    rangeValue={carouselArrowPositionRightOffset}
                                    onChangeHandler={(value) => setAttributes({ carouselArrowPositionRightOffset: value })}
                                    rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionRightOffsetUnits: value })}
                                    deviceType={deviceType}
                                    units={carouselArrowPositionRightOffsetUnits}
                                    setAttributes={setAttributes}
                                    rangeStep={1}
                                    resetFallbackValue={"0"}
                                />
                            </>
                        )}

                        {carouselArrowPositionType === 'outside' && (

                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Padding", "frontis-blocks")}
                                rangeValue={carouselArrowPositionOutsidePadding}
                                onChangeHandler={(value) => setAttributes({ carouselArrowPositionOutsidePadding: value })}
                                rangeUnitHandler={(value) => setAttributes({ carouselArrowPositionOutsidePaddingUnits: value })}
                                deviceType={deviceType}
                                units={carouselArrowPositionOutsidePaddingUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />
                        )}
                        {carouselArrowPosition !== 'center' && (
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Gap", "frontis-blocks")}
                                rangeValue={carouselArrowGap}
                                onChangeHandler={(value) => setAttributes({ carouselArrowGap: value })}
                                rangeUnitHandler={(value) => setAttributes({ carouselArrowGapUnits: value })}
                                deviceType={deviceType}
                                units={carouselArrowGapUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={"10"}
                            />
                        )} */}
                    </>
                </PanelBody>
            )}

            {showPagination && (
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
            <PanelBody
                title={__("Carousel Item", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={coverflowCarouselItemBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ coverflowCarouselItemBgColorSwitcher: value })}
                />

                {coverflowCarouselItemBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={coverflowCarouselItemBgColor}
                        setGlobalColor={(value) => setAttributes({ coverflowCarouselItemBgColor: value === undefined ? '' : value })}
                    />
                )}

                {coverflowCarouselItemBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={coverflowCarouselItemBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ coverflowCarouselItemBgHoverColor: value === undefined ? '' : value })}
                    />
                )}
            </PanelBody>
            {showNavigation && (
                <PanelBody title={__("Navigation Style", "frontis-blocks")} initialOpen={false}>
                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={carouselArrowsColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ carouselArrowsColorSwitcher: value })}
                    />

                    {carouselArrowsColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={carouselArrowsColor}
                            setGlobalColor={(value) => setAttributes({ carouselArrowsColor: value === undefined ? '' : value })}
                        />
                    )}
                    {carouselArrowsColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={carouselArrowsColorHover}
                            setGlobalColor={(value) => setAttributes({ carouselArrowsColorHover: value })}
                        />
                    )}

                    <FB_SwitcherControl
                        label={__("Background", "frontis-blocks")}
                        globalSwitcher={carouselArrowsBgColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ carouselArrowsBgColorSwitcher: value })}
                    />

                    {carouselArrowsBgColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={carouselArrowsBgColor}
                            setGlobalColor={(value) => setAttributes({ carouselArrowsBgColor: value === undefined ? '' : value })}
                        />
                    )}
                    {carouselArrowsBgColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={carouselArrowsBgColorHover}
                            setGlobalColor={(value) => setAttributes({ carouselArrowsBgColorHover: value })}
                        />
                    )}

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={carouselArrowsSize}
                        onChangeHandler={(value) => setAttributes({ carouselArrowsSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ carouselArrowsSizeUnits: value })}
                        deviceType={deviceType}
                        units={carouselArrowsSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"16"}
                    />
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={carouselArrowsWidth}
                        onChangeHandler={(value) => setAttributes({ carouselArrowsWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ carouselArrowsWidthUnits: value })}
                        deviceType={deviceType}
                        units={carouselArrowsWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"46"}
                    />
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Height", "frontis-blocks")}
                        rangeValue={carouselArrowsHeight}
                        onChangeHandler={(value) => setAttributes({ carouselArrowsHeight: value })}
                        rangeUnitHandler={(value) => setAttributes({ carouselArrowsHeightUnits: value })}
                        deviceType={deviceType}
                        units={carouselArrowsHeightUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"46"}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={carouselArrowsBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ carouselArrowsBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={carouselArrowsBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ carouselArrowsBorderColorSwitcher: value })}
                    />

                    {carouselArrowsBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={carouselArrowsBorderColor}
                            setGlobalColor={(value) => setAttributes({ carouselArrowsBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {carouselArrowsBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={carouselArrowsBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ carouselArrowsBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleArrowsBorderUnitsHandler}
                        spacingUnits={carouselArrowsBorderUnits}
                        spacingDesktop={carouselArrowsBorderDesktop}
                        spacingTablet={carouselArrowsBorderTablet}
                        spacingMobile={carouselArrowsBorderMobile}
                        handleSpacingUnitHandler={handleArrowsBorderUnitChange}
                        spacingCombineBtn={carouselArrowsBorderLink}
                        spacingCombineBtnHandler={handleArrowsBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleArrowsBorderRadiusUnitsHandler}
                        spacingUnits={carouselArrowsBorderRadiusUnits}
                        spacingDesktop={carouselArrowsBorderRadiusDesktop}
                        spacingTablet={carouselArrowsBorderRadiusTablet}
                        spacingMobile={carouselArrowsBorderRadiusMobile}
                        handleSpacingUnitHandler={handleArrowsBorderRadiusUnitChange}
                        spacingCombineBtn={carouselArrowsBorderRadiusLink}
                        spacingCombineBtnHandler={handleArrowsBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Box Shadow", "frontis-blocks")}
                        globalSwitcher={carouselArrowsBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ carouselArrowsBoxShadowSwitcher: value })}
                    />

                    {carouselArrowsBoxShadowSwitcher === 'normal' && (
                        <FB_BoxShadowControl
                            label={__("Normal Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ carouselArrowsBoxShadowValues: value })}
                            initialShadowValue={carouselArrowsBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ carouselArrowsBoxShadowCssValue: value })}
                        />
                    )}

                    {carouselArrowsBoxShadowSwitcher === 'hover' && (
                        <FB_BoxShadowControl
                            label={__("Hover Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ carouselArrowsBoxShadowHoverValues: value })}
                            initialShadowValue={carouselArrowsBoxShadowHoverValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ carouselArrowsBoxShadowHoverCssValue: value })}
                        />
                    )}
                </PanelBody>
            )}
            {showPagination && (
                <PanelBody title={__("Pagination Style", "frontis-blocks")} initialOpen={false}>

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Position", "frontis-blocks")}
                        rangeValue={carouselDotsPosition}
                        onChangeHandler={(value) => setAttributes({ carouselDotsPosition: value })}
                        rangeUnitHandler={(value) => setAttributes({ carouselDotsPositionUnits: value })}
                        deviceType={deviceType}
                        units={carouselDotsPositionUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"0"}
                    />
                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleDotsMarginUnitsHandler}
                        spacingUnits={carouselDotsMarginUnits}
                        spacingDesktop={carouselDotsMarginDesktop}
                        spacingTablet={carouselDotsMarginTablet}
                        spacingMobile={carouselDotsMarginMobile}
                        handleSpacingUnitHandler={handleDotsMarginUnitChange}
                        spacingCombineBtn={carouselDotsMarginLink}
                        spacingCombineBtnHandler={handleDotsMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    {paginationType === 'bullets' && (
                        <>
                            <FB_NormalActiveSwitcherControl
                                label={__("Pagination Style", "frontis-blocks")}
                                globalSwitcher={carouselDotsSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ carouselDotsSwitcher: value })}
                            />

                            {carouselDotsSwitcher === 'normal' && (
                                <>
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Width", "frontis-blocks")}
                                        rangeValue={carouselNormalDotsWidth}
                                        onChangeHandler={(value) => setAttributes({ carouselNormalDotsWidth: value })}
                                        rangeUnitHandler={(value) => setAttributes({ carouselNormalDotsWidthUnits: value })}
                                        deviceType={deviceType}
                                        units={carouselNormalDotsWidthUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Height", "frontis-blocks")}
                                        rangeValue={carouselNormalDotsHeight}
                                        onChangeHandler={(value) => setAttributes({ carouselNormalDotsHeight: value })}
                                        rangeUnitHandler={(value) => setAttributes({ carouselNormalDotsHeightUnits: value })}
                                        deviceType={deviceType}
                                        units={carouselNormalDotsHeightUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_ColorControl
                                        label={__("Color", "frontis-blocks")}
                                        globalColor={carouselNormalDotsBgColor}
                                        setGlobalColor={(value) => setAttributes({ carouselNormalDotsBgColor: value === undefined ? '' : value })}
                                    />
                                    <SelectControl
                                        label={__("Border Style", "frontis-blocks")}
                                        value={carouselNormalDotsBorder}
                                        options={BORDER_STYLES}
                                        onChange={(value) => setAttributes({ carouselNormalDotsBorder: value })}
                                    />

                                    <FB_SwitcherControl
                                        label={__("Border Color", "frontis-blocks")}
                                        globalSwitcher={carouselNormalDotsBorderColorSwitcher}
                                        setGlobalSwitcher={(value) => setAttributes({ carouselNormalDotsBorderColorSwitcher: value })}
                                    />

                                    {carouselNormalDotsBorderColorSwitcher === 'normal' && (
                                        <FB_ColorControl
                                            label={__("Normal Color", "frontis-blocks")}
                                            globalColor={carouselNormalDotsBorderColor}
                                            setGlobalColor={(value) => setAttributes({ carouselNormalDotsBorderColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    {carouselArrowsBorderColorSwitcher === 'hover' && (
                                        <FB_ColorControl
                                            label={__("Hover Color", "frontis-blocks")}
                                            globalColor={carouselNormalDotsBorderHoverColor}
                                            setGlobalColor={(value) => setAttributes({ carouselNormalDotsBorderHoverColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    <FB_Spacing
                                        label={__("Border", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleNormalDotsBorderUnitsHandler}
                                        spacingUnits={carouselNormalDotsBorderUnits}
                                        spacingDesktop={carouselNormalDotsBorderDesktop}
                                        spacingTablet={carouselNormalDotsBorderTablet}
                                        spacingMobile={carouselNormalDotsBorderMobile}
                                        handleSpacingUnitHandler={handleNormalDotsBorderUnitChange}
                                        spacingCombineBtn={carouselNormalDotsBorderLink}
                                        spacingCombineBtnHandler={handleNormalDotsBorderCombineBtn}
                                        setAttributes={setAttributes}
                                    />

                                    <FB_Spacing
                                        label={__("Border Radius", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleNormalDotsBorderRadiusUnitsHandler}
                                        spacingUnits={carouselNormalDotsBorderRadiusUnits}
                                        spacingDesktop={carouselNormalDotsBorderRadiusDesktop}
                                        spacingTablet={carouselNormalDotsBorderRadiusTablet}
                                        spacingMobile={carouselNormalDotsBorderRadiusMobile}
                                        handleSpacingUnitHandler={handleNormalDotsBorderRadiusUnitChange}
                                        spacingCombineBtn={carouselNormalDotsBorderRadiusLink}
                                        spacingCombineBtnHandler={handleNormalDotsBorderRadiusCombineBtn}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}

                            {carouselDotsSwitcher === 'active' && (
                                <>
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Width", "frontis-blocks")}
                                        rangeValue={carouselActiveDotsWidth}
                                        onChangeHandler={(value) => setAttributes({ carouselActiveDotsWidth: value })}
                                        rangeUnitHandler={(value) => setAttributes({ carouselActiveDotsWidthUnits: value })}
                                        deviceType={deviceType}
                                        units={carouselActiveDotsWidthUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_Range
                                        min={0}
                                        max={100}
                                        label={__("Height", "frontis-blocks")}
                                        rangeValue={carouselActiveDotsHeight}
                                        onChangeHandler={(value) => setAttributes({ carouselActiveDotsHeight: value })}
                                        rangeUnitHandler={(value) => setAttributes({ carouselActiveDotsHeightUnits: value })}
                                        deviceType={deviceType}
                                        units={carouselActiveDotsHeightUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={"8"}
                                    />
                                    <FB_ColorControl
                                        label={__("Color", "frontis-blocks")}
                                        globalColor={carouselActiveDotsBgColor}
                                        setGlobalColor={(value) => setAttributes({ carouselActiveDotsBgColor: value === undefined ? '' : value })}
                                    />
                                    <SelectControl
                                        label={__("Border Style", "frontis-blocks")}
                                        value={carouselActiveDotsBorder}
                                        options={BORDER_STYLES}
                                        onChange={(value) => setAttributes({ carouselActiveDotsBorder: value })}
                                    />

                                    <FB_SwitcherControl
                                        label={__("Border Color", "frontis-blocks")}
                                        globalSwitcher={carouselActiveDotsBorderColorSwitcher}
                                        setGlobalSwitcher={(value) => setAttributes({ carouselActiveDotsBorderColorSwitcher: value })}
                                    />

                                    {carouselActiveDotsBorderColorSwitcher === 'normal' && (
                                        <FB_ColorControl
                                            label={__("Normal Color", "frontis-blocks")}
                                            globalColor={carouselActiveDotsBorderColor}
                                            setGlobalColor={(value) => setAttributes({ carouselActiveDotsBorderColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    {carouselActiveDotsBorderColorSwitcher === 'hover' && (
                                        <FB_ColorControl
                                            label={__("Hover Color", "frontis-blocks")}
                                            globalColor={carouselActiveDotsBorderHoverColor}
                                            setGlobalColor={(value) => setAttributes({ carouselActiveDotsBorderHoverColor: value === undefined ? '' : value })}
                                        />
                                    )}

                                    <FB_Spacing
                                        label={__("Border", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleActiveDotsBorderUnitsHandler}
                                        spacingUnits={carouselActiveDotsBorderUnits}
                                        spacingDesktop={carouselActiveDotsBorderDesktop}
                                        spacingTablet={carouselActiveDotsBorderTablet}
                                        spacingMobile={carouselActiveDotsBorderMobile}
                                        handleSpacingUnitHandler={handleActiveDotsBorderUnitChange}
                                        spacingCombineBtn={carouselActiveDotsBorderLink}
                                        spacingCombineBtnHandler={handleActiveDotsBorderCombineBtn}
                                        setAttributes={setAttributes}
                                    />

                                    <FB_Spacing
                                        label={__("Border Radius", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={handleActiveDotsBorderRadiusUnitsHandler}
                                        spacingUnits={carouselActiveDotsBorderRadiusUnits}
                                        spacingDesktop={carouselActiveDotsBorderRadiusDesktop}
                                        spacingTablet={carouselActiveDotsBorderRadiusTablet}
                                        spacingMobile={carouselActiveDotsBorderRadiusMobile}
                                        handleSpacingUnitHandler={handleActiveDotsBorderRadiusUnitChange}
                                        spacingCombineBtn={carouselActiveDotsBorderRadiusLink}
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
                                globalSwitcher={carouselFractionColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ carouselFractionColorSwitcher: value })}
                            />

                            {carouselFractionColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={carouselFractionColor}
                                    setGlobalColor={(value) => setAttributes({ carouselFractionColor: value === undefined ? '' : value })}
                                />
                            )}

                            {carouselFractionColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={carouselFractionHoverColor}
                                    setGlobalColor={(value) => setAttributes({ carouselFractionHoverColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_TypographyControl
                                globalTypoControlActive={true}
                                globalTypoSwitcher={carouselFractionGlobalTypoSwitcher}
                                storeGlobalTypographyData={(value) => setAttributes({ carouselFractionGlobalTypographyData: value })}

                                globalTypoType={carouselFractionGlobalTypoType}
                                onChangeGlobalTypoType={(value) => {
                                    setAttributes({
                                        carouselFractionGlobalTypoType: value,
                                        carouselFractionGlobalTypoSwitcher: value === 'default' ? { ...carouselFractionGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...carouselFractionGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                                    })
                                }}

                                globalTypoOption={carouselFractionGlobalTypoOption}
                                onChangeGlobalTypoOption={(value) => setAttributes({ carouselFractionGlobalTypoOption: value })}

                                fontFamily={carouselFractionFontFamily}
                                onChangeFontFamily={(value) => setAttributes({ carouselFractionFontFamily: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, fontFamily: value && false } })}

                                fontSize={carouselFractionFontSize}
                                onChangeFontSize={(value) => setAttributes({ carouselFractionFontSize: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, fontSize: value && false } })}

                                fontSizeUnits={carouselFractionFontSizeUnits}
                                onChangeFontSizeUnit={(value) => setAttributes({ carouselFractionFontSizeUnits: value })}

                                fontWeight={carouselFractionFontWeight}
                                onChangeFontWeight={(value) => setAttributes({ carouselFractionFontWeight: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, fontWeight: value && false } })}

                                fontStyle={carouselFractionFontStyle}
                                onChangeFontStyle={(value) => setAttributes({ carouselFractionFontStyle: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, fontStyle: value && false } })}

                                textTransform={carouselFractionTextTransform}
                                onChangeTextTransform={(value) => setAttributes({ carouselFractionTextTransform: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, textTransform: value && false } })}

                                textDecoration={carouselFractionTextDecoration}
                                onChangeTextDecoration={(value) => setAttributes({ carouselFractionTextDecoration: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, textDecoration: value && false } })}

                                letterSpacing={carouselFractionLetterSpacing}
                                onChangeLetterSpacing={(value) => setAttributes({ carouselFractionLetterSpacing: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, letterSpacing: value && false } })}

                                letterSpacingUnits={carouselFractionLetterSpacingUnits}
                                onChangeLetterSpacingUnit={(value) => setAttributes({ carouselFractionLetterSpacingUnits: value })}

                                lineHeight={carouselFractionLineHeight}
                                onChangeLineHeight={(value) => setAttributes({ carouselFractionLineHeight: value, carouselFractionGlobalTypoSwitcher: { ...carouselFractionGlobalTypoSwitcher, lineHeight: value && false } })}

                                lineHeightUnits={carouselFractionLineHeightUnits}
                                onChangeLineHeightUnit={(value) => setAttributes({ carouselFractionLineHeightUnits: value })}

                                deviceType={deviceType}
                                setAttributes={setAttributes}
                            />
                        </>
                    )}

                    {paginationType === 'progressbar' && (
                        <>
                            <FB_NormalActiveSwitcherControl
                                label={__("Pagination Style", "frontis-blocks")}
                                globalSwitcher={carouselProgressbarBGColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ carouselProgressbarBGColorSwitcher: value })}
                            />
                            {carouselProgressbarBGColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={carouselProgressbarBGColor}
                                    setGlobalColor={(value) => setAttributes({ carouselProgressbarBGColor: value === undefined ? '' : value })}
                                />
                            )}
                            {carouselProgressbarBGColorSwitcher === 'active' && (
                                <FB_ColorControl
                                    label={__("Active Color", "frontis-blocks")}
                                    globalColor={carouselProgressbarBGActiveColor}
                                    setGlobalColor={(value) => setAttributes({ carouselProgressbarBGActiveColor: value === undefined ? '' : value })}
                                />
                            )}

                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Height", "frontis-blocks")}
                                rangeValue={carouselProgressbarHeight}
                                onChangeHandler={(value) => setAttributes({ carouselProgressbarHeight: value })}
                                rangeUnitHandler={(value) => setAttributes({ carouselProgressbarHeightUnits: value })}
                                deviceType={deviceType}
                                units={carouselProgressbarHeightUnits}
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
                            rangeValue={coverflowCarouselGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ coverflowCarouselGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={coverflowCarouselOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ coverflowCarouselOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={coverflowCarouselPositionType}
                            setPositionType={(value) => setAttributes({ coverflowCarouselPositionType: value })}

                            HZOrientationType={coverflowCarouselHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ coverflowCarouselHZOrientationType: value })
                            }
                            VROrientationType={coverflowCarouselVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ coverflowCarouselVROrientationType: value })
                            }

                            HZLeftOffset={coverflowCarouselHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ coverflowCarouselHZLeftOffset: value })}
                            HZLeftOffsetUnits={coverflowCarouselHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ coverflowCarouselHZLeftOffsetUnits: value })}
                            HZRightOffset={coverflowCarouselHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ coverflowCarouselHZRightOffset: value })}
                            HZRightOffsetUnits={coverflowCarouselHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ coverflowCarouselHZRightOffsetUnits: value })}

                            VRTopOffset={coverflowCarouselVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ coverflowCarouselVRTopOffset: value })}
                            VRTopOffsetUnits={coverflowCarouselVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ coverflowCarouselVRTopOffsetUnits: value })}
                            VRBottomOffset={coverflowCarouselVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ coverflowCarouselVRBottomOffset: value })}
                            VRBottomOffsetUnits={coverflowCarouselVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ coverflowCarouselVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={coverflowCarouselGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ coverflowCarouselGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={coverflowCarouselGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ coverflowCarouselGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalPaddingUnits}
                            spacingDesktop={coverflowCarouselGlobalPaddingDesktop}
                            spacingTablet={coverflowCarouselGlobalPaddingTablet}
                            spacingMobile={coverflowCarouselGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalMarginUnits}
                            spacingDesktop={coverflowCarouselGlobalMarginDesktop}
                            spacingTablet={coverflowCarouselGlobalMarginTablet}
                            spacingMobile={coverflowCarouselGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalMarginLink}
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
                            globalSwitcher={coverflowCarouselGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ coverflowCarouselGlobalBgColorSwitcher: value })}
                        />

                        {coverflowCarouselGlobalBgColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBgColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {coverflowCarouselGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBgHoverColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBgHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={coverflowCarouselGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ coverflowCarouselGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={coverflowCarouselGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ coverflowCarouselGlobalBorderColorSwitcher: value })}
                        />

                        {coverflowCarouselGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {coverflowCarouselGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={coverflowCarouselGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ coverflowCarouselGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalBorderUnits}
                            spacingDesktop={coverflowCarouselGlobalBorderDesktop}
                            spacingTablet={coverflowCarouselGlobalBorderTablet}
                            spacingMobile={coverflowCarouselGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={coverflowCarouselGlobalBorderRadiusUnits}
                            spacingDesktop={coverflowCarouselGlobalBorderRadiusDesktop}
                            spacingTablet={coverflowCarouselGlobalBorderRadiusTablet}
                            spacingMobile={coverflowCarouselGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={coverflowCarouselGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_BoxShadowControl
                            onBoxShadowChange={(value) => setAttributes({ coverflowCarouselGlobalBoxShadowValues: value })}
                            initialShadowValue={coverflowCarouselGlobalBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ coverflowCarouselGlobalBoxShadowCssValue: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={coverflowCarouselDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ coverflowCarouselDesktopSwitcher: value })}

                            tabletValue={coverflowCarouselTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ coverflowCarouselTabletSwitcher: value })}

                            mobileValue={coverflowCarouselMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ coverflowCarouselMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={coverflowCarouselGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ coverflowCarouselGlobalWraperCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
    );

    return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);