import {select, useSelect} from '@wordpress/data';
import {useEffect, useMemo} from '@wordpress/element';
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

	const {
		isParentOfSelectedBlock,
		variations,
		defaultVariation,
		getBlockParents,
		hasContainerParent,
		parentLayout,
	} = useSelect( ( select ) => {
		const coreBlocks = select( 'core/blocks' );
		const coreBlockEditor = select( 'core/block-editor' );
		const getBlockParentStore = coreBlockEditor?.getBlockParents( clientId );
		const parentClientId = coreBlockEditor?.getBlockRootClientId( props.clientId );
		return {
			defaultVariation: coreBlocks?.getDefaultBlockVariation( name ),
			variations: coreBlocks?.getBlockVariations( name ),
			isParentOfSelectedBlock: coreBlockEditor?.hasSelectedInnerBlock( clientId, true ),
			getBlockParents : getBlockParentStore,
			hasContainerParent : getBlockParentStore?.some( id => coreBlockEditor?.getBlockName( id ) === 'frontis-blocks/container' ),
			parentLayout : parentClientId ? coreBlockEditor?.getBlockAttributes( parentClientId )?.layout : null,
		};
	}, [ clientId, props.clientId, name ] );

	/**
	 * Hide empty block inserter when this container has selected inner blocks.
	 * Only runs when selection state changes, avoiding unnecessary DOM queries on every render.
	 */
	useEffect(() => {
		if ( isParentOfSelectedBlock ) {
			const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
			if ( emptyBlockInserter ) {
				emptyBlockInserter.style.display = 'none';
			}
		}
	}, [isParentOfSelectedBlock]);

	useEffect( () => {
		const gridCssInParent = 'grid' === parentLayout;
		// If the parent block is a grid block, then we need to set the grid item settings.
		if ( gridCssInParent !== isGridCssInParent ) {
			setAttributes( { isGridCssInParent: gridCssInParent } );
		}
	}, [ parentLayout, isGridCssInParent ] );

	useEffect( () => {
		// Check if a parent of this container is a container block.
		const attributesToUpdate = {};

		// Conditionally set the isBlockRootParent attribute
		if (!hasContainerParent) {
			if(formContainerSwitcher === false ) {
				attributesToUpdate.isBlockRootParent = true;
			} else {
				attributesToUpdate.isBlockRootParent = false;
			}
		} else {
			attributesToUpdate.isBlockRootParent = false;
		}

		// If the legacy video overlay opacity for video background was set, migrate it.
		if ( 'video' === backgroundType && backgroundVideoOpacity ) {
			attributesToUpdate.overlayOpacity = backgroundVideoOpacity;
			attributesToUpdate.backgroundVideoOpacity = 0;
		}

		// Compare with attribute and attributeToUpdate and update only if there is a change.
		if (attributesToUpdate.isBlockRootParent !== attributes.isBlockRootParent
			|| attributesToUpdate.backgroundVideoOpacity !== attributes.backgroundVideoOpacity
		) {
			setAttributes( attributesToUpdate );
		}

		// border
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			if (typeof migrateBorderAttributes === 'function') {
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
		}
	}, [formContainerSwitcher, hasContainerParent, backgroundType, backgroundVideoOpacity] );

	useEffect( () => {
		if ( hasDynamicContent && ! attributes?.context?.postId ) {
			setAttributes( ( prevAttributes ) => ( {
				...prevAttributes,
				context,
			} ) );
		}
	}, [ hasDynamicContent, context?.postId ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );
	const blockFrontEndStyle = useMemo( () => frontEndStyle( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

    // const customCss = getCustomCss(advancedHeadingCustomCSS, `.${blockId}`);

    useEffect(() => {
        const currentStyle = `${blockStyle || ''}`.replace(/\s+/g, ' ').trim();
        const newStyle = `${blockFrontEndStyle || ''}`.replace(/\s+/g, ' ').trim();
        if (currentStyle !== newStyle) {
            setAttributes({ blockStyle: newStyle });
        }
    }, [blockFrontEndStyle, blockStyle]);

	// Handle variation picker - show picker when no variation selected and block is root
	const shouldShowVariationPicker = ! variationSelected && 0 === getBlockParents?.length;
	
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
			<DynamicCSSLoader { ...{ blockStyling } } />
			{isSelected && <Inspector { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default Edit;
