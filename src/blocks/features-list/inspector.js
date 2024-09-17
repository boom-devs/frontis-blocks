import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import SortableItem from './sortableItem';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { blockID, FeatureItems } = attributes;
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = FeatureItems.findIndex(item => item.id === active.id);
            const newIndex = FeatureItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(FeatureItems, oldIndex, newIndex);
            setAttributes({ FeatureItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `item-${FeatureItems.length + 1}`, Title: 'New Feature', Description: 'New Description for feature', FeatureIcon: 'circle-check' };
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
        <InspectorControls>
            <PanelBody
                title={__("Feature", "frontis-blocks")}
                initialOpen={true}
            >
                <div className="fb-feature-wrapper">
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext items={FeatureItems.map(item => item.id)}>
                            <ul className='dnd-items-wrapper'>
                                {FeatureItems.map((item) => (
                                    <SortableItem
                                        key={item.id}
                                        id={item.id}
                                        item={item}
                                        handleChangeItem={handleChangeItem}
                                        handleDeleteItem={handleDeleteItem}
                                    />
                                ))}
                            </ul>
                        </SortableContext>
                        <Button isPrimary onClick={handleAddItem}>
                            {__("Add Feature", "frontis-blocks")}
                        </Button>
                    </DndContext>
                </div>
            </PanelBody>
        </InspectorControls>
    );
}
