import { __ } from '@wordpress/i18n';
import {
    RichText,
    MediaPlaceholder,
    MediaUpload,
    MediaUploadCheck,
    BlockControls,
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useSelect, useDispatch, select } from '@wordpress/data';
import { parse, createBlock } from '@wordpress/blocks';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import './editor.scss';

import Inspector from './inspector';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatemodalPopupStyle from "./styling";

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        selectedTemplate,
        toggleImageUrl,
        toggleButtonIconPosition,
        toggleButtonUrl,
        toggleButtonTargetUrl,
        toggleButtonIcon,
        toggleButtonIconAlign,
        toggleButtonText,
        modalCloseIcon,
        toggleButtonTextSwitcher,
        toggleButtonIconImageUrl,

        position,
        toggleType,
        toggleText,
        toggleIcon,
        toggleImage,
        contentType,
        contentImage,
        contentVideoUrl,
        contentYoutubeUrl,
        contentVimeoUrl,
        contentMapUrl,
        modalPopupGlobalWraperClass,
        modalPopupGlobalWraperID,
        modalPopupDesktopSwitcher,
        modalPopupTabletSwitcher,
        modalPopupMobileSwitcher,
        modalPopupOverlaySwitcher
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-advanced-modal-popup',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generatemodalPopupStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle image handler
    const onSelectToggleImage = (media) => {
        setAttributes({
            toggleImageUrl: media.url,
            toggleImageAlt: media.alt || '',
            toggleImageId: media.id,
        });
    };

    // Content image handler
    const onSelectContentImage = (media) => {
        setAttributes({
            contentImageUrl: media.url,
            contentImageAlt: media.alt || '',
            contentImageId: media.id,
        });
    };

    const patternContent = useSelect(select => {
        if (!selectedTemplate || contentType !== 'pattern') return null;

        if (selectedTemplate.startsWith('user-')) {
            const id = parseInt(selectedTemplate.replace('user-', ''), 10);

            if (select('core')) {
                // Get user patterns from wp_block post type
                const userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
                const userPattern = userPatterns.find(p => p.id === id);

                if (userPattern && userPattern.content && userPattern.content.raw) {
                    return userPattern.content.raw;
                }
            }
        } else {
            if (select('core')) {
                const patterns = select('core').getBlockPatterns() || [];
                const found = patterns.find(pattern => pattern.name === selectedTemplate);
                return found ? found.content : null;
            }
        }

        return null;
    }, [selectedTemplate, contentType]);

    const { replaceInnerBlocks } = useDispatch(blockEditorStore);

    // Update innerBlocks when pattern changes
    useEffect(() => {
        if (contentType !== 'pattern') return;

        if (patternContent) {
            const parsedBlocks = parse(patternContent);

            if (parsedBlocks && parsedBlocks.length > 0) {
                replaceInnerBlocks(clientId, parsedBlocks, false);
            } else {
                console.warn("No blocks parsed from pattern content");
            }
        } else {
            console.warn("No content found in pattern data");
        }
    }, [patternContent, clientId, contentType, replaceInnerBlocks]);



    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    const modalPositionClass = `fb-advanced-modal-popup-${position}`;
    const modalOpenClass = isModalOpen ? 'fb-modal-open' : '';

    const blockProps = useBlockProps({
        className: `fb-advanced-modal-popup-block ${blockID} ${modalPopupDesktopSwitcher && 'fb-desktop-responsive'} ${modalPopupTabletSwitcher && 'fb-tablet-responsive'} ${modalPopupMobileSwitcher && 'fb-mobile-responsive'}`
    });

    // We conditionally pass template locking depending on content type
    const isCustomContent = contentType === 'custom';
    const innerBlocksProps = useInnerBlocksProps(
        {
            className: 'fb-advanced-modal-popup-inner-blocks',
        },
        {
            templateLock: isCustomContent ? false : 'all',
        }
    );

    const renderToggle = () => {
        switch (toggleType) { 
            case 'button':
                return <a className={`fb-modal-toggle-btn fb-button-icon-${toggleButtonIconPosition}`}
                    href={toggleButtonUrl}
                    target={toggleButtonTargetUrl ? "_blank" : undefined}
                    rel={toggleButtonTargetUrl ? "noopener noreferrer" : undefined}
                    onClick={(event) => event.preventDefault()} 
                >
                    {toggleButtonIconPosition === 'left' && toggleButtonIconAlign === 'icon' && (
                        <div className="fb-button-icon">
                            {renderSVG(toggleButtonIcon)}
                        </div>
                    )} 
                    
                    {toggleButtonTextSwitcher && (
                        <RichText 
                            tagName="span" 
                            value={toggleButtonText}
                            onChange={(value) => setAttributes({ toggleButtonText: value })}
                            placeholder={__('Enter button text...', 'frontis-blocks')}
                            className="fb-button-text"
                        />
                    )}
                    
                    {toggleButtonIconPosition === 'right' && toggleButtonIconAlign === 'icon' && (
                        <div className="fb-button-icon">
                            {renderSVG(toggleButtonIcon)} 
                        </div>
                    )}
                </a>;
            case 'image': 
                return ( 
                    <div className="fb-modal-toggle-image">
                        {toggleImageUrl ? (
                            <img src={toggleImageUrl} alt={attributes.toggleImageAlt} />
                        ) : (
                            <MediaPlaceholder
                                onSelect={onSelectToggleImage}
                                allowedTypes={['image']}
                                multiple={false}
                                labels={{ title: __('Add Image', 'frontis-blocks') }}
                            />
                        )}
                    </div>
                );
            default:
                return <button className="fb-modal-toggle-btn">{__('Open Modal', 'frontis-blocks')}</button>;
        }
    };

    const renderContent = () => {
        switch (contentType) {
            case 'pattern':
                return selectedTemplate ? (
                    <div {...innerBlocksProps} />
                ) : (
                    <div className="fb-pattern-placeholder">
                        <p>{__('Select a pattern from the sidebar to display here', 'frontis-blocks')}</p>
                    </div>
                );

            case 'custom':
                return <div {...innerBlocksProps} />;
            default:
                return null;
        }
    };

    return (
        <div {...blockProps}>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            {/* BlockControls Toolbar — shown when image exists */}
            <BlockControls>
                <ToolbarGroup>
                    {toggleType === 'image' && toggleImageUrl && (
                        <>
                            <ToolbarButton
                                icon="trash"
                                title={__('Remove Toggle Image', 'frontis-blocks')}
                                onClick={() => setAttributes({ toggleImageUrl: '', toggleImageAlt: '', toggleImageId: '' })}
                            />
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectToggleImage}
                                    allowedTypes={['image']}
                                    value={attributes.toggleImageId}
                                    render={({ open }) => (
                                        <ToolbarButton
                                            onClick={open}
                                            icon="edit"
                                            title={__('Replace Toggle Image', 'frontis-blocks')}
                                        />
                                    )}
                                />
                            </MediaUploadCheck>
                        </>
                    )}
                </ToolbarGroup>
            </BlockControls>

            <div className={`fb-advanced-modal-popup-container ${modalPopupGlobalWraperClass}`} id={modalPopupGlobalWraperID} ref={panelRef}>
                
                {/* Modal Trigger */}
                <div className="fb-advanced-modal-popup-trigger" onClick={() => setIsModalOpen(!isModalOpen)}>
                    {renderToggle()}
                </div>

                {/* Modal Container */}
                <div className={`fb-advanced-modal-popup ${modalPositionClass} ${isModalOpen ? 'active' : ''}`}>
                    <div className="fb-modal-close-btn" onClick={() => setIsModalOpen(false)}>
                        {renderSVG(modalCloseIcon)}
                    </div>
                    <div className="fb-modal-content-wrapper">
                        {renderContent()}
                    </div>
                </div>
 
                {/* Overlay */}
                {isModalOpen && modalPopupOverlaySwitcher && (
                    <div
                        className={`fb-modal-overlay active`}
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                )}
            </div>
            <style>{blockStyle}</style>
        </div>
    );
}