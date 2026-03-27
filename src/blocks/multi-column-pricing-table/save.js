import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        /** Start Header */
        pricingSectionTopSwitcher,
        pricingSectionTopText,
        pricingTitle,
        pricingTitleTag,
        pricingSubTitleSwitcher,
        pricingSubTitleTag,
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


        priceAfterTextSwitcher,
        priceAfterText,	

        priceFeatureAfterTextSwitcher,
        priceFeatureAfterText,

        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,

        pricingTableDesktopSwitcher,
        pricingTableTabletSwitcher,
        pricingTableMobileSwitcher,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-pricing-area ${blockID} ${pricingTableDesktopSwitcher && 'fb-desktop-responsive'} ${pricingTableTabletSwitcher && 'fb-tablet-responsive'} ${pricingTableMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
        <>
            <div {...blockProps} id={blockID}>
                <div className={`fb-parent-wrapper fb-pricing-wrapper ${blockID} ${pricingTableGlobalWraperClass} ${pricingSectionTopSwitcher ? 'fb-pricing-top-section' : ''}`} id={pricingTableGlobalWraperID}>
                    {pricingSectionTopSwitcher && (
                        <div className="fb-pricing-inner-wrapper">
                            <div className="fb-pricing-top-wrapper">
                                <RichText.Content
                                    tagName="span"
                                    className="fb-pricing-top-text"
                                    value={pricingSectionTopText}
                                />
                            </div>
                        </div>
                    )}
                    <div className="fb-pricing-main-wrapper">
                        <div className="fb-pricing-header">
                            <div className="fb-pricing-ribbon-icon-wrapper">
                                {pricingIconAlign === 'icon' && (
                                    <div className="fb-pricing-ribbon-icon">{renderSVG(pricingIcon)}</div>
                                )}
                            </div>
                            <div className="fb-pricing-title-wrapper">
                                <RichText.Content
                                    tagName={pricingTitleTag}
                                    className="fb-pricing-title"
                                    value={pricingTitle}
                                />
                                {pricingSubTitleSwitcher && (
                                    <RichText.Content
                                        tagName={pricingSubTitleTag}
                                        className="fb-pricing-subtitle"
                                        value={pricingSubTitle}
                                    />
                                )}
                            </div>
                            <div className="fb-pricing-price-wrapper">
                                <div className="fb-pricing-price-inner-wrapper">
                                    <span className={`fb-pricing-normal-price ${salePriceSwitcher ? 'line-through' : ''}`}>
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
                                        <span className="fb-pricing-sale-price">
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
                                {priceAfterTextSwitcher && (
                                    <div className="fb-pricing-after-text-wrapper">
                                        <RichText.Content
                                            tagName="span"
                                            className="fb-pricing-after-text"
                                            value={priceAfterText}
                                        />
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="fb-pricing-content">
                            <div className="fb-pricing-features-wrapper">
                                {priceHideFeaturesSwitcher && (
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
                            </div>
                            {priceFeatureAfterTextSwitcher && (
                                <div className="fb-pricing-feature-after-text-wrapper">
                                    <RichText.Content
                                        tagName="span"
                                        className="fb-pricing-feature-after-text"
                                        value={priceFeatureAfterText}
                                    />
                                </div>
                            )}
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
