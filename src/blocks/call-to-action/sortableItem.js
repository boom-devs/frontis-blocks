import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@wordpress/components';



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
                    {/* <FB_ImageControl
                        label={__("Image", "frontis-blocks")}
                        globalBackgroundImageUrl={item.teamMemberImageUrl}
                        setGlobalBackgroundImageUrl={(value) => handleChangeItem(item.id, 'teamMemberImageUrl', value)}
                        globalBackgroundImageAlt={item.teamMemberImageAlt}
                        setGlobalBackgroundImageAlt={(value) => handleChangeItem(item.id, 'teamMemberImageAlt', value)}
                        globalBackgroundImageID={item.teamMemberImageID}
                        setGlobalBackgroundImageID={(value) => handleChangeItem(item.id, 'teamMemberImageID', value)}
                        globalBackgroundImagePosition={item.teamMemberImagePosition}
                        setGlobalBackgroundImagePosition={(value) => handleChangeItem(item.id, 'teamMemberImagePosition', value)}
                        globalBackgroundImageAttachment={item.teamMemberImageAttachment}
                        setGlobalBackgroundImageAttachment={(value) => handleChangeItem(item.id, 'teamMemberImageAttachment', value)}
                        globalBackgroundImageRepeat={item.teamMemberImageRepeat}
                        setGlobalBackgroundImageRepeat={(value) => handleChangeItem(item.id, 'teamMemberImageRepeat', value)}
                        globalBackgroundImageSize={item.teamMemberImageSize}
                        setGlobalBackgroundImageSize={(value) => handleChangeItem(item.id, 'teamMemberImageSize', value)}
                    /> */}

                    <FB_ImageControl
                        label={__("Image", "frontis-blocks")}
                        globalBackgroundImageUrl={item.teamMemberImageUrl}  // Check this value
                        setGlobalBackgroundImageUrl={(value) => {
                            console.log("Setting Image URL:", value);  // Log the new URL
                            handleChangeItem(item.teamMemberImageUrl, 'teamMemberImageUrl', value);
                        }}
                        globalBackgroundImageAlt={item.teamMemberImageAlt}
                        setGlobalBackgroundImageAlt={(value) => handleChangeItem(item.id, 'teamMemberImageAlt', value)}
                        globalBackgroundImageID={item.teamMemberImageID}
                        setGlobalBackgroundImageID={(value) => handleChangeItem(item.id, 'teamMemberImageID', value)}
                        globalBackgroundImagePosition={item.teamMemberImagePosition}
                        setGlobalBackgroundImagePosition={(value) => handleChangeItem(item.id, 'teamMemberImagePosition', value)}
                        globalBackgroundImageAttachment={item.teamMemberImageAttachment}
                        setGlobalBackgroundImageAttachment={(value) => handleChangeItem(item.id, 'teamMemberImageAttachment', value)}
                        globalBackgroundImageRepeat={item.teamMemberImageRepeat}
                        setGlobalBackgroundImageRepeat={(value) => handleChangeItem(item.id, 'teamMemberImageRepeat', value)}
                        globalBackgroundImageSize={item.teamMemberImageSize}
                        setGlobalBackgroundImageSize={(value) => handleChangeItem(item.id, 'teamMemberImageSize', value)}
                    />


                </div>
            )}
        </li>
    );
}
