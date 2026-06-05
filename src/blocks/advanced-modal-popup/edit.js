import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
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
        modalPopupMobileSwitcher
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

    const patternData = useSelect(select => {
        if (!selectedTemplate || contentType !== 'pattern') return null;

        if (selectedTemplate.startsWith('user-')) {
            const id = parseInt(selectedTemplate.replace('user-', ''), 10);

            if (select('core')) {
                // Get user patterns from wp_block post type
                const userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
                const userPattern = userPatterns.find(p => p.id === id);

                if (userPattern && userPattern.content && userPattern.content.raw) {
                    return {
                        content: userPattern.content.raw
                    };
                }
            }
        } else {
            if (select('core')) {
                const patterns = select('core').getBlockPatterns() || [];
                return patterns.find(pattern => pattern.name === selectedTemplate);
            }
        }

        return null;
    }, [selectedTemplate, contentType]);

    // Update innerBlocks when pattern changes
    useEffect(() => {
        if (contentType !== 'pattern') return;

        if (patternData && patternData.content) {
            const parsedBlocks = parse(patternData.content);

            if (parsedBlocks && parsedBlocks.length > 0) {
                const { replaceInnerBlocks } = wp.data.dispatch(blockEditorStore);
                replaceInnerBlocks(clientId, parsedBlocks, false);
            } else {
                console.warn("No blocks parsed from pattern content");
            }
        } else {
            console.warn("No content found in pattern data");
        }
    }, [patternData, clientId, contentType]);

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
                    <RichText 
                        tagName="span" 
                        value={toggleButtonText}
                        onChange={(value) => setAttributes({ toggleButtonText: value })}
                        placeholder={__('Enter button text...', 'frontis-blocks')}
                        className="fb-button-text"
                    />
                    {toggleButtonIconPosition === 'right' && toggleButtonIconAlign === 'icon' && (
                        <div className="fb-button-icon">
                            {renderSVG(toggleButtonIcon)} 
                        </div>
                    )}
                </a>;
            case 'image':
                return (
                    <div className="fb-modal-toggle-image">
                        <img src={attributes.toggleImageUrl} />
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
            case 'image':
                const imgUrl = contentImage?.Desktop || contentImage?.Tablet || contentImage?.Mobile;
                return imgUrl ? <img src={imgUrl} alt="Modal Content" className="fb-modal-content-img" /> : <div className="fb-placeholder-image">{__('Select an image for content', 'frontis-blocks')}</div>;
            case 'video':
                return contentVideoUrl ? <video src={contentVideoUrl} controls className="fb-modal-content-video"></video> : <div className="fb-placeholder-video">{__('Enter MP4 Video URL', 'frontis-blocks')}</div>;
            case 'youtube':
                return contentYoutubeUrl ? <iframe src={contentYoutubeUrl} allowFullScreen className="fb-modal-content-iframe"></iframe> : <div className="fb-placeholder-iframe">{__('Enter YouTube URL', 'frontis-blocks')}</div>;
            case 'vimeo':
                return contentVimeoUrl ? <iframe src={contentVimeoUrl} allowFullScreen className="fb-modal-content-iframe"></iframe> : <div className="fb-placeholder-iframe">{__('Enter Vimeo URL', 'frontis-blocks')}</div>;
            case 'map':
                return contentMapUrl ? (
                    <div className="fb-modal-content-map" dangerouslySetInnerHTML={{ __html: contentMapUrl }}></div>
                ) : <div className="fb-placeholder-iframe">{__('Enter Google Map Embed URL', 'frontis-blocks')}</div>;
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

            <div className={`fb-advanced-modal-popup-container ${modalPopupGlobalWraperClass}`} id={modalPopupGlobalWraperID} ref={panelRef}>
                
                {/* Modal Trigger */}
                <div className="fb-advanced-modal-popup-trigger" onClick={() => setIsModalOpen(!isModalOpen)}>
                    {renderToggle()}
                </div>

                {/* Modal Container */}
                <div className={`fb-advanced-modal-popup ${modalPositionClass} ${isModalOpen ? 'open' : ''}`}>
                    <div className="fb-modal-close-btn" onClick={() => setIsModalOpen(false)}>
                        &times;
                    </div>
                    <div className="fb-modal-content-wrapper">
                        {renderContent()}
                    </div>
                </div>
 
                {/* Overlay */}
                {isModalOpen && (
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