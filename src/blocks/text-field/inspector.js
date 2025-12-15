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

        fieldCustomCSS,
        fieldGlobalWraperID,
        fieldGlobalWraperClass,

        // form Advance
        fieldZIndex,
        fieldOverflow,
        fieldPaddingUnits,
        fieldDesktopPadding,
        fieldTabPadding,
        fieldMobilePadding,
        fieldPaddingLink,

        fieldMarginUnits,
        fieldDesktopMargin,
        fieldTabMargin,
        fieldMobileMargin,
        fieldMarginLink,

        fieldBorder,
        fieldBorderColor,
        fieldBorderHoverColor,
        fieldBorderColorSwitcher,
        fieldBorderUnits,
        fieldDesktopBorderWidth,
        fieldTabBorderWidth,
        fieldMobileBorderWidth,
        fieldBorderLink,

        fieldBorderRadiusUnits,
        fieldDesktopBorderRadiusWidth,
        fieldTabBorderRadiusWidth,
        fieldMobileBorderRadiusWidth,
        fieldBorderRadiusLink,

        fieldDesktopSwitcher,
        fieldTabletSwitcher,
        fieldMobileSwitcher,

        fieldBgColorSwitcher,
        fieldBgType,
        fieldBgClassicColor,
        fieldBgGradientColor,
        fieldBgCustomGradientSwitcher,
        fieldBgCustomGradientInputValue,
        fieldBgImageUrl,
        fieldBgImageAlt,
        fieldBgImageID,
        fieldBgImagePosition,
        fieldBgImageAttachment,
        fieldBgImageRepeat,
        fieldBgImageSize,
        fieldBgHoverType,
        fieldBgHoverClassicColor,
        fieldBgHoverGradientColor,
        fieldBgHoverCustomGradientSwitcher,
        fieldBgHoverCustomGradientInputValue,
        fieldBgHoverImageUrl,
        fieldBgHoverImageAlt,
        fieldBgHoverImageID,
        fieldBgHoverImagePosition,
        fieldBgHoverImageAttachment,
        fieldBgHoverImageRepeat,
        fieldBgHoverImageSize,

        fieldGlobalBoxShadowSwitcher,
        fieldGlobalBoxShadowValues,
        fieldGlobalBoxShadowCssValue,
        fieldGlobalHoverBoxShadowValues,
        fieldGlobalHoverBoxShadowCssValue,
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
    const handleFieldMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fieldMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fieldDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldMobileMargin: {
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
                    setAttributes( {fieldDesktopMargin: {...fieldDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldTabMargin: {...fieldTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldMobileMargin: {...fieldMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldMarginCombineBtn = () => {
        setAttributes( {fieldMarginLink: !fieldMarginLink} );
    }

    const handleFieldMarginUnitsHandler = (unit) => {
        setAttributes( {
            fieldMarginUnits: {
                ...fieldMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // form Padding Functionb
    const handleFieldPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fieldPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fieldDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldMobilePadding: {
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
                    setAttributes( {fieldDesktopPadding: {...fieldDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldTabPadding: {...fieldTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldMobilePadding: {...fieldMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldPaddingCombineBtn = () => {
        setAttributes( {fieldPaddingLink: !fieldPaddingLink} );
    }

    const handleFieldPaddingUnitsHandler = (unit) => {
        setAttributes( {
            fieldPaddingUnits: {
                ...fieldPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderWidth Function
    const handleFieldBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fieldBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fieldDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldMobileBorderWidth: {
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
                    setAttributes( {fieldDesktopBorderWidth: {...fieldDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldTabBorderWidth: {...fieldTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldMobileBorderWidth: {...fieldMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldBorderCombineBtn = () => {
        setAttributes( {fieldBorderLink: !fieldBorderLink} );
    }

    const handleFieldBorderUnitsHandler = (unit) => {
        setAttributes( {
            fieldBorderUnits: {
                ...fieldBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderRadiusWidth Function
    const handleFieldBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fieldBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fieldDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldMobileBorderRadiusWidth: {
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
                    setAttributes( {fieldDesktopBorderRadiusWidth: {...fieldDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldTabBorderRadiusWidth: {...fieldTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldMobileBorderRadiusWidth: {...fieldMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleFieldBorderRadiusCombineBtn = () => {
        setAttributes( {fieldBorderRadiusLink: !fieldBorderRadiusLink} );
    }

    const handleFieldBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            fieldBorderRadiusUnits: {
                ...fieldBorderRadiusUnits,
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

    const fieldMarginDesktopWidth = `${fieldDesktopMargin?.top}${fieldMarginUnits?.Desktop} ${fieldDesktopMargin?.right}${fieldMarginUnits?.Desktop} ${fieldDesktopMargin?.bottom}${fieldMarginUnits?.Desktop} ${fieldDesktopMargin?.left}${fieldMarginUnits?.Desktop}`;
    const fieldMarginTabletWidth = `${fieldTabMargin?.top}${fieldMarginUnits?.Tablet} ${fieldTabMargin?.right}${fieldMarginUnits?.Tablet} ${fieldTabMargin?.bottom}${fieldMarginUnits?.Tablet} ${fieldTabMargin?.left}${fieldMarginUnits?.Tablet}`;
    const fieldMarginMobileWidth = `${fieldMobileMargin?.top}${fieldMarginUnits?.Mobile} ${fieldMobileMargin?.right}${fieldMarginUnits?.Mobile} ${fieldMobileMargin?.bottom}${fieldMarginUnits?.Mobile} ${fieldMobileMargin?.left}${fieldMarginUnits?.Mobile}`;

    const fieldPaddingDesktopWidth = `${fieldDesktopPadding?.top}${fieldPaddingUnits?.Desktop} ${fieldDesktopPadding?.right}${fieldPaddingUnits?.Desktop} ${fieldDesktopPadding?.bottom}${fieldPaddingUnits?.Desktop} ${fieldDesktopPadding?.left}${fieldPaddingUnits?.Desktop}`;
    const fieldPaddingTabletWidth = `${fieldTabPadding?.top}${fieldPaddingUnits?.Tablet} ${fieldTabPadding?.right}${fieldPaddingUnits?.Tablet} ${fieldTabPadding?.bottom}${fieldPaddingUnits?.Tablet} ${fieldTabPadding?.left}${fieldPaddingUnits?.Tablet}`;
    const fieldPaddingMobileWidth = `${fieldMobilePadding?.top}${fieldPaddingUnits?.Mobile} ${fieldMobilePadding?.right}${fieldPaddingUnits?.Mobile} ${fieldMobilePadding?.bottom}${fieldPaddingUnits?.Mobile} ${fieldMobilePadding?.left}${fieldPaddingUnits?.Mobile}`;

    const fieldBorderDesktopWidth = `${fieldDesktopBorderWidth?.top}${fieldBorderUnits?.Desktop} ${fieldDesktopBorderWidth?.right}${fieldBorderUnits?.Desktop} ${fieldDesktopBorderWidth?.bottom}${fieldBorderUnits?.Desktop} ${fieldDesktopBorderWidth?.left}${fieldBorderUnits?.Desktop}`;
    const fieldBorderTabletWidth = `${fieldTabBorderWidth?.top}${fieldBorderUnits?.Tablet} ${fieldTabBorderWidth?.right}${fieldBorderUnits?.Tablet} ${fieldTabBorderWidth?.bottom}${fieldBorderUnits?.Tablet} ${fieldTabBorderWidth?.left}${fieldBorderUnits?.Tablet}`;
    const fieldBorderMobileWidth = `${fieldMobileBorderWidth?.top}${fieldBorderUnits?.Mobile} ${fieldMobileBorderWidth?.right}${fieldBorderUnits?.Mobile} ${fieldMobileBorderWidth?.bottom}${fieldBorderUnits?.Mobile} ${fieldMobileBorderWidth?.left}${fieldBorderUnits?.Mobile}`;

    const fieldBorderRadiusDesktopWidth = `${fieldDesktopBorderRadiusWidth?.top}${fieldBorderRadiusUnits?.Desktop} ${fieldDesktopBorderRadiusWidth?.right}${fieldBorderRadiusUnits?.Desktop} ${fieldDesktopBorderRadiusWidth?.bottom}${fieldBorderRadiusUnits?.Desktop} ${fieldDesktopBorderRadiusWidth?.left}${fieldBorderRadiusUnits?.Desktop}`;
    const fieldBorderRadiusTabletWidth = `${fieldTabBorderRadiusWidth?.top}${fieldBorderRadiusUnits?.Tablet} ${fieldTabBorderRadiusWidth?.right}${fieldBorderRadiusUnits?.Tablet} ${fieldTabBorderRadiusWidth?.bottom}${fieldBorderRadiusUnits?.Tablet} ${fieldTabBorderRadiusWidth?.left}${fieldBorderRadiusUnits?.Tablet}`;
    const fieldBorderRadiusMobileWidth = `${fieldMobileBorderRadiusWidth?.top}${fieldBorderRadiusUnits?.Mobile} ${fieldMobileBorderRadiusWidth?.right}${fieldBorderRadiusUnits?.Mobile} ${fieldMobileBorderRadiusWidth?.bottom}${fieldBorderRadiusUnits?.Mobile} ${fieldMobileBorderRadiusWidth?.left}${fieldBorderRadiusUnits?.Mobile}`;

    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop?.top}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.right}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.bottom}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.left}${inputFieldBorderUnits?.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet?.top}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.right}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.bottom}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.left}${inputFieldBorderUnits?.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile?.top}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.right}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.bottom}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.left}${inputFieldBorderUnits?.Mobile}`;

    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop?.top}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.right}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.bottom}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.left}${inputFieldBorderRadiusUnits?.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet?.top}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.right}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.bottom}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.left}${inputFieldBorderRadiusUnits?.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile?.top}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.right}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.bottom}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.left}${inputFieldBorderRadiusUnits?.Mobile}`;


    const fbfieldItemStyle = useMemo(
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
      
      const customCss = getCustomCss(fieldCustomCSS, `.${blockID}`);

      useEffect(() => {
        setAttributes({
          blockStyle: `${fbfieldItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
        });
      }, [fbfieldItemStyle, customCss]);

      const editorStyle = `${fbfieldItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

      const fbfieldItemStyleTwo = useMemo(() => `
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
                blockStyleTwo: `${fbfieldItemStyleTwo} ${customCss}`.replace(/\s+/g, ' ').trim(),
            });
        }, [fbfieldItemStyleTwo, customCss]);

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
                            rangeValue={fieldZIndex}
                            onChangeHandler={(value) => setAttributes({ fieldZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={fieldOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ fieldOverflow: value })}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={fieldGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ fieldGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={fieldGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ fieldGlobalWraperClass: value })}
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
                            spacingUnitsHandler={handleFieldMarginUnitsHandler}
                            spacingUnits={fieldMarginUnits}
                            spacingDesktop={fieldDesktopMargin}
                            spacingTablet={fieldTabMargin}
                            spacingMobile={fieldMobileMargin}
                            handleSpacingUnitHandler={handleFieldMarginUnitChange}
                            spacingCombineBtn={fieldMarginLink}
                            spacingCombineBtnHandler={handleFieldMarginCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldPaddingUnitsHandler}
                            spacingUnits={fieldPaddingUnits}
                            spacingDesktop={fieldDesktopPadding}
                            spacingTablet={fieldTabPadding}
                            spacingMobile={fieldMobilePadding}
                            handleSpacingUnitHandler={handleFieldPaddingUnitChange}
                            spacingCombineBtn={fieldPaddingLink}
                            spacingCombineBtnHandler={handleFieldPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />                                     
                    </PanelBody>

                    <PanelBody 
                        title="Background Color" 
                        initialOpen={false} 
                    >
                        <FB_BackgroundColorControl
                            bgColorSwitcher={fieldBgColorSwitcher}
                            setBgColorSwitcher={(value) =>
                                setAttributes({ fieldBgColorSwitcher: value })
                            }
                            normalBackgroundType={fieldBgType}
                            setNormalBackgroundType={(value) =>
                                setAttributes({ fieldBgType: value })
                            }
                            normalClassicColor={fieldBgClassicColor}
                            setNormalClassicColor={(value) =>
                                setAttributes({ fieldBgClassicColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={fieldBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ fieldBgGradientColor: value === undefined ? null : value })
                            }
                            normalCustomGradientSwitcher={fieldBgCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    fieldBgCustomGradientSwitcher: value,
                                })
                            }
                            normalCustomGradientInputValue={fieldBgCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) =>
                                setAttributes({
                                    fieldBgCustomGradientInputValue: value,
                                })
                            }
                            normalBackgroundImageUrl={fieldBgImageUrl}
                            setNormalBackgroundImageUrl={(value) =>
                                setAttributes({ fieldBgImageUrl: value })
                            }
                            normalBackgroundImageAlt={fieldBgImageAlt}
                            setNormalBackgroundImageAlt={(value) =>
                                setAttributes({ fieldBgImageAlt: value })
                            }
                            normalBackgroundImageID={fieldBgImageID}
                            setNormalBackgroundImageID={(value) =>
                                setAttributes({ fieldBgImageID: value })
                            }
                            normalBackgroundImagePosition={fieldBgImagePosition}
                            setNormalBackgroundImagePosition={(value) =>
                                setAttributes({
                                    fieldBgImagePosition: value,
                                })
                            }
                            normalBackgroundImageAttachment={fieldBgImageAttachment}
                            setNormalBackgroundImageAttachment={(value) =>
                                setAttributes({
                                    fieldBgImageAttachment: value,
                                })
                            }
                            normalBackgroundImageRepeat={fieldBgImageRepeat}
                            setNormalBackgroundImageRepeat={(value) =>
                                setAttributes({
                                    fieldBgImageRepeat: value,
                                })
                            }
                            normalBackgroundImageSize={fieldBgImageSize}
                            setNormalBackgroundImageSize={(value) =>
                                setAttributes({ fieldBgImageSize: value })
                            }
                            hoverBackgroundType={fieldBgHoverType}
                            setHoverBackgroundType={(value) =>
                                setAttributes({ fieldBgHoverType: value })
                            }
                            hoverClassicColor={fieldBgHoverClassicColor}
                            setHoverClassicColor={(value) =>
                                setAttributes({ fieldBgHoverClassicColor: value === undefined ? '' : value })
                            }
                            hoverGradientColor={fieldBgHoverGradientColor}
                            setHoverGradientColor={(value) =>
                                setAttributes({ fieldBgHoverGradientColor: value === undefined ? null : value })
                            }
                            hoverCustomGradientSwitcher={fieldBgHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) =>
                                setAttributes({
                                    fieldBgHoverCustomGradientSwitcher: value,
                                })
                            }
                            hoverCustomGradientInputValue={fieldBgHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) =>
                                setAttributes({
                                    fieldBgHoverCustomGradientInputValue: value,
                                })
                            }
                            hoverBackgroundImageUrl={fieldBgHoverImageUrl}
                            setBgHoverImageUrl={(value) =>
                                setAttributes({ fieldBgHoverImageUrl: value })
                            }
                            hoverBackgroundImageAlt={fieldBgHoverImageAlt}
                            setBgHoverImageAlt={(value) =>
                                setAttributes({ fieldBgHoverImageAlt: value })
                            }
                            hoverBackgroundImageID={fieldBgHoverImageID}
                            setBgHoverImageID={(value) =>
                                setAttributes({ fieldBgHoverImageID: value })
                            }
                            hoverBackgroundImagePosition={fieldBgHoverImagePosition}
                            setBgHoverImagePosition={(value) =>
                                setAttributes({
                                    fieldBgHoverImagePosition: value,
                                })
                            }
                            hoverBackgroundImageAttachment={fieldBgHoverImageAttachment}
                            setBgHoverImageAttachment={(value) =>
                                setAttributes({
                                    fieldBgHoverImageAttachment: value,
                                })
                            }
                            hoverBackgroundImageRepeat={fieldBgHoverImageRepeat}
                            setBgHoverImageRepeat={(value) =>
                                setAttributes({
                                    fieldBgHoverImageRepeat: value,
                                })
                            }
                            hoverBackgroundImageSize={fieldBgHoverImageSize}
                            setBgHoverImageSize={(value) =>
                                setAttributes({ fieldBgHoverImageSize: value })
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
                            value={fieldBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ fieldBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={fieldBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fieldBorderColorSwitcher: value })}
                        />
                        
                        {fieldBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={fieldBorderColor}
                                setGlobalColor={(value) => setAttributes({ fieldBorderColor: value === undefined ? '' : value })}
                            />
                        )}
                        
                        {fieldBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={fieldBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ fieldBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldBorderUnitsHandler}
                            spacingUnits={fieldBorderUnits}
                            spacingDesktop={fieldDesktopBorderWidth}
                            spacingTablet={fieldTabBorderWidth}
                            spacingMobile={fieldMobileBorderWidth}
                            handleSpacingUnitHandler={handleFieldBorderUnitChange}
                            spacingCombineBtn={fieldBorderLink}
                            spacingCombineBtnHandler={handleFieldBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldBorderRadiusUnitsHandler}
                            spacingUnits={fieldBorderRadiusUnits}
                            spacingDesktop={fieldDesktopBorderRadiusWidth}
                            spacingTablet={fieldTabBorderRadiusWidth}
                            spacingMobile={fieldMobileBorderRadiusWidth}
                            handleSpacingUnitHandler={handleFieldBorderRadiusUnitChange}
                            spacingCombineBtn={fieldBorderRadiusLink}
                            spacingCombineBtnHandler={handleFieldBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={fieldGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fieldGlobalBoxShadowSwitcher: value })}
                        />
                        
                        {fieldGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ fieldGlobalBoxShadowValues: value })
                                }
                                initialShadowValue={fieldGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        fieldGlobalBoxShadowCssValue: value,
                                    })
                                }
                            />
                        )}
                        
                        {fieldGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ fieldGlobalHoverBoxShadowValues: value })
                                }
                                initialShadowValue={fieldGlobalHoverBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        fieldGlobalHoverBoxShadowCssValue: value,
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
                            desktopValue={fieldDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ fieldDesktopSwitcher: value })}

                            tabletValue={fieldTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ fieldTabletSwitcher: value })}

                            mobileValue={fieldMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ fieldMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={fieldCustomCSS} 
                            onChangeValue={(value) => setAttributes({ fieldCustomCSS: value })}
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
