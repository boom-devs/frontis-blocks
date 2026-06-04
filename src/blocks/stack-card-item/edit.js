import './editor.scss';
import { createBlock } from '@wordpress/blocks';
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useLayoutEffect, useRef, useEffect } from '@wordpress/element';
import StackCardItemInspector from './inspector';

const DEFAULT_CARD_ITEM_TEMPLATE = [
	['frontis-blocks/testimonial'],
];

export default function Edit({ attributes, isSelected, clientId, setAttributes }) {
	const {
		itemNumber = 1,
	} = attributes;

	const { replaceInnerBlocks } = useDispatch(blockEditorStore);
	const autoRestoreAttemptedRef = useRef(false);

	const hasInnerBlocks = useSelect(
		(sel) => (sel(blockEditorStore).getBlocks(clientId) || []).length > 0,
		[clientId]
	);

	// useLayoutEffect(() => {
	// 	if (hasInnerBlocks) {
	// 		autoRestoreAttemptedRef.current = false;
	// 		return;
	// 	}

	// 	if (autoRestoreAttemptedRef.current) {
	// 		return;
	// 	}

	// 	autoRestoreAttemptedRef.current = true;

	// 	replaceInnerBlocks(
	// 		clientId,
	// 		[
	// 			createBlock('frontis-blocks/testimonial', {
	// 				icon: 'swatchbook',
	// 				btnIcon: 'arrow-up-right-from-square',
	// 				mediaSwitcher: 'icon'
	// 			})
	// 		],
	// 		false
	// 	);
	// }, [clientId, hasInnerBlocks, replaceInnerBlocks]);

	// Force a store update on mount to ensure defaults are saved and parent styles are triggered
	useEffect(() => {
		const timer = setTimeout(() => {
			setAttributes({ _fb_init: true });
		}, 50);
		return () => clearTimeout(timer);
	}, []);

	const blockProps = useBlockProps({
		className: ['fb-stack-card-item', `fb-card-item${itemNumber}`].filter(Boolean).join(' '),
	});

	// const innerBlocksProps = useInnerBlocksProps(
	// 	{
	// 		className: `fb-stack-card-item__content ${!hasInnerBlocks ? 'fb-stack-card-item__content--empty' : ''}`.trim(),
	// 	},
	// 	{
	// 		template: DEFAULT_CARD_ITEM_TEMPLATE,
	// 		templateLock: false,
	// 		renderAppender: !hasInnerBlocks || isSelected ? InnerBlocks.ButtonBlockAppender : false,
	// 	}
	// );
	
	// const innerBlocksProps = useInnerBlocksProps(
	// 	{
	// 		className: `fb-stack-card-item__content ${!hasInnerBlocks ? 'fb-stack-card-item__content--empty' : ''}`.trim(),
	// 	},
	// 	{
	// 		template: DEFAULT_CARD_ITEM_TEMPLATE,
	// 		templateLock: false,
	// 		renderAppender: isSelected ? InnerBlocks.ButtonBlockAppender : false,
	// 	}
	// );

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `fb-stack-card-item__content ${!hasInnerBlocks ? 'fb-stack-card-item__content--empty' : ''}`.trim(),
		},
		{
			templateLock: false,
			renderAppender: isSelected ? InnerBlocks.ButtonBlockAppender : false,
		}
	);

	return (
		<>
			{isSelected && (
				<InspectorControls>
					<StackCardItemInspector attributes={attributes} setAttributes={setAttributes} />
				</InspectorControls>
			)}
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
}
