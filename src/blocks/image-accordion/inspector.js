import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	ColorPalette,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	ToggleControl,
	Button,
	TextControl,
	TextareaControl,
	__experimentalDivider as Divider,
	__experimentalHeading as Heading,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const ItemEditor = ({
	item,
	index,
	preset,
	onChange,
	onRemove,
	onDuplicate,
}) => {
	const [open, setOpen] = useState(false);

	const update = (key, val) => onChange(index, { ...item, [key]: val });

	return (
		<div style={{ border: "1px solid #ddd", borderRadius: 6, marginBottom: 8 }}>
			{/* Header row */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "8px 10px",
					background: "#f6f7f7",
					borderRadius: open ? "6px 6px 0 0" : 6,
					cursor: "pointer",
				}}
				onClick={() => setOpen(!open)}
			>
				<span style={{ fontWeight: 600, fontSize: 13 }}>
					{item.title || __("(no title)", "image-accordion")}
				</span>
				<div
					style={{ display: "flex", gap: 4 }}
					onClick={(e) => e.stopPropagation()}
				>
					<Button
						isSmall
						variant="tertiary"
						onClick={() => onDuplicate(index)}
						title={__("Duplicate", "image-accordion")}
					>
						⧉
					</Button>
					<Button
						isSmall
						variant="tertiary"
						isDestructive
						onClick={() => onRemove(index)}
						title={__("Remove", "image-accordion")}
					>
						✕
					</Button>
				</div>
			</div>

			{/* Expanded fields */}
			{open && (
				<div style={{ padding: "10px 12px" }}>
					{/* Background image — all presets */}
					<p style={{ fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
						{__("Background Image", "image-accordion")}
					</p>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								update("imageUrl", media.url);
								update("imageId", media.id);
							}}
							allowedTypes={["image"]}
							value={item.imageId}
							render={({ open: openMedia }) => (
								<div style={{ marginBottom: 10 }}>
									{item.imageUrl ? (
										<div style={{ position: "relative", marginBottom: 6 }}>
											<img
												src={item.imageUrl}
												alt=""
												style={{
													width: "100%",
													height: 80,
													objectFit: "cover",
													borderRadius: 4,
												}}
											/>
											<Button
												isSmall
												variant="secondary"
												onClick={openMedia}
												style={{ marginTop: 4, width: "100%" }}
											>
												{__("Replace Image", "image-accordion")}
											</Button>
										</div>
									) : (
										<Button
											variant="secondary"
											onClick={openMedia}
											style={{ width: "100%" }}
										>
											{__("🖼 Select Image", "image-accordion")}
										</Button>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>

					{/* Title */}
					<TextControl
						label={__("Title", "image-accordion")}
						value={item.title}
						onChange={(val) => update("title", val)}
					/>

					{/* Sub Title */}
					<TextControl
						label={__("Sub Title", "image-accordion")}
						value={item.subTitle}
						onChange={(val) => update("subTitle", val)}
					/>

					{/* Preset 1: icon settings */}
					{preset === "preset-1" && (
						<>
							<SelectControl
								label={__("Icon Source", "image-accordion")}
								value={item.mediaType || "icon"}
								options={[
									{ label: "Font Icon (class)", value: "icon" },
									{ label: "Image", value: "image" },
								]}
								onChange={(val) => update("mediaType", val)}
							/>
							{(item.mediaType || "icon") === "icon" && (
								<TextControl
									label={__("Icon Class (e.g. fas fa-star)", "image-accordion")}
									value={item.iconValue || ""}
									onChange={(val) => update("iconValue", val)}
								/>
							)}
							{item.mediaType === "image" && (
								<>
									<p style={{ fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
										{__("Icon Image", "image-accordion")}
									</p>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) => update("iconImageUrl", media.url)}
											allowedTypes={["image"]}
											render={({ open: openIcon }) => (
												<Button
													variant="secondary"
													onClick={openIcon}
													style={{ width: "100%", marginBottom: 10 }}
												>
													{item.iconImageUrl
														? __("Replace Icon Image", "image-accordion")
														: __("Select Icon Image", "image-accordion")}
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</>
							)}
						</>
					)}

					{/* Preset 3: button */}
					{preset === "preset-3" && (
						<>
							<TextControl
								label={__("Button Text", "image-accordion")}
								value={item.buttonText || "Read More"}
								onChange={(val) => update("buttonText", val)}
							/>
							<TextControl
								label={__("Button URL", "image-accordion")}
								value={item.buttonUrl || "#"}
								onChange={(val) => update("buttonUrl", val)}
							/>
							<ToggleControl
								label={__("Open in new tab", "image-accordion")}
								checked={!!item.buttonExternal}
								onChange={(val) => update("buttonExternal", val)}
							/>
						</>
					)}
				</div>
			)}
		</div>
	);
};

/* 
   Main Inspector
 */
const Inspector = ({ attributes, setAttributes }) => {
	const {
		presetStyle,
		triggerOn,
		accordionItems,
		containerHeight,
		itemsGap,
		overlayColor,
		iconColor,
		showDots,
		dotColor,
		dotSize,
		showNumber,
		numberColor,
		titleColor,
		subtitleColor,
		btnTextColor,
		btnBgColor,
	} = attributes;

	/* Item helpers */
	const updateItem = (index, updated) => {
		const next = [...accordionItems];
		next[index] = updated;
		setAttributes({ accordionItems: next });
	};

	const removeItem = (index) => {
		setAttributes({
			accordionItems: accordionItems.filter((_, i) => i !== index),
		});
	};

	const duplicateItem = (index) => {
		const copy = { ...accordionItems[index], id: Date.now().toString() };
		const next = [...accordionItems];
		next.splice(index + 1, 0, copy);
		setAttributes({ accordionItems: next });
	};

	const addItem = () => {
		setAttributes({
			accordionItems: [
				...accordionItems,
				{
					id: Date.now().toString(),
					title: "Discover unique",
					subTitle: "",
					imageUrl: "",
					imageId: 0,
					iconValue: "fas fa-star",
					iconLibrary: "solid",
					mediaType: "icon",
					iconImageUrl: "",
					buttonText: "Read More",
					buttonUrl: "#",
					buttonExternal: false,
				},
			],
		});
	};

	return (
		<InspectorControls>
			{/*  CONTENT  */}
			<PanelBody title={__("Content", "image-accordion")} initialOpen={true}>
				<SelectControl
					label={__("Accordion Type", "image-accordion")}
					value={presetStyle}
					options={[
						{ label: "Preset 1", value: "preset-1" },
						{ label: "Preset 2", value: "preset-2" },
						{ label: "Preset 3", value: "preset-3" },
						{ label: "Preset 4", value: "preset-4" },
					]}
					onChange={(val) => setAttributes({ presetStyle: val })}
				/>

				<SelectControl
					label={__("Trigger On", "image-accordion")}
					value={triggerOn}
					options={[
						{ label: "Hover", value: "hover" },
						{ label: "Click", value: "click" },
					]}
					onChange={(val) => setAttributes({ triggerOn: val })}
				/>

				<Divider />

				<p style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>
					{__("Accordion Items", "image-accordion")}
				</p>

				{accordionItems.map((item, i) => (
					<ItemEditor
						key={item.id || i}
						item={item}
						index={i}
						preset={presetStyle}
						onChange={updateItem}
						onRemove={removeItem}
						onDuplicate={duplicateItem}
					/>
				))}

				<Button
					variant="primary"
					onClick={addItem}
					style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
				>
					{__("+ Add Item", "image-accordion")}
				</Button>
			</PanelBody>

			{/* LAYOUT  */}
			<PanelBody title={__("Layout", "image-accordion")} initialOpen={false}>
				<RangeControl
					label={__("Container Height (px)", "image-accordion")}
					value={containerHeight}
					onChange={(val) => setAttributes({ containerHeight: val })}
					min={200}
					max={900}
					step={10}
				/>

				{presetStyle !== "preset-2" && (
					<RangeControl
						label={__("Items Gap (px)", "image-accordion")}
						value={itemsGap}
						onChange={(val) => setAttributes({ itemsGap: val })}
						min={0}
						max={40}
					/>
				)}
			</PanelBody>

			{/*  OVERLAY  */}
			<PanelBody title={__("Overlay", "image-accordion")} initialOpen={false}>
				<p style={{ fontSize: 12, marginBottom: 6 }}>
					{__("Overlay Color", "image-accordion")}
				</p>
				<input
					type="color"
					value={overlayColor}
					onChange={(e) => setAttributes({ overlayColor: e.target.value })}
					style={{
						width: "100%",
						height: 36,
						border: "none",
						borderRadius: 4,
						cursor: "pointer",
					}}
				/>
				<TextControl
					label={__("Custom value (supports rgba)", "image-accordion")}
					value={overlayColor}
					onChange={(val) => setAttributes({ overlayColor: val })}
				/>
			</PanelBody>

			{/*  ICON (Preset 1 only)  */}
			{presetStyle === "preset-1" && (
				<PanelBody
					title={__("Icon Style", "image-accordion")}
					initialOpen={false}
				>
					<p style={{ fontSize: 12, marginBottom: 6 }}>
						{__("Icon Color", "image-accordion")}
					</p>
					<input
						type="color"
						value={iconColor}
						onChange={(e) => setAttributes({ iconColor: e.target.value })}
						style={{
							width: "100%",
							height: 36,
							border: "none",
							borderRadius: 4,
							cursor: "pointer",
						}}
					/>
				</PanelBody>
			)}

			{/*  DOTS (Preset 2 only)  */}
			{presetStyle === "preset-2" && (
				<PanelBody
					title={__("Overlay Dots", "image-accordion")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Dots", "image-accordion")}
						checked={showDots}
						onChange={(val) => setAttributes({ showDots: val })}
					/>
					{showDots && (
						<>
							<TextControl
								label={__("Dot Color", "image-accordion")}
								value={dotColor}
								onChange={(val) => setAttributes({ dotColor: val })}
							/>
							<RangeControl
								label={__("Dot Size (px)", "image-accordion")}
								value={dotSize}
								onChange={(val) => setAttributes({ dotSize: val })}
								min={4}
								max={40}
							/>
						</>
					)}
				</PanelBody>
			)}

			{/*  NUMBERS (Preset 2 & 4 only)  */}
			{(presetStyle === "preset-2" || presetStyle === "preset-4") && (
				<PanelBody
					title={__("Item Number", "image-accordion")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Number", "image-accordion")}
						checked={showNumber}
						onChange={(val) => setAttributes({ showNumber: val })}
					/>
					{showNumber && (
						<TextControl
							label={__("Number Color", "image-accordion")}
							value={numberColor}
							onChange={(val) => setAttributes({ numberColor: val })}
						/>
					)}
				</PanelBody>
			)}

			{/*  TYPOGRAPHY  */}
			<PanelBody
				title={__("Typography", "image-accordion")}
				initialOpen={false}
			>
				<TextControl
					label={__("Title Color", "image-accordion")}
					value={titleColor}
					onChange={(val) => setAttributes({ titleColor: val })}
				/>
				<TextControl
					label={__("Subtitle Color", "image-accordion")}
					value={subtitleColor}
					onChange={(val) => setAttributes({ subtitleColor: val })}
				/>
			</PanelBody>

			{/*  BUTTON (Preset 3 only)  */}
			{presetStyle === "preset-3" && (
				<PanelBody
					title={__("Button Style", "image-accordion")}
					initialOpen={false}
				>
					<TextControl
						label={__("Text Color", "image-accordion")}
						value={btnTextColor}
						onChange={(val) => setAttributes({ btnTextColor: val })}
					/>
					<TextControl
						label={__("Background Color (supports rgba)", "image-accordion")}
						value={btnBgColor}
						onChange={(val) => setAttributes({ btnBgColor: val })}
					/>
				</PanelBody>
			)}
		</InspectorControls>
	);
};

export default Inspector;
