import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useState, memo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl,
    RadioControl,
    TextControl,
    Button,
    BaseControl,
    Dropdown,
    ButtonGroup
} from '@wordpress/components';

import {
    BORDER_STYLES,
    OVERFLOW_OP,
    BACKGROUND_TYPES,
} from '@Constants/fbConstants';

import { MEGA_MENU_TRIGGERS } from '@Constants/fbConstants';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_Spacing from '@Components/spacing';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_VisibilityControl from '@Components/visibility-control';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import SortableItem from './sortableItem';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_Range from '@Components/range';
import FB_PositionControl from '@Components/position-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InputControl from '@Components/input-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';

import "./editor.scss";

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        blockStyle,
        megaMenuGlobalCustomCSS,
        megaMenuDesktopSwitcher,
        megaMenuTabletSwitcher,
        megaMenuMobileSwitcher,
        megaMenuAlignment,
        menuItems,
        triggerType,
        megaMenuBorder,
        megaMenuBorderColorSwitcher,
        megaMenuBorderColor,
        megaMenuBorderHoverColor,
        megaMenuBorderUnits,
        megaMenuDesktopBorder,
        megaMenuTabletBorder,
        megaMenuMobileBorder,
        megaMenuBorderLink,

        // Border Radius
        megaMenuBorderRadiusUnits,
        megaMenuDesktopBorderRadius,
        megaMenuTabletBorderRadius,
        megaMenuMobileBorderRadius,
        megaMenuBorderRadiusLink,

        // Box Shadow
        megaMenuBoxShadowValues,
        megaMenuBoxShadowCssValue,

        // Padding
        megaMenuPaddingUnits,
        megaMenuDesktopPadding,
        megaMenuTabletPadding,
        megaMenuMobilePadding,
        megaMenuPaddingLink,

        // Margin
        megaMenuMarginUnits,
        megaMenuDesktopMargin,
        megaMenuTabletMargin,
        megaMenuMobileMargin,
        megaMenuMarginLink,

        // Typography / Style
        megaMenuGlobalTypographyData,
        megaMenuGlobalTypoSwitcher,
        megaMenuGlobalTypoType,
        megaMenuGlobalTypoOption,
        megaMenuFontFamily,
        megaMenuFontSize,
        megaMenuFontSizeUnits,
        megaMenuFontWeight,
        megaMenuFontStyle,
        megaMenuTextTransform,
        megaMenuTextDecoration,
        megaMenuLetterSpacing,
        megaMenuLetterSpacingUnits,
        megaMenuLineHeight,
        megaMenuLineHeightUnits,

        // Text Color
        megaMenuTextColorTypeSwitcher,
        megaMenuTextColorType,
        megaMenuTextHoverColorType,
        megaMenuTextShadowValues,
        megaMenuTextShadowCssValue,
        megaMenuTextStroke,
        megaMenuTextStrokeColorSwitcher,
        megaMenuTextStrokeColor,
        megaMenuTextStrokeHoverColor,
        megaMenuHighlightColorSwitcher,
        megaMenuHighlightColor,
        megaMenuHighlightHoverColor,
        megaMenuColorSwitcher,
        megaMenuColor,
        megaMenuHoverColor,
        megaMenuTextGradientColor,
        megaMenuTextHoverGradientColor,
        megaMenuTextCustomGradientColorSwitcher,
        megaMenuTextCustomGradientColor,
        megaMenuTextHoverCustomGradientColorSwitcher,
        megaMenuTextHoverCustomGradientColor,

        // Menu Text Background
        megaMenuTextBackgroundColorSwitcher,
        megaMenuTextBgColorType,
        megaMenuTextBgHoverColorType,
        megaMenuTextBackgroundColor,
        megaMenuTextBackgroundHoverColor,
        megaMenuTextBackgroundGradientColor,
        megaMenuTextBackgroundHoverGradientColor,
        megaMenuTextBackgroundCustomGradientColorSwitcher,
        megaMenuTextBackgroundCustomGradientColor,
        megaMenuTextBackgroundHoverCustomGradientColorSwitcher,
        megaMenuTextBackgroundHoverCustomGradientColor,
        //Global Settings
        megaMenuGlobalZIndex,
        advancedMegaMenuOverflow,
        megaMenuGlobalWraperID,
        megaMenuGlobalWraperClass,
        advancedMegaMenuPositionType,
        advancedMegaMenuHZOrientationType,
        advancedMegaMenuVROrientationType,
        advancedMegaMenuHZLeftOffset,
        advancedMegaMenuHZLeftOffsetUnits,
        advancedMegaMenuHZRightOffset,
        advancedMegaMenuHZRightOffsetUnits,
        advancedMegaMenuVRTopOffset,
        advancedMegaMenuVRTopOffsetUnits,
        advancedMegaMenuVRBottomOffset,
        advancedMegaMenuVRBottomOffsetUnits,
        megaMenuGlobalBgColorSwitcher,
        //Global spacing
        megaMenuGlobalPaddingUnits,
        megaMenuGlobalPaddingDesktop,
        megaMenuGlobalPaddingTablet,
        megaMenuGlobalPaddingMobile,
        megaMenuGlobalPaddingLink,
        megaMenuGlobalMarginUnits,
        megaMenuGlobalMarginDesktop,
        megaMenuGlobalMarginTablet,
        megaMenuGlobalMarginMobile,
        megaMenuGlobalMarginLink,
        megaMenuGlobalBgNormalBackgroundType,
        megaMenuGlobalBgNormalClassicColor,
        megaMenuGlobalBgNormalGradientColor,
        megaMenuGlobalBgNormalCustomGradientSwitcher,
        megaMenuGlobalBgNormalCustomGradientInputValue,
        megaMenuGlobalBgNormalBackgroundImageUrl,
        megaMenuGlobalBgNormalBackgroundImagePosition,
        megaMenuGlobalBgNormalBackgroundImageAttachment,
        megaMenuGlobalBgNormalBackgroundImageRepeat,
        megaMenuGlobalBgNormalBackgroundImageSize,

        megaMenuGlobalBgHoverBackgroundType,
        megaMenuGlobalBgHoverClassicColor,
        megaMenuGlobalBgHoverGradientColor,
        megaMenuGlobalBgHoverCustomGradientSwitcher,
        megaMenuGlobalBgHoverCustomGradientInputValue,
        megaMenuGlobalBgHoverBackgroundImageUrl,
        megaMenuGlobalBgHoverBackgroundImagePosition,
        megaMenuGlobalBgHoverBackgroundImageAttachment,
        megaMenuGlobalBgHoverBackgroundImageRepeat,
        megaMenuGlobalBgHoverBackgroundImageSize,

        megaMenuGlobalBorder,
        megaMenuGlobalBorderColorSwitcher,
        megaMenuGlobalBorderColor,
        megaMenuGlobalBorderHoverColor,
        megaMenuGlobalBorderUnits,
        megaMenuGlobalBorderDesktop,
        megaMenuGlobalBorderTablet,
        megaMenuGlobalBorderMobile,
        megaMenuGlobalBorderLink,

        megaMenuGlobalBorderRadiusUnits,
        megaMenuGlobalBorderRadiusDesktop,
        megaMenuGlobalBorderRadiusTablet,
        megaMenuGlobalBorderRadiusMobile,
        megaMenuGlobalBorderRadiusLink,

        megaMenuGlobalBoxShadowSwitcher,
        megaMenuGlobalBoxShadowValues,
        megaMenuGlobalBoxShadowCssValue,
        megaMenuGlobalBoxShadowHoverValues,
        megaMenuGlobalBoxShadowHoverCssValue,
        megaMenuIcon,
        megaMenuIconFrontend,
        megaMenuIconColorSwitcher,
        megaMenuIconColor,
        megaMenuIconHoverColor,
        megaMenuIconSize,
        megaMenuIconSizeUnits,
        megaMenuIconGap,
        megaMenuIconGapUnits,
        megaMenuIconRotateSwitcher,
        megaMenuIconRotation,
        megaMenuIconRotateHover,
        megaMenuWidthSwitcher,
        megaMenuContentWidthValue,
        megaMenuContentWidthValueUnits,
        megaMenuContentTopPositionValue,
        megaMenuContentTopPositionUnits,
        megaMenuContentLeftPositionValue,
        megaMenuContentLeftPositionUnits,
        megaMenuCloseIconColorSwitcher,
        megaMenuCloseIconColor,
        megaMenuCloseIconHoverColor,
        megaMenuCloseIconSize,
        megaMenuCloseIconSizeUnits,
        megaMenuCloseIconRotateSwitcher,
        megaMenuCloseIconRotation,
        megaMenuCloseIconRotateHover,
        megaMenuIconTypeSwitcher,
        megaMenuOpenIconColorSwitcher,
        megaMenuOpenIconColor,
        megaMenuOpenIconHoverColor,
        megaMenuOpenIconSize,
        megaMenuOpenIconSizeUnits,
        megaMenuOpenIconRotateSwitcher,
        megaMenuOpenIconRotation,
        megaMenuOpenIconRotateHover
    } = attributes;

    const deviceType = useDeviceType();

    const [patterns, setPatterns] = useState([]);

    const patternData = useSelect((select) => {
        let userPatterns = [];
        const blocks = select('core')?.getEntityRecords('postType', 'wp_block', { per_page: -1 });
        if (blocks) {
            userPatterns = blocks.filter((block) => block.wp_pattern_category);
        }

        return { userPatterns };
    }, []);

    useEffect(() => {
        if (patterns.length > 1) {
            setAttributes({ patternsData: patterns });
        }
    }, [patterns]);

    useEffect(() => {
        const patternOptions = [{ value: '', label: __('Select a pattern', 'frontis-blocks') }];

        if (patternData.userPatterns?.length) {
            patternOptions.push(
                ...patternData.userPatterns.map((pattern) => ({
                    value: pattern.id,
                    label: pattern.title?.raw || `Pattern ${pattern.id}`,
                    content: pattern.content?.raw || pattern.content || ''
                }))
            );
        }

        setPatterns(patternOptions);
    }, [patternData]);

    const pages = useSelect((select) => {
        const query = { per_page: -1 };
        const records = select('core').getEntityRecords('postType', 'page', query);

        if (!records) return [];

        return records.map((page) => ({
            label: page.title?.rendered || '(no title)',
            value: String(page.id),
            link: page.link
        }));
    }, []);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = menuItems.findIndex((item) => item.id === active.id);
            const newIndex = menuItems.findIndex((item) => item.id === over.id);
            const updated = arrayMove(menuItems, oldIndex, newIndex);
            setAttributes({ menuItems: updated });
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            label: `Item ${menuItems.length + 1}`,
            url: '',
            patternSlug: '',
            megaMenuIcon: 'angle-down',
            pageId: '',
        };
        const updated = [...menuItems, newItem];
        setAttributes({ menuItems: updated });
    };

    const handleChangeItem = (id, key, value) => {
        const updated = menuItems.map((item) =>
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ menuItems: updated });
    };

    const handleChangeMultipleFields = (id, fieldsToUpdate) => {
        const updated = menuItems.map((item) =>
            item.id === id ? { ...item, ...fieldsToUpdate } : item
        );
        setAttributes({ menuItems: updated });
    };

    const handleDeleteItem = (id) => {
        const updated = menuItems.filter((item) => item.id !== id);
        setAttributes({ menuItems: updated });
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = menuItems.find((item) => item.id === id);
        if (itemToDuplicate) {
            const newItem = {
                ...itemToDuplicate,
                id: `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                label: itemToDuplicate.label + ' (Copy)',
            };
            const updated = [...menuItems, newItem];
            setAttributes({ menuItems: updated });
        }
    };




    /** Start MegaMenu Padding */
    const megaMenuPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuMobilePadding: {
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
                    setAttributes({ megaMenuDesktopPadding: { ...megaMenuDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuTabletPadding: { ...megaMenuTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuMobilePadding: { ...megaMenuMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const megaMenuPaddingLinkBtn = () => {
        setAttributes({
            megaMenuPaddingLink: !megaMenuPaddingLink
        });
    };

    const megaMenuPaddingUnitsHandler = (unit) => {
        setAttributes({
            megaMenuPaddingUnits: {
                ...megaMenuPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End MegaMenu Padding */

    /** Start MegaMenu Margin */
    const megaMenuMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuMobileMargin: {
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
                    setAttributes({ megaMenuDesktopMargin: { ...megaMenuDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuTabletMargin: { ...megaMenuTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuMobileMargin: { ...megaMenuMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const megaMenuMarginLinkBtn = () => {
        setAttributes({
            megaMenuMarginLink: !megaMenuMarginLink
        });
    };

    const megaMenuMarginUnitsHandler = (unit) => {
        setAttributes({
            megaMenuMarginUnits: {
                ...megaMenuMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End MegaMenu Margin */

    /** Start MegaMenu Border */
    const megaMenuBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuMobileBorder: {
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
                    setAttributes({ megaMenuDesktopBorder: { ...megaMenuDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuTabletBorder: { ...megaMenuTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuMobileBorder: { ...megaMenuMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const megaMenuBorderLinkBtn = () => {
        setAttributes({
            megaMenuBorderLink: !megaMenuBorderLink
        });
    };

    const megaMenuBorderUnitsHandler = (unit) => {
        setAttributes({
            megaMenuBorderUnits: {
                ...megaMenuBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End MegaMenu Border */

    /** Start MegaMenu Border Radius */
    const megaMenuBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuMobileBorderRadius: {
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
                    setAttributes({ megaMenuDesktopBorderRadius: { ...megaMenuDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuTabletBorderRadius: { ...megaMenuTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuMobileBorderRadius: { ...megaMenuMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const megaMenuBorderRadiusLinkBtn = () => {
        setAttributes({
            megaMenuBorderRadiusLink: !megaMenuBorderRadiusLink
        });
    };

    const megaMenuBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            megaMenuBorderRadiusUnits: {
                ...megaMenuBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End MegaMenu Border Radius */

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuGlobalPaddingMobile: {
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
                    setAttributes({ megaMenuGlobalPaddingDesktop: { ...megaMenuGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuGlobalPaddingTablet: { ...megaMenuGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuGlobalPaddingMobile: { ...megaMenuGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ megaMenuGlobalPaddingLink: !megaMenuGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            megaMenuGlobalPaddingUnits: {
                ...megaMenuGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuGlobalMarginMobile: {
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
                    setAttributes({ megaMenuGlobalMarginDesktop: { ...megaMenuGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuGlobalMarginTablet: { ...megaMenuGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuGlobalMarginMobile: { ...megaMenuGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ megaMenuGlobalMarginLink: !megaMenuGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            megaMenuGlobalMarginUnits: {
                ...megaMenuGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuGlobalBorderMobile: {
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
                    setAttributes({ megaMenuGlobalBorderDesktop: { ...megaMenuGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuGlobalBorderTablet: { ...megaMenuGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuGlobalBorderMobile: { ...megaMenuGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ megaMenuGlobalBorderLink: !megaMenuGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            megaMenuGlobalBorderUnits: {
                ...megaMenuGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (megaMenuGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        megaMenuGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        megaMenuGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        megaMenuGlobalBorderRadiusMobile: {
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
                    setAttributes({ megaMenuGlobalBorderRadiusDesktop: { ...megaMenuGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ megaMenuGlobalBorderRadiusTablet: { ...megaMenuGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ megaMenuGlobalBorderRadiusMobile: { ...megaMenuGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ megaMenuGlobalBorderRadiusLink: !megaMenuGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            megaMenuGlobalBorderRadiusUnits: {
                ...megaMenuGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */
    /** End Border Radius */

    const generalControls = (
        <>
            <PanelBody title={__('Mega Menu Settings', 'frontis-blocks')} initialOpen={false}>
                <SelectControl
                    label={__('Trigger Type', 'frontis-blocks')}
                    value={triggerType}
                    options={MEGA_MENU_TRIGGERS}
                    onChange={(value) => setAttributes({ triggerType: value })}
                />
                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={megaMenuAlignment}
                    setGlobalAlignment={(value) => setAttributes({ megaMenuAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__('Menu Items', 'frontis-blocks')} initialOpen={true}>
                <div>
                    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={menuItems.map(item => item.id)}>
                            <ul className="dnd-items-wrapper">
                                {menuItems.map((item, index) => (
                                    <SortableItem
                                        key={item.id}
                                        id={item.id}
                                        item={item}
                                        pages={pages}
                                        handleChangeItem={handleChangeItem}
                                        handleDeleteItem={handleDeleteItem}
                                        handleDuplicateItem={handleDuplicateItem}
                                        handleChangeMultipleFields={handleChangeMultipleFields}
                                        patterns={patterns}
                                        index={index}
                                    />
                                ))}
                            </ul>
                        </SortableContext>

                        <Button isPrimary onClick={handleAddItem}>
                            {__('Add Menu Item', 'frontis-blocks')}
                        </Button>
                    </DndContext>
                </div>
            </PanelBody>
        </>
    );

    const styleControls = (
        <>
            <PanelBody title={__("Mega Menu", "frontis-blocks")} initialOpen={false}>
                <FB_SwitcherControl
                    label={__("Width", "frontis-blocks")}
                    options={[
                        { label: __('Full', 'frontis-blocks'), value: 'full' },
                        { label: __('Content', 'frontis-blocks'), value: 'content' },
                    ]
                    }
                    globalSwitcher={megaMenuWidthSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ megaMenuWidthSwitcher: value })}
                />

                {megaMenuWidthSwitcher === 'full' && (
                    <></>
                )}

                {megaMenuWidthSwitcher === 'content' && (
                    <>
                        <FB_Range
                            min={0}
                            max={4000}
                            label={__("Content Width", "frontis-blocks")}
                            rangeValue={megaMenuContentWidthValue}
                            onChangeHandler={(value) => setAttributes({ megaMenuContentWidthValue: value })}
                            rangeUnitHandler={(value) => setAttributes({ megaMenuContentWidthValueUnits: value })}
                            deviceType={deviceType}
                            units={megaMenuContentWidthValueUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={''}
                        />
                        <FB_Range
                            min={-1000}
                            max={1000}
                            label={__("Position Top", "frontis-blocks")}
                            rangeValue={megaMenuContentTopPositionValue}
                            onChangeHandler={(value) => setAttributes({ megaMenuContentTopPositionValue: value })}
                            rangeUnitHandler={(value) => setAttributes({ megaMenuContentTopPositionUnits: value })}
                            deviceType={deviceType}
                            units={megaMenuContentTopPositionUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={''}
                        />
                        <FB_Range
                            min={-1000}
                            max={1000}
                            label={__("Position Left", "frontis-blocks")}
                            rangeValue={megaMenuContentLeftPositionValue}
                            onChangeHandler={(value) => setAttributes({ megaMenuContentLeftPositionValue: value })}
                            rangeUnitHandler={(value) => setAttributes({ megaMenuContentLeftPositionUnits: value })}
                            deviceType={deviceType}
                            units={megaMenuContentLeftPositionUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={''}
                        />
                    </>

                )}

            </PanelBody>
            <PanelBody title={__("Menu Item", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={megaMenuGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ megaMenuGlobalTypographyData: value })}

                    globalTypoType={megaMenuGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            megaMenuGlobalTypoType: value,
                            megaMenuGlobalTypoSwitcher: value === 'default'
                                ? {
                                    ...megaMenuGlobalTypoSwitcher,
                                    fontFamily: false,
                                    fontSize: false,
                                    fontWeight: false,
                                    fontStyle: false,
                                    textTransform: false,
                                    textDecoration: false,
                                    letterSpacing: false,
                                    lineHeight: false,
                                }
                                : {
                                    ...megaMenuGlobalTypoSwitcher,
                                    fontFamily: true,
                                    fontSize: true,
                                    fontWeight: true,
                                    fontStyle: true,
                                    textTransform: true,
                                    textDecoration: true,
                                    letterSpacing: true,
                                    lineHeight: true,
                                },
                        });
                    }}

                    globalTypoOption={megaMenuGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ megaMenuGlobalTypoOption: value })}

                    fontFamily={megaMenuFontFamily}
                    onChangeFontFamily={(value) =>
                        setAttributes({
                            megaMenuFontFamily: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, fontFamily: value && false },
                        })
                    }

                    fontSize={megaMenuFontSize}
                    onChangeFontSize={(value) =>
                        setAttributes({
                            megaMenuFontSize: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, fontSize: value && false },
                        })
                    }

                    fontSizeUnits={megaMenuFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ megaMenuFontSizeUnits: value })}

                    fontWeight={megaMenuFontWeight}
                    onChangeFontWeight={(value) =>
                        setAttributes({
                            megaMenuFontWeight: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, fontWeight: value && false },
                        })
                    }

                    fontStyle={megaMenuFontStyle}
                    onChangeFontStyle={(value) =>
                        setAttributes({
                            megaMenuFontStyle: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, fontStyle: value && false },
                        })
                    }

                    textTransform={megaMenuTextTransform}
                    onChangeTextTransform={(value) =>
                        setAttributes({
                            megaMenuTextTransform: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, textTransform: value && false },
                        })
                    }

                    textDecoration={megaMenuTextDecoration}
                    onChangeTextDecoration={(value) =>
                        setAttributes({
                            megaMenuTextDecoration: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, textDecoration: value && false },
                        })
                    }

                    letterSpacing={megaMenuLetterSpacing}
                    onChangeLetterSpacing={(value) =>
                        setAttributes({
                            megaMenuLetterSpacing: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, letterSpacing: value && false },
                        })
                    }

                    letterSpacingUnits={megaMenuLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ megaMenuLetterSpacingUnits: value })}

                    lineHeight={megaMenuLineHeight}
                    onChangeLineHeight={(value) =>
                        setAttributes({
                            megaMenuLineHeight: value,
                            megaMenuGlobalTypoSwitcher: { ...megaMenuGlobalTypoSwitcher, lineHeight: value && false },
                        })
                    }

                    lineHeightUnits={megaMenuLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ megaMenuLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Text Color", "frontis-blocks")}
                    bgColorSwitcher={megaMenuTextColorTypeSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ megaMenuTextColorTypeSwitcher: value })}

                    normalLabel={__("Text Color Type", "frontis-blocks")}
                    normalBackgroundType={megaMenuTextColorType}
                    setNormalBackgroundType={(value) => setAttributes({ megaMenuTextColorType: value })}
                    normalClassicColor={megaMenuColor}
                    setNormalClassicColor={(value) => setAttributes({ megaMenuColor: value === undefined ? '' : value })}
                    normalGradientColor={megaMenuTextGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ megaMenuTextGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={megaMenuTextCustomGradientColorSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ megaMenuTextCustomGradientColorSwitcher: value })}
                    normalCustomGradientInputValue={megaMenuTextCustomGradientColor}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ megaMenuTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Text Color Type", "frontis-blocks")}
                    hoverBackgroundType={megaMenuTextHoverColorType}
                    setHoverBackgroundType={(value) => setAttributes({ megaMenuTextHoverColorType: value })}
                    hoverClassicColor={megaMenuHoverColor}
                    setHoverClassicColor={(value) => setAttributes({ megaMenuHoverColor: value === undefined ? '' : value })}
                    hoverGradientColor={megaMenuTextHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ megaMenuTextHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={megaMenuTextHoverCustomGradientColorSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ megaMenuTextHoverCustomGradientColorSwitcher: value })}
                    hoverCustomGradientInputValue={megaMenuTextHoverCustomGradientColor}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ megaMenuTextHoverCustomGradientColor: value === undefined ? null : value })}

                    isBackgroundImage={false}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={megaMenuTextBackgroundColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ megaMenuTextBackgroundColorSwitcher: value })}

                    normalLabel={__("Background Color Type", "frontis-blocks")}
                    normalBackgroundType={megaMenuTextBgColorType}
                    setNormalBackgroundType={(value) => setAttributes({ megaMenuTextBgColorType: value })}
                    normalClassicColor={megaMenuTextBackgroundColor}
                    setNormalClassicColor={(value) => setAttributes({ megaMenuTextBackgroundColor: value === undefined ? '' : value })}
                    normalGradientColor={megaMenuTextBackgroundGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ megaMenuTextBackgroundGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={megaMenuTextBackgroundCustomGradientColorSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ megaMenuTextBackgroundCustomGradientColorSwitcher: value })}
                    normalCustomGradientInputValue={megaMenuTextBackgroundCustomGradientColor}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ megaMenuTextBackgroundCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Background Color Type", "frontis-blocks")}
                    hoverBackgroundType={megaMenuTextBgHoverColorType}
                    setHoverBackgroundType={(value) => setAttributes({ megaMenuTextBgHoverColorType: value })}
                    hoverClassicColor={megaMenuTextBackgroundHoverColor}
                    setHoverClassicColor={(value) => setAttributes({ megaMenuTextBackgroundHoverColor: value === undefined ? '' : value })}
                    hoverGradientColor={megaMenuTextBackgroundHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ megaMenuTextBackgroundHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={megaMenuTextBackgroundHoverCustomGradientColorSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ megaMenuTextBackgroundHoverCustomGradientColorSwitcher: value })}
                    hoverCustomGradientInputValue={megaMenuTextBackgroundHoverCustomGradientColor}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ megaMenuTextBackgroundHoverCustomGradientColor: value === undefined ? null : value })}

                    isBackgroundImage={false}
                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={megaMenuBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ megaMenuBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={megaMenuBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ megaMenuBorderColorSwitcher: value })}
                />

                {megaMenuBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={megaMenuBorderColor}
                        setGlobalColor={(value) => setAttributes({ megaMenuBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {megaMenuBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={megaMenuBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ megaMenuBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={megaMenuBorderUnitsHandler}
                    spacingUnits={megaMenuBorderUnits}
                    spacingDesktop={megaMenuDesktopBorder}
                    spacingTablet={megaMenuTabletBorder}
                    spacingMobile={megaMenuMobileBorder}
                    handleSpacingUnitHandler={megaMenuBorderUnitsChange}
                    spacingCombineBtn={megaMenuBorderLink}
                    spacingCombineBtnHandler={megaMenuBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={megaMenuBorderRadiusUnitsHandler}
                    spacingUnits={megaMenuBorderRadiusUnits}
                    spacingDesktop={megaMenuDesktopBorderRadius}
                    spacingTablet={megaMenuTabletBorderRadius}
                    spacingMobile={megaMenuMobileBorderRadius}
                    handleSpacingUnitHandler={megaMenuBorderRadiusUnitsChange}
                    spacingCombineBtn={megaMenuBorderRadiusLink}
                    spacingCombineBtnHandler={megaMenuBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BoxShadowControl
                    label={__("Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ megaMenuBoxShadowValues: value })}
                    initialShadowValue={megaMenuBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ megaMenuBoxShadowCssValue: value })}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={megaMenuPaddingUnitsHandler}
                    spacingUnits={megaMenuPaddingUnits}
                    spacingDesktop={megaMenuDesktopPadding}
                    spacingTablet={megaMenuTabletPadding}
                    spacingMobile={megaMenuMobilePadding}
                    handleSpacingUnitHandler={megaMenuPaddingUnitsChange}
                    spacingCombineBtn={megaMenuPaddingLink}
                    spacingCombineBtnHandler={megaMenuPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={megaMenuMarginUnitsHandler}
                    spacingUnits={megaMenuMarginUnits}
                    spacingDesktop={megaMenuDesktopMargin}
                    spacingTablet={megaMenuTabletMargin}
                    spacingMobile={megaMenuMobileMargin}
                    handleSpacingUnitHandler={megaMenuMarginUnitsChange}
                    spacingCombineBtn={megaMenuMarginLink}
                    spacingCombineBtnHandler={megaMenuMarginLinkBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
            <PanelBody title={__("Item Icon", "frontis-blocks")} initialOpen={false}>
                {/* Icon color */}
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={megaMenuIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ megaMenuIconColorSwitcher: value })}
                />

                {megaMenuIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={megaMenuIconColor}
                        setGlobalColor={(value) => setAttributes({ megaMenuIconColor: value === undefined ? '' : value })}
                    />
                )}

                {megaMenuIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={megaMenuIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ megaMenuIconHoverColor: value === undefined ? '' : value })}
                    />
                )}
                {/* Icon Size */}
                <FB_Range
                    min={0}
                    max={megaMenuIconSizeUnits === '%' ? 100 : 200}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={megaMenuIconSize}
                    onChangeHandler={(value) => setAttributes({ megaMenuIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ megaMenuIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={megaMenuIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
                {/* Icon Gap */}
                <FB_Range
                    min={0}
                    max={megaMenuIconGapUnits === '%' ? 100 : 200}
                    label={__("Icon Gap", "frontis-blocks")}
                    rangeValue={megaMenuIconGap}
                    onChangeHandler={(value) => setAttributes({ megaMenuIconGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ megaMenuIconGapUnits: value })}
                    deviceType={deviceType}
                    units={megaMenuIconGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
                {/* Icon Rotation */}
                <FB_SwitcherControl
                    label={__("Icon Rotation", "frontis-blocks")}
                    globalSwitcher={megaMenuIconRotateSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ megaMenuIconRotateSwitcher: value })}
                />

                {megaMenuIconRotateSwitcher === 'normal' && (
                    <FB_Range
                        min={-360}
                        max={360}
                        label={__("Icon Rotation", "frontis-blocks")}
                        rangeValue={megaMenuIconRotation}
                        onChangeHandler={(value) => setAttributes({ megaMenuIconRotation: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                )}

                {megaMenuIconRotateSwitcher === 'hover' && (
                    <FB_Range
                        min={-360}
                        max={360}
                        label={__("Icon Rotation", "frontis-blocks")}
                        rangeValue={megaMenuIconRotateHover}
                        onChangeHandler={(value) => setAttributes({ megaMenuIconRotateHover: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                )}
            </PanelBody>
            <PanelBody title={__("Open/Close Icon", "frontis-blocks")} initialOpen={false}>

                <FB_SwitcherControl
                    label={__("Icon Type", "frontis-blocks")}
                    globalSwitcher={megaMenuIconTypeSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ megaMenuIconTypeSwitcher: value })}
                    options={[
                        { label: __('Opener', 'frontis-blocks'), value: 'opener' },
                        { label: __('Closer', 'frontis-blocks'), value: 'closer' },
                    ]
                    }
                />
                {megaMenuIconTypeSwitcher === 'opener' && (
                    <>
                        <FB_SwitcherControl
                            label={__("Color", "frontis-blocks")}
                            globalSwitcher={megaMenuOpenIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuOpenIconColorSwitcher: value })}
                        />

                        {megaMenuOpenIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={megaMenuOpenIconColor}
                                setGlobalColor={(value) => setAttributes({ megaMenuOpenIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {megaMenuOpenIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={megaMenuOpenIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ megaMenuOpenIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                        {/* Icon Size */}
                        <FB_Range
                            min={0}
                            max={megaMenuOpenIconSizeUnits === '%' ? 100 : 200}
                            label={__("Icon Size", "frontis-blocks")}
                            rangeValue={megaMenuOpenIconSize}
                            onChangeHandler={(value) => setAttributes({ megaMenuOpenIconSize: value })}
                            rangeUnitHandler={(value) => setAttributes({ megaMenuOpenIconSizeUnits: value })}
                            deviceType={deviceType}
                            units={megaMenuOpenIconSizeUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={''}
                        />

                        {/* Icon Rotation */}
                        <FB_SwitcherControl
                            label={__("Icon Rotation", "frontis-blocks")}
                            globalSwitcher={megaMenuOpenIconRotateSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuOpenIconRotateSwitcher: value })}
                        />

                        {megaMenuOpenIconRotateSwitcher === 'normal' && (
                            <FB_Range
                                min={-360}
                                max={360}
                                label={__("Icon Rotation", "frontis-blocks")}
                                rangeValue={megaMenuOpenIconRotation}
                                onChangeHandler={(value) => setAttributes({ megaMenuOpenIconRotation: value === 0 ? undefined : value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                                isRangeUnit={false}
                            />
                        )}

                        {megaMenuOpenIconRotateSwitcher === 'hover' && (
                            <FB_Range
                                min={-360}
                                max={360}
                                label={__("Icon Rotation", "frontis-blocks")}
                                rangeValue={megaMenuOpenIconRotateHover}
                                onChangeHandler={(value) => setAttributes({ megaMenuOpenIconRotateHover: value === 0 ? undefined : value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                                isRangeUnit={false}
                            />
                        )}
                    </>
                )}
                {megaMenuIconTypeSwitcher === 'closer' && (
                    <>
                        <FB_SwitcherControl
                            label={__("Color", "frontis-blocks")}
                            globalSwitcher={megaMenuCloseIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuCloseIconColorSwitcher: value })}
                        />

                        {megaMenuCloseIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={megaMenuCloseIconColor}
                                setGlobalColor={(value) => setAttributes({ megaMenuCloseIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {megaMenuCloseIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={megaMenuCloseIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ megaMenuCloseIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                        {/* Icon Size */}
                        <FB_Range
                            min={0}
                            max={megaMenuCloseIconSizeUnits === '%' ? 100 : 200}
                            label={__("Icon Size", "frontis-blocks")}
                            rangeValue={megaMenuCloseIconSize}
                            onChangeHandler={(value) => setAttributes({ megaMenuCloseIconSize: value })}
                            rangeUnitHandler={(value) => setAttributes({ megaMenuCloseIconSizeUnits: value })}
                            deviceType={deviceType}
                            units={megaMenuCloseIconSizeUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={''}
                        />

                        {/* Icon Rotation */}
                        <FB_SwitcherControl
                            label={__("Icon Rotation", "frontis-blocks")}
                            globalSwitcher={megaMenuCloseIconRotateSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuCloseIconRotateSwitcher: value })}
                        />

                        {megaMenuCloseIconRotateSwitcher === 'normal' && (
                            <FB_Range
                                min={-360}
                                max={360}
                                label={__("Icon Rotation", "frontis-blocks")}
                                rangeValue={megaMenuCloseIconRotation}
                                onChangeHandler={(value) => setAttributes({ megaMenuCloseIconRotation: value === 0 ? undefined : value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                                isRangeUnit={false}
                            />
                        )}

                        {megaMenuCloseIconRotateSwitcher === 'hover' && (
                            <FB_Range
                                min={-360}
                                max={360}
                                label={__("Icon Rotation", "frontis-blocks")}
                                rangeValue={megaMenuCloseIconRotateHover}
                                onChangeHandler={(value) => setAttributes({ megaMenuCloseIconRotateHover: value === 0 ? undefined : value })}
                                deviceType={deviceType}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                                isRangeUnit={false}
                            />
                        )}
                    </>
                )}

            </PanelBody>
        </>
    );

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
                            rangeValue={megaMenuGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ megaMenuGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={advancedMegaMenuOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ advancedMegaMenuOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={advancedMegaMenuPositionType}
                            setPositionType={(value) => setAttributes({ advancedMegaMenuPositionType: value })}

                            HZOrientationType={advancedMegaMenuHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ advancedMegaMenuHZOrientationType: value })
                            }
                            VROrientationType={advancedMegaMenuVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ advancedMegaMenuVROrientationType: value })
                            }

                            HZLeftOffset={advancedMegaMenuHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ advancedMegaMenuHZLeftOffset: value })}
                            HZLeftOffsetUnits={advancedMegaMenuHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ advancedMegaMenuHZLeftOffsetUnits: value })}
                            HZRightOffset={advancedMegaMenuHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ advancedMegaMenuHZRightOffset: value })}
                            HZRightOffsetUnits={advancedMegaMenuHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ advancedMegaMenuHZRightOffsetUnits: value })}

                            VRTopOffset={advancedMegaMenuVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ advancedMegaMenuVRTopOffset: value })}
                            VRTopOffsetUnits={advancedMegaMenuVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ advancedMegaMenuVRTopOffsetUnits: value })}
                            VRBottomOffset={advancedMegaMenuVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ advancedMegaMenuVRBottomOffset: value })}
                            VRBottomOffsetUnits={advancedMegaMenuVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ advancedMegaMenuVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={megaMenuGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ megaMenuGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={megaMenuGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ megaMenuGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>


                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={megaMenuGlobalPaddingUnits}
                            spacingDesktop={megaMenuGlobalPaddingDesktop}
                            spacingTablet={megaMenuGlobalPaddingTablet}
                            spacingMobile={megaMenuGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={megaMenuGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={megaMenuGlobalMarginUnits}
                            spacingDesktop={megaMenuGlobalMarginDesktop}
                            spacingTablet={megaMenuGlobalMarginTablet}
                            spacingMobile={megaMenuGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={megaMenuGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Type", "frontis-blocks")}
                            globalSwitcher={megaMenuGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuGlobalBgColorSwitcher: value })}
                        />

                        {megaMenuGlobalBgColorSwitcher === 'normal' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Normal Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ megaMenuGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${megaMenuGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {megaMenuGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={megaMenuGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ megaMenuGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={megaMenuGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ megaMenuGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={megaMenuGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ megaMenuGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={megaMenuGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ megaMenuGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={megaMenuGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ megaMenuGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={megaMenuGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ megaMenuGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {megaMenuGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={megaMenuGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ megaMenuGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={megaMenuGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ megaMenuGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={megaMenuGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ megaMenuGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {megaMenuGlobalBgColorSwitcher === 'hover' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Hover Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ megaMenuGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${megaMenuGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {megaMenuGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={megaMenuGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ megaMenuGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={megaMenuGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ megaMenuGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={megaMenuGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ megaMenuGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={megaMenuGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ megaMenuGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={megaMenuGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ megaMenuGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={megaMenuGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ megaMenuGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {megaMenuGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={megaMenuGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ megaMenuGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={megaMenuGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ megaMenuGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={megaMenuGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ megaMenuGlobalBgHoverGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={megaMenuGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ megaMenuGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={megaMenuGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuGlobalBorderColorSwitcher: value })}
                        />

                        {megaMenuGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={megaMenuGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ megaMenuGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {megaMenuGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={megaMenuGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ megaMenuGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={megaMenuGlobalBorderUnits}
                            spacingDesktop={megaMenuGlobalBorderDesktop}
                            spacingTablet={megaMenuGlobalBorderTablet}
                            spacingMobile={megaMenuGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={megaMenuGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={megaMenuGlobalBorderRadiusUnits}
                            spacingDesktop={megaMenuGlobalBorderRadiusDesktop}
                            spacingTablet={megaMenuGlobalBorderRadiusTablet}
                            spacingMobile={megaMenuGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={megaMenuGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={megaMenuGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ megaMenuGlobalBoxShadowSwitcher: value })}
                        />

                        {megaMenuGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ megaMenuGlobalBoxShadowValues: value })}
                                initialShadowValue={megaMenuGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ megaMenuGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {megaMenuGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ megaMenuGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={megaMenuGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ megaMenuGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={megaMenuDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ megaMenuDesktopSwitcher: value })}
                            tabletValue={megaMenuTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ megaMenuTabletSwitcher: value })}
                            mobileValue={megaMenuMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ megaMenuMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={megaMenuGlobalCustomCSS}
                            onChangeValue={(value) => setAttributes({ megaMenuGlobalCustomCSS: value })}
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