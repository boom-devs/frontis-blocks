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
                    className="global-setting-background-color-setting-wrapper"
                    label={__("Slide Content", "gutenslider-blocks")}
                >
                    <Dropdown
                        className="global-setting-icon-dropdown"
                        contentClassName="global-setting-icon-dropdown-content"
                        popoverProps={{ placement: 'bottom-start' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <Button
                                variant="primary"
                                onClick={onToggle}
                                aria-expanded={isOpen}
                                className="global-setting-icon-btn"
                            >
                                <Dashicon icon="admin-generic" className="global-setting-panel-icon" />
                            </Button>
                        )}
                        renderContent={() => (
                            <div className="global-setting-contant-popup-wrapper">
                                <TextControl
                                    label={__("Sub Title", "gutenslider-blocks")}
                                    value={item.subTitle}
                                    onChange={(value) => handleChangeItem(item.id, "subTitle", value)}
                                    help= "Leave blank to hide subtitle"
                                />
                                <TextareaControl
                                    label={__("Title", "gutenslider-blocks")}
                                    value={item.title}
                                    onChange={(value) => handleChangeItem(item.id, "title", value)}
                                    help= "Leave blank to hide title"
                                />
                            </div>
                        )}
                    />
                </BaseControl>
                </div>
            )}
        </li>
    );
}
