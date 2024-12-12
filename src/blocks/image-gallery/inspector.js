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
} from "./constants/constants";

import SortableItem from './sortableItem';
import FB_ResponsiveControl from '@Components/responsive-control';

import './editor.scss';
import FB_Spacing from '../../components/spacing';
import FB_Color from '../../components/color';
import FB_Range from '../../components/range';
import FB_TypographyControl from '../../components/typography-control';
import FBIconPicker from '../../components/icon-picker';
import FB_AlignmentControl from '../../components/alignment-control';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        blockStyle,
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

     /** Start Preset Style */
     const changeGalleryPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-1": {
                deviceType: "Desktop",
                GalleryType: "grid",
                GalleryItems: [
                    {
                        id: "image-1",
                        title: "Image 1",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-4",
                        title: "Image 4",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-5",
                        title: "Image 5",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-6",
                        title: "Image 6",
                        image: {
                            id: 0,
                            url: "",
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
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-2",
                        title: "Image 2",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-3",
                        title: "Image 3",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-4",
                        title: "Image 4",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-5",
                        title: "Image 5",
                        image: {
                            id: 0,
                            url: "",
                            width: 0,
                            height: 0
                        }
                    },
                    {
                        id: "image-6",
                        title: "Image 6",
                        image: {
                            id: 0,
                            url: "",
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
                                url: "",
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
                                url: "",
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
                                url: "",
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
                                url: "",
                                width: 0,
                                height: 0
                            }
                        }
                    ],
                    GalleryPresetStyle: "preset-3",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
                            url: "",
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
            console.warn(`Testimonial: Preset "${selectedPreset}" not found.`);
        }
    };
    /** End Preset Style */

    // FB_Color for image Border
    const imageBorderColorSwitcherChange = (value) => {
        setAttributes({ imageBorderColorSwitcher: value });
    };
    const imageBorderColorChange = (value) => {
        setAttributes({ imageBorderColor: value });
    };
    const imageBorderHoverColorChange = (value) => {
        setAttributes({ imageBorderHoverColor: value });
    };

    /** GalleryBg Color */
    const handleGalleryBgColorSwitcherChange = (value) => {
        setAttributes({ GalleryBgColorSwitcher: value });
    };
    const handleGalleryBgColorChange = (value) => {
        setAttributes({ GalleryBgColor: value });
    };
    const handleGalleryBgHoverColorChange = (value) => {
        setAttributes({ GalleryBgHoverColor: value });
    };
    
    /** GalleryBorder Color */
    const handleGalleryBorderColorSwitcherChange = (value) => {
        setAttributes({ GalleryBorderColorSwitcher: value });
    };
    const handleGalleryBorderColorChange = (value) => {
        setAttributes({ GalleryBorderColor: value });
    };
    const handleGalleryBorderHoverColorChange = (value) => {
        setAttributes({ GalleryBorderHoverColor: value });
    };

    /** GalleryButton Color */
    const handleGalleryButtonColorSwitcherChange = (value) => {
        setAttributes({ GalleryButtonColorSwitcher: value });
    };
    const handleGalleryButtonColorChange = (value) => {
        setAttributes({ GalleryButtonColor: value });
    };
    const handleGalleryButtonHoverColorChange = (value) => {
        setAttributes({ GalleryButtonHoverColor: value });
    };

    /** GalleryButtonBG Color */
    const handleGalleryButtonBGColorSwitcherChange = (value) => {
        setAttributes({ GalleryButtonBGColorSwitcher: value });
    };
    const handleGalleryButtonBGColorChange = (value) => {
        setAttributes({ GalleryButtonBGColor: value });
    };
    const handleGalleryButtonBGHoverColorChange = (value) => {
        setAttributes({ GalleryButtonBGHoverColor: value });
    };

    /** ButtonBorder Color */
    const handleButtonBorderColorSwitcherChange = (value) => {
        setAttributes({ ButtonBorderColorSwitcher: value });
    };
    const handleButtonBorderColorChange = (value) => {
        setAttributes({ ButtonBorderColor: value });
    };
    const handleButtonBorderHoverColorChange = (value) => {
        setAttributes({ ButtonBorderHoverColor: value });
    };

    /** lightbox Color */
    const handleLightboxColorSwitcherChange = (value) => {
        setAttributes({ lightboxColorSwitcher: value });
    };
    const handleLightboxColorChange = (value) => {
        setAttributes({ lightboxColor: value });
    };
    const handleLightboxHoverColorChange = (value) => {
        setAttributes({ lightboxHoverColor: value });
    };

    /** lightboxBG Color */
    const handleLightboxBGColorSwitcherChange = (value) => {
        setAttributes({ lightboxBGColorSwitcher: value });
    };
    const handleLightboxBGColorChange = (value) => {
        setAttributes({ lightboxBGColor: value });
    };
    const handleLightboxBGHoverColorChange = (value) => {
        setAttributes({ lightboxBGHoverColor: value });
    };

    /** lightboxBorder Color */
    const handleLightboxBorderColorSwitcherChange = (value) => {
        setAttributes({ lightboxBorderColorSwitcher: value });
    };
    const handleLightboxBorderColorChange = (value) => {
        setAttributes({ lightboxBorderColor: value });
    };
    const handleLightboxBorderHoverColorChange = (value) => {
        setAttributes({ lightboxBorderHoverColor: value });
    };

    
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

    const ButtonMarginDesktopWidth = `${ButtonDesktopMargin.top}${ButtonMarginUnits[deviceType]} ${ButtonDesktopMargin.right}${ButtonMarginUnits[deviceType]} ${ButtonDesktopMargin.bottom}${ButtonMarginUnits[deviceType]} ${ButtonDesktopMargin.left}${ButtonMarginUnits[deviceType]}`;
    const ButtonMarginTabletWidth = `${ButtonTabMargin.top}${ButtonMarginUnits[deviceType]} ${ButtonTabMargin.right}${ButtonMarginUnits[deviceType]} ${ButtonTabMargin.bottom}${ButtonMarginUnits[deviceType]} ${ButtonTabMargin.left}${ButtonMarginUnits[deviceType]}`;
    const ButtonMarginMobileWidth = `${ButtonMobileMargin.top}${ButtonMarginUnits[deviceType]} ${ButtonMobileMargin.right}${ButtonMarginUnits[deviceType]} ${ButtonMobileMargin.bottom}${ButtonMarginUnits[deviceType]} ${ButtonMobileMargin.left}${ButtonMarginUnits[deviceType]}`;

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

    const ButtonPaddingDesktopWidth = `${ButtonDesktopPadding.top}${ButtonPaddingUnits[deviceType]} ${ButtonDesktopPadding.right}${ButtonPaddingUnits[deviceType]} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits[deviceType]} ${ButtonDesktopPadding.left}${ButtonPaddingUnits[deviceType]}`;
    const ButtonPaddingTabletWidth = `${ButtonTabPadding.top}${ButtonPaddingUnits[deviceType]} ${ButtonTabPadding.right}${ButtonPaddingUnits[deviceType]} ${ButtonTabPadding.bottom}${ButtonPaddingUnits[deviceType]} ${ButtonTabPadding.left}${ButtonPaddingUnits[deviceType]}`;
    const ButtonPaddingMobileWidth = `${ButtonMobilePadding.top}${ButtonPaddingUnits[deviceType]} ${ButtonMobilePadding.right}${ButtonPaddingUnits[deviceType]} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits[deviceType]} ${ButtonMobilePadding.left}${ButtonPaddingUnits[deviceType]}`;

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

    const ButtonBorderDesktopWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits[deviceType]} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits[deviceType]} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits[deviceType]} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits[deviceType]}`;
    const ButtonBorderTabletWidth = `${ButtonTabBorderWidth.top}${ButtonBorderUnits[deviceType]} ${ButtonTabBorderWidth.right}${ButtonBorderUnits[deviceType]} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits[deviceType]} ${ButtonTabBorderWidth.left}${ButtonBorderUnits[deviceType]}`;
    const ButtonBorderMobileWidth = `${ButtonMobileBorderWidth.top}${ButtonBorderUnits[deviceType]} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits[deviceType]} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits[deviceType]} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits[deviceType]}`;


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

    const ButtonBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits[deviceType]}`;
    const ButtonBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits[deviceType]} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits[deviceType]} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits[deviceType]}`;
    const ButtonBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits[deviceType]} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits[deviceType]} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits[deviceType]}`;



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

    const GalleryMarginDesktopWidth = `${GalleryDesktopMargin.top}${GalleryMarginUnits[deviceType]} ${GalleryDesktopMargin.right}${GalleryMarginUnits[deviceType]} ${GalleryDesktopMargin.bottom}${GalleryMarginUnits[deviceType]} ${GalleryDesktopMargin.left}${GalleryMarginUnits[deviceType]}`;
    const GalleryMarginTabletWidth = `${GalleryTabMargin.top}${GalleryMarginUnits[deviceType]} ${GalleryTabMargin.right}${GalleryMarginUnits[deviceType]} ${GalleryTabMargin.bottom}${GalleryMarginUnits[deviceType]} ${GalleryTabMargin.left}${GalleryMarginUnits[deviceType]}`;
    const GalleryMarginMobileWidth = `${GalleryMobileMargin.top}${GalleryMarginUnits[deviceType]} ${GalleryMobileMargin.right}${GalleryMarginUnits[deviceType]} ${GalleryMobileMargin.bottom}${GalleryMarginUnits[deviceType]} ${GalleryMobileMargin.left}${GalleryMarginUnits[deviceType]}`;


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

    const GalleryPaddingDesktopWidth = `${GalleryDesktopPadding.top}${GalleryPaddingUnits[deviceType]} ${GalleryDesktopPadding.right}${GalleryPaddingUnits[deviceType]} ${GalleryDesktopPadding.bottom}${GalleryPaddingUnits[deviceType]} ${GalleryDesktopPadding.left}${GalleryPaddingUnits[deviceType]}`;
    const GalleryPaddingTabletWidth = `${GalleryTabPadding.top}${GalleryPaddingUnits[deviceType]} ${GalleryTabPadding.right}${GalleryPaddingUnits[deviceType]} ${GalleryTabPadding.bottom}${GalleryPaddingUnits[deviceType]} ${GalleryTabPadding.left}${GalleryPaddingUnits[deviceType]}`;
    const GalleryPaddingMobileWidth = `${GalleryMobilePadding.top}${GalleryPaddingUnits[deviceType]} ${GalleryMobilePadding.right}${GalleryPaddingUnits[deviceType]} ${GalleryMobilePadding.bottom}${GalleryPaddingUnits[deviceType]} ${GalleryMobilePadding.left}${GalleryPaddingUnits[deviceType]}`;


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

    const GalleryBorderDesktopWidth = `${GalleryDesktopBorderWidth.top}${GalleryBorderUnits[deviceType]} ${GalleryDesktopBorderWidth.right}${GalleryBorderUnits[deviceType]} ${GalleryDesktopBorderWidth.bottom}${GalleryBorderUnits[deviceType]} ${GalleryDesktopBorderWidth.left}${GalleryBorderUnits[deviceType]}`;
    const GalleryBorderTabletWidth = `${GalleryTabBorderWidth.top}${GalleryBorderUnits[deviceType]} ${GalleryTabBorderWidth.right}${GalleryBorderUnits[deviceType]} ${GalleryTabBorderWidth.bottom}${GalleryBorderUnits[deviceType]} ${GalleryTabBorderWidth.left}${GalleryBorderUnits[deviceType]}`;
    const GalleryBorderMobileWidth = `${GalleryMobileBorderWidth.top}${GalleryBorderUnits[deviceType]} ${GalleryMobileBorderWidth.right}${GalleryBorderUnits[deviceType]} ${GalleryMobileBorderWidth.bottom}${GalleryBorderUnits[deviceType]} ${GalleryMobileBorderWidth.left}${GalleryBorderUnits[deviceType]}`;


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

    const GalleryBorderRadiusDesktopWidth = `${GalleryBorderRadiusDesktop.top}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusDesktop.right}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusDesktop.bottom}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusDesktop.left}${GalleryBorderRadiusUnits[deviceType]}`;
    const GalleryBorderRadiusTabletWidth = `${GalleryBorderRadiusTablet.top}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusTablet.right}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusTablet.bottom}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusTablet.left}${GalleryBorderRadiusUnits[deviceType]}`;
    const GalleryBorderRadiusMobileWidth = `${GalleryBorderRadiusMobile.top}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusMobile.right}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusMobile.bottom}${GalleryBorderRadiusUnits[deviceType]} ${GalleryBorderRadiusMobile.left}${GalleryBorderRadiusUnits[deviceType]}`;


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
	
	const imageDesktopBorder = `${imageDesktopBorderWidth.top}${imageBorderUnits[deviceType]} ${imageDesktopBorderWidth.right}${imageBorderUnits[deviceType]} ${imageDesktopBorderWidth.bottom}${imageBorderUnits[deviceType]} ${imageDesktopBorderWidth.left}${imageBorderUnits[deviceType]}`;
	const imageTabBorder = `${imageTabBorderWidth.top}${imageBorderUnits[deviceType]} ${imageTabBorderWidth.right}${imageBorderUnits[deviceType]} ${imageTabBorderWidth.bottom}${imageBorderUnits[deviceType]} ${imageTabBorderWidth.left}${imageBorderUnits[deviceType]}`;
	const imageMobileBorder = `${imageMobileBorderWidth.top}${imageBorderUnits[deviceType]} ${imageMobileBorderWidth.right}${imageBorderUnits[deviceType]} ${imageMobileBorderWidth.bottom}${imageBorderUnits[deviceType]} ${imageMobileBorderWidth.left}${imageBorderUnits[deviceType]}`;
	
	
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
	
	const imageDesktopBorderRadius = `${imageDesktopBorderRadiusWidth.top}${imageBorderRadiusUnits[deviceType]} ${imageDesktopBorderRadiusWidth.right}${imageBorderRadiusUnits[deviceType]} ${imageDesktopBorderRadiusWidth.bottom}${imageBorderRadiusUnits[deviceType]} ${imageDesktopBorderRadiusWidth.left}${imageBorderRadiusUnits[deviceType]}`;
	const imageTabBorderRadius = `${imageTabBorderRadiusWidth.top}${imageBorderRadiusUnits[deviceType]} ${imageTabBorderRadiusWidth.right}${imageBorderRadiusUnits[deviceType]} ${imageTabBorderRadiusWidth.bottom}${imageBorderRadiusUnits[deviceType]} ${imageTabBorderRadiusWidth.left}${imageBorderRadiusUnits[deviceType]}`;
	const imageMobileBorderRadius = `${imageMobileBorderRadiusWidth.top}${imageBorderRadiusUnits[deviceType]} ${imageMobileBorderRadiusWidth.right}${imageBorderRadiusUnits[deviceType]} ${imageMobileBorderRadiusWidth.bottom}${imageBorderRadiusUnits[deviceType]} ${imageMobileBorderRadiusWidth.left}${imageBorderRadiusUnits[deviceType]}`;
	

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

    const lightboxDesktopPaddingWidth = `${lightboxDesktopPadding.top}${lightboxPaddingUnits[deviceType]} ${lightboxDesktopPadding.right}${lightboxPaddingUnits[deviceType]} ${lightboxDesktopPadding.bottom}${lightboxPaddingUnits[deviceType]} ${lightboxDesktopPadding.left}${lightboxPaddingUnits[deviceType]}`;
    const lightboxTabPaddingWidth = `${lightboxTabPadding.top}${lightboxPaddingUnits[deviceType]} ${lightboxTabPadding.right}${lightboxPaddingUnits[deviceType]} ${lightboxTabPadding.bottom}${lightboxPaddingUnits[deviceType]} ${lightboxTabPadding.left}${lightboxPaddingUnits[deviceType]}`;
    const lightboxMobilePaddingWidth = `${lightboxMobilePadding.top}${lightboxPaddingUnits[deviceType]} ${lightboxMobilePadding.right}${lightboxPaddingUnits[deviceType]} ${lightboxMobilePadding.bottom}${lightboxPaddingUnits[deviceType]} ${lightboxMobilePadding.left}${lightboxPaddingUnits[deviceType]}`;


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

    const lightboxDesktopBorder = `${lightboxDesktopBorderWidth.top}${lightboxBorderUnits[deviceType]} ${lightboxDesktopBorderWidth.right}${lightboxBorderUnits[deviceType]} ${lightboxDesktopBorderWidth.bottom}${lightboxBorderUnits[deviceType]} ${lightboxDesktopBorderWidth.left}${lightboxBorderUnits[deviceType]}`;
    const lightboxTabBorder = `${lightboxTabBorderWidth.top}${lightboxBorderUnits[deviceType]} ${lightboxTabBorderWidth.right}${lightboxBorderUnits[deviceType]} ${lightboxTabBorderWidth.bottom}${lightboxBorderUnits[deviceType]} ${lightboxTabBorderWidth.left}${lightboxBorderUnits[deviceType]}`;
    const lightboxMobileBorder = `${lightboxMobileBorderWidth.top}${lightboxBorderUnits[deviceType]} ${lightboxMobileBorderWidth.right}${lightboxBorderUnits[deviceType]} ${lightboxMobileBorderWidth.bottom}${lightboxBorderUnits[deviceType]} ${lightboxMobileBorderWidth.left}${lightboxBorderUnits[deviceType]}`;


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

    const lightboxDesktopBorderRadius = `${lightboxDesktopBorderRadiusWidth.top}${lightboxBorderRadiusUnits[deviceType]} ${lightboxDesktopBorderRadiusWidth.right}${lightboxBorderRadiusUnits[deviceType]} ${lightboxDesktopBorderRadiusWidth.bottom}${lightboxBorderRadiusUnits[deviceType]} ${lightboxDesktopBorderRadiusWidth.left}${lightboxBorderRadiusUnits[deviceType]}`;
    const lightboxTabBorderRadius = `${lightboxTabBorderRadiusWidth.top}${lightboxBorderRadiusUnits[deviceType]} ${lightboxTabBorderRadiusWidth.right}${lightboxBorderRadiusUnits[deviceType]} ${lightboxTabBorderRadiusWidth.bottom}${lightboxBorderRadiusUnits[deviceType]} ${lightboxTabBorderRadiusWidth.left}${lightboxBorderRadiusUnits[deviceType]}`;
    const lightboxMobileBorderRadius = `${lightboxMobileBorderRadiusWidth.top}${lightboxBorderRadiusUnits[deviceType]} ${lightboxMobileBorderRadiusWidth.right}${lightboxBorderRadiusUnits[deviceType]} ${lightboxMobileBorderRadiusWidth.bottom}${lightboxBorderRadiusUnits[deviceType]} ${lightboxMobileBorderRadiusWidth.left}${lightboxBorderRadiusUnits[deviceType]}`;


    const lightboxIconHandler = (IconName) => {
		setAttributes({lightboxIcon: IconName})
	}

    // const imageSpanStyle = GalleryItems.map(item => `
    //         .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item.${item.id} {
    //             grid-column: span ${item.column.desktop};
    //             grid-row: span ${item.row.desktop};
    //         }
    //         @media only screen and (max-width: 1024px) {
    //             .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item.${item.id} {
    //                 grid-column: span ${item.column.tablet};
    //                 grid-row: span ${item.row.tablet};
    //             }
    //         }
    //         @media only screen and (max-width: 767px) {
    //             .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item.${item.id} {
    //                 grid-column: span ${item.column.mobile};
    //                 grid-row: span ${item.row.mobile};
    //             }
    //         }

    //     `)
    


    const fbGalleryStyle = useMemo(() => `
        .fb-gallery-main-wrapper.${blockID} {
            position: relative;
            overflow: hidden;
            ${GalleryBgColor !== undefined ? `background-color: ${GalleryBgColor};` : ''}
            ${GalleryPaddingDesktopWidth !== undefined ? `padding: ${GalleryPaddingDesktopWidth};` : ''}
            ${GalleryMarginDesktopWidth !== undefined ? `margin: ${GalleryMarginDesktopWidth};` : ''}
            ${GalleryBorder !== undefined ? `border-style: ${GalleryBorder};` : ''}
            ${GalleryBorderDesktopWidth !== undefined ? `border-width: ${GalleryBorderDesktopWidth};` : ''}
            ${GalleryBorderColor !== undefined ? `border-color: ${GalleryBorderColor};` : ''}
            ${GalleryBorderRadiusDesktopWidth !== undefined ? `border-radius: ${GalleryBorderRadiusDesktopWidth};` : ''}
            ${GalleryZIndex?.Desktop !== undefined ? `z-index: ${GalleryZIndex.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-gallery-main-wrapper.${blockID}:hover {
            ${GalleryBgHoverColor !== undefined ? `background-color: ${GalleryBgHoverColor};` : ''}
            ${GalleryBorderHoverColor !== undefined ? `border-color: ${GalleryBorderHoverColor};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
            display: grid;
            ${GalleryColumnNumber.Desktop !== undefined ? `grid-template-columns: repeat(${GalleryColumnNumber.Desktop}, 1fr);` : ''}
            ${GalleryImageGap.Desktop !== undefined ? `grid-gap: ${GalleryImageGap.Desktop}${GalleryImageGapUnits.Desktop};` : ''}
            ${GalleryItemHeight.Desktop !== undefined ? `grid-auto-rows: ${GalleryItemHeight.Desktop}${GalleryItemHeightUnits.Desktop};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            ${imageBorder !== undefined ? `border-style: ${imageBorder};` : ''}
            ${imageDesktopBorder !== undefined ? `border-width: ${imageDesktopBorder};` : ''}
            ${imageBorderColor !== undefined ? `border-color: ${imageBorderColor};` : ''}
            ${imageDesktopBorderRadius !== undefined ? `border-radius: ${imageDesktopBorderRadius};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
            position: absolute;
            top: 0;
            ${ImageAlignment === 'left' ? 'left: 0;' : ''}
            ${ImageAlignment === 'right' ? 'right: 0; left: unset;' : ''}
            ${ImageAlignment === 'center' && ImageOverlayStyleType !== 'zoominout' ? 'left: 50%; transform: translateX(-50%);' : ''}
            ${ImageWidth.Desktop !== undefined ? `width: ${ImageWidth.Desktop}${ImageWidthUnits.Desktop};` : ''}
            ${ImageHeight.Desktop !== undefined ? `height: ${ImageHeight.Desktop}${ImageHeightUnits.Desktop};` : ''}
            ${ImageFitCover === true ? 'object-fit: cover;' : ''}
            ${ImageOverlayStyle === 'black_white' ? 'filter: grayscale(100%);' : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
            ${ImageOverlayStyle !== undefined && ImageOverlayStyle === 'black_white' ? 'filter: grayscale(0);' : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {
            ${GalleryButtonSwitcher === true ? 'display: flex;' : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonAlignment !== undefined ? `justify-content: ${GalleryButtonAlignment};` : ''}
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
            ${GalleryButtonSwitcher === true && ButtonBorder !== undefined ? `border-style: ${ButtonBorder};` : ''}
            ${GalleryButtonSwitcher === true && ButtonBorderColorSwitcher !== undefined ? `border-color: ${ButtonBorderColor};` : ''}
            ${GalleryButtonSwitcher === true && ButtonBorderDesktopWidth !== undefined ? `border-width: ${ButtonBorderDesktopWidth};` : ''}
            ${GalleryButtonSwitcher === true && ButtonBorderRadiusDesktopWidth !== undefined ? `border-radius: ${ButtonBorderRadiusDesktopWidth};` : ''}
            ${GalleryButtonSwitcher === true && ButtonMarginDesktopWidth !== undefined ? `margin: ${ButtonMarginDesktopWidth};` : ''}
            ${GalleryButtonSwitcher === true && ButtonPaddingDesktopWidth !== undefined ? `padding: ${ButtonPaddingDesktopWidth};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonFontFamily !== undefined ? `font-family: ${GalleryButtonFontFamily};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonFontSize.Desktop !== undefined ? 
                `font-size: ${GalleryButtonFontSize.Desktop}${GalleryButtonFontSizeUnits.Desktop};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonFontWeight !== undefined ? `font-weight: ${GalleryButtonFontWeight};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonFontStyle !== undefined ? `font-style: ${GalleryButtonFontStyle};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonTextTransform !== undefined ? `text-transform: ${GalleryButtonTextTransform};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonTextDecoration !== undefined ? `text-decoration: ${GalleryButtonTextDecoration};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonLetterSpacing.Desktop !== undefined ? 
                `letter-spacing: ${GalleryButtonLetterSpacing.Desktop}${GalleryButtonLetterSpacingUnits.Desktop};` : ''}
            ${GalleryButtonSwitcher === true && GalleryButtonLineHeight.Desktop !== undefined ? 
                `line-height: ${GalleryButtonLineHeight.Desktop}${GalleryButtonLineHeightUnits.Desktop};` : ''}
            ${GalleryButtonSwitcher === true && ButtonBorderColorSwitcher === 'normal' && GalleryButtonColor !== undefined ? 
                `color: ${GalleryButtonColor};` : ''}
            ${GalleryButtonSwitcher === true && ButtonBorderColorSwitcher === 'normal' && GalleryButtonBGColor !== undefined ? 
                `background-color: ${GalleryButtonBGColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {
            ${GalleryButtonSwitcher === true && ButtonBorderColorSwitcher === 'hover' && GalleryButtonHoverColor !== undefined ? 
                `color: ${GalleryButtonHoverColor};` : ''}
            ${GalleryButtonSwitcher === true && ButtonBorderColorSwitcher === 'hover' && GalleryButtonBGHoverColor !== undefined ? 
                `background-color: ${GalleryButtonBGHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }


        @media only screen and (max-width: 1024px) {
            .fb-gallery-main-wrapper.${blockID} {
                padding: ${GalleryPaddingTabletWidth !== undefined ? `${GalleryPaddingTabletWidth}` : ''};
                margin: ${GalleryMarginTabletWidth !== undefined ? `${GalleryMarginTabletWidth}` : ''};
                border-radius: ${GalleryBorderRadiusTabletWidth !== undefined ? `${GalleryBorderRadiusTabletWidth}` : ''};
                ${GalleryZIndex?.Tablet !== undefined ? `z-index: ${GalleryZIndex.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                display: grid;
                grid-template-columns: ${GalleryColumnNumber.Tablet !== undefined ? `repeat(${GalleryColumnNumber.Tablet}, 1fr)` : ''};
                grid-gap: ${GalleryImageGap.Tablet !== undefined ? `${GalleryImageGap.Tablet}${GalleryImageGapUnits.Tablet}` : ''};
                grid-auto-rows: ${GalleryItemHeight.Tablet !== undefined ? `${GalleryItemHeight.Tablet}${GalleryItemHeightUnits.Tablet}` : ''};
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageWidth.Tablet !== undefined ? `width: ${ImageWidth.Tablet}${ImageWidthUnits.Tablet};` : ''}
                ${ImageHeight.Tablet !== undefined ? `height: ${ImageHeight.Tablet}${ImageHeightUnits.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                ${GalleryButtonSwitcher === true && ButtonBorderRadiusTabletWidth !== undefined ? `border-radius: ${ButtonBorderRadiusTabletWidth};` : ''}
                ${GalleryButtonSwitcher === true && ButtonMarginTabletWidth !== undefined ? `margin: ${ButtonMarginTabletWidth};` : ''}
                ${GalleryButtonSwitcher === true && ButtonPaddingTabletWidth !== undefined ? `padding: ${ButtonPaddingTabletWidth};` : ''}
                ${GalleryButtonSwitcher === true && GalleryButtonFontSize.Tablet !== undefined ? 
                    `font-size: ${GalleryButtonFontSize.Tablet}${GalleryButtonFontSizeUnits.Tablet};` : ''}
                ${GalleryButtonSwitcher === true && GalleryButtonLetterSpacing.Tablet !== undefined ? 
                    `letter-spacing: ${GalleryButtonLetterSpacing.Tablet}${GalleryButtonLetterSpacingUnits.Tablet};` : ''}
                ${GalleryButtonSwitcher === true && GalleryButtonLineHeight.Tablet !== undefined ? 
                    `line-height: ${GalleryButtonLineHeight.Tablet}${GalleryButtonLineHeightUnits.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
                ${imageTabBorder !== undefined ? `border-width: ${imageTabBorder};` : ''}
                ${imageTabBorderRadius !== undefined ? `border-radius: ${imageTabBorderRadius};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-gallery-main-wrapper.${blockID} {
                padding: ${GalleryPaddingMobileWidth !== undefined ? `${GalleryPaddingMobileWidth}` : ''};
                margin: ${GalleryMarginMobileWidth !== undefined ? `${GalleryMarginMobileWidth}` : ''};
                border-radius: ${GalleryBorderRadiusMobileWidth !== undefined ? `${GalleryBorderRadiusMobileWidth}` : ''};
                ${GalleryZIndex?.Mobile !== undefined ? `z-index: ${GalleryZIndex.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                display: grid;
                grid-template-columns: ${GalleryColumnNumber.Mobile !== undefined ? `repeat(${GalleryColumnNumber.Mobile}, 1fr)` : ''};
                grid-gap: ${GalleryImageGap.Mobile !== undefined ? `${GalleryImageGap.Mobile}${GalleryImageGapUnits.Mobile}` : ''};
                grid-auto-rows: ${GalleryItemHeight.Mobile !== undefined ? `${GalleryItemHeight.Mobile}${GalleryItemHeightUnits.Mobile}` : ''};
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageWidth.Mobile !== undefined ? `width: ${ImageWidth.Mobile}${ImageWidthUnits.Mobile};` : ''}
                ${ImageHeight.Mobile !== undefined ? `height: ${ImageHeight.Mobile}${ImageHeightUnits.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                ${GalleryButtonSwitcher === true && ButtonBorderRadiusMobileWidth !== undefined ? `border-radius: ${ButtonBorderRadiusMobileWidth};` : ''}
                ${GalleryButtonSwitcher === true && ButtonMarginMobileWidth !== undefined ? `margin: ${ButtonMarginMobileWidth};` : ''}
                ${GalleryButtonSwitcher === true && ButtonPaddingMobileWidth !== undefined ? `padding: ${ButtonPaddingMobileWidth};` : ''}
                ${GalleryButtonSwitcher === true && GalleryButtonFontSize.Mobile !== undefined ? 
                    `font-size: ${GalleryButtonFontSize.Mobile}${GalleryButtonFontSizeUnits.Mobile};` : ''}
                ${GalleryButtonSwitcher === true && GalleryButtonLetterSpacing.Mobile !== undefined ? 
                    `letter-spacing: ${GalleryButtonLetterSpacing.Mobile}${GalleryButtonLetterSpacingUnits.Mobile};` : ''}
                ${GalleryButtonSwitcher === true && GalleryButtonLineHeight.Mobile !== undefined ? 
                    `line-height: ${GalleryButtonLineHeight.Mobile}${GalleryButtonLineHeightUnits.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
                ${imageMobileBorder !== undefined ? `border-width: ${imageMobileBorder};` : ''}
                ${imageMobileBorderRadius !== undefined ? `border-radius: ${imageMobileBorderRadius};` : ''}
            }
        }

        ${ImageOverlayStyle === 'overlay' && `
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
        `}
        
        ${lightboxIconSwitcher === true && `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                ${lightboxDesktopPaddingWidth !== undefined ? `padding: ${lightboxDesktopPaddingWidth};` : ''}
                ${lightboxBGColor !== undefined ? `background-color: ${lightboxBGColor};` : ''}
                ${lightboxBorder !== undefined ? `border-style: ${lightboxBorder};` : ''}
                ${lightboxDesktopBorder !== undefined ? `border-width: ${lightboxDesktopBorder};` : ''}
                ${lightboxBorderColor !== undefined ? `border-color: ${lightboxBorderColor};` : ''}
                ${lightboxDesktopBorderRadius !== undefined ? `border-radius: ${lightboxDesktopBorderRadius};` : ''}
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
                ${lightboxBGHoverColor !== undefined ? `background-color: ${lightboxBGHoverColor};` : ''}
                ${lightboxBorderHoverColor !== undefined ? `border-color: ${lightboxBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                ${lightboxColor !== undefined ? `fill: ${lightboxColor};` : ''}
                ${lightboxIconSize?.Desktop !== undefined ? `width: ${lightboxIconSize.Desktop}${lightboxIconSizeUnits.Desktop};` : ''}
                ${lightboxIconSize?.Desktop !== undefined ? `height: ${lightboxIconSize.Desktop}${lightboxIconSizeUnits.Desktop};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper:hover .fb-lightbox-icon {
                ${lightboxHoverColor !== undefined ? `fill: ${lightboxHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon svg {
                width: 100%;
                height: 100%;
            }
            
            @media only screen and (max-width: 1024px) {
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                    ${lightboxTabPaddingWidth !== undefined ? `padding: ${lightboxTabPaddingWidth};` : ''}
                    ${lightboxTabBorder !== undefined ? `border-width: ${lightboxTabBorder};` : ''}
                    ${lightboxTabBorderRadius !== undefined ? `border-radius: ${lightboxTabBorderRadius};` : ''}
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                    ${lightboxIconSize?.Tablet !== undefined ? `width: ${lightboxIconSize.Tablet}${lightboxIconSizeUnits.Tablet};` : ''}
                    ${lightboxIconSize?.Tablet !== undefined ? `height: ${lightboxIconSize.Tablet}${lightboxIconSizeUnits.Tablet};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                    ${lightboxMobilePaddingWidth !== undefined ? `padding: ${lightboxMobilePaddingWidth};` : ''}
                    ${lightboxMobileBorder !== undefined ? `border-width: ${lightboxMobileBorder};` : ''}
                    ${lightboxMobileBorderRadius !== undefined ? `border-radius: ${lightboxMobileBorderRadius};` : ''}
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                    ${lightboxIconSize?.Mobile !== undefined ? `width: ${lightboxIconSize.Mobile}${lightboxIconSizeUnits.Mobile};` : ''}
                    ${lightboxIconSize?.Mobile !== undefined ? `height: ${lightboxIconSize.Mobile}${lightboxIconSizeUnits.Mobile};` : ''}
                }
            }
        `}
        
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
    ]
);

useEffect(() => {
    setAttributes({
        blockStyle: fbGalleryStyle.replace(/\s+/g, ' ').trim(),
    });
}, [fbGalleryStyle]);

const editorStyle = fbGalleryStyle.replace(/\s+/g, ' ').trim();


    return (
        <>
            <style>
                {`
                    ${editorStyle}
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
                                            <SelectControl
                                                label={__("Preset Style", "frontis-blocks")}
                                                value={GalleryPresetStyle}
                                                options={PRESETS}
                                                onChange={(selected) => changeGalleryPreset(selected)}
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
                                )}

                                {tab.name === "styles" && (
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

                                                <FB_Color
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalColorSwitcher={imageBorderColorSwitcher}
                                                    globalColor={imageBorderColor}
                                                    globalHoverColor={imageBorderHoverColor}
                                                    handleColorSwitcherChange={imageBorderColorSwitcherChange}
                                                    handleGlobalColorChange={imageBorderColorChange}
                                                    handleGlobalHoverColorChange={imageBorderHoverColorChange}
                                                />

                                                <FB_Spacing
                                                    label={__("Border Width", "frontis-blocks")}
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
                                                    label={__("Border Radius Width", "frontis-blocks")}
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
                                                                                { color: '#F72585' },
                                                                                { color: '#7209B7' },
                                                                                { color: '#3A0CA3' },
                                                                                { color: '#4361EE' },
                                                                                { color: '#4CC9F0' },
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
                                                <FB_AlignmentControl
                                                    label={__("Alignment", "frontis-blocks")}
                                                    globalAlignment={GalleryButtonAlignment}
                                                    setGlobalAlignment={(value) => setAttributes({ GalleryButtonAlignment: value })}
                                                />

                                                <FB_TypographyControl
                                                    fontFamily={GalleryButtonFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ GalleryButtonFontFamily: value })}
                                                    
                                                    fontSize={GalleryButtonFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ GalleryButtonFontSize: value })}
                                                    
                                                    fontSizeUnits={GalleryButtonFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ GalleryButtonFontSizeUnits: value })}
                                                    
                                                    fontWeight={GalleryButtonFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ GalleryButtonFontWeight: value })}
                                                    
                                                    fontStyle={GalleryButtonFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ GalleryButtonFontStyle: value })}
                                                    
                                                    textTransform={GalleryButtonTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ GalleryButtonTextTransform: value })}
                                                    
                                                    textDecoration={GalleryButtonTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ GalleryButtonTextDecoration: value })}
                                                    
                                                    letterSpacing={GalleryButtonLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ GalleryButtonLetterSpacing: value })}
                                                    
                                                    letterSpacingUnits={GalleryButtonLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ GalleryButtonLetterSpacingUnits: value })}
                                                    
                                                    lineHeight={GalleryButtonLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ GalleryButtonLineHeight: value })}
                                                    
                                                    lineHeightUnits={GalleryButtonLineHeightUnits}
                                                    onChangeLineHeightUnit={(value) => setAttributes({ GalleryButtonLineHeightUnits: value })}
                                                    
                                                    deviceType={deviceType}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_Color
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColorSwitcher={GalleryButtonColorSwitcher}
                                                    globalColor={GalleryButtonColor}
                                                    globalHoverColor={GalleryButtonHoverColor}
                                                    handleColorSwitcherChange={handleGalleryButtonColorSwitcherChange}
                                                    handleGlobalColorChange={handleGalleryButtonColorChange}
                                                    handleGlobalHoverColorChange={handleGalleryButtonHoverColorChange}
                                                />


                                                <FB_Color
                                                    label={__("Background Color", "frontis-blocks")}
                                                    globalColorSwitcher={GalleryButtonBGColorSwitcher}
                                                    globalColor={GalleryButtonBGColor}
                                                    globalHoverColor={GalleryButtonBGHoverColor}
                                                    handleColorSwitcherChange={handleGalleryButtonBGColorSwitcherChange}
                                                    handleGlobalColorChange={handleGalleryButtonBGColorChange}
                                                    handleGlobalHoverColorChange={handleGalleryButtonBGHoverColorChange}
                                                />

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

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={ButtonBorderColorSwitcher}
                                                globalColor={ButtonBorderColor}
                                                globalHoverColor={ButtonBorderHoverColor}
                                                handleColorSwitcherChange={handleButtonBorderColorSwitcherChange}
                                                handleGlobalColorChange={handleButtonBorderColorChange}
                                                handleGlobalHoverColorChange={handleButtonBorderHoverColorChange}
                                            />

                                            <FB_Spacing 
                                                label={__("Border Width", "frontis-blocks")}
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
                                                label={__("Border Radius Width", "frontis-blocks")}
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
                                                <FB_Color
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColorSwitcher={lightboxColorSwitcher}
                                                    globalColor={lightboxColor}
                                                    globalHoverColor={lightboxHoverColor}
                                                    handleColorSwitcherChange={handleLightboxColorSwitcherChange}
                                                    handleGlobalColorChange={handleLightboxColorChange}
                                                    handleGlobalHoverColorChange={handleLightboxHoverColorChange}
                                                />
												<FB_Color
                                                    label={__("Background Color", "frontis-blocks")}
                                                    globalColorSwitcher={lightboxBGColorSwitcher}
                                                    globalColor={lightboxBGColor}
                                                    globalHoverColor={lightboxBGHoverColor}
                                                    handleColorSwitcherChange={handleLightboxBGColorSwitcherChange}
                                                    handleGlobalColorChange={handleLightboxBGColorChange}
                                                    handleGlobalHoverColorChange={handleLightboxBGHoverColorChange}
                                                /> 
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

                                                <FB_Color
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalColorSwitcher={lightboxBorderColorSwitcher}
                                                    globalColor={lightboxBorderColor}
                                                    globalHoverColor={lightboxBorderHoverColor}
                                                    handleColorSwitcherChange={handleLightboxBorderColorSwitcherChange}
                                                    handleGlobalColorChange={handleLightboxBorderColorChange}
                                                    handleGlobalHoverColorChange={handleLightboxBorderHoverColorChange}
                                                />

                                                <FB_Spacing 
                                                    label={__("Border Width", "frontis-blocks")}
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
                                                    label={__("Border Radius Width", "frontis-blocks")}
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
                                                <FB_Color
                                                    globalColorSwitcher={GalleryBgColorSwitcher}
                                                    globalColor={GalleryBgColor}
                                                    globalHoverColor={GalleryBgHoverColor}
                                                    handleColorSwitcherChange={handleGalleryBgColorSwitcherChange}
                                                    handleGlobalColorChange={handleGalleryBgColorChange}
                                                    handleGlobalHoverColorChange={handleGalleryBgHoverColorChange}
                                                />
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

                                                <FB_Color
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalColorSwitcher={GalleryBorderColorSwitcher}
                                                    globalColor={GalleryBorderColor}
                                                    globalHoverColor={GalleryBorderHoverColor}
                                                    handleColorSwitcherChange={handleGalleryBorderColorSwitcherChange}
                                                    handleGlobalColorChange={handleGalleryBorderColorChange}
                                                    handleGlobalHoverColorChange={handleGalleryBorderHoverColorChange}
                                                />
                                                <FB_Spacing 
                                                    label={__("Border Width", "frontis-blocks")}
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
                                                    label={__("Border Radius Width", "frontis-blocks")}
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
