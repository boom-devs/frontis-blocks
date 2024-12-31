import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    Dropdown,
    RangeControl,
    SelectControl,
    Dashicon,
    ColorPicker,
    TextControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components';

import {
    FORM_LISTS,
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
    FONT_FAMILYS,
    WIDTH_STYLES,
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import loadGoogleFont from '@Utils/loadGoogleFont';
import {useDeviceType} from "@Config/displayType";

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        // deviceType,
        fluentFormGlobalZIndex,
        formId,
        showLabels,
        showPlaceholder,
        showErrorMessage,

        fluentFormLabelColorSwitcher,
        fluentFormLabelColor,
        fluentFormLabelHoverColor,
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

        fluentFormInputBgColor,
        fluentFormInputColor,
        fluentFormInputFocusColor,
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

        blockStyle,

    } = attributes;

	const deviceType= useDeviceType();
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-fluent-form-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

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


    /** Default padding for desktop (using desktop_padding) */
    const fluentFormDesktopPadding    = `${fluentFormPaddingDesktop.top}${fluentFormPaddingUnits.Desktop} ${fluentFormPaddingDesktop.right}${fluentFormPaddingUnits.Desktop} ${fluentFormPaddingDesktop.bottom}${fluentFormPaddingUnits.Desktop} ${fluentFormPaddingDesktop.left}${fluentFormPaddingUnits.Desktop}`;
    const fluentFormTabletPadding     = `${fluentFormPaddingTablet.top}${fluentFormPaddingUnits.Tablet} ${fluentFormPaddingTablet.right}${fluentFormPaddingUnits.Tablet} ${fluentFormPaddingTablet.bottom}${fluentFormPaddingUnits.Tablet} ${fluentFormPaddingTablet.left}${fluentFormPaddingUnits.Tablet}`;
    const fluentFormMobilePadding     = `${fluentFormPaddingMobile.top}${fluentFormPaddingUnits.Mobile} ${fluentFormPaddingMobile.right}${fluentFormPaddingUnits.Mobile} ${fluentFormPaddingMobile.bottom}${fluentFormPaddingUnits.Mobile} ${fluentFormPaddingMobile.left}${fluentFormPaddingUnits.Mobile}`;
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
    const fluentFormBorderDesktopWidth = `${fluentFormBorderDesktop.top}${fluentFormBorderUnits.Desktop} ${fluentFormBorderDesktop.right}${fluentFormBorderUnits.Desktop} ${fluentFormBorderDesktop.bottom}${fluentFormBorderUnits.Desktop} ${fluentFormBorderDesktop.left}${fluentFormBorderUnits.Desktop}`;
    const fluentFormBorderTabletWidth = `${fluentFormBorderTablet.top}${fluentFormBorderUnits.Tablet} ${fluentFormBorderTablet.right}${fluentFormBorderUnits.Tablet} ${fluentFormBorderTablet.bottom}${fluentFormBorderUnits.Tablet} ${fluentFormBorderTablet.left}${fluentFormBorderUnits.Tablet}`;
    const fluentFormBorderMobileWidth = `${fluentFormBorderMobile.top}${fluentFormBorderUnits.Mobile} ${fluentFormBorderMobile.right}${fluentFormBorderUnits.Mobile} ${fluentFormBorderMobile.bottom}${fluentFormBorderUnits.Mobile} ${fluentFormBorderMobile.left}${fluentFormBorderUnits.Mobile}`;
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
    const fluentFormBorderRadiusDesktopWidth = `${fluentFormBorderRadiusDesktop.top}${fluentFormBorderRadiusUnits.Desktop} ${fluentFormBorderRadiusDesktop.right}${fluentFormBorderRadiusUnits.Desktop} ${fluentFormBorderRadiusDesktop.bottom}${fluentFormBorderRadiusUnits.Desktop} ${fluentFormBorderRadiusDesktop.left}${fluentFormBorderRadiusUnits.Desktop}`;
    const fluentFormBorderRadiusTabletWidth = `${fluentFormBorderRadiusTablet.top}${fluentFormBorderRadiusUnits.Tablet} ${fluentFormBorderRadiusTablet.right}${fluentFormBorderRadiusUnits.Tablet} ${fluentFormBorderRadiusTablet.bottom}${fluentFormBorderRadiusUnits.Tablet} ${fluentFormBorderRadiusTablet.left}${fluentFormBorderRadiusUnits.Tablet}`;
    const fluentFormBorderRadiusMobileWidth = `${fluentFormBorderRadiusMobile.top}${fluentFormBorderRadiusUnits.Mobile} ${fluentFormBorderRadiusMobile.right}${fluentFormBorderRadiusUnits.Mobile} ${fluentFormBorderRadiusMobile.bottom}${fluentFormBorderRadiusUnits.Mobile} ${fluentFormBorderRadiusMobile.left}${fluentFormBorderRadiusUnits.Mobile}`;
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
    const fluentFormFocusBorderDesktopWidth = `${fluentFormFocusBorderDesktop.top}${fluentFormFocusBorderUnits.Desktop} ${fluentFormFocusBorderDesktop.right}${fluentFormFocusBorderUnits.Desktop} ${fluentFormFocusBorderDesktop.bottom}${fluentFormFocusBorderUnits.Desktop} ${fluentFormFocusBorderDesktop.left}${fluentFormFocusBorderUnits.Desktop}`;
    const fluentFormFocusBorderTabletWidth = `${fluentFormFocusBorderTablet.top}${fluentFormFocusBorderUnits.Tablet} ${fluentFormFocusBorderTablet.right}${fluentFormFocusBorderUnits.Tablet} ${fluentFormFocusBorderTablet.bottom}${fluentFormFocusBorderUnits.Tablet} ${fluentFormFocusBorderTablet.left}${fluentFormFocusBorderUnits.Tablet}`;
    const fluentFormFocusBorderMobileWidth = `${fluentFormFocusBorderMobile.top}${fluentFormFocusBorderUnits.Mobile} ${fluentFormFocusBorderMobile.right}${fluentFormFocusBorderUnits.Mobile} ${fluentFormFocusBorderMobile.bottom}${fluentFormFocusBorderUnits.Mobile} ${fluentFormFocusBorderMobile.left}${fluentFormFocusBorderUnits.Mobile}`;
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
    const fluentFormFocusBorderRadiusDesktopWidth = `${fluentFormFocusBorderRadiusDesktop.top}${fluentFormFocusBorderRadiusUnits.Desktop} ${fluentFormFocusBorderRadiusDesktop.right}${fluentFormFocusBorderRadiusUnits.Desktop} ${fluentFormFocusBorderRadiusDesktop.bottom}${fluentFormFocusBorderRadiusUnits.Desktop} ${fluentFormFocusBorderRadiusDesktop.left}${fluentFormFocusBorderRadiusUnits.Desktop}`;
    const fluentFormFocusBorderRadiusTabletWidth = `${fluentFormFocusBorderRadiusTablet.top}${fluentFormFocusBorderRadiusUnits.Tablet} ${fluentFormFocusBorderRadiusTablet.right}${fluentFormFocusBorderRadiusUnits.Tablet} ${fluentFormFocusBorderRadiusTablet.bottom}${fluentFormFocusBorderRadiusUnits.Tablet} ${fluentFormFocusBorderRadiusTablet.left}${fluentFormFocusBorderRadiusUnits.Tablet}`;
    const fluentFormFocusBorderRadiusMobileWidth = `${fluentFormFocusBorderRadiusMobile.top}${fluentFormFocusBorderRadiusUnits.Mobile} ${fluentFormFocusBorderRadiusMobile.right}${fluentFormFocusBorderRadiusUnits.Mobile} ${fluentFormFocusBorderRadiusMobile.bottom}${fluentFormFocusBorderRadiusUnits.Mobile} ${fluentFormFocusBorderRadiusMobile.left}${fluentFormFocusBorderRadiusUnits.Mobile}`;
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
    const fluentFormRadioBorderRadiusDesktopWidth = `${fluentFormRadioBorderRadiusDesktop.top}${fluentFormRadioBorderRadiusUnits.Desktop} ${fluentFormRadioBorderRadiusDesktop.right}${fluentFormRadioBorderRadiusUnits.Desktop} ${fluentFormRadioBorderRadiusDesktop.bottom}${fluentFormRadioBorderRadiusUnits.Desktop} ${fluentFormRadioBorderRadiusDesktop.left}${fluentFormRadioBorderRadiusUnits.Desktop}`;
    const fluentFormRadioBorderRadiusTabletWidth = `${fluentFormRadioBorderRadiusTablet.top}${fluentFormRadioBorderRadiusUnits.Tablet} ${fluentFormRadioBorderRadiusTablet.right}${fluentFormRadioBorderRadiusUnits.Tablet} ${fluentFormRadioBorderRadiusTablet.bottom}${fluentFormRadioBorderRadiusUnits.Tablet} ${fluentFormRadioBorderRadiusTablet.left}${fluentFormRadioBorderRadiusUnits.Tablet}`;
    const fluentFormRadioBorderRadiusMobileWidth = `${fluentFormRadioBorderRadiusMobile.top}${fluentFormRadioBorderRadiusUnits.Mobile} ${fluentFormRadioBorderRadiusMobile.right}${fluentFormRadioBorderRadiusUnits.Mobile} ${fluentFormRadioBorderRadiusMobile.bottom}${fluentFormRadioBorderRadiusUnits.Mobile} ${fluentFormRadioBorderRadiusMobile.left}${fluentFormRadioBorderRadiusUnits.Mobile}`;
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
    const fluentFormCheckBoxBorderRadiusDesktopWidth = `${fluentFormCheckBoxBorderRadiusDesktop.top}${fluentFormCheckBoxBorderRadiusUnits.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop.right}${fluentFormCheckBoxBorderRadiusUnits.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop.bottom}${fluentFormCheckBoxBorderRadiusUnits.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop.left}${fluentFormCheckBoxBorderRadiusUnits.Desktop}`;
    const fluentFormCheckBoxBorderRadiusTabletWidth = `${fluentFormCheckBoxBorderRadiusTablet.top}${fluentFormCheckBoxBorderRadiusUnits.Tablet} ${fluentFormCheckBoxBorderRadiusTablet.right}${fluentFormCheckBoxBorderRadiusUnits.Tablet} ${fluentFormCheckBoxBorderRadiusTablet.bottom}${fluentFormCheckBoxBorderRadiusUnits.Tablet} ${fluentFormCheckBoxBorderRadiusTablet.left}${fluentFormCheckBoxBorderRadiusUnits.Tablet}`;
    const fluentFormCheckBoxBorderRadiusMobileWidth = `${fluentFormCheckBoxBorderRadiusMobile.top}${fluentFormCheckBoxBorderRadiusUnits.Mobile} ${fluentFormCheckBoxBorderRadiusMobile.right}${fluentFormCheckBoxBorderRadiusUnits.Mobile} ${fluentFormCheckBoxBorderRadiusMobile.bottom}${fluentFormCheckBoxBorderRadiusUnits.Mobile} ${fluentFormCheckBoxBorderRadiusMobile.left}${fluentFormCheckBoxBorderRadiusUnits.Mobile}`;
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

    /** Default padding for Section Break Title */
    const fluentFormSectionBreakTitleDesktopPadding = `${fluentFormSectionBreakTitlePaddingDesktop.top}${fluentFormSectionBreakTitlePaddingUnits.Desktop} ${fluentFormSectionBreakTitlePaddingDesktop.right}${fluentFormSectionBreakTitlePaddingUnits.Desktop} ${fluentFormSectionBreakTitlePaddingDesktop.bottom}${fluentFormSectionBreakTitlePaddingUnits.Desktop} ${fluentFormSectionBreakTitlePaddingDesktop.left}${fluentFormSectionBreakTitlePaddingUnits.Desktop}`;
    const fluentFormSectionBreakTitleTabletPadding = `${fluentFormSectionBreakTitlePaddingTablet.top}${fluentFormSectionBreakTitlePaddingUnits.Tablet} ${fluentFormSectionBreakTitlePaddingTablet.right}${fluentFormSectionBreakTitlePaddingUnits.Tablet} ${fluentFormSectionBreakTitlePaddingTablet.bottom}${fluentFormSectionBreakTitlePaddingUnits.Tablet} ${fluentFormSectionBreakTitlePaddingTablet.left}${fluentFormSectionBreakTitlePaddingUnits.Tablet}`;
    const fluentFormSectionBreakTitleMobilePadding = `${fluentFormSectionBreakTitlePaddingMobile.top}${fluentFormSectionBreakTitlePaddingUnits.Mobile} ${fluentFormSectionBreakTitlePaddingMobile.right}${fluentFormSectionBreakTitlePaddingUnits.Mobile} ${fluentFormSectionBreakTitlePaddingMobile.bottom}${fluentFormSectionBreakTitlePaddingUnits.Mobile} ${fluentFormSectionBreakTitlePaddingMobile.left}${fluentFormSectionBreakTitlePaddingUnits.Mobile}`;
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

    const fluentFormSectionBreakTitleDesktopMargin = `${fluentFormSectionBreakTitleMarginDesktop.top}${fluentFormSectionBreakTitleMarginUnits.Desktop} ${fluentFormSectionBreakTitleMarginDesktop.right}${fluentFormSectionBreakTitleMarginUnits.Desktop} ${fluentFormSectionBreakTitleMarginDesktop.bottom}${fluentFormSectionBreakTitleMarginUnits.Desktop} ${fluentFormSectionBreakTitleMarginDesktop.left}${fluentFormSectionBreakTitleMarginUnits.Desktop}`;
    const fluentFormSectionBreakTitleTabletMargin = `${fluentFormSectionBreakTitleMarginTablet.top}${fluentFormSectionBreakTitleMarginUnits.Tablet} ${fluentFormSectionBreakTitleMarginTablet.right}${fluentFormSectionBreakTitleMarginUnits.Tablet} ${fluentFormSectionBreakTitleMarginTablet.bottom}${fluentFormSectionBreakTitleMarginUnits.Tablet} ${fluentFormSectionBreakTitleMarginTablet.left}${fluentFormSectionBreakTitleMarginUnits.Tablet}`;
    const fluentFormSectionBreakTitleMobileMargin = `${fluentFormSectionBreakTitleMarginMobile.top}${fluentFormSectionBreakTitleMarginUnits.Mobile} ${fluentFormSectionBreakTitleMarginMobile.right}${fluentFormSectionBreakTitleMarginUnits.Mobile} ${fluentFormSectionBreakTitleMarginMobile.bottom}${fluentFormSectionBreakTitleMarginUnits.Mobile} ${fluentFormSectionBreakTitleMarginMobile.left}${fluentFormSectionBreakTitleMarginUnits.Mobile}`;
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

    /** Default padding for Section Break Description */
    const fluentFormSectionBreakDescDesktopPadding = `${fluentFormSectionBreakDescPaddingDesktop.top}${fluentFormSectionBreakDescPaddingUnits.Desktop} ${fluentFormSectionBreakDescPaddingDesktop.right}${fluentFormSectionBreakDescPaddingUnits.Desktop} ${fluentFormSectionBreakDescPaddingDesktop.bottom}${fluentFormSectionBreakDescPaddingUnits.Desktop} ${fluentFormSectionBreakDescPaddingDesktop.left}${fluentFormSectionBreakDescPaddingUnits.Desktop}`;
    const fluentFormSectionBreakDescTabletPadding = `${fluentFormSectionBreakDescPaddingTablet.top}${fluentFormSectionBreakDescPaddingUnits.Tablet} ${fluentFormSectionBreakDescPaddingTablet.right}${fluentFormSectionBreakDescPaddingUnits.Tablet} ${fluentFormSectionBreakDescPaddingTablet.bottom}${fluentFormSectionBreakDescPaddingUnits.Tablet} ${fluentFormSectionBreakDescPaddingTablet.left}${fluentFormSectionBreakDescPaddingUnits.Tablet}`;
    const fluentFormSectionBreakDescMobilePadding = `${fluentFormSectionBreakDescPaddingMobile.top}${fluentFormSectionBreakDescPaddingUnits.Mobile} ${fluentFormSectionBreakDescPaddingMobile.right}${fluentFormSectionBreakDescPaddingUnits.Mobile} ${fluentFormSectionBreakDescPaddingMobile.bottom}${fluentFormSectionBreakDescPaddingUnits.Mobile} ${fluentFormSectionBreakDescPaddingMobile.left}${fluentFormSectionBreakDescPaddingUnits.Mobile}`;
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

    const fluentFormSectionBreakDescDesktopMargin = `${fluentFormSectionBreakDescMarginDesktop.top}${fluentFormSectionBreakDescMarginUnits.Desktop} ${fluentFormSectionBreakDescMarginDesktop.right}${fluentFormSectionBreakDescMarginUnits.Desktop} ${fluentFormSectionBreakDescMarginDesktop.bottom}${fluentFormSectionBreakDescMarginUnits.Desktop} ${fluentFormSectionBreakDescMarginDesktop.left}${fluentFormSectionBreakDescMarginUnits.Desktop}`;
    const fluentFormSectionBreakDescTabletMargin = `${fluentFormSectionBreakDescMarginTablet.top}${fluentFormSectionBreakDescMarginUnits.Tablet} ${fluentFormSectionBreakDescMarginTablet.right}${fluentFormSectionBreakDescMarginUnits.Tablet} ${fluentFormSectionBreakDescMarginTablet.bottom}${fluentFormSectionBreakDescMarginUnits.Tablet} ${fluentFormSectionBreakDescMarginTablet.left}${fluentFormSectionBreakDescMarginUnits.Tablet}`;
    const fluentFormSectionBreakDescMobileMargin = `${fluentFormSectionBreakDescMarginMobile.top}${fluentFormSectionBreakDescMarginUnits.Mobile} ${fluentFormSectionBreakDescMarginMobile.right}${fluentFormSectionBreakDescMarginUnits.Mobile} ${fluentFormSectionBreakDescMarginMobile.bottom}${fluentFormSectionBreakDescMarginUnits.Mobile} ${fluentFormSectionBreakDescMarginMobile.left}${fluentFormSectionBreakDescMarginUnits.Mobile}`;
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

    /** Default padding for HTML */
    const fluentFormHtmlDesktopPadding = `${fluentFormHtmlPaddingDesktop.top}${fluentFormHtmlPaddingUnits.Desktop} ${fluentFormHtmlPaddingDesktop.right}${fluentFormHtmlPaddingUnits.Desktop} ${fluentFormHtmlPaddingDesktop.bottom}${fluentFormHtmlPaddingUnits.Desktop} ${fluentFormHtmlPaddingDesktop.left}${fluentFormHtmlPaddingUnits.Desktop}`;
    const fluentFormHtmlTabletPadding = `${fluentFormHtmlPaddingTablet.top}${fluentFormHtmlPaddingUnits.Tablet} ${fluentFormHtmlPaddingTablet.right}${fluentFormHtmlPaddingUnits.Tablet} ${fluentFormHtmlPaddingTablet.bottom}${fluentFormHtmlPaddingUnits.Tablet} ${fluentFormHtmlPaddingTablet.left}${fluentFormHtmlPaddingUnits.Tablet}`;
    const fluentFormHtmlMobilePadding = `${fluentFormHtmlPaddingMobile.top}${fluentFormHtmlPaddingUnits.Mobile} ${fluentFormHtmlPaddingMobile.right}${fluentFormHtmlPaddingUnits.Mobile} ${fluentFormHtmlPaddingMobile.bottom}${fluentFormHtmlPaddingUnits.Mobile} ${fluentFormHtmlPaddingMobile.left}${fluentFormHtmlPaddingUnits.Mobile}`;
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

    const fluentFormHtmlDesktopMargin = `${fluentFormHtmlMarginDesktop.top}${fluentFormHtmlMarginUnits.Desktop} ${fluentFormHtmlMarginDesktop.right}${fluentFormHtmlMarginUnits.Desktop} ${fluentFormHtmlMarginDesktop.bottom}${fluentFormHtmlMarginUnits.Desktop} ${fluentFormHtmlMarginDesktop.left}${fluentFormHtmlMarginUnits.Desktop}`;
    const fluentFormHtmlTabletMargin = `${fluentFormHtmlMarginTablet.top}${fluentFormHtmlMarginUnits.Tablet} ${fluentFormHtmlMarginTablet.right}${fluentFormHtmlMarginUnits.Tablet} ${fluentFormHtmlMarginTablet.bottom}${fluentFormHtmlMarginUnits.Tablet} ${fluentFormHtmlMarginTablet.left}${fluentFormHtmlMarginUnits.Tablet}`;
    const fluentFormHtmlMobileMargin = `${fluentFormHtmlMarginMobile.top}${fluentFormHtmlMarginUnits.Mobile} ${fluentFormHtmlMarginMobile.right}${fluentFormHtmlMarginUnits.Mobile} ${fluentFormHtmlMarginMobile.bottom}${fluentFormHtmlMarginUnits.Mobile} ${fluentFormHtmlMarginMobile.left}${fluentFormHtmlMarginUnits.Mobile}`;
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

    /** Default padding for Submit */
    const fluentFormSubmitDesktopPadding = `${fluentFormSubmitPaddingDesktop.top}${fluentFormSubmitPaddingUnits.Desktop} ${fluentFormSubmitPaddingDesktop.right}${fluentFormSubmitPaddingUnits.Desktop} ${fluentFormSubmitPaddingDesktop.bottom}${fluentFormSubmitPaddingUnits.Desktop} ${fluentFormSubmitPaddingDesktop.left}${fluentFormSubmitPaddingUnits.Desktop}`;
    const fluentFormSubmitTabletPadding = `${fluentFormSubmitPaddingTablet.top}${fluentFormSubmitPaddingUnits.Tablet} ${fluentFormSubmitPaddingTablet.right}${fluentFormSubmitPaddingUnits.Tablet} ${fluentFormSubmitPaddingTablet.bottom}${fluentFormSubmitPaddingUnits.Tablet} ${fluentFormSubmitPaddingTablet.left}${fluentFormSubmitPaddingUnits.Tablet}`;
    const fluentFormSubmitMobilePadding = `${fluentFormSubmitPaddingMobile.top}${fluentFormSubmitPaddingUnits.Mobile} ${fluentFormSubmitPaddingMobile.right}${fluentFormSubmitPaddingUnits.Mobile} ${fluentFormSubmitPaddingMobile.bottom}${fluentFormSubmitPaddingUnits.Mobile} ${fluentFormSubmitPaddingMobile.left}${fluentFormSubmitPaddingUnits.Mobile}`;
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

    const fluentFormSubmitDesktopMargin = `${fluentFormSubmitMarginDesktop.top}${fluentFormSubmitMarginUnits.Desktop} ${fluentFormSubmitMarginDesktop.right}${fluentFormSubmitMarginUnits.Desktop} ${fluentFormSubmitMarginDesktop.bottom}${fluentFormSubmitMarginUnits.Desktop} ${fluentFormSubmitMarginDesktop.left}${fluentFormSubmitMarginUnits.Desktop}`;
    const fluentFormSubmitTabletMargin = `${fluentFormSubmitMarginTablet.top}${fluentFormSubmitMarginUnits.Tablet} ${fluentFormSubmitMarginTablet.right}${fluentFormSubmitMarginUnits.Tablet} ${fluentFormSubmitMarginTablet.bottom}${fluentFormSubmitMarginUnits.Tablet} ${fluentFormSubmitMarginTablet.left}${fluentFormSubmitMarginUnits.Tablet}`;
    const fluentFormSubmitMobileMargin = `${fluentFormSubmitMarginMobile.top}${fluentFormSubmitMarginUnits.Mobile} ${fluentFormSubmitMarginMobile.right}${fluentFormSubmitMarginUnits.Mobile} ${fluentFormSubmitMarginMobile.bottom}${fluentFormSubmitMarginUnits.Mobile} ${fluentFormSubmitMarginMobile.left}${fluentFormSubmitMarginUnits.Mobile}`;
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

    /** Default border for Submit */
    const fluentFormSubmitDesktopBorderWidth = `${fluentFormSubmitBorderDesktop.top}${fluentFormSubmitBorderUnits.Desktop} ${fluentFormSubmitBorderDesktop.right}${fluentFormSubmitBorderUnits.Desktop} ${fluentFormSubmitBorderDesktop.bottom}${fluentFormSubmitBorderUnits.Desktop} ${fluentFormSubmitBorderDesktop.left}${fluentFormSubmitBorderUnits.Desktop}`;
    const fluentFormSubmitTabletBorderWidth = `${fluentFormSubmitBorderTablet.top}${fluentFormSubmitBorderUnits.Tablet} ${fluentFormSubmitBorderTablet.right}${fluentFormSubmitBorderUnits.Tablet} ${fluentFormSubmitBorderTablet.bottom}${fluentFormSubmitBorderUnits.Tablet} ${fluentFormSubmitBorderTablet.left}${fluentFormSubmitBorderUnits.Tablet}`;
    const fluentFormSubmitMobileBorderWidth = `${fluentFormSubmitBorderMobile.top}${fluentFormSubmitBorderUnits.Mobile} ${fluentFormSubmitBorderMobile.right}${fluentFormSubmitBorderUnits.Mobile} ${fluentFormSubmitBorderMobile.bottom}${fluentFormSubmitBorderUnits.Mobile} ${fluentFormSubmitBorderMobile.left}${fluentFormSubmitBorderUnits.Mobile}`;
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

    /** Default border radius for Submit */
    const fluentFormSubmitDesktopBorderRadiusWidth = `${fluentFormSubmitBorderRadiusDesktop.top}${fluentFormSubmitBorderRadiusUnits.Desktop} ${fluentFormSubmitBorderRadiusDesktop.right}${fluentFormSubmitBorderRadiusUnits.Desktop} ${fluentFormSubmitBorderRadiusDesktop.bottom}${fluentFormSubmitBorderRadiusUnits.Desktop} ${fluentFormSubmitBorderRadiusDesktop.left}${fluentFormSubmitBorderRadiusUnits.Desktop}`;
    const fluentFormSubmitTabletBorderRadiusWidth = `${fluentFormSubmitBorderRadiusTablet.top}${fluentFormSubmitBorderRadiusUnits.Tablet} ${fluentFormSubmitBorderRadiusTablet.right}${fluentFormSubmitBorderRadiusUnits.Tablet} ${fluentFormSubmitBorderRadiusTablet.bottom}${fluentFormSubmitBorderRadiusUnits.Tablet} ${fluentFormSubmitBorderRadiusTablet.left}${fluentFormSubmitBorderRadiusUnits.Tablet}`;
    const fluentFormSubmitMobileBorderRadiusWidth = `${fluentFormSubmitBorderRadiusMobile.top}${fluentFormSubmitBorderRadiusUnits.Mobile} ${fluentFormSubmitBorderRadiusUnits.Mobile} ${fluentFormSubmitBorderRadiusDesktop.bottom}${fluentFormSubmitBorderRadiusUnits.Mobile} ${fluentFormSubmitBorderRadiusDesktop.left}${fluentFormSubmitBorderRadiusUnits.Mobile}`;

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

    /** Default border for Success */
    const fluentFormSuccessDesktopBorderWidth = `${fluentFormSuccessBorderDesktop.top}${fluentFormSuccessBorderUnits.Desktop} ${fluentFormSuccessBorderDesktop.right}${fluentFormSuccessBorderUnits.Desktop} ${fluentFormSuccessBorderDesktop.bottom}${fluentFormSuccessBorderUnits.Desktop} ${fluentFormSuccessBorderDesktop.left}${fluentFormSuccessBorderUnits.Desktop}`;
    const fluentFormSuccessTabletBorderWidth = `${fluentFormSuccessBorderTablet.top}${fluentFormSuccessBorderUnits.Tablet} ${fluentFormSuccessBorderTablet.right}${fluentFormSuccessBorderUnits.Tablet} ${fluentFormSuccessBorderTablet.bottom}${fluentFormSuccessBorderUnits.Tablet} ${fluentFormSuccessBorderTablet.left}${fluentFormSuccessBorderUnits.Tablet}`;
    const fluentFormSuccessMobileBorderWidth = `${fluentFormSuccessBorderMobile.top}${fluentFormSuccessBorderUnits.Mobile} ${fluentFormSuccessBorderMobile.right}${fluentFormSuccessBorderUnits.Mobile} ${fluentFormSuccessBorderMobile.bottom}${fluentFormSuccessBorderUnits.Mobile} ${fluentFormSuccessBorderMobile.left}${fluentFormSuccessBorderUnits.Mobile}`;
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

    /** Default border radius for Success */
    const fluentFormSuccessDesktopBorderRadiusWidth = `${fluentFormSuccessBorderRadiusDesktop.top}${fluentFormSuccessBorderRadiusUnits.Desktop} ${fluentFormSuccessBorderRadiusDesktop.right}${fluentFormSuccessBorderRadiusUnits.Desktop} ${fluentFormSuccessBorderRadiusDesktop.bottom}${fluentFormSuccessBorderRadiusUnits.Desktop} ${fluentFormSuccessBorderRadiusDesktop.left}${fluentFormSuccessBorderRadiusUnits.Desktop}`;
    const fluentFormSuccessTabletBorderRadiusWidth = `${fluentFormSuccessBorderRadiusTablet.top}${fluentFormSuccessBorderRadiusUnits.Tablet} ${fluentFormSuccessBorderRadiusTablet.right}${fluentFormSuccessBorderRadiusUnits.Tablet} ${fluentFormSuccessBorderRadiusTablet.bottom}${fluentFormSuccessBorderRadiusUnits.Tablet} ${fluentFormSuccessBorderRadiusTablet.left}${fluentFormSuccessBorderRadiusUnits.Tablet}`;
    const fluentFormSuccessMobileBorderRadiusWidth = `${fluentFormSuccessBorderRadiusMobile.top}${fluentFormSuccessBorderRadiusUnits.Mobile} ${fluentFormSuccessBorderRadiusUnits.Mobile} ${fluentFormSuccessBorderRadiusDesktop.bottom}${fluentFormSuccessBorderRadiusUnits.Mobile} ${fluentFormSuccessBorderRadiusDesktop.left}${fluentFormSuccessBorderRadiusUnits.Mobile}`;
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

    /** Default padding for Error */
    const fluentFormErrorDesktopPadding = `${fluentFormErrorPaddingDesktop.top}${fluentFormErrorPaddingUnits.Desktop} ${fluentFormErrorPaddingDesktop.right}${fluentFormErrorPaddingUnits.Desktop} ${fluentFormErrorPaddingDesktop.bottom}${fluentFormErrorPaddingUnits.Desktop} ${fluentFormErrorPaddingDesktop.left}${fluentFormErrorPaddingUnits.Desktop}`;
    const fluentFormErrorTabletPadding = `${fluentFormErrorPaddingTablet.top}${fluentFormErrorPaddingUnits.Tablet} ${fluentFormErrorPaddingTablet.right}${fluentFormErrorPaddingUnits.Tablet} ${fluentFormErrorPaddingTablet.bottom}${fluentFormErrorPaddingUnits.Tablet} ${fluentFormErrorPaddingTablet.left}${fluentFormErrorPaddingUnits.Tablet}`;
    const fluentFormErrorMobilePadding = `${fluentFormErrorPaddingMobile.top}${fluentFormErrorPaddingUnits.Mobile} ${fluentFormErrorPaddingMobile.right}${fluentFormErrorPaddingUnits.Mobile} ${fluentFormErrorPaddingMobile.bottom}${fluentFormErrorPaddingUnits.Mobile} ${fluentFormErrorPaddingMobile.left}${fluentFormErrorPaddingUnits.Mobile}`;
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

    /** Default margin for Error */
    const fluentFormErrorDesktopMargin = `${fluentFormErrorMarginDesktop.top}${fluentFormErrorMarginUnits.Desktop} ${fluentFormErrorMarginDesktop.right}${fluentFormErrorMarginUnits.Desktop} ${fluentFormErrorMarginDesktop.bottom}${fluentFormErrorMarginUnits.Desktop} ${fluentFormErrorMarginDesktop.left}${fluentFormErrorMarginUnits.Desktop}`;
    const fluentFormErrorTabletMargin = `${fluentFormErrorMarginTablet.top}${fluentFormErrorMarginUnits.Tablet} ${fluentFormErrorMarginTablet.right}${fluentFormErrorMarginUnits.Tablet} ${fluentFormErrorMarginTablet.bottom}${fluentFormErrorMarginUnits.Tablet} ${fluentFormErrorMarginTablet.left}${fluentFormErrorMarginUnits.Tablet}`;
    const fluentFormErrorMobileMargin = `${fluentFormErrorMarginMobile.top}${fluentFormErrorMarginUnits.Mobile} ${fluentFormErrorMarginMobile.right}${fluentFormErrorMarginUnits.Mobile} ${fluentFormErrorMarginMobile.bottom}${fluentFormErrorMarginUnits.Mobile} ${fluentFormErrorMarginMobile.left}${fluentFormErrorMarginUnits.Mobile}`;
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


    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${fluentFormGlobalPaddingDesktop.top}${fluentFormGlobalPaddingUnits.Desktop} ${fluentFormGlobalPaddingDesktop.right}${fluentFormGlobalPaddingUnits.Desktop} ${fluentFormGlobalPaddingDesktop.bottom}${fluentFormGlobalPaddingUnits.Desktop} ${fluentFormGlobalPaddingDesktop.left}${fluentFormGlobalPaddingUnits.Desktop}`;
    const TabletPadding     = `${fluentFormGlobalPaddingTablet.top}${fluentFormGlobalPaddingUnits.Tablet} ${fluentFormGlobalPaddingTablet.right}${fluentFormGlobalPaddingUnits.Tablet} ${fluentFormGlobalPaddingTablet.bottom}${fluentFormGlobalPaddingUnits.Tablet} ${fluentFormGlobalPaddingTablet.left}${fluentFormGlobalPaddingUnits.Tablet}`;
    const MobilePadding     = `${fluentFormGlobalPaddingMobile.top}${fluentFormGlobalPaddingUnits.Mobile} ${fluentFormGlobalPaddingMobile.right}${fluentFormGlobalPaddingUnits.Mobile} ${fluentFormGlobalPaddingMobile.bottom}${fluentFormGlobalPaddingUnits.Mobile} ${fluentFormGlobalPaddingMobile.left}${fluentFormGlobalPaddingUnits.Mobile}`;
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

    const DesktopMargin = `${fluentFormGlobalMarginDesktop.top}${fluentFormGlobalMarginUnits.Desktop} ${fluentFormGlobalMarginDesktop.right}${fluentFormGlobalMarginUnits.Desktop} ${fluentFormGlobalMarginDesktop.bottom}${fluentFormGlobalMarginUnits.Desktop} ${fluentFormGlobalMarginDesktop.left}${fluentFormGlobalMarginUnits.Desktop}`;
    const TabletMargin = `${fluentFormGlobalMarginTablet.top}${fluentFormGlobalMarginUnits.Tablet} ${fluentFormGlobalMarginTablet.right}${fluentFormGlobalMarginUnits.Tablet} ${fluentFormGlobalMarginTablet.bottom}${fluentFormGlobalMarginUnits.Tablet} ${fluentFormGlobalMarginTablet.left}${fluentFormGlobalMarginUnits.Tablet}`;
    const MobileMargin = `${fluentFormGlobalMarginMobile.top}${fluentFormGlobalMarginUnits.Mobile} ${fluentFormGlobalMarginMobile.right}${fluentFormGlobalMarginUnits.Mobile} ${fluentFormGlobalMarginMobile.bottom}${fluentFormGlobalMarginUnits.Mobile} ${fluentFormGlobalMarginMobile.left}${fluentFormGlobalMarginUnits.Mobile}`;
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
    const BorderDesktopWidth = `${fluentFormGlobalBorderDesktop.top}${fluentFormGlobalBorderUnits.Desktop} ${fluentFormGlobalBorderDesktop.right}${fluentFormGlobalBorderUnits.Desktop} ${fluentFormGlobalBorderDesktop.bottom}${fluentFormGlobalBorderUnits.Desktop} ${fluentFormGlobalBorderDesktop.left}${fluentFormGlobalBorderUnits.Desktop}`;
    const BorderTabletWidth = `${fluentFormGlobalBorderTablet.top}${fluentFormGlobalBorderUnits.Tablet} ${fluentFormGlobalBorderTablet.right}${fluentFormGlobalBorderUnits.Tablet} ${fluentFormGlobalBorderTablet.bottom}${fluentFormGlobalBorderUnits.Tablet} ${fluentFormGlobalBorderTablet.left}${fluentFormGlobalBorderUnits.Tablet}`;
    const BorderMobileWidth = `${fluentFormGlobalBorderMobile.top}${fluentFormGlobalBorderUnits.Mobile} ${fluentFormGlobalBorderMobile.right}${fluentFormGlobalBorderUnits.Mobile} ${fluentFormGlobalBorderMobile.bottom}${fluentFormGlobalBorderUnits.Mobile} ${fluentFormGlobalBorderMobile.left}${fluentFormGlobalBorderUnits.Mobile}`;
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
    const BorderRadiusDesktopWidth = `${fluentFormGlobalBorderRadiusDesktop.top}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.right}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.bottom}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.left}${fluentFormGlobalBorderRadiusUnits.Desktop}`;
    const BorderRadiusTabletWidth = `${fluentFormGlobalBorderRadiusTablet.top}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.right}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.bottom}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.left}${fluentFormGlobalBorderRadiusUnits.Tablet}`;
    const BorderRadiusMobileWidth = `${fluentFormGlobalBorderRadiusMobile.top}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.right}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.bottom}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.left}${fluentFormGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */


    /* Start Load Google Fonts */
    useEffect(() => {
        loadGoogleFont(fluentFormLabelFontFamily);
        loadGoogleFont(fluentFormInputFontFamily);
        loadGoogleFont(fluentFormSectionBreakTitleFontFamily);
        loadGoogleFont(fluentFormSectionBreakDescFontFamily);
        loadGoogleFont(fluentFormHtmlFontFamily);
        loadGoogleFont(fluentFormSubmitFontFamily);
        loadGoogleFont(fluentFormSuccessFontFamily);
        loadGoogleFont(fluentFormErrorFontFamily);
    }, [fluentFormLabelFontFamily,
         fluentFormInputFontFamily, 
         fluentFormSectionBreakTitleFontFamily, 
         fluentFormSectionBreakDescFontFamily,
         fluentFormHtmlFontFamily, 
         fluentFormSubmitFontFamily, 
         fluentFormSuccessFontFamily, 
         fluentFormErrorFontFamily] 
    );
    /* End Load Google Fonts */

    const allBlockStyle = useMemo(() => `

        .${blockID}.fb-fluent-form-wrapper {
            ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''};
            padding: ${DesktopPadding};
            margin: ${DesktopMargin};
            border: ${fluentFormGlobalBorder};
            border-width: ${BorderDesktopWidth};
            border-radius: ${BorderRadiusDesktopWidth} !important;
            ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''};
            ${fluentFormGlobalZIndex.Desktop ? `z-index: ${fluentFormGlobalZIndex.Desktop};` : ''}
            ${fluentFormGlobalBoxShadowCssValue ? `box-shadow: ${fluentFormGlobalBoxShadowCssValue};` : ''} 
            position: relative;
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-fluent-form-wrapper:hover {
            ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''};
            ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''};
            ${fluentFormGlobalBoxShadowHoverCssValue ? `box-shadow: ${fluentFormGlobalBoxShadowHoverCssValue};` : ''} 
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group label:not(.ff-el-form-check-label),
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group .ff-el-input--label{
            display: none;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .error.text-danger {
            display: none;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper .ff-el-group {
            ${fluentFormSpacingSize ? `margin-bottom: ${fluentFormSpacingSize.Desktop}${fluentFormSpacingUnits.Desktop};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-group label {
            ${fluentFormLabelColor ? `color: ${fluentFormLabelColor};` : ""}
            ${fluentFormLabelFontFamily ? `font-family: ${fluentFormLabelFontFamily};` : ""}
            ${fluentFormLabelFontSize.Desktop && fluentFormLabelFontSizeUnits.Desktop ? `font-size: ${fluentFormLabelFontSize.Desktop}${fluentFormLabelFontSizeUnits.Desktop};` : ''}
            ${fluentFormLabelFontWeight ? `font-weight: ${fluentFormLabelFontWeight};` : ""}
            ${fluentFormLabelFontStyle ? `font-style: ${fluentFormLabelFontStyle};` : ""}
            ${fluentFormLabelTextTransform ? `text-transform: ${fluentFormLabelTextTransform};` : ""}
            ${fluentFormLabelTextDecoration ? `text-decoration: ${fluentFormLabelTextDecoration};` : ""}
            ${fluentFormLabelLetterSpacing.Desktop && fluentFormLabelLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormLabelLetterSpacing.Desktop}${fluentFormLabelLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormLabelLineHeight.Desktop && fluentFormLabelLineHeightUnits.Desktop ? `line-height: ${fluentFormLabelLineHeight.Desktop}${fluentFormLabelLineHeightUnits.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-group label:hover {
            ${fluentFormLabelHoverColor ? `color: ${fluentFormLabelHoverColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea, 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group select {
            ${fluentFormInputBgColor ? `background-color: ${fluentFormInputBgColor};` : ""}
            ${fluentFormInputColor ? `color: ${fluentFormInputColor};` : ""}
            ${fluentFormInputFontFamily ? `font-family: ${fluentFormInputFontFamily};` : ""}
            ${fluentFormInputFontSize.Desktop && fluentFormInputFontSizeUnits.Desktop ? `font-size: ${fluentFormInputFontSize.Desktop}${fluentFormInputFontSizeUnits.Desktop};` : ''}
            ${fluentFormInputFontWeight ? `font-weight: ${fluentFormInputFontWeight};` : ""}
            ${fluentFormInputFontStyle ? `font-style: ${fluentFormInputFontStyle};` : ""}
            ${fluentFormInputTextTransform ? `text-transform: ${fluentFormInputTextTransform};` : ""}
            ${fluentFormInputTextDecoration ? `text-decoration: ${fluentFormInputTextDecoration};` : ""}
            ${fluentFormInputLetterSpacing.Desktop && fluentFormInputLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormInputLetterSpacing.Desktop}${fluentFormInputLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormInputLineHeight.Desktop && fluentFormInputLineHeightUnits.Desktop ? `line-height: ${fluentFormInputLineHeight.Desktop}${fluentFormInputLineHeightUnits.Desktop};` : ''}
            ${fluentFormTextIndentSize ? `text-indent: ${fluentFormTextIndentSize.Desktop}${fluentFormTextIndentSizeUnits.Desktop};` : ""}
            ${fluentFormInputWidthSize ? `width: ${fluentFormInputWidthSize.Desktop}${fluentFormInputWidthSizeUnits.Desktop};` : ""}
            ${fluentFormInputHeightSize ? `height: ${fluentFormInputHeightSize.Desktop}${fluentFormInputHeightSizeUnits.Desktop};` : ""}
            ${fluentFormDesktopPadding ? `padding: ${fluentFormDesktopPadding};` : ""}
            ${fluentFormBorder ? `border: ${fluentFormBorder};` : ""}
            ${fluentFormBorderDesktopWidth ? `border-width: ${fluentFormBorderDesktopWidth};` : ""}
            ${fluentFormBorderColor ? `border-color: ${fluentFormBorderColor};` : ""}
            ${fluentFormBorderRadiusDesktopWidth ? `border-radius: ${fluentFormBorderRadiusDesktopWidth};` : ""}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group select:focus {
            ${fluentFormFocusBorder ? `border: ${fluentFormFocusBorder};` : ""}
            ${fluentFormFocusBorderDesktopWidth ? `border-width: ${fluentFormFocusBorderDesktopWidth};` : ""}
            ${fluentFormFocusBorderRadiusDesktopWidth ? `border-radius: ${fluentFormFocusBorderRadiusDesktopWidth};` : ""}
            ${fluentFormInputFocusColor ? `border-color: ${fluentFormInputFocusColor};` : ""}
            box-shadow: none;
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea {
            ${fluentFormTextareaWidthSize ? `width: ${fluentFormTextareaWidthSize.Desktop}${fluentFormTextareaWidthSizeUnits.Desktop};` : ""}
            ${fluentFormTextareaHeightSize ? `height: ${fluentFormTextareaHeightSize.Desktop}${fluentFormTextareaHeightSizeUnits.Desktop};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input::-webkit-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input::-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea::-moz-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input:-ms-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input:-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea:-moz-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"]{
            width: ${fluentFormRadioFontSize.Desktop}${fluentFormRadioFontSizeUnits.Desktop};
            height: ${fluentFormRadioFontSize.Desktop}${fluentFormRadioFontSizeUnits.Desktop};
            ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
            ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
            ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth.Desktop}${fluentFormRadioBorderWidthUnits.Desktop};` : ""}
            ${fluentFormCheckBoxBorderRadiusDesktopWidth ? `border-radius: ${fluentFormCheckBoxBorderRadiusDesktopWidth};` : ""}
            position: relative;
            appearance: none;
            transition: all .3s ease-in-out;   
        } 
        .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
            width: ${fluentFormRadioFontSize.Desktop}${fluentFormRadioFontSizeUnits.Desktop};
            height: ${fluentFormRadioFontSize.Desktop}${fluentFormRadioFontSizeUnits.Desktop};
            ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
            ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
            ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth.Desktop}${fluentFormRadioBorderWidthUnits.Desktop};` : ""}
            ${fluentFormRadioBorderRadiusDesktopWidth ? `border-radius: ${fluentFormRadioBorderRadiusDesktopWidth};` : ""}
            position: relative;
            appearance: none;
            transition: all .3s ease-in-out;   
        }
        .${blockID}.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
        .${blockID}.fb-fluent-form-wrapper input[type="radio"]:checked:before {
            ${fluentFormRadioCheckedColor ? `background: ${fluentFormRadioCheckedColor};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
            ${fluentFormRadioCheckBoxItemSpacing ? `margin-bottom: ${fluentFormRadioCheckBoxItemSpacing.Desktop}${fluentFormRadioCheckBoxItemSpacingUnits.Desktop};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break,
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break hr {
            text-align: ${fluentFormSectionBreakAlignment};
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
            ${fluentFormSectionBreakTitleColor ? `color: ${fluentFormSectionBreakTitleColor};` : ""}
            ${fluentFormSectionBreakTitleFontFamily ? `font-family: ${fluentFormSectionBreakTitleFontFamily};` : ""}
            ${fluentFormSectionBreakTitleFontSize.Desktop && fluentFormSectionBreakTitleFontSizeUnits.Desktop ? `font-size: ${fluentFormSectionBreakTitleFontSize.Desktop}${fluentFormSectionBreakTitleFontSizeUnits.Desktop};` : ''}
            ${fluentFormSectionBreakTitleFontWeight ? `font-weight: ${fluentFormSectionBreakTitleFontWeight};` : ""}
            ${fluentFormSectionBreakTitleFontStyle ? `font-style: ${fluentFormSectionBreakTitleFontStyle};` : ""}
            ${fluentFormSectionBreakTitleTextTransform ? `text-transform: ${fluentFormSectionBreakTitleTextTransform};` : ""}
            ${fluentFormSectionBreakTitleTextDecoration ? `text-decoration: ${fluentFormSectionBreakTitleTextDecoration};` : ""}
            ${fluentFormSectionBreakTitleLetterSpacing.Desktop && fluentFormSectionBreakTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormSectionBreakTitleLetterSpacing.Desktop}${fluentFormSectionBreakTitleLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormSectionBreakTitleLineHeight.Desktop && fluentFormSectionBreakTitleLineHeightUnits.Desktop ? `line-height: ${fluentFormSectionBreakTitleLineHeight.Desktop}${fluentFormSectionBreakTitleLineHeightUnits.Desktop};` : ''}
            ${fluentFormSectionBreakTitleDesktopPadding ? `padding: ${fluentFormSectionBreakTitleDesktopPadding};` : ""}
            ${fluentFormSectionBreakTitleDesktopMargin ? `margin: ${fluentFormSectionBreakTitleDesktopMargin};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
            ${fluentFormSectionBreakTitleHoverColor ? `color: ${fluentFormSectionBreakTitleHoverColor};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
            ${fluentFormSectionBreakDescColor ? `color: ${fluentFormSectionBreakDescColor};` : ""}
            ${fluentFormSectionBreakDescFontFamily ? `font-family: ${fluentFormSectionBreakDescFontFamily};` : ""}
            ${fluentFormSectionBreakDescFontSize.Desktop && fluentFormSectionBreakDescFontSizeUnits.Desktop ? `font-size: ${fluentFormSectionBreakDescFontSize.Desktop}${fluentFormSectionBreakDescFontSizeUnits.Desktop};` : ''} 
            ${fluentFormSectionBreakDescFontWeight ? `font-weight: ${fluentFormSectionBreakDescFontWeight};` : ""}
            ${fluentFormSectionBreakDescFontStyle ? `font-style: ${fluentFormSectionBreakDescFontStyle};` : ""}
            ${fluentFormSectionBreakDescTextTransform ? `text-transform: ${fluentFormSectionBreakDescTextTransform};` : ""}
            ${fluentFormSectionBreakDescTextDecoration ? `text-decoration: ${fluentFormSectionBreakDescTextDecoration};` : ""}
            ${fluentFormSectionBreakDescLetterSpacing.Desktop && fluentFormSectionBreakDescLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormSectionBreakDescLetterSpacing.Desktop}${fluentFormSectionBreakDescLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormSectionBreakDescLineHeight.Desktop && fluentFormSectionBreakDescLineHeightUnits.Desktop ? `line-height: ${fluentFormSectionBreakDescLineHeight.Desktop}${fluentFormSectionBreakDescLineHeightUnits.Desktop};` : ''}
            ${fluentFormSectionBreakDescDesktopPadding ? `padding: ${fluentFormSectionBreakDescDesktopPadding};` : ""}
            ${fluentFormSectionBreakDescDesktopMargin ? `margin: ${fluentFormSectionBreakDescDesktopMargin};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {
            ${fluentFormSectionBreakDescHoverColor ? `color: ${fluentFormSectionBreakDescHoverColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper .ff-custom_html > * {
            ${fluentFormHtmlAlignment ? `text-align: ${fluentFormHtmlAlignment};` : ""}
            ${fluentFormHtmlColor ? `color: ${fluentFormHtmlColor};` : ""}
            ${fluentFormHtmlFontFamily ? `font-family: ${fluentFormHtmlFontFamily};` : ""}
            ${fluentFormHtmlFontSize.Desktop && fluentFormHtmlFontSizeUnits.Desktop ? `font-size: ${fluentFormHtmlFontSize.Desktop}${fluentFormHtmlFontSizeUnits.Desktop};` : ''} 
            ${fluentFormHtmlFontWeight ? `font-weight: ${fluentFormHtmlFontWeight};` : ""}
            ${fluentFormHtmlFontStyle ? `font-style: ${fluentFormHtmlFontStyle};` : ""}
            ${fluentFormHtmlTextTransform ? `text-transform: ${fluentFormHtmlTextTransform};` : ""}
            ${fluentFormHtmlTextDecoration ? `text-decoration: ${fluentFormHtmlTextDecoration};` : ""}
            ${fluentFormHtmlLetterSpacing.Desktop && fluentFormHtmlLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormHtmlLetterSpacing.Desktop}${fluentFormHtmlLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormHtmlLineHeight.Desktop && fluentFormHtmlLineHeightUnits.Desktop ? `line-height: ${fluentFormHtmlLineHeight.Desktop}${fluentFormHtmlLineHeightUnits.Desktop};` : ''} 
            ${fluentFormHtmlDesktopPadding ? `padding: ${fluentFormHtmlDesktopPadding};` : ""}
            ${fluentFormHtmlDesktopMargin ? `margin: ${fluentFormHtmlDesktopMargin};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-custom_html > *:hover {
            ${fluentFormHtmlHoverColor ? `color: ${fluentFormHtmlHoverColor};` : ""}
        }
        
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
            ${fluentFormSubmitAlignment ? `text-align: ${fluentFormSubmitAlignment};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
            ${fluentFormSubmitHeight.Desktop ? `height: ${fluentFormSubmitHeight.Desktop}${fluentFormSubmitHeightUnits.Desktop};` : ""}
            ${fluentFormSubmitColor ? `color: ${fluentFormSubmitColor};` : ""}
            ${fluentFormSubmitBgColor ? `background: ${fluentFormSubmitBgColor};` : ""}
            ${fluentFormSubmitFontFamily ? `font-family: ${fluentFormSubmitFontFamily};` : ""}
            ${fluentFormSubmitFontSize.Desktop && fluentFormSubmitFontSizeUnits.Desktop ? `font-size: ${fluentFormSubmitFontSize.Desktop}${fluentFormSubmitFontSizeUnits.Desktop};` : ''} 
            ${fluentFormSubmitFontWeight ? `font-weight: ${fluentFormSubmitFontWeight};` : ""}
            ${fluentFormSubmitFontStyle ? `font-style: ${fluentFormSubmitFontStyle};` : ""}
            ${fluentFormSubmitTextTransform ? `text-transform: ${fluentFormSubmitTextTransform};` : ""}
            ${fluentFormSubmitTextDecoration ? `text-decoration: ${fluentFormSubmitTextDecoration};` : ""}
            ${fluentFormSubmitLetterSpacing.Desktop && fluentFormSubmitLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormSubmitLetterSpacing.Desktop}${fluentFormSubmitLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormSubmitLineHeight.Desktop && fluentFormSubmitLineHeightUnits.Desktop ? `line-height: ${fluentFormSubmitLineHeight.Desktop}${fluentFormSubmitLineHeightUnits.Desktop};` : ''} 
            ${fluentFormSubmitDesktopPadding ? `padding: ${fluentFormSubmitDesktopPadding};` : ""}
            ${fluentFormSubmitDesktopMargin ? `margin: ${fluentFormSubmitDesktopMargin};` : ""}

            ${fluentFormSubmitBorder ? `border: ${fluentFormSubmitBorder};` : ""}
            ${fluentFormSubmitDesktopBorderWidth ? `border-width: ${fluentFormSubmitDesktopBorderWidth};` : ""}
            ${fluentFormSubmitBorderColor ? `border-color: ${fluentFormSubmitBorderColor};` : ""}
            ${fluentFormSubmitDesktopBorderRadiusWidth ? `border-radius: ${fluentFormSubmitDesktopBorderRadiusWidth};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
            ${fluentFormSubmitHoverColor ? `color: ${fluentFormSubmitHoverColor};` : ""}
            ${fluentFormSubmitBgHoverColor ? `background: ${fluentFormSubmitBgHoverColor};` : ""}
            ${fluentFormSubmitBorderHoverColor ? `border-color: ${fluentFormSubmitBorderHoverColor};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
            ${fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
            ${fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth.Desktop 
            ? `width: ${fluentFormSubmitWidth.Desktop}${fluentFormSubmitWidthUnits.Desktop};` 
            : ''}
        }

        .${blockID}.fb-fluent-form-wrapper .ff-message-success {
            ${fluentFormSuccessColor ? `color: ${fluentFormSuccessColor};` : ""}
            ${fluentFormSuccessBgColor ? `background: ${fluentFormSuccessBgColor};` : ""}
            ${fluentFormSuccessFontFamily ? `font-family: ${fluentFormSuccessFontFamily};` : ""}
            ${fluentFormSuccessFontSize.Desktop && fluentFormSuccessFontSizeUnits.Desktop ? `font-size: ${fluentFormSuccessFontSize.Desktop}${fluentFormSuccessFontSizeUnits.Desktop};` : ''} 
            ${fluentFormSuccessFontWeight ? `font-weight: ${fluentFormSuccessFontWeight};` : ""}
            ${fluentFormSuccessFontStyle ? `font-style: ${fluentFormSuccessFontStyle};` : ""}
            ${fluentFormSuccessTextTransform ? `text-transform: ${fluentFormSuccessTextTransform};` : ""}
            ${fluentFormSuccessTextDecoration ? `text-decoration: ${fluentFormSuccessTextDecoration};` : ""}
            ${fluentFormSuccessLetterSpacing.Desktop && fluentFormSuccessLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormSuccessLetterSpacing.Desktop}${fluentFormSuccessLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormSuccessLineHeight.Desktop && fluentFormSuccessLineHeightUnits.Desktop ? `line-height: ${fluentFormSuccessLineHeight.Desktop}${fluentFormSuccessLineHeightUnits.Desktop};` : ''}
            ${fluentFormSuccessBorder ? `border: ${fluentFormSuccessBorder};` : ""}
            ${fluentFormSuccessDesktopBorderWidth ? `border-width: ${fluentFormSuccessDesktopBorderWidth};` : ""}
            ${fluentFormSuccessBorderColor ? `border-color: ${fluentFormSuccessBorderColor};` : ""}
            ${fluentFormSuccessDesktopBorderRadiusWidth ? `border-radius: ${fluentFormSuccessDesktopBorderRadiusWidth};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-message-success:hover {
            ${fluentFormSuccessBorderHoverColor ? `border-color: ${fluentFormSuccessBorderHoverColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper .error.text-danger {
            ${fluentFormErrorColor ? `color: ${fluentFormErrorColor};` : ""}
            ${fluentFormErrorFontFamily ? `font-family: ${fluentFormErrorFontFamily};` : ""}
            ${fluentFormErrorFontSize.Desktop && fluentFormErrorFontSizeUnits.Desktop ? `font-size: ${fluentFormErrorFontSize.Desktop}${fluentFormErrorFontSizeUnits.Desktop};` : ''} 
            ${fluentFormErrorFontWeight ? `font-weight: ${fluentFormErrorFontWeight};` : ""}
            ${fluentFormErrorFontStyle ? `font-style: ${fluentFormErrorFontStyle};` : ""}
            ${fluentFormErrorTextTransform ? `text-transform: ${fluentFormErrorTextTransform};` : ""}
            ${fluentFormErrorTextDecoration ? `text-decoration: ${fluentFormErrorTextDecoration};` : ""}
            ${fluentFormErrorLetterSpacing.Desktop && fluentFormErrorLetterSpacingUnits.Desktop ? `letter-spacing: ${fluentFormErrorLetterSpacing.Desktop}${fluentFormErrorLetterSpacingUnits.Desktop};` : ''}
            ${fluentFormErrorLineHeight.Desktop && fluentFormErrorLineHeightUnits.Desktop ? `line-height: ${fluentFormErrorLineHeight.Desktop}${fluentFormErrorLineHeightUnits.Desktop};` : ''} 
            ${fluentFormErrorDesktopPadding ? `padding: ${fluentFormErrorDesktopPadding};` : ""}
            ${fluentFormErrorDesktopMargin ? `margin: ${fluentFormErrorDesktopMargin};` : ""} 
        }     

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-fluent-form-wrapper {
                ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''};
                padding: ${TabletPadding}; 
                margin: ${TabletMargin};
                border: ${fluentFormGlobalBorder};
                border-width: ${BorderTabletWidth};
                border-radius: ${BorderRadiusTabletWidth} !important;
                ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''};
                ${fluentFormGlobalZIndex.Tablet ? `z-index: ${fluentFormGlobalZIndex.Tablet};` : ''}
                position: relative;
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper:hover {
                ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''};
                ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''};
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-group {
                ${fluentFormSpacingSize ? `margin-bottom: ${fluentFormSpacingSize.Tablet}${fluentFormSpacingUnits.Tablet};` : ""} 
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group label {
                ${fluentFormLabelColor ? `color: ${fluentFormLabelColor};` : ""}
                ${fluentFormLabelFontFamily ? `font-family: ${fluentFormLabelFontFamily};` : ""}
                ${fluentFormLabelFontSize.Tablet && fluentFormLabelFontSizeUnits.Tablet ? `font-size: ${fluentFormLabelFontSize.Tablet}${fluentFormLabelFontSizeUnits.Tablet};` : ''}
                ${fluentFormLabelFontWeight ? `font-weight: ${fluentFormLabelFontWeight};` : ""}
                ${fluentFormLabelFontStyle ? `font-style: ${fluentFormLabelFontStyle};` : ""}
                ${fluentFormLabelTextTransform ? `text-transform: ${fluentFormLabelTextTransform};` : ""}
                ${fluentFormLabelTextDecoration ? `text-decoration: ${fluentFormLabelTextDecoration};` : ""}
                ${fluentFormLabelLetterSpacing.Tablet && fluentFormLabelLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormLabelLetterSpacing.Tablet}${fluentFormLabelLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormLabelLineHeight.Tablet && fluentFormLabelLineHeightUnits.Tablet ? `line-height: ${fluentFormLabelLineHeight.Tablet}${fluentFormLabelLineHeightUnits.Tablet};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group label:hover {
                ${fluentFormLabelHoverColor ? `color: ${fluentFormLabelHoverColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select {
                ${fluentFormInputBgColor ? `background-color: ${fluentFormInputBgColor};` : ""}
                ${fluentFormInputColor ? `color: ${fluentFormInputColor};` : ""}
                ${fluentFormInputFontFamily ? `font-family: ${fluentFormInputFontFamily};` : ""}
                ${fluentFormInputFontSize.Tablet && fluentFormInputFontSizeUnits.Tablet ? `font-size: ${fluentFormInputFontSize.Tablet}${fluentFormInputFontSizeUnits.Tablet};` : ''}
                ${fluentFormInputFontWeight ? `font-weight: ${fluentFormInputFontWeight};` : ""}
                ${fluentFormInputFontStyle ? `font-style: ${fluentFormInputFontStyle};` : ""}
                ${fluentFormInputTextTransform ? `text-transform: ${fluentFormInputTextTransform};` : ""}
                ${fluentFormInputTextDecoration ? `text-decoration: ${fluentFormInputTextDecoration};` : ""}
                ${fluentFormInputLetterSpacing.Tablet && fluentFormInputLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormInputLetterSpacing.Tablet}${fluentFormInputLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormInputLineHeight.Tablet && fluentFormInputLineHeightUnits.Tablet ? `line-height: ${fluentFormInputLineHeight.Tablet}${fluentFormInputLineHeightUnits.Tablet};` : ''}
                ${fluentFormTextIndentSize ? `text-indent: ${fluentFormTextIndentSize.Tablet}${fluentFormTextIndentSizeUnits.Tablet};` : ""}
                ${fluentFormInputWidthSize ? `width: ${fluentFormInputWidthSize.Tablet}${fluentFormInputWidthSizeUnits.Tablet};` : ""}
                ${fluentFormInputHeightSize ? `height: ${fluentFormInputHeightSize.Tablet}${fluentFormInputHeightSizeUnits.Tablet};` : ""}
                ${fluentFormTabletPadding ? `padding: ${fluentFormTabletPadding};` : ""}
                ${fluentFormBorder ? `border: ${fluentFormBorder};` : ""}
                ${fluentFormBorderTabletWidth ? `border-width: ${fluentFormBorderTabletWidth};` : ""}
                ${fluentFormBorderColor ? `border-color: ${fluentFormBorderColor};` : ""}
                ${fluentFormBorderRadiusTabletWidth ? `border-radius: ${fluentFormBorderRadiusTabletWidth};` : ""}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select:focus {
                ${fluentFormFocusBorder ? `border: ${fluentFormFocusBorder};` : ""}
                ${fluentFormFocusBorderTabletWidth ? `border-width: ${fluentFormFocusBorderTabletWidth};` : ""}
                ${fluentFormFocusBorderRadiusTabletWidth ? `border-radius: ${fluentFormFocusBorderRadiusTabletWidth};` : ""}
                ${fluentFormInputFocusColor ? `border-color: ${fluentFormInputFocusColor};` : ""}
                box-shadow: none;
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea {
                ${fluentFormTextareaWidthSize ? `width: ${fluentFormTextareaWidthSize.Tablet}${fluentFormTextareaWidthSizeUnits.Tablet};` : ""}
                ${fluentFormTextareaHeightSize ? `height: ${fluentFormTextareaHeightSize.Tablet}${fluentFormTextareaHeightSizeUnits.Tablet};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-webkit-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-ms-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"]{
                width: ${fluentFormRadioFontSize.Tablet}${fluentFormRadioFontSizeUnits.Tablet}; 
                height: ${fluentFormRadioFontSize.Tablet}${fluentFormRadioFontSizeUnits.Tablet};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth.Tablet}${fluentFormRadioBorderWidthUnits.Tablet};` : ""}
                ${fluentFormCheckBoxBorderRadiusTabletWidth ? `border-radius: ${fluentFormCheckBoxBorderRadiusTabletWidth};` : ""}
                position: relative;
                appearance: none;
                transition: all .3s ease-in-out;   
            } 
            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
                width: ${fluentFormRadioFontSize.Tablet}${fluentFormRadioFontSizeUnits.Tablet};
                height: ${fluentFormRadioFontSize.Tablet}${fluentFormRadioFontSizeUnits.Tablet};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth.Tablet}${fluentFormRadioBorderWidthUnits.Tablet};` : ""}
                ${fluentFormRadioBorderRadiusTabletWidth ? `border-radius: ${fluentFormRadioBorderRadiusTabletWidth};` : ""}
                position: relative;
                appearance: none;
                transition: all .3s ease-in-out;   
            }
            .${blockID}.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
            .${blockID}.fb-fluent-form-wrapper input[type="radio"]:checked:before {
                ${fluentFormRadioCheckedColor ? `background: ${fluentFormRadioCheckedColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
                ${fluentFormRadioCheckBoxItemSpacing ? `margin-bottom: ${fluentFormRadioCheckBoxItemSpacing.Tablet}${fluentFormRadioCheckBoxItemSpacingUnits.Tablet};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break,
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break hr {
                text-align: ${fluentFormSectionBreakAlignment};
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
                ${fluentFormSectionBreakTitleColor ? `color: ${fluentFormSectionBreakTitleColor};` : ""}
                ${fluentFormSectionBreakTitleFontFamily ? `font-family: ${fluentFormSectionBreakTitleFontFamily};` : ""}
                ${fluentFormSectionBreakTitleFontSize.Tablet && fluentFormSectionBreakTitleFontSizeUnits.Tablet ? `font-size: ${fluentFormSectionBreakTitleFontSize.Tablet}${fluentFormSectionBreakTitleFontSizeUnits.Tablet};` : ''}
                ${fluentFormSectionBreakTitleFontWeight ? `font-weight: ${fluentFormSectionBreakTitleFontWeight};` : ""}
                ${fluentFormSectionBreakTitleFontStyle ? `font-style: ${fluentFormSectionBreakTitleFontStyle};` : ""}
                ${fluentFormSectionBreakTitleTextTransform ? `text-transform: ${fluentFormSectionBreakTitleTextTransform};` : ""}
                ${fluentFormSectionBreakTitleTextDecoration ? `text-decoration: ${fluentFormSectionBreakTitleTextDecoration};` : ""}
                ${fluentFormSectionBreakTitleLetterSpacing.Tablet && fluentFormSectionBreakTitleLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormSectionBreakTitleLetterSpacing.Tablet}${fluentFormSectionBreakTitleLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormSectionBreakTitleLineHeight.Tablet && fluentFormSectionBreakTitleLineHeightUnits.Tablet ? `line-height: ${fluentFormSectionBreakTitleLineHeight.Tablet}${fluentFormSectionBreakTitleLineHeightUnits.Tablet};` : ''}
                ${fluentFormSectionBreakTitleTabletPadding ? `padding: ${fluentFormSectionBreakTitleTabletPadding};` : ""}
                ${fluentFormSectionBreakTitleTabletMargin ? `margin: ${fluentFormSectionBreakTitleTabletMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
                ${fluentFormSectionBreakTitleHoverColor ? `color: ${fluentFormSectionBreakTitleHoverColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
                ${fluentFormSectionBreakDescColor ? `color: ${fluentFormSectionBreakDescColor};` : ""}
                ${fluentFormSectionBreakDescFontFamily ? `font-family: ${fluentFormSectionBreakDescFontFamily};` : ""}
                ${fluentFormSectionBreakDescFontSize.Tablet && fluentFormSectionBreakDescFontSizeUnits.Tablet ? `font-size: ${fluentFormSectionBreakDescFontSize.Tablet}${fluentFormSectionBreakDescFontSizeUnits.Tablet};` : ''} 
                ${fluentFormSectionBreakDescFontWeight ? `font-weight: ${fluentFormSectionBreakDescFontWeight};` : ""}
                ${fluentFormSectionBreakDescFontStyle ? `font-style: ${fluentFormSectionBreakDescFontStyle};` : ""}
                ${fluentFormSectionBreakDescTextTransform ? `text-transform: ${fluentFormSectionBreakDescTextTransform};` : ""}
                ${fluentFormSectionBreakDescTextDecoration ? `text-decoration: ${fluentFormSectionBreakDescTextDecoration};` : ""}
                ${fluentFormSectionBreakDescLetterSpacing.Tablet && fluentFormSectionBreakDescLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormSectionBreakDescLetterSpacing.Tablet}${fluentFormSectionBreakDescLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormSectionBreakDescLineHeight.Tablet && fluentFormSectionBreakDescLineHeightUnits.Tablet ? `line-height: ${fluentFormSectionBreakDescLineHeight.Tablet}${fluentFormSectionBreakDescLineHeightUnits.Tablet};` : ''}
                ${fluentFormSectionBreakDescTabletPadding ? `padding: ${fluentFormSectionBreakDescTabletPadding};` : ""}
                ${fluentFormSectionBreakDescTabletMargin ? `margin: ${fluentFormSectionBreakDescTabletMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {
                ${fluentFormSectionBreakDescHoverColor ? `color: ${fluentFormSectionBreakDescHoverColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-custom_html > * {
                ${fluentFormHtmlAlignment ? `text-align: ${fluentFormHtmlAlignment};` : ""}
                ${fluentFormHtmlColor ? `color: ${fluentFormHtmlColor};` : ""}
                ${fluentFormHtmlFontFamily ? `font-family: ${fluentFormHtmlFontFamily};` : ""}
                ${fluentFormHtmlFontSize.Tablet && fluentFormHtmlFontSizeUnits.Tablet ? `font-size: ${fluentFormHtmlFontSize.Tablet}${fluentFormHtmlFontSizeUnits.Tablet};` : ''} 
                ${fluentFormHtmlFontWeight ? `font-weight: ${fluentFormHtmlFontWeight};` : ""}
                ${fluentFormHtmlFontStyle ? `font-style: ${fluentFormHtmlFontStyle};` : ""}
                ${fluentFormHtmlTextTransform ? `text-transform: ${fluentFormHtmlTextTransform};` : ""}
                ${fluentFormHtmlTextDecoration ? `text-decoration: ${fluentFormHtmlTextDecoration};` : ""}
                ${fluentFormHtmlLetterSpacing.Tablet && fluentFormHtmlLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormHtmlLetterSpacing.Tablet}${fluentFormHtmlLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormHtmlLineHeight.Tablet && fluentFormHtmlLineHeightUnits.Tablet ? `line-height: ${fluentFormHtmlLineHeight.Tablet}${fluentFormHtmlLineHeightUnits.Tablet};` : ''} 
                ${fluentFormHtmlTabletPadding ? `padding: ${fluentFormHtmlTabletPadding};` : ""}
                ${fluentFormHtmlTabletMargin ? `margin: ${fluentFormHtmlTabletMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-custom_html > *:hover {
                ${fluentFormHtmlHoverColor ? `color: ${fluentFormHtmlHoverColor};` : ""}
            }
            
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
                ${fluentFormSubmitAlignment ? `text-align: ${fluentFormSubmitAlignment};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitHeight.Tablet ? `height: ${fluentFormSubmitHeight.Tablet}${fluentFormSubmitHeightUnits.Tablet};` : ""}
                ${fluentFormSubmitColor ? `color: ${fluentFormSubmitColor};` : ""}
                ${fluentFormSubmitBgColor ? `background: ${fluentFormSubmitBgColor};` : ""}
                ${fluentFormSubmitFontFamily ? `font-family: ${fluentFormSubmitFontFamily};` : ""}
                ${fluentFormSubmitFontSize.Tablet && fluentFormSubmitFontSizeUnits.Tablet ? `font-size: ${fluentFormSubmitFontSize.Tablet}${fluentFormSubmitFontSizeUnits.Tablet};` : ''} 
                ${fluentFormSubmitFontWeight ? `font-weight: ${fluentFormSubmitFontWeight};` : ""}
                ${fluentFormSubmitFontStyle ? `font-style: ${fluentFormSubmitFontStyle};` : ""}
                ${fluentFormSubmitTextTransform ? `text-transform: ${fluentFormSubmitTextTransform};` : ""}
                ${fluentFormSubmitTextDecoration ? `text-decoration: ${fluentFormSubmitTextDecoration};` : ""}
                ${fluentFormSubmitLetterSpacing.Tablet && fluentFormSubmitLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormSubmitLetterSpacing.Tablet}${fluentFormSubmitLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormSubmitLineHeight.Tablet && fluentFormSubmitLineHeightUnits.Tablet ? `line-height: ${fluentFormSubmitLineHeight.Tablet}${fluentFormSubmitLineHeightUnits.Tablet};` : ''} 
                ${fluentFormSubmitTabletPadding ? `padding: ${fluentFormSubmitTabletPadding};` : ""}
                ${fluentFormSubmitTabletMargin ? `margin: ${fluentFormSubmitTabletMargin};` : ""}

                ${fluentFormSubmitBorder ? `border: ${fluentFormSubmitBorder};` : ""}
                ${fluentFormSubmitTabletBorderWidth ? `border-width: ${fluentFormSubmitTabletBorderWidth};` : ""}
                ${fluentFormSubmitBorderColor ? `border-color: ${fluentFormSubmitBorderColor};` : ""}
                ${fluentFormSubmitTabletBorderRadiusWidth ? `border-radius: ${fluentFormSubmitTabletBorderRadiusWidth};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
                ${fluentFormSubmitHoverColor ? `color: ${fluentFormSubmitHoverColor};` : ""}
                ${fluentFormSubmitBgHoverColor ? `background: ${fluentFormSubmitBgHoverColor};` : ""}
                ${fluentFormSubmitBorderHoverColor ? `border-color: ${fluentFormSubmitBorderHoverColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
                ${fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth.Tablet 
                ? `width: ${fluentFormSubmitWidth.Tablet}${fluentFormSubmitWidthUnits.Tablet};` 
                : ''}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-message-success {
                ${fluentFormSuccessColor ? `color: ${fluentFormSuccessColor};` : ""}
                ${fluentFormSuccessBgColor ? `background: ${fluentFormSuccessBgColor};` : ""}
                ${fluentFormSuccessFontFamily ? `font-family: ${fluentFormSuccessFontFamily};` : ""}
                ${fluentFormSuccessFontSize.Tablet && fluentFormSuccessFontSizeUnits.Tablet ? `font-size: ${fluentFormSuccessFontSize.Tablet}${fluentFormSuccessFontSizeUnits.Tablet};` : ''} 
                ${fluentFormSuccessFontWeight ? `font-weight: ${fluentFormSuccessFontWeight};` : ""}
                ${fluentFormSuccessFontStyle ? `font-style: ${fluentFormSuccessFontStyle};` : ""}
                ${fluentFormSuccessTextTransform ? `text-transform: ${fluentFormSuccessTextTransform};` : ""}
                ${fluentFormSuccessTextDecoration ? `text-decoration: ${fluentFormSuccessTextDecoration};` : ""}
                ${fluentFormSuccessLetterSpacing.Tablet && fluentFormSuccessLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormSuccessLetterSpacing.Tablet}${fluentFormSuccessLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormSuccessLineHeight.Tablet && fluentFormSuccessLineHeightUnits.Tablet ? `line-height: ${fluentFormSuccessLineHeight.Tablet}${fluentFormSuccessLineHeightUnits.Tablet};` : ''}
                ${fluentFormSuccessBorder ? `border: ${fluentFormSuccessBorder};` : ""}
                ${fluentFormSuccessTabletBorderWidth ? `border-width: ${fluentFormSuccessTabletBorderWidth};` : ""}
                ${fluentFormSuccessBorderColor ? `border-color: ${fluentFormSuccessBorderColor};` : ""}
                ${fluentFormSuccessTabletBorderRadiusWidth ? `border-radius: ${fluentFormSuccessTabletBorderRadiusWidth};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-message-success:hover {
                ${fluentFormSuccessBorderHoverColor ? `border-color: ${fluentFormSuccessBorderHoverColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .error.text-danger {
                ${fluentFormErrorColor ? `color: ${fluentFormErrorColor};` : ""}
                ${fluentFormErrorFontFamily ? `font-family: ${fluentFormErrorFontFamily};` : ""}
                ${fluentFormErrorFontSize.Tablet && fluentFormErrorFontSizeUnits.Tablet ? `font-size: ${fluentFormErrorFontSize.Tablet}${fluentFormErrorFontSizeUnits.Tablet};` : ''} 
                ${fluentFormErrorFontWeight ? `font-weight: ${fluentFormErrorFontWeight};` : ""}
                ${fluentFormErrorFontStyle ? `font-style: ${fluentFormErrorFontStyle};` : ""}
                ${fluentFormErrorTextTransform ? `text-transform: ${fluentFormErrorTextTransform};` : ""}
                ${fluentFormErrorTextDecoration ? `text-decoration: ${fluentFormErrorTextDecoration};` : ""}
                ${fluentFormErrorLetterSpacing.Tablet && fluentFormErrorLetterSpacingUnits.Tablet ? `letter-spacing: ${fluentFormErrorLetterSpacing.Tablet}${fluentFormErrorLetterSpacingUnits.Tablet};` : ''}
                ${fluentFormErrorLineHeight.Tablet && fluentFormErrorLineHeightUnits.Tablet ? `line-height: ${fluentFormErrorLineHeight.Tablet}${fluentFormErrorLineHeightUnits.Tablet};` : ''} 
                ${fluentFormErrorTabletPadding ? `padding: ${fluentFormErrorTabletPadding};` : ""}
                ${fluentFormErrorTabletMargin ? `margin: ${fluentFormErrorTabletMargin};` : ""} 
            }  
        }
            
        @media only screen and (max-width: 767px) {

            .${blockID}.fb-fluent-form-wrapper {
                ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''};
                padding: ${MobilePadding};  
                margin: ${MobileMargin};
                border: ${fluentFormGlobalBorder};
                border-width: ${BorderMobileWidth};
                border-radius: ${BorderRadiusMobileWidth} !important;
                ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''};
                ${fluentFormGlobalZIndex.Mobile ? `z-index: ${fluentFormGlobalZIndex.Mobile};` : ''}
                position: relative; 
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper:hover {
                ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''};
                ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''};
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-group {
                ${fluentFormSpacingSize ? `margin-bottom: ${fluentFormSpacingSize.Mobile}${fluentFormSpacingUnits.Mobile};` : ""}  
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group label {
                ${fluentFormLabelColor ? `color: ${fluentFormLabelColor};` : ""}
                ${fluentFormLabelFontFamily ? `font-family: ${fluentFormLabelFontFamily};` : ""}
                ${fluentFormLabelFontSize.Mobile && fluentFormLabelFontSizeUnits.Mobile ? `font-size: ${fluentFormLabelFontSize.Mobile}${fluentFormLabelFontSizeUnits.Mobile};` : ''}
                ${fluentFormLabelFontWeight ? `font-weight: ${fluentFormLabelFontWeight};` : ""}
                ${fluentFormLabelFontStyle ? `font-style: ${fluentFormLabelFontStyle};` : ""}
                ${fluentFormLabelTextTransform ? `text-transform: ${fluentFormLabelTextTransform};` : ""}
                ${fluentFormLabelTextDecoration ? `text-decoration: ${fluentFormLabelTextDecoration};` : ""}
                ${fluentFormLabelLetterSpacing.Mobile && fluentFormLabelLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormLabelLetterSpacing.Mobile}${fluentFormLabelLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormLabelLineHeight.Mobile && fluentFormLabelLineHeightUnits.Mobile ? `line-height: ${fluentFormLabelLineHeight.Mobile}${fluentFormLabelLineHeightUnits.Mobile};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group label:hover {
                ${fluentFormLabelHoverColor ? `color: ${fluentFormLabelHoverColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select {
                ${fluentFormInputBgColor ? `background-color: ${fluentFormInputBgColor};` : ""}
                ${fluentFormInputColor ? `color: ${fluentFormInputColor};` : ""}
                ${fluentFormInputFontFamily ? `font-family: ${fluentFormInputFontFamily};` : ""}
                ${fluentFormInputFontSize.Mobile && fluentFormInputFontSizeUnits.Mobile ? `font-size: ${fluentFormInputFontSize.Mobile}${fluentFormInputFontSizeUnits.Mobile};` : ''}
                ${fluentFormInputFontWeight ? `font-weight: ${fluentFormInputFontWeight};` : ""}
                ${fluentFormInputFontStyle ? `font-style: ${fluentFormInputFontStyle};` : ""}
                ${fluentFormInputTextTransform ? `text-transform: ${fluentFormInputTextTransform};` : ""}
                ${fluentFormInputTextDecoration ? `text-decoration: ${fluentFormInputTextDecoration};` : ""}
                ${fluentFormInputLetterSpacing.Mobile && fluentFormInputLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormInputLetterSpacing.Mobile}${fluentFormInputLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormInputLineHeight.Mobile && fluentFormInputLineHeightUnits.Mobile ? `line-height: ${fluentFormInputLineHeight.Mobile}${fluentFormInputLineHeightUnits.Mobile};` : ''}
                ${fluentFormTextIndentSize ? `text-indent: ${fluentFormTextIndentSize.Mobile}${fluentFormTextIndentSizeUnits.Mobile};` : ""}
                ${fluentFormInputWidthSize ? `width: ${fluentFormInputWidthSize.Mobile}${fluentFormInputWidthSizeUnits.Mobile};` : ""}
                ${fluentFormInputHeightSize ? `height: ${fluentFormInputHeightSize.Mobile}${fluentFormInputHeightSizeUnits.Mobile};` : ""}
                ${fluentFormMobilePadding ? `padding: ${fluentFormMobilePadding};` : ""} 
                ${fluentFormBorder ? `border: ${fluentFormBorder};` : ""}
                ${fluentFormBorderMobileWidth ? `border-width: ${fluentFormBorderMobileWidth};` : ""}
                ${fluentFormBorderColor ? `border-color: ${fluentFormBorderColor};` : ""}
                ${fluentFormBorderRadiusMobileWidth ? `border-radius: ${fluentFormBorderRadiusMobileWidth};` : ""}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select:focus {
                ${fluentFormFocusBorder ? `border: ${fluentFormFocusBorder};` : ""}
                ${fluentFormFocusBorderMobileWidth ? `border-width: ${fluentFormFocusBorderMobileWidth};` : ""}
                ${fluentFormInputFocusColor ? `border-color: ${fluentFormInputFocusColor};` : ""}
                ${fluentFormFocusBorderRadiusMobileWidth ? `border-radius: ${fluentFormFocusBorderRadiusMobileWidth};` : ""}
                box-shadow: none;
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea {
                ${fluentFormTextareaWidthSize ? `width: ${fluentFormTextareaWidthSize.Mobile}${fluentFormTextareaWidthSizeUnits.Mobile};` : ""}
                ${fluentFormTextareaHeightSize ? `height: ${fluentFormTextareaHeightSize.Mobile}${fluentFormTextareaHeightSizeUnits.Mobile};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-webkit-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-ms-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"]{
                width: ${fluentFormRadioFontSize.Mobile}${fluentFormRadioFontSizeUnits.Mobile}; 
                height: ${fluentFormRadioFontSize.Mobile}${fluentFormRadioFontSizeUnits.Mobile};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth.Mobile}${fluentFormRadioBorderWidthUnits.Mobile};` : ""}
                ${fluentFormCheckBoxBorderRadiusMobileWidth ? `border-radius: ${fluentFormCheckBoxBorderRadiusMobileWidth};` : ""}
                position: relative;
                appearance: none;
                transition: all .3s ease-in-out;   
            } 
            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
                width: ${fluentFormRadioFontSize.Mobile}${fluentFormRadioFontSizeUnits.Mobile};
                height: ${fluentFormRadioFontSize.Mobile}${fluentFormRadioFontSizeUnits.Mobile};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth.Mobile}${fluentFormRadioBorderWidthUnits.Mobile};` : ""}
                ${fluentFormRadioBorderRadiusMobileWidth ? `border-radius: ${fluentFormRadioBorderRadiusMobileWidth};` : ""}
                position: relative;
                appearance: none;
                transition: all .3s ease-in-out;   
            }
            .${blockID}.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
            .${blockID}.fb-fluent-form-wrapper input[type="radio"]:checked:before {
                ${fluentFormRadioCheckedColor ? `background: ${fluentFormRadioCheckedColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
                ${fluentFormRadioCheckBoxItemSpacing ? `margin-bottom: ${fluentFormRadioCheckBoxItemSpacing.Mobile}${fluentFormRadioCheckBoxItemSpacingUnits.Mobile};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break,
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break hr {
                text-align: ${fluentFormSectionBreakAlignment};
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
                ${fluentFormSectionBreakTitleColor ? `color: ${fluentFormSectionBreakTitleColor};` : ""}
                ${fluentFormSectionBreakTitleFontFamily ? `font-family: ${fluentFormSectionBreakTitleFontFamily};` : ""}
                ${fluentFormSectionBreakTitleFontSize.Mobile && fluentFormSectionBreakTitleFontSizeUnits.Mobile ? `font-size: ${fluentFormSectionBreakTitleFontSize.Mobile}${fluentFormSectionBreakTitleFontSizeUnits.Mobile};` : ''}
                ${fluentFormSectionBreakTitleFontWeight ? `font-weight: ${fluentFormSectionBreakTitleFontWeight};` : ""}
                ${fluentFormSectionBreakTitleFontStyle ? `font-style: ${fluentFormSectionBreakTitleFontStyle};` : ""}
                ${fluentFormSectionBreakTitleTextTransform ? `text-transform: ${fluentFormSectionBreakTitleTextTransform};` : ""}
                ${fluentFormSectionBreakTitleTextDecoration ? `text-decoration: ${fluentFormSectionBreakTitleTextDecoration};` : ""}
                ${fluentFormSectionBreakTitleLetterSpacing.Mobile && fluentFormSectionBreakTitleLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormSectionBreakTitleLetterSpacing.Mobile}${fluentFormSectionBreakTitleLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormSectionBreakTitleLineHeight.Mobile && fluentFormSectionBreakTitleLineHeightUnits.Mobile ? `line-height: ${fluentFormSectionBreakTitleLineHeight.Mobile}${fluentFormSectionBreakTitleLineHeightUnits.Mobile};` : ''}
                ${fluentFormSectionBreakTitleMobilePadding ? `padding: ${fluentFormSectionBreakTitleMobilePadding};` : ""}
                ${fluentFormSectionBreakTitleMobileMargin ? `margin: ${fluentFormSectionBreakTitleMobileMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
                ${fluentFormSectionBreakTitleHoverColor ? `color: ${fluentFormSectionBreakTitleHoverColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
                ${fluentFormSectionBreakDescColor ? `color: ${fluentFormSectionBreakDescColor};` : ""}
                ${fluentFormSectionBreakDescFontFamily ? `font-family: ${fluentFormSectionBreakDescFontFamily};` : ""}
                ${fluentFormSectionBreakDescFontSize.Mobile && fluentFormSectionBreakDescFontSizeUnits.Mobile ? `font-size: ${fluentFormSectionBreakDescFontSize.Mobile}${fluentFormSectionBreakDescFontSizeUnits.Mobile};` : ''} 
                ${fluentFormSectionBreakDescFontWeight ? `font-weight: ${fluentFormSectionBreakDescFontWeight};` : ""}
                ${fluentFormSectionBreakDescFontStyle ? `font-style: ${fluentFormSectionBreakDescFontStyle};` : ""}
                ${fluentFormSectionBreakDescTextTransform ? `text-transform: ${fluentFormSectionBreakDescTextTransform};` : ""}
                ${fluentFormSectionBreakDescTextDecoration ? `text-decoration: ${fluentFormSectionBreakDescTextDecoration};` : ""}
                ${fluentFormSectionBreakDescLetterSpacing.Mobile && fluentFormSectionBreakDescLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormSectionBreakDescLetterSpacing.Mobile}${fluentFormSectionBreakDescLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormSectionBreakDescLineHeight.Mobile && fluentFormSectionBreakDescLineHeightUnits.Mobile ? `line-height: ${fluentFormSectionBreakDescLineHeight.Mobile}${fluentFormSectionBreakDescLineHeightUnits.Mobile};` : ''}
                ${fluentFormSectionBreakDescMobilePadding ? `padding: ${fluentFormSectionBreakDescMobilePadding};` : ""}
                ${fluentFormSectionBreakDescMobileMargin ? `margin: ${fluentFormSectionBreakDescMobileMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {
                ${fluentFormSectionBreakDescHoverColor ? `color: ${fluentFormSectionBreakDescHoverColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-custom_html > * {
                ${fluentFormHtmlAlignment ? `text-align: ${fluentFormHtmlAlignment};` : ""}
                ${fluentFormHtmlColor ? `color: ${fluentFormHtmlColor};` : ""}
                ${fluentFormHtmlFontFamily ? `font-family: ${fluentFormHtmlFontFamily};` : ""}
                ${fluentFormHtmlFontSize.Mobile && fluentFormHtmlFontSizeUnits.Mobile ? `font-size: ${fluentFormHtmlFontSize.Mobile}${fluentFormHtmlFontSizeUnits.Mobile};` : ''} 
                ${fluentFormHtmlFontWeight ? `font-weight: ${fluentFormHtmlFontWeight};` : ""}
                ${fluentFormHtmlFontStyle ? `font-style: ${fluentFormHtmlFontStyle};` : ""}
                ${fluentFormHtmlTextTransform ? `text-transform: ${fluentFormHtmlTextTransform};` : ""}
                ${fluentFormHtmlTextDecoration ? `text-decoration: ${fluentFormHtmlTextDecoration};` : ""}
                ${fluentFormHtmlLetterSpacing.Mobile && fluentFormHtmlLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormHtmlLetterSpacing.Mobile}${fluentFormHtmlLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormHtmlLineHeight.Mobile && fluentFormHtmlLineHeightUnits.Mobile ? `line-height: ${fluentFormHtmlLineHeight.Mobile}${fluentFormHtmlLineHeightUnits.Mobile};` : ''} 
                ${fluentFormHtmlMobilePadding ? `padding: ${fluentFormHtmlMobilePadding};` : ""}
                ${fluentFormHtmlMobileMargin ? `margin: ${fluentFormHtmlMobileMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-custom_html > *:hover {
                ${fluentFormHtmlHoverColor ? `color: ${fluentFormHtmlHoverColor};` : ""}
            }
            
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
                ${fluentFormSubmitAlignment ? `text-align: ${fluentFormSubmitAlignment};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitHeight.Mobile ? `height: ${fluentFormSubmitHeight.Mobile}${fluentFormSubmitHeightUnits.Mobile};` : ""} 
                ${fluentFormSubmitColor ? `color: ${fluentFormSubmitColor};` : ""}
                ${fluentFormSubmitBgColor ? `background: ${fluentFormSubmitBgColor};` : ""}
                ${fluentFormSubmitFontFamily ? `font-family: ${fluentFormSubmitFontFamily};` : ""}
                ${fluentFormSubmitFontSize.Mobile && fluentFormSubmitFontSizeUnits.Mobile ? `font-size: ${fluentFormSubmitFontSize.Mobile}${fluentFormSubmitFontSizeUnits.Mobile};` : ''} 
                ${fluentFormSubmitFontWeight ? `font-weight: ${fluentFormSubmitFontWeight};` : ""}
                ${fluentFormSubmitFontStyle ? `font-style: ${fluentFormSubmitFontStyle};` : ""}
                ${fluentFormSubmitTextTransform ? `text-transform: ${fluentFormSubmitTextTransform};` : ""}
                ${fluentFormSubmitTextDecoration ? `text-decoration: ${fluentFormSubmitTextDecoration};` : ""}
                ${fluentFormSubmitLetterSpacing.Mobile && fluentFormSubmitLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormSubmitLetterSpacing.Mobile}${fluentFormSubmitLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormSubmitLineHeight.Mobile && fluentFormSubmitLineHeightUnits.Mobile ? `line-height: ${fluentFormSubmitLineHeight.Mobile}${fluentFormSubmitLineHeightUnits.Mobile};` : ''} 
                ${fluentFormSubmitMobilePadding ? `padding: ${fluentFormSubmitMobilePadding};` : ""}
                ${fluentFormSubmitMobileMargin ? `margin: ${fluentFormSubmitMobileMargin};` : ""}

                ${fluentFormSubmitBorder ? `border: ${fluentFormSubmitBorder};` : ""}
                ${fluentFormSubmitMobileBorderWidth ? `border-width: ${fluentFormSubmitMobileBorderWidth};` : ""}
                ${fluentFormSubmitBorderColor ? `border-color: ${fluentFormSubmitBorderColor};` : ""}
                ${fluentFormSubmitMobileBorderRadiusWidth ? `border-radius: ${fluentFormSubmitMobileBorderRadiusWidth};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
                ${fluentFormSubmitHoverColor ? `color: ${fluentFormSubmitHoverColor};` : ""}
                ${fluentFormSubmitBgHoverColor ? `background: ${fluentFormSubmitBgHoverColor};` : ""}
                ${fluentFormSubmitBorderHoverColor ? `border-color: ${fluentFormSubmitBorderHoverColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
                ${fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth.Mobile 
                ? `width: ${fluentFormSubmitWidth.Mobile}${fluentFormSubmitWidthUnits.Mobile};` 
                : ''}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-message-success {
                ${fluentFormSuccessColor ? `color: ${fluentFormSuccessColor};` : ""}
                ${fluentFormSuccessBgColor ? `background: ${fluentFormSuccessBgColor};` : ""}
                ${fluentFormSuccessFontFamily ? `font-family: ${fluentFormSuccessFontFamily};` : ""}
                ${fluentFormSuccessFontSize.Mobile && fluentFormSuccessFontSizeUnits.Mobile ? `font-size: ${fluentFormSuccessFontSize.Mobile}${fluentFormSuccessFontSizeUnits.Mobile};` : ''} 
                ${fluentFormSuccessFontWeight ? `font-weight: ${fluentFormSuccessFontWeight};` : ""}
                ${fluentFormSuccessFontStyle ? `font-style: ${fluentFormSuccessFontStyle};` : ""}
                ${fluentFormSuccessTextTransform ? `text-transform: ${fluentFormSuccessTextTransform};` : ""}
                ${fluentFormSuccessTextDecoration ? `text-decoration: ${fluentFormSuccessTextDecoration};` : ""}
                ${fluentFormSuccessLetterSpacing.Mobile && fluentFormSuccessLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormSuccessLetterSpacing.Mobile}${fluentFormSuccessLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormSuccessLineHeight.Mobile && fluentFormSuccessLineHeightUnits.Mobile ? `line-height: ${fluentFormSuccessLineHeight.Mobile}${fluentFormSuccessLineHeightUnits.Mobile};` : ''}
                ${fluentFormSuccessBorder ? `border: ${fluentFormSuccessBorder};` : ""}
                ${fluentFormSuccessMobileBorderWidth ? `border-width: ${fluentFormSuccessMobileBorderWidth};` : ""}
                ${fluentFormSuccessBorderColor ? `border-color: ${fluentFormSuccessBorderColor};` : ""}
                ${fluentFormSuccessMobileBorderRadiusWidth ? `border-radius: ${fluentFormSuccessMobileBorderRadiusWidth};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-message-success:hover {
                ${fluentFormSuccessBorderHoverColor ? `border-color: ${fluentFormSuccessBorderHoverColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .error.text-danger {
                ${fluentFormErrorColor ? `color: ${fluentFormErrorColor};` : ""}
                ${fluentFormErrorFontFamily ? `font-family: ${fluentFormErrorFontFamily};` : ""}
                ${fluentFormErrorFontSize.Mobile && fluentFormErrorFontSizeUnits.Mobile ? `font-size: ${fluentFormErrorFontSize.Mobile}${fluentFormErrorFontSizeUnits.Mobile};` : ''} 
                ${fluentFormErrorFontWeight ? `font-weight: ${fluentFormErrorFontWeight};` : ""}
                ${fluentFormErrorFontStyle ? `font-style: ${fluentFormErrorFontStyle};` : ""}
                ${fluentFormErrorTextTransform ? `text-transform: ${fluentFormErrorTextTransform};` : ""}
                ${fluentFormErrorTextDecoration ? `text-decoration: ${fluentFormErrorTextDecoration};` : ""}
                ${fluentFormErrorLetterSpacing.Mobile && fluentFormErrorLetterSpacingUnits.Mobile ? `letter-spacing: ${fluentFormErrorLetterSpacing.Mobile}${fluentFormErrorLetterSpacingUnits.Mobile};` : ''}
                ${fluentFormErrorLineHeight.Mobile && fluentFormErrorLineHeightUnits.Mobile ? `line-height: ${fluentFormErrorLineHeight.Mobile}${fluentFormErrorLineHeightUnits.Mobile};` : ''} 
                ${fluentFormErrorMobilePadding ? `padding: ${fluentFormErrorMobilePadding};` : ""}
                ${fluentFormErrorMobileMargin ? `margin: ${fluentFormErrorMobileMargin};` : ""} 
            } 
        }


    `, [
        blockID,
        deviceType,
        fluentFormGlobalZIndex,
        formId,
        showLabels,
        showPlaceholder,
        showErrorMessage,

        fluentFormLabelColorSwitcher,
        fluentFormLabelColor,
        fluentFormLabelHoverColor,
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

        fluentFormInputBgColor,
        fluentFormInputColor,
        fluentFormInputFocusColor,
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
        fluentFormFocusBorderDesktopWidth,
        fluentFormFocusBorderTabletWidth,
        fluentFormFocusBorderMobileWidth,

        fluentFormFocusBorderRadiusUnits,
        fluentFormFocusBorderRadiusDesktop,
        fluentFormFocusBorderRadiusTablet,
        fluentFormFocusBorderRadiusMobile,
        fluentFormFocusBorderRadiusLink,
        fluentFormFocusBorderRadiusDesktopWidth,
        fluentFormFocusBorderRadiusTabletWidth,
        fluentFormFocusBorderRadiusMobileWidth,

        

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

        fluentFormDesktopPadding,
        fluentFormTabletPadding,
        fluentFormMobilePadding,

        fluentFormBorderDesktopWidth,
        fluentFormBorderTabletWidth,
        fluentFormBorderMobileWidth,

        fluentFormBorderRadiusDesktopWidth,
        fluentFormBorderRadiusTabletWidth,
        fluentFormBorderRadiusMobileWidth,

        fluentFormRadioBorderRadiusDesktopWidth,
        fluentFormRadioBorderRadiusTabletWidth,
        fluentFormRadioBorderRadiusMobileWidth,

        fluentFormCheckBoxBorderRadiusDesktopWidth,
        fluentFormCheckBoxBorderRadiusTabletWidth,
        fluentFormCheckBoxBorderRadiusMobileWidth,

        fluentFormSectionBreakTitleDesktopPadding,
        fluentFormSectionBreakTitleTabletPadding,
        fluentFormSectionBreakTitleMobilePadding,

        fluentFormSectionBreakTitleDesktopMargin,
        fluentFormSectionBreakTitleTabletMargin,
        fluentFormSectionBreakTitleMobileMargin,

        fluentFormSectionBreakDescDesktopPadding,
        fluentFormSectionBreakDescTabletPadding,
        fluentFormSectionBreakDescMobilePadding,

        fluentFormSectionBreakDescDesktopMargin,
        fluentFormSectionBreakDescTabletMargin,
        fluentFormSectionBreakDescMobileMargin,

        fluentFormHtmlDesktopPadding,
        fluentFormHtmlTabletPadding,
        fluentFormHtmlMobilePadding,

        fluentFormHtmlDesktopMargin,
        fluentFormHtmlTabletMargin,
        fluentFormHtmlMobileMargin,

        fluentFormSubmitDesktopPadding,
        fluentFormSubmitTabletPadding,
        fluentFormSubmitMobilePadding,

        fluentFormSubmitDesktopMargin,
        fluentFormSubmitTabletMargin,
        fluentFormSubmitMobileMargin,

        fluentFormSubmitDesktopBorderWidth,
        fluentFormSubmitTabletBorderWidth,
        fluentFormSubmitMobileBorderWidth,

        fluentFormSubmitDesktopBorderRadiusWidth,
        fluentFormSubmitTabletBorderRadiusWidth,
        fluentFormSubmitMobileBorderRadiusWidth,

        fluentFormSuccessDesktopBorderWidth,
        fluentFormSuccessTabletBorderWidth,
        fluentFormSuccessMobileBorderWidth,

        fluentFormSuccessDesktopBorderRadiusWidth,
        fluentFormSuccessTabletBorderRadiusWidth,
        fluentFormSuccessMobileBorderRadiusWidth,

        fluentFormErrorDesktopPadding,
        fluentFormErrorTabletPadding,
        fluentFormErrorMobilePadding,

        fluentFormErrorDesktopMargin,
        fluentFormErrorTabletMargin,
        fluentFormErrorMobileMargin,

        DesktopPadding,
        TabletPadding,
        MobilePadding,

        DesktopMargin,
        TabletMargin,
        MobileMargin,

        BorderDesktopWidth,
        BorderTabletWidth,
        BorderMobileWidth,

        BorderRadiusDesktopWidth,
        BorderRadiusTabletWidth,
        BorderRadiusMobileWidth,

        fluentFormGlobalBoxShadowSwitcher,
        fluentFormGlobalBoxShadowValues,
        fluentFormGlobalBoxShadowCssValue,
        fluentFormGlobalBoxShadowHoverValues,
        fluentFormGlobalBoxShadowHoverCssValue,


    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle]);


    const editorStyle = allBlockStyle.replace(/\s+/g, ' ').trim();
 

    return (
        <>
            <style>
                {editorStyle}
            </style>
            <InspectorControls key="controls">
                <div className="fb-inspector-control">
                    <TabPanel
                        className="fb-parent-tab-panel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "general",
                                title: "General",
                                className: "fb-tab general",
                            },
                            {
                                name: "styles",
                                title: "Style",
                                className: "fb-tab styles",
                            },
                            {
                                name: "advanced",
                                title: "Advanced",
                                className: "fb-tab advanced",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls" + tab.name}>
                                {tab.name === 'general' && (
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
                                )}

                                {tab.name === "styles" && (
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
                                                    setGlobalColor={(value) => setAttributes({ fluentFormLabelColor: value })}
                                                />
                                            )}

                                            {fluentFormLabelColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={fluentFormLabelHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ fluentFormLabelHoverColor: value })}
                                                />
                                            )}


                                            <FB_TypographyControl
                                                fontFamily={fluentFormLabelFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ fluentFormLabelFontFamily: value })}

                                                fontSize={fluentFormLabelFontSize}
                                                onChangeFontSize={(value) => setAttributes({ fluentFormLabelFontSize: value })}

                                                fontSizeUnits={fluentFormLabelFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormLabelFontSizeUnits: value })}

                                                fontWeight={fluentFormLabelFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ fluentFormLabelFontWeight: value })}

                                                fontStyle={fluentFormLabelFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ fluentFormLabelFontStyle: value })}

                                                textTransform={fluentFormLabelTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ fluentFormLabelTextTransform: value })}

                                                textDecoration={fluentFormLabelTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ fluentFormLabelTextDecoration: value })}

                                                letterSpacing={fluentFormLabelLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ fluentFormLabelLetterSpacing: value })}

                                                letterSpacingUnits={fluentFormLabelLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormLabelLetterSpacingUnits: value })}

                                                lineHeight={fluentFormLabelLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ fluentFormLabelLineHeight: value })}

                                                lineHeightUnits={fluentFormLabelLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ fluentFormLabelLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />
                                        </PanelBody>
                                        <PanelBody title={__("Input & Textarea", "frontis-blocks")} initialOpen={false}>

                                            <FB_ColorControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColor={fluentFormInputBgColor}
                                                setGlobalColor={(value) => setAttributes({ fluentFormInputBgColor: value })}
                                            />

                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={fluentFormInputColor}
                                                setGlobalColor={(value) => setAttributes({ fluentFormInputColor: value })}
                                            />


                                            <FB_TypographyControl
                                                fontFamily={fluentFormInputFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ fluentFormInputFontFamily: value })}

                                                fontSize={fluentFormInputFontSize}
                                                onChangeFontSize={(value) => setAttributes({ fluentFormInputFontSize: value })}

                                                fontSizeUnits={fluentFormInputFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormInputFontSizeUnits: value })}

                                                fontWeight={fluentFormInputFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ fluentFormInputFontWeight: value })}

                                                fontStyle={fluentFormInputFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ fluentFormInputFontStyle: value })}

                                                textTransform={fluentFormInputTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ fluentFormInputTextTransform: value })}

                                                textDecoration={fluentFormInputTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ fluentFormInputTextDecoration: value })}

                                                letterSpacing={fluentFormInputLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ fluentFormInputLetterSpacing: value })}

                                                letterSpacingUnits={fluentFormInputLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormInputLetterSpacingUnits: value })}

                                                lineHeight={fluentFormInputLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ fluentFormInputLineHeight: value })}

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
                                                setGlobalColor={(value) => setAttributes({ fluentFormBorderColor: value })}
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
                                                setGlobalColor={(value) => setAttributes({ fluentFormInputFocusColor: value })}
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
                                                setGlobalColor={(value) => setAttributes({ fluentFormPlaceholderColor: value })}
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
                                                setGlobalColor={(value) => setAttributes({ fluentFormRadioColor: value })}
                                            />

                                            <FB_ColorControl
                                                label={__("Checked Color", "frontis-blocks")}
                                                globalColor={fluentFormRadioCheckedColor}
                                                setGlobalColor={(value) => setAttributes({ fluentFormRadioCheckedColor: value })}
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
                                                setGlobalColor={(value) => setAttributes({ fluentFormRadioBorderColor: value })}
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
                                                        setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakTitleColor: value })}
                                                    />
                                                )}

                                                {fluentFormSectionBreakTitleColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={fluentFormSectionBreakTitleHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakTitleHoverColor: value })}
                                                    />
                                                )}

                                                <FB_TypographyControl
                                                    fontFamily={fluentFormSectionBreakTitleFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ fluentFormSectionBreakTitleFontFamily: value })}

                                                    fontSize={fluentFormSectionBreakTitleFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ fluentFormSectionBreakTitleFontSize: value })}

                                                    fontSizeUnits={fluentFormSectionBreakTitleFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSectionBreakTitleFontSizeUnits: value })}

                                                    fontWeight={fluentFormSectionBreakTitleFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ fluentFormSectionBreakTitleFontWeight: value })}

                                                    fontStyle={fluentFormSectionBreakTitleFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ fluentFormSectionBreakTitleFontStyle: value })}

                                                    textTransform={fluentFormSectionBreakTitleTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ fluentFormSectionBreakTitleTextTransform: value })}

                                                    textDecoration={fluentFormSectionBreakTitleTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ fluentFormSectionBreakTitleTextDecoration: value })}

                                                    letterSpacing={fluentFormSectionBreakTitleLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ fluentFormSectionBreakTitleLetterSpacing: value })}

                                                    letterSpacingUnits={fluentFormSectionBreakTitleLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSectionBreakTitleLetterSpacingUnits: value })}

                                                    lineHeight={fluentFormSectionBreakTitleLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ fluentFormSectionBreakTitleLineHeight: value })}

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
                                                        setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakDescColor: value })}
                                                    />
                                                )}

                                                {fluentFormSectionBreakDescColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={fluentFormSectionBreakDescHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ fluentFormSectionBreakDescHoverColor: value })}
                                                    />
                                                )}


                                                <FB_TypographyControl
                                                    fontFamily={fluentFormSectionBreakDescFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ fluentFormSectionBreakDescFontFamily: value })}

                                                    fontSize={fluentFormSectionBreakDescFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ fluentFormSectionBreakDescFontSize: value })}

                                                    fontSizeUnits={fluentFormSectionBreakDescFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSectionBreakDescFontSizeUnits: value })}

                                                    fontWeight={fluentFormSectionBreakDescFontWeight} 
                                                    onChangeFontWeight={(value) => setAttributes({ fluentFormSectionBreakDescFontWeight: value })}

                                                    fontStyle={fluentFormSectionBreakDescFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ fluentFormSectionBreakDescFontStyle: value })}

                                                    textTransform={fluentFormSectionBreakDescTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ fluentFormSectionBreakDescTextTransform: value })}

                                                    textDecoration={fluentFormSectionBreakDescTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ fluentFormSectionBreakDescTextDecoration: value })}

                                                    letterSpacing={fluentFormSectionBreakDescLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ fluentFormSectionBreakDescLetterSpacing: value })}

                                                    letterSpacingUnits={fluentFormSectionBreakDescLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSectionBreakDescLetterSpacingUnits: value })}

                                                    lineHeight={fluentFormSectionBreakDescLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ fluentFormSectionBreakDescLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ fluentFormHtmlColor: value })}
                                                />
                                            )}

                                            {fluentFormHtmlColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={fluentFormHtmlHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ fluentFormHtmlHoverColor: value })}
                                                />
                                            )}


                                            <FB_TypographyControl
                                                fontFamily={fluentFormHtmlFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ fluentFormHtmlFontFamily: value })}

                                                fontSize={fluentFormHtmlFontSize}
                                                onChangeFontSize={(value) => setAttributes({ fluentFormHtmlFontSize: value })}

                                                fontSizeUnits={fluentFormHtmlFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormHtmlFontSizeUnits: value })}

                                                fontWeight={fluentFormHtmlFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ fluentFormHtmlFontWeight: value })}

                                                fontStyle={fluentFormHtmlFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ fluentFormHtmlFontStyle: value })}

                                                textTransform={fluentFormHtmlTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ fluentFormHtmlTextTransform: value })}

                                                textDecoration={fluentFormHtmlTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ fluentFormHtmlTextDecoration: value })}

                                                letterSpacing={fluentFormHtmlLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ fluentFormHtmlLetterSpacing: value })}

                                                letterSpacingUnits={fluentFormHtmlLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormHtmlLetterSpacingUnits: value })}

                                                lineHeight={fluentFormHtmlLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ fluentFormHtmlLineHeight: value })}

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
                                                fontFamily={fluentFormSubmitFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ fluentFormSubmitFontFamily: value })}

                                                fontSize={fluentFormSubmitFontSize}
                                                onChangeFontSize={(value) => setAttributes({ fluentFormSubmitFontSize: value })}

                                                fontSizeUnits={fluentFormSubmitFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSubmitFontSizeUnits: value })}

                                                fontWeight={fluentFormSubmitFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ fluentFormSubmitFontWeight: value })}

                                                fontStyle={fluentFormSubmitFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ fluentFormSubmitFontStyle: value })}

                                                textTransform={fluentFormSubmitTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ fluentFormSubmitTextTransform: value })}

                                                textDecoration={fluentFormSubmitTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ fluentFormSubmitTextDecoration: value })}

                                                letterSpacing={fluentFormSubmitLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ fluentFormSubmitLetterSpacing: value })}

                                                letterSpacingUnits={fluentFormSubmitLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSubmitLetterSpacingUnits: value })}

                                                lineHeight={fluentFormSubmitLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ fluentFormSubmitLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSubmitColor: value })}
                                                />
                                            )}

                                            {fluentFormSubmitColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={fluentFormSubmitHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSubmitHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSubmitBgColor: value })}
                                                />
                                            )}

                                            {fluentFormSubmitBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={fluentFormSubmitBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSubmitBgHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSubmitBorderColor: value })}
                                                />
                                            )}

                                            {fluentFormSubmitBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={fluentFormSubmitBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSubmitBorderHoverColor: value })}
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
                                                fontFamily={fluentFormSuccessFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ fluentFormSuccessFontFamily: value })}

                                                fontSize={fluentFormSuccessFontSize}
                                                onChangeFontSize={(value) => setAttributes({ fluentFormSuccessFontSize: value })}

                                                fontSizeUnits={fluentFormSuccessFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormSuccessFontSizeUnits: value })}

                                                fontWeight={fluentFormSuccessFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ fluentFormSuccessFontWeight: value })}

                                                fontStyle={fluentFormSuccessFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ fluentFormSuccessFontStyle: value })}

                                                textTransform={fluentFormSuccessTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ fluentFormSuccessTextTransform: value })}

                                                textDecoration={fluentFormSuccessTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ fluentFormSuccessTextDecoration: value })}

                                                letterSpacing={fluentFormSuccessLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ fluentFormSuccessLetterSpacing: value })}

                                                letterSpacingUnits={fluentFormSuccessLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormSuccessLetterSpacingUnits: value })}

                                                lineHeight={fluentFormSuccessLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ fluentFormSuccessLineHeight: value })}

                                                lineHeightUnits={fluentFormSuccessLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ fluentFormSuccessLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={fluentFormSuccessColor}
                                                setGlobalColor={(value) => setAttributes({ fluentFormSuccessColor: value })}
                                            />

                                            <FB_ColorControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColor={fluentFormSuccessBgColor}
                                                setGlobalColor={(value) => setAttributes({ fluentFormSuccessBgColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSuccessBorderColor: value })}
                                                />
                                            )}

                                            {fluentFormSuccessBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={fluentFormSuccessBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ fluentFormSuccessBorderHoverColor: value })}
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
                                                fontFamily={fluentFormErrorFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ fluentFormErrorFontFamily: value })}

                                                fontSize={fluentFormErrorFontSize}
                                                onChangeFontSize={(value) => setAttributes({ fluentFormErrorFontSize: value })}

                                                fontSizeUnits={fluentFormErrorFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ fluentFormErrorFontSizeUnits: value })}

                                                fontWeight={fluentFormErrorFontWeight} 
                                                onChangeFontWeight={(value) => setAttributes({ fluentFormErrorFontWeight: value })}

                                                fontStyle={fluentFormErrorFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ fluentFormErrorFontStyle: value })}

                                                textTransform={fluentFormErrorTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ fluentFormErrorTextTransform: value })}

                                                textDecoration={fluentFormErrorTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ fluentFormErrorTextDecoration: value })}

                                                letterSpacing={fluentFormErrorLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ fluentFormErrorLetterSpacing: value })}

                                                letterSpacingUnits={fluentFormErrorLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ fluentFormErrorLetterSpacingUnits: value })}

                                                lineHeight={fluentFormErrorLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ fluentFormErrorLineHeight: value })}

                                                lineHeightUnits={fluentFormErrorLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ fluentFormErrorLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_ColorControl
                                                label={__("Color", "frontis-blocks")}
                                                globalColor={fluentFormErrorColor}
                                                setGlobalColor={(value) => setAttributes({ fluentFormErrorColor: value })}
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
                                )}

                                {tab.name === "advanced" && (
                                    <>
                                        <div className="fb-setting-advanced-tab-wrapper">
                                            <div className="fb-setting-inner-wrapper">
                                                <PanelBody
                                                    title={__("Advanced", "frontis-blocks")}
                                                    initialOpen={true}
                                                    className='fb-setting-z-index-header'
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
                                                            setGlobalColor={(value) => setAttributes({ fluentFormGlobalBgColor: value })}
                                                        />
                                                    )}

                                                    {fluentFormGlobalBgColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={fluentFormGlobalBgHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ fluentFormGlobalBgHoverColor: value })}
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
                                                            setGlobalColor={(value) => setAttributes({ fluentFormGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {fluentFormGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={fluentFormGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ fluentFormGlobalBorderHoverColor: value })}
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


                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>
        </>
    );
}