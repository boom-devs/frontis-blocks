import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	Button,
	ColorPicker,
	PanelBody,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { memo } from "@wordpress/element";
import FB_InspectorControls from "@Components/InspectorControls";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		backgroundColor,
		borderRadius,
		padding,
		minHeight,
		zIndex,
		isStatic,
	} = attributes;

	const generalControls = (
		<PanelBody title={__("Item Behavior", "frontis-blocks")}>
			<ToggleControl
				label={__("Lock Layout Item", "frontis-blocks")}
				checked={!!isStatic}
				onChange={(value) => setAttributes({ isStatic: value })}
				help={__(
					"Prevent dragging and resizing for this item in layout mode.",
					"frontis-blocks",
				)}
			/>
		</PanelBody>
	);

	const styleControls = (
		<>
			<PanelBody title={__("Appearance", "frontis-blocks")}>
				<BaseControl
					label={__("Background", "frontis-blocks")}
					help={__(
						"Optional background color for this grid item.",
						"frontis-blocks",
					)}
				>
					<ColorPicker
						color={backgroundColor || "#ffffff"}
						onChange={(value) =>
							setAttributes({ backgroundColor: value || "" })
						}
						enableAlpha
					/>
					<Button
						variant="secondary"
						onClick={() => setAttributes({ backgroundColor: "" })}
						style={{ marginTop: "10px" }}
					>
						{__("Clear Background", "frontis-blocks")}
					</Button>
				</BaseControl>

				<RangeControl
					label={__("Border Radius", "frontis-blocks")}
					value={borderRadius}
					onChange={(value) => setAttributes({ borderRadius: value })}
					min={0}
					max={120}
				/>

				<RangeControl
					label={__("Padding", "frontis-blocks")}
					value={padding}
					onChange={(value) => setAttributes({ padding: value })}
					min={0}
					max={120}
				/>

				<RangeControl
					label={__("Minimum Height", "frontis-blocks")}
					value={minHeight}
					onChange={(value) =>
						setAttributes({ minHeight: value > 0 ? value : undefined })
					}
					min={0}
					max={600}
				/>

				<Button
					variant="tertiary"
					onClick={() =>
						setAttributes({
							backgroundColor: "",
							borderRadius: undefined,
							padding: undefined,
							minHeight: undefined,
						})
					}
				>
					{__("Reset Item Styles", "frontis-blocks")}
				</Button>
			</PanelBody>
		</>
	);

	const advancedControls = (
		<PanelBody title={__("Stacking", "frontis-blocks")}>
			<RangeControl
				label={__("Z-Index", "frontis-blocks")}
				value={zIndex}
				onChange={(value) => setAttributes({ zIndex: value })}
				min={-10}
				max={50}
				help={__(
					"Useful when overlap is enabled on the parent grid.",
					"frontis-blocks",
				)}
			/>
		</PanelBody>
	);

	return (
		<FB_InspectorControls
			generalControls={generalControls}
			styleControls={styleControls}
			advancedControls={advancedControls}
		/>
	);
};

export default memo(Inspector);
