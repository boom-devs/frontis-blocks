import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockId,
        pricingTitle,
        pricingSubTitleSwitcher,
        pricingSubTitle,
        pricingIconAlign,
        pricingIcon,
        normalPrice,
        salePriceSwitcher,
        salePrice,
        priceCurrency,
        priceCurrencyPosition,
        pricePeriod,
        pricePeriodSeparator,
        priceHideFeaturesSwitcher,
        priceFeatureShowLineSwitcher,
        priceFeatureIconSwitcher,
        priceFeatureItems,
        priceButtonSwitcher,
        priceButtonText,
        priceButtonUrl,
        priceButtonTargetUrl,
        priceButtonIconAlign,
        priceButtonIcon,
        priceButtonIconPosition,
        priceRibbonSwitcher,
        priceRibbonText,
        priceRibbonPosition,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `${blockId}`,
    });

    return (
        <div {...blockProps} id={blockId}>
            <div className={`fb-pricing-wrapper ${blockId}`}>
                <div className="fb-pricing-ribbon-wrapper">
                    {priceRibbonSwitcher && (
                        <div className={`fb-pricing-ribbon fb-pricing-ribbon-${priceRibbonPosition}`}>
                            <span>{priceRibbonText}</span>
                        </div>
                    )}
                </div>
                <div className="fb-pricing-header">
                    <div className="fb-pricing-icon-wrapper">
                        {pricingIconAlign === 'icon' && (
                            <div className="fb-pricing-icon">{renderSVG(pricingIcon)}</div>
                        )}
                    </div>
                    <div className="fb-pricing-price-wrapper">
                        <span className={`fb-pricing-normal-price ${salePriceSwitcher ? 'line-through' : ''}`}>
                            <span className="price-currency">{priceCurrencyPosition === 'left' ? priceCurrency : ''}</span>
                            {normalPrice}
                            <span className="price-currency">{priceCurrencyPosition === 'right' ? priceCurrency : ''}</span>
                            
                            {!salePriceSwitcher && (
                                <span className="price-period">{pricePeriodSeparator}{pricePeriod}</span>
                            )}
                        </span>
                        {salePriceSwitcher && (
                            <span className="fb-pricing-sale-price">
                                <span className="price-currency">{priceCurrencyPosition === 'left' ? priceCurrency : ''}</span>
                                {salePrice}
                                <span className="price-currency">{priceCurrencyPosition === 'right' ? priceCurrency : ''}</span>
                                <span className="price-period">{pricePeriodSeparator}{pricePeriod}</span>
                            </span>
                        )}
                    </div>
                    <div className="fb-pricing-title-wrapper">
                        <RichText.Content
                            tagName="h2"
                            className="fb-pricing-title"
                            value={pricingTitle}
                        />
                        {pricingSubTitleSwitcher && (
                            <RichText.Content
                                tagName="span"
                                className="fb-pricing-subtitle"
                                value={pricingSubTitle}
                            />
                        )}
                    </div>
                </div>
                <div className="fb-pricing-content">
                    <div className="fb-pricing-features-wrapper">
                        {!priceHideFeaturesSwitcher && (
                            <ul className="fb-pricing-features-list">
                                {priceFeatureItems.map((item, key) => (
                                    <li className="fb-pricing-feature-item" key={key}>
                                        {item.priceFeatureListIconAlign !== 'none' && (
                                            <div className="fb-pricing-feature-icon">
                                                <span className="fb-pricing-feature-icon-inner">
                                                    {item.priceFeatureListIcon ? renderSVG(item.priceFeatureListIcon) : ''}
                                                </span>
                                            </div>
                                        )}
                                        <RichText.Content
                                            tagName="span"
                                            className="fb-pricing-feature-text"
                                            value={item.priceFeatureListItem}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="fb-pricing-footer-wrapper">
                    <div className="fb-pricing-button-wrapper">
                        {priceButtonSwitcher && (
                        <a
                            className={`fb-pricing-button fb-button-icon-${priceButtonIconPosition}`}
                            href={priceButtonUrl}
                            target={priceButtonTargetUrl ? "_blank" : undefined}
                            rel={priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                        >
                            {priceButtonIconPosition === 'left' && priceButtonIconAlign === 'icon' && (
                            <div className="fb-pricing-button-icon">
                                {renderSVG(priceButtonIcon)}
                            </div>
                            )}
                            <RichText.Content
                            tagName="span"
                            value={priceButtonText}
                            className="fb-button-text"
                            />
                            {priceButtonIconPosition === 'right' && priceButtonIconAlign === 'icon' && (
                            <div className="fb-pricing-button-icon">
                                {renderSVG(priceButtonIcon)}
                            </div>
                            )}
                        </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
