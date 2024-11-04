import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, Button, Dashicon, BaseControl, Dropdown, ToggleControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, index }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: item.socialIconBgColor || 'transparent',
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    const iconHandler = (IconName) => {
        handleChangeItem(item.id, 'socialIcon', IconName);
    };

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.socialIconTitle || __( `Social Item ${index + 1}`, "frontis-blocks" )}
                </span>

                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "frontis-blocks")} aria-label={__("Move item", "frontis-blocks")} />
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
                    <BaseControl label={__("Icon", "frontis-blocks")}>
                        <FBIconPicker value={item.socialIcon} setIconHandler={iconHandler} />
                    </BaseControl>

                    <BaseControl label={__("Title", "frontis-blocks")}>
                        <TextControl
                            value={item.socialIconTitle || __( `Social Item ${index + 1}`, "frontis-blocks" )} // Changed from item.Title to item.socialIconTitle
                            onChange={(value) => handleChangeItem(item.id, 'socialIconTitle', value)} // Changed key from 'Title' to 'socialIconTitle'
                        />
                    </BaseControl>

                    <div className="fb-link-control-wrapper">
                        <BaseControl 
                            label={__("URL", "frontis-blocks")}
                        >
                            <div className="fb-link-control-inner-wrapper">
                                <TextControl
                                    value={item.socialIconUrl}
                                    onChange={(value) => handleChangeItem(item.id, 'socialIconUrl', value)}
                                    className="fb-link-control-url"
                                    placeholder={__('https://', 'frontis-blocks')}
                                />
                                <Dropdown
                                    className="fb-setting-dropdown-icon-wrapper"
                                    contentClassName="fb-setting-dropdown-icon-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                            className="fb-setting-dropdown-icon-btn"
                                        >
                                            <Dashicon icon="color-picker" className="fb-setting-dropdown-icon" />
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-link-control-icon-popup">
                                            <BaseControl className="fb-link-control-icon-popup-inner">
                                                <ToggleControl
                                                    label={__("Open in new tab", "frontis-blocks")}
                                                    checked={item.socialIconTargetUrl}
                                                    onChange={(value) => handleChangeItem(item.id, 'socialIconTargetUrl', value)}
                                                />
                                            </BaseControl>
                                        </div>
                                    )}
                                />
                            </div>
                        </BaseControl>
                    </div>
                </div>
            )}
        </li>
    );
}