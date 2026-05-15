import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
	BaseControl,
	__experimentalDivider as Divider,
} from "@wordpress/components";
import { useState, memo } from "@wordpress/element";
import FB_ColorControl from "@Components/color-control";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_Preset from "@Components/presets";
import { useDeviceType } from "@Config/displayType";

/*  Single item editor  */
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
									onChange(index, {
										...item,
										imageUrl: media.url,
										imageId: media.id,
									});
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
												{__("Select Image", "frontis-blocks")}
											</Button>
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
					</BaseControl>

					<FB_InputControl
						label={__("Title", "frontis-blocks")}
						helpText={__("All presets — main heading.", "frontis-blocks")}
						value={item.title}
						onChangeValue={(val) => update("title", val)}
					/>

					<FB_InputControl
						label={__("Sub Title", "frontis-blocks")}
						helpText={__(
							"All presets — secondary line below title.",
							"frontis-blocks",
						)}
						value={item.subTitle}
						onChangeValue={(val) => update("subTitle", val)}
					/>

					{preset === "preset-1" && (
						<>
							<Divider />
							<SelectControl
								label={__("Icon Source", "frontis-blocks")}
								value={item.mediaType || "icon"}
								options={[
									{ label: __("Icon", "frontis-blocks"), value: "icon" },
									{ label: __("Image", "frontis-blocks"), value: "image" },
								]}
								onChange={(val) => update("mediaType", val)}
								__nextHasNoMarginBottom
							/>
							{(item.mediaType || "icon") === "icon" && (
								<FB_InputControl
									label={__("Choose Icon", "frontis-blocks")}
									helpText="e.g. fas fa-star"
									value={item.iconValue || "fas fa-star"}
									onChangeValue={(val) => update("iconValue", val)}
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
											value={item.iconImageUrl}
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
						</>
					)}

					{preset === "preset-3" && (
						<>
							<Divider />
							<FB_InputControl
								label={__("Button Text", "frontis-blocks")}
								value={item.buttonText || "Read More"}
								onChangeValue={(val) => update("buttonText", val)}
							/>
							<FB_InputControl
								label={__("Button Link", "frontis-blocks")}
								value={item.buttonUrl || "#"}
								onChangeValue={(val) => update("buttonUrl", val)}
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

/* 
   CONTENT PANEL
 */

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
					subTitle: "discover unique",
					// Note: Consider using a plugin-specific URL for local assets here
					imageUrl: "https://via.placeholder.com/1920x1080.png?text=New+Image",
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
			<FB_Preset
				label={__("Accordion Type", "frontis-blocks")}
				presets={[
					{ label: "Preset 1", value: "preset-1" },
					{ label: "Preset 2", value: "preset-2" },
					{ label: "Preset 3", value: "preset-3" },
					{ label: "Preset 4", value: "preset-4" },
				]}
				presetValue={presetStyle}
				onChangeHandler={(val) => setAttributes({ presetStyle: val })}
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

/* 
   STYLE PANELS
 */
const StylePanels = ({ attributes, setAttributes, deviceType }) => {
	const {
		presetStyle,
		containerHeight = {},
		itemsGap = {},
		itemBorderRadius = {},
		itemBorderType,
		itemBorderColor,
		itemPaddingUnits = { Desktop: "px", Tablet: "px", Mobile: "px" },
		itemPaddingDesktop = { top: "", right: "", bottom: "", left: "" },
		itemPaddingTablet = { top: "", right: "", bottom: "", left: "" },
		itemPaddingMobile = { top: "", right: "", bottom: "", left: "" },
		itemMarginUnits = { Desktop: "px", Tablet: "px", Mobile: "px" },
		itemMarginDesktop = { top: "", right: "", bottom: "", left: "" },
		itemMarginTablet = { top: "", right: "", bottom: "", left: "" },
		itemMarginMobile = { top: "", right: "", bottom: "", left: "" },
		overlayColor,
		overlayHoverColor,
		iconColor,
		iconBgColor,
		iconSize = {},
		iconCircleSize = {},
		showDots,
		dotColor,
		dotSize = {},
		showNumber,
		numberColor,
		numberFontSize = {},
		titleColor,
		titleFontSize = {},
		titleFontWeight,
		subtitleColor,
		subtitleFontSize = {},
		btnTextColor,
		btnBgColor,
		btnBorderColor,
		btnBorderRadius = {},
		btnFontSize = {},
		btnPaddingY = {},
		btnPaddingX = {},
	} = attributes;

	return (
		<>
			{/* General */}
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					label={__("Height (px)", "frontis-blocks")}
					rangeValue={containerHeight}
					onChangeHandler={(val) => setAttributes({ containerHeight: val })}
					min={200}
					max={900}
					step={10}
					deviceType={deviceType}
					resetFallbackValue={500}
					setAttributes={setAttributes}
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

				<FB_Range
					label={__("Border Radius (px)", "frontis-blocks")}
					rangeValue={itemBorderRadius}
					onChangeHandler={(val) => setAttributes({ itemBorderRadius: val })}
					min={0}
					max={100}
					deviceType={deviceType}
					resetFallbackValue={50}
					setAttributes={setAttributes}
				/>

				{itemBorderType &&
					itemBorderType !== "none" &&
					itemBorderType !== "Default" && (
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={itemBorderColor}
							setGlobalColor={(val) => setAttributes({ itemBorderColor: val })}
						/>
					)}

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={(val) =>
						setAttributes({ itemPaddingUnits: val })
					}
					spacingUnits={itemPaddingUnits}
					spacingDesktop={itemPaddingDesktop}
					spacingTablet={itemPaddingTablet}
					spacingMobile={itemPaddingMobile}
					handleSpacingUnitHandler={(e, pos) => {
						const val = e.target.value;
						if (attributes.itemPaddingLink) {
							setAttributes({
								[`itemPadding${deviceType}`]: {
									top: val,
									right: val,
									bottom: val,
									left: val,
								},
							});
						} else {
							setAttributes({
								[`itemPadding${deviceType}`]: {
									...(attributes[`itemPadding${deviceType}`] || {}),
									[pos]: val,
								},
							});
						}
					}}
					spacingCombineBtn={attributes.itemPaddingLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ itemPaddingLink: !attributes.itemPaddingLink })
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={(val) => setAttributes({ itemMarginUnits: val })}
					spacingUnits={itemMarginUnits}
					spacingDesktop={itemMarginDesktop}
					spacingTablet={itemMarginTablet}
					spacingMobile={itemMarginMobile}
					handleSpacingUnitHandler={(e, pos) => {
						const val = e.target.value;
						if (attributes.itemMarginLink) {
							setAttributes({
								[`itemMargin${deviceType}`]: {
									top: val,
									right: val,
									bottom: val,
									left: val,
								},
							});
						} else {
							setAttributes({
								[`itemMargin${deviceType}`]: {
									...(attributes[`itemMargin${deviceType}`] || {}),
									[pos]: val,
								},
							});
						}
					}}
					spacingCombineBtn={attributes.itemMarginLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ itemMarginLink: !attributes.itemMarginLink })
					}
					setAttributes={setAttributes}
				/>

				<FB_Range
					label={__("Gap", "frontis-blocks")}
					rangeValue={itemsGap}
					onChangeHandler={(val) => setAttributes({ itemsGap: val })}
					min={0}
					max={60}
					deviceType={deviceType}
					resetFallbackValue={12}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			{/* Icon — Preset 1 */}
			{presetStyle === "preset-1" && (
				<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
					<FB_ColorControl
						label={__("Icon Color", "frontis-blocks")}
						globalColor={iconColor}
						setGlobalColor={(val) => setAttributes({ iconColor: val })}
					/>
					<FB_ColorControl
						label={__("Icon Background Color", "frontis-blocks")}
						globalColor={iconBgColor}
						setGlobalColor={(val) => setAttributes({ iconBgColor: val })}
					/>
					<FB_Range
						label={__("Icon Size (px)", "frontis-blocks")}
						rangeValue={iconSize}
						onChangeHandler={(val) => setAttributes({ iconSize: val })}
						min={10}
						max={60}
						deviceType={deviceType}
						resetFallbackValue={18}
					/>
					<FB_Range
						label={__("Circle Size (px)", "frontis-blocks")}
						rangeValue={iconCircleSize}
						onChangeHandler={(val) => setAttributes({ iconCircleSize: val })}
						min={24}
						max={100}
						deviceType={deviceType}
						resetFallbackValue={44}
					/>
				</PanelBody>
			)}

			{/* Overlay Dots — Preset 2 */}
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
							<FB_ColorControl
								label={__("Dot Color", "frontis-blocks")}
								globalColor={dotColor}
								setGlobalColor={(val) => setAttributes({ dotColor: val })}
							/>
							<FB_Range
								label={__("Dot Size (px)", "frontis-blocks")}
								rangeValue={dotSize}
								onChangeHandler={(val) => setAttributes({ dotSize: val })}
								min={4}
								max={40}
								deviceType={deviceType}
								resetFallbackValue={12}
							/>
						</>
					)}
				</PanelBody>
			)}

			{/* Overlay */}
			<PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Overlay Color", "frontis-blocks")}
					globalColor={overlayColor}
					setGlobalColor={(val) => setAttributes({ overlayColor: val })}
				/>
				<FB_ColorControl
					label={__("Overlay Hover Color", "frontis-blocks")}
					globalColor={overlayHoverColor}
					setGlobalColor={(val) => setAttributes({ overlayHoverColor: val })}
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
							<FB_ColorControl
								label={__("Number Color", "frontis-blocks")}
								globalColor={numberColor}
								setGlobalColor={(val) => setAttributes({ numberColor: val })}
							/>
							<FB_Range
								label={__("Number Font Size (px)", "frontis-blocks")}
								rangeValue={numberFontSize}
								onChangeHandler={(val) =>
									setAttributes({ numberFontSize: val })
								}
								min={10}
								max={36}
								deviceType={deviceType}
								resetFallbackValue={13}
							/>
						</>
					)}
				</PanelBody>
			)}

			{/* Typography */}
			<PanelBody title={__("Typography", "frontis-blocks")} initialOpen={false}>
				<FB_ColorControl
					label={__("Title Color", "frontis-blocks")}
					globalColor={titleColor}
					setGlobalColor={(val) => setAttributes({ titleColor: val })}
				/>
				<FB_Range
					label={__("Title Font Size (px)", "frontis-blocks")}
					rangeValue={titleFontSize}
					onChangeHandler={(val) => setAttributes({ titleFontSize: val })}
					min={10}
					max={60}
					deviceType={deviceType}
					resetFallbackValue={18}
				/>
				<SelectControl
					label={__("Title Font Weight", "frontis-blocks")}
					value={titleFontWeight}
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
				<Divider />
				<FB_ColorControl
					label={__("Subtitle Color", "frontis-blocks")}
					globalColor={subtitleColor}
					setGlobalColor={(val) => setAttributes({ subtitleColor: val })}
				/>
				<FB_Range
					label={__("Subtitle Font Size (px)", "frontis-blocks")}
					rangeValue={subtitleFontSize}
					onChangeHandler={(val) => setAttributes({ subtitleFontSize: val })}
					min={10}
					max={40}
					deviceType={deviceType}
					resetFallbackValue={13}
				/>
			</PanelBody>

			{/* Button — Preset 3 */}
			{presetStyle === "preset-3" && (
				<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
					<FB_ColorControl
						label={__("Text Color", "frontis-blocks")}
						globalColor={btnTextColor}
						setGlobalColor={(val) => setAttributes({ btnTextColor: val })}
					/>
					<FB_ColorControl
						label={__("Background Color", "frontis-blocks")}
						globalColor={btnBgColor}
						setGlobalColor={(val) => setAttributes({ btnBgColor: val })}
					/>
					<FB_ColorControl
						label={__("Border Color", "frontis-blocks")}
						globalColor={btnBorderColor}
						setGlobalColor={(val) => setAttributes({ btnBorderColor: val })}
					/>
					<FB_Range
						label={__("Border Radius (px)", "frontis-blocks")}
						rangeValue={btnBorderRadius}
						onChangeHandler={(val) => setAttributes({ btnBorderRadius: val })}
						min={0}
						max={50}
						deviceType={deviceType}
						resetFallbackValue={6}
					/>
					<FB_Range
						label={__("Font Size (px)", "frontis-blocks")}
						rangeValue={btnFontSize}
						onChangeHandler={(val) => setAttributes({ btnFontSize: val })}
						min={10}
						max={30}
						deviceType={deviceType}
						resetFallbackValue={13}
					/>
					<FB_Range
						label={__("Padding Top/Bottom (px)", "frontis-blocks")}
						rangeValue={btnPaddingY}
						onChangeHandler={(val) => setAttributes({ btnPaddingY: val })}
						min={0}
						max={40}
						deviceType={deviceType}
						resetFallbackValue={8}
					/>
					<FB_Range
						label={__("Padding Left/Right (px)", "frontis-blocks")}
						rangeValue={btnPaddingX}
						onChangeHandler={(val) => setAttributes({ btnPaddingX: val })}
						min={0}
						max={60}
						deviceType={deviceType}
						resetFallbackValue={18}
					/>
				</PanelBody>
			)}
		</>
	);
};

/* ══════════════════════════════════════════
   MAIN INSPECTOR — Tab UI built manually
   (compatible with all wp-scripts versions)
══════════════════════════════════════════ */
const Inspector = ({ attributes, setAttributes }) => {
	const deviceType = useDeviceType();

	const extraControls = (
		<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
			<FB_CustomCSSEditor
				value={attributes.itemCustomCSS}
				onChangeValue={(val) => setAttributes({ itemCustomCSS: val })}
			/>
		</PanelBody>
	);

	return (
		<FB_InspectorControls
			generalControls={
				<ContentPanel attributes={attributes} setAttributes={setAttributes} />
			}
			styleControls={
				<StylePanels
					attributes={attributes}
					setAttributes={setAttributes}
					deviceType={deviceType}
				/>
			}
			advancedControls={extraControls}
		/>
	);
};

export default memo(Inspector);
