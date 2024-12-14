import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { select, dispatch } from "@wordpress/data";

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
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    ICON_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
    ACCORDION_TYPES,
    HEADING,
    TITLE_ALIGNMENT,
    CONTENT_ALIGN,
    ICON_POSITIONS,
    ICON_SWITCHER,
} from "./constants/constants";
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_Color from '@Components/color';

import './editor.scss';
import FBIconPicker from '../../components/icon-picker';
import FB_TypographyControl from '../../components/typography-control';
import FB_BackgroundColorControl from '../../components/background-color-control';
import FB_BoxShadowControl from '../../components/box-shadow';
import FB_ImageControl from '../../components/image-control';
import FB_HtmlTagControl from '../../components/html-tag-control';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        deviceType,
        accordionAlignment,
        accordionIconZIndex,
        accordionItems,

        accordionIconSize,
        accordionIconSizeUnits,

        accordionIconColorSwitcher,
        accordionIconColor,
        accordionIconHoverColor,

        accordionIconBorder,
        accordionIconBorderColorSwitcher,
        accordionIconBorderColor,
        accordionIconBorderHoverColor,

        accordionIconBorderUnits,
        accordionIconBorderDesktop,
        accordionIconBorderTablet,
        accordionIconBorderMobile,
        accordionIconBorderLink,

        accordionIconBorderRadiusUnits,
        accordionIconBorderRadiusDesktop,
        accordionIconBorderRadiusTablet,
        accordionIconBorderRadiusMobile,
        accordionIconBorderRadiusLink,

        accordionIconGapSize,
        accordionIconGapUnits,

        accordionIconPaddingUnits,
        accordionIconPaddingDesktop,
        accordionIconPaddingTablet,
        accordionIconPaddingMobile,
        accordionIconPaddingLink,

        titleFontFamily,
        titleFontSize,
        titleFontSizeUnits,
        titleFontWeight,
        titleFontStyle,
        titleTextTransform,
        titleTextDecoration,
        titleLetterSpacing,
        titleLetterSpacingUnits,
        titleLineHeight,
        titleLineHeightUnits,

        accordionType,
        displayIcon,
        transitionDuration,
        tabIconSwitcher,
        tabIcon,
        tabImageUrl,
        tabImageAlt,
        tabImageID,
        tabImagePosition,
        tabImageAttachment,
        tabImageRepeat,
        tabImageSize,

        expandedIconSwitcher,
        expandedIcon,
        expandedImageUrl,
        expandedImageAlt,
        expandedImageID,
        expandedImagePosition,
        expandedImageAttachment,
        expandedImageRepeat,
        expandedImageSize,
        contentAlign,
        contentColor,
        iconColor,
        iconPosition,
        titleAlignment,
        tagName,
        faqSchema,

        titleColorSwitcher,
        titleColor,
        titleHoverColor,

        accordionItemGap,
        accordionItemGapUnits,

        titleSpacing,
        titleSpacingUnits,

        prefixSuffixSpacing,
        prefixSuffixSpacingUnits,

        titleIconSize,
        titleIconSizeUnits,

        titlePrefixIconSize,
        titlePrefixIconSizeUnits,
        
        titleSuffixIconSize,
        titleSuffixIconSizeUnits,

        titleBGColorSwitcher,
        titleBGColor,
        titleBGHoverColor,
        titleIconColorSwitcher,
        titleIconColor,
        titleIconHoverColor,

        // Accordion Items
        accordionItemsPaddingUnits,
        accordionItemsDesktopPadding,
        accordionItemsTabPadding,
        accordionItemsMobilePadding,
        accordionItemsPaddingLink,

        accordionItemsBorder,
        accordionItemsBorderColor,
        accordionItemsBorderHoverColor,
        accordionItemsBorderColorSwitcher,
        accordionItemsBorderUnits,
        accordionItemsDesktopBorderWidth,
        accordionItemsTabBorderWidth,
        accordionItemsMobileBorderWidth,
        accordionItemsBorderLink,
        accordionItemsBorderRadiusUnits,
        accordionItemsDesktopBorderRadiusWidth,
        accordionItemsTabBorderRadiusWidth,
        accordionItemsMobileBorderRadiusWidth,
        accordionItemsBorderRadiusLink,	

        // Accordion Advance
        accordionZIndex,
        accordionPaddingUnits,
        accordionDesktopPadding,
        accordionTabPadding,
        accordionMobilePadding,
        accordionPaddingLink,
        accordionMarginUnits,
        accordionDesktopMargin,
        accordionTabMargin,
        accordionMobileMargin,
        accordionMarginLink,
        accordionBorder,
        accordionBorderColor,
        accordionBorderHoverColor,
        accordionBorderColorSwitcher,
        accordionBorderUnits,
        accordionDesktopBorderWidth,
        accordionTabBorderWidth,
        accordionMobileBorderWidth,
        accordionBorderLink,
        accordionBorderRadiusUnits,
        accordionDesktopBorderRadiusWidth,
        accordionTabBorderRadiusWidth,
        accordionMobileBorderRadiusWidth,
        accordionBorderRadiusLink,
        accordionDesktopSwitcher,
        accordionTabletSwitcher,
        accordionMobileSwitcher,

        // Boxshadow
        accordionGlobalBoxShadowValues,
        accordionGlobalBoxShadowCssValue,

        // Backgorund
        accordionBgColorSwitcher,
        accordionBgType,
        accordionBgClassicColor,
        accordionBgGradientColor,
        accordionBgCustomGradientSwitcher,
        accordionBgCustomGradientInputValue,
        accordionBgImageUrl,
        accordionBgImageAlt,
        accordionBgImageID,
        accordionBgImagePosition,
        accordionBgImageAttachment,
        accordionBgImageRepeat,
        accordionBgImageSize,
        accordionBgHoverType,
        accordionBgHoverClassicColor,
        accordionBgHoverGradientColor,
        accordionBgHoverCustomGradientSwitcher,
        accordionBgHoverCustomGradientInputValue,
        accordionBgHoverImageUrl,
        accordionBgHoverImageAlt,
        accordionBgHoverImageID,
        accordionBgHoverImagePosition,
        accordionBgHoverImageAttachment,
        accordionBgHoverImageRepeat,
        accordionBgHoverImageSize,

        // Item Box Shadow
        accordionItemBoxShadowValues,
        accordionItemBoxShadowCssValue,

        // Item Backgorund
        titleBgColorSwitcher,
        titleBgType,
        titleBgClassicColor,
        titleBgGradientColor,
        titleBgCustomGradientSwitcher,
        titleBgCustomGradientInputValue,
        titleBgImageUrl,
        titleBgImageAlt,
        titleBgImageID,
        titleBgImagePosition,
        titleBgImageAttachment,
        titleBgImageRepeat,
        titleBgImageSize,
        titleBgHoverType,
        titleBgHoverClassicColor,
        titleBgHoverGradientColor,
        titleBgHoverCustomGradientSwitcher,
        titleBgHoverCustomGradientInputValue,
        titleBgHoverImageUrl,
        titleBgHoverImageAlt,
        titleBgHoverImageID,
        titleBgHoverImagePosition,
        titleBgHoverImageAttachment,
        titleBgHoverImageRepeat,
        titleBgHoverImageSize,

        // Accordion Item Content
        contentBorder,
        contentBorderColor,
        contentBorderHoverColor,
        contentBorderColorSwitcher,
        contentBorderUnits,
        contentDesktopBorderWidth,
        contentTabBorderWidth,
        contentMobileBorderWidth,
        contentBorderLink,
        contentBorderRadiusUnits,
        contentDesktopBorderRadiusWidth,
        contentTabBorderRadiusWidth,
        contentMobileBorderRadiusWidth,
        contentBorderRadiusLink,
        contentDesktopSwitcher,
        contentTabletSwitcher,
        contentMobileSwitcher,

        // Item Box Shadow
        contentBoxShadowValues,
        contentBoxShadowCssValue,

        // Item Backgorund
        contentBgColorSwitcher,
        contentBgType,
        contentBgClassicColor,
        contentBgGradientColor,
        contentBgCustomGradientSwitcher,
        contentBgCustomGradientInputValue,
        contentBgImageUrl,
        contentBgImageAlt,
        contentBgImageID,
        contentBgImagePosition,
        contentBgImageAttachment,
        contentBgImageRepeat,
        contentBgImageSize,
        contentBgHoverType,
        contentBgHoverClassicColor,
        contentBgHoverGradientColor,
        contentBgHoverCustomGradientSwitcher,
        contentBgHoverCustomGradientInputValue,
        contentBgHoverImageUrl,
        contentBgHoverImageAlt,
        contentBgHoverImageID,
        contentBgHoverImagePosition,
        contentBgHoverImageAttachment,
        contentBgHoverImageRepeat,
        contentBgHoverImageSize,
    } = attributes;


    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-accordion-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];

        const innerBlocks = parentBlocks?.innerBlocks;

        const { updateBlockAttributes } = dispatch("core/block-editor");

        if (innerBlocks) {
            innerBlocks.length, (n) => {
                updateBlockAttributes(innerBlocks[n].clientId, {
                    inheritedAccordionType: accordionType,
                    inheritedDisplayIcon: displayIcon,
                    inheritedTabIcon: tabIcon,
                    inheritedExpandedIcon: expandedIcon,
                    inheritedTagName: tagName,
                    faqSchema: faqSchema,
                });
            };
        }
    }, [accordionType, displayIcon, tabIcon, expandedIcon, tagName, faqSchema]);


    /** Title Color */
    const handleTitleColorSwitcherChange = (value) => {
        setAttributes({ titleColorSwitcher: value });
    };
    const handleTitleColorChange = (value) => {
        setAttributes({ titleColor: value });
    };
    const handleTitleHoverColorChange = (value) => {
        setAttributes({ titleHoverColor: value });
    };

    /** Title Backgorund Color */
    const handleTitleBGColorSwitcherChange = (value) => {
        setAttributes({ titleBGColorSwitcher: value });
    };
    const handleTitleBGColorChange = (value) => {
        setAttributes({ titleBGColor: value });
    };
    const handleTitleBGHoverColorChange = (value) => {
        setAttributes({ titleBGHoverColor: value });
    };

    /** Item Icon Color */
    const handleTitleIconColorSwitcherChange = (value) => {
        setAttributes({ titleIconColorSwitcher: value });
    };
    const handleTitleIconColorChange = (value) => {
        setAttributes({ titleIconColor: value });
    };
    const handleTitleIconHoverColorChange = (value) => {
        setAttributes({ titleIconHoverColor: value });
    };



    /** Start Accordions Gap */
    const accordionItemGapHandler = (value) => {
        setAttributes({ accordionItemGap: value });
    };

    const accordionItemGapUnitsHandler = (value) => {
        setAttributes({ accordionItemGapUnits: value });
    };

    /** Start Title Spacing */
    const titleSpacingHandler = (value) => {
        setAttributes({ titleSpacing: value });
    };

    const titleSpacingUnitsHandler = (value) => {
        setAttributes({ titleSpacingUnits: value });
    };

    /** Start Prefix Suffix Spacing */
    const prefixSuffixSpacingHandler = (value) => {
        setAttributes({ prefixSuffixSpacing: value });
    };

    const prefixSuffixSpacingUnitsHandler = (value) => {
        setAttributes({ prefixSuffixSpacingUnits: value });
    };


    /** Start Title Suffix Icon Size */
    const titleSuffixIconSizeHandler = (value) => {
        setAttributes({ titleSuffixIconSize: value });
    };

    const titleSuffixIconSizeUnitsHandler = (value) => {
        setAttributes({ titleSuffixIconSizeUnits: value });
    };


    /** Start Title Suffix Icon Size */
    const titleIconSizeHandler = (value) => {
        setAttributes({ titleIconSize: value });
    };

    const titleIconSizeUnitsHandler = (value) => {
        setAttributes({ titleIconSizeUnits: value });
    };

    /** Start Title Suffix Icon Size */
    const titlePrefixIconSizeHandler = (value) => {
        setAttributes({ titlePrefixIconSize: value });
    };

    const titlePrefixIconSizeUnitsHandler = (value) => {
        setAttributes({ titlePrefixIconSizeUnits: value });
    };


    // FB_Icon function
    const titleTabIconHandler = (value) => {
		setAttributes({tabIcon: value})
	}
    const titleExpandedIconHandler = (value) => {
		setAttributes({expandedIcon: value})
	}


    // FB_Color for accordion content BG
    const accordionBGColorSwitcherChange = (value) => {
        setAttributes({ accordionBgColorSwitcher: value });
    };
    const accordionBGColorChange = (value) => {
        setAttributes({ accordionBgColor: value });
    };
    const accordionBGHoverColorChange = (value) => {
        setAttributes({ accordionBgHoverColor: value });
    };

    // FB_Color for accordion Border
    const accordionBorderColorSwitcherChange = (value) => {
        setAttributes({ accordionBorderColorSwitcher: value });
    };
    const accordionBorderColorChange = (value) => {
        setAttributes({ accordionBorderColor: value });
    };
    const accordionBorderHoverColorChange = (value) => {
        setAttributes({ accordionBorderHoverColor: value });
    };


    // FB_Color for accordionItems Border
    const accordionItemsBorderColorSwitcherChange = (value) => {
        setAttributes({ accordionItemsBorderColorSwitcher: value });
    };
    const accordionItemsBorderColorChange = (value) => {
        setAttributes({ accordionItemsBorderColor: value });
    };
    const accordionItemsBorderHoverColorChange = (value) => {
        setAttributes({ accordionItemsBorderHoverColor: value });
    };	

    // accordionItems Padding Functionb
    const handleAccordionItemsPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionItemsPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionItemsDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionItemsTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionItemsMobilePadding: {
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
                    setAttributes( {accordionItemsDesktopPadding: {...accordionItemsDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionItemsTabPadding: {...accordionItemsTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionItemsMobilePadding: {...accordionItemsMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionItemsPaddingCombineBtn = () => {
        setAttributes( {accordionItemsPaddingLink: !accordionItemsPaddingLink} );
    }

    const handleAccordionItemsPaddingUnitsHandler = (unit) => {
        setAttributes( {
            accordionItemsPaddingUnits: {
                ...accordionItemsPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    
    // accordionItems BorderWidth Function
    const handleAccordionItemsBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionItemsBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionItemsDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionItemsTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionItemsMobileBorderWidth: {
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
                    setAttributes( {accordionItemsDesktopBorderWidth: {...accordionItemsDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionItemsTabBorderWidth: {...accordionItemsTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionItemsMobileBorderWidth: {...accordionItemsMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionItemsBorderCombineBtn = () => {
        setAttributes( {accordionItemsBorderLink: !accordionItemsBorderLink} );
    }

    const handleAccordionItemsBorderUnitsHandler = (unit) => {
        setAttributes( {
            accordionItemsBorderUnits: {
                ...accordionItemsBorderUnits,
                [deviceType]: unit
            }
        })
    }

    

    // accordionItems BorderRadiusWidth Function
    const handleAccordionItemsBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionItemsBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionItemsDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionItemsTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionItemsMobileBorderRadiusWidth: {
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
                    setAttributes( {accordionItemsDesktopBorderRadiusWidth: {...accordionItemsDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionItemsTabBorderRadiusWidth: {...accordionItemsTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionItemsMobileBorderRadiusWidth: {...accordionItemsMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionItemsBorderRadiusCombineBtn = () => {
        setAttributes( {accordionItemsBorderRadiusLink: !accordionItemsBorderRadiusLink} );
    }

    const handleAccordionItemsBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            accordionItemsBorderRadiusUnits: {
                ...accordionItemsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

      


    // accordion content margin
    const handleAccordionMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionMobileMargin: {
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
                    setAttributes( {accordionDesktopMargin: {...accordionDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionTabMargin: {...accordionTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionMobileMargin: {...accordionMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionMarginCombineBtn = () => {
        setAttributes( {accordionMarginLink: !accordionMarginLink} );
    }

    const handleAccordionMarginUnitsHandler = (unit) => {
        setAttributes( {
            accordionMarginUnits: {
                ...accordionMarginUnits,
                [deviceType]: unit
            }
        })
    }

    

    // accordion Padding Functionb
    const handleAccordionPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionMobilePadding: {
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
                    setAttributes( {accordionDesktopPadding: {...accordionDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionTabPadding: {...accordionTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionMobilePadding: {...accordionMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionPaddingCombineBtn = () => {
        setAttributes( {accordionPaddingLink: !accordionPaddingLink} );
    }

    const handleAccordionPaddingUnitsHandler = (unit) => {
        setAttributes( {
            accordionPaddingUnits: {
                ...accordionPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    

    // accordion BorderWidth Function
    const handleAccordionBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionMobileBorderWidth: {
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
                    setAttributes( {accordionDesktopBorderWidth: {...accordionDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionTabBorderWidth: {...accordionTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionMobileBorderWidth: {...accordionMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionBorderCombineBtn = () => {
        setAttributes( {accordionBorderLink: !accordionBorderLink} );
    }

    const handleAccordionBorderUnitsHandler = (unit) => {
        setAttributes( {
            accordionBorderUnits: {
                ...accordionBorderUnits,
                [deviceType]: unit
            }
        })
    }

    

    // accordion BorderRadiusWidth Function
    const handleAccordionBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( accordionBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        accordionDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        accordionTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        accordionMobileBorderRadiusWidth: {
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
                    setAttributes( {accordionDesktopBorderRadiusWidth: {...accordionDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {accordionTabBorderRadiusWidth: {...accordionTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {accordionMobileBorderRadiusWidth: {...accordionMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionBorderRadiusCombineBtn = () => {
        setAttributes( {accordionBorderRadiusLink: !accordionBorderRadiusLink} );
    }

    const handleAccordionBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            accordionBorderRadiusUnits: {
                ...accordionBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderWidth Function
    const handleContentBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( contentBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        contentDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        contentTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        contentMobileBorderWidth: {
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
                    setAttributes( {contentDesktopBorderWidth: {...contentDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {contentTabBorderWidth: {...contentTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {contentMobileBorderWidth: {...contentMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleContentBorderCombineBtn = () => {
        setAttributes( {contentBorderLink: !contentBorderLink} );
    }

    const handleContentBorderUnitsHandler = (unit) => {
        setAttributes( {
            contentBorderUnits: {
                ...contentBorderUnits,
                [deviceType]: unit
            }
        })
    }


    // content BorderRadiusWidth Function
    const handleContentBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( contentBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        contentDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        contentTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        contentMobileBorderRadiusWidth: {
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
                    setAttributes( {contentDesktopBorderRadiusWidth: {...contentDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {contentTabBorderRadiusWidth: {...contentTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {contentMobileBorderRadiusWidth: {...contentMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleContentBorderRadiusCombineBtn = () => {
        setAttributes( {contentBorderRadiusLink: !contentBorderRadiusLink} );
    }

    const handleContentBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            contentBorderRadiusUnits: {
                ...contentBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    
    // FB_Color for content Border
    const contentBorderColorSwitcherChange = (value) => {
        setAttributes({ contentBorderColorSwitcher: value });
    };
    const contentBorderColorChange = (value) => {
        setAttributes({ contentBorderColor: value });
    };
    const contentBorderHoverColorChange = (value) => {
        setAttributes({ contentBorderHoverColor: value });
    };
    

    return (
        <>

            {/* <style>
            {`
                .fb-accordion-main-wrapper.${blockID} {
                    z-index: ${accordionIconZIndex !== undefined ? accordionIconZIndex : ''};
                }
                .fb-accordion-wrapper {
                    ${accordionGlobalBgColor !== undefined ? `background-color: ${accordionGlobalBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${accordionBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${accordionBorderColor !== undefined ? `border-color: ${accordionBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .fb-accordion-wrapper:hover {
                    ${accordionGlobalBgHoverColor !== undefined ? `background-color: ${accordionGlobalBgHoverColor};` : ''};
                    ${accordionBorderHoverColor !== undefined ? `border-color: ${accordionBorderHoverColor};` : ''};
                }
                .fb-accordions {
                    column-gap: ${accordionIconGapSize.Desktop}${accordionIconGapUnits.Desktop};
                    justify-content: ${accordionAlignment};
                }
                .fb-accordion-list-item a {
                    width: ${accordionIconSize.Desktop}${accordionIconSizeUnits.Desktop};
                    height: ${accordionIconSize.Desktop}${accordionIconSizeUnits.Desktop};
                    padding: ${IconPaddingDesktop};
                    background-color: ${accordionBgColor};
                    border: ${accordionIconBorder};
                    border-width: ${IconBorderDesktopWidth};
                    border-radius: ${IconBorderRadiusDesktopWidth} !important;
                    ${accordionIconBorderColor !== undefined ? `border-color: ${accordionIconBorderColor};` : ''};
                }
                .fb-accordion-list-item a:hover {
                    background-color: ${accordionBgHoverColor};
                    ${accordionIconBorderHoverColor !== undefined ? `border-color: ${accordionIconBorderHoverColor};` : ''};
                }
                .fb-accordion-list-item a svg{
                    fill: ${accordionIconColor};
                }
                .fb-accordion-list-item a:hover svg{
                    fill: ${accordionIconHoverColor};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-accordion-wrapper {
                        padding: ${TabletPadding};
                        margin: ${TabletMargin};
                        border-width: ${BorderTabletWidth};
                        border-radius: ${BorderRadiusTabletWidth} !important;
                    }
                    .fb-accordions {
                        column-gap: ${accordionIconGapSize.Tablet}${accordionIconGapUnits.Tablet};
                    }
                    .fb-accordion-list-item a {
                        width: ${accordionIconSize.Tablet}${accordionIconSizeUnits.Tablet};
                        height: ${accordionIconSize.Tablet}${accordionIconSizeUnits.Tablet};
                        padding: ${IconPaddingTablet};
                        border-width: ${IconBorderTabletWidth};
                        border-radius: ${IconBorderRadiusTabletWidth} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-accordion-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${BorderMobileWidth};
                        border-radius: ${BorderRadiusMobileWidth} !important;
                    }
                    .fb-accordions {
                        column-gap: ${accordionIconGapSize.Mobile}${accordionIconGapUnits.Mobile};
                    }
                    .fb-accordion-list-item a {
                        width: ${accordionIconSize.Mobile}${accordionIconSizeUnits.Mobile};
                        height: ${accordionIconSize.Mobile}${accordionIconSizeUnits.Mobile};
                        padding: ${IconPaddingMobile};
                        border-width: ${IconBorderMobileWidth};
                        border-radius: ${IconBorderRadiusMobileWidth} !important;
                    }
                }

            `}
            </style> */}
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
                                   <PanelBody initialOpen={true}>
                                       <FB_HtmlTagControl
                                            label={__("Accordion Items Title Tag", "frontis-blocks")}
                                            globalHtmlTag={tagName}
                                            setGlobalHtmlTag={(value) => setAttributes({ tagName: value })}
                                        />

                                       <FB_Range
                                            min={1}
                                            max={100}
                                            label={__("Accordion Gap", "frontis-blocks")}
                                            rangeValue={accordionItemGap}
                                            onChangeHandler={accordionItemGapHandler}
                                            rangeUnitHandler={accordionItemGapUnitsHandler}
                                            deviceType={deviceType}
                                            units={accordionItemGapUnits}
                                            setAttributes={setAttributes}
                                            rangeStep={1}
                                            resetFallbackValue={20}
                                        />
                                   </PanelBody>
                               </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Items Icon", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            <ToggleControl
                                                label={__(
                                                    "Display Icon",
                                                    "frontis-blocks"
                                                )}
                                                checked={displayIcon}
                                                onChange={() =>
                                                    setAttributes({
                                                        displayIcon: !displayIcon,
                                                    })
                                                }
                                            />
                                            {displayIcon && (
                                                <>
                                                    <BaseControl
                                                        label={__("Tab Icon", "frontis-blocks")}
                                                    >
                                                        <div className="fb-setting-switcher-container">
                                                            <BaseControl
                                                                className="fb-setting-switcher-panel-wrapper"
                                                            >
                                                                <ButtonGroup className="fb-setting-switcher-panel-btn">
                                                                    {ICON_SWITCHER.map((item, key) => (
                                                                        <Button
                                                                            key={key}
                                                                            onClick={() => setAttributes({ tabIconSwitcher: item.value })} 
                                                                            className={`fb-setting-switcher-panel-btn-switcher ${tabIconSwitcher === item.value ? 'active' : ''}`}
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </BaseControl>
                                                        </div>
                                                        { tabIconSwitcher === 'icon' &&
                                                            <FBIconPicker
                                                                value={tabIcon} 
                                                                setIconHandler={titleTabIconHandler} 
                                                            />
                                                        }
                                                        { tabIconSwitcher === 'image' &&
                                                            <FB_ImageControl
                                                                globalBackgroundImageUrl={tabImageUrl}
                                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ tabImageUrl: value })}
                                                                globalBackgroundImageAlt={tabImageAlt}
                                                                setGlobalBackgroundImageAlt={(value) => setAttributes({ tabImageAlt: value })}
                                                                globalBackgroundImageID={tabImageID}
                                                                setGlobalBackgroundImageID={(value) => setAttributes({ tabImageID: value })}
                                                                globalBackgroundImagePosition={tabImagePosition}
                                                                setGlobalBackgroundImagePosition={(value) => setAttributes({ tabImagePosition: value })}
                                                                globalBackgroundImageAttachment={tabImageAttachment} 
                                                                setGlobalBackgroundImageAttachment={(value) => setAttributes({ tabImageAttachment: value })}
                                                                globalBackgroundImageRepeat={tabImageRepeat}
                                                                setGlobalBackgroundImageRepeat={(value) => setAttributes({ tabImageRepeat: value })}
                                                                globalBackgroundImageSize={tabImageSize}
                                                                setGlobalBackgroundImageSize={(value) => setAttributes({ tabImageSize: value })}
                                                            />
                                                        }
                                                    </BaseControl>

                                                    <BaseControl
                                                        label={__("Expanded Icon", "frontis-blocks")}
                                                    >
                                                        <div className="fb-setting-switcher-container">
                                                            <BaseControl
                                                                className="fb-setting-switcher-panel-wrapper"
                                                            >
                                                                <ButtonGroup className="fb-setting-switcher-panel-btn">
                                                                    {ICON_SWITCHER.map((item, key) => (
                                                                        <Button
                                                                            key={key}
                                                                            onClick={() => setAttributes({ expandedIconSwitcher: item.value })} 
                                                                            className={`fb-setting-switcher-panel-btn-switcher ${expandedIconSwitcher === item.value ? 'active' : ''}`}
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </BaseControl>
                                                        </div>
                                                        { expandedIconSwitcher === 'icon' &&
                                                            <FBIconPicker
                                                                value={expandedIcon} 
                                                                setIconHandler={titleExpandedIconHandler} 
                                                            />
                                                        }
                                                        { expandedIconSwitcher === 'image' &&
                                                            <FB_ImageControl 
                                                                globalBackgroundImageUrl={expandedImageUrl}
                                                                setGlobalBackgroundImageUrl={(value) => setAttributes({ expandedImageUrl: value })}
                                                                globalBackgroundImageAlt={expandedImageAlt}
                                                                setGlobalBackgroundImageAlt={(value) => setAttributes({ expandedImageAlt: value })}
                                                                globalBackgroundImageID={expandedImageID}
                                                                setGlobalBackgroundImageID={(value) => setAttributes({ expandedImageID: value })}
                                                                globalBackgroundImagePosition={expandedImagePosition}
                                                                setGlobalBackgroundImagePosition={(value) => setAttributes({ expandedImagePosition: value })}
                                                                globalBackgroundImageAttachment={expandedImageAttachment} 
                                                                setGlobalBackgroundImageAttachment={(value) => setAttributes({ expandedImageAttachment: value })}
                                                                globalBackgroundImageRepeat={expandedImageRepeat}
                                                                setGlobalBackgroundImageRepeat={(value) => setAttributes({ expandedImageRepeat: value })}
                                                                globalBackgroundImageSize={expandedImageSize}
                                                                setGlobalBackgroundImageSize={(value) => setAttributes({ expandedImageSize: value })}
                                                            />
                                                        }
                                                    </BaseControl>

                                                    <FB_Range
                                                        min={1}
                                                        max={100}
                                                        label={__("Icon Size", "frontis-blocks")}
                                                        rangeValue={titleIconSize}
                                                        onChangeHandler={titleIconSizeHandler}
                                                        rangeUnitHandler={titleIconSizeUnitsHandler}
                                                        deviceType={deviceType}
                                                        units={titleIconSizeUnits}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={22}
                                                    />

                                                    <BaseControl
                                                        label={__(
                                                            "Icon Position",
                                                            "frontis-blocks"
                                                        )}
                                                        id="fb-setting-text-alignment"
                                                        className="fb-setting-text-alignment"
                                                    >
                                                        <ButtonGroup className="fb-setting-text-alignment-group-btn">
                                                            {ICON_POSITIONS.map((item) => (
                                                                <Button
                                                                    key={item.value}
                                                                    onClick={() => setAttributes({ iconPosition: item.value })}
                                                                    className={`fb-setting-text-alignment-single-btn ${iconPosition === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </BaseControl>

                                                    <FB_Range
                                                        min={1}
                                                        max={100}
                                                        label={__("Spacing", "frontis-blocks")}
                                                        rangeValue={titleSpacing}
                                                        onChangeHandler={titleSpacingHandler}
                                                        rangeUnitHandler={titleSpacingUnitsHandler}
                                                        deviceType={deviceType}
                                                        units={titleSpacingUnits}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={20}
                                                    />
                    
                                                    <FB_Color
                                                        label={__("Icon Color", "frontis-blocks")}
                                                        globalColorSwitcher={titleIconColorSwitcher}
                                                        globalColor={titleIconColor}
                                                        globalHoverColor={titleIconHoverColor}
                                                        handleColorSwitcherChange={handleTitleIconColorSwitcherChange}
                                                        handleGlobalColorChange={handleTitleIconColorChange}
                                                        handleGlobalHoverColorChange={handleTitleIconHoverColorChange}
                                                    />
                                                </>
                                            )}
                                        </PanelBody>
                    
                                        <PanelBody
                                            title={__("Items Title", "frontis-blocks")}
                                            initialOpen={false}
                                        >
                                            <BaseControl
                                                label={__(
                                                    "Title Align ",
                                                    "frontis-blocks"
                                                )}
                                                id="fb-setting-text-alignment"
                                                className="fb-setting-text-alignment"
                                            >
                                                <ButtonGroup className="fb-setting-text-alignment-group-btn">
                                                    {TITLE_ALIGNMENT.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ titleAlignment: item.value })}
                                                            className={`fb-setting-text-alignment-single-btn ${titleAlignment === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>
                    
                                            <FB_TypographyControl
                                                fontFamily={titleFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ titleFontFamily: value })}
                                                    
                                                    fontSize={titleFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ titleFontSize: value })}
                                                    
                                                    fontSizeUnits={titleFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ titleFontSizeUnits: value })}
                                                    
                                                    fontWeight={titleFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ titleFontWeight: value })}
                                                    
                                                    fontStyle={titleFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ titleFontStyle: value })}
                                                    
                                                    textTransform={titleTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ titleTextTransform: value })}
                                                    
                                                    textDecoration={titleTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ titleTextDecoration: value })}
                                                    
                                                    letterSpacing={titleLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ titleLetterSpacing: value })}
                                                    
                                                    letterSpacingUnits={titleLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ titleLetterSpacingUnits: value })}
                                                    
                                                    lineHeight={titleLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ titleLineHeight: value })}
                                                    
                                                    lineHeightUnits={titleLineHeightUnits}
                                                    onChangeLineHeightUnit={(value) => setAttributes({ titleLineHeightUnits: value })}
                                                    
                                                    deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Color
                                                label={__("Text Color", "frontis-blocks")}
                                                globalColorSwitcher={titleColorSwitcher}
                                                globalColor={titleColor}
                                                globalHoverColor={titleHoverColor}
                                                handleColorSwitcherChange={handleTitleColorSwitcherChange}
                                                handleGlobalColorChange={handleTitleColorChange}
                                                handleGlobalHoverColorChange={handleTitleHoverColorChange}
                                            />

                                            <FB_BackgroundColorControl
                                                label={__("Background Color", "frontis-blocks")}
														bgColorSwitcher={titleBgColorSwitcher}
														setBgColorSwitcher={(value) =>
															setAttributes({ titleBgColorSwitcher: value })
														}
														normalBackgroundType={titleBgType}
														setNormalBackgroundType={(value) =>
															setAttributes({ titleBgType: value })
														}
														normalClassicColor={titleBgClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ titleBgClassicColor: value })
														}
														normalGradientColor={titleBgGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ titleBgGradientColor: value })
														}
														normalCustomGradientSwitcher={
															titleBgCustomGradientSwitcher
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																titleBgCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={
															titleBgCustomGradientInputValue
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																titleBgCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={titleBgImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ titleBgImageUrl: value })
														}
														normalBackgroundImageAlt={titleBgImageAlt}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({ titleBgImageAlt: value })
														}
														normalBackgroundImageID={titleBgImageID}
														setNormalBackgroundImageID={(value) =>
															setAttributes({ titleBgImageID: value })
														}
														normalBackgroundImagePosition={
															titleBgImagePosition
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																titleBgImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={
															titleBgImageAttachment
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																titleBgImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={
															titleBgImageRepeat
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																titleBgImageRepeat: value,
															})
														}
														normalBackgroundImageSize={titleBgImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ titleBgImageSize: value })
														}
														hoverBackgroundType={titleBgHoverType}
														setBgHoverType={(value) =>
															setAttributes({ titleBgHoverType: value })
														}
														hoverClassicColor={titleBgHoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ titleBgHoverClassicColor: value })
														}
														hoverGradientColor={titleBgHoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ titleBgHoverGradientColor: value })
														}
														hoverCustomGradientSwitcher={
															titleBgHoverCustomGradientSwitcher
														}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({
																titleBgHoverCustomGradientSwitcher: value,
															})
														}
														hoverCustomGradientInputValue={
															titleBgHoverCustomGradientInputValue
														}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({
																titleBgHoverCustomGradientInputValue: value,
															})
														}
														hoverBackgroundImageUrl={titleBgHoverImageUrl}
														setBgHoverImageUrl={(value) =>
															setAttributes({ titleBgHoverImageUrl: value })
														}
														hoverBackgroundImageAlt={titleBgHoverImageAlt}
														setBgHoverImageAlt={(value) =>
															setAttributes({ titleBgHoverImageAlt: value })
														}
														hoverBackgroundImageID={titleBgHoverImageID}
														setBgHoverImageID={(value) =>
															setAttributes({ titleBgHoverImageID: value })
														}
														hoverBackgroundImagePosition={
															titleBgHoverImagePosition
														}
														setBgHoverImagePosition={(value) =>
															setAttributes({
																titleBgHoverImagePosition: value,
															})
														}
														hoverBackgroundImageAttachment={
															titleBgHoverImageAttachment
														}
														setBgHoverImageAttachment={(value) =>
															setAttributes({
																titleBgHoverImageAttachment: value,
															})
														}
														hoverBackgroundImageRepeat={
															titleBgHoverImageRepeat
														}
														setBgHoverImageRepeat={(value) =>
															setAttributes({
																titleBgHoverImageRepeat: value,
															})
														}
														hoverBackgroundImageSize={titleBgHoverImageSize}
														setBgHoverImageSize={(value) =>
															setAttributes({ titleBgHoverImageSize: value })
														}
											/>
                                           
                                            <FB_Range
                                                min={1}
                                                max={100}
                                                label={__("Spacing", "frontis-blocks")}
                                                rangeValue={prefixSuffixSpacing}
                                                onChangeHandler={prefixSuffixSpacingHandler}
                                                rangeUnitHandler={prefixSuffixSpacingUnitsHandler}
                                                deviceType={deviceType}
                                                units={prefixSuffixSpacingUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={20}
                                            />

                                            <PanelBody
                                                title={__("Title Prefix", "frontis-blocks")}
                                                initialOpen={false}
                                            >
                                                <FB_Range
                                                    min={1}
                                                    max={100}
                                                    label={__("Icon Size", "frontis-blocks")}
                                                    rangeValue={titlePrefixIconSize}
                                                    onChangeHandler={titlePrefixIconSizeHandler}
                                                    rangeUnitHandler={titlePrefixIconSizeUnitsHandler}
                                                    deviceType={deviceType}
                                                    units={titlePrefixIconSizeUnits}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={20}
                                                />
                                            </PanelBody>
                                            
                                            <PanelBody
                                                title={__("Title Suffix", "frontis-blocks")}
                                                initialOpen={false}
                                            >
                                                <FB_Range
                                                    min={1}
                                                    max={100}
                                                    label={__("Icon Size", "frontis-blocks")}
                                                    rangeValue={titleSuffixIconSize}
                                                    onChangeHandler={titleSuffixIconSizeHandler}
                                                    rangeUnitHandler={titleSuffixIconSizeUnitsHandler}
                                                    deviceType={deviceType}
                                                    units={titleSuffixIconSizeUnits}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={20}
                                                />
                                            </PanelBody>
                                        </PanelBody>
                    
                                        <PanelBody
                                            title={__(
                                                "Items Title Spacing",
                                                "frontis-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleAccordionItemsPaddingUnitsHandler}
                                                spacingUnits={accordionItemsPaddingUnits}
                                                spacingDesktop={accordionItemsDesktopPadding}
                                                spacingTablet={accordionItemsTabPadding}
                                                spacingMobile={accordionItemsMobilePadding}
                                                handleSpacingUnitHandler={handleAccordionItemsPaddingUnitChange}
                                                spacingCombineBtn={accordionItemsPaddingLink}
                                                spacingCombineBtnHandler={handleAccordionItemsPaddingCombineBtn}
                                                setAttributes={setAttributes}
                                            /> 
                                        </PanelBody>

                                        <PanelBody
                                            title={__(
                                                "Items Title Border & Radius",
                                                "frontis-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                                    <SelectControl
                                                        label={__("Border Style", "frontis-blocks")}
                                                        value={accordionItemsBorder}
                                                        options={BORDER_STYLES}
                                                        onChange={(value) => setAttributes({ accordionItemsBorder: value })}
                                                    />
        
                                                    <FB_Color
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalColorSwitcher={accordionItemsBorderColorSwitcher}
                                                        globalColor={accordionItemsBorderColor}
                                                        globalHoverColor={accordionItemsBorderHoverColor}
                                                        handleColorSwitcherChange={accordionItemsBorderColorSwitcherChange}
                                                        handleGlobalColorChange={accordionItemsBorderColorChange}
                                                        handleGlobalHoverColorChange={accordionItemsBorderHoverColorChange}
                                                    />
        
                                                    <FB_Spacing 
                                                        label={__("Border Width", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleAccordionItemsBorderUnitsHandler}
                                                        spacingUnits={accordionItemsBorderUnits}
                                                        spacingDesktop={accordionItemsDesktopBorderWidth}
                                                        spacingTablet={accordionItemsTabBorderWidth}
                                                        spacingMobile={accordionItemsMobileBorderWidth}
                                                        handleSpacingUnitHandler={handleAccordionItemsBorderUnitChange}
                                                        spacingCombineBtn={accordionItemsBorderLink}
                                                        spacingCombineBtnHandler={handleAccordionItemsBorderCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
        
                                                    <FB_Spacing 
                                                        label={__("Border Radius Width", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleAccordionItemsBorderRadiusUnitsHandler}
                                                        spacingUnits={accordionItemsBorderRadiusUnits}
                                                        spacingDesktop={accordionItemsDesktopBorderRadiusWidth}
                                                        spacingTablet={accordionItemsTabBorderRadiusWidth}
                                                        spacingMobile={accordionItemsMobileBorderRadiusWidth}
                                                        handleSpacingUnitHandler={handleAccordionItemsBorderRadiusUnitChange}
                                                        spacingCombineBtn={accordionItemsBorderRadiusLink}
                                                        spacingCombineBtnHandler={handleAccordionItemsBorderRadiusCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_BoxShadowControl
														onBoxShadowChange={(value) =>
															setAttributes({ accordionItemBoxShadowValues: value })
														}
														initialShadowValue={accordionItemBoxShadowValues}
														onBoxShadowStyleChange={(value) =>
															setAttributes({
																accordionItemBoxShadowCssValue: value,
															})
														}
													/>
                                        </PanelBody>

                                        <PanelBody title="Item Content" initialOpen={false} >
                                            <FB_BackgroundColorControl
														bgColorSwitcher={contentBgColorSwitcher}
														setBgColorSwitcher={(value) =>
															setAttributes({ contentBgColorSwitcher: value })
														}
														normalBackgroundType={contentBgType}
														setNormalBackgroundType={(value) =>
															setAttributes({ contentBgType: value })
														}
														normalClassicColor={contentBgClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ contentBgClassicColor: value })
														}
														normalGradientColor={contentBgGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ contentBgGradientColor: value })
														}
														normalCustomGradientSwitcher={
															contentBgCustomGradientSwitcher
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																contentBgCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={
															contentBgCustomGradientInputValue
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																contentBgCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={contentBgImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ contentBgImageUrl: value })
														}
														normalBackgroundImageAlt={contentBgImageAlt}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({ contentBgImageAlt: value })
														}
														normalBackgroundImageID={contentBgImageID}
														setNormalBackgroundImageID={(value) =>
															setAttributes({ contentBgImageID: value })
														}
														normalBackgroundImagePosition={
															contentBgImagePosition
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																contentBgImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={
															contentBgImageAttachment
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																contentBgImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={
															contentBgImageRepeat
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																contentBgImageRepeat: value,
															})
														}
														normalBackgroundImageSize={contentBgImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ contentBgImageSize: value })
														}
														hoverBackgroundType={contentBgHoverType}
														setBgHoverType={(value) =>
															setAttributes({ contentBgHoverType: value })
														}
														hoverClassicColor={contentBgHoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ contentBgHoverClassicColor: value })
														}
														hoverGradientColor={contentBgHoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ contentBgHoverGradientColor: value })
														}
														hoverCustomGradientSwitcher={
															contentBgHoverCustomGradientSwitcher
														}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({
																contentBgHoverCustomGradientSwitcher: value,
															})
														}
														hoverCustomGradientInputValue={
															contentBgHoverCustomGradientInputValue
														}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({
																contentBgHoverCustomGradientInputValue: value,
															})
														}
														hoverBackgroundImageUrl={contentBgHoverImageUrl}
														setBgHoverImageUrl={(value) =>
															setAttributes({ contentBgHoverImageUrl: value })
														}
														hoverBackgroundImageAlt={contentBgHoverImageAlt}
														setBgHoverImageAlt={(value) =>
															setAttributes({ contentBgHoverImageAlt: value })
														}
														hoverBackgroundImageID={contentBgHoverImageID}
														setBgHoverImageID={(value) =>
															setAttributes({ contentBgHoverImageID: value })
														}
														hoverBackgroundImagePosition={
															contentBgHoverImagePosition
														}
														setBgHoverImagePosition={(value) =>
															setAttributes({
																contentBgHoverImagePosition: value,
															})
														}
														hoverBackgroundImageAttachment={
															contentBgHoverImageAttachment
														}
														setBgHoverImageAttachment={(value) =>
															setAttributes({
																contentBgHoverImageAttachment: value,
															})
														}
														hoverBackgroundImageRepeat={
															contentBgHoverImageRepeat
														}
														setBgHoverImageRepeat={(value) =>
															setAttributes({
																contentBgHoverImageRepeat: value,
															})
														}
														hoverBackgroundImageSize={contentBgHoverImageSize}
														setBgHoverImageSize={(value) =>
															setAttributes({ contentBgHoverImageSize: value })
														}
											/>

                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={contentBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ contentBorder: value })}
                                            />

                                            <FB_Color
                                                label={__("Border Color", "frontis-blocks")}
                                                globalColorSwitcher={contentBorderColorSwitcher}
                                                globalColor={contentBorderColor}
                                                globalHoverColor={contentBorderHoverColor}
                                                handleColorSwitcherChange={contentBorderColorSwitcherChange}
                                                handleGlobalColorChange={contentBorderColorChange}
                                                handleGlobalHoverColorChange={contentBorderHoverColorChange}
                                            />

                                            <FB_Spacing
                                                label={__("Border Width", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleContentBorderUnitsHandler}
                                                spacingUnits={contentBorderUnits}
                                                spacingDesktop={contentDesktopBorderWidth}
                                                spacingTablet={contentTabBorderWidth}
                                                spacingMobile={contentMobileBorderWidth}
                                                handleSpacingUnitHandler={handleContentBorderUnitChange}
                                                spacingCombineBtn={contentBorderLink}
                                                spacingCombineBtnHandler={handleContentBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing 
                                                label={__("Border Radius Width", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleContentBorderRadiusUnitsHandler}
                                                spacingUnits={contentBorderRadiusUnits}
                                                spacingDesktop={contentDesktopBorderRadiusWidth}
                                                spacingTablet={contentTabBorderRadiusWidth}
                                                spacingMobile={contentMobileBorderRadiusWidth}
                                                handleSpacingUnitHandler={handleContentBorderRadiusUnitChange}
                                                spacingCombineBtn={contentBorderRadiusLink}
                                                spacingCombineBtnHandler={handleContentBorderRadiusCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_BoxShadowControl
												onBoxShadowChange={(value) =>
													setAttributes({ contentBoxShadowValues: value })
												}
												initialShadowValue={contentBoxShadowValues}
												onBoxShadowStyleChange={(value) =>
													setAttributes({
														contentBoxShadowCssValue: value,
													})
												}
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
                                                    <FB_Range
                                                        min={0}
                                                        max={10000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={accordionZIndex}
                                                        onChangeHandler={(value) => setAttributes({ accordionZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
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
                                                        spacingUnitsHandler={handleAccordionMarginUnitsHandler}
                                                        spacingUnits={accordionMarginUnits}
                                                        spacingDesktop={accordionDesktopMargin}
                                                        spacingTablet={accordionTabMargin}
                                                        spacingMobile={accordionMobileMargin}
                                                        handleSpacingUnitHandler={handleAccordionMarginUnitChange}
                                                        spacingCombineBtn={accordionMarginLink}
                                                        spacingCombineBtnHandler={handleAccordionMarginCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
        
                                                    <FB_Spacing 
                                                        label={__("Padding", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleAccordionPaddingUnitsHandler}
                                                        spacingUnits={accordionPaddingUnits}
                                                        spacingDesktop={accordionDesktopPadding}
                                                        spacingTablet={accordionTabPadding}
                                                        spacingMobile={accordionMobilePadding}
                                                        handleSpacingUnitHandler={handleAccordionPaddingUnitChange}
                                                        spacingCombineBtn={accordionPaddingLink}
                                                        spacingCombineBtnHandler={handleAccordionPaddingCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />                                     
                                                </PanelBody>
        
                                                <PanelBody title="Background Color" initialOpen={false} >
                                                    <FB_BackgroundColorControl
														bgColorSwitcher={accordionBgColorSwitcher}
														setBgColorSwitcher={(value) =>
															setAttributes({ accordionBgColorSwitcher: value })
														}
														normalBackgroundType={accordionBgType}
														setNormalBackgroundType={(value) =>
															setAttributes({ accordionBgType: value })
														}
														normalClassicColor={accordionBgClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ accordionBgClassicColor: value })
														}
														normalGradientColor={accordionBgGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ accordionBgGradientColor: value })
														}
														normalCustomGradientSwitcher={accordionBgCustomGradientSwitcher}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																accordionBgCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={accordionBgCustomGradientInputValue}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																accordionBgCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={accordionBgImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ accordionBgImageUrl: value })
														}
														normalBackgroundImageAlt={accordionBgImageAlt}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({ accordionBgImageAlt: value })
														}
														normalBackgroundImageID={accordionBgImageID}
														setNormalBackgroundImageID={(value) =>
															setAttributes({ accordionBgImageID: value })
														}
														normalBackgroundImagePosition={accordionBgImagePosition}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																accordionBgImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={accordionBgImageAttachment}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																accordionBgImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={accordionBgImageRepeat}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																accordionBgImageRepeat: value,
															})
														}
														normalBackgroundImageSize={accordionBgImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ accordionBgImageSize: value })
														}
														hoverBackgroundType={accordionBgHoverType}
														setBgHoverType={(value) =>
															setAttributes({ accordionBgHoverType: value })
														}
														hoverClassicColor={accordionBgHoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ accordionBgHoverClassicColor: value })
														}
														hoverGradientColor={accordionBgHoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ accordionBgHoverGradientColor: value })
														}
														hoverCustomGradientSwitcher={accordionBgHoverCustomGradientSwitcher}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({
																accordionBgHoverCustomGradientSwitcher: value,
															})
														}
														hoverCustomGradientInputValue={accordionBgHoverCustomGradientInputValue}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({
																accordionBgHoverCustomGradientInputValue: value,
															})
														}
														hoverBackgroundImageUrl={accordionBgHoverImageUrl}
														setBgHoverImageUrl={(value) =>
															setAttributes({ accordionBgHoverImageUrl: value })
														}
														hoverBackgroundImageAlt={accordionBgHoverImageAlt}
														setBgHoverImageAlt={(value) =>
															setAttributes({ accordionBgHoverImageAlt: value })
														}
														hoverBackgroundImageID={accordionBgHoverImageID}
														setBgHoverImageID={(value) =>
															setAttributes({ accordionBgHoverImageID: value })
														}
														hoverBackgroundImagePosition={accordionBgHoverImagePosition}
														setBgHoverImagePosition={(value) =>
															setAttributes({
																accordionBgHoverImagePosition: value,
															})
														}
														hoverBackgroundImageAttachment={accordionBgHoverImageAttachment}
														setBgHoverImageAttachment={(value) =>
															setAttributes({
																accordionBgHoverImageAttachment: value,
															})
														}
														hoverBackgroundImageRepeat={accordionBgHoverImageRepeat}
														setBgHoverImageRepeat={(value) =>
															setAttributes({
																accordionBgHoverImageRepeat: value,
															})
														}
														hoverBackgroundImageSize={accordionBgHoverImageSize}
														setBgHoverImageSize={(value) =>
															setAttributes({ accordionBgHoverImageSize: value })
														}
													/>
                                                </PanelBody>
        
                                                <PanelBody
                                                    title={__("Border & Border radius", "frontis-blocks")}
                                                    initialOpen={false}
                                                    className="fb-setting-border-setting-wrapper"
                                                    >
                                                        <SelectControl
                                                            label={__("Border Style", "frontis-blocks")}
                                                            value={accordionBorder}
                                                            options={BORDER_STYLES}
                                                            onChange={(value) => setAttributes({ accordionBorder: value })}
                                                        />
        
                                                    <FB_Color
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalColorSwitcher={accordionBorderColorSwitcher}
                                                        globalColor={accordionBorderColor}
                                                        globalHoverColor={accordionBorderHoverColor}
                                                        handleColorSwitcherChange={accordionBorderColorSwitcherChange}
                                                        handleGlobalColorChange={accordionBorderColorChange}
                                                        handleGlobalHoverColorChange={accordionBorderHoverColorChange}
                                                    />
        
                                                    <FB_Spacing 
                                                        label={__("Border Width", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleAccordionBorderUnitsHandler}
                                                        spacingUnits={accordionBorderUnits}
                                                        spacingDesktop={accordionDesktopBorderWidth}
                                                        spacingTablet={accordionTabBorderWidth}
                                                        spacingMobile={accordionMobileBorderWidth}
                                                        handleSpacingUnitHandler={handleAccordionBorderUnitChange}
                                                        spacingCombineBtn={accordionBorderLink}
                                                        spacingCombineBtnHandler={handleAccordionBorderCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />
        
                                                    <FB_Spacing 
                                                        label={__("Border Radius Width", "frontis-blocks")}
                                                        deviceType={deviceType}
                                                        spacingUnitsHandler={handleAccordionBorderRadiusUnitsHandler}
                                                        spacingUnits={accordionBorderRadiusUnits}
                                                        spacingDesktop={accordionDesktopBorderRadiusWidth}
                                                        spacingTablet={accordionTabBorderRadiusWidth}
                                                        spacingMobile={accordionMobileBorderRadiusWidth}
                                                        handleSpacingUnitHandler={handleAccordionBorderRadiusUnitChange}
                                                        spacingCombineBtn={accordionBorderRadiusLink}
                                                        spacingCombineBtnHandler={handleAccordionBorderRadiusCombineBtn}
                                                        setAttributes={setAttributes}
                                                    />

                                                    <FB_BoxShadowControl
														onBoxShadowChange={(value) =>
															setAttributes({ accordionGlobalBoxShadowValues: value })
														}
														initialShadowValue={accordionGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) =>
															setAttributes({
																accordionGlobalBoxShadowCssValue: value,
															})
														}
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
                                                        checked={accordionDesktopSwitcher}
                                                        onChange={(value) => setAttributes({ accordionDesktopSwitcher: value })}
                                                    />
                                                    <ToggleControl
                                                        label={__("Hide on Tablet", "frontis-blocks")}
                                                        className="fb-setting-responsive-control"
                                                        checked={accordionTabletSwitcher}
                                                        onChange={(value) => setAttributes({ accordionTabletSwitcher: value })}
                                                    />
                                                    <ToggleControl
                                                        label={__("Hide on Mobile", "frontis-blocks")}
                                                        className="fb-setting-responsive-control"
                                                        checked={accordionMobileSwitcher}
                                                        onChange={(value) => setAttributes({ accordionMobileSwitcher: value })}
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