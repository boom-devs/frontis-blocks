import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { blockID } = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-stack-card-item ${blockID || ''}`.trim(),
		'data-fb-card-id': blockID || '',
	});

	return (
		<div {...blockProps}>
			<div className="fb-stack-card-item__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
