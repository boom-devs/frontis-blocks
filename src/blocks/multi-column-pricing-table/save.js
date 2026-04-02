import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import LayoutOneSave from './layouts/layout-one/save';
import LayoutTwoSave from './layouts/layout-two/save';
import LayoutThreeSave from './layouts/layout-three/save';
// import LayoutFourSave from './layouts/layout-four/save';
// import LayoutFiveSave from './layouts/layout-five/save';

export default function save({ attributes }) {
    const {
        blockID,
        blockStyle,
        pricingPresetStyle,
        pricingTableDesktopSwitcher,
        pricingTableTabletSwitcher,
        pricingTableMobileSwitcher,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-multi-column-pricing-table-area ${blockID} ${pricingPresetStyle} ${pricingTableDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${pricingTableTabletSwitcher ? 'fb-tablet-responsive' : ''} ${pricingTableMobileSwitcher ? 'fb-mobile-responsive' : ''}`,
    });

    const renderLayout = () => {
        switch (pricingPresetStyle) {
            case 'default':
                return <LayoutOneSave attributes={attributes} />;
            case 'preset-1':
                return <LayoutTwoSave attributes={attributes} />;
            case 'preset-2':
                return <LayoutThreeSave attributes={attributes} />;
            // case 'preset-3':
            //     return <LayoutFourSave attributes={attributes} />;
            // case 'preset-4':
            //     return <LayoutFiveSave attributes={attributes} />;
            default:
                return <LayoutOneSave attributes={attributes} />;
        }
    };

    return (
        <>
            <div {...blockProps} id={blockID}>
                {renderLayout()}
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
