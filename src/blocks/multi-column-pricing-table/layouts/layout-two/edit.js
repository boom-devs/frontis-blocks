import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";

const LayoutTwoEdit = ({ attributes, setAttributes, panelRef }) => {
    const {
        blockID,
        columns,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,
        selectedColumn,
    } = attributes;

    const getColumnData = (columnIndex) => columns[columnIndex] || {};

    const updateColumnAttribute = (key, value, columnIndex = null) => {
        const targetIndex = columnIndex !== null ? columnIndex : 
            columns.findIndex(col => col.id === selectedColumn);
        
        const newColumns = columns.map((col, index) => {
            if (index === targetIndex) return { ...col, [key]: value };
            return col;
        });
        setAttributes({ columns: newColumns });
    };

    const renderPricingColumn = (columnIndex) => {
        const columnData = getColumnData(columnIndex);
        const isActive = columns[columnIndex]?.id === selectedColumn;
        const columnClass = columnIndex === 0 ? '' : columnIndex === 1 ? ' two' : ' three';

        return (
            <>
                <div class="fb-mc-pricing-grid">    
                <div
                    className={`fb-mc-pricing-column${columnClass} ${isActive ? 'is-selected-column' : ''}`}
                    key={columns[columnIndex]?.id || `column-${columnIndex}`}
                    onClick={() => setAttributes({ selectedColumn: columns[columnIndex]?.id })}
                >
                    <div class="fb-mc-pricing-inner-wrapper">
                        <div class="fb-mc-pricing-top-wrapper">
                            <span class="fb-mc-pricing-badge">-10% SAVINGS</span>
                        </div>
                        <div class="fb-mc-pricing-main-wrapper">
                            <div class="fb-mc-pricing-header">
                                <h2 class="fb-mc-pricing-title">Personal</h2>
                                <div class="fb-mc-pricing-price-wrapper">
                                    <span class="price-currency">$</span>
                                    <span class="price-amount">80.1</span>
                                    <del class="old-price">$89</del>
                                </div>
                            </div>
                            <div class="fb-mc-pricing-content">
                                <div class="fb-mc-pricing-plan-activation">1 Site</div>
                                <div class="fb-mc-pricing-support">Lifetime Update & Support</div>
                                <div class="fb-mc-pricing-button-wrapper">
                                    <a class="fb-mc-pricing-button secondary" href="#">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="fb-mc-features-wrapper">    
                <h3 class="fb-mc-features-main-title">All Premium Plans Include...</h3>
                <div class="fb-mc-features-grid">   
                     <div class="fb-mc-features-column">
                        <ul class="fb-mc-pricing-features-list">
                            <li class="fb-mc-pricing-feature-item">
                                <i class="fb-icon-check"></i> Landing Page (25 Pages)
                            </li>
                            <li class="fb-mc-pricing-feature-item">
                                <i class="fb-icon-check"></i> HTML + CSS Design (16 Pages)
                            </li>
                            <li class="fb-mc-pricing-feature-item">
                                <i class="fb-icon-check"></i> WordPress Themes (30 Pages)
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </>
            
        );
    };

    return (
        <div 
            className={`fb-parent-wrapper fb-layout-two fb-multi-column-pricing-table-wrapper ${pricingTableGlobalWraperClass} ${columns.some(col => col.pricingSectionTopSwitcher) ? 'fb-multi-column-pricing-table-top-section' : ''}`} 
            id={pricingTableGlobalWraperID} 
            ref={panelRef}
        >
            {renderPricingColumn(0)}
            {renderPricingColumn(1)}
            {renderPricingColumn(2)}
        </div>
    );
};

export default LayoutTwoEdit;
