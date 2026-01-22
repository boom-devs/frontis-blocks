import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    PROGRESS_TEXT_OPTIONS,
	HEADING,
    OVERFLOW_OP,
    PROGRESSBAR_TYPE,
    PROGRESS_NUMBER_POSITION,
    BORDER_STYLES,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Range from '@Components/range';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';


import './editor.scss';
import FB_HtmlTagControl from '../../components/html-tag-control';
import FB_BackgroundColorControl from '../../components/background-color-control';
import FB_BoxShadowControl from '../../components/box-shadow';

export default function Inspector({ attributes, setAttributes }) {
	const {
		blockID,
		// deviceType,
        progressGlobalZIndex,
        progressbarOverflow,
        progressbarType,
		progressTextPosition,
        progressNumberPosition,
		progressNumber,
        progressbarVrAlignment,


        progressNumberColorSwitcher,
		progressNumberColor,
        progressNumberHoverColor,
        

        // progress color
        progressZebraTrackSwitcher,
        progressZebraTrackWidth,
        progressColorSwitcher,
        progressColorType,
        progressColor,
        progressGradientColor,
        progressCustomGradientSwitcher,
        progressCustomGradientInputValue,
        progressImageUrl,
        progressImageAlt,
        progressImageID,
        progressImagePosition,
        progressImageAttachment,
        progressImageRepeat,
        progressImageSize,

        // progress Background
        progressBgZebraTrackSwitcher,
        progressBgZebraTrackWidth,
        progressBgColorSwitcher,
        progressBgColorType,
        progressBgColor,
        progressBgGradientColor,
        progressBgCustomGradientSwitcher,
        progressBgCustomGradientInputValue,
        progressBgImageUrl,
        progressBgImageAlt,
        progressBgImageID,
        progressBgImagePosition,
        progressBgImageAttachment,
        progressBgImageRepeat,
        progressBgImageSize,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,
        progressBarHeightUnits,
        progressBarWidth,
        progressBarWidthUnits,

        progressTitleColorSwitcher,
        progressTitleColor,
        progressTitleHoverColor,

        // progress Border
        progressBorderStyle,
        progressBorderColor,
        progressBorderHoverColor,
        progressBorderColorSwitcher,

		progressBorderWidthUnits,
		progressBorderWidthDesktop,
		progressBorderWidthTablet,
		progressBorderWidthMobile,
		progressBorderWidthLink,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,
		progressBorderRadiusLink,

        // progress Background Border
        progressBgBorderStyle,
        progressBgBorderColor,
        progressBgBorderHoverColor,
        progressBgBorderColorSwitcher,

        progressBgBorderWidthUnits,
		progressBgBorderWidthDesktop,
		progressBgBorderWidthTablet,
		progressBgBorderWidthMobile,
		progressBgBorderWidthLink,

		progressBgBorderRadiusUnits,
		progressBgBorderRadiusDesktop,
		progressBgBorderRadiusTablet,
		progressBgBorderRadiusMobile,
		progressBgBorderRadiusLink,

        progressTitleGlobalTypoSwitcher,
        progressTitleGlobalTypographyData,
        progressTitleGlobalTypoType,
        progressTitleGlobalTypoOption,
        progressTitleFontFamily,
        progressTitleFontSize,
        progressTitleFontSizeUnits,
        progressTitleFontWeight,
        progressTitleFontStyle,
        progressTitleTextTransform,
        progressTitleTextDecoration,
        progressTitleLetterSpacing,
        progressTitleLetterSpacingUnits,
        progressTitleLineHeight,
        progressTitleLineHeightUnits,

        progressNumberGlobalTypoSwitcher,
        progressNumberGlobalTypographyData,
        progressNumberGlobalTypoType,
        progressNumberGlobalTypoOption,
        progressNumberFontFamily,
        progressNumberFontSize,
        progressNumberFontSizeUnits,
        progressNumberFontWeight,
        progressNumberFontStyle,
        progressNumberTextTransform,
        progressNumberTextDecoration,
        progressNumberLetterSpacing,
        progressNumberLetterSpacingUnits,
        progressNumberLineHeight,
        progressNumberLineHeightUnits,

        blockStyle,

        progressbarDesktopSwitcher,
		progressbarTabletSwitcher,
		progressbarMobileSwitcher,

        progressGlobalCustomCSS,
        progressGlobalWraperID,
		progressGlobalWraperClass,

        // Position
        progressbarPositionType,
        progressbarHZOrientationType,
        progressbarVROrientationType,
        progressbarHZLeftOffset,
        progressbarHZLeftOffsetUnits,
        progressbarHZRightOffset,
        progressbarHZRightOffsetUnits,
        progressbarVRTopOffset,
        progressbarVRTopOffsetUnits,
        progressbarVRBottomOffset,
        progressbarVRBottomOffsetUnits,

        progressTitleMarginUnits,
        progressTitleMarginDesktop,
        progressTitleMarginTablet,
        progressTitleMarginMobile,
        progressTitleMarginLink,

        progressNumberMarginUnits,
        progressNumberMarginDesktop,
        progressNumberMarginTablet,
        progressNumberMarginMobile,
        progressNumberMarginLink,

        // Background
        progressbarGlobalBgColorSwitcher,
        progressbarGlobalBgType,
        progressbarGlobalBgClassicColor,
        progressbarGlobalBgGradientColor,
        progressbarGlobalBgCustomGradientSwitcher,
        progressbarGlobalBgCustomGradientInputValue,
        progressbarGlobalBgImageUrl,
        progressbarGlobalBgImageAlt,
        progressbarGlobalBgImageID,
        progressbarGlobalBgImagePosition,
        progressbarGlobalBgImageAttachment,
        progressbarGlobalBgImageRepeat,
        progressbarGlobalBgImageSize,
        progressbarGlobalBgHoverType,
        progressbarGlobalBgHoverClassicColor,
        progressbarGlobalBgHoverGradientColor,
        progressbarGlobalBgHoverCustomGradientSwitcher,
        progressbarGlobalBgHoverCustomGradientInputValue,
        progressbarGlobalBgHoverImageUrl,
        progressbarGlobalBgHoverImageAlt,
        progressbarGlobalBgHoverImageID,
        progressbarGlobalBgHoverImagePosition,
        progressbarGlobalBgHoverImageAttachment,
        progressbarGlobalBgHoverImageRepeat,
        progressbarGlobalBgHoverImageSize,

        // padding
        progressbarGlobalPaddingUnits,
        progressbarGlobalPaddingDesktop,
        progressbarGlobalPaddingTablet,
        progressbarGlobalPaddingMobile,
        progressbarGlobalPaddingLink,

        // margin
        progressbarGlobalMarginUnits,
        progressbarGlobalMarginDesktop,
        progressbarGlobalMarginTablet,
        progressbarGlobalMarginMobile,
        progressbarGlobalMarginLink,

        // border
        progressbarGlobalBorder,
        progressbarGlobalBorderColor,
        progressbarGlobalBorderHoverColor,
        progressbarGlobalBorderColorSwitcher,
        progressbarGlobalBorderUnits,
        progressbarGlobalDesktopBorder,
        progressbarGlobalTabletBorder,
        progressbarGlobalMobileBorder,
        progressbarGlobalBorderLink,

        // border radius
        progressbarGlobalBorderRadiusUnits,
        progressbarGlobalDesktopBorderRadius,
        progressbarGlobalTabletBorderRadius,
        progressbarGlobalMobileBorderRadius,
        progressbarGlobalBorderRadiusLink,

        // box shadow
        progressbarGlobalBoxShadowSwitcher,
        progressbarGlobalBoxShadowValues,
        progressbarGlobalBoxShadowCssValue,
        progressbarGlobalHoverBoxShadowValues,
        progressbarGlobalHoverBoxShadowCssValue,

	} = attributes;
    
    const deviceType= useDeviceType();

    /** Start Progress Border Radius */
    const progressBorderWidthUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressBorderWidthLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressBorderWidthDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressBorderWidthTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressBorderWidthMobile: {
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
                    setAttributes({ progressBorderWidthDesktop: { ...progressBorderWidthDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressBorderWidthTablet: { ...progressBorderWidthTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressBorderWidthMobile: { ...progressBorderWidthMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressBorderWidthLinkBtn = () => {
        setAttributes({
            progressBorderWidthLink: !progressBorderWidthLink
        });
    };

    const progressBorderWidthUnitsHandler = (unit) => {
        setAttributes({
            progressBorderWidthUnits: {
                ...progressBorderWidthUnits,
                [deviceType]: unit
            }
        });
    };

    /** Start Progress Border Radius */
    const progressBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressBorderRadiusMobile: {
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
                    setAttributes({ progressBorderRadiusDesktop: { ...progressBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressBorderRadiusTablet: { ...progressBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressBorderRadiusMobile: { ...progressBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressBorderRadiusLinkBtn = () => {
        setAttributes({
            progressBorderRadiusLink: !progressBorderRadiusLink
        });
    };

    const progressBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            progressBorderRadiusUnits: {
                ...progressBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Start Progress Background Border Width */
    const progressBgBorderWidthUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressBgBorderWidthLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressBgBorderWidthDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressBgBorderWidthTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressBgBorderWidthMobile: {
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
                    setAttributes({ progressBgBorderWidthDesktop: { ...progressBgBorderWidthDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressBgBorderWidthTablet: { ...progressBgBorderWidthTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressBgBorderWidthMobile: { ...progressBgBorderWidthMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressBgBorderWidthLinkBtn = () => {
        setAttributes({
            progressBgBorderWidthLink: !progressBgBorderWidthLink
        });
    };

    const progressBgBorderWidthUnitsHandler = (unit) => {
        setAttributes({
            progressBgBorderWidthUnits: {
                ...progressBgBorderWidthUnits,
                [deviceType]: unit
            }
        });
    };

    /** Start Progress Background Border Radius */
    const progressBgBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressBgBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressBgBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressBgBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressBgBorderRadiusMobile: {
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
                    setAttributes({ progressBgBorderRadiusDesktop: { ...progressBgBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressBgBorderRadiusTablet: { ...progressBgBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressBgBorderRadiusMobile: { ...progressBgBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressBgBorderRadiusLinkBtn = () => {
        setAttributes({
            progressBgBorderRadiusLink: !progressBgBorderRadiusLink
        });
    };

    const progressBgBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            progressBgBorderRadiusUnits: {
                ...progressBgBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    
    /** Start Progress Number Margin */
    const progressNumberMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressNumberMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressNumberMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressNumberMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressNumberMarginMobile: {
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
                    setAttributes({ progressNumberMarginDesktop: { ...progressNumberMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressNumberMarginTablet: { ...progressNumberMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressNumberMarginMobile: { ...progressNumberMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressNumberMarginLinkBtn = () => {
        setAttributes({
            progressNumberMarginLink: !progressNumberMarginLink
        });
    };

    const progressNumberMarginUnitsHandler = (unit) => {
        setAttributes({
            progressNumberMarginUnits: {
                ...progressNumberMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Start Progress Title Margin */
    const progressTitleMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (progressTitleMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        progressTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        progressTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        progressTitleMarginMobile: {
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
                    setAttributes({ progressTitleMarginDesktop: { ...progressTitleMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ progressTitleMarginTablet: { ...progressTitleMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ progressTitleMarginMobile: { ...progressTitleMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const progressTitleMarginLinkBtn = () => {
        setAttributes({
            progressTitleMarginLink: !progressTitleMarginLink
        });
    };

    const progressTitleMarginUnitsHandler = (unit) => {
        setAttributes({
            progressTitleMarginUnits: {
                ...progressTitleMarginUnits,
                [deviceType]: unit
            }
        });
    };

    // progressbarGlobal margin
    const handleProgressbarGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( progressbarGlobalMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        progressbarGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        progressbarGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        progressbarGlobalMarginMobile: {
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
                    setAttributes( {progressbarGlobalMarginDesktop: {...progressbarGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {progressbarGlobalMarginTablet: {...progressbarGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {progressbarGlobalMarginMobile: {...progressbarGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleProgressbarGlobalMarginCombineBtn = () => {
        setAttributes( {progressbarGlobalMarginLink: !progressbarGlobalMarginLink} );
    }

    const handleProgressbarGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            progressbarGlobalMarginUnits: {
                ...progressbarGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // progressbarGlobal Padding Functionb
    const handleProgressbarGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( progressbarGlobalPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        progressbarGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        progressbarGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        progressbarGlobalPaddingMobile: {
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
                    setAttributes( {progressbarGlobalPaddingDesktop: {...progressbarGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {progressbarGlobalPaddingTablet: {...progressbarGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {progressbarGlobalPaddingMobile: {...progressbarGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleProgressbarGlobalPaddingCombineBtn = () => {
        setAttributes( {progressbarGlobalPaddingLink: !progressbarGlobalPaddingLink} );
    }

    const handleProgressbarGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            progressbarGlobalPaddingUnits: {
                ...progressbarGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // progressbarGlobal Border Function
    const handleProgressbarGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( progressbarGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        progressbarGlobalDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        progressbarGlobalTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        progressbarGlobalMobileBorder: {
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
                    setAttributes( {progressbarGlobalDesktopBorder: {...progressbarGlobalDesktopBorder, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {progressbarGlobalTabletBorder: {...progressbarGlobalTabletBorder, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {progressbarGlobalMobileBorder: {...progressbarGlobalMobileBorder, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleProgressbarGlobalBorderCombineBtn = () => {
        setAttributes( {progressbarGlobalBorderLink: !progressbarGlobalBorderLink} );
    }

    const handleProgressbarGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            progressbarGlobalBorderUnits: {
                ...progressbarGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // progressbarGlobal BorderRadius Function
    const handleProgressbarGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( progressbarGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        progressbarGlobalDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        progressbarGlobalTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        progressbarGlobalMobileBorderRadius: {
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
                    setAttributes( {progressbarGlobalDesktopBorderRadius: {...progressbarGlobalDesktopBorderRadius, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {progressbarGlobalTabletBorderRadius: {...progressbarGlobalTabletBorderRadius, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {progressbarGlobalMobileBorderRadius: {...progressbarGlobalMobileBorderRadius, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleProgressbarGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {progressbarGlobalBorderRadiusLink: !progressbarGlobalBorderRadiusLink} );
    }

    const handleProgressbarGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            progressbarGlobalBorderRadiusUnits: {
                ...progressbarGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }


    /** Default border for Progress */
    const progressBorderWidthDesktopGet = `${progressBorderWidthDesktop?.top}${progressBorderWidthUnits?.Desktop} ${progressBorderWidthDesktop?.right}${progressBorderWidthUnits?.Desktop} ${progressBorderWidthDesktop?.bottom}${progressBorderWidthUnits?.Desktop} ${progressBorderWidthDesktop?.left}${progressBorderWidthUnits?.Desktop}`;
    const progressBorderWidthTabletGet = `${progressBorderWidthTablet?.top}${progressBorderWidthUnits?.Tablet} ${progressBorderWidthTablet?.right}${progressBorderWidthUnits?.Tablet} ${progressBorderWidthTablet?.bottom}${progressBorderWidthUnits?.Tablet} ${progressBorderWidthTablet?.left}${progressBorderWidthUnits?.Tablet}`;
    const progressBorderWidthMobileGet = `${progressBorderWidthMobile?.top}${progressBorderWidthUnits?.Mobile} ${progressBorderWidthMobile?.right}${progressBorderWidthUnits?.Mobile} ${progressBorderWidthMobile?.bottom}${progressBorderWidthUnits?.Mobile} ${progressBorderWidthMobile?.left}${progressBorderWidthUnits?.Mobile}`;
    /** End Progress Border Radius */

    /** Default border radius for Progress */
    const progressBorderRadiusDesktopGet = `${progressBorderRadiusDesktop?.top}${progressBorderRadiusUnits?.Desktop} ${progressBorderRadiusDesktop?.right}${progressBorderRadiusUnits?.Desktop} ${progressBorderRadiusDesktop?.bottom}${progressBorderRadiusUnits?.Desktop} ${progressBorderRadiusDesktop?.left}${progressBorderRadiusUnits?.Desktop}`;
    const progressBorderRadiusTabletGet = `${progressBorderRadiusTablet?.top}${progressBorderRadiusUnits?.Tablet} ${progressBorderRadiusTablet?.right}${progressBorderRadiusUnits?.Tablet} ${progressBorderRadiusTablet?.bottom}${progressBorderRadiusUnits?.Tablet} ${progressBorderRadiusTablet?.left}${progressBorderRadiusUnits?.Tablet}`;
    const progressBorderRadiusMobileGet = `${progressBorderRadiusMobile?.top}${progressBorderRadiusUnits?.Mobile} ${progressBorderRadiusMobile?.right}${progressBorderRadiusUnits?.Mobile} ${progressBorderRadiusMobile?.bottom}${progressBorderRadiusUnits?.Mobile} ${progressBorderRadiusMobile?.left}${progressBorderRadiusUnits?.Mobile}`;
    /** End Progress Border Radius */

    /** Default border for Progress Background */
    const progressBgBorderWidthDesktopGet = `${progressBgBorderWidthDesktop?.top}${progressBgBorderWidthUnits?.Desktop} ${progressBgBorderWidthDesktop?.right}${progressBgBorderWidthUnits?.Desktop} ${progressBgBorderWidthDesktop?.bottom}${progressBgBorderWidthUnits?.Desktop} ${progressBgBorderWidthDesktop?.left}${progressBgBorderWidthUnits?.Desktop}`;
    const progressBgBorderWidthTabletGet = `${progressBgBorderWidthTablet?.top}${progressBgBorderWidthUnits?.Tablet} ${progressBgBorderWidthTablet?.right}${progressBgBorderWidthUnits?.Tablet} ${progressBgBorderWidthTablet?.bottom}${progressBgBorderWidthUnits?.Tablet} ${progressBgBorderWidthTablet?.left}${progressBgBorderWidthUnits?.Tablet}`;
    const progressBgBorderWidthMobileGet = `${progressBgBorderWidthMobile?.top}${progressBgBorderWidthUnits?.Mobile} ${progressBgBorderWidthMobile?.right}${progressBgBorderWidthUnits?.Mobile} ${progressBgBorderWidthMobile?.bottom}${progressBgBorderWidthUnits?.Mobile} ${progressBgBorderWidthMobile?.left}${progressBgBorderWidthUnits?.Mobile}`;
    /** End Progress Background Border Radius */

    /** Default border radius for Progress Background */
    const progressBgBorderRadiusDesktopGet = `${progressBgBorderRadiusDesktop?.top}${progressBgBorderRadiusUnits?.Desktop} ${progressBgBorderRadiusDesktop?.right}${progressBgBorderRadiusUnits?.Desktop} ${progressBgBorderRadiusDesktop?.bottom}${progressBgBorderRadiusUnits?.Desktop} ${progressBgBorderRadiusDesktop?.left}${progressBgBorderRadiusUnits?.Desktop}`;
    const progressBgBorderRadiusTabletGet = `${progressBgBorderRadiusTablet?.top}${progressBgBorderRadiusUnits?.Tablet} ${progressBgBorderRadiusTablet?.right}${progressBgBorderRadiusUnits?.Tablet} ${progressBgBorderRadiusTablet?.bottom}${progressBgBorderRadiusUnits?.Tablet} ${progressBgBorderRadiusTablet?.left}${progressBgBorderRadiusUnits?.Tablet}`;
    const progressBgBorderRadiusMobileGet = `${progressBgBorderRadiusMobile?.top}${progressBgBorderRadiusUnits?.Mobile} ${progressBgBorderRadiusMobile?.right}${progressBgBorderRadiusUnits?.Mobile} ${progressBgBorderRadiusMobile?.bottom}${progressBgBorderRadiusUnits?.Mobile} ${progressBgBorderRadiusMobile?.left}${progressBgBorderRadiusUnits?.Mobile}`;
    /** End Progress Background Border Radius */


    /** Progress Number Margin */
    const progressNumberMarginDesktopGet = `${progressNumberMarginDesktop?.top}${progressNumberMarginUnits?.Desktop} ${progressNumberMarginDesktop?.right}${progressNumberMarginUnits?.Desktop} ${progressNumberMarginDesktop?.bottom}${progressNumberMarginUnits?.Desktop} ${progressNumberMarginDesktop?.left}${progressNumberMarginUnits?.Desktop}`;
    const progressNumberMarginTabletGet = `${progressNumberMarginTablet?.top}${progressNumberMarginUnits?.Tablet} ${progressNumberMarginTablet?.right}${progressNumberMarginUnits?.Tablet} ${progressNumberMarginTablet?.bottom}${progressNumberMarginUnits?.Tablet} ${progressNumberMarginTablet?.left}${progressNumberMarginUnits?.Tablet}`;
    const progressNumberMarginMobileGet = `${progressNumberMarginMobile?.top}${progressNumberMarginUnits?.Mobile} ${progressNumberMarginMobile?.right}${progressNumberMarginUnits?.Mobile} ${progressNumberMarginMobile?.bottom}${progressNumberMarginUnits?.Mobile} ${progressNumberMarginMobile?.left}${progressNumberMarginUnits?.Mobile}`;
    /** Progress Number Margin */

    /** Progress Title Margin */
    const progressTitleMarginDesktopGet = `${progressTitleMarginDesktop?.top}${progressTitleMarginUnits?.Desktop} ${progressTitleMarginDesktop?.right}${progressTitleMarginUnits?.Desktop} ${progressTitleMarginDesktop?.bottom}${progressTitleMarginUnits?.Desktop} ${progressTitleMarginDesktop?.left}${progressTitleMarginUnits?.Desktop}`;
    const progressTitleMarginTabletGet = `${progressTitleMarginTablet?.top}${progressTitleMarginUnits?.Tablet} ${progressTitleMarginTablet?.right}${progressTitleMarginUnits?.Tablet} ${progressTitleMarginTablet?.bottom}${progressTitleMarginUnits?.Tablet} ${progressTitleMarginTablet?.left}${progressTitleMarginUnits?.Tablet}`;
    const progressTitleMarginMobileGet = `${progressTitleMarginMobile?.top}${progressTitleMarginUnits?.Mobile} ${progressTitleMarginMobile?.right}${progressTitleMarginUnits?.Mobile} ${progressTitleMarginMobile?.bottom}${progressTitleMarginUnits?.Mobile} ${progressTitleMarginMobile?.left}${progressTitleMarginUnits?.Mobile}`;
    /** Progress Title Margin */

    /** Progressbar Global Padding */
    const progressbarGlobalPaddingDesktopGet = `${progressbarGlobalPaddingDesktop?.top}${progressbarGlobalPaddingUnits?.Desktop} ${progressbarGlobalPaddingDesktop?.right}${progressbarGlobalPaddingUnits?.Desktop} ${progressbarGlobalPaddingDesktop?.bottom}${progressbarGlobalPaddingUnits?.Desktop} ${progressbarGlobalPaddingDesktop?.left}${progressbarGlobalPaddingUnits?.Desktop}`;
    const progressbarGlobalPaddingTabletGet = `${progressbarGlobalPaddingTablet?.top}${progressbarGlobalPaddingUnits?.Tablet} ${progressbarGlobalPaddingTablet?.right}${progressbarGlobalPaddingUnits?.Tablet} ${progressbarGlobalPaddingTablet?.bottom}${progressbarGlobalPaddingUnits?.Tablet} ${progressbarGlobalPaddingTablet?.left}${progressbarGlobalPaddingUnits?.Tablet}`;
    const progressbarGlobalPaddingMobileGet = `${progressbarGlobalPaddingMobile?.top}${progressbarGlobalPaddingUnits?.Mobile} ${progressbarGlobalPaddingMobile?.right}${progressbarGlobalPaddingUnits?.Mobile} ${progressbarGlobalPaddingMobile?.bottom}${progressbarGlobalPaddingUnits?.Mobile} ${progressbarGlobalPaddingMobile?.left}${progressbarGlobalPaddingUnits?.Mobile}`;
    /** End Progressbar Global Padding */

    /** Progressbar Global Margin */
    const progressbarGlobalMarginDesktopGet = `${progressbarGlobalMarginDesktop?.top}${progressbarGlobalMarginUnits?.Desktop} ${progressbarGlobalMarginDesktop?.right}${progressbarGlobalMarginUnits?.Desktop} ${progressbarGlobalMarginDesktop?.bottom}${progressbarGlobalMarginUnits?.Desktop} ${progressbarGlobalMarginDesktop?.left}${progressbarGlobalMarginUnits?.Desktop}`;
    const progressbarGlobalMarginTabletGet = `${progressbarGlobalMarginTablet?.top}${progressbarGlobalMarginUnits?.Tablet} ${progressbarGlobalMarginTablet?.right}${progressbarGlobalMarginUnits?.Tablet} ${progressbarGlobalMarginTablet?.bottom}${progressbarGlobalMarginUnits?.Tablet} ${progressbarGlobalMarginTablet?.left}${progressbarGlobalMarginUnits?.Tablet}`;
    const progressbarGlobalMarginMobileGet = `${progressbarGlobalMarginMobile?.top}${progressbarGlobalMarginUnits?.Mobile} ${progressbarGlobalMarginMobile?.right}${progressbarGlobalMarginUnits?.Mobile} ${progressbarGlobalMarginMobile?.bottom}${progressbarGlobalMarginUnits?.Mobile} ${progressbarGlobalMarginMobile?.left}${progressbarGlobalMarginUnits?.Mobile}`;
    /** End Progressbar Global Margin */

    /** Progressbar Global Border */
    const progressbarGlobalDesktopBorderGet = `${progressbarGlobalDesktopBorder?.top}${progressbarGlobalBorderUnits?.Desktop} ${progressbarGlobalDesktopBorder?.right}${progressbarGlobalBorderUnits?.Desktop} ${progressbarGlobalDesktopBorder?.bottom}${progressbarGlobalBorderUnits?.Desktop} ${progressbarGlobalDesktopBorder?.left}${progressbarGlobalBorderUnits?.Desktop}`;
    const progressbarGlobalTabletBorderGet = `${progressbarGlobalTabletBorder?.top}${progressbarGlobalBorderUnits?.Tablet} ${progressbarGlobalTabletBorder?.right}${progressbarGlobalBorderUnits?.Tablet} ${progressbarGlobalTabletBorder?.bottom}${progressbarGlobalBorderUnits?.Tablet} ${progressbarGlobalTabletBorder?.left}${progressbarGlobalBorderUnits?.Tablet}`;
    const progressbarGlobalMobileBorderGet = `${progressbarGlobalMobileBorder?.top}${progressbarGlobalBorderUnits?.Mobile} ${progressbarGlobalMobileBorder?.right}${progressbarGlobalBorderUnits?.Mobile} ${progressbarGlobalMobileBorder?.bottom}${progressbarGlobalBorderUnits?.Mobile} ${progressbarGlobalMobileBorder?.left}${progressbarGlobalBorderUnits?.Mobile}`;
    /** End Progressbar Global Border */

    /** Progressbar Global Border Radius */
    const progressbarGlobalDesktopBorderRadiusGet = `${progressbarGlobalDesktopBorderRadius?.top}${progressbarGlobalBorderRadiusUnits?.Desktop} ${progressbarGlobalDesktopBorderRadius?.right}${progressbarGlobalBorderRadiusUnits?.Desktop} ${progressbarGlobalDesktopBorderRadius?.bottom}${progressbarGlobalBorderRadiusUnits?.Desktop} ${progressbarGlobalDesktopBorderRadius?.left}${progressbarGlobalBorderRadiusUnits?.Desktop}`;
    const progressbarGlobalTabletBorderRadiusGet = `${progressbarGlobalTabletBorderRadius?.top}${progressbarGlobalBorderRadiusUnits?.Tablet} ${progressbarGlobalTabletBorderRadius?.right}${progressbarGlobalBorderRadiusUnits?.Tablet} ${progressbarGlobalTabletBorderRadius?.bottom}${progressbarGlobalBorderRadiusUnits?.Tablet} ${progressbarGlobalTabletBorderRadius?.left}${progressbarGlobalBorderRadiusUnits?.Tablet}`;
    const progressbarGlobalMobileBorderRadiusGet = `${progressbarGlobalMobileBorderRadius?.top}${progressbarGlobalBorderRadiusUnits?.Mobile} ${progressbarGlobalMobileBorderRadius?.right}${progressbarGlobalBorderRadiusUnits?.Mobile} ${progressbarGlobalMobileBorderRadius?.bottom}${progressbarGlobalBorderRadiusUnits?.Mobile} ${progressbarGlobalMobileBorderRadius?.left}${progressbarGlobalBorderRadiusUnits?.Mobile}`;
    /** End Progressbar Global Border Radius */

    /**
     * Get all block style
     */
    const allBlockStyle = useMemo(() => `

        .${blockID}.fb-progressbar-main-wrapper {
            ${progressbarPositionType === 'default' ? `position: relative;` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' ? `width: 100%;` : ''}
            ${progressbarPositionType !== 'default' ? `position: ${progressbarPositionType};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset?.Desktop !== undefined ? `left: ${progressbarHZLeftOffset?.Desktop}${progressbarHZLeftOffsetUnits?.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset?.Desktop !== undefined ? `right: ${progressbarHZRightOffset?.Desktop}${progressbarHZRightOffsetUnits?.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset?.Desktop !== undefined ? `top: ${progressbarVRTopOffset?.Desktop}${progressbarVRTopOffsetUnits?.Desktop};` : ''}
            ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset?.Desktop !== undefined ? `bottom: ${progressbarVRBottomOffset?.Desktop}${progressbarVRBottomOffsetUnits?.Desktop};` : ''}
            ${progressGlobalZIndex.Desktop ? `z-index: ${progressGlobalZIndex.Desktop};` : ''}
            ${progressbarOverflow !== 'default' ? `overflow: ${progressbarOverflow};` : ''}
        }
        
        .${blockID} .fb-progressbar-wrapper {
            position: relative;
            overflow: hidden;
            ${progressbarGlobalPaddingDesktop?.top ? `padding: ${progressbarGlobalPaddingDesktopGet};` : ''}
            ${progressbarGlobalMarginDesktop?.top ? `margin: ${progressbarGlobalMarginDesktopGet};` : ''}
            ${progressbarGlobalBorder ? `border-style: ${progressbarGlobalBorder};` : ''}
            ${progressbarGlobalBorderColor ? `border-color: ${progressbarGlobalBorderColor};` : ''}
            ${progressbarGlobalDesktopBorder?.top ? `border-width: ${progressbarGlobalDesktopBorderGet};` : ''}
            ${progressbarGlobalDesktopBorderRadius?.top ? `border-radius: ${progressbarGlobalDesktopBorderRadiusGet};` : ''}
            ${
                progressbarGlobalBgType === "gradient"
                  ? `background: ${
                      progressbarGlobalBgCustomGradientSwitcher && progressbarGlobalBgCustomGradientInputValue
                        ? progressbarGlobalBgCustomGradientInputValue
                        : progressbarGlobalBgGradientColor
                    };`
                  : progressbarGlobalBgImageUrl !== undefined && progressbarGlobalBgImageUrl !== null && progressbarGlobalBgImageUrl !== ""
                  ? `
                    ${progressbarGlobalBgImageUrl !== undefined ? `background-image: url(${progressbarGlobalBgImageUrl});` : ''}
                    ${progressbarGlobalBgImagePosition !== undefined ? `background-position: ${progressbarGlobalBgImagePosition};` : ''}
                    ${progressbarGlobalBgImageAttachment !== undefined ? `background-attachment: ${progressbarGlobalBgImageAttachment};` : ''}
                    ${progressbarGlobalBgImageRepeat !== undefined ? `background-repeat: ${progressbarGlobalBgImageRepeat};` : ''}
                    ${progressbarGlobalBgImageSize !== undefined ? `background-size: ${progressbarGlobalBgImageSize};` : ''}
                  `
                  : progressbarGlobalBgClassicColor ? `background: ${progressbarGlobalBgClassicColor};` : ''
            }
            ${progressbarGlobalBoxShadowCssValue ? `box-shadow: ${progressbarGlobalBoxShadowCssValue};` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item {
            display: flex;
            flex-direction: column;
            ${progressbarType === 'vertical' && progressbarVrAlignment?.Desktop === 'left' ? `align-items: flex-start;` : ''}
            ${progressbarType === 'vertical' && progressbarVrAlignment?.Desktop === 'center' ? `align-items: center;` : ''}
            ${progressbarType === 'vertical' && progressbarVrAlignment?.Desktop === 'right' ? `align-items: flex-end;` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content .fb-progressbar-label {
            ${progressTitleColor ? `color: ${progressTitleColor};` : ''}

            ${progressTitleGlobalTypoSwitcher?.fontFamily === true && progressTitleGlobalTypographyData?.fontFamily ? `font-family: ${progressTitleGlobalTypographyData?.fontFamily};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontSize === true && progressTitleGlobalTypographyData?.fontSize ? `font-size: ${progressTitleGlobalTypographyData?.fontSize};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontWeight === true && progressTitleGlobalTypographyData?.fontWeight ? `font-weight: ${progressTitleGlobalTypographyData?.fontWeight};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontStyle === true && progressTitleGlobalTypographyData?.fontStyle ? `font-style: ${progressTitleGlobalTypographyData?.fontStyle};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textTransform === true && progressTitleGlobalTypographyData?.textTransform ? `text-transform: ${progressTitleGlobalTypographyData?.textTransform};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textDecoration === true && progressTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${progressTitleGlobalTypographyData?.textDecoration};` : ''}
            ${progressTitleGlobalTypoSwitcher?.letterSpacing === true && progressTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${progressTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${progressTitleGlobalTypoSwitcher?.lineHeight === true && progressTitleGlobalTypographyData?.lineHeight ? `line-height: ${progressTitleGlobalTypographyData?.lineHeight};` : ''}

            ${progressTitleGlobalTypoSwitcher?.fontFamily === false && progressTitleFontFamily && progressTitleFontFamily !== 'Default' ? `font-family: ${progressTitleFontFamily};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontSize === false && progressTitleFontSize?.Desktop && progressTitleFontSizeUnits?.Desktop ? `font-size: ${progressTitleFontSize?.Desktop}${progressTitleFontSizeUnits?.Desktop};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontWeight === false && progressTitleFontWeight ? `font-weight: ${progressTitleFontWeight};` : ''}
            ${progressTitleGlobalTypoSwitcher?.fontStyle === false && progressTitleFontStyle ? `font-style: ${progressTitleFontStyle};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textTransform === false && progressTitleTextTransform ? `text-transform: ${progressTitleTextTransform};` : ''}
            ${progressTitleGlobalTypoSwitcher?.textDecoration === false && progressTitleTextDecoration ? `text-decoration: ${progressTitleTextDecoration};` : ''}
            ${progressTitleGlobalTypoSwitcher?.letterSpacing === false && progressTitleLetterSpacing?.Desktop && progressTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${progressTitleLetterSpacing?.Desktop}${progressTitleLetterSpacingUnits?.Desktop};` : ''}
            ${progressTitleGlobalTypoSwitcher?.lineHeight === false && progressTitleLineHeight?.Desktop && progressTitleLineHeightUnits?.Desktop ? `line-height: ${progressTitleLineHeight?.Desktop}${progressTitleLineHeightUnits?.Desktop};` : ''}
        
            ${progressTitleMarginDesktop?.top ? `margin: ${progressTitleMarginDesktopGet};` : ''}
            transition: all 0.5s ease-in-out;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-content .fb-progressbar-label {
            ${progressTitleHoverColor ? `color: ${progressTitleHoverColor};` : ''}
            transition: all 0.5s ease-in-out;
        }

        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            ${
                progressBgZebraTrackSwitcher === false && progressBgColorType === "gradient"
                  ? `background: ${
                      progressBgCustomGradientSwitcher && progressBgCustomGradientInputValue
                        ? progressBgCustomGradientInputValue
                        : progressBgGradientColor
                    };`
                  : progressBgImageUrl !== undefined && progressBgImageUrl !== null && progressBgImageUrl !== ""
                  ? `
                    ${progressBgImageUrl !== undefined ? `background-image: url(${progressBgImageUrl});` : ''}
                    ${progressBgImagePosition !== undefined ? `background-position: ${progressBgImagePosition};` : ''}
                    ${progressBgImageAttachment !== undefined ? `background-attachment: ${progressBgImageAttachment};` : ''}
                    ${progressBgImageRepeat !== undefined ? `background-repeat: ${progressBgImageRepeat};` : ''}
                    ${progressBgImageSize !== undefined ? `background-size: ${progressBgImageSize};` : ''}
                  `
                  : progressBgColor ? `background: ${progressBgColor};` : ''
            }
            ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth?.Desktop}px, transparent ${progressBgZebraTrackWidth?.Desktop}px, transparent calc(${progressBgZebraTrackWidth?.Desktop * 2}px));` : ''};
            ${progressBgBorderStyle ? `border-style: ${progressBgBorderStyle};` : ''}
            ${progressBgBorderColor ? `border-color: ${progressBgBorderColor};` : ''}
            ${progressBgBorderWidthDesktop?.top ? `border-width: ${progressBgBorderWidthDesktopGet};` : ''}
            ${progressBgBorderRadiusDesktop?.top ? `border-radius: ${progressBgBorderRadiusDesktopGet};` : ''}
            ${progressBarHeight?.Desktop ? `height: ${progressBarHeight?.Desktop}${progressBarHeightUnits?.Desktop};` : ''}
            ${progressbarType === 'vertical' && progressBarWidth?.Desktop ? `width: ${progressBarWidth?.Desktop}${progressBarWidthUnits?.Desktop};` : ''}
            overflow: hidden;
            position: relative;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-line-wrapper {
            ${progressBgBorderHoverColor ? `border-color: ${progressBgBorderHoverColor};` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-content {
            position: relative;
            z-index: 5;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line {
            position: absolute;
            left: 0;
            bottom: 0;
            ${
                progressZebraTrackSwitcher === false && progressColorType === "gradient"
                  ? `background: ${
                      progressCustomGradientSwitcher && progressCustomGradientInputValue
                        ? progressCustomGradientInputValue
                        : progressGradientColor
                    };`
                  : progressImageUrl !== undefined && progressImageUrl !== null && progressImageUrl !== ""
                  ? `
                    ${progressImageUrl !== undefined ? `background-image: url(${progressImageUrl});` : ''}
                    ${progressImagePosition !== undefined ? `background-position: ${progressImagePosition};` : ''}
                    ${progressImageAttachment !== undefined ? `background-attachment: ${progressImageAttachment};` : ''}
                    ${progressImageRepeat !== undefined ? `background-repeat: ${progressImageRepeat};` : ''}
                    ${progressImageSize !== undefined ? `background-size: ${progressImageSize};` : ''}
                  `
                  : progressColor ? `background: ${progressColor};` : ''
            }
            ${progressZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressColor}, ${progressColor} ${progressZebraTrackWidth?.Desktop}px, transparent ${progressZebraTrackWidth?.Desktop}px, transparent calc(${progressZebraTrackWidth?.Desktop * 2}px));` : ''};
            ${progressBorderStyle ? `border-style: ${progressBorderStyle};` : ''}
            ${progressBorderColor ? `border-color: ${progressBorderColor};` : ''}
            ${progressBorderWidthDesktop?.top ? `border-width: ${progressBorderWidthDesktopGet};` : ''}
            ${progressBorderRadiusDesktop?.top ? `border-radius: ${progressBorderRadiusDesktopGet};` : ''}
            box-sizing: border-box;
            transition: ${progressbarType === 'vertical' ? 'height' : 'width'} 1.5s ease-in-out;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-line-wrapper .fb-progressbar-line {
            ${progressBorderHoverColor ? `border-color: ${progressBorderHoverColor};` : ''}
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line .fb-progressbar-number {
            position: absolute;
            ${progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && progressNumberPosition === 'with-progressbar' ? `top: 0; right: 0;` : ''}
            ${progressbarType === 'horizontal' && progressTextPosition === 'text-inSide' && progressNumberPosition === 'with-progressbar' ? `right: 0; top: 50%; transform: translateY(-50%);` : ''}
            ${progressbarType === 'vertical' && progressNumberPosition === 'with-progressbar' ? `top: 0; left: 50%; transform: translateX(-50%);` : ''}
            transition: ${progressbarType === 'vertical' ? 'top' : 'left'} 1.5s ease-in-out;
            z-index: 10;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-number {
            ${progressNumberGlobalTypoSwitcher?.fontFamily === true && progressNumberGlobalTypographyData?.fontFamily ? `font-family: ${progressNumberGlobalTypographyData?.fontFamily};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontSize === true && progressNumberGlobalTypographyData?.fontSize ? `font-size: ${progressNumberGlobalTypographyData?.fontSize};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontWeight === true && progressNumberGlobalTypographyData?.fontWeight ? `font-weight: ${progressNumberGlobalTypographyData?.fontWeight};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontStyle === true && progressNumberGlobalTypographyData?.fontStyle ? `font-style: ${progressNumberGlobalTypographyData?.fontStyle};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textTransform === true && progressNumberGlobalTypographyData?.textTransform ? `text-transform: ${progressNumberGlobalTypographyData?.textTransform};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textDecoration === true && progressNumberGlobalTypographyData?.textDecoration ? `text-decoration: ${progressNumberGlobalTypographyData?.textDecoration};` : ''}
            ${progressNumberGlobalTypoSwitcher?.letterSpacing === true && progressNumberGlobalTypographyData?.letterSpacing ? `letter-spacing: ${progressNumberGlobalTypographyData?.letterSpacing};` : ''}
            ${progressNumberGlobalTypoSwitcher?.lineHeight === true && progressNumberGlobalTypographyData?.lineHeight ? `line-height: ${progressNumberGlobalTypographyData?.lineHeight};` : ''}

            ${progressNumberGlobalTypoSwitcher?.fontFamily === false && progressNumberFontFamily && progressNumberFontFamily !== 'Default' ? `font-family: ${progressNumberFontFamily};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontSize === false && progressNumberFontSize?.Desktop && progressNumberFontSizeUnits?.Desktop ? `font-size: ${progressNumberFontSize?.Desktop}${progressNumberFontSizeUnits?.Desktop};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontWeight === false && progressNumberFontWeight ? `font-weight: ${progressNumberFontWeight};` : ''}
            ${progressNumberGlobalTypoSwitcher?.fontStyle === false && progressNumberFontStyle ? `font-style: ${progressNumberFontStyle};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textTransform === false && progressNumberTextTransform ? `text-transform: ${progressNumberTextTransform};` : ''}
            ${progressNumberGlobalTypoSwitcher?.textDecoration === false && progressNumberTextDecoration ? `text-decoration: ${progressNumberTextDecoration};` : ''}
            ${progressNumberGlobalTypoSwitcher?.letterSpacing === false && progressNumberLetterSpacing?.Desktop && progressNumberLetterSpacingUnits?.Desktop ? `letter-spacing: ${progressNumberLetterSpacing?.Desktop}${progressNumberLetterSpacingUnits?.Desktop};` : ''}
            ${progressNumberGlobalTypoSwitcher?.lineHeight === false && progressNumberLineHeight?.Desktop && progressNumberLineHeightUnits?.Desktop ? `line-height: ${progressNumberLineHeight?.Desktop}${progressNumberLineHeightUnits?.Desktop};` : ''}
        
            ${progressNumberMarginDesktop?.top ? `margin: ${progressNumberMarginDesktopGet};` : ''}
            ${progressNumberColor ? `color: ${progressNumberColor};` : ''}
            transition: all 0.5s ease-in-out;
        }
        .${blockID} .fb-progressbar-wrapper .fb-progressbar-item:hover .fb-progressbar-number {
            ${progressNumberHoverColor ? `color: ${progressNumberHoverColor};` : ''}
            transition: all 0.5s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-progressbar-main-wrapper {
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset?.Tablet !== undefined ? `left: ${progressbarHZLeftOffset?.Tablet}${progressbarHZLeftOffsetUnits?.Tablet};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset?.Tablet !== undefined ? `right: ${progressbarHZRightOffset?.Tablet}${progressbarHZRightOffsetUnits?.Tablet};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset?.Tablet !== undefined ? `top: ${progressbarVRTopOffset?.Tablet}${progressbarVRTopOffsetUnits?.Tablet};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset.Tablet !== undefined ? `bottom: ${progressbarVRBottomOffset.Tablet}${progressbarVRBottomOffsetUnits.Tablet};` : ''}
                ${progressGlobalZIndex?.Tablet ? `z-index: ${progressGlobalZIndex?.Tablet};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper {
                ${progressbarGlobalPaddingTablet?.top ? `padding: ${progressbarGlobalPaddingTabletGet};` : ''}
                ${progressbarGlobalMarginTablet?.top ? `margin: ${progressbarGlobalMarginTabletGet};` : ''}
                ${progressbarGlobalTabletBorder?.top ? `border-width: ${progressbarGlobalTabletBorderGet};` : ''}
                ${progressbarGlobalTabletBorderRadius?.top ? `border-radius: ${progressbarGlobalTabletBorderRadiusGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item {
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Tablet === 'left' ? `align-items: flex-start;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Tablet === 'center' ? `align-items: center;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Tablet === 'right' ? `align-items: flex-end;` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content .fb-progressbar-label {
                ${progressTitleGlobalTypoSwitcher?.fontSize === false && progressTitleFontSize?.Tablet && progressTitleFontSizeUnits?.Tablet ? `font-size: ${progressTitleFontSize?.Tablet}${progressTitleFontSizeUnits?.Tablet};` : ''}
                ${progressTitleGlobalTypoSwitcher?.letterSpacing === false && progressTitleLetterSpacing?.Tablet && progressTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${progressTitleLetterSpacing?.Tablet}${progressTitleLetterSpacingUnits?.Tablet};` : ''}
                ${progressTitleGlobalTypoSwitcher?.lineHeight === false && progressTitleLineHeight?.Tablet && progressTitleLineHeightUnits?.Tablet ? `line-height: ${progressTitleLineHeight?.Tablet}${progressTitleLineHeightUnits?.Tablet};` : ''}
            
                ${progressTitleMarginTablet?.top ? `margin: ${progressTitleMarginTabletGet};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper {
                ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth?.Tablet}px, transparent ${progressBgZebraTrackWidth?.Tablet}px, transparent calc(${progressBgZebraTrackWidth?.Tablet * 2}px));` : ''};
                ${progressBgBorderWidthTablet?.top ? `border-width: ${progressBgBorderWidthTabletGet};` : ''}
                ${progressBgBorderRadiusTablet?.top ? `border-radius: ${progressBgBorderRadiusTabletGet};` : ''}
                ${progressBarHeight.Tablet ? `height: ${progressBarHeight.Tablet}${progressBarHeightUnits.Tablet};` : ''}
                ${progressbarType === 'vertical' && progressBarWidth?.Tablet ? `width: ${progressBarWidth?.Tablet}${progressBarWidthUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line {
                ${progressZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressColor}, ${progressColor} ${progressZebraTrackWidth?.Tablet}px, transparent ${progressZebraTrackWidth?.Tablet}px, transparent calc(${progressZebraTrackWidth?.Tablet * 2}px));` : ''};
                ${progressBorderWidthTablet?.top ? `border-width: ${progressBorderWidthTabletGet};` : ''}
                ${progressBorderRadiusTablet?.top ? `border-radius: ${progressBorderRadiusTabletGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-number {
                ${progressNumberGlobalTypoSwitcher?.fontSize === false && progressNumberFontSize?.Tablet && progressNumberFontSizeUnits?.Tablet ? `font-size: ${progressNumberFontSize?.Tablet}${progressNumberFontSizeUnits?.Tablet};` : ''}
                ${progressNumberGlobalTypoSwitcher?.letterSpacing === false && progressNumberLetterSpacing?.Tablet && progressNumberLetterSpacingUnits?.Tablet ? `letter-spacing: ${progressNumberLetterSpacing?.Tablet}${progressNumberLetterSpacingUnits?.Tablet};` : ''}
                ${progressNumberGlobalTypoSwitcher?.lineHeight === false && progressNumberLineHeight?.Tablet && progressNumberLineHeightUnits?.Tablet ? `line-height: ${progressNumberLineHeight?.Tablet}${progressNumberLineHeightUnits?.Tablet};` : ''}
            
                ${progressNumberMarginTablet?.top ? `margin: ${progressNumberMarginTabletGet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {

            .${blockID}.fb-progressbar-main-wrapper {
                ${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'left' && progressbarHZLeftOffset?.Mobile !== undefined ? `left: ${progressbarHZLeftOffset?.Mobile}${progressbarHZLeftOffsetUnits?.Mobile};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarHZOrientationType === 'right' && progressbarHZRightOffset?.Mobile !== undefined ? `right: ${progressbarHZRightOffset?.Mobile}${progressbarHZRightOffsetUnits?.Mobile};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'top' && progressbarVRTopOffset?.Mobile !== undefined ? `top: ${progressbarVRTopOffset?.Mobile}${progressbarVRTopOffsetUnits?.Mobile};` : ''}
				${progressbarPositionType !== 'default' && progressbarPositionType !== 'relative' && progressbarVROrientationType === 'bottom' && progressbarVRBottomOffset?.Mobile !== undefined ? `bottom: ${progressbarVRBottomOffset?.Mobile}${progressbarVRBottomOffsetUnits?.Mobile};` : ''} 
                ${progressGlobalZIndex?.Mobile ? `z-index: ${progressGlobalZIndex?.Mobile};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper {
                ${progressbarGlobalPaddingMobile?.top ? `padding: ${progressbarGlobalPaddingMobileGet};` : ''}
                ${progressbarGlobalMarginMobile?.top ? `margin: ${progressbarGlobalMarginMobileGet};` : ''}
                ${progressbarGlobalMobileBorder?.top ? `border-width: ${progressbarGlobalMobileBorderGet};` : ''}
                ${progressbarGlobalMobileBorderRadius?.top ? `border-radius: ${progressbarGlobalMobileBorderRadiusGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item {
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Mobile === 'left' ? `align-items: flex-start;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Mobile === 'center' ? `align-items: center;` : ''}
                ${progressbarType === 'vertical' && progressbarVrAlignment?.Mobile === 'right' ? `align-items: flex-end;` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-content .fb-progressbar-label {
                ${progressTitleGlobalTypoSwitcher?.fontSize === false && progressTitleFontSize?.Mobile && progressTitleFontSizeUnits?.Mobile ? `font-size: ${progressTitleFontSize?.Mobile}${progressTitleFontSizeUnits?.Mobile};` : ''}
                ${progressTitleGlobalTypoSwitcher?.letterSpacing === false && progressTitleLetterSpacing?.Mobile && progressTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${progressTitleLetterSpacing?.Mobile}${progressTitleLetterSpacingUnits?.Mobile};` : ''}
                ${progressTitleGlobalTypoSwitcher?.lineHeight === false && progressTitleLineHeight?.Mobile && progressTitleLineHeightUnits?.Mobile ? `line-height: ${progressTitleLineHeight?.Mobile}${progressTitleLineHeightUnits?.Mobile};` : ''}
            
                ${progressTitleMarginTablet?.top ? `margin: ${progressTitleMarginTabletGet};` : ''}
            }

            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper {
                ${progressBgZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressBgColor}, ${progressBgColor} ${progressBgZebraTrackWidth?.Mobile}px, transparent ${progressBgZebraTrackWidth?.Mobile}px, transparent calc(${progressBgZebraTrackWidth?.Mobile * 2}px));` : ''};
                ${progressBgBorderWidthMobile?.top ? `border-width: ${progressBgBorderWidthMobileGet};` : ''}
                ${progressBgBorderRadiusMobile?.top ? `border-radius: ${progressBgBorderRadiusMobileGet};` : ''}
                ${progressBarHeight?.Mobile ? `height: ${progressBarHeight?.Mobile}${progressBarHeightUnits?.Mobile};` : ''}
                ${progressbarType === 'vertical' && progressBarWidth?.Mobile ? `width: ${progressBarWidth?.Mobile}${progressBarWidthUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-line-wrapper .fb-progressbar-line {
                ${progressZebraTrackSwitcher === true ? `background: repeating-linear-gradient(-45deg, ${progressColor}, ${progressColor} ${progressZebraTrackWidth?.Mobile}px, transparent ${progressZebraTrackWidth?.Mobile}px, transparent calc(${progressZebraTrackWidth?.Mobile * 2}px));` : ''};
                ${progressBorderWidthMobile?.top ? `border-width: ${progressBorderWidthMobileGet};` : ''}
                ${progressBorderRadiusMobile?.top ? `border-radius: ${progressBorderRadiusMobileGet};` : ''}
            }
            .${blockID} .fb-progressbar-wrapper .fb-progressbar-item .fb-progressbar-number {
                ${progressNumberGlobalTypoSwitcher?.fontSize === false && progressNumberFontSize?.Mobile && progressNumberFontSizeUnits?.Mobile ? `font-size: ${progressNumberFontSize?.Mobile}${progressNumberFontSizeUnits?.Mobile};` : ''}
                ${progressNumberGlobalTypoSwitcher?.letterSpacing === false && progressNumberLetterSpacing?.Mobile && progressNumberLetterSpacingUnits?.Mobile ? `letter-spacing: ${progressNumberLetterSpacing?.Mobile}${progressNumberLetterSpacingUnits?.Mobile};` : ''}
                ${progressNumberGlobalTypoSwitcher?.lineHeight === false && progressNumberLineHeight?.Mobile && progressNumberLineHeightUnits?.Mobile ? `line-height: ${progressNumberLineHeight?.Mobile}${progressNumberLineHeightUnits?.Mobile};` : ''}
            
                ${progressNumberMarginMobile?.top ? `margin: ${progressNumberMarginMobileGet};` : ''}
            }
        }

    `, [
        blockID,
        blockStyle,

        // progress number
        progressNumber,
        progressGlobalZIndex,
        progressbarOverflow,
        progressbarType,
		progressTextPosition,
        progressNumberPosition,
        progressbarVrAlignment,

        progressNumberColorSwitcher,
		progressNumberColor,
        progressNumberHoverColor,

        // progress color
        progressZebraTrackSwitcher,
        progressZebraTrackWidth,
        progressColorSwitcher,
        progressColorType,
        progressColor,
        progressGradientColor,
        progressCustomGradientSwitcher,
        progressCustomGradientInputValue,
        progressImageUrl,
        progressImageAlt,
        progressImageID,
        progressImagePosition,
        progressImageAttachment,
        progressImageRepeat,
        progressImageSize,

        // progress Background
        progressBgZebraTrackSwitcher,
        progressBgZebraTrackWidth,
        progressBgColorSwitcher,
        progressBgColorType,
        progressBgColor,
        progressBgGradientColor,
        progressBgCustomGradientSwitcher,
        progressBgCustomGradientInputValue,
        progressBgImageUrl,
        progressBgImageAlt,
        progressBgImageID,
        progressBgImagePosition,
        progressBgImageAttachment,
        progressBgImageRepeat,
        progressBgImageSize,

		progressBarHeight,
        progressBarHeightUnits,
        progressBarWidth,
        progressBarWidthUnits,

        progressTitleColorSwitcher,
        progressTitleColor,
        progressTitleHoverColor,

        progressBorderStyle,
        progressBorderColor,
        progressBorderHoverColor,

        progressBorderWidthUnits,
        progressBorderWidthDesktop,
        progressBorderWidthTablet,
        progressBorderWidthMobile,

        progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,

        progressBgBorderStyle,
        progressBgBorderColor,
        progressBgBorderHoverColor,

        progressBgBorderWidthUnits,
        progressBgBorderWidthDesktop,
        progressBgBorderWidthTablet,
        progressBgBorderWidthMobile,

		progressBgBorderRadiusUnits,
		progressBgBorderRadiusDesktop,
		progressBgBorderRadiusTablet,
		progressBgBorderRadiusMobile,

        progressTitleGlobalTypoSwitcher,
        progressTitleGlobalTypographyData,
        progressTitleGlobalTypoType,
        progressTitleGlobalTypoOption,
        progressTitleFontFamily,
        progressTitleFontSize,
        progressTitleFontSizeUnits,
        progressTitleFontWeight,
        progressTitleFontStyle,
        progressTitleTextTransform,
        progressTitleTextDecoration,
        progressTitleLetterSpacing,
        progressTitleLetterSpacingUnits,
        progressTitleLineHeight,
        progressTitleLineHeightUnits,

        progressNumberGlobalTypoSwitcher,
        progressNumberGlobalTypographyData,
        progressNumberGlobalTypoType,
        progressNumberGlobalTypoOption,
        progressNumberFontFamily,
        progressNumberFontSize,
        progressNumberFontSizeUnits,
        progressNumberFontWeight,
        progressNumberFontStyle,
        progressNumberTextTransform,
        progressNumberTextDecoration,
        progressNumberLetterSpacing,
        progressNumberLetterSpacingUnits,
        progressNumberLineHeight,
        progressNumberLineHeightUnits,

        progressbarDesktopSwitcher,
		progressbarTabletSwitcher,
		progressbarMobileSwitcher,

        progressGlobalCustomCSS,
        progressGlobalWraperID,
		progressGlobalWraperClass,

        // Position
        progressbarPositionType,
        progressbarHZOrientationType,
        progressbarVROrientationType,
        progressbarHZLeftOffset,
        progressbarHZLeftOffsetUnits,
        progressbarHZRightOffset,
        progressbarHZRightOffsetUnits,
        progressbarVRTopOffset,
        progressbarVRTopOffsetUnits,
        progressbarVRBottomOffset,
        progressbarVRBottomOffsetUnits,

        progressTitleMarginUnits,
        progressTitleMarginDesktop,
        progressTitleMarginTablet,
        progressTitleMarginMobile,

        progressNumberMarginUnits,
        progressNumberMarginDesktop,
        progressNumberMarginTablet,
        progressNumberMarginMobile,

        // Background
        progressbarGlobalBgColorSwitcher,
        progressbarGlobalBgType,
        progressbarGlobalBgClassicColor,
        progressbarGlobalBgGradientColor,
        progressbarGlobalBgCustomGradientSwitcher,
        progressbarGlobalBgCustomGradientInputValue,
        progressbarGlobalBgImageUrl,
        progressbarGlobalBgImageAlt,
        progressbarGlobalBgImageID,
        progressbarGlobalBgImagePosition,
        progressbarGlobalBgImageAttachment,
        progressbarGlobalBgImageRepeat,
        progressbarGlobalBgImageSize,
        progressbarGlobalBgHoverType,
        progressbarGlobalBgHoverClassicColor,
        progressbarGlobalBgHoverGradientColor,
        progressbarGlobalBgHoverCustomGradientSwitcher,
        progressbarGlobalBgHoverCustomGradientInputValue,
        progressbarGlobalBgHoverImageUrl,
        progressbarGlobalBgHoverImageAlt,
        progressbarGlobalBgHoverImageID,
        progressbarGlobalBgHoverImagePosition,
        progressbarGlobalBgHoverImageAttachment,
        progressbarGlobalBgHoverImageRepeat,
        progressbarGlobalBgHoverImageSize,

        // padding
        progressbarGlobalPaddingUnits,
        progressbarGlobalPaddingDesktop,
        progressbarGlobalPaddingTablet,
        progressbarGlobalPaddingMobile,

        // margin
        progressbarGlobalMarginUnits,
        progressbarGlobalMarginDesktop,
        progressbarGlobalMarginTablet,
        progressbarGlobalMarginMobile,

        // border
        progressbarGlobalBorder,
        progressbarGlobalBorderColor,
        progressbarGlobalBorderHoverColor,
        progressbarGlobalBorderColorSwitcher,
        progressbarGlobalBorderUnits,
        progressbarGlobalDesktopBorder,
        progressbarGlobalTabletBorder,
        progressbarGlobalMobileBorder,

        // border radius
        progressbarGlobalBorderRadiusUnits,
        progressbarGlobalDesktopBorderRadius,
        progressbarGlobalTabletBorderRadius,
        progressbarGlobalMobileBorderRadius,

        // box shadow
        progressbarGlobalBoxShadowValues,
        progressbarGlobalBoxShadowCssValue,
        progressbarGlobalHoverBoxShadowValues,
        progressbarGlobalHoverBoxShadowCssValue,
    ]);

    const customCss = getCustomCss(progressGlobalCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
        <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
            <SelectControl
                label={__("Layout Type", "frontis-blocks")}
                value={progressbarType}
                options={PROGRESSBAR_TYPE}
                onChange={(value) => setAttributes({ progressbarType: value})}
            />

            {progressbarType === 'vertical' && (
                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={progressbarVrAlignment}
                    setGlobalAlignment={(value) => setAttributes({ progressbarVrAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
            )}

            {progressbarType === 'horizontal' && (
                <SelectControl
                    label={__("Text Position", "frontis-blocks")}
                    value={progressTextPosition}
                    options={PROGRESS_TEXT_OPTIONS}
                    onChange={(value) => setAttributes({ progressTextPosition: value })}
                />
            )}

            <SelectControl
                label={__("Progress Number Position", "frontis-blocks")}
                value={progressNumberPosition}
                options={PROGRESS_NUMBER_POSITION}
                onChange={(value) => setAttributes({ progressNumberPosition: value })}
            />


            <div className="progress-general-wrapper">
                <div className="progress-percentage">
                    <RangeControl
                        label={__("Progress Percentage", "frontis-blocks")}
                        value={progressNumber}
                        onChange={(value) => setAttributes({ progressNumber: value })}
                        min={1}
                        max={100}
                        resetFallbackValue={50}
                    />
                </div>

                {progressbarType === 'vertical' && (
                <FB_Range
                    min={0}
                    max={progressBarWidthUnits === '%' ? 100 : 1000}
                    label={__("Progress Bar Width", "frontis-blocks")}
                    rangeValue={progressBarWidth}
                    onChangeHandler={(value) => setAttributes({ progressBarWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ progressBarWidthUnits: value })}
                    deviceType={deviceType}
                    units={progressBarWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                )}

                <FB_Range
                    min={0}
                    max={progressBarHeightUnits === '%' ? 100 : 1000}
                    label={__("Progress Bar Height", "frontis-blocks")}
                    rangeValue={progressBarHeight}
                    onChangeHandler={(value) => setAttributes({ progressBarHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ progressBarHeightUnits: value })}
                    deviceType={deviceType}
                    units={progressBarHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
            </div>
        </PanelBody>
        <PanelBody title={__("Title", "frontis-blocks")} initialOpen={true}>
                <TextControl
                    label={__("Title", "frontis-blocks")}
                    value={progressTitle}
                    onChange={(value) => setAttributes({ progressTitle: value })}
                />

                <FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={progressHeadingTag}
                    setGlobalHtmlTag={(value) => setAttributes({ progressHeadingTag: value })}
                />
        </PanelBody>
        </>
    );
    
    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            {/* <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
            </PanelBody> */}

            <PanelBody title={__("Progress Color", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__("Zebra Track Color", "frontis-blocks")}
                    checked={progressZebraTrackSwitcher}
                    onChange={(value) => setAttributes({ progressZebraTrackSwitcher: value })}
                />

                <br/>

                {progressZebraTrackSwitcher && (<>
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Zebra Track Width", "frontis-blocks")}
                        rangeValue={progressZebraTrackWidth}
                        onChangeHandler={(value) => setAttributes({ progressZebraTrackWidth: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={progressColor}
                        setGlobalColor={(value) => setAttributes({ progressColor: value === undefined ? '' : value })}
                    />
                </>)}

                {!progressZebraTrackSwitcher &&(
                        <FB_BackgroundColorControl
                            label={__("Color", "frontis-blocks")}
                            normalLabel = {__("Color", "frontis-blocks")}
                            bgColorSwitcher={progressColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ progressColorSwitcher: value })
                            }
                            normalBackgroundType={progressColorType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ progressColorType: value })
                            }
                            normalClassicColor={progressColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ progressColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={progressGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ progressGradientColor: value === undefined ? null : value })
                            }
                            normalCustomGradientSwitcher={
                                progressCustomGradientSwitcher
                            }
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={
                                progressCustomGradientInputValue
                            }
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={progressImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ progressImageUrl: value })
                            }
                            normalBackgroundImageAlt={progressImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ progressImageAlt: value })
                            }
                            normalBackgroundImageID={progressImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ progressImageID: value })
                            }
                            normalBackgroundImagePosition={
                                progressImagePosition
                            }
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    progressImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={
                                progressImageAttachment
                            }
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    progressImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={
                                progressImageRepeat
                            }
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    progressImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={progressImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ progressImageSize: value })
                            }
                            isBackgroundHover={false}
                        />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={progressBorderStyle}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ progressBorderStyle: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={progressBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ progressBorderColorSwitcher: value })}
                />

                {progressBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={progressBorderColor}
                        setGlobalColor={(value) => setAttributes({ progressBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {progressBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={progressBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ progressBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border Width", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressBorderWidthUnitsHandler}
                    spacingUnits={progressBorderWidthUnits}
                    spacingDesktop={progressBorderWidthDesktop}
                    spacingTablet={progressBorderWidthTablet}
                    spacingMobile={progressBorderWidthMobile}
                    handleSpacingUnitHandler={progressBorderWidthUnitsChange}
                    spacingCombineBtn={progressBorderWidthLink}
                    spacingCombineBtnHandler={progressBorderWidthLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressBorderRadiusUnitsHandler}
                    spacingUnits={progressBorderRadiusUnits}
                    spacingDesktop={progressBorderRadiusDesktop}
                    spacingTablet={progressBorderRadiusTablet}
                    spacingMobile={progressBorderRadiusMobile}
                    handleSpacingUnitHandler={progressBorderRadiusUnitsChange}
                    spacingCombineBtn={progressBorderRadiusLink}
                    spacingCombineBtnHandler={progressBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__("Progress Background Color", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__("Zebra Track Color", "frontis-blocks")}
                    checked={progressBgZebraTrackSwitcher}
                    onChange={(value) => setAttributes({ progressBgZebraTrackSwitcher: value })}
                />

                <br/>

                {progressBgZebraTrackSwitcher && (<>
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Zebra Track Width", "frontis-blocks")}
                        rangeValue={progressBgZebraTrackWidth}
                        onChangeHandler={(value) => setAttributes({ progressBgZebraTrackWidth: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />

                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={progressBgColor}
                        setGlobalColor={(value) => setAttributes({ progressBgColor: value === undefined ? '' : value })}
                    />
                </>)}

                {!progressBgZebraTrackSwitcher && (
                    <FB_BackgroundColorControl
                            label={__("Color", "frontis-blocks")}
                            normalLabel = {__("Color", "frontis-blocks")}
                            bgColorSwitcher={progressBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ progressBgColorSwitcher: value })
                            }
                            normalBackgroundType={progressBgColorType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ progressBgColorType: value })
                            }
                            normalClassicColor={progressBgColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ progressBgColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={progressBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ progressBgGradientColor: value === undefined ? null : value })
                            }
                            normalCustomGradientSwitcher={
                                progressBgCustomGradientSwitcher
                            }
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={
                                progressBgCustomGradientInputValue
                            }
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={progressBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ progressBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={progressBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ progressBgImageAlt: value })
                            }
                            normalBackgroundImageID={progressBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ progressBgImageID: value })
                            }
                            normalBackgroundImagePosition={
                                progressBgImagePosition
                            }
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    progressBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={
                                progressBgImageAttachment
                            }
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    progressBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={
                                progressBgImageRepeat
                            }
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    progressBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={progressBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ progressBgImageSize: value })
                            }
                            isBackgroundHover={false}
                        />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={progressBgBorderStyle}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ progressBgBorderStyle: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={progressBgBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ progressBgBorderColorSwitcher: value })}
                />

                {progressBgBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={progressBgBorderColor}
                        setGlobalColor={(value) => setAttributes({ progressBgBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {progressBgBorderColorSwitcher === 'hover' && ( 
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={progressBgBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ progressBgBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border Width", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressBgBorderWidthUnitsHandler}
                    spacingUnits={progressBgBorderWidthUnits}
                    spacingDesktop={progressBgBorderWidthDesktop}
                    spacingTablet={progressBgBorderWidthTablet}
                    spacingMobile={progressBgBorderWidthMobile}
                    handleSpacingUnitHandler={progressBgBorderWidthUnitsChange}
                    spacingCombineBtn={progressBgBorderWidthLink}
                    spacingCombineBtnHandler={progressBgBorderWidthLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressBgBorderRadiusUnitsHandler}
                    spacingUnits={progressBgBorderRadiusUnits}
                    spacingDesktop={progressBgBorderRadiusDesktop}
                    spacingTablet={progressBgBorderRadiusTablet}
                    spacingMobile={progressBgBorderRadiusMobile}
                    handleSpacingUnitHandler={progressBgBorderRadiusUnitsChange}
                    spacingCombineBtn={progressBgBorderRadiusLink}
                    spacingCombineBtnHandler={progressBgBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__("Number", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={progressNumberGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ progressNumberGlobalTypographyData: value })}

                    globalTypoType={progressNumberGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            progressNumberGlobalTypoType: value, 
                            progressNumberGlobalTypoSwitcher: value === 'default' ? {...progressNumberGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...progressNumberGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={progressNumberGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ progressNumberGlobalTypoOption: value })}

                    fontFamily={progressNumberFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ progressNumberFontFamily: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={progressNumberFontSize}
                    onChangeFontSize={(value) => setAttributes({ progressNumberFontSize: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={progressNumberFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ progressNumberFontSizeUnits: value })}

                    fontWeight={progressNumberFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ progressNumberFontWeight: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={progressNumberFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ progressNumberFontStyle: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={progressNumberTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ progressNumberTextTransform: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={progressNumberTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ progressNumberTextDecoration: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={progressNumberLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ progressNumberLetterSpacing: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={progressNumberLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ progressNumberLetterSpacingUnits: value })}

                    lineHeight={progressNumberLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ progressNumberLineHeight: value, progressNumberGlobalTypoSwitcher: {...progressNumberGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={progressNumberLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ progressNumberLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Number Color", "frontis-blocks")}
                    globalSwitcher={progressNumberColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ progressNumberColorSwitcher: value })}
                />

                {progressNumberColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={progressNumberColor}
                        setGlobalColor={(value) => setAttributes({ progressNumberColor: value === undefined ? '' : value })}
                    />
                )}

                {progressNumberColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={progressNumberHoverColor}
                        setGlobalColor={(value) => setAttributes({ progressNumberHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressNumberMarginUnitsHandler}
                    spacingUnits={progressNumberMarginUnits}
                    spacingDesktop={progressNumberMarginDesktop}
                    spacingTablet={progressNumberMarginTablet}
                    spacingMobile={progressNumberMarginMobile}
                    handleSpacingUnitHandler={progressNumberMarginUnitsChange}
                    spacingCombineBtn={progressNumberMarginLink}
                    spacingCombineBtnHandler={progressNumberMarginLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={progressTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ progressTitleGlobalTypoSwitcher: value })}

                    globalTypoType={progressTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            progressTitleGlobalTypoType: value, 
                            progressTitleGlobalTypoSwitcher: value === 'default' ? {...progressTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...progressTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={progressTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ progressTitleGlobalTypoOption: value })}

                    fontFamily={progressTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ progressTitleFontFamily: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={progressTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ progressTitleFontSize: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={progressTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ progressTitleFontSizeUnits: value })}

                    fontWeight={progressTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ progressTitleFontWeight: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={progressTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ progressTitleFontStyle: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={progressTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ progressTitleTextTransform: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={progressTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ progressTitleTextDecoration: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={progressTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ progressTitleLetterSpacing: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={progressTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ progressTitleLetterSpacingUnits: value })}

                    lineHeight={progressTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ progressTitleLineHeight: value, progressTitleGlobalTypoSwitcher: {...progressTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={progressTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ progressTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={progressTitleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ progressTitleColorSwitcher: value })}
                />

                {progressTitleColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={progressTitleColor}
                        setGlobalColor={(value) => setAttributes({ progressTitleColor: value === undefined ? '' : value })}
                    />
                )}

                {progressTitleColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={progressTitleHoverColor}
                        setGlobalColor={(value) => setAttributes({ progressTitleHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={progressTitleMarginUnitsHandler}
                    spacingUnits={progressTitleMarginUnits}
                    spacingDesktop={progressTitleMarginDesktop}
                    spacingTablet={progressTitleMarginTablet}
                    spacingMobile={progressTitleMarginMobile}
                    handleSpacingUnitHandler={progressTitleMarginUnitsChange}
                    spacingCombineBtn={progressTitleMarginLink}
                    spacingCombineBtnHandler={progressTitleMarginLinkBtn}
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
                            rangeValue={progressGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ progressGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={progressbarOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ progressbarOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={progressbarPositionType}
                            setPositionType={(value) => setAttributes({ progressbarPositionType: value })}
                                                                            
                            HZOrientationType={progressbarHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ progressbarHZOrientationType: value })
                            }
                            VROrientationType={progressbarVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ progressbarVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={progressbarHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ progressbarHZLeftOffset: value })}
                            HZLeftOffsetUnits={progressbarHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ progressbarHZLeftOffsetUnits: value })}
                            HZRightOffset={progressbarHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ progressbarHZRightOffset: value })}
                            HZRightOffsetUnits={progressbarHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ progressbarHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={progressbarVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ progressbarVRTopOffset: value })}
                            VRTopOffsetUnits={progressbarVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ progressbarVRTopOffsetUnits: value })}
                            VRBottomOffset={progressbarVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ progressbarVRBottomOffset: value })}
                            VRBottomOffsetUnits={progressbarVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ progressbarVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={progressGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ progressGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />
                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={progressGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ progressGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                        
                    </PanelBody>

                    <PanelBody
                    title={__("Padding & Margin", "frontis-blocks")}
                    initialOpen={false}
                    >
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleProgressbarGlobalMarginUnitsHandler}
                            spacingUnits={progressbarGlobalMarginUnits}
                            spacingDesktop={progressbarGlobalMarginDesktop}
                            spacingTablet={progressbarGlobalMarginTablet}
                            spacingMobile={progressbarGlobalMarginMobile}
                            handleSpacingUnitHandler={handleProgressbarGlobalMarginUnitChange}
                            spacingCombineBtn={progressbarGlobalMarginLink}
                            spacingCombineBtnHandler={handleProgressbarGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleProgressbarGlobalPaddingUnitsHandler}
                            spacingUnits={progressbarGlobalPaddingUnits}
                            spacingDesktop={progressbarGlobalPaddingDesktop}
                            spacingTablet={progressbarGlobalPaddingTablet}
                            spacingMobile={progressbarGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleProgressbarGlobalPaddingUnitChange}
                            spacingCombineBtn={progressbarGlobalPaddingLink}
                            spacingCombineBtnHandler={handleProgressbarGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />                                     
                    </PanelBody>

                    <PanelBody
                    title={__("Border & Border Radius", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-border-setting-wrapper"
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={progressbarGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ progressbarGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={progressbarGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ progressbarGlobalBorderColorSwitcher: value })}
                        />
                        
                        {progressbarGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={progressbarGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ progressbarGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}
                        
                        {progressbarGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={progressbarGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ progressbarGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleProgressbarGlobalBorderUnitsHandler}
                            spacingUnits={progressbarGlobalBorderUnits}
                            spacingDesktop={progressbarGlobalDesktopBorder}
                            spacingTablet={progressbarGlobalTabletBorder}
                            spacingMobile={progressbarGlobalMobileBorder}
                            handleSpacingUnitHandler={handleProgressbarGlobalBorderUnitChange}
                            spacingCombineBtn={progressbarGlobalBorderLink}
                            spacingCombineBtnHandler={handleProgressbarGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleProgressbarGlobalBorderRadiusUnitsHandler}
                            spacingUnits={progressbarGlobalBorderRadiusUnits}
                            spacingDesktop={progressbarGlobalDesktopBorderRadius}
                            spacingTablet={progressbarGlobalTabletBorderRadius}
                            spacingMobile={progressbarGlobalMobileBorderRadius}
                            handleSpacingUnitHandler={handleProgressbarGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={progressbarGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleProgressbarGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={progressbarGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ progressbarGlobalBoxShadowSwitcher: value })}
                        />
                        
                        {progressbarGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ progressbarGlobalBoxShadowValues: value })
                                }
                                initialShadowValue={progressbarGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        progressbarGlobalBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}
                        
                        {progressbarGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ progressbarGlobalHoverBoxShadowValues: value })
                                }
                                initialShadowValue={progressbarGlobalHoverBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        progressbarGlobalHoverBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={progressbarGlobalBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ progressbarGlobalBgColorSwitcher: value })
                            }
                            normalBackgroundType={progressbarGlobalBgType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ progressbarGlobalBgType: value })
                            }
                            normalClassicColor={progressbarGlobalBgClassicColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ progressbarGlobalBgClassicColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={progressbarGlobalBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ progressbarGlobalBgGradientColor: value === undefined ? null : value })
                            }
                            normalCustomGradientSwitcher={
                                progressbarGlobalBgCustomGradientSwitcher
                            }
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressbarGlobalBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={
                                progressbarGlobalBgCustomGradientInputValue
                            }
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressbarGlobalBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={progressbarGlobalBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ progressbarGlobalBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={progressbarGlobalBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ progressbarGlobalBgImageAlt: value })
                            }
                            normalBackgroundImageID={progressbarGlobalBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ progressbarGlobalBgImageID: value })
                            }
                            normalBackgroundImagePosition={
                                progressbarGlobalBgImagePosition
                            }
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    progressbarGlobalBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={
                                progressbarGlobalBgImageAttachment
                            }
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    progressbarGlobalBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={
                                progressbarGlobalBgImageRepeat
                            }
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    progressbarGlobalBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={progressbarGlobalBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ progressbarGlobalBgImageSize: value })
                            }
                            hoverBackgroundType={progressbarGlobalBgHoverType}
                            setHoverBackgroundType ={(value) =>
                                setAttributes({ progressbarGlobalBgHoverType: value })
                            }
                            hoverClassicColor={progressbarGlobalBgHoverClassicColor}
                            setHoverClassicColor={(value) =>
                                setAttributes({ progressbarGlobalBgHoverClassicColor: value === undefined ? '' : value })
                            }
                            hoverGradientColor={progressbarGlobalBgHoverGradientColor}
                            setHoverGradientColor={(value) =>
                                setAttributes({ progressbarGlobalBgHoverGradientColor: value === undefined ? null : value })
                            }
                            hoverCustomGradientSwitcher={
                                progressbarGlobalBgHoverCustomGradientSwitcher
                            }
                            setHoverCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    progressbarGlobalBgHoverCustomGradientSwitcher: value,
                                })
                            }
                            hoverCustomGradientInputValue={
                                progressbarGlobalBgHoverCustomGradientInputValue
                            }
                            setHoverCustomGradientInputValue={(value) =>
                                setAttributes({
                                    progressbarGlobalBgHoverCustomGradientInputValue: value,
                                })
                            }
                            hoverBackgroundImageUrl={progressbarGlobalBgHoverImageUrl}
                            setBgHoverImageUrl={(value) =>
                                setAttributes({ progressbarGlobalBgHoverImageUrl: value })
                            }
                            hoverBackgroundImageAlt={progressbarGlobalBgHoverImageAlt}
                            setBgHoverImageAlt={(value) =>
                                setAttributes({ progressbarGlobalBgHoverImageAlt: value })
                            }
                            hoverBackgroundImageID={progressbarGlobalBgHoverImageID}
                            setBgHoverImageID={(value) =>
                                setAttributes({ progressbarGlobalBgHoverImageID: value })
                            }
                            hoverBackgroundImagePosition={
                                progressbarGlobalBgHoverImagePosition
                            }
                            setBgHoverImagePosition={(value) =>
                                setAttributes({
                                    progressbarGlobalBgHoverImagePosition: value,
                                })
                            }
                            hoverBackgroundImageAttachment={
                                progressbarGlobalBgHoverImageAttachment
                            }
                            setBgHoverImageAttachment={(value) =>
                                setAttributes({
                                    progressbarGlobalBgHoverImageAttachment: value,
                                })
                            }
                            hoverBackgroundImageRepeat={
                                progressbarGlobalBgHoverImageRepeat
                            }
                            setBgHoverImageRepeat={(value) =>
                                setAttributes({
                                    progressbarGlobalBgHoverImageRepeat: value,
                                })
                            }
                            hoverBackgroundImageSize={progressbarGlobalBgHoverImageSize}
                            setBgHoverImageSize={(value) =>
                                setAttributes({ progressbarGlobalBgHoverImageSize: value })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={progressbarDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ progressbarDesktopSwitcher: value })}

                            tabletValue={progressbarTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ progressbarTabletSwitcher: value })}

                            mobileValue={progressbarMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ progressbarMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >   
                        <FB_CustomCSSEditor  
                            value={progressGlobalCustomCSS} 
                            onChangeValue={(value) => setAttributes({ progressGlobalCustomCSS: value })}
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