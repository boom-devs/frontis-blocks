import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
	Button,
	TabPanel,
} from "@wordpress/components";
import { useEffect, useState, memo } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import FB_Range from "@Components/range";
import FB_ColorControl from "@Components/color-control";
import { imageAccordionPresets } from "./presets";
import "./editor.scss";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		imageAccordionPresetStyle,
		images,
		activeImageIndex,
		layoutType,
		mainImageWidth,
		thumbnailAreaWidth,
		thumbnailLayout,
		thumbnailSize,
		spacing,
		mainImageBorderRadius,
		thumbnailBorderRadius,
		activeThumbBorderWidth,
		activeThumbBorderColor,
		showTitle,
		showDescription,
		showIcon,
		mainImageBg,
		descriptionBg,
		descriptionBorder,
		descriptionBorderWidth,
		titleFontSize,
		titleFontColor,
		titleFontWeight,
		descriptionFontSize,
		descriptionFontColor,
	} = attributes;

	const deviceType = useDeviceType();

	// Handle preset change
	const handlePresetChange = (presetKey) => {
		const preset = imageAccordionPresets[presetKey];
		if (preset) {
			setAttributes({
				imageAccordionPresetStyle: presetKey,
				layoutType: preset.layoutType,
				mainImageWidth: preset.mainImageWidth,
				thumbnailAreaWidth: preset.thumbnailAreaWidth,
				thumbnailLayout: preset.thumbnailLayout,
				thumbnailSize: preset.thumbnailSize,
				mainImageBorderRadius: preset.mainImageBorderRadius,
				thumbnailBorderRadius: preset.thumbnailBorderRadius,
				activeThumbBorderWidth: preset.activeThumbBorderWidth,
				activeThumbBorderColor: preset.activeThumbBorderColor,
				spacing: preset.spacing,
				mainImageBg: preset.mainImageBg,
				descriptionBg: preset.descriptionBg,
				descriptionBorder: preset.descriptionBorder,
			});
		}
	};

	// Handle add image
	const handleAddImage = (media) => {
		const newImages = [...images];
		newImages.push({
			id: media.id,
			url: media.url,
			alt: media.alt || "",
			title: media.title || `Image ${newImages.length + 1}`,
			description: "",
		});
		setAttributes({ images: newImages });
	};

	// Handle remove image
	const handleRemoveImage = (index) => {
		const newImages = images.filter((_, i) => i !== index);
		setAttributes({ images: newImages });
		if (activeImageIndex >= newImages.length && newImages.length > 0) {
			setAttributes({ activeImageIndex: newImages.length - 1 });
		}
	};

	// Handle image update
	const handleImageUpdate = (index, key, value) => {
		const newImages = [...images];
		newImages[index] = { ...newImages[index], [key]: value };
		setAttributes({ images: newImages });
	};

	const tabs = [
		{
			name: "basic",
			title: __("Basic", "frontis-blocks"),
			className: "fb-inspector-tab-basic",
		},
		{
			name: "style",
			title: __("Style", "frontis-blocks"),
			className: "fb-inspector-tab-style",
		},
		{
			name: "extra",
			title: __("Extra", "frontis-blocks"),
			className: "fb-inspector-tab-extra",
		},
	];

	return (
		<InspectorControls>
			<TabPanel tabs={tabs} initialTabName="basic">
				{(tab) => (
					<>
						{tab.name === "basic" && (
							<>
								{/* Presets */}
								<PanelBody
									title={__("Presets", "frontis-blocks")}
									initialOpen={true}
								>
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "repeat(2, 1fr)",
											gap: "10px",
										}}
									>
										{Object.entries(imageAccordionPresets).map(
											([key, preset]) => (
												<Button
													key={key}
													variant={
														imageAccordionPresetStyle === key
															? "primary"
															: "secondary"
													}
													onClick={() => handlePresetChange(key)}
													style={{ padding: "8px", fontSize: "12px" }}
												>
													{preset.name}
												</Button>
											),
										)}
									</div>
								</PanelBody>

								{/* Images Management */}
								<PanelBody
									title={__("Images", "frontis-blocks")}
									initialOpen={true}
								>
									<div style={{ marginBottom: "15px" }}>
										<h4>{__("Image Items", "frontis-blocks")}</h4>
										<div
											style={{
												maxHeight: "400px",
												overflowY: "auto",
												border: "1px solid #ddd",
												borderRadius: "4px",
												padding: "10px",
											}}
										>
											{images.map((image, index) => (
												<div
													key={index}
													style={{
														padding: "10px",
														marginBottom: "10px",
														backgroundColor:
															activeImageIndex === index
																? "#e7f5ff"
																: "#f9f9f9",
														border: `2px ${
															activeImageIndex === index
																? "solid #007cba"
																: "dashed #ddd"
														}`,
														borderRadius: "4px",
														cursor: "pointer",
													}}
													onClick={() =>
														setAttributes({ activeImageIndex: index })
													}
												>
													<div
														style={{
															display: "flex",
															gap: "10px",
															alignItems: "center",
															marginBottom: "8px",
														}}
													>
														{image.url && (
															<img
																src={image.url}
																alt={image.alt}
																style={{
																	width: "50px",
																	height: "50px",
																	objectFit: "cover",
																	borderRadius: "4px",
																}}
															/>
														)}
														<div style={{ flex: 1 }}>
															<TextControl
																label={__("Title", "frontis-blocks")}
																value={image.title}
																onChange={(value) =>
																	handleImageUpdate(index, "title", value)
																}
																onClick={(e) => e.stopPropagation()}
															/>
														</div>
														<Button
															isDestructive
															isSmall
															onClick={() => handleRemoveImage(index)}
														>
															{__("Remove", "frontis-blocks")}
														</Button>
													</div>
													<TextControl
														label={__("Description", "frontis-blocks")}
														value={image.description || ""}
														onChange={(value) =>
															handleImageUpdate(index, "description", value)
														}
														onClick={(e) => e.stopPropagation()}
													/>
												</div>
											))}
										</div>
									</div>

									<MediaUploadCheck>
										<MediaUpload
											onSelect={handleAddImage}
											type="image"
											render={({ open }) => (
												<Button
													variant="primary"
													onClick={open}
													style={{ width: "100%", marginTop: "10px" }}
												>
													{__("+ Add Image", "frontis-blocks")}
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</PanelBody>

								{/* Layout Settings */}
								<PanelBody
									title={__("Layout", "frontis-blocks")}
									initialOpen={true}
								>
									<SelectControl
										label={__("Layout Type", "frontis-blocks")}
										value={layoutType}
										options={[
											{
												label: __(
													"Horizontal (Side by Side)",
													"frontis-blocks",
												),
												value: "horizontal",
											},
											{
												label: __("Vertical (Top & Bottom)", "frontis-blocks"),
												value: "vertical",
											},
											{ label: __("Grid", "frontis-blocks"), value: "grid" },
											{
												label: __("Compact", "frontis-blocks"),
												value: "compact",
											},
										]}
										onChange={(value) => setAttributes({ layoutType: value })}
									/>

									{(layoutType === "horizontal" ||
										layoutType === "vertical") && (
										<>
											<FB_Range
												label={__("Main Image Width (%)", "frontis-blocks")}
												value={parseInt(mainImageWidth)}
												onChange={(value) =>
													setAttributes({ mainImageWidth: value.toString() })
												}
												min={30}
												max={90}
											/>
											<FB_Range
												label={__("Thumbnail Area Width (%)", "frontis-blocks")}
												value={parseInt(thumbnailAreaWidth)}
												onChange={(value) =>
													setAttributes({
														thumbnailAreaWidth: value.toString(),
													})
												}
												min={10}
												max={70}
											/>
										</>
									)}

									<SelectControl
										label={__("Thumbnail Layout", "frontis-blocks")}
										value={thumbnailLayout}
										options={[
											{
												label: __("Vertical Stack", "frontis-blocks"),
												value: "vertical",
											},
											{
												label: __("Horizontal Row", "frontis-blocks"),
												value: "horizontal",
											},
											{ label: __("Grid", "frontis-blocks"), value: "grid" },
											{
												label: __("Horizontal Scroll", "frontis-blocks"),
												value: "horizontal-scroll",
											},
										]}
										onChange={(value) =>
											setAttributes({ thumbnailLayout: value })
										}
									/>

									<FB_Range
										label={__("Thumbnail Size (px)", "frontis-blocks")}
										value={parseInt(thumbnailSize)}
										onChange={(value) =>
											setAttributes({ thumbnailSize: value.toString() })
										}
										min={40}
										max={180}
									/>

									<FB_Range
										label={__("Spacing (px)", "frontis-blocks")}
										value={parseInt(spacing)}
										onChange={(value) =>
											setAttributes({ spacing: value.toString() })
										}
										min={0}
										max={50}
									/>
								</PanelBody>
							</>
						)}

						{tab.name === "style" && (
							<>
								{/* Styling */}
								<PanelBody
									title={__("Border & Radius", "frontis-blocks")}
									initialOpen={true}
								>
									<FB_Range
										label={__("Main Image Border Radius", "frontis-blocks")}
										value={parseInt(mainImageBorderRadius)}
										onChange={(value) =>
											setAttributes({ mainImageBorderRadius: value.toString() })
										}
										min={0}
										max={50}
									/>
									<FB_Range
										label={__("Thumbnail Border Radius", "frontis-blocks")}
										value={parseInt(thumbnailBorderRadius)}
										onChange={(value) =>
											setAttributes({ thumbnailBorderRadius: value.toString() })
										}
										min={0}
										max={30}
									/>
									<FB_Range
										label={__("Active Thumb Border Width", "frontis-blocks")}
										value={parseInt(activeThumbBorderWidth)}
										onChange={(value) =>
											setAttributes({
												activeThumbBorderWidth: value.toString(),
											})
										}
										min={0}
										max={10}
									/>
									<FB_ColorControl
										label={__(
											"Active Thumbnail Border Color",
											"frontis-blocks",
										)}
										value={activeThumbBorderColor}
										onChange={(value) =>
											setAttributes({ activeThumbBorderColor: value })
										}
									/>
								</PanelBody>

								{/* Colors */}
								<PanelBody
									title={__("Colors", "frontis-blocks")}
									initialOpen={true}
								>
									<FB_ColorControl
										label={__("Main Image Background", "frontis-blocks")}
										value={mainImageBg}
										onChange={(value) => setAttributes({ mainImageBg: value })}
									/>
									<FB_ColorControl
										label={__("Description Background", "frontis-blocks")}
										value={descriptionBg}
										onChange={(value) =>
											setAttributes({ descriptionBg: value })
										}
									/>
									<FB_ColorControl
										label={__("Description Border Color", "frontis-blocks")}
										value={descriptionBorder}
										onChange={(value) =>
											setAttributes({ descriptionBorder: value })
										}
									/>
									<FB_Range
										label={__("Description Border Width", "frontis-blocks")}
										value={parseInt(descriptionBorderWidth)}
										onChange={(value) =>
											setAttributes({
												descriptionBorderWidth: value.toString(),
											})
										}
										min={0}
										max={10}
									/>
								</PanelBody>

								{/* Typography */}
								<PanelBody
									title={__("Typography", "frontis-blocks")}
									initialOpen={true}
								>
									<h4>{__("Title", "frontis-blocks")}</h4>
									<FB_Range
										label={__("Font Size (Desktop)", "frontis-blocks")}
										value={parseInt(titleFontSize?.Desktop || 24)}
										onChange={(value) =>
											setAttributes({
												titleFontSize: {
													...titleFontSize,
													Desktop: value.toString(),
												},
											})
										}
										min={10}
										max={48}
									/>
									<FB_ColorControl
										label={__("Title Color", "frontis-blocks")}
										value={titleFontColor}
										onChange={(value) =>
											setAttributes({ titleFontColor: value })
										}
									/>
									<SelectControl
										label={__("Font Weight", "frontis-blocks")}
										value={titleFontWeight}
										options={[
											{ label: "400 - Normal", value: "400" },
											{ label: "500 - Medium", value: "500" },
											{ label: "600 - Semi Bold", value: "600" },
											{ label: "700 - Bold", value: "700" },
											{ label: "800 - Extra Bold", value: "800" },
										]}
										onChange={(value) =>
											setAttributes({ titleFontWeight: value })
										}
									/>

									<h4 style={{ marginTop: "20px" }}>
										{__("Description", "frontis-blocks")}
									</h4>
									<FB_Range
										label={__("Font Size (Desktop)", "frontis-blocks")}
										value={parseInt(descriptionFontSize?.Desktop || 14)}
										onChange={(value) =>
											setAttributes({
												descriptionFontSize: {
													...descriptionFontSize,
													Desktop: value.toString(),
												},
											})
										}
										min={10}
										max={32}
									/>
									<FB_ColorControl
										label={__("Description Color", "frontis-blocks")}
										value={descriptionFontColor}
										onChange={(value) =>
											setAttributes({ descriptionFontColor: value })
										}
									/>
								</PanelBody>
							</>
						)}

						{tab.name === "extra" && (
							<>
								{/* Display Options */}
								<PanelBody
									title={__("Content Display", "frontis-blocks")}
									initialOpen={true}
								>
									<ToggleControl
										label={__("Show Title", "frontis-blocks")}
										checked={showTitle}
										onChange={(value) => setAttributes({ showTitle: value })}
									/>
									<ToggleControl
										label={__("Show Description", "frontis-blocks")}
										checked={showDescription}
										onChange={(value) =>
											setAttributes({ showDescription: value })
										}
									/>
									<ToggleControl
										label={__("Show Icon", "frontis-blocks")}
										checked={showIcon}
										onChange={(value) => setAttributes({ showIcon: value })}
									/>
								</PanelBody>

								{/* Advanced Settings */}
								<PanelBody
									title={__("Advanced", "frontis-blocks")}
									initialOpen={false}
								>
									<TextControl
										label={__("Block ID", "frontis-blocks")}
										value={blockID}
										readOnly
									/>
									<TextControl
										label={__("Custom CSS Class", "frontis-blocks")}
										placeholder="Add custom classes"
									/>
								</PanelBody>
							</>
						)}
					</>
				)}
			</TabPanel>
		</InspectorControls>
	);
};

export default memo(Inspector);
