import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, useState } from '@wordpress/element';
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
import loadGoogleFont from '@Utils/loadGoogleFont';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
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
        megaMenuContentTopPositionUnits
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-megamenu-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const [MenuItemList, setMenuItemList] = useState(menuItems);
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
            const oldIndex = MenuItemList.findIndex((item) => item.id === active.id);
            const newIndex = MenuItemList.findIndex((item) => item.id === over.id);
            const updated = arrayMove(MenuItemList, oldIndex, newIndex);
            setMenuItemList(updated);
            setAttributes({ menuItems: updated });
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${MenuItemList.length + 1}`,
            label: `Item ${MenuItemList.length + 1}`,
            url: '',
            patternSlug: '',
            megaMenuIcon: 'angle-down',
            pageId: '',
        };
        const updated = [...MenuItemList, newItem];
        setMenuItemList(updated);
        setAttributes({ menuItems: updated });
    };

    const handleChangeItem = (id, key, value) => {
        const updated = MenuItemList.map((item) =>
            item.id === id ? { ...item, [key]: value } : item
        );
        setMenuItemList(updated);
        setAttributes({ menuItems: updated });
    };

    const handleChangeMultipleFields = (id, fieldsToUpdate) => {
        const updated = MenuItemList.map((item) =>
            item.id === id ? { ...item, ...fieldsToUpdate } : item
        );
        setMenuItemList(updated);
        setAttributes({ menuItems: updated });
    };

    const handleDeleteItem = (id) => {
        const updated = MenuItemList.filter((item) => item.id !== id);
        setMenuItemList(updated);
        setAttributes({ menuItems: updated });
    };

    const handleDuplicateItem = (id) => {
        const itemToDuplicate = MenuItemList.find((item) => item.id === id);
        if (itemToDuplicate) {
            const newItem = {
                ...itemToDuplicate,
                id: `item-${MenuItemList.length + 1}`,
                label: itemToDuplicate.label + ' (Copy)',
            };
            const updated = [...MenuItemList, newItem];
            setMenuItemList(updated);
            setAttributes({ menuItems: updated });
        }
    };

    /** Sync back when MenuItemList changes */
    useEffect(() => {
        setAttributes({ menuItems: MenuItemList });
    }, [MenuItemList]);


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

    /** Default padding for MegaMenu */
    const megaMenuDesktopPaddingWidth = `${megaMenuDesktopPadding?.top}${megaMenuPaddingUnits?.Desktop} ${megaMenuDesktopPadding?.right}${megaMenuPaddingUnits?.Desktop} ${megaMenuDesktopPadding?.bottom}${megaMenuPaddingUnits?.Desktop} ${megaMenuDesktopPadding?.left}${megaMenuPaddingUnits?.Desktop}`;
    const megaMenuTabletPaddingWidth = `${megaMenuTabletPadding?.top}${megaMenuPaddingUnits?.Tablet} ${megaMenuTabletPadding?.right}${megaMenuPaddingUnits?.Tablet} ${megaMenuTabletPadding?.bottom}${megaMenuPaddingUnits?.Tablet} ${megaMenuTabletPadding?.left}${megaMenuPaddingUnits?.Tablet}`;
    const megaMenuMobilePaddingWidth = `${megaMenuMobilePadding?.top}${megaMenuPaddingUnits?.Mobile} ${megaMenuMobilePadding?.right}${megaMenuPaddingUnits?.Mobile} ${megaMenuMobilePadding?.bottom}${megaMenuPaddingUnits?.Mobile} ${megaMenuMobilePadding?.left}${megaMenuPaddingUnits?.Mobile}`;
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

    /** Default margin for MegaMenu */
    const megaMenuDesktopMarginWidth = `${megaMenuDesktopMargin?.top}${megaMenuMarginUnits?.Desktop} ${megaMenuDesktopMargin?.right}${megaMenuMarginUnits?.Desktop} ${megaMenuDesktopMargin?.bottom}${megaMenuMarginUnits?.Desktop} ${megaMenuDesktopMargin?.left}${megaMenuMarginUnits?.Desktop}`;
    const megaMenuTabletMarginWidth = `${megaMenuTabletMargin?.top}${megaMenuMarginUnits?.Tablet} ${megaMenuTabletMargin?.right}${megaMenuMarginUnits?.Tablet} ${megaMenuTabletMargin?.bottom}${megaMenuMarginUnits?.Tablet} ${megaMenuTabletMargin?.left}${megaMenuMarginUnits?.Tablet}`;
    const megaMenuMobileMarginWidth = `${megaMenuMobileMargin?.top}${megaMenuMarginUnits?.Mobile} ${megaMenuMobileMargin?.right}${megaMenuMarginUnits?.Mobile} ${megaMenuMobileMargin?.bottom}${megaMenuMarginUnits?.Mobile} ${megaMenuMobileMargin?.left}${megaMenuMarginUnits?.Mobile}`;
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

    /** Default border for MegaMenu */
    const megaMenuDesktopBorderWidth = `${megaMenuDesktopBorder?.top}${megaMenuBorderUnits?.Desktop} ${megaMenuDesktopBorder?.right}${megaMenuBorderUnits?.Desktop} ${megaMenuDesktopBorder?.bottom}${megaMenuBorderUnits?.Desktop} ${megaMenuDesktopBorder?.left}${megaMenuBorderUnits?.Desktop}`;
    const megaMenuTabletBorderWidth = `${megaMenuTabletBorder?.top}${megaMenuBorderUnits?.Tablet} ${megaMenuTabletBorder?.right}${megaMenuBorderUnits?.Tablet} ${megaMenuTabletBorder?.bottom}${megaMenuBorderUnits?.Tablet} ${megaMenuTabletBorder?.left}${megaMenuBorderUnits?.Tablet}`;
    const megaMenuMobileBorderWidth = `${megaMenuMobileBorder?.top}${megaMenuBorderUnits?.Mobile} ${megaMenuMobileBorder?.right}${megaMenuBorderUnits?.Mobile} ${megaMenuMobileBorder?.bottom}${megaMenuBorderUnits?.Mobile} ${megaMenuMobileBorder?.left}${megaMenuBorderUnits?.Mobile}`;
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

    /** Default border radius for MegaMenu */
    const megaMenuDesktopBorderRadiusWidth = `${megaMenuDesktopBorderRadius?.top}${megaMenuBorderRadiusUnits?.Desktop} ${megaMenuDesktopBorderRadius?.right}${megaMenuBorderRadiusUnits?.Desktop} ${megaMenuDesktopBorderRadius?.bottom}${megaMenuBorderRadiusUnits?.Desktop} ${megaMenuDesktopBorderRadius?.left}${megaMenuBorderRadiusUnits?.Desktop}`;
    const megaMenuTabletBorderRadiusWidth = `${megaMenuTabletBorderRadius?.top}${megaMenuBorderRadiusUnits?.Tablet} ${megaMenuTabletBorderRadius?.right}${megaMenuBorderRadiusUnits?.Tablet} ${megaMenuTabletBorderRadius?.bottom}${megaMenuBorderRadiusUnits?.Tablet} ${megaMenuTabletBorderRadius?.left}${megaMenuBorderRadiusUnits?.Tablet}`;
    const megaMenuMobileBorderRadiusWidth = `${megaMenuMobileBorderRadius?.top}${megaMenuBorderRadiusUnits?.Mobile} ${megaMenuMobileBorderRadius?.right}${megaMenuBorderRadiusUnits?.Mobile} ${megaMenuMobileBorderRadius?.bottom}${megaMenuBorderRadiusUnits?.Mobile} ${megaMenuMobileBorderRadius?.left}${megaMenuBorderRadiusUnits?.Mobile}`;
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
    const globalDesktopPadding = `${megaMenuGlobalPaddingDesktop?.top}${megaMenuGlobalPaddingUnits?.Desktop} ${megaMenuGlobalPaddingDesktop?.right}${megaMenuGlobalPaddingUnits?.Desktop} ${megaMenuGlobalPaddingDesktop?.bottom}${megaMenuGlobalPaddingUnits?.Desktop} ${megaMenuGlobalPaddingDesktop?.left}${megaMenuGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${megaMenuGlobalPaddingTablet?.top}${megaMenuGlobalPaddingUnits?.Tablet} ${megaMenuGlobalPaddingTablet?.right}${megaMenuGlobalPaddingUnits?.Tablet} ${megaMenuGlobalPaddingTablet?.bottom}${megaMenuGlobalPaddingUnits?.Tablet} ${megaMenuGlobalPaddingTablet?.left}${megaMenuGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${megaMenuGlobalPaddingMobile?.top}${megaMenuGlobalPaddingUnits?.Mobile} ${megaMenuGlobalPaddingMobile?.right}${megaMenuGlobalPaddingUnits?.Mobile} ${megaMenuGlobalPaddingMobile?.bottom}${megaMenuGlobalPaddingUnits?.Mobile} ${megaMenuGlobalPaddingMobile?.left}${megaMenuGlobalPaddingUnits?.Mobile}`;
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

    const globalDesktopMargin = `${megaMenuGlobalMarginDesktop?.top}${megaMenuGlobalMarginUnits?.Desktop} ${megaMenuGlobalMarginDesktop?.right}${megaMenuGlobalMarginUnits?.Desktop} ${megaMenuGlobalMarginDesktop?.bottom}${megaMenuGlobalMarginUnits?.Desktop} ${megaMenuGlobalMarginDesktop?.left}${megaMenuGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${megaMenuGlobalMarginTablet?.top}${megaMenuGlobalMarginUnits?.Tablet} ${megaMenuGlobalMarginTablet?.right}${megaMenuGlobalMarginUnits?.Tablet} ${megaMenuGlobalMarginTablet?.bottom}${megaMenuGlobalMarginUnits?.Tablet} ${megaMenuGlobalMarginTablet?.left}${megaMenuGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${megaMenuGlobalMarginMobile?.top}${megaMenuGlobalMarginUnits?.Mobile} ${megaMenuGlobalMarginMobile?.right}${megaMenuGlobalMarginUnits?.Mobile} ${megaMenuGlobalMarginMobile?.bottom}${megaMenuGlobalMarginUnits?.Mobile} ${megaMenuGlobalMarginMobile?.left}${megaMenuGlobalMarginUnits?.Mobile}`;
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
    const globalDesktopBorderWidth = `${megaMenuGlobalBorderDesktop?.top}${megaMenuGlobalBorderUnits?.Desktop} ${megaMenuGlobalBorderDesktop?.right}${megaMenuGlobalBorderUnits?.Desktop} ${megaMenuGlobalBorderDesktop?.bottom}${megaMenuGlobalBorderUnits?.Desktop} ${megaMenuGlobalBorderDesktop?.left}${megaMenuGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${megaMenuGlobalBorderTablet?.top}${megaMenuGlobalBorderUnits?.Tablet} ${megaMenuGlobalBorderTablet?.right}${megaMenuGlobalBorderUnits?.Tablet} ${megaMenuGlobalBorderTablet?.bottom}${megaMenuGlobalBorderUnits?.Tablet} ${megaMenuGlobalBorderTablet?.left}${megaMenuGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${megaMenuGlobalBorderMobile?.top}${megaMenuGlobalBorderUnits?.Mobile} ${megaMenuGlobalBorderMobile?.right}${megaMenuGlobalBorderUnits?.Mobile} ${megaMenuGlobalBorderMobile?.bottom}${megaMenuGlobalBorderUnits?.Mobile} ${megaMenuGlobalBorderMobile?.left}${megaMenuGlobalBorderUnits?.Mobile}`;
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

    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${megaMenuGlobalBorderRadiusDesktop?.top}${megaMenuGlobalBorderRadiusUnits?.Desktop} ${megaMenuGlobalBorderRadiusDesktop?.right}${megaMenuGlobalBorderRadiusUnits?.Desktop} ${megaMenuGlobalBorderRadiusDesktop?.bottom}${megaMenuGlobalBorderRadiusUnits?.Desktop} ${megaMenuGlobalBorderRadiusDesktop?.left}${megaMenuGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${megaMenuGlobalBorderRadiusTablet?.top}${megaMenuGlobalBorderRadiusUnits?.Tablet} ${megaMenuGlobalBorderRadiusTablet?.right}${megaMenuGlobalBorderRadiusUnits?.Tablet} ${megaMenuGlobalBorderRadiusTablet?.bottom}${megaMenuGlobalBorderRadiusUnits?.Tablet} ${megaMenuGlobalBorderRadiusTablet?.left}${megaMenuGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${megaMenuGlobalBorderRadiusMobile?.top}${megaMenuGlobalBorderRadiusUnits?.Mobile} ${megaMenuGlobalBorderRadiusMobile?.right}${megaMenuGlobalBorderRadiusUnits?.Mobile} ${megaMenuGlobalBorderRadiusMobile?.bottom}${megaMenuGlobalBorderRadiusUnits?.Mobile} ${megaMenuGlobalBorderRadiusMobile?.left}${megaMenuGlobalBorderRadiusUnits?.Mobile}`;
    /** End Border Radius */

    useEffect(() => {
        if (megaMenuFontFamily !== 'Default') {
            loadGoogleFont(megaMenuFontFamily);
        }
    }, [megaMenuFontFamily]);

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = megaMenuGlobalBgNormalBackgroundType;
        const bgColor = megaMenuGlobalBgNormalClassicColor;
        const bgGradient = megaMenuGlobalBgNormalGradientColor;
        const customGradient = megaMenuGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = megaMenuGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = megaMenuGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = megaMenuGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = megaMenuGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = megaMenuGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = megaMenuGlobalBgNormalBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Get background hover styles
     */
    const getBackgroundHoverStyles = (device) => {
        const bgType = megaMenuGlobalBgHoverBackgroundType;
        const bgColor = megaMenuGlobalBgHoverClassicColor;
        const bgGradient = megaMenuGlobalBgHoverGradientColor;
        const customGradient = megaMenuGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = megaMenuGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = megaMenuGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = megaMenuGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = megaMenuGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = megaMenuGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = megaMenuGlobalBgHoverBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };


    /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');


    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    const megaMenuBlockStyle = useMemo(() => `
        .${blockId} .fb-advanced-mega-menu-wrapper {
            ${desktopBackgroundNormalStyles}
            ${advancedMegaMenuPositionType === 'default' ? `position: relative !important;` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' ? `width: 100%;` : ''}
            ${advancedMegaMenuPositionType !== 'default' ? `position: ${advancedMegaMenuPositionType} !important;` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuHZOrientationType === 'left' && advancedMegaMenuHZLeftOffset?.Desktop ? `left: ${advancedMegaMenuHZLeftOffset?.Desktop}${advancedMegaMenuHZLeftOffsetUnits?.Desktop};` : ''} 
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuHZOrientationType === 'right' && advancedMegaMenuHZRightOffset?.Desktop ? `right: ${advancedMegaMenuHZRightOffset?.Desktop}${advancedMegaMenuHZRightOffsetUnits?.Desktop};` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuVROrientationType === 'top' && advancedMegaMenuVRTopOffset?.Desktop ? `top: ${advancedMegaMenuVRTopOffset?.Desktop}${advancedMegaMenuVRTopOffsetUnits?.Desktop};` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuVROrientationType === 'bottom' && advancedMegaMenuVRBottomOffset?.Desktop ? `bottom: ${advancedMegaMenuVRBottomOffset?.Desktop}${advancedMegaMenuVRBottomOffsetUnits?.Desktop};` : ''}
            ${megaMenuGlobalZIndex?.Desktop ? `z-index: ${megaMenuGlobalZIndex?.Desktop};` : ''}
            ${advancedMegaMenuOverflow !== 'default' ? `overflow: ${advancedMegaMenuOverflow};` : ''}
            ${globalDesktopPadding && megaMenuGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && megaMenuGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${megaMenuGlobalBorder ? `border: ${megaMenuGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && megaMenuGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && megaMenuGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${megaMenuGlobalBorderColor ? `border-color: ${megaMenuGlobalBorderColor};` : ''}
            ${megaMenuGlobalBoxShadowCssValue ? `box-shadow: ${megaMenuGlobalBoxShadowCssValue};` : ''}
        }
        .${blockId} .fb-advanced-mega-menu-wrapper:hover {
            ${desktopBackgroundHoverStyles}
            ${megaMenuGlobalBorderHoverColor ? `border-color: ${megaMenuGlobalBorderHoverColor};` : ''}
            ${megaMenuGlobalBoxShadowHoverCssValue ? `box-shadow: ${megaMenuGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockId} .fb-advanced-mega-menu-wrapper ul{
            ${megaMenuAlignment?.Desktop ? `justify-content: ${megaMenuAlignment?.Desktop};` : ''}
        }
        .${blockId} .fb-advanced-mega-menu-wrapper ul .fb-advanced-mega-menu-item {
            
        }
        .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link {
                ${megaMenuGlobalTypoSwitcher?.fontFamily === true && megaMenuGlobalTypographyData?.fontFamily ? `font-family: ${megaMenuGlobalTypographyData?.fontFamily};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontSize === true && megaMenuGlobalTypographyData?.fontSize ? `font-size: ${megaMenuGlobalTypographyData?.fontSize};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontWeight === true && megaMenuGlobalTypographyData?.fontWeight ? `font-weight: ${megaMenuGlobalTypographyData?.fontWeight};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontStyle === true && megaMenuGlobalTypographyData?.fontStyle ? `font-style: ${megaMenuGlobalTypographyData?.fontStyle};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textTransform === true && megaMenuGlobalTypographyData?.textTransform ? `text-transform: ${megaMenuGlobalTypographyData?.textTransform};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textDecoration === true && megaMenuGlobalTypographyData?.textDecoration ? `text-decoration: ${megaMenuGlobalTypographyData?.textDecoration};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === true && megaMenuGlobalTypographyData?.letterSpacing ? `letter-spacing: ${megaMenuGlobalTypographyData?.letterSpacing};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === true && megaMenuGlobalTypographyData?.lineHeight ? `line-height: ${megaMenuGlobalTypographyData?.lineHeight};` : ''}

                ${megaMenuGlobalTypoSwitcher?.fontFamily === false && megaMenuFontFamily && megaMenuFontFamily !== 'Default' ? `font-family: ${megaMenuFontFamily};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontSize === false && megaMenuFontSize?.Desktop && megaMenuFontSizeUnits?.Desktop ? `font-size: ${megaMenuFontSize?.Desktop}${megaMenuFontSizeUnits?.Desktop};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontWeight === false && megaMenuFontWeight ? `font-weight: ${megaMenuFontWeight};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontStyle === false && megaMenuFontStyle ? `font-style: ${megaMenuFontStyle};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textTransform === false && megaMenuTextTransform ? `text-transform: ${megaMenuTextTransform};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textDecoration === false && megaMenuTextDecoration ? `text-decoration: ${megaMenuTextDecoration};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === false && megaMenuLetterSpacing?.Desktop && megaMenuLetterSpacingUnits?.Desktop ? `letter-spacing: ${megaMenuLetterSpacing?.Desktop}${megaMenuLetterSpacingUnits?.Desktop};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === false && megaMenuLineHeight?.Desktop && megaMenuLineHeightUnits?.Desktop ? `line-height: ${megaMenuLineHeight?.Desktop}${megaMenuLineHeightUnits?.Desktop};` : ''}
                ${megaMenuDesktopPaddingWidth && megaMenuDesktopPadding?.top ? `padding: ${megaMenuDesktopPaddingWidth};` : ''}
                ${megaMenuDesktopMarginWidth && megaMenuDesktopMargin?.top ? `margin: ${megaMenuDesktopMarginWidth};` : ''}
                ${megaMenuBorder ? `border: ${megaMenuBorder};` : ''}
                ${megaMenuDesktopBorderWidth && megaMenuDesktopBorder?.top ? `border-width: ${megaMenuDesktopBorderWidth};` : ''}
                ${megaMenuDesktopBorderRadiusWidth && megaMenuDesktopBorderRadius?.top ? `border-radius: ${megaMenuDesktopBorderRadiusWidth};` : ''}
                ${megaMenuBorderColor ? `border-color: ${megaMenuBorderColor};` : ''}
                ${megaMenuColor ? `color: ${megaMenuColor};` : ''}
                gap: ${megaMenuIconGap?.Desktop}${megaMenuIconGapUnits?.Desktop};
                ${megaMenuTextColorType === 'gradient' ? `
                background: ${megaMenuTextCustomGradientColorSwitcher && megaMenuTextCustomGradientColor ? megaMenuTextCustomGradientColor : megaMenuTextGradientColor};
                ${megaMenuTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${megaMenuTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
                ${megaMenuTextBgColorType === "gradient"
            ? `background: ${megaMenuTextBackgroundCustomGradientColorSwitcher && megaMenuTextBackgroundCustomGradientColor
                ? megaMenuTextBackgroundCustomGradientColor
                : megaMenuTextBackgroundGradientColor
            };`
            : megaMenuTextBackgroundColor ? `background: ${megaMenuTextBackgroundColor};` : ''
            }
            ${megaMenuBoxShadowCssValue ? `box-shadow: ${megaMenuBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        
        
        .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link:hover{
            ${megaMenuHoverColor ? `color: ${megaMenuHoverColor} !important;` : ''}
            ${megaMenuBorderHoverColor ? `border-color: ${megaMenuBorderHoverColor};` : ''}
            ${megaMenuTextHoverColorType === 'gradient' ? `
                background: ${megaMenuTextHoverCustomGradientColorSwitcher && megaMenuTextHoverCustomGradientColor ? megaMenuTextHoverCustomGradientColor : megaMenuTextHoverGradientColor};
                ${megaMenuTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${megaMenuTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            ${megaMenuTextBgHoverColorType === "gradient"
            ? `background: ${megaMenuTextBackgroundHoverCustomGradientColorSwitcher && megaMenuTextBackgroundHoverCustomGradientColor
                ? megaMenuTextBackgroundHoverCustomGradientColor
                : megaMenuTextBackgroundHoverGradientColor
            };`
            : megaMenuTextBackgroundHoverColor ? `background: ${megaMenuTextBackgroundHoverColor};` : ''
            }
        }
        .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-panel{
            ${megaMenuWidthSwitcher === "content"
            ? `
            position: absolute;
                ${megaMenuContentWidthValue ? `width: ${megaMenuContentWidthValue?.Desktop}${megaMenuContentWidthValueUnits?.Desktop};` : ''}
                ${megaMenuContentTopPositionValue ? `top: ${megaMenuContentTopPositionValue?.Desktop}${megaMenuContentTopPositionUnits?.Desktop} !important;` : ''}
            `
            : megaMenuWidthSwitcher === "full"
                ? `
                    position: fixed;
                    width: 100%;
                `
                : ''
            }
        }
        .${blockId} .fb-advanced-mega-menu-link .fb-advanced-mega-menu-indicator svg{
            ${megaMenuIconColor ? `fill: ${megaMenuIconColor};` : ''}
            transform: rotate(${megaMenuIconRotation?.Desktop}deg);
            width: ${megaMenuIconSize?.Desktop}${megaMenuIconSizeUnits?.Desktop};
            height: ${megaMenuIconSize?.Desktop}${megaMenuIconSizeUnits?.Desktop};
        }

        .${blockId} .fb-advanced-mega-menu-link:hover .fb-advanced-mega-menu-indicator svg{
            ${megaMenuIconHoverColor ? `fill: ${megaMenuIconHoverColor};` : ''}
            transform: rotate(${megaMenuIconRotateHover?.Desktop}deg);
        }
        @media only screen and (max-width: 1024px) {
            .${blockId} .fb-advanced-mega-menu-wrapper{
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && megaMenuGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && megaMenuGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && megaMenuGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && megaMenuGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockId} .fb-advanced-mega-menu-wrapper:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockId} .fb-advanced-mega-menu-wrapper ul .fb-advanced-mega-menu-item{
                ${megaMenuTabletPaddingWidth && megaMenuTabletPadding?.top ? `padding: ${megaMenuTabletPaddingWidth};` : ''}
                ${megaMenuTabletMarginWidth && megaMenuTabletMargin?.top ? `margin: ${megaMenuTabletMarginWidth};` : ''}
                ${megaMenuTabletBorderWidth && megaMenuTabletBorder?.top ? `border-width: ${megaMenuTabletBorderWidth};` : ''}
                ${megaMenuTabletBorderRadiusWidth && megaMenuTabletBorderRadius?.top ? `border-radius: ${megaMenuTabletBorderRadiusWidth};` : ''}
            }
            .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link {
                ${megaMenuGlobalTypoSwitcher?.fontSize === false && megaMenuFontSize?.Tablet && megaMenuFontSizeUnits?.Tablet ? `font-size: ${megaMenuFontSize?.Tablet}${megaMenuFontSizeUnits?.Tablet};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === false && megaMenuLetterSpacing?.Tablet && megaMenuLetterSpacingUnits?.Tablet ? `letter-spacing: ${megaMenuLetterSpacing?.Tablet}${megaMenuLetterSpacingUnits?.Tablet};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === false && megaMenuLineHeight?.Tablet && megaMenuLineHeightUnits?.Tablet ? `line-height: ${megaMenuLineHeight?.Tablet}${megaMenuLineHeightUnits?.Tablet};` : ''}
                gap: ${megaMenuIconGap?.Tablet}${megaMenuIconGapUnits?.Tablet};
            }
            .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-panel{
                ${megaMenuWidthSwitcher === "content"
                ? `
                position: absolute;
                    ${megaMenuContentWidthValue ? `width: ${megaMenuContentWidthValue?.Tablet}${megaMenuContentWidthValueUnits?.Tablet};` : ''}
                    ${megaMenuContentTopPositionValue ? `top: ${megaMenuContentTopPositionValue?.Tablet}${megaMenuContentTopPositionUnits?.Tablet}; !important` : ''}
                `
                : megaMenuWidthSwitcher === "full"
                    ? `
                        position: fixed;
                        width: 100%;
                    `
                    : ''
                }
            }
            .${blockId} .fb-advanced-mega-menu-link .fb-advanced-mega-menu-indicator svg{
                transform: rotate(${megaMenuIconRotation?.Tablet}deg);
                width: ${megaMenuIconSize?.Tablet}${megaMenuIconSizeUnits?.Tablet};
                height: ${megaMenuIconSize?.Tablet}${megaMenuIconSizeUnits?.Tablet};
            }
        }
        @media only screen and (max-width: 767px) {   
            .${blockId} .fb-advanced-mega-menu-wrapper{
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && megaMenuGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && megaMenuGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && megaMenuGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && megaMenuGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockId} .fb-advanced-mega-menu-wrapper:hover{
                ${mobileBackgroundHoverStyles}
            }
            .${blockId} .fb-advanced-mega-menu-wrapper ul .fb-advanced-mega-menu-item{
                ${megaMenuMobilePaddingWidth && megaMenuMobilePadding?.top ? `padding: ${megaMenuMobilePaddingWidth};` : ''}
                ${megaMenuMobileMarginWidth && megaMenuMobileMargin?.top ? `margin: ${megaMenuMobileMarginWidth};` : ''}
                ${megaMenuMobileBorderWidth && megaMenuMobileBorder?.top ? `border-width: ${megaMenuMobileBorderWidth};` : ''}
                ${megaMenuMobileBorderRadiusWidth && megaMenuMobileBorderRadius?.top ? `border-radius: ${megaMenuMobileBorderRadiusWidth};` : ''}
            }
            .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link {
                ${megaMenuGlobalTypoSwitcher?.fontSize === false && megaMenuFontSize?.Mobile && megaMenuFontSizeUnits?.Mobile ? `font-size: ${megaMenuFontSize?.Mobile}${megaMenuFontSizeUnits?.Mobile};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === false && megaMenuLetterSpacing?.Mobile && megaMenuLetterSpacingUnits?.Mobile ? `letter-spacing: ${megaMenuLetterSpacing?.Mobile}${megaMenuLetterSpacingUnits?.Mobile};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === false && megaMenuLineHeight?.Mobile && megaMenuLineHeightUnits?.Mobile ? `line-height: ${megaMenuLineHeight?.Mobile}${megaMenuLineHeightUnits?.Mobile};` : ''}
                gap: ${megaMenuIconGap?.Mobile}${megaMenuIconGapUnits?.Mobile};
            }
            .${blockId} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-panel{
                ${megaMenuWidthSwitcher === "content"
                ? `
                position: absolute;
                    ${megaMenuContentWidthValue ? `width: ${megaMenuContentWidthValue?.Mobile}${megaMenuContentWidthValueUnits?.Mobile};` : ''}
                    ${megaMenuContentTopPositionValue ? `top: ${megaMenuContentTopPositionValue?.Mobile}${megaMenuContentTopPositionUnits?.Mobile}; !important` : ''}
                `
                : megaMenuWidthSwitcher === "full"
                    ? `
                        position: fixed;
                        width: 100%;
                    `
                    : ''
                }
            }
            .${blockId} .fb-advanced-mega-menu-link .fb-advanced-mega-menu-indicator svg{
                transform: rotate(${megaMenuIconRotation?.Mobile}deg);
                width: ${megaMenuIconSize?.Mobile}${megaMenuIconSizeUnits?.Mobile};
                height: ${megaMenuIconSize?.Mobile}${megaMenuIconSizeUnits?.Mobile};
            }
        }

    `, [
        blockId,
        blockStyle,
        attributes,
        megaMenuDesktopPaddingWidth,
        megaMenuTabletPaddingWidth,
        megaMenuMobilePaddingWidth,
        megaMenuDesktopMarginWidth,
        megaMenuTabletMarginWidth,
        megaMenuMobileMarginWidth,
        megaMenuDesktopBorderWidth,
        megaMenuTabletBorderWidth,
        megaMenuMobileBorderWidth,
        megaMenuDesktopBorderRadiusWidth,
        megaMenuTabletBorderRadiusWidth,
        megaMenuMobileBorderRadiusWidth,
        globalDesktopPadding,
        globalTabletPadding,
        globalMobilePadding,
        globalDesktopMargin,
        globalTabletMargin,
        globalMobileMargin,
        globalDesktopBorderWidth,
        globalTabletBorderWidth,
        globalMobileBorderWidth,
        globalDesktopBorderRadiusWidth,
        globalTabletBorderRadiusWidth,
        globalMobileBorderRadiusWidth,
    ]);

    const customCss = getCustomCss(megaMenuGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({ blockStyle: `${megaMenuBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim() });
    }, [megaMenuBlockStyle, customCss]);

    const editorStyle = `${megaMenuBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

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
                            max={megaMenuContentWidthValueUnits === '%' ? 100 : 2000}
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
                            min={0}
                            max={megaMenuContentTopPositionUnits === '%' ? 100 : 1000}
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
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
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
            <style>
                {`
				${editorStyle}
            `}
            </style>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}