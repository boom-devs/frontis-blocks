import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, BaseControl, TextareaControl, TextControl } from '@wordpress/components';
import FB_HtmlTagControl from '@Components/html-tag-control';
export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, handleDuplicateItem, index }) {
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
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.animatedHeadingTitle || __( `Typing Text ${index + 1}`, "frontis-blocks" )}
                </span>

                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "frontis-blocks")} aria-label={__("Move item", "frontis-blocks")} />
                </span>
                <span className="sortable-duplicate">
                    <Button 
                        icon="admin-page" 
                        label={__("Duplicate", "frontis-blocks")} 
                        aria-label={__("Duplicate item", "frontis-blocks")}
                        onClick={() => handleDuplicateItem(item.id)}
                    />
                </span>

                <span className="sortable-delete">
                    <Button 
                        icon="trash" 
                        label={__("Delete", "frontis-blocks")} 
                        aria-label={__("Delete item", "frontis-blocks")}
                        onClick={() => handleDeleteItem(item.id)} 
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">
                    <BaseControl label={__("Typing Text", "frontis-blocks")}>
                        <TextControl 
                            value={item.animatedHeadingTitle || __( `Typing Text ${index + 1}`, "frontis-blocks" )}
                            onChange={(value) => handleChangeItem(item.id, 'animatedHeadingTitle', value)}
                        />
                    </BaseControl>
                </div>
            )}
        </li>
    );
}