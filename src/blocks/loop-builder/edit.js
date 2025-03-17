import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        displayLayout = { type: 'flex', columns: 3 },
        featuredImageSwitcher
    } = attributes;

    // Generate a unique ID for the block if not set
    useEffect(() => {
        if (!blockID) {
            setAttributes({ blockID: `fb-loop-builder-${clientId.slice(0, 8)}` });
        }
    }, [blockID, clientId, setAttributes]);

    // Get block props
    const blockProps = useBlockProps({
        className: `fb-loop-builder-block ${blockID || ''}`,
        'data-layout': displayLayout.type,
        'data-columns': displayLayout.columns,
    });

    // Setup inner blocks props with appropriate template based on layout type
    const getInnerBlocksTemplate = () => {
        const basicTemplate = [
            ['core/post-featured-image'],
            ['core/post-title'],
            ['core/post-excerpt']
        ];

        return [
            ['core/post-template', {
                className: displayLayout.type === 'flex' ? 'fb-grid-layout' : 
                           displayLayout.type === 'list' ? 'fb-list-layout' :
                           displayLayout.type === 'slider' ? 'fb-slider-layout' : ''
            }, basicTemplate],
            ['core/query-pagination'],
            ['core/query-no-results', {}, [
                ['core/paragraph', { content: __('No posts found.', 'frontis-blocks') }]
            ]]
        ];
    };

    // Setup inner blocks props
    const innerBlocksProps = useInnerBlocksProps(
        { className: 'fb-loop-builder-inner' },
        {
            allowedBlocks: ['core/post-template', 'core/query-pagination', 'core/query-no-results'],
            template: getInnerBlocksTemplate(),
            templateLock: false,
        }
    );

    // Check if we have inner blocks
    const hasInnerBlocks = useSelect(
        (select) => {
            const { getBlocks } = select(blockEditorStore);
            return getBlocks(clientId).length > 0;
        },
        [clientId]
    );

    // Initialize layout functionality after render and when layout changes
    useEffect(() => {
        const initializeLayout = () => {
            console.log('Layout initialized:', displayLayout.type);
            
            // Find post template element
            const blockElement = document.querySelector(`[data-block="${clientId}"]`);
            if (!blockElement) return;
            
            const postTemplateElement = blockElement.querySelector('.wp-block-post-template');
            if (!postTemplateElement) return;
            
            // Update classes based on layout type
            postTemplateElement.classList.remove('fb-grid-layout', 'fb-list-layout', 'fb-slider-layout');
            
            if (displayLayout.type === 'flex') {
                postTemplateElement.classList.add('fb-grid-layout');
            } else if (displayLayout.type === 'list') {
                postTemplateElement.classList.add('fb-list-layout');
            } else if (displayLayout.type === 'slider') {
                postTemplateElement.classList.add('fb-slider-layout');
                
                // Initialize Swiper if needed and not already initialized
                if (displayLayout.type === 'slider' && window.Swiper && 
                    !postTemplateElement.classList.contains('swiper-wrapper')) {
                    // This will be handled by the initializeSwiper function in index.js
                    // Just ensure the proper class is set
                }
            }
        };
        
        // Wait for the blocks to be rendered
        setTimeout(initializeLayout, 300);
    }, [displayLayout, clientId]);

    
    
    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div className={`fb-loop-content layout-${displayLayout.type}`}>
                {hasInnerBlocks ? (
                    <div {...innerBlocksProps} />
                ) : (
                    <div className="fb-loop-builder-placeholder">
                        <p>{__('Drag and drop blocks to customize your loop.', 'frontis-blocks')}</p>
                    </div>
                )}
            </div>
        </div>
    );
}