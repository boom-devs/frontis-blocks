import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, SelectControl, Button, BaseControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";
import generateSvgIcon from '@Utils/generateSvgIcon';
export default function SortableItem({
    id,
    item,
    handleChangeItem,
    handleDeleteItem,
    handleDuplicateItem,
    index,
    patterns,
}) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    useEffect(() => {
        if (item.megaMenuIcon) {
            const svgString = generateSvgIcon(item.megaMenuIcon);
            handleChangeItem(item.id, 'megaMenuIconFrontend', svgString);
        }
    }, [item.megaMenuIcon]);

    console.log('item in sortable', item.megaMenuIconFrontend);
    const toggleOpen = () => setIsOpen(!isOpen);

    const iconHandler = (IconName) => {
        handleChangeItem(item.id, 'megaMenuIcon', IconName || 'angle-down');
    };

    const TrashIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M9.827 6 9.596 12M6.404 12 6.173 6M12.818 3.86C13.046 3.895 13.274 3.932 13.5 3.971M12.818 3.86 12.106 13.115C12.046 13.897 11.395 14.5 10.611 14.5H5.389C4.605 14.5 3.954 13.897 3.893 13.115L3.182 3.86M12.818 3.86C12.054 3.745 11.281 3.657 10.5 3.596M2.5 3.971C2.726 3.932 2.954 3.895 3.182 3.86M3.182 3.86C3.946 3.745 4.719 3.657 5.5 3.596M10.5 3.596V2.985C10.5 2.199 9.893 1.543 9.107 1.518A47.6 47.6 0 0 0 8 1.5a47.6 47.6 0 0 0-1.107.018C6.107 1.543 5.5 2.199 5.5 2.985V3.596M10.5 3.596C9.675 3.532 8.841 3.5 8 3.5c-.841 0-1.675.032-2.5.096"
                stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    );

    const MoveIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M2.188 2.188V4.813M2.188 2.188H4.813M2.188 2.188L5.25 5.25M2.188 11.813V9.188M2.188 11.813H4.813M2.188 11.813L5.25 8.75M11.813 2.188H9.188M11.813 2.188V4.813M11.813 2.188L8.75 5.25M11.813 11.813H9.188M11.813 11.813V9.188M11.813 11.813L8.75 8.75"
                stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    );

    const DuplicateIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 48 48">
            <path fillRule="evenodd" clipRule="evenodd" d="M29.283 4.885C28.719 4.318 27.954 4 27.156 4H15a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17v1a1 1 0 0 1-1 1H11a2 2 0 0 1-2-2V9a1 1 0 1 0-2 0v32a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V17h1a1 1 0 1 0 0-2h-1v-.128a2 2 0 0 0-.871-1.114L29.283 4.885ZM27.027 15H36v-.112a1 1 0 0 0-.291-.692l-7.844-7.888a1 1 0 0 0-.71-.308H15a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V17h-9.771a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0V15Z"
                fill="#000"
            />
        </svg>
    );


    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            {/* Header */}
            <div className="sortable-header">
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.label || __(`Menu Item ${index + 1}`, "frontis-blocks")}
                </span>

                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon={MoveIcon} label={__("Sort", "frontis-blocks")} />
                </span>

                <span className="sortable-duplicate">
                    <Button
                        icon={DuplicateIcon}
                        label={__("Duplicate", "frontis-blocks")}
                        aria-label={__("Duplicate item", "frontis-blocks")}
                        onClick={() => handleDuplicateItem(item.id)}
                    />
                </span>

                <span className="sortable-delete">
                    <Button
                        icon={TrashIcon}
                        label={__("Delete", "frontis-blocks")}
                        onClick={() => handleDeleteItem(item.id)}
                        isDestructive
                    />
                </span>
            </div>

            {/* Expanded content */}
            {isOpen && (
                <div className="sortable-item-content">
                    <TextControl
                        label={__("Label", "frontis-blocks")}
                        value={item.label}
                        onChange={(value) => handleChangeItem(item.id, 'label', value)}
                        help={__("This is the text displayed for the menu item.", "frontis-blocks")}
                    />

                    <TextControl
                        label={__("URL (optional)", "frontis-blocks")}
                        value={item.url}
                        onChange={(value) => handleChangeItem(item.id, 'url', value)}
                        placeholder="https://example.com"
                        help={__("Enter a link or leave empty if this is a parent item.", "frontis-blocks")}
                    />

                    <SelectControl
                        label={__("Pattern (for Mega Menu)", "frontis-blocks")}
                        value={item.patternSlug}
                        options={patterns}
                        onChange={(value) => handleChangeItem(item.id, 'patternSlug', value)}
                        help={__("Select a pattern to display as mega menu content.", "frontis-blocks")}
                    />

                    {(item.patternSlug) && (
                        <BaseControl label={__("Icon", "frontis-blocks")}>
                            <FBIconPicker value={item.megaMenuIcon || 'angle-down'} />
                        </BaseControl>
                    )}

                </div>
            )}
        </li>
    );
}
