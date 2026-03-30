import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import loadGoogleFont from '@Utils/loadGoogleFont';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from './inspector';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generatePricingTableStyle from "./styling";
import './editor.scss';

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        selectedColumn,
        columns,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,
        pricingTableDesktopSwitcher,
        pricingTableTabletSwitcher,
        pricingTableMobileSwitcher,
    } = attributes;

    // Helper to get current column data
    const getColumnData = (columnIndex) => {
        return columns[columnIndex] || {};
    };

    // Helper to update specific column attribute
    const updateColumnAttribute = (key, value, columnIndex = null) => {
        const targetIndex = columnIndex !== null ? columnIndex : 
            columns.findIndex(col => col.id === selectedColumn);
        
        const newColumns = columns.map((col, index) => {
            if (index === targetIndex) {
                return { ...col, [key]: value };
            }
            return col;
        });
        setAttributes({ columns: newColumns });
    };

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
            const css = generatePricingTableStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
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

    // Render a single pricing column
    const renderPricingColumn = (columnIndex) => {
        const columnData = getColumnData(columnIndex);
        const isActive = columns[columnIndex]?.id === selectedColumn;
        const columnClass = columnIndex === 0 ? '' : columnIndex === 1 ? ' two' : ' three';

        return (
            <div
                className={`fb-mc-pricing-column${columnClass} ${isActive ? 'is-selected-column' : ''}`}
                key={columns[columnIndex]?.id || `column-${columnIndex}`}
                onClick={() => setAttributes({ selectedColumn: columns[columnIndex]?.id })}
            >
                <div className="fb-mc-pricing-inner-wrapper">
                    {columnData.pricingSectionTopSwitcher && (
                        <div className="fb-mc-pricing-top-wrapper">
                            <RichText
                                tagName="span"
                                className="fb-mc-pricing-top-text"
                                value={columnData.pricingSectionTopText || ''}
                                onChange={(value) => updateColumnAttribute('pricingSectionTopText', value, columnIndex)}
                                placeholder={__('Enter text', 'frontis-blocks')}
                            />
                        </div>
                    )}
                    <div className="fb-mc-pricing-main-wrapper">
                        <div className="fb-mc-pricing-header">
                            <div className={`fb-mc-pricing-title-wrapper`}>
                                <RichText
                                    tagName={columnData.pricingTitleTag || 'h2'}
                                    className="fb-mc-pricing-title"
                                    value={columnData.pricingTitle || ''}
                                    onChange={(value) => updateColumnAttribute('pricingTitle', value, columnIndex)}
                                    placeholder={__('Enter title', 'frontis-blocks')}
                                />
                            </div>
                            <div className="fb-mc-pricing-button-wrapper">
                                {columnData.priceButtonSwitcher && (
                                    <a
                                        className={`fb-mc-pricing-button`}
                                        href={columnData.priceButtonUrl || '#'}
                                        target={columnData.priceButtonTargetUrl ? "_blank" : undefined}
                                        rel={columnData.priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                                        onClick={(event) => event.preventDefault()}
                                    >
                                        <RichText
                                            tagName="span"
                                            value={columnData.priceButtonText || ''}
                                            onChange={(value) => updateColumnAttribute('priceButtonText', value, columnIndex)}
                                            placeholder={__('Enter button text...', 'frontis-blocks')}
                                            className="fb-button-text"
                                        />
                                    </a>
                                )}
                            </div>
                            <div className="fb-mc-pricing-price-wrapper">
                                <div className="fb-mc-pricing-price-inner-wrapper">
                                    <span className={`fb-mc-pricing-normal-price ${columnData.salePriceSwitcher ? 'line-through' : ''}`}>
                                        <span className="price-currency">
                                            {columnData.priceCurrencyPosition === 'left' ? (
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.priceCurrency || ''}
                                                    placeholder={__('Enter currency', 'frontis-blocks')}
                                                />
                                            ) : ''}
                                        </span>
                                        <RichText
                                            tagName="span"
                                            value={columnData.normalPrice || ''}
                                            placeholder={__('Enter price', 'frontis-blocks')}
                                        />
                                        <span className="price-currency">
                                            {columnData.priceCurrencyPosition === 'right' ? (
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.priceCurrency || ''}
                                                    placeholder={__('Enter currency', 'frontis-blocks')}
                                                />
                                            ) : ''}
                                        </span>
                                        {!columnData.salePriceSwitcher && (
                                            <span className="price-period">
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriodSeparator || ''}
                                                    placeholder={__('Enter separator', 'frontis-blocks')}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriod || ''}
                                                    placeholder={__('Enter period', 'frontis-blocks')}
                                                />
                                            </span>
                                        )}
                                    </span>
                                    {columnData.salePriceSwitcher && (
                                        <span className="fb-mc-pricing-sale-price">
                                            <span className="price-currency">
                                                {columnData.priceCurrencyPosition === 'left' ? (
                                                    <RichText
                                                        tagName="span"
                                                        value={columnData.priceCurrency || ''}
                                                        placeholder={__('Enter currency', 'frontis-blocks')}
                                                    />
                                                ) : ''}
                                            </span>
                                            <RichText
                                                tagName="span"
                                                value={columnData.salePrice || ''}
                                                placeholder={__('Enter price', 'frontis-blocks')}
                                            />
                                            <span className="price-currency">
                                                {columnData.priceCurrencyPosition === 'right' ? (
                                                    <RichText
                                                        tagName="span"
                                                        value={columnData.priceCurrency || ''}
                                                        placeholder={__('Enter currency', 'frontis-blocks')}
                                                    />
                                                ) : ''}
                                            </span>
                                            <span className="price-period">
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriodSeparator || ''}
                                                    placeholder={__('Enter separator', 'frontis-blocks')}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriod || ''}
                                                    placeholder={__('Enter period', 'frontis-blocks')}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='fb-mc-pricing-content'>
                            {columnData.priceAfterTextSwitcher && (
                                <div className="fb-mc-pricing-plan-activation-wrapper">
                                    <RichText
                                        tagName="span"
                                        className="fb-mc-pricing-plan-activation"
                                        value={columnData.priceAfterText || ''}
                                        onChange={(value) => updateColumnAttribute('priceAfterText', value, columnIndex)}
                                        placeholder={__('Enter text', 'frontis-blocks')}
                                    />
                                </div>
                            )}
                            <div className="fb-mc-pricing-features-wrapper">
                                {columnData.priceHideFeaturesSwitcher && (
                                    <ul className="fb-mc-pricing-features-list">
                                        {(columnData.priceFeatureItems || []).map(item => (
                                            <li className="fb-mc-pricing-feature-item" key={item.id}>
                                                {columnData.priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
                                                    <div className="fb-mc-pricing-feature-icon">
                                                        <span className="fb-mc-pricing-feature-icon-inner">
                                                            {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                        </span>
                                                    </div>
                                                )}
                                                <RichText
                                                    tagName="span"
                                                    className="fb-mc-pricing-feature-text"
                                                    value={item.Title || ''}
                                                    onChange={(value) => {
                                                        const updatedItems = (columnData.priceFeatureItems || []).map(i =>
                                                            i.id === item.id ? { ...i, Title: value } : i
                                                        );
                                                        updateColumnAttribute('priceFeatureItems', updatedItems, columnIndex);
                                                    }}
                                                    placeholder={__('Feature Title', 'frontis-blocks')}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
                <div className={`fb-parent-wrapper fb-multi-column-pricing-table-wrapper ${blockID} ${pricingTableGlobalWraperClass} ${columns.some(col => col.pricingSectionTopSwitcher) ? 'fb-multi-column-pricing-table-top-section' : ''}`} id={pricingTableGlobalWraperID} ref={panelRef}>
                    {renderPricingColumn(0)}
                    {renderPricingColumn(1)}
                    {renderPricingColumn(2)}
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
