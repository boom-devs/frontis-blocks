import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	ToggleControl,
	Button,
	TextControl,
	ColorPicker,
	__experimentalText as Text,
	__experimentalDivider as Divider,
} from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		preset,
		triggerOn,
		items,
		height,
		borderRadius,
		accentColor,
		overlayColor,
		overlayOpacity,
		showNumbers,
		showButton,
	} = attributes;

	const updateItem = (index, key, value) => {
		const updated = items.map((item, i) =>
			i === index ? { ...item, [key]: value } : item,
		);
		setAttributes({ items: updated });
	};

	const addItem = () => {
		const newId = items.length + 1;
		setAttributes({
			items: [
				...items,
				{
					id: newId,
					title: "New Item",
					subtitle: "Subtitle here",
					description: "Add your description here.",
					imageUrl: "",
					imageId: 0,
					buttonText: "Read More",
					buttonUrl: "#",
				},
			],
		});
	};

	const removeItem = (index) => {
		setAttributes({ items: items.filter((_, i) => i !== index) });
	};

	const duplicateItem = (index) => {
		const copy = { ...items[index], id: items.length + 1 };
		const updated = [...items];
		updated.splice(index + 1, 0, copy);
		setAttributes({ items: updated });
	};

	return (
		<InspectorControls>
			{/* ── Layout ── */}
			<PanelBody
				title={__("Layout & Preset", "image-accordion")}
				initialOpen={true}
			>
				<SelectControl
					label={__("Accordion Type", "image-accordion")}
					value={preset}
					options={[
						{ label: "Preset 1 — Rounded Cards", value: "preset1" },
						{ label: "Preset 2 — Full Bleed + Dots", value: "preset2" },
						{ label: "Preset 3 — Horizontal Strips", value: "preset3" },
						{ label: "Preset 4 — Diagonal Slices", value: "preset4" },
					]}
					onChange={(value) => setAttributes({ preset: value })}
				/>
				<SelectControl
					label={__("Trigger On", "image-accordion")}
					value={triggerOn}
					options={[
						{ label: "Hover", value: "hover" },
						{ label: "Click", value: "click" },
					]}
					onChange={(value) => setAttributes({ triggerOn: value })}
				/>
				<RangeControl
					label={__("Height (px)", "image-accordion")}
					value={height}
					onChange={(v) => setAttributes({ height: v })}
					min={300}
					max={900}
					step={10}
				/>
				<RangeControl
					label={__("Border Radius (px)", "image-accordion")}
					value={borderRadius}
					onChange={(v) => setAttributes({ borderRadius: v })}
					min={0}
					max={40}
				/>
			</PanelBody>

			{/* ── Style ── */}
			<PanelBody title={__("Style", "image-accordion")} initialOpen={false}>
				<ToggleControl
					label={__("Show Numbers", "image-accordion")}
					checked={showNumbers}
					onChange={(v) => setAttributes({ showNumbers: v })}
				/>
				<ToggleControl
					label={__("Show Button", "image-accordion")}
					checked={showButton}
					onChange={(v) => setAttributes({ showButton: v })}
				/>
				<RangeControl
					label={__("Overlay Opacity (%)", "image-accordion")}
					value={overlayOpacity}
					onChange={(v) => setAttributes({ overlayOpacity: v })}
					min={0}
					max={90}
				/>
				<Text variant="muted" style={{ display: "block", marginBottom: 6 }}>
					{__("Accent Color", "image-accordion")}
				</Text>
				<ColorPicker
					color={accentColor}
					onChange={(v) => setAttributes({ accentColor: v })}
					enableAlpha={false}
				/>
			</PanelBody>

			{/* ── Accordion Items ── */}
			<PanelBody
				title={__("Accordion Items", "image-accordion")}
				initialOpen={true}
			>
				{items.map((item, index) => (
					<div
						key={item.id}
						style={{
							background: "#1e1e1e",
							border: "1px solid #3a3a3a",
							borderRadius: 6,
							padding: "10px",
							marginBottom: 10,
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 8,
							}}
						>
							<Text style={{ color: "#ccc", fontWeight: 600, fontSize: 12 }}>
								{`Item ${index + 1}`}
							</Text>
							<div style={{ display: "flex", gap: 4 }}>
								<Button
									icon="admin-page"
									isSmall
									onClick={() => duplicateItem(index)}
									title={__("Duplicate", "image-accordion")}
								/>
								<Button
									icon="no-alt"
									isSmall
									isDestructive
									onClick={() => removeItem(index)}
									title={__("Remove", "image-accordion")}
								/>
							</div>
						</div>

						<TextControl
							label={__("Title", "image-accordion")}
							value={item.title}
							onChange={(v) => updateItem(index, "title", v)}
						/>
						<TextControl
							label={__("Subtitle", "image-accordion")}
							value={item.subtitle}
							onChange={(v) => updateItem(index, "subtitle", v)}
						/>
						<TextControl
							label={__("Button Text", "image-accordion")}
							value={item.buttonText}
							onChange={(v) => updateItem(index, "buttonText", v)}
						/>
						<TextControl
							label={__("Button URL", "image-accordion")}
							value={item.buttonUrl}
							onChange={(v) => updateItem(index, "buttonUrl", v)}
						/>

						{/* Image upload */}
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									updateItem(index, "imageUrl", media.url);
									updateItem(index, "imageId", media.id);
								}}
								allowedTypes={["image"]}
								value={item.imageId}
								render={({ open }) => (
									<div>
										{item.imageUrl ? (
											<div>
												<img
													src={item.imageUrl}
													alt=""
													style={{
														width: "100%",
														height: 60,
														objectFit: "cover",
														borderRadius: 4,
														marginBottom: 4,
													}}
												/>
												<Button
													variant="secondary"
													isSmall
													onClick={open}
													style={{ width: "100%", justifyContent: "center" }}
												>
													{__("Replace Image", "image-accordion")}
												</Button>
											</div>
										) : (
											<Button
												variant="primary"
												isSmall
												onClick={open}
												style={{ width: "100%", justifyContent: "center" }}
											>
												{__("🖼 Upload Image", "image-accordion")}
											</Button>
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
					</div>
				))}

				<Button
					variant="primary"
					onClick={addItem}
					style={{ width: "100%", justifyContent: "center", marginTop: 6 }}
				>
					{__("+ Add Item", "image-accordion")}
				</Button>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
