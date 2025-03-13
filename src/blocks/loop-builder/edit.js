import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		displayLayout = { type: 'flex', columns: 3 },
	} = attributes;

	// Generate a unique ID for the block if not set
	useEffect(() => {
		if (!blockID) {
			setAttributes({ blockID: `fb-loop-builder-${clientId.slice(0, 8)}` });
		}
	}, [blockID, clientId, setAttributes]);

	// Get block props
	const blockProps = useBlockProps({
		className: `fb-loop-builder-block ${blockID || ''}`,
	});

	// Setup inner blocks props for the template
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'fb-loop-builder-inner' },
		{
			allowedBlocks: ['core/post-template', 'core/query-pagination', 'core/query-no-results'],
			template: [
				['core/post-template', {}, [
					['core/post-featured-image'],
					['core/post-title'],
					['core/post-excerpt']
				]],
				['core/query-pagination'],
				['core/query-no-results', {}, [
					['core/paragraph', { content: __('No posts found.', 'frontis-blocks') }]
				]]
			],
			templateLock: false,
		}
	);

	// Get information about the post template block
	const hasInnerBlocks = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore);
			return getBlocks(clientId).length > 0;
		},
		[clientId]
	);

	return (
		<div {...blockProps}>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			
			<div className={`fb-loop-content layout-${displayLayout.type}`}>
				{hasInnerBlocks ? (
					<div {...innerBlocksProps} />
				) : (
					<div className="fb-loop-builder-placeholder">
						<p>{__('Add template blocks to customize your loop.', 'frontis-blocks')}</p>
					</div>
				)}
			</div>
		</div>
	);
}