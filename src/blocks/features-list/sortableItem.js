import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TextControl, TextareaControl, Button, ButtonGroup, BaseControl } from '@wordpress/components';
import FBIconPicker from "../../components/icon-picker";
import FB_ImageControl from '@Components/image-control';
import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BackgroundColorControl from '@Components/background-color-control';


import {
    ICON_ALIGN,
} from "./constants/constants";

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem }) {
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
                            {(FeatureIconAlign === 'image') && (
                                <FB_ImageControl 
                                    globalImageUrl={item.FeatureIconImageUrl}
                                    setglobalImageUrl={(value) => handleChangeItem(item.id, 'FeatureIconImageUrl', value)}
                                    globalImageAlt={item.FeatureIconImageAlt}
                                    setglobalImageAlt={(value) => handleChangeItem(item.id, 'FeatureIconImageAlt', value)}
                                    globalImageID={item.FeatureIconImageID}
                                    setglobalImageID={(value) => handleChangeItem(item.id, 'FeatureIconImageID', value)}
                                    isImageSize={false}
                                />
                            )}
                        </BaseControl>
                    </div>

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
