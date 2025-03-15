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

    // Setup inner blocks props
    const innerBlocksProps = useInnerBlocksProps(
        { className: 'fb-loop-builder-inner' },
        {
            allowedBlocks: ['core/post-template', 'core/query-pagination', 'core/query-no-results'],
            template: [
                ['core/post-template', {}, [
                    ['core/post-featured-image'],
                    ['core/post-title'],
                    ['core/post-excerpt']
                ]],
                ['core/query-pagination'],
                ['core/query-no-results', {}, [
                    ['core/paragraph', { content: __('No posts found.', 'frontis-blocks') }]
                ]]
            ],
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

    // Define the initializeLayout function that was missing
    const initializeLayout = () => {
        // This function should be empty or minimal since 
        // the actual Swiper initialization is now handled in index.js
        console.log('Layout update detected:', displayLayout.type);
        
        // If needed, you could add block-specific layout initialization here
        // but the main Swiper initialization is already handled in your index.js
    };

    // Initialize layout functionality after render
    useEffect(() => {
        initializeLayout();
    }, [displayLayout]);

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