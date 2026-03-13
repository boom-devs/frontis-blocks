import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	useInnerBlocksProps,
	BlockControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
	Tooltip,
	ToggleControl,
	SelectControl
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useMemo, useCallback } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { ReactGridLayout, useContainerWidth } from 'react-grid-layout';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { cols, rowHeight, gutter, compactType, allowOverlap } = attributes;
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
				const { x, y, w, h } = block.attributes;
				if (x !== item.x || y !== item.y || w !== item.w || h !== item.h) {
					updateBlockAttributes(block.clientId, {
						x: item.x,
						y: item.y,
						w: item.w,
						h: item.h,
					});
				}
			}
		});
	};

	const addGridItem = useCallback(() => {
		const newId = `item-${Date.now()}`;
		const newBlock = createBlock('frontis-blocks/grid-item', {
			id: newId,
			w: 3,
			h: 4,
			x: 0,
			y: Infinity
		});
		insertBlock(newBlock, innerBlocks.length, clientId);
		setIsLayoutMode(true); // Switch to layout mode to place the new item
	}, [clientId, innerBlocks.length, insertBlock]);

	// Format layout for RGL
	const rglLayout = useMemo(() => {
		return innerBlocks.map(block => ({
			i: block.attributes.id || `temp-${block.clientId}`,
			x: block.attributes.x || 0,
			y: block.attributes.y || 0,
			w: block.attributes.w || 3,
			h: block.attributes.h || 4,
		}));
	}, [innerBlocks]);

	const blockProps = useBlockProps({
		className: `grid-layout-container ${isLayoutMode ? 'mode-layout' : 'mode-content'}`
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
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Grid Settings', 'grid-layout')}>
					<RangeControl
						label={__('Grid Columns', 'grid-layout')}
						value={cols}
						onChange={(val) => setAttributes({ cols: val })}
						min={1}
						max={24}
					/>
					<RangeControl
						label={__('Row Height (px)', 'grid-layout')}
						value={rowHeight}
						onChange={(val) => setAttributes({ rowHeight: val })}
						min={10}
						max={200}
					/>
					<RangeControl
						label={__('Gutter / Gap (px)', 'grid-layout')}
						value={gutter}
						onChange={(val) => setAttributes({ gutter: val })}
						min={0}
						max={50}
					/>
					<SelectControl
						label={__('Compaction Type', 'grid-layout')}
						value={compactType}
						options={[
							{ label: __('None (Messy Mode)', 'grid-layout'), value: '' },
							{ label: __('Vertical', 'grid-layout'), value: 'vertical' },
							{ label: __('Horizontal', 'grid-layout'), value: 'horizontal' },
						]}
						onChange={(val) => setAttributes({ compactType: val || null })}
						help={__('Determines if items should "gravity" towards one direction.', 'grid-layout')}
					/>
					<ToggleControl
						label={__('Allow Overlap', 'grid-layout')}
						checked={allowOverlap}
						onChange={(val) => setAttributes({ allowOverlap: val })}
						help={__('Allow items to be placed on top of each other.', 'grid-layout')}
					/>
					<Button
						variant="secondary"
						isFullWidth
						onClick={addGridItem}
						style={{ marginTop: '10px' }}
					>
						{__('Add New Item', 'grid-layout')}
					</Button>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={isLayoutMode ? 'edit' : 'layout'}
						label={isLayoutMode ? __('Finish Layout', 'grid-layout') : __('Edit Layout', 'grid-layout')}
						onClick={() => setIsLayoutMode(!isLayoutMode)}
						isPressed={isLayoutMode}
					/>
					<ToolbarButton
						icon="plus"
						label={__('Add Grid Item', 'grid-layout')}
						onClick={addGridItem}
					/>
				</ToolbarGroup>
			</BlockControls>

			<div className="grid-editor-workspace" ref={containerRef}>
				{isLayoutMode ? (
					<div className="layout-overlay-mode">
						<div className="layout-mode-header">
							<span className="mode-badge">{__('LAYOUT MODE', 'grid-layout')}</span>
							<p>{__('Drag and resize boxes to define your grid structure.', 'grid-layout')}</p>
							<Button variant="primary" onClick={() => setIsLayoutMode(false)}>
								{__('Done', 'grid-layout')}
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
						{__('Start Building Your Grid', 'grid-layout')}
					</Button>
				</div>
			)}
		</div>
	);
}
