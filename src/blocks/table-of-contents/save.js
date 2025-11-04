import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    // Extract attributes with defaults
    const {
        blockID = '',
        customClass = '',
        tocTitle = 'Table of Contents',
        minHeadingLevel = 2,
        maxHeadingLevel = 4,
        listStyle = 'disc',
        collapsible = true,
        initialCollapsed = false,
        smoothScroll = true,
        scrollOffset = 20,
        enableDesktopSticky = false,
        enableMobileCollapsible = true
    } = attributes;
    
    // Build block classes
    const blockClasses = [
        'fb-table-of-contents-block',
        blockID,
        customClass,
        enableDesktopSticky ? 'sticky-desktop' : '',
        enableMobileCollapsible ? 'collapsible-mobile' : ''
    ].filter(Boolean).join(' ');
    
    const blockProps = useBlockProps.save({
        className: blockClasses
    });
    
    // Store all attributes for server-side rendering
    return (
        <div {...blockProps}>
            {/* Store all attributes as data attributes */}
            <div 
                className="fb-toc-attributes" 
                data-title={tocTitle}
                data-min-level={minHeadingLevel}
                data-max-level={maxHeadingLevel}
                data-list-style={listStyle}
                data-collapsible={collapsible.toString()}
                data-initial-collapsed={initialCollapsed.toString()}
                data-smooth-scroll={smoothScroll.toString()}
                data-scroll-offset={scrollOffset}
                data-sticky-desktop={enableDesktopSticky.toString()}
                data-collapsible-mobile={enableMobileCollapsible.toString()}
            />
        </div>
    );
}