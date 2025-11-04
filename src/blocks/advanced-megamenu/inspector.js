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
    Button
} from '@wordpress/components';

import {
    BORDER_STYLES,
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

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        blockStyle,
        navigationGlobalCustomCSS,
        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
        menuLayout,
        menuAlignment,
        menuSpacing,
        menuItemColor,
        menuItemHoverColor,
        menuItemBackgroundColor,
        menuItemHoverBackgroundColor,
        menuItemPadding,
        submenuWidth,
        submenuBackgroundColor,
        megaMenuWidth,
        megaMenuBackgroundColor,
        megaMenuInteraction,
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

        // Background
        megaMenuBgColorTypeSwitcher,
        megaMenuBgColorType,
        megaMenuBgHoverColorType,
        megaMenuBgColor,
        megaMenuBgHoverColor,
        megaMenuBgGradientColor,
        megaMenuBgHoverGradientColor,
        megaMenuBgCustomGradientColorSwitcher,
        megaMenuBgCustomGradientColor,
        megaMenuBgHoverCustomGradientColorSwitcher,
        megaMenuBgHoverCustomGradientColor
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
        const allPatterns = select('core').getBlockPatterns() || [];

        let userPatterns = [];
        const blocks = select('core')?.getEntityRecords('postType', 'wp_block', { per_page: -1 });
        if (blocks) {
            userPatterns = blocks.filter((block) => block.wp_pattern_category);
        }

        return { allPatterns, userPatterns };
    }, []);

    useEffect(() => {
        const patternOptions = [{ value: '', label: __('Select a pattern', 'frontis-blocks') }];

        if (patternData.allPatterns?.length) {
            patternOptions.push(
                { value: 'core-separator', label: '--- Theme Patterns ---', disabled: true },
                ...patternData.allPatterns.map((pattern) => ({
                    value: pattern.name,
                    label: pattern.title || pattern.name,
                }))
            );
        }

        if (patternData.userPatterns?.length) {
            patternOptions.push(
                { value: 'user-separator', label: '--- User Patterns ---', disabled: true },
                ...patternData.userPatterns.map((pattern) => ({
                    value: 'user-' + pattern.id,
                    label: pattern.title?.raw || `Pattern ${pattern.id}`,
                }))
            );
        }

        setPatterns(patternOptions);
    }, [patternData]);

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
            label: `Menu Item ${MenuItemList.length + 1}`,
            url: '',
            patternSlug: '',
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

    const allBlockStyle = useMemo(() => `
        .${blockId} .fb-advanced-mega-menu-wrapper ul li {
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
            ${megaMenuBoxShadowCssValue ? `box-shadow: ${megaMenuBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            }


        }
    `, [
        blockId,
        blockStyle,
        attributes
    ]);

    const customCss = getCustomCss(navigationGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({ blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim() });
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    const generalControls = (
        <>
            <PanelBody title={__('Mega Menu Settings', 'frontis-blocks')} initialOpen={true}>
                <SelectControl
                    label={__('Trigger Type', 'frontis-blocks')}
                    value={triggerType}
                    options={MEGA_MENU_TRIGGERS}
                    onChange={(value) => setAttributes({ triggerType: value })}
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
                                        handleChangeItem={handleChangeItem}
                                        handleDeleteItem={handleDeleteItem}
                                        handleDuplicateItem={handleDuplicateItem}
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
            <PanelBody title={__("Menu Item", "frontis-blocks")} initialOpen={true}>
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
        </>
    );

    const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={true}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={navigationDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ navigationDesktopSwitcher: value })}
                            tabletValue={navigationTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ navigationTabletSwitcher: value })}
                            mobileValue={navigationMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ navigationMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={navigationGlobalCustomCSS}
                            onChangeValue={(value) => setAttributes({ navigationGlobalCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
    );

    return (
        <>
            <style>{editorStyle}</style>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}