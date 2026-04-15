import { __ } from "@wordpress/i18n";
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

	const { innerBlocks } = useSelect(
		(select) => ({
			innerBlocks: select("core/block-editor").getBlocks(clientId),
		}),
		[clientId],
	);

	const { insertBlock, updateBlockAttributes } =
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
								? __("Finish Layout", "frontis-blocks")
								: __("Edit Layout", "frontis-blocks")
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
								<span className="mode-badge">
									{__("LAYOUT MODE", "frontis-blocks")}
								</span>

								<div className="breakpoint-tabs">
									{BREAKPOINTS.map((bp) => (
										<button
											key={bp}
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

								<Button
									variant="primary"
									onClick={() => setIsLayoutMode(false)}
								>
									{__("Done", "frontis-blocks")}
								</Button>
							</div>

							<div className="layout-info-bar">
								<span className="info-item">
									{__("Columns:", "frontis-blocks")}{" "}
									<strong>{currentCols}</strong>
								</span>
								<span className="info-item">
									{__("Row Height:", "frontis-blocks")}{" "}
									<strong>{currentRowHeight}px</strong>
								</span>
								<span className="info-item">
									{__("Gap:", "frontis-blocks")}{" "}
									<strong>{currentGutter}px</strong>
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
									{rglLayout.map((item) => (
										<div key={item.i} className="rgl-item-box">
											<div className="item-label">
												<span className="item-id">
													{item.i.split("-").pop()}
												</span>
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
							{__("Start Building Your Grid", "frontis-blocks")}
						</Button>
					</div>
				)}
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
