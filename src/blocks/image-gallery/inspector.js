import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';


import { 
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    FONT_FAMILYS,
    BORDER_STYLES,
} from "./constants/constants";

import SortableItem from './sortableItem';
import FB_ResponsiveControl from '@Components/responsive-control';

import './editor.scss';
import FB_Spacing from '../../components/spacing';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        DeviceType,

        GalleryType,
        GalleryItems,

        GalleryItemHeightDesktop,
        GalleryItemHeightTablet,
        GalleryItemHeightMobile,
        GalleryItemHeightUnits,

        ImageOverlayStyle,
        ImageOverlayStyleType,
        ImageOverlayColor,

        GalleryColumnNumberDesktop,
        GalleryColumnNumberTablet,
        GalleryColumnNumberMobile,

        GalleryImageGapDesktop,
        GalleryImageGapTablet,
        GalleryImageGapMobile,
        GalleryImageGapUnits,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        ImageAlignment,
        ImageFitCover,

        ImageWidthDesktop,
        ImageWidthTab,
        ImageWidthMobile,
        ImageWidthUnits,

        ImageHeightDesktop,
        ImageHeightTab,
        ImageHeightMobile,
        ImageHeightUnits,

        GalleryButtonAlignment,
        GalleryButtonFontFamily,
        GalleryButtonFontSizeDesktop,
        GalleryButtonFontSizeTablet,
        GalleryButtonFontSizeMobile,
        GalleryButtonFontSizeUnits,
        GalleryButtonFontWeight,
        GalleryButtonFontStyle,
        GalleryButtonTextTransform,
        GalleryButtonTextDecoration,
        GalleryButtonLetterSpacingDesktop,
        GalleryButtonLetterSpacingTablet,
        GalleryButtonLetterSpacingMobile,
        GalleryButtonLetterSpacingUnits,
        GalleryButtonLineHeightDesktop,
        GalleryButtonLineHeightTablet,
        GalleryButtonLineHeightMobile,
        GalleryButtonLineHeightUnits,
        GalleryButtonColorSwitcher,
        GalleryButtonColor,
        GalleryButtonHoverColor,
        GalleryButtonBGColorSwitcher,
        GalleryButtonBGColor,
        GalleryButtonBGHoverColor,

        ButtonBorder,
        ButtonBorderColor,
        ButtonBorderHoverColor,
        ButtonBorderColorSwitcher,

        ButtonPaddingUnits,
        ButtonDesktopPadding,
        ButtonTabPadding,
        ButtonMobilePadding,
        ButtonPaddingLink,
        ButtonMarginUnits,
        ButtonDesktopMargin,
        ButtonTabMargin,
        ButtonMobileMargin,
        ButtonMarginLink,
        ButtonBorderUnits,
        ButtonDesktopBorderWidth,
        ButtonTabBorderWidth,
        ButtonMobileBorderWidth,
        ButtonBorderLink,
        ButtonBorderRadiusUnits,
        ButtonDesktopBorderRadiusWidth,
        ButtonTabBorderRadiusWidth,
        ButtonMobileBorderRadiusWidth,
        ButtonBorderRadiusLink,
        
        GalleryZIndex,
        GalleryPaddingUnits,
        GalleryDesktopPadding,
        GalleryTabPadding,
        GalleryMobilePadding,
        GalleryPaddingLink,
        GalleryMarginUnits,
        GalleryDesktopMargin,
        GalleryTabMargin,
        GalleryMobileMargin,
        GalleryMarginLink,

        GalleryBgColorSwitcher,
        GalleryBgColor,
        GalleryBgHoverColor,

        GalleryBorder,
        GalleryBorderColor,
        GalleryBorderHoverColor,
        GalleryBorderColorSwitcher,
        GalleryBorderUnits,
        GalleryDesktopBorderWidth,
        GalleryTabBorderWidth,
        GalleryMobileBorderWidth,
        GalleryBorderLink,
        GalleryBorderRadiusUnits,
        GalleryDesktopBorderRadiusWidth,
        GalleryTabBorderRadiusWidth,
        GalleryMobileBorderRadiusWidth,
        GalleryBorderRadiusLink,

        GalleryDesktopSwitcher,
        GalleryTabletSwitcher,
        GalleryMobileSwitcher,

    } = attributes;
    

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-gallery-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = GalleryItems.findIndex(item => item.id === active.id);
            const newIndex = GalleryItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(GalleryItems, oldIndex, newIndex);
            setAttributes({ GalleryItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `image-${GalleryItems.length + 1}`, title: `Image ${GalleryItems.length + 1}`, column: {desktop: 0, tablet: 0, mobile: 0}, row: {desktop: 0, tablet: 0, mobile: 0}, image: { id: 0} };
        setAttributes({ GalleryItems: [...GalleryItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = GalleryItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ GalleryItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = GalleryItems.filter(item => item.id !== id);
        setAttributes({ GalleryItems: updatedItems });
    };

    const handleRemoveMedia = (id, key, value) => {
		const updatedItems = GalleryItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ GalleryItems: updatedItems });
	}
    
    // Button Margin Functionb
    const handleButtonMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonMarginLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        ButtonDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        ButtonTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        ButtonMobileMargin: {
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
                    setAttributes( {ButtonDesktopMargin: {...ButtonDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {ButtonTabMargin: {...ButtonTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {ButtonMobileMargin: {...ButtonMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleButtonMarginCombineBtn = () => {
        setAttributes( {ButtonMarginLink: !ButtonMarginLink} );
    }

    const handleButtonMarginUnitsHandler = (unit) => {
        setAttributes( {
            ButtonMarginUnits: {
                ...ButtonMarginUnits,
                [DeviceType]: unit
            }
        })
    }

    const ButtonMarginDesktopWidth = `${ButtonDesktopMargin.top}${ButtonMarginUnits[DeviceType]} ${ButtonDesktopMargin.right}${ButtonMarginUnits[DeviceType]} ${ButtonDesktopMargin.bottom}${ButtonMarginUnits[DeviceType]} ${ButtonDesktopMargin.left}${ButtonMarginUnits[DeviceType]}`;
    const ButtonMarginTabletWidth = `${ButtonTabMargin.top}${ButtonMarginUnits[DeviceType]} ${ButtonTabMargin.right}${ButtonMarginUnits[DeviceType]} ${ButtonTabMargin.bottom}${ButtonMarginUnits[DeviceType]} ${ButtonTabMargin.left}${ButtonMarginUnits[DeviceType]}`;
    const ButtonMarginMobileWidth = `${ButtonMobileMargin.top}${ButtonMarginUnits[DeviceType]} ${ButtonMobileMargin.right}${ButtonMarginUnits[DeviceType]} ${ButtonMobileMargin.bottom}${ButtonMarginUnits[DeviceType]} ${ButtonMobileMargin.left}${ButtonMarginUnits[DeviceType]}`;

    // Button Padding Functionb
    const handleButtonPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonPaddingLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        ButtonDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        ButtonTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        ButtonMobilePadding: {
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
                    setAttributes( {ButtonDesktopPadding: {...ButtonDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {ButtonTabPadding: {...ButtonTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {ButtonMobilePadding: {...ButtonMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleButtonPaddingCombineBtn = () => {
        setAttributes( {ButtonPaddingLink: !ButtonPaddingLink} );
    }

    const handleButtonPaddingUnitsHandler = (unit) => {
        setAttributes( {
            ButtonPaddingUnits: {
                ...ButtonPaddingUnits,
                [DeviceType]: unit
            }
        })
    }

    const ButtonPaddingDesktopWidth = `${ButtonDesktopPadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.left}${ButtonPaddingUnits[DeviceType]}`;
    const ButtonPaddingTabletWidth = `${ButtonTabPadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.left}${ButtonPaddingUnits[DeviceType]}`;
    const ButtonPaddingMobileWidth = `${ButtonMobilePadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.left}${ButtonPaddingUnits[DeviceType]}`;

    // Button Border Function
    const handleButtonBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonBorderLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        ButtonDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        ButtonTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        ButtonMobileBorderWidth: {
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
                    setAttributes( {ButtonDesktopBorderWidth: {...ButtonDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {ButtonTabBorderWidth: {...ButtonTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {ButtonMobileBorderWidth: {...ButtonMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleButtonBorderCombineBtn = () => {
        setAttributes( {ButtonBorderLink: !ButtonBorderLink} );
    }

    const handleButtonBorderUnitsHandler = (unit) => {
        setAttributes( {
            ButtonBorderUnits: {
                ...ButtonBorderUnits,
                [DeviceType]: unit
            }
        })
    }

    const ButtonBorderDesktopWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits[DeviceType]} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits[DeviceType]} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits[DeviceType]} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits[DeviceType]}`;
    const ButtonBorderTabletWidth = `${ButtonTabBorderWidth.top}${ButtonBorderUnits[DeviceType]} ${ButtonTabBorderWidth.right}${ButtonBorderUnits[DeviceType]} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits[DeviceType]} ${ButtonTabBorderWidth.left}${ButtonBorderUnits[DeviceType]}`;
    const ButtonBorderMobileWidth = `${ButtonMobileBorderWidth.top}${ButtonBorderUnits[DeviceType]} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits[DeviceType]} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits[DeviceType]} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits[DeviceType]}`;


    // Button BorderRadius Function
    const handleButtonBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonBorderRadiusLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        ButtonDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        ButtonTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        ButtonMobileBorderRadiusWidth: {
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
                    setAttributes( {ButtonDesktopBorderRadiusWidth: {...ButtonDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {ButtonTabBorderRadiusWidth: {...ButtonTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {ButtonMobileBorderRadiusWidth: {...ButtonMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleButtonBorderRadiusCombineBtn = () => {
        setAttributes( {ButtonBorderRadiusLink: !ButtonBorderRadiusLink} );
    }

    const handleButtonBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            ButtonBorderRadiusUnits: {
                ...ButtonBorderRadiusUnits,
                [DeviceType]: unit
            }
        })
    }

    const ButtonBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits[DeviceType]}`;
    const ButtonBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits[DeviceType]}`;
    const ButtonBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[DeviceType]} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits[DeviceType]}`;



    // Gallery Margin Functionb
    const handleGalleryMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryMarginLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        GalleryDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        GalleryTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        GalleryMobileMargin: {
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
                    setAttributes( {GalleryDesktopMargin: {...GalleryDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {GalleryTabMargin: {...GalleryTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {GalleryMobileMargin: {...GalleryMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGalleryMarginCombineBtn = () => {
        setAttributes( {GalleryMarginLink: !GalleryMarginLink} );
    }

    const handleGalleryMarginUnitsHandler = (unit) => {
        setAttributes( {
            GalleryMarginUnits: {
                ...GalleryMarginUnits,
                [DeviceType]: unit
            }
        })
    }

    const GalleryMarginDesktopWidth = `${GalleryDesktopMargin.top}${GalleryMarginUnits[DeviceType]} ${GalleryDesktopMargin.right}${GalleryMarginUnits[DeviceType]} ${GalleryDesktopMargin.bottom}${GalleryMarginUnits[DeviceType]} ${GalleryDesktopMargin.left}${GalleryMarginUnits[DeviceType]}`;
    const GalleryMarginTabletWidth = `${GalleryTabMargin.top}${GalleryMarginUnits[DeviceType]} ${GalleryTabMargin.right}${GalleryMarginUnits[DeviceType]} ${GalleryTabMargin.bottom}${GalleryMarginUnits[DeviceType]} ${GalleryTabMargin.left}${GalleryMarginUnits[DeviceType]}`;
    const GalleryMarginMobileWidth = `${GalleryMobileMargin.top}${GalleryMarginUnits[DeviceType]} ${GalleryMobileMargin.right}${GalleryMarginUnits[DeviceType]} ${GalleryMobileMargin.bottom}${GalleryMarginUnits[DeviceType]} ${GalleryMobileMargin.left}${GalleryMarginUnits[DeviceType]}`;


    // Gallery Padding Functionb
    const handleGalleryPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryPaddingLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        GalleryDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        GalleryTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        GalleryMobilePadding: {
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
                    setAttributes( {GalleryDesktopPadding: {...GalleryDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {GalleryTabPadding: {...GalleryTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {GalleryMobilePadding: {...GalleryMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGalleryPaddingCombineBtn = () => {
        setAttributes( {GalleryPaddingLink: !GalleryPaddingLink} );
    }

    const handleGalleryPaddingUnitsHandler = (unit) => {
        setAttributes( {
            GalleryPaddingUnits: {
                ...GalleryPaddingUnits,
                [DeviceType]: unit
            }
        })
    }

    const GalleryPaddingDesktopWidth = `${GalleryDesktopPadding.top}${GalleryPaddingUnits[DeviceType]} ${GalleryDesktopPadding.right}${GalleryPaddingUnits[DeviceType]} ${GalleryDesktopPadding.bottom}${GalleryPaddingUnits[DeviceType]} ${GalleryDesktopPadding.left}${GalleryPaddingUnits[DeviceType]}`;
    const GalleryPaddingTabletWidth = `${GalleryTabPadding.top}${GalleryPaddingUnits[DeviceType]} ${GalleryTabPadding.right}${GalleryPaddingUnits[DeviceType]} ${GalleryTabPadding.bottom}${GalleryPaddingUnits[DeviceType]} ${GalleryTabPadding.left}${GalleryPaddingUnits[DeviceType]}`;
    const GalleryPaddingMobileWidth = `${GalleryMobilePadding.top}${GalleryPaddingUnits[DeviceType]} ${GalleryMobilePadding.right}${GalleryPaddingUnits[DeviceType]} ${GalleryMobilePadding.bottom}${GalleryPaddingUnits[DeviceType]} ${GalleryMobilePadding.left}${GalleryPaddingUnits[DeviceType]}`;


    // Gallery BorderWidth Function
    const handleGalleryBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryBorderLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        GalleryDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        GalleryTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        GalleryMobileBorderWidth: {
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
                    setAttributes( {GalleryDesktopBorderWidth: {...GalleryDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {GalleryTabBorderWidth: {...GalleryTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {GalleryMobileBorderWidth: {...GalleryMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGalleryBorderCombineBtn = () => {
        setAttributes( {GalleryBorderLink: !GalleryBorderLink} );
    }

    const handleGalleryBorderUnitsHandler = (unit) => {
        setAttributes( {
            GalleryBorderUnits: {
                ...GalleryBorderUnits,
                [DeviceType]: unit
            }
        })
    }

    const GalleryBorderDesktopWidth = `${GalleryDesktopBorderWidth.top}${GalleryBorderUnits[DeviceType]} ${GalleryDesktopBorderWidth.right}${GalleryBorderUnits[DeviceType]} ${GalleryDesktopBorderWidth.bottom}${GalleryBorderUnits[DeviceType]} ${GalleryDesktopBorderWidth.left}${GalleryBorderUnits[DeviceType]}`;
    const GalleryBorderTabletWidth = `${GalleryTabBorderWidth.top}${GalleryBorderUnits[DeviceType]} ${GalleryTabBorderWidth.right}${GalleryBorderUnits[DeviceType]} ${GalleryTabBorderWidth.bottom}${GalleryBorderUnits[DeviceType]} ${GalleryTabBorderWidth.left}${GalleryBorderUnits[DeviceType]}`;
    const GalleryBorderMobileWidth = `${GalleryMobileBorderWidth.top}${GalleryBorderUnits[DeviceType]} ${GalleryMobileBorderWidth.right}${GalleryBorderUnits[DeviceType]} ${GalleryMobileBorderWidth.bottom}${GalleryBorderUnits[DeviceType]} ${GalleryMobileBorderWidth.left}${GalleryBorderUnits[DeviceType]}`;


    // Gallery BorderRadiusWidth Function
    const handleGalleryBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryBorderRadiusLink ) {
            switch ( DeviceType ) {
                case 'Desktop':
                    setAttributes( {
                        GalleryDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        GalleryTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        GalleryMobileBorderRadiusWidth: {
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
                    setAttributes( {GalleryDesktopBorderRadiusWidth: {...GalleryDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {GalleryTabBorderRadiusWidth: {...GalleryTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {GalleryMobileBorderRadiusWidth: {...GalleryMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGalleryBorderRadiusCombineBtn = () => {
        setAttributes( {GalleryBorderRadiusLink: !GalleryBorderRadiusLink} );
    }

    const handleGalleryBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            GalleryBorderRadiusUnits: {
                ...GalleryBorderRadiusUnits,
                [DeviceType]: unit
            }
        })
    }

    const GalleryBorderRadiusDesktopWidth = `${GalleryDesktopBorderRadiusWidth.top}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryDesktopBorderRadiusWidth.right}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryDesktopBorderRadiusWidth.bottom}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryDesktopBorderRadiusWidth.left}${GalleryBorderRadiusUnits[DeviceType]}`;
    const GalleryBorderRadiusTabletWidth = `${GalleryTabBorderRadiusWidth.top}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryTabBorderRadiusWidth.right}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryTabBorderRadiusWidth.bottom}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryTabBorderRadiusWidth.left}${GalleryBorderRadiusUnits[DeviceType]}`;
    const GalleryBorderRadiusMobileWidth = `${GalleryMobileBorderRadiusWidth.top}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryMobileBorderRadiusWidth.right}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryMobileBorderRadiusWidth.bottom}${GalleryBorderRadiusUnits[DeviceType]} ${GalleryMobileBorderRadiusWidth.left}${GalleryBorderRadiusUnits[DeviceType]}`;

    

    return (
        <>
            <style>
            {`
                .fb-gallery-main-wrapper.${blockID} {
                    position: relative;
                    ${GalleryBgColor !== undefined ? `background-color: ${GalleryBgColor};` : ''};
                    padding: ${GalleryPaddingDesktopWidth};
                    margin: ${GalleryMarginDesktopWidth};
                    border-style: ${GalleryBorder};
                    border-width: ${GalleryBorderDesktopWidth};
                    ${GalleryBorderColor !== undefined ? `border-color: ${GalleryBorderColor};` : ''};
                    border-radius: ${GalleryBorderRadiusDesktopWidth};
                    transition: all .3s ease-in-out;
                    ${GalleryZIndex !== undefined ? `z-index: ${GalleryZIndex}` : ''};
                }
                .fb-gallery-main-wrapper.${blockID}:hover {
                    ${GalleryBgHoverColor !== undefined ? `background-color: ${GalleryBgHoverColor};` : ''};
                    ${GalleryBorderHoverColor !== undefined ? `border-color: ${GalleryBorderHoverColor};` : ''};
                }

                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                    grid-template-columns: repeat(${DeviceType == 'Desktop' ? GalleryColumnNumberDesktop : DeviceType == 'Tablet' ? GalleryColumnNumberTablet : GalleryColumnNumberMobile}, 1fr);
                    grid-gap: ${DeviceType == 'Desktop' ? GalleryImageGapDesktop : DeviceType == 'Tablet' ? GalleryImageGapTablet : GalleryImageGapMobile}${GalleryImageGapUnits};
                    grid-auto-rows: ${DeviceType == 'Desktop' ? GalleryItemHeightDesktop : DeviceType == 'Tablet' ? GalleryItemHeightTablet : GalleryItemHeightMobile}${GalleryItemHeightUnits};
                }
                
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                    position: absolute;
                    top: 0;
                    ${ImageAlignment === 'left' && 'left: 0'};
                    ${ImageAlignment === 'right' && 'right: 0; left: unset'};
                    ${ImageAlignment === 'center' && 'left: 50%'};
                    ${ImageAlignment === 'center' && 'transform: translateX(-50%);'};
                    width: ${DeviceType == 'Desktop' ? ImageWidthDesktop : DeviceType == 'Tablet' ? ImageWidthTab : ImageWidthMobile}${ImageWidthUnits};
                    height: ${DeviceType == 'Desktop' ? ImageHeightDesktop : DeviceType == 'Tablet' ? ImageHeightTab : ImageHeightMobile}${ImageHeightUnits};
                    ${ImageFitCover === true && 'object-fit: cover'};
                    ${ImageOverlayStyle == 'black_white' && 'filter: grayscale(100%)'};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
                    ${ImageOverlayStyle == 'black_white' && 'filter: grayscale(0)'};
                    transition: all 0.3s ease-in-out;
                }

                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {
                    ${GalleryButtonSwitcher == true && 'display: flex'};
                    ${GalleryButtonSwitcher == true && `justify-content: ${GalleryButtonAlignment}`};
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                    ${GalleryButtonSwitcher == true && `border-style: ${ButtonBorder}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher !== undefined && `border-color: ${ButtonBorderColor}`};
                    ${GalleryButtonSwitcher == true && `border-width: ${ButtonBorderDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `border-radius: ${ButtonBorderRadiusDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `margin: ${ButtonMarginDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `padding: ${ButtonPaddingDesktopWidth}`};
                    ${GalleryButtonSwitcher == true && `font-family: ${GalleryButtonFontFamily}`};
                    ${GalleryButtonSwitcher == true && `font-size: ${DeviceType == 'Desktop' ? GalleryButtonFontSizeDesktop : DeviceType == 'Tablet' ? GalleryButtonFontSizeTablet : GalleryButtonFontSizeMobile}${GalleryButtonFontSizeUnits}`};
                    ${GalleryButtonSwitcher == true && `font-weight: ${GalleryButtonFontWeight}`};
                    ${GalleryButtonSwitcher == true && `font-style: ${GalleryButtonFontStyle}`};
                    ${GalleryButtonSwitcher == true && `text-transform: ${GalleryButtonTextTransform}`};
                    ${GalleryButtonSwitcher == true && `text-decoration: ${GalleryButtonTextDecoration}`};
                    ${GalleryButtonSwitcher == true && `letter-spacing: ${DeviceType == 'Desktop' ? GalleryButtonLetterSpacingDesktop : DeviceType == 'Tablet' ? GalleryButtonLetterSpacingTablet : GalleryButtonLetterSpacingMobile}${GalleryButtonLetterSpacingUnits}`};
                    ${GalleryButtonSwitcher == true && `line-height: ${DeviceType == 'Desktop' ? GalleryButtonLineHeightDesktop : DeviceType == 'Tablet' ? GalleryButtonLineHeightTablet : GalleryButtonLineHeightMobile}${GalleryButtonLineHeightUnits}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && `color: ${GalleryButtonColor}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'normal' && `background-color: ${GalleryButtonBGColor}`};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && `color: ${GalleryButtonHoverColor}`};
                    ${GalleryButtonSwitcher == true && ButtonBorderColorSwitcher == 'hover' && `background-color: ${GalleryButtonBGHoverColor}`};
                    transition: all 0.3s ease-in-out;
                }
                    
                @media only screen and (max-width: 1024px) {
                    .fb-gallery-main-wrapper.${blockID} {
                        padding: ${GalleryPaddingTabletWidth};
                        margin: ${GalleryMarginTabletWidth};
                        border-radius: ${GalleryBorderRadiusTabletWidth};
                    }

                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${GalleryButtonSwitcher == true && `border-radius: ${ButtonBorderRadiusTabletWidth}`};
                        ${GalleryButtonSwitcher == true && `margin: ${ButtonMarginTabletWidth}`};
                        ${GalleryButtonSwitcher == true && `padding: ${ButtonPaddingTabletWidth}`};
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-gallery-main-wrapper.${blockID} {
                        padding: ${GalleryPaddingMobileWidth};
                        margin: ${GalleryMarginMobileWidth};
                        border-radius: ${GalleryBorderRadiusMobileWidth};
                    }

                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${GalleryButtonSwitcher == true && `border-radius: ${ButtonBorderRadiusMobileWidth}`};
                        ${GalleryButtonSwitcher == true && `margin: ${ButtonMarginMobileWidth}`};
                        ${GalleryButtonSwitcher == true && `padding: ${ButtonPaddingMobileWidth}`};
                    }
                }

            `}
            { ImageOverlayStyle === 'overlay' && `
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                    ${ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.001)'};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
                    ${ImageOverlayStyleType === 'zoominout' && 'transform: scale(1.05)'};
                    transition: all 0.3s ease-in-out;
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {
                    position: absolute;
                    content: '';
                    ${ImageOverlayStyleType === 'top' && 'top: -100%'};
                    ${ImageOverlayStyleType === 'top' && 'left: 0'};
                    ${ImageOverlayStyleType === 'bottom' && 'top: 100%'};
                    ${ImageOverlayStyleType === 'bottom' && 'left: 0'};
                    ${ImageOverlayStyleType === 'left' && 'top: 0'};
                    ${ImageOverlayStyleType === 'left' && 'left: -100%'};
                    ${ImageOverlayStyleType === 'right' && 'top: 0'};
                    ${ImageOverlayStyleType === 'right' && 'left: 100%'};
                    width: 100%;
                    height: 100%;
                    background-color: ${ImageOverlayColor};
                    visibility: hidden;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;
                }  
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {
                    ${ImageOverlayStyleType == 'top' && 'top: 0'};
                    ${ImageOverlayStyleType == 'bottom' && 'top: 0'};
                    ${ImageOverlayStyleType == 'left' && 'left: 0'};
                    ${ImageOverlayStyleType == 'right' && 'left: 0'};
                    visibility: visible;
                    opacity: 1;
                    transition: all 0.3s ease-in-out;
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
                                    
                                        <PanelBody
                                            title={__("Gallery Layout", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            
                                            <BaseControl
                                                label={__("Layouts", "frontis-blocks")}
                                                className="fb-setting-layouts-wrapper"
                                            >
                                                <SelectControl
                                                    value={attributes.GalleryType}
                                                    options={[
                                                        { label: __("Grid Layout", "frontis-blocks"), value: "gird" },
                                                        { label: __("Mesonry Layout", "frontis-blocks"), value: "mesonry" },
                                                    ]}
                                                    onChange={(value) => setAttributes({ GalleryType: value })}
                                                />
                                            </BaseControl>

                                            <BaseControl
                                                label={__("Image Styles", "frontis-blocks")}
                                                className="fb-setting-image-style-wrapper"
                                            >
                                                <SelectControl
                                                    value={attributes.ImageOverlayStyle}
                                                    options={[
                                                        { label: __("None", "frontis-blocks"), value: "none" },
                                                        { label: __("Black & White", "frontis-blocks"), value: "black_white" },
                                                        { label: __("Color Overlay", "frontis-blocks"), value: "overlay" },
                                                    ]}
                                                    onChange={(value) => setAttributes({ ImageOverlayStyle: value })}
                                                />
                                            </BaseControl>

                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Columns", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                </div>
                                                <div className="fb-setting-columns-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? GalleryColumnNumberDesktop : DeviceType === "Tablet" ? GalleryColumnNumberTablet : GalleryColumnNumberMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ GalleryColumnNumberDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ GalleryColumnNumberTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ GalleryColumnNumberMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={12}
                                                        allowReset
                                                        resetFallbackValue={3}
                                                    />
                                                </div>
                                            </div>

                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Row Height", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-units-type">
                                                        <ButtonGroup className="fb-setting-units-type-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ GalleryItemHeightUnits: item.value })}
                                                                    className={`fb-setting-image-gap-units-switcher ${GalleryImageGapUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-image-gap-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? GalleryItemHeightDesktop : DeviceType === "Tablet" ? GalleryItemHeightTablet : GalleryItemHeightMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ GalleryItemHeightDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ GalleryItemHeightTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ GalleryItemHeightMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={1000}
                                                        allowReset
                                                        resetFallbackValue={250}
                                                    />
                                                </div>
                                            </div>

                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Image Gap", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-image-gap-units">
                                                        <ButtonGroup className="fb-setting-image-gap-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ GalleryImageGapUnits: item.value })}
                                                                    className={`fb-setting-image-gap-units-switcher ${GalleryImageGapUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-image-gap-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? GalleryImageGapDesktop : DeviceType === "Tablet" ? GalleryImageGapTablet : GalleryImageGapMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ GalleryImageGapDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ GalleryImageGapTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ GalleryImageGapMobile: value });
                                                            }
                                                        }}
                                                        min={0}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={24}
                                                    />
                                                </div>
                                            </div>

                                        </PanelBody>

                                        <PanelBody
                                            title={__("Image Gallery Item", "frontis-blocks")}
                                            initialOpen={false}
                                        >
                                            <div className="fb-gallery-wrapper">
                                                <DndContext
                                                    collisionDetection={closestCenter}
                                                    onDragEnd={handleDragEnd}
                                                >
                                                    <SortableContext items={GalleryItems.map(item => item.id)}>
                                                        <ul className='dnd-items-wrapper'>
                                                            {GalleryItems.map((item) => (
                                                                <SortableItem
                                                                    key={item.id}
                                                                    id={item.id}
                                                                    item={item}
                                                                    setAttributes={setAttributes}
                                                                    DeviceType={DeviceType}
                                                                    GalleryType={GalleryType}
                                                                    GalleryColumnNumberMobile={GalleryColumnNumberMobile}
                                                                    GalleryColumnNumberTablet={GalleryColumnNumberTablet}
                                                                    GalleryColumnNumberDesktop={GalleryColumnNumberDesktop}
                                                                    handleChangeItem={handleChangeItem}
                                                                    handleDeleteItem={handleDeleteItem}
                                                                    handleRemoveMedia={handleRemoveMedia}
                                                                />
                                                            ))}
                                                        </ul>
                                                    </SortableContext>
                                                    <Button isPrimary onClick={handleAddItem}>
                                                        {__("Add Image", "frontis-blocks")}
                                                    </Button>
                                                </DndContext>
                                            </div>
                                            
                                        </PanelBody>
                                    
                                        <PanelBody
                                            title={__("Button", "frontis-blocks")}
                                            initialOpen={false}
                                        >
                                            <ToggleControl
                                                label={__("Enable Button", "frontis-blocks")}
                                                className="fb-setting-gallery-button-toggle"
                                                checked={GalleryButtonSwitcher}
                                                onChange={(value) => setAttributes({ GalleryButtonSwitcher: value })}
                                            />
                                        
                                            { GalleryButtonSwitcher == true &&
                                            <>
                                                <TextControl
                                                    label={__("Button Text", "frontis-blocks")}
                                                    value={GalleryButtonText}
                                                    onChange={(value) => setAttributes({ GalleryButtonText: value })}
                                                    className="sh-heading-text"
                                                />

                                                <TextControl
                                                    label={__("Button Link", "frontis-blocks")}
                                                    value={GalleryButtonLink}
                                                    onChange={(value) => setAttributes({ GalleryButtonLink: value })}
                                                    className="sh-heading-text"
                                                />
                                            </>
                                            }

                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Image Setting", "frontis-blocks")}
                                            initialOpen={false}
                                        >
                                            <BaseControl
                                                label={__("Alignment", "frontis-blocks")}
                                                id="fb-setting-image-alignment"
                                                className="fb-setting-image-alignment"
                                            >
                                                <ButtonGroup
                                                    className="fb-setting-image-alignment-group-btn"
                                                >
                                                    {TEXT_ALIGN.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ ImageAlignment: item.value })}
                                                            className={`fb-setting-image-alignment-single-btn ${ImageAlignment === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            <div className="fb-setting-image-width-wrapper">
                                                <div className="fb-setting-image-width-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Image Width", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-image-width-units">
                                                        <ButtonGroup className="fb-setting-image-width-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ ImageWidthUnits: item.value })}
                                                                    className={`fb-setting-image-width-units-switcher ${ImageWidthUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-image-width-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? ImageWidthDesktop : DeviceType === "Tablet" ? ImageWidthTab : ImageWidthMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ ImageWidthDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ ImageWidthTab: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ ImageWidthMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={ImageWidthUnits === '%' ? 100 : 800}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />
                                                </div>
                                            </div>

                                            <div className="fb-setting-image-height-wrapper">
                                                <div className="fb-setting-image-height-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Image Height", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-image-height-units">
                                                        <ButtonGroup className="fb-setting-image-height-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ ImageHeightUnits: item.value })}
                                                                    className={`fb-setting-image-height-units-switcher ${ImageHeightUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-image-height-rangecontrol">
                                                    <RangeControl
                                                        value={DeviceType === "Desktop" ? ImageHeightDesktop : DeviceType === "Tablet" ? ImageHeightTab : ImageHeightMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ ImageHeightDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ ImageHeightTab: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ ImageHeightMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={ImageHeightUnits === '%' ? 100 : 800}
                                                        allowReset
                                                        resetFallbackValue={100}
                                                    />
                                                </div>
                                            </div>

                                            <ToggleControl
                                                label={__("Object Fit Cover", "frontis-blocks")}
                                                className="fb-setting-image-fit-toggle"
                                                checked={ImageFitCover}
                                                onChange={(value) => setAttributes({ ImageFitCover: value })}
                                            />
                                        </PanelBody>

                                        { ImageOverlayStyle == 'overlay' &&
                                            <PanelBody
                                                title={__("Overlay Styles", "frontis-blocks")}
                                                initialOpen={false}
                                            >

                                                <BaseControl
                                                    label={__("Overlay Styles", "frontis-blocks")}
                                                    className="fb-setting-image-style-wrapper"
                                                >
                                                    <SelectControl
                                                        value={attributes.ImageOverlayStyleType}
                                                        options={[
                                                            { label: __("From Top", "frontis-blocks"), value: "top" },
                                                            { label: __("From Bottom", "frontis-blocks"), value: "bottom" },
                                                            { label: __("From Left", "frontis-blocks"), value: "left" },
                                                            { label: __("From Right", "frontis-blocks"), value: "right" },
                                                            { label: __("Zoom In Out", "frontis-blocks"), value: "zoominout" },
                                                        ]}
                                                        onChange={(value) => setAttributes({ ImageOverlayStyleType: value })}
                                                    />
                                                </BaseControl>

                                                <BaseControl 
                                                label={__("Overlay Color", "frontis-blocks")}
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
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
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
                                                                        color={ImageOverlayColor}
                                                                        onChange={(value) => setAttributes({ ImageOverlayColor: value })}
                                                                        enableAlpha={true}
                                                                    />
                                                                    <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                    <ColorPalette
                                                                        colors={[
                                                                            { color: '#000000b3' },
                                                                            { color: '#ebc4c4b3' },
                                                                            { color: '#6ca170b3' },
                                                                            { color: '#6eb3cbb3' },
                                                                            { color: '#b27ecbb3' },
                                                                        ]}
                                                                        disableCustomColors={true}
                                                                        value={ImageOverlayColor}
                                                                        onChange={(value) => setAttributes({ ImageOverlayColor: value })}
                                                                    />
                                                                </div>
                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                                </BaseControl>
                                            </PanelBody>

                                        }

                                        { GalleryButtonSwitcher == true &&
                                        
                                            <PanelBody
                                                title={__("Gallery Button", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-setting-gallery-button-wrapper"
                                            >
                                                <BaseControl
                                                    label={__("Alignment", "frontis-blocks")}
                                                    id="fb-setting-image-alignment"
                                                    className="fb-setting-image-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-setting-image-alignment-group-btn"
                                                    >
                                                        {TEXT_ALIGN.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ GalleryButtonAlignment: item.value })}
                                                                className={`fb-setting-image-alignment-single-btn ${GalleryButtonAlignment === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

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
                                                                            value={GalleryButtonFontFamily}
                                                                            onChange={(value) => setAttributes({ GalleryButtonFontFamily: value })}
                                                                        />
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-wrapper">
                                                                        <div className="fb-setting-fontsize-header">
                                                                            <FB_ResponsiveControl
                                                                                labelText={__("Font Size", "frontis-blocks")}
                                                                                device={DeviceType}
                                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                            />
                                                                            <div className="fb-setting-fontsize-units">
                                                                                <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                    {UNIT_TYPES.map((item, key) => (
                                                                                        <Button
                                                                                            key={key}
                                                                                            onClick={() => setAttributes({ GalleryButtonFontSizeUnits: item.value })}
                                                                                            className={`fb-setting-fontsize-units-switcher ${GalleryButtonFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                        >
                                                                                            {item.label}
                                                                                        </Button>
                                                                                    ))}
                                                                                </ButtonGroup>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fb-setting-fontsize-rangecontrol">
                                                                            <RangeControl
                                                                                value={DeviceType === "Desktop" ? GalleryButtonFontSizeDesktop : DeviceType === "Tablet" ? GalleryButtonFontSizeTablet : GalleryButtonFontSizeMobile}
                                                                                onChange={(value) => {
                                                                                    if (DeviceType === "Desktop") {
                                                                                        setAttributes({ GalleryButtonFontSizeDesktop: value });
                                                                                    } else if (DeviceType === "Tablet") {
                                                                                        setAttributes({ GalleryButtonFontSizeTablet: value });
                                                                                    } else if (DeviceType === "Mobile") {
                                                                                        setAttributes({ GalleryButtonFontSizeMobile: value });
                                                                                    }
                                                                                }}
                                                                                min={1}
                                                                                max={200}
                                                                                allowReset
                                                                                resetFallbackValue={18}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="fb-setting-fontweight-wrapper">
                                                                        <SelectControl
                                                                            label={__("Font Weight", "frontis-blocks")}
                                                                            options={[
                                                                                { label: __("Default", "frontis-blocks"), value: "700" },
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
                                                                            value={GalleryButtonFontWeight}
                                                                            onChange={(value) => setAttributes({ GalleryButtonFontWeight: value })}
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
                                                                            value={GalleryButtonFontStyle}
                                                                            onChange={(value) => setAttributes({ GalleryButtonFontStyle: value })}
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
                                                                            value={GalleryButtonTextTransform}
                                                                            onChange={(value) => setAttributes({ GalleryButtonTextTransform: value })}
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
                                                                            value={GalleryButtonTextDecoration}
                                                                            onChange={(value) => setAttributes({ GalleryButtonTextDecoration: value })}
                                                                        />
                                                                    </div>
                                                                    <div className="fb-setting-letterspacing-wrapper">
                                                                        <div className="fb-setting-letterspacing-header">
                                                                            <FB_ResponsiveControl
                                                                                labelText={__("Letter Spacing", "frontis-blocks")}
                                                                                device={DeviceType}
                                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                            />
                                                                            <div className="fb-setting-letterspacing-units">
                                                                                <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                    {UNIT_TYPES.map((item, key) => (
                                                                                        <Button
                                                                                            key={key}
                                                                                            onClick={() => setAttributes({ GalleryButtonLetterSpacingUnits: item.value })}
                                                                                            className={`fb-setting-letterspacing-units-switcher ${GalleryButtonLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                        >
                                                                                            {item.label}
                                                                                        </Button>
                                                                                    ))}
                                                                                </ButtonGroup>
                                                                            </div>
                                                                        </div>
                                                                        <RangeControl
                                                                            value={DeviceType === "Desktop" ? GalleryButtonLetterSpacingDesktop : DeviceType === "Tablet" ? GalleryButtonLetterSpacingTablet : GalleryButtonLetterSpacingMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ GalleryButtonLetterSpacingDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ GalleryButtonLetterSpacingTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
                                                                                    setAttributes({ GalleryButtonLetterSpacingMobile: value });
                                                                                }
                                                                            }}
                                                                            min={-10}
                                                                            max={100}
                                                                            step={1}
                                                                            allowReset
                                                                            resetFallbackValue={0}
                                                                        />
                                                                    </div>

                                                                    <div className="fb-setting-lineheight-wrapper">
                                                                        <div className="fb-setting-lineheight-header">
                                                                            <FB_ResponsiveControl
                                                                                labelText={__("Line Height", "frontis-blocks")}
                                                                                device={DeviceType}
                                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                                            />
                                                                            <div className="fb-setting-lineheight-units">
                                                                                <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                    {UNIT_TYPES.map((item, key) => (
                                                                                        <Button
                                                                                            key={key}
                                                                                            onClick={() => setAttributes({ GalleryButtonLineHeightUnits: item.value })}
                                                                                            className={`fb-setting-lineheight-units-switcher ${GalleryButtonLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                        >
                                                                                            {item.label}
                                                                                        </Button>
                                                                                    ))}
                                                                                </ButtonGroup>
                                                                            </div>
                                                                        </div>
                                                                        <RangeControl
                                                                            value={DeviceType === "Desktop" ? GalleryButtonLineHeightDesktop : DeviceType === "Tablet" ? GalleryButtonLineHeightTablet : GalleryButtonLineHeightMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ GalleryButtonLineHeightDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ GalleryButtonLineHeightTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
                                                                                    setAttributes({ GalleryButtonLineHeightMobile: value });
                                                                                }
                                                                            }}
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

                                                <BaseControl
                                                    label={__("Color", "frontis-blocks")}
                                                    className="fb-setting-color-panel-wrapper"
                                                >
                                                    <ButtonGroup className="fb-setting-color-panel-btn">
                                                        {NORMAL_HOVER.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ GalleryButtonColorSwitcher: item.value })}
                                                                className={`fb-setting-color-panel-btn-switchr ${GalleryButtonColorSwitcher === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {GalleryButtonColorSwitcher === 'normal' && (
                                                    <BaseControl 
                                                        label={__("Nomal Color", "frontis-blocks")}
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
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
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
                                                                                color={GalleryButtonColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonColor: value })}
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
                                                                                value={GalleryButtonColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                {GalleryButtonColorSwitcher === 'hover' && (
                                                    <BaseControl 
                                                        label={__("Hover Color", "frontis-blocks")}
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
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-hover-color">
                                                                            <ColorPicker
                                                                                color={GalleryButtonHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonHoverColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={GalleryButtonHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonHoverColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                <BaseControl
                                                    label={__("Background Color", "frontis-blocks")}
                                                    className="fb-setting-color-panel-wrapper"
                                                >
                                                    <ButtonGroup className="fb-setting-color-panel-btn">
                                                        {NORMAL_HOVER.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ GalleryButtonBGColorSwitcher: item.value })}
                                                                className={`fb-setting-color-panel-btn-switchr ${GalleryButtonBGColorSwitcher === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {GalleryButtonBGColorSwitcher === 'normal' && (
                                                    <BaseControl 
                                                        label={__("Nomal Color", "frontis-blocks")}
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
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
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
                                                                                color={GalleryButtonBGColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonBGColor: value })}
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
                                                                                value={GalleryButtonBGColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonBGColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                {GalleryButtonBGColorSwitcher === 'hover' && (
                                                    <BaseControl 
                                                        label={__("Hover Color", "frontis-blocks")}
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
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-hover-color">
                                                                            <ColorPicker
                                                                                color={GalleryButtonBGHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonBGHoverColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={GalleryButtonBGHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryButtonBGHoverColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                            <FB_Spacing 
                                                label={__("Margin", "frontis-blocks")}
                                                DeviceType={DeviceType}
                                                spacingUnitsHandler={handleButtonMarginUnitsHandler}
                                                spacingUnits={ButtonMarginUnits}
                                                spacingDesktop={ButtonDesktopMargin}
                                                spacingTablet={ButtonTabMargin}
                                                spacingMobile={ButtonMobileMargin}
                                                handleSpacingUnitHandler={handleButtonMarginUnitChange}
                                                spacingCombineBtn={ButtonMarginLink}
                                                spacingCombineBtnHandler={handleButtonMarginCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                DeviceType={DeviceType}
                                                spacingUnitsHandler={handleButtonPaddingUnitsHandler}
                                                spacingUnits={ButtonPaddingUnits}
                                                spacingDesktop={ButtonDesktopPadding}
                                                spacingTablet={ButtonTabPadding}
                                                spacingMobile={ButtonMobilePadding}
                                                handleSpacingUnitHandler={handleButtonPaddingUnitChange}
                                                spacingCombineBtn={ButtonPaddingLink}
                                                spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            </PanelBody>
                                            
                                        
                                        }
                                        { GalleryButtonSwitcher == true &&
                                        
                                        <PanelBody
                                            title={__("Button Border & Border radius", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-border-setting-wrapper"
                                            >
                                                <SelectControl
                                                    label={__("Border Style", "frontis-blocks")}
                                                    value={ButtonBorder}
                                                    options={BORDER_STYLES}
                                                    onChange={(value) => setAttributes({ ButtonBorder: value })}
                                                />

                                            <BaseControl
                                                label={__("Border Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ ButtonBorderColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${ButtonBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {ButtonBorderColorSwitcher === 'normal' && (
                                                <BaseControl 
                                                    label={__("Nomal Color", "frontis-blocks")}
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
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
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
                                                                            color={ButtonBorderColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderColor: value })}
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
                                                                            value={ButtonBorderColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {GalleryBorderColorSwitcher === 'hover' && (
                                                <BaseControl 
                                                    label={__("Hover Color", "frontis-blocks")}
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
                                                                aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                className="fb-setting-color-setting-icon-btn"
                                                            >
                                                                <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                            </Button>
                                                        )}
                                                        renderContent={() => (
                                                            <div className="fb-setting-color-setting-icon-popup">
                                                                <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                    <div className="fb-setting-hover-color">
                                                                        <ColorPicker
                                                                            color={ButtonBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderHoverColor: value })}
                                                                            enableAlpha={true}
                                                                        />
                                                                        <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                        <ColorPalette
                                                                            colors={[
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
                                                                            ]}
                                                                            disableCustomColors={true}
                                                                            value={ButtonBorderHoverColor}
                                                                            onChange={(value) => setAttributes({ ButtonBorderHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            <FB_Spacing 
                                                label={__("Border Width", "frontis-blocks")}
                                                DeviceType={DeviceType}
                                                spacingUnitsHandler={handleButtonBorderUnitsHandler}
                                                spacingUnits={ButtonBorderUnits}
                                                spacingDesktop={ButtonDesktopBorderWidth}
                                                spacingTablet={ButtonTabBorderWidth}
                                                spacingMobile={ButtonMobileBorderWidth}
                                                handleSpacingUnitHandler={handleButtonBorderUnitChange}
                                                spacingCombineBtn={ButtonBorderLink}
                                                spacingCombineBtnHandler={handleButtonBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing 
                                                label={__("Border Radius Width", "frontis-blocks")}
                                                DeviceType={DeviceType}
                                                spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
                                                spacingUnits={ButtonBorderRadiusUnits}
                                                spacingDesktop={ButtonDesktopBorderRadiusWidth}
                                                spacingTablet={ButtonTabBorderRadiusWidth}
                                                spacingMobile={ButtonMobileBorderRadiusWidth}
                                                handleSpacingUnitHandler={handleButtonBorderRadiusUnitChange}
                                                spacingCombineBtn={ButtonBorderRadiusLink}
                                                spacingCombineBtnHandler={handleButtonBorderRadiusCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                        </PanelBody>
                                        
                                        }

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
                                                    value={GalleryZIndex}
                                                    onChange={(value) => setAttributes({ GalleryZIndex: value === 0 ? undefined : value })}
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                    allowReset
                                                    resetFallbackValue={undefined}
                                                />
                                            </PanelBody>
                                            <PanelBody
                                             title={__("Padding & Margin", "frontis-blocks")}
                                             initialOpen={false}
                                             >

                                                <FB_Spacing 
                                                    label={__("Margin", "frontis-blocks")}
                                                    DeviceType={DeviceType}
                                                    spacingUnitsHandler={handleGalleryMarginUnitsHandler}
                                                    spacingUnits={GalleryMarginUnits}
                                                    spacingDesktop={GalleryDesktopMargin}
                                                    spacingTablet={GalleryTabMargin}
                                                    spacingMobile={GalleryMobileMargin}
                                                    handleSpacingUnitHandler={handleGalleryMarginUnitChange}
                                                    spacingCombineBtn={GalleryMarginLink}
                                                    spacingCombineBtnHandler={handleGalleryMarginCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_Spacing 
                                                    label={__("Padding", "frontis-blocks")}
                                                    DeviceType={DeviceType}
                                                    spacingUnitsHandler={handleGalleryPaddingUnitsHandler}
                                                    spacingUnits={GalleryPaddingUnits}
                                                    spacingDesktop={GalleryDesktopPadding}
                                                    spacingTablet={GalleryTabPadding}
                                                    spacingMobile={GalleryMobilePadding}
                                                    handleSpacingUnitHandler={handleGalleryPaddingUnitChange}
                                                    spacingCombineBtn={GalleryPaddingLink}
                                                    spacingCombineBtnHandler={handleGalleryPaddingCombineBtn}
                                                    setAttributes={setAttributes}
                                                />                                     
                                            </PanelBody>
                                            <PanelBody title="Background Color" initialOpen={false} >
                                                <BaseControl
                                                    className="fb-setting-color-panel-wrapper"
                                                >
                                                    <ButtonGroup className="fb-setting-color-panel-btn">
                                                        {NORMAL_HOVER.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ GalleryBgColorSwitcher: item.value })}
                                                                className={`fb-setting-color-panel-btn-switchr ${GalleryBgColorSwitcher === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {GalleryBgColorSwitcher === 'normal' && (
                                                    <BaseControl 
                                                        label={__("Nomal Color", "frontis-blocks")}
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
                                                                                color={GalleryBgColor}
                                                                                onChange={(value) => setAttributes({ GalleryBgColor: value })}
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
                                                                                value={GalleryBgColor}
                                                                                onChange={(value) => setAttributes({ GalleryBgColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                {GalleryBgColorSwitcher === 'hover' && (
                                                    <BaseControl 
                                                        label={__("Hover Color", "frontis-blocks")}
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
                                                                        <div className="fb-setting-hover-color">
                                                                            <ColorPicker
                                                                                color={GalleryBgHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryBgHoverColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={GalleryBgHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryBgHoverColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Border & Border radius", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-setting-border-setting-wrapper"
                                                >
                                                    <SelectControl
                                                        label={__("Border Style", "frontis-blocks")}
                                                        value={GalleryBorder}
                                                        options={BORDER_STYLES}
                                                        onChange={(value) => setAttributes({ GalleryBorder: value })}
                                                    />

                                                <BaseControl
                                                    label={__("Border Color", "frontis-blocks")}
                                                    className="fb-setting-color-panel-wrapper"
                                                >
                                                    <ButtonGroup className="fb-setting-color-panel-btn">
                                                        {NORMAL_HOVER.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ GalleryBorderColorSwitcher: item.value })}
                                                                className={`fb-setting-color-panel-btn-switchr ${GalleryBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {GalleryBorderColorSwitcher === 'normal' && (
                                                    <BaseControl 
                                                        label={__("Nomal Color", "frontis-blocks")}
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
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
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
                                                                                color={GalleryBorderColor}
                                                                                onChange={(value) => setAttributes({ GalleryBorderColor: value })}
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
                                                                                value={GalleryBorderColor}
                                                                                onChange={(value) => setAttributes({ GalleryBorderColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                {GalleryBorderColorSwitcher === 'hover' && (
                                                    <BaseControl 
                                                        label={__("Hover Color", "frontis-blocks")}
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
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-hover-color">
                                                                            <ColorPicker
                                                                                color={GalleryBorderHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryBorderHoverColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={GalleryBorderHoverColor}
                                                                                onChange={(value) => setAttributes({ GalleryBorderHoverColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                <FB_Spacing 
                                                    label={__("Border Width", "frontis-blocks")}
                                                    DeviceType={DeviceType}
                                                    spacingUnitsHandler={handleGalleryBorderUnitsHandler}
                                                    spacingUnits={GalleryBorderUnits}
                                                    spacingDesktop={GalleryDesktopBorderWidth}
                                                    spacingTablet={GalleryTabBorderWidth}
                                                    spacingMobile={GalleryMobileBorderWidth}
                                                    handleSpacingUnitHandler={handleGalleryBorderUnitChange}
                                                    spacingCombineBtn={GalleryBorderLink}
                                                    spacingCombineBtnHandler={handleGalleryBorderCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_Spacing 
                                                    label={__("Border Radius Width", "frontis-blocks")}
                                                    DeviceType={DeviceType}
                                                    spacingUnitsHandler={handleGalleryBorderRadiusUnitsHandler}
                                                    spacingUnits={GalleryBorderRadiusUnits}
                                                    spacingDesktop={GalleryDesktopBorderRadiusWidth}
                                                    spacingTablet={GalleryTabBorderRadiusWidth}
                                                    spacingMobile={GalleryMobileBorderRadiusWidth}
                                                    handleSpacingUnitHandler={handleGalleryBorderRadiusUnitChange}
                                                    spacingCombineBtn={GalleryBorderRadiusLink}
                                                    spacingCombineBtnHandler={handleGalleryBorderRadiusCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Responsive Control", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-setting-responsive-control-wrapper"
                                            >
                                                <ToggleControl
                                                    label={__("Hide on Desktop", "frontis-blocks")}
                                                    className="fb-setting-responsive-control"
                                                    checked={GalleryDesktopSwitcher}
                                                    onChange={(value) => setAttributes({ GalleryDesktopSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Hide on Tablet", "frontis-blocks")}
                                                    className="fb-setting-responsive-control"
                                                    checked={GalleryTabletSwitcher}
                                                    onChange={(value) => setAttributes({ GalleryTabletSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Hide on Mobile", "frontis-blocks")}
                                                    className="fb-setting-responsive-control"
                                                    checked={GalleryMobileSwitcher}
                                                    onChange={(value) => setAttributes({ GalleryMobileSwitcher: value })}
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
