import {__} from "@wordpress/i18n";
import FB_Range from "@Components/range";
import {InspectorControls} from "@wordpress/block-editor";
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
	RangeControl,
	SelectControl,
	TabPanel
} from "@wordpress/components";

import FB_AlignmentControl from '@Components/alignment-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_Color from "@Components/color";
import FB_BackgroundColorControl from "@Components/background-color-control";
import {useDeviceType, setDeviceType} from "@Config/displayType";

const Inspector = (props) => {
	let deviceType= useDeviceType();

	const {
		isSelected,
		attributes,
		attributes: {
			containerType,
			containerTypeFull,
			fullWidthContentBoxedWidth,
			fullWidthContentBoxedWidthUnits,
			isBlockRootParent,
			customWidth,
			resetFallBackCustomWidth,
			customWidthUnits,
		},
		clientId,
		setAttributes
	} = props;

	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/flex-start';
	}

	const CONTAINER_TYPE = [
		{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
		{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
		{ label: __('Custom', 'frontis-blocks'), value: "custom" },
	];

	const CONTAINER_TYPE_FULL = [
		{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
		{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
	];

	const DIRECTION = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53729L15.3485 5.28601" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53723L15.3485 9.78851" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4173L15.3485 14.1774" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4172L15.3485 18.6685" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "left" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.391 6.72949L16.391 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3909 17.1923L18.606 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.391 17.1923L14.176 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 6.72949L7.65393 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65381 17.1923L9.85767 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 17.1923L5.43889 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2705 16.391L6.80771 16.391" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.3909L8.70593 18.606" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.391L8.70593 14.176" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2705 7.65393L6.80771 7.65393" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65381L8.70593 9.85767" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65393L8.70593 5.43889" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "right" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60901 17.2705L7.60901 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60908 6.80767L5.39404 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60901 6.80767L9.82405 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 17.2705L16.3461 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3462 6.80767L14.1423 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 6.80767L18.5611 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "up" }
	];
	const JUSTIFY_CONTENT = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.142 16.6062V7.48108" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.15051 16.6062V7.48108" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.46875 7.44006V16.5707" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.4974 7.44006V16.5707" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.858 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.8495 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.1615 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.8386 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-between" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.21777 7.32874V16.4538" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.8041 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-around" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.73425 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.2767 7.39404V16.5191" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21V3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-evenly" }
	];
	const WRAP = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.07 11.8368L6.77002 15.2757L10.07 18.7255" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "left" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.51 12.0109H6.18005" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "right" },
	];

	// Handle full width content boxed width
	const fullWidthContentBoxedWidthFn = (width) => {
		setAttributes({fullWidthContentBoxedWidth: width});
	}

	const fullWidthContentBoxedWidthUnitsFn = (units) => {
		setAttributes({fullWidthContentBoxedWidthUnits: units});
	}

	// Handle custom width each row
	const customContentWidthFn = (width) => {
		setAttributes({customWidth: width});
	}

	const customContentWidthFnUnitsFn = (units) => {
		setAttributes({customWidthUnits: units});
	}

	// Handling responsive
	const handleResponsive = (attr) => {
		setDeviceType(attr.deviceType, false);
	}

	return (
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
							name: "styles",
							title: "Style",
							className: "fb-tab styles",
						},
						{
							name: "advanced",
							title: "Advanced",
							className: "fb-tab advanced",
						},
					]}
				>
					{(tab) => (
						<div className={"fb-tab-controls" + tab.name}>
							{tab.name === 'general' && (
								<>
									<div className="fb-advanced-button-wrapper">
										<PanelBody
											title={__("Container Type", "frontis-blocks")}
											initialOpen={true}
										>
											{isBlockRootParent &&
												<BaseControl
													label={__("Container Width", "frontis-blocks")}
													id="fb-setting-text-alignment"
													className="fb-setting-text-alignment"
												>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{CONTAINER_TYPE.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ containerType: item.value })}
																className={`fb-setting-text-alignment-single-btn ${containerType === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
											}

											{ (containerType === 'full-width' && isBlockRootParent) && (
												<>
													<BaseControl
														label={__("Content Width", "frontis-blocks")}
														id="fb-setting-text-alignment"
														className="fb-setting-text-alignment"
													>
														<ButtonGroup
															className="fb-setting-text-alignment-group-btn"
														>
															{CONTAINER_TYPE_FULL.map((item, key) => (
																<Button
																	key={key}
																	onClick={() => setAttributes({ containerTypeFull: item.value })}
																	className={`fb-setting-text-alignment-single-btn ${containerTypeFull === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
														<div style={{marginTop: '10px'}}></div>
														<FB_Range
															min={1}
															max={fullWidthContentBoxedWidthUnits[deviceType] !== 'px' ? 100 : 2000}
															label={__("Content Box Width", "frontis-blocks")}
															rangeValue={fullWidthContentBoxedWidth}
															onChangeHandler={fullWidthContentBoxedWidthFn}
															rangeUnitHandler={fullWidthContentBoxedWidthUnitsFn}
															deviceType={deviceType}
															units={fullWidthContentBoxedWidthUnits}
															setAttributes={handleResponsive}
															rangeStep={1}
															resetFallbackValue={resetFallBackCustomWidth[deviceType]}
															units_types_arr={[
																{ label: 'px', value: 'px' },
																{ label: '%', value: '%' },
																{ label: 'vw', value: 'vw' },
															]}
														/>
													</BaseControl>
												</>
											)}

											{!isBlockRootParent &&
												<>
													<FB_Range
														min={1}
														max={customWidthUnits[deviceType] !== 'px' ? 100 : 2000}
														label={__("Custom Width", "frontis-blocks")}
														rangeValue={customWidth}
														onChangeHandler={customContentWidthFn}
														rangeUnitHandler={customContentWidthFnUnitsFn}
														deviceType={deviceType}
														units={customWidthUnits}
														setAttributes={handleResponsive}
														rangeStep={1}
														resetFallbackValue={parseInt(resetFallBackCustomWidth[deviceType])}
														units_types_arr={[
															{ label: 'px', value: 'px' },
															{ label: '%', value: '%' },
															{ label: 'vw', value: 'vw' },
														]}
													/>
												</>
											}

											<FB_Range
												min={1}
												max={2000}
												label={__("Minimum Height", "frontis-blocks")}
												rangeValue={fullWidthContentBoxedWidth}
												onChangeHandler={fullWidthContentBoxedWidthFn}
												rangeUnitHandler={fullWidthContentBoxedWidthUnitsFn}
												deviceType={deviceType}
												units={fullWidthContentBoxedWidthUnits}
												setAttributes={handleResponsive}
												rangeStep={1}
												resetFallbackValue={1200}
												units_types_arr={[
													{ label: 'px', value: 'px' },
													{ label: '%', value: '%' },
													{ label: 'vw', value: 'vw' },
												]}
											/>
										</PanelBody>
									</div>
									{isBlockRootParent &&
										<div className="fb-flex-properties-wrapper">
											<PanelBody
												title={__("Flex Properties", "frontis-blocks")}
												initialOpen={true}
											>
												<BaseControl
													label={__("Direction", "frontis-block")}
													id="fb-setting-alignment"
													className="fb-advanced-alignment"
												>
													<ButtonGroup className="fb-advanced-alignment-group-btn">
														{DIRECTION.map((item, key) => (
															<Button
																key={key}
																onClick={() =>
																	setAttributes({})
																}
																className={`fb-advanced-alignment-single-btn ${
																	""
																}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
												<FB_AlignmentControl
													label={__("Align Items", "frontis-blocks")}
													globalAlignment={""}
													setGlobalAlignment={(value) => setAttributes({})}
												/>
												<BaseControl
													label={__("Justify Content", "frontis-block")}
													id="fb-setting-alignment"
													className="fb-advanced-alignment"
												>
													<ButtonGroup className="fb-advanced-alignment-group-btn">
														{JUSTIFY_CONTENT.map((item, key) => (
															<Button
																key={key}
																onClick={() =>
																	setAttributes({})
																}
																className={`fb-advanced-alignment-single-btn ${
																	""
																}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
												<BaseControl
													label={__("Wrap", "frontis-block")}
													id="fb-setting-alignment"
													className="fb-advanced-alignment"
												>
													<ButtonGroup className="fb-advanced-alignment-group-btn">
														{WRAP.map((item, key) => (
															<Button
																key={key}
																onClick={() =>
																	setAttributes({})
																}
																className={`fb-advanced-alignment-single-btn ${
																	""
																}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
											</PanelBody>
										</div>
									}
								</>
							)}

							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Container Gap", "frontis-blocks")}
										initialOpen={true}
									>
										<FB_Range
											min={1}
											max={2000}
											label={__("Gap", "frontis-blocks")}
											rangeValue={fullWidthContentBoxedWidth}
											onChangeHandler={fullWidthContentBoxedWidthFn}
											rangeUnitHandler={fullWidthContentBoxedWidthUnitsFn}
											deviceType={deviceType}
											units={fullWidthContentBoxedWidthUnits}
											setAttributes={handleResponsive}
											rangeStep={1}
											resetFallbackValue={1200}
											units_types_arr={[
												{label: 'px', value: 'px'},
												{label: '%', value: '%'},
												{label: 'vw', value: 'vw'},
											]}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "advanced" && (
								<>
									<div className="fb-setting-advanced-tab-wrapper">
										<div className="fb-setting-inner-wrapper">
											<PanelBody
												title={__("Z Index", "frontis-blocks")}
												initialOpen={true}
												className="fb-setting-z-index-header"
											>
												<RangeControl
													value={''}
													onChange={(value) =>
														setAttributes({})
													}
													min={1}
													max={10000}
													step={1}
													allowReset
													resetFallbackValue={100}
												/>
											</PanelBody>
											<PanelBody
												title={__("Padding and Margin", "frontis-blocks")}
												initialOpen={false}
											>
												<FB_Spacing
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={
														''
													}
													spacingUnits={''}
													spacingDesktop={''}
													spacingTablet={''}
													spacingMobile={''}
													handleSpacingUnitHandler={
														''
													}
													spacingCombineBtn={''}
													spacingCombineBtnHandler={
														''
													}
													setAttributes={setAttributes}
												/>
												<FB_Spacing
													label={__("Margin", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={''}
													spacingUnits={''}
													spacingDesktop={''}
													spacingTablet={''}
													spacingMobile={''}
													handleSpacingUnitHandler={
														''
													}
													spacingCombineBtn={''}
													spacingCombineBtnHandler={
														''
													}
													setAttributes={handleResponsive}
												/>
											</PanelBody>

											<PanelBody title="Background" initialOpen={false}>
												<FB_BackgroundColorControl
													bgColorSwitcher={''}
													setBgColorSwitcher={(value) =>
														setAttributes({  })
													}
													normalBackgroundType={''}
													setNormalBackgroundType={(value) =>
														setAttributes({  })
													}
													normalClassicColor={''}
													setNormalClassicColor={(value) =>
														setAttributes({  })
													}
													normalGradientColor={''}
													setNormalGradientColor={(value) =>
														setAttributes({  })
													}
													normalCustomGradientSwitcher={
														''
													}
													setNormalCustomGradientSwitcher={(value) =>
														setAttributes({

														})
													}
													normalCustomGradientInputValue={
														''
													}
													setNormalCustomGradientInputValue={(value) =>
														setAttributes({

														})
													}
													normalBackgroundImageUrl={''}
													setNormalBackgroundImageUrl={(value) =>
														setAttributes({  })
													}
													normalBackgroundImageAlt={''}
													setNormalBackgroundImageAlt={(value) =>
														setAttributes({  })
													}
													normalBackgroundImageID={''}
													setNormalBackgroundImageID={(value) =>
														setAttributes({  })
													}
													normalBackgroundImagePosition={
														''
													}
													setNormalBackgroundImagePosition={(value) =>
														setAttributes({

														})
													}
													normalBackgroundImageAttachment={
														''
													}
													setNormalBackgroundImageAttachment={(value) =>
														setAttributes({

														})
													}
													normalBackgroundImageRepeat={
														''
													}
													setNormalBackgroundImageRepeat={(value) =>
														setAttributes({

														})
													}
													normalBackgroundImageSize={''}
													setNormalBackgroundImageSize={(value) =>
														setAttributes({  })
													}
													hoverBackgroundType={''}
													setHoverBackgroundType={(value) =>
														setAttributes({  })
													}
													hoverClassicColor={''}
													setHoverClassicColor={(value) =>
														setAttributes({  })
													}
													hoverGradientColor={''}
													setHoverGradientColor={(value) =>
														setAttributes({  })
													}
													hoverCustomGradientSwitcher={
														''
													}
													setHoverCustomGradientSwitcher={(value) =>
														setAttributes({

														})
													}
													hoverCustomGradientInputValue={
														''
													}
													setHoverCustomGradientInputValue={(value) =>
														setAttributes({

														})
													}
													hoverBackgroundImageUrl={''}
													setHoverBackgroundImageUrl={(value) =>
														setAttributes({  })
													}
													hoverBackgroundImageAlt={''}
													setHoverBackgroundImageAlt={(value) =>
														setAttributes({  })
													}
													hoverBackgroundImageID={''}
													setHoverBackgroundImageID={(value) =>
														setAttributes({  })
													}
													hoverBackgroundImagePosition={
														''
													}
													setHoverBackgroundImagePosition={(value) =>
														setAttributes({

														})
													}
													hoverBackgroundImageAttachment={
														''
													}
													setHoverBackgroundImageAttachment={(value) =>
														setAttributes({

														})
													}
													hoverBackgroundImageRepeat={
														''
													}
													setHoverBackgroundImageRepeat={(value) =>
														setAttributes({

														})
													}
													hoverBackgroundImageSize={''}
													setHoverBackgroundImageSize={(value) =>
														setAttributes({  })
													}
												/>
											</PanelBody>
											<PanelBody
												title={__("Border and Shadow", "frontis-blocks")}
												initialOpen={false}
											>
												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={''}
													options={''}
													onChange={(value) =>
														setAttributes({ })
													}
												/>

												<FB_Color
													label={__("Border Color", "frontis-blocks")}
													globalColorSwitcher={''}
													globalColor={''}
													globalHoverColor={''}
													handleColorSwitcherChange={
														''
													}
													handleGlobalColorChange={
														''
													}
													handleGlobalHoverColorChange={
														''
													}
												/>

												<FB_Spacing
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={''}
													spacingUnits={''}
													spacingDesktop={''}
													spacingTablet={''}
													spacingMobile={''}
													handleSpacingUnitHandler={
														''
													}
													spacingCombineBtn={''}
													spacingCombineBtnHandler={
														''
													}
													setAttributes={handleResponsive}
												/>

												<FB_Spacing
													label={__("Border Radius", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={
														''
													}
													spacingUnits={''}
													spacingDesktop={''}
													spacingTablet={''}
													spacingMobile={''}
													handleSpacingUnitHandler={
														''
													}
													spacingCombineBtn={''}
													spacingCombineBtnHandler={
														''
													}
													setAttributes={handleResponsive}
												/>
												<FB_BoxShadowControl
													onBoxShadowChange={(value) =>
														setAttributes({  })
													}
													initialShadowValue={''}
													onBoxShadowStyleChange={(value) =>
														setAttributes({

														})
													}
												/>
											</PanelBody>
										</div>
									</div>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
