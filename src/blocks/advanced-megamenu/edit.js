import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    InnerBlocks,
} from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";
import { useSelect, useDispatch } from "@wordpress/data";
import { parse } from "@wordpress/blocks";
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        navigationLayout,
        navigationHorizontalAlign,
        dropdownOpenOnClick,
        showDropdownIcon,
        navigationFlexWrapSwitcher,
        navigationVerticalAlign,
        hamburgerMenuIconType,
        hamburgerMenuSwitcher,
        navigationGlobalWraperClass,
        navigationGlobalWraperID,
        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
        enableMegaMenu,
    } = attributes;

    const { updateBlockAttributes } = useDispatch("core/block-editor");
    const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

    const innerBlocks = useSelect(
        (select) => select("core/block-editor").getBlocks(clientId),
        [clientId]
    );

    // Get all navigation items with their mega menu settings
    const navigationItems = useSelect(
        (select) => {
            if (!innerBlocks.length) return [];
            
            const navBlock = innerBlocks[0]; // The core/navigation block
            if (!navBlock || !navBlock.innerBlocks) return [];
            
            return navBlock.innerBlocks.map(item => ({
                clientId: item.clientId,
                name: item.name,
                attributes: item.attributes,
                label: item.attributes.label || item.attributes.url || 'Untitled',
            }));
        },
        [innerBlocks]
    );

    // Fetch pattern data for each navigation item
    const megaMenuPatterns = useSelect(select => {
        const patterns = {};
        
        navigationItems.forEach(item => {
            const patternId = item.attributes.megaMenuPattern;
            if (!patternId || !item.attributes.enableItemMegaMenu) return;
            
            // Check if it's a user pattern
            if (patternId.startsWith('user-')) {
                const id = parseInt(patternId.replace('user-', ''), 10);
                
                if (select('core')) {
                    const userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
                    const userPattern = userPatterns.find(p => p.id === id);
                    
                    if (userPattern && userPattern.content && userPattern.content.raw) {
                        patterns[item.clientId] = {
                            content: userPattern.content.raw
                        };
                    }
                }
            } else {
                // Core pattern
                if (select('core')) {
                    const corePatterns = select('core').getBlockPatterns() || [];
                    const pattern = corePatterns.find(p => p.name === patternId);
                    if (pattern) {
                        patterns[item.clientId] = pattern;
                    }
                }
            }
        });
        
        return patterns;
    }, [navigationItems]);

    // Parse pattern content for each item
    const [parsedPatterns, setParsedPatterns] = useState({});

    useEffect(() => {
        const newParsedPatterns = {};
        
        Object.keys(megaMenuPatterns).forEach(itemClientId => {
            const patternData = megaMenuPatterns[itemClientId];
            if (patternData && patternData.content) {
                const parsedBlocks = parse(patternData.content);
                if (parsedBlocks && parsedBlocks.length > 0) {
                    newParsedPatterns[itemClientId] = parsedBlocks;
                }
            }
        });
        
        setParsedPatterns(newParsedPatterns);
    }, [megaMenuPatterns]);

    useEffect(() => {
        if (innerBlocks.length > 0) {
            innerBlocks.forEach((block) => {
                updateBlockAttributes(block.clientId, {
                    className: `${navigationLayout} ${navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign} ${navigationFlexWrapSwitcher ? "no-wrap" : ""}`, 
                    openSubmenusOnClick: dropdownOpenOnClick,
                    showSubmenuIcon: showDropdownIcon,
                    hasIcon: hamburgerMenuIconType === "icon" ? true : false,
                    overlayMenu: hamburgerMenuSwitcher,
                });
            });
        }
    }, [navigationLayout, navigationHorizontalAlign, navigationFlexWrapSwitcher, navigationVerticalAlign, dropdownOpenOnClick, showDropdownIcon, hamburgerMenuIconType, hamburgerMenuSwitcher]);

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId} ${navigationDesktopSwitcher && 'fb-desktop-responsive'} ${navigationTabletSwitcher && 'fb-tablet-responsive'} ${navigationMobileSwitcher && 'fb-mobile-responsive'} ${enableMegaMenu ? 'fb-mega-menu-enabled' : ''}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div {...blockProps}>
                <div className={`advanced-navigation-wrapper ${navigationGlobalWraperClass}`} id={navigationGlobalWraperID}>
                    <div
                        className={`advanced-navigation-inner-wrapper ${navigationLayout} ${
                            navigationLayout === "is-horizontal" ? navigationHorizontalAlign : navigationVerticalAlign
                        } ${showDropdownIcon ? "" : "remove-dropdown-icon"} ${
                            hamburgerMenuIconType === "icon" ? "responsive-icon" : "responsive-text"
                        }`}
                    >
                        <div className="advanced-navigation-contents">
                            <InnerBlocks
                                templateLock={false}
                                template={[
                                    [
                                        "core/navigation",
                                        { className: `${navigationLayout} ${navigationHorizontalAlign}` }, 
                                    ],
                                ]}
                                allowedBlocks={["core/navigation"]}
                                renderAppender={
                                    innerBlocks.length < 1
                                        ? InnerBlocks.ButtonBlockAppender
                                        : false
                                }
                            />
                        </div>

                        {/* Per-Item Mega Menu Display */}
                        {enableMegaMenu && navigationItems.map(item => {
                            if (!item.attributes.enableItemMegaMenu || !item.attributes.megaMenuPattern) {
                                return null;
                            }

                            const parsedBlocks = parsedPatterns[item.clientId] || [];
                            const isHovered = hoveredMenuItem === item.clientId;

                            return (
                                <div 
                                    key={item.clientId}
                                    className={`fb-mega-menu-container fb-mega-menu-item-${item.clientId} ${isHovered ? 'active' : ''}`}
                                    data-nav-item={item.clientId}
                                    onMouseEnter={() => setHoveredMenuItem(item.clientId)}
                                    onMouseLeave={() => setHoveredMenuItem(null)}
                                >
                                    {parsedBlocks.length > 0 ? (
                                        <div className="fb-mega-menu-content">
                                            <div className="fb-mega-menu-header">
                                                <span className="fb-mega-menu-title">{item.label}</span>
                                            </div>
                                            {parsedBlocks.map((block, index) => (
                                                <div key={index} className="fb-mega-menu-block">
                                                    <div className="wp-block-preview">
                                                        {block.name}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="fb-mega-menu-placeholder">
                                            <p>{__('Loading pattern...', 'frontis-blocks')}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}