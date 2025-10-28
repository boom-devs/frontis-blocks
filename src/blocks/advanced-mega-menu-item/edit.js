import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
    RichText,
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import Inspector from './inspector';
import './editor.scss';

const ALLOWED_SUBMENU_BLOCKS = ['frontis-blocks/mega-menu-item'];

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        menuLabel,
        menuUrl,
        hasSubmenu,
        isMegaMenu,
        selectedPattern,
        megaMenuInteraction,
        menuLayout
    } = attributes;

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked]   = useState(false);

    const showContent = (hasSubmenu || isMegaMenu) &&
        (megaMenuInteraction === 'hover' ? isHovered : isClicked);

    const { replaceInnerBlocks } = useDispatch('core/block-editor');

    const patternData = useSelect(
        (select) => {
            if (!selectedPattern || !isMegaMenu) return null;

            if (selectedPattern.startsWith('user-')) {
                const id = parseInt(selectedPattern.replace('user-', ''), 10);
                const userPatterns = select('core')
                    .getEntityRecords('postType', 'wp_block') || [];
                const userPattern = userPatterns.find(p => p.id === id);
                return userPattern?.content?.raw
                    ? { content: userPattern.content.raw }
                    : null;
            }

            const corePatterns = select('core').getBlockPatterns() || [];
            return corePatterns.find(p => p.name === selectedPattern) || null;
        },
        [selectedPattern, isMegaMenu]
    );

    useEffect(() => {
        if (!isMegaMenu || !patternData?.content) {
            replaceInnerBlocks(clientId, [], false);
            return;
        }

        const parsed = parse(patternData.content);
        if (parsed?.length) {
            replaceInnerBlocks(clientId, parsed, false);
        }
    }, [patternData, clientId, isMegaMenu, replaceInnerBlocks]);

    const innerBlocksProps = {
        allowedBlocks: isMegaMenu ? false : ALLOWED_SUBMENU_BLOCKS,
        templateLock: false,
        renderAppender: isMegaMenu
            ? false
            : () => <InnerBlocks.ButtonBlockAppender />,
    };

    const blockProps = useBlockProps({
        className: `fb-mega-menu-item ${blockId} ${
            hasSubmenu ? 'has-submenu' : ''
        } ${isMegaMenu ? 'has-megamenu' : ''}`,
        ...(megaMenuInteraction === 'hover' && {
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
        }),
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div {...blockProps}>
                <div className={`fb-menu-item-wrapper`}>
                    <div className="fb-menu-item-label-wrapper">
                        <RichText
                            tagName="span"
                            value={menuLabel}
                            onChange={(v) => setAttributes({ menuLabel: v })}
                            placeholder={__('Menu Label', 'frontis-blocks')}
                            className="fb-menu-label"
                        />

                        {(hasSubmenu || isMegaMenu) && (
                            <span className="fb-menu-indicator">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                    <path d="M6 9L1 4h10z" />
                                </svg>
                            </span>
                        )}

                        {megaMenuInteraction === 'click' && (hasSubmenu || isMegaMenu) && (
                            <button
                                className="fb-menu-toggle-btn"
                                onClick={() => setIsClicked(!isClicked)}
                                aria-expanded={isClicked}
                            >
                                <span className="fb-menu-indicator">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                        <path d="M6 9L1 4h10z" />
                                    </svg>
                                </span>
                            </button>
                        )}
                    </div>

                    {hasSubmenu && !isMegaMenu && (
                        <div
                            className={`fb-submenu-wrapper ${
                                showContent ? 'fb-show' : ''
                            }`}
                        >
                            <InnerBlocks {...innerBlocksProps} />
                        </div>
                    )}

                    {isMegaMenu && (
                        <div
                            className={`fb-megamenu-wrapper ${
                                showContent ? 'fb-show' : ''
                            }`}
                        >
                            {!selectedPattern ? (
                                <div className="fb-megamenu-placeholder">
                                    <p>
                                        {__(
                                            'Select a pattern in the sidebar to display as mega menu',
                                            'frontis-blocks'
                                        )}
                                    </p>
                                </div>
                            ) : (
                                <InnerBlocks {...innerBlocksProps} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}