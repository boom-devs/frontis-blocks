import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, Button, Dashicon, BaseControl, Dropdown, ToggleControl, ColorPicker } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";
import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BackgroundColorControl from '@Components/background-color-control';

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, index }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        // backgroundColor: item.socialIconBgColor || 'transparent',
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
                            value={item.socialIconTitle || __( `Social Item ${index + 1}`, "frontis-blocks" )}
                            onChange={(value) => handleChangeItem(item.id, 'socialIconTitle', value)}
                        />
                    </BaseControl>


                    <FB_SwitcherControl
                        label={__("Icon Color", "frontis-blocks")}
                        globalSwitcher={item.socialIconColorSwitcher}
                        setGlobalSwitcher={(value) => handleChangeItem(item.id, 'socialIconColorSwitcher', value)}
                    />

                    {item.socialIconColorSwitcher === 'normal' && (
                        <>
                            <FB_ColorControl
                                label={__("Color", "frontis-blocks")} 
                                globalColor={item.socialIconColor}
                                setGlobalColor={(value) => handleChangeItem(item.id, 'socialIconColor', value)}
                            />

                            <FB_ColorControl
                                label={__("Background Color", "frontis-blocks")} 
                                globalColor={item.socialIconBgColor}
                                setGlobalColor={(value) => handleChangeItem(item.id, 'socialIconBgColor', value)}
                            />
                        </>
                    )}

                    {item.socialIconColorSwitcher === 'hover' && (
                        <>
                            <FB_ColorControl
                                label={__("Color", "frontis-blocks")} 
                                globalColor={item.socialIconHoverColor}
                                setGlobalColor={(value) => handleChangeItem(item.id, 'socialIconHoverColor', value)}
                            />

                            <FB_ColorControl
                                label={__("Background Color", "frontis-blocks")} 
                                globalColor={item.socialIconHoverBgColor}
                                setGlobalColor={(value) => handleChangeItem(item.id, 'socialIconHoverBgColor', value)}
                            />
                        </>
                    )}

                    <FB_BackgroundColorControl
                        label={__("Item Background Color", "frontis-blocks")}
                        bgColorSwitcher={item.socialItemBgColorSwitcher}
                        setBgColorSwitcher={(value) => handleChangeItem(item.id, 'socialItemBgColorSwitcher', value)}
                                
                        normalBackgroundType={item.normalItemBackgroundType}
                        setNormalBackgroundType={(value) => handleChangeItem(item.id, 'normalItemBackgroundType', value)}
                        normalClassicColor={item.normalItemClassicColor}
                        setNormalClassicColor={(value) => handleChangeItem(item.id, 'normalItemClassicColor', value)}
                        normalGradientColor={item.normalItemGradientColor}
                        setNormalGradientColor={(value) => handleChangeItem(item.id, 'normalItemGradientColor', value)}
                        normalCustomGradientSwitcher={item.normalItemCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => handleChangeItem(item.id, 'normalItemCustomGradientSwitcher', value)}
                        normalCustomGradientInputValue={item.normalItemCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => handleChangeItem(item.id, 'normalItemCustomGradientInputValue', value)}
                                
                        hoverBackgroundType={item.hoverItemBackgroundType}
                        setHoverBackgroundType={(value) => handleChangeItem(item.id, 'hoverItemBackgroundType', value)}
                        hoverClassicColor={item.hoverItemClassicColor}
                        setHoverClassicColor={(value) => handleChangeItem(item.id, 'hoverItemClassicColor', value)}
                        hoverGradientColor={item.hoverItemGradientColor} 
                        setHoverGradientColor={(value) => handleChangeItem(item.id, 'hoverItemGradientColor', value)}
                        hoverCustomGradientSwitcher={item.hoverItemCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => handleChangeItem(item.id, 'hoverItemCustomGradientSwitcher', value)}
                        hoverCustomGradientInputValue={item.hoverItemCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => handleChangeItem(item.id, 'hoverItemCustomGradientInputValue', value)}

                        isBackgroundImage={false}
                    />




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