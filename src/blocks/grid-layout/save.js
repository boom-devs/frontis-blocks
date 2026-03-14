import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {

	const { 
		blockID,
		blockStyle,
		cols,
		rowHeight,
		gutter
		
		} = attributes;

	const style = {
		display: 'grid',
		gridTemplateColumns: `repeat(${cols || 12}, 1fr)`,
		gridAutoRows: `${rowHeight || 40}px`,
		gap: `${gutter || 10}px`,
	};

	return (
		<div {...useBlockProps.save({ 
			className: blockID,
			style 
		})}>
			<InnerBlocks.Content />
		</div>
	);
}
