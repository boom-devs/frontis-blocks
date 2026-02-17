import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    SelectControl,
    ToggleControl,
} from '@wordpress/components';

import {
    FORM_LISTS,
    BORDER_STYLES,
    WIDTH_STYLES,
    OVERFLOW_OP,
} from '@Constants/fbConstants';

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        // deviceType,
        fluentFormGlobalZIndex,
        fluentFormOverflow,
        formId,
        showLabels,
        showPlaceholder,
        showErrorMessage,

        fluentFormLabelColorSwitcher,
        fluentFormLabelColor,
        fluentFormLabelHoverColor,
        fluentFormLabelGlobalTypoSwitcher,
        fluentFormLabelGlobalTypographyData,
        fluentFormLabelGlobalTypoType,
        fluentFormLabelGlobalTypoOption,
        fluentFormLabelFontFamily,
        fluentFormLabelFontSize,
        fluentFormLabelFontSizeUnits,
        fluentFormLabelFontWeight,
        fluentFormLabelFontStyle,
        fluentFormLabelTextTransform,
        fluentFormLabelTextDecoration,
        fluentFormLabelLetterSpacing,
        fluentFormLabelLineHeight,
        fluentFormLabelLetterSpacingUnits,
        fluentFormLabelLineHeightUnits,

        fluntFromLabelMarginUnits,
        fluntFromLabelMarginDesktop,
        fluntFromLabelMarginTablet,
        fluntFromLabelMarginMobile,
        fluntFromLabelMarginLink,

        fluentFormInputBgColor,
        fluentFormInputColor,
        fluentFormInputFocusColor,
        fluentFormInputGlobalTypoSwitcher,
        fluentFormInputGlobalTypographyData,
        fluentFormInputGlobalTypoType,
        fluentFormInputGlobalTypoOption,
        fluentFormInputFontFamily,
        fluentFormInputFontSize,
        fluentFormInputFontSizeUnits,
        fluentFormInputFontWeight,
        fluentFormInputFontStyle,
        fluentFormInputTextTransform,
        fluentFormInputTextDecoration,
        fluentFormInputLetterSpacing,
        fluentFormInputLineHeight,
        fluentFormInputLetterSpacingUnits,
        fluentFormInputLineHeightUnits,

        fluentFormTextIndentSize,
        fluentFormTextIndentSizeUnits,
        fluentFormInputWidthSize,
        fluentFormInputWidthSizeUnits,
        fluentFormInputHeightSize,
        fluentFormInputHeightSizeUnits,
        fluentFormTextareaWidthSize,
        fluentFormTextareaWidthSizeUnits,
        fluentFormTextareaHeightSize,
        fluentFormTextareaHeightSizeUnits,
        fluentFormSpacingSize,
        fluentFormSpacingUnits,

        fluentFormPaddingUnits,
        fluentFormPaddingDesktop,
        fluentFormPaddingTablet,
        fluentFormPaddingMobile,
        fluentFormPaddingLink,

        fluentFormBorder,
        fluentFormBorderColor,
        fluentFormBorderUnits,
        fluentFormBorderDesktop,
        fluentFormBorderTablet,
        fluentFormBorderMobile,
        fluentFormBorderLink,
        fluentFormBorderRadiusUnits,
        fluentFormBorderRadiusDesktop,
        fluentFormBorderRadiusTablet,
        fluentFormBorderRadiusMobile,
        fluentFormBorderRadiusLink,

        fluentFormFocusBorder,
        fluentFormFocusBorderUnits,
        fluentFormFocusBorderDesktop,
        fluentFormFocusBorderTablet,
        fluentFormFocusBorderMobile,
        fluentFormFocusBorderLink,
        fluentFormFocusBorderRadiusUnits,
        fluentFormFocusBorderRadiusDesktop,
        fluentFormFocusBorderRadiusTablet,
        fluentFormFocusBorderRadiusMobile,
        fluentFormFocusBorderRadiusLink,

        fluentFormPlaceholderColor,

        fluentFormRadioFontSize,
        fluentFormRadioFontSizeUnits,
        fluentFormRadioColor,
        fluentFormRadioCheckedColor,
        fluentFormRadioBorderWidth,
        fluentFormRadioBorderWidthUnits,
        fluentFormRadioBorderColor,
        fluentFormRadioBorderRadiusUnits,
        fluentFormRadioBorderRadiusDesktop,
        fluentFormRadioBorderRadiusTablet,
        fluentFormRadioBorderRadiusMobile,
        fluentFormRadioBorderRadiusLink,
        fluentFormCheckBoxBorderRadiusUnits,
        fluentFormCheckBoxBorderRadiusDesktop,
        fluentFormCheckBoxBorderRadiusTablet,
        fluentFormCheckBoxBorderRadiusMobile,
        fluentFormCheckBoxBorderRadiusLink,
        fluentFormRadioCheckBoxItemSpacing,
        fluentFormRadioCheckBoxItemSpacingUnits,

        fluentFormSectionBreakAlignment,
        fluentFormSectionBreakTitleColorSwitcher,
        fluentFormSectionBreakTitleColor,
        fluentFormSectionBreakTitleHoverColor,
        fluentFormSectionBreakTitleGlobalTypoSwitcher,
        fluentFormSectionBreakTitleGlobalTypographyData,
        fluentFormSectionBreakTitleGlobalTypoType,
        fluentFormSectionBreakTitleGlobalTypoOption,
        fluentFormSectionBreakTitleFontFamily,
        fluentFormSectionBreakTitleFontSize,
        fluentFormSectionBreakTitleFontSizeUnits,
        fluentFormSectionBreakTitleFontWeight,
        fluentFormSectionBreakTitleFontStyle,
        fluentFormSectionBreakTitleTextTransform,
        fluentFormSectionBreakTitleTextDecoration,
        fluentFormSectionBreakTitleLetterSpacing,
        fluentFormSectionBreakTitleLetterSpacingUnits,
        fluentFormSectionBreakTitleLineHeight,
        fluentFormSectionBreakTitleLineHeightUnits,
        fluentFormSectionBreakTitlePaddingUnits,
        fluentFormSectionBreakTitlePaddingDesktop,
        fluentFormSectionBreakTitlePaddingTablet,
        fluentFormSectionBreakTitlePaddingMobile,
        fluentFormSectionBreakTitlePaddingLink,
        fluentFormSectionBreakTitleMarginUnits,
        fluentFormSectionBreakTitleMarginDesktop,
        fluentFormSectionBreakTitleMarginTablet,
        fluentFormSectionBreakTitleMarginMobile,
        fluentFormSectionBreakTitleMarginLink,

        fluentFormSectionBreakDescColorSwitcher,
        fluentFormSectionBreakDescColor,
        fluentFormSectionBreakDescHoverColor,
        fluentFormSectionBreakDescGlobalTypoSwitcher,
        fluentFormSectionBreakDescGlobalTypographyData,
        fluentFormSectionBreakDescGlobalTypoType,
        fluentFormSectionBreakDescGlobalTypoOption,
        fluentFormSectionBreakDescFontFamily,
        fluentFormSectionBreakDescFontSize,
        fluentFormSectionBreakDescFontSizeUnits,
        fluentFormSectionBreakDescFontWeight,
        fluentFormSectionBreakDescFontStyle,
        fluentFormSectionBreakDescTextTransform,
        fluentFormSectionBreakDescTextDecoration,
        fluentFormSectionBreakDescLetterSpacing,
        fluentFormSectionBreakDescLetterSpacingUnits,
        fluentFormSectionBreakDescLineHeight,
        fluentFormSectionBreakDescLineHeightUnits,
        fluentFormSectionBreakDescPaddingUnits,
        fluentFormSectionBreakDescPaddingDesktop,
        fluentFormSectionBreakDescPaddingTablet,
        fluentFormSectionBreakDescPaddingMobile,
        fluentFormSectionBreakDescPaddingLink,
        fluentFormSectionBreakDescMarginUnits,
        fluentFormSectionBreakDescMarginDesktop,
        fluentFormSectionBreakDescMarginTablet,
        fluentFormSectionBreakDescMarginMobile,
        fluentFormSectionBreakDescMarginLink,

        fluentFormHtmlAlignment,
        fluentFormHtmlColorSwitcher,
        fluentFormHtmlColor,
        fluentFormHtmlHoverColor,
        fluentFormHtmlGlobalTypoSwitcher,
        fluentFormHtmlGlobalTypographyData,
        fluentFormHtmlGlobalTypoType,
        fluentFormHtmlGlobalTypoOption,
        fluentFormHtmlFontFamily,
        fluentFormHtmlFontSize,
        fluentFormHtmlFontSizeUnits,
        fluentFormHtmlFontWeight,
        fluentFormHtmlFontStyle,
        fluentFormHtmlTextTransform,
        fluentFormHtmlTextDecoration,
        fluentFormHtmlLetterSpacing,
        fluentFormHtmlLetterSpacingUnits,
        fluentFormHtmlLineHeight,
        fluentFormHtmlLineHeightUnits,
        fluentFormHtmlPaddingUnits,
        fluentFormHtmlPaddingDesktop,
        fluentFormHtmlPaddingTablet,
        fluentFormHtmlPaddingMobile,
        fluentFormHtmlPaddingLink,
        fluentFormHtmlMarginUnits,
        fluentFormHtmlMarginDesktop,
        fluentFormHtmlMarginTablet,
        fluentFormHtmlMarginMobile,
        fluentFormHtmlMarginLink,

        fluentFormSubmitAlignment,
        fluentFormSubmitHeight,
        fluentFormSubmitHeightUnits,
        fluentFormSubmitWidthSelect,
        fluentFormSubmitWidth,
        fluentFormSubmitWidthUnits,
        fluentFormSubmitColorSwitcher,
        fluentFormSubmitColor,
        fluentFormSubmitHoverColor,
        fluentFormSubmitBgColorSwitcher,
        fluentFormSubmitBgColor,
        fluentFormSubmitBgHoverColor,
        fluentFormSubmitGlobalTypoSwitcher,
        fluentFormSubmitGlobalTypographyData,
        fluentFormSubmitGlobalTypoType,
        fluentFormSubmitGlobalTypoOption,
        fluentFormSubmitFontFamily,
        fluentFormSubmitFontSize,
        fluentFormSubmitFontSizeUnits,
        fluentFormSubmitFontWeight,
        fluentFormSubmitFontStyle,
        fluentFormSubmitTextTransform,
        fluentFormSubmitTextDecoration,
        fluentFormSubmitLetterSpacing,
        fluentFormSubmitLetterSpacingUnits,
        fluentFormSubmitLineHeight,
        fluentFormSubmitLineHeightUnits,
        fluentFormSubmitPaddingUnits,
        fluentFormSubmitPaddingDesktop,
        fluentFormSubmitPaddingTablet,
        fluentFormSubmitPaddingMobile,
        fluentFormSubmitPaddingLink,
        fluentFormSubmitMarginUnits,
        fluentFormSubmitMarginDesktop,
        fluentFormSubmitMarginTablet,
        fluentFormSubmitMarginMobile,
        fluentFormSubmitMarginLink,
        fluentFormSubmitBorder,
        fluentFormSubmitBorderColorSwitcher,
        fluentFormSubmitBorderColor,
        fluentFormSubmitBorderHoverColor,
        fluentFormSubmitBorderUnits,
        fluentFormSubmitBorderDesktop,
        fluentFormSubmitBorderTablet,
        fluentFormSubmitBorderMobile,
        fluentFormSubmitBorderLink,
        fluentFormSubmitBorderRadiusUnits,
        fluentFormSubmitBorderRadiusDesktop,
        fluentFormSubmitBorderRadiusTablet,
        fluentFormSubmitBorderRadiusMobile,
        fluentFormSubmitBorderRadiusLink,

        fluentFormSuccessColor,
        fluentFormSuccessBgColor,
        fluentFormSuccessGlobalTypoSwitcher,
        fluentFormSuccessGlobalTypographyData,
        fluentFormSuccessGlobalTypoType,
        fluentFormSuccessGlobalTypoOption,
        fluentFormSuccessFontFamily,
        fluentFormSuccessFontSize,
        fluentFormSuccessFontSizeUnits,
        fluentFormSuccessFontWeight,
        fluentFormSuccessFontStyle,
        fluentFormSuccessTextTransform,
        fluentFormSuccessTextDecoration,
        fluentFormSuccessLetterSpacing,
        fluentFormSuccessLetterSpacingUnits,
        fluentFormSuccessLineHeight,
        fluentFormSuccessLineHeightUnits,
        fluentFormSuccessBorder,
        fluentFormSuccessBorderColorSwitcher,
        fluentFormSuccessBorderColor,
        fluentFormSuccessBorderHoverColor,
        fluentFormSuccessBorderUnits,
        fluentFormSuccessBorderDesktop,
        fluentFormSuccessBorderTablet,
        fluentFormSuccessBorderMobile,
        fluentFormSuccessBorderLink,
        fluentFormSuccessBorderRadiusUnits,
        fluentFormSuccessBorderRadiusDesktop,
        fluentFormSuccessBorderRadiusTablet,
        fluentFormSuccessBorderRadiusMobile,
        fluentFormSuccessBorderRadiusLink,

        fluentFormErrorColor,
        fluentFormErrorGlobalTypoSwitcher,
        fluentFormErrorGlobalTypographyData,
        fluentFormErrorGlobalTypoType,
        fluentFormErrorGlobalTypoOption,
        fluentFormErrorFontFamily,
        fluentFormErrorFontSize,
        fluentFormErrorFontSizeUnits,
        fluentFormErrorFontWeight,
        fluentFormErrorFontStyle,
        fluentFormErrorTextTransform,
        fluentFormErrorTextDecoration,
        fluentFormErrorLetterSpacing,
        fluentFormErrorLetterSpacingUnits,
        fluentFormErrorLineHeight,
        fluentFormErrorLineHeightUnits,
        fluentFormErrorPaddingUnits,
        fluentFormErrorPaddingDesktop,
        fluentFormErrorPaddingTablet,
        fluentFormErrorPaddingMobile,
        fluentFormErrorPaddingLink,
        fluentFormErrorMarginUnits,
        fluentFormErrorMarginDesktop,
        fluentFormErrorMarginTablet,
        fluentFormErrorMarginMobile,
        fluentFormErrorMarginLink,

        fluentFormGlobalPaddingUnits,
        fluentFormGlobalPaddingDesktop,
        fluentFormGlobalPaddingTablet,
        fluentFormGlobalPaddingMobile,
        fluentFormGlobalPaddingLink,
        fluentFormGlobalMarginUnits,
        fluentFormGlobalMarginDesktop,
        fluentFormGlobalMarginTablet,
        fluentFormGlobalMarginMobile,
        fluentFormGlobalMarginLink,
        fluentFormGlobalBgColorSwitcher,
        fluentFormGlobalBgColor,
        fluentFormGlobalBgHoverColor,
        fluentFormGlobalBorder,
        fluentFormGlobalBorderColorSwitcher,
        fluentFormGlobalBorderColor,
        fluentFormGlobalBorderHoverColor,
        fluentFormGlobalBorderUnits,
        fluentFormGlobalBorderDesktop,
        fluentFormGlobalBorderTablet,
        fluentFormGlobalBorderMobile,
        fluentFormGlobalBorderLink,
        fluentFormGlobalBorderRadiusUnits,
        fluentFormGlobalBorderRadiusDesktop,
        fluentFormGlobalBorderRadiusTablet,
        fluentFormGlobalBorderRadiusMobile,
        fluentFormGlobalBorderRadiusLink,

        fluentFormGlobalBoxShadowSwitcher,
        fluentFormGlobalBoxShadowValues,
        fluentFormGlobalBoxShadowCssValue,
        fluentFormGlobalBoxShadowHoverValues,
        fluentFormGlobalBoxShadowHoverCssValue,

        fluentFormDesktopSwitcher,
		fluentFormTabletSwitcher,
		fluentFormMobileSwitcher,

        fluentFormGlobalWraperCustomCSS,
        fluentFormGlobalWraperID,
        fluentFormGlobalWraperClass,

        // Position
        fluentFormPositionType,
        fluentFormHZOrientationType,
        fluentFormVROrientationType,
        fluentFormHZLeftOffset,
        fluentFormHZLeftOffsetUnits,
        fluentFormHZRightOffset,
        fluentFormHZRightOffsetUnits,
        fluentFormVRTopOffset,
        fluentFormVRTopOffsetUnits,
        fluentFormVRBottomOffset,
        fluentFormVRBottomOffsetUnits,
    } = attributes;

	const deviceType= useDeviceType();

    /** Start  Label Margin */
    const handleLabelMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluntFromLabelMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluntFromLabelMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluntFromLabelMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluntFromLabelMarginMobile: {
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
                    setAttributes( {fluntFromLabelMarginDesktop: {...fluntFromLabelMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluntFromLabelMarginTablet: {...fluntFromLabelMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluntFromLabelMarginMobile: {...fluntFromLabelMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleLabelMarginCombineBtn = () => {
        setAttributes( {fluntFromLabelMarginLink: !fluntFromLabelMarginLink} );
    }

    const handleLabelMarginUnitsHandler = (unit) => {
        setAttributes( {
            fluntFromLabelMarginUnits: {
                ...fluntFromLabelMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** end  Label Margin */ 
    /** End Label Margin */ 

    /** Start  padding */
    const handlePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormPaddingMobile: {
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
                    setAttributes( {fluentFormPaddingDesktop: {...fluentFormPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormPaddingTablet: {...fluentFormPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormPaddingMobile: {...fluentFormPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handlePaddingCombineBtn = () => {
        setAttributes( {fluentFormPaddingLink: !fluentFormPaddingLink} );
    }

    const handlePaddingUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormPaddingUnits: {
                ...fluentFormPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** end  padding */
    /** End Padding */


    /** Start  border */
    const handleBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormBorderMobile: {
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
                    setAttributes( {fluentFormBorderDesktop: {...fluentFormBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormBorderTablet: {...fluentFormBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormBorderMobile: {...fluentFormBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleBorderCombineBtn = () => {
        setAttributes( {fluentFormBorderLink: !fluentFormBorderLink} );
    }

    const handleBorderUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormBorderUnits: {
                ...fluentFormBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End  border */
    /** End Border */


    /** Start  border radius*/
    const handleBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormBorderRadiusMobile: {
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
                    setAttributes( {fluentFormBorderRadiusDesktop: {...fluentFormBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormBorderRadiusTablet: {...fluentFormBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormBorderRadiusMobile: {...fluentFormBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleBorderRadiusCombineBtn = () => {
        setAttributes( {fluentFormBorderRadiusLink: !fluentFormBorderRadiusLink} );
    }

    const handleBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormBorderRadiusUnits: {
                ...fluentFormBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end  border */
    /** End  Border Radius */
    /** End Border Radius */


    /** Start  Focus Border */
    const handleFocusBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormFocusBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormFocusBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormFocusBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormFocusBorderMobile: {
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
                    setAttributes( {fluentFormFocusBorderDesktop: {...fluentFormFocusBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormFocusBorderTablet: {...fluentFormFocusBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormFocusBorderMobile: {...fluentFormFocusBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleFocusBorderCombineBtn = () => {
        setAttributes( {fluentFormFocusBorderLink: !fluentFormFocusBorderLink} );
    }

    const handleFocusBorderUnitsHandler = (unit) => { 
        setAttributes( {
            fluentFormFocusBorderUnits: {
                ...fluentFormFocusBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End  border */
    /** End Border */

    /** Start  border radius*/
    const handleFocusBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormFocusBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormFocusBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormFocusBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormFocusBorderRadiusMobile: {
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
                    setAttributes( {fluentFormFocusBorderRadiusDesktop: {...fluentFormFocusBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormFocusBorderRadiusTablet: {...fluentFormFocusBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormFocusBorderRadiusMobile: {...fluentFormFocusBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleFocusBorderRadiusCombineBtn = () => {
        setAttributes( {fluentFormFocusBorderRadiusLink: !fluentFormFocusBorderRadiusLink} );
    }

    const handleFocusBorderRadiusUnitsHandler = (unit) => { 
        setAttributes( {
            fluentFormFocusBorderRadiusUnits: {
                ...fluentFormFocusBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Focus Border */
    /** End Focus Border Radius */
    /** End Focus Border Radius */

    /** Start Radio border radius*/
    const fluentFormRadioBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormRadioBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormRadioBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormRadioBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormRadioBorderRadiusMobile: {
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
                    setAttributes( {fluentFormRadioBorderRadiusDesktop: {...fluentFormRadioBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormRadioBorderRadiusTablet: {...fluentFormRadioBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormRadioBorderRadiusMobile: {...fluentFormRadioBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const fluentFormRadioBorderRadiusCombineBtn = () => {
        setAttributes( {fluentFormRadioBorderRadiusLink: !fluentFormRadioBorderRadiusLink} );
    }

    const fluentFormRadioBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormRadioBorderRadiusUnits: {
                ...fluentFormRadioBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Radio border */
    /** End Radio Border Radius */
    /** End Radio Border Radius */

    /** Start Radio border radius*/
    const fluentFormCheckBoxBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormCheckBoxBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormCheckBoxBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormCheckBoxBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormCheckBoxBorderRadiusMobile: {
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
                    setAttributes( {fluentFormCheckBoxBorderRadiusDesktop: {...fluentFormCheckBoxBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormCheckBoxBorderRadiusTablet: {...fluentFormCheckBoxBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormCheckBoxBorderRadiusMobile: {...fluentFormCheckBoxBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const fluentFormCheckBoxBorderRadiusCombineBtn = () => {
        setAttributes( {fluentFormCheckBoxBorderRadiusLink: !fluentFormCheckBoxBorderRadiusLink} );
    }

    const fluentFormCheckBoxBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormCheckBoxBorderRadiusUnits: {
                ...fluentFormCheckBoxBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Radio border */
    /** End Radio Border Radius */
    /** End Radio Border Radius */

    /** Start Section Break Title padding */
    const fluentFormSectionBreakTitlePaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSectionBreakTitlePaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSectionBreakTitlePaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSectionBreakTitlePaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSectionBreakTitlePaddingMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormSectionBreakTitlePaddingDesktop: {...fluentFormSectionBreakTitlePaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSectionBreakTitlePaddingTablet: {...fluentFormSectionBreakTitlePaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSectionBreakTitlePaddingMobile: {...fluentFormSectionBreakTitlePaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSectionBreakTitlePaddingLinkBtn = () => {
        setAttributes({
            fluentFormSectionBreakTitlePaddingLink: !fluentFormSectionBreakTitlePaddingLink
        });
    };

    const fluentFormSectionBreakTitlePaddingUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSectionBreakTitlePaddingUnits: {
                ...fluentFormSectionBreakTitlePaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Section Break Title padding */

    /** Start Section Break Title Margin */
    const fluentFormSectionBreakTitleMarginUnitsChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormSectionBreakTitleMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormSectionBreakTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormSectionBreakTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormSectionBreakTitleMarginMobile: {
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
                    setAttributes( {fluentFormSectionBreakTitleMarginDesktop: {...fluentFormSectionBreakTitleMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSectionBreakTitleMarginTablet: {...fluentFormSectionBreakTitleMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSectionBreakTitleMarginMobile: {...fluentFormSectionBreakTitleMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSectionBreakTitleMarginLinkBtn = () => {
        setAttributes( {
            fluentFormSectionBreakTitleMarginLink: !fluentFormSectionBreakTitleMarginLink
        } );
    };

    const fluentFormSectionBreakTitleMarginUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormSectionBreakTitleMarginUnits: {
                ...fluentFormSectionBreakTitleMarginUnits,
                [deviceType]: unit
            }
        } );
    };
    /** End Section Break Title Margin */

    /** Start Section Break Description padding */
    const fluentFormSectionBreakDescPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSectionBreakDescPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSectionBreakDescPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSectionBreakDescPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSectionBreakDescPaddingMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormSectionBreakDescPaddingDesktop: {...fluentFormSectionBreakDescPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSectionBreakDescPaddingTablet: {...fluentFormSectionBreakDescPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSectionBreakDescPaddingMobile: {...fluentFormSectionBreakDescPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSectionBreakDescPaddingLinkBtn = () => {
        setAttributes({
            fluentFormSectionBreakDescPaddingLink: !fluentFormSectionBreakDescPaddingLink
        });
    };

    const fluentFormSectionBreakDescPaddingUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSectionBreakDescPaddingUnits: {
                ...fluentFormSectionBreakDescPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Section Break Description padding */

    /** Start Section Break Description Margin */
    const fluentFormSectionBreakDescMarginUnitsChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormSectionBreakDescMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormSectionBreakDescMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormSectionBreakDescMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormSectionBreakDescMarginMobile: {
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
                    setAttributes( {fluentFormSectionBreakDescMarginDesktop: {...fluentFormSectionBreakDescMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSectionBreakDescMarginTablet: {...fluentFormSectionBreakDescMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSectionBreakDescMarginMobile: {...fluentFormSectionBreakDescMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSectionBreakDescMarginLinkBtn = () => {
        setAttributes( {
            fluentFormSectionBreakDescMarginLink: !fluentFormSectionBreakDescMarginLink
        } );
    };

    const fluentFormSectionBreakDescMarginUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormSectionBreakDescMarginUnits: {
                ...fluentFormSectionBreakDescMarginUnits,
                [deviceType]: unit
            }
        } );
    };
    /** End Section Break Description Margin */


    /** Start HTML padding */
    const fluentFormHtmlPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormHtmlPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormHtmlPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormHtmlPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormHtmlPaddingMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormHtmlPaddingDesktop: {...fluentFormHtmlPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormHtmlPaddingTablet: {...fluentFormHtmlPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormHtmlPaddingMobile: {...fluentFormHtmlPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormHtmlPaddingLinkBtn = () => {
        setAttributes({
            fluentFormHtmlPaddingLink: !fluentFormHtmlPaddingLink
        });
    };

    const fluentFormHtmlPaddingUnitsHandler = (unit) => {
        setAttributes({
            fluentFormHtmlPaddingUnits: {
                ...fluentFormHtmlPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End HTML padding */

    /** Start HTML Margin */
    const fluentFormHtmlMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormHtmlMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormHtmlMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormHtmlMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormHtmlMarginMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormHtmlMarginDesktop: {...fluentFormHtmlMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormHtmlMarginTablet: {...fluentFormHtmlMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormHtmlMarginMobile: {...fluentFormHtmlMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormHtmlMarginLinkBtn = () => {
        setAttributes({
            fluentFormHtmlMarginLink: !fluentFormHtmlMarginLink
        });
    };

    const fluentFormHtmlMarginUnitsHandler = (unit) => {
        setAttributes({
            fluentFormHtmlMarginUnits: {
                ...fluentFormHtmlMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End HTML Margin */



    /** Start Submit Padding */
    const fluentFormSubmitPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSubmitPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSubmitPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSubmitPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSubmitPaddingMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormSubmitPaddingDesktop: {...fluentFormSubmitPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSubmitPaddingTablet: {...fluentFormSubmitPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSubmitPaddingMobile: {...fluentFormSubmitPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSubmitPaddingLinkBtn = () => {
        setAttributes({
            fluentFormSubmitPaddingLink: !fluentFormSubmitPaddingLink
        });
    };

    const fluentFormSubmitPaddingUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSubmitPaddingUnits: {
                ...fluentFormSubmitPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Submit Padding */

    /** Start Margin */
    const fluentFormSubmitMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSubmitMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSubmitMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSubmitMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSubmitMarginMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormSubmitMarginDesktop: {...fluentFormSubmitMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSubmitMarginTablet: {...fluentFormSubmitMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSubmitMarginMobile: {...fluentFormSubmitMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSubmitMarginLinkBtn = () => {
        setAttributes({
            fluentFormSubmitMarginLink: !fluentFormSubmitMarginLink
        });
    };

    const fluentFormSubmitMarginUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSubmitMarginUnits: {
                ...fluentFormSubmitMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Submit Margin */

    /** Start Submit Border */
    const fluentFormSubmitBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSubmitBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSubmitBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSubmitBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSubmitBorderMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormSubmitBorderDesktop: {...fluentFormSubmitBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSubmitBorderTablet: {...fluentFormSubmitBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSubmitBorderMobile: {...fluentFormSubmitBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSubmitBorderLinkBtn = () => {
        setAttributes({
            fluentFormSubmitBorderLink: !fluentFormSubmitBorderLink
        });
    };

    const fluentFormSubmitBorderUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSubmitBorderUnits: {
                ...fluentFormSubmitBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Submit Border */

    /** Start Submit Border Radius */
    const fluentFormSubmitBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSubmitBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSubmitBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSubmitBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSubmitBorderRadiusMobile: {
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
                    setAttributes({ fluentFormSubmitBorderRadiusDesktop: { ...fluentFormSubmitBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fluentFormSubmitBorderRadiusTablet: { ...fluentFormSubmitBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fluentFormSubmitBorderRadiusMobile: { ...fluentFormSubmitBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSubmitBorderRadiusLinkBtn = () => {
        setAttributes({
            fluentFormSubmitBorderRadiusLink: !fluentFormSubmitBorderRadiusLink
        });
    };

    const fluentFormSubmitBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSubmitBorderRadiusUnits: {
                ...fluentFormSubmitBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Submit Border Radius */

    /** Start Success Border */
    const fluentFormSuccessBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSuccessBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSuccessBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSuccessBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSuccessBorderMobile: {
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
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {fluentFormSuccessBorderDesktop: {...fluentFormSuccessBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormSuccessBorderTablet: {...fluentFormSuccessBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormSuccessBorderMobile: {...fluentFormSuccessBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSuccessBorderLinkBtn = () => {
        setAttributes({
            fluentFormSuccessBorderLink: !fluentFormSuccessBorderLink
        });
    };

    const fluentFormSuccessBorderUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSuccessBorderUnits: {
                ...fluentFormSuccessBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Success Border */

    /** Start Success Border Radius */
    const fluentFormSuccessBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormSuccessBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormSuccessBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormSuccessBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormSuccessBorderRadiusMobile: {
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
                    setAttributes({ fluentFormSuccessBorderRadiusDesktop: { ...fluentFormSuccessBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fluentFormSuccessBorderRadiusTablet: { ...fluentFormSuccessBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fluentFormSuccessBorderRadiusMobile: { ...fluentFormSuccessBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormSuccessBorderRadiusLinkBtn = () => {
        setAttributes({
            fluentFormSuccessBorderRadiusLink: !fluentFormSuccessBorderRadiusLink
        });
    };

    const fluentFormSuccessBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            fluentFormSuccessBorderRadiusUnits: {
                ...fluentFormSuccessBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Success Border Radius */

    /** Start Error Padding */
    const fluentFormErrorPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormErrorPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormErrorPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormErrorPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormErrorPaddingMobile: {
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
                    setAttributes({ fluentFormErrorPaddingDesktop: { ...fluentFormErrorPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fluentFormErrorPaddingTablet: { ...fluentFormErrorPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fluentFormErrorPaddingMobile: { ...fluentFormErrorPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormErrorPaddingLinkBtn = () => {
        setAttributes({
            fluentFormErrorPaddingLink: !fluentFormErrorPaddingLink
        });
    };

    const fluentFormErrorPaddingUnitsHandler = (unit) => {
        setAttributes({
            fluentFormErrorPaddingUnits: {
                ...fluentFormErrorPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Error Padding */

    /** Start Error Margin */
    const fluentFormErrorMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (fluentFormErrorMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        fluentFormErrorMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        fluentFormErrorMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        fluentFormErrorMarginMobile: {
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
                    setAttributes({ fluentFormErrorMarginDesktop: { ...fluentFormErrorMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ fluentFormErrorMarginTablet: { ...fluentFormErrorMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ fluentFormErrorMarginMobile: { ...fluentFormErrorMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const fluentFormErrorMarginLinkBtn = () => {
        setAttributes({
            fluentFormErrorMarginLink: !fluentFormErrorMarginLink
        });
    };

    const fluentFormErrorMarginUnitsHandler = (unit) => {
        setAttributes({
            fluentFormErrorMarginUnits: {
                ...fluentFormErrorMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Error Margin */


    /** Start Global padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalPaddingMobile: {
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
                    setAttributes( {fluentFormGlobalPaddingDesktop: {...fluentFormGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalPaddingTablet: {...fluentFormGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalPaddingMobile: {...fluentFormGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {fluentFormGlobalPaddingLink: !fluentFormGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalPaddingUnits: {
                ...fluentFormGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global padding */
    /** End Padding */

    /** Start Global margin */
    const handleGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalMarginMobile: {
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
                    setAttributes( {fluentFormGlobalMarginDesktop: {...fluentFormGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalMarginTablet: {...fluentFormGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalMarginMobile: {...fluentFormGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {fluentFormGlobalMarginLink: !fluentFormGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalMarginUnits: {
                ...fluentFormGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global margin */
    /** End Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalBorderMobile: {
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
                    setAttributes( {fluentFormGlobalBorderDesktop: {...fluentFormGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalBorderTablet: {...fluentFormGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalBorderMobile: {...fluentFormGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {fluentFormGlobalBorderLink: !fluentFormGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalBorderUnits: {
                ...fluentFormGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global border */
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        fluentFormGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        fluentFormGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        fluentFormGlobalBorderRadiusMobile: {
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
                    setAttributes( {fluentFormGlobalBorderRadiusDesktop: {...fluentFormGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {fluentFormGlobalBorderRadiusTablet: {...fluentFormGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {fluentFormGlobalBorderRadiusMobile: {...fluentFormGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {fluentFormGlobalBorderRadiusLink: !fluentFormGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            fluentFormGlobalBorderRadiusUnits: {
                ...fluentFormGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */
    /** End Global Border Radius */
    /** End Border Radius */

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody title={__("Fluent Form", "frontis-blocks")} initialOpen={true}>
                <BaseControl className="fb-fluent-from" >
                    <SelectControl
                        label={__("Select Form", "frontis-blocks")}
                        value={formId}
                        options={FORM_LISTS}
                        onChange={(newFormId) =>
                            setAttributes({ formId: newFormId })
                        }
                    />

                    <ToggleControl
                        label={__("Show Labels", "frontis-blocks")}
                        checked={showLabels}
                        onChange={(showLabels) =>
                            setAttributes({ showLabels })
                        }
                    />
                    <ToggleControl
                        label={__("Show Placeholder", "frontis-blocks")}
                        checked={showPlaceholder}
                        onChange={(showPlaceholder) =>
                            setAttributes({
                                showPlaceholder,
                            })
                        }
                    />
                    <ToggleControl
                        label={__("Show Error Message", "frontis-blocks")}
                        checked={showErrorMessage}
                        onChange={(showErrorMessage) =>
                            setAttributes({
                                showErrorMessage,
                            })
                        }
                    />

                </BaseControl>
            </PanelBody>

        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody title={__("Label", "frontis-blocks")} initialOpen={true}>


                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={fluentFormLabelColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ fluentFormLabelColorSwitcher: value })}
                />

                {fluentFormLabelColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={fluentFormLabelColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormLabelColor: value === undefined ? '' : value })}
                    />
                )}

                {fluentFormLabelColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={fluentFormLabelHoverColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormLabelHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={fluentFormLabelGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ fluentFormLabelGlobalTypographyData: value })}

                    globalTypoType={fluentFormLabelGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            fluentFormLabelGlobalTypoType: value, 
                            fluentFormLabelGlobalTypoSwitcher: value === 'default' ? {...fluentFormLabelGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormLabelGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={fluentFormLabelGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormLabelGlobalTypoOption: value })}

                    fontFamily={fluentFormLabelFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ fluentFormLabelFontFamily: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={fluentFormLabelFontSize}
                    onChangeFontSize={(value) => setAttributes({ fluentFormLabelFontSize: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={fluentFormLabelFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ fluentFormLabelFontSizeUnits: value })}

                    fontWeight={fluentFormLabelFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ fluentFormLabelFontWeight: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={fluentFormLabelFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ fluentFormLabelFontStyle: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={fluentFormLabelTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ fluentFormLabelTextTransform: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={fluentFormLabelTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ fluentFormLabelTextDecoration: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={fluentFormLabelLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ fluentFormLabelLetterSpacing: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={fluentFormLabelLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormLabelLetterSpacingUnits: value })}

                    lineHeight={fluentFormLabelLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ fluentFormLabelLineHeight: value, fluentFormLabelGlobalTypoSwitcher: {...fluentFormLabelGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={fluentFormLabelLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ fluentFormLabelLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleLabelMarginUnitsHandler} 
                    spacingUnits={fluntFromLabelMarginUnits}
                    spacingDesktop={fluntFromLabelMarginDesktop}
                    spacingTablet={fluntFromLabelMarginTablet}
                    spacingMobile={fluntFromLabelMarginMobile}
                    handleSpacingUnitHandler={handleLabelMarginUnitChange}
                    spacingCombineBtn={fluntFromLabelMarginLink}
                    spacingCombineBtnHandler={handleLabelMarginCombineBtn} 
                    setAttributes={setAttributes}
                />
            </PanelBody>
            <PanelBody title={__("Input & Textarea", "frontis-blocks")} initialOpen={false}>

                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    globalColor={fluentFormInputBgColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormInputBgColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Color", "frontis-blocks")}
                    globalColor={fluentFormInputColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormInputColor: value === undefined ? '' : value })}
                />


                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={fluentFormInputGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ fluentFormInputGlobalTypographyData: value })}

                    globalTypoType={fluentFormInputGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            fluentFormInputGlobalTypoType: value, 
                            fluentFormInputGlobalTypoSwitcher: value === 'default' ? {...fluentFormInputGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormInputGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={fluentFormInputGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormInputGlobalTypoOption: value })}

                    fontFamily={fluentFormInputFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ fluentFormInputFontFamily: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={fluentFormInputFontSize}
                    onChangeFontSize={(value) => setAttributes({ fluentFormInputFontSize: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={fluentFormInputFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ fluentFormInputFontSizeUnits: value })}

                    fontWeight={fluentFormInputFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ fluentFormInputFontWeight: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={fluentFormInputFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ fluentFormInputFontStyle: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={fluentFormInputTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ fluentFormInputTextTransform: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={fluentFormInputTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ fluentFormInputTextDecoration: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={fluentFormInputLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ fluentFormInputLetterSpacing: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={fluentFormInputLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormInputLetterSpacingUnits: value })}

                    lineHeight={fluentFormInputLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ fluentFormInputLineHeight: value, fluentFormInputGlobalTypoSwitcher: {...fluentFormInputGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={fluentFormInputLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ fluentFormInputLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Text Indent", "frontis-blocks")}
                    rangeValue={fluentFormTextIndentSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormTextIndentSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormTextIndentSizeUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormTextIndentSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={2000}
                    label={__("Input Width", "frontis-blocks")}
                    rangeValue={fluentFormInputWidthSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormInputWidthSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormInputWidthSizeUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormInputWidthSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={2000}
                    label={__("Input Height", "frontis-blocks")}
                    rangeValue={fluentFormInputHeightSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormInputHeightSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormInputHeightSizeUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormInputHeightSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={2000}
                    label={__("Textarea Width", "frontis-blocks")}
                    rangeValue={fluentFormTextareaWidthSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormTextareaWidthSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormTextareaWidthSizeUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormTextareaWidthSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={2000}
                    label={__("Textarea Height", "frontis-blocks")}
                    rangeValue={fluentFormTextareaHeightSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormTextareaHeightSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormTextareaHeightSizeUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormTextareaHeightSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={1000}
                    label={__("Spacing", "frontis-blocks")}
                    rangeValue={fluentFormSpacingSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormSpacingSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormSpacingUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormSpacingUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePaddingUnitsHandler}
                    spacingUnits={fluentFormPaddingUnits}
                    spacingDesktop={fluentFormPaddingDesktop}
                    spacingTablet={fluentFormPaddingTablet}
                    spacingMobile={fluentFormPaddingMobile}
                    handleSpacingUnitHandler={handlePaddingUnitChange}
                    spacingCombineBtn={fluentFormPaddingLink}
                    spacingCombineBtnHandler={handlePaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={fluentFormBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ fluentFormBorder: value })}
                />

                <FB_ColorControl
                    label={__("Border Color", "frontis-blocks")}
                    globalColor={fluentFormBorderColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormBorderColor: value === undefined ? '' : value })}
                />

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleBorderUnitsHandler}
                    spacingUnits={fluentFormBorderUnits}
                    spacingDesktop={fluentFormBorderDesktop}
                    spacingTablet={fluentFormBorderTablet}
                    spacingMobile={fluentFormBorderMobile}
                    handleSpacingUnitHandler={handleBorderUnitChange}
                    spacingCombineBtn={fluentFormBorderLink}
                    spacingCombineBtnHandler={handleBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Radius Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleBorderRadiusUnitsHandler}
                    spacingUnits={fluentFormBorderRadiusUnits}
                    spacingDesktop={fluentFormBorderRadiusDesktop}
                    spacingTablet={fluentFormBorderRadiusTablet}
                    spacingMobile={fluentFormBorderRadiusMobile}
                    handleSpacingUnitHandler={handleBorderRadiusUnitChange}
                    spacingCombineBtn={fluentFormBorderRadiusLink}
                    spacingCombineBtnHandler={handleBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                        label={__("Focus Border Style", "frontis-blocks")}
                        value={fluentFormFocusBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ fluentFormFocusBorder: value })}
                />

                <FB_ColorControl
                    label={__("Focus Color", "frontis-blocks")}
                    globalColor={fluentFormInputFocusColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormInputFocusColor: value === undefined ? '' : value })}
                />

                <FB_Spacing 
                    label={__("Focus Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFocusBorderUnitsHandler}
                    spacingUnits={fluentFormFocusBorderUnits}
                    spacingDesktop={fluentFormFocusBorderDesktop}
                    spacingTablet={fluentFormFocusBorderTablet}
                    spacingMobile={fluentFormFocusBorderMobile}
                    handleSpacingUnitHandler={handleFocusBorderUnitChange}
                    spacingCombineBtn={fluentFormFocusBorderLink}
                    spacingCombineBtnHandler={handleFocusBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Focus Radius Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFocusBorderRadiusUnitsHandler}
                    spacingUnits={fluentFormFocusBorderRadiusUnits}
                    spacingDesktop={fluentFormFocusBorderRadiusDesktop}
                    spacingTablet={fluentFormFocusBorderRadiusTablet}
                    spacingMobile={fluentFormFocusBorderRadiusMobile}
                    handleSpacingUnitHandler={handleFocusBorderRadiusUnitChange}
                    spacingCombineBtn={fluentFormFocusBorderRadiusLink}
                    spacingCombineBtnHandler={handleFocusBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />


            </PanelBody>
            <PanelBody title={__("Placeholder", "frontis-blocks")} initialOpen={false}>
                <FB_ColorControl
                    label={__("Color", "frontis-blocks")}
                    globalColor={fluentFormPlaceholderColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormPlaceholderColor: value === undefined ? '' : value })}
                />
            </PanelBody>
            <PanelBody title={__("Radio & Checkbox", "frontis-blocks")} initialOpen={false}>
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Size", "frontis-blocks")}
                    rangeValue={fluentFormRadioFontSize}
                    onChangeHandler={(value) => setAttributes({ fluentFormRadioFontSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormRadioFontSizeUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormRadioFontSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <FB_ColorControl
                    label={__("Normal Color", "frontis-blocks")}
                    globalColor={fluentFormRadioColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormRadioColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Checked Color", "frontis-blocks")}
                    globalColor={fluentFormRadioCheckedColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormRadioCheckedColor: value === undefined ? '' : value })}
                />

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Border Width", "frontis-blocks")}
                    rangeValue={fluentFormRadioBorderWidth}
                    onChangeHandler={(value) => setAttributes({ fluentFormRadioBorderWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormRadioBorderWidthUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormRadioBorderWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <FB_ColorControl
                    label={__("Border Color", "frontis-blocks")}
                    globalColor={fluentFormRadioBorderColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormRadioBorderColor: value === undefined ? '' : value })}
                />

                <FB_Spacing 
                    label={__("Radio Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormRadioBorderRadiusUnitsHandler}
                    spacingUnits={fluentFormRadioBorderRadiusUnits}
                    spacingDesktop={fluentFormRadioBorderRadiusDesktop}
                    spacingTablet={fluentFormRadioBorderRadiusTablet}
                    spacingMobile={fluentFormRadioBorderRadiusMobile}
                    handleSpacingUnitHandler={fluentFormRadioBorderRadiusUnitChange}
                    spacingCombineBtn={fluentFormGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={fluentFormRadioBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Checkbox Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormCheckBoxBorderRadiusUnitsHandler}
                    spacingUnits={fluentFormCheckBoxBorderRadiusUnits}
                    spacingDesktop={fluentFormCheckBoxBorderRadiusDesktop}
                    spacingTablet={fluentFormCheckBoxBorderRadiusTablet}
                    spacingMobile={fluentFormCheckBoxBorderRadiusMobile}
                    handleSpacingUnitHandler={fluentFormCheckBoxBorderRadiusUnitChange}
                    spacingCombineBtn={fluentFormGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={fluentFormCheckBoxBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Item Spacing", "frontis-blocks")}
                    rangeValue={fluentFormRadioCheckBoxItemSpacing}
                    onChangeHandler={(value) => setAttributes({ fluentFormRadioCheckBoxItemSpacing: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormRadioCheckBoxItemSpacingUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormRadioCheckBoxItemSpacingUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
            </PanelBody>
            <PanelBody title={__("Section break", "frontis-blocks")} initialOpen={false}>

                    <FB_AlignmentControl
                        label={__("Alignment", "frontis-blocks")}
                        globalAlignment={fluentFormSectionBreakAlignment}
                        setGlobalAlignment={(value) => setAttributes({ fluentFormSectionBreakAlignment: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Title Color", "frontis-blocks")}
                        globalSwitcher={fluentFormSectionBreakTitleColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ fluentFormSectionBreakTitleColorSwitcher: value })}
                    />

                    {fluentFormSectionBreakTitleColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={fluentFormSectionBreakTitleColor}
                            setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakTitleColor: value === undefined ? '' : value })}
                        />
                    )}

                    {fluentFormSectionBreakTitleColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={fluentFormSectionBreakTitleHoverColor}
                            setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakTitleHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={fluentFormSectionBreakTitleGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ fluentFormSectionBreakTitleGlobalTypographyData: value })}

                        globalTypoType={fluentFormSectionBreakTitleGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                fluentFormSectionBreakTitleGlobalTypoType: value, 
                                fluentFormSectionBreakTitleGlobalTypoSwitcher: value === 'default' ? {...fluentFormSectionBreakTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormSectionBreakTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={fluentFormSectionBreakTitleGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormSectionBreakTitleGlobalTypoOption: value })}

                        fontFamily={fluentFormSectionBreakTitleFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ fluentFormSectionBreakTitleFontFamily: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={fluentFormSectionBreakTitleFontSize}
                        onChangeFontSize={(value) => setAttributes({ fluentFormSectionBreakTitleFontSize: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={fluentFormSectionBreakTitleFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSectionBreakTitleFontSizeUnits: value })}

                        fontWeight={fluentFormSectionBreakTitleFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ fluentFormSectionBreakTitleFontWeight: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={fluentFormSectionBreakTitleFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ fluentFormSectionBreakTitleFontStyle: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={fluentFormSectionBreakTitleTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ fluentFormSectionBreakTitleTextTransform: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={fluentFormSectionBreakTitleTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ fluentFormSectionBreakTitleTextDecoration: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={fluentFormSectionBreakTitleLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ fluentFormSectionBreakTitleLetterSpacing: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={fluentFormSectionBreakTitleLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSectionBreakTitleLetterSpacingUnits: value })}

                        lineHeight={fluentFormSectionBreakTitleLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ fluentFormSectionBreakTitleLineHeight: value, fluentFormSectionBreakTitleGlobalTypoSwitcher: {...fluentFormSectionBreakTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={fluentFormSectionBreakTitleLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ fluentFormSectionBreakTitleLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={fluentFormSectionBreakTitlePaddingUnitsHandler}
                        spacingUnits={fluentFormSectionBreakTitlePaddingUnits}
                        spacingDesktop={fluentFormSectionBreakTitlePaddingDesktop}
                        spacingTablet={fluentFormSectionBreakTitlePaddingTablet}
                        spacingMobile={fluentFormSectionBreakTitlePaddingMobile}
                        handleSpacingUnitHandler={fluentFormSectionBreakTitlePaddingUnitsChange}
                        spacingCombineBtn={fluentFormSectionBreakTitlePaddingLink}
                        spacingCombineBtnHandler={fluentFormSectionBreakTitlePaddingLinkBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={fluentFormSectionBreakTitleMarginUnitsHandler}
                        spacingUnits={fluentFormSectionBreakTitleMarginUnits}
                        spacingDesktop={fluentFormSectionBreakTitleMarginDesktop}
                        spacingTablet={fluentFormSectionBreakTitleMarginTablet}
                        spacingMobile={fluentFormSectionBreakTitleMarginMobile}
                        handleSpacingUnitHandler={fluentFormSectionBreakTitleMarginUnitsChange}
                        spacingCombineBtn={fluentFormSectionBreakTitleMarginLink}
                        spacingCombineBtnHandler={fluentFormSectionBreakTitleMarginLinkBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Description Color", "frontis-blocks")}
                        globalSwitcher={fluentFormSectionBreakDescColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ fluentFormSectionBreakDescColorSwitcher: value })}
                    />

                    {fluentFormSectionBreakDescColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={fluentFormSectionBreakDescColor}
                            setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakDescColor: value === undefined ? '' : value })}
                        />
                    )}

                    {fluentFormSectionBreakDescColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={fluentFormSectionBreakDescHoverColor}
                            setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakDescHoverColor: value === undefined ? '' : value })}
                        />
                    )}


                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={fluentFormSectionBreakDescGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ fluentFormSectionBreakDescGlobalTypographyData: value })}

                        globalTypoType={fluentFormSectionBreakDescGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                fluentFormSectionBreakDescGlobalTypoType: value, 
                                fluentFormSectionBreakDescGlobalTypoSwitcher: value === 'default' ? {...fluentFormSectionBreakDescGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormSectionBreakDescGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={fluentFormSectionBreakDescGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormSectionBreakDescGlobalTypoOption: value })}

                        fontFamily={fluentFormSectionBreakDescFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ fluentFormSectionBreakDescFontFamily: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={fluentFormSectionBreakDescFontSize}
                        onChangeFontSize={(value) => setAttributes({ fluentFormSectionBreakDescFontSize: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={fluentFormSectionBreakDescFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSectionBreakDescFontSizeUnits: value })}

                        fontWeight={fluentFormSectionBreakDescFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ fluentFormSectionBreakDescFontWeight: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={fluentFormSectionBreakDescFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ fluentFormSectionBreakDescFontStyle: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={fluentFormSectionBreakDescTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ fluentFormSectionBreakDescTextTransform: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={fluentFormSectionBreakDescTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ fluentFormSectionBreakDescTextDecoration: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={fluentFormSectionBreakDescLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ fluentFormSectionBreakDescLetterSpacing: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={fluentFormSectionBreakDescLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSectionBreakDescLetterSpacingUnits: value })}

                        lineHeight={fluentFormSectionBreakDescLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ fluentFormSectionBreakDescLineHeight: value, fluentFormSectionBreakDescGlobalTypoSwitcher: {...fluentFormSectionBreakDescGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={fluentFormSectionBreakDescLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ fluentFormSectionBreakDescLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={fluentFormSectionBreakDescPaddingUnitsHandler}
                        spacingUnits={fluentFormSectionBreakDescPaddingUnits}
                        spacingDesktop={fluentFormSectionBreakDescPaddingDesktop}
                        spacingTablet={fluentFormSectionBreakDescPaddingTablet}
                        spacingMobile={fluentFormSectionBreakDescPaddingMobile}
                        handleSpacingUnitHandler={fluentFormSectionBreakDescPaddingUnitsChange}
                        spacingCombineBtn={fluentFormSectionBreakDescPaddingLink}
                        spacingCombineBtnHandler={fluentFormSectionBreakDescPaddingLinkBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={fluentFormSectionBreakDescMarginUnitsHandler}
                        spacingUnits={fluentFormSectionBreakDescMarginUnits}
                        spacingDesktop={fluentFormSectionBreakDescMarginDesktop}
                        spacingTablet={fluentFormSectionBreakDescMarginTablet}
                        spacingMobile={fluentFormSectionBreakDescMarginMobile}
                        handleSpacingUnitHandler={fluentFormSectionBreakDescMarginUnitsChange}
                        spacingCombineBtn={fluentFormSectionBreakDescMarginLink}
                        spacingCombineBtnHandler={fluentFormSectionBreakDescMarginLinkBtn}
                        setAttributes={setAttributes}
                    />


            </PanelBody>
            <PanelBody title={__("Custom HTML", "frontis-blocks")} initialOpen={false}>

                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={fluentFormHtmlAlignment}
                    setGlobalAlignment={(value) => setAttributes({ fluentFormHtmlAlignment: value })}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={fluentFormHtmlColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ fluentFormHtmlColorSwitcher: value })}
                />

                {fluentFormHtmlColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={fluentFormHtmlColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormHtmlColor: value === undefined ? '' : value })}
                    />
                )}

                {fluentFormHtmlColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={fluentFormHtmlHoverColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormHtmlHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={fluentFormHtmlGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ fluentFormHtmlGlobalTypographyData: value })}

                    globalTypoType={fluentFormHtmlGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            fluentFormHtmlGlobalTypoType: value, 
                            fluentFormHtmlGlobalTypoSwitcher: value === 'default' ? {...fluentFormHtmlGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormHtmlGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={fluentFormHtmlGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormHtmlGlobalTypoOption: value })}

                    fontFamily={fluentFormHtmlFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ fluentFormHtmlFontFamily: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={fluentFormHtmlFontSize}
                    onChangeFontSize={(value) => setAttributes({ fluentFormHtmlFontSize: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={fluentFormHtmlFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ fluentFormHtmlFontSizeUnits: value })}

                    fontWeight={fluentFormHtmlFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ fluentFormHtmlFontWeight: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={fluentFormHtmlFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ fluentFormHtmlFontStyle: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={fluentFormHtmlTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ fluentFormHtmlTextTransform: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={fluentFormHtmlTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ fluentFormHtmlTextDecoration: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={fluentFormHtmlLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ fluentFormHtmlLetterSpacing: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={fluentFormHtmlLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormHtmlLetterSpacingUnits: value })}

                    lineHeight={fluentFormHtmlLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ fluentFormHtmlLineHeight: value, fluentFormHtmlGlobalTypoSwitcher: {...fluentFormHtmlGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={fluentFormHtmlLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ fluentFormHtmlLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormHtmlPaddingUnitsHandler}
                    spacingUnits={fluentFormHtmlPaddingUnits}
                    spacingDesktop={fluentFormHtmlPaddingDesktop}
                    spacingTablet={fluentFormHtmlPaddingTablet}
                    spacingMobile={fluentFormHtmlPaddingMobile}
                    handleSpacingUnitHandler={fluentFormHtmlPaddingUnitsChange}
                    spacingCombineBtn={fluentFormHtmlPaddingLink}
                    spacingCombineBtnHandler={fluentFormHtmlPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormHtmlMarginUnitsHandler}
                    spacingUnits={fluentFormHtmlMarginUnits}
                    spacingDesktop={fluentFormHtmlMarginDesktop}
                    spacingTablet={fluentFormHtmlMarginTablet}
                    spacingMobile={fluentFormHtmlMarginMobile}
                    handleSpacingUnitHandler={fluentFormHtmlMarginUnitsChange}
                    spacingCombineBtn={fluentFormHtmlMarginLink}
                    spacingCombineBtnHandler={fluentFormHtmlMarginLinkBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>
            <PanelBody title={__("Submit", "frontis-blocks")} initialOpen={false}>

                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={fluentFormSubmitAlignment}
                    setGlobalAlignment={(value) => setAttributes({ fluentFormSubmitAlignment: value })}
                />

                <FB_Range
                    min={1}
                    max={2000}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={fluentFormSubmitHeight}
                    onChangeHandler={(value) => setAttributes({ fluentFormSubmitHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ fluentFormSubmitHeightUnits: value })}
                    deviceType={deviceType}
                    units={fluentFormSubmitHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
                
                <SelectControl
                    label={__("Width", "frontis-blocks")}
                    value={fluentFormSubmitWidthSelect}
                    options={WIDTH_STYLES}
                    onChange={(value) => setAttributes({ fluentFormSubmitWidthSelect: value })}
                />
                {fluentFormSubmitWidthSelect === 'custom' && (
                    <FB_Range
                        min={1}
                        max={2000}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={fluentFormSubmitWidth}
                        onChangeHandler={(value) => setAttributes({ fluentFormSubmitWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ fluentFormSubmitWidthUnits: value })}
                        deviceType={deviceType}
                        units={fluentFormSubmitWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={''}
                    />
                )}


                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={fluentFormSubmitGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ fluentFormSubmitGlobalTypographyData: value })}

                    globalTypoType={fluentFormSubmitGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            fluentFormSubmitGlobalTypoType: value, 
                            fluentFormSubmitGlobalTypoSwitcher: value === 'default' ? {...fluentFormSubmitGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormSubmitGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={fluentFormSubmitGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormSubmitGlobalTypoOption: value })}

                    fontFamily={fluentFormSubmitFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ fluentFormSubmitFontFamily: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={fluentFormSubmitFontSize}
                    onChangeFontSize={(value) => setAttributes({ fluentFormSubmitFontSize: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={fluentFormSubmitFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSubmitFontSizeUnits: value })}

                    fontWeight={fluentFormSubmitFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ fluentFormSubmitFontWeight: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={fluentFormSubmitFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ fluentFormSubmitFontStyle: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={fluentFormSubmitTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ fluentFormSubmitTextTransform: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={fluentFormSubmitTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ fluentFormSubmitTextDecoration: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={fluentFormSubmitLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ fluentFormSubmitLetterSpacing: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={fluentFormSubmitLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSubmitLetterSpacingUnits: value })}

                    lineHeight={fluentFormSubmitLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ fluentFormSubmitLineHeight: value, fluentFormSubmitGlobalTypoSwitcher: {...fluentFormSubmitGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={fluentFormSubmitLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ fluentFormSubmitLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={fluentFormSubmitColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ fluentFormSubmitColorSwitcher: value })}
                />

                {fluentFormSubmitColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={fluentFormSubmitColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSubmitColor: value === undefined ? '' : value })}
                    />
                )}

                {fluentFormSubmitColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={fluentFormSubmitHoverColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSubmitHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={fluentFormSubmitBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ fluentFormSubmitBgColorSwitcher: value })}
                />

                {fluentFormSubmitBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={fluentFormSubmitBgColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSubmitBgColor: value === undefined ? '' : value })}
                    />
                )}

                {fluentFormSubmitBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={fluentFormSubmitBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSubmitBgHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormSubmitPaddingUnitsHandler}
                    spacingUnits={fluentFormSubmitPaddingUnits}
                    spacingDesktop={fluentFormSubmitPaddingDesktop}
                    spacingTablet={fluentFormSubmitPaddingTablet}
                    spacingMobile={fluentFormSubmitPaddingMobile}
                    handleSpacingUnitHandler={fluentFormSubmitPaddingUnitsChange}
                    spacingCombineBtn={fluentFormSubmitPaddingLink}
                    spacingCombineBtnHandler={fluentFormSubmitPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormSubmitMarginUnitsHandler}
                    spacingUnits={fluentFormSubmitMarginUnits}
                    spacingDesktop={fluentFormSubmitMarginDesktop}
                    spacingTablet={fluentFormSubmitMarginTablet}
                    spacingMobile={fluentFormSubmitMarginMobile}
                    handleSpacingUnitHandler={fluentFormSubmitMarginUnitsChange}
                    spacingCombineBtn={fluentFormSubmitMarginLink}
                    spacingCombineBtnHandler={fluentFormSubmitMarginLinkBtn}
                    setAttributes={setAttributes}
                />
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={fluentFormSubmitBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ fluentFormSubmitBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={fluentFormSubmitBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ fluentFormSubmitBorderColorSwitcher: value })}
                />

                {fluentFormSubmitBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={fluentFormSubmitBorderColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSubmitBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {fluentFormSubmitBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={fluentFormSubmitBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSubmitBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormSubmitBorderUnitsHandler}
                    spacingUnits={fluentFormSubmitBorderUnits}
                    spacingDesktop={fluentFormSubmitBorderDesktop}
                    spacingTablet={fluentFormSubmitBorderTablet}
                    spacingMobile={fluentFormSubmitBorderMobile}
                    handleSpacingUnitHandler={fluentFormSubmitBorderUnitsChange}
                    spacingCombineBtn={fluentFormSubmitBorderLink}
                    spacingCombineBtnHandler={fluentFormSubmitBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormSubmitBorderRadiusUnitsHandler}
                    spacingUnits={fluentFormSubmitBorderRadiusUnits}
                    spacingDesktop={fluentFormSubmitBorderRadiusDesktop}
                    spacingTablet={fluentFormSubmitBorderRadiusTablet}
                    spacingMobile={fluentFormSubmitBorderRadiusMobile}
                    handleSpacingUnitHandler={fluentFormSubmitBorderRadiusUnitsChange}
                    spacingCombineBtn={fluentFormSubmitBorderRadiusLink}
                    spacingCombineBtnHandler={fluentFormSubmitBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />


            </PanelBody>
            <PanelBody title={__("Success Message", "frontis-blocks")} initialOpen={false}>


            <FB_TypographyControl
                globalTypoControlActive={true}
                globalTypoSwitcher={fluentFormSuccessGlobalTypoSwitcher}
                storeGlobalTypographyData={(value) => setAttributes({ fluentFormSuccessGlobalTypographyData: value })}

                globalTypoType={fluentFormSuccessGlobalTypoType}
                onChangeGlobalTypoType={(value) => {
                    setAttributes({ 
                        fluentFormSuccessGlobalTypoType: value, 
                        fluentFormSuccessGlobalTypoSwitcher: value === 'default' ? {...fluentFormSuccessGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormSuccessGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                    })
                }}

                globalTypoOption={fluentFormSuccessGlobalTypoOption}
                onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormSuccessGlobalTypoOption: value })}

                fontFamily={fluentFormSuccessFontFamily}
                onChangeFontFamily={(value) => setAttributes({ fluentFormSuccessFontFamily: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, fontFamily: value && false} })}

                fontSize={fluentFormSuccessFontSize}
                onChangeFontSize={(value) => setAttributes({ fluentFormSuccessFontSize: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, fontSize: value && false} })}

                fontSizeUnits={fluentFormSuccessFontSizeUnits}
                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSuccessFontSizeUnits: value })}

                fontWeight={fluentFormSuccessFontWeight}
                onChangeFontWeight={(value) => setAttributes({ fluentFormSuccessFontWeight: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, fontWeight: value && false} })}

                fontStyle={fluentFormSuccessFontStyle}
                onChangeFontStyle={(value) => setAttributes({ fluentFormSuccessFontStyle: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, fontStyle: value && false} })}

                textTransform={fluentFormSuccessTextTransform}
                onChangeTextTransform={(value) => setAttributes({ fluentFormSuccessTextTransform: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, textTransform: value && false} })}

                textDecoration={fluentFormSuccessTextDecoration}
                onChangeTextDecoration={(value) => setAttributes({ fluentFormSuccessTextDecoration: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, textDecoration: value && false} })}

                letterSpacing={fluentFormSuccessLetterSpacing}
                onChangeLetterSpacing={(value) => setAttributes({ fluentFormSuccessLetterSpacing: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, letterSpacing: value && false} })}

                letterSpacingUnits={fluentFormSuccessLetterSpacingUnits}
                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSuccessLetterSpacingUnits: value })}

                lineHeight={fluentFormSuccessLineHeight}
                onChangeLineHeight={(value) => setAttributes({ fluentFormSuccessLineHeight: value, fluentFormSuccessGlobalTypoSwitcher: {...fluentFormSuccessGlobalTypoSwitcher, lineHeight: value && false} })}

                lineHeightUnits={fluentFormSuccessLineHeightUnits}
                onChangeLineHeightUnit={(value) => setAttributes({ fluentFormSuccessLineHeightUnits: value })}

                deviceType={deviceType}
                setAttributes={setAttributes}
            />

                <FB_ColorControl
                    label={__("Color", "frontis-blocks")}
                    globalColor={fluentFormSuccessColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormSuccessColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    globalColor={fluentFormSuccessBgColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormSuccessBgColor: value === undefined ? '' : value })}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={fluentFormSuccessBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ fluentFormSuccessBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={fluentFormSuccessBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ fluentFormSuccessBorderColorSwitcher: value })}
                />

                {fluentFormSuccessBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={fluentFormSuccessBorderColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSuccessBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {fluentFormSuccessBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={fluentFormSuccessBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ fluentFormSuccessBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormSuccessBorderUnitsHandler}
                    spacingUnits={fluentFormSuccessBorderUnits}
                    spacingDesktop={fluentFormSuccessBorderDesktop}
                    spacingTablet={fluentFormSuccessBorderTablet}
                    spacingMobile={fluentFormSuccessBorderMobile}
                    handleSpacingUnitHandler={fluentFormSuccessBorderUnitsChange}
                    spacingCombineBtn={fluentFormSuccessBorderLink}
                    spacingCombineBtnHandler={fluentFormSuccessBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormSuccessBorderRadiusUnitsHandler}
                    spacingUnits={fluentFormSuccessBorderRadiusUnits}
                    spacingDesktop={fluentFormSuccessBorderRadiusDesktop}
                    spacingTablet={fluentFormSuccessBorderRadiusTablet}
                    spacingMobile={fluentFormSuccessBorderRadiusMobile}
                    handleSpacingUnitHandler={fluentFormSuccessBorderRadiusUnitsChange}
                    spacingCombineBtn={fluentFormSuccessBorderRadiusLink}
                    spacingCombineBtnHandler={fluentFormSuccessBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
            <PanelBody title={__("Error Message", "frontis-blocks")} initialOpen={false}>


            <FB_TypographyControl
                globalTypoControlActive={true}
                globalTypoSwitcher={fluentFormErrorGlobalTypoSwitcher}
                storeGlobalTypographyData={(value) => setAttributes({ fluentFormErrorGlobalTypographyData: value })}

                globalTypoType={fluentFormErrorGlobalTypoType}
                onChangeGlobalTypoType={(value) => {
                    setAttributes({ 
                        fluentFormErrorGlobalTypoType: value, 
                        fluentFormErrorGlobalTypoSwitcher: value === 'default' ? {...fluentFormErrorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...fluentFormErrorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                    })
                }}

                globalTypoOption={fluentFormErrorGlobalTypoOption}
                onChangeGlobalTypoOption={(value) => setAttributes({ fluentFormErrorGlobalTypoOption: value })}

                fontFamily={fluentFormErrorFontFamily}
                onChangeFontFamily={(value) => setAttributes({ fluentFormErrorFontFamily: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, fontFamily: value && false} })}

                fontSize={fluentFormErrorFontSize}
                onChangeFontSize={(value) => setAttributes({ fluentFormErrorFontSize: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, fontSize: value && false} })}

                fontSizeUnits={fluentFormErrorFontSizeUnits}
                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormErrorFontSizeUnits: value })}

                fontWeight={fluentFormErrorFontWeight}
                onChangeFontWeight={(value) => setAttributes({ fluentFormErrorFontWeight: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, fontWeight: value && false} })}

                fontStyle={fluentFormErrorFontStyle}
                onChangeFontStyle={(value) => setAttributes({ fluentFormErrorFontStyle: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, fontStyle: value && false} })}

                textTransform={fluentFormErrorTextTransform}
                onChangeTextTransform={(value) => setAttributes({ fluentFormErrorTextTransform: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, textTransform: value && false} })}

                textDecoration={fluentFormErrorTextDecoration}
                onChangeTextDecoration={(value) => setAttributes({ fluentFormErrorTextDecoration: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, textDecoration: value && false} })}

                letterSpacing={fluentFormErrorLetterSpacing}
                onChangeLetterSpacing={(value) => setAttributes({ fluentFormErrorLetterSpacing: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, letterSpacing: value && false} })}

                letterSpacingUnits={fluentFormErrorLetterSpacingUnits}
                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormErrorLetterSpacingUnits: value })}

                lineHeight={fluentFormErrorLineHeight}
                onChangeLineHeight={(value) => setAttributes({ fluentFormErrorLineHeight: value, fluentFormErrorGlobalTypoSwitcher: {...fluentFormErrorGlobalTypoSwitcher, lineHeight: value && false} })}

                lineHeightUnits={fluentFormErrorLineHeightUnits}
                onChangeLineHeightUnit={(value) => setAttributes({ fluentFormErrorLineHeightUnits: value })}

                deviceType={deviceType}
                setAttributes={setAttributes}
            />

                <FB_ColorControl
                    label={__("Color", "frontis-blocks")}
                    globalColor={fluentFormErrorColor}
                    setGlobalColor={(value) => setAttributes({ fluentFormErrorColor: value === undefined ? '' : value })}
                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormErrorPaddingUnitsHandler}
                    spacingUnits={fluentFormErrorPaddingUnits}
                    spacingDesktop={fluentFormErrorPaddingDesktop}
                    spacingTablet={fluentFormErrorPaddingTablet}
                    spacingMobile={fluentFormErrorPaddingMobile}
                    handleSpacingUnitHandler={fluentFormErrorPaddingUnitsChange}
                    spacingCombineBtn={fluentFormErrorPaddingLink}
                    spacingCombineBtnHandler={fluentFormErrorPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={fluentFormErrorMarginUnitsHandler}
                    spacingUnits={fluentFormErrorMarginUnits}
                    spacingDesktop={fluentFormErrorMarginDesktop}
                    spacingTablet={fluentFormErrorMarginTablet}
                    spacingMobile={fluentFormErrorMarginMobile}
                    handleSpacingUnitHandler={fluentFormErrorMarginUnitsChange}
                    spacingCombineBtn={fluentFormErrorMarginLink}
                    spacingCombineBtnHandler={fluentFormErrorMarginLinkBtn}
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
                            rangeValue={fluentFormGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ fluentFormGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={fluentFormOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ fluentFormOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={fluentFormPositionType}
                            setPositionType={(value) => setAttributes({ fluentFormPositionType: value })}
                                                                            
                            HZOrientationType={fluentFormHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ fluentFormHZOrientationType: value })
                            }
                            VROrientationType={fluentFormVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ fluentFormVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={fluentFormHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ fluentFormHZLeftOffset: value })}
                            HZLeftOffsetUnits={fluentFormHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ fluentFormHZLeftOffsetUnits: value })}
                            HZRightOffset={fluentFormHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ fluentFormHZRightOffset: value })}
                            HZRightOffsetUnits={fluentFormHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ fluentFormHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={fluentFormVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ fluentFormVRTopOffset: value })}
                            VRTopOffsetUnits={fluentFormVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ fluentFormVRTopOffsetUnits: value })}
                            VRBottomOffset={fluentFormVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ fluentFormVRBottomOffset: value })}
                            VRBottomOffsetUnits={fluentFormVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ fluentFormVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={fluentFormGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ fluentFormGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={fluentFormGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ fluentFormGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                        
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={fluentFormGlobalPaddingUnits}
                            spacingDesktop={fluentFormGlobalPaddingDesktop}
                            spacingTablet={fluentFormGlobalPaddingTablet}
                            spacingMobile={fluentFormGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={fluentFormGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing 
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={fluentFormGlobalMarginUnits}
                            spacingDesktop={fluentFormGlobalMarginDesktop}
                            spacingTablet={fluentFormGlobalMarginTablet}
                            spacingMobile={fluentFormGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={fluentFormGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody title="Background Color" initialOpen={false} >
                        <FB_SwitcherControl
                            label={__("Background Color", "frontis-blocks")}
                            globalSwitcher={fluentFormGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fluentFormGlobalBgColorSwitcher: value })}
                        />

                        {fluentFormGlobalBgColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={fluentFormGlobalBgColor}
                                setGlobalColor={(value) => setAttributes({ fluentFormGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {fluentFormGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={fluentFormGlobalBgHoverColor}
                                setGlobalColor={(value) => setAttributes({ fluentFormGlobalBgHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={fluentFormGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ fluentFormGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={fluentFormGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fluentFormGlobalBorderColorSwitcher: value })}
                        />

                        {fluentFormGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={fluentFormGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ fluentFormGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {fluentFormGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={fluentFormGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ fluentFormGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={fluentFormGlobalBorderUnits}
                            spacingDesktop={fluentFormGlobalBorderDesktop}
                            spacingTablet={fluentFormGlobalBorderTablet}
                            spacingMobile={fluentFormGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={fluentFormGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={fluentFormGlobalBorderRadiusUnits}
                            spacingDesktop={fluentFormGlobalBorderRadiusDesktop}
                            spacingTablet={fluentFormGlobalBorderRadiusTablet}
                            spacingMobile={fluentFormGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={fluentFormGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={fluentFormGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ fluentFormGlobalBoxShadowSwitcher: value })}
                        />

                        {fluentFormGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ fluentFormGlobalBoxShadowValues: value })}
                                initialShadowValue={fluentFormGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ fluentFormGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {fluentFormGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ fluentFormGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={fluentFormGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ fluentFormGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={fluentFormDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ fluentFormDesktopSwitcher: value })}

                            tabletValue={fluentFormTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ fluentFormTabletSwitcher: value })}

                            mobileValue={fluentFormMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ fluentFormMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={fluentFormGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ fluentFormGlobalWraperCustomCSS: value })}
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