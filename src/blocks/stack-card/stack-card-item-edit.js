import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function StackCardItemEdit({ attributes, isSelected }) {
	const { itemNumber = 1 } = attributes;

	const blockProps = useBlockProps({
		className: ['fb-stack-card-item', `fb-card-item${itemNumber}`].join(' '),
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'fb-stack-card-item__content',
		},
		{
			renderAppender: isSelected ? InnerBlocks.ButtonBlockAppender : false,
		}
	);

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
