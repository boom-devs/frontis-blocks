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

export default function SortableItem({ id, item, handleChangeItem, handleDeleteItem, setAttributes }) {
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

                                {/* <BaseControl className="fb-image-control-wrapper">
                                    {item.FeatureIconImageUrl ? (
                                        <div className="fb-image-avatar-control" style={{backgroundImage: `url(${item.FeatureIconImageUrl})`}}>
                                            <button
                                                className='fb-image-avatar-delete'
                                                onClick={() => {
                                                    handleChangeItem(item.id, 'FeatureIconImageUrl', null);
                                                    handleChangeItem(item.id, 'FeatureIconImageAlt', null);
                                                    handleChangeItem(item.id, 'FeatureIconImageID', null);
                                                }}
                                            >
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z" stroke="#1C274C" strokeWidth="1.5"/>
                                                    <path d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            </button>
                                            <button
                                                className='fb-image-replace-btn'
                                                onClick={() => {
                                                    const mediaUploader = wp.media({
                                                        title: __('Select or Upload Background Image', 'frontis-blocks'),
                                                        button: {
                                                            text: __('Use this image', 'frontis-blocks'),
                                                        },
                                                        multiple: false
                                                    });

                                                    mediaUploader.on('select', function() {
                                                        const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                        handleChangeItem(item.id, 'FeatureIconImageUrl', attachment.url);
                                                        handleChangeItem(item.id, 'FeatureIconImageAlt', attachment.alt);
                                                        handleChangeItem(item.id, 'FeatureIconImageID', attachment.id);
                                                    });

                                                    mediaUploader.open();
                                                }}
                                            >
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C"/>
                                                    <path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C"/>
                                                </svg>
                                                Replace
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className='fb-image-upload-btn'
                                            onClick={() => {
                                                const mediaUploader = wp.media({
                                                    title: __('Select or Upload Background Image', 'frontis-blocks'),
                                                    button: {
                                                        text: __('Use this image', 'frontis-blocks'),
                                                    },
                                                    multiple: false
                                                });

                                                mediaUploader.on('select', function() {
                                                    const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                    handleChangeItem(item.id, 'FeatureIconImageUrl', attachment.url);
                                                    handleChangeItem(item.id, 'FeatureIconImageAlt', attachment.alt);
                                                    handleChangeItem(item.id, 'FeatureIconImageID', attachment.id);
                                                });

                                                mediaUploader.open();
                                            }}
                                        >
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path>
                                            </svg>
                                            Upload
                                        </button>
                                    )}
                                </BaseControl> */}
                                </>
                                
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
