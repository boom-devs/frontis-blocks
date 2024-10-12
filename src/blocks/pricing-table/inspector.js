import { __ } from '@wordpress/i18n';
import { InspectorControls, URLInput } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    TextareaControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    PROGRESS_TEXT_OPTIONS,
	HEADING,
    TEXT_ALIGN,
	ICON_ALIGN,
	CURRENCY_POSITION,
	ICON_POSITION,
	RIBBON_POSITION,
} from "./constants/constants";

import FBIconPicker from "../../components/icon-picker";

import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import SortableItem from './sortableItem.js';
import FB_UrlControl from '@Components/url-control';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
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


	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = priceFeatureItems.findIndex(item => item.id === active.id);
			const newIndex = priceFeatureItems.findIndex(item => item.id === over.id);
			const updatedItems = arrayMove(priceFeatureItems, oldIndex, newIndex);
			setAttributes({ priceFeatureItems: updatedItems });
		}
	};

	const handleAddItem = () => {
		const newItem = {
			id: `item-${priceFeatureItems.length + 1}`,
			Title: `Feature Item ${priceFeatureItems.length + 1}`,
			FeatureIcon: 'check'
		};
		setAttributes({ priceFeatureItems: [...priceFeatureItems, newItem] });
	};

	const handleChangeItem = (id, key, value) => {
		const updatedItems = priceFeatureItems.map(item =>
			item.id === id ? { ...item, [key]: value } : item
		);
		setAttributes({ priceFeatureItems: updatedItems });
	};

	const handleDeleteItem = (id) => {
		const updatedItems = priceFeatureItems.filter(item => item.id !== id);
		setAttributes({ priceFeatureItems: updatedItems });
	};

	const priceIconHandler = (IconName) => {
		setAttributes({priceButtonIcon: IconName})
	}
	const priceButtonIconHandler = (IconName) => {
		setAttributes({priceButtonIcon: IconName})
	}


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
										{/** Start Header */}
										<PanelBody title={__("Header", "frontis-blocks")} initialOpen={true}>
											<TextControl
												label={__("Title", "frontis-blocks")}
												value={pricingTitle}
												onChange={(value) => setAttributes({ pricingTitle: value })}
												placeholder={__('Startup', 'frontis-block')}
											/>
											<ToggleControl
												label={__("Show Sub Title", "frontis-blocks")}
												checked={pricingSubTitleSwitcher}
												onChange={(value) => setAttributes({pricingSubTitleSwitcher: value})}
											/>
											{pricingSubTitleSwitcher && (
												<TextareaControl
													label={__("Sub Title", "frontis-blocks")}
													value={pricingSubTitle}
													onChange={(value) => setAttributes({ pricingSubTitle: value })}
													placeholder={__('sub title', 'frontis-block')}
												/>
											)}
											<BaseControl
												label={__("Icon", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{ICON_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ pricingIconAlign: item.value })}
																className={`fb-setting-text-alignment-single-btn ${pricingIconAlign === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
													{pricingIconAlign === 'icon' && (
														<FBIconPicker value={pricingIcon} setIconHandler={priceIconHandler} /> 
													)}
											</BaseControl>
										</PanelBody>
										{/** End Header */}

										{/** Start Price */}
										<PanelBody title={__("Price", "frontis-blocks")} initialOpen={false}>
											<TextControl
												label={__("Price", "frontis-blocks")}
												value={normalPrice}
												onChange={(value) => setAttributes({ normalPrice: value })}
											/>
											<ToggleControl
												label={__("On Sale", "frontis-blocks")}
												checked={salePriceSwitcher}
												onChange={(value) => setAttributes({salePriceSwitcher: value})}
											/>
											{salePriceSwitcher && (
												<TextControl
													label={__("Sale Price", "frontis-blocks")}
													value={salePrice}
													onChange={(value) => setAttributes({ salePrice: value })}
												/>
											)}
											<TextControl
												label={__("Currency", "frontis-blocks")}
												value={priceCurrency}
												onChange={(value) => setAttributes({ priceCurrency: value })}
											/>
											<SelectControl 
												label={__("Currency Position", "frontis-blocks")}
												value={priceCurrencyPosition}
												onChange={(value) => setAttributes({ priceCurrencyPosition: value })}
												options={CURRENCY_POSITION}
											/>
											<TextControl
												label={__("Separator", "frontis-blocks")}
												value={pricePeriodSeparator}
												onChange={(value) => setAttributes({ pricePeriodSeparator: value })}
											/>
											<TextControl
												label={__("Period", "frontis-blocks")}
												value={pricePeriod}
												onChange={(value) => setAttributes({ pricePeriod: value })}
											/>			
										</PanelBody>
										{/** End Price */}

										{/** Start Feature */}
										<PanelBody title={__("Features", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Hide Features", "frontis-blocks")}
												checked={priceHideFeaturesSwitcher}
												onChange={(value) => setAttributes({priceHideFeaturesSwitcher: value})}
											/>
											<ToggleControl
												label={__("Show Line", "frontis-blocks")}
												checked={priceFeatureShowLineSwitcher}
												onChange={(value) => setAttributes({priceFeatureShowLineSwitcher: value})}
											/>
											<ToggleControl
												label={__("Show Icon", "frontis-blocks")}
												checked={priceFeatureIconSwitcher}
												onChange={(value) => setAttributes({priceFeatureIconSwitcher: value})}
											/>
											<div className="fb-feature-wrapper">
                                                <DndContext
                                                    collisionDetection={closestCenter}
                                                    onDragEnd={handleDragEnd}
                                                >
                                                    <SortableContext items={priceFeatureItems.map(item => item.id)}>
                                                        <ul className='dnd-items-wrapper'>
                                                            {priceFeatureItems.map((item) => (
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
										</PanelBody>
										{/** End Feature */}


										{/** Start Button */}
										<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Enable Button", "frontis-blocks")}
												checked={priceButtonSwitcher}
												onChange={(value) => setAttributes({ priceButtonSwitcher: value })}
											/>
											{priceButtonSwitcher && (
												<>
													<TextControl
														label={__("Button Text", "frontis-blocks")}
														value={priceButtonText}
														onChange={(value) => setAttributes({ priceButtonText: value })}
													/>
													<FB_UrlControl
														url={priceButtonUrl}
														onChangeUrl={(value) => setAttributes({ priceButtonUrl: value })}
														openInNewTab={priceButtonTargetUrl}
														onChangeOpenInNewTab={(value) => setAttributes({ priceButtonTargetUrl: value })}
													/>
													<BaseControl
														label={__("Icon", "frontis-blocks")}
														id="fb-setting-text-alignment"
														className="fb-setting-text-alignment"
													>
														<ButtonGroup
															className="fb-setting-text-alignment-group-btn"
														>
															{ICON_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({ priceButtonIconAlign: item.value })}
																		className={`fb-setting-text-alignment-single-btn ${priceButtonIconAlign === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
															{priceButtonIconAlign === 'icon' && (
																<>
																	<FBIconPicker value={priceButtonIcon} setIconHandler={priceButtonIconHandler} />
																	<SelectControl
																		label={__("Icon Position", "frontis-blocks")}
																		value={priceButtonIconPosition}
																		options={ICON_POSITION}
																		onChange={(value) => setAttributes({ priceButtonIconPosition: value })}
																	/>
																	<RangeControl
																		label={__("Icon Spacing", "frontis-blocks")}
																		value={priceButtonIconSpacing}
																		onChange={(value) => setAttributes({ priceButtonIconSpacing: value })}
																		min={0}
																		max={50}
																		step={1}
																	/>
																</>
															)}
													</BaseControl>
												</>
											)}
										</PanelBody>
										{/** End Button */}

										{/** Start Ribbon */}
										<PanelBody title={__("Ribbon", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Enable Ribbon", "frontis-blocks")}
												checked={priceRibbonSwitcher}
												onChange={(value) => setAttributes({priceRibbonSwitcher: value})}
											/>
											{priceRibbonSwitcher && (	
												<>
													<TextControl
														label={__("Ribbon Text", "frontis-blocks")}
														value={priceRibbonText}
														onChange={(value) => setAttributes({ priceRibbonText: value })}
													/>
													<SelectControl
														label={__("Ribbon Position", "frontis-blocks")}
														value={priceRibbonPosition}
														options={RIBBON_POSITION}
														onChange={(value) => setAttributes({ priceRibbonPosition: value })}
													/>	

												</>
											)}
										</PanelBody>
										{/** End Ribbon */}
										
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Header", "frontis-blocks")}
											initialOpen={true}
										>

										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
        </>
    );
}