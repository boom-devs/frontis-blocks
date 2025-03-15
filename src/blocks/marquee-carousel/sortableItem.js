import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { 
    Button, 
    BaseControl, 
    Dropdown,
    Dashicon, 
    TextControl,
    TextareaControl, 
} from '@wordpress/components';

import FB_ImageControl from '@Components/image-control';

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, index }) {
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
                    {item.title || __( `Social Item ${index + 1}`, "gutenslider-blocks" )}
                </span>
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "gutenslider-blocks")} aria-label={__("Move item", "gutenslider-blocks")} />
                </span>
                <span className="sortable-delete">
                    <Button 
                        icon="trash" 
                        label={__("Delete", "gutenslider-blocks")} 
                        aria-label={__("Delete item", "gutenslider-blocks")}
                        onClick={() => handleDeleteItem(item.id)} 
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">

                <BaseControl
                    className="fb-marquee-carousel-setting-wrapper" 
                >
                    <FB_ImageControl 
                        globalImageUrl={item.marqueeCarouselImageUrl}
                        setglobalImageUrl={(value) => handleChangeItem(item.id, 'marqueeCarouselImageUrl', value)}
                        globalImageAlt={item.marqueeCarouselImageAlt}
                        setglobalImageAlt={(value) => handleChangeItem(item.id, 'marqueeCarouselImageAlt', value)}
                        globalImageID={item.marqueeCarouselImageID}
                        setglobalImageID={(value) => handleChangeItem(item.id, 'marqueeCarouselImageID', value)}
                        isImageSize = {false}
                    />
                    <TextControl
                        label={__("Title", "gutenslider-blocks")}
                        value={item.marqueeCarouselTitle}
                        onChange={(value) => handleChangeItem(item.id, 'marqueeCarouselTitle', value)}
                    />
                </BaseControl>
                </div>
            )}
        </li>
    );
}
