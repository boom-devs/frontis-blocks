import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
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
    ColorPalette,
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
} from "./constants/constants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_Color from '@Components/color';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        DeviceType,
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

        fluentFormInputBgColorSwitcher,
        fluentFormInputBgColor,
        fluentFormInputBgHoverColor,
        fluentFormInputColorSwitcher,
        fluentFormInputColor,
        fluentFormInputHoverColor,
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
        fluentFormBorderColorSwitcher,
        fluentFormBorderColor,
        fluentFormBorderHoverColor,
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


    } = attributes;
    

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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** end  border */

    /** End  Border Radius */
    const fluentFormBorderRadiusDesktopWidth = `${fluentFormBorderRadiusDesktop.top}${fluentFormBorderRadiusUnits.Desktop} ${fluentFormBorderRadiusDesktop.right}${fluentFormBorderRadiusUnits.Desktop} ${fluentFormBorderRadiusDesktop.bottom}${fluentFormBorderRadiusUnits.Desktop} ${fluentFormBorderRadiusDesktop.left}${fluentFormBorderRadiusUnits.Desktop}`;
    const fluentFormBorderRadiusTabletWidth = `${fluentFormBorderRadiusTablet.top}${fluentFormBorderRadiusUnits.Tablet} ${fluentFormBorderRadiusTablet.right}${fluentFormBorderRadiusUnits.Tablet} ${fluentFormBorderRadiusTablet.bottom}${fluentFormBorderRadiusUnits.Tablet} ${fluentFormBorderRadiusTablet.left}${fluentFormBorderRadiusUnits.Tablet}`;
    const fluentFormBorderRadiusMobileWidth = `${fluentFormBorderRadiusMobile.top}${fluentFormBorderRadiusUnits.Mobile} ${fluentFormBorderRadiusMobile.right}${fluentFormBorderRadiusUnits.Mobile} ${fluentFormBorderRadiusMobile.bottom}${fluentFormBorderRadiusUnits.Mobile} ${fluentFormBorderRadiusMobile.left}${fluentFormBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

    /** Start Radio border radius*/
    const fluentFormRadioBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormRadioBorderRadiusLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** end Radio border */

    /** End Radio Border Radius */
    const fluentFormCheckBoxBorderRadiusDesktopWidth = `${fluentFormCheckBoxBorderRadiusDesktop.top}${fluentFormCheckBoxBorderRadiusUnits.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop.right}${fluentFormCheckBoxBorderRadiusUnits.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop.bottom}${fluentFormCheckBoxBorderRadiusUnits.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop.left}${fluentFormCheckBoxBorderRadiusUnits.Desktop}`;
    const fluentFormCheckBoxBorderRadiusTabletWidth = `${fluentFormCheckBoxBorderRadiusTablet.top}${fluentFormCheckBoxBorderRadiusUnits.Tablet} ${fluentFormCheckBoxBorderRadiusTablet.right}${fluentFormCheckBoxBorderRadiusUnits.Tablet} ${fluentFormCheckBoxBorderRadiusTablet.bottom}${fluentFormCheckBoxBorderRadiusUnits.Tablet} ${fluentFormCheckBoxBorderRadiusTablet.left}${fluentFormCheckBoxBorderRadiusUnits.Tablet}`;
    const fluentFormCheckBoxBorderRadiusMobileWidth = `${fluentFormCheckBoxBorderRadiusMobile.top}${fluentFormCheckBoxBorderRadiusUnits.Mobile} ${fluentFormCheckBoxBorderRadiusMobile.right}${fluentFormCheckBoxBorderRadiusUnits.Mobile} ${fluentFormCheckBoxBorderRadiusMobile.bottom}${fluentFormCheckBoxBorderRadiusUnits.Mobile} ${fluentFormCheckBoxBorderRadiusMobile.left}${fluentFormCheckBoxBorderRadiusUnits.Mobile}`;
    /** End Radio Border Radius */



    /** Start Global padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( fluentFormGlobalPaddingLink ) {
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
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
            switch ( DeviceType ) {
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
            switch ( DeviceType ) {
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
                [DeviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const BorderRadiusDesktopWidth = `${fluentFormGlobalBorderRadiusDesktop.top}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.right}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.bottom}${fluentFormGlobalBorderRadiusUnits.Desktop} ${fluentFormGlobalBorderRadiusDesktop.left}${fluentFormGlobalBorderRadiusUnits.Desktop}`;
    const BorderRadiusTabletWidth = `${fluentFormGlobalBorderRadiusTablet.top}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.right}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.bottom}${fluentFormGlobalBorderRadiusUnits.Tablet} ${fluentFormGlobalBorderRadiusTablet.left}${fluentFormGlobalBorderRadiusUnits.Tablet}`;
    const BorderRadiusMobileWidth = `${fluentFormGlobalBorderRadiusMobile.top}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.right}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.bottom}${fluentFormGlobalBorderRadiusUnits.Mobile} ${fluentFormGlobalBorderRadiusMobile.left}${fluentFormGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

    /** Start Label Color */
    const handleLabelColorSwitcherChange = (value) => {
        setAttributes({ fluentFormLabelColorSwitcher: value });
    };
    const handleLabelColorChange = (value) => {
        setAttributes({ fluentFormLabelColor: value });
    };
    const handleLabelHoverColorChange = (value) => {
        setAttributes({ fluentFormLabelHoverColor: value });
    };
    /** End Label Color */

    /** Start Input & Textarea BgColor */
    const handleInputBgColorSwitcherChange = (value) => {
        setAttributes({ fluentFormInputBgColorSwitcher: value });
    };
    const handleInputBgColorChange = (value) => {
        setAttributes({ fluentFormInputBgColor: value });
    };
    const handleInputBgHoverColorChange = (value) => {
        setAttributes({ fluentFormInputBgHoverColor: value });
    };
    /** End Input & Textarea BgColor */

    /** Start Input & Textarea Color */
    const handleInputColorSwitcherChange = (value) => {
        setAttributes({ fluentFormInputColorSwitcher: value });
    };
    const handleInputColorChange = (value) => {
        setAttributes({ fluentFormInputColor: value });
    };
    const handleInputHoverColorChange = (value) => {
        setAttributes({ fluentFormInputHoverColor: value });
    };
    /** End Input & Textarea Color */


    /** Start fluentFormTextIndentSize */
    const fluentFormTextIndentSizeHandler = (value) => {
        setAttributes({ fluentFormTextIndentSize: value });
    };
    const fluentFormTextIndentSizeUnitsHandler = (value) => {
        setAttributes({ fluentFormTextIndentSizeUnits: value });
    };
    /** End fluentFormTextIndentSize */

    /** Start fluentFormInputWidthSize */
    const fluentFormInputWidthSizeHandler = (value) => {
        setAttributes({ fluentFormInputWidthSize: value });
    };
    const fluentFormInputWidthSizeUnitsHandler = (value) => {
        setAttributes({ fluentFormInputWidthSizeUnits: value });
    };
    /** End fluentFormInputWidthSize */

    /** Start fluentFormInputHeightSize */
    const fluentFormInputHeightSizeHandler = (value) => {
        setAttributes({ fluentFormInputHeightSize: value });
    };
    const fluentFormInputHeightSizeUnitsHandler = (value) => {
        setAttributes({ fluentFormInputHeightSizeUnits: value });
    };
    /** End fluentFormInputHeightSize */

    /** Start fluentFormTextareaWidthSize */
    const fluentFormTextareaWidthSizeHandler = (value) => {
        setAttributes({ fluentFormTextareaWidthSize: value });
    };
    const fluentFormTextareaWidthSizeUnitsHandler = (value) => {
        setAttributes({ fluentFormTextareaWidthSizeUnits: value });
    };
    /** End fluentFormTextareaWidthSize */


    /** Start fluentFormTextareaHeightSize */
    const fluentFormTextareaHeightSizeHandler = (value) => {
        setAttributes({ fluentFormTextareaHeightSize: value });
    };
    const fluentFormTextareaHeightSizeUnitsHandler = (value) => {
        setAttributes({ fluentFormTextareaHeightSizeUnits: value });
    };
    /** End fluentFormTextareaHeightSize */

    /** Start fluentFormSpacingSize */
    const fluentFormSpacingSizeHandler = (value) => {
        setAttributes({ fluentFormSpacingSize: value });
    };
    const fluentFormSpacingUnitsHandler = (value) => {
        setAttributes({ fluentFormSpacingUnits: value });
    };
    /** End fluentFormSpacingSize */ 


    /** StartfluentFormBorderColor */
    const handleBorderColorSwitcherChange = (value) => {
        setAttributes({ fluentFormBorderColorSwitcher: value });
    };
    const handleBorderColorChange = (value) => {
        setAttributes({ fluentFormBorderColor: value });
    };
    const handleBorderHoverColorChange = (value) => {
        setAttributes({ fluentFormBorderHoverColor: value });
    };
    /** End fluentFormBorderColor */

    /** Start fluentFormPlaceholderColor */
    const fluentFormPlaceholderColorChange = (value) => {
        setAttributes({ fluentFormPlaceholderColor: value });
    };
    /** End fluentFormPlaceholderColor */

    /** Start fluentFormRadioFontSize */
    const fluentFormRadioFontSizeHandler = (value) => {
        setAttributes({ fluentFormRadioFontSize: value });
    };
    const fluentFormRadioFontSizeUnitsHandler = (value) => {
        setAttributes({ fluentFormRadioFontSizeUnits: value });
    };
    /** End fluentFormRadioFontSize */ 

    /** Start fluentFormRadioCheckBoxItemSpacing */
    const fluentFormRadioCheckBoxItemSpacingHandler = (value) => {
        setAttributes({ fluentFormRadioCheckBoxItemSpacing: value });
    };
    const fluentFormRadioCheckBoxItemSpacingUnitssHandler = (value) => {
        setAttributes({ fluentFormRadioCheckBoxItemSpacingUnits: value });
    };
    /** End fluentFormRadioCheckBoxItemSpacing */ 
    


    /** Start Global Bg Color */
    const handleGlobalBgColorSwitcherChange = (value) => {
        setAttributes({ fluentFormGlobalBgColorSwitcher: value });
    };
    const handleGlobalBgColorChange = (value) => {
        setAttributes({ fluentFormGlobalBgColor: value });
    };
    const handleGlobalBgHoverColorChange = (value) => {
        setAttributes({ fluentFormGlobalBgHoverColor: value });
    };
    /** End Global Bg Color */

    /** Start Global Border Color */
    const handleGlobalBorderColorSwitcherChange = (value) => {
        setAttributes({ fluentFormGlobalBorderColorSwitcher: value });
    };
    const handleGlobalBorderColorChange = (value) => {
        setAttributes({ fluentFormGlobalBorderColor: value });
    };
    const handleGlobalBorderHoverColorChange = (value) => {
        setAttributes({ fluentFormGlobalBorderHoverColor: value });
    };
    /** End Global Border Color */

    return (
        <>
            <style>
            {`
                .${blockID}.fb-fluent-form-wrapper {
                    z-index: ${fluentFormGlobalZIndex !== undefined ? fluentFormGlobalZIndex : ''};
                }
                .${blockID}.fb-fluent-form-wrapper {
                    ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${fluentFormGlobalBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .${blockID}.fb-fluent-form-wrapper:hover {
                    ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''};
                    ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''};
                }

                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group label:not(.ff-el-form-check-label),
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group .ff-el-input--label,
                .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .fb-fluent-form-rendered .ff-el-group .error.text-danger {
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


                @media only screen and (max-width: 1024px) {

                    .${blockID}.fb-fluent-form-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .${blockID}.fb-fluent-form-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
                    }
                }

            `}
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
                                            <FB_Color
                                                label={__("Color", "frontis-blocks")}
                                                globalColorSwitcher={fluentFormLabelColorSwitcher}
                                                globalColor={fluentFormLabelColor}
                                                globalHoverColor={fluentFormLabelHoverColor}
                                                handleColorSwitcherChange={handleLabelColorSwitcherChange}
                                                handleGlobalColorChange={handleLabelColorChange}
                                                handleGlobalHoverColorChange={handleLabelHoverColorChange}
                                            />

                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={fluentFormLabelFontFamily}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <div className="fb-setting-fontsize-label">
                                                                            <span>{__("Font Size", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ fluentFormLabelFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${ fluentFormLabelFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={fluentFormLabelFontSize}
                                                                            onChange={(value) => setAttributes({ fluentFormLabelFontSize: value })}
                                                                            min={1}
                                                                            max={200}
                                                                            allowReset
                                                                            resetFallbackValue={undefined}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "400" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={fluentFormLabelFontWeight}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={fluentFormLabelFontStyle}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={fluentFormLabelTextTransform}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={fluentFormLabelTextDecoration}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <div className="fb-setting-letterspacing-label">
                                                                            <span>{__("Letter Spacing", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ fluentFormLabelLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${ fluentFormLabelLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={fluentFormLabelLetterSpacing}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelLetterSpacing: value === 0 ? undefined : value })}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <div className="fb-setting-lineheight-label">
                                                                            <span>{__("Line Height", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ fluentFormLabelLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${ fluentFormLabelLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={fluentFormLabelLineHeight}
                                                                        onChange={(value) => setAttributes({ fluentFormLabelLineHeight: value === 1 ? undefined : value })}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                        </PanelBody>
                                        <PanelBody title={__("Input & Textarea", "frontis-blocks")} initialOpen={false}>
                                            <FB_Color
                                                label={__("Background Color", "frontis-blocks")}
                                                globalColorSwitcher={fluentFormInputBgColorSwitcher}
                                                globalColor={fluentFormInputBgColor}
                                                globalHoverColor={fluentFormInputBgHoverColor}
                                                handleColorSwitcherChange={handleInputBgColorSwitcherChange}
                                                handleGlobalColorChange={handleInputBgColorChange}
                                                handleGlobalHoverColorChange={handleInputBgHoverColorChange}
                                            />
                                            <FB_Color
                                                label={__("Color", "frontis-blocks")}
                                                globalColorSwitcher={fluentFormInputColorSwitcher}
                                                globalColor={fluentFormInputColor}
                                                globalHoverColor={fluentFormInputHoverColor}
                                                handleColorSwitcherChange={handleInputColorSwitcherChange}
                                                handleGlobalColorChange={handleInputColorChange}
                                                handleGlobalHoverColorChange={handleInputHoverColorChange}
                                            />

                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={fluentFormInputFontFamily}
                                                                        onChange={(value) => setAttributes({ fluentFormInputFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <div className="fb-setting-fontsize-label">
                                                                            <span>{__("Font Size", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ fluentFormInputFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${ fluentFormInputFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={fluentFormInputFontSize}
                                                                            onChange={(value) => setAttributes({ fluentFormInputFontSize: value })}
                                                                            min={1}
                                                                            max={200}
                                                                            allowReset
                                                                            resetFallbackValue={undefined}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "400" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={fluentFormInputFontWeight}
                                                                        onChange={(value) => setAttributes({ fluentFormInputFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={fluentFormInputFontStyle}
                                                                        onChange={(value) => setAttributes({ fluentFormInputFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={fluentFormInputTextTransform}
                                                                        onChange={(value) => setAttributes({ fluentFormInputTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={fluentFormInputTextDecoration}
                                                                        onChange={(value) => setAttributes({ fluentFormInputTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <div className="fb-setting-letterspacing-label">
                                                                            <span>{__("Letter Spacing", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ fluentFormInputLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${ fluentFormInputLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={fluentFormInputLetterSpacing}
                                                                        onChange={(value) => setAttributes({ fluentFormInputLetterSpacing: value === 0 ? undefined : value })}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <div className="fb-setting-lineheight-label">
                                                                            <span>{__("Line Height", "frontis-blocks")}</span>
                                                                        </div>
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ fluentFormInputLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${ fluentFormInputLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={fluentFormInputLineHeight}
                                                                        onChange={(value) => setAttributes({ fluentFormInputLineHeight: value === 1 ? undefined : value })}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Text Indent", "frontis-blocks")}
                                                rangeValue={fluentFormTextIndentSize}
                                                onChangeHandler={fluentFormTextIndentSizeHandler}
                                                rangeUnitHandler={fluentFormTextIndentSizeUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormTextIndentSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Input Width", "frontis-blocks")}
                                                rangeValue={fluentFormInputWidthSize}
                                                onChangeHandler={fluentFormInputWidthSizeHandler}
                                                rangeUnitHandler={fluentFormInputWidthSizeUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormInputWidthSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Input Height", "frontis-blocks")}
                                                rangeValue={fluentFormInputHeightSize}
                                                onChangeHandler={fluentFormInputHeightSizeHandler}
                                                rangeUnitHandler={fluentFormInputHeightSizeUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormInputHeightSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Textarea Width", "frontis-blocks")}
                                                rangeValue={fluentFormTextareaWidthSize}
                                                onChangeHandler={fluentFormTextareaWidthSizeHandler}
                                                rangeUnitHandler={fluentFormTextareaWidthSizeUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormTextareaWidthSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Textarea Height", "frontis-blocks")}
                                                rangeValue={fluentFormTextareaHeightSize}
                                                onChangeHandler={fluentFormTextareaHeightSizeHandler}
                                                rangeUnitHandler={fluentFormTextareaHeightSizeUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormTextareaHeightSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Spacing", "frontis-blocks")}
                                                rangeValue={fluentFormSpacingSize}
                                                onChangeHandler={fluentFormSpacingSizeHandler}
                                                rangeUnitHandler={fluentFormSpacingUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormSpacingUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />

                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                DeviceType={DeviceType}
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

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={fluentFormBorderColorSwitcher}
                                                globalColor={fluentFormBorderColor}
                                                globalHoverColor={fluentFormBorderHoverColor}
                                                handleColorSwitcherChange={handleBorderColorSwitcherChange}
                                                handleGlobalColorChange={handleBorderColorChange}
                                                handleGlobalHoverColorChange={handleBorderHoverColorChange}
                                            />

                                            <FB_Spacing 
                                                label={__("Border", "frontis-blocks")}
                                                DeviceType={DeviceType}
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
                                                DeviceType={DeviceType}
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

                                        </PanelBody>
                                        <PanelBody title={__("Placeholder", "frontis-blocks")} initialOpen={false}>
                                            <BaseControl 
                                                label={__("Color", "frontis-blocks")}
                                                className="fb-setting-color-setting-wrapper"
                                            >
                                                <Dropdown
                                                    className="fb-setting-color-setting-icon-dropdown"
                                                    contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            className="fb-setting-color-setting-icon-btn"
                                                        >
                                                            <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-color-setting-icon-popup">
                                                            <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                <div className="fb-setting-normal-color">
                                                                    <ColorPicker
                                                                        color={fluentFormPlaceholderColor}
                                                                        onChange={fluentFormPlaceholderColorChange}
                                                                        enableAlpha={true}
                                                                    />
                                                                    <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                    <ColorPalette
                                                                        colors={[
                                                                            { color: '#F72585' },
                                                                            { color: '#7209B7' },
                                                                            { color: '#3A0CA3' },
                                                                            { color: '#4361EE' },
                                                                            { color: '#4CC9F0' },
                                                                        ]}
                                                                        disableCustomColors={true}
                                                                        value={fluentFormPlaceholderColor}
                                                                        onChange={fluentFormPlaceholderColorChange}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                        </PanelBody>
                                        <PanelBody title={__("Radio & Checkbox", "frontis-blocks")} initialOpen={false}>
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Size", "frontis-blocks")}
                                                rangeValue={fluentFormRadioFontSize}
                                                onChangeHandler={fluentFormRadioFontSizeHandler}
                                                rangeUnitHandler={fluentFormRadioFontSizeUnitsHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormRadioFontSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <BaseControl 
                                                label={__("Normal Color", "frontis-blocks")}
                                                className="fb-setting-color-setting-wrapper"
                                            >
                                                <Dropdown
                                                    className="fb-setting-color-setting-icon-dropdown"
                                                    contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            className="fb-setting-color-setting-icon-btn"
                                                        >
                                                            <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-color-setting-icon-popup">
                                                            <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                <div className="fb-setting-normal-color">
                                                                    <ColorPicker
                                                                        color={fluentFormRadioColor}
                                                                        onChange={(value) => setAttributes({ fluentFormRadioColor: value })}
                                                                        enableAlpha={true}
                                                                    />
                                                                    <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                    <ColorPalette
                                                                        colors={[
                                                                            { color: '#F72585' },
                                                                            { color: '#7209B7' },
                                                                            { color: '#3A0CA3' },
                                                                            { color: '#4361EE' },
                                                                            { color: '#4CC9F0' },
                                                                        ]}
                                                                        disableCustomColors={true}
                                                                        value={fluentFormRadioColor}
                                                                        onChange={(value) => setAttributes({ fluentFormRadioColor: value })}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl 
                                                label={__("Checked Color", "frontis-blocks")}
                                                className="fb-setting-color-setting-wrapper"
                                            >
                                                <Dropdown
                                                    className="fb-setting-color-setting-icon-dropdown"
                                                    contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            className="fb-setting-color-setting-icon-btn"
                                                        >
                                                            <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-color-setting-icon-popup">
                                                            <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                <div className="fb-setting-normal-color">
                                                                    <ColorPicker
                                                                        color={fluentFormRadioCheckedColor}
                                                                        onChange={(value) => setAttributes({ fluentFormRadioCheckedColor: value })}
                                                                        enableAlpha={true}
                                                                    />
                                                                    <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                    <ColorPalette
                                                                        colors={[
                                                                            { color: '#F72585' },
                                                                            { color: '#7209B7' },
                                                                            { color: '#3A0CA3' },
                                                                            { color: '#4361EE' },
                                                                            { color: '#4CC9F0' },
                                                                        ]}
                                                                        disableCustomColors={true}
                                                                        value={fluentFormRadioCheckedColor}
                                                                        onChange={(value) => setAttributes({ fluentFormRadioCheckedColor: value })}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Border Width", "frontis-blocks")}
                                                rangeValue={fluentFormRadioBorderWidth}
                                                onChangeHandler={(value) => setAttributes({ fluentFormRadioBorderWidth: value })}
                                                rangeUnitHandler={(value) => setAttributes({ fluentFormRadioBorderWidthUnits: value })}
                                                DeviceType={DeviceType}
                                                units={fluentFormRadioBorderWidthUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                            <BaseControl 
                                                label={__("Border Color", "frontis-blocks")}
                                                className="fb-setting-color-setting-wrapper"
                                            >
                                                <Dropdown
                                                    className="fb-setting-color-setting-icon-dropdown"
                                                    contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            className="fb-setting-color-setting-icon-btn"
                                                        >
                                                            <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-color-setting-icon-popup">
                                                            <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                <div className="fb-setting-normal-color">
                                                                    <ColorPicker
                                                                        color={fluentFormRadioBorderColor}
                                                                        onChange={(value) => setAttributes({ fluentFormRadioBorderColor: value })}
                                                                        enableAlpha={true}
                                                                    />
                                                                    <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                    <ColorPalette
                                                                        colors={[
                                                                            { color: '#F72585' },
                                                                            { color: '#7209B7' },
                                                                            { color: '#3A0CA3' },
                                                                            { color: '#4361EE' },
                                                                            { color: '#4CC9F0' },
                                                                        ]}
                                                                        disableCustomColors={true}
                                                                        value={fluentFormRadioBorderColor}
                                                                        onChange={(value) => setAttributes({ fluentFormRadioBorderColor: value })}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <FB_Spacing 
                                                label={__("Radio Radius", "frontis-blocks")}
                                                DeviceType={DeviceType}
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
                                                DeviceType={DeviceType}
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
                                                onChangeHandler={fluentFormRadioCheckBoxItemSpacingHandler}
                                                rangeUnitHandler={fluentFormRadioCheckBoxItemSpacingUnitssHandler}
                                                DeviceType={DeviceType}
                                                units={fluentFormRadioCheckBoxItemSpacingUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={25}
                                            />
                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "advanced" && (
                                    <>
                                        <div className="fb-setting-advanced-tab-wrapper">
                                            <div className="fb-setting-inner-wrapper">
                                                <PanelBody
                                                    title={__("Z Index", "frontis-blocks")}
                                                    initialOpen={true}
                                                    className='fb-setting-z-index-header'
                                                >
                                                    <RangeControl
                                                        value={fluentFormGlobalZIndex}
                                                        onChange={(value) => setAttributes({ fluentFormGlobalZIndex: value === 0 ? undefined : value })}
                                                        min={1}
                                                        max={10000}
                                                        step={1}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />
                                                </PanelBody>

                                                <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                                                    <FB_Spacing 
                                                        label={__("Padding", "frontis-blocks")}
                                                        DeviceType={DeviceType}
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
                                                        DeviceType={DeviceType}
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
                                                    <FB_Color
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalColorSwitcher={fluentFormGlobalBgColorSwitcher}
                                                        globalColor={fluentFormGlobalBgColor}
                                                        globalHoverColor={fluentFormGlobalBgHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBgColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBgColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBgHoverColorChange}
                                                    />
                                                </PanelBody>
                                                <PanelBody title={__("Border and Radius", "frontis-blocks")} initialOpen={false}>

                                                    <SelectControl
                                                            label={__("Border Style", "frontis-blocks")}
                                                            value={fluentFormGlobalBorder}
                                                            options={BORDER_STYLES}
                                                            onChange={(value) => setAttributes({ fluentFormGlobalBorder: value })}
                                                    />

                                                    <FB_Color
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalColorSwitcher={fluentFormGlobalBorderColorSwitcher}
                                                        globalColor={fluentFormGlobalBorderColor}
                                                        globalHoverColor={fluentFormGlobalBorderHoverColor}
                                                        handleColorSwitcherChange={handleGlobalBorderColorSwitcherChange}
                                                        handleGlobalColorChange={handleGlobalBorderColorChange}
                                                        handleGlobalHoverColorChange={handleGlobalBorderHoverColorChange}
                                                    />

                                                    <FB_Spacing 
                                                        label={__("Border", "frontis-blocks")}
                                                        DeviceType={DeviceType}
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
                                                        DeviceType={DeviceType}
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