import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        socialShareDesktopSwitcher,
        socialShareTabletSwitcher,
        socialShareMobileSwitcher,
        socialShareGlobalWraperClass,
        socialShareGlobalWraperID
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `frontis-block fb-social-share ${blockID} ${socialShareDesktopSwitcher && 'fb-desktop-responsive'} ${socialShareTabletSwitcher && 'fb-tablet-responsive'} ${socialShareMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
        <div {...blockProps}>
            <div className={`social-share-parent-container ${socialShareGlobalWraperClass}`} id={socialShareGlobalWraperID}>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}