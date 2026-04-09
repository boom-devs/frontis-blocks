import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";

const LayoutThreeEdit = ({ attributes, setAttributes, panelRef }) => {
    const { blockID, columns, pricingTableGlobalWraperClass, selectedColumn } = attributes;

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
            <div
                className={`fb-mc-pricing-column${columnClass} ${isActive ? 'is-selected-column' : ''}`}
                key={columns[columnIndex]?.id || `column-${columnIndex}`}
                onClick={() => setAttributes({ selectedColumn: columns[columnIndex]?.id })}
            >
                <div className="fb-mc-pricing-inner-wrapper">
                    <h3>Layout Three Placeholder</h3>
                    <RichText
                        tagName="h2"
                        value={columnData.pricingTitle || ''}
                        onChange={(value) => updateColumnAttribute('pricingTitle', value, columnIndex)}
                        placeholder={__('Layout Three Title', 'frontis-blocks')}
                    />
                </div>
            </div>
        );
    };

    return (
        <div 
            className={`fb-parent-wrapper fb-layout-three ${blockID} ${pricingTableGlobalWraperClass}`} 
            ref={panelRef}
        >
            {renderPricingColumn(0)}
            {renderPricingColumn(1)}
            {renderPricingColumn(2)}
        </div>
    );
};

export default LayoutThreeEdit;
