import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo, memo } from '@wordpress/element';
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
    BORDER_STYLES,
    OVERFLOW_OP,
} from '@Constants/fbConstants';

import SortableItem from './sortableItem';

import './editor.scss';
import FB_Spacing from '../../components/spacing';
import FB_Range from '../../components/range';
import FB_TypographyControl from '../../components/typography-control';
import FBIconPicker from '../../components/icon-picker';
import FB_AlignmentControl from '../../components/alignment-control';
import FB_BackgroundColorControl from '../../components/background-color-control';
import FB_SwitcherControl from '../../components/switcher-control';
import FB_ColorControl from '../../components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';
import { imageGalleryPresets } from "./presets";

const Inspector = ({ attributes, setAttributes }) => {
    const { 
        blockID,
        blockStyle,
        // deviceType,

        GalleryPresetStyle,
        GalleryType,
        GalleryItems,

        GalleryItemHeight,
        GalleryItemHeightUnits,

        ImageOverlayStyle,
        ImageOverlayStyleType,
        ImageOverlayColor,

        GalleryColumnNumber,

        GalleryImageGap,
        GalleryImageGapUnits,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        ImageAlignment,
        ImageFitCover,

        ImageWidth,
        ImageWidthUnits,

        ImageHeight,
        ImageHeightUnits,

        GalleryButtonAlignment,
        GalleryButtonGlobalTypoSwitcher,
        GalleryButtonGlobalTypographyData,
        GalleryButtonGlobalTypoType,
        GalleryButtonGlobalTypoOption,
        GalleryButtonFontFamily,
        GalleryButtonFontSize,
        GalleryButtonFontSizeUnits,
        GalleryButtonFontWeight,
        GalleryButtonFontStyle,
        GalleryButtonTextTransform,
        GalleryButtonTextDecoration,
        GalleryButtonLetterSpacing,
        GalleryButtonLetterSpacingUnits,
        GalleryButtonLineHeight,
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
        GalleryOverflow,
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

        // Boxshadow
        GalleryGlobalBoxShadowValues,
        GalleryGlobalBoxShadowCssValue,

		// Backgorund
        GalleryBgColorSwitcher,
        GalleryBgType,
        GalleryBgClassicColor,
        GalleryBgGradientColor,
        GalleryBgCustomGradientSwitcher,
        GalleryBgCustomGradientInputValue,
        GalleryBgImageUrl,
        GalleryBgImageAlt,
        GalleryBgImageID,
        GalleryBgImagePosition,
        GalleryBgImageAttachment,
        GalleryBgImageRepeat,
        GalleryBgImageSize,
        GalleryBgHoverType,
        GalleryBgHoverClassicColor,
        GalleryBgHoverGradientColor,
        GalleryBgHoverCustomGradientSwitcher,
        GalleryBgHoverCustomGradientInputValue,
        GalleryBgHoverImageUrl,
        GalleryBgHoverImageAlt,
        GalleryBgHoverImageID,
        GalleryBgHoverImagePosition,
        GalleryBgHoverImageAttachment,
        GalleryBgHoverImageRepeat,
        GalleryBgHoverImageSize,

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
        GalleryBorderRadiusDesktop,
        GalleryBorderRadiusTablet,
        GalleryBorderRadiusMobile,
        GalleryBorderRadiusLink,

        GalleryDesktopSwitcher,
        GalleryTabletSwitcher,
        GalleryMobileSwitcher,

        // Image border
        imageBorder,
        imageBorderColor,
        imageBorderHoverColor,
        imageBorderColorSwitcher,
        imageBorderUnits,
        imageDesktopBorderWidth,
        imageTabBorderWidth,
        imageMobileBorderWidth,
        imageBorderLink,
        imageBorderRadiusUnits,
        imageDesktopBorderRadiusWidth,
        imageTabBorderRadiusWidth,
        imageMobileBorderRadiusWidth,
        imageBorderRadiusLink,

        // Lightbox Icon
        lightboxIconSwitcher,
        lightboxIcon,
        lightboxIconSize,
        lightboxIconSizeUnits,
        lightboxColorSwitcher,
        lightboxColor,
        lightboxHoverColor,
        lightboxBGColorSwitcher,
        lightboxBGColor,
        lightboxBGHoverColor,
        lightboxBorder,
        lightboxBorderColor,
        lightboxBorderHoverColor,
        lightboxBorderColorSwitcher,
        lightboxPaddingUnits,
        lightboxDesktopPadding,
        lightboxTabPadding,
        lightboxMobilePadding,
        lightboxPaddingLink,
        lightboxBorderUnits,
        lightboxDesktopBorderWidth,
        lightboxTabBorderWidth,
        lightboxMobileBorderWidth,
        lightboxBorderLink,
        lightboxBorderRadiusUnits,
        lightboxDesktopBorderRadiusWidth,
        lightboxTabBorderRadiusWidth,
        lightboxMobileBorderRadiusWidth,
        lightboxBorderRadiusLink,

        imageGalleryCustomCSS,
        imageGalleryGlobalWraperID,
        imageGalleryGlobalWraperClass,

        // Position
        GalleryPositionType,
        GalleryHZOrientationType,
        GalleryVROrientationType,
        GalleryHZLeftOffset,
        GalleryHZLeftOffsetUnits,
        GalleryHZRightOffset,
        GalleryHZRightOffsetUnits,
        GalleryVRTopOffset,
        GalleryVRTopOffsetUnits,
        GalleryVRBottomOffset,
        GalleryVRBottomOffsetUnits,
    } = attributes;
    
    const deviceType= useDeviceType();

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

    /** Member Image */
	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
	}

	// Set default value for teamMemberBackgroundImageUrl
	useEffect(() => {
        const updatedItems = GalleryItems.map(item =>
            !item?.image?.url ? { ...item, image: {...item.image, url: defaultImageUrl} } : item
        )
        setAttributes({ GalleryItems: updatedItems });
	}, []);

    /** Item Height */
    const GalleryItemHeightHandler = (value) => {
        setAttributes({ GalleryItemHeight: value });
    };

    const GalleryItemHeightUnitsHandler = (value) => {
        setAttributes({ GalleryItemHeightUnits: value });
    };

    /** Item Gap */
    const GalleryImageGapHandler = (value) => {
        setAttributes({ GalleryImageGap: value });
    };

    const GalleryImageGapUnitsHandler = (value) => {
        setAttributes({ GalleryImageGapUnits: value });
    };

    /** Image Width */
    const ImageWidthHandler = (value) => {
        setAttributes({ ImageWidth: value });
    };

    const ImageWidthUnitsHandler = (value) => {
        setAttributes({ ImageWidthUnits: value });
    };

    /** Image Height */
    const ImageHeightHandler = (value) => {
        setAttributes({ ImageHeight: value });
    };

    const ImageHeightUnitsHandler = (value) => {
        setAttributes({ ImageHeightUnits: value });
    };

    /** Lightbox icon size */
    const lightboxIconSizeHandler = (value) => {
        setAttributes({ lightboxIconSize: value });
    };

    const lightboxIconSizeUnitsHandler = (value) => {
        setAttributes({ lightboxIconSizeUnits: value });
    };

    
    // Button Margin Functionb
    const handleButtonMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonMarginLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Button Padding Functionb
    const handleButtonPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonPaddingLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Button Border Function
    const handleButtonBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonBorderLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Button BorderRadius Function
    const handleButtonBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( ButtonBorderRadiusLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Gallery Margin Functionb
    const handleGalleryMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryMarginLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Gallery Padding Functionb
    const handleGalleryPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryPaddingLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Gallery BorderWidth Function
    const handleGalleryBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryBorderLink ) {
            switch ( deviceType ) {
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
            switch ( deviceType ) {
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
                [deviceType]: unit
            }
        })
    }

    // Gallery BorderRadiusWidth Function
    const handleGalleryBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( GalleryBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        GalleryBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        GalleryBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        GalleryBorderRadiusMobile: {
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
                    setAttributes( {GalleryBorderRadiusDesktop: {...GalleryBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {GalleryBorderRadiusTablet: {...GalleryBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {GalleryBorderRadiusMobile: {...GalleryBorderRadiusMobile, [position]: value}} );
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
                [deviceType]: unit
            }
        })
    }

    // image BorderWidth Function
	const handleImageBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( imageBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						imageDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						imageTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						imageMobileBorderWidth: {
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
					setAttributes( {imageDesktopBorderWidth: {...imageDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {imageTabBorderWidth: {...imageTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {imageMobileBorderWidth: {...imageMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleImageBorderCombineBtn = () => {
		setAttributes( {imageBorderLink: !imageBorderLink} );
	}
	
	const handleImageBorderUnitsHandler = (unit) => {
		setAttributes( {
			imageBorderUnits: {
				...imageBorderUnits,
				[deviceType]: unit
			}
		})
	}
	
	// image BorderRadiusWidth Function
	const handleImageBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( imageBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						imageDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						imageTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						imageMobileBorderRadiusWidth: {
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
					setAttributes( {imageDesktopBorderRadiusWidth: {...imageDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {imageTabBorderRadiusWidth: {...imageTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {imageMobileBorderRadiusWidth: {...imageMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	
	}
	
	const handleImageBorderRadiusCombineBtn = () => {
		setAttributes( {imageBorderRadiusLink: !imageBorderRadiusLink} );
	}
	
	const handleImageBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			imageBorderRadiusUnits: {
				...imageBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	
    // lightbox Padding Functionb
    const handleLightboxPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( lightboxPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        lightboxDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        lightboxTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        lightboxMobilePadding: {
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
                    setAttributes( {lightboxDesktopPadding: {...lightboxDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {lightboxTabPadding: {...lightboxTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {lightboxMobilePadding: {...lightboxMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleLightboxPaddingCombineBtn = () => {
        setAttributes( {lightboxPaddingLink: !lightboxPaddingLink} );
    }

    const handleLightboxPaddingUnitsHandler = (unit) => {
        setAttributes( {
            lightboxPaddingUnits: {
                ...lightboxPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // lightbox BorderWidth Function
    const handleLightboxBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( lightboxBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        lightboxDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        lightboxTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        lightboxMobileBorderWidth: {
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
                    setAttributes( {lightboxDesktopBorderWidth: {...lightboxDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {lightboxTabBorderWidth: {...lightboxTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {lightboxMobileBorderWidth: {...lightboxMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleLightboxBorderCombineBtn = () => {
        setAttributes( {lightboxBorderLink: !lightboxBorderLink} );
    }

    const handleLightboxBorderUnitsHandler = (unit) => {
        setAttributes( {
            lightboxBorderUnits: {
                ...lightboxBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // lightbox BorderRadiusWidth Function
    const handleLightboxBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( lightboxBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        lightboxDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        lightboxTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        lightboxMobileBorderRadiusWidth: {
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
                    setAttributes( {lightboxDesktopBorderRadiusWidth: {...lightboxDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {lightboxTabBorderRadiusWidth: {...lightboxTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {lightboxMobileBorderRadiusWidth: {...lightboxMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleLightboxBorderRadiusCombineBtn = () => {
        setAttributes( {lightboxBorderRadiusLink: !lightboxBorderRadiusLink} );
    }

    const handleLightboxBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            lightboxBorderRadiusUnits: {
                ...lightboxBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const lightboxIconHandler = (IconName) => {
		setAttributes({lightboxIcon: IconName})
	}

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody
                title={__("Gallery Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Presets
                    className="image-gallery-box-presets"
                    label={__('Select Preset', 'frontis-blocks')}
                    presets={imageGalleryPresets}
                    value = {GalleryPresetStyle}
                    onChangeValue = 'GalleryPresetStyle'
                    defaultPresetValue="preset-1"
                    setAttributes={setAttributes}
                />

                <BaseControl
                    label={__("Layouts", "frontis-blocks")}
                    className="fb-setting-layouts-wrapper"
                >
                    <SelectControl
                        value={attributes.GalleryType}
                        options={[
                            { label: __("Grid Layout", "frontis-blocks"), value: "grid" },
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

                <FB_Range
                    min={1}
                    max={12}
                    label={__("Columns", "frontis-blocks")}
                    rangeValue={GalleryColumnNumber}
                    onChangeHandler={(value) => setAttributes({GalleryColumnNumber: value})}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={3}
                    isRangeUnit={false}
                />

                <FB_Range
                    min={1}
                    max={1000}
                    label={__("Image Height", "frontis-blocks")}
                    rangeValue={GalleryItemHeight}
                    onChangeHandler={GalleryItemHeightHandler}
                    rangeUnitHandler={GalleryItemHeightUnitsHandler}
                    deviceType={deviceType}
                    units={GalleryItemHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={200}
                />

                <FB_Range
                    min={1}
                    max={1000}
                    label={__("Image Gap", "frontis-blocks")}
                    rangeValue={GalleryImageGap}
                    onChangeHandler={GalleryImageGapHandler}
                    rangeUnitHandler={GalleryImageGapUnitsHandler}
                    deviceType={deviceType}
                    units={GalleryImageGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={200}
                />

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
                                        deviceType={deviceType}
                                        GalleryType={GalleryType}
                                        GalleryColumnNumber={GalleryColumnNumber}
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
                title={__("Lightbox Icon", "frontis-blocks")}
                initialOpen={false}
            >
                <ToggleControl
                    label={__("Enable Icon", "frontis-blocks")}
                    className="fb-setting-responsive-control"
                    checked={lightboxIconSwitcher}
                    onChange={(value) => setAttributes({ lightboxIconSwitcher: value })}
                />
                {lightboxIconSwitcher === true && <>
                    <BaseControl label={__("Icon", "frontis-blocks")}>
                        <FBIconPicker 
                            value={lightboxIcon} 
                            setIconHandler={lightboxIconHandler} 
                        />
                    </BaseControl>
                </>}
            </PanelBody>

            <PanelBody
                title={__("Button", "frontis-blocks")}
                initialOpen={false}
            >
                <ToggleControl
                    label={__("Enable Button", "frontis-blocks")}
                    className="fb-setting-responsive-control"
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
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody
                title={__("Image Setting", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={ImageAlignment}
                    setGlobalAlignment={(value) => setAttributes({ ImageAlignment: value })}
                />

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={ImageWidth}
                    onChangeHandler={ImageWidthHandler}
                    rangeUnitHandler={ImageWidthUnitsHandler}
                    deviceType={deviceType}
                    units={ImageWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={100}
                />
                
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={ImageHeight}
                    onChangeHandler={ImageHeightHandler}
                    rangeUnitHandler={ImageHeightUnitsHandler}
                    deviceType={deviceType}
                    units={ImageHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={100}
                />

                <ToggleControl
                    label={__("Object Fit Cover", "frontis-blocks")}
                    className="fb-setting-image-fit-toggle"
                    checked={ImageFitCover}
                    onChange={(value) => setAttributes({ ImageFitCover: value })}
                />

                <PanelBody
                    title={__("Border & Border radius", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-border-setting-wrapper"
                >
                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={imageBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ imageBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={imageBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ imageBorderColorSwitcher: value })}
                    />
                        
                    {imageBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={imageBorderColor}
                            setGlobalColor={(value) => setAttributes({ imageBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                        
                    {imageBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={imageBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ imageBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleImageBorderUnitsHandler}
                        spacingUnits={imageBorderUnits}
                        spacingDesktop={imageDesktopBorderWidth}
                        spacingTablet={imageTabBorderWidth}
                        spacingMobile={imageMobileBorderWidth}
                        handleSpacingUnitHandler={handleImageBorderUnitChange}
                        spacingCombineBtn={imageBorderLink}
                        spacingCombineBtnHandler={handleImageBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleImageBorderRadiusUnitsHandler}
                        spacingUnits={imageBorderRadiusUnits}
                        spacingDesktop={imageDesktopBorderRadiusWidth}
                        spacingTablet={imageTabBorderRadiusWidth}
                        spacingMobile={imageMobileBorderRadiusWidth}
                        handleSpacingUnitHandler={handleImageBorderRadiusUnitChange}
                        spacingCombineBtn={imageBorderRadiusLink}
                        spacingCombineBtnHandler={handleImageBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
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
                                    className="fb-setting-color-setting-icon-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.66699 14.666H13.3337" stroke="#1C274C"></path><path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"></path></svg>
                                </Button>
                            )}
                            renderContent={() => (
                                <div className="fb-setting-color-setting-icon-popup">
                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                        <div className="fb-setting-normal-color">
                                            <ColorPicker
                                                color={ImageOverlayColor}
                                                onChange={(value) => setAttributes({ ImageOverlayColor: value === undefined ? '' : value })}
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
                                                value={ImageOverlayColor}
                                                onChange={(value) => setAttributes({ ImageOverlayColor: value === undefined ? '' : value })}
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
                    <FB_AlignmentControl
                        label={__("Alignment", "frontis-blocks")}
                        globalAlignment={GalleryButtonAlignment}
                        setGlobalAlignment={(value) => setAttributes({ GalleryButtonAlignment: value })}
                    />

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={GalleryButtonGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ GalleryButtonGlobalTypographyData: value })}

                        globalTypoType={GalleryButtonGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                GalleryButtonGlobalTypoType: value, 
                                GalleryButtonGlobalTypoSwitcher: value === 'default' ? {...GalleryButtonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...GalleryButtonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={GalleryButtonGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ GalleryButtonGlobalTypoOption: value })}

                        fontFamily={GalleryButtonFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ GalleryButtonFontFamily: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={GalleryButtonFontSize}
                        onChangeFontSize={(value) => setAttributes({ GalleryButtonFontSize: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={GalleryButtonFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ GalleryButtonFontSizeUnits: value })}

                        fontWeight={GalleryButtonFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ GalleryButtonFontWeight: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={GalleryButtonFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ GalleryButtonFontStyle: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={GalleryButtonTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ GalleryButtonTextTransform: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={GalleryButtonTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ GalleryButtonTextDecoration: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={GalleryButtonLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ GalleryButtonLetterSpacing: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={GalleryButtonLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ GalleryButtonLetterSpacingUnits: value })}

                        lineHeight={GalleryButtonLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ GalleryButtonLineHeight: value, GalleryButtonGlobalTypoSwitcher: {...GalleryButtonGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={GalleryButtonLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ GalleryButtonLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={GalleryButtonColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ GalleryButtonColorSwitcher: value })}
                    />
                        
                    {GalleryButtonColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={GalleryButtonColor}
                            setGlobalColor={(value) => setAttributes({ GalleryButtonColor: value === undefined ? '' : value })}
                        />
                    )}
                        
                    {GalleryButtonColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={GalleryButtonHoverColor}
                            setGlobalColor={(value) => setAttributes({ GalleryButtonHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_SwitcherControl
                        label={__("Background Color", "frontis-blocks")}
                        globalSwitcher={GalleryButtonBGColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ GalleryButtonBGColorSwitcher: value })}
                    />
                        
                    {GalleryButtonBGColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={GalleryButtonBGColor}
                            setGlobalColor={(value) => setAttributes({ GalleryButtonBGColor: value === undefined ? '' : value })}
                        />
                    )}
                        
                    {GalleryButtonBGColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={GalleryButtonBGHoverColor}
                            setGlobalColor={(value) => setAttributes({ GalleryButtonBGHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
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
                        deviceType={deviceType}
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

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={ButtonBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ ButtonBorderColorSwitcher: value })}
                />
                        
                {ButtonBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={ButtonBorderColor}
                        setGlobalColor={(value) => setAttributes({ ButtonBorderColor: value === undefined ? '' : value })}
                    />
                )}
                        
                {ButtonBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={ButtonBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ ButtonBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
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
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
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

            { lightboxIconSwitcher === true &&
            <>
                <PanelBody
                    title={__("Lightbox", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-border-setting-wrapper"
                    >
                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Size", "frontis-blocks")}
                        rangeValue={lightboxIconSize}
                        onChangeHandler={lightboxIconSizeHandler}
                        rangeUnitHandler={lightboxIconSizeUnitsHandler}
                        deviceType={deviceType}
                        units={lightboxIconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={100}
                    />

                    <FB_Spacing
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLightboxPaddingUnitsHandler}
                        spacingUnits={lightboxPaddingUnits}
                        spacingDesktop={lightboxDesktopPadding}
                        spacingTablet={lightboxTabPadding}
                        spacingMobile={lightboxMobilePadding}
                        handleSpacingUnitHandler={handleLightboxPaddingUnitChange}
                        spacingCombineBtn={lightboxPaddingLink}
                        spacingCombineBtnHandler={handleLightboxPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={lightboxColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ lightboxColorSwitcher: value })}
                    />
                        
                    {lightboxColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={lightboxColor}
                            setGlobalColor={(value) => setAttributes({ lightboxColor: value === undefined ? '' : value })}
                        />
                    )}
                        
                    {lightboxColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={lightboxHoverColor}
                            setGlobalColor={(value) => setAttributes({ lightboxHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_SwitcherControl
                        label={__("Background Color", "frontis-blocks")}
                        globalSwitcher={lightboxBGColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ lightboxBGColorSwitcher: value })}
                    />
                        
                    {lightboxBGColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={lightboxBGColor}
                            setGlobalColor={(value) => setAttributes({ lightboxBGColor: value === undefined ? '' : value })}
                        />
                    )}
                        
                    {lightboxBGColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={lightboxBGHoverColor}
                            setGlobalColor={(value) => setAttributes({ lightboxBGHoverColor: value === undefined ? '' : value })}
                        />
                    )}
                </PanelBody>

                <PanelBody
                    title={__("Lightbox Border & Border radius", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-border-setting-wrapper"
                >
                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={lightboxBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ lightboxBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={lightboxBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ lightboxBorderColorSwitcher: value })}
                    />
                        
                    {lightboxBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={lightboxBorderColor}
                            setGlobalColor={(value) => setAttributes({ lightboxBorderColor: value === undefined ? '' : value })}
                        />
                    )}
                        
                    {lightboxBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={lightboxBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ lightboxBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLightboxBorderUnitsHandler}
                        spacingUnits={lightboxBorderUnits}
                        spacingDesktop={lightboxDesktopBorderWidth}
                        spacingTablet={lightboxTabBorderWidth}
                        spacingMobile={lightboxMobileBorderWidth}
                        handleSpacingUnitHandler={handleLightboxBorderUnitChange}
                        spacingCombineBtn={lightboxBorderLink}
                        spacingCombineBtnHandler={handleLightboxBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleLightboxBorderRadiusUnitsHandler}
                        spacingUnits={lightboxBorderRadiusUnits}
                        spacingDesktop={lightboxDesktopBorderRadiusWidth}
                        spacingTablet={lightboxTabBorderRadiusWidth}
                        spacingMobile={lightboxMobileBorderRadiusWidth}
                        handleSpacingUnitHandler={handleLightboxBorderRadiusUnitChange}
                        spacingCombineBtn={lightboxBorderRadiusLink}
                        spacingCombineBtnHandler={handleLightboxBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            </>   
            }
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
                            min={-10}
                            max={100000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={GalleryZIndex}
                            onChangeHandler={(value) => setAttributes({GalleryZIndex: value})}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={''}
                            isRangeUnit={false}
                        />

                            <SelectControl
                                label={__("Overflow", "frontis-blocks")}
                                value={GalleryOverflow}
                                options={OVERFLOW_OP}
                                onChange={(value) => setAttributes({ GalleryOverflow: value })}
                            />

                        <FB_PositionControl
                                deviceType={deviceType}
                                positionType={GalleryPositionType}
                                setPositionType={(value) => setAttributes({ GalleryPositionType: value })}
                                                                                
                                HZOrientationType={GalleryHZOrientationType}
                                setHZOrientationType={(value) =>
                                    setAttributes({ GalleryHZOrientationType: value })
                                }
                                VROrientationType={GalleryVROrientationType}
                                setVROrientationType={(value) =>
                                    setAttributes({ GalleryVROrientationType: value })
                                }
                                                                                    
                                HZLeftOffset={GalleryHZLeftOffset}
                                setHZLeftOffset={(value) => setAttributes({ GalleryHZLeftOffset: value })}
                                HZLeftOffsetUnits={GalleryHZLeftOffsetUnits}
                                setHZLeftOffsetUnits={(value) => setAttributes({ GalleryHZLeftOffsetUnits: value })}
                                HZRightOffset={GalleryHZRightOffset}
                                setHZRightOffset={(value) => setAttributes({ GalleryHZRightOffset: value })}
                                HZRightOffsetUnits={GalleryHZRightOffsetUnits}
                                setHZRightOffsetUnits={(value) => setAttributes({ GalleryHZRightOffsetUnits: value })}
                                                                                
                                VRTopOffset={GalleryVRTopOffset}
                                setVRTopOffset={(value) => setAttributes({ GalleryVRTopOffset: value })}
                                VRTopOffsetUnits={GalleryVRTopOffsetUnits}
                                setVRTopOffsetUnits={(value) => setAttributes({ GalleryVRTopOffsetUnits: value })}
                                VRBottomOffset={GalleryVRBottomOffset}
                                setVRBottomOffset={(value) => setAttributes({ GalleryVRBottomOffset: value })}
                                VRBottomOffsetUnits={GalleryVRBottomOffsetUnits}
                                setVRBottomOffsetUnits={(value) => setAttributes({ GalleryVRBottomOffsetUnits: value })}

                                setAttributes={setAttributes}
                            />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={imageGalleryGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ imageGalleryGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={imageGalleryGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ imageGalleryGlobalWraperClass: value })}
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
                            deviceType={deviceType}
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
                            <FB_BackgroundColorControl
                                bgColorSwitcher={GalleryBgColorSwitcher}
                                setBgColorSwitcher={(value) =>
                                    setAttributes({ GalleryBgColorSwitcher: value })
                                }
                                normalBackgroundType={GalleryBgType}
                                setNormalBackgroundType={(value) =>
                                    setAttributes({ GalleryBgType: value })
                                }
                                normalClassicColor={GalleryBgClassicColor}
                                setNormalClassicColor={(value) =>
                                    setAttributes({ GalleryBgClassicColor: value === undefined ? '' : value })
                                }
                                normalGradientColor={GalleryBgGradientColor}
                                setNormalGradientColor={(value) =>
                                    setAttributes({ GalleryBgGradientColor: value === undefined ? null : value })
                                }
                                normalCustomGradientSwitcher={GalleryBgCustomGradientSwitcher}
                                setNormalCustomGradientSwitcher={(value) =>
                                    setAttributes({
                                        GalleryBgCustomGradientSwitcher: value,
                                    })
                                }
                                normalCustomGradientInputValue={GalleryBgCustomGradientInputValue}
                                setNormalCustomGradientInputValue={(value) =>
                                    setAttributes({
                                        GalleryBgCustomGradientInputValue: value,
                                    })
                                }
                                normalBackgroundImageUrl={GalleryBgImageUrl}
                                setNormalBackgroundImageUrl={(value) =>
                                    setAttributes({ GalleryBgImageUrl: value })
                                }
                                normalBackgroundImageAlt={GalleryBgImageAlt}
                                setNormalBackgroundImageAlt={(value) =>
                                    setAttributes({ GalleryBgImageAlt: value })
                                }
                                normalBackgroundImageID={GalleryBgImageID}
                                setNormalBackgroundImageID={(value) =>
                                    setAttributes({ GalleryBgImageID: value })
                                }
                                normalBackgroundImagePosition={GalleryBgImagePosition}
                                setNormalBackgroundImagePosition={(value) =>
                                    setAttributes({
                                        GalleryBgImagePosition: value,
                                    })
                                }
                                normalBackgroundImageAttachment={GalleryBgImageAttachment}
                                setNormalBackgroundImageAttachment={(value) =>
                                    setAttributes({
                                        GalleryBgImageAttachment: value,
                                    })
                                }
                                normalBackgroundImageRepeat={GalleryBgImageRepeat}
                                setNormalBackgroundImageRepeat={(value) =>
                                    setAttributes({
                                        GalleryBgImageRepeat: value,
                                    })
                                }
                                normalBackgroundImageSize={GalleryBgImageSize}
                                setNormalBackgroundImageSize={(value) =>
                                    setAttributes({ GalleryBgImageSize: value })
                                }
                                hoverBackgroundType={GalleryBgHoverType}
                                setHoverBackgroundType={(value) =>
                                    setAttributes({ GalleryBgHoverType: value })
                                }
                                hoverClassicColor={GalleryBgHoverClassicColor}
                                setHoverClassicColor={(value) =>
                                    setAttributes({ GalleryBgHoverClassicColor: value === undefined ? '' : value })
                                }
                                hoverGradientColor={GalleryBgHoverGradientColor}
                                setHoverGradientColor={(value) =>
                                    setAttributes({ GalleryBgHoverGradientColor: value === undefined ? null : value })
                                }
                                hoverCustomGradientSwitcher={GalleryBgHoverCustomGradientSwitcher}
                                setHoverCustomGradientSwitcher={(value) =>
                                    setAttributes({
                                        GalleryBgHoverCustomGradientSwitcher: value,
                                    })
                                }
                                hoverCustomGradientInputValue={GalleryBgHoverCustomGradientInputValue}
                                setHoverCustomGradientInputValue={(value) =>
                                    setAttributes({
                                        GalleryBgHoverCustomGradientInputValue: value,
                                    })
                                }
                                hoverBackgroundImageUrl={GalleryBgHoverImageUrl}
                                setBgHoverImageUrl={(value) =>
                                    setAttributes({ GalleryBgHoverImageUrl: value })
                                }
                                hoverBackgroundImageAlt={GalleryBgHoverImageAlt}
                                setBgHoverImageAlt={(value) =>
                                    setAttributes({ GalleryBgHoverImageAlt: value })
                                }
                                hoverBackgroundImageID={GalleryBgHoverImageID}
                                setBgHoverImageID={(value) =>
                                    setAttributes({ GalleryBgHoverImageID: value })
                                }
                                hoverBackgroundImagePosition={GalleryBgHoverImagePosition}
                                setBgHoverImagePosition={(value) =>
                                    setAttributes({
                                        GalleryBgHoverImagePosition: value,
                                    })
                                }
                                hoverBackgroundImageAttachment={GalleryBgHoverImageAttachment}
                                setBgHoverImageAttachment={(value) =>
                                    setAttributes({
                                        GalleryBgHoverImageAttachment: value,
                                    })
                                }
                                hoverBackgroundImageRepeat={GalleryBgHoverImageRepeat}
                                setBgHoverImageRepeat={(value) =>
                                    setAttributes({
                                        GalleryBgHoverImageRepeat: value,
                                    })
                                }
                                hoverBackgroundImageSize={GalleryBgHoverImageSize}
                                setBgHoverImageSize={(value) =>
                                    setAttributes({ GalleryBgHoverImageSize: value })
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
                            value={GalleryBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ GalleryBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={GalleryBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ GalleryBorderColorSwitcher: value })}
                        />
                            
                        {GalleryBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={GalleryBorderColor}
                                setGlobalColor={(value) => setAttributes({ GalleryBorderColor: value === undefined ? '' : value })}
                            />
                        )}
                            
                        {GalleryBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={GalleryBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ GalleryBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
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
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGalleryBorderRadiusUnitsHandler}
                            spacingUnits={GalleryBorderRadiusUnits}
                            spacingDesktop={GalleryBorderRadiusDesktop}
                            spacingTablet={GalleryBorderRadiusTablet}
                            spacingMobile={GalleryBorderRadiusMobile}
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
                        <FB_VisibilityControl
                            desktopValue={GalleryDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ GalleryDesktopSwitcher: value })}

                            tabletValue={GalleryTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ GalleryTabletSwitcher: value })}

                            mobileValue={GalleryMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ GalleryMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={imageGalleryCustomCSS} 
                            onChangeValue={(value) => setAttributes({ imageGalleryCustomCSS: value })}
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