import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {

	const {
		blockID,
		gridLayoutGlobalWraperID,
		gridLayoutGlobalWraperClass,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `frontis-block fb-grid-layout-main-wrapper fb-grid-layout-container ${blockID}`,
	});

	return (
		<div {...blockProps}>
			<div className={`fb-grid-layout-wrap ${gridLayoutGlobalWraperClass}`} id={gridLayoutGlobalWraperID}>
				<div className="grid-content-layer fb-grid-layout-container">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
