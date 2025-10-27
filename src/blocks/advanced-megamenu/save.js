import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        navigationLayout,
        navigationHorizontalAlign,
        showDropdownIcon,
        navigationVerticalAlign,
        hamburgerMenuIconType,

        navigationGlobalWraperClass,
        navigationGlobalWraperID,

        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `frontis-block fb-advanced-navigation-main-wrapper ${blockId} ${navigationDesktopSwitcher && 'fb-desktop-responsive'} ${navigationTabletSwitcher && 'fb-tablet-responsive'} ${navigationMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
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
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
    );
}