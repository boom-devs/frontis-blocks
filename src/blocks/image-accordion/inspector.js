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
import { Dashicon } from "@wordpress/components";

/**
 * Internal component for managing a single accordion item's data.
 */
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
		<div className="fb-accordion-item-editor">
			<div
				className="fb-accordion-item-header"
				onClick={() => setOpen((v) => !v)}
			>
				<span className="fb-accordion-item-title">
					<Dashicon icon={open ? "arrow-down-alt2" : "arrow-right-alt2"} />
					{item.title || __("(no title)", "frontis-blocks")}
				</span>
				<div
					className="fb-accordion-item-actions"
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
									<div className="fb-accordion-media-preview">
										{item.imageUrl ? (
											<>
												<img src={item.imageUrl} alt="" />
												<Button isSmall variant="secondary" onClick={openMedia}>
													{__("Replace Image", "frontis-blocks")}
												</Button>
											</>
										) : (
											<Button variant="secondary" onClick={openMedia}>
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

					<Divider />
					<SelectControl
						label={__("Icon Source", "frontis-blocks")}
						value={item.mediaType || "icon"}
						options={[
							{ label: __("Icon", "frontis-blocks"), value: "icon" },
							{ label: __("Image", "frontis-blocks"), value: "image" },
						]}
						onChange={(val) => update("mediaType", val)}
						__next40pxDefaultSize
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
										<Button variant="secondary" onClick={openIcon}>
											{item.iconImageUrl
												? __("Replace Icon Image", "frontis-blocks")
												: __("Select Icon Image", "frontis-blocks")}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</BaseControl>
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

const ContentPanel = ({ attributes, setAttributes }) => {
	const { presetStyle, triggerOn, accordionItems } = attributes;

	const updateItem = (index, updated) => {
		const next = Array.from(accordionItems);
		next[index] = updated;
		setAttributes({ accordionItems: next });
	};
	const removeItem = (index) =>
		setAttributes({
			accordionItems: accordionItems.filter((_, i) => i !== index),
		});
	const duplicateItem = (index) => {
		const copy = JSON.parse(JSON.stringify(accordionItems[index]));
		copy.id = (Date.now() + Math.random()).toString();
		const next = Array.from(accordionItems);
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
					imageUrl: "https://placehold.co/1920x1080?text=New+Item",
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
		<PanelBody
			title={__("General Settings", "frontis-blocks")}
			initialOpen={true}
		>
			<FB_Preset
				label={__("Accordion Type", "frontis-blocks")}
				presets={[
					{
						label: "Preset 1",
						value: "preset-1",
						icon: '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="10" height="44" rx="2" fill="#D1D5DB"/><rect x="18" y="4" width="30" height="44" rx="2" fill="#2563EB"/><circle cx="9" cy="40" r="3" fill="white"/></svg>',
					},
					{
						label: "Preset 2",
						value: "preset-2",
						icon: '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="10" height="44" fill="#D1D5DB"/><rect x="16" y="4" width="32" height="44" fill="#2563EB"/><circle cx="9" cy="40" r="3" fill="white"/><circle cx="22" cy="10" r="2" fill="white"/></svg>',
					},
					{
						label: "Preset 3",
						value: "preset-3",
						icon: '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="10" height="44" rx="2" fill="#D1D5DB"/><rect x="18" y="4" width="30" height="44" rx="2" fill="#2563EB"/><circle cx="24" cy="40" r="3" fill="white"/><rect x="40" y="38" width="6" height="4" rx="1" fill="white"/></svg>',
					},
					{
						label: "Preset 4",
						value: "preset-4",
						icon: '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4L4 48H14L20 4H10Z" fill="#D1D5DB"/><path d="M22 4L16 48H48L54 4H22Z" fill="#2563EB"/></svg>',
					},
				]}
				presetValue={presetStyle}
				onChangeHandler={(val) => setAttributes({ presetStyle: val })}
			/>

			<Divider />

			<p className="fb-inspector-section-label">
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
				className="fb-add-item-button"
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
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</PanelBody>
	);
};

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
					__next40pxDefaultSize
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
					__next40pxDefaultSize
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
