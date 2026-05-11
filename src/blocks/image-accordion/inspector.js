import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	Button,
	TextControl,
	BaseControl,
	ColorPicker,
	Popover,
	TabPanel,
	__experimentalDivider as Divider,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

/* Color picker */
const ColorControl = ({ label, value, onChange }) => {
	const [open, setOpen] = useState(false);
	return (
		<BaseControl label={label} __nextHasNoMarginBottom>
			<div
				style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}
			>
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					style={{
						width: 30,
						height: 30,
						borderRadius: 4,
						border: "2px solid #ccc",
						background: value || "transparent",
						cursor: "pointer",
						flexShrink: 0,
					}}
				/>
				<TextControl
					value={value}
					onChange={onChange}
					style={{ margin: 0, flex: 1 }}
					hideLabelFromVision
					label={label}
					__nextHasNoMarginBottom
				/>
				{open && (
					<Popover onClose={() => setOpen(false)} placement="bottom-start">
						<div style={{ padding: 8 }}>
							<ColorPicker
								color={value}
								onChange={onChange}
								enableAlpha
								defaultValue={value}
							/>
						</div>
					</Popover>
				)}
			</div>
		</BaseControl>
	);
};

/* side spacing */
const SpacingControl = ({ label, value, onChange }) => (
	<BaseControl label={label} __nextHasNoMarginBottom>
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr 1fr 1fr",
				gap: 4,
				marginTop: 4,
			}}
		>
			{["Top", "Right", "Bottom", "Left"].map((side) => (
				<div key={side}>
					<input
						type="number"
						value={value[side.toLowerCase()] || 0}
						onChange={(e) =>
							onChange({
								...value,
								[side.toLowerCase()]: parseInt(e.target.value) || 0,
							})
						}
						style={{
							width: "100%",
							padding: "4px 2px",
							border: "1px solid #ccc",
							borderRadius: 4,
							fontSize: 12,
							textAlign: "center",
						}}
						min={0}
					/>
					<div
						style={{
							textAlign: "center",
							fontSize: 10,
							color: "#757575",
							marginTop: 2,
						}}
					>
						{side[0]}
					</div>
				</div>
			))}
		</div>
	</BaseControl>
);

/*  Single item editor */
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
		<div
			style={{
				border: "1px solid #ddd",
				borderRadius: 6,
				marginBottom: 8,
				overflow: "hidden",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "8px 10px",
					background: "#f0f0f1",
					cursor: "pointer",
					userSelect: "none",
				}}
				onClick={() => setOpen((v) => !v)}
			>
				<span style={{ fontWeight: 600, fontSize: 13 }}>
					{item.title || __("(no title)", "frontis-blocks")}
				</span>
				<div
					style={{ display: "flex", gap: 4 }}
					onClick={(e) => e.stopPropagation()}
				>
					<Button
						isSmall
						variant="tertiary"
						icon="admin-page"
						onClick={() => onDuplicate(index)}
						title={__("Duplicate", "frontis-blocks")}
					/>
					<Button
						isSmall
						variant="tertiary"
						icon="no-alt"
						isDestructive
						onClick={() => onRemove(index)}
						title={__("Remove", "frontis-blocks")}
					/>
				</div>
			</div>

			{open && (
				<div style={{ padding: "12px 12px 4px" }}>
					<BaseControl
						label={__("Background Image", "frontis-blocks")}
						help={__(
							"All presets — full-bleed card background.",
							"frontis-blocks",
						)}
						__nextHasNoMarginBottom
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									update("imageUrl", media.url);
									update("imageId", media.id);
								}}
								allowedTypes={["image"]}
								value={item.imageId}
								render={({ open: openMedia }) => (
									<div style={{ marginTop: 6, marginBottom: 12 }}>
										{item.imageUrl ? (
											<>
												<img
													src={item.imageUrl}
													alt=""
													style={{
														width: "100%",
														height: 80,
														objectFit: "cover",
														borderRadius: 4,
														display: "block",
														marginBottom: 6,
													}}
												/>
												<Button
													isSmall
													variant="secondary"
													onClick={openMedia}
													style={{ width: "100%" }}
												>
													{__("Replace Image", "frontis-blocks")}
												</Button>
											</>
										) : (
											<Button
												variant="secondary"
												onClick={openMedia}
												style={{ width: "100%" }}
											>
												{__("🖼 Select Image", "frontis-blocks")}
											</Button>
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
					</BaseControl>

					<TextControl
						label={__("Title", "frontis-blocks")}
						help={__("All presets — main heading.", "frontis-blocks")}
						value={item.title}
						onChange={(val) => update("title", val)}
						__nextHasNoMarginBottom
					/>

					<TextControl
						label={__("Sub Title", "frontis-blocks")}
						help={__(
							"All presets — secondary line below title.",
							"frontis-blocks",
						)}
						value={item.subTitle}
						onChange={(val) => update("subTitle", val)}
						__nextHasNoMarginBottom
					/>

					{preset === "preset-1" && (
						<>
							<Divider />
							<SelectControl
								label={__("Icon Source", "frontis-blocks")}
								value={item.mediaType || "icon"}
								options={[
									{
										label: __("Icon (Font Awesome)", "frontis-blocks"),
										value: "icon",
									},
									{
										label: __("Image/SVG File", "frontis-blocks"),
										value: "image",
									},
									{
										label: __("SVG Data URI", "frontis-blocks"),
										value: "svg-uri",
									},
								]}
								onChange={(val) => update("mediaType", val)}
								__nextHasNoMarginBottom
							/>
							{(item.mediaType || "icon") === "icon" && (
								<TextControl
									label={__("Choose Icon (CSS class)", "frontis-blocks")}
									help={__(
										"e.g. fas fa-star, fas fa-heart, fab fa-twitter",
										"frontis-blocks",
									)}
									value={item.iconValue || "fas fa-star"}
									onChange={(val) => update("iconValue", val)}
									__nextHasNoMarginBottom
								/>
							)}
							{item.mediaType === "image" && (
								<BaseControl
									label={__("Icon Image", "frontis-blocks")}
									__nextHasNoMarginBottom
								>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(media) => update("iconImageUrl", media.url)}
											allowedTypes={["image"]}
											render={({ open: openIcon }) => (
												<Button
													variant="secondary"
													onClick={openIcon}
													style={{
														width: "100%",
														marginTop: 6,
														marginBottom: 10,
													}}
												>
													{item.iconImageUrl
														? __("Replace Icon Image", "frontis-blocks")
														: __("Select Icon Image", "frontis-blocks")}
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</BaseControl>
							)}
							{item.mediaType === "svg-uri" && (
								<BaseControl
									label={__("SVG Data URI", "frontis-blocks")}
									help={__(
										"Paste SVG data URI (data:image/svg+xml,...)",
										"frontis-blocks",
									)}
									__nextHasNoMarginBottom
								>
									<textarea
										value={item.iconImageUrl || ""}
										onChange={(e) => update("iconImageUrl", e.target.value)}
										style={{
											width: "100%",
											minHeight: 60,
											padding: 8,
											marginTop: 6,
											marginBottom: 10,
											border: "1px solid #ccc",
											borderRadius: 4,
											fontFamily: "monospace",
											fontSize: 11,
											fontWeight: "normal",
										}}
										placeholder="Paste SVG data URI here..."
									/>
								</BaseControl>
							)}
						</>
					)}

					{preset === "preset-3" && (
						<>
							<Divider />
							<TextControl
								label={__("Button Text", "frontis-blocks")}
								value={item.buttonText || "Read More"}
								onChange={(val) => update("buttonText", val)}
								__nextHasNoMarginBottom
							/>
							<TextControl
								label={__("Button Link", "frontis-blocks")}
								value={item.buttonUrl || "#"}
								onChange={(val) => update("buttonUrl", val)}
								__nextHasNoMarginBottom
							/>
							<ToggleControl
								label={__("Open in new tab", "frontis-blocks")}
								checked={!!item.buttonExternal}
								onChange={(val) => update("buttonExternal", val)}
								__nextHasNoMarginBottom
							/>
						</>
					)}
				</div>
			)}
		</div>
	);
};

/* ===================
   CONTENT PANEL
======================= */
const ContentPanel = ({ attributes, setAttributes }) => {
	const { presetStyle, triggerOn, accordionItems } = attributes;

	const updateItem = (index, updated) => {
		const next = [...accordionItems];
		next[index] = updated;
		setAttributes({ accordionItems: next });
	};
	const removeItem = (index) =>
		setAttributes({
			accordionItems: accordionItems.filter((_, i) => i !== index),
		});
	const duplicateItem = (index) => {
		const copy = { ...accordionItems[index], id: Date.now().toString() };
		const next = [...accordionItems];
		next.splice(index + 1, 0, copy);
		setAttributes({ accordionItems: next });
	};
	const addItem = () =>
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

	return (
		<PanelBody title={__("Content", "frontis-blocks")} initialOpen={true}>
			<SelectControl
				label={__("Accordion Type", "frontis-blocks")}
				value={presetStyle}
				options={[
					{ label: "Preset 1", value: "preset-1" },
					{ label: "Preset 2", value: "preset-2" },
					{ label: "Preset 3", value: "preset-3" },
					{ label: "Preset 4", value: "preset-4" },
				]}
				onChange={(val) => setAttributes({ presetStyle: val })}
				__nextHasNoMarginBottom
			/>

			<Divider />

			<p style={{ fontSize: 12, fontWeight: 600, margin: "8px 0" }}>
				{__("Accordion Items", "frontis-blocks")}
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
				{__("+ Add Item", "frontis-blocks")}
			</Button>

			<Divider />

			<SelectControl
				label={__("Trigger On", "frontis-blocks")}
				value={triggerOn}
				options={[
					{ label: __("Hover", "frontis-blocks"), value: "hover" },
					{ label: __("Click", "frontis-blocks"), value: "click" },
				]}
				onChange={(val) => setAttributes({ triggerOn: val })}
				help={
					triggerOn === "hover"
						? __(
								"Items expand on mouse hover. Click has no effect.",
								"frontis-blocks",
						  )
						: __(
								"Items expand on click. Hover has no effect.",
								"frontis-blocks",
						  )
				}
				__nextHasNoMarginBottom
			/>
		</PanelBody>
	);
};

/* ==================
   STYLE PANELS
====================== */
const StylePanels = ({ attributes, setAttributes }) => {
	const {
		presetStyle,
		containerHeight,
		itemsGap,
		itemBorderRadius,
		itemBorderType,
		itemBorderWidth,
		itemBorderColor,
		itemPadding,
		itemMargin,
		overlayColor,
		overlayHoverColor,
		iconColor,
		iconBgColor,
		iconSize,
		iconCircleSize,
		showDots,
		dotColor,
		dotSize,
		showNumber,
		numberColor,
		numberFontSize,
		titleColor,
		titleFontSize,
		titleFontWeight,
		subtitleColor,
		subtitleFontSize,
		btnTextColor,
		btnBgColor,
		btnBorderColor,
		btnBorderRadius,
		btnFontSize,
		btnPaddingY,
		btnPaddingX,
	} = attributes;

	return (
		<>
			{/* General */}
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<RangeControl
					label={__("Height (px)", "frontis-blocks")}
					value={containerHeight}
					onChange={(val) => setAttributes({ containerHeight: val })}
					min={200}
					max={900}
					step={10}
					__nextHasNoMarginBottom
				/>

				<SelectControl
					label={__("Border Type", "frontis-blocks")}
					value={itemBorderType}
					options={[
						{ label: "Default", value: "Default" },
						{ label: "None", value: "none" },
						{ label: "Solid", value: "solid" },
						{ label: "Dashed", value: "dashed" },
						{ label: "Dotted", value: "dotted" },
						{ label: "Double", value: "double" },
					]}
					onChange={(val) => setAttributes({ itemBorderType: val })}
					__nextHasNoMarginBottom
				/>

				<RangeControl
					label={__("Border Radius (px)", "frontis-blocks")}
					value={itemBorderRadius}
					onChange={(val) => setAttributes({ itemBorderRadius: val })}
					min={0}
					max={100}
					__nextHasNoMarginBottom
				/>

				{itemBorderType &&
					itemBorderType !== "none" &&
					itemBorderType !== "Default" && (
						<ColorControl
							label={__("Border Color", "frontis-blocks")}
							value={itemBorderColor}
							onChange={(val) => setAttributes({ itemBorderColor: val })}
						/>
					)}

				<SpacingControl
					label={__("Padding (px)", "frontis-blocks")}
					value={itemPadding}
					onChange={(val) => setAttributes({ itemPadding: val })}
				/>
				<SpacingControl
					label={__("Margin (px)", "frontis-blocks")}
					value={itemMargin}
					onChange={(val) => setAttributes({ itemMargin: val })}
				/>

				<RangeControl
					label={__("Gap (px)", "frontis-blocks")}
					value={itemsGap}
					onChange={(val) => setAttributes({ itemsGap: val })}
					min={0}
					max={60}
					__nextHasNoMarginBottom
				/>
			</PanelBody>

			{/* Icon - Preset 1 */}
			{presetStyle === "preset-1" && (
				<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
					<ColorControl
						label={__("Icon Color", "frontis-blocks")}
						value={iconColor}
						onChange={(val) => setAttributes({ iconColor: val })}
					/>
					<ColorControl
						label={__("Icon Background Color", "frontis-blocks")}
						value={iconBgColor}
						onChange={(val) => setAttributes({ iconBgColor: val })}
					/>
					<RangeControl
						label={__("Icon Size (px)", "frontis-blocks")}
						value={iconSize}
						onChange={(val) => setAttributes({ iconSize: val })}
						min={10}
						max={60}
						__nextHasNoMarginBottom
					/>
					<RangeControl
						label={__("Circle Size (px)", "frontis-blocks")}
						value={iconCircleSize}
						onChange={(val) => setAttributes({ iconCircleSize: val })}
						min={24}
						max={100}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			)}

			{/* Overlay Dots Preset 2 */}
			{presetStyle === "preset-2" && (
				<PanelBody
					title={__("Overlay Dots", "frontis-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Dots", "frontis-blocks")}
						checked={showDots}
						onChange={(val) => setAttributes({ showDots: val })}
						__nextHasNoMarginBottom
					/>
					{showDots && (
						<>
							<ColorControl
								label={__("Dot Color", "frontis-blocks")}
								value={dotColor}
								onChange={(val) => setAttributes({ dotColor: val })}
							/>
							<RangeControl
								label={__("Dot Size (px)", "frontis-blocks")}
								value={dotSize}
								onChange={(val) => setAttributes({ dotSize: val })}
								min={4}
								max={40}
								__nextHasNoMarginBottom
							/>
						</>
					)}
				</PanelBody>
			)}

			{/* Overlay */}
			<PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
				<ColorControl
					label={__("Overlay Color", "frontis-blocks")}
					value={overlayColor}
					onChange={(val) => setAttributes({ overlayColor: val })}
				/>
				<ColorControl
					label={__("Overlay Hover Color", "frontis-blocks")}
					value={overlayHoverColor}
					onChange={(val) => setAttributes({ overlayHoverColor: val })}
				/>
			</PanelBody>

			{/* Item Number — Preset 2 & 4 */}
			{(presetStyle === "preset-2" || presetStyle === "preset-4") && (
				<PanelBody
					title={__("Item Number", "frontis-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Number", "frontis-blocks")}
						checked={showNumber}
						onChange={(val) => setAttributes({ showNumber: val })}
						__nextHasNoMarginBottom
					/>
					{showNumber && (
						<>
							<ColorControl
								label={__("Number Color", "frontis-blocks")}
								value={numberColor}
								onChange={(val) => setAttributes({ numberColor: val })}
							/>
							<RangeControl
								label={__("Number Font Size (px)", "frontis-blocks")}
								value={numberFontSize}
								onChange={(val) => setAttributes({ numberFontSize: val })}
								min={10}
								max={36}
								__nextHasNoMarginBottom
							/>
						</>
					)}
				</PanelBody>
			)}

			{/* Typography */}
			<PanelBody title={__("Typography", "frontis-blocks")} initialOpen={false}>
				<ColorControl
					label={__("Title Color", "frontis-blocks")}
					value={attributes.titleColor}
					onChange={(val) => setAttributes({ titleColor: val })}
				/>
				<RangeControl
					label={__("Title Font Size (px)", "frontis-blocks")}
					value={attributes.titleFontSize}
					onChange={(val) => setAttributes({ titleFontSize: val })}
					min={10}
					max={60}
					__nextHasNoMarginBottom
				/>
				<SelectControl
					label={__("Title Font Weight", "frontis-blocks")}
					value={attributes.titleFontWeight}
					options={[
						{ label: "300 — Light", value: "300" },
						{ label: "400 — Normal", value: "400" },
						{ label: "500 — Medium", value: "500" },
						{ label: "600 — Semi Bold", value: "600" },
						{ label: "700 — Bold", value: "700" },
						{ label: "800 — Extra Bold", value: "800" },
					]}
					onChange={(val) => setAttributes({ titleFontWeight: val })}
					__nextHasNoMarginBottom
				/>
				<SelectControl
					label={__("Title Font Family", "frontis-blocks")}
					value={attributes.titleFontFamily || "inherit"}
					options={[
						{ label: "Inherit", value: "inherit" },
						{ label: "Arial", value: "Arial, sans-serif" },
						{ label: "Georgia", value: "Georgia, serif" },
						{ label: "Times New Roman", value: "Times New Roman, serif" },
						{ label: "Courier New", value: "Courier New, monospace" },
						{ label: "Verdana", value: "Verdana, sans-serif" },
					]}
					onChange={(val) => setAttributes({ titleFontFamily: val })}
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={__("Title Letter Spacing (px)", "frontis-blocks")}
					value={attributes.titleLetterSpacing || 0}
					onChange={(val) => setAttributes({ titleLetterSpacing: val })}
					min={-2}
					max={5}
					step={0.1}
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={__("Title Line Height", "frontis-blocks")}
					value={attributes.titleLineHeight || 1.2}
					onChange={(val) => setAttributes({ titleLineHeight: val })}
					min={1}
					max={3}
					step={0.1}
					__nextHasNoMarginBottom
				/>
				<SelectControl
					label={__("Title Text Align", "frontis-blocks")}
					value={attributes.titleTextAlign || "left"}
					options={[
						{ label: "Left", value: "left" },
						{ label: "Center", value: "center" },
						{ label: "Right", value: "right" },
					]}
					onChange={(val) => setAttributes({ titleTextAlign: val })}
					__nextHasNoMarginBottom
				/>
				<Divider />
				<ColorControl
					label={__("Subtitle Color", "frontis-blocks")}
					value={attributes.subtitleColor}
					onChange={(val) => setAttributes({ subtitleColor: val })}
				/>
				<RangeControl
					label={__("Subtitle Font Size (px)", "frontis-blocks")}
					value={attributes.subtitleFontSize}
					onChange={(val) => setAttributes({ subtitleFontSize: val })}
					min={10}
					max={40}
					__nextHasNoMarginBottom
				/>
				<SelectControl
					label={__("Subtitle Font Family", "frontis-blocks")}
					value={attributes.subtitleFontFamily || "inherit"}
					options={[
						{ label: "Inherit", value: "inherit" },
						{ label: "Arial", value: "Arial, sans-serif" },
						{ label: "Georgia", value: "Georgia, serif" },
						{ label: "Times New Roman", value: "Times New Roman, serif" },
						{ label: "Courier New", value: "Courier New, monospace" },
						{ label: "Verdana", value: "Verdana, sans-serif" },
					]}
					onChange={(val) => setAttributes({ subtitleFontFamily: val })}
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={__("Subtitle Letter Spacing (px)", "frontis-blocks")}
					value={attributes.subtitleLetterSpacing || 0}
					onChange={(val) => setAttributes({ subtitleLetterSpacing: val })}
					min={-2}
					max={5}
					step={0.1}
					__nextHasNoMarginBottom
				/>
				<RangeControl
					label={__("Subtitle Line Height", "frontis-blocks")}
					value={attributes.subtitleLineHeight || 1.3}
					onChange={(val) => setAttributes({ subtitleLineHeight: val })}
					min={1}
					max={3}
					step={0.1}
					__nextHasNoMarginBottom
				/>
			</PanelBody>

			{/* Advanced Spacing */}
			<PanelBody
				title={__("Advanced Spacing", "frontis-blocks")}
				initialOpen={false}
			>
				{presetStyle === "preset-1" && (
					<>
						<RangeControl
							label={__("Content Position X (px)", "frontis-blocks")}
							value={attributes.contentPositionX || 18}
							onChange={(val) => setAttributes({ contentPositionX: val })}
							min={0}
							max={50}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Content Position Y (px)", "frontis-blocks")}
							value={attributes.contentPositionY || 22}
							onChange={(val) => setAttributes({ contentPositionY: val })}
							min={0}
							max={50}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Icon-Text Gap (px)", "frontis-blocks")}
							value={attributes.contentGap || 12}
							onChange={(val) => setAttributes({ contentGap: val })}
							min={0}
							max={30}
							__nextHasNoMarginBottom
						/>
					</>
				)}
				{presetStyle === "preset-2" && (
					<>
						<RangeControl
							label={__("Content Padding (px)", "frontis-blocks")}
							value={attributes.preset2ContentPadding || 22}
							onChange={(val) => setAttributes({ preset2ContentPadding: val })}
							min={0}
							max={60}
							__nextHasNoMarginBottom
						/>
						<SelectControl
							label={__("Content Align", "frontis-blocks")}
							value={attributes.preset2ContentAlign || "center"}
							options={[
								{ label: "Left", value: "left" },
								{ label: "Center", value: "center" },
								{ label: "Right", value: "right" },
							]}
							onChange={(val) => setAttributes({ preset2ContentAlign: val })}
							__nextHasNoMarginBottom
						/>
					</>
				)}
				{presetStyle === "preset-3" && (
					<>
						<RangeControl
							label={__("Content Padding X (px)", "frontis-blocks")}
							value={attributes.preset3ContentPaddingX || 22}
							onChange={(val) => setAttributes({ preset3ContentPaddingX: val })}
							min={0}
							max={60}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Content Padding Y (px)", "frontis-blocks")}
							value={attributes.preset3ContentPaddingY || 18}
							onChange={(val) => setAttributes({ preset3ContentPaddingY: val })}
							min={0}
							max={60}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Content Gap (px)", "frontis-blocks")}
							value={attributes.preset3ContentGap || 16}
							onChange={(val) => setAttributes({ preset3ContentGap: val })}
							min={0}
							max={40}
							__nextHasNoMarginBottom
						/>
					</>
				)}
				{presetStyle === "preset-4" && (
					<>
						<RangeControl
							label={__("Content Padding (px)", "frontis-blocks")}
							value={attributes.preset4ContentPadding || 12}
							onChange={(val) => setAttributes({ preset4ContentPadding: val })}
							min={0}
							max={40}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Content Gap (px)", "frontis-blocks")}
							value={attributes.preset4ContentGap || 4}
							onChange={(val) => setAttributes({ preset4ContentGap: val })}
							min={0}
							max={20}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Skew Angle (°)", "frontis-blocks")}
							value={attributes.preset4SkewAngle || 12}
							onChange={(val) => setAttributes({ preset4SkewAngle: val })}
							min={0}
							max={30}
							__nextHasNoMarginBottom
						/>
					</>
				)}
				<RangeControl
					label={__("Items Gap (px)", "frontis-blocks")}
					value={attributes.itemsGap}
					onChange={(val) => setAttributes({ itemsGap: val })}
					min={0}
					max={50}
					__nextHasNoMarginBottom
				/>
			</PanelBody>

			{/* Animation */}
			<PanelBody title={__("Animation", "frontis-blocks")} initialOpen={false}>
				<RangeControl
					label={__("Transition Duration (s)", "frontis-blocks")}
					value={attributes.transitionDuration || 0.6}
					onChange={(val) => setAttributes({ transitionDuration: val })}
					min={0.1}
					max={2}
					step={0.1}
					__nextHasNoMarginBottom
				/>
				<SelectControl
					label={__("Transition Timing", "frontis-blocks")}
					value={attributes.transitionTiming || "cubic-bezier(0.25,1,0.5,1)"}
					options={[
						{ label: "Ease", value: "ease" },
						{ label: "Linear", value: "linear" },
						{ label: "Ease In", value: "ease-in" },
						{ label: "Ease Out", value: "ease-out" },
						{ label: "Ease In Out", value: "ease-in-out" },
						{ label: "Custom Cubic", value: "cubic-bezier(0.25,1,0.5,1)" },
					]}
					onChange={(val) => setAttributes({ transitionTiming: val })}
					__nextHasNoMarginBottom
				/>
			</PanelBody>

			{/* Shadow & Effects */}
			<PanelBody
				title={__("Shadow & Effects", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Item Shadow", "frontis-blocks")}
					value={attributes.itemShadow || "none"}
					options={[
						{ label: "None", value: "none" },
						{ label: "Light", value: "light" },
						{ label: "Medium", value: "medium" },
						{ label: "Heavy", value: "heavy" },
						{ label: "Custom", value: "custom" },
					]}
					onChange={(val) => setAttributes({ itemShadow: val })}
					__nextHasNoMarginBottom
				/>
				{attributes.itemShadow === "custom" && (
					<>
						<ColorControl
							label={__("Shadow Color", "frontis-blocks")}
							value={attributes.itemShadowColor || "rgba(0,0,0,0.1)"}
							onChange={(val) => setAttributes({ itemShadowColor: val })}
						/>
						<RangeControl
							label={__("Shadow Blur (px)", "frontis-blocks")}
							value={attributes.itemShadowBlur || 0}
							onChange={(val) => setAttributes({ itemShadowBlur: val })}
							min={0}
							max={30}
							__nextHasNoMarginBottom
						/>
						<RangeControl
							label={__("Shadow Spread (px)", "frontis-blocks")}
							value={attributes.itemShadowSpread || 0}
							onChange={(val) => setAttributes({ itemShadowSpread: val })}
							min={0}
							max={20}
							__nextHasNoMarginBottom
						/>
					</>
				)}
				<ColorControl
					label={__("Overlay Color", "frontis-blocks")}
					value={attributes.overlayColor}
					onChange={(val) => setAttributes({ overlayColor: val })}
				/>
				<ColorControl
					label={__("Overlay Hover Color", "frontis-blocks")}
					value={attributes.overlayHoverColor || "rgba(0,0,0,0.25)"}
					onChange={(val) => setAttributes({ overlayHoverColor: val })}
				/>
			</PanelBody>
		</>
	);
};

/* 
   MAIN INSPECTOR - Tab UI built manually
*/
const Inspector = ({ attributes, setAttributes }) => {
	const [activeTab, setActiveTab] = useState("content");

	const tabs = [
		{ id: "content", label: __("Content", "frontis-blocks") },
		{ id: "style", label: __("Style", "frontis-blocks") },
		{ id: "advanced", label: __("Advanced", "frontis-blocks") },
	];

	return (
		<InspectorControls>
			{/* Tab switcher */}
			<div
				style={{
					display: "flex",
					borderBottom: "1px solid #e0e0e0",
					background: "#fff",
					position: "sticky",
					top: 0,
					zIndex: 10,
				}}
			>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						type="button"
						onClick={() => setActiveTab(tab.id)}
						style={{
							flex: 1,
							padding: "10px 0",
							background: "none",
							border: "none",
							borderBottom:
								activeTab === tab.id
									? "2px solid #0875ff"
									: "2px solid transparent",
							color: activeTab === tab.id ? "#0875ff" : "#555",
							fontWeight: activeTab === tab.id ? 600 : 400,
							fontSize: 13,
							cursor: "pointer",
							transition: "all 0.15s ease",
						}}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Tab content */}
			{activeTab === "content" && (
				<ContentPanel attributes={attributes} setAttributes={setAttributes} />
			)}
			{activeTab === "style" && (
				<StylePanels attributes={attributes} setAttributes={setAttributes} />
			)}
			{activeTab === "advanced" && (
				<AdvancedPanel attributes={attributes} setAttributes={setAttributes} />
			)}
		</InspectorControls>
	);
};

export default Inspector;
