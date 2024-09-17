import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, TextareaControl, Button } from '@wordpress/components';



export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.title || __("Default Title", "frontis-blocks")}
                </span>

                {/* Sort button */}
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "frontis-blocks")} />
                </span>

                {/* Delete button */}
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
                </div>
                
            )}
        </li>
    );
}
