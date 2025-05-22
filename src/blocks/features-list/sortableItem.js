import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, TextareaControl, Button, ButtonGroup, BaseControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";

import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_ImageControl from '@Components/image-control';


import {
    ICON_ALIGN,
} from "./constants/constants";

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, handleDuplicateItem, index }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);
    const [FeatureIconAlign, setFeatureIconAlign] = useState( ICON_ALIGN[1].value );

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    const iconHandler = (IconName) => {
        handleChangeItem(item.id, 'FeatureIcon', IconName);
    };

    const handleAlignmentChange = (newAlignment) => {
        setFeatureIconAlign(newAlignment);
        handleChangeItem(item.id, 'FeatureIconAlign', newAlignment);
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
    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.Title || __( `Feature Item ${index + 1}`, "frontis-blocks" )} 
                </span>

                {/* Sort button */}
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon={MoveIcon} label={__("Sort", "frontis-blocks")} />
                </span>

                <span className="sortable-duplicate">
                    <Button 
                        icon="admin-page" 
                        label={__("Duplicate", "frontis-blocks")} 
                        aria-label={__("Duplicate item", "frontis-blocks")}
                        onClick={() => handleDuplicateItem(item.id)}
                    />
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

                    <TextareaControl
                        label={__("Description", "frontis-blocks")}
                        value={item.Description}
                        onChange={(value) => handleChangeItem(item.id, 'Description', value)}
                    />

                    <div className='fb-feature-icon-wrapper'>
                        <BaseControl
                            label={__("Icon", "frontis-blocks")}
                            className="fb-feature-icon"
                        >
                            <ButtonGroup className="fb-feature-icon-group-btn">
                                {ICON_ALIGN.map((alignItem, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => handleAlignmentChange(alignItem.value)}
                                        className={`fb-feature-icon-single-btn ${FeatureIconAlign === alignItem.value ? 'active' : ''}`}
                                    >
                                        {alignItem.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            { FeatureIconAlign === 'icon' && (
                                <FBIconPicker value={item.FeatureIcon} setIconHandler={iconHandler} />
                            )}

                            { FeatureIconAlign === 'image' && (

                                <>
                                    <FB_ImageControl 
                                        globalImageUrl={item.FeatureIconImageUrl}
                                        setglobalImageUrl={(value) => handleChangeItem(item.id, 'FeatureIconImageUrl', value)}
                                        globalImageAlt={item.FeatureIconImageAlt}
                                        setglobalImageAlt={(value) => handleChangeItem(item.id, 'FeatureIconImageAlt', value)}
                                        globalImageID={item.FeatureIconImageID}
                                        setglobalImageID={(value) => handleChangeItem(item.id, 'FeatureIconImageID', value)}
                                        isImageSize = {false}
                                    />
                                </>
                                
                            )}
                        </BaseControl>
                    </div>

                    { FeatureIconAlign === 'icon' && (
                        <>

                            <FB_SwitcherControl
                                label={__("Icon Color", "frontis-blocks")}
                                globalSwitcher={item.FeatureSingleItemIconColorSwitcher}
                                setGlobalSwitcher={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconColorSwitcher', value)}
                            />  

                            {item.FeatureSingleItemIconColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Normal Color", "frontis-blocks")}
                                    globalColor={item.FeatureSingleItemIconColor}
                                    setGlobalColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconColor', value)}
                                />
                            )}

                            {item.FeatureSingleItemIconColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={item.FeatureSingleItemIconHoverColor}
                                    setGlobalColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconHoverColor', value)}
                                />
                            )}

                            <FB_BackgroundColorControl
                                label={__("Icon Background Color", "frontis-blocks")}
                                bgColorSwitcher={item.FeatureSingleItemIconBgColorSwitcher}
                                setBgColorSwitcher={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconBgColorSwitcher', value)}
                                        
                                normalBackgroundType={item.FeatureSingleItemIconNormalBackgroundType}
                                setNormalBackgroundType={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconNormalBackgroundType', value)}
                                normalClassicColor={item.FeatureSingleItemIconNormalClassicColor}
                                setNormalClassicColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconNormalClassicColor', value)}
                                normalGradientColor={item.FeatureSingleItemIconNormalGradientColor}
                                setNormalGradientColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconNormalGradientColor', value)}
                                normalCustomGradientSwitcher={item.FeatureSingleItemIconNormalCustomGradientSwitcher}
                                setNormalCustomGradientSwitcher={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconNormalCustomGradientSwitcher', value)}
                                normalCustomGradientInputValue={item.FeatureSingleItemIconNormalCustomGradientInputValue}
                                setNormalCustomGradientInputValue={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconNormalCustomGradientInputValue', value)}
                                        
                                hoverBackgroundType={item.FeatureSingleItemIconHoverBackgroundType}
                                setHoverBackgroundType={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconHoverBackgroundType', value)}
                                hoverClassicColor={item.FeatureSingleItemIconHoverClassicColor}
                                setHoverClassicColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconHoverClassicColor', value)}
                                hoverGradientColor={item.FeatureSingleItemIconHoverGradientColor} 
                                setHoverGradientColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconHoverGradientColor', value)}
                                hoverCustomGradientSwitcher={item.FeatureSingleItemIconHoverCustomGradientSwitcher}
                                setHoverCustomGradientSwitcher={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconHoverCustomGradientSwitcher', value)}
                                hoverCustomGradientInputValue={item.FeatureSingleItemIconHoverCustomGradientInputValue}
                                setHoverCustomGradientInputValue={(value) => handleChangeItem(item.id, 'FeatureSingleItemIconHoverCustomGradientInputValue', value)}

                                isBackgroundImage={false}
                            />
                        
                        </>
                    )}

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={item.FeatureSingleItemTextColorSwitcher}
                        setGlobalSwitcher={(value) => handleChangeItem(item.id, 'FeatureSingleItemTextColorSwitcher', value)}
                    />  

                    {item.FeatureSingleItemTextColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={item.FeatureSingleItemTextColor}
                            setGlobalColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemTextColor', value)}
                        />
                    )}

                    {item.FeatureSingleItemTextColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={item.FeatureSingleItemTextHoverColor}
                            setGlobalColor={(value) => handleChangeItem(item.id, 'FeatureSingleItemTextHoverColor', value)}
                        />
                    )}

                    <FB_BackgroundColorControl
                        label={__("Item Background Color", "frontis-blocks")}
                        bgColorSwitcher={item.FeatureItemBgColorSwitcher}
                        setBgColorSwitcher={(value) => handleChangeItem(item.id, 'FeatureItemBgColorSwitcher', value)}
                                
                        normalBackgroundType={item.FeatureItemNormalBackgroundType}
                        setNormalBackgroundType={(value) => handleChangeItem(item.id, 'FeatureItemNormalBackgroundType', value)}
                        normalClassicColor={item.FeatureItemNormalClassicColor}
                        setNormalClassicColor={(value) => handleChangeItem(item.id, 'FeatureItemNormalClassicColor', value)}
                        normalGradientColor={item.FeatureItemNormalGradientColor}
                        setNormalGradientColor={(value) => handleChangeItem(item.id, 'FeatureItemNormalGradientColor', value)}
                        normalCustomGradientSwitcher={item.FeatureItemNormalCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => handleChangeItem(item.id, 'FeatureItemNormalCustomGradientSwitcher', value)}
                        normalCustomGradientInputValue={item.FeatureItemNormalCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => handleChangeItem(item.id, 'FeatureItemNormalCustomGradientInputValue', value)}
                                
                        hoverBackgroundType={item.FeatureItemHoverBackgroundType}
                        setHoverBackgroundType={(value) => handleChangeItem(item.id, 'FeatureItemHoverBackgroundType', value)}
                        hoverClassicColor={item.FeatureItemHoverClassicColor}
                        setHoverClassicColor={(value) => handleChangeItem(item.id, 'FeatureItemHoverClassicColor', value)}
                        hoverGradientColor={item.FeatureItemHoverGradientColor} 
                        setHoverGradientColor={(value) => handleChangeItem(item.id, 'FeatureItemHoverGradientColor', value)}
                        hoverCustomGradientSwitcher={item.FeatureItemHoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => handleChangeItem(item.id, 'FeatureItemHoverCustomGradientSwitcher', value)}
                        hoverCustomGradientInputValue={item.FeatureItemHoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => handleChangeItem(item.id, 'FeatureItemHoverCustomGradientInputValue', value)}

                        isBackgroundImage={false}
                    />
                </div>
            )}
        </li>
    );
}
