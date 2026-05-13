import { __, sprintf } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Button,
	ToolbarDropdownMenu,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	useState,
	useMemo,
	useCallback,
	useEffect,
	useRef,
} from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';
import {
	getCompactor,
	ReactGridLayout,
	useContainerWidth,
} from 'react-grid-layout';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import './editor.scss';
import { setDeviceType, useDeviceType } from '@Config/displayType';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import Inspector from './inspector';
import generateGridLayoutStyle from './styling';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';
import getProActive from '@Utils/getProActive';
import { applyFilters } from '@wordpress/hooks';

const BREAKPOINTS = [ 'Desktop', 'Tablet', 'Mobile' ];
const BREAKPOINT_ICONS = {
	Desktop: 'desktop',
	Tablet: 'tablet',
	Mobile: 'smartphone',
};
const DEFAULT_GRID_SETTINGS = {
	Desktop: { cols: 12, rowHeight: 40, gutter: 10 },
	Tablet: { cols: 8, rowHeight: 35, gutter: 8 },
	Mobile: { cols: 4, rowHeight: 30, gutter: 6 },
};
const LAYOUT_ROW_UNIT = 1;
const DEFAULT_NEW_ITEM_WIDTH = {
	Desktop: 3,
	Tablet: 4,
	Mobile: 4,
};
const DEFAULT_NEW_ITEM_HEIGHT = {
	Desktop: 4,
	Tablet: 4,
	Mobile: 4,
};
const BUILDER_VIEWS = {
	PICKER: 'picker',
	LAYOUT: 'layout',
	CONTENT: 'content',
};
const PRESET_LAYOUT_COMPACTOR = getCompactor( 'vertical', false );
const PRESET_DESKTOP_COLS = DEFAULT_GRID_SETTINGS.Desktop.cols;
const PRESET_TABLET_COLS = DEFAULT_GRID_SETTINGS.Tablet.cols;
const PRESET_MOBILE_COLS = DEFAULT_GRID_SETTINGS.Mobile.cols;
const clampPresetLayoutItem = ( item, colsCount, fallbackY = 0 ) => {
	const width = Math.min( Math.max( Number( item?.w ) || 1, 1 ), colsCount );
	const maxX = Math.max( colsCount - width, 0 );
	const x = Math.min( Math.max( Number( item?.x ) || 0, 0 ), maxX );
	const rawY = Number( item?.y );
	const y = Number.isFinite( rawY ) && rawY >= 0 ? rawY : fallbackY;

	return {
		i: item?.i,
		x,
		y,
		w: width,
		h: Math.max( Number( item?.h ) || 1, 1 ),
	};
};
const getPresetLayoutNextRow = ( layout = [] ) =>
	layout.reduce(
		( maxRow, item ) => Math.max( maxRow, item.y + item.h ),
		0
	);
const scalePresetLayout = ( layout = [], colsCount ) => {
	const scaledLayout = layout.map( ( item, index ) =>
		clampPresetLayoutItem(
			{
				i: `preset-${ index }`,
				x: Math.round(
					( ( Number( item?.x ) || 0 ) / PRESET_DESKTOP_COLS ) *
						colsCount
				),
				y: Number( item?.y ) || 0,
				w: Math.max(
					Math.round(
						( ( Number( item?.w ) || 1 ) / PRESET_DESKTOP_COLS ) *
							colsCount
					),
					1
				),
				h: Math.max( Number( item?.h ) || 1, 1 ),
			},
			colsCount,
			Number( item?.y ) || 0
		)
	);
	const compactedLayout = PRESET_LAYOUT_COMPACTOR.compact(
		scaledLayout,
		colsCount
	);
	const compactedMap = new Map(
		compactedLayout.map( ( item ) => [
			item.i,
			clampPresetLayoutItem( item, colsCount ),
		] )
	);

	return scaledLayout.map( ( item ) => {
		const compactedItem = compactedMap.get( item.i ) || item;

		return {
			x: compactedItem.x,
			y: compactedItem.y,
			w: compactedItem.w,
			h: compactedItem.h,
		};
	} );
};
const stackPresetLayout = ( layout = [], colsCount ) =>
	layout.reduce( ( stackedLayout, item ) => {
		stackedLayout.push( {
			x: 0,
			y: getPresetLayoutNextRow( stackedLayout ),
			w: colsCount,
			h: Math.max( Number( item?.h ) || 1, 2 ),
		} );

		return stackedLayout;
	}, [] );
const createTemplatePreset = ( { id, title, desktopLayout } ) => ( {
	id,
	title,
	layouts: {
		Desktop: desktopLayout,
		Tablet: scalePresetLayout( desktopLayout, PRESET_TABLET_COLS ),
		Mobile: stackPresetLayout( desktopLayout, PRESET_MOBILE_COLS ),
	},
} );
const GRID_TEMPLATE_PRESETS = [
	createTemplatePreset( {
		id: 'single',
		title: __( 'Single', 'frontis-blocks' ),
		desktopLayout: [ { x: 0, y: 0, w: 12, h: 3 } ],
	} ),
	createTemplatePreset( {
		id: 'two-columns',
		title: __( 'Two Columns', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 6, h: 3 },
			{ x: 6, y: 0, w: 6, h: 3 },
		],
	} ),
	createTemplatePreset( {
		id: 'three-columns',
		title: __( 'Three Columns', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 4, h: 3 },
			{ x: 4, y: 0, w: 4, h: 3 },
			{ x: 8, y: 0, w: 4, h: 3 },
		],
	} ),
	createTemplatePreset( {
		id: 'four-columns',
		title: __( 'Four Columns', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 3, h: 3 },
			{ x: 3, y: 0, w: 3, h: 3 },
			{ x: 6, y: 0, w: 3, h: 3 },
			{ x: 9, y: 0, w: 3, h: 3 },
		],
	} ),
	createTemplatePreset( {
		id: 'quad-grid',
		title: __( 'Quad Grid', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 6, h: 2 },
			{ x: 6, y: 0, w: 6, h: 2 },
			{ x: 0, y: 2, w: 6, h: 2 },
			{ x: 6, y: 2, w: 6, h: 2 },
		],
	} ),
	createTemplatePreset( {
		id: 'left-feature',
		title: __( 'Left Feature', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 4, h: 4 },
			{ x: 4, y: 0, w: 8, h: 4 },
		],
	} ),
	createTemplatePreset( {
		id: 'gallery-grid',
		title: __( 'Gallery Grid', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 4, h: 2 },
			{ x: 4, y: 0, w: 4, h: 2 },
			{ x: 8, y: 0, w: 4, h: 2 },
			{ x: 0, y: 2, w: 4, h: 2 },
			{ x: 4, y: 2, w: 4, h: 2 },
			{ x: 8, y: 2, w: 4, h: 2 },
		],
	} ),
	createTemplatePreset( {
		id: 'center-feature',
		title: __( 'Center Feature', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 3, h: 4 },
			{ x: 3, y: 0, w: 6, h: 4 },
			{ x: 9, y: 0, w: 3, h: 4 },
		],
	} ),
	createTemplatePreset( {
		id: 'right-feature',
		title: __( 'Right Feature', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 8, h: 4 },
			{ x: 8, y: 0, w: 4, h: 4 },
		],
	} ),
	createTemplatePreset( {
		id: 'top-banner',
		title: __( 'Top Banner', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 12, h: 2 },
			{ x: 0, y: 2, w: 6, h: 2 },
			{ x: 6, y: 2, w: 6, h: 2 },
		],
	} ),
	createTemplatePreset( {
		id: 'bottom-banner',
		title: __( 'Bottom Banner', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 6, h: 2 },
			{ x: 6, y: 0, w: 6, h: 2 },
			{ x: 0, y: 2, w: 12, h: 2 },
		],
	} ),
	createTemplatePreset( {
		id: 'uneven-columns',
		title: __( 'Uneven Columns', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 5, h: 4 },
			{ x: 5, y: 0, w: 3, h: 4 },
			{ x: 8, y: 0, w: 4, h: 4 },
		],
	} ),
	createTemplatePreset( {
		id: 'stacked-rows',
		title: __( 'Stacked Rows', 'frontis-blocks' ),
		desktopLayout: [
			{ x: 0, y: 0, w: 4, h: 2 },
			{ x: 4, y: 0, w: 4, h: 2 },
			{ x: 8, y: 0, w: 4, h: 2 },
			{ x: 0, y: 2, w: 6, h: 2 },
			{ x: 6, y: 2, w: 6, h: 2 },
		],
	} ),
];

const getResponsiveDeviceIcon = ( breakpoint ) =>
	BREAKPOINT_ICONS[ breakpoint ] || BREAKPOINT_ICONS.Desktop;

const getBreakpointNumber = ( values, breakpoint, settingKey ) =>
	Number( values?.[ breakpoint ] ) ||
	DEFAULT_GRID_SETTINGS[ breakpoint ][ settingKey ];

const getDefaultItemWidth = ( breakpoint, colsCount ) => {
	const fallbackWidth = DEFAULT_NEW_ITEM_WIDTH[ breakpoint ];
	return Math.min( Math.max( fallbackWidth, 1 ), colsCount );
};

const getDefaultItemHeight = ( breakpoint ) =>
	Math.max( DEFAULT_NEW_ITEM_HEIGHT[ breakpoint ], 1 );

const getResolvedItemId = ( block ) =>
	block.attributes.id || `grid-item-${ block.clientId.slice( 0, 8 ) }`;

const getNextRow = ( layout = [] ) =>
	layout.reduce( ( maxRow, item ) => {
		const itemY = Number.isFinite( Number( item?.y ) )
			? Number( item.y )
			: 0;
		const itemH = Math.max( Number( item?.h ) || 1, 1 );

		return Math.max( maxRow, itemY + itemH );
	}, 0 );

const normalizeLayoutItem = ( item, colsCount, fallbackY = 0 ) => {
	const width = Math.min( Math.max( Number( item?.w ) || 1, 1 ), colsCount );
	const maxX = Math.max( colsCount - width, 0 );
	const x = Math.min( Math.max( Number( item?.x ) || 0, 0 ), maxX );
	const rawY = Number( item?.y );
	const y = Number.isFinite( rawY ) && rawY >= 0 ? rawY : fallbackY;

	return {
		i: item.i,
		x,
		y,
		w: width,
		h: Math.max( Number( item?.h ) || 1, 1 ),
	};
};

const createLayoutItemFromBlock = (
	block,
	breakpoint,
	colsCount,
	currentLayout
) => {
	const itemId = getResolvedItemId( block );
	const fallbackY = getNextRow( currentLayout );
	const defaultWidth = getDefaultItemWidth( breakpoint, colsCount );
	const defaultHeight = getDefaultItemHeight( breakpoint );

	if ( breakpoint === 'Desktop' ) {
		return normalizeLayoutItem(
			{
				i: itemId,
				x: Number.isFinite( Number( block.attributes.gridColumnStart ) )
					? Number( block.attributes.gridColumnStart )
					: 0,
				y: Number.isFinite( Number( block.attributes.gridRowStart ) )
					? Number( block.attributes.gridRowStart )
					: fallbackY,
				w: Number( block.attributes.gridColumnSpan ) || defaultWidth,
				h: Number( block.attributes.gridRowSpan ) || defaultHeight,
			},
			colsCount,
			fallbackY
		);
	}

	return normalizeLayoutItem(
		{
			i: itemId,
			x: 0,
			y: fallbackY,
			w: defaultWidth,
			h: defaultHeight,
		},
		colsCount,
		fallbackY
	);
};

const buildLayoutsFromGridItems = ( gridItems, cols, layouts = {} ) =>
	BREAKPOINTS.reduce( ( updatedLayouts, breakpoint ) => {
		const breakpointCols = getBreakpointNumber( cols, breakpoint, 'cols' );
		const existingLayout = layouts?.[ breakpoint ] || [];
		const existingLayoutMap = new Map(
			existingLayout.map( ( item ) => [ item.i, item ] )
		);

		updatedLayouts[ breakpoint ] = gridItems.reduce(
			( nextLayout, entry ) => {
				const existingItem = existingLayoutMap.get( entry.itemId );

				if ( existingItem ) {
					nextLayout.push(
						normalizeLayoutItem(
							{
								...existingItem,
								i: entry.itemId,
							},
							breakpointCols,
							getNextRow( nextLayout )
						)
					);
					return nextLayout;
				}

				nextLayout.push(
					createLayoutItemFromBlock(
						entry.block,
						breakpoint,
						breakpointCols,
						nextLayout
					)
				);
				return nextLayout;
			},
			[]
		);

		return updatedLayouts;
	}, {} );

const compactLayouts = ( layouts = {}, cols, gridItemStateMap, compactor ) =>
	BREAKPOINTS.reduce( ( nextLayouts, breakpoint ) => {
		const breakpointCols = getBreakpointNumber( cols, breakpoint, 'cols' );
		const sourceLayout = layouts?.[ breakpoint ] || [];
		const compactedLayout = compactor.compact(
			sourceLayout.map( ( item ) => ( {
				...item,
				static: gridItemStateMap.get( item.i )?.isStatic || false,
			} ) ),
			breakpointCols
		);
		const compactedMap = new Map(
			compactedLayout.map( ( item ) => [
				item.i,
				normalizeLayoutItem( item, breakpointCols ),
			] )
		);

		nextLayouts[ breakpoint ] = sourceLayout.map(
			( item ) =>
				compactedMap.get( item.i ) ||
				normalizeLayoutItem( item, breakpointCols )
		);

		return nextLayouts;
	}, {} );

const areLayoutsEqual = ( firstLayouts, secondLayouts ) =>
	BREAKPOINTS.every( ( breakpoint ) => {
		const first = firstLayouts?.[ breakpoint ] || [];
		const second = secondLayouts?.[ breakpoint ] || [];

		return JSON.stringify( first ) === JSON.stringify( second );
	} );

const getPxResponsiveUnits = () =>
	BREAKPOINTS.reduce( ( nextUnits, breakpoint ) => {
		nextUnits[ breakpoint ] = 'px';
		return nextUnits;
	}, {} );

const needsUnitNormalization = ( units = {} ) =>
	BREAKPOINTS.some( ( breakpoint ) => units?.[ breakpoint ] !== 'px' );

const getPresetBreakpointLayout = ( preset, breakpoint ) =>
	preset.layouts?.[ breakpoint ] || preset.layouts?.Desktop || [];

const getPreviewRows = ( layout = [] ) => Math.max( getNextRow( layout ), 1 );

const createPresetBlocks = ( preset ) =>
	getPresetBreakpointLayout( preset, 'Desktop' ).map( ( item ) => {
		const newBlock = createBlock( 'frontis-blocks/grid-item', {
			gridColumnStart: item.x,
			gridRowStart: item.y,
			gridColumnSpan: item.w,
			gridRowSpan: item.h,
		} );
		const itemId = getResolvedItemId( newBlock );

		return {
			...newBlock,
			attributes: {
				...newBlock.attributes,
				id: itemId,
				gridColumnStart: item.x,
				gridRowStart: item.y,
				gridColumnSpan: item.w,
				gridRowSpan: item.h,
			},
		};
	} );

const createPresetLayouts = ( preset, blocks, cols ) =>
	BREAKPOINTS.reduce( ( nextLayouts, breakpoint ) => {
		const breakpointCols = getBreakpointNumber( cols, breakpoint, 'cols' );
		const breakpointLayout = getPresetBreakpointLayout(
			preset,
			breakpoint
		);
		const desktopLayout = getPresetBreakpointLayout( preset, 'Desktop' );

		nextLayouts[ breakpoint ] = blocks.reduce(
			( layoutItems, block, index ) => {
				const fallbackY = getNextRow( layoutItems );
				const sourceItem = breakpointLayout[ index ] ||
					desktopLayout[ index ] || {
						x: 0,
						y: fallbackY,
						w: getDefaultItemWidth( breakpoint, breakpointCols ),
						h: getDefaultItemHeight( breakpoint ),
					};

				layoutItems.push(
					normalizeLayoutItem(
						{
							...sourceItem,
							i: getResolvedItemId( block ),
						},
						breakpointCols,
						fallbackY
					)
				);

				return layoutItems;
			},
			[]
		);

		return nextLayouts;
	}, {} );

export default function Edit( {
	attributes,
	setAttributes,
	clientId,
	isSelected,
} ) {
	const {
		blockID,
		blockStyle,
		gutter,
		gutterUnits,
		compactType,
		allowOverlap,
		layouts,
	} = attributes;

	useBlockIdGenerator( {
		clientId,
		blockID,
		blockPrefix: 'fb-grid-layout',
		isSelected,
		attributes,
		setAttributes,
	} );

	useEffect( () => {
		const nextAttributes = {};

		if ( needsUnitNormalization( gutterUnits ) ) {
			nextAttributes.gutterUnits = getPxResponsiveUnits();
		}

		if ( Object.keys( nextAttributes ).length > 0 ) {
			setAttributes( nextAttributes );
		}
	}, [ gutterUnits, setAttributes ] );

	const deviceType = useDeviceType();
	const activeBreakpoint = BREAKPOINTS.includes( deviceType )
		? deviceType
		: 'Desktop';
	const { containerRef, mounted, width } = useContainerWidth( {
		measureBeforeMount: true,
	} );
	const lastSyncedLayoutRef = useRef( layouts );
	const pendingPresetLayoutsRef = useRef( null );
	const isApplyingPresetRef = useRef( false );
	const measuredContentHeightsRef = useRef( new Map() );

	const { innerBlocks, selectedGridItemClientId } = useSelect(
		( select ) => {
			const blockEditor = select( 'core/block-editor' );
			const blockItems = blockEditor.getBlocks( clientId );
			const directChildIds = blockItems.map(
				( block ) => block.clientId
			);
			const selectedBlockClientId =
				blockEditor.getSelectedBlockClientId();

			let nextSelectedGridItemClientId = null;

			if ( selectedBlockClientId ) {
				if ( directChildIds.includes( selectedBlockClientId ) ) {
					nextSelectedGridItemClientId = selectedBlockClientId;
				} else {
					nextSelectedGridItemClientId =
						blockEditor
							.getBlockParents( selectedBlockClientId )
							.find( ( parentClientId ) =>
								directChildIds.includes( parentClientId )
							) || null;
				}
			}

			return {
				innerBlocks: blockItems,
				selectedGridItemClientId: nextSelectedGridItemClientId,
			};
		},
		[ clientId ]
	);

	const [ builderView, setBuilderView ] = useState( () =>
		innerBlocks.length > 0 ? BUILDER_VIEWS.CONTENT : BUILDER_VIEWS.PICKER
	);

	useEffect( () => {
		setBuilderView( ( currentView ) => {
			if ( innerBlocks.length === 0 ) {
				return BUILDER_VIEWS.PICKER;
			}

			return currentView;
		} );
	}, [ innerBlocks.length ] );

	const {
		insertBlock,
		removeBlock,
		replaceInnerBlocks,
		selectBlock,
		updateBlockAttributes,
	} = useDispatch( 'core/block-editor' );

	const hasGridItems = innerBlocks.length > 0;
	const isLayoutMode = builderView === BUILDER_VIEWS.LAYOUT;
	const isPickerView = builderView === BUILDER_VIEWS.PICKER;
	const isContentView = builderView === BUILDER_VIEWS.CONTENT;

	const gridItems = useMemo(
		() =>
			innerBlocks.map( ( block ) => ( {
				block,
				itemId: getResolvedItemId( block ),
				isStatic: !! block.attributes.isStatic,
			} ) ),
		[ innerBlocks ]
	);
	const gridItemStateMap = useMemo(
		() =>
			new Map(
				gridItems.map( ( entry ) => [
					entry.itemId,
					{ isStatic: entry.isStatic },
				] )
			),
		[ gridItems ]
	);

	const currentCols = getBreakpointNumber( null, activeBreakpoint, 'cols' );
	const baseRowHeight = getBreakpointNumber(
		null,
		activeBreakpoint,
		'rowHeight'
	);
	const currentGutter = getBreakpointNumber(
		gutter,
		activeBreakpoint,
		'gutter'
	);
	const selectedGridItem = useMemo(
		() =>
			gridItems.find(
				( entry ) => entry.block.clientId === selectedGridItemClientId
			) || null,
		[ gridItems, selectedGridItemClientId ]
	);
	const selectedLayoutItemId = selectedGridItem?.itemId || '';
	const baseLayouts = useMemo(
		() => buildLayoutsFromGridItems( gridItems, null, layouts ),
		[ gridItems, layouts ]
	);
	const layoutCompactor = useMemo(
		() => getCompactor( compactType || null, allowOverlap ),
		[ allowOverlap, compactType ]
	);
	const effectiveLayouts = useMemo(
		() =>
			compactLayouts(
				baseLayouts,
				null,
				gridItemStateMap,
				layoutCompactor
			),
		[ baseLayouts, gridItemStateMap, layoutCompactor ]
	);

	useEffect( () => {
		if ( blockID ) {
			const css = generateGridLayoutStyle( attributes, effectiveLayouts );
			if ( css !== blockStyle ) {
				setAttributes( { blockStyle: css } );
			}
		}
	}, [ attributes, blockID, blockStyle, effectiveLayouts, setAttributes ] );

	useEffect( () => {
		lastSyncedLayoutRef.current = effectiveLayouts;
	}, [ effectiveLayouts ] );

	useEffect( () => {
		if (
			! isApplyingPresetRef.current ||
			! pendingPresetLayoutsRef.current ||
			innerBlocks.length === 0
		) {
			return;
		}

		const nextLayouts = pendingPresetLayoutsRef.current;

		pendingPresetLayoutsRef.current = null;
		lastSyncedLayoutRef.current = nextLayouts;
		setAttributes( { layouts: nextLayouts } );
		isApplyingPresetRef.current = false;
	}, [ innerBlocks.length, setAttributes ] );

	useEffect( () => {
		if ( isApplyingPresetRef.current ) {
			return;
		}

		if ( ! areLayoutsEqual( layouts, effectiveLayouts ) ) {
			lastSyncedLayoutRef.current = effectiveLayouts;
			setAttributes( { layouts: effectiveLayouts } );
		}
	}, [ effectiveLayouts, layouts, setAttributes ] );

	const onLayoutChange = useCallback(
		( newLayout ) => {
			const measuredMap = measuredContentHeightsRef.current;
			const hasDisplayScaling = isLayoutMode && measuredMap.size > 0;

			// Convert display-unit layout back to canonical grid units
			const canonicalLayout = newLayout.map( ( item ) => {
				if ( ! hasDisplayScaling ) {
					return normalizeLayoutItem( item, currentCols );
				}

				const canonScale = ( baseRowHeight + currentGutter ) / ( LAYOUT_ROW_UNIT + currentGutter );
				return normalizeLayoutItem(
					{
						...item,
						y: Math.round( item.y / canonScale ),
						h: Math.max( Math.round( item.h / canonScale ), 1 ),
					},
					currentCols
				);
			} );

			const nextLayouts = {
				...lastSyncedLayoutRef.current,
				[ activeBreakpoint ]: canonicalLayout,
			};

			lastSyncedLayoutRef.current = nextLayouts;
			setAttributes( { layouts: nextLayouts } );

			if ( activeBreakpoint === 'Desktop' ) {
				canonicalLayout.forEach( ( item ) => {
					const matchingEntry = gridItems.find(
						( entry ) => entry.itemId === item.i
					);

					if ( ! matchingEntry ) {
						return;
					}

					const {
						gridColumnStart,
						gridRowStart,
						gridColumnSpan,
						gridRowSpan,
					} = matchingEntry.block.attributes;

					if (
						gridColumnStart !== item.x ||
						gridRowStart !== item.y ||
						gridColumnSpan !== item.w ||
						gridRowSpan !== item.h
					) {
						updateBlockAttributes( matchingEntry.block.clientId, {
							gridColumnStart: item.x,
							gridRowStart: item.y,
							gridColumnSpan: item.w,
							gridRowSpan: item.h,
						} );
					}
				} );
			}
		},
		[
			activeBreakpoint,
			baseRowHeight,
			currentCols,
			currentGutter,
			gridItems,
			isLayoutMode,
			setAttributes,
			updateBlockAttributes,
		]
	);

	const measureContentHeights = useCallback( () => {
		const wrapper = containerRef.current;
		if ( ! wrapper ) {
			return;
		}

		const contentItems = wrapper.querySelectorAll(
			'.grid-content-layer > [data-grid-id]'
		);

		contentItems.forEach( ( el ) => {
			const itemId = el.getAttribute( 'data-grid-id' );
			if ( itemId ) {
				measuredContentHeightsRef.current.set(
					itemId,
					el.getBoundingClientRect().height
				);
			}
		} );
	}, [ containerRef ] );

	const layoutDisplayRowHeight = LAYOUT_ROW_UNIT;

	const openTemplatePicker = useCallback( () => {
		setBuilderView( BUILDER_VIEWS.PICKER );
	}, [] );

	const goToLayoutView = useCallback( () => {
		if ( ! hasGridItems ) {
			setBuilderView( BUILDER_VIEWS.PICKER );
			return;
		}

		measureContentHeights();
		setBuilderView( BUILDER_VIEWS.LAYOUT );
	}, [ hasGridItems, measureContentHeights ] );

	const goToContentView = useCallback( () => {
		setBuilderView( BUILDER_VIEWS.CONTENT );
	}, [] );

	const applyPreset = useCallback(
		( preset ) => {
			const presetBlocks = createPresetBlocks( preset );
			const presetLayouts = createPresetLayouts(
				preset,
				presetBlocks,
				null
			);

			isApplyingPresetRef.current = true;
			pendingPresetLayoutsRef.current = presetLayouts;
			replaceInnerBlocks( clientId, presetBlocks, false );
			setBuilderView( BUILDER_VIEWS.LAYOUT );

			requestAnimationFrame( () => {
				if ( presetBlocks[ 0 ] ) {
					selectBlock( presetBlocks[ 0 ].clientId );
				} else {
					selectBlock( clientId );
				}
			} );
		},
		[ clientId, replaceInnerBlocks, selectBlock ]
	);

	const addGridItem = useCallback( () => {
		if ( ! hasGridItems ) {
			openTemplatePicker();
			return;
		}

		const desktopDefaultWidth = getDefaultItemWidth(
			'Desktop',
			getBreakpointNumber( null, 'Desktop', 'cols' )
		);
		const desktopDefaultHeight = getDefaultItemHeight( 'Desktop' );
		const newBlock = createBlock( 'frontis-blocks/grid-item', {
			gridColumnSpan: desktopDefaultWidth,
			gridRowSpan: desktopDefaultHeight,
			gridColumnStart: 0,
			gridRowStart: 0,
		} );
		insertBlock( newBlock, innerBlocks.length, clientId );
		setBuilderView( BUILDER_VIEWS.LAYOUT );
	}, [
		clientId,
		hasGridItems,
		innerBlocks.length,
		insertBlock,
		openTemplatePicker,
	] );

	const focusGridItem = useCallback(
		( itemId, { exitLayoutMode = false } = {} ) => {
			const matchingEntry = gridItems.find(
				( entry ) => entry.itemId === itemId
			);

			if ( ! matchingEntry ) {
				return;
			}

			selectBlock( matchingEntry.block.clientId );

			if ( exitLayoutMode ) {
				setBuilderView( BUILDER_VIEWS.CONTENT );
				requestAnimationFrame( () => {
					selectBlock( matchingEntry.block.clientId );
				} );
			}
		},
		[ gridItems, selectBlock ]
	);

	const removeGridItem = useCallback(
		( itemId ) => {
			const matchingEntryIndex = gridItems.findIndex(
				( entry ) => entry.itemId === itemId
			);

			if ( matchingEntryIndex < 0 ) {
				return;
			}

			const matchingEntry = gridItems[ matchingEntryIndex ];
			const shouldRemove = window.confirm(
				sprintf(
					__(
						'Remove Item %d and all blocks inside it?',
						'frontis-blocks'
					),
					matchingEntryIndex + 1
				)
			);

			if ( ! shouldRemove ) {
				return;
			}

			removeBlock( matchingEntry.block.clientId, false );
			requestAnimationFrame( () => {
				selectBlock( clientId );
			} );
		},
		[ clientId, gridItems, removeBlock, selectBlock ]
	);

	const handleLayoutItemKeyDown = useCallback(
		( event, itemId ) => {
			if ( event.key === 'Enter' || event.key === ' ' ) {
				event.preventDefault();
				focusGridItem( itemId );
			}
		},
		[ focusGridItem ]
	);

	const rglLayout = useMemo( () => {
		const baseLayout = ( effectiveLayouts?.[ activeBreakpoint ] || [] ).map(
			( item ) => ( {
				...item,
				static: gridItemStateMap.get( item.i )?.isStatic || false,
			} )
		);

		const measuredMap = measuredContentHeightsRef.current;
		if ( ! isLayoutMode || measuredMap.size === 0 ) {
			return baseLayout;
		}

		const unitStep = LAYOUT_ROW_UNIT + currentGutter;

		// Compute per-item display h based on individual content height
		const itemDisplayH = new Map();
		baseLayout.forEach( ( item ) => {
			const ch = measuredMap.get( item.i ) || 0;
			if ( ch > 0 ) {
				itemDisplayH.set(
					item.i,
					Math.max( Math.ceil( ( ch + currentGutter ) / unitStep ), 1 )
				);
			} else {
				// No measurement — scale canonical h proportionally
				const canonPx = ( baseRowHeight + currentGutter ) * item.h - currentGutter;
				itemDisplayH.set(
					item.i,
					Math.max( Math.ceil( ( canonPx + currentGutter ) / unitStep ), 1 )
				);
			}
		} );

		// Group items by row to compute y offsets
		// Next row starts below the tallest item in the current row
		const rowGroups = new Map();
		baseLayout.forEach( ( item ) => {
			if ( ! rowGroups.has( item.y ) ) {
				rowGroups.set( item.y, [] );
			}
			rowGroups.get( item.y ).push( item );
		} );

		// For each row, the offset to the next row = max display h in that row
		const rowMaxDisplayH = new Map();
		rowGroups.forEach( ( items, y ) => {
			let maxH = 0;
			items.forEach( ( item ) => {
				const dh = itemDisplayH.get( item.i ) || item.h;
				if ( dh > maxH ) {
					maxH = dh;
				}
			} );
			rowMaxDisplayH.set( y, maxH );
		} );

		const sortedRows = [ ...rowGroups.keys() ].sort( ( a, b ) => a - b );
		const yOffsetMap = new Map();
		let cumulativeY = 0;
		sortedRows.forEach( ( y ) => {
			yOffsetMap.set( y, cumulativeY );
			cumulativeY += rowMaxDisplayH.get( y );
		} );

		return baseLayout.map( ( item ) => ( {
			...item,
			y: yOffsetMap.has( item.y ) ? yOffsetMap.get( item.y ) : item.y,
			h: itemDisplayH.has( item.i ) ? itemDisplayH.get( item.i ) : item.h,
		} ) );
	}, [
		activeBreakpoint,
		effectiveLayouts,
		gridItemStateMap,
		isLayoutMode,
		baseRowHeight,
		currentGutter,
		// eslint-disable-next-line react-hooks/exhaustive-deps
		builderView,
	] );

	const blockProps = useBlockProps( {
		className: `frontis-block fb-grid-layout-main-wrapper grid-layout-container ${ blockID } mode-${ builderView }`,
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'grid-content-layer fb-grid-layout-container',
		},
		{
			allowedBlocks: [ 'frontis-blocks/grid-item' ],
			renderAppender: false,
		}
	);

	const toolbarPrimaryLabel = hasGridItems
		? isLayoutMode
			? __( 'Back to Content', 'frontis-blocks' )
			: __( 'Edit Layout', 'frontis-blocks' )
		: __( 'Choose Template', 'frontis-blocks' );
	const toolbarPrimaryIcon = hasGridItems
		? isLayoutMode
			? 'edit'
			: 'layout'
		: 'screenoptions';
	const handleToolbarPrimaryAction = () => {
		if ( ! hasGridItems ) {
			setBuilderView( BUILDER_VIEWS.PICKER );
			return;
		}

		if ( isLayoutMode ) {
			goToContentView();
			return;
		}

		goToLayoutView();
	};

	const isProActive = getProActive();
	const gridLayoutAvailable = applyFilters('frontisblocks-grid-layout-pro-available', false);

	if(!gridLayoutAvailable || !isProActive) {
		return (
			<UpgradeToProPopup />
		)
	}

	return (
		<>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				addGridItem={ addGridItem }
			/>

			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ toolbarPrimaryIcon }
						label={ toolbarPrimaryLabel }
						onClick={ handleToolbarPrimaryAction }
						isPressed={ isLayoutMode }
					/>
					<ToolbarButton
						icon="plus"
						label={
							hasGridItems
								? __( 'Add Grid Item', 'frontis-blocks' )
								: __( 'Choose Template', 'frontis-blocks' )
						}
						onClick={ addGridItem }
					/>
					{ hasGridItems && (
						<ToolbarDropdownMenu
							icon={ getResponsiveDeviceIcon( activeBreakpoint ) }
							label={ sprintf(
								__( '%s Preview', 'frontis-blocks' ),
								activeBreakpoint
							) }
							controls={ BREAKPOINTS.map( ( breakpoint ) => ( {
								title: breakpoint,
								icon: getResponsiveDeviceIcon( breakpoint ),
								isActive: activeBreakpoint === breakpoint,
								onClick: () =>
									setDeviceType( breakpoint, false ),
							} ) ) }
						/>
					) }
				</ToolbarGroup>
			</BlockControls>

			<div { ...blockProps }>
				<div className="grid-editor-workspace" ref={ containerRef }>
					{ isPickerView ? (
						<div className="grid-template-stage">
							<div className="grid-template-panel">
								<div className="grid-template-panel-copy">
									<span
										className="grid-template-panel-icon dashicons dashicons-screenoptions"
										aria-hidden="true"
									/>
									<h3>{ __( 'Grid Layout Builder', 'frontis-blocks' ) }</h3>
									<p>
										{ __(
											'Select a Grid layout.',
											'frontis-blocks'
										) }
									</p>
								</div>

								<div className="grid-template-grid">
									{ GRID_TEMPLATE_PRESETS.map( ( preset ) => {
										const previewLayout =
											getPresetBreakpointLayout(
												preset,
												'Desktop'
											);

										return (
											<button
												key={ preset.id }
												type="button"
												className="grid-template-card"
												aria-label={ sprintf(
													__(
														'Use %s layout',
														'frontis-blocks'
													),
													preset.title
												) }
												onClick={ () =>
													applyPreset( preset )
												}
											>
												<div className="grid-template-preview">
													<div
														className="grid-template-preview-grid"
														style={ {
															gridTemplateRows: `repeat(${ getPreviewRows(
																previewLayout
															) }, minmax(0, 1fr))`,
														} }
													>
														{ previewLayout.map(
															( item, index ) => (
																<span
																	key={ `${
																		preset.id
																	}-${
																		index + 1
																	}` }
																	className="grid-template-preview-item"
																	style={ {
																		gridColumn: `${
																			item.x +
																			1
																		} / span ${
																			item.w
																		}`,
																		gridRow: `${
																			item.y +
																			1
																		} / span ${
																			item.h
																		}`,
																	} }
																/>
															)
														) }
													</div>
												</div>
												<span className="screen-reader-text">
													{ preset.title }
												</span>
											</button>
										);
									} ) }
								</div>
							</div>
						</div>
					) : isLayoutMode ? (
						<div className="layout-overlay-mode">

							{ mounted && width > 0 && (
								<ReactGridLayout
									className="layout-canvas"
									layout={ rglLayout }
									width={ width }
									gridConfig={ {
										cols: currentCols,
										rowHeight: layoutDisplayRowHeight,
										margin: [
											currentGutter,
											currentGutter,
										],
									} }
									resizeConfig={ {
										handles: [ 'w', 'e', 'se' ],
									} }
									compactor={ layoutCompactor }
									onLayoutChange={ onLayoutChange }
								>
									{ rglLayout.map( ( item, index ) => (
										<div
											key={ item.i }
											className={ `rgl-item-box ${
												selectedLayoutItemId === item.i
													? 'is-active'
													: ''
											} ${
												item.static ? 'is-static' : ''
											}` }
											onClick={ () =>
												focusGridItem( item.i )
											}
											onDoubleClick={ () =>
												focusGridItem( item.i, {
													exitLayoutMode: true,
												} )
											}
											onKeyDown={ ( event ) =>
												handleLayoutItemKeyDown(
													event,
													item.i
												)
											}
											role="button"
											tabIndex={ 0 }
											aria-pressed={
												selectedLayoutItemId === item.i
											}
										>
											<div className="item-label">
												<span className="item-name">
													{ sprintf(
														__(
															'Item %d',
															'frontis-blocks'
														),
														index + 1
													) }
												</span>
												{ item.static && (
													<span className="item-status">
														{ __(
															'Locked',
															'frontis-blocks'
														) }
													</span>
												) }
											</div>
										</div>
									) ) }
								</ReactGridLayout>
							) }
						</div>
					) : isContentView ? (
						<div className="grid-content-stage">
							<div { ...innerBlocksProps } />
						</div>
					) : null }
				</div>

			</div>
			<style>{ blockStyle }</style>
		</>
	);
}
