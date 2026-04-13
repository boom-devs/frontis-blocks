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
        priceFeatureTitle,
        priceFeatureTitleSwitcher,
        pricingPresetStyle,
        pricingSectionTopSwitcher,
        pricingTitleTag
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

        return(
             <div
                className={`fb-mc-pricing-column${columnClass} ${isActive ? 'is-selected-column' : ''}`}
                key={columns[columnIndex]?.id || `column-${columnIndex}`}
                onClick={() => setAttributes({ selectedColumn: columns[columnIndex]?.id })}
            >
                <div className="fb-mc-pricing-inner-wrapper">
                    
                    <div className="fb-mc-pricing-main-wrapper">
                        <div className="fb-mc-pricing-header">
                            {columnData.pricingSectionTopSwitcher && (
                                <div className="fb-mc-pricing-top-wrapper">
                                    <RichText
                                        tagName="span"
                                        className="fb-mc-pricing-top-text"
                                        value={columnData.pricingSectionTopText || ''}
                                        onChange={(value) => updateColumnAttribute('pricingSectionTopText', value, columnIndex)}
                                        placeholder={__('Enter text', 'frontis-blocks')}
                                    />
                                </div>
                            )}
                            <div className="fb-mc-pricing-title-wrapper">
                                <RichText
                                    tagName={columnData.pricingTitleTag || 'h2'}
                                    className="fb-mc-pricing-title"
                                    value={columnData.pricingTitle || ''}
                                    onChange={(value) => updateColumnAttribute('pricingTitle', value, columnIndex)}
                                    placeholder={__('Enter title', 'frontis-blocks')}
                                />
                            </div>
                            <div className="fb-mc-pricing-price-wrapper">
                                <div className="fb-mc-pricing-price-inner-wrapper">
                                    {columnData.salePriceSwitcher && (
                                        <span className="fb-mc-pricing-sale-price">
                                            <span className="price-currency">
                                                {columnData.priceCurrencyPosition === 'left' ? (
                                                    <RichText
                                                        tagName="span"
                                                        value={columnData.priceCurrency || ''}
                                                        onChange={(value) => updateColumnAttribute('priceCurrency', value, columnIndex)}
                                                    />
                                                ) : ''}
                                            </span>
                                            <RichText
                                                tagName="span"
                                                value={columnData.salePrice || ''}
                                                onChange={(value) => updateColumnAttribute('salePrice', value, columnIndex)}
                                                placeholder={__('Enter price', 'frontis-blocks')}
                                            />
                                            <span className="price-currency">
                                                {columnData.priceCurrencyPosition === 'right' ? (
                                                    <RichText
                                                        tagName="span"
                                                        value={columnData.priceCurrency || ''}
                                                        onChange={(value) => updateColumnAttribute('priceCurrency', value, columnIndex)}
                                                    />
                                                ) : ''}
                                            </span>
                                            <span className="price-period">
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriodSeparator || ''}
                                                    onChange={(value) => updateColumnAttribute('pricePeriodSeparator', value, columnIndex)}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriod || ''}
                                                    onChange={(value) => updateColumnAttribute('pricePeriod', value, columnIndex)}
                                                />
                                            </span>
                                        </span>
                                    )}
                                    <span className={`fb-mc-pricing-normal-price ${columnData.salePriceSwitcher ? 'line-through' : ''}`}>
                                        <span className="price-currency">
                                            {columnData.priceCurrencyPosition === 'left' ? (
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.priceCurrency || ''}
                                                    onChange={(value) => updateColumnAttribute('priceCurrency', value, columnIndex)}
                                                />
                                            ) : ''}
                                        </span>
                                        <RichText
                                            tagName="span"
                                            value={columnData.normalPrice || ''}
                                            onChange={(value) => updateColumnAttribute('normalPrice', value, columnIndex)}
                                            placeholder={__('Enter price', 'frontis-blocks')}
                                        />
                                        <span className="price-currency">
                                            {columnData.priceCurrencyPosition === 'right' ? (
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.priceCurrency || ''}
                                                    onChange={(value) => updateColumnAttribute('priceCurrency', value, columnIndex)}
                                                />
                                            ) : ''}
                                        </span>
                                        {!columnData.salePriceSwitcher && (
                                            <span className="price-period">
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriodSeparator || ''}
                                                    onChange={(value) => updateColumnAttribute('pricePeriodSeparator', value, columnIndex)}
                                                />
                                                <RichText
                                                    tagName="span"
                                                    value={columnData.pricePeriod || ''}
                                                    onChange={(value) => updateColumnAttribute('pricePeriod', value, columnIndex)}
                                                />
                                            </span>
                                        )}
                                    </span>
                                </div>
                                
                            </div>
                        </div>

                        <div className="fb-mc-pricing-content">
                            {columnData.priceAfterTextSwitcher && (
                               <div className="fb-mc-pricing-plan-activation-wrapper">
                                    <RichText
                                        tagName="span"
                                        className="fb-mc-pricing-plan-activation"
                                        value={columnData.priceAfterText || ''}
                                        onChange={(value) => updateColumnAttribute('priceAfterText', value, columnIndex)}
                                        placeholder={__('Enter text', 'frontis-blocks')}
                                    />
                                </div>
                            )}
                            
                            <div className="fb-mc-pricing-button-wrapper">
                                {columnData.priceButtonSwitcher && (
                                    <a
                                        className={`fb-mc-pricing-button`}
                                        href={columnData.priceButtonUrl || '#'}
                                        target={columnData.priceButtonTargetUrl ? "_blank" : undefined}
                                        rel={columnData.priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                                        onClick={(event) => event.preventDefault()}
                                    >
                                        <RichText
                                            tagName="span"
                                            value={columnData.priceButtonText || ''}
                                            onChange={(value) => updateColumnAttribute('priceButtonText', value, columnIndex)}
                                            placeholder={__('Enter button text...', 'frontis-blocks')}
                                            className="fb-button-text"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="fb-mc-pricing-features-wrapper">
                            {columnData.priceHideFeaturesSwitcher && (
                                <ul className="fb-mc-pricing-features-list">
                                    {(columnData.priceFeatureItems || []).map(item => (
                                        <li className={`fb-mc-pricing-feature-item${item.Disabled ? ' fb-feature-disabled' : ''}`} key={item.id}>
                                            {columnData.priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
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
                                                    const updatedItems = (columnData.priceFeatureItems || []).map(i =>
                                                        i.id === item.id ? { ...i, Title: value } : i
                                                    );
                                                    updateColumnAttribute('priceFeatureItems', updatedItems, columnIndex);
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
            className={`fb-parent-wrapper fb-layout-two fb-multi-column-pricing-table-wrapper ${pricingTableGlobalWraperClass} ${columns.some(col => col.pricingSectionTopSwitcher) ? 'fb-multi-column-pricing-table-top-section' : ''}`} 
            id={pricingTableGlobalWraperID} 
            ref={panelRef}
        >
            {pricingPresetStyle === 'preset-1' && priceFeatureTitleSwitcher && (
                <div className='fb-mc-pricing-feature-title'>
                    <RichText
                        tagName="h3"
                        className="fb-mc-pricing-feature-title-text"
                        value={priceFeatureTitle}
                        onChange={(value) => setAttributes({ priceFeatureTitle: value })}
                        placeholder={__('Enter feature title', 'frontis-blocks')}
                    />
                </div>    
            )}
            <div className="fb-mc-pricing-grid">
                {renderPricingColumn(0)}
                {renderPricingColumn(1)}
                {renderPricingColumn(2)}
            </div>
        </div>
    );
};

export default LayoutTwoEdit;
