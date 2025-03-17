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
    ToggleControl,
    TextareaControl, 
} from '@wordpress/components';

import FB_ImageControl from '@Components/image-control';

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
                    {item.title || __( `Marquee Item ${index + 1}`, "frontis-blocks" )} 
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
                    <ToggleControl
                        label={__("Show Content", "frontis-blocks")}
                        checked={item.showContentSwitcher}
                        onChange={(value) => handleChangeItem(item.id, 'showContentSwitcher', value)}
                    />
                    {item.showContentSwitcher && (
                        <>
                            <TextControl
                                label={__("Text", "frontis-blocks")}
                                value={item.marqueeCarouselText}
                                onChange={(value) => handleChangeItem(item.id, 'marqueeCarouselText', value)}
                            />
                            <TextControl
                                label={__("Hover Text", "frontis-blocks")}
                                value={item.marqueeCarouseHoverText}
                                onChange={(value) => handleChangeItem(item.id, 'marqueeCarouseHoverText', value)}
                            />
                        </>
                    )}
                </BaseControl>
                </div>
            )}
        </li>
    );
}
