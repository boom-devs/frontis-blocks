import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button, IconButton } from '@wordpress/components';
import { useState, useEffect } from "@wordpress/element";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable'; // Import arrayMove if not already
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { blockID, FeatureItems } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-Feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = FeatureItems.findIndex(item => item.id === active.id);
            const newIndex = FeatureItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(FeatureItems, oldIndex, newIndex);
            setAttributes({ FeatureItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `item-${FeatureItems.length + 1}`, title: 'New Feature', description: 'New description' };
        setAttributes({ FeatureItems: [...FeatureItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = FeatureItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ FeatureItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = FeatureItems.filter(item => item.id !== id);
        setAttributes({ FeatureItems: updatedItems });
    };

    

    return (
        <>
            <InspectorControls key="controls">
                <div className="fb-inspector-control">
                    <PanelBody
                        title={__("Feature", "frontis-blocks")}
                        initialOpen={true}
                    >
                        <div className="fb-Feature-wrapper">
                            <DndContext
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <div className='dnd-items-wrapper'>
                                    {FeatureItems.map((item) => (
                                        <PanelBody
                                            key={item.id}
                                            title={__(item.title || "Default Title", "frontis-blocks")}
                                            initialOpen={false}
                                            className='dnd-items-inner-wrapper'
                                        >
                                            <div className="fb-item-controls">
                                                <IconButton
                                                    icon="trash"
                                                    label={__("Delete", "frontis-blocks")}
                                                    onClick={() => handleDeleteItem(item.id)}
                                                    isDestructive
                                                />
                                            </div>
                                            <TextControl
                                                label={__("Title", "frontis-blocks")}
                                                value={item.title}
                                                onChange={(value) => handleChangeItem(item.id, 'title', value)}
                                            />
                                            <TextareaControl
                                                label={__("Description", "frontis-blocks")}
                                                value={item.description}
                                                onChange={(value) => handleChangeItem(item.id, 'description', value)}
                                            />
                                        </PanelBody>
                                    ))}
                                </div>
                                <Button isPrimary onClick={handleAddItem}>
                                    {__("Add Feature", "frontis-blocks")}
                                </Button>
                            </DndContext>
                        </div>
                    </PanelBody>
                </div>
            </InspectorControls>
        </>
    );
}
