import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	Button,
	ToggleControl,
	SelectControl,
} from "@wordpress/components";
import { memo } from "@wordpress/element";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_Range from "@Components/range";
import { useDeviceType } from "@Config/displayType";

const Inspector = ({ attributes, setAttributes, addGridItem }) => {
	const {
		cols,
		rowHeight,
		gutter,
		containerPaddingX,
		containerPaddingXUnits,
		containerPaddingY,
		containerPaddingYUnits,
		defaultItemWidth,
		defaultItemHeight,
		compactType,
		allowOverlap,
	} = attributes;

	const deviceType = useDeviceType();
	const currentDeviceColumns = Math.max(Number(cols?.[deviceType]) || 1, 1);
	const defaultNewItemWidthFallback =
		deviceType === "Desktop" ? "3" : "4";

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Grid Settings", "frontis-blocks")}>
				<FB_Range
					min={1}
					max={24}
					label={__("Columns", "frontis-blocks")}
					rangeValue={cols}
					onChangeHandler={(value) => setAttributes({ cols: value })}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={"12"}
					isRangeUnit={false}
				/>

				<FB_Range
					min={1}
					max={1000}
					label={__("Row Height", "frontis-blocks")}
					rangeValue={rowHeight}
					onChangeHandler={(value) => setAttributes({ rowHeight: value })}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={"40"}
					isRangeUnit={false}
				/>

				<FB_Range
					min={1}
					max={1000}
					label={__("Gap", "frontis-blocks")}
					rangeValue={gutter}
					onChangeHandler={(value) => setAttributes({ gutter: value })}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={"10"}
					isRangeUnit={false}
				/>

				<FB_Range
					min={0}
					max={1000}
					label={__("Horizontal Padding", "frontis-blocks")}
					rangeValue={containerPaddingX}
					onChangeHandler={(value) =>
						setAttributes({ containerPaddingX: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ containerPaddingXUnits: value })
					}
					deviceType={deviceType}
					units={containerPaddingXUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_Range
					min={0}
					max={1000}
					label={__("Vertical Padding", "frontis-blocks")}
					rangeValue={containerPaddingY}
					onChangeHandler={(value) =>
						setAttributes({ containerPaddingY: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ containerPaddingYUnits: value })
					}
					deviceType={deviceType}
					units={containerPaddingYUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
			</PanelBody>

			<PanelBody
				title={__("Layout Behavior", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Range
					min={1}
					max={currentDeviceColumns}
					label={__("Default New Item Width", "frontis-blocks")}
					rangeValue={defaultItemWidth}
					onChangeHandler={(value) =>
						setAttributes({ defaultItemWidth: value })
					}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={String(
						Math.min(
							Number(defaultNewItemWidthFallback),
							currentDeviceColumns,
						),
					)}
					isRangeUnit={false}
				/>

				<FB_Range
					min={1}
					max={1000}
					label={__("Default Item Height", "frontis-blocks")}
					rangeValue={defaultItemHeight}
					onChangeHandler={(value) =>
						setAttributes({ defaultItemHeight: value })
					}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={"4"}
					isRangeUnit={false}
				/>

				<SelectControl
					label={__("Compaction Type", "frontis-blocks")}
					value={compactType || ""}
					options={[
						{ label: __("None (Free Placement)", "frontis-blocks"), value: "" },
						{ label: __("Vertical", "frontis-blocks"), value: "vertical" },
						{ label: __("Horizontal", "frontis-blocks"), value: "horizontal" },
					]}
					onChange={(val) => setAttributes({ compactType: val })}
					help={__(
						"Vertical keeps items packed upward, Horizontal packs left-to-right, and None keeps a looser free placement.",
						"frontis-blocks",
					)}
				/>
				<ToggleControl
					label={__("Allow Overlap", "frontis-blocks")}
					checked={allowOverlap}
					onChange={(val) => setAttributes({ allowOverlap: val })}
					help={__(
						"When disabled, dragged items push other items out of the way. When enabled, items can stack on top of each other.",
						"frontis-blocks",
					)}
				/>
				<Button
					variant="secondary"
					isFullWidth
					onClick={addGridItem}
					style={{ marginTop: "10px" }}
				>
					{__("Add New Item", "frontis-blocks")}
				</Button>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = <></>;

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = <></>;

	return (
		<FB_InspectorControls
			generalControls={generalControls}
			styleControls={styleControls}
			advancedControls={advancedControls}
		/>
	);
};

export default memo(Inspector);
