import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
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

export default function Inspector({ attributes, setAttributes, clientId, onAddItem}) {
    const { 
        blockId,
        sliderItems,
        blockStyle,
        
        infiniteLoop,
        allowTouchMove,
        pauseOnHover,
        autoplay,
        autoplayDelay,
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
                                        <PanelBody 
                                            title={__("General Settings", "frontis-blocks")} 
                                            initialOpen={false}
                                        >
                                            <ToggleControl
                                                label={__("Infinite Loop", "frontis-blocks")}
                                                checked={infiniteLoop}
                                                onChange={(value) => setAttributes({ infiniteLoop: value })}
                                            />

                                            <ToggleControl
                                                label={__("Allow Touch Move", "frontis-blocks")}
                                                checked={allowTouchMove}
                                                onChange={(value) => setAttributes({ allowTouchMove: value })}
                                            />

                                            <ToggleControl
                                                label={__("Pause on Hover", "frontis-blocks")}
                                                checked={pauseOnHover}
                                                onChange={(value) => setAttributes({ pauseOnHover: value })}
                                            />

                                            <ToggleControl
                                                label={__("Enable Autoplay", "frontis-blocks")}
                                                checked={autoplay}
                                                onChange={(value) => setAttributes({ autoplay: value })}
                                            />

                                            <RangeControl
                                                label={__("Autoplay Delay (ms)", "frontis-blocks")}
                                                value={autoplayDelay}
                                                onChange={(value) => setAttributes({ autoplayDelay: value })}
                                                min={500}
                                                max={10000}
                                                step={100}
                                            />

                                            <RangeControl
                                                label={__("Transition Speed (ms)", "frontis-blocks")}
                                                value={speed}
                                                onChange={(value) => setAttributes({ speed: value })}
                                                min={100}
                                                max={5000}
                                                step={100}
                                            />

                                            <ToggleControl
                                                label={__("Show Navigation", "frontis-blocks")}
                                                checked={showNavigation}
                                                onChange={(value) => setAttributes({ showNavigation: value })}
                                            />

                                            <ToggleControl
                                                label={__("Show Pagination", "frontis-blocks")}
                                                checked={showPagination}
                                                onChange={(value) => setAttributes({ showPagination: value })}
                                            />
                                            
                                        </PanelBody>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Carousel Styles", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Block Style", "frontis-blocks")}
                                                value={blockStyle}
                                                options={[
                                                    { label: __("Default", "frontis-blocks"), value: "" },
                                                    { label: __("Style 1", "frontis-blocks"), value: "style-1" },
                                                    { label: __("Style 2", "frontis-blocks"), value: "style-2" },
                                                ]}
                                                onChange={(value) => setAttributes({ blockStyle: value })}
                                            />
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
