import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo, memo } from '@wordpress/element';
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
} from '@wordpress/components';

import { 
    BORDER_STYLES,
    TITLE_ALIGNMENT,
    ICON_POSITIONS,
    ICON_SWITCHER,
    OVERFLOW_OP,
    ACCORDIOAN_PRESETS
} from "@Constants/fbConstants";

import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';

import './editor.scss';
import FBIconPicker from '../../components/icon-picker';
import FB_TypographyControl from '../../components/typography-control';
import FB_BackgroundColorControl from '../../components/background-color-control';
import FB_BoxShadowControl from '../../components/box-shadow';
import FB_BackgroundImageControl from '../../components/background-image-control';
import FB_HtmlTagControl from '../../components/html-tag-control';
import FB_ColorControl from '../../components/color-control';
import FB_SwitcherControl from '../../components/switcher-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';
import { accordionPresets } from './preset';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        blockID,
        blockStyle,
        accordionAlignment,
        accordionIconZIndex,
        accordionItems,
        accordionPresetStyle,

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

        titleGlobalTypoSwitcher,
        titleGlobalTypographyData,
        titleGlobalTypoType,
        titleGlobalTypoOption,
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

        titleBgActiveColor,
        contentBgActiveColor,
        titleActiveColor,
        accordionItemsBorderActiveColor,
        accordionItemsContentBorderActiveColor,

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
        accordionOverflow,
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
        accordionGlobalBoxShadowSwitcher,
        accordionGlobalBoxShadowValues,
        accordionGlobalBoxShadowCssValue,
        accordionGlobalHoverBoxShadowValues,
        accordionGlobalHoverBoxShadowCssValue,

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
        accordionItemBoxShadowSwitcher,
        accordionItemBoxShadowValues,
        accordionItemBoxShadowCssValue,
        accordionItemHoverBoxShadowValues,
        accordionItemHoverBoxShadowCssValue,

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

        contentActiveBorderRadiusUnits,
        contentDesktopActiveBorderRadiusWidth,
        contentTabActiveBorderRadiusWidth,
        contentMobileActiveBorderRadiusWidth,
        contentActiveBorderRadiusLink,

        contentDesktopSwitcher,
        contentTabletSwitcher,
        contentMobileSwitcher,

        // Item Box Shadow
        contentBoxShadowSwitcher,
        contentBoxShadowValues,
        contentBoxShadowCssValue,
        contentHoverBoxShadowValues,
        contentHoverBoxShadowCssValue,

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

        accordionCustomCSS,
        accordionGlobalWraperID,
        accordionGlobalWraperClass,

        // Position
        accordionPositionType,
        accordionHZOrientationType,
        accordionVROrientationType,
        accordionHZLeftOffset,
        accordionHZLeftOffsetUnits,
        accordionHZRightOffset,
        accordionHZRightOffsetUnits,
        accordionVRTopOffset,
        accordionVRTopOffsetUnits,
        accordionVRBottomOffset,
        accordionVRBottomOffsetUnits,

    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        const parentBlocks = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];

        const innerBlocks = parentBlocks?.innerBlocks;

        const { updateBlockAttributes } = dispatch("core/block-editor");

        if (innerBlocks) {
            innerBlocks.forEach((block) => {
                updateBlockAttributes(block.clientId, {
                    inheritedAccordionType: accordionType,
                    inheritedDisplayIcon: displayIcon,
                    inheritedTabIcon: tabIcon,
                    inheritedExpandedIcon: expandedIcon,
                    inheritedTagName: tagName,
                    faqSchema: faqSchema,
                });
            });
        }
    }, [accordionType, displayIcon, tabIcon, expandedIcon, tagName, faqSchema]);

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
        setAttributes({ tabIcon: value })
    }
    const titleExpandedIconHandler = (value) => {
        setAttributes({ expandedIcon: value })
    }

    /**
     * selected preset option
     */
    const selectedPresetOption = useMemo(
        () => ACCORDIOAN_PRESETS.find(o => o.value === accordionPresetStyle) || null,
        [accordionPresetStyle]
    );
    /** End Preset Style */

    // accordionItems Padding Functionb
    const handleAccordionItemsPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionItemsPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionItemsDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionItemsTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionItemsMobilePadding: {
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
                    setAttributes({ accordionItemsDesktopPadding: { ...accordionItemsDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionItemsTabPadding: { ...accordionItemsTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionItemsMobilePadding: { ...accordionItemsMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionItemsPaddingCombineBtn = () => {
        setAttributes({ accordionItemsPaddingLink: !accordionItemsPaddingLink });
    }

    const handleAccordionItemsPaddingUnitsHandler = (unit) => {
        setAttributes({
            accordionItemsPaddingUnits: {
                ...accordionItemsPaddingUnits,
                [deviceType]: unit
            }
        })
    }


    // accordionItems BorderWidth Function
    const handleAccordionItemsBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionItemsBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionItemsDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionItemsTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionItemsMobileBorderWidth: {
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
                    setAttributes({ accordionItemsDesktopBorderWidth: { ...accordionItemsDesktopBorderWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionItemsTabBorderWidth: { ...accordionItemsTabBorderWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionItemsMobileBorderWidth: { ...accordionItemsMobileBorderWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionItemsBorderCombineBtn = () => {
        setAttributes({ accordionItemsBorderLink: !accordionItemsBorderLink });
    }

    const handleAccordionItemsBorderUnitsHandler = (unit) => {
        setAttributes({
            accordionItemsBorderUnits: {
                ...accordionItemsBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // accordionItems BorderRadiusWidth Function
    const handleAccordionItemsBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionItemsBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionItemsDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionItemsTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionItemsMobileBorderRadiusWidth: {
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
                    setAttributes({ accordionItemsDesktopBorderRadiusWidth: { ...accordionItemsDesktopBorderRadiusWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionItemsTabBorderRadiusWidth: { ...accordionItemsTabBorderRadiusWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionItemsMobileBorderRadiusWidth: { ...accordionItemsMobileBorderRadiusWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionItemsBorderRadiusCombineBtn = () => {
        setAttributes({ accordionItemsBorderRadiusLink: !accordionItemsBorderRadiusLink });
    }

    const handleAccordionItemsBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            accordionItemsBorderRadiusUnits: {
                ...accordionItemsBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // accordion content margin
    const handleAccordionMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionMobileMargin: {
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
                    setAttributes({ accordionDesktopMargin: { ...accordionDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionTabMargin: { ...accordionTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionMobileMargin: { ...accordionMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionMarginCombineBtn = () => {
        setAttributes({ accordionMarginLink: !accordionMarginLink });
    }

    const handleAccordionMarginUnitsHandler = (unit) => {
        setAttributes({
            accordionMarginUnits: {
                ...accordionMarginUnits,
                [deviceType]: unit
            }
        })
    }

    // accordion Padding Functionb
    const handleAccordionPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionMobilePadding: {
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
                    setAttributes({ accordionDesktopPadding: { ...accordionDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionTabPadding: { ...accordionTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionMobilePadding: { ...accordionMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionPaddingCombineBtn = () => {
        setAttributes({ accordionPaddingLink: !accordionPaddingLink });
    }

    const handleAccordionPaddingUnitsHandler = (unit) => {
        setAttributes({
            accordionPaddingUnits: {
                ...accordionPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // accordion BorderWidth Function
    const handleAccordionBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionMobileBorderWidth: {
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
                    setAttributes({ accordionDesktopBorderWidth: { ...accordionDesktopBorderWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionTabBorderWidth: { ...accordionTabBorderWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionMobileBorderWidth: { ...accordionMobileBorderWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionBorderCombineBtn = () => {
        setAttributes({ accordionBorderLink: !accordionBorderLink });
    }

    const handleAccordionBorderUnitsHandler = (unit) => {
        setAttributes({
            accordionBorderUnits: {
                ...accordionBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // accordion BorderRadiusWidth Function
    const handleAccordionBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (accordionBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        accordionDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        accordionTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        accordionMobileBorderRadiusWidth: {
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
                    setAttributes({ accordionDesktopBorderRadiusWidth: { ...accordionDesktopBorderRadiusWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ accordionTabBorderRadiusWidth: { ...accordionTabBorderRadiusWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ accordionMobileBorderRadiusWidth: { ...accordionMobileBorderRadiusWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleAccordionBorderRadiusCombineBtn = () => {
        setAttributes({ accordionBorderRadiusLink: !accordionBorderRadiusLink });
    }

    const handleAccordionBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            accordionBorderRadiusUnits: {
                ...accordionBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderWidth Function
    const handleContentBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (contentBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        contentDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        contentTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        contentMobileBorderWidth: {
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
                    setAttributes({ contentDesktopBorderWidth: { ...contentDesktopBorderWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ contentTabBorderWidth: { ...contentTabBorderWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ contentMobileBorderWidth: { ...contentMobileBorderWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleContentBorderCombineBtn = () => {
        setAttributes({ contentBorderLink: !contentBorderLink });
    }

    const handleContentBorderUnitsHandler = (unit) => {
        setAttributes({
            contentBorderUnits: {
                ...contentBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // content BorderRadiusWidth Function
    const handleContentBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (contentBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        contentDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        contentTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        contentMobileBorderRadiusWidth: {
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
                    setAttributes({ contentDesktopBorderRadiusWidth: { ...contentDesktopBorderRadiusWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ contentTabBorderRadiusWidth: { ...contentTabBorderRadiusWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ contentMobileBorderRadiusWidth: { ...contentMobileBorderRadiusWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleContentBorderRadiusCombineBtn = () => {
        setAttributes({ contentBorderRadiusLink: !contentBorderRadiusLink });
    }

    const handleContentBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            contentBorderRadiusUnits: {
                ...contentBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    // content Active BorderRadiusWidth Function
    const handleContentActiveBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (contentActiveBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        contentDesktopActiveBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        contentTabActiveBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        contentMobileActiveBorderRadiusWidth: {
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
                    setAttributes({ contentDesktopActiveBorderRadiusWidth: { ...contentDesktopActiveBorderRadiusWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ contentTabActiveBorderRadiusWidth: { ...contentTabActiveBorderRadiusWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ contentMobileActiveBorderRadiusWidth: { ...contentMobileActiveBorderRadiusWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleContentActiveBorderRadiusCombineBtn = () => {
        setAttributes({ contentActiveBorderRadiusLink: !contentActiveBorderRadiusLink });
    }

    const handleContentActiveBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            contentActiveBorderRadiusUnits: {
                ...contentActiveBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody initialOpen={true}>
                <BaseControl label={__("Preset Style", "frontis-blocks")}>
                    <FB_Presets
                        label={__('Select Preset', 'frontis-blocks')}
                        presets={accordionPresets}
                        value={accordionPresetStyle}
                        onChangeValue='accordionPresetStyle'
                        defaultPresetValue="preset-1"
                        setAttributes={setAttributes}
                    />
                </BaseControl>
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
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
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
                            {tabIconSwitcher === 'icon' &&
                                <FBIconPicker
                                    value={tabIcon}
                                    setIconHandler={titleTabIconHandler}
                                />
                            }
                            {tabIconSwitcher === 'image' &&
                                <FB_BackgroundImageControl
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
                            {expandedIconSwitcher === 'icon' &&
                                <FBIconPicker
                                    value={expandedIcon}
                                    setIconHandler={titleExpandedIconHandler}
                                />
                            }
                            {expandedIconSwitcher === 'image' &&
                                <FB_BackgroundImageControl
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

                        <FB_SwitcherControl
                            label={__("Icon Color", "frontis-blocks")}
                            globalSwitcher={titleIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ titleIconColorSwitcher: value })}
                        />

                        {titleIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={titleIconColor}
                                setGlobalColor={(value) => setAttributes({ titleIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {titleIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={titleIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ titleIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}
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

                {titleAlignment !== 'between' && <FB_Range
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
                />}

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={titleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ titleGlobalTypographyData: value })}

                    globalTypoType={titleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            titleGlobalTypoType: value,
                            titleGlobalTypoSwitcher: value === 'default' ? { ...titleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...titleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={titleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ titleGlobalTypoOption: value })}

                    fontFamily={titleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ titleFontFamily: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={titleFontSize}
                    onChangeFontSize={(value) => setAttributes({ titleFontSize: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={titleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ titleFontSizeUnits: value })}

                    fontWeight={titleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ titleFontWeight: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={titleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ titleFontStyle: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={titleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ titleTextTransform: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={titleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ titleTextDecoration: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={titleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ titleLetterSpacing: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={titleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ titleLetterSpacingUnits: value })}

                    lineHeight={titleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ titleLineHeight: value, titleGlobalTypoSwitcher: { ...titleGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={titleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ titleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={titleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ titleColorSwitcher: value })}
                />

                {titleColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={titleColor}
                        setGlobalColor={(value) => setAttributes({ titleColor: value === undefined ? '' : value })}
                    />
                )}

                {titleColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={titleHoverColor}
                        setGlobalColor={(value) => setAttributes({ titleHoverColor: value === undefined ? '' : value })}
                    />
                )}

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
                        setAttributes({ titleBgClassicColor: value === undefined ? '' : value })
                    }
                    normalGradientColor={titleBgGradientColor}
                    setNormalGradientColor={(value) =>
                        setAttributes({ titleBgGradientColor: value === undefined ? null : value })
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
                    setHoverBackgroundType={(value) =>
                        setAttributes({ titleBgHoverType: value })
                    }
                    hoverClassicColor={titleBgHoverClassicColor}
                    setHoverClassicColor={(value) =>
                        setAttributes({ titleBgHoverClassicColor: value === undefined ? '' : value })
                    }
                    hoverGradientColor={titleBgHoverGradientColor}
                    setHoverGradientColor={(value) =>
                        setAttributes({ titleBgHoverGradientColor: value === undefined ? null : value })
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
                    "Titles Border & Radius",
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

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={accordionItemsBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ accordionItemsBorderColorSwitcher: value })}
                />

                {accordionItemsBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={accordionItemsBorderColor}
                        setGlobalColor={(value) => setAttributes({ accordionItemsBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {accordionItemsBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={accordionItemsBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ accordionItemsBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
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
                    label={__("Border Radius", "frontis-blocks")}
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

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={accordionItemBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ accordionItemBoxShadowSwitcher: value })}
                />

                {accordionItemBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
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
                )}

                {accordionItemBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ accordionItemHoverBoxShadowValues: value })
                        }
                        initialShadowValue={accordionItemHoverBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                accordionItemHoverBoxShadowCssValue: value,
                            })
                        }
                    />
                )}
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
                        setAttributes({ contentBgClassicColor: value === undefined ? '' : value })
                    }
                    normalGradientColor={contentBgGradientColor}
                    setNormalGradientColor={(value) =>
                        setAttributes({ contentBgGradientColor: value === undefined ? null : value })
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
                    setHoverBackgroundType={(value) =>
                        setAttributes({ contentBgHoverType: value })
                    }
                    hoverClassicColor={contentBgHoverClassicColor}
                    setHoverClassicColor={(value) =>
                        setAttributes({ contentBgHoverClassicColor: value === undefined ? '' : value })
                    }
                    hoverGradientColor={contentBgHoverGradientColor}
                    setHoverGradientColor={(value) =>
                        setAttributes({ contentBgHoverGradientColor: value === undefined ? null : value })
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

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={contentBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ contentBorderColorSwitcher: value })}
                />

                {contentBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={contentBorderColor}
                        setGlobalColor={(value) => setAttributes({ contentBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {contentBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={contentBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ contentBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
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
                    label={__("Border Radius", "frontis-blocks")}
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

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={contentBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ contentBoxShadowSwitcher: value })}
                />

                {contentBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
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
                )}

                {contentBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ contentHoverBoxShadowValues: value })
                        }
                        initialShadowValue={contentHoverBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                contentHoverBoxShadowCssValue: value,
                            })
                        }
                    />
                )}
            </PanelBody>

            <PanelBody title="Active Items" initialOpen={false} >
               <FB_ColorControl
                    label={__("Title Color", "frontis-blocks")}
                    globalColor={titleActiveColor}
                    setGlobalColor={(value) => setAttributes({ titleActiveColor: value === undefined ? '' : value })}
                />

               <FB_ColorControl
                    label={__("Title Background", "frontis-blocks")}
                    globalColor={titleBgActiveColor}
                    setGlobalColor={(value) => setAttributes({ titleBgActiveColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Title Border Color", "frontis-blocks")}
                    globalColor={accordionItemsBorderActiveColor}
                    setGlobalColor={(value) => setAttributes({ accordionItemsBorderActiveColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Content Background", "frontis-blocks")}
                    globalColor={contentBgActiveColor}
                    setGlobalColor={(value) => setAttributes({ contentBgActiveColor: value === undefined ? '' : value })}
                />

                <FB_ColorControl
                    label={__("Content Border Color", "frontis-blocks")}
                    globalColor={accordionItemsContentBorderActiveColor}
                    setGlobalColor={(value) => setAttributes({ accordionItemsContentBorderActiveColor: value === undefined ? '' : value })}
                />
                <FB_Spacing
                    label={__("Content Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleContentActiveBorderRadiusUnitsHandler}
                    spacingUnits={contentActiveBorderRadiusUnits}
                    spacingDesktop={contentDesktopActiveBorderRadiusWidth}
                    spacingTablet={contentTabActiveBorderRadiusWidth}
                    spacingMobile={contentMobileActiveBorderRadiusWidth}
                    handleSpacingUnitHandler={handleContentActiveBorderRadiusUnitChange}
                    spacingCombineBtn={contentActiveBorderRadiusLink}
                    spacingCombineBtnHandler={handleContentActiveBorderRadiusCombineBtn}
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
                            rangeValue={accordionZIndex}
                            onChangeHandler={(value) => setAttributes({ accordionZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={accordionOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ accordionOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={accordionPositionType}
                            setPositionType={(value) => setAttributes({ accordionPositionType: value })}

                            HZOrientationType={accordionHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ accordionHZOrientationType: value })
                            }
                            VROrientationType={accordionVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ accordionVROrientationType: value })
                            }

                            HZLeftOffset={accordionHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ accordionHZLeftOffset: value })}
                            HZLeftOffsetUnits={accordionHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ accordionHZLeftOffsetUnits: value })}
                            HZRightOffset={accordionHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ accordionHZRightOffset: value })}
                            HZRightOffsetUnits={accordionHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ accordionHZRightOffsetUnits: value })}

                            VRTopOffset={accordionVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ accordionVRTopOffset: value })}
                            VRTopOffsetUnits={accordionVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ accordionVRTopOffsetUnits: value })}
                            VRBottomOffset={accordionVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ accordionVRBottomOffset: value })}
                            VRBottomOffsetUnits={accordionVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ accordionVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={accordionGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ accordionGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={accordionGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ accordionGlobalWraperClass: value })}
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
                                setAttributes({ accordionBgClassicColor: value === undefined ? '' : value })
                            }
                            normalGradientColor={accordionBgGradientColor}
                            setNormalGradientColor={(value) =>
                                setAttributes({ accordionBgGradientColor: value === undefined ? null : value })
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
                            setHoverBackgroundType={(value) =>
                                setAttributes({ accordionBgHoverType: value })
                            }
                            hoverClassicColor={accordionBgHoverClassicColor}
                            setHoverClassicColor={(value) =>
                                setAttributes({ accordionBgHoverClassicColor: value === undefined ? '' : value })
                            }
                            hoverGradientColor={accordionBgHoverGradientColor}
                            setHoverGradientColor={(value) =>
                                setAttributes({ accordionBgHoverGradientColor: value === undefined ? null : value })
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
                        title={__("Border & Border Radius", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-border-setting-wrapper"
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={accordionBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ accordionBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={accordionBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ accordionBorderColorSwitcher: value })}
                        />

                        {accordionBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={accordionBorderColor}
                                setGlobalColor={(value) => setAttributes({ accordionBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {accordionBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={accordionBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ accordionBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
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
                            label={__("Border Radius", "frontis-blocks")}
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

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={accordionGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ accordionGlobalBoxShadowSwitcher: value })}
                        />

                        {accordionGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
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
                        )}

                        {accordionGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) =>
                                    setAttributes({ accordionGlobalHoverBoxShadowValues: value })
                                }
                                initialShadowValue={accordionGlobalHoverBoxShadowValues}
                                onBoxShadowStyleChange={(value) =>
                                    setAttributes({
                                        accordionGlobalHoverBoxShadowCssValue: value,
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
                            desktopValue={accordionDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ accordionDesktopSwitcher: value })}

                            tabletValue={accordionTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ accordionTabletSwitcher: value })}

                            mobileValue={accordionMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ accordionMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={accordionCustomCSS}
                            onChangeValue={(value) => setAttributes({ accordionCustomCSS: value })}
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