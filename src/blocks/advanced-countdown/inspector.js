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
	__experimentalDivider as Divider,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

/* Color picker */
const CC = ({ label, value, onChange }) => {
	const [open, setOpen] = useState(false);
	return (
		<BaseControl label={label} __nextHasNoMarginBottom>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					marginTop: 4,
					marginBottom: 8,
				}}
			>
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					style={{
						width: 32,
						height: 32,
						borderRadius: 4,
						border: "2px solid #ddd",
						background: value || "transparent",
						cursor: "pointer",
						flexShrink: 0,
						boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
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

/* 4-side spacing */
const SC = ({ label, value, onChange }) => (
	<BaseControl label={label} __nextHasNoMarginBottom>
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr 1fr 1fr",
				gap: 4,
				marginTop: 4,
				marginBottom: 8,
			}}
		>
			{["Top", "Right", "Bottom", "Left"].map((s) => (
				<div key={s}>
					<input
						type="number"
						min={0}
						value={value[s.toLowerCase()] || 0}
						onChange={(e) =>
							onChange({
								...value,
								[s.toLowerCase()]: parseInt(e.target.value) || 0,
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
					/>
					<div
						style={{
							textAlign: "center",
							fontSize: 10,
							color: "#757575",
							marginTop: 2,
						}}
					>
						{s[0]}
					</div>
				</div>
			))}
		</div>
	</BaseControl>
);

const FW = [
	{ label: "300 — Light", value: "300" },
	{ label: "400 — Normal", value: "400" },
	{ label: "500 — Medium", value: "500" },
	{ label: "600 — Semi Bold", value: "600" },
	{ label: "700 — Bold", value: "700" },
	{ label: "800 — Extra Bold", value: "800" },
];

const Inspector = ({ attributes, setAttributes }) => {
	const [tab, setTab] = useState("content");
	const s = (k, v) => setAttributes({ [k]: v });
	const { presetStyle } = attributes;

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
				{[
					["content", "Content"],
					["style", "Style"],
				].map(([id, lbl]) => (
					<button
						key={id}
						type="button"
						onClick={() => setTab(id)}
						style={{
							flex: 1,
							padding: "10px 0",
							background: "none",
							border: "none",
							borderBottom:
								tab === id ? "2px solid #0875ff" : "2px solid transparent",
							color: tab === id ? "#0875ff" : "#555",
							fontWeight: tab === id ? 600 : 400,
							fontSize: 13,
							cursor: "pointer",
						}}
					>
						{lbl}
					</button>
				))}
			</div>

			{/* CONTENT */}
			{tab === "content" && (
				<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
					<SelectControl
						label={__("Layout Style", "frontis-blocks")}
						value={attributes.presetStyle}
						options={[
							{ label: "Preset 1 — SVG Circle", value: "preset-1" },
							{ label: "Preset 2 — Dashed Circle", value: "preset-2" },
							{ label: "Preset 3 — Timeline Bar", value: "preset-3" },
							{ label: "Preset 4 — Flip Tiles", value: "preset-4" },
							{ label: "Preset 5 — Dot Rings", value: "preset-5" },
						]}
						onChange={(v) => s("presetStyle", v)}
						__nextHasNoMarginBottom
					/>

					<BaseControl
						label={__("Due Date & Time", "frontis-blocks")}
						__nextHasNoMarginBottom
					>
						<input
							type="datetime-local"
							value={attributes.dueDateTime}
							onChange={(e) => s("dueDateTime", e.target.value)}
							style={{
								width: "100%",
								padding: "6px 8px",
								border: "1px solid #ccc",
								borderRadius: 4,
								fontSize: 13,
								marginTop: 4,
								marginBottom: 8,
							}}
						/>
					</BaseControl>

					<BaseControl
						label={__("Start Date & Time", "frontis-blocks")}
						__nextHasNoMarginBottom
					>
						<input
							type="datetime-local"
							value={attributes.startDateTime}
							onChange={(e) => s("startDateTime", e.target.value)}
							style={{
								width: "100%",
								padding: "6px 8px",
								border: "1px solid #ccc",
								borderRadius: 4,
								fontSize: 13,
								marginTop: 4,
								marginBottom: 8,
							}}
						/>
					</BaseControl>

					{(presetStyle === "preset-1" || presetStyle === "preset-2") && (
						<>
							<TextControl
								label={__("Footer Text", "frontis-blocks")}
								value={attributes.footerText}
								onChange={(v) => s("footerText", v)}
								__nextHasNoMarginBottom
							/>

							{presetStyle === "preset-1" && (
								<>
									<ToggleControl
										label={__("Show Icon", "frontis-blocks")}
										checked={attributes.showIcon}
										onChange={(v) => s("showIcon", v)}
										__nextHasNoMarginBottom
									/>
									{attributes.showIcon && (
										<BaseControl
											label={__("Icon", "frontis-blocks")}
											__nextHasNoMarginBottom
										>
											<MediaUploadCheck>
												<MediaUpload
													onSelect={(media) => {
														s("iconUrl", media.url);
														s("iconId", media.id);
													}}
													allowedTypes={["image"]}
													value={attributes.iconId}
													render={({ open }) => (
														<div style={{ marginTop: 6, marginBottom: 8 }}>
															{attributes.iconUrl ? (
																<>
																	<img
																		src={attributes.iconUrl}
																		alt=""
																		style={{
																			width: "100%",
																			height: 80,
																			objectFit: "contain",
																			background: "#2a2a2a",
																			borderRadius: 4,
																			display: "block",
																			marginBottom: 6,
																		}}
																	/>
																	<Button
																		isSmall
																		variant="secondary"
																		onClick={open}
																		style={{ width: "100%" }}
																	>
																		{__("Replace Icon", "frontis-blocks")}
																	</Button>
																</>
															) : (
																<Button
																	variant="secondary"
																	onClick={open}
																	style={{ width: "100%" }}
																>
																	{__("Select Icon", "frontis-blocks")}
																</Button>
															)}
														</div>
													)}
												/>
											</MediaUploadCheck>
										</BaseControl>
									)}
								</>
							)}
						</>
					)}
				</PanelBody>
			)}

			{/*  STYLE  */}
			{tab === "style" && (
				<>
					{/* Container */}
					<PanelBody
						title={__("Container", "frontis-blocks")}
						initialOpen={true}
					>
						{presetStyle === "preset-1" && (
							<>
								<RangeControl
									label={__("Size", "frontis-blocks")}
									value={attributes.containerSize}
									onChange={(v) => s("containerSize", v)}
									defaultValue={100}
									min={10}
									max={100}
									__nextHasNoMarginBottom
								/>
								<RangeControl
									label={__("Progress Bar Size", "frontis-blocks")}
									value={attributes.progressBarSize}
									onChange={(v) => s("progressBarSize", v)}
									min={200}
									max={800}
									step={4}
									__nextHasNoMarginBottom
								/>
							</>
						)}

						<p
							style={{
								fontSize: 11,
								fontWeight: 600,
								margin: "8px 0 4px",
								color: "#1e1e1e",
							}}
						>
							{__("Background", "frontis-blocks")}
						</p>
						<CC
							label={__("Background Color", "frontis-blocks")}
							value={attributes.containerBgColor}
							onChange={(v) => s("containerBgColor", v)}
						/>

						<BaseControl
							label={__("Background Image", "frontis-blocks")}
							__nextHasNoMarginBottom
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(m) => {
										s("containerBgImage", m.url);
										s("containerBgImageId", m.id);
									}}
									allowedTypes={["image"]}
									value={attributes.containerBgImageId}
									render={({ open }) => (
										<div style={{ marginTop: 6, marginBottom: 8 }}>
											{attributes.containerBgImage ? (
												<>
													<img
														src={attributes.containerBgImage}
														alt=""
														style={{
															width: "100%",
															height: 60,
															objectFit: "cover",
															borderRadius: 4,
															display: "block",
															marginBottom: 6,
														}}
													/>
													<Button
														isSmall
														variant="secondary"
														onClick={open}
														style={{ width: "100%" }}
													>
														{__("Replace", "frontis-blocks")}
													</Button>
												</>
											) : (
												<Button
													variant="secondary"
													onClick={open}
													style={{ width: "100%" }}
												>
													{__("+ Set Image", "frontis-blocks")}
												</Button>
											)}
										</div>
									)}
								/>
							</MediaUploadCheck>
						</BaseControl>

						<SelectControl
							label={__("Border Type", "frontis-blocks")}
							value={attributes.containerBorderType}
							options={[
								{ label: "None", value: "none" },
								{ label: "Solid", value: "solid" },
								{ label: "Dashed", value: "dashed" },
								{ label: "Dotted", value: "dotted" },
							]}
							onChange={(v) => s("containerBorderType", v)}
							__nextHasNoMarginBottom
						/>
						{attributes.containerBorderType !== "none" && (
							<>
								<SC
									label={__("Border Width", "frontis-blocks")}
									value={attributes.containerBorderWidth}
									onChange={(v) => s("containerBorderWidth", v)}
								/>
								<CC
									label={__("Border Color", "frontis-blocks")}
									value={attributes.containerBorderColor}
									onChange={(v) => s("containerBorderColor", v)}
								/>
							</>
						)}
						<SC
							label={__("Border Radius (px)", "frontis-blocks")}
							value={attributes.containerBorderRadius}
							onChange={(v) => s("containerBorderRadius", v)}
						/>

						<BaseControl
							label={__("Alignment", "frontis-blocks")}
							__nextHasNoMarginBottom
						>
							<div
								style={{
									display: "flex",
									gap: 0,
									marginTop: 4,
									marginBottom: 8,
									border: "1px solid #ccc",
									borderRadius: 4,
									overflow: "hidden",
								}}
							>
								{["left", "center", "right"].map((a) => (
									<button
										key={a}
										type="button"
										onClick={() => s("containerAlignment", a)}
										style={{
											flex: 1,
											padding: "6px 0",
											background:
												attributes.containerAlignment === a
													? "#1e1e1e"
													: "#f0f0f1",
											color:
												attributes.containerAlignment === a ? "#fff" : "#333",
											border: "none",
											cursor: "pointer",
											fontSize: 12,
										}}
									>
										{a[0].toUpperCase() + a.slice(1)}
									</button>
								))}
							</div>
						</BaseControl>
						<SC
							label={__("Margin (px)", "frontis-blocks")}
							value={attributes.containerMargin}
							onChange={(v) => s("containerMargin", v)}
						/>
					</PanelBody>

					{/* Icon (Preset 1) */}
					{presetStyle === "preset-1" && (
						<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
							<RangeControl
								label={__("Icon Size (px)", "frontis-blocks")}
								value={attributes.iconSize}
								onChange={(v) => s("iconSize", v)}
								min={20}
								max={120}
								__nextHasNoMarginBottom
							/>
							<p style={{ fontSize: 11, fontWeight: 600, margin: "8px 0 4px" }}>
								{__("Color", "frontis-blocks")}
							</p>
							<CC
								label={__("Icon Color", "frontis-blocks")}
								value={attributes.iconColor}
								onChange={(v) => s("iconColor", v)}
							/>
							<CC
								label={__("Background Color", "frontis-blocks")}
								value={attributes.iconBgColor}
								onChange={(v) => s("iconBgColor", v)}
							/>
						</PanelBody>
					)}

					{/* Preset 2: Dashed Progress Bar */}
					{presetStyle === "preset-2" && (
						<PanelBody
							title={__("Dashed Progress Bar", "frontis-blocks")}
							initialOpen={false}
						>
							<RangeControl
								label={__("Circle Size (px)", "frontis-blocks")}
								value={attributes.p2CircleSize}
								onChange={(v) => s("p2CircleSize", v)}
								min={100}
								max={400}
								__nextHasNoMarginBottom
							/>
							<CC
								label={__("Active Color", "frontis-blocks")}
								value={attributes.p2DashActiveColor}
								onChange={(v) => s("p2DashActiveColor", v)}
							/>
							<CC
								label={__("Inactive Color", "frontis-blocks")}
								value={attributes.p2DashInactiveColor}
								onChange={(v) => s("p2DashInactiveColor", v)}
							/>
							<RangeControl
								label={__("Stroke Width (px)", "frontis-blocks")}
								value={attributes.p2DashStrokeWidth}
								onChange={(v) => s("p2DashStrokeWidth", v)}
								min={2}
								max={20}
								__nextHasNoMarginBottom
							/>
							<RangeControl
								label={__("Dash Gap (px)", "frontis-blocks")}
								value={attributes.p2DashGap}
								onChange={(v) => s("p2DashGap", v)}
								min={1}
								max={20}
								__nextHasNoMarginBottom
							/>
						</PanelBody>
					)}

					{/* Countdown Text  */}
					{(presetStyle === "preset-1" || presetStyle === "preset-2") && (
						<PanelBody
							title={__("Countdown Text", "frontis-blocks")}
							initialOpen={false}
						>
							<RangeControl
								label={__("Font Size (px)", "frontis-blocks")}
								value={attributes.countdownFontSize}
								onChange={(v) => s("countdownFontSize", v)}
								min={20}
								max={120}
								__nextHasNoMarginBottom
							/>
							<SelectControl
								label={__("Font Weight", "frontis-blocks")}
								value={attributes.countdownFontWeight}
								options={FW}
								onChange={(v) => s("countdownFontWeight", v)}
								__nextHasNoMarginBottom
							/>
							<CC
								label={__("Color", "frontis-blocks")}
								value={attributes.countdownColor}
								onChange={(v) => s("countdownColor", v)}
							/>
							<CC
								label={__("Label Color", "frontis-blocks")}
								value={attributes.labelColor}
								onChange={(v) => s("labelColor", v)}
							/>
							<RangeControl
								label={__("Label Font Size (px)", "frontis-blocks")}
								value={attributes.labelFontSize}
								onChange={(v) => s("labelFontSize", v)}
								min={8}
								max={30}
								__nextHasNoMarginBottom
							/>
						</PanelBody>
					)}

					{/* Separator (Preset 1) */}
					{presetStyle === "preset-1" && (
						<PanelBody
							title={__("Separator", "frontis-blocks")}
							initialOpen={false}
						>
							<RangeControl
								label={__("Font Size (px)", "frontis-blocks")}
								value={attributes.separatorFontSize}
								onChange={(v) => s("separatorFontSize", v)}
								min={16}
								max={80}
								__nextHasNoMarginBottom
							/>
							<SelectControl
								label={__("Font Weight", "frontis-blocks")}
								value={attributes.separatorFontWeight}
								options={FW}
								onChange={(v) => s("separatorFontWeight", v)}
								__nextHasNoMarginBottom
							/>
							<CC
								label={__("Color", "frontis-blocks")}
								value={attributes.separatorColor}
								onChange={(v) => s("separatorColor", v)}
							/>
							<RangeControl
								label={__("Gap (px)", "frontis-blocks")}
								value={attributes.separatorGap}
								onChange={(v) => s("separatorGap", v)}
								min={0}
								max={40}
								__nextHasNoMarginBottom
							/>
						</PanelBody>
					)}

					{/* SVG Progress Bar (Preset 1) */}
					{presetStyle === "preset-1" && (
						<PanelBody
							title={__("SVG Progress Bar", "frontis-blocks")}
							initialOpen={false}
						>
							<CC
								label={__("Active Color", "frontis-blocks")}
								value={attributes.svgActiveColor}
								onChange={(v) => s("svgActiveColor", v)}
							/>
							<CC
								label={__("Inactive Color", "frontis-blocks")}
								value={attributes.svgInactiveColor}
								onChange={(v) => s("svgInactiveColor", v)}
							/>
							<RangeControl
								label={__("Stroke Width (px)", "frontis-blocks")}
								value={attributes.svgStrokeWidth}
								onChange={(v) => s("svgStrokeWidth", v)}
								min={2}
								max={30}
								__nextHasNoMarginBottom
							/>
						</PanelBody>
					)}

					{/* Preset 3 */}
					{presetStyle === "preset-3" && (
						<>
							<PanelBody
								title={__("Progress & Indicator", "frontis-blocks")}
								initialOpen={false}
							>
								<CC
									label={__("Bar Background", "frontis-blocks")}
									value={attributes.p3BarBgColor}
									onChange={(v) => s("p3BarBgColor", v)}
								/>
								<RangeControl
									label={__("Bar Border Radius (px)", "frontis-blocks")}
									value={attributes.p3BarBorderRadius}
									onChange={(v) => s("p3BarBorderRadius", v)}
									min={0}
									max={50}
									__nextHasNoMarginBottom
								/>
								<CC
									label={__("Indicator Color", "frontis-blocks")}
									value={attributes.p3IndicatorBgColor}
									onChange={(v) => s("p3IndicatorBgColor", v)}
								/>
								<RangeControl
									label={__("Indicator Border Radius", "frontis-blocks")}
									value={attributes.p3IndicatorBorderRadius}
									onChange={(v) => s("p3IndicatorBorderRadius", v)}
									min={0}
									max={50}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
							<PanelBody
								title={__("Countdown Text", "frontis-blocks")}
								initialOpen={false}
							>
								<CC
									label={__("Countdown Color", "frontis-blocks")}
									value={attributes.p3CountdownColor}
									onChange={(v) => s("p3CountdownColor", v)}
								/>
								<RangeControl
									label={__("Countdown Font Size", "frontis-blocks")}
									value={attributes.p3CountdownFontSize}
									onChange={(v) => s("p3CountdownFontSize", v)}
									min={10}
									max={30}
									__nextHasNoMarginBottom
								/>
								<CC
									label={__("Time Label Color", "frontis-blocks")}
									value={attributes.p3TimeColor}
									onChange={(v) => s("p3TimeColor", v)}
								/>
								<RangeControl
									label={__("Time Font Size", "frontis-blocks")}
									value={attributes.p3TimeFontSize}
									onChange={(v) => s("p3TimeFontSize", v)}
									min={10}
									max={30}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
						</>
					)}

					{/* Preset 4 */}
					{presetStyle === "preset-4" && (
						<>
							<PanelBody
								title={__("Container", "frontis-blocks")}
								initialOpen={false}
							>
								<CC
									label={__("Tile Background", "frontis-blocks")}
									value={attributes.p4TileBgColor}
									onChange={(v) => s("p4TileBgColor", v)}
								/>
								<RangeControl
									label={__("Tile Border Radius", "frontis-blocks")}
									value={attributes.p4TileBorderRadius}
									onChange={(v) => s("p4TileBorderRadius", v)}
									min={0}
									max={30}
									__nextHasNoMarginBottom
								/>
								<RangeControl
									label={__("Tile Gap (px)", "frontis-blocks")}
									value={attributes.p4TileGap}
									onChange={(v) => s("p4TileGap", v)}
									min={4}
									max={40}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
							<PanelBody
								title={__("Dash Pattern", "frontis-blocks")}
								initialOpen={false}
							>
								<SelectControl
									label={__("Pattern", "frontis-blocks")}
									value={attributes.p4DashPattern}
									options={[
										{ label: "Diagonal Lines", value: "diagonal" },
										{ label: "Dots", value: "dots" },
										{ label: "Horizontal Lines", value: "lines" },
										{ label: "None", value: "none" },
									]}
									onChange={(v) => s("p4DashPattern", v)}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
							<PanelBody
								title={__("Label Alignment", "frontis-blocks")}
								initialOpen={false}
							>
								<SelectControl
									label={__("Label Position", "frontis-blocks")}
									value={attributes.p4LabelAlignment}
									options={[
										{ label: "Bottom", value: "bottom" },
										{ label: "Top", value: "top" },
										{ label: "Inside", value: "inside" },
									]}
									onChange={(v) => s("p4LabelAlignment", v)}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
							<PanelBody
								title={__("Countdown Text", "frontis-blocks")}
								initialOpen={false}
							>
								<CC
									label={__("Number Color", "frontis-blocks")}
									value={attributes.p4NumberColor}
									onChange={(v) => s("p4NumberColor", v)}
								/>
								<RangeControl
									label={__("Number Font Size", "frontis-blocks")}
									value={attributes.p4NumberFontSize}
									onChange={(v) => s("p4NumberFontSize", v)}
									min={20}
									max={120}
									__nextHasNoMarginBottom
								/>
								<SelectControl
									label={__("Number Font Weight", "frontis-blocks")}
									value={attributes.p4NumberFontWeight}
									options={FW}
									onChange={(v) => s("p4NumberFontWeight", v)}
									__nextHasNoMarginBottom
								/>
								<CC
									label={__("Label Color", "frontis-blocks")}
									value={attributes.p4LabelColor}
									onChange={(v) => s("p4LabelColor", v)}
								/>
								<RangeControl
									label={__("Label Font Size", "frontis-blocks")}
									value={attributes.p4LabelFontSize}
									onChange={(v) => s("p4LabelFontSize", v)}
									min={8}
									max={30}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
						</>
					)}

					{/* Preset 5 */}
					{presetStyle === "preset-5" && (
						<>
							<PanelBody
								title={__("Dots Configuration", "frontis-blocks")}
								initialOpen={false}
							>
								<RangeControl
									label={__("Circle Size (px)", "frontis-blocks")}
									value={attributes.p5CircleSize}
									onChange={(v) => s("p5CircleSize", v)}
									min={80}
									max={300}
									__nextHasNoMarginBottom
								/>
								<RangeControl
									label={__("Dot Count", "frontis-blocks")}
									value={attributes.p5DotCount}
									onChange={(v) => s("p5DotCount", v)}
									min={12}
									max={60}
									__nextHasNoMarginBottom
								/>
								<RangeControl
									label={__("Gap Between Circles", "frontis-blocks")}
									value={attributes.p5Gap}
									onChange={(v) => s("p5Gap", v)}
									min={8}
									max={80}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
							<PanelBody
								title={__("Dots", "frontis-blocks")}
								initialOpen={false}
							>
								<CC
									label={__("Active Dot Color", "frontis-blocks")}
									value={attributes.p5DotActiveColor}
									onChange={(v) => s("p5DotActiveColor", v)}
								/>
								<CC
									label={__("Inactive Dot Color", "frontis-blocks")}
									value={attributes.p5DotInactiveColor}
									onChange={(v) => s("p5DotInactiveColor", v)}
								/>
								<RangeControl
									label={__("Dot Size (px)", "frontis-blocks")}
									value={attributes.p5DotSize}
									onChange={(v) => s("p5DotSize", v)}
									min={2}
									max={20}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
							<PanelBody
								title={__("Countdown Text", "frontis-blocks")}
								initialOpen={false}
							>
								<CC
									label={__("Number Color", "frontis-blocks")}
									value={attributes.p5NumberColor}
									onChange={(v) => s("p5NumberColor", v)}
								/>
								<RangeControl
									label={__("Number Font Size", "frontis-blocks")}
									value={attributes.p5NumberFontSize}
									onChange={(v) => s("p5NumberFontSize", v)}
									min={20}
									max={100}
									__nextHasNoMarginBottom
								/>
								<SelectControl
									label={__("Number Font Weight", "frontis-blocks")}
									value={attributes.p5NumberFontWeight}
									options={FW}
									onChange={(v) => s("p5NumberFontWeight", v)}
									__nextHasNoMarginBottom
								/>
								<CC
									label={__("Label Color", "frontis-blocks")}
									value={attributes.p5LabelColor}
									onChange={(v) => s("p5LabelColor", v)}
								/>
								<RangeControl
									label={__("Label Font Size", "frontis-blocks")}
									value={attributes.p5LabelFontSize}
									onChange={(v) => s("p5LabelFontSize", v)}
									min={8}
									max={30}
									__nextHasNoMarginBottom
								/>
							</PanelBody>
						</>
					)}

					{/* Footer Text (Preset 1 & 2) */}
					{(presetStyle === "preset-1" || presetStyle === "preset-2") && (
						<PanelBody
							title={__("Footer Text", "frontis-blocks")}
							initialOpen={false}
						>
							<CC
								label={__("Text Color", "frontis-blocks")}
								value={attributes.footerColor}
								onChange={(v) => s("footerColor", v)}
							/>
							<RangeControl
								label={__("Font Size (px)", "frontis-blocks")}
								value={attributes.footerFontSize}
								onChange={(v) => s("footerFontSize", v)}
								min={10}
								max={40}
								__nextHasNoMarginBottom
							/>
							<SelectControl
								label={__("Font Weight", "frontis-blocks")}
								value={attributes.footerFontWeight}
								options={FW}
								onChange={(v) => s("footerFontWeight", v)}
								__nextHasNoMarginBottom
							/>
							<CC
								label={__("Background Color", "frontis-blocks")}
								value={attributes.footerBgColor}
								onChange={(v) => s("footerBgColor", v)}
							/>
							<RangeControl
								label={__("Border Radius (px)", "frontis-blocks")}
								value={attributes.footerBorderRadius}
								onChange={(v) => s("footerBorderRadius", v)}
								min={0}
								max={50}
								__nextHasNoMarginBottom
							/>
							<RangeControl
								label={__("Padding Top/Bottom", "frontis-blocks")}
								value={attributes.footerPaddingY}
								onChange={(v) => s("footerPaddingY", v)}
								min={0}
								max={30}
								__nextHasNoMarginBottom
							/>
							<RangeControl
								label={__("Padding Left/Right", "frontis-blocks")}
								value={attributes.footerPaddingX}
								onChange={(v) => s("footerPaddingX", v)}
								min={0}
								max={60}
								__nextHasNoMarginBottom
							/>
						</PanelBody>
					)}
				</>
			)}
		</InspectorControls>
	);
};

export default Inspector;
