import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
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
    Spinner,
} from '@wordpress/components';

import {
    BORDER_STYLES,
    TITLE_ALIGNMENT,
    ICON_POSITIONS,
    ICON_SWITCHER,
    OVERFLOW_OP,
    ALIGN_ITEMS,
    SUTMIT_BTN_POSITION,
    SUCCESS_TYPE,
} from "./constants/constants";
import FrontisForms_Spacing from '@Components/spacing';
import FrontisForms_Range from '@Components/range';

import './editor.scss';
import FBIconPicker from '../../components/icon-picker';
import FrontisForms_TypographyControl from '../../components/typography-control';
import FrontisForms_BackgroundColorControl from '../../components/background-color-control';
import FrontisForms_BoxShadowControl from '../../components/box-shadow';
import FrontisForms_BackgroundImageControl from '../../components/background-image-control';
import FrontisForms_HtmlTagControl from '../../components/html-tag-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FrontisForms_ColorControl from '../../components/color-control';
import FrontisForms_SwitcherControl from '../../components/switcher-control';
import FrontisForms_InputControl from '@Components/input-control';
import FrontisForms_CustomCSSEditor from '@Components/custom-css-editor';

import {useDeviceType} from "@Config/displayType";
import FrontisForms_PositionControl from '@Components/position-control';
import FrontisForms_VisibilityControl from '@Components/visibility-control';
import FrontisForms_InspectorControls from '@Components/InspectorControls';
import FrontisForms_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';


export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,

        formType,
        fieldLabelSwitcher,
        fieldIconSwitcher,
        fieldRequiredSwitcher,
        fieldRequiredSymbolSwitcher,

        formTitle,
        formToEmail,
        formCCEmail,
        formBCCEmail,
        formEmailSubject,
        formSuccessType,
        formSuccessMessage,
        formSuccessRedirect,
        formFailMessage,
        formValidtionMessage,
        formHiddenMessage,

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

        submitBtnLabel,
        submitBtnIcon,
        submitBtnAlignment,
        submitBtnIconSwitcher,
        submitBtnIconPosition,

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

        submitBtnIconColorSwitcher,
        submitBtnIconColor,
        submitBtnIconHoverColor,

        submitBtnIconSize,
        submitBtnIconSizeUnits,
        submitBtnIconGap,
        submitBtnIconGapUnits,

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
        loadGoogleFont(
            labelFontFamily,
            inputFieldFontFamily,
            submitBtnFontFamily,
        );
    }, [
        labelFontFamily,
        inputFieldFontFamily,
        submitBtnFontFamily,
    ]);
    /** End load font */

    // Fetch forms Title
    const [formsList, setFormsList] = useState([]);

    useEffect(() => {
        fetchForms();
    }, []);

    const fetchForms = async () => {
        try {
            const res = await fetch(
                `${frontisFormsAdmin.ajaxUrl}?action=frontis_forms_get_forms_dropdown&nonce=${frontisFormsAdmin.nonce}`
            );
            const data = await res.json();
            console.log(data);
            if (data.success) {
                setFormsList(data.data || []);
            }
        } catch (err) {
            console.error('Failed to fetch forms:', err);
        }
    };

    const formOptions = [
        { label: __('-- Select a Form --', 'frontis-forms'), value: '' },
        ...formsList.map(form => ({ label: form.title, value: form.title })),
    ];



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





    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-forms")} initialOpen={true}>
                <ToggleControl
                    label={__("Show Label", "frontis-forms")}
                    checked={fieldLabelSwitcher}
                    onChange={(value) => setAttributes({ fieldLabelSwitcher: value })}
                />
                <ToggleControl
                    label={__("Is It Required Field?", "frontis-forms")}
                    checked={fieldRequiredSwitcher}
                    onChange={(value) => setAttributes({ fieldRequiredSwitcher: value })}
                />
                {fieldRequiredSwitcher && (
                    <ToggleControl
                        label={__("Show Required Symbol", "frontis-forms")}
                        checked={fieldRequiredSymbolSwitcher}
                        onChange={(value) => setAttributes({ fieldRequiredSymbolSwitcher: value })}
                    />
                )}
                {/* <ToggleControl
                    label={__("Show icon", "frontis-forms")}
                    checked={fieldIconSwitcher}
                    onChange={(value) => setAttributes({ fieldIconSwitcher: value })}
                /> */}

            </PanelBody>

            <PanelBody
                title={__("Field Gaps", "frontis-forms")}
                initialOpen={false}
            >
                <FrontisForms_Range
                    min={1}
                    max={fieldColumnGapUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Column", "frontis-forms")}
                    rangeValue={fieldColumnGap}
                    onChangeHandler={(value) => setAttributes({ fieldColumnGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ fieldColumnGapUnits: value })}
                    deviceType={deviceType}
                    units={fieldColumnGapUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />

                <FrontisForms_Range
                    min={1}
                    max={fieldRowGapUnits[deviceType] !== 'px' ? 100 : 2000}
                    label={__("Row", "frontis-forms")}
                    rangeValue={fieldRowGap}
                    onChangeHandler={(value) => setAttributes({ fieldRowGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ fieldRowGapUnits: value })}
                    deviceType={deviceType}
                    units={fieldRowGapUnits}
                    rangeStep={1}
                    resetFallbackValue={'100'}
                />
            </PanelBody>

            <PanelBody title={__("Submit Button", "frontis-forms")} initialOpen={false}>
                <TextControl
                    label={__('Label', 'frontis-forms')}
                    value={submitBtnLabel}
                    onChange={(value) => setAttributes({ submitBtnLabel: value })}
                />

                <BaseControl className={"fb-form-btn-alignment"} >
                    <FrontisForms_ResponsiveAlignmentControl
                        label={__("Alignment", "frontis-forms")}
                        globalAlignment={submitBtnAlignment}
                        setGlobalAlignment={(value) => setAttributes({ submitBtnAlignment: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        options={ALIGN_ITEMS}
                    />
                </BaseControl>


                <ToggleControl
                    label={__("Show Icon", "frontis-forms")}
                    checked={submitBtnIconSwitcher}
                    onChange={(value) => setAttributes({ submitBtnIconSwitcher: value })}
                />

                {submitBtnIconSwitcher && (
                    <BaseControl
                        label={__("Icon", "frontis-forms")}
                    >
                        <FBIconPicker
                            value={submitBtnIcon} 
                            setIconHandler={(value) => setAttributes({ submitBtnIcon: value })} 
                        />
                    </BaseControl>
                )}
            
                
                    <FrontisForms_ResponsiveAlignmentControl
                        label={__("Icon Position", "frontis-forms")}
                        globalAlignment={submitBtnIconPosition}
                        setGlobalAlignment={(value) => setAttributes({ submitBtnIconPosition: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        options={SUTMIT_BTN_POSITION}
                    />

            </PanelBody>

            <PanelBody title={__("Form Settings", "frontis-forms")} initialOpen={false}>
                <SelectControl
                    label={__('Select Form', 'frontis-forms')}
                    value={formTitle || ''}
                    options={formOptions}
                    onChange={(value) => setAttributes({ formTitle: value })}
                    help={__('Select a form created in the Forms tab of Frontis Forms dashboard.', 'frontis-forms')}
                />

                {/* <SelectControl
                    label={__("Overflow", "frontis-forms")}
                    value={formOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ formOverflow: value })}
                /> */}

                <TextareaControl
                    label={__('Email To', 'frontis-forms')}
                    value={formToEmail}
                    onChange={(value) => setAttributes({ formToEmail: value })}
                    help={__('This email will receive the form submission.', 'frontis-block')}
                />
                <TextareaControl
                    label={__('Email CC (optional)', 'frontis-forms')}
                    value={formCCEmail}
                    onChange={(value) => setAttributes({ formCCEmail: value })}
                    help={__('This email will receive the form submission.', 'frontis-block')}
                />
                <TextareaControl
                    label={__('Email BCC (optional)', 'frontis-forms')}
                    value={formBCCEmail}
                    onChange={(value) => setAttributes({ formBCCEmail: value })}
                    help={__('This will be the subject of the email.', 'frontis-block')}
                />
                <TextControl
                    label={__('Email Subject', 'frontis-forms')}
                    value={formEmailSubject}
                    onChange={(value) => setAttributes({ formEmailSubject: value })}
                    help={__('This will be the subject of the email.', 'frontis-block')}
                />
            </PanelBody>

            <PanelBody title={__("Form Submission", "frontis-forms")} initialOpen={false}>
                <ToggleControl
                    label={__("Show Hidden Message", "frontis-forms")}
                    checked={formHiddenMessage}
                    onChange={(value) => setAttributes({ formHiddenMessage: value })}
                />

                <SelectControl
                    label={__("Success Type", "frontis-forms")}
                    value={formSuccessType}
                    options={SUCCESS_TYPE}
                    onChange={(value) => setAttributes({ formSuccessType: value })}
                />
                {/* <SelectControl
                    label={__("Message Position", "frontis-forms")}
                    value={formOverflow}
                    options={OVERFLOW_OP}
                    onChange={(value) => setAttributes({ formOverflow: value })}
                /> */}
                {formSuccessType === 'message' && (
                <TextareaControl
                    label={__('Success Message', 'frontis-forms')}
                    value={formSuccessMessage}
                    onChange={(value) => setAttributes({ formSuccessMessage: value })}
                    help={__('This message will be shown when the form is submitted successfully.', 'frontis-forms')}
                />
                )}
                {formSuccessType === 'redirect' && (
                <TextControl
                    label={__('Success Redirect', 'frontis-forms')}
                    value={formSuccessRedirect}
                    onChange={(value) => setAttributes({ formSuccessRedirect: value })}
                    help={__('This page will be redirected when the form is submitted successfully.', 'frontis-forms')}
                />
                )}
                <TextareaControl
                    label={__('Fail Message', 'frontis-forms')}
                    value={formFailMessage}
                    onChange={(value) => setAttributes({ formFailMessage: value })}
                    help={__('This message will be shown when the form submission fails.', 'frontis-forms')}
                />
                <TextareaControl
                    label={__('Validation Message', 'frontis-forms')}
                    value={formValidtionMessage}
                    onChange={(value) => setAttributes({ formValidtionMessage: value })}
                    help={__('This message will be shown when the form validation fails.', 'frontis-forms')}
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

                {fieldIconSwitcher && (
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

                <PanelBody
                    title={__("Submit Button", "frontis-forms")}
                    initialOpen={false}
                >
                    <FrontisForms_TypographyControl
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

                    <FrontisForms_SwitcherControl
                        label={__("Color", "frontis-forms")}
                        globalSwitcher={submitBtnColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnColorSwitcher: value })}
                    />
                    
                    {submitBtnColorSwitcher === 'normal' && (
                        <FrontisForms_ColorControl
                            label={__("Normal Color", "frontis-forms")}
                            globalColor={submitBtnColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {submitBtnColorSwitcher === 'hover' && (
                        <FrontisForms_ColorControl
                            label={__("Hover Color", "frontis-forms")}
                            globalColor={submitBtnHoverColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FrontisForms_BackgroundColorControl
                        label={__("Background Color", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Padding", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Margin", "frontis-forms")}
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
                        label={__("Border Style", "frontis-forms")}
                        value={submitBtnBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ submitBtnBorder: value })}
                    />

                    <FrontisForms_SwitcherControl
                        label={__("Border Color", "frontis-forms")}
                        globalSwitcher={submitBtnBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnBorderColorSwitcher: value })}
                    />
                    
                    {submitBtnBorderColorSwitcher === 'normal' && (
                        <FrontisForms_ColorControl
                            label={__("Normal Color", "frontis-forms")}
                            globalColor={submitBtnBorderColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {submitBtnBorderColorSwitcher === 'hover' && (
                        <FrontisForms_ColorControl
                            label={__("Hover Color", "frontis-forms")}
                            globalColor={submitBtnBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FrontisForms_Spacing 
                        label={__("Border", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Border Radius", "frontis-forms")}
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

                    <FrontisForms_SwitcherControl
                        label={__("Box Shadow", "frontis-forms")}
                        globalSwitcher={submitBtnBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnBoxShadowSwitcher: value })}
                    />
                    
                    {submitBtnBoxShadowSwitcher === 'normal' && (
                        <FrontisForms_BoxShadowControl
                            label={__("Normal Shadow", "frontis-forms")}
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
                        <FrontisForms_BoxShadowControl
                            label={__("Hover Shadow", "frontis-forms")}
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

                    <FrontisForms_SwitcherControl
                        label={__("Icon Color", "frontis-forms")}
                        globalSwitcher={submitBtnIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ submitBtnIconColorSwitcher: value })}
                    />
                    
                    {submitBtnIconColorSwitcher === 'normal' && (
                        <FrontisForms_ColorControl
                            label={__("Normal Color", "frontis-forms")}
                            globalColor={submitBtnIconColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnIconColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {submitBtnIconColorSwitcher === 'hover' && (
                        <FrontisForms_ColorControl
                            label={__("Hover Color", "frontis-forms")}
                            globalColor={submitBtnIconHoverColor}
                            setGlobalColor={(value) => setAttributes({ submitBtnIconHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FrontisForms_Range
                        min={1}
                        max={submitBtnIconSizeUnits[deviceType] !== 'px' ? 100 : 100}
                        label={__("Icon Size", "frontis-forms")}
                        rangeValue={submitBtnIconSize}
                        onChangeHandler={(value) => setAttributes({ submitBtnIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ submitBtnIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={submitBtnIconSizeUnits}
                        rangeStep={1}
                        resetFallbackValue={'24'}
                    />

                    <FrontisForms_Range
                        min={1}
                        max={submitBtnIconGapUnits[deviceType] !== 'px' ? 100 : 200}
                        label={__("Icon Gap", "frontis-forms")}
                        rangeValue={submitBtnIconGap}
                        onChangeHandler={(value) => setAttributes({ submitBtnIconGap: value })}
                        rangeUnitHandler={(value) => setAttributes({ submitBtnIconGapUnits: value })}
                        deviceType={deviceType}
                        units={submitBtnIconGapUnits}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />
                </PanelBody>

                <PanelBody
                    title={__("Success Message", "frontis-forms")}
                    initialOpen={false}
                >
                    <FrontisForms_TypographyControl
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

                    <FrontisForms_ColorControl
                        label={__("Color", "frontis-forms")}
                        globalColor={successMessageColor}
                        setGlobalColor={(value) => setAttributes({ successMessageColor: value === undefined ? '' : value })}
                    />

                    <FrontisForms_BackgroundColorControl
                        label={__("Background Color", "frontis-forms")}
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
                        isBackgroundHover={false}
                    />

                    <FrontisForms_Spacing 
                        label={__("Padding", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Margin", "frontis-forms")}
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
                        label={__("Border Style", "frontis-forms")}
                        value={successMessageBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ successMessageBorder: value })}
                    />

                    <FrontisForms_ColorControl
                        label={__("Border Color", "frontis-forms")}
                        globalColor={successMessageBorderColor}
                        setGlobalColor={(value) => setAttributes({ successMessageBorderColor: value === undefined ? '' : value })}
                    />

                    <FrontisForms_Spacing 
                        label={__("Border Width", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Border Radius", "frontis-forms")}
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
                    title={__("Error Message", "frontis-forms")}
                    initialOpen={false}
                >
                    <FrontisForms_TypographyControl
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
                    
                    <FrontisForms_ColorControl
                        label={__("Color", "frontis-forms")}
                        globalColor={errorMessageColor}
                        setGlobalColor={(value) => setAttributes({ errorMessageColor: value === undefined ? '' : value })}
                    />

                    <FrontisForms_BackgroundColorControl
                        label={__("Background Color", "frontis-forms")}
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
                        isBackgroundHover={false}
                    />

                    <FrontisForms_Spacing 
                        label={__("Padding", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Margin", "frontis-forms")}
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
                        label={__("Border Style", "frontis-forms")}
                        value={errorMessageBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ errorMessageBorder: value })}
                    />
                    
                    <FrontisForms_ColorControl
                        label={__("Border Color", "frontis-forms")}
                        globalColor={errorMessageBorderColor}
                        setGlobalColor={(value) => setAttributes({ errorMessageBorderColor: value === undefined ? '' : value })}
                    />

                    <FrontisForms_Spacing 
                        label={__("Border Width", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Border Radius", "frontis-forms")}
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
                    title={__("Layout", "frontis-forms")}
                    initialOpen={true}
                    className='fb-setting-layout-header' 
                >
                    <FrontisForms_Range
                        min={0}
                        max={10000000}
                        label={__("Z Index", "frontis-forms")}
                        rangeValue={formZIndex}
                        onChangeHandler={(value) => setAttributes({ formZIndex: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}

                    />

                    <SelectControl
                        label={__("Overflow", "frontis-forms")}
                        value={formOverflow}
                        options={OVERFLOW_OP}
                        onChange={(value) => setAttributes({ formOverflow: value })}
                    />

                    <FrontisForms_PositionControl
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

                    <FrontisForms_InputControl
                        label={__("CSS ID", "frontis-forms")}
                        value={formGlobalWraperID}
                        onChangeValue={(value) => setAttributes({ formGlobalWraperID: value })}
                        helpText={__("Add an ID to the block wrapper.", "frontis-forms")}
                    />

                    <FrontisForms_InputControl
                        label={__("CSS Class", "frontis-forms")}
                        value={formGlobalWraperClass}
                        onChangeValue={(value) => setAttributes({ formGlobalWraperClass: value })}
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

                    <FrontisForms_Spacing 
                        label={__("Padding", "frontis-forms")}
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
                    <FrontisForms_BackgroundColorControl
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
                    title={__("Border & Border Radius", "frontis-forms")}
                    initialOpen={false}
                    className="fb-setting-border-setting-wrapper"
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-forms")}
                            value={formBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ formBorder: value })}
                        />

                    <FrontisForms_SwitcherControl
                        label={__("Border Color", "frontis-forms")}
                        globalSwitcher={formBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ formBorderColorSwitcher: value })}
                    />
                    
                    {formBorderColorSwitcher === 'normal' && (
                        <FrontisForms_ColorControl
                            label={__("Normal Color", "frontis-forms")}
                            globalColor={formBorderColor}
                            setGlobalColor={(value) => setAttributes({ formBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                    
                    {formBorderColorSwitcher === 'hover' && (
                        <FrontisForms_ColorControl
                            label={__("Hover Color", "frontis-forms")}
                            globalColor={formBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ formBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FrontisForms_Spacing 
                        label={__("Border", "frontis-forms")}
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

                    <FrontisForms_Spacing 
                        label={__("Border Radius", "frontis-forms")}
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

                    <FrontisForms_SwitcherControl
                        label={__("Box Shadow", "frontis-forms")}
                        globalSwitcher={formGlobalBoxShadowSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ formGlobalBoxShadowSwitcher: value })}
                    />
                    
                    {formGlobalBoxShadowSwitcher === 'normal' && (
                        <FrontisForms_BoxShadowControl
                            label={__("Normal Shadow", "frontis-forms")}
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
                        <FrontisForms_BoxShadowControl
                            label={__("Hover Shadow", "frontis-forms")}
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
                    title={__("Responsive Control", "frontis-forms")}
                    initialOpen={false}
                    className="fb-setting-responsive-control-wrapper"
                >
                    <FrontisForms_VisibilityControl
                        desktopValue={formDesktopSwitcher}
                        setDesktopValue={(value) => setAttributes({ formDesktopSwitcher: value })}

                        tabletValue={formTabletSwitcher}
                        setTabletValue={(value) => setAttributes({ formTabletSwitcher: value })}

                        mobileValue={formMobileSwitcher}
                        setMobileValue={(value) => setAttributes({ formMobileSwitcher: value })}
                    />
                </PanelBody>

                <PanelBody
                    title={__("Custom CSS", "frontis-forms")}
                    initialOpen={false}
                >
                    <FrontisForms_CustomCSSEditor  
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
            <FrontisForms_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}