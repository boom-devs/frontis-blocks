import { RichText } from '@wordpress/block-editor';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";

const LayoutThreeSave = ({ attributes }) => {
    const {
        blockID,
        columns,
        pricingTableGlobalWraperClass,
    } = attributes;

    const renderPricingColumn = (columnData, columnIndex) => {
        const columnClass = columnIndex === 0 ? '' : columnIndex === 1 ? ' two' : ' three';

        return (
            <div className={`fb-mc-pricing-column${columnClass}`} key={columnData.id || `column-${columnIndex}`}>
                <div className="fb-mc-pricing-inner-wrapper">
                    <h3>Layout Three Placeholder</h3>
                    <RichText.Content
                        tagName="h2"
                        value={columnData.pricingTitle}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className={`fb-parent-wrapper fb-layout-three ${blockID} ${pricingTableGlobalWraperClass}`}>
            {renderPricingColumn(columns[0], 0)}
            {renderPricingColumn(columns[1], 1)}
            {renderPricingColumn(columns[2], 2)}
        </div>
    );
};

export default LayoutThreeSave;
