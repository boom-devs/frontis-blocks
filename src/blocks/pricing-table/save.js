import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockId,
		deviceType,
		/** Start Header */
		pricingSectionTopSwitcher,
		pricingSectionTopText,
		pricingTitle,
		pricingSubTitleSwitcher,
		pricingSubTitle,
		pricingIconAlign,
		pricingIcon,
		/** End Header */

		/** Start Pricing */
		normalPrice,
		salePriceSwitcher,
		salePrice,
		priceCurrency,
		priceCurrencyPosition,
		pricePeriod,
		pricePeriodSeparator,
		/** End Pricing */

		/** Start Feature */
		priceHideFeaturesSwitcher,
		priceFeatureIconSwitcher,
		priceFeatureItems,
		
		/** End Feature */

		/** Start Button */
		priceButtonSwitcher,
		priceButtonText,
		priceButtonUrl,
		priceButtonTargetUrl,
		priceButtonIconAlign,
		priceButtonIcon,
		priceButtonIconPosition,
		priceButtonIconSpacing,
		/** End Button */	

		/** Start Ribbon */
		priceRibbonSwitcher,
		priceRibbonText,
		priceRibbonPosition,
		/** End Ribbon */


        priceAfterTextSwitcher,
		priceAfterText,	

		priceFeatureAfterTextSwitcher,
		priceFeatureAfterText,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `${blockId}`,
    });

    return (
        <>
        <div {...blockProps} id={blockId}>
            <div className={`fb-pricing-wrapper ${blockId}`}>
                {pricingSectionTopSwitcher && (
                    <div className="fb-pricing-inner-wrapper">
                        <div className="fb-pricing-top-wrapper">
                            <span className="fb-pricing-top-text">{pricingSectionTopText}</span>
                        </div>
                    </div>
                )}
                <div className="fb-pricing-main-wrapper">
                    <div className="fb-pricing-ribbon-wrapper">
                        {priceRibbonSwitcher && (
                            <div className={`fb-pricing-ribbon fb-pricing-ribbon-${priceRibbonPosition}`}>
                                <span>{priceRibbonText}</span>
                            </div>
                        )}
                    </div>
                    <div className="fb-pricing-header">
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
                        <div className="fb-pricing-icon-wrapper">
                            {pricingIconAlign === 'icon' && (
                                <div className="fb-pricing-icon">{renderSVG(pricingIcon)}</div>
                            )}
                        </div>
                        <div className="fb-pricing-price-wrapper">
                            <div className="fb-pricing-price-inner-wrapper">
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
                            {priceAfterTextSwitcher && (
                                <div className="fb-pricing-after-text-wrapper">
                                    <div className="fb-pricing-after-text">{priceAfterText}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="fb-pricing-content">
                        <div className="fb-pricing-features-wrapper">
                            {!priceHideFeaturesSwitcher && (
                                <ul className="fb-pricing-features-list">
                                    {priceFeatureItems.map((item, key) => (
                                        <li className="fb-pricing-feature-item" key={key}>
                                            {priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
                                                <div className="fb-pricing-feature-icon">
                                                    <span className="fb-pricing-feature-icon-inner">
                                                        {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                    </span>
                                                </div>
                                            )}
                                            <RichText.Content
                                                tagName="span"
                                                className="fb-pricing-feature-text"
                                                value={item.Title}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {priceFeatureAfterTextSwitcher && (
                                <div className="fb-pricing-after-text-wrapper">
                                    <div className="fb-pricing-after-text">{priceFeatureAfterText}</div>
                                </div>
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
        </div>
        </>
    );
}
