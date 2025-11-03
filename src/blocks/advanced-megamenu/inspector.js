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
        triggerType
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

    const allBlockStyle = useMemo(() => `
        .${blockId} {
            /* Add your custom styles here */
        }
    `, [
        blockId,
        blockStyle,
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
            <PanelBody title={__("Menu Item Style", "frontis-blocks")} initialOpen={true}>
                <FB_ColorControl
                    label={__("Text Color", "frontis-blocks")}
                    value={menuItemColor}
                    onChange={(value) => setAttributes({ menuItemColor: value })}
                />

                <FB_ColorControl
                    label={__("Text Hover Color", "frontis-blocks")}
                    value={menuItemHoverColor}
                    onChange={(value) => setAttributes({ menuItemHoverColor: value })}
                />

                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    value={menuItemBackgroundColor}
                    onChange={(value) => setAttributes({ menuItemBackgroundColor: value })}
                />

                <FB_ColorControl
                    label={__("Background Hover Color", "frontis-blocks")}
                    value={menuItemHoverBackgroundColor}
                    onChange={(value) => setAttributes({ menuItemHoverBackgroundColor: value })}
                />
            </PanelBody>

            <PanelBody title={__("Submenu Style", "frontis-blocks")} initialOpen={false}>
                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    value={submenuBackgroundColor}
                    onChange={(value) => setAttributes({ submenuBackgroundColor: value })}
                />
            </PanelBody>

            <PanelBody title={__("Mega Menu Style", "frontis-blocks")} initialOpen={false}>
                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    value={megaMenuBackgroundColor}
                    onChange={(value) => setAttributes({ megaMenuBackgroundColor: value })}
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