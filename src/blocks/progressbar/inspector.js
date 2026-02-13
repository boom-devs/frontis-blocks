import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo, memo } from '@wordpress/element';
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

const Inspector = ({ attributes, setAttributes }) => {
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

        // title
        showProgressTitle,
        showProgressNumber

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

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
        <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
            <ToggleControl
                label={__("Show Title", "frontis-blocks")}
                checked={showProgressTitle}
                onChange={(value) => setAttributes({ showProgressTitle: value })}
            />
            <ToggleControl
                label={__("Show Number", "frontis-blocks")}
                checked={showProgressNumber}
                onChange={(value) => setAttributes({ showProgressNumber: value })}
            />
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
export default memo(Inspector);