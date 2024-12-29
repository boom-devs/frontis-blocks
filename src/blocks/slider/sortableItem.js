import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import {
    TextControl,
    Button,
    BaseControl,
    Dropdown,
    Dashicon,
} from '@wordpress/components';

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen((prevState) => !prevState);

    const handleAddNestedItem = () => {
        const newNestedItem = {
            id: `slider-item-${item.nestedItems?.length + 1 || 1}`, 
            title: `Slider Item ${item.nestedItems?.length + 1 || 1}`,
        };
        handleChangeItem(item.id, 'nestedItems', [
            ...(item.nestedItems || []),
            newNestedItem,
        ]);
    };

    const handleNestedItemChange = (nestedId, key, value) => {
        const updatedNestedItems = (item.nestedItems || []).map((nestedItem) =>
            nestedItem.id === nestedId ? { ...nestedItem, [key]: value } : nestedItem
        );
        handleChangeItem(item.id, 'nestedItems', updatedNestedItems);
    };

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.title || __("Default Title", "frontis-blocks")}
                </span>
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "frontis-blocks")} />
                </span>
                <span className="sortable-delete">
                    <Button
                        icon="trash"
                        label={__("Delete", "frontis-blocks")}
                        onClick={() => handleDeleteItem(item.id)}
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">
                    <div className="fb-setting-color-container">
                        <BaseControl
                            label={__("Content", "frontis-blocks")}
                            className="fb-setting-color-setting-wrapper"
                        >
                            <Dropdown
                                className="fb-setting-color-setting-icon-dropdown"
                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                popoverProps={{ placement: 'bottom-start' }}
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button
                                        variant="primary"
                                        onClick={onToggle}
                                        aria-expanded={isOpen}
                                        className="fb-setting-color-setting-icon-btn"
                                    >
                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <div className="fb-setting-content-popup">
                                        <BaseControl className="fb-setting-content-popup-inner">
                                            <div className="nested-repeater-wrapper">
                                                {(item.nestedItems || []).map((nestedItem) => (
                                                    <TextControl
                                                        key={nestedItem.id}
                                                        label={__("Title", "frontis-blocks")}
                                                        value={nestedItem.title}
                                                        onChange={(value) =>
                                                            handleNestedItemChange(
                                                                nestedItem.id,
                                                                'title',
                                                                value
                                                            )
                                                        }
                                                    />
                                                ))}
                                                <Button
                                                    isPrimary
                                                    onClick={handleAddNestedItem}
                                                    style={{ marginBottom: '10px' }}
                                                >
                                                    {__("Add Title", "frontis-blocks")}
                                                </Button>
                                            </div>
                                        </BaseControl>
                                    </div>
                                )}
                            />
                        </BaseControl>
                    </div>
                </div>
            )}
        </li>
    );
}

