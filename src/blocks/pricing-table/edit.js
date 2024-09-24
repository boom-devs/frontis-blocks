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

import PricingTableHeaderNameControl from './style-control/name/pricing-table-header-name-control.js';
import PricingTableHeaderNameMarginControl from './style-control/name/pricing-table-header-name-margin-control.js';
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

		// button
		pricingTableButtonText,
		pricingTableButtonSwitcher,
		pricingTableButtonLink,
		buttonAlignment,
		pricingTableButtonPaddingUnits,
		pricingTableButtonDesktopPadding,
		pricingTableButtonTabPadding,
		pricingTableButtonMobilePadding,
		pricingTableButtonMarginUnits,
		pricingTableButtonDesktopMargin,
		pricingTableButtonTabMargin,
		pricingTableButtonMobileMargin,
		pricingTableButtonActiveMarginDevice,
		pricingTableButtonMarginLink,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,
		buttonColorSwitcher,
		buttonTextColor,
		buttonTextHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,

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
		const newItem = {
			id: `item-${FeatureItems.length + 1}`,
			Title: `Feature Item ${FeatureItems.length + 1}`,
			FeatureIcon: 'check'
		};
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


	{/** Pricing Table Features */}

	/** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
	const DesktopBorderRadiusWidth = `${FeatureDesktopBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	const TabBorderRadiusWidth = `${FeatureTabBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	const MobileBorderRadiusWidth = `${FeatureMobileBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
	/** End Border Radius Width */

	/** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
	const DesktopBorderWidth    = `${FeatureDesktopBorderWidth.top}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.right}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.bottom}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.left}${FeatureBorderUnits}`;
	const TabBorderWidth        = `${FeatureTabBorderWidth.top}${FeatureBorderUnits} ${FeatureTabBorderWidth.right}${FeatureBorderUnits} ${FeatureTabBorderWidth.bottom}${FeatureBorderUnits} ${FeatureTabBorderWidth.left}${FeatureBorderUnits}`;
	const MobileBorderWidth     = `${FeatureMobileBorderWidth.top}${FeatureBorderUnits} ${FeatureMobileBorderWidth.right}${FeatureBorderUnits} ${FeatureMobileBorderWidth.bottom}${FeatureBorderUnits} ${FeatureMobileBorderWidth.left}${FeatureBorderUnits}`;
	/** End Border Width */

	/** Default margin for desktop (using desktop_margin) */
	const DesktopMargin     = `${FeatureDesktopMargin.top}${FeatureMarginUnits} ${FeatureDesktopMargin.right}${FeatureMarginUnits} ${FeatureDesktopMargin.bottom}${FeatureMarginUnits} ${FeatureDesktopMargin.left}${FeatureMarginUnits}`;
	const TabMargin         = `${FeatureTabMargin.top}${FeatureMarginUnits} ${FeatureTabMargin.right}${FeatureMarginUnits} ${FeatureTabMargin.bottom}${FeatureMarginUnits} ${FeatureTabMargin.left}${FeatureMarginUnits}`;
	const MobileMargin      = `${FeatureMobileMargin.top}${FeatureMarginUnits} ${FeatureMobileMargin.right}${FeatureMarginUnits} ${FeatureMobileMargin.bottom}${FeatureMarginUnits} ${FeatureMobileMargin.left}${FeatureMarginUnits}`;
	/** End Margin */

	/** Default padding for desktop (using desktop_padding) */
	const DesktopPadding    = `${FeatureDesktopPadding.top}${FeaturePaddingUnits} ${FeatureDesktopPadding.right}${FeaturePaddingUnits} ${FeatureDesktopPadding.bottom}${FeaturePaddingUnits} ${FeatureDesktopPadding.left}${FeaturePaddingUnits}`;
	const TabPadding        = `${FeatureTabPadding.top}${FeaturePaddingUnits} ${FeatureTabPadding.right}${FeaturePaddingUnits} ${FeatureTabPadding.bottom}${FeaturePaddingUnits} ${FeatureTabPadding.left}${FeaturePaddingUnits}`;
	const MobilePadding     = `${FeatureMobilePadding.top}${FeaturePaddingUnits} ${FeatureMobilePadding.right}${FeaturePaddingUnits} ${FeatureMobilePadding.bottom}${FeaturePaddingUnits} ${FeatureMobilePadding.left}${FeaturePaddingUnits}`;
	/** End Padding */



	return (
		<>
			<style>
				{`
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                    z-index: ${FeatureZIndex !== undefined ? FeatureZIndex : ''};
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                    ${FeatureBgColor !== undefined ? `background-color: ${FeatureBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${FeatureBorder};
                    border-width: ${DesktopBorderWidth};
                    border-radius: ${DesktopBorderRadiusWidth} !important;
                    ${FeatureBorderColor !== undefined ? `border-color: ${FeatureBorderColor};` : ''};
                    transition: all .3s ease-in-out;
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
                    padding-bottom: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
                    padding-top: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon svg {
                    fill: ${FeatureIconColor};
                    height: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                    width: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                }

                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-box {
                    margin-right: ${FeatureIconSpacingDesktop}${FeatureIconSpacingUnits}!important;
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-inner {
                    background-color: ${FeatureIconBgColor};
                    border-color: ${FeatureIconBgColor};
                }


                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon {
                    width: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                    height: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                }

                 .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content ${FeatureTag} {
                    font-family: ${FeatureTitleFontFamily};
                    font-size: ${FeatureTitleFontSizeDesktop}${FeatureTitleFontSizeUnits};
                    font-weight: ${FeatureTitleFontWeight};
                    font-style: ${FeatureTitleFontStyle};
                    text-transform: ${FeatureTitleTextTransform};
                    text-decoration: ${FeatureTitleTextDecoration};
                    letter-spacing: ${FeatureTitleLetterSpacingDesktop}${FeatureTitleLetterSpacingUnits};
                    line-height: ${FeatureTitleLineHeightDesktop}${FeatureTitleLineHeightUnits};
                    color: ${FeatureTitleColor};
                }
                .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
                    font-family: ${FeatureDescFontFamily};
                    font-size: ${FeatureDescFontSizeDesktop}${FeatureDescFontSizeUnits};
                    font-weight: ${FeatureDescFontWeight};
                    font-style: ${FeatureDescFontStyle};
                    text-transform: ${FeatureDescTextTransform};
                    text-decoration: ${FeatureDescTextDecoration};
                    letter-spacing: ${FeatureDescLetterSpacingDesktop}${FeatureDescLetterSpacingUnits};
                    line-height: ${FeatureDescLineHeightDesktop}${FeatureDescLineHeightUnits};
                    color: ${FeatureDescColor};
                }


                @media only screen and (max-width: 1024px) {

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                        padding: ${TabPadding};
                        margin: ${TabMargin};
                        border-width: ${TabBorderWidth};
                        border-radius: ${TabBorderRadiusWidth} !important;
                    }

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingTablet}${FeatureIconSpacingUnits}!important;
                    }

                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeTablet}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingTablet}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightTablet}${FeatureTitleLineHeightUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeTablet}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingTablet}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightTablet}${FeatureDescLineHeightUnits};
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${MobileBorderWidth};
                        border-radius: ${MobileBorderRadiusWidth} !important;
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingMobile}${FeatureIconSpacingUnits}!important;
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeMobile}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingMobile}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightMobile}${FeatureTitleLineHeightUnits};
                    }
                    .fb-pricing-table-wrapper.${blockID} .fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeMobile}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingMobile}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightMobile}${FeatureDescLineHeightUnits};
                    }
                }

            `}
			</style>

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

										<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
											{/*Button Element*/}
											<ToggleControl
												label={__("Show Button", "frontis-block")}
												checked={pricingTableButtonSwitcher}
												onChange={(value) => setAttributes({pricingTableButtonSwitcher: value})}
											/>

											{pricingTableButtonSwitcher && (
												<>
													<BaseControl
														label={__("Alignment", "frontis-block")}
														id="fb-media-alignment"
														className="fb-advanced-alignment"
													>
														<ButtonGroup
															className="fb-advanced-alignment-group-btn"
														>
															{TEXT_ALIGN.map((item, key) => (
																<Button
																	key={key}
																	onClick={() => setAttributes({buttonAlignment: item.value})}
																	className={`fb-advanced-alignment-single-btn ${buttonAlignment === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
													<TextareaControl
														label={__("Button Text", "frontis-block")}
														value={pricingTableButtonText}
														onChange={(value) => setAttributes({pricingTableButtonText: value})}
														className="fb-info-button-text"
													/>
													<URLInput
														value={pricingTableButtonLink}
														onChange={(value, post) => {
															// Check if the URL has a protocol (http or https), otherwise prepend it
															const formattedLink = value.startsWith('http://') || value.startsWith('https://')
																? value
																: `https://${value}`;

															setAttributes({
																pricingTableButtonLink: formattedLink,
																pricingTableButtonText: (post && post.title) || pricingTableButtonText
															});
														}}
													/>
												</>
											)}
										</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Header", "frontis-blocks")}
											initialOpen={true}
										>

											<PricingTableHeaderNameControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											<PricingTableHeaderNameMarginControl
												attributes={attributes}
												setAttributes={setAttributes}
												clientId ={clientId}
											/>
											{/*<TeamMemberContentPaddingControl*/}
											{/*	attributes={attributes}*/}
											{/*	setAttributes={setAttributes}*/}
											{/*	clientId ={clientId}*/}
											{/*/>*/}

										</PanelBody>

										<PricingTableFeaturesControl
											attributes={attributes}
											setAttributes={setAttributes}
											clientId ={clientId}
										/>


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
						<div className={`fb-feature-main-wrapper`}>
							<div className="fb-feature-wrapper">
								<div className={`fb-feature-list-wrapper fb-feature-list-${FeatureAlignment} fb-icon-position-${FeatureIconAlignment} `}>
									<div className="fb-feature-list-items">
										{FeatureItems.map(item => (

											<div key={item.id} className="fb-feature-list-item">

												{ item.FeatureIconAlign !== 'none' && (
													<div className="fb-feature-list-icon-box">
													  	<span className="fb-feature-list-icon">
															{item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
														</span>
													</div>
												) }

												<div className="fb-feature-list-content">
													<RichText
														tagName={'span'}
														className="fb-feature-list-title"
														value={item.Title}
														onChange={(value) => {
															const updatedItems = FeatureItems.map(i =>
																i.id === item.id ? { ...i, Title: value } :
																	i
															);
															setAttributes({ FeatureItems: updatedItems });
														}}
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						{pricingTableButtonSwitcher && (
							<div className="fb-pricing-table-btn-wrapper" style={{textAlign: buttonAlignment}}>
								<a
									href={pricingTableButtonLink}
									className="fb-pricing-table-btn"
									target="_blank"
									rel="noopener noreferrer"
								>
									{pricingTableButtonText}
								</a>
							</div>

						)}
					</div>
				</div>
			</div>
		</>
	);
}
