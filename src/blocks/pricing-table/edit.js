import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls, RichText,
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
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import './editor.scss';
import {	NORMAL_HOVER,
	UNIT_TYPES,
	TEXT_ALIGN,
	HEADING,
	FONT_FAMILYS,
	BORDER_STYLES} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import ResponsiveControl from "../../components/responsivecontrol";

import TeamMemberContentBorderControl from './style-control/content/team-member-content-border.js';
import TeamMemberContentMarginControl from './style-control/content/team-member-content-margin.js';
import TeamMemberContentPaddingControl from './style-control/content/team-member-content-padding.js';


import TeamMemberImageBorderControl from './style-control/image/team-member-image-border.js';
import TeamMemberImagePaddingControl from './style-control/image/team-member-image-padding.js';
import TeamMemberImageMarginControl from './style-control/image/team-member-image-margin.js';
import TeamMemberNameControl from './style-control/name/team-member-name.js';
import TeamMemberNameMarginControl from './style-control/name/team-member-name-margin.js';
import TeamMemberDesignationControl from './style-control/designation/team-member-designation.js';
import TeamMemberDesignationMarginControl from './style-control/designation/team-member-designation-margin.js';
import PricingTableFeaturesControl from './style-control/features/pricing-table-features-control.js';

import SortableItem from './sortableItem.js';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		pricingTableHeaderName,
		pricingTableHeaderNameHeadingTag,
		pricingTableHeaderNameFontFamily,
		pricingTableHeaderNameFontSize,
		pricingTableHeaderNameFontSizeUnits,
		pricingTableHeaderNameFontWeight,
		pricingTableHeaderNameFontStyle,
		pricingTableHeaderNameTextTransform,
		pricingTableHeaderNameTextDecoration,
		pricingTableHeaderNameLetterSpacing,
		pricingTableHeaderNameLetterSpacingUnits,
		pricingTableHeaderNameLineHeight,
		pricingTableHeaderNameLineHeightUnits,
		pricingTableHeaderNameColor,

		pricingTableHeaderNameMarginUnits,
		desktoppricingTableHeaderNameMargin,
		pricingTableHeaderNameDesktopMargin,
		pricingTableHeaderNameTabMargin,
		pricingTableHeaderNameMobileMargin,
		pricingTableHeaderNameMarginLink,


		pricingTableHeaderContent,
		pricingTableHeaderContentFontFamily,
		pricingTableHeaderContentFontSize,
		pricingTableHeaderContentFontSizeUnits,
		pricingTableHeaderContentFontWeight,
		pricingTableHeaderContentFontStyle,
		pricingTableHeaderContentTextTransform,
		pricingTableHeaderContentTextDecoration,
		pricingTableHeaderContentLetterSpacing,
		pricingTableHeaderContentLetterSpacingUnits,
		pricingTableHeaderContentLineHeight,
		pricingTableHeaderContentLineHeightUnits,
		pricingTableHeaderContentColor,
		pricingTableHeaderContentMarginUnits,
		desktoppricingTableHeaderContentMargin,
		pricingTableHeaderContentDesktopMargin,
		pricingTableHeaderContentTabMargin,
		pricingTableHeaderContentMobileMargin,
		pricingTableHeaderContentMarginLink,

		pricingTablePricePrefix,
		pricingTablePricePrefixFontFamily,
		pricingTablePricePrefixFontSize,
		pricingTablePricePrefixFontSizeUnits,
		pricingTablePricePrefixFontWeight,
		pricingTablePricePrefixFontStyle,
		pricingTablePricePrefixTextTransform,
		pricingTablePricePrefixTextDecoration,
		pricingTablePricePrefixLetterSpacing,
		pricingTablePricePrefixLetterSpacingUnits,
		pricingTablePricePrefixLineHeight,
		pricingTablePricePrefixLineHeightUnits,
		pricingTablePricePrefixColor,

		// price prefix margin
		pricingTablePricePrefixMarginUnits,
		desktoppricingTablePricePrefixMargin,
		pricingTablePricePrefixDesktopMargin,
		pricingTablePricePrefixTabMargin,
		pricingTablePricePrefixMobileMargin,
		pricingTablePricePrefixMarginLink,

		// price amount
		pricingTablePriceAmount,
		pricingTablePriceAmountFontFamily,
		pricingTablePriceAmountFontSize,
		pricingTablePriceAmountFontSizeUnits,
		pricingTablePriceAmountFontWeight,
		pricingTablePriceAmountFontStyle,
		pricingTablePriceAmountTextTransform,
		pricingTablePriceAmountTextDecoration,
		pricingTablePriceAmountLetterSpacing,
		pricingTablePriceAmountLetterSpacingUnits,
		pricingTablePriceAmountLineHeight,
		pricingTablePriceAmountLineHeightUnits,
		pricingTablePriceAmountColor,

		// price amount margin
		pricingTablePriceAmountMarginUnits,
		desktoppricingTablePriceAmountMargin,
		pricingTablePriceAmountDesktopMargin,
		pricingTablePriceAmountTabMargin,
		pricingTablePriceAmountMobileMargin,
		pricingTablePriceAmountMarginLink,

		// price period
		pricingTablePricePeriod,
		pricingTablePricePeriodFontFamily,
		pricingTablePricePeriodFontSize,
		pricingTablePricePeriodFontSizeUnits,
		pricingTablePricePeriodFontWeight,
		pricingTablePricePeriodFontStyle,
		pricingTablePricePeriodTextTransform,
		pricingTablePricePeriodTextDecoration,
		pricingTablePricePeriodLetterSpacing,
		pricingTablePricePeriodLetterSpacingUnits,
		pricingTablePricePeriodLineHeight,
		pricingTablePricePeriodLineHeightUnits,
		pricingTablePricePeriodColor,
		pricingTablePricePeriodMarginUnits,
		desktoppricingTablePricePeriodMargin,
		pricingTablePricePeriodDesktopMargin,
		pricingTablePricePeriodTabMargin,
		pricingTablePricePeriodMobileMargin,
		pricingTablePricePeriodMarginLink,

		// Features
		DeviceType,
		FeatureItems,
		FeatureTag,
		FeatureIconShape,
		FeatureAlignment,
		FeatureIconAlignment,
		FeatureListGapDesktop,
		FeatureListGapTablet,
		FeatureListGapMobile,
		FeatureListGapUnits,
		FeatureIconColorSwitcher,
		FeatureIconColor,
		FeatureIconHoverColor,
		FeatureIconBgColorSwitcher,
		FeatureIconBgColor,
		FeatureIconBgHoverColor,
		FeatureIconSizeDesktop,
		FeatureIconSizeTablet,
		FeatureIconSizeMobile,
		FeatureIconSizeUnits,
		FeatureIconBgSizeDesktop,
		FeatureIconBgSizeTablet,
		FeatureIconBgSizeMobile,
		FeatureIconBgSizeUnits,
		FeatureIconSpacingDesktop,
		FeatureIconSpacingTablet,
		FeatureIconSpacingMobile,
		FeatureIconSpacingUnits,
		FeatureTitleFontFamily,
		FeatureTitleFontSizeDesktop,
		FeatureTitleFontSizeTablet,
		FeatureTitleFontSizeMobile,
		FeatureTitleFontSizeUnits,
		FeatureTitleFontWeight,
		FeatureTitleFontStyle,
		FeatureTitleTextTransform,
		FeatureTitleTextDecoration,
		FeatureTitleLetterSpacingDesktop,
		FeatureTitleLetterSpacingTablet,
		FeatureTitleLetterSpacingMobile,
		FeatureTitleLetterSpacingUnits,
		FeatureTitleLineHeightDesktop,
		FeatureTitleLineHeightTablet,
		FeatureTitleLineHeightMobile,
		FeatureTitleLineHeightUnits,
		FeatureTitleColorSwitcher,
		FeatureTitleColor,
		FeatureTitleHoverColor,
		FeatureDescFontFamily,
		FeatureDescFontSizeDesktop,
		FeatureDescFontSizeTablet,
		FeatureDescFontSizeMobile,
		FeatureDescFontSizeUnits,
		FeatureDescFontWeight,
		FeatureDescFontStyle,
		FeatureDescTextTransform,
		FeatureDescTextDecoration,
		FeatureDescLetterSpacingDesktop,
		FeatureDescLetterSpacingTablet,
		FeatureDescLetterSpacingMobile,
		FeatureDescLetterSpacingUnits,
		FeatureDescLineHeightDesktop,
		FeatureDescLineHeightTablet,
		FeatureDescLineHeightMobile,
		FeatureDescLineHeightUnits,
		FeatureDescColorSwitcher,
		FeatureDescColor,
		FeatureDescHoverColor,
		FeatureZIndex,
		FeaturePaddingUnits,
		FeatureDesktopPadding,
		FeatureTabPadding,
		FeatureMobilePadding,
		FeaturePaddingLink,
		FeatureMarginUnits,
		FeatureDesktopMargin,
		FeatureTabMargin,
		FeatureMobileMargin,
		FeatureMarginLink,
		FeatureBgColorSwitcher,
		FeatureBgColor,
		FeatureBgHoverColor,
		FeatureBorder,
		FeatureBorderColor,
		FeatureBorderHoverColor,
		FeatureBorderColorSwitcher,
		FeatureBorderUnits,
		FeatureDesktopBorderWidth,
		FeatureTabBorderWidth,
		FeatureMobileBorderWidth,
		FeatureBorderLink,
		FeatureBorderRadiusUnits,
		FeatureDesktopBorderRadiusWidth,
		FeatureTabBorderRadiusWidth,
		FeatureMobileBorderRadiusWidth,
		FeatureBorderRadiusLink,
		FeatureDesktopSwitcher,
		FeatureTabletSwitcher,
		FeatureMobileSwitcher,


	} = attributes;

	// Set blockID if it doesn't exist

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-pricing-table-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

	{/* Pricing Table Drag And Drop Handle Control */}

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = FeatureItems.findIndex(item => item.id === active.id);
			const newIndex = FeatureItems.findIndex(item => item.id === over.id);
			const updatedItems = arrayMove(FeatureItems, oldIndex, newIndex);
			setAttributes({ FeatureItems: updatedItems });
		}
	};

	const handleAddItem = () => {
		const newItem = { id: `item-${FeatureItems.length + 1}`, Title: `Feature Item ${FeatureItems.length + 1}`, Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check' };
		setAttributes({ FeatureItems: [...FeatureItems, newItem] });
	};

	const handleChangeItem = (id, key, value) => {
		const updatedItems = FeatureItems.map(item =>
			item.id === id ? { ...item, [key]: value } : item
		);
		setAttributes({ FeatureItems: updatedItems });
	};

	const handleDeleteItem = (id) => {
		const updatedItems = FeatureItems.filter(item => item.id !== id);
		setAttributes({ FeatureItems: updatedItems });
	};





	return (
		<>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name:
									"styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("Header", "frontis-blocks")} initialOpen={true}>
											<TextControl
												tagName={attributes.pricingTableHeaderNameHeadingTag}
												label={__('Title', 'frontis-blocks')}
												value={attributes.pricingTableHeaderName}
												onChange={(value) => setAttributes({ pricingTableHeaderName: value })}
												placeholder={__('Starter Plan', 'frontis-block')}
											/>

											<BaseControl label={__("HTML Tag", "frontis-block")} className="fb-setting-tag-wrapper">
												<ButtonGroup className="fb-setting-tag-inner-wrapper">
													{HEADING.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ pricingTableHeaderNameHeadingTag: item.value })}
															className={`fb-setting-tag-single-btn ${
																attributes.pricingTableHeaderNameHeadingTag === item.value ? 'active' : ''
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											<TextareaControl
												label={__('Content', 'frontis-blocks')}
												value={attributes.pricingTableHeaderContent}
												onChange={(value) => setAttributes({ pricingTableHeaderContent: value })}
												placeholder={__('Everything you need to get start building your website.', 'frontis-block')}
											/>

										</PanelBody>

										<PanelBody title={__("Price", "frontis-blocks")} initialOpen={false}>
											<TextControl
												label={__('Prefix', 'frontis-blocks')}
												value={attributes.pricingTablePricePrefix}
												onChange={(value) => setAttributes({ pricingTablePricePrefix: value })}
												placeholder={__('$', 'frontis-block')}
											/>
											<TextControl
												label={__('Price', 'frontis-blocks')}
												value={attributes.pricingTablePriceAmount}
												onChange={(value) => setAttributes({ pricingTablePriceAmount: value })}
												placeholder={__('9.99', 'frontis-block')}
											/>
											<TextControl
												label={__('Period', 'frontis-blocks')}
												value={attributes.pricingTablePricePeriod}
												onChange={(value) => setAttributes({ pricingTablePricePeriod: value })}
												placeholder={__('/month', 'frontis-block')}
											/>
										</PanelBody>

										<PanelBody title={__("Features", "frontis-blocks")} initialOpen={false}>
											<div className="fb-feature-wrapper">
												<DndContext
													collisionDetection={closestCenter}
													onDragEnd={handleDragEnd}
												>
													<SortableContext items={FeatureItems.map(item => item.id)}>
														<ul className='dnd-items-wrapper'>
															{FeatureItems.map((item) => (
																<SortableItem
																	key={item.id}
																	id={item.id}
																	item={item}
																	handleChangeItem={handleChangeItem}
																	handleDeleteItem={handleDeleteItem}
																/>
															))}
														</ul>
													</SortableContext>
													<Button isPrimary onClick={handleAddItem}>
														{__("Add Feature", "frontis-blocks")}
													</Button>
												</DndContext>
											</div>

											<BaseControl
												label={__("Title Tag", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
												<ButtonGroup
													className="fb-setting-text-alignment-group-btn"
												>
													{HEADING.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ FeatureTag: item.value })}
															className={`fb-setting-text-alignment-single-btn ${ FeatureTag === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											<BaseControl
												label={__("Icon Shape", "frontis-blocks")}
												className="fb-setting-icon-shape-wrapper"
											>
												<SelectControl
													value={attributes.FeatureIconShape}
													options={[
														{ label: __("None", "frontis-blocks"), value: "none" },
														{ label: __("Circle", "frontis-blocks"), value: "circle" },
														{ label: __("Square", "frontis-blocks"), value: "square" },
														{ label: __("Rhombus", "frontis-blocks"), value: "rhombus" },
													]}
													onChange={(value) => setAttributes({ FeatureIconShape: value })}
												/>
											</BaseControl>
											<BaseControl
												label={__("Feature Item Alignment", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
												<ButtonGroup
													className="fb-setting-text-alignment-group-btn"
												>
													{TEXT_ALIGN.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ FeatureAlignment: item.value })}
															className={`fb-setting-text-alignment-single-btn ${FeatureAlignment === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											<BaseControl
												label={__("Icon Position", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
												<ButtonGroup
													className="fb-setting-text-alignment-group-btn"
												>
													{TEXT_ALIGN.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({ FeatureIconAlignment: item.value })}
															className={`fb-setting-text-alignment-single-btn ${FeatureIconAlignment === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
										</PanelBody>

										<PanelBody title={__("Footer", "frontis-blocks")} initialOpen={false}>
										</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PricingTableFeaturesControl
											attributes={attributes}
											setAttributes={setAttributes}
											clientId ={clientId}
										/>

										<PanelBody
											title={__("Features", "frontis-blocks")}
											initialOpen={true}
										>

											{/*<TeamMemberContentMarginControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}
											{/*<TeamMemberContentPaddingControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}
										</PanelBody>

										{/*<PanelBody*/}
										{/*	title={__("Photo", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*	className="fb-setting-border-setting-wrapper"*/}
										{/*>*/}
										{/*	<TeamMemberImageBorderControl*/}
										{/*		attributes={attributes}*/}
										{/*		setAttributes={setAttributes}*/}
										{/*		clientId ={clientId}*/}
										{/*	/>*/}

										{/*	<TeamMemberImageMarginControl*/}
										{/*		attributes={attributes}*/}
										{/*		setAttributes={setAttributes}*/}
										{/*		clientId ={clientId}*/}
										{/*	/>*/}
										{/*</PanelBody>*/}


										{/*<PanelBody*/}
										{/*	title={__("Name", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*>*/}
										{/*	<TeamMemberNameControl*/}
										{/*		attributes={attributes}*/}
										{/*		setAttributes={setAttributes}*/}
										{/*		clientId ={clientId}*/}
										{/*	/>*/}
										{/*	<TeamMemberNameMarginControl*/}
										{/*		attributes={attributes}*/}
										{/*		setAttributes={setAttributes}*/}
										{/*		clientId ={clientId}*/}
										{/*	/>*/}

										{/*</PanelBody>*/}

										{/*<PanelBody*/}
										{/*	title={__("Designation", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*>*/}
										{/*	<TeamMemberDesignationControl*/}
										{/*		attributes={attributes}*/}
										{/*		setAttributes={setAttributes}*/}
										{/*		clientId ={clientId}*/}
										{/*	/>*/}
										{/*	<TeamMemberDesignationMarginControl*/}
										{/*		attributes={attributes}*/}
										{/*		setAttributes={setAttributes}*/}
										{/*		clientId ={clientId}*/}
										{/*	/>*/}
										{/*</PanelBody>*/}


										{/*<PanelBody*/}
										{/*	title={__("Social Profile", "frontis-blocks")}*/}
										{/*	initialOpen={false}*/}
										{/*>*/}

										{/*</PanelBody>*/}

									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-pricing-table-wrapper ${blockID}`}>
					<div className={`fb-pricing-table-item`}>
						<div className={`fb-pricing-table-icon`}>

						</div>
						<div className={`fb-pricing-table-header`}>
							<RichText
								tagName={pricingTableHeaderNameHeadingTag}
								value={pricingTableHeaderName}
								onChange={(value) => setAttributes({pricingTableHeaderName: value})}
								className="fb-pricing-table-header-name"
							/>
							<RichText
								tagName={'div'}
								value={pricingTableHeaderContent}
								onChange={(value) => setAttributes({pricingTableHeaderContent: value})}
								className="fb-pricing-table-header-content"
							/>
						</div>
						<div className={`fb-pricing-table-price-wrapper`}>
							<div className={`fb-pricing-table-price`}>
								<RichText
									tagName={'span'}
									value={pricingTablePricePrefix}
									onChange={(value) => setAttributes({pricingTablePricePrefix: value})}
									className="fb-pricing-table-price-prefix"
								/>
								<RichText
									tagName={'span'}
									value={pricingTablePriceAmount}
									onChange={(value) => setAttributes({pricingTablePriceAmount: value})}
									className="fb-pricing-table-price-amount"
								/>
							</div>
							<RichText
								tagName={'span'}
								value={pricingTablePricePeriod}
								onChange={(value) => setAttributes({pricingTablePricePeriod: value})}
								className="fb-pricing-table-price-period"
							/>
						</div>

						<div className={`fb-feature-list-wrapper fb-feature-list-${FeatureAlignment} fb-icon-position-${FeatureIconAlignment} `}>
							<ul className="fb-feature-list-items">
								{FeatureItems.map(item => (

									<li key={item.id} className="fb-feature-list-item">

										{ item.FeatureIconAlign !== 'none' && (
											<div className="fb-feature-list-icon-box">
												<div className={`fb-feature-list-icon-inner ${FeatureIconShape}`}>
                                                <span className="fb-feature-list-icon">
                                                    {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                </span>
												</div>
											</div>
										) }

										<div className="fb-feature-list-content">
											<RichText
												tagName={FeatureTag}
												className="fb-feature-list-title"
												value={item.Title}
												onChange={(value) => {
													const updatedItems = FeatureItems.map(i =>
														i.id === item.id ? { ...i, Title: value } : i
													);
													setAttributes({ FeatureItems: updatedItems });
												}}
												placeholder={__('Feature Title', 'frontis-blocks')}
											/>
											<RichText
												tagName="p"
												className="fb-feature-list-text"
												value={item.Description}
												onChange={(value) => {
													const updatedItems = FeatureItems.map(i =>
														i.id === item.id ? { ...i, Description: value } : i
													);
													setAttributes({ FeatureItems: updatedItems });
												}}
												placeholder={__('Feature Description', 'frontis-blocks')}
											/>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
