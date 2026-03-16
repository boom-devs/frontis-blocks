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
import { useState, useMemo, useCallback, useEffect, useRef } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import { ReactGridLayout, useContainerWidth } from 'react-grid-layout';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import './editor.scss';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import Inspector from './inspector';
import generateGridLayoutStyle from './styling';

const BREAKPOINTS = ['Desktop', 'Tablet', 'Mobile'];
const BREAKPOINT_ICONS = {
	Desktop: 'desktop',
	Tablet: 'tablet',
	Mobile: 'smartphone',
};

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

	const {
		blockID,
		blockStyle,
		cols,
		rowHeight,
		rowHeightUnits,
		gutter,
		gutterUnits,
		compactType,
		allowOverlap,
		layouts,
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

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateGridLayoutStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const [isLayoutMode, setIsLayoutMode] = useState(false);
	const [activeBreakpoint, setActiveBreakpoint] = useState('Desktop');
	const { ref: containerRef, width } = useContainerWidth();
	const isInitialSync = useRef(true);

	const { innerBlocks } = useSelect(
		(select) => ({
			innerBlocks: select('core/block-editor').getBlocks(clientId),
		}),
		[clientId]
	);

	const { insertBlock, updateBlockAttributes } = useDispatch('core/block-editor');

	// Get settings for active breakpoint (parse string to number)
	const currentCols = Number(cols[activeBreakpoint]) || 12;
	const currentRowHeight = Number(rowHeight[activeBreakpoint]) || 40;
	const currentGutter = Number(gutter[activeBreakpoint]) || 10;

	// Desktop values for content mode
	const desktopCols = Number(cols.Desktop) || 12;
	const desktopRowHeight = Number(rowHeight.Desktop) || 40;
	const desktopRowHeightUnit = rowHeightUnits?.Desktop || 'px';
	const desktopGutter = Number(gutter.Desktop) || 10;
	const desktopGutterUnit = gutterUnits?.Desktop || 'px';

	// Sync layouts when inner blocks change (add/remove)
	useEffect(() => {
		const currentItemIds = innerBlocks.map(b => b.attributes.id).filter(Boolean);
		if (currentItemIds.length === 0 && !isInitialSync.current) return;
		isInitialSync.current = false;

		const updatedLayouts = {};
		let hasChanges = false;

		BREAKPOINTS.forEach(bp => {
			const bpCols = Number(cols[bp]) || 12;
			const existingLayout = layouts[bp] || [];
			const newLayout = [];

			currentItemIds.forEach(id => {
				const existing = existingLayout.find(l => l.i === id);
				if (existing) {
					newLayout.push(existing);
				} else {
					// New item — use child attributes for Desktop, defaults for others
					if (bp === 'Desktop') {
						const block = innerBlocks.find(b => b.attributes.id === id);
						if (block) {
							newLayout.push({
								i: id,
								x: block.attributes.gridColumnStart || 0,
								y: block.attributes.gridRowStart || 0,
								w: block.attributes.gridColumnSpan || 3,
								h: block.attributes.gridRowSpan || 4,
							});
						}
					} else {
						newLayout.push({
							i: id,
							x: 0,
							y: Infinity,
							w: bp === 'Mobile' ? bpCols : Math.min(4, bpCols),
							h: 4,
						});
					}
					hasChanges = true;
				}
			});

			// Check if items were removed
			if (existingLayout.length !== newLayout.length) {
				hasChanges = true;
			}

			updatedLayouts[bp] = newLayout;
		});

		if (hasChanges) {
			setAttributes({ layouts: updatedLayouts });
		}
	}, [innerBlocks.length]);

	// Handle layout change from RGL drag/resize
	const onLayoutChange = useCallback((newLayout) => {
		const cleanLayout = newLayout.map(item => ({
			i: item.i,
			x: item.x,
			y: item.y,
			w: item.w,
			h: item.h,
		}));

		// Update parent layouts for active breakpoint
		setAttributes({
			layouts: {
				...layouts,
				[activeBreakpoint]: cleanLayout,
			}
		});

		// If editing Desktop, also sync to child block attributes
		if (activeBreakpoint === 'Desktop') {
			newLayout.forEach((item) => {
				const block = innerBlocks.find((b) => b.attributes.id === item.i);
				if (block) {
					const { gridColumnStart, gridRowStart, gridColumnSpan, gridRowSpan } = block.attributes;
					if (gridColumnStart !== item.x || gridRowStart !== item.y ||
						gridColumnSpan !== item.w || gridRowSpan !== item.h) {
						updateBlockAttributes(block.clientId, {
							gridColumnStart: item.x,
							gridRowStart: item.y,
							gridColumnSpan: item.w,
							gridRowSpan: item.h,
						});
					}
				}
			});
		}
	}, [activeBreakpoint, innerBlocks, layouts, setAttributes, updateBlockAttributes]);

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
		setIsLayoutMode(true);
	}, [clientId, innerBlocks.length, insertBlock]);

	// Get layout for current breakpoint
	const rglLayout = useMemo(() => {
		const bpLayout = layouts[activeBreakpoint] || [];
		if (bpLayout.length > 0) return bpLayout;

		// Fallback: generate from inner blocks
		return innerBlocks.map(block => ({
			i: block.attributes.id || `temp-${block.clientId}`,
			x: block.attributes.gridColumnStart || 0,
			y: block.attributes.gridRowStart || 0,
			w: block.attributes.gridColumnSpan || 3,
			h: block.attributes.gridRowSpan || 4,
		}));
	}, [layouts, activeBreakpoint, innerBlocks]);

	const blockProps = useBlockProps({
		className: `frontis-block fb-grid-layout-main-wrapper grid-layout-container ${blockID} ${isLayoutMode ? 'mode-layout' : 'mode-content'}`
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'grid-content-layer fb-grid-layout-container',
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

								<div className="breakpoint-tabs">
									{BREAKPOINTS.map(bp => (
										<button
											key={bp}
											className={`breakpoint-tab ${activeBreakpoint === bp ? 'active' : ''}`}
											onClick={() => setActiveBreakpoint(bp)}
											title={bp}
										>
											<span className={`dashicons dashicons-${BREAKPOINT_ICONS[bp]}`} />
											<span className="bp-label">{bp}</span>
										</button>
									))}
								</div>

								<Button variant="primary" onClick={() => setIsLayoutMode(false)}>
									{__('Done', 'frontis-blocks')}
								</Button>
							</div>

							<div className="layout-info-bar">
								<span className="info-item">
									{__('Columns:', 'frontis-blocks')} <strong>{currentCols}</strong>
								</span>
								<span className="info-item">
									{__('Row Height:', 'frontis-blocks')} <strong>{currentRowHeight}px</strong>
								</span>
								<span className="info-item">
									{__('Gap:', 'frontis-blocks')} <strong>{currentGutter}px</strong>
								</span>
							</div>

							{width > 0 && (
								<ReactGridLayout
									className="layout-canvas"
									layout={rglLayout}
									cols={currentCols}
									rowHeight={currentRowHeight}
									width={width - 40}
									onLayoutChange={onLayoutChange}
									margin={[currentGutter, currentGutter]}
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
			<style>{blockStyle}</style>
		</>
	);
}
