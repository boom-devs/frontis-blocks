import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
    PanelBody, 
    TabPanel, 
    BaseControl, 
    Button, 
    ButtonGroup,
    SelectControl,
    RangeControl,
    ToggleControl
} from '@wordpress/components';
import SortableItem from './sortableItem';
import { SLIDER_TYPE } from "./constants/constants";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId, handleDragEnd, handleAddItem, handleChangeItem, handleDeleteItem, handleDuplicateItem }) {
    const { 
        blockId,
        sliderItems,
        blockStyle,
        
        autoplayDirection,
        speed,
        showNavigation,
        showPagination,
        
        /** Global Settings */
        sliderGlobalZIndex,
        
    } = attributes;


    useEffect(() => {
        if (clientId) {
            setAttributes({ blockId: `marquee-carousel-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);



    /** Start Slider Item Color Style */
    // const sliderItemCStyle = useMemo(() => { 
    //     let style = '';
    //     sliderItems.forEach(item => {
    //         if (item.showContentSwitcher) {
    //             style += 'display: block; ';
    //             style += '.fb-marquee-carousel-hover-text-wrapper { display: none; position: absolute; top: 0; left: 0; width: 100%; transition: opacity 0.3s ease-in-out; } ';
    //             style += '.fb-marquee-carousel-text-wrapper { transition: opacity 0.3s ease-in-out; } ';
    //             style += '.fb-marquee-carousel-content-wrapper:hover .fb-marquee-carousel-text-wrapper { opacity: 0; } ';
    //             style += '.fb-marquee-carousel-content-wrapper:hover .fb-marquee-carousel-hover-text-wrapper { display: block; opacity: 1; } ';
    //         } else {
    //             style += 'display: none; ';
    //         }
    //     });
    //     return style;
    // }, [sliderItems, blockId]);


    
    // useEffect(() => {
    //     setAttributes({blockStyle: `${sliderItemCStyle}`.replace(/\s+/g, ' ').trim()});  
    // }, [sliderItemCStyle]);

    // const editorStyle = `${sliderItemCStyle}`.replace(/\s+/g, ' ').trim();


    return (

        <>
            {/* <style>
            	{editorStyle}
            </style> */}
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
                                                                    handleDuplicateItem={handleDuplicateItem}
                                                                    index={index}
                                                                />
                                                            ))}
                                                        </ul>
                                                    </SortableContext>
                                                </DndContext>
                                                <Button isPrimary onClick={handleAddItem}>
                                                    {__("Add Slide", "frontis-blocks")}
                                                </Button>
                                            </div>
                                        </PanelBody>
                                        <PanelBody 
                                            title={__("General Settings", "frontis-blocks")} 
                                            initialOpen={false}
                                        >
                                            <RangeControl
                                                label={__("Transition Speed (ms)", "frontis-blocks")}
                                                value={speed}
                                                onChange={(value) => setAttributes({ speed: value })}
                                                min={100}
                                                max={5000}
                                                step={100}
                                            />
                                            
                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Carousel Styles", "frontis-blocks")} initialOpen={true}>

                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                                            <RangeControl
                                                label={__("Z-Index", "frontis-blocks")}
                                                value={sliderGlobalZIndex}
                                                onChange={(value) => setAttributes({ sliderGlobalZIndex: value })}
                                                min={-1}
                                                max={999}
                                            />
                                        </PanelBody>
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
