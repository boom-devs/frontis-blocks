import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { PanelBody, TabPanel, BaseControl, Button, ButtonGroup } from '@wordpress/components';
import SortableItem from './sortableItem';
import { SLIDER_TYPE } from "./constants/constants";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId, onAddItem}) {
    const { 
        blockId,
        sliderItems,
        blockStyle,
        sliderType,

        /** Global Settings */
        sliderGlobalZIndex,
        
    } = attributes;


    useEffect(() => {
        if (clientId) {
            setAttributes({ blockId: `marquee-carousel-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    const [sliderItemList, setSliderItemList] = useState(sliderItems);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = sliderItems.findIndex(item => item.id === active.id);
            const newIndex = sliderItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(sliderItems, oldIndex, newIndex);
            setAttributes({ sliderItems: updatedItems });
            setSliderItemList(updatedItems);
        }
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = sliderItemList.map(item => {
            if (item.id === id) {
                if (key === 'normalBackgroundImageID') {
                    // Get the full image data from WordPress media library
                    const image = wp.media.attachment(value).toJSON();
                    return {
                        ...item,
                        [key]: value,
                        'normalBackgroundImageUrl': image.url,
                        'normalBackgroundImageAlt': image.alt || ''
                    };
                }
                if (key === 'hoverBackgroundImageID') {
                    // Get the full image data from WordPress media library
                    const image = wp.media.attachment(value).toJSON();
                    return {
                        ...item,
                        [key]: value,
                        'hoverBackgroundImageUrl': image.url,
                        'hoverBackgroundImageAlt': image.alt || ''
                    };
                }
                return { ...item, [key]: value };
            }
            return item;
        });
        
        setSliderItemList(updatedItems);
        setAttributes({ sliderItems: updatedItems });
    };


    const handleDeleteItem = (id) => {
        const updatedItems = sliderItemList.filter(item => item.id !== id);
        setAttributes({ sliderItems: updatedItems });
        setSliderItemList(updatedItems);
    };

    //Sync sliderItemList with attributes.sliderItems
    useEffect(() => {
        setAttributes({ sliderItems: sliderItemList });
    }, [sliderItemList, setAttributes]);



    return (

        <>
            <InspectorControls>
                <div className="fb-inspector-control">
                    <TabPanel
                        className="fb-parent-tab-panel"
                        activeClass="active-tab"
                        tabs={[
                            { name: "general", title: __("General", "frontis-blocks"), className: "fb-tab general" },
                            { name: "styles", title: __("Style", "frontis-blocks"), className: "fb-tab styles" },
                            { name: "advanced", title: __("Advanced", "frontis-blocks"), className: "fb-tab advanced" },
                        ]}
                    >
                        {(tab) => (
                            <div className={`fb-tab-controls ${tab.name}`}>
                                {tab.name === "general" && (
                                    <>
                                        <PanelBody title={__("Slider Items", "frontis-blocks")} initialOpen={true}>
                                            <div className="fb-marquee-carousel-wrapper">
                                                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                                    <SortableContext items={sliderItems.map((item) => item.id)}>
                                                        <ul className="dnd-items-wrapper">
                                                            {sliderItems.map((item, index) => (
                                                                <SortableItem
                                                                    key={item.id}
                                                                    id={item.id}
                                                                    item={item}
                                                                    handleChangeItem={handleChangeItem}
                                                                    handleDeleteItem={handleDeleteItem}
                                                                    index={index}
                                                                />
                                                            ))}
                                                        </ul>
                                                    </SortableContext>
                                                </DndContext>
                                                <Button isPrimary onClick={onAddItem}>
                                                    {__("Add Slide", "frontis-blocks")}
                                                </Button>
                                            </div>
                                        </PanelBody>
                                        <PanelBody title={__("General Settings", "frontis-blocks")} initialOpen={false}>
                                            General Settings
                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        Styles Settings
                                    </>
                                )}

                                {tab.name === "advanced" && (
                                    <>
                                        Advanced Settings
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
