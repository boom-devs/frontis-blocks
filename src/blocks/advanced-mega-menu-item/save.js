import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        menuLabel,
        menuUrl,
        openInNewTab,
        hasSubmenu,
        isMegaMenu,
        selectedPattern,
        megaMenuInteraction = 'hover',   // <-- NEW
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-mega-menu-item ${blockId} ${
            hasSubmenu ? 'has-submenu' : ''
        } ${isMegaMenu ? 'has-megamenu' : ''}`,
        'data-trigger': megaMenuInteraction,   // <-- expose to JS
    });

    return (
        <div {...blockProps}>
            {menuUrl ? (
                <a
                    href={menuUrl}
                    className="fb-menu-link"
                    target={openInNewTab ? '_blank' : undefined}
                    rel={openInNewTab ? 'noopener noreferrer' : undefined}
                >
                    <RichText.Content tagName="span" value={menuLabel} />
                    {(hasSubmenu || isMegaMenu) && (
                        <span className="fb-menu-indicator">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                <path d="M6 9L1 4h10z" />
                            </svg>
                        </span>
                    )}
                </a>
            ) : (
                <span className="fb-menu-link">
                    <RichText.Content tagName="span" value={menuLabel} />
                    {(hasSubmenu || isMegaMenu) && (
                        <span className="fb-menu-indicator">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                <path d="M6 9L1 4h10z" />
                            </svg>
                        </span>
                    )}
                </span>
            )}

            {isMegaMenu ? (
                <div className="fb-megamenu">
                    <InnerBlocks.Content />
                </div>
            ) : hasSubmenu ? (
                <div className="fb-submenu">
                    <InnerBlocks.Content />
                </div>
            ) : null}
        </div>
    );
}