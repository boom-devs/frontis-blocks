import { RichText } from '@wordpress/block-editor';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";

const LayoutOneSave = ({ attributes }) => {
    const {
        blockID,
        columns,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,
        pricingSectionTopSwitcher,
        pricingTitleTag,
        pricingTitle,
        priceButtonSwitcher,
        priceButtonUrl,
        priceButtonTargetUrl,
        priceButtonText,
        priceCurrency,
        priceCurrencyPosition,
        normalPrice,
        salePriceSwitcher,
        salePrice,
        pricePeriodSeparator,
        pricePeriod,
        priceAfterTextSwitcher,
        priceAfterText,
        priceHideFeaturesSwitcher,
        priceFeatureItems,
        priceFeatureIconSwitcher,
        pricingSectionTopText,

    } = attributes;

    const hasTopSection = columns?.some((col) => col?.pricingSectionTopSwitcher);

    const renderPricingColumn = (columnIndex) => {

        return (
            <div className={`fb-mc-pricing-column`}>
                <div className="fb-mc-pricing-inner-wrapper">
                    {pricingSectionTopSwitcher && (
                        <div className="fb-mc-pricing-top-wrapper">
                            <RichText.Content
                                tagName="span"
                                className="fb-mc-pricing-top-text"
                                value={pricingSectionTopText}
                            />
                        </div>
                    )}
                    <div className="fb-mc-pricing-main-wrapper">
                        <div className="fb-mc-pricing-header">
                            <div className="fb-mc-pricing-title-wrapper">
                                <RichText.Content
                                    tagName={pricingTitleTag || 'h2'}
                                    className="fb-mc-pricing-title"
                                    value={pricingTitle}
                                />
                            </div>
                            <div className="fb-mc-pricing-button-wrapper">
                                {priceButtonSwitcher && (
                                    <a
                                        className={`fb-mc-pricing-button`}
                                        href={priceButtonUrl}
                                        target={priceButtonTargetUrl ? "_blank" : undefined}
                                        rel={priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                                    >
                                        <RichText.Content
                                            tagName="span"
                                            value={priceButtonText}
                                            className="fb-button-text"
                                        />
                                    </a>
                                )}
                            </div>
                            <div className="fb-mc-pricing-price-wrapper">
                                <div className="fb-mc-pricing-price-inner-wrapper">
                                    <span className={`fb-mc-pricing-normal-price ${salePriceSwitcher ? 'line-through' : ''}`}>
                                        <span className="price-currency">
                                            {priceCurrencyPosition === 'left' ? (
                                                <RichText.Content tagName="span" value={priceCurrency} />
                                            ) : ''}
                                        </span>
                                        <RichText.Content tagName="span" value={normalPrice} />
                                        <span className="price-currency">
                                            {priceCurrencyPosition === 'right' ? (
                                                <RichText.Content tagName="span" value={priceCurrency} />
                                            ) : ''}
                                        </span>
                                        {!salePriceSwitcher && (
                                            <span className="price-period">
                                                <RichText.Content tagName="span" value={pricePeriodSeparator} />
                                                <RichText.Content tagName="span" value={pricePeriod} />
                                            </span>
                                        )}
                                    </span>
                                    {salePriceSwitcher && (
                                        <span className="fb-mc-pricing-sale-price">
                                            <span className="price-currency">
                                                {priceCurrencyPosition === 'left' ? (
                                                    <RichText.Content tagName="span" value={priceCurrency} />
                                                ) : ''}
                                            </span>
                                            <RichText.Content tagName="span" value={salePrice} />
                                            <span className="price-currency">
                                                {priceCurrencyPosition === 'right' ? (
                                                    <RichText.Content tagName="span" value={priceCurrency} />
                                                ) : ''}
                                            </span>
                                            <span className="price-period">
                                                <RichText.Content tagName="span" value={pricePeriodSeparator} />
                                                <RichText.Content tagName="span" value={pricePeriod} />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="fb-mc-pricing-content">
                            {priceAfterTextSwitcher && (
                                <div className="fb-mc-pricing-plan-activation-wrapper">
                                    <RichText.Content
                                        tagName="span"
                                        className="fb-mc-pricing-plan-activation"
                                        value={priceAfterText}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="fb-mc-pricing-features-wrapper">
                            {priceHideFeaturesSwitcher && (
                                <ul className="fb-mc-pricing-features-list">
                                    {(priceFeatureItems || []).map((item, key) => (
                                        <li 
                                            className={`fb-mc-pricing-feature-item${item.Disabled ? ' fb-feature-disabled' : ''}`}
                                            key={item.id}
                                        >
                                            {priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
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
        );
    };

    return (
        <div className={`fb-parent-wrapper fb-layout-one fb-multi-column-pricing-table-wrapper ${blockID} ${pricingTableGlobalWraperClass} ${hasTopSection ? 'fb-multi-column-pricing-table-top-section' : ''}`} id={pricingTableGlobalWraperID}>
            <div className='fb-mc-pricing-grid'>
                {renderPricingColumn(0)}
                {renderPricingColumn(1)}
                {renderPricingColumn(2)}
            </div>
        </div>
    );
};

export default LayoutOneSave;
