import FB_Range from "@Components/range";
import { InspectorControls } from "@wordpress/block-editor";
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
	TabPanel
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		htmlTag,
		containerWidth,
		contentBoxWidth,
		minimumHeight,
		equalHeight,
		overflow,
		layoutType,
		flexDirection,
		flexWrap,
		justifyContent,
		alignItems,
		alignContent,
		gridTemplateColumns,
		gridTemplateRows,
		gridGap,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		deviceType,
		containerType,
		containerTypeFull,
		fullWidthContentBoxedWidth,
		fullWidthContentBoxedWidthUnits
	} = attributes;

	const CONTAINER_TYPE = [
		{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
		{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
		{ label: __('Custom', 'frontis-blocks'), value: "custom" },
	];

	const CONTAINER_TYPE_FULL = [
		{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
		{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
	];

	// Handle full width content boxed width
	const fullWidthContentBoxedWidthFn = (width) => {
		console.log(width)
	}

	const fullWidthContentBoxedWidthUnitsFn = (units) => {

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

											{ containerType === 'full-width' && (
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
															max={2000}
															label={__("Content Box Width", "frontis-blocks")}
															rangeValue={fullWidthContentBoxedWidth}
															onChangeHandler={fullWidthContentBoxedWidthFn}
															rangeUnitHandler={fullWidthContentBoxedWidthUnitsFn}
															deviceType={deviceType}
															units={fullWidthContentBoxedWidthUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={1200}
															units_types_arr={[
																{ label: 'px', value: 'px' },
																{ label: '%', value: '%' },
																{ label: 'vw', value: 'vw' },
															]}
														/>
													</BaseControl>
												</>
											)}

										</PanelBody>
									</div>
								</>
							)}

							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Text Styles", "frontis-blocks")}
										initialOpen={true}
									>
									</PanelBody>
								</>
							)}
							{tab.name === "advanced" && (
								<>
									<div className="fb-setting-advanced-tab-wrapper">
										<div className="fb-setting-inner-wrapper">

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
