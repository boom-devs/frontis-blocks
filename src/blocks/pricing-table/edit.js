import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls, RichText, URLInput,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	DateTimePicker,
	Dropdown,
	Button,
	Dashicon,
	SelectControl,
	ButtonGroup,
	ColorPalette,
	ResponsiveWrapper, __experimentalHStack as HStack, TextareaControl,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';
import {	NORMAL_HOVER,
	UNIT_TYPES,
	TEXT_ALIGN,
	HEADING,
	FONT_FAMILYS,
	BORDER_STYLES
} from "./constants/constants";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
        blockId,
		/** Start Header */
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
		priceFeatureShowLineSwitcher,
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
	} = attributes;

    const blockProps = useBlockProps({
        className: `${blockId}`,
    });

	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
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
							<RichText
								tagName="h2"
								className="fb-pricing-title"
								value={pricingTitle}
								onChange={(value) => setAttributes({ pricingTitle: value })}
								placeholder={__('Enter title', 'frontis-blocks')}
							/>
							{pricingSubTitleSwitcher && (
								<RichText
									tagName="span"
									className="fb-pricing-subtitle"
									value={pricingSubTitle}
									onChange={(value) => setAttributes({ pricingSubTitle: value })}
									placeholder={__('Enter subtitle', 'frontis-blocks')}
								/>
							)}
						</div>
					</div>
					<div className ='fb-pricing-content'>
						<div className="fb-pricing-features-wrapper">
							{ !priceHideFeaturesSwitcher && (
								<ul className="fb-pricing-features-list">
									{priceFeatureItems.map(item => (
										<li className="fb-pricing-feature-item" key={item.id}>
											{priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
												<div className="fb-pricing-feature-icon">
													<span className="fb-pricing-feature-icon-inner">
														{item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
													</span>
												</div>
											)}
											<RichText
												tagName="span"
												className="fb-pricing-feature-text"
												value={item.Title}
												onChange={(value) => {
													const updatedItems = priceFeatureItems.map(i =>
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
					<div className="fb-pricing-footer-wrapper">
						<div className="fb-pricing-button-wrapper">
							{priceButtonSwitcher && (
							<a
								className={`fb-pricing-button fb-button-icon-${priceButtonIconPosition}`}
								href={priceButtonUrl}
								target={priceButtonTargetUrl ? "_blank" : undefined}
								rel={priceButtonTargetUrl ? "noopener noreferrer" : undefined}
								onClick={(event) => event.preventDefault()}
							>
								{priceButtonIconPosition === 'left' && priceButtonIconAlign === 'icon' && (
								<div className="fb-pricing-button-icon">
									{renderSVG(priceButtonIcon)}
								</div>
								)}
								<RichText
								tagName="span"
								value={priceButtonText}
								onChange={(value) => setAttributes({ priceButtonText: value })}
								placeholder={__('Enter button text...', 'frontis-blocks')}
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
		</>
	);
}
