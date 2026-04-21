import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function StackCardItemSave({ attributes }) {
	const { itemNumber = 1 } = attributes;

	const blockProps = useBlockProps.save({
		className: ['fb-stack-card-item', `fb-card-item${itemNumber}`].join(' '),
	});

	return (
		<div {...blockProps}>
			<div className="fb-stack-card-item__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
