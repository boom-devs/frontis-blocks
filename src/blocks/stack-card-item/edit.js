import './editor.scss';
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect, store as blockEditorStore } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import StackCardItemInspector from './inspector';

export default function Edit({ attributes, isSelected, clientId, setAttributes }) {
	const {
		itemNumber = 1,
	} = attributes;

	const hasInnerBlocks = useSelect(
		(sel) => (sel(blockEditorStore).getBlocks(clientId) || []).length > 0,
		[clientId]
	);

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
