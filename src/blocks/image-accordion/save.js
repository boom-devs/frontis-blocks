import { useBlockProps } from "@wordpress/block-editor";
import { renderAccordion, getContainerStyle } from "./presets";

const Save = ({ attributes }) => {
	const { presetStyle, triggerOn } = attributes;

	const blockProps = useBlockProps.save({
		className: "image-accordion-block",
	});

	const { containerStyle, items } = renderAccordion(attributes);

	return (
		<div {...blockProps}>
			<div
				className={`pea-image-accordion-wrapper ${presetStyle}`}
				data-trigger={triggerOn}
			>
				<div className="pea-image-accordion-container" style={containerStyle}>
					{items}
				</div>
			</div>
		</div>
	);
};

export default Save;
