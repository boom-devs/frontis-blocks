import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import loadGoogleFont from '@Utils/loadGoogleFont';
import Inspector from './inspector';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generatePricingTableStyle from "./styling";
import { pricingPresetStyles } from './presets';
import './editor.scss';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';

import LayoutOneEdit from './layouts/layout-one/edit';
import LayoutTwoEdit from './layouts/layout-two/edit';
import LayoutThreeEdit from './layouts/layout-three/edit';
import LayoutFourEdit from './layouts/layout-four/edit';

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

    /** Ensure layout three (preset-2) has four column entries (migrate older saves). */
    useEffect(() => {
        if (pricingPresetStyle !== 'preset-2') {
            return;
        }
        const defaultCols = pricingPresetStyles['preset-2']?.columns;
        if (!Array.isArray(columns) || !Array.isArray(defaultCols)) {
            return;
        }
        if (columns.length >= defaultCols.length) {
            return;
        }
        setAttributes({
            columns: [...columns, ...defaultCols.slice(columns.length)],
        });
    }, [pricingPresetStyle, columns?.length]);

    /** Start Generate Block Style */
    useEffect(() => {
        if (!blockID) return;
        const timeoutId = setTimeout(() => {
            const css = generatePricingTableStyle(attributes);
            if (css !== blockStyle) {
                setAttributes({ blockStyle: css });
            }
        }, 80);

        return () => clearTimeout(timeoutId);
    }, [attributes, blockID, blockStyle, setAttributes]);
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

    // Conditional rendering
    const multiColumnPricingTableAvailable = applyFilters('frontisblocks-multi-column-pricing-table-available', false);
    
    if(!multiColumnPricingTableAvailable) {
        return (
            <UpgradeToProPopup />
        )
    }

    // Conditional rendering based on layout/preset
    const renderLayout = () => {
        switch (pricingPresetStyle) {
            case 'default':
                return <LayoutOneEdit attributes={attributes} setAttributes={setAttributes} panelRef={panelRef} />;
            case 'preset-1':
                return <LayoutTwoEdit attributes={attributes} setAttributes={setAttributes} panelRef={panelRef} />;
            case 'preset-2':
                return <LayoutThreeEdit attributes={attributes} setAttributes={setAttributes} panelRef={panelRef} />;
            case 'preset-3':
                return <LayoutFourEdit attributes={attributes} setAttributes={setAttributes} panelRef={panelRef} />;
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
            <style>{blockStyle}</style>
        </>
    );
}