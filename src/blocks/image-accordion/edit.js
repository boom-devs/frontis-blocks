/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	SelectControl,
	TextControl,
	ColorPalette,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateImageAccordionStyle from "./styling";
import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, isSelected, clientId } = props;

	const {
		blockID,
		blockStyle,
		images,
		activeImageIndex,
		layoutType,
		thumbnailSize,
		thumbnailGap,
		mainImageMarginBottom,
		thumbnailBorderRadius,
		mainImageBorderRadius,
		activeThumbBorderColor,
		activeThumbBorderWidth,
		showThumbnailsDesktop,
		showThumbnailsTablet,
		showThumbnailsMobile,
	} = attributes;

	// Handle block ID generation
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-image-accordion",
		isSelected,
		attributes,
		setAttributes,
	});

	// Generate block style
	useEffect(() => {
		if (blockID) {
			const css = generateImageAccordionStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	const [mainImage, setMainImage] = useState(
		images.length > 0 ? images[activeImageIndex] : null,
	);

	// Update main image when active index changes
	useEffect(() => {
		if (images.length > 0) {
			setMainImage(images[activeImageIndex]);
		}
	}, [activeImageIndex, images]);

	const handleAddImage = (media) => {
		const newImages = [...images];
		newImages.push({
			id: media.id,
			url: media.url,
			alt: media.alt || "",
			title: media.title || "",
		});
		setAttributes({ images: newImages });
	};

	const handleRemoveImage = (index) => {
		const newImages = images.filter((_, i) => i !== index);
		setAttributes({ images: newImages });

		// Adjust active index if needed
		if (activeImageIndex >= newImages.length && activeImageIndex > 0) {
			setAttributes({ activeImageIndex: newImages.length - 1 });
		}
	};

	const handleThumbnailClick = (index) => {
		setAttributes({ activeImageIndex: index });
	};

	const blockProps = useBlockProps({
		className: `fb-image-accordion-carousel ${blockID}`,
	});

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Carousel Settings", "frontis-blocks")}
					initialOpen={true}
				>
					<SelectControl
						label={__("Layout Type", "frontis-blocks")}
						value={layoutType}
						options={[
							{
								label: __("Horizontal (Right Thumbs)", "frontis-blocks"),
								value: "horizontal",
							},
							{
								label: __("Vertical (Bottom Thumbs)", "frontis-blocks"),
								value: "vertical",
							},
						]}
						onChange={(value) => setAttributes({ layoutType: value })}
					/>

					<RangeControl
						label={__("Thumbnail Width", "frontis-blocks")}
						value={parseInt(thumbnailSize.width)}
						onChange={(value) =>
							setAttributes({
								thumbnailSize: {
									...thumbnailSize,
									width: value.toString(),
								},
							})
						}
						min={40}
						max={150}
					/>
					<RangeControl
						label={__("Thumbnail Height", "frontis-blocks")}
						value={parseInt(thumbnailSize.height)}
						onChange={(value) =>
							setAttributes({
								thumbnailSize: {
									...thumbnailSize,
									height: value.toString(),
								},
							})
						}
						min={40}
						max={250}
					/>

					<RangeControl
						label={__("Thumbnail Padding", "frontis-blocks")}
						value={parseInt(thumbnailPadding.padding)}
						onChange={(value) =>
							setAttributes({
								thumbnailPadding: {
									...thumbnailPadding,
									padding: value.toString(),
								},
							})
						}
						min={40}
						max={250}
					/>

					<RangeControl
						label={__("Thumbnail Height", "frontis-blocks")}
						value={parseInt(thumbnailSize.height)}
						onChange={(value) =>
							setAttributes({
								thumbnailSize: {
									...thumbnailSize,
									height: value.toString(),
								},
							})
						}
						min={40}
						max={150}
					/>

					<RangeControl
						label={__("thumbnailGap", "frontis-blocks")}
						value={parseInt(thumbnailGap)}
						onChange={(value) =>
							setAttributes({ thumbnailGap: value.toString() })
						}
						min={0}
						max={30}
					/>

					<RangeControl
						label={__("Main Image Bottom Margin", "frontis-blocks")}
						value={parseInt(mainImageMarginBottom)}
						onChange={(value) =>
							setAttributes({
								mainImageMarginBottom: value.toString(),
							})
						}
						min={0}
						max={60}
					/>

					<RangeControl
						label={__("Main Image Box Shadow", "frontis-blocks")}
						value={parseInt(mainImageBoxShadow)}
						onChange={(value) =>
							setAttributes({
								mainImageBoxShadow: value.toString(),
							})
						}
						min={20}
						max={80}
					/>
				</PanelBody>

				<PanelBody title={__("Styling", "frontis-blocks")} initialOpen={false}>
					<RangeControl
						label={__("Main Image Border Radius", "frontis-blocks")}
						value={parseInt(mainImageBorderRadius)}
						onChange={(value) =>
							setAttributes({
								mainImageBorderRadius: value.toString(),
							})
						}
						min={0}
						max={30}
					/>

					<RangeControl
						label={__("Thumbnail Border Radius", "frontis-blocks")}
						value={parseInt(thumbnailBorderRadius)}
						onChange={(value) =>
							setAttributes({
								thumbnailBorderRadius: value.toString(),
							})
						}
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Active Thumbnail Border Width", "frontis-blocks")}
						value={parseInt(activeThumbBorderWidth)}
						onChange={(value) =>
							setAttributes({
								activeThumbBorderWidth: value.toString(),
							})
						}
						min={0}
						max={10}
					/>

					<ColorPalette
						label={__("Active Thumbnail Border Color", "frontis-blocks")}
						value={parseInt(activeThumbBorderColor)}
						onChange={(value) =>
							setAttributes({
								activeThumbnailBorderColor: value.toString(),
							})
						}
						min={1}
						max={100}
					/>

					<RangeControl
						label={__("Active Thumbnail Border Height", "frontis-blocks")}
						value={parseInt(activeThumbBorderHeight)}
						onChange={(value) =>
							setAttributes({
								activeThumbnailBorderHeight: value.toString(),
							})
						}
						min={0}
						max={50}
					/>

					<RangeControl
						label={__("Active Thumbnail Overlay", "frontis-blocks")}
						value={parseInt(activeThumbOverlay)}
						onChange={(value) =>
							setAttributes({
								activeThumbnailOverlay: value.toString(),
							})
						}
						min={0}
						max={10}
					/>
				</PanelBody>

				<PanelBody
					title={__("Responsive", "frontis-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Thumbnails on Desktop", "frontis-blocks")}
						checked={showThumbnailsDesktop}
						onChange={(value) =>
							setAttributes({ showThumbnailsDesktop: value })
						}
					/>
					<ToggleControl
						label={__("Show Thumbnails on Tablet", "frontis-blocks")}
						checked={showThumbnailsTablet}
						onChange={(value) => setAttributes({ showThumbnailsTablet: value })}
					/>
					<ToggleControl
						label={__("Show Thumbnails on Mobile", "frontis-blocks")}
						checked={showThumbnailsMobile}
						onChange={(value) => setAttributes({ showThumbnailsMobile: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="fb-image-accordion-container">
					{/* Main Image Section */}
					<div className="fb-image-accordion-main-section">
						{mainImage ? (
							<img
								src={mainImage.url}
								alt={mainImage.alt}
								className="fb-image-accordion-main-image"
								style={{
									borderRadius: `${mainImageBorderRadius}px`,
								}}
							/>
						) : (
							<div className="fb-image-accordion-placeholder">
								<p>{__("Click below to add images", "frontis-blocks")}</p>
							</div>
						)}
					</div>

					{/* Thumbnails Section */}
					<div
						className={`fb-image-accordion-thumbnails-section fb-layout-${layoutType}`}
						style={{
							gap: `${thumbnailGap}px`,
						}}
					>
						{images.map((image, index) => (
							<div
								key={index}
								className={`fb-image-accordion-thumbnail-wrapper ${
									activeImageIndex === index ? "active" : ""
								}`}
								style={{
									borderRadius: `${thumbnailBorderRadius}px`,
									borderWidth:
										activeImageIndex === index
											? `${activeThumbBorderWidth}px`
											: "0px",
									borderStyle: "solid",
									borderColor:
										activeImageIndex === index
											? activeThumbBorderColor
											: "transparent",
								}}
							>
								<img
									src={image.url}
									alt={image.alt}
									className="fb-image-accordion-thumbnail"
									style={{
										width: `${thumbnailSize.width}px`,
										height: `${thumbnailSize.height}px`,
										cursor: "pointer",
										borderRadius: `${thumbnailBorderRadius}px`,
									}}
									onClick={() => handleThumbnailClick(index)}
								/>
								<button
									className="fb-image-accordion-remove-btn"
									onClick={() => handleRemoveImage(index)}
									aria-label={__("Remove image", "frontis-blocks")}
								>
									×
								</button>
							</div>
						))}

						{/* Add Image Button */}
						<MediaUpload
							onSelect={handleAddImage}
							type="image"
							render={({ open }) => (
								<Button
									variant="secondary"
									onClick={open}
									className="fb-image-accordion-add-btn"
									style={{
										width: `${thumbnailSize.width}px`,
										height: `${thumbnailSize.height}px`,
										borderRadius: `${thumbnailBorderRadius}px`,
									}}
								>
									{__("+ Add", "frontis-blocks")}
								</Button>
							)}
						/>
					</div>

					{/* Description */}
					{images.length > 0 && (
						<div className="fb-image-accordion-description">
							<p>
								{images[activeImageIndex].title ||
									`${__("Image", "frontis-blocks")} ${activeImageIndex + 1}`}
							</p>
						</div>
					)}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
