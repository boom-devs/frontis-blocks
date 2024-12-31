import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { PanelBody, TabPanel, Button } from '@wordpress/components';
import SortableItem from './sortableItem';
import {useDeviceType} from "@Config/displayType";
import './editor.scss';


export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
        blockStyle,
        sliderItems,


    } = attributes;
    
    const deviceType= useDeviceType();
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-slider-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = sliderItems.findIndex((item) => item.id === active.id);
            const newIndex = sliderItems.findIndex((item) => item.id === over.id);
            setAttributes({ sliderItems: arrayMove(sliderItems, oldIndex, newIndex) });
        }
    };

    const handleAddItem = () => {
        const newItem = {
            id: `item-${sliderItems.length + 1}`,
            title: `Slider Item ${sliderItems.length + 1}`,
        };
        setAttributes({ sliderItems: [...sliderItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        setAttributes({
            sliderItems: sliderItems.map((item) =>
                item.id === id ? { ...item, [key]: value } : item
            ),
        });
    };

    const handleDeleteItem = (id) => {
        setAttributes({ sliderItems: sliderItems.filter((item) => item.id !== id) });
    };


    return (
        <>
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
                                        <PanelBody title={__("Slider", "frontis-blocks")} initialOpen>
                                            <div className="fb-slider-wrapper">
                                                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                                    <SortableContext items={sliderItems.map((item) => item.id)}>
                                                        <ul className="dnd-items-wrapper">
                                                            {sliderItems.map((item) => (
                                                                <SortableItem
                                                                    key={item.id}
                                                                    id={item.id}
                                                                    item={item}
                                                                    handleChangeItem={handleChangeItem}
                                                                    handleDeleteItem={handleDeleteItem}
                                                                    setAttributes={setAttributes}
                                                                />
                                                            ))}
                                                        </ul>
                                                    </SortableContext>
                                                </DndContext>
                                                <Button isPrimary onClick={handleAddItem}>
                                                    {__("Add Slider", "frontis-blocks")}
                                                </Button>
                                            </div>
                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Slider", "frontis-blocks")}
                                            initialOpen={true}
                                            className="fb-setting-feature-list-wrapper"
                                        >

                                        </PanelBody> 
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                <>
                                    <div className="fb-setting-advanced-tab-wrapper">
                                        <div className="fb-setting-inner-wrapper">
                                            <PanelBody
                                                title={__("Advanced", "frontis-blocks")}
                                                initialOpen={true}
                                                className='fb-setting-z-index-header'
                                            >
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
