import { RichText } from '@wordpress/block-editor';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";

const LayoutTwoSave = ({ attributes }) => {
    const {
        blockID,
        columns,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,
    } = attributes;

    const renderPricingColumn = (columnData, columnIndex) => {
        const columnClass = columnIndex === 0 ? '' : columnIndex === 1 ? ' two' : ' three';

        return (
            <div className={`fb-mc-pricing-column${columnClass}`} key={columnData.id || `column-${columnIndex}`}>
                <div className="fb-mc-pricing-inner-wrapper">
                    <RichText.Content
                        tagName="h2"
                        className="fb-mc-pricing-title"
                        value={columnData.pricingTitle}
                    />
                    <RichText.Content
                        tagName="div"
                        className="fb-mc-pricing-price"
                        value={columnData.normalPrice}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className={`fb-parent-wrapper fb-layout-two ${blockID} ${pricingTableGlobalWraperClass}`} id={pricingTableGlobalWraperID}>
            {renderPricingColumn(columns[0], 0)}
            {renderPricingColumn(columns[1], 1)}
            {renderPricingColumn(columns[2], 2)}
        </div>
    );
};

export default LayoutTwoSave;
