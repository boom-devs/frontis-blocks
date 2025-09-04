import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, TextareaControl, Button, ButtonGroup, BaseControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);


    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    const iconHandler = (IconName) => {
        handleChangeItem(item.id, 'teamMemberSocialIcon', IconName);
    };

    const TrashIcon = (
        <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.82692 6L9.59615 12M6.40385 12L6.17308 6M12.8184 3.86038C13.0464 3.89481 13.2736 3.93165 13.5 3.97086M12.8184 3.86038L12.1065 13.115C12.0464 13.8965 11.3948 14.5 10.611 14.5H5.38905C4.60524 14.5 3.95358 13.8965 3.89346 13.115L3.18157 3.86038M12.8184 3.86038C12.0542 3.74496 11.281 3.65657 10.5 3.59622M2.5 3.97086C2.72638 3.93165 2.95358 3.89481 3.18157 3.86038M3.18157 3.86038C3.94585 3.74496 4.719 3.65657 5.5 3.59622M10.5 3.59622V2.98546C10.5 2.19922 9.8929 1.54282 9.10706 1.51768C8.73948 1.50592 8.37043 1.5 8 1.5C7.62957 1.5 7.26052 1.50592 6.89294 1.51768C6.1071 1.54282 5.5 2.19922 5.5 2.98546V3.59622M10.5 3.59622C9.67504 3.53247 8.84131 3.5 8 3.5C7.15869 3.5 6.32496 3.53247 5.5 3.59622" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
    const MoveIcon = (
        <svg xmlns="https://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.Title || __("Default Title", "frontis-blocks")}
                </span>

                {/* Sort button */}
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon={MoveIcon} label={__("Sort", "frontis-blocks")} />
                </span>

                {/* Delete button */}
                <span className="sortable-delete">
                    <Button
                        icon={TrashIcon}
                        label={__("Delete", "frontis-blocks")}
                        onClick={() => handleDeleteItem(item.id)}
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">

                    <TextControl
                        label={__("Title", "frontis-blocks")}
                        value={item.Title}
                        onChange={(value) => handleChangeItem(item.id, 'Title', value)}
                    />

                    <TextControl
                        label={__("Link", "frontis-blocks")}
                        value={item.link}
                        onChange={(value) => handleChangeItem(item.id, 'link', value)}
                    />

                    <div className='fb-feature-icon-wrapper'>
                        <BaseControl
                            label={__("Icon", "frontis-blocks")}
                            className="fb-feature-icon"
                        >
                            <FBIconPicker value={item.teamMemberSocialIcon} setIconHandler={iconHandler} />
                        </BaseControl>
                    </div>
                </div>
            )}
        </li>
    );
}
