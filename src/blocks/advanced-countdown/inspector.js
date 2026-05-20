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
} from "@wordpress/components";
import { memo } from "@wordpress/element";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_ColorControl from "@Components/color-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_Typography from "@Components/typography-control";
import FB_Preset from "@Components/presets";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import { useDeviceType } from "@Config/displayType";

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const s = (k, v) => setAttributes({ [k]: v });
	const deviceType = useDeviceType();
	const { presetStyle } = attributes;

	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<FB_Preset
					label={__("Layout Style", "frontis-blocks")}
					presets={[
						{ label: "Preset 1", value: "preset-1" },
						{ label: "Preset 2", value: "preset-2" },
						{ label: "Preset 3", value: "preset-3" },
						{ label: "Preset 4", value: "preset-4" },
						{ label: "Preset 5", value: "preset-5" },
					]}
					presetValue={attributes.presetStyle}
					onChangeHandler={(v) => s("presetStyle", v)}
				/>
				<BaseControl label={__("Due Date", "frontis-blocks")}>
					<input
						type="datetime-local"
						value={attributes.dueDateTime}
						onChange={(e) => s("dueDateTime", e.target.value)}
					/>
				</BaseControl>
				<TextControl
					label={__("Footer Text", "frontis-blocks")}
					value={attributes.footerText}
					onChange={(v) => s("footerText", v)}
				/>
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody title={__("Container", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					label={__("Container Width (%)", "frontis-blocks")}
					rangeValue={{ Desktop: attributes.containerSize }}
					onChangeHandler={(v) => s("containerSize", v.Desktop)}
					min={10}
					max={100}
					deviceType={deviceType}
					isRangeUnit={false}
				/>
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					normalClassicColor={attributes.containerBgColor}
					setNormalClassicColor={(v) => s("containerBgColor", v)}
					isBackgroundImage={false}
					isBackgroundHover={false}
				/>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					value={attributes.containerPadding}
					onChange={(val) => s("containerPadding", val)}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					value={attributes.containerMargin}
					onChange={(val) => s("containerMargin", val)}
				/>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={attributes.containerBorderType}
					options={[
						{ label: "None", value: "none" },
						{ label: "Solid", value: "solid" },
						{ label: "Dashed", value: "dashed" },
						{ label: "Dotted", value: "dotted" },
						{ label: "Double", value: "double" },
					]}
					onChange={(v) => s("containerBorderType", v)}
				/>
				{attributes.containerBorderType !== "none" && (
					<>
						<FB_ColorControl
							label={__("Border Color", "frontis-blocks")}
							globalColor={attributes.containerBorderColor}
							setGlobalColor={(v) => s("containerBorderColor", v)}
						/>
						<BaseControl label={__("Border Width (px)", "frontis-blocks")}>
							<div className="fb-inspector-padding-margin-grid">
								{["top", "right", "bottom", "left"].map((p) => (
									<TextControl
										key={p}
										label={p.toUpperCase()}
										value={attributes.containerBorderWidth[p]}
										type="number"
										onChange={(v) =>
											s("containerBorderWidth", {
												...attributes.containerBorderWidth,
												[p]: Number(v),
											})
										}
									/>
								))}
							</div>
						</BaseControl>
					</>
				)}
				<BaseControl label={__("Border Radius (px)", "frontis-blocks")}>
					<div className="fb-inspector-padding-margin-grid">
						{["top", "right", "bottom", "left"].map((p) => (
							<TextControl
								key={p}
								label={p.toUpperCase()}
								value={attributes.containerBorderRadius[p]}
								type="number"
								onChange={(v) =>
									s("containerBorderRadius", {
										...attributes.containerBorderRadius,
										[p]: Number(v),
									})
								}
							/>
						))}
					</div>
				</BaseControl>
			</PanelBody>

			<PanelBody
				title={__("Number & Label Styling", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ColorControl
					label={__("Number Color", "frontis-blocks")}
					globalColor={attributes.countdownColor}
					setGlobalColor={(v) => s("countdownColor", v)}
				/>
				<FB_Range
					label={__("Number Font Size", "frontis-blocks")}
					rangeValue={{ Desktop: attributes.countdownFontSize }}
					onChangeHandler={(v) => s("countdownFontSize", v.Desktop)}
					min={10}
					max={200}
					deviceType={deviceType}
					isRangeUnit={false}
				/>
				<FB_ColorControl
					label={__("Label Color", "frontis-blocks")}
					globalColor={attributes.labelColor}
					setGlobalColor={(v) => s("labelColor", v)}
				/>
				<FB_Range
					label={__("Label Font Size", "frontis-blocks")}
					rangeValue={{ Desktop: attributes.labelFontSize }}
					onChangeHandler={(v) => s("labelFontSize", v.Desktop)}
					min={8}
					max={100}
					deviceType={deviceType}
					isRangeUnit={false}
				/>
			</PanelBody>

			<PanelBody
				title={__("Footer Styling", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_ColorControl
					label={__("Footer Text Color", "frontis-blocks")}
					globalColor={attributes.footerColor}
					setGlobalColor={(v) => s("footerColor", v)}
				/>
				<FB_BackgroundColorControl
					label={__("Footer Background", "frontis-blocks")}
					normalClassicColor={attributes.footerBgColor}
					setNormalClassicColor={(v) => s("footerBgColor", v)}
					isBackgroundImage={false}
					isBackgroundHover={false}
				/>
				<FB_Range
					label={__("Footer Font Size", "frontis-blocks")}
					rangeValue={{ Desktop: attributes.footerFontSize }}
					onChangeHandler={(v) => s("footerFontSize", v.Desktop)}
					min={8}
					max={100}
					deviceType={deviceType}
					isRangeUnit={false}
				/>
			</PanelBody>

			<PanelBody
				title={__("Layout Specific Styling", "frontis-blocks")}
				initialOpen={false}
			>
				{presetStyle === "preset-1" && (
					<>
						<FB_ColorControl
							label={__("Progress Active Color", "frontis-blocks")}
							globalColor={attributes.svgActiveColor}
							setGlobalColor={(v) => s("svgActiveColor", v)}
						/>
						<FB_Range
							label={__("Progress Bar Size", "frontis-blocks")}
							rangeValue={{ Desktop: attributes.progressBarSize }}
							onChangeHandler={(v) => s("progressBarSize", v.Desktop)}
							min={100}
							max={800}
							deviceType={deviceType}
							isRangeUnit={false}
						/>
					</>
				)}
				{presetStyle === "preset-2" && (
					<FB_Range
						label={__("Circle Size", "frontis-blocks")}
						rangeValue={{ Desktop: attributes.p2CircleSize }}
						onChangeHandler={(v) => s("p2CircleSize", v.Desktop)}
						min={100}
						max={500}
						deviceType={deviceType}
						isRangeUnit={false}
					/>
				)}
				{presetStyle === "preset-3" && (
					<FB_ColorControl
						label={__("Indicator Background", "frontis-blocks")}
						globalColor={attributes.p3IndicatorBgColor}
						setGlobalColor={(v) => s("p3IndicatorBgColor", v)}
					/>
				)}
				{presetStyle === "preset-4" && (
					<FB_ColorControl
						label={__("Tile Background", "frontis-blocks")}
						globalColor={attributes.p4TileBgColor}
						setGlobalColor={(v) => s("p4TileBgColor", v)}
					/>
				)}
				{(presetStyle === "preset-1" || presetStyle === "preset-2") && (
					<FB_ColorControl
						label={__("Separator Color", "frontis-blocks")}
						globalColor={attributes.separatorColor}
						setGlobalColor={(v) => s("separatorColor", v)}
					/>
				)}
			</PanelBody>
		</>
	);

	const advancedControls = (
		<>
			<PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					label={__("Z Index", "frontis-blocks")}
					rangeValue={{ Desktop: attributes.containerZIndex }}
					onChangeHandler={(v) => s("containerZIndex", v.Desktop)}
					deviceType={deviceType}
					isRangeUnit={false}
				/>
			</PanelBody>
			<PanelBody title={__("Visibility", "frontis-blocks")} initialOpen={false}>
				<FB_VisibilityControl
					desktopValue={attributes.containerDesktop}
					setDesktopValue={(v) => s("containerDesktop", v)}
					tabletValue={attributes.containerTablet}
					setTabletValue={(v) => s("containerTablet", v)}
					mobileValue={attributes.containerMobile}
					setMobileValue={(v) => s("containerMobile", v)}
				/>
			</PanelBody>
			<PanelBody title={__("Custom CSS", "frontis-blocks")} initialOpen={false}>
				<FB_CustomCSSEditor
					value={attributes.containerCustomCSS}
					onChangeValue={(v) => s("containerCustomCSS", v)}
				/>
			</PanelBody>
		</>
	);

	return (
		<FB_InspectorControls
			generalControls={generalControls}
			styleControls={styleControls}
			advancedControls={advancedControls}
		/>
	);
};

export default Inspector;
