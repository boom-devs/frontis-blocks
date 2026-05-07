import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { presetStyle, triggerOn } = attributes;

	const blockProps = useBlockProps.save({
		className: "image-accordion-block",
	});

	// const { containerStyle, items } = renderAccordion(attributes, false);

	return (
		<div {...blockProps}>
			<div
				className={`pea-image-accordion-wrapper ${presetStyle}`}
				data-trigger={triggerOn}
			>
				<div className="pea-image-accordion-container">{/* {items} */}</div>
			</div>
		</div>
	);
};

export default Save;
