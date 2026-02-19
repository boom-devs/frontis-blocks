/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    ToggleControl,
    BaseControl,
    TextControl,
    PanelBody,
    SelectControl,
    TextareaControl,
} from "@wordpress/components";
import { BORDER_STYLES, OVERFLOW_OP } from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FrontisForms_Spacing from "../../components/spacing";
import { useEffect, useMemo } from "@wordpress/element";
import FrontisForms_Range from "../../components/range";
import FrontisForms_SwitcherControl from "../../components/switcher-control";
import FrontisForms_ColorControl from "../../components/color-control";
import FrontisForms_InputControl from "@Components/input-control";
import loadGoogleFont from '@Utils/loadGoogleFont';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FrontisForms_InspectorControls from '@Components/InspectorControls';
import FrontisForms_TypographyControl from '../../components/typography-control';
import FrontisForms_BackgroundColorControl from '../../components/background-color-control';
import FrontisForms_BoxShadowControl from '../../components/box-shadow';


const Inspector = ({ attributes, setAttributes, clientId }) => {
    const { 
        blockID,
        parentBlockID,
        // deviceType,

        // general
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

        inheritedFieldIconSwitcher,
        inheritedFieldLabelSwitcher,
        inheritedFieldRequiredSwitcher,
        inheritedFieldRequiredSymbolSwitcher,

        inputFieldMaxWidth,
        inputFieldMaxWidthUnits,
        inputFieldHeight,
        inputFieldHeightUnits,

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
        inputFieldPlaceholderFocusColor,

        inputFieldColorSwitcher,
        inputFieldPlaceholderColorSwitcher,

        labelMarginUnits,
        labelMarginDesktop,
        labelMarginTablet,
        labelMarginMobile,
        labelMarginLink,

        inputFieldMarginUnits,
        inputFieldMarginDesktop,
        inputFieldMarginTablet,
        inputFieldMarginMobile,
        inputFieldMarginLink,

        inputFieldPaddingUnits,
        inputFieldPaddingDesktop,
        inputFieldPaddingTablet,
        inputFieldPaddingMobile,
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
        inputFieldBorderFocusColor,
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
        inputFieldBoxShadowFocusValues,
        inputFieldBoxShadowFocusCssValue,

        inputFieldIconSize,
        inputFieldIconSizeUnits,
        inputFieldIconGap,
        inputFieldIconGapUnits,

        fieldCustomCSS,
        textareaFieldGlobalWraperID,
        textareaFieldGlobalWraperClass,

        // form Advance
        fieldZIndex,
        fieldOverflow,
        fieldPaddingUnits,
        fieldPaddingDesktop,
        fieldPaddingTablet,
        fieldPaddingMobile,
        fieldPaddingLink,

        fieldMarginUnits,
        fieldMarginDesktop,
        fieldMarginTablet,
        fieldMarginMobile,
        fieldMarginLink,

        fieldBorder,
        fieldBorderColor,
        fieldBorderHoverColor,
        fieldBorderColorSwitcher,
        fieldBorderUnits,
        fieldBorderDesktop,
        fieldBorderTablet,
        fieldBorderMobile,
        fieldBorderLink,

        fieldBorderRadiusUnits,
        fieldBorderRadiusDesktop,
        fieldBorderRadiusTablet,
        fieldBorderRadiusMobile,
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
        fieldGlobalHoverBoxShadowValues,
    } = attributes;

    const deviceType= useDeviceType();


    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "frontis-forms-field-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start load font */
    useEffect(() => {
        loadGoogleFont(
            labelFontFamily,
            inputFieldFontFamily,
        );
    }, [
        labelFontFamily,
        inputFieldFontFamily,
    ]);
    /** End load font */
    

    // Label Margin Function
    const handleLabelMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( labelMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        labelMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        labelMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        labelMarginMobile: {
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
                    setAttributes( {labelMarginDesktop: {...labelMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {labelMarginTablet: {...labelMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {labelMarginMobile: {...labelMarginMobile, [position]: value}} );
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
                        inputFieldMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        inputFieldMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        inputFieldMarginMobile: {
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
                    setAttributes( {inputFieldMarginDesktop: {...inputFieldMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {inputFieldMarginTablet: {...inputFieldMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {inputFieldMarginMobile: {...inputFieldMarginMobile, [position]: value}} );
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
                        inputFieldPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        inputFieldPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        inputFieldPaddingMobile: {
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
                    setAttributes( {inputFieldPaddingDesktop: {...inputFieldPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {inputFieldPaddingTablet: {...inputFieldPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {inputFieldPaddingMobile: {...inputFieldPaddingMobile, [position]: value}} );
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
                        fieldMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldMarginMobile: {
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
                    setAttributes( {fieldMarginDesktop: {...fieldMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldMarginTablet: {...fieldMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldMarginMobile: {...fieldMarginMobile, [position]: value}} );
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
                        fieldPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldPaddingMobile: {
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
                    setAttributes( {fieldPaddingDesktop: {...fieldPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldPaddingTablet: {...fieldPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldPaddingMobile: {...fieldPaddingMobile, [position]: value}} );
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
                        fieldBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldBorderMobile: {
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
                    setAttributes( {fieldBorderDesktop: {...fieldBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldBorderTablet: {...fieldBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldBorderMobile: {...fieldBorderMobile, [position]: value}} );
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
                        fieldBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fieldBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fieldBorderRadiusMobile: {
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
                    setAttributes( {fieldBorderRadiusDesktop: {...fieldBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fieldBorderRadiusTablet: {...fieldBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fieldBorderRadiusMobile: {...fieldBorderRadiusMobile, [position]: value}} );
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

    
    const labelMarginDesktopWidth = `${labelMarginDesktop?.top}${labelMarginUnits?.Desktop} ${labelMarginDesktop?.right}${labelMarginUnits?.Desktop} ${labelMarginDesktop?.bottom}${labelMarginUnits?.Desktop} ${labelMarginDesktop?.left}${labelMarginUnits?.Desktop}`;
    const labelMarginTabletWidth = `${labelMarginTablet?.top}${labelMarginUnits?.Tablet} ${labelMarginTablet?.right}${labelMarginUnits?.Tablet} ${labelMarginTablet?.bottom}${labelMarginUnits?.Tablet} ${labelMarginTablet?.left}${labelMarginUnits?.Tablet}`;
    const labelMarginMobileWidth = `${labelMarginMobile?.top}${labelMarginUnits?.Mobile} ${labelMarginMobile?.right}${labelMarginUnits?.Mobile} ${labelMarginMobile?.bottom}${labelMarginUnits?.Mobile} ${labelMarginMobile?.left}${labelMarginUnits?.Mobile}`;

    const inputFieldMarginDesktopWidth = `${inputFieldMarginDesktop?.top}${inputFieldMarginUnits?.Desktop} ${inputFieldMarginDesktop?.right}${inputFieldMarginUnits?.Desktop} ${inputFieldMarginDesktop?.bottom}${inputFieldMarginUnits?.Desktop} ${inputFieldMarginDesktop?.left}${inputFieldMarginUnits?.Desktop}`;
    const inputFieldMarginTabletWidth = `${inputFieldMarginTablet?.top}${inputFieldMarginUnits?.Tablet} ${inputFieldMarginTablet?.right}${inputFieldMarginUnits?.Tablet} ${inputFieldMarginTablet?.bottom}${inputFieldMarginUnits?.Tablet} ${inputFieldMarginTablet?.left}${inputFieldMarginUnits?.Tablet}`;
    const inputFieldMarginMobileWidth = `${inputFieldMarginMobile?.top}${inputFieldMarginUnits?.Mobile} ${inputFieldMarginMobile?.right}${inputFieldMarginUnits?.Mobile} ${inputFieldMarginMobile?.bottom}${inputFieldMarginUnits?.Mobile} ${inputFieldMarginMobile?.left}${inputFieldMarginUnits?.Mobile}`;

    const inputFieldPaddingDesktopWidth = `${inputFieldPaddingDesktop?.top}${inputFieldPaddingUnits?.Desktop} ${inputFieldPaddingDesktop?.right}${inputFieldPaddingUnits?.Desktop} ${inputFieldPaddingDesktop?.bottom}${inputFieldPaddingUnits?.Desktop} ${inputFieldPaddingDesktop?.left}${inputFieldPaddingUnits?.Desktop}`;
    const inputFieldPaddingTabletWidth = `${inputFieldPaddingTablet?.top}${inputFieldPaddingUnits?.Tablet} ${inputFieldPaddingTablet?.right}${inputFieldPaddingUnits?.Tablet} ${inputFieldPaddingTablet?.bottom}${inputFieldPaddingUnits?.Tablet} ${inputFieldPaddingTablet?.left}${inputFieldPaddingUnits?.Tablet}`;
    const inputFieldPaddingMobileWidth = `${inputFieldPaddingMobile?.top}${inputFieldPaddingUnits?.Mobile} ${inputFieldPaddingMobile?.right}${inputFieldPaddingUnits?.Mobile} ${inputFieldPaddingMobile?.bottom}${inputFieldPaddingUnits?.Mobile} ${inputFieldPaddingMobile?.left}${inputFieldPaddingUnits?.Mobile}`;

    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop?.top}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.right}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.bottom}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.left}${inputFieldBorderUnits?.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet?.top}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.right}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.bottom}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.left}${inputFieldBorderUnits?.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile?.top}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.right}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.bottom}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.left}${inputFieldBorderUnits?.Mobile}`;

    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop?.top}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.right}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.bottom}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.left}${inputFieldBorderRadiusUnits?.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet?.top}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.right}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.bottom}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.left}${inputFieldBorderRadiusUnits?.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile?.top}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.right}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.bottom}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.left}${inputFieldBorderRadiusUnits?.Mobile}`;

    const fieldMarginDesktopWidth = `${fieldMarginDesktop?.top}${fieldMarginUnits?.Desktop} ${fieldMarginDesktop?.right}${fieldMarginUnits?.Desktop} ${fieldMarginDesktop?.bottom}${fieldMarginUnits?.Desktop} ${fieldMarginDesktop?.left}${fieldMarginUnits?.Desktop}`;
    const fieldMarginTabletWidth = `${fieldMarginTablet?.top}${fieldMarginUnits?.Tablet} ${fieldMarginTablet?.right}${fieldMarginUnits?.Tablet} ${fieldMarginTablet?.bottom}${fieldMarginUnits?.Tablet} ${fieldMarginTablet?.left}${fieldMarginUnits?.Tablet}`;
    const fieldMarginMobileWidth = `${fieldMarginMobile?.top}${fieldMarginUnits?.Mobile} ${fieldMarginMobile?.right}${fieldMarginUnits?.Mobile} ${fieldMarginMobile?.bottom}${fieldMarginUnits?.Mobile} ${fieldMarginMobile?.left}${fieldMarginUnits?.Mobile}`;

    const fieldPaddingDesktopWidth = `${fieldPaddingDesktop?.top}${fieldPaddingUnits?.Desktop} ${fieldPaddingDesktop?.right}${fieldPaddingUnits?.Desktop} ${fieldPaddingDesktop?.bottom}${fieldPaddingUnits?.Desktop} ${fieldPaddingDesktop?.left}${fieldPaddingUnits?.Desktop}`;
    const fieldPaddingTabletWidth = `${fieldPaddingTablet?.top}${fieldPaddingUnits?.Tablet} ${fieldPaddingTablet?.right}${fieldPaddingUnits?.Tablet} ${fieldPaddingTablet?.bottom}${fieldPaddingUnits?.Tablet} ${fieldPaddingTablet?.left}${fieldPaddingUnits?.Tablet}`;
    const fieldPaddingMobileWidth = `${fieldPaddingMobile?.top}${fieldPaddingUnits?.Mobile} ${fieldPaddingMobile?.right}${fieldPaddingUnits?.Mobile} ${fieldPaddingMobile?.bottom}${fieldPaddingUnits?.Mobile} ${fieldPaddingMobile?.left}${fieldPaddingUnits?.Mobile}`;

    const fieldBorderDesktopWidth = `${fieldBorderDesktop?.top}${fieldBorderUnits?.Desktop} ${fieldBorderDesktop?.right}${fieldBorderUnits?.Desktop} ${fieldBorderDesktop?.bottom}${fieldBorderUnits?.Desktop} ${fieldBorderDesktop?.left}${fieldBorderUnits?.Desktop}`;
    const fieldBorderTabletWidth = `${fieldBorderTablet?.top}${fieldBorderUnits?.Tablet} ${fieldBorderTablet?.right}${fieldBorderUnits?.Tablet} ${fieldBorderTablet?.bottom}${fieldBorderUnits?.Tablet} ${fieldBorderTablet?.left}${fieldBorderUnits?.Tablet}`;
    const fieldBorderMobileWidth = `${fieldBorderMobile?.top}${fieldBorderUnits?.Mobile} ${fieldBorderMobile?.right}${fieldBorderUnits?.Mobile} ${fieldBorderMobile?.bottom}${fieldBorderUnits?.Mobile} ${fieldBorderMobile?.left}${fieldBorderUnits?.Mobile}`;

    const fieldBorderRadiusDesktopWidth = `${fieldBorderRadiusDesktop?.top}${fieldBorderRadiusUnits?.Desktop} ${fieldBorderRadiusDesktop?.right}${fieldBorderRadiusUnits?.Desktop} ${fieldBorderRadiusDesktop?.bottom}${fieldBorderRadiusUnits?.Desktop} ${fieldBorderRadiusDesktop?.left}${fieldBorderRadiusUnits?.Desktop}`;
    const fieldBorderRadiusTabletWidth = `${fieldBorderRadiusTablet?.top}${fieldBorderRadiusUnits?.Tablet} ${fieldBorderRadiusTablet?.right}${fieldBorderRadiusUnits?.Tablet} ${fieldBorderRadiusTablet?.bottom}${fieldBorderRadiusUnits?.Tablet} ${fieldBorderRadiusTablet?.left}${fieldBorderRadiusUnits?.Tablet}`;
    const fieldBorderRadiusMobileWidth = `${fieldBorderRadiusMobile?.top}${fieldBorderRadiusUnits?.Mobile} ${fieldBorderRadiusMobile?.right}${fieldBorderRadiusUnits?.Mobile} ${fieldBorderRadiusMobile?.bottom}${fieldBorderRadiusUnits?.Mobile} ${fieldBorderRadiusMobile?.left}${fieldBorderRadiusUnits?.Mobile}`;


    const fbfieldItemStyle = useMemo(
        () => `
            .frontis-forms-textarea-field-wrapper.${blockID} {
                position: relative;
                width: 100%;
                ${inputFieldMaxWidth?.Desktop ? `max-width: ${inputFieldMaxWidth?.Desktop}${inputFieldMaxWidthUnits?.Desktop};` : ''}
                ${fieldZIndex?.Desktop ? `z-index: ${fieldZIndex?.Desktop};` : ''}
				${fieldOverflow !== 'default' ? `overflow: ${fieldOverflow};` : ''}
            }
            
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-group-wrapper {
                position: relative;
				${
                    fieldBgType === "gradient"
                      ? `background: ${
                          fieldBgCustomGradientSwitcher && fieldBgCustomGradientInputValue
                            ? fieldBgCustomGradientInputValue
                            : fieldBgGradientColor
                        };`
                      : fieldBgImageUrl && fieldBgImageUrl !== null && fieldBgImageUrl !== ""
                      ? `
                        ${fieldBgImageUrl ? `background-image: url(${fieldBgImageUrl});` : ''}
                        ${fieldBgImagePosition ? `background-position: ${fieldBgImagePosition};` : ''}
                        ${fieldBgImageAttachment ? `background-attachment: ${fieldBgImageAttachment};` : ''}
                        ${fieldBgImageRepeat ? `background-repeat: ${fieldBgImageRepeat};` : ''}
                        ${fieldBgImageSize ? `background-size: ${fieldBgImageSize};` : ''}
                      `
                      : fieldBgClassicColor ? `background: ${fieldBgClassicColor};` : ''
                }
				${fieldPaddingDesktopWidth && fieldPaddingDesktop?.top ? `padding: ${fieldPaddingDesktopWidth};` : ''}
				${fieldMarginDesktopWidth && fieldMarginDesktop?.top ? `margin: ${fieldMarginDesktopWidth};` : ''}
				${fieldBorder ? `border-style: ${fieldBorder};` : ''}
				${fieldBorderDesktopWidth && fieldBorderDesktop?.top ? `border-width: ${fieldBorderDesktopWidth};` : ''}
				${fieldBorderColor ? `border-color: ${fieldBorderColor};` : ''}
				${fieldBorderRadiusDesktopWidth && fieldBorderRadiusDesktop?.top ? `border-radius: ${fieldBorderRadiusDesktopWidth};` : ''}
				transition: all 0.3s ease-in-out;
            }
        
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-label-wrapper {
                display: flex;
                align-items: start;
                gap: 5px;
                ${labelMarginDesktopWidth && labelMarginDesktop?.top ? `margin: ${labelMarginDesktopWidth};` : ''}
                
                ${labelGlobalTypoSwitcher?.fontFamily === true && labelGlobalTypographyData?.fontFamily ? `font-family: ${labelGlobalTypographyData?.fontFamily};` : ''}
				${labelGlobalTypoSwitcher?.fontSize === true && labelGlobalTypographyData?.fontSize ? `font-size: ${labelGlobalTypographyData?.fontSize};` : ''}
				${labelGlobalTypoSwitcher?.fontWeight === true && labelGlobalTypographyData?.fontWeight ? `font-weight: ${labelGlobalTypographyData?.fontWeight};` : ''}
				${labelGlobalTypoSwitcher?.fontStyle === true && labelGlobalTypographyData?.fontStyle ? `font-style: ${labelGlobalTypographyData?.fontStyle};` : ''}
				${labelGlobalTypoSwitcher?.textTransform === true && labelGlobalTypographyData?.textTransform ? `text-transform: ${labelGlobalTypographyData?.textTransform};` : ''}
				${labelGlobalTypoSwitcher?.textDecoration === true && labelGlobalTypographyData?.textDecoration ? `text-decoration: ${labelGlobalTypographyData?.textDecoration};` : ''}
				${labelGlobalTypoSwitcher?.letterSpacing === true && labelGlobalTypographyData?.letterSpacing ? `letter-spacing: ${labelGlobalTypographyData?.letterSpacing};` : ''}
				${labelGlobalTypoSwitcher?.lineHeight === true && labelGlobalTypographyData?.lineHeight ? `line-height: ${labelGlobalTypographyData?.lineHeight};` : ''}
				
				${labelGlobalTypoSwitcher?.fontFamily === false && labelFontFamily && labelFontFamily !== 'Default' ? `font-family: ${labelFontFamily};` : ''}
				${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Desktop ? `font-size: ${labelFontSize?.Desktop}${labelFontSizeUnits?.Desktop};` : ''}
				${labelGlobalTypoSwitcher?.fontWeight === false && labelFontWeight ? `font-weight: ${labelFontWeight};` : ''}
				${labelGlobalTypoSwitcher?.fontStyle === false && labelFontStyle ? `font-style: ${labelFontStyle};` : ''}
				${labelGlobalTypoSwitcher?.textTransform === false && labelTextTransform ? `text-transform: ${labelTextTransform};` : ''}
				${labelGlobalTypoSwitcher?.textDecoration === false && labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ''}
				${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Desktop ? `letter-spacing: ${labelLetterSpacing?.Desktop}${labelLetterSpacingUnits?.Desktop};` : ''}
				${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Desktop ? `line-height: ${labelLineHeight?.Desktop}${labelLineHeightUnits?.Desktop};` : ''}
				
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-label-wrapper .frontis-forms-form-label {
                ${labelColor ? `color: ${labelColor};` : ''}
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-label-wrapper .frontis-forms-required-symbol {
                ${labelRequiredColor ? `color: ${labelRequiredColor};` : ''}
            }
        
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper {
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input {
                position: relative;
                display: flex;
                ${inputFieldIconGap?.Desktop ? `gap: ${inputFieldIconGap?.Desktop}${inputFieldIconGapUnits?.Desktop};` : ''}
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea::placeholder {
                ${inputFieldPlaceholderColor ? `color: ${inputFieldPlaceholderColor};` : ''}
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea:focus {
                box-shadow: none;
                outline: none;
                ${inputFieldFocusColor ? `color: ${inputFieldFocusColor};` : ''}
                ${
                    inputFieldBgHoverType === "gradient"
                    ? `background: ${
                        inputFieldBgHoverCustomGradientSwitcher && inputFieldBgHoverCustomGradientInputValue
                            ? inputFieldBgHoverCustomGradientInputValue
                            : inputFieldBgHoverGradientColor
                        };`
                    : inputFieldBgHoverImageUrl && inputFieldBgHoverImageUrl !== null && inputFieldBgHoverImageUrl !== ""
                    ? `
                        ${inputFieldBgHoverImageUrl ? `background-image: url(${inputFieldBgHoverImageUrl});` : ''}
                        ${inputFieldBgHoverImagePosition ? `background-position: ${inputFieldBgHoverImagePosition};` : ''}
                        ${inputFieldBgHoverImageAttachment ? `background-attachment: ${inputFieldBgHoverImageAttachment};` : ''}
                        ${inputFieldBgHoverImageRepeat ? `background-repeat: ${inputFieldBgHoverImageRepeat};` : ''}
                        ${inputFieldBgHoverImageSize ? `background-size: ${inputFieldBgHoverImageSize};` : ''}
                    `
                    : inputFieldBgHoverClassicColor ? `background: ${inputFieldBgHoverClassicColor};` : ''
                }
                ${inputFieldBorderFocusColor ? `border-color: ${inputFieldBorderFocusColor};` : ''}
                ${inputFieldBoxShadowFocusCssValue ? `box-shadow: ${inputFieldBoxShadowFocusCssValue};` : ""}
                transition: all 0.3s ease-in-out;
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea:focus::placeholder {
                ${inputFieldPlaceholderFocusColor ? `color: ${inputFieldPlaceholderFocusColor};` : ''}
            }
            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea {
                box-sizing: border-box;
                width: 100%;
                ${inputFieldHeight?.Desktop ? `height: ${inputFieldHeight?.Desktop}${inputFieldHeightUnits?.Desktop};` : ''}
                
                ${inputFieldGlobalTypoSwitcher?.fontFamily === true && inputFieldGlobalTypographyData?.fontFamily ? `font-family: ${inputFieldGlobalTypographyData?.fontFamily};` : ''}
				${inputFieldGlobalTypoSwitcher?.fontSize === true && inputFieldGlobalTypographyData?.fontSize ? `font-size: ${inputFieldGlobalTypographyData?.fontSize};` : ''}
				${inputFieldGlobalTypoSwitcher?.fontWeight === true && inputFieldGlobalTypographyData?.fontWeight ? `font-weight: ${inputFieldGlobalTypographyData?.fontWeight};` : ''}
				${inputFieldGlobalTypoSwitcher?.fontStyle === true && inputFieldGlobalTypographyData?.fontStyle ? `font-style: ${inputFieldGlobalTypographyData?.fontStyle};` : ''}
				${inputFieldGlobalTypoSwitcher?.textTransform === true && inputFieldGlobalTypographyData?.textTransform ? `text-transform: ${inputFieldGlobalTypographyData?.textTransform};` : ''}
				${inputFieldGlobalTypoSwitcher?.textDecoration === true && inputFieldGlobalTypographyData?.textDecoration ? `text-decoration: ${inputFieldGlobalTypographyData?.textDecoration};` : ''}
				${inputFieldGlobalTypoSwitcher?.letterSpacing === true && inputFieldGlobalTypographyData?.letterSpacing ? `letter-spacing: ${inputFieldGlobalTypographyData?.letterSpacing};` : ''}
				${inputFieldGlobalTypoSwitcher?.lineHeight === true && inputFieldGlobalTypographyData?.lineHeight ? `line-height: ${inputFieldGlobalTypographyData?.lineHeight};` : ''}
				
				${inputFieldGlobalTypoSwitcher?.fontFamily === false && inputFieldFontFamily && inputFieldFontFamily !== 'Default' ? `font-family: ${inputFieldFontFamily};` : ''}
				${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Desktop ? `font-size: ${inputFieldFontSize?.Desktop}${inputFieldFontSizeUnits?.Desktop};` : ''}
				${inputFieldGlobalTypoSwitcher?.fontWeight === false && inputFieldFontWeight ? `font-weight: ${inputFieldFontWeight};` : ''}
				${inputFieldGlobalTypoSwitcher?.fontStyle === false && inputFieldFontStyle ? `font-style: ${inputFieldFontStyle};` : ''}
				${inputFieldGlobalTypoSwitcher?.textTransform === false && inputFieldTextTransform ? `text-transform: ${inputFieldTextTransform};` : ''}
				${inputFieldGlobalTypoSwitcher?.textDecoration === false && inputFieldTextDecoration ? `text-decoration: ${inputFieldTextDecoration};` : ''}
				${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Desktop ? `letter-spacing: ${inputFieldLetterSpacing?.Desktop}${inputFieldLetterSpacingUnits?.Desktop};` : ''}
				${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Desktop ? `line-height: ${inputFieldLineHeight?.Desktop}${inputFieldLineHeightUnits?.Desktop};` : ''}
				
                ${inputFieldColor ? `color: ${inputFieldColor};` : ''}
                ${
                    inputFieldBgType === "gradient"
                      ? `background: ${
                          inputFieldBgCustomGradientSwitcher && inputFieldBgCustomGradientInputValue
                            ? inputFieldBgCustomGradientInputValue
                            : inputFieldBgGradientColor
                        };`
                      : inputFieldBgImageUrl && inputFieldBgImageUrl !== null && inputFieldBgImageUrl !== ""
                      ? `
                        ${inputFieldBgImageUrl ? `background-image: url(${inputFieldBgImageUrl});` : ''}
                        ${inputFieldBgImagePosition ? `background-position: ${inputFieldBgImagePosition};` : ''}
                        ${inputFieldBgImageAttachment ? `background-attachment: ${inputFieldBgImageAttachment};` : ''}
                        ${inputFieldBgImageRepeat ? `background-repeat: ${inputFieldBgImageRepeat};` : ''}
                        ${inputFieldBgImageSize ? `background-size: ${inputFieldBgImageSize};` : ''}
                      `
                      : inputFieldBgClassicColor ? `background: ${inputFieldBgClassicColor};` : ''
                }

				${inputFieldBorder ? `border-style: ${inputFieldBorder};` : ''}
				${inputFieldBorderDesktopWidth && inputFieldBorderDesktop?.top ? `border-width: ${inputFieldBorderDesktopWidth};` : ''}
				${inputFieldBorderColor ? `border-color: ${inputFieldBorderColor};` : ''}
				${inputFieldBorderRadiusDesktopWidth && inputFieldBorderRadiusDesktop?.top ? `border-radius: ${inputFieldBorderRadiusDesktopWidth};` : ''}
                ${inputFieldBoxShadowCssValue ? `box-shadow: ${inputFieldBoxShadowCssValue};` : ""}

                ${inputFieldMarginDesktopWidth && inputFieldMarginDesktop?.top ? `margin: ${inputFieldMarginDesktopWidth};` : ''}
				${inputFieldPaddingDesktopWidth && inputFieldPaddingDesktop?.top ? `padding: ${inputFieldPaddingDesktopWidth};` : ''}

                transition: all 0.3s ease-in-out;
            }

            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-field-required-text {
                ${labelRequiredColor ? `color: ${labelRequiredColor};` : ''}

                ${inputFieldGlobalTypoSwitcher?.fontFamily === true && inputFieldGlobalTypographyData?.fontFamily ? `font-family: ${inputFieldGlobalTypographyData?.fontFamily};` : ''}
                ${inputFieldGlobalTypoSwitcher?.fontSize === true && inputFieldGlobalTypographyData?.fontSize ? `font-size: ${inputFieldGlobalTypographyData?.fontSize};` : ''}
                ${inputFieldGlobalTypoSwitcher?.fontWeight === true && inputFieldGlobalTypographyData?.fontWeight ? `font-weight: ${inputFieldGlobalTypographyData?.fontWeight};` : ''}
                ${inputFieldGlobalTypoSwitcher?.fontStyle === true && inputFieldGlobalTypographyData?.fontStyle ? `font-style: ${inputFieldGlobalTypographyData?.fontStyle};` : ''}
                ${inputFieldGlobalTypoSwitcher?.textTransform === true && inputFieldGlobalTypographyData?.textTransform ? `text-transform: ${inputFieldGlobalTypographyData?.textTransform};` : ''}
                ${inputFieldGlobalTypoSwitcher?.textDecoration === true && inputFieldGlobalTypographyData?.textDecoration ? `text-decoration: ${inputFieldGlobalTypographyData?.textDecoration};` : ''}
                ${inputFieldGlobalTypoSwitcher?.letterSpacing === true && inputFieldGlobalTypographyData?.letterSpacing ? `letter-spacing: ${inputFieldGlobalTypographyData?.letterSpacing};` : ''}
                ${inputFieldGlobalTypoSwitcher?.lineHeight === true && inputFieldGlobalTypographyData?.lineHeight ? `line-height: ${inputFieldGlobalTypographyData?.lineHeight};` : ''}
                
                ${inputFieldGlobalTypoSwitcher?.fontFamily === false && inputFieldFontFamily && inputFieldFontFamily !== 'Default' ? `font-family: ${inputFieldFontFamily};` : ''}
                ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Desktop ? `font-size: ${inputFieldFontSize?.Desktop}${inputFieldFontSizeUnits?.Desktop};` : ''}
                ${inputFieldGlobalTypoSwitcher?.fontWeight === false && inputFieldFontWeight ? `font-weight: ${inputFieldFontWeight};` : ''}
                ${inputFieldGlobalTypoSwitcher?.fontStyle === false && inputFieldFontStyle ? `font-style: ${inputFieldFontStyle};` : ''}
                ${inputFieldGlobalTypoSwitcher?.textTransform === false && inputFieldTextTransform ? `text-transform: ${inputFieldTextTransform};` : ''}
                ${inputFieldGlobalTypoSwitcher?.textDecoration === false && inputFieldTextDecoration ? `text-decoration: ${inputFieldTextDecoration};` : ''}
                ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Desktop ? `letter-spacing: ${inputFieldLetterSpacing?.Desktop}${inputFieldLetterSpacingUnits?.Desktop};` : ''}
                ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Desktop ? `line-height: ${inputFieldLineHeight?.Desktop}${inputFieldLineHeightUnits?.Desktop};` : ''}

            }

            .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input .frontis-forms-field-icon {
                display: flex;
                ${inputFieldIconSize?.Desktop ? `width: ${inputFieldIconSize?.Desktop}${inputFieldIconSizeUnits?.Desktop};` : ''}
            }
        
            @media only screen and (max-width: 1024px) {
                .frontis-forms-textarea-field-wrapper.${blockID} {
                    position: relative;
                    ${fieldZIndex?.Tablet ? `z-index: ${fieldZIndex?.Tablet};` : ''}
                }
                
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-group-wrapper {
                    ${fieldPaddingTabletWidth && fieldPaddingTablet?.top ? `padding: ${fieldPaddingTabletWidth};` : ''}
                    ${fieldMarginTabletWidth && fieldMarginTablet?.top ? `margin: ${fieldMarginTabletWidth};` : ''}
                    ${fieldBorderTabletWidth && fieldBorderTablet?.top ? `border-width: ${fieldBorderTabletWidth};` : ''}
                    ${fieldBorderRadiusTabletWidth && fieldBorderRadiusTablet?.top ? `border-radius: ${fieldBorderRadiusTabletWidth};` : ''}
                }
            
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-label-wrapper {
                    ${labelMarginTabletWidth && labelMarginTablet?.top ? `margin: ${labelMarginTabletWidth};` : ''}

                    ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Tablet ? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};` : ''}
                    ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Tablet ? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};` : ''}
                    ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Tablet ? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};` : ''}
                    
                }
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input {
                    ${inputFieldIconGap?.Tablet ? `gap: ${inputFieldIconGap?.Tablet}${inputFieldIconGapUnits?.Tablet};` : ''}
                }

                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input .frontis-forms-field-icon {
                    ${inputFieldIconSize?.Tablet ? `width: ${inputFieldIconSize?.Tablet}${inputFieldIconSizeUnits?.Tablet};` : ''}
                }

                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea,
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-field-required-text {
                    ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Tablet ? `font-size: ${inputFieldFontSize?.Tablet}${inputFieldFontSizeUnits?.Tablet};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Tablet ? `letter-spacing: ${inputFieldLetterSpacing?.Tablet}${inputFieldLetterSpacingUnits?.Tablet};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Tablet ? `line-height: ${inputFieldLineHeight?.Tablet}${inputFieldLineHeightUnits?.Tablet};` : ''}
                }

                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea {
                    ${inputFieldHeight?.Tablet ? `height: ${inputFieldHeight?.Tablet}${inputFieldHeightUnits?.Tablet};` : ''}
                    
                    ${inputFieldBorderTabletWidth && inputFieldBorderTablet?.top ? `border-width: ${inputFieldBorderTabletWidth};` : ''}
                    ${inputFieldBorderRadiusTabletWidth && inputFieldBorderRadiusTablet?.top ? `border-radius: ${inputFieldBorderRadiusTabletWidth};` : ''}

                    ${inputFieldMarginTabletWidth && inputFieldMarginTablet?.top ? `margin: ${inputFieldMarginTabletWidth};` : ''}
                    ${inputFieldPaddingTabletWidth && inputFieldPaddingTablet?.top ? `padding: ${inputFieldPaddingTabletWidth};` : ''}
                }
            }
        
            @media only screen and (max-width: 767px) {
                .frontis-forms-textarea-field-wrapper.${blockID} {
                    position: relative;
                    ${fieldZIndex?.Mobile ? `z-index: ${fieldZIndex?.Mobile};` : ''}
                }
                
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-group-wrapper {
                    ${fieldPaddingMobileWidth && fieldPaddingMobile?.top ? `padding: ${fieldPaddingMobileWidth};` : ''}
                    ${fieldMarginMobileWidth && fieldMarginMobile?.top ? `margin: ${fieldMarginMobileWidth};` : ''}
                    ${fieldBorderMobileWidth && fieldBorderMobile?.top ? `border-width: ${fieldBorderMobileWidth};` : ''}
                    ${fieldBorderRadiusMobileWidth && fieldBorderRadiusMobile?.top ? `border-radius: ${fieldBorderRadiusMobileWidth};` : ''}
                }
            
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-label-wrapper {
                    ${labelMarginMobileWidth && labelMarginMobile?.top ? `margin: ${labelMarginMobileWidth};` : ''}

                    ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Mobile ? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};` : ''}
                    ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Mobile ? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};` : ''}
                    ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Mobile ? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};` : ''}
                    
                }
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input {
                    ${inputFieldIconGap?.Mobile ? `gap: ${inputFieldIconGap?.Mobile}${inputFieldIconGapUnits?.Mobile};` : ''}
                }

                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input .frontis-forms-field-icon {
                    ${inputFieldIconSize?.Mobile ? `width: ${inputFieldIconSize?.Mobile}${inputFieldIconSizeUnits?.Mobile};` : ''}
                }

                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea,
                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-field-required-text {
                    ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Mobile ? `font-size: ${inputFieldFontSize?.Mobile}${inputFieldFontSizeUnits?.Mobile};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Mobile ? `letter-spacing: ${inputFieldLetterSpacing?.Mobile}${inputFieldLetterSpacingUnits?.Mobile};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Mobile ? `line-height: ${inputFieldLineHeight?.Mobile}${inputFieldLineHeightUnits?.Mobile};` : ''}
                }

                .frontis-forms-textarea-field-wrapper.${blockID} .frontis-forms-field-input-wrapper .frontis-forms-form-input textarea {
                    ${inputFieldHeight?.Mobile ? `height: ${inputFieldHeight?.Mobile}${inputFieldHeightUnits?.Mobile};` : ''}
                    
                    ${inputFieldBorderMobileWidth && inputFieldBorderMobile?.top ? `border-width: ${inputFieldBorderMobileWidth};` : ''}
                    ${inputFieldBorderRadiusMobileWidth && inputFieldBorderRadiusMobile?.top ? `border-radius: ${inputFieldBorderRadiusMobileWidth};` : ''}

                    ${inputFieldMarginMobileWidth && inputFieldMarginMobile?.top ? `margin: ${inputFieldMarginMobileWidth};` : ''}
                    ${inputFieldPaddingMobileWidth && inputFieldPaddingMobile?.top ? `padding: ${inputFieldPaddingMobileWidth};` : ''}
                }
            }
        `,
        [
            blockID,
            deviceType,

            inputFieldMaxWidth,
            inputFieldMaxWidthUnits,
            inputFieldHeight,
            inputFieldHeightUnits,

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
            inputFieldPlaceholderFocusColor,

            labelMarginUnits,
            labelMarginDesktop,
            labelMarginTablet,
            labelMarginMobile,

            inputFieldMarginUnits,
            inputFieldMarginDesktop,
            inputFieldMarginTablet,
            inputFieldMarginMobile,

            inputFieldPaddingUnits,
            inputFieldPaddingDesktop,
            inputFieldPaddingTablet,
            inputFieldPaddingMobile,

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
            inputFieldBorderFocusColor,
            inputFieldBorderColorSwitcher,
            inputFieldBorderUnits,
            inputFieldBorderDesktop,
            inputFieldBorderTablet,
            inputFieldBorderMobile,
            inputFieldBorderRadiusUnits,
            inputFieldBorderRadiusDesktop,
            inputFieldBorderRadiusTablet,
            inputFieldBorderRadiusMobile,

            inputFieldBoxShadowSwitcher,
            inputFieldBoxShadowValues,
            inputFieldBoxShadowCssValue,
            inputFieldBoxShadowFocusValues,
            inputFieldBoxShadowFocusCssValue,
            
            inputFieldIconSize,
            inputFieldIconSizeUnits,
            inputFieldIconGap,
            inputFieldIconGapUnits,

            fieldCustomCSS,
            textareaFieldGlobalWraperID,
            textareaFieldGlobalWraperClass,

            // form Advance
            fieldZIndex,
            fieldOverflow,
            fieldPaddingUnits,
            fieldPaddingDesktop,
            fieldPaddingTablet,
            fieldPaddingMobile,

            fieldMarginUnits,
            fieldMarginDesktop,
            fieldMarginTablet,
            fieldMarginMobile,

            fieldBorder,
            fieldBorderColor,
            fieldBorderHoverColor,
            fieldBorderColorSwitcher,
            fieldBorderUnits,
            fieldBorderDesktop,
            fieldBorderTablet,
            fieldBorderMobile,

            fieldBorderRadiusUnits,
            fieldBorderRadiusDesktop,
            fieldBorderRadiusTablet,
            fieldBorderRadiusMobile,

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
            fieldGlobalHoverBoxShadowValues,
        ]
    );
      
    const customCss = getCustomCss(fieldCustomCSS, `.${blockID}`);

    useEffect(() => {
    setAttributes({
        blockStyle: `${fbfieldItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
    });
    }, [fbfieldItemStyle, customCss]);

    const editorStyle = `${fbfieldItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();


    const mergeFieldLabelSwitcher = fieldLabelSwitcher !== null ? fieldLabelSwitcher : inheritedFieldLabelSwitcher;
    const mergeFieldIconSwitcher = fieldIconSwitcher !== null ? fieldIconSwitcher : inheritedFieldIconSwitcher;
    const mergeFieldRequiredSwitcher = fieldRequiredSwitcher !== null ? fieldRequiredSwitcher : inheritedFieldRequiredSwitcher;
    const mergeFieldRequiredSymbolSwitcher = fieldRequiredSymbolSwitcher !== null ? fieldRequiredSymbolSwitcher : inheritedFieldRequiredSymbolSwitcher;
    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-forms")} initialOpen={true}>
                <ToggleControl
                    label={__("Show Label", "frontis-forms")}
                    checked={mergeFieldLabelSwitcher}
                    onChange={(value) => setAttributes({ fieldLabelSwitcher: value })}
                />
                <ToggleControl
                    label={__("Is It Required Field?", "frontis-forms")}
                    checked={mergeFieldRequiredSwitcher}
                    onChange={(value) => setAttributes({ fieldRequiredSwitcher: value })}
                />
                {mergeFieldRequiredSwitcher && (
                    <ToggleControl
                        label={__("Show Required Symbol", "frontis-forms")}
                        checked={mergeFieldRequiredSymbolSwitcher}
                        onChange={(value) => setAttributes({ fieldRequiredSymbolSwitcher: value })}
                    />
                )}
                {/* <ToggleControl
                    label={__("Show icon", "frontis-forms")}
                    checked={mergeFieldIconSwitcher}
                    onChange={(value) => setAttributes({ fieldIconSwitcher: value })}
                /> */}
            </PanelBody>

            <PanelBody
                title={__("Layout", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_Range
                    min={1}
                    max={inputFieldMaxWidthUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Max Width", "frontis-forms")}
                    rangeValue={inputFieldMaxWidth}
                    onChangeHandler={(value) => setAttributes({ inputFieldMaxWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ inputFieldMaxWidthUnits: value })}
                    deviceType={deviceType}
                    units={inputFieldMaxWidthUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />

                <FrontisForms_Range
                    min={1}
                    max={inputFieldHeightUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Height", "frontis-forms")}
                    rangeValue={inputFieldHeight}
                    onChangeHandler={(value) => setAttributes({ inputFieldHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ inputFieldHeightUnits: value })}
                    deviceType={deviceType}
                    units={inputFieldHeightUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />
            </PanelBody>

            <PanelBody title={__("Content", "frontis-forms")} initialOpen={false}>
                {mergeFieldLabelSwitcher && (
                    <TextControl
                        label={__('Field Label', 'frontis-forms')}
                        value={fieldLabel}
                        onChange={(value) => setAttributes({ fieldLabel: value })}
                    />
                )}
                <TextControl
                    label={__('Placeholder', 'frontis-forms')}
                    value={fieldPlaceholder}
                    onChange={(value) => setAttributes({ fieldPlaceholder: value })}
                />
                {mergeFieldRequiredSwitcher && (
                    <TextareaControl
                        label={__('Required Message', 'frontis-forms')}
                        value={fieldRequiredText}
                        onChange={(value) => setAttributes({ fieldRequiredText: value })}
                        help={__('This message will be shown when the field is required', 'frontis-forms')}
                    />
                )}
                <TextControl
                    label={__('Default Value', 'frontis-forms')}
                    value={fieldDefaultValue}
                    onChange={(value) => setAttributes({ fieldDefaultValue: value })}
                    help={__('Leave empty if no default value is needed.', 'frontis-block')}
                />
                <TextControl
                    label={__('Custom Name Attribute', 'frontis-forms')}
                    value={fieldCustomNameAttribute}
                    onChange={(value) => setAttributes({ fieldCustomNameAttribute: value })}
                    help={__('Each name attribute must be unique to submit form data correctly. Leave the field blank if no custom name attribute is necessary.', 'frontis-block')}
                />
                {mergeFieldIconSwitcher && (
                    <BaseControl
                        label={__("Field Icon", "frontis-forms")}
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
                title={__("Labels", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_TypographyControl
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
    
                <FrontisForms_ColorControl
                    label={__("Color", "frontis-forms")}
                    globalColor={labelColor}
                    setGlobalColor={(value) => setAttributes({ labelColor: value === undefined ? '' : value })}
                />
                
                <FrontisForms_ColorControl
                    label={__("Required Color", "frontis-forms")}
                    globalColor={labelRequiredColor}
                    setGlobalColor={(value) => setAttributes({ labelRequiredColor: value === undefined ? '' : value })}
                />

                <FrontisForms_Spacing 
                    label={__("Margin", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleLabelMarginUnitsHandler}
                    spacingUnits={labelMarginUnits}
                    spacingDesktop={labelMarginDesktop}
                    spacingTablet={labelMarginTablet}
                    spacingMobile={labelMarginMobile}
                    handleSpacingUnitHandler={handleLabelMarginUnitChange}
                    spacingCombineBtn={labelMarginLink}
                    spacingCombineBtnHandler={handleLabelMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
    
            <PanelBody
                title={__("Input Fields", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_TypographyControl
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
    
                    <FrontisForms_SwitcherControl
                        label={__("Color", "frontis-forms")}
                        globalSwitcher={inputFieldColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ inputFieldColorSwitcher: value })}
                        options={[
                            { label: __('Normal', 'frontis-forms'), value: 'normal' },
                            { label: __('Focus', 'frontis-forms'), value: 'focus' },
                        ]}
                    />

                    {inputFieldColorSwitcher === 'normal' && (
                        <FrontisForms_ColorControl
                            label={__("Normal Color", "frontis-forms")}
                            globalColor={inputFieldColor}
                            setGlobalColor={(value) => setAttributes({ inputFieldColor: value === undefined ? '' : value })}
                        />
                    )}

                    {inputFieldColorSwitcher === 'focus' && (
                        <FrontisForms_ColorControl
                            label={__("Focus Color", "frontis-forms")}
                            globalColor={inputFieldFocusColor}
                            setGlobalColor={(value) => setAttributes({ inputFieldFocusColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    <FrontisForms_SwitcherControl
                        label={__("Placeholder Color", "frontis-forms")}
                        globalSwitcher={inputFieldPlaceholderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ inputFieldPlaceholderColorSwitcher: value })}
                        options={[
                            { label: __('Normal', 'frontis-forms'), value: 'normal' },
                            { label: __('Focus', 'frontis-forms'), value: 'focus' },
                        ]}
                    />

                    {inputFieldPlaceholderColorSwitcher === 'normal' && (
                        <FrontisForms_ColorControl
                            label={__("Normal Color", "frontis-forms")}
                            globalColor={inputFieldPlaceholderColor}
                            setGlobalColor={(value) => setAttributes({ inputFieldPlaceholderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {inputFieldPlaceholderColorSwitcher === 'focus' && (
                        <FrontisForms_ColorControl
                            label={__("Focus Color", "frontis-forms")}
                            globalColor={inputFieldPlaceholderFocusColor}
                            setGlobalColor={(value) => setAttributes({ inputFieldPlaceholderFocusColor: value === undefined ? '' : value })}
                        />
                    )}

                <FrontisForms_BackgroundColorControl
                    label={__("Background Color", "frontis-forms")}
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

                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                <FrontisForms_Spacing 
                    label={__("Margin", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldMarginUnitsHandler}
                    spacingUnits={inputFieldMarginUnits}
                    spacingDesktop={inputFieldMarginDesktop}
                    spacingTablet={inputFieldMarginTablet}
                    spacingMobile={inputFieldMarginMobile}
                    handleSpacingUnitHandler={handleInputFieldMarginUnitChange}
                    spacingCombineBtn={inputFieldMarginLink}
                    spacingCombineBtnHandler={handleInputFieldMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FrontisForms_Spacing 
                    label={__("Padding", "frontis-forms")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleInputFieldPaddingUnitsHandler}
                    spacingUnits={inputFieldPaddingUnits}
                    spacingDesktop={inputFieldPaddingDesktop}
                    spacingTablet={inputFieldPaddingTablet}
                    spacingMobile={inputFieldPaddingMobile}
                    handleSpacingUnitHandler={handleInputFieldPaddingUnitChange}
                    spacingCombineBtn={inputFieldPaddingLink}
                    spacingCombineBtnHandler={handleInputFieldPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border Style", "frontis-forms")}
                    value={inputFieldBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ inputFieldBorder: value })}
                />
    
                <FrontisForms_SwitcherControl
                    label={__("Border Color", "frontis-forms")}
                    globalSwitcher={inputFieldBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldBorderColorSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />
                
                {inputFieldBorderColorSwitcher === 'normal' && (
                    <FrontisForms_ColorControl
                        label={__("Normal Color", "frontis-forms")}
                        globalColor={inputFieldBorderColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldBorderColor: value === undefined ? '' : value })}
                    />
                )}
                
                {inputFieldBorderColorSwitcher === 'focus' && (
                    <FrontisForms_ColorControl
                        label={__("Focus Color", "frontis-forms")}
                        globalColor={inputFieldBorderFocusColor}
                        setGlobalColor={(value) => setAttributes({ inputFieldBorderFocusColor: value === undefined ? '' : value })}
                    />
                )}
    
                <FrontisForms_Spacing
                    label={__("Border", "frontis-forms")}
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
    
                <FrontisForms_Spacing 
                    label={__("Border Radius", "frontis-forms")}
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
    
                <FrontisForms_SwitcherControl
                    label={__("Box Shadow", "frontis-forms")}
                    globalSwitcher={inputFieldBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ inputFieldBoxShadowSwitcher: value })}
                    options={[
                        { label: __('Normal', 'frontis-forms'), value: 'normal' },
                        { label: __('Focus', 'frontis-forms'), value: 'focus' },
                    ]}
                />

                {inputFieldBoxShadowSwitcher === 'normal' && (
                    <FrontisForms_BoxShadowControl
                        label={__("Normal Shadow", "frontis-forms")}
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
                
                {inputFieldBoxShadowSwitcher === 'focus' && (
                    <FrontisForms_BoxShadowControl
                        label={__("Focus Shadow", "frontis-forms")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ inputFieldBoxShadowFocusValues: value })
                        }
                        initialShadowValue={inputFieldBoxShadowFocusValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                inputFieldBoxShadowFocusCssValue: value,
                            })
                        }
                    />
                )}
            </PanelBody>

            {mergeFieldIconSwitcher && (
                <PanelBody
                    title={__("Field Icons", "frontis-forms")}
                    initialOpen={false}
                >
                    <FrontisForms_Range
                        min={1}
                        max={inputFieldIconSizeUnits[deviceType] !== 'px' ? 100 : 100}
                        label={__("Icon Size", "frontis-forms")}
                        rangeValue={inputFieldIconSize}
                        onChangeHandler={(value) => setAttributes({ inputFieldIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ inputFieldIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={inputFieldIconSizeUnits}
                        rangeStep={1}
                        resetFallbackValue={'24'}
                    />

                    <FrontisForms_Range
                        min={1}
                        max={inputFieldIconGapUnits[deviceType] !== 'px' ? 100 : 200}
                        label={__("Icon Gap", "frontis-forms")}
                        rangeValue={inputFieldIconGap}
                        onChangeHandler={(value) => setAttributes({ inputFieldIconGap: value })}
                        rangeUnitHandler={(value) => setAttributes({ inputFieldIconGapUnits: value })}
                        deviceType={deviceType}
                        units={inputFieldIconGapUnits}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />
                </PanelBody>
            )}
        </>
    );
        
    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>
            <div className="frontis-forms-setting-advanced-tab-wrapper">
                <div className="frontis-forms-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-forms")}
                        initialOpen={true}
                        className='frontis-forms-setting-layout-header' 
                    >
                        <FrontisForms_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-forms")}
                            rangeValue={fieldZIndex}
                            onChangeHandler={(value) => setAttributes({ fieldZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-forms")}
                            value={fieldOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ fieldOverflow: value })}
                        />

                        <FrontisForms_InputControl
                            label={__("CSS ID", "frontis-forms")}
                            value={textareaFieldGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ textareaFieldGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-forms")}
                        />

                        <FrontisForms_InputControl
                            label={__("CSS Class", "frontis-forms")}
                            value={textareaFieldGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ textareaFieldGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-forms")}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Padding & Margin", "frontis-forms")}
                        initialOpen={false}
                    >
                        <FrontisForms_Spacing
                            label={__("Margin", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldMarginUnitsHandler}
                            spacingUnits={fieldMarginUnits}
                            spacingDesktop={fieldMarginDesktop}
                            spacingTablet={fieldMarginTablet}
                            spacingMobile={fieldMarginMobile}
                            handleSpacingUnitHandler={handleFieldMarginUnitChange}
                            spacingCombineBtn={fieldMarginLink}
                            spacingCombineBtnHandler={handleFieldMarginCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FrontisForms_Spacing 
                            label={__("Padding", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldPaddingUnitsHandler}
                            spacingUnits={fieldPaddingUnits}
                            spacingDesktop={fieldPaddingDesktop}
                            spacingTablet={fieldPaddingTablet}
                            spacingMobile={fieldPaddingMobile}
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
                        <FrontisForms_BackgroundColorControl
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
                        title={__("Border & Border Radius", "frontis-forms")}
                        initialOpen={false}
                        className="frontis-forms-setting-border-setting-wrapper"
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-forms")}
                            value={fieldBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ fieldBorder: value })}
                        />

                        <FrontisForms_SwitcherControl
                            label={__("Border Color", "frontis-forms")}
                            globalSwitcher={fieldBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fieldBorderColorSwitcher: value })}
                        />
                        
                        {fieldBorderColorSwitcher === 'normal' && (
                            <FrontisForms_ColorControl
                                label={__("Normal Color", "frontis-forms")}
                                globalColor={fieldBorderColor}
                                setGlobalColor={(value) => setAttributes({ fieldBorderColor: value === undefined ? '' : value })}
                            />
                        )}
                        
                        {fieldBorderColorSwitcher === 'hover' && (
                            <FrontisForms_ColorControl
                                label={__("Hover Color", "frontis-forms")}
                                globalColor={fieldBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ fieldBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FrontisForms_Spacing 
                            label={__("Border", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldBorderUnitsHandler}
                            spacingUnits={fieldBorderUnits}
                            spacingDesktop={fieldBorderDesktop}
                            spacingTablet={fieldBorderTablet}
                            spacingMobile={fieldBorderMobile}
                            handleSpacingUnitHandler={handleFieldBorderUnitChange}
                            spacingCombineBtn={fieldBorderLink}
                            spacingCombineBtnHandler={handleFieldBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FrontisForms_Spacing 
                            label={__("Border Radius", "frontis-forms")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleFieldBorderRadiusUnitsHandler}
                            spacingUnits={fieldBorderRadiusUnits}
                            spacingDesktop={fieldBorderRadiusDesktop}
                            spacingTablet={fieldBorderRadiusTablet}
                            spacingMobile={fieldBorderRadiusMobile}
                            handleSpacingUnitHandler={handleFieldBorderRadiusUnitChange}
                            spacingCombineBtn={fieldBorderRadiusLink}
                            spacingCombineBtnHandler={handleFieldBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FrontisForms_SwitcherControl
                            label={__("Box Shadow", "frontis-forms")}
                            globalSwitcher={fieldGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fieldGlobalBoxShadowSwitcher: value })}
                        />
                        
                        {fieldGlobalBoxShadowSwitcher === 'normal' && (
                            <FrontisForms_BoxShadowControl
                                label={__("Normal Shadow", "frontis-forms")}
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
                            <FrontisForms_BoxShadowControl
                                label={__("Hover Shadow", "frontis-forms")}
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

                    {/* <PanelBody
                        title={__("Responsive Control", "frontis-forms")}
                        initialOpen={false}
                        className="frontis-forms-setting-responsive-control-wrapper"
                    >
                        <FrontisForms_VisibilityControl
                            desktopValue={fieldDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ fieldDesktopSwitcher: value })}

                            tabletValue={fieldTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ fieldTabletSwitcher: value })}

                            mobileValue={fieldMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ fieldMobileSwitcher: value })}
                        />
                    </PanelBody> */}

                    {/* <PanelBody
                        title={__("Custom CSS", "frontis-forms")}
                        initialOpen={false}
                    >
                        <FrontisForms_CustomCSSEditor  
                            value={fieldCustomCSS} 
                            onChangeValue={(value) => setAttributes({ fieldCustomCSS: value })}
                        />
                    </PanelBody> */}
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

        <FrontisForms_InspectorControls
            generalControls={generalControls}
            styleControls={styleControls}
            advancedControls={advancedControls}
        />
        </>
    );
};

export default Inspector;
