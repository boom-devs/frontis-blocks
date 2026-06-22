import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, TextareaControl, SelectControl, ToggleControl } from '@wordpress/components';
import { useSortable, SortableContext, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DndContext, closestCenter } from '@dnd-kit/core';

import FB_InputControl from '../../components/input-control';
import FB_UrlControl from '../../components/url-control';
import FB_ImageControl from '../../components/image-control';
import FBIconPicker from '../../components/icon-picker';
import FB_Range from '../../components/range';
import FB_SwitcherControl from '../../components/switcher-control';
import FB_ColorControl from '../../components/color-control';
import SocialSortableItem from './socialSortableItem';

export default function SortableItem({
    id,
    item,
    index,
    handleDeleteItem,
    handleDuplicateItem,
    handleChangeItem,
    deviceType,
    imageHotspotMarkerColor,
    imageHotspotMarkerColorSwitcher,
    imageHotspotIconColorSwitcher,
    imageHotspotSocialLinkIconColorSwitcher,
    setAttributes,
    title,
    duplicateLabel,
    deleteLabel
}) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const TrashIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.82692 6L9.59615 12M6.40385 12L6.17308 6M12.8184 3.86038C13.0464 3.89481 13.2736 3.93165 13.5 3.97086M12.8184 3.86038L12.1065 13.115C12.0464 13.8965 11.3948 14.5 10.611 14.5H5.38905C4.60524 14.5 3.95358 13.8965 3.89346 13.115L3.18157 3.86038M12.8184 3.86038C12.0542 3.74496 11.281 3.65657 10.5 3.59622M2.5 3.97086C2.72638 3.93165 2.95358 3.89481 3.18157 3.86038M3.18157 3.86038C3.94585 3.74496 4.719 3.65657 5.5 3.59622M10.5 3.59622V2.98546C10.5 2.19922 9.8929 1.54282 9.10706 1.51768C8.73948 1.50592 8.37043 1.5 8 1.5C7.62957 1.5 7.26052 1.50592 6.89294 1.51768C6.1071 1.54282 5.5 2.19922 5.5 2.98546V3.59622M10.5 3.59622C9.67504 3.53247 8.84131 3.5 8 3.5C7.15869 3.5 6.32496 3.53247 5.5 3.59622" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const MoveIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const DuplicateIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M29.2827 4.88487C28.7191 4.31826 27.954 4 27.1556 4H14.9996C13.3433 4 11.9996 5.34372 11.9996 7V37C11.9996 38.6563 13.3433 40 14.9996 40H31.9992V41C31.9992 41.5526 31.5521 42 30.9992 42H10.9992C10.4475 42 9.99921 41.5517 9.99921 41V9C9.99921 8.44772 9.55149 8 8.99921 8C8.44692 8 7.99921 8.44772 7.99921 9V41C7.99921 42.6563 9.34292 44 10.9992 44H30.9992C32.657 44 33.9992 42.6568 33.9992 41V40H34.9996C36.6574 40 37.9996 38.6568 37.9996 37V17.0162H39.0226C39.5749 17.0162 40.0226 16.5685 40.0226 16.0162C40.0226 15.4639 39.5749 15.0162 39.0226 15.0162H37.9996V14.888C37.9996 14.0969 37.6859 13.3381 37.1285 12.7747L29.2827 4.88487ZM27.0266 15.0162H35.9996V14.888C35.9996 14.6251 35.8947 14.3713 35.7085 14.1831L27.8646 6.29523C27.6764 6.10599 27.4216 6 27.1556 6H14.9996C14.4479 6 13.9996 6.44828 13.9996 7V37C13.9996 37.5517 14.4479 38 14.9996 38H34.9996C35.5525 38 35.9996 37.5526 35.9996 37V17.0162H26.2286C25.5662 17.0162 25.0266 16.4803 25.0266 15.8162V8.9482C25.0266 8.39592 25.4743 7.9482 26.0266 7.9482C26.5789 7.9482 27.0266 8.39592 27.0266 8.9482V15.0162Z" fill="#0F172A" />
        </svg>
    );

    const handleChangeSocialLink = (socialLinkId, field, value) => {
        const updatedLinks = (item.socialLinks || []).map((link) => {
            if (link.id === socialLinkId) {
                return { ...link, [field]: value };
            }
            return link;
        });
        handleChangeItem(item.id, 'socialLinks', updatedLinks);
    };

    const handleDeleteSocialLink = (socialLinkId) => {
        const updatedLinks = (item.socialLinks || []).filter((link) => link.id !== socialLinkId);
        handleChangeItem(item.id, 'socialLinks', updatedLinks);
    };

    const handleDuplicateSocialLink = (socialLinkId) => {
        const socialLinks = item.socialLinks || [];
        const linkIndex = socialLinks.findIndex((link) => link.id === socialLinkId);
        if (linkIndex === -1) {
            return;
        }

        const sourceLink = socialLinks[linkIndex];
        const duplicatedLink = {
            ...sourceLink,
            id: `social-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        };

        const updatedLinks = [
            ...socialLinks.slice(0, linkIndex + 1),
            duplicatedLink,
            ...socialLinks.slice(linkIndex + 1),
        ];
        handleChangeItem(item.id, 'socialLinks', updatedLinks);
    };

    const handleSocialLinkDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) {
            return;
        }

        const socialLinks = item.socialLinks || [];
        const oldIndex = socialLinks.findIndex((link) => link.id === active.id);
        const newIndex = socialLinks.findIndex((link) => link.id === over.id);

        if (oldIndex === -1 || newIndex === -1) {
            return;
        }

        const updatedLinks = arrayMove(socialLinks, oldIndex, newIndex);
        handleChangeItem(item.id, 'socialLinks', updatedLinks);
    };

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                <span className="sortable-title" onClick={toggleOpen}>
                    {title || item.title || `${__('Hotspot', 'frontis-blocks')} ${index + 1}`}
                </span>

                <span className="sortable-sort" {...listeners} style={{ cursor: "grab" }}>
                    <Button icon={MoveIcon} label={__('Sort', 'frontis-blocks')} />
                </span>

                <span className="sortable-duplicate">
                    <Button
                        icon={DuplicateIcon}
                        label={duplicateLabel || __('Duplicate', 'frontis-blocks')}
                        aria-label={duplicateLabel || __('Duplicate hotspot', 'frontis-blocks')}
                        onClick={() => handleDuplicateItem(item.id)}
                    />
                </span>

                <span className="sortable-delete">
                    <Button
                        icon={TrashIcon}
                        label={deleteLabel || __('Delete', 'frontis-blocks')}
                        aria-label={deleteLabel || __('Delete hotspot', 'frontis-blocks')}
                        onClick={() => handleDeleteItem(item.id)}
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">
                    <div className="fb-hotspot-selected-wrapper">
                        <div>
                            <h3 className="fb-hotspot-section-heading">
                                {__('Content', 'frontis-blocks')}
                            </h3>
                            <FB_InputControl
                                label={__("Category", "frontis-blocks")}
                                value={item.category || ''}
                                onChangeValue={(value) => handleChangeItem(item.id, 'category', value)}
                                placeholder={__("Enter category", "frontis-blocks")}
                            />

                            <FB_InputControl
                                label={__("Hotspot Title", "frontis-blocks")}
                                value={item.title || ''}
                                onChangeValue={(value) => handleChangeItem(item.id, 'title', value)}
                                placeholder={__("Enter title", "frontis-blocks")}
                            />

                            <FB_UrlControl
                                label={__("Title Link", "frontis-blocks")}
                                url={item.titleLink || ''}
                                onChangeUrl={(value) => handleChangeItem(item.id, 'titleLink', value)}
                                openInNewTab={!!item.titleLinkOpenInNewTab}
                                onChangeOpenInNewTab={(value) => handleChangeItem(item.id, 'titleLinkOpenInNewTab', value)}
                            />

                            <TextareaControl
                                label={__("Hotspot Description", "frontis-blocks")}
                                value={item.description || ''}
                                onChange={(value) => handleChangeItem(item.id, 'description', value)}
                                placeholder={__("Enter description that will appear in popup", "frontis-blocks")}
                                rows={4}
                            />

                            <FB_InputControl
                                label={__("Price", "frontis-blocks")}
                                value={item.price || ''}
                                onChangeValue={(value) => handleChangeItem(item.id, 'price', value)}
                                placeholder={__("Enter price", "frontis-blocks")}
                            />

                            <ToggleControl
                                label={__("Show Popover Image", "frontis-blocks")}
                                checked={item.showImage !== false}
                                onChange={(value) => handleChangeItem(item.id, 'showImage', value)}
                            />

                            {item.showImage !== false && (
                                <FB_ImageControl
                                    label={__("Popover Image", "frontis-blocks")}
                                    globalImageUrl={item.popoverImageUrl || ''}
                                    setglobalImageUrl={(url) => handleChangeItem(item.id, 'popoverImageUrl', url)}
                                    globalImageAlt={item.popoverImageAlt || ''}
                                    setglobalImageAlt={(alt) => handleChangeItem(item.id, 'popoverImageAlt', alt)}
                                    globalImageID={item.popoverImageId || 0}
                                    setglobalImageID={(id) => handleChangeItem(item.id, 'popoverImageId', id)}
                                    isImageSize={false}
                                />
                            )}

                            <ToggleControl
                                label={__('Show Social Links', 'frontis-blocks')}
                                checked={item.showSocialLinks || false}
                                onChange={(value) => handleChangeItem(item.id, 'showSocialLinks', value)}
                            />

                            {item.showSocialLinks && (
                                <div className="fb-hotspot-social-links-repeater">
                                    <p className="fb-hotspot-control-label">{__('Social Links', 'frontis-blocks')}</p>

                                    {(item.socialLinks || []).length > 0 && (
                                        <div className="fb-hotspot-repeater-wrapper">
                                            <DndContext
                                                collisionDetection={closestCenter}
                                                onDragEnd={handleSocialLinkDragEnd}
                                            >
                                                <SortableContext items={(item.socialLinks || []).map((link) => link.id)}>
                                                    <ul className="dnd-items-wrapper">
                                                        {(item.socialLinks || []).map((socialLink, socialIndex) => {
                                                            const iconName = socialLink.icon
                                                                ? socialLink.icon.charAt(0).toUpperCase() + socialLink.icon.slice(1)
                                                                : 'Facebook';
                                                            const itemTitle = `${iconName} (${socialIndex + 1})`;

                                                            return (
                                                                <SocialSortableItem
                                                                    key={socialLink.id}
                                                                    id={socialLink.id}
                                                                    item={socialLink}
                                                                    index={socialIndex}
                                                                    title={itemTitle}
                                                                    duplicateLabel={__('Duplicate Social Link', 'frontis-blocks')}
                                                                    deleteLabel={__('Delete Social Link', 'frontis-blocks')}
                                                                    handleDeleteItem={handleDeleteSocialLink}
                                                                    handleDuplicateItem={handleDuplicateSocialLink}
                                                                    handleChangeItem={handleChangeSocialLink}
                                                                    imageHotspotSocialLinkIconColorSwitcher={imageHotspotSocialLinkIconColorSwitcher}
                                                                    setAttributes={setAttributes}
                                                                />
                                                            );
                                                        })}
                                                    </ul>
                                                </SortableContext>
                                            </DndContext>
                                        </div>
                                    )}

                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            const currentLinks = item.socialLinks || [];
                                            const newLink = {
                                                id: `social-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                                                icon: 'facebook',
                                                url: '',
                                                openInNewTab: false,
                                            };
                                            handleChangeItem(item.id, 'socialLinks', [...currentLinks, newLink]);
                                        }}
                                        className="fb-hotspot-full-btn"
                                    >
                                        {__('+ Add Social Link', 'frontis-blocks')}
                                    </Button>
                                </div>
                            )}

                            <SelectControl
                                label={__("Popover Position", "frontis-blocks")}
                                value={item.popoverPosition || 'top'}
                                options={[
                                    { label: __('Top', 'frontis-blocks'), value: 'top' },
                                    { label: __('Bottom', 'frontis-blocks'), value: 'bottom' },
                                    { label: __('Left', 'frontis-blocks'), value: 'left' },
                                    { label: __('Right', 'frontis-blocks'), value: 'right' },
                                    { label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
                                    { label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
                                    { label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
                                    { label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
                                ]}
                                onChange={(value) => handleChangeItem(item.id, 'popoverPosition', value)}
                            />

                            <p className="fb-hotspot-control-label">{__("Marker Icon", "frontis-blocks")}</p>
                            <FBIconPicker
                                value={item.icon || 'plus'}
                                setIconHandler={(icon) => handleChangeItem(item.id, 'icon', icon)}
                            />
                        </div>

                        <div>
                            <SelectControl
                                label={__("Marker Animation", "frontis-blocks")}
                                value={item.animation || 'none'}
                                options={[
                                    { label: __('None', 'frontis-blocks'), value: 'none' },
                                    { label: __('Pulse', 'frontis-blocks'), value: 'pulse' },
                                    { label: __('Glow', 'frontis-blocks'), value: 'glow' },
                                    { label: __('Float', 'frontis-blocks'), value: 'float' },
                                ]}
                                onChange={(value) => handleChangeItem(item.id, 'animation', value)}
                            />
                            {(item.animation || 'none') !== 'none' && (
                                <>
                                    <ToggleControl
                                        label={__("Autoplay", "frontis-blocks")}
                                        checked={item.autoplay !== false}
                                        onChange={(value) => handleChangeItem(item.id, 'autoplay', value)}
                                    />

                                    {item.autoplay !== false && (
                                        <FB_Range
                                            label={__("Animation Interval (s)", "frontis-blocks")}
                                            rangeValue={{ [deviceType]: item.animationInterval || 0 }}
                                            onChangeHandler={(value) => handleChangeItem(item.id, 'animationInterval', value[deviceType])}
                                            deviceType={deviceType}
                                            min={0}
                                            max={10}
                                            rangeStep={0.1}
                                            isRangeUnit={false}
                                            resetFallbackValue={0}
                                        />
                                    )}
                                </>
                            )}
                        </div>

                        <div>
                            <h3 className="fb-hotspot-section-heading">
                                {__('Position', 'frontis-blocks')}
                            </h3>
                            <FB_Range
                                label={__("X Position (%)", "frontis-blocks")}
                                rangeValue={{ [deviceType]: item.x }}
                                onChangeHandler={(value) => handleChangeItem(item.id, 'x', value[deviceType])}
                                deviceType={deviceType}
                                min={0}
                                max={100}
                                rangeStep={1}
                                isRangeUnit={false}
                                resetFallbackValue={50}
                            />

                            <FB_Range
                                label={__("Y Position (%)", "frontis-blocks")}
                                rangeValue={{ [deviceType]: item.y }}
                                onChangeHandler={(value) => handleChangeItem(item.id, 'y', value[deviceType])}
                                deviceType={deviceType}
                                min={0}
                                max={100}
                                rangeStep={1}
                                isRangeUnit={false}
                                resetFallbackValue={50}
                            />
                        </div>

                        <div>
                            <h3 className="fb-hotspot-section-heading">
                                {__('Styling', 'frontis-blocks')}
                            </h3>

                            <FB_SwitcherControl
                                label={__("Marker Color", "frontis-blocks")}
                                globalSwitcher={imageHotspotMarkerColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ imageHotspotMarkerColorSwitcher: value })}
                            />

                            {imageHotspotMarkerColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Color", "frontis-blocks")}
                                    globalColor={item.markerColor || imageHotspotMarkerColor}
                                    setGlobalColor={(color) => handleChangeItem(item.id, 'markerColor', color)}
                                />
                            )}

                            {imageHotspotMarkerColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Hover Color", "frontis-blocks")}
                                    globalColor={item.hoverBackgroundColor || ''}
                                    setGlobalColor={(color) => handleChangeItem(item.id, 'hoverBackgroundColor', color)}
                                />
                            )}
                            <FB_SwitcherControl
                                label={__("Marker Icon Color", "frontis-blocks")}
                                globalSwitcher={imageHotspotIconColorSwitcher}
                                setGlobalSwitcher={(value) => setAttributes({ imageHotspotIconColorSwitcher: value })}
                            />

                            {imageHotspotIconColorSwitcher === 'normal' && (
                                <FB_ColorControl
                                    label={__("Icon Color", "frontis-blocks")}
                                    globalColor={item.iconColor || '#ffffff'}
                                    setGlobalColor={(color) => handleChangeItem(item.id, 'iconColor', color)}
                                />
                            )}

                            {imageHotspotIconColorSwitcher === 'hover' && (
                                <FB_ColorControl
                                    label={__("Icon Hover Color", "frontis-blocks")}
                                    globalColor={item.iconHoverColor || ''}
                                    setGlobalColor={(color) => handleChangeItem(item.id, 'iconHoverColor', color)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
}
