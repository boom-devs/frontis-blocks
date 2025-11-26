import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, Button, Dashicon, BaseControl, Dropdown, ToggleControl, ColorPicker } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";
import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BackgroundColorControl from '@Components/background-color-control';

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, handleDuplicateItem, index }) {
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

    const TrashIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.82692 6L9.59615 12M6.40385 12L6.17308 6M12.8184 3.86038C13.0464 3.89481 13.2736 3.93165 13.5 3.97086M12.8184 3.86038L12.1065 13.115C12.0464 13.8965 11.3948 14.5 10.611 14.5H5.38905C4.60524 14.5 3.95358 13.8965 3.89346 13.115L3.18157 3.86038M12.8184 3.86038C12.0542 3.74496 11.281 3.65657 10.5 3.59622M2.5 3.97086C2.72638 3.93165 2.95358 3.89481 3.18157 3.86038M3.18157 3.86038C3.94585 3.74496 4.719 3.65657 5.5 3.59622M10.5 3.59622V2.98546C10.5 2.19922 9.8929 1.54282 9.10706 1.51768C8.73948 1.50592 8.37043 1.5 8 1.5C7.62957 1.5 7.26052 1.50592 6.89294 1.51768C6.1071 1.54282 5.5 2.19922 5.5 2.98546V3.59622M10.5 3.59622C9.67504 3.53247 8.84131 3.5 8 3.5C7.15869 3.5 6.32496 3.53247 5.5 3.59622" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
    const MoveIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
    const DuplicateIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48" fill="none">
            <g id="duplicate">
                <g id="duplicate_2">
                    <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M29.2827 4.88487C28.7191 4.31826 27.954 4 27.1556 4H14.9996C13.3433 4 11.9996 5.34372 11.9996 7V37C11.9996 38.6563 13.3433 40 14.9996 40H31.9992V41C31.9992 41.5526 31.5521 42 30.9992 42H10.9992C10.4475 42 9.99921 41.5517 9.99921 41V9C9.99921 8.44772 9.55149 8 8.99921 8C8.44692 8 7.99921 8.44772 7.99921 9V41C7.99921 42.6563 9.34292 44 10.9992 44H30.9992C32.657 44 33.9992 42.6568 33.9992 41V40H34.9996C36.6574 40 37.9996 38.6568 37.9996 37V17.0162H39.0226C39.5749 17.0162 40.0226 16.5685 40.0226 16.0162C40.0226 15.4639 39.5749 15.0162 39.0226 15.0162H37.9996V14.888C37.9996 14.0969 37.6859 13.3381 37.1285 12.7747L29.2827 4.88487ZM27.0266 15.0162H35.9996V14.888C35.9996 14.6251 35.8947 14.3713 35.7085 14.1831L27.8646 6.29523C27.6764 6.10599 27.4216 6 27.1556 6H14.9996C14.4479 6 13.9996 6.44828 13.9996 7V37C13.9996 37.5517 14.4479 38 14.9996 38H34.9996C35.5525 38 35.9996 37.5526 35.9996 37V17.0162H26.2286C25.5662 17.0162 25.0266 16.4803 25.0266 15.8162V8.9482C25.0266 8.39592 25.4743 7.9482 26.0266 7.9482C26.5789 7.9482 27.0266 8.39592 27.0266 8.9482V15.0162Z" fill="#000000" />
                </g>
            </g>
        </svg>
    );

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.socialIconTitle || __(`Social Item ${index + 1}`, "frontis-blocks")}
                </span>

                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon={MoveIcon} label={__("Sort", "frontis-blocks")} aria-label={__("Move item", "frontis-blocks")} />
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
                            value={item.socialIconTitle || __(`Social Item ${index + 1}`, "frontis-blocks")}
                            onChange={(value) => handleChangeItem(item.id, 'socialIconTitle', value)}
                        />
                    </BaseControl>


                    <FB_SwitcherControl
                        label={__("Icon Color & Background Color", "frontis-blocks")}
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