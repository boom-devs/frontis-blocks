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

		</>
	);

	const advancedControls = (
		<>
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

export default memo(Inspector);
