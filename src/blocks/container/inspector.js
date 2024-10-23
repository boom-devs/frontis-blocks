import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	TabPanel,
	ToggleControl,
	__experimentalRadioGroup as RadioGroup,
	__experimentalRadio as Radio,
	ButtonGroup,
	Button,
	TextControl,
} from "@wordpress/components";
import FB_RangeControl from "@Components/range-control";

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
	} = attributes;

	return (
		<InspectorControls>
			<TabPanel
				className="fb-container-inspector-tabs"
				tabs={[
					{ name: "general", title: __("General", "frontis-blocks") },
					{ name: "style", title: __("Style", "frontis-blocks") },
					{ name: "advanced", title: __("Advanced", "frontis-blocks") },
				]}
			>
				{(tab) => {
					if (tab.name === "general") {
						return (
							<>
								<PanelBody
									title={__("Container Type", "frontis-blocks")}
									initialOpen={true}
								>
									<div>
										<label className="components-base-control__label">
											{__("Container Width", "frontis-blocks")}
										</label>
										<ButtonGroup>
											<Button
												isPrimary={containerWidth === "full-width"}
												onClick={() =>
													setAttributes({ containerWidth: "full-width" })
												}
											>
												{__("Full Width", "frontis-blocks")}
											</Button>
											<Button
												isPrimary={containerWidth === "boxed"}
												onClick={() =>
													setAttributes({ containerWidth: "boxed" })
												}
											>
												{__("Boxed", "frontis-blocks")}
											</Button>
											<Button
												isPrimary={containerWidth === "custom"}
												onClick={() =>
													setAttributes({ containerWidth: "custom" })
												}
											>
												{__("Custom", "frontis-blocks")}
											</Button>
										</ButtonGroup>
									</div>
									{containerWidth === "custom" && (
										<FB_RangeControl
											label={__("Content Box Width", "frontis-blocks")}
											onChange={(value) =>
												setAttributes({ contentBoxWidth: value })
											}
											min={300}
											max={2000}
											DeviceType="Desktop"
											rangeUnit="px"
											rangeDesktopValue={contentBoxWidth}
											rangeMobileValue={contentBoxWidth}
											rangeTabletValue={contentBoxWidth}
											setAttributes={setAttributes}
										/>
									)}
									<FB_RangeControl
										label={__("Minimum Height", "frontis-blocks")}
										onChange={(value) =>
											setAttributes({ minimumHeight: value })
										}
										min={300}
										max={2000}
										DeviceType="Desktop"
										rangeUnit="px"
										rangeDesktopValue={contentBoxWidth}
										rangeMobileValue={contentBoxWidth}
										rangeTabletValue={contentBoxWidth}
										setAttributes={setAttributes}
									/>
									<ToggleControl
										label={__("Equal Height", "frontis-blocks")}
										checked={equalHeight}
										onChange={(value) => setAttributes({ equalHeight: value })}
									/>
                                    <div>
                                        <label className="components-base-control__label">
											{__("Overflow", "frontis-blocks")}
										</label>
                                        <ButtonGroup>
                                            <Button
                                                isPrimary={overflow === "visible"}
                                                onClick={() => setAttributes({ overflow: "visible" })}
                                            >
                                                {__("Visible", "frontis-blocks")}
                                            </Button>
                                            <Button
                                                isPrimary={overflow === "hidden"}
                                                onClick={() => setAttributes({ overflow: "hidden" })}
                                            >
                                                {__("Hidden", "frontis-blocks")}
                                            </Button>
                                            <Button
                                                isPrimary={overflow === "auto"}
                                                onClick={() => setAttributes({ overflow: "auto" })}
                                            >
                                                {__("Auto", "frontis-blocks")}
                                            </Button>
                                        </ButtonGroup>
                                    </div>
									<SelectControl
										label={__("HTML Tag", "frontis-blocks")}
										value={htmlTag}
										options={[
											{ label: "div", value: "div" },
											{ label: "section", value: "section" },
											{ label: "article", value: "article" },
										]}
										onChange={(value) => setAttributes({ htmlTag: value })}
									/>
								</PanelBody>
								<PanelBody
									title={__("Layout", "frontis-blocks")}
									initialOpen={false}
								>
									<RadioGroup
										label={__("Layout Type", "frontis-blocks")}
										onChange={(value) => setAttributes({ layoutType: value })}
										checked={layoutType}
									>
										<Radio value="flex">{__("Flex", "frontis-blocks")}</Radio>
										<Radio value="grid">{__("Grid", "frontis-blocks")}</Radio>
									</RadioGroup>

									{layoutType === "flex" && (
										<>
											<SelectControl
												label={__("Flex Direction", "frontis-blocks")}
												value={flexDirection}
												options={[
													{ label: __("Row", "frontis-blocks"), value: "row" },
													{
														label: __("Column", "frontis-blocks"),
														value: "column",
													},
													{
														label: __("Row Reverse", "frontis-blocks"),
														value: "row-reverse",
													},
													{
														label: __("Column Reverse", "frontis-blocks"),
														value: "column-reverse",
													},
												]}
												onChange={(value) =>
													setAttributes({ flexDirection: value })
												}
											/>
											<SelectControl
												label={__("Flex Wrap", "frontis-blocks")}
												value={flexWrap}
												options={[
													{
														label: __("No Wrap", "frontis-blocks"),
														value: "nowrap",
													},
													{
														label: __("Wrap", "frontis-blocks"),
														value: "wrap",
													},
													{
														label: __("Wrap Reverse", "frontis-blocks"),
														value: "wrap-reverse",
													},
												]}
												onChange={(value) => setAttributes({ flexWrap: value })}
											/>
											<SelectControl
												label={__("Justify Content", "frontis-blocks")}
												value={justifyContent}
												options={[
													{
														label: __("Flex Start", "frontis-blocks"),
														value: "flex-start",
													},
													{
														label: __("Flex End", "frontis-blocks"),
														value: "flex-end",
													},
													{
														label: __("Center", "frontis-blocks"),
														value: "center",
													},
													{
														label: __("Space Between", "frontis-blocks"),
														value: "space-between",
													},
													{
														label: __("Space Around", "frontis-blocks"),
														value: "space-around",
													},
													{
														label: __("Space Evenly", "frontis-blocks"),
														value: "space-evenly",
													},
												]}
												onChange={(value) =>
													setAttributes({ justifyContent: value })
												}
											/>
											<SelectControl
												label={__("Align Items", "frontis-blocks")}
												value={alignItems}
												options={[
													{
														label: __("Stretch", "frontis-blocks"),
														value: "stretch",
													},
													{
														label: __("Flex Start", "frontis-blocks"),
														value: "flex-start",
													},
													{
														label: __("Flex End", "frontis-blocks"),
														value: "flex-end",
													},
													{
														label: __("Center", "frontis-blocks"),
														value: "center",
													},
													{
														label: __("Baseline", "frontis-blocks"),
														value: "baseline",
													},
												]}
												onChange={(value) =>
													setAttributes({ alignItems: value })
												}
											/>
											<SelectControl
												label={__("Align Content", "frontis-blocks")}
												value={alignContent}
												options={[
													{
														label: __("Stretch", "frontis-blocks"),
														value: "stretch",
													},
													{
														label: __("Flex Start", "frontis-blocks"),
														value: "flex-start",
													},
													{
														label: __("Flex End", "frontis-blocks"),
														value: "flex-end",
													},
													{
														label: __("Center", "frontis-blocks"),
														value: "center",
													},
													{
														label: __("Space Between", "frontis-blocks"),
														value: "space-between",
													},
													{
														label: __("Space Around", "frontis-blocks"),
														value: "space-around",
													},
												]}
												onChange={(value) =>
													setAttributes({ alignContent: value })
												}
											/>
										</>
									)}

									{layoutType === "grid" && (
										<>
											<TextControl
												label={__("Grid Template Columns", "frontis-blocks")}
												value={gridTemplateColumns}
												onChange={(value) =>
													setAttributes({ gridTemplateColumns: value })
												}
												help={__(
													'E.g., "repeat(3, 1fr)" or "200px 1fr 200px"',
													"frontis-blocks",
												)}
											/>
											<TextControl
												label={__("Grid Template Rows", "frontis-blocks")}
												value={gridTemplateRows}
												onChange={(value) =>
													setAttributes({ gridTemplateRows: value })
												}
												help={__(
													'E.g., "auto" or "100px 1fr 100px"',
													"frontis-blocks",
												)}
											/>
											<TextControl
												label={__("Grid Gap", "frontis-blocks")}
												value={gridGap}
												onChange={(value) => setAttributes({ gridGap: value })}
												help={__(
													'E.g., "10px" or "10px 20px"',
													"frontis-blocks",
												)}
											/>
										</>
									)}
								</PanelBody>
							</>
						);
					}
					if (tab.name === "style") {
						return <PanelBody>{/* Add style settings here */}</PanelBody>;
					}
					if (tab.name === "advanced") {
						return <PanelBody>{/* Add advanced settings here */}</PanelBody>;
					}
				}}
			</TabPanel>
		</InspectorControls>
	);
};

export default Inspector;
