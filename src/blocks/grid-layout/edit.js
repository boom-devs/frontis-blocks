import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls
} from '@wordpress/block-editor';
import {
	Button,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useMemo, useCallback } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { ReactGridLayout, useContainerWidth } from 'react-grid-layout';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import './editor.scss';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

	const { 
		blockID,
		blockStyle,
		cols,
		rowHeight,
		gutter,
		compactType,
		allowOverlap
		
	} = attributes;

	// Handle block ID generation
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-grid-layout',
		isSelected,
		attributes,
		setAttributes,
	});
	const [isLayoutMode, setIsLayoutMode] = useState(false);
	const { ref: containerRef, width } = useContainerWidth();

	const { innerBlocks } = useSelect(
		(select) => ({
			innerBlocks: select('core/block-editor').getBlocks(clientId),
		}),
		[clientId]
	);

	const { insertBlock, updateBlockAttributes } = useDispatch('core/block-editor');

	const onLayoutChange = (newLayout) => {
		newLayout.forEach((item) => {
			const block = innerBlocks.find((b) => b.attributes.id === item.i);
			if (block) {
				// Only update if changed
				const { gridColumnStart, gridRowStart, gridColumnSpan, gridRowSpan } = block.attributes;
				if (gridColumnStart !== item.x || gridRowStart !== item.y || gridColumnSpan !== item.w || gridRowSpan !== item.h) {
					updateBlockAttributes(block.clientId, {
						gridColumnStart: item.x,
						gridRowStart: item.y,
						gridColumnSpan: item.w,
						gridRowSpan: item.h,
					});
				}
			}
		});
	};

	const addGridItem = useCallback(() => {
		const newId = `item-${Date.now()}`;
		const newBlock = createBlock('frontis-blocks/grid-item', {
			id: newId,
			gridColumnSpan: 3,
			gridRowSpan: 4,
			gridColumnStart: 0,
			gridRowStart: Infinity
		});
		insertBlock(newBlock, innerBlocks.length, clientId);
		setIsLayoutMode(true); // Switch to layout mode to place the new item
	}, [clientId, innerBlocks.length, insertBlock]);

	// Format layout for RGL
	const rglLayout = useMemo(() => {
		return innerBlocks.map(block => ({
			i: block.attributes.id || `temp-${block.clientId}`,
			x: block.attributes.gridColumnStart || 0,
			y: block.attributes.gridRowStart || 0,
			w: block.attributes.gridColumnSpan || 3,
			h: block.attributes.gridRowSpan || 4,
		}));
	}, [innerBlocks]);

	const blockProps = useBlockProps({
		className: `grid-layout-container ${blockID} ${isLayoutMode ? 'mode-layout' : 'mode-content'}`
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'grid-content-layer',
			style: {
				display: 'grid',
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				gridAutoRows: `${rowHeight}px`,
				gap: `${gutter}px`,
			}
		},
		{
			allowedBlocks: ['frontis-blocks/grid-item'],
			renderAppender: false,
		}
	);

	return (
		<>
			<Inspector 
				attributes={attributes}
				setAttributes={setAttributes}
				addGridItem={addGridItem}
			/>

			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={isLayoutMode ? 'edit' : 'layout'}
						label={isLayoutMode ? __('Finish Layout', 'frontis-blocks') : __('Edit Layout', 'frontis-blocks')}
						onClick={() => setIsLayoutMode(!isLayoutMode)}
						isPressed={isLayoutMode}
					/>
					<ToolbarButton
						icon="plus"
						label={__('Add Grid Item', 'frontis-blocks')}
						onClick={addGridItem}
					/>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className="grid-editor-workspace" ref={containerRef}>
					{isLayoutMode ? (
						<div className="layout-overlay-mode">
							<div className="layout-mode-header">
								<span className="mode-badge">{__('LAYOUT MODE', 'frontis-blocks')}</span>
								<p>{__('Drag and resize boxes to define your grid structure.', 'frontis-blocks')}</p>
								<Button variant="primary" onClick={() => setIsLayoutMode(false)}>
									{__('Done', 'frontis-blocks')}
								</Button>
							</div>

							{width > 0 && (
								<ReactGridLayout
									className="layout-canvas"
									layout={rglLayout}
									cols={cols}
									rowHeight={rowHeight}
									width={width - 40} // Adjusted for padding
									onLayoutChange={onLayoutChange}
									margin={[gutter, gutter]}
									compactType={compactType || null}
									allowOverlap={allowOverlap}
								>
									{rglLayout.map(item => (
										<div key={item.i} className="rgl-item-box">
											<div className="item-label">
												<span className="item-id">{item.i.split('-').pop()}</span>
											</div>
										</div>
									))}
								</ReactGridLayout>
							)}
						</div>
					) : (
						<div {...innerBlocksProps} />
					)}
				</div>

				{!isLayoutMode && innerBlocks.length === 0 && (
					<div className="grid-empty-state">
						<Button variant="primary" onClick={addGridItem}>
							{__('Start Building Your Grid', 'frontis-blocks')}
						</Button>
					</div>
				)}
			</div>
		</>
	);
}
