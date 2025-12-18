import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { select, dispatch } from "@wordpress/data";

import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl,
} from '@wordpress/components';

import {
    BORDER_STYLES,
    TITLE_ALIGNMENT,
    ICON_POSITIONS,
    ICON_SWITCHER,
    OVERFLOW_OP,
    ALIGN_ITEMS,
    SUTMIT_BTN_POSITION,
} from "./constants/constants";
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';

import './editor.scss';
import FBIconPicker from '../../components/icon-picker';
import FB_TypographyControl from '../../components/typography-control';
import FB_BackgroundColorControl from '../../components/background-color-control';
import FB_BoxShadowControl from '../../components/box-shadow';
import FB_BackgroundImageControl from '../../components/background-image-control';
import FB_HtmlTagControl from '../../components/html-tag-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_ColorControl from '../../components/color-control';
import FB_SwitcherControl from '../../components/switcher-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,

        formType,
        fieldLabelSwitcher,
        fieldIconSwitcher,
        fieldRequiredSwitcher,
        fieldRequiredSymbolSwitcher,

        formTitle,
        formEmailTo,
        formCCEmail,
        formBCCEmail,
        formEmailSubject,
        formSuccessMessage,
        formFailMessage,
        formValidtionMessage,

        fieldColumnGap,
        fieldColumnGapUnits,
        fieldRowGap,
        fieldRowGapUnits,

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

        submiteBtnLabel,
        submiteBtnIcon,
        submiteBtnAlignment,
        submiteBtnIconSwitcher,
        submiteBtnIconPosition,

        submitBtnGlobalTypoSwitcher,
        submitBtnGlobalTypographyData,
        submitBtnGlobalTypoType,
        submitBtnGlobalTypoOption,
        submitBtnFontFamily,
        submitBtnFontSize,
        submitBtnFontSizeUnits,
        submitBtnFontWeight,
        submitBtnFontStyle,
        submitBtnTextTransform,
        submitBtnTextDecoration,
        submitBtnLetterSpacing,
        submitBtnLetterSpacingUnits,
        submitBtnLineHeight,
        submitBtnLineHeightUnits,

        submitBtnColorSwitcher,
        submitBtnColor,
        submitBtnHoverColor,

        submitBtnBgColorSwitcher,
        submitBtnBgType,
        submitBtnBgClassicColor,
        submitBtnBgGradientColor,
        submitBtnBgCustomGradientSwitcher,
        submitBtnBgCustomGradientInputValue,
        submitBtnBgImageUrl,
        submitBtnBgImageAlt,
        submitBtnBgImageID,
        submitBtnBgImagePosition,
        submitBtnBgImageAttachment,
        submitBtnBgImageRepeat,
        submitBtnBgImageSize,
        submitBtnBgHoverType,
        submitBtnBgHoverClassicColor,
        submitBtnBgHoverGradientColor,
        submitBtnBgHoverCustomGradientSwitcher,
        submitBtnBgHoverCustomGradientInputValue,
        submitBtnBgHoverImageUrl,
        submitBtnBgHoverImageAlt,
        submitBtnBgHoverImageID,
        submitBtnBgHoverImagePosition,
        submitBtnBgHoverImageAttachment,
        submitBtnBgHoverImageRepeat,
        submitBtnBgHoverImageSize,

        submitBtnPaddingUnits,
        submitBtnPaddingDesktop,
        submitBtnPaddingTablet,
        submitBtnPaddingMobile,
        submitBtnPaddingLink,

        submitBtnMarginUnits,
        submitBtnMarginDesktop,
        submitBtnMarginTablet,
        submitBtnMarginMobile,
        submitBtnMarginLink,

        submitBtnBorder,
        submitBtnBorderColor,
        submitBtnBorderHoverColor,
        submitBtnBorderColorSwitcher,
        submitBtnBorderUnits,
        submitBtnBorderDesktop,
        submitBtnBorderTablet,
        submitBtnBorderMobile,
        submitBtnBorderLink,
        submitBtnBorderRadiusUnits,
        submitBtnBorderRadiusDesktop,
        submitBtnBorderRadiusTablet,
        submitBtnBorderRadiusMobile,
        submitBtnBorderRadiusLink,

        submitBtnBoxShadowSwitcher,
        submitBtnBoxShadowValues,
        submitBtnBoxShadowCssValue,
        submitBtnBoxShadowHoverValues,
        submitBtnBoxShadowHoverCssValue,

        successMessageGlobalTypoSwitcher,
        successMessageGlobalTypographyData,
        successMessageGlobalTypoType,
        successMessageGlobalTypoOption,
        successMessageFontFamily,
        successMessageFontSize,
        successMessageFontSizeUnits,
        successMessageFontWeight,
        successMessageFontStyle,
        successMessageTextTransform,
        successMessageTextDecoration,
        successMessageLetterSpacing,
        successMessageLetterSpacingUnits,
        successMessageLineHeight,
        successMessageLineHeightUnits,

        successMessageColor,

        successMessageBgColorSwitcher,
        successMessageBgType,
        successMessageBgClassicColor,
        successMessageBgGradientColor,
        successMessageBgCustomGradientSwitcher,
        successMessageBgCustomGradientInputValue,
        successMessageBgImageUrl,
        successMessageBgImageAlt,
        successMessageBgImageID,
        successMessageBgImagePosition,
        successMessageBgImageAttachment,
        successMessageBgImageRepeat,
        successMessageBgImageSize,
        successMessageBgHoverType,
        successMessageBgHoverClassicColor,
        successMessageBgHoverGradientColor,
        successMessageBgHoverCustomGradientSwitcher,
        successMessageBgHoverCustomGradientInputValue,
        successMessageBgHoverImageUrl,
        successMessageBgHoverImageAlt,
        successMessageBgHoverImageID,
        successMessageBgHoverImagePosition,
        successMessageBgHoverImageAttachment,
        successMessageBgHoverImageRepeat,
        successMessageBgHoverImageSize,

        successMessagePaddingUnits,
        successMessagePaddingDesktop,
        successMessagePaddingTablet,
        successMessagePaddingMobile,
        successMessagePaddingLink,

        successMessageMarginUnits,
        successMessageMarginDesktop,
        successMessageMarginTablet,
        successMessageMarginMobile,
        successMessageMarginLink,

        successMessageBorder,
        successMessageBorderColor,
        successMessageBorderHoverColor,
        successMessageBorderColorSwitcher,
        successMessageBorderUnits,
        successMessageBorderDesktop,
        successMessageBorderTablet,
        successMessageBorderMobile,
        successMessageBorderLink,
        successMessageBorderRadiusUnits,
        successMessageBorderRadiusDesktop,
        successMessageBorderRadiusTablet,
        successMessageBorderRadiusMobile,
        successMessageBorderRadiusLink,

        errorMessageGlobalTypoSwitcher,
        errorMessageGlobalTypographyData,
        errorMessageGlobalTypoType,
        errorMessageGlobalTypoOption,
        errorMessageFontFamily,
        errorMessageFontSize,
        errorMessageFontSizeUnits,
        errorMessageFontWeight,
        errorMessageFontStyle,
        errorMessageTextTransform,
        errorMessageTextDecoration,
        errorMessageLetterSpacing,
        errorMessageLetterSpacingUnits,
        errorMessageLineHeight,
        errorMessageLineHeightUnits,

        errorMessageColor,

        errorMessageBgColorSwitcher,
        errorMessageBgType,
        errorMessageBgClassicColor,
        errorMessageBgGradientColor,
        errorMessageBgCustomGradientSwitcher,
        errorMessageBgCustomGradientInputValue,
        errorMessageBgImageUrl,
        errorMessageBgImageAlt,
        errorMessageBgImageID,
        errorMessageBgImagePosition,
        errorMessageBgImageAttachment,
        errorMessageBgImageRepeat,
        errorMessageBgImageSize,
        errorMessageBgHoverType,
        errorMessageBgHoverClassicColor,
        errorMessageBgHoverGradientColor,
        errorMessageBgHoverCustomGradientSwitcher,
        errorMessageBgHoverCustomGradientInputValue,
        errorMessageBgHoverImageUrl,
        errorMessageBgHoverImageAlt,
        errorMessageBgHoverImageID,
        errorMessageBgHoverImagePosition,
        errorMessageBgHoverImageAttachment,
        errorMessageBgHoverImageRepeat,
        errorMessageBgHoverImageSize,

        errorMessagePaddingUnits,
        errorMessagePaddingDesktop,
        errorMessagePaddingTablet,
        errorMessagePaddingMobile,
        errorMessagePaddingLink,

        errorMessageMarginUnits,
        errorMessageMarginDesktop,
        errorMessageMarginTablet,
        errorMessageMarginMobile,
        errorMessageMarginLink,

        errorMessageBorder,
        errorMessageBorderColor,
        errorMessageBorderHoverColor,
        errorMessageBorderColorSwitcher,
        errorMessageBorderUnits,
        errorMessageBorderDesktop,
        errorMessageBorderTablet,
        errorMessageBorderMobile,
        errorMessageBorderLink,
        errorMessageBorderRadiusUnits,
        errorMessageBorderRadiusDesktop,
        errorMessageBorderRadiusTablet,
        errorMessageBorderRadiusMobile,
        errorMessageBorderRadiusLink,

        formCustomCSS,
        formGlobalWraperID,
        formGlobalWraperClass,

        // Position
        formPositionType,
        formHZOrientationType,
        formVROrientationType,
        formHZLeftOffset,
        formHZLeftOffsetUnits,
        formHZRightOffset,
        formHZRightOffsetUnits,
        formVRTopOffset,
        formVRTopOffsetUnits,
        formVRBottomOffset,
        formVRBottomOffsetUnits,

        // form Advance
        formZIndex,
        formOverflow,
        formPaddingUnits,
        formPaddingDesktop,
        formPaddingTablet,
        formPaddingMobile,
        formPaddingLink,

        formMarginUnits,
        formMarginDesktop,
        formMarginTablet,
        formMarginMobile,
        formMarginLink,

        formBorder,
        formBorderColor,
        formBorderHoverColor,
        formBorderColorSwitcher,
        formBorderUnits,
        formBorderDesktop,
        formBorderTablet,
        formBorderMobile,
        formBorderLink,

        formBorderRadiusUnits,
        formBorderRadiusDesktop,
        formBorderRadiusTablet,
        formBorderRadiusMobile,
        formBorderRadiusLink,

        formDesktopSwitcher,
        formTabletSwitcher,
        formMobileSwitcher,

        formBgColorSwitcher,
        formBgType,
        formBgClassicColor,
        formBgGradientColor,
        formBgCustomGradientSwitcher,
        formBgCustomGradientInputValue,
        formBgImageUrl,
        formBgImageAlt,
        formBgImageID,
        formBgImagePosition,
        formBgImageAttachment,
        formBgImageRepeat,
        formBgImageSize,
        formBgHoverType,
        formBgHoverClassicColor,
        formBgHoverGradientColor,
        formBgHoverCustomGradientSwitcher,
        formBgHoverCustomGradientInputValue,
        formBgHoverImageUrl,
        formBgHoverImageAlt,
        formBgHoverImageID,
        formBgHoverImagePosition,
        formBgHoverImageAttachment,
        formBgHoverImageRepeat,
        formBgHoverImageSize,

        formGlobalBoxShadowSwitcher,
        formGlobalBoxShadowValues,
        formGlobalBoxShadowCssValue,
        formGlobalHoverBoxShadowValues,
        formGlobalHoverBoxShadowCssValue,

    } = attributes;

    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-form-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


     /** Start load font */
     useEffect(() => {
        loadGoogleFont(labelFontFamily);
    }, [labelFontFamily]);
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

    // Submit Button Padding Function
    const handleSubmitBtnPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( submitBtnPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        submitBtnPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        submitBtnPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        submitBtnPaddingMobile: {
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
                    setAttributes( {submitBtnPaddingDesktop: {...submitBtnPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {submitBtnPaddingTablet: {...submitBtnPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {submitBtnPaddingMobile: {...submitBtnPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleSubmitBtnPaddingCombineBtn = () => {
        setAttributes( {submitBtnPaddingLink: !submitBtnPaddingLink} );
    }

    const handleSubmitBtnPaddingUnitsHandler = (unit) => {
        setAttributes( {
            submitBtnPaddingUnits: {
                ...submitBtnPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Margin Function
    const handleSubmitBtnMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( submitBtnMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        submitBtnMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        submitBtnMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        submitBtnMarginMobile: {
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
                    setAttributes( {submitBtnMarginDesktop: {...submitBtnMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {submitBtnMarginTablet: {...submitBtnMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {submitBtnMarginMobile: {...submitBtnMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleSubmitBtnMarginCombineBtn = () => {
        setAttributes( {submitBtnMarginLink: !submitBtnMarginLink} );
    }

    const handleSubmitBtnMarginUnitsHandler = (unit) => {
        setAttributes( {
            submitBtnMarginUnits: {
                ...submitBtnMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // Submit Button Border Function
    const handleSubmitBtnBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( submitBtnBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        submitBtnBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        submitBtnBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        submitBtnBorderMobile: {
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
                    setAttributes( {submitBtnBorderDesktop: {...submitBtnBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {submitBtnBorderTablet: {...submitBtnBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {submitBtnBorderMobile: {...submitBtnBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleSubmitBtnBorderCombineBtn = () => {
        setAttributes( {submitBtnBorderLink: !submitBtnBorderLink} );
    }

    const handleSubmitBtnBorderUnitsHandler = (unit) => {
        setAttributes( {
            submitBtnBorderUnits: {
                ...submitBtnBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Border Radius Function
    const handleSubmitBtnBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( submitBtnBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        submitBtnBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        submitBtnBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        submitBtnBorderRadiusMobile: {
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
                    setAttributes( {submitBtnBorderRadiusDesktop: {...submitBtnBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {submitBtnBorderRadiusTablet: {...submitBtnBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {submitBtnBorderRadiusMobile: {...submitBtnBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleSubmitBtnBorderRadiusCombineBtn = () => {
        setAttributes( {submitBtnBorderRadiusLink: !submitBtnBorderRadiusLink} );
    }

    const handleSubmitBtnBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            submitBtnBorderRadiusUnits: {
                ...submitBtnBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Padding Function
    const handlesuccessMessagePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( successMessagePaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        successMessagePaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        successMessagePaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        successMessagePaddingMobile: {
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
                    setAttributes( {successMessagePaddingDesktop: {...successMessagePaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {successMessagePaddingTablet: {...successMessagePaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {successMessagePaddingMobile: {...successMessagePaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlesuccessMessagePaddingCombineBtn = () => {
        setAttributes( {successMessagePaddingLink: !successMessagePaddingLink} );
    }

    const handlesuccessMessagePaddingUnitsHandler = (unit) => {
        setAttributes( {
            successMessagePaddingUnits: {
                ...successMessagePaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Margin Function
    const handlesuccessMessageMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( successMessageMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        successMessageMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        successMessageMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        successMessageMarginMobile: {
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
                    setAttributes( {successMessageMarginDesktop: {...successMessageMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {successMessageMarginTablet: {...successMessageMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {successMessageMarginMobile: {...successMessageMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlesuccessMessageMarginCombineBtn = () => {
        setAttributes( {successMessageMarginLink: !successMessageMarginLink} );
    }

    const handlesuccessMessageMarginUnitsHandler = (unit) => {
        setAttributes( {
            successMessageMarginUnits: {
                ...successMessageMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // Submit Button Border Function
    const handlesuccessMessageBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( successMessageBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        successMessageBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        successMessageBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        successMessageBorderMobile: {
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
                    setAttributes( {successMessageBorderDesktop: {...successMessageBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {successMessageBorderTablet: {...successMessageBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {successMessageBorderMobile: {...successMessageBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlesuccessMessageBorderCombineBtn = () => {
        setAttributes( {successMessageBorderLink: !successMessageBorderLink} );
    }

    const handlesuccessMessageBorderUnitsHandler = (unit) => {
        setAttributes( {
            successMessageBorderUnits: {
                ...successMessageBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Border Radius Function
    const handlesuccessMessageBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( successMessageBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        successMessageBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        successMessageBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        successMessageBorderRadiusMobile: {
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
                    setAttributes( {successMessageBorderRadiusDesktop: {...successMessageBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {successMessageBorderRadiusTablet: {...successMessageBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {successMessageBorderRadiusMobile: {...successMessageBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlesuccessMessageBorderRadiusCombineBtn = () => {
        setAttributes( {successMessageBorderRadiusLink: !successMessageBorderRadiusLink} );
    }

    const handlesuccessMessageBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            successMessageBorderRadiusUnits: {
                ...successMessageBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Padding Function
    const handleErrorMessagePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( errorMessagePaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        errorMessagePaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        errorMessagePaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        errorMessagePaddingMobile: {
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
                    setAttributes( {errorMessagePaddingDesktop: {...errorMessagePaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {errorMessagePaddingTablet: {...errorMessagePaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {errorMessagePaddingMobile: {...errorMessagePaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleErrorMessagePaddingCombineBtn = () => {
        setAttributes( {errorMessagePaddingLink: !errorMessagePaddingLink} );
    }

    const handleErrorMessagePaddingUnitsHandler = (unit) => {
        setAttributes( {
            errorMessagePaddingUnits: {
                ...errorMessagePaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Margin Function
    const handleErrorMessageMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( errorMessageMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        errorMessageMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        errorMessageMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        errorMessageMarginMobile: {
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
                    setAttributes( {errorMessageMarginDesktop: {...errorMessageMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {errorMessageMarginTablet: {...errorMessageMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {errorMessageMarginMobile: {...errorMessageMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleErrorMessageMarginCombineBtn = () => {
        setAttributes( {errorMessageMarginLink: !errorMessageMarginLink} );
    }

    const handleErrorMessageMarginUnitsHandler = (unit) => {
        setAttributes( {
            errorMessageMarginUnits: {
                ...errorMessageMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // Submit Button Border Function
    const handleErrorMessageBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( errorMessageBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        errorMessageBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        errorMessageBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        errorMessageBorderMobile: {
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
                    setAttributes( {errorMessageBorderDesktop: {...errorMessageBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {errorMessageBorderTablet: {...errorMessageBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {errorMessageBorderMobile: {...errorMessageBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleErrorMessageBorderCombineBtn = () => {
        setAttributes( {errorMessageBorderLink: !errorMessageBorderLink} );
    }

    const handleErrorMessageBorderUnitsHandler = (unit) => {
        setAttributes( {
            errorMessageBorderUnits: {
                ...errorMessageBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // Submit Button Border Radius Function
    const handleErrorMessageBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( errorMessageBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        errorMessageBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        errorMessageBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        errorMessageBorderRadiusMobile: {
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
                    setAttributes( {errorMessageBorderRadiusDesktop: {...errorMessageBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {errorMessageBorderRadiusTablet: {...errorMessageBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {errorMessageBorderRadiusMobile: {...errorMessageBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleErrorMessageBorderRadiusCombineBtn = () => {
        setAttributes( {errorMessageBorderRadiusLink: !errorMessageBorderRadiusLink} );
    }

    const handleErrorMessageBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            errorMessageBorderRadiusUnits: {
                ...errorMessageBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // form content margin
    const handleformMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( formMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        formMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        formMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        formMarginMobile: {
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
                    setAttributes( {formMarginDesktop: {...formMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {formMarginTablet: {...formMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {formMarginMobile: {...formMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleformMarginCombineBtn = () => {
        setAttributes( {formMarginLink: !formMarginLink} );
    }

    const handleformMarginUnitsHandler = (unit) => {
        setAttributes( {
            formMarginUnits: {
                ...formMarginUnits,
                [deviceType]: unit
            }
        })
    }
    
    // form Padding Functionb
    const handleformPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( formPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        formPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        formPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        formPaddingMobile: {
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
                    setAttributes( {formPaddingDesktop: {...formPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {formPaddingTablet: {...formPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {formPaddingMobile: {...formPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleformPaddingCombineBtn = () => {
        setAttributes( {formPaddingLink: !formPaddingLink} );
    }

    const handleformPaddingUnitsHandler = (unit) => {
        setAttributes( {
            formPaddingUnits: {
                ...formPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderWidth Function
    const handleformBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( formBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        formBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        formBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        formBorderMobile: {
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
                    setAttributes( {formBorderDesktop: {...formBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {formBorderTablet: {...formBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {formBorderMobile: {...formBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleformBorderCombineBtn = () => {
        setAttributes( {formBorderLink: !formBorderLink} );
    }

    const handleformBorderUnitsHandler = (unit) => {
        setAttributes( {
            formBorderUnits: {
                ...formBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // form BorderRadiusWidth Function
    const handleformBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( formBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        formBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        formBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        formBorderRadiusMobile: {
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
                    setAttributes( {formBorderRadiusDesktop: {...formBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {formBorderRadiusTablet: {...formBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {formBorderRadiusMobile: {...formBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleformBorderRadiusCombineBtn = () => {
        setAttributes( {formBorderRadiusLink: !formBorderRadiusLink} );
    }

    const handleformBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            formBorderRadiusUnits: {
                ...formBorderRadiusUnits,
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

    const submitBtnMarginDesktopWidth = `${submitBtnMarginDesktop?.top}${submitBtnMarginUnits?.Desktop} ${submitBtnMarginDesktop?.right}${submitBtnMarginUnits?.Desktop} ${submitBtnMarginDesktop?.bottom}${submitBtnMarginUnits?.Desktop} ${submitBtnMarginDesktop?.left}${submitBtnMarginUnits?.Desktop}`;
    const submitBtnMarginTabletWidth = `${submitBtnMarginTablet?.top}${submitBtnMarginUnits?.Tablet} ${submitBtnMarginTablet?.right}${submitBtnMarginUnits?.Tablet} ${submitBtnMarginTablet?.bottom}${submitBtnMarginUnits?.Tablet} ${submitBtnMarginTablet?.left}${submitBtnMarginUnits?.Tablet}`;
    const submitBtnMarginMobileWidth = `${submitBtnMarginMobile?.top}${submitBtnMarginUnits?.Mobile} ${submitBtnMarginMobile?.right}${submitBtnMarginUnits?.Mobile} ${submitBtnMarginMobile?.bottom}${submitBtnMarginUnits?.Mobile} ${submitBtnMarginMobile?.left}${submitBtnMarginUnits?.Mobile}`;

	const submitBtnPaddingDesktopWidth = `${submitBtnPaddingDesktop?.top}${submitBtnPaddingUnits?.Desktop} ${submitBtnPaddingDesktop?.right}${submitBtnPaddingUnits?.Desktop} ${submitBtnPaddingDesktop?.bottom}${submitBtnPaddingUnits?.Desktop} ${submitBtnPaddingDesktop?.left}${submitBtnPaddingUnits?.Desktop}`;
    const submitBtnPaddingTabletWidth = `${submitBtnPaddingTablet?.top}${submitBtnPaddingUnits?.Tablet} ${submitBtnPaddingTablet?.right}${submitBtnPaddingUnits?.Tablet} ${submitBtnPaddingTablet?.bottom}${submitBtnPaddingUnits?.Tablet} ${submitBtnPaddingTablet?.left}${submitBtnPaddingUnits?.Tablet}`;
    const submitBtnPaddingMobileWidth = `${submitBtnPaddingMobile?.top}${submitBtnPaddingUnits?.Mobile} ${submitBtnPaddingMobile?.right}${submitBtnPaddingUnits?.Mobile} ${submitBtnPaddingMobile?.bottom}${submitBtnPaddingUnits?.Mobile} ${submitBtnPaddingMobile?.left}${submitBtnPaddingUnits?.Mobile}`;

    const submitBtnBorderDesktopWidth = `${submitBtnBorderDesktop?.top}${submitBtnBorderUnits?.Desktop} ${submitBtnBorderDesktop?.right}${submitBtnBorderUnits?.Desktop} ${submitBtnBorderDesktop?.bottom}${submitBtnBorderUnits?.Desktop} ${submitBtnBorderDesktop?.left}${submitBtnBorderUnits?.Desktop}`;
    const submitBtnBorderTabletWidth = `${submitBtnBorderTablet?.top}${submitBtnBorderUnits?.Tablet} ${submitBtnBorderTablet?.right}${submitBtnBorderUnits?.Tablet} ${submitBtnBorderTablet?.bottom}${submitBtnBorderUnits?.Tablet} ${submitBtnBorderTablet?.left}${submitBtnBorderUnits?.Tablet}`;
    const submitBtnBorderMobileWidth = `${submitBtnBorderMobile?.top}${submitBtnBorderUnits?.Mobile} ${submitBtnBorderMobile?.right}${submitBtnBorderUnits?.Mobile} ${submitBtnBorderMobile?.bottom}${submitBtnBorderUnits?.Mobile} ${submitBtnBorderMobile?.left}${submitBtnBorderUnits?.Mobile}`;

    const submitBtnBorderRadiusDesktopWidth = `${submitBtnBorderRadiusDesktop?.top}${submitBtnBorderRadiusUnits?.Desktop} ${submitBtnBorderRadiusDesktop?.right}${submitBtnBorderRadiusUnits?.Desktop} ${submitBtnBorderRadiusDesktop?.bottom}${submitBtnBorderRadiusUnits?.Desktop} ${submitBtnBorderRadiusDesktop?.left}${submitBtnBorderRadiusUnits?.Desktop}`;
    const submitBtnBorderRadiusTabletWidth = `${submitBtnBorderRadiusTablet?.top}${submitBtnBorderRadiusUnits?.Tablet} ${submitBtnBorderRadiusTablet?.right}${submitBtnBorderRadiusUnits?.Tablet} ${submitBtnBorderRadiusTablet?.bottom}${submitBtnBorderRadiusUnits?.Tablet} ${submitBtnBorderRadiusTablet?.left}${submitBtnBorderRadiusUnits?.Tablet}`;
    const submitBtnBorderRadiusMobileWidth = `${submitBtnBorderRadiusMobile?.top}${submitBtnBorderRadiusUnits?.Mobile} ${submitBtnBorderRadiusMobile?.right}${submitBtnBorderRadiusUnits?.Mobile} ${submitBtnBorderRadiusMobile?.bottom}${submitBtnBorderRadiusUnits?.Mobile} ${submitBtnBorderRadiusMobile?.left}${submitBtnBorderRadiusUnits?.Mobile}`;
      
    const successMessageMarginDesktopWidth = `${successMessageMarginDesktop?.top}${successMessageMarginUnits?.Desktop} ${successMessageMarginDesktop?.right}${successMessageMarginUnits?.Desktop} ${successMessageMarginDesktop?.bottom}${successMessageMarginUnits?.Desktop} ${successMessageMarginDesktop?.left}${successMessageMarginUnits?.Desktop}`;
    const successMessageMarginTabletWidth = `${successMessageMarginTablet?.top}${successMessageMarginUnits?.Tablet} ${successMessageMarginTablet?.right}${successMessageMarginUnits?.Tablet} ${successMessageMarginTablet?.bottom}${successMessageMarginUnits?.Tablet} ${successMessageMarginTablet?.left}${successMessageMarginUnits?.Tablet}`;
    const successMessageMarginMobileWidth = `${successMessageMarginMobile?.top}${successMessageMarginUnits?.Mobile} ${successMessageMarginMobile?.right}${successMessageMarginUnits?.Mobile} ${successMessageMarginMobile?.bottom}${successMessageMarginUnits?.Mobile} ${successMessageMarginMobile?.left}${successMessageMarginUnits?.Mobile}`;

	const successMessagePaddingDesktopWidth = `${successMessagePaddingDesktop?.top}${successMessagePaddingUnits?.Desktop} ${successMessagePaddingDesktop?.right}${successMessagePaddingUnits?.Desktop} ${successMessagePaddingDesktop?.bottom}${successMessagePaddingUnits?.Desktop} ${successMessagePaddingDesktop?.left}${successMessagePaddingUnits?.Desktop}`;
    const successMessagePaddingTabletWidth = `${successMessagePaddingTablet?.top}${successMessagePaddingUnits?.Tablet} ${successMessagePaddingTablet?.right}${successMessagePaddingUnits?.Tablet} ${successMessagePaddingTablet?.bottom}${successMessagePaddingUnits?.Tablet} ${successMessagePaddingTablet?.left}${successMessagePaddingUnits?.Tablet}`;
    const successMessagePaddingMobileWidth = `${successMessagePaddingMobile?.top}${successMessagePaddingUnits?.Mobile} ${successMessagePaddingMobile?.right}${successMessagePaddingUnits?.Mobile} ${successMessagePaddingMobile?.bottom}${successMessagePaddingUnits?.Mobile} ${successMessagePaddingMobile?.left}${successMessagePaddingUnits?.Mobile}`;

    const successMessageBorderDesktopWidth = `${successMessageBorderDesktop?.top}${successMessageBorderUnits?.Desktop} ${successMessageBorderDesktop?.right}${successMessageBorderUnits?.Desktop} ${successMessageBorderDesktop?.bottom}${successMessageBorderUnits?.Desktop} ${successMessageBorderDesktop?.left}${successMessageBorderUnits?.Desktop}`;
    const successMessageBorderTabletWidth = `${successMessageBorderTablet?.top}${successMessageBorderUnits?.Tablet} ${successMessageBorderTablet?.right}${successMessageBorderUnits?.Tablet} ${successMessageBorderTablet?.bottom}${successMessageBorderUnits?.Tablet} ${successMessageBorderTablet?.left}${successMessageBorderUnits?.Tablet}`;
    const successMessageBorderMobileWidth = `${successMessageBorderMobile?.top}${successMessageBorderUnits?.Mobile} ${successMessageBorderMobile?.right}${successMessageBorderUnits?.Mobile} ${successMessageBorderMobile?.bottom}${successMessageBorderUnits?.Mobile} ${successMessageBorderMobile?.left}${successMessageBorderUnits?.Mobile}`;

    const successMessageBorderRadiusDesktopWidth = `${successMessageBorderRadiusDesktop?.top}${successMessageBorderRadiusUnits?.Desktop} ${successMessageBorderRadiusDesktop?.right}${successMessageBorderRadiusUnits?.Desktop} ${successMessageBorderRadiusDesktop?.bottom}${successMessageBorderRadiusUnits?.Desktop} ${successMessageBorderRadiusDesktop?.left}${successMessageBorderRadiusUnits?.Desktop}`;
    const successMessageBorderRadiusTabletWidth = `${successMessageBorderRadiusTablet?.top}${successMessageBorderRadiusUnits?.Tablet} ${successMessageBorderRadiusTablet?.right}${successMessageBorderRadiusUnits?.Tablet} ${successMessageBorderRadiusTablet?.bottom}${successMessageBorderRadiusUnits?.Tablet} ${successMessageBorderRadiusTablet?.left}${successMessageBorderRadiusUnits?.Tablet}`;
    const successMessageBorderRadiusMobileWidth = `${successMessageBorderRadiusMobile?.top}${successMessageBorderRadiusUnits?.Mobile} ${successMessageBorderRadiusMobile?.right}${successMessageBorderRadiusUnits?.Mobile} ${successMessageBorderRadiusMobile?.bottom}${successMessageBorderRadiusUnits?.Mobile} ${successMessageBorderRadiusMobile?.left}${successMessageBorderRadiusUnits?.Mobile}`;
      
    const errorMessageMarginDesktopWidth = `${errorMessageMarginDesktop?.top}${errorMessageMarginUnits?.Desktop} ${errorMessageMarginDesktop?.right}${errorMessageMarginUnits?.Desktop} ${errorMessageMarginDesktop?.bottom}${errorMessageMarginUnits?.Desktop} ${errorMessageMarginDesktop?.left}${errorMessageMarginUnits?.Desktop}`;
    const errorMessageMarginTabletWidth = `${errorMessageMarginTablet?.top}${errorMessageMarginUnits?.Tablet} ${errorMessageMarginTablet?.right}${errorMessageMarginUnits?.Tablet} ${errorMessageMarginTablet?.bottom}${errorMessageMarginUnits?.Tablet} ${errorMessageMarginTablet?.left}${errorMessageMarginUnits?.Tablet}`;
    const errorMessageMarginMobileWidth = `${errorMessageMarginMobile?.top}${errorMessageMarginUnits?.Mobile} ${errorMessageMarginMobile?.right}${errorMessageMarginUnits?.Mobile} ${errorMessageMarginMobile?.bottom}${errorMessageMarginUnits?.Mobile} ${errorMessageMarginMobile?.left}${errorMessageMarginUnits?.Mobile}`;

	const errorMessagePaddingDesktopWidth = `${errorMessagePaddingDesktop?.top}${errorMessagePaddingUnits?.Desktop} ${errorMessagePaddingDesktop?.right}${errorMessagePaddingUnits?.Desktop} ${errorMessagePaddingDesktop?.bottom}${errorMessagePaddingUnits?.Desktop} ${errorMessagePaddingDesktop?.left}${errorMessagePaddingUnits?.Desktop}`;
    const errorMessagePaddingTabletWidth = `${errorMessagePaddingTablet?.top}${errorMessagePaddingUnits?.Tablet} ${errorMessagePaddingTablet?.right}${errorMessagePaddingUnits?.Tablet} ${errorMessagePaddingTablet?.bottom}${errorMessagePaddingUnits?.Tablet} ${errorMessagePaddingTablet?.left}${errorMessagePaddingUnits?.Tablet}`;
    const errorMessagePaddingMobileWidth = `${errorMessagePaddingMobile?.top}${errorMessagePaddingUnits?.Mobile} ${errorMessagePaddingMobile?.right}${errorMessagePaddingUnits?.Mobile} ${errorMessagePaddingMobile?.bottom}${errorMessagePaddingUnits?.Mobile} ${errorMessagePaddingMobile?.left}${errorMessagePaddingUnits?.Mobile}`;

    const errorMessageBorderDesktopWidth = `${errorMessageBorderDesktop?.top}${errorMessageBorderUnits?.Desktop} ${errorMessageBorderDesktop?.right}${errorMessageBorderUnits?.Desktop} ${errorMessageBorderDesktop?.bottom}${errorMessageBorderUnits?.Desktop} ${errorMessageBorderDesktop?.left}${errorMessageBorderUnits?.Desktop}`;
    const errorMessageBorderTabletWidth = `${errorMessageBorderTablet?.top}${errorMessageBorderUnits?.Tablet} ${errorMessageBorderTablet?.right}${errorMessageBorderUnits?.Tablet} ${errorMessageBorderTablet?.bottom}${errorMessageBorderUnits?.Tablet} ${errorMessageBorderTablet?.left}${errorMessageBorderUnits?.Tablet}`;
    const errorMessageBorderMobileWidth = `${errorMessageBorderMobile?.top}${errorMessageBorderUnits?.Mobile} ${errorMessageBorderMobile?.right}${errorMessageBorderUnits?.Mobile} ${errorMessageBorderMobile?.bottom}${errorMessageBorderUnits?.Mobile} ${errorMessageBorderMobile?.left}${errorMessageBorderUnits?.Mobile}`;

    const errorMessageBorderRadiusDesktopWidth = `${errorMessageBorderRadiusDesktop?.top}${errorMessageBorderRadiusUnits?.Desktop} ${errorMessageBorderRadiusDesktop?.right}${errorMessageBorderRadiusUnits?.Desktop} ${errorMessageBorderRadiusDesktop?.bottom}${errorMessageBorderRadiusUnits?.Desktop} ${errorMessageBorderRadiusDesktop?.left}${errorMessageBorderRadiusUnits?.Desktop}`;
    const errorMessageBorderRadiusTabletWidth = `${errorMessageBorderRadiusTablet?.top}${errorMessageBorderRadiusUnits?.Tablet} ${errorMessageBorderRadiusTablet?.right}${errorMessageBorderRadiusUnits?.Tablet} ${errorMessageBorderRadiusTablet?.bottom}${errorMessageBorderRadiusUnits?.Tablet} ${errorMessageBorderRadiusTablet?.left}${errorMessageBorderRadiusUnits?.Tablet}`;
    const errorMessageBorderRadiusMobileWidth = `${errorMessageBorderRadiusMobile?.top}${errorMessageBorderRadiusUnits?.Mobile} ${errorMessageBorderRadiusMobile?.right}${errorMessageBorderRadiusUnits?.Mobile} ${errorMessageBorderRadiusMobile?.bottom}${errorMessageBorderRadiusUnits?.Mobile} ${errorMessageBorderRadiusMobile?.left}${errorMessageBorderRadiusUnits?.Mobile}`;
      
    const formMarginDesktopWidth = `${formMarginDesktop?.top}${formMarginUnits?.Desktop} ${formMarginDesktop?.right}${formMarginUnits?.Desktop} ${formMarginDesktop?.bottom}${formMarginUnits?.Desktop} ${formMarginDesktop?.left}${formMarginUnits?.Desktop}`;
    const formMarginTabletWidth = `${formMarginTablet?.top}${formMarginUnits?.Tablet} ${formMarginTablet?.right}${formMarginUnits?.Tablet} ${formMarginTablet?.bottom}${formMarginUnits?.Tablet} ${formMarginTablet?.left}${formMarginUnits?.Tablet}`;
    const formMarginMobileWidth = `${formMarginMobile?.top}${formMarginUnits?.Mobile} ${formMarginMobile?.right}${formMarginUnits?.Mobile} ${formMarginMobile?.bottom}${formMarginUnits?.Mobile} ${formMarginMobile?.left}${formMarginUnits?.Mobile}`;

    const formPaddingDesktopWidth = `${formPaddingDesktop?.top}${formPaddingUnits?.Desktop} ${formPaddingDesktop?.right}${formPaddingUnits?.Desktop} ${formPaddingDesktop?.bottom}${formPaddingUnits?.Desktop} ${formPaddingDesktop?.left}${formPaddingUnits?.Desktop}`;
    const formPaddingTabletWidth = `${formPaddingTablet?.top}${formPaddingUnits?.Tablet} ${formPaddingTablet?.right}${formPaddingUnits?.Tablet} ${formPaddingTablet?.bottom}${formPaddingUnits?.Tablet} ${formPaddingTablet?.left}${formPaddingUnits?.Tablet}`;
    const formPaddingMobileWidth = `${formPaddingMobile?.top}${formPaddingUnits?.Mobile} ${formPaddingMobile?.right}${formPaddingUnits?.Mobile} ${formPaddingMobile?.bottom}${formPaddingUnits?.Mobile} ${formPaddingMobile?.left}${formPaddingUnits?.Mobile}`;

    const formBorderDesktopWidth = `${formBorderDesktop?.top}${formBorderUnits?.Desktop} ${formBorderDesktop?.right}${formBorderUnits?.Desktop} ${formBorderDesktop?.bottom}${formBorderUnits?.Desktop} ${formBorderDesktop?.left}${formBorderUnits?.Desktop}`;
    const formBorderTabletWidth = `${formBorderTablet?.top}${formBorderUnits?.Tablet} ${formBorderTablet?.right}${formBorderUnits?.Tablet} ${formBorderTablet?.bottom}${formBorderUnits?.Tablet} ${formBorderTablet?.left}${formBorderUnits?.Tablet}`;
    const formBorderMobileWidth = `${formBorderMobile?.top}${formBorderUnits?.Mobile} ${formBorderMobile?.right}${formBorderUnits?.Mobile} ${formBorderMobile?.bottom}${formBorderUnits?.Mobile} ${formBorderMobile?.left}${formBorderUnits?.Mobile}`;

    const formBorderRadiusDesktopWidth = `${formBorderRadiusDesktop?.top}${formBorderRadiusUnits?.Desktop} ${formBorderRadiusDesktop?.right}${formBorderRadiusUnits?.Desktop} ${formBorderRadiusDesktop?.bottom}${formBorderRadiusUnits?.Desktop} ${formBorderRadiusDesktop?.left}${formBorderRadiusUnits?.Desktop}`;
    const formBorderRadiusTabletWidth = `${formBorderRadiusTablet?.top}${formBorderRadiusUnits?.Tablet} ${formBorderRadiusTablet?.right}${formBorderRadiusUnits?.Tablet} ${formBorderRadiusTablet?.bottom}${formBorderRadiusUnits?.Tablet} ${formBorderRadiusTablet?.left}${formBorderRadiusUnits?.Tablet}`;
    const formBorderRadiusMobileWidth = `${formBorderRadiusMobile?.top}${formBorderRadiusUnits?.Mobile} ${formBorderRadiusMobile?.right}${formBorderRadiusUnits?.Mobile} ${formBorderRadiusMobile?.bottom}${formBorderRadiusUnits?.Mobile} ${formBorderRadiusMobile?.left}${formBorderRadiusUnits?.Mobile}`;

    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop?.top}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.right}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.bottom}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.left}${inputFieldBorderUnits?.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet?.top}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.right}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.bottom}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.left}${inputFieldBorderUnits?.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile?.top}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.right}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.bottom}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.left}${inputFieldBorderUnits?.Mobile}`;

    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop?.top}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.right}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.bottom}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.left}${inputFieldBorderRadiusUnits?.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet?.top}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.right}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.bottom}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.left}${inputFieldBorderRadiusUnits?.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile?.top}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.right}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.bottom}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.left}${inputFieldBorderRadiusUnits?.Mobile}`;

    

    const fbformItemstyle = useMemo(() => {
        let styles = `
            .fb-form-builder-main-wrapper.${blockID} {
                ${formPositionType === 'default' ? `position: relative;` : ''}
                width: 100%;
                ${formPositionType !== 'default' ? `position: ${formPositionType};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'left' && formHZLeftOffset?.Desktop ? `left: ${formHZLeftOffset?.Desktop}${formHZLeftOffsetUnits?.Desktop};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'right' && formHZRightOffset?.Desktop ? `right: ${formHZRightOffset?.Desktop}${formHZRightOffsetUnits?.Desktop};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'top' && formVRTopOffset?.Desktop ? `top: ${formVRTopOffset?.Desktop}${formVRTopOffsetUnits?.Desktop};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'bottom' && formVRBottomOffset?.Desktop ? `bottom: ${formVRBottomOffset?.Desktop}${formVRBottomOffsetUnits?.Desktop};` : ''}
                ${formZIndex?.Desktop ? `z-index: ${formZIndex?.Desktop};` : ''}
                ${formOverflow !== 'default' ? `overflow: ${formOverflow};` : ''}
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
                position: relative;
                ${formPaddingDesktopWidth && formPaddingDesktop?.top ? `padding: ${formPaddingDesktopWidth};` : ''}
                ${formMarginDesktopWidth && formMarginDesktop?.top ? `margin: ${formMarginDesktopWidth};` : ''}
                ${formBorder !== 'none' ? `border-style: ${formBorder};` : ''}
                ${formBorderDesktopWidth && formBorderDesktop?.top ? `border-width: ${formBorderDesktopWidth};` : ''}
                ${formBorderColor ? `border-color: ${formBorderColor};` : ''}
                ${formBorderRadiusDesktopWidth && formBorderRadiusDesktop?.top ? `border-radius: ${formBorderRadiusDesktopWidth};` : ''}
                ${
                    formBgType === "gradient"
                    ? `background: ${
                        formBgCustomGradientSwitcher && formBgCustomGradientInputValue
                            ? formBgCustomGradientInputValue
                            : formBgGradientColor
                        };`
                    : formBgImageUrl !== undefined && formBgImageUrl !== null && formBgImageUrl !== ""
                    ? `
                        ${formBgImageUrl !== undefined ? `background-image: url(${formBgImageUrl});` : ''}
                        ${formBgImagePosition !== undefined ? `background-position: ${formBgImagePosition};` : ''}
                        ${formBgImageAttachment !== undefined ? `background-attachment: ${formBgImageAttachment};` : ''}
                        ${formBgImageRepeat !== undefined ? `background-repeat: ${formBgImageRepeat};` : ''}
                        ${formBgImageSize !== undefined ? `background-size: ${formBgImageSize};` : ''}
                    `
                    : formBgClassicColor ? `background: ${formBgClassicColor};` : ''
                }
                ${formGlobalBoxShadowCssValue ? `box-shadow: ${formGlobalBoxShadowCssValue};` : ''}
                overflow: hidden;
                transition: all .3s ease-in-out;
            }
        
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper:hover {
                ${
                    formBgHoverType === "gradient"
                    ? `background: ${
                        formBgHoverCustomGradientSwitcher && formBgHoverCustomGradientInputValue
                            ? formBgHoverCustomGradientInputValue
                            : formBgHoverGradientColor
                        };`
                    : formBgHoverImageUrl !== undefined && formBgHoverImageUrl !== null && formBgHoverImageUrl !== ""
                    ? `
                        ${formBgHoverImageUrl !== undefined ? `background-image: url(${formBgHoverImageUrl});` : ''}
                        ${formBgHoverImagePosition !== undefined ? `background-position: ${formBgHoverImagePosition};` : ''}
                        ${formBgHoverImageAttachment !== undefined ? `background-attachment: ${formBgHoverImageAttachment};` : ''}
                        ${formBgHoverImageRepeat !== undefined ? `background-repeat: ${formBgHoverImageRepeat};` : ''}
                        ${formBgHoverImageSize !== undefined ? `background-size: ${formBgHoverImageSize};` : ''}
                    `
                    : formBgHoverClassicColor ? `background: ${formBgHoverClassicColor};` : ''
                }
                ${formBorderHoverColor ? `border-color: ${formBorderHoverColor};` : ''}
                ${formGlobalHoverBoxShadowCssValue ? `box-shadow: ${formGlobalHoverBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .fb-form-builder-main-wrapper.${blockID} .wp-block-frontis-blocks-container.child {
                box-sizing: border-box;
            }
            .fb-form-builder-main-wrapper.${blockID} .block-editor-block-list__layout,
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
                display: flex;
                flex-wrap: wrap;
                ${fieldColumnGap?.Desktop ? `column-gap: ${fieldColumnGap?.Desktop}${fieldColumnGapUnits?.Desktop};` : ''}
                ${fieldRowGap?.Desktop ? `row-gap: ${fieldRowGap?.Desktop}${fieldRowGapUnits?.Desktop};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper {
                display: flex;
                align-items: start;
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
            .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper .fb-form-label {
                ${labelColor ? `color: ${labelColor};` : ''}
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper .fb-required-symbol {
                ${labelRequiredColor ? `color: ${labelRequiredColor};` : ''}
            }
        
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper {
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
                position: relative;
                display: flex;
                flex-direction: column;
                padding: 0;
                margin: 0;
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input::placeholder {
                ${inputFieldPlaceholderColor ? `color: ${inputFieldPlaceholderColor};` : ''}
                ${inputFieldFocusColor ? `color: ${inputFieldFocusColor};` : ''}
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input {
                width: 100%;
                
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
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input:hover {
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
                ${inputFieldBorderHoverColor ? `border-color: ${inputFieldBorderHoverColor};` : ''}
                ${inputFieldBoxShadowHoverCssValue ? `box-shadow: ${inputFieldBoxShadowHoverCssValue};` : ""}
                transition: all 0.3s ease-in-out;
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
                
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper {
                width: 100%;
                display: flex;
                
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button {
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                cursor: pointer;

                ${submitBtnGlobalTypoSwitcher?.fontFamily === true && submitBtnGlobalTypographyData?.fontFamily ? `font-family: ${submitBtnGlobalTypographyData?.fontFamily};` : ''}
                ${submitBtnGlobalTypoSwitcher?.fontSize === true && submitBtnGlobalTypographyData?.fontSize ? `font-size: ${submitBtnGlobalTypographyData?.fontSize};` : ''}
                ${submitBtnGlobalTypoSwitcher?.fontWeight === true && submitBtnGlobalTypographyData?.fontWeight ? `font-weight: ${submitBtnGlobalTypographyData?.fontWeight};` : ''}
                ${submitBtnGlobalTypoSwitcher?.fontStyle === true && submitBtnGlobalTypographyData?.fontStyle ? `font-style: ${submitBtnGlobalTypographyData?.fontStyle};` : ''}
                ${submitBtnGlobalTypoSwitcher?.textTransform === true && submitBtnGlobalTypographyData?.textTransform ? `text-transform: ${submitBtnGlobalTypographyData?.textTransform};` : ''}
                ${submitBtnGlobalTypoSwitcher?.textDecoration === true && submitBtnGlobalTypographyData?.textDecoration ? `text-decoration: ${submitBtnGlobalTypographyData?.textDecoration};` : ''}
                ${submitBtnGlobalTypoSwitcher?.letterSpacing === true && submitBtnGlobalTypographyData?.letterSpacing ? `letter-spacing: ${submitBtnGlobalTypographyData?.letterSpacing};` : ''}
                ${submitBtnGlobalTypoSwitcher?.lineHeight === true && submitBtnGlobalTypographyData?.lineHeight ? `line-height: ${submitBtnGlobalTypographyData?.lineHeight};` : ''}
                
                ${submitBtnGlobalTypoSwitcher?.fontFamily === false && submitBtnFontFamily && submitBtnFontFamily !== 'Default' ? `font-family: ${submitBtnFontFamily};` : ''}
                ${submitBtnGlobalTypoSwitcher?.fontSize === false && submitBtnFontSize?.Desktop ? `font-size: ${submitBtnFontSize?.Desktop}${submitBtnFontSizeUnits?.Desktop};` : ''}
                ${submitBtnGlobalTypoSwitcher?.fontWeight === false && submitBtnFontWeight ? `font-weight: ${submitBtnFontWeight};` : ''}
                ${submitBtnGlobalTypoSwitcher?.fontStyle === false && submitBtnFontStyle ? `font-style: ${submitBtnFontStyle};` : ''}
                ${submitBtnGlobalTypoSwitcher?.textTransform === false && submitBtnTextTransform ? `text-transform: ${submitBtnTextTransform};` : ''}
                ${submitBtnGlobalTypoSwitcher?.textDecoration === false && submitBtnTextDecoration ? `text-decoration: ${submitBtnTextDecoration};` : ''}
                ${submitBtnGlobalTypoSwitcher?.letterSpacing === false && submitBtnLetterSpacing?.Desktop ? `letter-spacing: ${submitBtnLetterSpacing?.Desktop}${submitBtnLetterSpacingUnits?.Desktop};` : ''}
                ${submitBtnGlobalTypoSwitcher?.lineHeight === false && submitBtnLineHeight?.Desktop ? `line-height: ${submitBtnLineHeight?.Desktop}${submitBtnLineHeightUnits?.Desktop};` : ''}
                
                ${submitBtnColor ? `color: ${submitBtnColor};` : ''}
                ${
                    submitBtnBgType === "gradient"
                    ? `background: ${
                        submitBtnBgCustomGradientSwitcher && submitBtnBgCustomGradientInputValue
                            ? submitBtnBgCustomGradientInputValue
                            : submitBtnBgGradientColor
                        };`
                    : submitBtnBgImageUrl && submitBtnBgImageUrl !== null && submitBtnBgImageUrl !== ""
                    ? `
                        ${submitBtnBgImageUrl ? `background-image: url(${submitBtnBgImageUrl});` : ''}
                        ${submitBtnBgImagePosition ? `background-position: ${submitBtnBgImagePosition};` : ''}
                        ${submitBtnBgImageAttachment ? `background-attachment: ${submitBtnBgImageAttachment};` : ''}
                        ${submitBtnBgImageRepeat ? `background-repeat: ${submitBtnBgImageRepeat};` : ''}
                        ${submitBtnBgImageSize ? `background-size: ${submitBtnBgImageSize};` : ''}
                    `
                    : submitBtnBgClassicColor ? `background: ${submitBtnBgClassicColor};` : ''
                }

                ${submitBtnBorder ? `border-style: ${submitBtnBorder};` : ''}
                ${submitBtnBorderDesktopWidth && submitBtnBorderDesktop?.top ? `border-width: ${submitBtnBorderDesktopWidth};` : ''}
                ${submitBtnBorderColor ? `border-color: ${submitBtnBorderColor};` : ''}
                ${submitBtnBorderRadiusDesktopWidth && submitBtnBorderRadiusDesktop?.top ? `border-radius: ${submitBtnBorderRadiusDesktopWidth};` : ''}
                ${submitBtnBoxShadowCssValue ? `box-shadow: ${submitBtnBoxShadowCssValue};` : ""}

                ${submitBtnMarginDesktopWidth && submitBtnMarginDesktop?.top ? `margin: ${submitBtnMarginDesktopWidth};` : ''}
                ${submitBtnPaddingDesktopWidth && submitBtnPaddingDesktop?.top ? `padding: ${submitBtnPaddingDesktopWidth};` : ''}
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button-icon {
                display: flex;
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button-icon svg {
                width: 100%;
                height: auto;
            }
        
            @media only screen and (max-width: 1024px) {
                .fb-form-builder-main-wrapper.${blockID} {
                    ${formPositionType !== 'default' ? `position: ${formPositionType};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'left' && formHZLeftOffset?.Tablet ? `left: ${formHZLeftOffset?.Tablet}${formHZLeftOffsetUnits?.Tablet};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'right' && formHZRightOffset?.Tablet ? `right: ${formHZRightOffset?.Tablet}${formHZRightOffsetUnits?.Tablet};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'top' && formVRTopOffset?.Tablet ? `top: ${formVRTopOffset?.Tablet}${formVRTopOffsetUnits?.Tablet};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'bottom' && formVRBottomOffset?.Tablet ? `bottom: ${formVRBottomOffset?.Tablet}${formVRBottomOffsetUnits?.Tablet};` : ''}
                    ${formZIndex?.Tablet ? `z-index: ${formZIndex?.Tablet};` : ''}
                }
                .fb-form-builder-main-wrapper.${blockID} .fb-form-wrapper {
                    ${formPaddingTabletWidth && formPaddingTablet?.top ? `padding: ${formPaddingTabletWidth};` : ''}  
                    ${formMarginTabletWidth && formMarginTablet?.top ? `margin: ${formMarginTabletWidth};` : ''}
                    ${formBorderTabletWidth && formBorderTablet?.top ? `border-width: ${formBorderTabletWidth};` : ''}
                    ${formBorderRadiusTabletWidth && formBorderRadiusTablet?.top ? `border-radius: ${formBorderRadiusTabletWidth};` : ''}
                }

                .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper {
                    ${labelMarginTabletWidth && labelMarginTablet?.top ? `margin: ${labelMarginTabletWidth};` : ''}

                    ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Tablet ? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};` : ''}
                    ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Tablet ? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};` : ''}
                    ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Tablet ? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};` : ''}
                    
                }
                .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input {
                    ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Tablet ? `font-size: ${inputFieldFontSize?.Tablet}${inputFieldFontSizeUnits?.Tablet};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Tablet ? `letter-spacing: ${inputFieldLetterSpacing?.Tablet}${inputFieldLetterSpacingUnits?.Tablet};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Tablet ? `line-height: ${inputFieldLineHeight?.Tablet}${inputFieldLineHeightUnits?.Tablet};` : ''}
                    
                    ${inputFieldBorderTabletWidth && inputFieldBorderTablet?.top ? `border-width: ${inputFieldBorderTabletWidth};` : ''}
                    ${inputFieldBorderRadiusTabletWidth && inputFieldBorderRadiusTablet?.top ? `border-radius: ${inputFieldBorderRadiusTabletWidth};` : ''}

                    ${inputFieldMarginTabletWidth && inputFieldMarginTablet?.top ? `margin: ${inputFieldMarginTabletWidth};` : ''}
                    ${inputFieldPaddingTabletWidth && inputFieldPaddingTablet?.top ? `padding: ${inputFieldPaddingTabletWidth};` : ''}
                }
            }
        
            @media only screen and (max-width: 767px) {
                .fb-form-builder-main-wrapper.${blockID} {
                    ${formPositionType !== 'default' ? `position: ${formPositionType};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'left' && formHZLeftOffset?.Mobile ? `left: ${formHZLeftOffset?.Mobile}${formHZLeftOffsetUnits?.Mobile};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'right' && formHZRightOffset?.Mobile ? `right: ${formHZRightOffset?.Mobile}${formHZRightOffsetUnits?.Mobile};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'top' && formVRTopOffset?.Mobile ? `top: ${formVRTopOffset?.Mobile}${formVRTopOffsetUnits?.Mobile};` : ''}
                    ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'bottom' && formVRBottomOffset?.Mobile ? `bottom: ${formVRBottomOffset?.Mobile}${formVRBottomOffsetUnits?.Mobile};` : ''}
                    ${formZIndex?.Mobile ? `z-index: ${formZIndex?.Mobile};` : ''}
                }
                .fb-form-builder-main-wrapper.${blockID} .fb-form-wrapper {
                    ${formPaddingMobileWidth && formPaddingMobile?.top ? `padding: ${formPaddingMobileWidth};` : ''}
                    ${formMarginMobileWidth && formMarginMobile?.top ? `margin: ${formMarginMobileWidth};` : ''}
                    ${formBorderMobileWidth && formBorderMobile?.top ? `border-width: ${formBorderMobileWidth};` : ''}
                    ${formBorderRadiusMobileWidth && formBorderRadiusMobile?.top ? `border-radius: ${formBorderRadiusMobileWidth};` : ''}
                }

                .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper {
                    ${labelMarginMobileWidth && labelMarginMobile?.top ? `margin: ${labelMarginMobileWidth};` : ''}

                    ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Mobile ? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};` : ''}
                    ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Mobile ? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};` : ''}
                    ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Mobile ? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};` : ''}
                    
                }
                .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input {
                    ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Mobile ? `font-size: ${inputFieldFontSize?.Mobile}${inputFieldFontSizeUnits?.Mobile};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Mobile ? `letter-spacing: ${inputFieldLetterSpacing?.Mobile}${inputFieldLetterSpacingUnits?.Mobile};` : ''}
                    ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Mobile ? `line-height: ${inputFieldLineHeight?.Mobile}${inputFieldLineHeightUnits?.Mobile};` : ''}
                    
                    ${inputFieldBorderMobileWidth && inputFieldBorderMobile?.top ? `border-width: ${inputFieldBorderMobileWidth};` : ''}
                    ${inputFieldBorderRadiusMobileWidth && inputFieldBorderRadiusMobile?.top ? `border-radius: ${inputFieldBorderRadiusMobileWidth};` : ''}

                    ${inputFieldMarginMobileWidth && inputFieldMarginMobile?.top ? `margin: ${inputFieldMarginMobileWidth};` : ''}
                    ${inputFieldPaddingMobileWidth && inputFieldPaddingMobile?.top ? `padding: ${inputFieldPaddingMobileWidth};` : ''}
                }
            }
        `;
        return styles.replace(/\s+/g, ' ').trim();
      }, [
        blockID,
        blockStyle,

        formType,
        fieldLabelSwitcher,
        fieldIconSwitcher,
        fieldRequiredSwitcher,
        fieldRequiredSymbolSwitcher,

        fieldColumnGap,
        fieldColumnGapUnits,
        fieldRowGap,
        fieldRowGapUnits,

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

        submiteBtnLabel,
        submiteBtnIcon,
        submiteBtnAlignment,
        submiteBtnIconSwitcher,
        submiteBtnIconPosition,

        submitBtnGlobalTypoSwitcher,
        submitBtnGlobalTypographyData,
        submitBtnGlobalTypoType,
        submitBtnGlobalTypoOption,
        submitBtnFontFamily,
        submitBtnFontSize,
        submitBtnFontSizeUnits,
        submitBtnFontWeight,
        submitBtnFontStyle,
        submitBtnTextTransform,
        submitBtnTextDecoration,
        submitBtnLetterSpacing,
        submitBtnLetterSpacingUnits,
        submitBtnLineHeight,
        submitBtnLineHeightUnits,

        submitBtnColorSwitcher,
        submitBtnColor,
        submitBtnHoverColor,

        submitBtnBgColorSwitcher,
        submitBtnBgType,
        submitBtnBgClassicColor,
        submitBtnBgGradientColor,
        submitBtnBgCustomGradientSwitcher,
        submitBtnBgCustomGradientInputValue,
        submitBtnBgImageUrl,
        submitBtnBgImageAlt,
        submitBtnBgImageID,
        submitBtnBgImagePosition,
        submitBtnBgImageAttachment,
        submitBtnBgImageRepeat,
        submitBtnBgImageSize,
        submitBtnBgHoverType,
        submitBtnBgHoverClassicColor,
        submitBtnBgHoverGradientColor,
        submitBtnBgHoverCustomGradientSwitcher,
        submitBtnBgHoverCustomGradientInputValue,
        submitBtnBgHoverImageUrl,
        submitBtnBgHoverImageAlt,
        submitBtnBgHoverImageID,
        submitBtnBgHoverImagePosition,
        submitBtnBgHoverImageAttachment,
        submitBtnBgHoverImageRepeat,
        submitBtnBgHoverImageSize,

        submitBtnPaddingUnits,
        submitBtnPaddingDesktop,
        submitBtnPaddingTablet,
        submitBtnPaddingMobile,
        submitBtnPaddingLink,

        submitBtnMarginUnits,
        submitBtnMarginDesktop,
        submitBtnMarginTablet,
        submitBtnMarginMobile,
        submitBtnMarginLink,

        submitBtnBorder,
        submitBtnBorderColor,
        submitBtnBorderHoverColor,
        submitBtnBorderColorSwitcher,
        submitBtnBorderUnits,
        submitBtnBorderDesktop,
        submitBtnBorderTablet,
        submitBtnBorderMobile,
        submitBtnBorderLink,
        submitBtnBorderRadiusUnits,
        submitBtnBorderRadiusDesktop,
        submitBtnBorderRadiusTablet,
        submitBtnBorderRadiusMobile,
        submitBtnBorderRadiusLink,

        submitBtnBoxShadowSwitcher,
        submitBtnBoxShadowValues,
        submitBtnBoxShadowCssValue,
        submitBtnBoxShadowHoverValues,
        submitBtnBoxShadowHoverCssValue,

        successMessageGlobalTypoSwitcher,
        successMessageGlobalTypographyData,
        successMessageGlobalTypoType,
        successMessageGlobalTypoOption,
        successMessageFontFamily,
        successMessageFontSize,
        successMessageFontSizeUnits,
        successMessageFontWeight,
        successMessageFontStyle,
        successMessageTextTransform,
        successMessageTextDecoration,
        successMessageLetterSpacing,
        successMessageLetterSpacingUnits,
        successMessageLineHeight,
        successMessageLineHeightUnits,

        successMessageColor,

        successMessageBgColorSwitcher,
        successMessageBgType,
        successMessageBgClassicColor,
        successMessageBgGradientColor,
        successMessageBgCustomGradientSwitcher,
        successMessageBgCustomGradientInputValue,
        successMessageBgImageUrl,
        successMessageBgImageAlt,
        successMessageBgImageID,
        successMessageBgImagePosition,
        successMessageBgImageAttachment,
        successMessageBgImageRepeat,
        successMessageBgImageSize,
        successMessageBgHoverType,
        successMessageBgHoverClassicColor,
        successMessageBgHoverGradientColor,
        successMessageBgHoverCustomGradientSwitcher,
        successMessageBgHoverCustomGradientInputValue,
        successMessageBgHoverImageUrl,
        successMessageBgHoverImageAlt,
        successMessageBgHoverImageID,
        successMessageBgHoverImagePosition,
        successMessageBgHoverImageAttachment,
        successMessageBgHoverImageRepeat,
        successMessageBgHoverImageSize,

        successMessagePaddingUnits,
        successMessagePaddingDesktop,
        successMessagePaddingTablet,
        successMessagePaddingMobile,
        successMessagePaddingLink,

        successMessageMarginUnits,
        successMessageMarginDesktop,
        successMessageMarginTablet,
        successMessageMarginMobile,
        successMessageMarginLink,

        successMessageBorder,
        successMessageBorderColor,
        successMessageBorderHoverColor,
        successMessageBorderColorSwitcher,
        successMessageBorderUnits,
        successMessageBorderDesktop,
        successMessageBorderTablet,
        successMessageBorderMobile,
        successMessageBorderLink,
        successMessageBorderRadiusUnits,
        successMessageBorderRadiusDesktop,
        successMessageBorderRadiusTablet,
        successMessageBorderRadiusMobile,
        successMessageBorderRadiusLink,

        errorMessageGlobalTypoSwitcher,
        errorMessageGlobalTypographyData,
        errorMessageGlobalTypoType,
        errorMessageGlobalTypoOption,
        errorMessageFontFamily,
        errorMessageFontSize,
        errorMessageFontSizeUnits,
        errorMessageFontWeight,
        errorMessageFontStyle,
        errorMessageTextTransform,
        errorMessageTextDecoration,
        errorMessageLetterSpacing,
        errorMessageLetterSpacingUnits,
        errorMessageLineHeight,
        errorMessageLineHeightUnits,

        errorMessageColor,

        errorMessageBgColorSwitcher,
        errorMessageBgType,
        errorMessageBgClassicColor,
        errorMessageBgGradientColor,
        errorMessageBgCustomGradientSwitcher,
        errorMessageBgCustomGradientInputValue,
        errorMessageBgImageUrl,
        errorMessageBgImageAlt,
        errorMessageBgImageID,
        errorMessageBgImagePosition,
        errorMessageBgImageAttachment,
        errorMessageBgImageRepeat,
        errorMessageBgImageSize,
        errorMessageBgHoverType,
        errorMessageBgHoverClassicColor,
        errorMessageBgHoverGradientColor,
        errorMessageBgHoverCustomGradientSwitcher,
        errorMessageBgHoverCustomGradientInputValue,
        errorMessageBgHoverImageUrl,
        errorMessageBgHoverImageAlt,
        errorMessageBgHoverImageID,
        errorMessageBgHoverImagePosition,
        errorMessageBgHoverImageAttachment,
        errorMessageBgHoverImageRepeat,
        errorMessageBgHoverImageSize,

        errorMessagePaddingUnits,
        errorMessagePaddingDesktop,
        errorMessagePaddingTablet,
        errorMessagePaddingMobile,
        errorMessagePaddingLink,

        errorMessageMarginUnits,
        errorMessageMarginDesktop,
        errorMessageMarginTablet,
        errorMessageMarginMobile,
        errorMessageMarginLink,

        errorMessageBorder,
        errorMessageBorderColor,
        errorMessageBorderHoverColor,
        errorMessageBorderColorSwitcher,
        errorMessageBorderUnits,
        errorMessageBorderDesktop,
        errorMessageBorderTablet,
        errorMessageBorderMobile,
        errorMessageBorderLink,
        errorMessageBorderRadiusUnits,
        errorMessageBorderRadiusDesktop,
        errorMessageBorderRadiusTablet,
        errorMessageBorderRadiusMobile,
        errorMessageBorderRadiusLink,

        formCustomCSS,
        formGlobalWraperID,
        formGlobalWraperClass,

        // Position
        formPositionType,
        formHZOrientationType,
        formVROrientationType,
        formHZLeftOffset,
        formHZLeftOffsetUnits,
        formHZRightOffset,
        formHZRightOffsetUnits,
        formVRTopOffset,
        formVRTopOffsetUnits,
        formVRBottomOffset,
        formVRBottomOffsetUnits,

        // form Advance
        formZIndex,
        formOverflow,
        formPaddingUnits,
        formPaddingDesktop,
        formPaddingTablet,
        formPaddingMobile,

        formMarginUnits,
        formMarginDesktop,
        formMarginTablet,
        formMarginMobile,

        formBorder,
        formBorderColor,
        formBorderHoverColor,
        formBorderColorSwitcher,
        formBorderUnits,
        formBorderDesktop,
        formBorderTablet,
        formBorderMobile,

        formBorderRadiusUnits,
        formBorderRadiusDesktop,
        formBorderRadiusTablet,
        formBorderRadiusMobile,

        formDesktopSwitcher,
        formTabletSwitcher,
        formMobileSwitcher,

        formBgColorSwitcher,
        formBgType,
        formBgClassicColor,
        formBgGradientColor,
        formBgCustomGradientSwitcher,
        formBgCustomGradientInputValue,
        formBgImageUrl,
        formBgImageAlt,
        formBgImageID,
        formBgImagePosition,
        formBgImageAttachment,
        formBgImageRepeat,
        formBgImageSize,
        formBgHoverType,
        formBgHoverClassicColor,
        formBgHoverGradientColor,
        formBgHoverCustomGradientSwitcher,
        formBgHoverCustomGradientInputValue,
        formBgHoverImageUrl,
        formBgHoverImageAlt,
        formBgHoverImageID,
        formBgHoverImagePosition,
        formBgHoverImageAttachment,
        formBgHoverImageRepeat,
        formBgHoverImageSize,

        formGlobalBoxShadowSwitcher,
        formGlobalBoxShadowValues,
        formGlobalBoxShadowCssValue,
        formGlobalHoverBoxShadowValues,
        formGlobalHoverBoxShadowCssValue,
      ]);
      
      const customCss = getCustomCss(formCustomCSS, `.${blockID}`);

      useEffect(() => {
        setAttributes({
          blockStyle: `${fbformItemstyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
        });
      }, [fbformItemstyle, customCss]);

      const editorStyle = `${fbformItemstyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
                <ToggleControl
                    label={__("Show Label", "frontis-blocks")}
                    checked={fieldLabelSwitcher}
                    onChange={(value) => setAttributes({ fieldLabelSwitcher: value })}
                />
                <ToggleControl
                    label={__("Is It Required Field?", "frontis-blocks")}
                    checked={fieldRequiredSwitcher}
                    onChange={(value) => setAttributes({ fieldRequiredSwitcher: value })}
                />
                {fieldRequiredSwitcher && (
                    <ToggleControl
                        label={__("Show Required Symbol", "frontis-blocks")}
                        checked={fieldRequiredSymbolSwitcher}
                        onChange={(value) => setAttributes({ fieldRequiredSymbolSwitcher: value })}
                    />
                )}
                <ToggleControl
                    label={__("Show icon", "frontis-blocks")}
                    checked={fieldIconSwitcher}
                    onChange={(value) => setAttributes({ fieldIconSwitcher: value })}
                />

            </PanelBody>

            <PanelBody
                title={__("Field Gaps", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Range
                    min={1}
                    max={fieldColumnGapUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Column", "frontis-blocks")}
                    rangeValue={fieldColumnGap}
                    onChangeHandler={(value) => setAttributes({ fieldColumnGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ fieldColumnGapUnits: value })}
                    deviceType={deviceType}
                    units={fieldColumnGapUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />

                <FB_Range
                    min={1}
                    max={fieldRowGapUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Row", "frontis-blocks")}
                    rangeValue={fieldRowGap}
                    onChangeHandler={(value) => setAttributes({ fieldRowGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ fieldRowGapUnits: value })}
                    deviceType={deviceType}
                    units={fieldRowGapUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />
            </PanelBody>

            <PanelBody title={__("Submit Button", "frontis-blocks")} initialOpen={false}>
                <TextControl
                    label={__('Label', 'frontis-blocks')}
                    value={submiteBtnLabel}
                    onChange={(value) => setAttributes({ submiteBtnLabel: value })}
                />

                <BaseControl className={"fb-form-btn-alignment"} >
                    <FB_ResponsiveAlignmentControl
                        label={__("Alignment", "frontis-blocks")}
                        globalAlignment={submiteBtnAlignment}
                        setGlobalAlignment={(value) => setAttributes({ submiteBtnAlignment: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        options={ALIGN_ITEMS}
                    />
                </BaseControl>


                <ToggleControl
                    label={__("Show Icon", "frontis-blocks")}
                    checked={submiteBtnIconSwitcher}
                    onChange={(value) => setAttributes({ submiteBtnIconSwitcher: value })}
                />

                {submiteBtnIconSwitcher && (
                    <BaseControl
                        label={__("Icon", "frontis-blocks")}
                    >
                        <FBIconPicker
                            value={submiteBtnIcon} 
                            setIconHandler={(value) => setAttributes({ submiteBtnIcon: value })} 
                        />
                    </BaseControl>
                )}
            
                
                    <FB_ResponsiveAlignmentControl
                        label={__("Icon Position", "frontis-blocks")}
                        globalAlignment={submiteBtnIconPosition}
                        setGlobalAlignment={(value) => setAttributes({ submiteBtnIconPosition: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        options={SUTMIT_BTN_POSITION}
                    />

            </PanelBody>

            <PanelBody title={__("Form Settings", "frontis-blocks")} initialOpen={false}>
                <TextControl
                    label={__('Form Title', 'frontis-blocks')}
                    value={formTitle}
                    onChange={(value) => setAttributes({ formTitle: value })}
                />

                {/* <SelectControl
                    label={__("Overflow", "frontis-blocks")}
                    value={formOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ formOverflow: value })}
                /> */}

                <TextControl
                    label={__('Email To', 'frontis-blocks')}
                    value={formEmailTo}
                    onChange={(value) => setAttributes({ formEmailTo: value })}
                    help={__('This email will receive the form submission.', 'frontis-block')}
                />
                <TextControl
                    label={__('Email CC (optional)', 'frontis-blocks')}
                    value={formCCEmail}
                    onChange={(value) => setAttributes({ formCCEmail: value })}
                    help={__('This email will receive the form submission.', 'frontis-block')}
                />
                <TextControl
                    label={__('Email BCC (optional)', 'frontis-blocks')}
                    value={formBCCEmail}
                    onChange={(value) => setAttributes({ formBCCEmail: value })}
                    help={__('This will be the subject of the email.', 'frontis-block')}
                />
                <TextControl
                    label={__('Email Subject', 'frontis-blocks')}
                    value={formEmailSubject}
                    onChange={(value) => setAttributes({ formEmailSubject: value })}
                    help={__('This will be the subject of the email.', 'frontis-block')}
                />
            </PanelBody>

            <PanelBody title={__("Form Submission", "frontis-blocks")} initialOpen={false}>
                {/* <SelectControl
                    label={__("Success Type", "frontis-blocks")}
                    value={formOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ formOverflow: value })}
                />
                <SelectControl
                    label={__("Message Position", "frontis-blocks")}
                    value={formOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ formOverflow: value })}
                /> */}
                <TextareaControl
                    label={__('Success Message', 'frontis-blocks')}
                    value={formSuccessMessage}
                    onChange={(value) => setAttributes({ formSuccessMessage: value })}
                    help={__('This message will be shown when the form is submitted successfully.', 'frontis-blocks')}
                />
                <TextareaControl
                    label={__('Fail Message', 'frontis-blocks')}
                    value={formFailMessage}
                    onChange={(value) => setAttributes({ formFailMessage: value })}
                    help={__('This message will be shown when the form submission fails.', 'frontis-blocks')}
                />
                <TextareaControl
                    label={__('Validation Message', 'frontis-blocks')}
                    value={formValidtionMessage}
                    onChange={(value) => setAttributes({ formValidtionMessage: value })}
                    help={__('This message will be shown when the form validation fails.', 'frontis-blocks')}
                />
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
                        spacingDesktop={inputFieldMarginDesktop}
                        spacingTablet={inputFieldMarginTablet}
                        spacingMobile={inputFieldMarginMobile}
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
                        spacingDesktop={inputFieldPaddingDesktop}
                        spacingTablet={inputFieldPaddingTablet}
                        spacingMobile={inputFieldPaddingMobile}
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
        
                <PanelBody
                    title={__("Submit Button", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={submitBtnGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ submitBtnGlobalTypographyData: value })}
        
                        globalTypoType={submitBtnGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                submitBtnGlobalTypoType: value, 
                                submitBtnGlobalTypoSwitcher: value === 'default' ? {...submitBtnGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...submitBtnGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}
        
                        globalTypoOption={submitBtnGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ submitBtnGlobalTypoOption: value })}
        
                        fontFamily={submitBtnFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ submitBtnFontFamily: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, fontFamily: value && false} })}
        
                        fontSize={submitBtnFontSize}
                        onChangeFontSize={(value) => setAttributes({ submitBtnFontSize: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, fontSize: value && false} })}
        
                        fontSizeUnits={submitBtnFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ submitBtnFontSizeUnits: value })}
        
                        fontWeight={submitBtnFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ submitBtnFontWeight: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, fontWeight: value && false} })}
        
                        fontStyle={submitBtnFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ submitBtnFontStyle: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, fontStyle: value && false} })}
        
                        textTransform={submitBtnTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ submitBtnTextTransform: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, textTransform: value && false} })}
        
                        textDecoration={submitBtnTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ submitBtnTextDecoration: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, textDecoration: value && false} })}
        
                        letterSpacing={submitBtnLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ submitBtnLetterSpacing: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, letterSpacing: value && false} })}
        
                        letterSpacingUnits={submitBtnLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ submitBtnLetterSpacingUnits: value })}
        
                        lineHeight={submitBtnLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ submitBtnLineHeight: value, submitBtnGlobalTypoSwitcher: {...submitBtnGlobalTypoSwitcher, lineHeight: value && false} })}
        
                        lineHeightUnits={submitBtnLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ submitBtnLineHeightUnits: value })}
        
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={submitBtnColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnColorSwitcher: value })}
                    />
                    
                    {submitBtnColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={submitBtnColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {submitBtnColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={submitBtnHoverColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={submitBtnBgColorSwitcher}
                        setBgColorSwitcher={(value) =>
                            setAttributes({ submitBtnBgColorSwitcher: value })
                        }
                        normalBackgroundType={submitBtnBgType}
                        setNormalBackgroundType={(value) =>
                            setAttributes({ submitBtnBgType: value })
                        }
                        normalClassicColor={submitBtnBgClassicColor}
                        setNormalClassicColor={(value) =>
                            setAttributes({ submitBtnBgClassicColor: value === undefined ? '' : value })
                        }
                        normalGradientColor={submitBtnBgGradientColor}
                        setNormalGradientColor={(value) =>
                            setAttributes({ submitBtnBgGradientColor: value === undefined ? null : value })
                        }
                        normalCustomGradientSwitcher={
                            submitBtnBgCustomGradientSwitcher
                        }
                        setNormalCustomGradientSwitcher={(value) =>
                            setAttributes({
                                submitBtnBgCustomGradientSwitcher: value,
                            })
                        }
                        normalCustomGradientInputValue={
                            submitBtnBgCustomGradientInputValue
                        }
                        setNormalCustomGradientInputValue={(value) =>
                            setAttributes({
                                submitBtnBgCustomGradientInputValue: value,
                            })
                        }
                        normalBackgroundImageUrl={submitBtnBgImageUrl}
                        setNormalBackgroundImageUrl={(value) =>
                            setAttributes({ submitBtnBgImageUrl: value })
                        }
                        normalBackgroundImageAlt={submitBtnBgImageAlt}
                        setNormalBackgroundImageAlt={(value) =>
                            setAttributes({ submitBtnBgImageAlt: value })
                        }
                        normalBackgroundImageID={submitBtnBgImageID}
                        setNormalBackgroundImageID={(value) =>
                            setAttributes({ submitBtnBgImageID: value })
                        }
                        normalBackgroundImagePosition={
                            submitBtnBgImagePosition
                        }
                        setNormalBackgroundImagePosition={(value) =>
                            setAttributes({
                                submitBtnBgImagePosition: value,
                            })
                        }
                        normalBackgroundImageAttachment={
                            submitBtnBgImageAttachment
                        }
                        setNormalBackgroundImageAttachment={(value) =>
                            setAttributes({
                                submitBtnBgImageAttachment: value,
                            })
                        }
                        normalBackgroundImageRepeat={
                            submitBtnBgImageRepeat
                        }
                        setNormalBackgroundImageRepeat={(value) =>
                            setAttributes({
                                submitBtnBgImageRepeat: value,
                            })
                        }
                        normalBackgroundImageSize={submitBtnBgImageSize}
                        setNormalBackgroundImageSize={(value) =>
                            setAttributes({ submitBtnBgImageSize: value })
                        }
                        hoverBackgroundType={submitBtnBgHoverType}
                        setHoverBackgroundType ={(value) =>
                            setAttributes({ submitBtnBgHoverType: value })
                        }
                        hoverClassicColor={submitBtnBgHoverClassicColor}
                        setHoverClassicColor={(value) =>
                            setAttributes({ submitBtnBgHoverClassicColor: value === undefined ? '' : value })
                        }
                        hoverGradientColor={submitBtnBgHoverGradientColor}
                        setHoverGradientColor={(value) =>
                            setAttributes({ submitBtnBgHoverGradientColor: value === undefined ? null : value })
                        }
                        hoverCustomGradientSwitcher={
                            submitBtnBgHoverCustomGradientSwitcher
                        }
                        setHoverCustomGradientSwitcher={(value) =>
                            setAttributes({
                                submitBtnBgHoverCustomGradientSwitcher: value,
                            })
                        }
                        hoverCustomGradientInputValue={
                            submitBtnBgHoverCustomGradientInputValue
                        }
                        setHoverCustomGradientInputValue={(value) =>
                            setAttributes({
                                submitBtnBgHoverCustomGradientInputValue: value,
                            })
                        }
                        hoverBackgroundImageUrl={submitBtnBgHoverImageUrl}
                        setBgHoverImageUrl={(value) =>
                            setAttributes({ submitBtnBgHoverImageUrl: value })
                        }
                        hoverBackgroundImageAlt={submitBtnBgHoverImageAlt}
                        setBgHoverImageAlt={(value) =>
                            setAttributes({ submitBtnBgHoverImageAlt: value })
                        }
                        hoverBackgroundImageID={submitBtnBgHoverImageID}
                        setBgHoverImageID={(value) =>
                            setAttributes({ submitBtnBgHoverImageID: value })
                        }
                        hoverBackgroundImagePosition={
                            submitBtnBgHoverImagePosition
                        }
                        setBgHoverImagePosition={(value) =>
                            setAttributes({
                                submitBtnBgHoverImagePosition: value,
                            })
                        }
                        hoverBackgroundImageAttachment={
                            submitBtnBgHoverImageAttachment
                        }
                        setBgHoverImageAttachment={(value) =>
                            setAttributes({
                                submitBtnBgHoverImageAttachment: value,
                            })
                        }
                        hoverBackgroundImageRepeat={
                            submitBtnBgHoverImageRepeat
                        }
                        setBgHoverImageRepeat={(value) =>
                            setAttributes({
                                submitBtnBgHoverImageRepeat: value,
                            })
                        }
                        hoverBackgroundImageSize={submitBtnBgHoverImageSize}
                        setBgHoverImageSize={(value) =>
                            setAttributes({ submitBtnBgHoverImageSize: value })
                        }
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSubmitBtnPaddingUnitsHandler}
                        spacingUnits={submitBtnPaddingUnits}
                        spacingDesktop={submitBtnPaddingDesktop}
                        spacingTablet={submitBtnPaddingTablet}
                        spacingMobile={submitBtnPaddingMobile}
                        handleSpacingUnitHandler={handleSubmitBtnPaddingUnitChange}
                        spacingCombineBtn={submitBtnPaddingLink}
                        spacingCombineBtnHandler={handleSubmitBtnPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSubmitBtnMarginUnitsHandler}
                        spacingUnits={submitBtnMarginUnits}
                        spacingDesktop={submitBtnMarginDesktop}
                        spacingTablet={submitBtnMarginTablet}
                        spacingMobile={submitBtnMarginMobile}
                        handleSpacingUnitHandler={handleSubmitBtnMarginUnitChange}
                        spacingCombineBtn={submitBtnMarginLink}
                        spacingCombineBtnHandler={handleSubmitBtnMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={submitBtnBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ submitBtnBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={submitBtnBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnBorderColorSwitcher: value })}
                    />
                    
                    {submitBtnBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={submitBtnBorderColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {submitBtnBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={submitBtnBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSubmitBtnBorderUnitsHandler}
                        spacingUnits={submitBtnBorderUnits}
                        spacingDesktop={submitBtnBorderDesktop}
                        spacingTablet={submitBtnBorderTablet}
                        spacingMobile={submitBtnBorderMobile}
                        handleSpacingUnitHandler={handleSubmitBtnBorderUnitChange}
                        spacingCombineBtn={submitBtnBorderLink}
                        spacingCombineBtnHandler={handleSubmitBtnBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSubmitBtnBorderRadiusUnitsHandler}
                        spacingUnits={submitBtnBorderRadiusUnits}
                        spacingDesktop={submitBtnBorderRadiusDesktop}
                        spacingTablet={submitBtnBorderRadiusTablet}
                        spacingMobile={submitBtnBorderRadiusMobile}
                        handleSpacingUnitHandler={handleSubmitBtnBorderRadiusUnitChange}
                        spacingCombineBtn={submitBtnBorderRadiusLink}
                        spacingCombineBtnHandler={handleSubmitBtnBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Box Shadow", "frontis-blocks")}
                        globalSwitcher={submitBtnBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnBoxShadowSwitcher: value })}
                    />
                    
                    {submitBtnBoxShadowSwitcher === 'normal' && (
                        <FB_BoxShadowControl
                            label={__("Normal Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) =>
                                setAttributes({ submitBtnBoxShadowValues: value })
                            }
                            initialShadowValue={submitBtnBoxShadowValues}
                            onBoxShadowStyleChange={(value) =>
                                setAttributes({
                                    submitBtnBoxShadowCssValue: value,
                                })
                            }
                        />
                    )}
                    
                    {submitBtnBoxShadowSwitcher === 'hover' && (
                        <FB_BoxShadowControl
                            label={__("Hover Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) =>
                                setAttributes({ submitBtnBoxShadowHoverValues: value })
                            }
                            initialShadowValue={submitBtnBoxShadowHoverValues}
                            onBoxShadowStyleChange={(value) =>
                                setAttributes({
                                    submitBtnBoxShadowHoverCssValue: value,
                                })
                            }
                        />
                    )}
                </PanelBody>

                <PanelBody
                    title={__("Success Message", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={successMessageGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ successMessageGlobalTypographyData: value })}
        
                        globalTypoType={successMessageGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                successMessageGlobalTypoType: value, 
                                successMessageGlobalTypoSwitcher: value === 'default' ? {...successMessageGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...successMessageGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}
        
                        globalTypoOption={successMessageGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ successMessageGlobalTypoOption: value })}
        
                        fontFamily={successMessageFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ successMessageFontFamily: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, fontFamily: value && false} })}
        
                        fontSize={successMessageFontSize}
                        onChangeFontSize={(value) => setAttributes({ successMessageFontSize: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, fontSize: value && false} })}
        
                        fontSizeUnits={successMessageFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ successMessageFontSizeUnits: value })}
        
                        fontWeight={successMessageFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ successMessageFontWeight: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, fontWeight: value && false} })}
        
                        fontStyle={successMessageFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ successMessageFontStyle: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, fontStyle: value && false} })}
        
                        textTransform={successMessageTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ successMessageTextTransform: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, textTransform: value && false} })}
        
                        textDecoration={successMessageTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ successMessageTextDecoration: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, textDecoration: value && false} })}
        
                        letterSpacing={successMessageLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ successMessageLetterSpacing: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, letterSpacing: value && false} })}
        
                        letterSpacingUnits={successMessageLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ successMessageLetterSpacingUnits: value })}
        
                        lineHeight={successMessageLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ successMessageLineHeight: value, successMessageGlobalTypoSwitcher: {...successMessageGlobalTypoSwitcher, lineHeight: value && false} })}
        
                        lineHeightUnits={successMessageLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ successMessageLineHeightUnits: value })}
        
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={successMessageColor}
                        setGlobalColor={(value) => setAttributes({ successMessageColor: value === undefined ? '' : value })}
                    />

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={successMessageBgColorSwitcher}
                        setBgColorSwitcher={(value) =>
                            setAttributes({ successMessageBgColorSwitcher: value })
                        }
                        normalBackgroundType={successMessageBgType}
                        setNormalBackgroundType={(value) =>
                            setAttributes({ successMessageBgType: value })
                        }
                        normalClassicColor={successMessageBgClassicColor}
                        setNormalClassicColor={(value) =>
                            setAttributes({ successMessageBgClassicColor: value === undefined ? '' : value })
                        }
                        normalGradientColor={successMessageBgGradientColor}
                        setNormalGradientColor={(value) =>
                            setAttributes({ successMessageBgGradientColor: value === undefined ? null : value })
                        }
                        normalCustomGradientSwitcher={
                            successMessageBgCustomGradientSwitcher
                        }
                        setNormalCustomGradientSwitcher={(value) =>
                            setAttributes({
                                successMessageBgCustomGradientSwitcher: value,
                            })
                        }
                        normalCustomGradientInputValue={
                            successMessageBgCustomGradientInputValue
                        }
                        setNormalCustomGradientInputValue={(value) =>
                            setAttributes({
                                successMessageBgCustomGradientInputValue: value,
                            })
                        }
                        normalBackgroundImageUrl={successMessageBgImageUrl}
                        setNormalBackgroundImageUrl={(value) =>
                            setAttributes({ successMessageBgImageUrl: value })
                        }
                        normalBackgroundImageAlt={successMessageBgImageAlt}
                        setNormalBackgroundImageAlt={(value) =>
                            setAttributes({ successMessageBgImageAlt: value })
                        }
                        normalBackgroundImageID={successMessageBgImageID}
                        setNormalBackgroundImageID={(value) =>
                            setAttributes({ successMessageBgImageID: value })
                        }
                        normalBackgroundImagePosition={
                            successMessageBgImagePosition
                        }
                        setNormalBackgroundImagePosition={(value) =>
                            setAttributes({
                                successMessageBgImagePosition: value,
                            })
                        }
                        normalBackgroundImageAttachment={
                            successMessageBgImageAttachment
                        }
                        setNormalBackgroundImageAttachment={(value) =>
                            setAttributes({
                                successMessageBgImageAttachment: value,
                            })
                        }
                        normalBackgroundImageRepeat={
                            successMessageBgImageRepeat
                        }
                        setNormalBackgroundImageRepeat={(value) =>
                            setAttributes({
                                successMessageBgImageRepeat: value,
                            })
                        }
                        normalBackgroundImageSize={successMessageBgImageSize}
                        setNormalBackgroundImageSize={(value) =>
                            setAttributes({ successMessageBgImageSize: value })
                        }
                        hoverBackgroundType={successMessageBgHoverType}
                        setHoverBackgroundType ={(value) =>
                            setAttributes({ successMessageBgHoverType: value })
                        }
                        hoverClassicColor={successMessageBgHoverClassicColor}
                        setHoverClassicColor={(value) =>
                            setAttributes({ successMessageBgHoverClassicColor: value === undefined ? '' : value })
                        }
                        hoverGradientColor={successMessageBgHoverGradientColor}
                        setHoverGradientColor={(value) =>
                            setAttributes({ successMessageBgHoverGradientColor: value === undefined ? null : value })
                        }
                        hoverCustomGradientSwitcher={
                            successMessageBgHoverCustomGradientSwitcher
                        }
                        setHoverCustomGradientSwitcher={(value) =>
                            setAttributes({
                                successMessageBgHoverCustomGradientSwitcher: value,
                            })
                        }
                        hoverCustomGradientInputValue={
                            successMessageBgHoverCustomGradientInputValue
                        }
                        setHoverCustomGradientInputValue={(value) =>
                            setAttributes({
                                successMessageBgHoverCustomGradientInputValue: value,
                            })
                        }
                        hoverBackgroundImageUrl={successMessageBgHoverImageUrl}
                        setBgHoverImageUrl={(value) =>
                            setAttributes({ successMessageBgHoverImageUrl: value })
                        }
                        hoverBackgroundImageAlt={successMessageBgHoverImageAlt}
                        setBgHoverImageAlt={(value) =>
                            setAttributes({ successMessageBgHoverImageAlt: value })
                        }
                        hoverBackgroundImageID={successMessageBgHoverImageID}
                        setBgHoverImageID={(value) =>
                            setAttributes({ successMessageBgHoverImageID: value })
                        }
                        hoverBackgroundImagePosition={
                            successMessageBgHoverImagePosition
                        }
                        setBgHoverImagePosition={(value) =>
                            setAttributes({
                                successMessageBgHoverImagePosition: value,
                            })
                        }
                        hoverBackgroundImageAttachment={
                            successMessageBgHoverImageAttachment
                        }
                        setBgHoverImageAttachment={(value) =>
                            setAttributes({
                                successMessageBgHoverImageAttachment: value,
                            })
                        }
                        hoverBackgroundImageRepeat={
                            successMessageBgHoverImageRepeat
                        }
                        setBgHoverImageRepeat={(value) =>
                            setAttributes({
                                successMessageBgHoverImageRepeat: value,
                            })
                        }
                        hoverBackgroundImageSize={successMessageBgHoverImageSize}
                        setBgHoverImageSize={(value) =>
                            setAttributes({ successMessageBgHoverImageSize: value })
                        }
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlesuccessMessagePaddingUnitsHandler}
                        spacingUnits={successMessagePaddingUnits}
                        spacingDesktop={successMessagePaddingDesktop}
                        spacingTablet={successMessagePaddingTablet}
                        spacingMobile={successMessagePaddingMobile}
                        handleSpacingUnitHandler={handlesuccessMessagePaddingUnitChange}
                        spacingCombineBtn={successMessagePaddingLink}
                        spacingCombineBtnHandler={handlesuccessMessagePaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlesuccessMessageMarginUnitsHandler}
                        spacingUnits={successMessageMarginUnits}
                        spacingDesktop={successMessageMarginDesktop}
                        spacingTablet={successMessageMarginTablet}
                        spacingMobile={successMessageMarginMobile}
                        handleSpacingUnitHandler={handlesuccessMessageMarginUnitChange}
                        spacingCombineBtn={successMessageMarginLink}
                        spacingCombineBtnHandler={handlesuccessMessageMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={successMessageBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ successMessageBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={successMessageBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ successMessageBorderColorSwitcher: value })}
                    />
                    
                    {successMessageBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={successMessageBorderColor}
                            setGlobalColor={(value) => setAttributes({ successMessageBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {successMessageBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={successMessageBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ successMessageBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlesuccessMessageBorderUnitsHandler}
                        spacingUnits={successMessageBorderUnits}
                        spacingDesktop={successMessageBorderDesktop}
                        spacingTablet={successMessageBorderTablet}
                        spacingMobile={successMessageBorderMobile}
                        handleSpacingUnitHandler={handlesuccessMessageBorderUnitChange}
                        spacingCombineBtn={successMessageBorderLink}
                        spacingCombineBtnHandler={handlesuccessMessageBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlesuccessMessageBorderRadiusUnitsHandler}
                        spacingUnits={successMessageBorderRadiusUnits}
                        spacingDesktop={successMessageBorderRadiusDesktop}
                        spacingTablet={successMessageBorderRadiusTablet}
                        spacingMobile={successMessageBorderRadiusMobile}
                        handleSpacingUnitHandler={handlesuccessMessageBorderRadiusUnitChange}
                        spacingCombineBtn={successMessageBorderRadiusLink}
                        spacingCombineBtnHandler={handlesuccessMessageBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>

                <PanelBody
                    title={__("Error Message", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={errorMessageGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ errorMessageGlobalTypographyData: value })}
        
                        globalTypoType={errorMessageGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                errorMessageGlobalTypoType: value, 
                                errorMessageGlobalTypoSwitcher: value === 'default' ? {...errorMessageGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...errorMessageGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}
        
                        globalTypoOption={errorMessageGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ errorMessageGlobalTypoOption: value })}
        
                        fontFamily={errorMessageFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ errorMessageFontFamily: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, fontFamily: value && false} })}
        
                        fontSize={errorMessageFontSize}
                        onChangeFontSize={(value) => setAttributes({ errorMessageFontSize: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, fontSize: value && false} })}
        
                        fontSizeUnits={errorMessageFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ errorMessageFontSizeUnits: value })}
        
                        fontWeight={errorMessageFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ errorMessageFontWeight: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, fontWeight: value && false} })}
        
                        fontStyle={errorMessageFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ errorMessageFontStyle: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, fontStyle: value && false} })}
        
                        textTransform={errorMessageTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ errorMessageTextTransform: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, textTransform: value && false} })}
        
                        textDecoration={errorMessageTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ errorMessageTextDecoration: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, textDecoration: value && false} })}
        
                        letterSpacing={errorMessageLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ errorMessageLetterSpacing: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, letterSpacing: value && false} })}
        
                        letterSpacingUnits={errorMessageLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ errorMessageLetterSpacingUnits: value })}
        
                        lineHeight={errorMessageLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ errorMessageLineHeight: value, errorMessageGlobalTypoSwitcher: {...errorMessageGlobalTypoSwitcher, lineHeight: value && false} })}
        
                        lineHeightUnits={errorMessageLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ errorMessageLineHeightUnits: value })}
        
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />
                    
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={errorMessageColor}
                        setGlobalColor={(value) => setAttributes({ errorMessageColor: value === undefined ? '' : value })}
                    />

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={errorMessageBgColorSwitcher}
                        setBgColorSwitcher={(value) =>
                            setAttributes({ errorMessageBgColorSwitcher: value })
                        }
                        normalBackgroundType={errorMessageBgType}
                        setNormalBackgroundType={(value) =>
                            setAttributes({ errorMessageBgType: value })
                        }
                        normalClassicColor={errorMessageBgClassicColor}
                        setNormalClassicColor={(value) =>
                            setAttributes({ errorMessageBgClassicColor: value === undefined ? '' : value })
                        }
                        normalGradientColor={errorMessageBgGradientColor}
                        setNormalGradientColor={(value) =>
                            setAttributes({ errorMessageBgGradientColor: value === undefined ? null : value })
                        }
                        normalCustomGradientSwitcher={
                            errorMessageBgCustomGradientSwitcher
                        }
                        setNormalCustomGradientSwitcher={(value) =>
                            setAttributes({
                                errorMessageBgCustomGradientSwitcher: value,
                            })
                        }
                        normalCustomGradientInputValue={
                            errorMessageBgCustomGradientInputValue
                        }
                        setNormalCustomGradientInputValue={(value) =>
                            setAttributes({
                                errorMessageBgCustomGradientInputValue: value,
                            })
                        }
                        normalBackgroundImageUrl={errorMessageBgImageUrl}
                        setNormalBackgroundImageUrl={(value) =>
                            setAttributes({ errorMessageBgImageUrl: value })
                        }
                        normalBackgroundImageAlt={errorMessageBgImageAlt}
                        setNormalBackgroundImageAlt={(value) =>
                            setAttributes({ errorMessageBgImageAlt: value })
                        }
                        normalBackgroundImageID={errorMessageBgImageID}
                        setNormalBackgroundImageID={(value) =>
                            setAttributes({ errorMessageBgImageID: value })
                        }
                        normalBackgroundImagePosition={
                            errorMessageBgImagePosition
                        }
                        setNormalBackgroundImagePosition={(value) =>
                            setAttributes({
                                errorMessageBgImagePosition: value,
                            })
                        }
                        normalBackgroundImageAttachment={
                            errorMessageBgImageAttachment
                        }
                        setNormalBackgroundImageAttachment={(value) =>
                            setAttributes({
                                errorMessageBgImageAttachment: value,
                            })
                        }
                        normalBackgroundImageRepeat={
                            errorMessageBgImageRepeat
                        }
                        setNormalBackgroundImageRepeat={(value) =>
                            setAttributes({
                                errorMessageBgImageRepeat: value,
                            })
                        }
                        normalBackgroundImageSize={errorMessageBgImageSize}
                        setNormalBackgroundImageSize={(value) =>
                            setAttributes({ errorMessageBgImageSize: value })
                        }
                        hoverBackgroundType={errorMessageBgHoverType}
                        setHoverBackgroundType ={(value) =>
                            setAttributes({ errorMessageBgHoverType: value })
                        }
                        hoverClassicColor={errorMessageBgHoverClassicColor}
                        setHoverClassicColor={(value) =>
                            setAttributes({ errorMessageBgHoverClassicColor: value === undefined ? '' : value })
                        }
                        hoverGradientColor={errorMessageBgHoverGradientColor}
                        setHoverGradientColor={(value) =>
                            setAttributes({ errorMessageBgHoverGradientColor: value === undefined ? null : value })
                        }
                        hoverCustomGradientSwitcher={
                            errorMessageBgHoverCustomGradientSwitcher
                        }
                        setHoverCustomGradientSwitcher={(value) =>
                            setAttributes({
                                errorMessageBgHoverCustomGradientSwitcher: value,
                            })
                        }
                        hoverCustomGradientInputValue={
                            errorMessageBgHoverCustomGradientInputValue
                        }
                        setHoverCustomGradientInputValue={(value) =>
                            setAttributes({
                                errorMessageBgHoverCustomGradientInputValue: value,
                            })
                        }
                        hoverBackgroundImageUrl={errorMessageBgHoverImageUrl}
                        setBgHoverImageUrl={(value) =>
                            setAttributes({ errorMessageBgHoverImageUrl: value })
                        }
                        hoverBackgroundImageAlt={errorMessageBgHoverImageAlt}
                        setBgHoverImageAlt={(value) =>
                            setAttributes({ errorMessageBgHoverImageAlt: value })
                        }
                        hoverBackgroundImageID={errorMessageBgHoverImageID}
                        setBgHoverImageID={(value) =>
                            setAttributes({ errorMessageBgHoverImageID: value })
                        }
                        hoverBackgroundImagePosition={
                            errorMessageBgHoverImagePosition
                        }
                        setBgHoverImagePosition={(value) =>
                            setAttributes({
                                errorMessageBgHoverImagePosition: value,
                            })
                        }
                        hoverBackgroundImageAttachment={
                            errorMessageBgHoverImageAttachment
                        }
                        setBgHoverImageAttachment={(value) =>
                            setAttributes({
                                errorMessageBgHoverImageAttachment: value,
                            })
                        }
                        hoverBackgroundImageRepeat={
                            errorMessageBgHoverImageRepeat
                        }
                        setBgHoverImageRepeat={(value) =>
                            setAttributes({
                                errorMessageBgHoverImageRepeat: value,
                            })
                        }
                        hoverBackgroundImageSize={errorMessageBgHoverImageSize}
                        setBgHoverImageSize={(value) =>
                            setAttributes({ errorMessageBgHoverImageSize: value })
                        }
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleErrorMessagePaddingUnitsHandler}
                        spacingUnits={errorMessagePaddingUnits}
                        spacingDesktop={errorMessagePaddingDesktop}
                        spacingTablet={errorMessagePaddingTablet}
                        spacingMobile={errorMessagePaddingMobile}
                        handleSpacingUnitHandler={handleErrorMessagePaddingUnitChange}
                        spacingCombineBtn={errorMessagePaddingLink}
                        spacingCombineBtnHandler={handleErrorMessagePaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleErrorMessageMarginUnitsHandler}
                        spacingUnits={errorMessageMarginUnits}
                        spacingDesktop={errorMessageMarginDesktop}
                        spacingTablet={errorMessageMarginTablet}
                        spacingMobile={errorMessageMarginMobile}
                        handleSpacingUnitHandler={handleErrorMessageMarginUnitChange}
                        spacingCombineBtn={errorMessageMarginLink}
                        spacingCombineBtnHandler={handleErrorMessageMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={errorMessageBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ errorMessageBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={errorMessageBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ errorMessageBorderColorSwitcher: value })}
                    />
                    
                    {errorMessageBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={errorMessageBorderColor}
                            setGlobalColor={(value) => setAttributes({ errorMessageBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {errorMessageBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={errorMessageBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ errorMessageBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleErrorMessageBorderUnitsHandler}
                        spacingUnits={errorMessageBorderUnits}
                        spacingDesktop={errorMessageBorderDesktop}
                        spacingTablet={errorMessageBorderTablet}
                        spacingMobile={errorMessageBorderMobile}
                        handleSpacingUnitHandler={handleErrorMessageBorderUnitChange}
                        spacingCombineBtn={errorMessageBorderLink}
                        spacingCombineBtnHandler={handleErrorMessageBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleErrorMessageBorderRadiusUnitsHandler}
                        spacingUnits={errorMessageBorderRadiusUnits}
                        spacingDesktop={errorMessageBorderRadiusDesktop}
                        spacingTablet={errorMessageBorderRadiusTablet}
                        spacingMobile={errorMessageBorderRadiusMobile}
                        handleSpacingUnitHandler={handleErrorMessageBorderRadiusUnitChange}
                        spacingCombineBtn={errorMessageBorderRadiusLink}
                        spacingCombineBtnHandler={handleErrorMessageBorderRadiusCombineBtn}
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
                        rangeValue={formZIndex}
                        onChangeHandler={(value) => setAttributes({ formZIndex: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}

                    />

                    <SelectControl
                        label={__("Overflow", "frontis-blocks")}
                        value={formOverflow}
                        options={OVERFLOW_OP}
                        onChange={(value) => setAttributes({ formOverflow: value })}
                    />

                    <FB_PositionControl
                        deviceType={deviceType}
                        positionType={formPositionType}
                        setPositionType={(value) => setAttributes({ formPositionType: value })}
                                                                        
                        HZOrientationType={formHZOrientationType}
                        setHZOrientationType={(value) =>
                            setAttributes({ formHZOrientationType: value })
                        }
                        VROrientationType={formVROrientationType}
                        setVROrientationType={(value) =>
                            setAttributes({ formVROrientationType: value })
                        }
                                                                            
                        HZLeftOffset={formHZLeftOffset}
                        setHZLeftOffset={(value) => setAttributes({ formHZLeftOffset: value })}
                        HZLeftOffsetUnits={formHZLeftOffsetUnits}
                        setHZLeftOffsetUnits={(value) => setAttributes({ formHZLeftOffsetUnits: value })}
                        HZRightOffset={formHZRightOffset}
                        setHZRightOffset={(value) => setAttributes({ formHZRightOffset: value })}
                        HZRightOffsetUnits={formHZRightOffsetUnits}
                        setHZRightOffsetUnits={(value) => setAttributes({ formHZRightOffsetUnits: value })}
                                                                        
                        VRTopOffset={formVRTopOffset}
                        setVRTopOffset={(value) => setAttributes({ formVRTopOffset: value })}
                        VRTopOffsetUnits={formVRTopOffsetUnits}
                        setVRTopOffsetUnits={(value) => setAttributes({ formVRTopOffsetUnits: value })}
                        VRBottomOffset={formVRBottomOffset}
                        setVRBottomOffset={(value) => setAttributes({ formVRBottomOffset: value })}
                        VRBottomOffsetUnits={formVRBottomOffsetUnits}
                        setVRBottomOffsetUnits={(value) => setAttributes({ formVRBottomOffsetUnits: value })}

                        setAttributes={setAttributes}
                    />

                    <FB_InputControl
                        label={__("CSS ID", "frontis-blocks")}
                        value={formGlobalWraperID}
                        onChangeValue={(value) => setAttributes({ formGlobalWraperID: value })}
                        helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                    />

                    <FB_InputControl
                        label={__("CSS Class", "frontis-blocks")}
                        value={formGlobalWraperClass}
                        onChangeValue={(value) => setAttributes({ formGlobalWraperClass: value })}
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
                        spacingUnitsHandler={handleformMarginUnitsHandler}
                        spacingUnits={formMarginUnits}
                        spacingDesktop={formMarginDesktop}
                        spacingTablet={formMarginTablet}
                        spacingMobile={formMarginMobile}
                        handleSpacingUnitHandler={handleformMarginUnitChange}
                        spacingCombineBtn={formMarginLink}
                        spacingCombineBtnHandler={handleformMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleformPaddingUnitsHandler}
                        spacingUnits={formPaddingUnits}
                        spacingDesktop={formPaddingDesktop}
                        spacingTablet={formPaddingTablet}
                        spacingMobile={formPaddingMobile}
                        handleSpacingUnitHandler={handleformPaddingUnitChange}
                        spacingCombineBtn={formPaddingLink}
                        spacingCombineBtnHandler={handleformPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />                                     
                </PanelBody>

                <PanelBody title="Background Color" initialOpen={false} >
                    <FB_BackgroundColorControl
                        bgColorSwitcher={formBgColorSwitcher}
                        setBgColorSwitcher={(value) =>
                            setAttributes({ formBgColorSwitcher: value })
                        }
                        normalBackgroundType={formBgType}
                        setNormalBackgroundType={(value) =>
                            setAttributes({ formBgType: value })
                        }
                        normalClassicColor={formBgClassicColor}
                        setNormalClassicColor={(value) =>
                            setAttributes({ formBgClassicColor: value === undefined ? '' : value })
                        }
                        normalGradientColor={formBgGradientColor}
                        setNormalGradientColor={(value) =>
                            setAttributes({ formBgGradientColor: value === undefined ? null : value })
                        }
                        normalCustomGradientSwitcher={formBgCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) =>
                            setAttributes({
                                formBgCustomGradientSwitcher: value,
                            })
                        }
                        normalCustomGradientInputValue={formBgCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) =>
                            setAttributes({
                                formBgCustomGradientInputValue: value,
                            })
                        }
                        normalBackgroundImageUrl={formBgImageUrl}
                        setNormalBackgroundImageUrl={(value) =>
                            setAttributes({ formBgImageUrl: value })
                        }
                        normalBackgroundImageAlt={formBgImageAlt}
                        setNormalBackgroundImageAlt={(value) =>
                            setAttributes({ formBgImageAlt: value })
                        }
                        normalBackgroundImageID={formBgImageID}
                        setNormalBackgroundImageID={(value) =>
                            setAttributes({ formBgImageID: value })
                        }
                        normalBackgroundImagePosition={formBgImagePosition}
                        setNormalBackgroundImagePosition={(value) =>
                            setAttributes({
                                formBgImagePosition: value,
                            })
                        }
                        normalBackgroundImageAttachment={formBgImageAttachment}
                        setNormalBackgroundImageAttachment={(value) =>
                            setAttributes({
                                formBgImageAttachment: value,
                            })
                        }
                        normalBackgroundImageRepeat={formBgImageRepeat}
                        setNormalBackgroundImageRepeat={(value) =>
                            setAttributes({
                                formBgImageRepeat: value,
                            })
                        }
                        normalBackgroundImageSize={formBgImageSize}
                        setNormalBackgroundImageSize={(value) =>
                            setAttributes({ formBgImageSize: value })
                        }
                        hoverBackgroundType={formBgHoverType}
                        setHoverBackgroundType={(value) =>
                            setAttributes({ formBgHoverType: value })
                        }
                        hoverClassicColor={formBgHoverClassicColor}
                        setHoverClassicColor={(value) =>
                            setAttributes({ formBgHoverClassicColor: value === undefined ? '' : value })
                        }
                        hoverGradientColor={formBgHoverGradientColor}
                        setHoverGradientColor={(value) =>
                            setAttributes({ formBgHoverGradientColor: value === undefined ? null : value })
                        }
                        hoverCustomGradientSwitcher={formBgHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) =>
                            setAttributes({
                                formBgHoverCustomGradientSwitcher: value,
                            })
                        }
                        hoverCustomGradientInputValue={formBgHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) =>
                            setAttributes({
                                formBgHoverCustomGradientInputValue: value,
                            })
                        }
                        hoverBackgroundImageUrl={formBgHoverImageUrl}
                        setBgHoverImageUrl={(value) =>
                            setAttributes({ formBgHoverImageUrl: value })
                        }
                        hoverBackgroundImageAlt={formBgHoverImageAlt}
                        setBgHoverImageAlt={(value) =>
                            setAttributes({ formBgHoverImageAlt: value })
                        }
                        hoverBackgroundImageID={formBgHoverImageID}
                        setBgHoverImageID={(value) =>
                            setAttributes({ formBgHoverImageID: value })
                        }
                        hoverBackgroundImagePosition={formBgHoverImagePosition}
                        setBgHoverImagePosition={(value) =>
                            setAttributes({
                                formBgHoverImagePosition: value,
                            })
                        }
                        hoverBackgroundImageAttachment={formBgHoverImageAttachment}
                        setBgHoverImageAttachment={(value) =>
                            setAttributes({
                                formBgHoverImageAttachment: value,
                            })
                        }
                        hoverBackgroundImageRepeat={formBgHoverImageRepeat}
                        setBgHoverImageRepeat={(value) =>
                            setAttributes({
                                formBgHoverImageRepeat: value,
                            })
                        }
                        hoverBackgroundImageSize={formBgHoverImageSize}
                        setBgHoverImageSize={(value) =>
                            setAttributes({ formBgHoverImageSize: value })
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
                            value={formBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ formBorder: value })}
                        />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={formBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ formBorderColorSwitcher: value })}
                    />
                    
                    {formBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={formBorderColor}
                            setGlobalColor={(value) => setAttributes({ formBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {formBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={formBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ formBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleformBorderUnitsHandler}
                        spacingUnits={formBorderUnits}
                        spacingDesktop={formBorderDesktop}
                        spacingTablet={formBorderTablet}
                        spacingMobile={formBorderMobile}
                        handleSpacingUnitHandler={handleformBorderUnitChange}
                        spacingCombineBtn={formBorderLink}
                        spacingCombineBtnHandler={handleformBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleformBorderRadiusUnitsHandler}
                        spacingUnits={formBorderRadiusUnits}
                        spacingDesktop={formBorderRadiusDesktop}
                        spacingTablet={formBorderRadiusTablet}
                        spacingMobile={formBorderRadiusMobile}
                        handleSpacingUnitHandler={handleformBorderRadiusUnitChange}
                        spacingCombineBtn={formBorderRadiusLink}
                        spacingCombineBtnHandler={handleformBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Box Shadow", "frontis-blocks")}
                        globalSwitcher={formGlobalBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ formGlobalBoxShadowSwitcher: value })}
                    />
                    
                    {formGlobalBoxShadowSwitcher === 'normal' && (
                        <FB_BoxShadowControl
                            label={__("Normal Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) =>
                                setAttributes({ formGlobalBoxShadowValues: value })
                            }
                            initialShadowValue={formGlobalBoxShadowValues}
                            onBoxShadowStyleChange={(value) =>
                                setAttributes({
                                    formGlobalBoxShadowCssValue: value,
                                })
                            }
                        />
                    )}
                    
                    {formGlobalBoxShadowSwitcher === 'hover' && (
                        <FB_BoxShadowControl
                            label={__("Hover Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) =>
                                setAttributes({ formGlobalHoverBoxShadowValues: value })
                            }
                            initialShadowValue={formGlobalHoverBoxShadowValues}
                            onBoxShadowStyleChange={(value) =>
                                setAttributes({
                                    formGlobalHoverBoxShadowCssValue: value,
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
                        desktopValue={formDesktopSwitcher}
                        setDesktopValue={(value) => setAttributes({ formDesktopSwitcher: value })}

                        tabletValue={formTabletSwitcher}
                        setTabletValue={(value) => setAttributes({ formTabletSwitcher: value })}

                        mobileValue={formMobileSwitcher}
                        setMobileValue={(value) => setAttributes({ formMobileSwitcher: value })}
                    />
                </PanelBody>

                <PanelBody
                    title={__("Custom CSS", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_CustomCSSEditor  
                        value={formCustomCSS} 
                        onChangeValue={(value) => setAttributes({ formCustomCSS: value })}
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