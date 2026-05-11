import { useBlockProps } from "@wordpress/block-editor";
import attributes from "./attributes";

const v1_0_0 = {
	attributes,

	save({ attributes }) {
		const { presetStyle, triggerOn } = attributes;

		const blockProps = useBlockProps.save({
			className: "image-accordion-block",
		});

		return (
			<div {...blockProps}>
				<div
					className={`pea-image-accordion-wrapper ${presetStyle}`}
					data-trigger={triggerOn}
				>
					<div className="pea-image-accordion-container" />
				</div>
			</div>
		);
	},
};

export default [v1_0_0];
