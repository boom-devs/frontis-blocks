import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';

const MIN_CARD_ITEMS = 2;

export default function StackCardItemEdit({ attributes, clientId, isSelected }) {
	const { itemNumber = 1 } = attributes;

	const { parentClientId, siblingCount } = useSelect(
		(select) => {
			const blockEditorSelect = select('core/block-editor');
			const rootClientId = blockEditorSelect.getBlockRootClientId(clientId);

			return {
				parentClientId: rootClientId,
				siblingCount: rootClientId ? blockEditorSelect.getBlockOrder(rootClientId).length : 0,
			};
		},
		[clientId]
	);

	const { removeBlock, selectBlock } = useDispatch('core/block-editor');
	const canRemove = siblingCount > MIN_CARD_ITEMS;

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

	const handleDelete = () => {
		if (!canRemove) {
			return;
		}

		removeBlock(clientId, false);

		if (parentClientId) {
			requestAnimationFrame(() => {
				selectBlock(parentClientId);
			});
		}
	};

	return (
		<div {...blockProps}>
			<div className="fb-stack-card-item__header">
				<span className="fb-stack-card-item__label">
					{__('Card Item', 'frontis-blocks')} {itemNumber}
				</span>
				<Button
					className="fb-stack-card-item__delete"
					icon="trash"
					label={__('Delete card item', 'frontis-blocks')}
					onClick={handleDelete}
					disabled={!canRemove}
					showTooltip
					isDestructive={canRemove}
				/>
			</div>
			<div {...innerBlocksProps} />
			{!canRemove && (
				<p className="fb-stack-card-item__hint">
					{__('At least 2 card items are required.', 'frontis-blocks')}
				</p>
			)}
		</div>
	);
}
