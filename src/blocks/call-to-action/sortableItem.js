import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@wordpress/components';
import { MediaPlaceholder } from '@wordpress/block-editor';


import {
    ICON_ALIGN,
} from "./constants/constants";
import FB_ImageControl from '../../components/image-control';

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
                    {item.Title || __("Default Title", "frontis-blocks")}
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
                    <FB_ImageControl
                        label={__("Image", "frontis-blocks")}
                        globalImageUrl={item.teamMemberImageUrl}
                        setglobalImageUrl={(value) => handleChangeItem(item.id, 'url', value)}
                        globalImageAlt={item.teamMemberImageAlt}
                        setglobalImageAlt={(value) => handleChangeItem('alt', value)}
                        globalImageID={item.teamMemberImageID}
                        setglobalImageID={(value) => handleChangeItem('id', value)}
                    />
                </div>
            )}
        </li>
    );
}
