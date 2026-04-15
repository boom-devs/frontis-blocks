import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { blockID, id } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `grid-item-rendered ${blockID}`,
			})}
			data-grid-id={id || blockID}
		>
			<InnerBlocks.Content />
		</div>
	);
}
