import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, Button, ButtonGroup, Dashicon, BaseControl, Dropdown, ColorPicker, ColorPalette, ToggleControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker"; // Adjust the import path as needed
import { ICON_ALIGN, NORMAL_HOVER } from "./constants/constants"; // Adjust the import path as needed

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, index }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);
    // const [activeColorSwitcher, setActiveColorSwitcher] = useState(item.socialIconColorSwitcher);
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        backgroundColor: item.socialIconBgColor || 'transparent', // Set default background color
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    // Event handlers for updating item attributes
    const iconHandler = (IconName) => {
        handleChangeItem(item.id, 'socialIcon', IconName);
    };

    // const updateColorSwitcher = (value) => {
    //     handleChangeItem(item.id, 'socialIconColorSwitcher', value);
    //     setActiveColorSwitcher(value);
    // };

    const updateNormalColor = (color) => {
        handleChangeItem(item.id, 'socialIconColor', color.hex);
    };

    const updateHoverColor = (color) => {
        handleChangeItem(item.id, 'socialIconHoverColor', color.hex);
    };

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                <span className="sortable-title" onClick={toggleOpen}>
                {item.Title || __( `Social Item ${index + 1}`, "frontis-blocks" )}
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

                    {/* <BaseControl label={__("Color Switcher", "frontis-blocks")}>
                        <ButtonGroup className="fb-setting-color-panel-btn">
                            {NORMAL_HOVER.map((switcher, key) => (
                                <Button
                                    key={key}
                                    onClick={() => updateColorSwitcher(switcher.value)}
                                    className={`fb-setting-color-panel-btn-switchr ${activeColorSwitcher === switcher.value ? 'active' : ''}`}
                                >
                                    {switcher.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>

                    {activeColorSwitcher === 'normal' && (
                        <BaseControl 
                            label={__("Normal Color", "frontis-blocks")}
                            className="fb-setting-color-setting-wrapper"
                        >
                            <Dropdown
                                className="fb-setting-color-setting-icon-dropdown"
                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                popoverProps={{ placement: 'bottom-start' }}
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button
                                        variant="primary"
                                        onClick={onToggle}
                                        aria-expanded={isOpen}
                                        className="fb-setting-color-setting-icon-btn"
                                    >
                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <div className="fb-setting-color-setting-icon-popup">
                                        <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                            <div className="fb-setting-normal-color">
                                                <ColorPicker
                                                    color={item.socialIconColor}
                                                    onChange={updateNormalColor}
                                                    enableAlpha={true}
                                                />
                                                <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                <ColorPalette
                                                    colors={[
                                                        { color: '#F72585' },
                                                        { color: '#7209B7' },
                                                        { color: '#3A0CA3' },
                                                        { color: '#4361EE' },
                                                        { color: '#4CC9F0' },
                                                    ]}
                                                    disableCustomColors={true}
                                                    value={item.socialIconColor}
                                                    onChange={updateNormalColor}
                                                />
                                            </div>
                                        </BaseControl>
                                    </div>
                                )}
                            />
                        </BaseControl>
                    )}

                    {activeColorSwitcher === 'hover' && (
                        <BaseControl 
                            label={__("Hover Color", "frontis-blocks")}
                            className="fb-setting-color-setting-wrapper"
                        >
                            <Dropdown
                                className="fb-setting-color-setting-icon-dropdown"
                                contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                popoverProps={{ placement: 'bottom-start' }}
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button
                                        variant="primary"
                                        onClick={onToggle}
                                        aria-expanded={isOpen}
                                        className="fb-setting-color-setting-icon-btn"
                                    >
                                        <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <div className="fb-setting-color-setting-icon-popup">
                                        <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                            <div className="fb-setting-hover-color">
                                                <ColorPicker
                                                    color={item.socialIconHoverColor}
                                                    onChange={updateHoverColor}
                                                    enableAlpha={true}
                                                />
                                                <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                <ColorPalette
                                                    colors={[
                                                        { color: '#F72585' },
                                                        { color: '#7209B7' },
                                                        { color: '#3A0CA3' },
                                                        { color: '#4361EE' },
                                                        { color: '#4CC9F0' },
                                                    ]}
                                                    disableCustomColors={true}
                                                    value={item.socialIconHoverColor}
                                                    onChange={updateHoverColor}
                                                />
                                            </div>
                                        </BaseControl>
                                    </div>
                                )}
                            />
                        </BaseControl>
                    )} */}

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
