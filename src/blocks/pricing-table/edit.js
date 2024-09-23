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
import {useEffect, useRef, useState} from '@wordpress/element';
import './editor.scss';
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES, SELECT_TYPE, iconType} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import ResponsiveControl from "../../components/responsivecontrol";
import {HEADING} from "../info-box/constants/constants";

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

	{/* Team Member Content Control */}



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
										</PanelBody>

										<PanelBody title={__("Footer", "frontis-blocks")} initialOpen={false}>
										</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Content", "frontis-blocks")}
											initialOpen={true}
										>
											{/*<TeamMemberContentBorderControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}
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
						<div className={`fb-pricing-table-feature`}>
							<div className={`fb-pricing-table-feature-item`}>
								<span className={`fb-pricing-table-feature-icon`}>

								</span>
								<span className={`fb-pricing-table-feature-title`}>Customization options</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
