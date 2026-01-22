import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
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
    TEXT_ALIGN,
    BORDER_STYLES,
    PRESETS,
    OVERFLOW_OP,
} from "./constants/constants";

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

export default function Inspector({ attributes, setAttributes }) {
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

     /** Start Preset Style */
     const changeGalleryPreset = (selectedPreset) => {
        const presetConfigurations = {
            "default": {
                deviceType: "Desktop",
                GalleryType: "grid",
                GalleryItems: [
                    {
                        id: "image-1",
                        title: "Image 1",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                ],
                GalleryPresetStyle: "default",
                GalleryItemHeight: {
                    Desktop: 300,
                    Tablet: 300,
                    Mobile: 250
                },
                ImageOverlayStyle: "none",
                lightboxIconSwitcher: true,
                lightboxIcon: "plus",
                lightboxIconSize: {
                    Desktop: 24,
                    Tablet: 24,
                    Mobile: 24
                },
                lightboxColor: "#000",
                lightboxHoverColor: "#000",
                lightboxBGColor: "#fff",
                lightboxBorder: "none",
                lightboxBorderColor: "#000",
                lightboxDesktopPadding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                },
                lightboxDesktopBorderWidth: {
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0'
                },
                lightboxDesktopBorderRadiusWidth: {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 50
                },
                GalleryColumnNumber: {
                    Desktop: 3,
                    Tablet: 2,
                    Mobile: 1
                },
                GalleryImageGap: {
                    Desktop: 30,
                    Tablet: 15,
                    Mobile: 10
                },
                imageDesktopBorderRadiusWidth: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                }
            },
            "preset-1": {
                deviceType: "Desktop",
                GalleryType: "grid",
                GalleryItems: [
                    {
                        id: "image-1",
                        title: "Image 1",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-4",
                        title: "Image 4",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-5",
                        title: "Image 5",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-6",
                        title: "Image 6",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    }
                ],
                GalleryPresetStyle: "preset-1",
                GalleryItemHeight: {
                    Desktop: 410,
                    Tablet: 300,
                    Mobile: 200
                },
                ImageOverlayStyle: "none",
                lightboxIconSwitcher: true,
                lightboxIcon: "plus",
                lightboxIconSize: {
                    Desktop: 24,
                    Tablet: 24,
                    Mobile: 24
                },
                lightboxColor: "#000",
                lightboxHoverColor: "#000",
                lightboxBGColor: "#fff",
                lightboxBorder: "solid",
                lightboxBorderColor: "#399cff",
                lightboxDesktopPadding: {
                    top: 16,
                    right: 16,
                    bottom: 16,
                    left: 16
                },
                lightboxDesktopBorderWidth: {
                    top: 3,
                    right: 3,
                    bottom: 3,
                    left: 3
                },
                lightboxDesktopBorderRadiusWidth: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                },
                GalleryColumnNumber: {
                    Desktop: 3,
                    Tablet: 2,
                    Mobile: 1
                },
                GalleryImageGap: {
                    Desktop: 30,
                    Tablet: 15,
                    Mobile: 10
                },
                imageDesktopBorderRadiusWidth: {
                    top: 32,
                    bottom: 32,
                    left: 32,
                    right: 32,
                }
            },
            "preset-2": {
                deviceType: "Desktop",
                GalleryType: "grid",
                GalleryItems: [
                    {
                        id: "image-1",
                        title: "Image 1",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-4",
                        title: "Image 4",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-5",
                        title: "Image 5",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-6",
                        title: "Image 6",
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    }
                ],
                GalleryPresetStyle: "preset-2",
                GalleryItemHeight: {
                    Desktop: 411,
                    Tablet: 300,
                    Mobile: 200
                },
                ImageOverlayStyle: "black_white",
                lightboxIconSwitcher: true,
                lightboxIcon: "plus",
                lightboxIconSize: {
                    Desktop: 24,
                    Tablet: 24,
                    Mobile: 24
                },
                lightboxColorSwitcher: "normal",
                lightboxColor: "#000",
                lightboxHoverColor: "#000",
                lightboxBGColorSwitcher: "normal",
                lightboxBGColor: "#fff",
                lightboxBGHoverColor: "#fff",
                lightboxBorder: "solid",
                lightboxBorderColor: "#f89b2e",
                lightboxDesktopPadding: {
                    top: 16,
                    right: 16,
                    bottom: 16,
                    left: 16
                },
                lightboxDesktopBorderWidth: {
                    top: 2,
                    right: 2,
                    bottom: 2,
                    left: 2
                },
                lightboxBorderRadiusUnits: {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                },
                lightboxDesktopBorderRadiusWidth: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                },
                GalleryColumnNumber: {
                    Desktop: 3,
                    Tablet: 2,
                    Mobile: 1
                },
                GalleryImageGap: {
                    Desktop: 6,
                    Tablet: 15,
                    Mobile: 10
                },
                ImageFitCover: true,
                imageBorder: "none",
                imageDesktopBorderRadiusWidth: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }
            },
            "preset-3": {
                    deviceType: "Desktop",
                    GalleryType: "mesonry",
                    GalleryItems: [
                        {
                            id: "image-1",
                            title: "Image 1",
                            column: {
                                desktop: 2,
                                tablet: 0,
                                mobile: 0
                            },
                            row: {
                                desktop: 2,
                                tablet: 0,
                                mobile: 0
                            },
                            image: {
                                id: 0,
                                url: defaultImageUrl,
                                width: 0,
                                height: 0
                            }
                        },
                        {
                            id: "image-2",
                            title: "Image 2",
                            column: {
                                desktop: 0,
                                tablet: 0,
                                mobile: 0
                            },
                            row: {
                                desktop: 2,
                                tablet: 0,
                                mobile: 0
                            },
                            image: {
                                id: 0,
                                url: defaultImageUrl,
                                width: 0,
                                height: 0
                            }
                        },
                        {
                            id: "image-3",
                            title: "Image 3",
                            column: {
                                desktop: 0,
                                tablet: 0,
                                mobile: 0
                            },
                            row: {
                                desktop: 0,
                                tablet: 0,
                                mobile: 0
                            },
                            image: {
                                id: 0,
                                url: defaultImageUrl,
                                width: 0,
                                height: 0
                            }
                        },
                        {
                            id: "image-4",
                            title: "Image 4",
                            column: {
                                desktop: 0,
                                tablet: 0,
                                mobile: 0
                            },
                            row: {
                                desktop: 0,
                                tablet: 0,
                                mobile: 0
                            },
                            image: {
                                id: 0,
                                url: defaultImageUrl,
                                width: 0,
                                height: 0
                            }
                        }
                    ],
                    GalleryPresetStyle: "preset-3",
                    ImageOverlayStyle: "overlay",
                    ImageOverlayStyleType: "bottom",
                    lightboxIconSwitcher: false,
                    GalleryItemHeight: {
                        Desktop: 410,
                        Tablet: 410,
                        Mobile: 410
                    },
                    GalleryColumnNumber: {
                        Desktop: 4,
                    },
                    GalleryImageGap: {
                        Desktop: 30,
                        Tablet: 30,
                        Mobile: 30
                    },
                    GalleryImageGapUnits: {
                        Desktop: "px",
                        Tablet: "px",
                        Mobile: "px"
                    },
                    imageDesktopBorderRadiusWidth: {
                        top: 24,
                        bottom: 24,
                        left: 24,
                        right: 24,
                    },
            },
            "preset-4": {
                deviceType: "Desktop",
                GalleryType: "mesonry",
                GalleryItems: [
                    {
                        id: "image-1",
                        title: "Image 1",
                        column: {
                            desktop: 2,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        column: {
                            desktop: 1,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 2,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        desc: "",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 1,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-4",
                        title: "Image 4",
                        desc: "",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-5",
                        title: "Image 5",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-6",
                        title: "Image 6",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    }
                ],
                GalleryPresetStyle: "preset-4",
                lightboxIconSwitcher: false,
                GalleryItemHeight: {
                    Desktop: 410,
                    Tablet: 410,
                    Mobile: 410
                },
                ImageOverlayStyle: "overlay",
                ImageOverlayStyleType: "top",
                ImageOverlayColor: "rgba(0 0 0 / 0.7)",
                GalleryColumnNumber: {
                    Desktop: 4,
                },
                GalleryImageGap: {
                    Desktop: 30,
                    Tablet: 30,
                    Mobile: 30
                },
                GalleryImageGapUnits: {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                },
                imageDesktopBorderRadiusWidth: {
                    top: 24,
                    bottom: 24,
                    left: 24,
                    right: 24,
                },
            },
            "preset-5": {
                deviceType: "Desktop",
                GalleryType: "mesonry",
                GalleryItems: [
                    {
                        id: "image-1",
                        title: "Image 1",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 2,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 2,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-4",
                        title: "Image 4",
                        column: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        row: {
                            desktop: 0,
                            tablet: 0,
                            mobile: 0
                        },
                        image: {
                            id: 0,
                            url: defaultImageUrl,
                            width: 0,
                            height: 0
                        }
                    },
                ],
                GalleryPresetStyle: "preset-5",
                lightboxIconSwitcher: false,
                GalleryItemHeight: {
                    Desktop: 410,
                    Tablet: 410,
                    Mobile: 410
                },
                GalleryItemHeightUnits: {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                },
                ImageOverlayStyle: "overlay",
                ImageOverlayStyleType: "bottom",
                ImageOverlayColor: "rgba(0 0 0 / 0.7)",
                GalleryColumnNumber: {
                    Desktop: 3,
                    Tablet: 2,
                    Mobile: 1
                },
                GalleryImageGap: {
                    Desktop: 30,
                    Tablet: 30,
                    Mobile: 30
                },
                GalleryImageGapUnits: {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                },
                imageDesktopBorderRadiusWidth: {
                    top: 24,
                    bottom: 24,
                    left: 24,
                    right: 24,
                },
            },
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                GalleryPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Gallery: Preset "${selectedPreset}" not found.`);
        }
    };
    /** End Preset Style */
    /**
    * Preset Styles Data Object
    */
    const presetStyles = {
        "preset-1": {
            deviceType: "Desktop",
            GalleryType: "grid",
            GalleryItems: [
                {
                    id: "image-1",
                    title: "Image 1",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-2",
                    title: "Image 2",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-3",
                    title: "Image 3",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
            ],
            GalleryPresetStyle: "default",
            GalleryItemHeight: {
                Desktop: 300,
                Tablet: 300,
                Mobile: 250
            },
            ImageOverlayStyle: "none",
            lightboxIconSwitcher: true,
            lightboxIcon: "plus",
            lightboxIconSize: {
                Desktop: 24,
                Tablet: 24,
                Mobile: 24
            },
            lightboxColor: "#000",
            lightboxHoverColor: "#000",
            lightboxBGColor: "#fff",
            lightboxBorder: "none",
            lightboxBorderColor: "#000",
            lightboxDesktopPadding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            lightboxDesktopBorderWidth: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0'
            },
            lightboxDesktopBorderRadiusWidth: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            },
            GalleryColumnNumber: {
                Desktop: 3,
                Tablet: 2,
                Mobile: 1
            },
            GalleryImageGap: {
                Desktop: 30,
                Tablet: 15,
                Mobile: 10
            },
            imageDesktopBorderRadiusWidth: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            }
        },
        "preset-2": {
            deviceType: "Desktop",
            GalleryType: "grid",
            GalleryItems: [
                {
                    id: "image-1",
                    title: "Image 1",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-2",
                    title: "Image 2",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-3",
                    title: "Image 3",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-4",
                    title: "Image 4",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-5",
                    title: "Image 5",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-6",
                    title: "Image 6",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                }
            ],
            GalleryPresetStyle: "preset-1",
            GalleryItemHeight: {
                Desktop: 410,
                Tablet: 300,
                Mobile: 200
            },
            ImageOverlayStyle: "none",
            lightboxIconSwitcher: true,
            lightboxIcon: "plus",
            lightboxIconSize: {
                Desktop: 24,
                Tablet: 24,
                Mobile: 24
            },
            lightboxColor: "#000",
            lightboxHoverColor: "#000",
            lightboxBGColor: "#fff",
            lightboxBorder: "solid",
            lightboxBorderColor: "#399cff",
            lightboxDesktopPadding: {
                top: 16,
                right: 16,
                bottom: 16,
                left: 16
            },
            lightboxDesktopBorderWidth: {
                top: 3,
                right: 3,
                bottom: 3,
                left: 3
            },
            lightboxDesktopBorderRadiusWidth: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            GalleryColumnNumber: {
                Desktop: 3,
                Tablet: 2,
                Mobile: 1
            },
            GalleryImageGap: {
                Desktop: 30,
                Tablet: 15,
                Mobile: 10
            },
            imageDesktopBorderRadiusWidth: {
                top: 32,
                bottom: 32,
                left: 32,
                right: 32,
            }
        },
        "preset-3": {
            deviceType: "Desktop",
            GalleryType: "grid",
            GalleryItems: [
                {
                    id: "image-1",
                    title: "Image 1",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-2",
                    title: "Image 2",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-3",
                    title: "Image 3",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-4",
                    title: "Image 4",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-5",
                    title: "Image 5",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-6",
                    title: "Image 6",
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                }
            ],
            GalleryPresetStyle: "preset-2",
            GalleryItemHeight: {
                Desktop: 411,
                Tablet: 300,
                Mobile: 200
            },
            ImageOverlayStyle: "black_white",
            lightboxIconSwitcher: true,
            lightboxIcon: "plus",
            lightboxIconSize: {
                Desktop: 24,
                Tablet: 24,
                Mobile: 24
            },
            lightboxColorSwitcher: "normal",
            lightboxColor: "#000",
            lightboxHoverColor: "#000",
            lightboxBGColorSwitcher: "normal",
            lightboxBGColor: "#fff",
            lightboxBGHoverColor: "#fff",
            lightboxBorder: "solid",
            lightboxBorderColor: "#f89b2e",
            lightboxDesktopPadding: {
                top: 16,
                right: 16,
                bottom: 16,
                left: 16
            },
            lightboxDesktopBorderWidth: {
                top: 2,
                right: 2,
                bottom: 2,
                left: 2
            },
            lightboxBorderRadiusUnits: {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
            },
            lightboxDesktopBorderRadiusWidth: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            GalleryColumnNumber: {
                Desktop: 3,
                Tablet: 2,
                Mobile: 1
            },
            GalleryImageGap: {
                Desktop: 6,
                Tablet: 15,
                Mobile: 10
            },
            ImageFitCover: true,
            imageBorder: "none",
            imageDesktopBorderRadiusWidth: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }
        },
        "preset-4": {
            deviceType: "Desktop",
            GalleryType: "mesonry",
            GalleryItems: [
                {
                    id: "image-1",
                    title: "Image 1",
                    column: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-2",
                    title: "Image 2",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-3",
                    title: "Image 3",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-4",
                    title: "Image 4",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                }
            ],
            GalleryPresetStyle: "preset-3",
            ImageOverlayStyle: "overlay",
            ImageOverlayStyleType: "bottom",
            lightboxIconSwitcher: false,
            GalleryItemHeight: {
                Desktop: 410,
                Tablet: 410,
                Mobile: 410
            },
            GalleryColumnNumber: {
                Desktop: 4,
            },
            GalleryImageGap: {
                Desktop: 30,
                Tablet: 30,
                Mobile: 30
            },
            GalleryImageGapUnits: {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
            },
            imageDesktopBorderRadiusWidth: {
                top: 24,
                bottom: 24,
                left: 24,
                right: 24,
            },
        },
        "preset-5": {
            deviceType: "Desktop",
            GalleryType: "mesonry",
            GalleryItems: [
                {
                    id: "image-1",
                    title: "Image 1",
                    column: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-2",
                    title: "Image 2",
                    column: {
                        desktop: 1,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-3",
                    title: "Image 3",
                    desc: "",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 1,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-4",
                    title: "Image 4",
                    desc: "",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-5",
                    title: "Image 5",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-6",
                    title: "Image 6",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                }
            ],
            GalleryPresetStyle: "preset-4",
            lightboxIconSwitcher: false,
            GalleryItemHeight: {
                Desktop: 410,
                Tablet: 410,
                Mobile: 410
            },
            ImageOverlayStyle: "overlay",
            ImageOverlayStyleType: "top",
            ImageOverlayColor: "rgba(0 0 0 / 0.7)",
            GalleryColumnNumber: {
                Desktop: 4,
            },
            GalleryImageGap: {
                Desktop: 30,
                Tablet: 30,
                Mobile: 30
            },
            GalleryImageGapUnits: {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
            },
            imageDesktopBorderRadiusWidth: {
                top: 24,
                bottom: 24,
                left: 24,
                right: 24,
            },
        },
        "preset-6": {
            deviceType: "Desktop",
            GalleryType: "mesonry",
            GalleryItems: [
                {
                    id: "image-1",
                    title: "Image 1",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-2",
                    title: "Image 2",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-3",
                    title: "Image 3",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 2,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
                {
                    id: "image-4",
                    title: "Image 4",
                    column: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    row: {
                        desktop: 0,
                        tablet: 0,
                        mobile: 0
                    },
                    image: {
                        id: 0,
                        url: defaultImageUrl,
                        width: 0,
                        height: 0
                    }
                },
            ],
            GalleryPresetStyle: "preset-5",
            lightboxIconSwitcher: false,
            GalleryItemHeight: {
                Desktop: 410,
                Tablet: 410,
                Mobile: 410
            },
            GalleryItemHeightUnits: {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
            },
            ImageOverlayStyle: "overlay",
            ImageOverlayStyleType: "bottom",
            ImageOverlayColor: "rgba(0 0 0 / 0.7)",
            GalleryColumnNumber: {
                Desktop: 3,
                Tablet: 2,
                Mobile: 1
            },
            GalleryImageGap: {
                Desktop: 30,
                Tablet: 30,
                Mobile: 30
            },
            GalleryImageGapUnits: {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
            },
            imageDesktopBorderRadiusWidth: {
                top: 24,
                bottom: 24,
                left: 24,
                right: 24,
            },
        },
    };
        
    const imageGalleryPresets = [
        {
            value: 'preset-1',
            label: __('Preset 1', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14429)">
                        <rect x="69" y="94" width="66" height="88" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14429)">
                        <rect x="141" y="94" width="66" height="88" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14429)">
                        <rect x="213" y="94" width="66" height="88" fill="white"/>
                        </g>
                        <g filter="url(#filter3_i_16980_14429)">
                        <path d="M171.393 199.01C171.304 198.626 171.325 198.224 171.452 197.85C171.58 197.477 171.809 197.146 172.113 196.895C172.418 196.645 172.786 196.483 173.177 196.43C173.568 196.377 173.967 196.434 174.327 196.594L193.742 205.232C195.606 206.06 195.341 208.789 193.353 209.245L185.177 211.117C184.86 211.19 184.563 211.334 184.31 211.54C184.058 211.745 183.856 212.006 183.72 212.302L180.137 220.131C179.293 221.977 176.588 221.7 176.134 219.72L171.393 199.01Z" fill="#404655"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14429" x="68" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14429" x="140" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14429" x="212" y="94" width="68" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14429"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14429" result="shape"/>
                        </filter>
                        <filter id="filter3_i_16980_14429" x="171.339" y="196.41" width="23.6631" height="25.2443" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="0.283333"/>
                        <feGaussianBlur stdDeviation="0.708333"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_16980_14429"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-2',
            label: __('Preset 2', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14752)">
                        <rect x="93" y="57" width="50" height="78" rx="8" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14752)">
                        <rect x="93" y="141" width="50" height="78" rx="8" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14752)">
                        <rect x="149" y="57" width="50" height="78" rx="8" fill="white"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14752)">
                        <rect x="149" y="141" width="50" height="78" rx="8" fill="white"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14752)">
                        <rect x="205" y="57" width="50" height="78" rx="8" fill="white"/>
                        </g>
                        <g filter="url(#filter5_d_16980_14752)">
                        <rect x="205" y="141" width="50" height="78" rx="8" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14752" x="92" y="57" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14752" x="92" y="141" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14752" x="148" y="57" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14752" x="148" y="141" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14752" x="204" y="57" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                        </filter>
                        <filter id="filter5_d_16980_14752" x="204" y="141" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14752"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14752" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-3',
            label: __('Preset 3', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14763)">
                        <rect x="96" y="59" width="50" height="78" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14763)">
                        <rect x="149" y="59" width="50" height="78" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14763)">
                        <rect x="202" y="59" width="50" height="78" fill="white"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14763)">
                        <rect x="96" y="140" width="50" height="78" fill="white"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14763)">
                        <rect x="149" y="140" width="50" height="78" fill="white"/>
                        </g>
                        <g filter="url(#filter5_d_16980_14763)">
                        <rect x="202" y="140" width="50" height="78" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14763" x="95" y="59" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14763" x="148" y="59" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14763" x="201" y="59" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14763" x="95" y="140" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14763" x="148" y="140" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                        </filter>
                        <filter id="filter5_d_16980_14763" x="201" y="140" width="52" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14763"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14763" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-4',
            label: __('Preset 4', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14771)">
                        <rect x="96" y="59" width="80" height="159" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14771)">
                        <rect x="182" y="59" width="32" height="159" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14771)">
                        <rect x="220" y="59" width="32" height="76.5" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14771)">
                        <rect x="220" y="141.5" width="32" height="76.5" rx="6" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14771" x="95" y="59" width="82" height="162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14771" x="181" y="59" width="34" height="162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14771" x="219" y="59" width="34" height="79.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14771" x="219" y="141.5" width="34" height="79.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14771"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14771" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-5',
            label: __('Preset 5', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-5']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14778)">
                        <rect x="96" y="57" width="80" height="78" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14778)">
                        <rect x="96" y="142" width="37" height="76" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14778)">
                        <rect x="139" y="142" width="37" height="76" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14778)">
                        <rect x="182" y="57" width="32" height="162" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14778)">
                        <rect x="220" y="57" width="32" height="78" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter5_d_16980_14778)">
                        <rect x="220" y="141" width="32" height="78" rx="6" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14778" x="95" y="57" width="82" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14778" x="95" y="142" width="39" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14778" x="138" y="142" width="39" height="79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14778" x="181" y="57" width="34" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14778" x="219" y="57" width="34" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                        </filter>
                        <filter id="filter5_d_16980_14778" x="219" y="141" width="34" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14778"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14778" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-6',
            label: __('Preset 6', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-6']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14789)">
                        <rect x="96" y="57" width="48" height="162" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14789)">
                        <rect x="150" y="57" width="48" height="78" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14789)">
                        <rect x="150" y="141" width="48" height="78" rx="6" fill="white"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14789)">
                        <rect x="204" y="57" width="48" height="162" rx="6" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14789" x="95" y="57" width="50" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14789" x="149" y="57" width="50" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14789" x="149" y="141" width="50" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14789" x="203" y="57" width="50" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14789"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14789" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
    ];

    
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

    const ButtonMarginDesktopWidth = `${ButtonDesktopMargin?.top}${ButtonMarginUnits?.Desktop} ${ButtonDesktopMargin?.right}${ButtonMarginUnits?.Desktop} ${ButtonDesktopMargin?.bottom}${ButtonMarginUnits?.Desktop} ${ButtonDesktopMargin?.left}${ButtonMarginUnits?.Desktop}`;
    const ButtonMarginTabletWidth = `${ButtonTabMargin.top}${ButtonMarginUnits.Tablet} ${ButtonTabMargin?.right}${ButtonMarginUnits?.Tablet} ${ButtonTabMargin?.bottom}${ButtonMarginUnits?.Tablet} ${ButtonTabMargin?.left}${ButtonMarginUnits?.Tablet}`;
    const ButtonMarginMobileWidth = `${ButtonMobileMargin.top}${ButtonMarginUnits.Mobile} ${ButtonMobileMargin?.right}${ButtonMarginUnits?.Mobile} ${ButtonMobileMargin?.bottom}${ButtonMarginUnits?.Mobile} ${ButtonMobileMargin?.left}${ButtonMarginUnits?.Mobile}`;

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

    const ButtonPaddingDesktopWidth = `${ButtonDesktopPadding?.top}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.right}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.bottom}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.left}${ButtonPaddingUnits?.Desktop}`;
    const ButtonPaddingTabletWidth = `${ButtonTabPadding?.top}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.right}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.bottom}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.left}${ButtonPaddingUnits?.Tablet}`;
    const ButtonPaddingMobileWidth = `${ButtonMobilePadding?.top}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.right}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.bottom}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.left}${ButtonPaddingUnits?.Mobile}`;

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

    const ButtonBorderDesktopWidth = `${ButtonDesktopBorderWidth?.top}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.right}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.bottom}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.left}${ButtonBorderUnits?.Desktop}`;
    const ButtonBorderTabletWidth = `${ButtonTabBorderWidth?.top}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.right}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.bottom}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.left}${ButtonBorderUnits?.Tablet}`;
    const ButtonBorderMobileWidth = `${ButtonMobileBorderWidth?.top}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.right}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.bottom}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.left}${ButtonBorderUnits?.Mobile}`;


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

    const ButtonBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Desktop}`;
    const ButtonBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Tablet}`;
    const ButtonBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Mobile}`;



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

    const GalleryMarginDesktopWidth = `${GalleryDesktopMargin?.top}${GalleryMarginUnits?.Desktop} ${GalleryDesktopMargin?.right}${GalleryMarginUnits?.Desktop} ${GalleryDesktopMargin?.bottom}${GalleryMarginUnits?.Desktop} ${GalleryDesktopMargin?.left}${GalleryMarginUnits?.Desktop}`;
    const GalleryMarginTabletWidth = `${GalleryTabMargin?.top}${GalleryMarginUnits?.Tablet} ${GalleryTabMargin?.right}${GalleryMarginUnits?.Tablet} ${GalleryTabMargin?.bottom}${GalleryMarginUnits?.Tablet} ${GalleryTabMargin?.left}${GalleryMarginUnits?.Tablet}`;
    const GalleryMarginMobileWidth = `${GalleryMobileMargin?.top}${GalleryMarginUnits?.Mobile} ${GalleryMobileMargin?.right}${GalleryMarginUnits?.Mobile} ${GalleryMobileMargin?.bottom}${GalleryMarginUnits?.Mobile} ${GalleryMobileMargin?.left}${GalleryMarginUnits?.Mobile}`;


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

    const GalleryPaddingDesktopWidth = `${GalleryDesktopPadding?.top}${GalleryPaddingUnits?.Desktop} ${GalleryDesktopPadding?.right}${GalleryPaddingUnits?.Desktop} ${GalleryDesktopPadding?.bottom}${GalleryPaddingUnits?.Desktop} ${GalleryDesktopPadding?.left}${GalleryPaddingUnits?.Desktop}`;
    const GalleryPaddingTabletWidth = `${GalleryTabPadding?.top}${GalleryPaddingUnits?.Tablet} ${GalleryTabPadding?.right}${GalleryPaddingUnits?.Tablet} ${GalleryTabPadding?.bottom}${GalleryPaddingUnits?.Tablet} ${GalleryTabPadding?.left}${GalleryPaddingUnits?.Tablet}`;
    const GalleryPaddingMobileWidth = `${GalleryMobilePadding?.top}${GalleryPaddingUnits?.Mobile} ${GalleryMobilePadding?.right}${GalleryPaddingUnits?.Mobile} ${GalleryMobilePadding?.bottom}${GalleryPaddingUnits?.Mobile} ${GalleryMobilePadding?.left}${GalleryPaddingUnits?.Mobile}`;


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

    const GalleryBorderDesktopWidth = `${GalleryDesktopBorderWidth?.top}${GalleryBorderUnits?.Desktop} ${GalleryDesktopBorderWidth?.right}${GalleryBorderUnits?.Desktop} ${GalleryDesktopBorderWidth?.bottom}${GalleryBorderUnits?.Desktop} ${GalleryDesktopBorderWidth?.left}${GalleryBorderUnits?.Desktop}`;
    const GalleryBorderTabletWidth = `${GalleryTabBorderWidth?.top}${GalleryBorderUnits?.Tablet} ${GalleryTabBorderWidth?.right}${GalleryBorderUnits?.Tablet} ${GalleryTabBorderWidth?.bottom}${GalleryBorderUnits?.Tablet} ${GalleryTabBorderWidth?.left}${GalleryBorderUnits?.Tablet}`;
    const GalleryBorderMobileWidth = `${GalleryMobileBorderWidth?.top}${GalleryBorderUnits?.Mobile} ${GalleryMobileBorderWidth?.right}${GalleryBorderUnits?.Mobile} ${GalleryMobileBorderWidth?.bottom}${GalleryBorderUnits?.Mobile} ${GalleryMobileBorderWidth?.left}${GalleryBorderUnits?.Mobile}`;


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

    const GalleryBorderRadiusDesktopWidth = `${GalleryBorderRadiusDesktop?.top}${GalleryBorderRadiusUnits?.Desktop} ${GalleryBorderRadiusDesktop?.right}${GalleryBorderRadiusUnits?.Desktop} ${GalleryBorderRadiusDesktop?.bottom}${GalleryBorderRadiusUnits?.Desktop} ${GalleryBorderRadiusDesktop?.left}${GalleryBorderRadiusUnits?.Desktop}`;
    const GalleryBorderRadiusTabletWidth = `${GalleryBorderRadiusTablet?.top}${GalleryBorderRadiusUnits?.Tablet} ${GalleryBorderRadiusTablet?.right}${GalleryBorderRadiusUnits?.Tablet} ${GalleryBorderRadiusTablet?.bottom}${GalleryBorderRadiusUnits?.Tablet} ${GalleryBorderRadiusTablet?.left}${GalleryBorderRadiusUnits?.Tablet}`;
    const GalleryBorderRadiusMobileWidth = `${GalleryBorderRadiusMobile?.top}${GalleryBorderRadiusUnits?.Mobile} ${GalleryBorderRadiusMobile?.right}${GalleryBorderRadiusUnits?.Mobile} ${GalleryBorderRadiusMobile?.bottom}${GalleryBorderRadiusUnits?.Mobile} ${GalleryBorderRadiusMobile?.left}${GalleryBorderRadiusUnits?.Mobile}`;


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
	
	const imageDesktopBorder = `${imageDesktopBorderWidth?.top}${imageBorderUnits?.Desktop} ${imageDesktopBorderWidth?.right}${imageBorderUnits?.Desktop} ${imageDesktopBorderWidth?.bottom}${imageBorderUnits?.Desktop} ${imageDesktopBorderWidth?.left}${imageBorderUnits?.Desktop}`;
	const imageTabBorder = `${imageTabBorderWidth?.top}${imageBorderUnits?.Tablet} ${imageTabBorderWidth?.right}${imageBorderUnits?.Tablet} ${imageTabBorderWidth?.bottom}${imageBorderUnits?.Tablet} ${imageTabBorderWidth?.left}${imageBorderUnits?.Tablet}`;
	const imageMobileBorder = `${imageMobileBorderWidth?.top}${imageBorderUnits?.Mobile} ${imageMobileBorderWidth?.right}${imageBorderUnits?.Mobile} ${imageMobileBorderWidth?.bottom}${imageBorderUnits?.Mobile} ${imageMobileBorderWidth?.left}${imageBorderUnits?.Mobile}`;
	
	
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
	
	const imageDesktopBorderRadius = `${imageDesktopBorderRadiusWidth?.top}${imageBorderRadiusUnits?.Desktop} ${imageDesktopBorderRadiusWidth?.right}${imageBorderRadiusUnits?.Desktop} ${imageDesktopBorderRadiusWidth?.bottom}${imageBorderRadiusUnits?.Desktop} ${imageDesktopBorderRadiusWidth?.left}${imageBorderRadiusUnits?.Desktop}`;
	const imageTabBorderRadius = `${imageTabBorderRadiusWidth?.top}${imageBorderRadiusUnits?.Tablet} ${imageTabBorderRadiusWidth?.right}${imageBorderRadiusUnits?.Tablet} ${imageTabBorderRadiusWidth?.bottom}${imageBorderRadiusUnits?.Tablet} ${imageTabBorderRadiusWidth?.left}${imageBorderRadiusUnits?.Tablet}`;
	const imageMobileBorderRadius = `${imageMobileBorderRadiusWidth?.top}${imageBorderRadiusUnits?.Mobile} ${imageMobileBorderRadiusWidth?.right}${imageBorderRadiusUnits?.Mobile} ${imageMobileBorderRadiusWidth?.bottom}${imageBorderRadiusUnits?.Mobile} ${imageMobileBorderRadiusWidth?.left}${imageBorderRadiusUnits?.Mobile}`;
	

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

    const lightboxDesktopPaddingWidth = `${lightboxDesktopPadding?.top}${lightboxPaddingUnits?.Desktop} ${lightboxDesktopPadding?.right}${lightboxPaddingUnits?.Desktop} ${lightboxDesktopPadding?.bottom}${lightboxPaddingUnits?.Desktop} ${lightboxDesktopPadding?.left}${lightboxPaddingUnits?.Desktop}`;
    const lightboxTabPaddingWidth = `${lightboxTabPadding?.top}${lightboxPaddingUnits?.Tablet} ${lightboxTabPadding?.right}${lightboxPaddingUnits?.Tablet} ${lightboxTabPadding?.bottom}${lightboxPaddingUnits?.Tablet} ${lightboxTabPadding?.left}${lightboxPaddingUnits?.Tablet}`;
    const lightboxMobilePaddingWidth = `${lightboxMobilePadding?.top}${lightboxPaddingUnits?.Mobile} ${lightboxMobilePadding?.right}${lightboxPaddingUnits?.Mobile} ${lightboxMobilePadding?.bottom}${lightboxPaddingUnits?.Mobile} ${lightboxMobilePadding?.left}${lightboxPaddingUnits?.Mobile}`;


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

    const lightboxDesktopBorder = `${lightboxDesktopBorderWidth?.top}${lightboxBorderUnits?.Desktop} ${lightboxDesktopBorderWidth?.right}${lightboxBorderUnits?.Desktop} ${lightboxDesktopBorderWidth?.bottom}${lightboxBorderUnits?.Desktop} ${lightboxDesktopBorderWidth?.left}${lightboxBorderUnits?.Desktop}`;
    const lightboxTabBorder = `${lightboxTabBorderWidth?.top}${lightboxBorderUnits?.Tablet} ${lightboxTabBorderWidth?.right}${lightboxBorderUnits?.Tablet} ${lightboxTabBorderWidth?.bottom}${lightboxBorderUnits?.Tablet} ${lightboxTabBorderWidth?.left}${lightboxBorderUnits?.Tablet}`;
    const lightboxMobileBorder = `${lightboxMobileBorderWidth?.top}${lightboxBorderUnits?.Mobile} ${lightboxMobileBorderWidth?.right}${lightboxBorderUnits?.Mobile} ${lightboxMobileBorderWidth?.bottom}${lightboxBorderUnits?.Mobile} ${lightboxMobileBorderWidth?.left}${lightboxBorderUnits?.Mobile}`;


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

    const lightboxDesktopBorderRadius = `${lightboxDesktopBorderRadiusWidth?.top}${lightboxBorderRadiusUnits?.Desktop} ${lightboxDesktopBorderRadiusWidth?.right}${lightboxBorderRadiusUnits?.Desktop} ${lightboxDesktopBorderRadiusWidth?.bottom}${lightboxBorderRadiusUnits?.Desktop} ${lightboxDesktopBorderRadiusWidth?.left}${lightboxBorderRadiusUnits?.Desktop}`;
    const lightboxTabBorderRadius = `${lightboxTabBorderRadiusWidth?.top}${lightboxBorderRadiusUnits?.Tablet} ${lightboxTabBorderRadiusWidth?.right}${lightboxBorderRadiusUnits?.Tablet} ${lightboxTabBorderRadiusWidth?.bottom}${lightboxBorderRadiusUnits?.Tablet} ${lightboxTabBorderRadiusWidth?.left}${lightboxBorderRadiusUnits?.Tablet}`;
    const lightboxMobileBorderRadius = `${lightboxMobileBorderRadiusWidth?.top}${lightboxBorderRadiusUnits?.Mobile} ${lightboxMobileBorderRadiusWidth?.right}${lightboxBorderRadiusUnits?.Mobile} ${lightboxMobileBorderRadiusWidth?.bottom}${lightboxBorderRadiusUnits?.Mobile} ${lightboxMobileBorderRadiusWidth?.left}${lightboxBorderRadiusUnits?.Mobile}`;


    const lightboxIconHandler = (IconName) => {
		setAttributes({lightboxIcon: IconName})
	}

    /* Gallery Style Css */
    const fbGalleryStyle = useMemo(() => `
        .fb-gallery-main-wrapper.${blockID} {
            ${GalleryPositionType === 'default' ? `position: relative;` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' ? `width: 100%;` : ''}
            ${GalleryPositionType !== 'default' ? `position: ${GalleryPositionType};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'left' && GalleryHZLeftOffset?.Desktop ? `left: ${GalleryHZLeftOffset?.Desktop}${GalleryHZLeftOffsetUnits?.Desktop};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'right' && GalleryHZRightOffset?.Desktop ? `right: ${GalleryHZRightOffset?.Desktop}${GalleryHZRightOffsetUnits?.Desktop};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'top' && GalleryVRTopOffset?.Desktop ? `top: ${GalleryVRTopOffset?.Desktop}${GalleryVRTopOffsetUnits?.Desktop};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'bottom' && GalleryVRBottomOffset?.Desktop ? `bottom: ${GalleryVRBottomOffset?.Desktop}${GalleryVRBottomOffsetUnits?.Desktop};` : ''}
            ${GalleryZIndex?.Desktop ? `z-index: ${GalleryZIndex?.Desktop};` : ''}
            ${GalleryOverflow !== 'default' ? `overflow: ${GalleryOverflow};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper {
            position: relative;
            overflow: hidden;
            ${
                GalleryBgType === "gradient"
                  ? `background: ${
                      GalleryBgCustomGradientSwitcher && GalleryBgCustomGradientInputValue
                        ? GalleryBgCustomGradientInputValue
                        : GalleryBgGradientColor
                    };`
                  : GalleryBgImageUrl !== undefined && GalleryBgImageUrl !== null && GalleryBgImageUrl !== ""
                  ? `
                    ${GalleryBgImageUrl !== undefined ? `background-image: url(${GalleryBgImageUrl});` : ''}
                    ${GalleryBgImagePosition !== undefined ? `background-position: ${GalleryBgImagePosition};` : ''}
                    ${GalleryBgImageAttachment !== undefined ? `background-attachment: ${GalleryBgImageAttachment};` : ''}
                    ${GalleryBgImageRepeat !== undefined ? `background-repeat: ${GalleryBgImageRepeat};` : ''}
                    ${GalleryBgImageSize !== undefined ? `background-size: ${GalleryBgImageSize};` : ''}
                  `
                  : GalleryBgClassicColor ? `background: ${GalleryBgClassicColor};` : ''
            }
            ${GalleryGlobalBoxShadowCssValue ? `box-shadow: ${GalleryGlobalBoxShadowCssValue};` : ''}
            ${GalleryPaddingDesktopWidth && GalleryDesktopPadding?.top ? `padding: ${GalleryPaddingDesktopWidth};` : ''}
            ${GalleryMarginDesktopWidth && GalleryDesktopMargin?.top ? `margin: ${GalleryMarginDesktopWidth};` : ''}
            ${GalleryBorder ? `border-style: ${GalleryBorder};` : ''}
            ${GalleryBorderDesktopWidth && GalleryDesktopBorderWidth?.top ? `border-width: ${GalleryBorderDesktopWidth};` : ''}
            ${GalleryBorderColor ? `border-color: ${GalleryBorderColor};` : ''}
            ${GalleryBorderRadiusDesktopWidth && GalleryBorderRadiusDesktop?.top ? `border-radius: ${GalleryBorderRadiusDesktopWidth};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-gallery-main-wrapper.${blockID}:hover {
            ${
                GalleryBgHoverType === "gradient"
                  ? `background: ${
                      GalleryBgHoverCustomGradientSwitcher && GalleryBgHoverCustomGradientInputValue
                        ? GalleryBgHoverCustomGradientInputValue
                        : GalleryBgHoverGradientColor
                    };`
                  : GalleryBgHoverImageUrl && GalleryBgHoverImageUrl !== null && GalleryBgHoverImageUrl !== ""
                  ? `
                    ${GalleryBgHoverImageUrl ? `background-image: url(${GalleryBgHoverImageUrl});` : ''}
                    ${GalleryBgHoverImagePosition ? `background-position: ${GalleryBgHoverImagePosition};` : ''}
                    ${GalleryBgHoverImageAttachment ? `background-attachment: ${GalleryBgHoverImageAttachment};` : ''}
                    ${GalleryBgHoverImageRepeat ? `background-repeat: ${GalleryBgHoverImageRepeat};` : ''}
                    ${GalleryBgHoverImageSize ? `background-size: ${GalleryBgHoverImageSize};` : ''}
                  `
                  : GalleryBgHoverClassicColor ? `background: ${GalleryBgHoverClassicColor};` : ''
            }
            ${GalleryBorderHoverColor ? `border-color: ${GalleryBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
            display: grid;
            ${GalleryColumnNumber?.Desktop ? `grid-template-columns: repeat(${GalleryColumnNumber.Desktop}, 1fr);` : ''}
            ${GalleryImageGap?.Desktop && GalleryImageGapUnits?.Desktop ? `grid-gap: ${GalleryImageGap?.Desktop}${GalleryImageGapUnits?.Desktop};` : ''}
            ${GalleryItemHeight?.Desktop && GalleryItemHeightUnits?.Desktop ? `grid-auto-rows: ${GalleryItemHeight?.Desktop}${GalleryItemHeightUnits?.Desktop};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            outline: none;
            ${imageBorder ? `border-style: ${imageBorder};` : ''}
            ${imageDesktopBorder && imageDesktopBorderWidth?.top ? `border-width: ${imageDesktopBorder};` : ''}
            ${imageBorderColor ? `border-color: ${imageBorderColor};` : ''}
            ${imageDesktopBorderRadius && imageDesktopBorderRadiusWidth?.top? `border-radius: ${imageDesktopBorderRadius};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
            position: absolute;
            top: 0;
            outline: none;
            ${ImageAlignment === 'left' ? 'left: 0;' : ''}
            ${ImageAlignment === 'right' ? 'right: 0; left: unset;' : ''}
            ${ImageAlignment === 'center' && ImageOverlayStyleType !== 'zoominout' ? 'left: 50%; transform: translateX(-50%);' : ''}
            ${ImageWidth?.Desktop ? `width: ${ImageWidth?.Desktop}${ImageWidthUnits?.Desktop};` : ''}
            ${ImageHeight?.Desktop ? `height: ${ImageHeight?.Desktop}${ImageHeightUnits?.Desktop};` : ''}
            ${ImageFitCover === true ? 'object-fit: cover;' : ''}
            ${ImageOverlayStyle === 'black_white' ? 'filter: grayscale(100%);' : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
            ${ImageOverlayStyle && ImageOverlayStyle === 'black_white' ? 'filter: grayscale(0);' : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {
            ${GalleryButtonSwitcher === true ? 'display: flex;' : ''}
            ${GalleryButtonAlignment ? `justify-content: ${GalleryButtonAlignment};` : ''}
        }

        ${GalleryButtonSwitcher === true ? `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                ${ButtonBorder ? `border-style: ${ButtonBorder};` : ''}
                ${ButtonBorderColorSwitcher ? `border-color: ${ButtonBorderColor};` : ''}
                ${ButtonBorderDesktopWidth && ButtonDesktopBorderWidth?.top ? `border-width: ${ButtonBorderDesktopWidth};` : ''}
                ${ButtonBorderRadiusDesktopWidth && ButtonDesktopBorderRadiusWidth?.top ? `border-radius: ${ButtonBorderRadiusDesktopWidth};` : ''}
                ${ButtonMarginDesktopWidth && ButtonDesktopMargin?.top ? `margin: ${ButtonMarginDesktopWidth};` : ''}
                ${ButtonPaddingDesktopWidth && ButtonDesktopPadding?.top ? `padding: ${ButtonPaddingDesktopWidth};` : ''}
    
                ${GalleryButtonGlobalTypoSwitcher?.fontFamily === true && GalleryButtonGlobalTypographyData?.fontFamily ? `font-family: ${GalleryButtonGlobalTypographyData?.fontFamily};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontSize === true && GalleryButtonGlobalTypographyData?.fontSize ? `font-size: ${GalleryButtonGlobalTypographyData?.fontSize};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontWeight === true && GalleryButtonGlobalTypographyData?.fontWeight ? `font-weight: ${GalleryButtonGlobalTypographyData?.fontWeight};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontStyle === true && GalleryButtonGlobalTypographyData?.fontStyle ? `font-style: ${GalleryButtonGlobalTypographyData?.fontStyle};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textTransform === true && GalleryButtonGlobalTypographyData?.textTransform ? `text-transform: ${GalleryButtonGlobalTypographyData?.textTransform};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textDecoration === true && GalleryButtonGlobalTypographyData?.textDecoration ? `text-decoration: ${GalleryButtonGlobalTypographyData?.textDecoration};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === true && GalleryButtonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${GalleryButtonGlobalTypographyData?.letterSpacing};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.lineHeight === true && GalleryButtonGlobalTypographyData?.lineHeight ? `line-height: ${GalleryButtonGlobalTypographyData?.lineHeight};` : ''}
    
                ${GalleryButtonGlobalTypoSwitcher?.fontFamily === false && GalleryButtonFontFamily && GalleryButtonFontFamily !== 'Default' ? `font-family: ${GalleryButtonFontFamily};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontSize === false && GalleryButtonFontSize?.Desktop ? `font-size: ${GalleryButtonFontSize?.Desktop}${GalleryButtonFontSizeUnits?.Desktop};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontWeight === false && GalleryButtonFontWeight ? `font-weight: ${GalleryButtonFontWeight};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontStyle === false && GalleryButtonFontStyle ? `font-style: ${GalleryButtonFontStyle};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textTransform === false && GalleryButtonTextTransform ? `text-transform: ${GalleryButtonTextTransform};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textDecoration === false && GalleryButtonTextDecoration ? `text-decoration: ${GalleryButtonTextDecoration};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === false && GalleryButtonLetterSpacing?.Desktop ? `letter-spacing: ${GalleryButtonLetterSpacing?.Desktop}${GalleryButtonLetterSpacingUnits?.Desktop};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.lineHeight === false && GalleryButtonLineHeight?.Desktop ? `line-height: ${GalleryButtonLineHeight?.Desktop}${GalleryButtonLineHeightUnits?.Desktop};` : ''}
                ${ButtonBorderColorSwitcher === 'normal' && GalleryButtonColor ? `color: ${GalleryButtonColor};` : ''}
                ${ButtonBorderColorSwitcher === 'normal' && GalleryButtonBGColor ? `background-color: ${GalleryButtonBGColor};` : ''}
                transition: all 0.3s ease-in-out;
                }

                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {
                    ${ButtonBorderColorSwitcher === 'hover' && GalleryButtonHoverColor ? 
                        `color: ${GalleryButtonHoverColor};` : ''}
                    ${ButtonBorderColorSwitcher === 'hover' && GalleryButtonBGHoverColor ? 
                        `background-color: ${GalleryButtonBGHoverColor};` : ''}
                    transition: all 0.3s ease-in-out;
                }
                
                @media only screen and (max-width: 1024px) {
                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${ButtonBorderRadiusTabletWidth && ButtonTabBorderRadiusWidth?.top ? `border-radius: ${ButtonBorderRadiusTabletWidth};` : ''}
                        ${ButtonMarginTabletWidth && ButtonTabMargin?.top ? `margin: ${ButtonMarginTabletWidth};` : ''}
                        ${ButtonPaddingTabletWidth && ButtonTabPadding?.top ? `padding: ${ButtonPaddingTabletWidth};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.fontSize === false && GalleryButtonFontSize?.Tablet ? `font-size: ${GalleryButtonFontSize?.Tablet}${GalleryButtonFontSizeUnits?.Tablet};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === false && GalleryButtonLetterSpacing?.Tablet ? `letter-spacing: ${GalleryButtonLetterSpacing?.Tablet}${GalleryButtonLetterSpacingUnits?.Tablet};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.lineHeight === false && GalleryButtonLineHeight?.Tablet ? `line-height: ${GalleryButtonLineHeight?.Tablet}${GalleryButtonLineHeightUnits?.Tablet};` : ''}
                    }
                }
                @media only screen and (max-width: 767px) {
                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${ButtonBorderRadiusMobileWidth && ButtonMobileBorderRadiusWidth?.top ? `border-radius: ${ButtonBorderRadiusMobileWidth};` : ''}
                        ${ButtonMarginMobileWidth && ButtonMobileMargin?.top ? `margin: ${ButtonMarginMobileWidth};` : ''}
                        ${ButtonPaddingMobileWidth && ButtonMobilePadding?.top ? `padding: ${ButtonPaddingMobileWidth};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.fontSize === false && GalleryButtonFontSize?.Mobile ? `font-size: ${GalleryButtonFontSize?.Mobile}${GalleryButtonFontSizeUnits?.Mobile};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === false && GalleryButtonLetterSpacing?.Mobile ? `letter-spacing: ${GalleryButtonLetterSpacing?.Mobile}${GalleryButtonLetterSpacingUnits?.Mobile};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.lineHeight === false && GalleryButtonLineHeight?.Mobile ? `line-height: ${GalleryButtonLineHeight?.Mobile}${GalleryButtonLineHeightUnits?.Mobile};` : ''}
                    }
                }
        ` : ''}


        @media only screen and (max-width: 1024px) {
            .fb-gallery-main-wrapper.${blockID} {
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'left' && GalleryHZLeftOffset?.Tablet ? `left: ${GalleryHZLeftOffset?.Tablet}${GalleryHZLeftOffsetUnits?.Tablet};` : ''}
				${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'right' && GalleryHZRightOffset?.Tablet ? `right: ${GalleryHZRightOffset?.Tablet}${GalleryHZRightOffsetUnits?.Tablet};` : ''}
				${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'top' && GalleryVRTopOffset?.Tablet ? `top: ${GalleryVRTopOffset?.Tablet}${GalleryVRTopOffsetUnits?.Tablet};` : ''}
				${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'bottom' && GalleryVRBottomOffset?.Tablet ? `bottom: ${GalleryVRBottomOffset?.Tablet}${GalleryVRBottomOffsetUnits?.Tablet};` : ''}
                ${GalleryZIndex?.Tablet ? `z-index: ${GalleryZIndex?.Tablet};` : ''}
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper {
                ${GalleryPaddingTabletWidth && GalleryTabPadding?.top ? `padding: ${GalleryPaddingTabletWidth};` : ''}
                ${GalleryMarginTabletWidth && GalleryTabMargin?.top ? `margin: ${GalleryMarginTabletWidth};` : ''}
                ${GalleryBorderRadiusTabletWidth && GalleryBorderRadiusTablet?.top ? `border-radius: ${GalleryBorderRadiusTabletWidth};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                display: grid;
                ${GalleryColumnNumber?.Tablet ? `grid-template-columns: repeat(${GalleryColumnNumber?.Tablet}, 1fr);` : ''}
                ${GalleryImageGap?.Tablet && GalleryImageGapUnits?.Tablet ? `grid-gap: ${GalleryImageGap?.Tablet}${GalleryImageGapUnits?.Tablet};` : ''}
                ${GalleryItemHeight?.Tablet && GalleryItemHeightUnits?.Tablet ? `grid-auto-rows: ${GalleryItemHeight?.Tablet}${GalleryItemHeightUnits?.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageWidth?.Tablet ? `width: ${ImageWidth?.Tablet}${ImageWidthUnits?.Tablet};` : ''}
                ${ImageHeight?.Tablet ? `height: ${ImageHeight?.Tablet}${ImageHeightUnits?.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
                ${imageTabBorder && imageTabBorderWidth?.top ? `border-width: ${imageTabBorder};` : ''}
                ${imageTabBorderRadius && imageTabBorderRadiusWidth?.top ? `border-radius: ${imageTabBorderRadius};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-gallery-main-wrapper.${blockID} {
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'left' && GalleryHZLeftOffset?.Mobile ? `left: ${GalleryHZLeftOffset?.Mobile}${GalleryHZLeftOffsetUnits?.Mobile};` : ''}
				${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'right' && GalleryHZRightOffset?.Mobile ? `right: ${GalleryHZRightOffset?.Mobile}${GalleryHZRightOffsetUnits?.Mobile};` : ''}
				${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'top' && GalleryVRTopOffset?.Mobile ? `top: ${GalleryVRTopOffset?.Mobile}${GalleryVRTopOffsetUnits?.Mobile};` : ''}
				${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'bottom' && GalleryVRBottomOffset?.Mobile ? `bottom: ${GalleryVRBottomOffset?.Mobile}${GalleryVRBottomOffsetUnits?.Mobile};` : ''}
                ${GalleryZIndex?.Mobile ? `z-index: ${GalleryZIndex?.Mobile};` : ''}
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper {
                ${GalleryPaddingMobileWidth && GalleryMobilePadding?.top ? `padding: ${GalleryPaddingMobileWidth};` : ''}
                ${GalleryMarginMobileWidth && GalleryMobileMargin?.top ? `margin: ${GalleryMarginMobileWidth};` : ''}
                ${GalleryBorderRadiusMobileWidth && GalleryBorderRadiusMobile?.top ? `border-radius: ${GalleryBorderRadiusMobileWidth};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                display: grid;
                ${GalleryColumnNumber?.Mobile ? `grid-template-columns: repeat(${GalleryColumnNumber?.Mobile}, 1fr);` : ''}
                ${GalleryImageGap?.Mobile && GalleryImageGapUnits?.Mobile ? `grid-gap: ${GalleryImageGap?.Mobile}${GalleryImageGapUnits?.Mobile};` : ''}
                ${GalleryItemHeight?.Mobile && GalleryItemHeightUnits?.Mobile ? `grid-auto-rows: ${GalleryItemHeight?.Mobile}${GalleryItemHeightUnits?.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageWidth?.Mobile ? `width: ${ImageWidth?.Mobile}${ImageWidthUnits?.Mobile};` : ''}
                ${ImageHeight?.Mobile ? `height: ${ImageHeight?.Mobile}${ImageHeightUnits?.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
                ${imageMobileBorder && imageMobileBorderWidth?.top ? `border-width: ${imageMobileBorder};` : ''}
                ${imageMobileBorderRadius && imageMobileBorderRadiusWidth?.top ? `border-radius: ${imageMobileBorderRadius};` : ''}
            }
        }

        ${lightboxIconSwitcher === true ? `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                ${lightboxDesktopPaddingWidth && lightboxDesktopPadding?.top ? `padding: ${lightboxDesktopPaddingWidth};` : ''}
                ${lightboxBGColor ? `background-color: ${lightboxBGColor};` : ''}
                ${lightboxBorder ? `border-style: ${lightboxBorder};` : ''}
                ${lightboxDesktopBorder && lightboxDesktopBorderWidth?.top ? `border-width: ${lightboxDesktopBorder};` : ''}
                ${lightboxBorderColor ? `border-color: ${lightboxBorderColor};` : ''}
                ${lightboxDesktopBorderRadius && lightboxDesktopBorderRadiusWidth?.top ? `border-radius: ${lightboxDesktopBorderRadius};` : ''}
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-lightbox-icon-wrapper {
                visibility: visible;
                opacity: 1;
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper:hover {
                ${lightboxBGHoverColor ? `background-color: ${lightboxBGHoverColor};` : ''}
                ${lightboxBorderHoverColor ? `border-color: ${lightboxBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                ${lightboxColor ? `fill: ${lightboxColor};` : ''}
                ${lightboxIconSize?.Desktop ? `width: ${lightboxIconSize?.Desktop}${lightboxIconSizeUnits?.Desktop};` : ''}
                ${lightboxIconSize?.Desktop ? `height: ${lightboxIconSize?.Desktop}${lightboxIconSizeUnits?.Desktop};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper:hover .fb-lightbox-icon {
                ${lightboxHoverColor ? `fill: ${lightboxHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon svg {
                width: 100%;
                height: 100%;
            }
            
            @media only screen and (max-width: 1024px) {
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                    ${lightboxTabPaddingWidth && lightboxTabPadding?.top ? `padding: ${lightboxTabPaddingWidth};` : ''}
                    ${lightboxTabBorder && lightboxTabBorderWidth?.top ? `border-width: ${lightboxTabBorder};` : ''}
                    ${lightboxTabBorderRadius && lightboxTabBorderRadiusWidth?.top ? `border-radius: ${lightboxTabBorderRadius};` : ''}
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                    ${lightboxIconSize?.Tablet ? `width: ${lightboxIconSize?.Tablet}${lightboxIconSizeUnits?.Tablet};` : ''}
                    ${lightboxIconSize?.Tablet ? `height: ${lightboxIconSize?.Tablet}${lightboxIconSizeUnits?.Tablet};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                    ${lightboxMobilePaddingWidth && lightboxMobilePadding?.top ? `padding: ${lightboxMobilePaddingWidth};` : ''}
                    ${lightboxMobileBorder && lightboxMobileBorderWidth?.top ? `border-width: ${lightboxMobileBorder};` : ''}
                    ${lightboxMobileBorderRadius && lightboxMobileBorderRadiusWidth?.top ? `border-radius: ${lightboxMobileBorderRadius};` : ''}
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                    ${lightboxIconSize?.Mobile ? `width: ${lightboxIconSize?.Mobile}${lightboxIconSizeUnits?.Mobile};` : ''}
                    ${lightboxIconSize?.Mobile ? `height: ${lightboxIconSize?.Mobile}${lightboxIconSizeUnits?.Mobile};` : ''}
                }
            }
        ` : ''}

        ${ImageOverlayStyle === 'overlay' ? `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageOverlayStyleType === 'zoominout' ? 'transform: scale(1.001);' : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
                ${ImageOverlayStyleType === 'zoominout' ? 'transform: scale(1.05);' : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {
                position: absolute;
                content: '';
                ${ImageOverlayStyleType === 'top' ? 'top: -100%; left: 0;' : ''}
                ${ImageOverlayStyleType === 'bottom' ? 'top: 100%; left: 0;' : ''}
                ${ImageOverlayStyleType === 'left' ? 'top: 0; left: -100%;' : ''}
                ${ImageOverlayStyleType === 'right' ? 'top: 0; left: 100%;' : ''}
                width: 100%;
                height: 100%;
                ${ImageOverlayColor !== undefined ? `background-color: ${ImageOverlayColor};` : ''}
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease-in-out;
            }  
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {
                ${ImageOverlayStyleType === 'top' ? 'top: 0;' : ''}
                ${ImageOverlayStyleType === 'bottom' ? 'top: 0;' : ''}
                ${ImageOverlayStyleType === 'left' ? 'left: 0;' : ''}
                ${ImageOverlayStyleType === 'right' ? 'left: 0;' : ''}
                visibility: visible;
                opacity: 1;
                transition: all 0.3s ease-in-out;
            }
        ` : ''}
        
    `,
    [
        blockID,
        deviceType,

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
    ]
);

    const customCss = getCustomCss(imageGalleryCustomCSS, `.${blockID}`);
    useEffect(() => {
        setAttributes({
            blockStyle: `${fbGalleryStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
        });
    }, [fbGalleryStyle, customCss]);

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody
                title={__("Gallery Layout", "frontis-blocks")}
                initialOpen={true}
            >
                {/* <SelectControl
                    label={__("Preset Style", "frontis-blocks")}
                    value={GalleryPresetStyle}
                    options={PRESETS}
                    onChange={(selected) => changeGalleryPreset(selected)}
                /> */}
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
