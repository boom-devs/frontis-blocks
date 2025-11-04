import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        smoothScroll,
        collapsible,
        initialCollapsed,
        enableDesktopSticky,
        enableMobileCollapsible,
        tocTitle,
        maxHeadingLevel,
        minHeadingLevel,
        listStyle,
        blockTypesToInclude,
    } = attributes;

    // State for headings in the document
    const [headings, setHeadings] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

    // Get all blocks to scan for headings
    const { blocks } = useSelect(
        (select) => ({
            blocks: select(blockEditorStore).getBlocks(),
        }),
        []
    );

    // Function to extract headings from blocks
    const extractHeadings = (blocksToScan) => {
        const extractedHeadings = [];
        
        const processBlock = (block) => {
            // Check if this is a heading block
            if (block.name === 'core/heading') {
                const level = block.attributes.level;
                
                // Only include headings within the specified level range
                if (level >= minHeadingLevel && level <= maxHeadingLevel) {
                    extractedHeadings.push({
                        content: block.attributes.content,
                        level: level,
                        anchor: block.attributes.anchor || '',
                        id: block.clientId
                    });
                }
            }
            
            // Process inner blocks recursively
            if (block.innerBlocks && block.innerBlocks.length > 0) {
                block.innerBlocks.forEach(processBlock);
            }
        };
        
        blocksToScan.forEach(processBlock);
        return extractedHeadings;
    };

    // Update headings whenever blocks change
    useEffect(() => {
        const updatedHeadings = extractHeadings(blocks);
        setHeadings(updatedHeadings);
    }, [blocks, minHeadingLevel, maxHeadingLevel]);

    // Generate unique ID for the block if not already set
    useEffect(() => {
        if (clientId && typeof clientId === 'string' && !blockID) {
            setAttributes({
                blockID: "toc-" + clientId.slice(0, 8),
            });
        }
    }, [clientId, blockID, setAttributes]);

    // Generate the TOC list items
    const renderTOCItems = (headingItems) => {
        return headingItems.map((heading, index) => {
            const headingId = heading.anchor || `heading-${heading.id.slice(0, 8)}`;
            const indent = heading.level - minHeadingLevel;
            
            return (
                <li key={index} className={`toc-level-${heading.level}`} style={{ paddingLeft: `${indent * 20}px` }}>
                    <a href={`#${headingId}`} dangerouslySetInnerHTML={{ __html: heading.content }}></a>
                </li>
            );
        });
    };

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    const blockProps = useBlockProps({
        className: `fb-table-of-contents-block ${blockID} ${isCollapsed ? 'collapsed' : ''}`,
    });

    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            {/* Mobile TOC Toggle Icon */}
            {enableMobileCollapsible && (
                <div className="fb-toc-mobile-toggle" onClick={toggleCollapsed}>
                    <span className="dashicons dashicons-arrow-right-alt2"></span>
                </div>
            )}
            
            <div className={`fb-toc-container ${isCollapsed && enableMobileCollapsible ? 'hidden-mobile' : ''}`}>
				{tocTitle && (
                <h2 className="fb-toc-title">{tocTitle || __('Table of Contents', 'frontis-blocks')}</h2>
				)}
                
                <div className={`fb-toc-content ${isCollapsed && collapsible ? 'collapsed' : ''}`}>
                    {headings.length > 0 ? (
                        <ol className={`fb-toc-list list-style-${listStyle}`}>
                            {renderTOCItems(headings)}
                        </ol>
                    ) : (
                        <p className="fb-toc-empty">{__('No headings found in the content.', 'frontis-blocks')}</p>
                    )}
                </div>
            </div>
        </div>
    );
}