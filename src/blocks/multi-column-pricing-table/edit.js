import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import loadGoogleFont from '@Utils/loadGoogleFont';
import Inspector from './inspector';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generatePricingTableStyle from "./styling";
import './editor.scss';

import LayoutOneEdit from './layouts/layout-one/edit';

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        pricingPresetStyle,
        selectedColumn,
        columns,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,
        pricingTableDesktopSwitcher,
        pricingTableTabletSwitcher,
        pricingTableMobileSwitcher,
    } = attributes;

    const editorBlockStyle = blockID ? generatePricingTableStyle(attributes) : blockStyle;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-multi-column-pricing-table',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Load Google Font */
    useEffect(() => {
        const fontFamilies = [
            'pricingTopSectionTextFontFamily',
            'normalPricingFontFamily',
            'salePricingFontFamily',
            'priceCurrencyFontFamily',
            'pricePeriodFontFamily',
            'pricingTitleFontFamily',
            'pricingSubtitleFontFamily',
            'priceAfterTextFontFamily',
            'pricingfeatureTitleFontFamily',
            'priceButtonFontFamily',
            'priceFeatureAfterTextFontFamily',
        ];

        fontFamilies.forEach(fontFamily => {
            if (attributes[fontFamily] && !loadedFonts.has(attributes[fontFamily])) {
                loadGoogleFont(attributes[fontFamily]);
                loadedFonts.add(attributes[fontFamily]);
            }
        });
    }, [attributes]);

    /** End Load Google Font */

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            if (blockStyle !== editorBlockStyle) {
                setAttributes({ blockStyle: editorBlockStyle });
            }
        }
    }, [blockID, blockStyle, editorBlockStyle, setAttributes]);
    /** End Generate Block Style */


    const blockProps = useBlockProps({
        className: `fb-multi-column-pricing-table-area ${blockID
        } ${pricingTableDesktopSwitcher && 'fb-desktop-responsive'} ${pricingTableTabletSwitcher && 'fb-tablet-responsive'} ${pricingTableMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    // Conditional rendering based on layout/preset
    const renderLayout = () => {
        switch (pricingPresetStyle) {
            case 'default':
                return <LayoutOneEdit attributes={attributes} setAttributes={setAttributes} panelRef={panelRef} />;
            default:
                return <LayoutOneEdit attributes={attributes} setAttributes={setAttributes} panelRef={panelRef} />;
        }
    };

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            <div {...blockProps}>
                {renderLayout()}
            </div>
            <style>{editorBlockStyle}</style>
        </>
    );
}
