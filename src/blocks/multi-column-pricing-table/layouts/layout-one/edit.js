import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import renderSVG from "../../../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

const LayoutOneEdit = ({ attributes, setAttributes, panelRef }) => {
    const {
        blockID,
        columns,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,
        pricingSectionTopSwitcher,
        selectedColumn,
        pricingTitleTag,
        pricingTitle,
        priceButtonSwitcher,
        priceButtonUrl,
        priceButtonTargetUrl,
        priceButtonText,
        priceCurrencyPosition,
        priceCurrency,
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
            <div
                className={`fb-mc-pricing-column`}
            >
                <div className="fb-mc-pricing-inner-wrapper">
                    {pricingSectionTopSwitcher && (
                        <div className="fb-mc-pricing-top-wrapper">
                            <RichText
                                tagName="span"
                                className="fb-mc-pricing-top-text"
                                value={pricingSectionTopText || ''}
                                onChange={(value) => setAttributes({ pricingSectionTopText: value })}
                                placeholder={__('Enter text', 'frontis-blocks')}
                            />
                        </div>
                    )}
                    <div className="fb-mc-pricing-main-wrapper">
                        <div className="fb-mc-pricing-header">
                            <div className={`fb-mc-pricing-title-wrapper`}>
                                <RichText
                                    tagName={pricingTitleTag || 'h2'}
                                    className="fb-mc-pricing-title"
                                    value={pricingTitle || ''}
                                    onChange={(value) => setAttributes({ pricingTitle: value })}
                                    placeholder={__('Enter title', 'frontis-blocks')}
                                />
                            </div>
                            <div className="fb-mc-pricing-button-wrapper">
                                {priceButtonSwitcher && (
                                    <a
                                        className={`fb-mc-pricing-button`}
                                        href={priceButtonUrl || '#'}
                                        target={priceButtonTargetUrl ? "_blank" : undefined}
                                        rel={priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                                        onClick={(event) => event.preventDefault()}
                                    >
                                        <RichText
                                            tagName="span"
                                            value={priceButtonText || ''}
                                            onChange={(value) => setAttributes({ priceButtonText: value })}
                                            placeholder={__('Enter button text...', 'frontis-blocks')}
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
                                                <RichText
                                                    tagName="span"
                                                    value={priceCurrency || ''}
                                                    onChange={(value) => setAttributes({ priceCurrency: value })}
                                                    placeholder={__('Enter currency', 'frontis-blocks')}
                                                />
                                            ) : ''}
                                        </span>
                                        <RichText
                                            tagName="span"
                                            value={normalPrice || ''}
                                            onChange={(value) => setAttributes({ normalPrice: value })}
                                            placeholder={__('Enter price', 'frontis-blocks')}
                                        />
                                        <span className="price-currency">
                                            {priceCurrencyPosition === 'right' ? (
                                                <RichText
                                                    tagName="span"
                                                    value={priceCurrency || ''}
                                                    onChange={(value) => setAttributes({ priceCurrency: value })}
                                                    placeholder={__('Enter currency', 'frontis-blocks')}
                                                />
                                            ) : ''}
                                        </span>
                                        {!salePriceSwitcher && (
                                            <span className="price-period">
                                                <RichText
                                                    tagName="span"
                                                    value={pricePeriodSeparator || ''}
                                                    onChange={(value) => setAttributes({ pricePeriodSeparator: value })}
                                                    placeholder={__('Enter separator', 'frontis-blocks')}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={pricePeriod || ''}
                                                    onChange={(value) => setAttributes({ pricePeriod: value })}
                                                    placeholder={__('Enter period', 'frontis-blocks')}
                                                />
                                            </span>
                                        )}
                                    </span>
                                    {salePriceSwitcher && (
                                        <span className="fb-mc-pricing-sale-price">
                                            <span className="price-currency">
                                                {priceCurrencyPosition === 'left' ? (
                                                    <RichText
                                                        tagName="span"
                                                        value={priceCurrency || ''}
                                                        onChange={(value) => setAttributes({ priceCurrency: value })}
                                                        placeholder={__('Enter currency', 'frontis-blocks')}
                                                    />
                                                ) : ''}
                                            </span>
                                            <RichText
                                                tagName="span"
                                                value={salePrice || ''}
                                                onChange={(value) => setAttributes({ salePrice: value })}
                                                placeholder={__('Enter price', 'frontis-blocks')}
                                            />
                                            <span className="price-currency">
                                                {priceCurrencyPosition === 'right' ? (
                                                    <RichText
                                                        tagName="span"
                                                        value={priceCurrency || ''}
                                                        onChange={(value) => setAttributes({ priceCurrency: value })}
                                                        placeholder={__('Enter currency', 'frontis-blocks')}
                                                    />
                                                ) : ''}
                                            </span>
                                            <span className="price-period">
                                                <RichText
                                                    tagName="span"
                                                    value={pricePeriodSeparator || ''}
                                                    onChange={(value) => setAttributes({ pricePeriodSeparator: value })}
                                                    placeholder={__('Enter separator', 'frontis-blocks')}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={pricePeriod || ''}
                                                    onChange={(value) => setAttributes({ pricePeriod: value })}
                                                    placeholder={__('Enter period', 'frontis-blocks')}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='fb-mc-pricing-content'>
                            {priceAfterTextSwitcher && (
                                <div className="fb-mc-pricing-plan-activation-wrapper">
                                    <RichText
                                        tagName="span"
                                        className="fb-mc-pricing-plan-activation"
                                        value={priceAfterText || ''}
                                        onChange={(value) => setAttributes({ priceAfterText: value })}
                                        placeholder={__('Enter text', 'frontis-blocks')}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="fb-mc-pricing-features-wrapper">
                            {priceHideFeaturesSwitcher && (
                                <ul className="fb-mc-pricing-features-list">
                                    {(priceFeatureItems || []).map(item => (
                                        <li className={`fb-mc-pricing-feature-item${item.Disabled ? ' fb-feature-disabled' : ''}`} key={item.id}>
                                            {priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
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
                                                    const updatedItems = (priceFeatureItems || []).map(i =>
                                                        i.id === item.id ? { ...i, Title: value } : i
                                                    );
                                                    setAttributes({ priceFeatureItems: updatedItems });
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
        );
    };

    return (
        <div 
            className={`fb-parent-wrapper fb-layout-one fb-multi-column-pricing-table-wrapper ${blockID} ${pricingTableGlobalWraperClass} ${hasTopSection ? 'fb-multi-column-pricing-table-top-section' : ''}`} 
            id={pricingTableGlobalWraperID} 
            ref={panelRef}
        >   
            <div className="fb-mc-pricing-grid">
                {renderPricingColumn(0)}
                {renderPricingColumn(1)}
                {renderPricingColumn(2)}
            </div>
            
        </div>
    );
};

export default LayoutOneEdit;
