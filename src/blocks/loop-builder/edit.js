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

	useEffect(() => {
		if (!blockID) {
			setAttributes({ blockID: `fb-loop-builder-${clientId.slice(0, 8)}` });
		}
	}, [blockID, clientId, setAttributes]);

	// Get block props
	const blockProps = useBlockProps({
		className: `fb-loop-builder-block ${blockID || ''}`,
	});

	// Create layout class based on display type
	const layoutClass = displayLayout.type === 'flex' ? 'fb-grid-layout' :
		displayLayout.type === 'list' ? 'fb-list-layout' :
			displayLayout.type === 'slider' ? 'fb-slider-layout' : '';

	// Setup inner blocks props for the template with layout settings
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `fb-loop-builder-inner ${layoutClass}`,
			style: displayLayout.type === 'flex' ?
				{ '--grid-columns': displayLayout.columns || 3 } : {}
		},
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

	// Add this function at the top of your edit.js file
	function useSliderEffect(clientId, isSliderLayout) {
		useEffect(() => {
			if (!isSliderLayout) return;

			// Find the slider container
			const sliderContainer = document.querySelector(`#block-${clientId} .fb-slider-layout`);
			if (!sliderContainer) return;

			// Simple slider navigation - you might want to replace this with a more robust solution
			const handleWheel = (e) => {
				e.preventDefault();
				sliderContainer.scrollLeft += e.deltaY;
			};

			sliderContainer.addEventListener('wheel', handleWheel, { passive: false });

			return () => {
				sliderContainer.removeEventListener('wheel', handleWheel);
			};
		}, [clientId, isSliderLayout]);
	}

	// Then in your Edit component, add:
	const isSliderLayout = displayLayout.type === 'slider';
	useSliderEffect(clientId, isSliderLayout);

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