import {select, useSelect} from '@wordpress/data';
import {useEffect, useMemo, useState} from '@wordpress/element';
import { store as blockEditorStore } from '@wordpress/block-editor';
import Inspector from './inspector';
import {ColumnsPicker} from './variationPicker';
import './editor.scss';
import DynamicCSSLoader from "@Components/dynamic-css-loader/dynamic-css-loader";
import Render from "@Blocks/container/render";
import styling from "@Blocks/container/styling";
import frontEndStyle from "@Blocks/container/frontend-style";
import {useDeviceType} from "@Config/displayType";
import useIsInsideLoopBuilder from '@Utils/useIsInsideLoopBuilder';

/** clientId -> last computed editor CSS (avoids sync restyle storms on deep trees) */
const editorStyleCache = new Map();

const Edit = (props) => {
	let deviceType= useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			p_block_id,
			block_id,
			borderStyle,
			borderWidth,
			borderColor,
			borderHoverColor,
			borderRadius,
			variationSelected,
			globalBlockStyleId,
			backgroundType,
			backgroundVideoOpacity,
			isGridCssInParent,
			containerDirection,
			containerChildrenWidth,
			containerGlobalPadding,
			loopAutoApplied,
			isBlockRootParent,
			formContainerSwitcher,
		},
		clientId,
		setAttributes,
		name,
		blockStyle,
		context,
		hasDynamicContent,
	} = props;

	useEffect(() => {
		const newValue = context["fb/formContainerSwitcher"] === undefined ? false : context["fb/formContainerSwitcher"];
		// Only update if value actually changed
		if (formContainerSwitcher !== newValue) {
			setAttributes({ formContainerSwitcher: newValue });
		}
	}, [context["fb/formContainerSwitcher"]]);


	// Loop Builder Check
	const isInsideLoopBuilder = useIsInsideLoopBuilder(clientId, loopAutoApplied);
	useEffect(() => {
		if (isInsideLoopBuilder && !loopAutoApplied) {
			setAttributes({ 
				containerDirection: { Desktop: 'column', Tablet: 'column', Mobile: 'column' },
				containerChildrenWidth: 'full',
				loopAutoApplied: true
			});
		}
	}, [isInsideLoopBuilder, loopAutoApplied]);

	/**
	 * Keep this selector cheap and stable.
	 * - Dependency array limits re-subscription churn
	 * - Shallow hasSelectedInnerBlock avoids O(depth) walks per store update
	 * - Return primitives only (no getBlocksByClientId arrays) to reduce re-renders
	 */
	const {
		isParentOfSelectedBlock,
		parentIdsLength,
		hasContainerParent,
		parentLayout,
		variations,
		defaultVariation,
	} = useSelect( ( select ) => {
		const coreBlocks = select( 'core/blocks' );
		const coreBlockEditor = select( 'core/block-editor' );
		const parentIds = coreBlockEditor.getBlockParents( clientId );
		const parentClientId = coreBlockEditor.getBlockRootClientId( clientId );

		let hasContainerParent = false;
		for ( let i = 0; i < parentIds.length; i++ ) {
			if ( coreBlockEditor.getBlockName( parentIds[ i ] ) === 'frontis-blocks/container' ) {
				hasContainerParent = true;
				break;
			}
		}

		const parentAttributes = parentClientId
			? coreBlockEditor.getBlockAttributes( parentClientId )
			: null;

		// Variations are only needed for the root variation picker.
		const needsVariations = parentIds.length === 0;

		return {
			isParentOfSelectedBlock: coreBlockEditor.hasSelectedInnerBlock( clientId, false ),
			parentIdsLength: parentIds.length,
			hasContainerParent,
			parentLayout: parentAttributes?.layout ?? null,
			variations: needsVariations ? coreBlocks.getBlockVariations( name ) : undefined,
			defaultVariation: needsVariations ? coreBlocks.getDefaultBlockVariation( name ) : undefined,
		};
	}, [ clientId, name ] );

	/**
	 * Hide empty block inserter when this container has selected inner blocks.
	 * Only runs when selection state changes, avoiding unnecessary DOM queries on every render.
	 */
	useEffect(() => {
		if ( ! isParentOfSelectedBlock ) {
			return;
		}
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( ! emptyBlockInserter ) {
			return;
		}
		const previousDisplay = emptyBlockInserter.style.display;
		emptyBlockInserter.style.display = 'none';
		return () => {
			emptyBlockInserter.style.display = previousDisplay;
		};
	}, [isParentOfSelectedBlock]);

	useEffect( () => {
		const gridCssInParent = 'grid' === parentLayout;
		// If the parent block is a grid block, then we need to set the grid item settings.
		if ( gridCssInParent !== isGridCssInParent ) {
			setAttributes( { isGridCssInParent: gridCssInParent } );
		}
	}, [ parentLayout, isGridCssInParent, setAttributes ] );

	useEffect( () => {
		// Check if a parent of this container is one of these special blocks.
		const attributesToUpdate = {};

		// Conditionally set the isBlockRootParent attribute
		if ( ! hasContainerParent ) {
			if(formContainerSwitcher === false ) {
				attributesToUpdate.isBlockRootParent = true;
			} else {
				attributesToUpdate.isBlockRootParent = false;
			}
		}

		// If the legacy video overlay opacity for video background was set, migrate it.
		if ( 'video' === backgroundType && backgroundVideoOpacity ) {
			attributesToUpdate.overlayOpacity = backgroundVideoOpacity;
			attributesToUpdate.backgroundVideoOpacity = 0;
		}

		// Only write when there is something to change — avoids empty setAttributes({}) storms.
		if ( Object.keys( attributesToUpdate ).length > 0 ) {
			const filteredUpdates = {};
			if (
				'isBlockRootParent' in attributesToUpdate &&
				attributesToUpdate.isBlockRootParent !== isBlockRootParent
			) {
				filteredUpdates.isBlockRootParent = attributesToUpdate.isBlockRootParent;
			}
			if (
				'backgroundVideoOpacity' in attributesToUpdate &&
				attributesToUpdate.backgroundVideoOpacity !== backgroundVideoOpacity
			) {
				filteredUpdates.overlayOpacity = attributesToUpdate.overlayOpacity;
				filteredUpdates.backgroundVideoOpacity = attributesToUpdate.backgroundVideoOpacity;
			}
			if ( Object.keys( filteredUpdates ).length > 0 ) {
				setAttributes( filteredUpdates );
			}
		}

		if( globalBlockStyleId ) {
			return;
		}

		// border
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'container',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}
	}, [formContainerSwitcher, hasContainerParent, isBlockRootParent, backgroundType, backgroundVideoOpacity] );

	useEffect( () => {
		if ( hasDynamicContent && ! attributes?.context?.postId ) {
			setAttributes( ( prevAttributes ) => ( {
				...prevAttributes,
				context,
			} ) );
		}
	}, [ hasDynamicContent, context?.postId ] );

	const blockStylingLive = useMemo( () => {
		// Selected / direct parent: compute immediately so inspector edits preview instantly.
		if ( ! isSelected && ! isParentOfSelectedBlock ) {
			return null;
		}
		return styling( attributes, clientId, name, deviceType );
	}, [ isSelected, isParentOfSelectedBlock, attributes, deviceType, clientId, name ] );

	const [ deferredBlockStyling, setDeferredBlockStyling ] = useState( () =>
		editorStyleCache.get( clientId ) || ''
	);

	// Unselected containers: reuse cache, refresh on idle to avoid 500+ sync styling() storms.
	useEffect( () => {
		if ( isSelected || isParentOfSelectedBlock ) {
			if ( blockStylingLive ) {
				editorStyleCache.set( clientId, blockStylingLive );
				setDeferredBlockStyling( blockStylingLive );
			}
			return;
		}

		const cached = editorStyleCache.get( clientId );
		if ( cached ) {
			setDeferredBlockStyling( cached );
		}

		let idleId;
		let timeoutId;
		const computeDeferred = () => {
			const css = styling( attributes, clientId, name, deviceType );
			editorStyleCache.set( clientId, css );
			setDeferredBlockStyling( css );
			if ( editorStyleCache.size > 2500 ) {
				const oldest = editorStyleCache.keys().next().value;
				editorStyleCache.delete( oldest );
			}
		};

		if ( typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function' ) {
			idleId = window.requestIdleCallback( computeDeferred, { timeout: 4000 } );
		} else {
			timeoutId = window.setTimeout( computeDeferred, 32 );
		}

		return () => {
			if ( idleId != null && typeof window.cancelIdleCallback === 'function' ) {
				window.cancelIdleCallback( idleId );
			}
			if ( timeoutId != null ) {
				window.clearTimeout( timeoutId );
			}
		};
	}, [ isSelected, isParentOfSelectedBlock, attributes, deviceType, clientId, name, blockStylingLive ] );

	const blockStyling = blockStylingLive || deferredBlockStyling;

	// Keep frontend CSS in memory only for the selected container (attribute is role:local —
	// never written into post content). Meta sync / save persistence regenerates the rest.
	const blockFrontEndStyle = useMemo( () => {
		if ( ! isSelected ) {
			return null;
		}
		return frontEndStyle( attributes, clientId, name, deviceType );
	}, [ isSelected, attributes, deviceType, clientId, name ] );

	useEffect( () => {
		if ( ! isSelected || blockFrontEndStyle == null ) {
			return;
		}
		const newStyle = `${ blockFrontEndStyle }`.replace( /\s+/g, ' ' ).trim();
		if ( attributes.blockStyle !== newStyle ) {
			setAttributes( { blockStyle: newStyle } );
		}
	}, [ isSelected, blockFrontEndStyle ] );

	// Handle variation picker - show picker when no variation selected and block is root
	const shouldShowVariationPicker = ! variationSelected && 0 === parentIdsLength;
	
	// Initialize global responsive settings
	useEffect(() => {
		const parseResponsiveValue = (value) => {
			if (typeof value === "string") {
				try {
					return JSON.parse(value);
				} catch (e) {
					return { Desktop: value, Tablet: value, Mobile: value };
				}
			} else if (typeof value === "object") {
				return value;
			}
			return { Desktop: value, Tablet: value, Mobile: value };
		};

		const formatted_container_column_gap = parseResponsiveValue(FrontisBlocksData.container_column_gap);
		const formatted_container_row_gap = parseResponsiveValue(FrontisBlocksData.container_row_gap);
		const formatted_container_padding = parseResponsiveValue(FrontisBlocksData.container_padding);
		const formatted_desktop_breakpoint = FrontisBlocksData.desktop_breakpoint;
		const formatted_tablet_breakpoint = FrontisBlocksData.tablet_breakpoint;
		const formatted_mobile_breakpoint = FrontisBlocksData.mobile_breakpoint;

		const attributesToUpdate = {};

		// Only update if not already set to avoid overwriting user changes or causing infinite loops
		if (!attributes.globalColumnGap?.Desktop) {
			attributesToUpdate.globalColumnGap = {
				Desktop: formatted_container_column_gap.Desktop || "",
				Tablet: formatted_container_column_gap.Tablet || "",
				Mobile: formatted_container_column_gap.Mobile || "",
			};
		}
		if (!attributes.globalRowGap?.Desktop) {
			attributesToUpdate.globalRowGap = {
				Desktop: formatted_container_row_gap.Desktop || "",
				Tablet: formatted_container_row_gap.Tablet || "",
				Mobile: formatted_container_row_gap.Mobile || "",
			};
		}
		if (!attributes.containerGlobalPadding?.Desktop) {
			attributesToUpdate.containerGlobalPadding = {
				Desktop: formatted_container_padding.Desktop || "",
				Tablet: formatted_container_padding.Tablet || "",
				Mobile: formatted_container_padding.Mobile || "",
			};
		}
		if (!attributes.globalFullWidthContentBoxedWidth?.Desktop) {
			attributesToUpdate.globalFullWidthContentBoxedWidth = {
				Desktop: formatted_desktop_breakpoint || "1200",
				Tablet: formatted_tablet_breakpoint || "1024",
				Mobile: formatted_mobile_breakpoint || "767",
			};
		}

		if (Object.keys(attributesToUpdate).length > 0) {
			setAttributes(attributesToUpdate);
		}
	}, []);

	// Set p_block_id when showing variation picker - must be in useEffect, not render
	useEffect(() => {
		if (shouldShowVariationPicker) {
			const coreBlockEditord = select( 'core/block-editor' );
			const parentBlockId = coreBlockEditord.getBlockRootClientId( props.clientId );
			if (parentBlockId !== attributes.p_block_id) {
				setAttributes({p_block_id: parentBlockId});
			}
		}
	}, [shouldShowVariationPicker, props.clientId, attributes.p_block_id]);

	if ( shouldShowVariationPicker ) {
		return <ColumnsPicker { ...{ ...props, variations, defaultVariation } } />
	}


	return (
		<>
			{ blockStyling ? <DynamicCSSLoader { ...{ blockStyling } } /> : null }
			{isSelected && <Inspector { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default Edit;
