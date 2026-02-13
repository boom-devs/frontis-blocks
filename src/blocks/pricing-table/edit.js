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
import { useState, useEffect, useRef } from '@wordpress/element';
import loadGoogleFont from '@Utils/loadGoogleFont';
import './editor.scss';
import {
	NORMAL_HOVER,
	UNIT_TYPES,
	TEXT_ALIGN,
	HEADING,
	BORDER_STYLES
} from "./constants/constants";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from './inspector';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';

import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generatePricingTableStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		blockStyle,
		/** Start Header */
		pricingSectionTopSwitcher,
		pricingSectionTopText,
		pricingTitleTag,
		pricingTitle,
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

		pricingTitleAlignment,

		priceAfterTextSwitcher,
		priceAfterText,

		priceFeatureAfterTextSwitcher,
		priceFeatureAfterText,

		pricingTableGlobalWraperID,
		pricingTableGlobalWraperClass,

		pricingTableDesktopSwitcher,
		pricingTableTabletSwitcher,
		pricingTableMobileSwitcher,

		pricingTopSectionTextFontFamily,
		normalPricingFontFamily, 
		salePricingFontFamily, 
		priceCurrencyFontFamily, 
		pricePeriodFontFamily, 
		pricingTitleFontFamily, 
		pricingSubtitleFontFamily, 
		priceAfterTextFontFamily, 
		pricingfeatureTitleFontFamily, 
		priceButtonFontFamily, 
		priceFeatureAfterTextFontFamily,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-pricing-table',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Load Google Font */
	useEffect(() => {
		if (pricingTopSectionTextFontFamily && !loadedFonts.has(pricingTopSectionTextFontFamily)) {
			loadGoogleFont(pricingTopSectionTextFontFamily);
			loadedFonts.add(pricingTopSectionTextFontFamily);
		}
	}, [pricingTopSectionTextFontFamily]);

	useEffect(() => {
		if (normalPricingFontFamily && !loadedFonts.has(normalPricingFontFamily)) {
			loadGoogleFont(normalPricingFontFamily);
			loadedFonts.add(normalPricingFontFamily);
		}
	}, [normalPricingFontFamily]);

	useEffect(() => {
		if (salePricingFontFamily && !loadedFonts.has(salePricingFontFamily)) {
			loadGoogleFont(salePricingFontFamily);
			loadedFonts.add(salePricingFontFamily);
		}
	}, [salePricingFontFamily]);

	useEffect(() => {
		if (priceCurrencyFontFamily && !loadedFonts.has(priceCurrencyFontFamily)) {
			loadGoogleFont(priceCurrencyFontFamily);
			loadedFonts.add(priceCurrencyFontFamily);
		}
	}, [priceCurrencyFontFamily]);

	useEffect(() => {
		if (pricePeriodFontFamily && !loadedFonts.has(pricePeriodFontFamily)) {
			loadGoogleFont(pricePeriodFontFamily);
			loadedFonts.add(pricePeriodFontFamily);
		}
	}, [pricePeriodFontFamily]);

	useEffect(() => {
		if (pricingTitleFontFamily && !loadedFonts.has(pricingTitleFontFamily)) {
			loadGoogleFont(pricingTitleFontFamily);
			loadedFonts.add(pricingTitleFontFamily);
		}
	}, [pricingTitleFontFamily]);

	useEffect(() => {
		if (pricingSubtitleFontFamily && !loadedFonts.has(pricingSubtitleFontFamily)) {
			loadGoogleFont(pricingSubtitleFontFamily);
			loadedFonts.add(pricingSubtitleFontFamily);
		}
	}, [pricingSubtitleFontFamily]);
	
	useEffect(() => {
		if (priceAfterTextFontFamily && !loadedFonts.has(priceAfterTextFontFamily)) {
			loadGoogleFont(priceAfterTextFontFamily);
			loadedFonts.add(priceAfterTextFontFamily);
		}
	}, [priceAfterTextFontFamily]);
	
	useEffect(() => {
		if (pricingfeatureTitleFontFamily && !loadedFonts.has(pricingfeatureTitleFontFamily)) {
			loadGoogleFont(pricingfeatureTitleFontFamily);
			loadedFonts.add(pricingfeatureTitleFontFamily);
		}
	}, [pricingfeatureTitleFontFamily]);
	
	useEffect(() => {
		if (priceButtonFontFamily && !loadedFonts.has(priceButtonFontFamily)) {
			loadGoogleFont(priceButtonFontFamily);
			loadedFonts.add(priceButtonFontFamily);
		}
	}, [priceButtonFontFamily]);
	
	useEffect(() => {
		if (priceFeatureAfterTextFontFamily && !loadedFonts.has(priceFeatureAfterTextFontFamily)) {
			loadGoogleFont(priceFeatureAfterTextFontFamily);
			loadedFonts.add(priceFeatureAfterTextFontFamily);
		}
	}, [priceFeatureAfterTextFontFamily]);
	/** End Load Google Font */

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generatePricingTableStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */


	const blockProps = useBlockProps({
		className: `fb-pricing-area ${blockID
		} ${pricingTableDesktopSwitcher && 'fb-desktop-responsive'} ${pricingTableTabletSwitcher && 'fb-tablet-responsive'} ${pricingTableMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-pricing-wrapper ${blockID} ${pricingTableGlobalWraperClass} ${pricingSectionTopSwitcher ? 'fb-pricing-top-section' : ''}`} id={pricingTableGlobalWraperID} ref={panelRef}>
					<div className="fb-pricing-inner-wrapper">
						{pricingSectionTopSwitcher && (
							<div className="fb-pricing-top-wrapper">
								<RichText
									tagName="span"
									className="fb-pricing-top-text"
									value={pricingSectionTopText}
									onChange={(value) => setAttributes({ pricingSectionTopText: value })}
									placeholder={__('Enter text', 'frontis-blocks')}
								/>
							</div>
						)}
						<div className="fb-pricing-main-wrapper">
							<div className="fb-pricing-header">
								<div className="fb-pricing-ribbon-icon-wrapper">
									{pricingIconAlign === 'icon' && (
										<span className="fb-pricing-ribbon-icon">{renderSVG(pricingIcon)}</span>
									)}
								</div>
								<div className={`fb-pricing-title-wrapper fb-pricing-title-${pricingTitleAlignment}`}>
									<RichText
										tagName={pricingTitleTag}
										className="fb-pricing-title"
										value={pricingTitle}
										onChange={(value) => setAttributes({ pricingTitle: value })}
										placeholder={__('Enter title', 'frontis-blocks')}
									/>
									{pricingSubTitleSwitcher && (
										<RichText
											tagName={pricingSubTitleTag}
											className="fb-pricing-subtitle"
											value={pricingSubTitle}
											onChange={(value) => setAttributes({ pricingSubTitle: value })}
											placeholder={__('Enter subtitle', 'frontis-blocks')}
										/>
									)}
								</div>
								<div className="fb-pricing-price-wrapper">
									<div className="fb-pricing-price-inner-wrapper">
										<span className={`fb-pricing-normal-price ${salePriceSwitcher ? 'line-through' : ''}`}>
											<span className="price-currency">
												{priceCurrencyPosition === 'left' ? (
													<RichText
														tagName="span"
														value={priceCurrency}
														placeholder={__('Enter currency', 'frontis-blocks')}
													/>
												) : ''}
											</span>
											<RichText
												tagName="span"
												value={normalPrice}
												placeholder={__('Enter price', 'frontis-blocks')}
											/>
											<span className="price-currency">
												{priceCurrencyPosition === 'right' ? (
													<RichText
														tagName="span"
														value={priceCurrency}
														placeholder={__('Enter currency', 'frontis-blocks')}
													/>
												) : ''}
											</span>
											{!salePriceSwitcher && (
												<span className="price-period">
													<RichText
														tagName="span"
														value={pricePeriodSeparator}
														placeholder={__('Enter separator', 'frontis-blocks')}
													/>
													<RichText
														tagName="span"
														value={pricePeriod}
														placeholder={__('Enter period', 'frontis-blocks')}
													/>
												</span>
											)}
										</span>
										{salePriceSwitcher && (
											<span className="fb-pricing-sale-price">
												<span className="price-currency">
													{priceCurrencyPosition === 'left' ? (
														<RichText
															tagName="span"
															value={priceCurrency}
															placeholder={__('Enter currency', 'frontis-blocks')}
														/>
													) : ''}
												</span>
												<RichText
													tagName="span"
													value={salePrice}
													placeholder={__('Enter price', 'frontis-blocks')}
												/>
												<span className="price-currency">
													{priceCurrencyPosition === 'right' ? (
														<RichText
															tagName="span"
															value={priceCurrency}
															placeholder={__('Enter currency', 'frontis-blocks')}
														/>
													) : ''}
												</span>
												<span className="price-period">
													<RichText
														tagName="span"
														value={pricePeriodSeparator}
														placeholder={__('Enter separator', 'frontis-blocks')}
													/>
													<RichText
														tagName="span"
														value={pricePeriod}
														placeholder={__('Enter period', 'frontis-blocks')}
													/>
												</span>
											</span>
										)}
									</div>
									{priceAfterTextSwitcher && (
										<div className="fb-pricing-after-text-wrapper">
											<RichText
												tagName="span"
												className="fb-pricing-after-text"
												value={priceAfterText}
												placeholder={__('Enter text', 'frontis-blocks')}
											/>
										</div>
									)}
								</div>

							</div>
							<div className='fb-pricing-content'>
								<div className="fb-pricing-features-wrapper">
									{priceHideFeaturesSwitcher && (
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
								{priceFeatureAfterTextSwitcher && (
									<div className="fb-pricing-feature-after-text-wrapper">
										<RichText
											tagName="span"
											className="fb-pricing-feature-after-text"
											value={priceFeatureAfterText}
											placeholder={__('Enter text', 'frontis-blocks')}
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
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}