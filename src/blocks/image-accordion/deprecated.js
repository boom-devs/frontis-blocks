import { useBlockProps } from "@wordpress/block-editor";
import attributes from "./attributes"; // Import the current attributes
import { renderAccordion } from "./render";

const v1_0_0 = {
	attributes, // Use the current attributes as the baseline for this deprecated version

	save({ attributes }) {
		const { blockID, presetStyle, triggerOn } = attributes;

		const blockProps = useBlockProps.save({
			className: `image-accordion-block ${blockID}`,
		});

		const { containerStyle, items } = renderAccordion(attributes, false);

		return (
			<div {...blockProps}>
				<div
					className={`pea-image-accordion-wrapper ${presetStyle} ${blockID}`}
					data-trigger={triggerOn}
				>
					<div className="pea-image-accordion-container" style={containerStyle}>
						{items}
					</div>
				</div>
			</div>
		);
	},
};

export default [v1_0_0];
