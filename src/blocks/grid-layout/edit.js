import { __, sprintf } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
} from "@wordpress/block-editor";
import { Button, ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import {
	useState,
	useMemo,
	useCallback,
	useEffect,
	useRef,
} from "@wordpress/element";
import { createBlock } from "@wordpress/blocks";
import {
	getCompactor,
	ReactGridLayout,
	useContainerWidth,
} from "react-grid-layout";

import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./editor.scss";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import Inspector from "./inspector";
import generateGridLayoutStyle from "./styling";

const BREAKPOINTS = ["Desktop", "Tablet", "Mobile"];
const BREAKPOINT_ICONS = {
	Desktop: "desktop",
	Tablet: "tablet",
	Mobile: "smartphone",
};
const DEFAULT_GRID_SETTINGS = {
	Desktop: { cols: 12, rowHeight: 40, gutter: 10 },
	Tablet: { cols: 8, rowHeight: 35, gutter: 8 },
	Mobile: { cols: 4, rowHeight: 30, gutter: 6 },
};

const getBreakpointNumber = (values, breakpoint, settingKey) =>
	Number(values?.[breakpoint]) || DEFAULT_GRID_SETTINGS[breakpoint][settingKey];

const getResolvedItemId = (block) =>
	block.attributes.id || `grid-item-${block.clientId.slice(0, 8)}`;

const getNextRow = (layout = []) =>
	layout.reduce((maxRow, item) => {
		const itemY = Number.isFinite(Number(item?.y)) ? Number(item.y) : 0;
		const itemH = Math.max(Number(item?.h) || 1, 1);

		return Math.max(maxRow, itemY + itemH);
	}, 0);

const normalizeLayoutItem = (item, colsCount, fallbackY = 0) => {
	const width = Math.min(Math.max(Number(item?.w) || 1, 1), colsCount);
	const maxX = Math.max(colsCount - width, 0);
	const x = Math.min(Math.max(Number(item?.x) || 0, 0), maxX);
	const rawY = Number(item?.y);
	const y = Number.isFinite(rawY) && rawY >= 0 ? rawY : fallbackY;

	return {
		i: item.i,
		x,
		y,
		w: width,
		h: Math.max(Number(item?.h) || 1, 1),
	};
};

const createLayoutItemFromBlock = (
	block,
	breakpoint,
	colsCount,
	currentLayout,
) => {
	const itemId = getResolvedItemId(block);
	const fallbackY = getNextRow(currentLayout);
	const defaultWidth =
		breakpoint === "Mobile" ? colsCount : Math.min(3, colsCount);

	if (breakpoint === "Desktop") {
		return normalizeLayoutItem(
			{
				i: itemId,
				x: Number.isFinite(Number(block.attributes.gridColumnStart))
					? Number(block.attributes.gridColumnStart)
					: 0,
				y: Number.isFinite(Number(block.attributes.gridRowStart))
					? Number(block.attributes.gridRowStart)
					: fallbackY,
				w: Number(block.attributes.gridColumnSpan) || defaultWidth,
				h: Number(block.attributes.gridRowSpan) || 4,
			},
			colsCount,
			fallbackY,
		);
	}

	return normalizeLayoutItem(
		{
			i: itemId,
			x: 0,
			y: fallbackY,
			w: breakpoint === "Mobile" ? colsCount : Math.min(4, colsCount),
			h: 4,
		},
		colsCount,
		fallbackY,
	);
};

const areLayoutsEqual = (firstLayouts, secondLayouts) =>
	BREAKPOINTS.every((breakpoint) => {
		const first = firstLayouts?.[breakpoint] || [];
		const second = secondLayouts?.[breakpoint] || [];

		return JSON.stringify(first) === JSON.stringify(second);
	});

const getPxResponsiveUnits = () =>
	BREAKPOINTS.reduce((nextUnits, breakpoint) => {
		nextUnits[breakpoint] = "px";
		return nextUnits;
	}, {});

const needsUnitNormalization = (units = {}) =>
	BREAKPOINTS.some((breakpoint) => units?.[breakpoint] !== "px");

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
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
		blockPrefix: "fb-grid-layout",
		isSelected,
		attributes,
		setAttributes,
	});

	useEffect(() => {
		const nextAttributes = {};

		if (needsUnitNormalization(rowHeightUnits)) {
			nextAttributes.rowHeightUnits = getPxResponsiveUnits();
		}

		if (needsUnitNormalization(gutterUnits)) {
			nextAttributes.gutterUnits = getPxResponsiveUnits();
		}

		if (Object.keys(nextAttributes).length > 0) {
			setAttributes(nextAttributes);
		}
	}, [gutterUnits, rowHeightUnits, setAttributes]);

	useEffect(() => {
		if (blockID) {
			const css = generateGridLayoutStyle(attributes);
			if (css !== blockStyle) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID, blockStyle, setAttributes]);

	const [isLayoutMode, setIsLayoutMode] = useState(false);
	const [activeBreakpoint, setActiveBreakpoint] = useState("Desktop");
	const { containerRef, mounted, width } = useContainerWidth({
		measureBeforeMount: true,
	});
	const lastSyncedLayoutRef = useRef(layouts);

	useEffect(() => {
		lastSyncedLayoutRef.current = layouts;
	}, [layouts]);

	const { innerBlocks, selectedGridItemClientId } = useSelect(
		(select) => {
			const blockEditor = select("core/block-editor");
			const blockItems = blockEditor.getBlocks(clientId);
			const directChildIds = blockItems.map((block) => block.clientId);
			const selectedBlockClientId = blockEditor.getSelectedBlockClientId();

			let nextSelectedGridItemClientId = null;

			if (selectedBlockClientId) {
				if (directChildIds.includes(selectedBlockClientId)) {
					nextSelectedGridItemClientId = selectedBlockClientId;
				} else {
					nextSelectedGridItemClientId =
						blockEditor
							.getBlockParents(selectedBlockClientId)
							.find((parentClientId) => directChildIds.includes(parentClientId)) ||
						null;
				}
			}

			return {
				innerBlocks: blockItems,
				selectedGridItemClientId: nextSelectedGridItemClientId,
			};
		},
		[clientId],
	);

	const { insertBlock, removeBlock, selectBlock, updateBlockAttributes } =
		useDispatch("core/block-editor");
	const gridItems = useMemo(
		() =>
			innerBlocks.map((block) => ({
				block,
				itemId: getResolvedItemId(block),
			})),
		[innerBlocks],
	);

	const currentCols = getBreakpointNumber(cols, activeBreakpoint, "cols");
	const currentRowHeight = getBreakpointNumber(
		rowHeight,
		activeBreakpoint,
		"rowHeight",
	);
	const currentGutter = getBreakpointNumber(gutter, activeBreakpoint, "gutter");
	const totalItems = gridItems.length;
	const activeBreakpointLabel = sprintf(
		__("Editing %s layout", "frontis-blocks"),
		activeBreakpoint,
	);
	const selectedGridItem = useMemo(
		() =>
			gridItems.find(
				(entry) => entry.block.clientId === selectedGridItemClientId,
			) || null,
		[gridItems, selectedGridItemClientId],
	);
	const selectedGridItemIndex = useMemo(
		() =>
			selectedGridItem
				? gridItems.findIndex(
						(entry) => entry.block.clientId === selectedGridItem.block.clientId,
					)
				: -1,
		[gridItems, selectedGridItem],
	);
	const selectedLayoutItemId = selectedGridItem?.itemId || "";
	const selectedLayoutLabel =
		selectedGridItemIndex >= 0
			? sprintf(__("Item %d selected", "frontis-blocks"), selectedGridItemIndex + 1)
			: __("Select a layout item to edit or delete it.", "frontis-blocks");

	useEffect(() => {
		const nextLayouts = BREAKPOINTS.reduce((updatedLayouts, breakpoint) => {
			const breakpointCols = getBreakpointNumber(cols, breakpoint, "cols");
			const existingLayout = layouts?.[breakpoint] || [];
			const existingLayoutMap = new Map(
				existingLayout.map((item) => [item.i, item]),
			);

			updatedLayouts[breakpoint] = gridItems.reduce((nextLayout, entry) => {
				const existingItem = existingLayoutMap.get(entry.itemId);

				if (existingItem) {
					nextLayout.push(
						normalizeLayoutItem(
							{
								...existingItem,
								i: entry.itemId,
							},
							breakpointCols,
							getNextRow(nextLayout),
						),
					);
					return nextLayout;
				}

				nextLayout.push(
					createLayoutItemFromBlock(
						entry.block,
						breakpoint,
						breakpointCols,
						nextLayout,
					),
				);
				return nextLayout;
			}, []);

			return updatedLayouts;
		}, {});

		if (!areLayoutsEqual(layouts, nextLayouts)) {
			lastSyncedLayoutRef.current = nextLayouts;
			setAttributes({ layouts: nextLayouts });
		}
	}, [cols, gridItems, layouts, setAttributes]);

	const onLayoutChange = useCallback(
		(newLayout) => {
			const cleanLayout = newLayout.map((item) =>
				normalizeLayoutItem(item, currentCols),
			);

			const nextLayouts = {
				...lastSyncedLayoutRef.current,
				[activeBreakpoint]: cleanLayout,
			};

			lastSyncedLayoutRef.current = nextLayouts;
			setAttributes({ layouts: nextLayouts });

			if (activeBreakpoint === "Desktop") {
				cleanLayout.forEach((item) => {
					const matchingEntry = gridItems.find(
						(entry) => entry.itemId === item.i,
					);

					if (!matchingEntry) {
						return;
					}

					const { gridColumnStart, gridRowStart, gridColumnSpan, gridRowSpan } =
						matchingEntry.block.attributes;

					if (
						gridColumnStart !== item.x ||
						gridRowStart !== item.y ||
						gridColumnSpan !== item.w ||
						gridRowSpan !== item.h
					) {
						updateBlockAttributes(matchingEntry.block.clientId, {
							gridColumnStart: item.x,
							gridRowStart: item.y,
							gridColumnSpan: item.w,
							gridRowSpan: item.h,
						});
					}
				});
			}
		},
		[
			activeBreakpoint,
			currentCols,
			gridItems,
			setAttributes,
			updateBlockAttributes,
		],
	);

	const addGridItem = useCallback(() => {
		const newBlock = createBlock("frontis-blocks/grid-item", {
			gridColumnSpan: 3,
			gridRowSpan: 4,
			gridColumnStart: 0,
			gridRowStart: 0,
		});
		insertBlock(newBlock, innerBlocks.length, clientId);
		setIsLayoutMode(true);
	}, [clientId, innerBlocks.length, insertBlock]);

	const focusGridItem = useCallback(
		(itemId, { exitLayoutMode = false } = {}) => {
			const matchingEntry = gridItems.find((entry) => entry.itemId === itemId);

			if (!matchingEntry) {
				return;
			}

			selectBlock(matchingEntry.block.clientId);

			if (exitLayoutMode) {
				setIsLayoutMode(false);
				requestAnimationFrame(() => {
					selectBlock(matchingEntry.block.clientId);
				});
			}
		},
		[gridItems, selectBlock],
	);

	const removeGridItem = useCallback(
		(itemId) => {
			const matchingEntryIndex = gridItems.findIndex(
				(entry) => entry.itemId === itemId,
			);

			if (matchingEntryIndex < 0) {
				return;
			}

			const matchingEntry = gridItems[matchingEntryIndex];
			const shouldRemove = window.confirm(
				sprintf(
					__(
						"Remove Item %d and all blocks inside it?",
						"frontis-blocks",
					),
					matchingEntryIndex + 1,
				),
			);

			if (!shouldRemove) {
				return;
			}

			removeBlock(matchingEntry.block.clientId, false);
			requestAnimationFrame(() => {
				selectBlock(clientId);
			});
		},
		[clientId, gridItems, removeBlock, selectBlock],
	);

	const handleLayoutItemKeyDown = useCallback(
		(event, itemId) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				focusGridItem(itemId);
			}
		},
		[focusGridItem],
	);

	const rglLayout = useMemo(() => {
		const breakpointCols = getBreakpointNumber(cols, activeBreakpoint, "cols");
		const breakpointLayout = layouts?.[activeBreakpoint] || [];

		if (breakpointLayout.length > 0) {
			return breakpointLayout.map((item) =>
				normalizeLayoutItem(item, breakpointCols),
			);
		}

		return gridItems.reduce((nextLayout, entry) => {
			nextLayout.push(
				createLayoutItemFromBlock(
					entry.block,
					activeBreakpoint,
					breakpointCols,
					nextLayout,
				),
			);
			return nextLayout;
		}, []);
	}, [activeBreakpoint, cols, gridItems, layouts]);

	const blockProps = useBlockProps({
		className: `frontis-block fb-grid-layout-main-wrapper grid-layout-container ${blockID} ${
			isLayoutMode ? "mode-layout" : "mode-content"
		}`,
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "grid-content-layer fb-grid-layout-container",
		},
		{
			allowedBlocks: ["frontis-blocks/grid-item"],
			renderAppender: false,
		},
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
						icon={isLayoutMode ? "edit" : "layout"}
						label={
							isLayoutMode
								? __("Back to Content", "frontis-blocks")
								: __("Enter Layout Mode", "frontis-blocks")
						}
						onClick={() => setIsLayoutMode(!isLayoutMode)}
						isPressed={isLayoutMode}
					/>
					<ToolbarButton
						icon="plus"
						label={__("Add Grid Item", "frontis-blocks")}
						onClick={addGridItem}
					/>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className="grid-editor-workspace" ref={containerRef}>
					{isLayoutMode ? (
						<div className="layout-overlay-mode">
							<div className="layout-mode-header">
								<div className="layout-mode-intro">
									<div className="layout-mode-badges">
										<span className="mode-badge">
											{__("Layout Mode", "frontis-blocks")}
										</span>
										<span className="mode-context">
											{activeBreakpointLabel}
										</span>
									</div>

									<div className="layout-mode-copy">
										<h3 className="layout-mode-title">
											{__("Arrange item positions visually", "frontis-blocks")}
										</h3>
										<p className="layout-mode-description">
											{__(
												"Drag items to move them, resize from the corner handle, then switch back to content mode to edit the blocks inside each item.",
												"frontis-blocks",
											)}
										</p>
									</div>
								</div>

								<div className="layout-mode-actions">
									<Button variant="secondary" icon="plus" onClick={addGridItem}>
										{__("Add Item", "frontis-blocks")}
									</Button>
									<Button
										variant="primary"
										onClick={() => setIsLayoutMode(false)}
									>
										{__("Back to Content", "frontis-blocks")}
									</Button>
								</div>
							</div>

							<div className="layout-mode-toolbar">
								<div className="breakpoint-tabs">
									{BREAKPOINTS.map((bp) => (
										<button
											key={bp}
											type="button"
											className={`breakpoint-tab ${
												activeBreakpoint === bp ? "active" : ""
											}`}
											onClick={() => setActiveBreakpoint(bp)}
											title={bp}
										>
											<span
												className={`dashicons dashicons-${BREAKPOINT_ICONS[bp]}`}
											/>
											<span className="bp-label">{bp}</span>
										</button>
									))}
								</div>

								<div
									className={`layout-selection-panel ${
										selectedGridItem ? "has-selection" : "is-empty"
									}`}
								>
									<div className="layout-selection-summary">
										<span className="dashicons dashicons-info-outline" />
										<span>{selectedLayoutLabel}</span>
									</div>

									{selectedGridItem && (
										<div className="layout-selection-actions">
											<Button
												variant="secondary"
												icon="edit"
												onClick={() =>
													focusGridItem(selectedGridItem.itemId, {
														exitLayoutMode: true,
													})
												}
											>
												{__("Edit Content", "frontis-blocks")}
											</Button>
											<Button
												variant="tertiary"
												icon="trash"
												isDestructive
												onClick={() =>
													removeGridItem(selectedGridItem.itemId)
												}
											>
												{__("Delete Item", "frontis-blocks")}
											</Button>
										</div>
									)}
								</div>
							</div>

							<div className="layout-info-bar">
								<span className="info-item">
									<span className="info-label">
										{__("Items", "frontis-blocks")}
									</span>
									<strong className="info-value">{totalItems}</strong>
								</span>
								<span className="info-item">
									<span className="info-label">
										{__("Columns", "frontis-blocks")}
									</span>
									<strong className="info-value">{currentCols}</strong>
								</span>
								<span className="info-item">
									<span className="info-label">
										{__("Row Height", "frontis-blocks")}
									</span>
									<strong className="info-value">{currentRowHeight}px</strong>
								</span>
								<span className="info-item">
									<span className="info-label">
										{__("Gap", "frontis-blocks")}
									</span>
									<strong className="info-value">{currentGutter}px</strong>
								</span>
							</div>

							{mounted && width > 0 && (
								<ReactGridLayout
									className="layout-canvas"
									layout={rglLayout}
									width={width}
									gridConfig={{
										cols: currentCols,
										rowHeight: currentRowHeight,
										margin: [currentGutter, currentGutter],
									}}
									compactor={getCompactor(compactType || null, allowOverlap)}
									onLayoutChange={onLayoutChange}
								>
									{rglLayout.map((item, index) => (
										<div
											key={item.i}
											className={`rgl-item-box ${
												selectedLayoutItemId === item.i ? "is-active" : ""
											}`}
											onClick={() => focusGridItem(item.i)}
											onDoubleClick={() =>
												focusGridItem(item.i, {
													exitLayoutMode: true,
												})
											}
											onKeyDown={(event) =>
												handleLayoutItemKeyDown(event, item.i)
											}
											role="button"
											tabIndex={0}
											aria-pressed={selectedLayoutItemId === item.i}
										>
											<div className="item-label">
												<span className="item-name">
													{sprintf(
														__("Item %d", "frontis-blocks"),
														index + 1,
													)}
												</span>
												<span className="item-id">
													{item.i.split("-").pop()}
												</span>
											</div>
											<span className="item-size">
												{sprintf(
													__("%1$d columns, %2$d rows", "frontis-blocks"),
													item.w,
													item.h,
												)}
											</span>
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
							{__("Start Building Your Grid", "frontis-blocks")}
						</Button>
					</div>
				)}
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
