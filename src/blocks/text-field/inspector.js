/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import {
    ToggleControl,
    Button,
    BaseControl,
    ButtonGroup,
    TextControl,
    PanelBody,
    TabPanel,
    ResponsiveWrapper, 
    __experimentalHStack as HStack,
    RangeControl,
    SelectControl,
    TextareaControl,
} from "@wordpress/components";
import { InspectorControls } from '@wordpress/block-editor';
import { BORDER_STYLES, FIELD_TYPES, MEDIA_TYPES, OVERFLOW_OP } from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from "../../components/spacing";
import { useEffect, useMemo } from "@wordpress/element";
import FB_Range from "../../components/range";
import FB_SwitcherControl from "../../components/switcher-control";
import FB_ColorControl from "../../components/color-control";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_InspectorControls from '@Components/InspectorControls';
import FB_TypographyControl from '../../components/typography-control';
import FB_BackgroundColorControl from '../../components/background-color-control';
import FB_BoxShadowControl from '../../components/box-shadow';
import FB_VisibilityControl from '@Components/visibility-control';


const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockID,
        parentBlockID,
        // deviceType,

        // general
        fieldType,
        fieldLabelSwitcher,
        fieldLabel,
        fieldIconSwitcher,
        fieldIcon,
        fieldPlaceholderSwitcher,
        fieldPlaceholder,
        fieldRequiredSwitcher,
        fieldRequiredSymbolSwitcher,
        fieldRequiredText,
        fieldDefaultValue,
        fieldCustomNameAttribute,

        // layout
        fieldWidth,
        fieldMinHeight,


        inheritedFieldIconSwitcher,
        inheritedFieldLabelSwitcher,
        inheritedFieldRequiredSwitcher,
        inheritedFieldRequiredSymbolSwitcher,

        labelGlobalTypoSwitcher,
        labelGlobalTypographyData,
        labelGlobalTypoType,
        labelGlobalTypoOption,
        labelFontFamily,
        labelFontSize,
        labelFontSizeUnits,
        labelFontWeight,
        labelFontStyle,
        labelTextTransform,
        labelTextDecoration,
        labelLetterSpacing,
        labelLetterSpacingUnits,
        labelLineHeight,
        labelLineHeightUnits,
        
        inputFieldGlobalTypoSwitcher,
        inputFieldGlobalTypographyData,
        inputFieldGlobalTypoType,
        inputFieldGlobalTypoOption,
        inputFieldFontFamily,
        inputFieldFontSize,
        inputFieldFontSizeUnits,
        inputFieldFontWeight,
        inputFieldFontStyle,
        inputFieldTextTransform,
        inputFieldTextDecoration,
        inputFieldLetterSpacing,
        inputFieldLetterSpacingUnits,
        inputFieldLineHeight,
        inputFieldLineHeightUnits,

        labelColor,
        labelRequiredColor,

        inputFieldColor,
        inputFieldFocusColor,
        inputFieldPlaceholderColor,

        labelMarginUnits,
        labelDesktopMargin,
        labelTabletMargin,
        labelMobileMargin,
        labelMarginLink,

        inputFieldMarginUnits,
        inputFieldDesktopMargin,
        inputFieldTabletMargin,
        inputFieldMobileMargin,
        inputFieldMarginLink,

        inputFieldPaddingUnits,
        inputFieldDesktopPadding,
        inputFieldTabletPadding,
        inputFieldMobilePadding,
        inputFieldPaddingLink,

        inputFieldBgColorSwitcher,
        inputFieldBgType,
        inputFieldBgClassicColor,
        inputFieldBgGradientColor,
        inputFieldBgCustomGradientSwitcher,
        inputFieldBgCustomGradientInputValue,
        inputFieldBgImageUrl,
        inputFieldBgImageAlt,
        inputFieldBgImageID,
        inputFieldBgImagePosition,
        inputFieldBgImageAttachment,
        inputFieldBgImageRepeat,
        inputFieldBgImageSize,
        inputFieldBgHoverType,
        inputFieldBgHoverClassicColor,
        inputFieldBgHoverGradientColor,
        inputFieldBgHoverCustomGradientSwitcher,
        inputFieldBgHoverCustomGradientInputValue,
        inputFieldBgHoverImageUrl,
        inputFieldBgHoverImageAlt,
        inputFieldBgHoverImageID,
        inputFieldBgHoverImagePosition,
        inputFieldBgHoverImageAttachment,
        inputFieldBgHoverImageRepeat,
        inputFieldBgHoverImageSize,

        inputFieldBorder,
        inputFieldBorderColor,
        inputFieldBorderHoverColor,
        inputFieldBorderColorSwitcher,
        inputFieldBorderUnits,
        inputFieldBorderDesktop,
        inputFieldBorderTablet,
        inputFieldBorderMobile,
        inputFieldBorderLink,
        inputFieldBorderRadiusUnits,
        inputFieldBorderRadiusDesktop,
        inputFieldBorderRadiusTablet,
        inputFieldBorderRadiusMobile,
        inputFieldBorderRadiusLink,

        inputFieldBoxShadowSwitcher,
        inputFieldBoxShadowValues,
        inputFieldBoxShadowCssValue,
        inputFieldBoxShadowHoverValues,
        inputFieldBoxShadowHoverCssValue,

        textFieldCustomCSS,
        textFieldGlobalWraperID,
        textFieldGlobalWraperClass,

        // form Advance
        textFieldZIndex,
        textFieldOverflow,
        textFieldPaddingUnits,
        textFieldDesktopPadding,
        textFieldTabPadding,
        textFieldMobilePadding,
        textFieldPaddingLink,

        textFieldMarginUnits,
        textFieldDesktopMargin,
        textFieldTabMargin,
        textFieldMobileMargin,
        textFieldMarginLink,

        textFieldBorder,
        textFieldBorderColor,
        textFieldBorderHoverColor,
        textFieldBorderColorSwitcher,
        textFieldBorderUnits,
        textFieldDesktopBorderWidth,
        textFieldTabBorderWidth,
        textFieldMobileBorderWidth,
        textFieldBorderLink,

        textFieldBorderRadiusUnits,
        textFieldDesktopBorderRadiusWidth,
        textFieldTabBorderRadiusWidth,
        textFieldMobileBorderRadiusWidth,
        textFieldBorderRadiusLink,

        textFieldDesktopSwitcher,
        textFieldTabletSwitcher,
        textFieldMobileSwitcher,

        textFieldBgColorSwitcher,
        textFieldBgType,
        textFieldBgClassicColor,
        textFieldBgGradientColor,
        textFieldBgCustomGradientSwitcher,
        textFieldBgCustomGradientInputValue,
        textFieldBgImageUrl,
        textFieldBgImageAlt,
        textFieldBgImageID,
        textFieldBgImagePosition,
        textFieldBgImageAttachment,
        textFieldBgImageRepeat,
        textFieldBgImageSize,
        textFieldBgHoverType,
        textFieldBgHoverClassicColor,
        textFieldBgHoverGradientColor,
        textFieldBgHoverCustomGradientSwitcher,
        textFieldBgHoverCustomGradientInputValue,
        textFieldBgHoverImageUrl,
        textFieldBgHoverImageAlt,
        textFieldBgHoverImageID,
        textFieldBgHoverImagePosition,
        textFieldBgHoverImageAttachment,
        textFieldBgHoverImageRepeat,
        textFieldBgHoverImageSize,

        textFieldGlobalBoxShadowSwitcher,
        textFieldGlobalBoxShadowValues,
        textFieldGlobalBoxShadowCssValue,
        textFieldGlobalHoverBoxShadowValues,
        textFieldGlobalHoverBoxShadowCssValue,
    } = attributes;

    const deviceType= useDeviceType();
    

    // Label Margin Function
    const handleLabelMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( labelMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        labelDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        labelTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        labelMobileMargin: {
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
                    setAttributes( {labelDesktopMargin: {...labelDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {labelTabletMargin: {...labelTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {labelMobileMargin: {...labelMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleLabelMarginCombineBtn = () => {
        setAttributes( {labelMarginLink: !labelMarginLink} );
    }

    const handleLabelMarginUnitsHandler = (unit) => {
        setAttributes( {
            labelMarginUnits: {
                ...labelMarginUnits,
                [deviceType]: unit
            }
        })
    }

    // Input Field Margin Function
    const handleInputFieldMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( inputFieldMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        inputFieldDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        inputFieldTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        inputFieldMobileMargin: {
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
                    setAttributes( {inputFieldDesktopMargin: {...inputFieldDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {inputFieldTabletMargin: {...inputFieldTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {inputFieldMobileMargin: {...inputFieldMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }
    

    const handleInputFieldMarginCombineBtn = () => {
        setAttributes( {inputFieldMarginLink: !inputFieldMarginLink} );
    }

    const handleInputFieldMarginUnitsHandler = (unit) => {
        setAttributes( {
            inputFieldMarginUnits: {
                ...inputFieldMarginUnits,
                [deviceType]: unit
            }
        })
    }

    // Input Field Padding Function
    const handleInputFieldPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( inputFieldPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        inputFieldDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        inputFieldTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        inputFieldMobilePadding: {
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
                    setAttributes( {inputFieldDesktopPadding: {...inputFieldDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {inputFieldTabletPadding: {...inputFieldTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {inputFieldMobilePadding: {...inputFieldMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleInputFieldPaddingCombineBtn = () => {
        setAttributes( {inputFieldPaddingLink: !inputFieldPaddingLink} );
    }

    const handleInputFieldPaddingUnitsHandler = (unit) => {
        setAttributes( {
            inputFieldPaddingUnits: {
                ...inputFieldPaddingUnits,
                [deviceType]: unit
            }
        })
    }


    // form content margin
    const handleTextFieldMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( textFieldMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        textFieldDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        textFieldTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        textFieldMobileMargin: {
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
                    setAttributes( {textFieldDesktopMargin: {...textFieldDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {textFieldTabMargin: {...textFieldTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {textFieldMobileMargin: {...textFieldMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTextFieldMarginCombineBtn = () => {
        setAttributes( {textFieldMarginLink: !textFieldMarginLink} );
    }

    const handleTextFieldMarginUnitsHandler = (unit) => {
        setAttributes( {
            textFieldMarginUnits: {
                ...textFieldMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // form Padding Functionb
    const handleTextFieldPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( textFieldPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        textFieldDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        textFieldTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        textFieldMobilePadding: {
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
                    setAttributes( {textFieldDesktopPadding: {...textFieldDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {textFieldTabPadding: {...textFieldTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {textFieldMobilePadding: {...textFieldMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTextFieldPaddingCombineBtn = () => {
        setAttributes( {textFieldPaddingLink: !textFieldPaddingLink} );
    }

    const handleTextFieldPaddingUnitsHandler = (unit) => {
        setAttributes( {
            textFieldPaddingUnits: {
                ...textFieldPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderWidth Function
    const handleTextFieldBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( textFieldBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        textFieldDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        textFieldTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        textFieldMobileBorderWidth: {
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
                    setAttributes( {textFieldDesktopBorderWidth: {...textFieldDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {textFieldTabBorderWidth: {...textFieldTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {textFieldMobileBorderWidth: {...textFieldMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTextFieldBorderCombineBtn = () => {
        setAttributes( {textFieldBorderLink: !textFieldBorderLink} );
    }

    const handleTextFieldBorderUnitsHandler = (unit) => {
        setAttributes( {
            textFieldBorderUnits: {
                ...textFieldBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderRadiusWidth Function
    const handleTextFieldBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( textFieldBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        textFieldDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        textFieldTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        textFieldMobileBorderRadiusWidth: {
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
                    setAttributes( {textFieldDesktopBorderRadiusWidth: {...textFieldDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {textFieldTabBorderRadiusWidth: {...textFieldTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {textFieldMobileBorderRadiusWidth: {...textFieldMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTextFieldBorderRadiusCombineBtn = () => {
        setAttributes( {textFieldBorderRadiusLink: !textFieldBorderRadiusLink} );
    }

    const handleTextFieldBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            textFieldBorderRadiusUnits: {
                ...textFieldBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderWidth Function
    const handleInputFieldBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( inputFieldBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        inputFieldBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        inputFieldBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        inputFieldBorderMobile: {
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
                    setAttributes( {inputFieldBorderDesktop: {...inputFieldBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {inputFieldBorderTablet: {...inputFieldBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {inputFieldBorderMobile: {...inputFieldBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleInputFieldBorderCombineBtn = () => {
        setAttributes( {inputFieldBorderLink: !inputFieldBorderLink} );
    }

    const handleInputFieldBorderUnitsHandler = (unit) => {
        setAttributes( {
            inputFieldBorderUnits: {
                ...inputFieldBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderRadiusWidth Function
    const handleInputFieldBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( inputFieldBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        inputFieldBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        inputFieldBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        inputFieldBorderRadiusMobile: {
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
                    setAttributes( {inputFieldBorderRadiusDesktop: {...inputFieldBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {inputFieldBorderRadiusTablet: {...inputFieldBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {inputFieldBorderRadiusMobile: {...inputFieldBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleInputFieldBorderRadiusCombineBtn = () => {
        setAttributes( {inputFieldBorderRadiusLink: !inputFieldBorderRadiusLink} );
    }

    const handleInputFieldBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            inputFieldBorderRadiusUnits: {
                ...inputFieldBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    
    const labelMarginDesktopWidth = `${labelDesktopMargin?.top}${labelMarginUnits?.Desktop} ${labelDesktopMargin?.right}${labelMarginUnits?.Desktop} ${labelDesktopMargin?.bottom}${labelMarginUnits?.Desktop} ${labelDesktopMargin?.left}${labelMarginUnits?.Desktop}`;
    const labelMarginTabletWidth = `${labelTabletMargin?.top}${labelMarginUnits?.Tablet} ${labelTabletMargin?.right}${labelMarginUnits?.Tablet} ${labelTabletMargin?.bottom}${labelMarginUnits?.Tablet} ${labelTabletMargin?.left}${labelMarginUnits?.Tablet}`;
    const labelMarginMobileWidth = `${labelMobileMargin?.top}${labelMarginUnits?.Mobile} ${labelMobileMargin?.right}${labelMarginUnits?.Mobile} ${labelMobileMargin?.bottom}${labelMarginUnits?.Mobile} ${labelMobileMargin?.left}${labelMarginUnits?.Mobile}`;

    const inputFieldMarginDesktopWidth = `${inputFieldDesktopMargin?.top}${inputFieldMarginUnits?.Desktop} ${inputFieldDesktopMargin?.right}${inputFieldMarginUnits?.Desktop} ${inputFieldDesktopMargin?.bottom}${inputFieldMarginUnits?.Desktop} ${inputFieldDesktopMargin?.left}${inputFieldMarginUnits?.Desktop}`;
    const inputFieldMarginTabletWidth = `${inputFieldTabletMargin?.top}${inputFieldMarginUnits?.Tablet} ${inputFieldTabletMargin?.right}${inputFieldMarginUnits?.Tablet} ${inputFieldTabletMargin?.bottom}${inputFieldMarginUnits?.Tablet} ${inputFieldTabletMargin?.left}${inputFieldMarginUnits?.Tablet}`;
    const inputFieldMarginMobileWidth = `${inputFieldMobileMargin?.top}${inputFieldMarginUnits?.Mobile} ${inputFieldMobileMargin?.right}${inputFieldMarginUnits?.Mobile} ${inputFieldMobileMargin?.bottom}${inputFieldMarginUnits?.Mobile} ${inputFieldMobileMargin?.left}${inputFieldMarginUnits?.Mobile}`;

    const inputFieldPaddingDesktopWidth = `${inputFieldDesktopPadding?.top}${inputFieldPaddingUnits?.Desktop} ${inputFieldDesktopPadding?.right}${inputFieldPaddingUnits?.Desktop} ${inputFieldDesktopPadding?.bottom}${inputFieldPaddingUnits?.Desktop} ${inputFieldDesktopPadding?.left}${inputFieldPaddingUnits?.Desktop}`;
    const inputFieldPaddingTabletWidth = `${inputFieldTabletPadding?.top}${inputFieldPaddingUnits?.Tablet} ${inputFieldTabletPadding?.right}${inputFieldPaddingUnits?.Tablet} ${inputFieldTabletPadding?.bottom}${inputFieldPaddingUnits?.Tablet} ${inputFieldTabletPadding?.left}${inputFieldPaddingUnits?.Tablet}`;
    const inputFieldPaddingMobileWidth = `${inputFieldMobilePadding?.top}${inputFieldPaddingUnits?.Mobile} ${inputFieldMobilePadding?.right}${inputFieldPaddingUnits?.Mobile} ${inputFieldMobilePadding?.bottom}${inputFieldPaddingUnits?.Mobile} ${inputFieldMobilePadding?.left}${inputFieldPaddingUnits?.Mobile}`;

    const textFieldMarginDesktopWidth = `${textFieldDesktopMargin?.top}${textFieldMarginUnits?.Desktop} ${textFieldDesktopMargin?.right}${textFieldMarginUnits?.Desktop} ${textFieldDesktopMargin?.bottom}${textFieldMarginUnits?.Desktop} ${textFieldDesktopMargin?.left}${textFieldMarginUnits?.Desktop}`;
    const textFieldMarginTabletWidth = `${textFieldTabMargin?.top}${textFieldMarginUnits?.Tablet} ${textFieldTabMargin?.right}${textFieldMarginUnits?.Tablet} ${textFieldTabMargin?.bottom}${textFieldMarginUnits?.Tablet} ${textFieldTabMargin?.left}${textFieldMarginUnits?.Tablet}`;
    const textFieldMarginMobileWidth = `${textFieldMobileMargin?.top}${textFieldMarginUnits?.Mobile} ${textFieldMobileMargin?.right}${textFieldMarginUnits?.Mobile} ${textFieldMobileMargin?.bottom}${textFieldMarginUnits?.Mobile} ${textFieldMobileMargin?.left}${textFieldMarginUnits?.Mobile}`;

    const textFieldPaddingDesktopWidth = `${textFieldDesktopPadding?.top}${textFieldPaddingUnits?.Desktop} ${textFieldDesktopPadding?.right}${textFieldPaddingUnits?.Desktop} ${textFieldDesktopPadding?.bottom}${textFieldPaddingUnits?.Desktop} ${textFieldDesktopPadding?.left}${textFieldPaddingUnits?.Desktop}`;
    const textFieldPaddingTabletWidth = `${textFieldTabPadding?.top}${textFieldPaddingUnits?.Tablet} ${textFieldTabPadding?.right}${textFieldPaddingUnits?.Tablet} ${textFieldTabPadding?.bottom}${textFieldPaddingUnits?.Tablet} ${textFieldTabPadding?.left}${textFieldPaddingUnits?.Tablet}`;
    const textFieldPaddingMobileWidth = `${textFieldMobilePadding?.top}${textFieldPaddingUnits?.Mobile} ${textFieldMobilePadding?.right}${textFieldPaddingUnits?.Mobile} ${textFieldMobilePadding?.bottom}${textFieldPaddingUnits?.Mobile} ${textFieldMobilePadding?.left}${textFieldPaddingUnits?.Mobile}`;

    const textFieldBorderDesktopWidth = `${textFieldDesktopBorderWidth?.top}${textFieldBorderUnits?.Desktop} ${textFieldDesktopBorderWidth?.right}${textFieldBorderUnits?.Desktop} ${textFieldDesktopBorderWidth?.bottom}${textFieldBorderUnits?.Desktop} ${textFieldDesktopBorderWidth?.left}${textFieldBorderUnits?.Desktop}`;
    const textFieldBorderTabletWidth = `${textFieldTabBorderWidth?.top}${textFieldBorderUnits?.Tablet} ${textFieldTabBorderWidth?.right}${textFieldBorderUnits?.Tablet} ${textFieldTabBorderWidth?.bottom}${textFieldBorderUnits?.Tablet} ${textFieldTabBorderWidth?.left}${textFieldBorderUnits?.Tablet}`;
    const textFieldBorderMobileWidth = `${textFieldMobileBorderWidth?.top}${textFieldBorderUnits?.Mobile} ${textFieldMobileBorderWidth?.right}${textFieldBorderUnits?.Mobile} ${textFieldMobileBorderWidth?.bottom}${textFieldBorderUnits?.Mobile} ${textFieldMobileBorderWidth?.left}${textFieldBorderUnits?.Mobile}`;

    const textFieldBorderRadiusDesktopWidth = `${textFieldDesktopBorderRadiusWidth?.top}${textFieldBorderRadiusUnits?.Desktop} ${textFieldDesktopBorderRadiusWidth?.right}${textFieldBorderRadiusUnits?.Desktop} ${textFieldDesktopBorderRadiusWidth?.bottom}${textFieldBorderRadiusUnits?.Desktop} ${textFieldDesktopBorderRadiusWidth?.left}${textFieldBorderRadiusUnits?.Desktop}`;
    const textFieldBorderRadiusTabletWidth = `${textFieldTabBorderRadiusWidth?.top}${textFieldBorderRadiusUnits?.Tablet} ${textFieldTabBorderRadiusWidth?.right}${textFieldBorderRadiusUnits?.Tablet} ${textFieldTabBorderRadiusWidth?.bottom}${textFieldBorderRadiusUnits?.Tablet} ${textFieldTabBorderRadiusWidth?.left}${textFieldBorderRadiusUnits?.Tablet}`;
    const textFieldBorderRadiusMobileWidth = `${textFieldMobileBorderRadiusWidth?.top}${textFieldBorderRadiusUnits?.Mobile} ${textFieldMobileBorderRadiusWidth?.right}${textFieldBorderRadiusUnits?.Mobile} ${textFieldMobileBorderRadiusWidth?.bottom}${textFieldBorderRadiusUnits?.Mobile} ${textFieldMobileBorderRadiusWidth?.left}${textFieldBorderRadiusUnits?.Mobile}`;

    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop?.top}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.right}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.bottom}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.left}${inputFieldBorderUnits?.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet?.top}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.right}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.bottom}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.left}${inputFieldBorderUnits?.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile?.top}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.right}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.bottom}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.left}${inputFieldBorderUnits?.Mobile}`;

    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop?.top}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.right}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.bottom}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.left}${inputFieldBorderRadiusUnits?.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet?.top}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.right}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.bottom}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.left}${inputFieldBorderRadiusUnits?.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile?.top}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.right}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.bottom}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.left}${inputFieldBorderRadiusUnits?.Mobile}`;


    const fbTextFieldItemStyle = useMemo(
        () => `
        .fb-accordion-item-main-wrapper.${blockID} {
            position: relative;
            transition: all 0.3s ease-in-out;
        }
        
          .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            transition: all 0.3s ease-in-out;
          }
      
          .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout {
            display: block;
          }
      
          .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout p {
            margin: 0;
          }
      
          @media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            }
          }
      
          @media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            }
          }
        `,
        [
            blockID,
            deviceType,
        ]
      );
      
      const customCss = getCustomCss(textFieldCustomCSS, `.${blockID}`);

      useEffect(() => {
        setAttributes({
          blockStyle: `${fbTextFieldItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
        });
      }, [fbTextFieldItemStyle, customCss]);

      const editorStyle = `${fbTextFieldItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

      const fbTextFieldItemStyleTwo = useMemo(() => `
        .fb-accordion-item-main-wrapper.${blockID} {
            position: relative;
            display: block;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
            display: none;
            margin: 0;
            padding: 0;
            height: 0;
            position: absolute;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
            display: block;
            height: auto;
            position: static;
            visibility: visible;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content p {
            margin: 0;
            transition: all 0.3s ease-in-out;
        }


        @media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            }
        }
        `, [
            blockID,
            deviceType,
        ]);

        useEffect(() => {
            setAttributes({
                blockStyleTwo: `${fbTextFieldItemStyleTwo} ${customCss}`.replace(/\s+/g, ' ').trim(),
            });
        }, [fbTextFieldItemStyleTwo, customCss]);

    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;
    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Field Type", "frontis-blocks")}
                    value={fieldType}
                    options={FIELD_TYPES}
                    onChange={(value) => setAttributes({ fieldType: value })}
                />
                <ToggleControl
                    label={__("Show Label", "frontis-blocks")}
                    checked={mergeFieldLabelSwitcher}
                    onChange={(value) => setAttributes({ fieldLabelSwitcher: value })}
                />
                <ToggleControl
                    label={__("Is It Required Field?", "frontis-blocks")}
                    checked={mergeFieldRequiredSwitcher}
                    onChange={(value) => setAttributes({ fieldRequiredSwitcher: value })}
                />
                {mergeFieldRequiredSwitcher && (
                    <ToggleControl
                        label={__("Show Required Symbol", "frontis-blocks")}
                        checked={mergeFieldRequiredSymbolSwitcher}
                        onChange={(value) => setAttributes({ fieldRequiredSymbolSwitcher: value })}
                    />
                )}
                <ToggleControl
                    label={__("Show icon", "frontis-blocks")}
                    checked={mergeFieldIconSwitcher}
                    onChange={(value) => setAttributes({ fieldIconSwitcher: value })}
                />
            </PanelBody>

            <PanelBody title={__("Content", "frontis-blocks")} initialOpen={false}>
                {mergeFieldLabelSwitcher && (
                    <TextControl
                        label={__('Field Label', 'frontis-blocks')}
                        value={fieldLabel}
                        onChange={(value) => setAttributes({ fieldLabel: value })}
                    />
                )}
                <TextControl
                    label={__('Placeholder', 'frontis-blocks')}
                    value={fieldPlaceholder}
                    onChange={(value) => setAttributes({ fieldPlaceholder: value })}
                />
                {mergeFieldRequiredSwitcher && (
                    <TextareaControl
                        label={__('Required Message', 'frontis-blocks')}
                        value={fieldRequiredText}
                        onChange={(value) => setAttributes({ fieldRequiredText: value })}
                        help={__('This message will be shown when the field is required', 'frontis-blocks')}
                    />
                )}
                <TextControl
                    label={__('Default Value', 'frontis-blocks')}
                    value={fieldDefaultValue}
                    onChange={(value) => setAttributes({ fieldDefaultValue: value })}
                    help={__('Leave empty if no default value is needed.', 'frontis-block')}
                />
                <TextControl
                    label={__('Custom Name Attribute', 'frontis-blocks')}
                    value={fieldCustomNameAttribute}
                    onChange={(value) => setAttributes({ fieldCustomNameAttribute: value })}
                    help={__('Each name attribute must be unique to submit form data correctly. Leave the field blank if no custom name attribute is necessary.', 'frontis-block')}
                />
                {mergeFieldIconSwitcher && (
                    <BaseControl
                        label={__("Field Icon", "frontis-blocks")}
                    >
                        <FBIconPicker
                            value={fieldIcon} 
                            setIconHandler={(value) => setAttributes({ fieldIcon: value })} 
                        />
                    </BaseControl>
                )}
            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Labels", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={labelGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ labelGlobalTypographyData: value })}
    
                    globalTypoType={labelGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            labelGlobalTypoType: value, 
                            labelGlobalTypoSwitcher: value === 'default' ? {...labelGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...labelGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}
    
                    globalTypoOption={labelGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ labelGlobalTypoOption: value })}
    
                    fontFamily={labelFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ labelFontFamily: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontFamily: value && false} })}
    
                    fontSize={labelFontSize}
                    onChangeFontSize={(value) => setAttributes({ labelFontSize: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontSize: value && false} })}
    
                    fontSizeUnits={labelFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ labelFontSizeUnits: value })}
    
                    fontWeight={labelFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ labelFontWeight: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontWeight: value && false} })}
    
                    fontStyle={labelFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ labelFontStyle: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, fontStyle: value && false} })}
    
                    textTransform={labelTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ labelTextTransform: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, textTransform: value && false} })}
    
                    textDecoration={labelTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ labelTextDecoration: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, textDecoration: value && false} })}
    
                    letterSpacing={labelLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ labelLetterSpacing: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, letterSpacing: value && false} })}
    
                    letterSpacingUnits={labelLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ labelLetterSpacingUnits: value })}
    
                    lineHeight={labelLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ labelLineHeight: value, labelGlobalTypoSwitcher: {...labelGlobalTypoSwitcher, lineHeight: value && false} })}
    
                    lineHeightUnits={labelLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ labelLineHeightUnits: value })}
    
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
    
                <FB_ColorControl
                    label={__("Color", "frontis-blocks")}
                    globalColor={labelColor}
                    setGlobalColor={(value) => setAttributes({ labelColor: value === undefined ? '' : value })}
                />
                
                <FB_ColorControl
                    label={__("Required Color", "frontis-blocks")}
                    globalColor={labelRequiredColor}
                    setGlobalColor={(value) => setAttributes({ labelRequiredColor: value === undefined ? '' : value })}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleLabelMarginUnitsHandler}
                    spacingUnits={labelMarginUnits}
                    spacingDesktop={labelDesktopMargin}
                    spacingTablet={labelTabletMargin}
                    spacingMobile={labelMobileMargin}
                    handleSpacingUnitHandler={handleLabelMarginUnitChange}
                    spacingCombineBtn={labelMarginLink}
                    spacingCombineBtnHandler={handleLabelMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
    
            <PanelBody
                title={__("Input Fields", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={inputFieldGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ inputFieldGlobalTypographyData: value })}
    
                    globalTypoType={inputFieldGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            inputFieldGlobalTypoType: value, 
                            inputFieldGlobalTypoSwitcher: value === 'default' ? {...inputFieldGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...inputFieldGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}
    
                    globalTypoOption={inputFieldGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ inputFieldGlobalTypoOption: value })}
    
                    fontFamily={inputFieldFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ inputFieldFontFamily: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, fontFamily: value && false} })}
    
                    fontSize={inputFieldFontSize}
                    onChangeFontSize={(value) => setAttributes({ inputFieldFontSize: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, fontSize: value && false} })}
    
                    fontSizeUnits={inputFieldFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ inputFieldFontSizeUnits: value })}
    
                    fontWeight={inputFieldFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ inputFieldFontWeight: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, fontWeight: value && false} })}
    
                    fontStyle={inputFieldFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ inputFieldFontStyle: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, fontStyle: value && false} })}
    
                    textTransform={inputFieldTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ inputFieldTextTransform: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, textTransform: value && false} })}
    
                    textDecoration={inputFieldTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ inputFieldTextDecoration: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, textDecoration: value && false} })}
    
                    letterSpacing={inputFieldLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ inputFieldLetterSpacing: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, letterSpacing: value && false} })}
    
                    letterSpacingUnits={inputFieldLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ inputFieldLetterSpacingUnits: value })}
    
                    lineHeight={inputFieldLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ inputFieldLineHeight: value, inputFieldGlobalTypoSwitcher: {...inputFieldGlobalTypoSwitcher, lineHeight: value && false} })}
    
                    lineHeightUnits={inputFieldLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ inputFieldLineHeightUnits: value })}
    
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
    
                <FB_ColorControl
                    label={__("Color", "frontis-blocks")}
                    globalColor={inputFieldColor}
                    setGlobalColor={(value) => setAttributes({ inputFieldColor: value === undefined ? '' : value })}
                />
                
                <FB_ColorControl
                    label={__("Placeholder Color", "frontis-blocks")}
                    globalColor={inputFieldPlaceholderColor}
                    setGlobalColor={(value) => setAttributes({ inputFieldPlaceholderColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Focus Color", "frontis-blocks")}
                    globalColor={inputFieldFocusColor}
                    setGlobalColor={(value) => setAttributes({ inputFieldFocusColor: value === undefined ? '' : value })}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={inputFieldBgColorSwitcher}
                    setBgColorSwitcher={(value) =>
                        setAttributes({ inputFieldBgColorSwitcher: value })
                    }
                    normalBackgroundType={inputFieldBgType}
                    setNormalBackgroundType={(value) =>
                        setAttributes({ inputFieldBgType: value })
                    }
                    normalClassicColor={inputFieldBgClassicColor}
                    setNormalClassicColor={(value) =>
                        setAttributes({ inputFieldBgClassicColor: value === undefined ? '' : value })
                    }
                    normalGradientColor={inputFieldBgGradientColor}
                    setNormalGradientColor={(value) =>
                        setAttributes({ inputFieldBgGradientColor: value === undefined ? null : value })
                    }
                    normalCustomGradientSwitcher={
                        inputFieldBgCustomGradientSwitcher
                    }
                    setNormalCustomGradientSwitcher={(value) =>
                        setAttributes({
                            inputFieldBgCustomGradientSwitcher: value,
                        })
                    }
                    normalCustomGradientInputValue={
                        inputFieldBgCustomGradientInputValue
                    }
                    setNormalCustomGradientInputValue={(value) =>
                        setAttributes({
                            inputFieldBgCustomGradientInputValue: value,
                        })
                    }
                    normalBackgroundImageUrl={inputFieldBgImageUrl}
                    setNormalBackgroundImageUrl={(value) =>
                        setAttributes({ inputFieldBgImageUrl: value })
                    }
                    normalBackgroundImageAlt={inputFieldBgImageAlt}
                    setNormalBackgroundImageAlt={(value) =>
                        setAttributes({ inputFieldBgImageAlt: value })
                    }
                    normalBackgroundImageID={inputFieldBgImageID}
                    setNormalBackgroundImageID={(value) =>
                        setAttributes({ inputFieldBgImageID: value })
                    }
                    normalBackgroundImagePosition={
                        inputFieldBgImagePosition
                    }
                    setNormalBackgroundImagePosition={(value) =>
                        setAttributes({
                            inputFieldBgImagePosition: value,
                        })
                    }
                    normalBackgroundImageAttachment={
                        inputFieldBgImageAttachment
                    }
                    setNormalBackgroundImageAttachment={(value) =>
                        setAttributes({
                            inputFieldBgImageAttachment: value,
                        })
                    }
                    normalBackgroundImageRepeat={
                        inputFieldBgImageRepeat
                    }
                    setNormalBackgroundImageRepeat={(value) =>
                        setAttributes({
                            inputFieldBgImageRepeat: value,
                        })
                    }
                    normalBackgroundImageSize={inputFieldBgImageSize}
                    setNormalBackgroundImageSize={(value) =>
                        setAttributes({ inputFieldBgImageSize: value })
                    }
                    hoverBackgroundType={inputFieldBgHoverType}
                    setHoverBackgroundType ={(value) =>
                        setAttributes({ inputFieldBgHoverType: value })
                    }
                    hoverClassicColor={inputFieldBgHoverClassicColor}
                    setHoverClassicColor={(value) =>
                        setAttributes({ inputFieldBgHoverClassicColor: value === undefined ? '' : value })
                    }
                    hoverGradientColor={inputFieldBgHoverGradientColor}
                    setHoverGradientColor={(value) =>
                        setAttributes({ inputFieldBgHoverGradientColor: value === undefined ? null : value })
                    }
                    hoverCustomGradientSwitcher={
                        inputFieldBgHoverCustomGradientSwitcher
                    }
                    setHoverCustomGradientSwitcher={(value) =>
                        setAttributes({
                            inputFieldBgHoverCustomGradientSwitcher: value,
                        })
                    }
                    hoverCustomGradientInputValue={
                        inputFieldBgHoverCustomGradientInputValue
                    }
                    setHoverCustomGradientInputValue={(value) =>
                        setAttributes({
                            inputFieldBgHoverCustomGradientInputValue: value,
                        })
                    }
                    hoverBackgroundImageUrl={inputFieldBgHoverImageUrl}
                    setBgHoverImageUrl={(value) =>
                        setAttributes({ inputFieldBgHoverImageUrl: value })
                    }
                    hoverBackgroundImageAlt={inputFieldBgHoverImageAlt}
                    setBgHoverImageAlt={(value) =>
                        setAttributes({ inputFieldBgHoverImageAlt: value })
                    }
                    hoverBackgroundImageID={inputFieldBgHoverImageID}
                    setBgHoverImageID={(value) =>
                        setAttributes({ inputFieldBgHoverImageID: value })
                    }
                    hoverBackgroundImagePosition={
                        inputFieldBgHoverImagePosition
                    }
                    setBgHoverImagePosition={(value) =>
                        setAttributes({
                            inputFieldBgHoverImagePosition: value,
                        })
                    }
                    hoverBackgroundImageAttachment={
                        inputFieldBgHoverImageAttachment
                    }
                    setBgHoverImageAttachment={(value) =>
                        setAttributes({
                            inputFieldBgHoverImageAttachment: value,
                        })
                    }
                    hoverBackgroundImageRepeat={
                        inputFieldBgHoverImageRepeat
                    }
                    setBgHoverImageRepeat={(value) =>
                        setAttributes({
                            inputFieldBgHoverImageRepeat: value,
                        })
                    }
                    hoverBackgroundImageSize={inputFieldBgHoverImageSize}
                    setBgHoverImageSize={(value) =>
                        setAttributes({ inputFieldBgHoverImageSize: value })
                    }
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldMarginUnitsHandler}
                    spacingUnits={inputFieldMarginUnits}
                    spacingDesktop={inputFieldDesktopMargin}
                    spacingTablet={inputFieldTabletMargin}
                    spacingMobile={inputFieldMobileMargin}
                    handleSpacingUnitHandler={handleInputFieldMarginUnitChange}
                    spacingCombineBtn={inputFieldMarginLink}
                    spacingCombineBtnHandler={handleInputFieldMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldPaddingUnitsHandler}
                    spacingUnits={inputFieldPaddingUnits}
                    spacingDesktop={inputFieldDesktopPadding}
                    spacingTablet={inputFieldTabletPadding}
                    spacingMobile={inputFieldMobilePadding}
                    handleSpacingUnitHandler={handleInputFieldPaddingUnitChange}
                    spacingCombineBtn={inputFieldPaddingLink}
                    spacingCombineBtnHandler={handleInputFieldPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={inputFieldBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ inputFieldBorder: value })}
                />
    
                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={inputFieldBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldBorderColorSwitcher: value })}
                />
                
                {inputFieldBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={inputFieldBorderColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldBorderColor: value === undefined ? '' : value })}
                    />
                )}
                
                {inputFieldBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={inputFieldBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}
    
                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldBorderUnitsHandler}
                    spacingUnits={inputFieldBorderUnits}
                    spacingDesktop={inputFieldBorderDesktop}
                    spacingTablet={inputFieldBorderTablet}
                    spacingMobile={inputFieldBorderMobile}
                    handleSpacingUnitHandler={handleInputFieldBorderUnitChange}
                    spacingCombineBtn={inputFieldBorderLink}
                    spacingCombineBtnHandler={handleInputFieldBorderCombineBtn}
                    setAttributes={setAttributes}
                />
    
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldBorderRadiusUnitsHandler}
                    spacingUnits={inputFieldBorderRadiusUnits}
                    spacingDesktop={inputFieldBorderRadiusDesktop}
                    spacingTablet={inputFieldBorderRadiusTablet}
                    spacingMobile={inputFieldBorderRadiusMobile}
                    handleSpacingUnitHandler={handleInputFieldBorderRadiusUnitChange}
                    spacingCombineBtn={inputFieldBorderRadiusLink}
                    spacingCombineBtnHandler={handleInputFieldBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
    
                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={inputFieldBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldBoxShadowSwitcher: value })}
                />

                {inputFieldBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ inputFieldBoxShadowValues: value })
                        }
                        initialShadowValue={inputFieldBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                inputFieldBoxShadowCssValue: value,
                            })
                        }
                    />
                )}
                
                {inputFieldBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ inputFieldBoxShadowHoverValues: value })
                        }
                        initialShadowValue={inputFieldBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                inputFieldBoxShadowHoverCssValue: value,
                            })
                        }
                    />
                )}
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
                            rangeValue={textFieldZIndex}
                            onChangeHandler={(value) => setAttributes({ textFieldZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={textFieldOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ textFieldOverflow: value })}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={textFieldGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ textFieldGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={textFieldGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ textFieldGlobalWraperClass: value })}
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
                            spacingUnitsHandler={handleTextFieldMarginUnitsHandler}
                            spacingUnits={textFieldMarginUnits}
                            spacingDesktop={textFieldDesktopMargin}
                            spacingTablet={textFieldTabMargin}
                            spacingMobile={textFieldMobileMargin}
                            handleSpacingUnitHandler={handleTextFieldMarginUnitChange}
                            spacingCombineBtn={textFieldMarginLink}
                            spacingCombineBtnHandler={handleTextFieldMarginCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleTextFieldPaddingUnitsHandler}
                            spacingUnits={textFieldPaddingUnits}
                            spacingDesktop={textFieldDesktopPadding}
                            spacingTablet={textFieldTabPadding}
                            spacingMobile={textFieldMobilePadding}
                            handleSpacingUnitHandler={handleTextFieldPaddingUnitChange}
                            spacingCombineBtn={textFieldPaddingLink}
                            spacingCombineBtnHandler={handleTextFieldPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />                                     
                    </PanelBody>

                    <PanelBody 
                        title="Background Color" 
                        initialOpen={false} 
                    >
                        <FB_BackgroundColorControl
                            bgColorSwitcher={textFieldBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ textFieldBgColorSwitcher: value })
                            }
                            normalBackgroundType={textFieldBgType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ textFieldBgType: value })
                            }
                            normalClassicColor={textFieldBgClassicColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ textFieldBgClassicColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={textFieldBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ textFieldBgGradientColor: value === undefined ? null : value })
                            }
                            normalCustomGradientSwitcher={textFieldBgCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    textFieldBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={textFieldBgCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    textFieldBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={textFieldBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ textFieldBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={textFieldBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ textFieldBgImageAlt: value })
                            }
                            normalBackgroundImageID={textFieldBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ textFieldBgImageID: value })
                            }
                            normalBackgroundImagePosition={textFieldBgImagePosition}
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    textFieldBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={textFieldBgImageAttachment}
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    textFieldBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={textFieldBgImageRepeat}
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    textFieldBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={textFieldBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ textFieldBgImageSize: value })
                            }
                            hoverBackgroundType={textFieldBgHoverType}
                            setHoverBackgroundType={(value) =>
                                setAttributes({ textFieldBgHoverType: value })
                            }
                            hoverClassicColor={textFieldBgHoverClassicColor}
                            setHoverClassicColor={(value) =>
                                setAttributes({ textFieldBgHoverClassicColor: value === undefined ? '' : value })
                            }
                            hoverGradientColor={textFieldBgHoverGradientColor}
                            setHoverGradientColor={(value) =>
                                setAttributes({ textFieldBgHoverGradientColor: value === undefined ? null : value })
                            }
                            hoverCustomGradientSwitcher={textFieldBgHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    textFieldBgHoverCustomGradientSwitcher: value,
                                })
                            }
                            hoverCustomGradientInputValue={textFieldBgHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) =>
                                setAttributes({
                                    textFieldBgHoverCustomGradientInputValue: value,
                                })
                            }
                            hoverBackgroundImageUrl={textFieldBgHoverImageUrl}
                            setBgHoverImageUrl={(value) =>
                                setAttributes({ textFieldBgHoverImageUrl: value })
                            }
                            hoverBackgroundImageAlt={textFieldBgHoverImageAlt}
                            setBgHoverImageAlt={(value) =>
                                setAttributes({ textFieldBgHoverImageAlt: value })
                            }
                            hoverBackgroundImageID={textFieldBgHoverImageID}
                            setBgHoverImageID={(value) =>
                                setAttributes({ textFieldBgHoverImageID: value })
                            }
                            hoverBackgroundImagePosition={textFieldBgHoverImagePosition}
                            setBgHoverImagePosition={(value) =>
                                setAttributes({
                                    textFieldBgHoverImagePosition: value,
                                })
                            }
                            hoverBackgroundImageAttachment={textFieldBgHoverImageAttachment}
                            setBgHoverImageAttachment={(value) =>
                                setAttributes({
                                    textFieldBgHoverImageAttachment: value,
                                })
                            }
                            hoverBackgroundImageRepeat={textFieldBgHoverImageRepeat}
                            setBgHoverImageRepeat={(value) =>
                                setAttributes({
                                    textFieldBgHoverImageRepeat: value,
                                })
                            }
                            hoverBackgroundImageSize={textFieldBgHoverImageSize}
                            setBgHoverImageSize={(value) =>
                                setAttributes({ textFieldBgHoverImageSize: value })
                            }
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Border & Border Radius", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-border-setting-wrapper"
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={textFieldBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ textFieldBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={textFieldBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ textFieldBorderColorSwitcher: value })}
                        />
                        
                        {textFieldBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={textFieldBorderColor}
                                setGlobalColor={(value) => setAttributes({ textFieldBorderColor: value === undefined ? '' : value })}
                            />
                        )}
                        
                        {textFieldBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={textFieldBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ textFieldBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleTextFieldBorderUnitsHandler}
                            spacingUnits={textFieldBorderUnits}
                            spacingDesktop={textFieldDesktopBorderWidth}
                            spacingTablet={textFieldTabBorderWidth}
                            spacingMobile={textFieldMobileBorderWidth}
                            handleSpacingUnitHandler={handleTextFieldBorderUnitChange}
                            spacingCombineBtn={textFieldBorderLink}
                            spacingCombineBtnHandler={handleTextFieldBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleTextFieldBorderRadiusUnitsHandler}
                            spacingUnits={textFieldBorderRadiusUnits}
                            spacingDesktop={textFieldDesktopBorderRadiusWidth}
                            spacingTablet={textFieldTabBorderRadiusWidth}
                            spacingMobile={textFieldMobileBorderRadiusWidth}
                            handleSpacingUnitHandler={handleTextFieldBorderRadiusUnitChange}
                            spacingCombineBtn={textFieldBorderRadiusLink}
                            spacingCombineBtnHandler={handleTextFieldBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={textFieldGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ textFieldGlobalBoxShadowSwitcher: value })}
                        />
                        
                        {textFieldGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ textFieldGlobalBoxShadowValues: value })
                                }
                                initialShadowValue={textFieldGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        textFieldGlobalBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}
                        
                        {textFieldGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ textFieldGlobalHoverBoxShadowValues: value })
                                }
                                initialShadowValue={textFieldGlobalHoverBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        textFieldGlobalHoverBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={textFieldDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ textFieldDesktopSwitcher: value })}

                            tabletValue={textFieldTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ textFieldTabletSwitcher: value })}

                            mobileValue={textFieldMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ textFieldMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={textFieldCustomCSS} 
                            onChangeValue={(value) => setAttributes({ textFieldCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
        );

    return (
        <>
        <style>
            {`
                ${editorStyle}
            `}
        </style>

        <FB_InspectorControls
            generalControls={generalControls}
            styleControls={styleControls}
            advancedControls={advancedControls}
        />
        </>
    );
};

export default Inspector;
