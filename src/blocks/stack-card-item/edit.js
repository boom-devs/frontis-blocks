import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const { blockID } = attributes;

	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-stack-card-item',
		isSelected,
		attributes,
		setAttributes,
	});

	const cardIndex = useSelect(
		(select) => select(blockEditorStore).getBlockIndex(clientId),
		[clientId]
	);
	const cardLabel = `${__('Card', 'frontis-blocks')} ${cardIndex + 1}`;

	const hasInnerBlocks = useSelect(
		(select) => select(blockEditorStore).getBlocks(clientId).length > 0,
		[clientId]
	);

	const blockProps = useBlockProps({
		className: `fb-stack-card-item ${blockID || ''}`.trim(),
		'data-fb-card-index': cardIndex + 1,
		'data-fb-card-id': blockID || '',
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'fb-stack-card-item__content',
		},
		{
			templateLock: false,
			renderAppender: hasInnerBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	return (
		<div {...blockProps}>
			<span className="fb-stack-card-item__editor-label">{cardLabel}</span>
			<div {...innerBlocksProps} />
		</div>
	);
}
