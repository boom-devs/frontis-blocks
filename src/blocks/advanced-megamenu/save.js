// mega menu ( save.js )

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
        menuLayout,
        menuAlignment,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId} ${navigationDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${navigationTabletSwitcher ? 'fb-tablet-responsive' : ''} ${navigationMobileSwitcher ? 'fb-mobile-responsive' : ''}`,
    });

    return (
        <div {...blockProps}>
            <nav className={`fb-mega-menu-nav fb-layout-${menuLayout || 'horizontal'} fb-align-${menuAlignment || 'left'}`}>
                <InnerBlocks.Content />
            </nav>
        </div>
    );
}