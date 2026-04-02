import { useBlockProps } from '@wordpress/block-editor';
import attributes from './attributes.js';
import { pricingPresetStyles } from './presets.js';

// Previous default columns data to match saved blocks
const old_columns = [
    {
        ...pricingPresetStyles['default'].columns[0],
        priceAfterText: 'Activation on 1 Site',
    },
    {
        ...pricingPresetStyles['default'].columns[1],
        priceAfterText: 'Activation on 1 Site',
    },
    {
        ...pricingPresetStyles['default'].columns[2],
        priceAfterText: 'Activation on 1 Site',
    },
];

const old_attributes = {
    ...attributes,
    columns: {
        ...attributes.columns,
        default: old_columns,
    },
};

import LayoutOneSave from './layouts/layout-one/save';
import LayoutTwoSave from './layouts/layout-two/save';
import LayoutThreeSave from './layouts/layout-three/save';

const v1_0_0 = {
    attributes: old_attributes,
    save({ attributes }) {
        const {
            blockID,
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
                default:
                    return <LayoutOneSave attributes={attributes} />;
            }
        };

        return (
            <>
                <div {...blockProps} id={blockID}>
                    {renderLayout()}
                </div>
            </>
        );
    }
};

export default [v1_0_0];
