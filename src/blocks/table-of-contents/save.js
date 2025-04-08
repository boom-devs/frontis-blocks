import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        blockID,
        smoothScroll,
        collapsible,
        initialCollapsed,
        enableDesktopSticky,
        enableMobileCollapsible,
        tocTitle,
        listStyle,
        customClass,
        maxHeight,
        minHeadingLevel,
        maxHeadingLevel,
        stickyOffset
    } = attributes;
    const blockProps = useBlockProps.save({
        className: `fb-table-of-contents-block ${blockID} ${customClass || ''} ${enableDesktopSticky ? 'sticky-desktop' : ''} ${enableMobileCollapsible ? 'collapsible-mobile' : ''}`,
        'data-smooth-scroll': smoothScroll ? 'true' : 'false',
        'data-collapsible': collapsible ? 'true' : 'false',
        'data-initial-collapsed': initialCollapsed ? 'true' : 'false',
        'data-list-style': listStyle || 'disc',
        'data-min-heading-level': minHeadingLevel || 2,
        'data-max-heading-level': maxHeadingLevel || 4,
        'data-sticky-offset': stickyOffset || 20
    });
    return (
        <div {...blockProps}>
            {enableMobileCollapsible && (
                <div className="fb-toc-mobile-toggle">
                    <span className="dashicons dashicons-arrow-right-alt2"></span>
                </div>
            )}
            <div className="fb-toc-container">
                {tocTitle && (
                    <h2 className="fb-toc-title">{tocTitle || __('Table of Contents', 'frontis-blocks')}</h2>
                )}
                <div className={`fb-toc-content ${initialCollapsed && collapsible ? 'collapsed' : ''}`} style={{ maxHeight: maxHeight ? `${maxHeight}px` : 'none' }}>
                    <div className="fb-toc-list-container"></div>
                </div>
            </div>
        </div>
    );
}