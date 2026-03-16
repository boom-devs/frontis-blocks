import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		blockID,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `frontis-block fb-grid-layout-main-wrapper fb-grid-layout-container ${blockID}`,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
