import { RichText } from '@wordpress/block-editor';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";

const LayoutOneSave = ({ attributes }) => {
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
                    {columnData.pricingSectionTopSwitcher && (
                        <div className="fb-mc-pricing-top-wrapper">
                            <RichText.Content
                                tagName="span"
                                className="fb-mc-pricing-top-text"
                                value={columnData.pricingSectionTopText}
                            />
                        </div>
                    )}
                    <div className="fb-mc-pricing-main-wrapper">
                        <div className="fb-mc-pricing-header">
                            <div className="fb-mc-pricing-title-wrapper">
                                <RichText.Content
                                    tagName={columnData.pricingTitleTag || 'h2'}
                                    className="fb-mc-pricing-title"
                                    value={columnData.pricingTitle}
                                />
                            </div>
                            <div className="fb-mc-pricing-button-wrapper">
                                {columnData.priceButtonSwitcher && (
                                    <a
                                        className={`fb-mc-pricing-button`}
                                        href={columnData.priceButtonUrl}
                                        target={columnData.priceButtonTargetUrl ? "_blank" : undefined}
                                        rel={columnData.priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                                    >
                                        <RichText.Content
                                            tagName="span"
                                            value={columnData.priceButtonText}
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
                                                <RichText.Content tagName="span" value={columnData.priceCurrency} />
                                            ) : ''}
                                        </span>
                                        <RichText.Content tagName="span" value={columnData.normalPrice} />
                                        <span className="price-currency">
                                            {columnData.priceCurrencyPosition === 'right' ? (
                                                <RichText.Content tagName="span" value={columnData.priceCurrency} />
                                            ) : ''}
                                        </span>
                                        {!columnData.salePriceSwitcher && (
                                            <span className="price-period">
                                                <RichText.Content tagName="span" value={columnData.pricePeriodSeparator} />
                                                <RichText.Content tagName="span" value={columnData.pricePeriod} />
                                            </span>
                                        )}
                                    </span>
                                    {columnData.salePriceSwitcher && (
                                        <span className="fb-mc-pricing-sale-price">
                                            <span className="price-currency">
                                                {columnData.priceCurrencyPosition === 'left' ? (
                                                    <RichText.Content tagName="span" value={columnData.priceCurrency} />
                                                ) : ''}
                                            </span>
                                            <RichText.Content tagName="span" value={columnData.salePrice} />
                                            <span className="price-currency">
                                                {columnData.priceCurrencyPosition === 'right' ? (
                                                    <RichText.Content tagName="span" value={columnData.priceCurrency} />
                                                ) : ''}
                                            </span>
                                            <span className="price-period">
                                                <RichText.Content tagName="span" value={columnData.pricePeriodSeparator} />
                                                <RichText.Content tagName="span" value={columnData.pricePeriod} />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="fb-mc-pricing-content">
                            {columnData.priceAfterTextSwitcher && (
                                <div className="fb-mc-pricing-plan-activation-wrapper">
                                    <RichText.Content
                                        tagName="span"
                                        className="fb-mc-pricing-plan-activation"
                                        value={columnData.priceAfterText}
                                    />
                                </div>
                            )}
                            <div className="fb-mc-pricing-features-wrapper">
                                {columnData.priceHideFeaturesSwitcher && (
                                    <ul className="fb-mc-pricing-features-list">
                                        {(columnData.priceFeatureItems || []).map((item, key) => (
                                            <li 
                                                className={`fb-mc-pricing-feature-item${item.Disabled ? ' fb-feature-disabled' : ''}`}
                                                key={item.id}
                                            >
                                                {columnData.priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
                                                    <div className="fb-mc-pricing-feature-icon">
                                                        <span className="fb-mc-pricing-feature-icon-inner">
                                                            {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                        </span>
                                                    </div>
                                                )}
                                                <RichText.Content
                                                    tagName="span"
                                                    className="fb-mc-pricing-feature-text"
                                                    value={item.Title}
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
        <div className={`fb-parent-wrapper fb-layout-one fb-multi-column-pricing-table-wrapper ${blockID} ${pricingTableGlobalWraperClass} ${columns.some(col => col.pricingSectionTopSwitcher) ? 'fb-multi-column-pricing-table-top-section' : ''}`} id={pricingTableGlobalWraperID}>
            {renderPricingColumn(columns[0], 0)}
            {renderPricingColumn(columns[1], 1)}
            {renderPricingColumn(columns[2], 2)}
        </div>
    );
};

export default LayoutOneSave;
