import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { blockID, id, isStatic } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `grid-item-rendered ${blockID} ${isStatic ? "is-static" : ""}`,
			})}
			data-grid-id={id || blockID}
		>
			<div className="grid-item-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
