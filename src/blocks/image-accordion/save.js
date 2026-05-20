import { useBlockProps } from "@wordpress/block-editor";
import { renderAccordion, getContainerStyle } from "./presets";

const Save = ({ attributes }) => {
	const { blockID, blockStyle, presetStyle, triggerOn } = attributes;

	const blockProps = useBlockProps.save({
		className: `image-accordion-block ${blockID}`,
	});

	const { items } = renderAccordion(attributes);

	return (
		<>
			<div {...blockProps}>
				<div
					className={`fb-image-accordion-wrapper ${presetStyle}`}
					data-trigger={triggerOn}
				>
					<div className="fb-image-accordion-container">{items}</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
};

export default Save;
