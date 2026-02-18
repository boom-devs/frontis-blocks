import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
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
    },
};

export default [v1_1_8];