import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksPropsV2
} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {useEffect, useMemo, useRef} from '@wordpress/element';
import {Icon} from '@wordpress/components';
import {plus} from '@wordpress/icons';
import {__} from '@wordpress/i18n';
import Inspector from './inspector';
import {VariationPicker} from './variationPicker';
import './editor.scss';
import DynamicCSSLoader from "@Components/dynamic-css-loader/dynamic-css-loader";
import Render from "@Blocks/container/render";
import styling from "@Blocks/container/styling";

const Edit = (props) => {
	const {
		isSelected,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderColor,
			deviceType,
			borderHoverColor,
			borderRadius,
			variationSelected,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			globalBlockStyleId,
			backgroundType,
			backgroundVideoOpacity,
			isGridCssInParent,
		},
		clientId,
		setAttributes,
		name,
		context,
		hasDynamicContent
	} = props;

	const {
		isParentOfSelectedBlock,
		variations,
		defaultVariation,
		getBlockParents,
		parentBlocks,
		parentAttributes,
	} = useSelect( ( select ) => {
		const coreBlocks = select( 'core/blocks' );
		const coreBlockEditor = select( 'core/block-editor' );
		const getBlockParentStore = coreBlockEditor?.getBlockParents( clientId );

		const parentClientId = coreBlockEditor.getBlockRootClientId( props.clientId );
		return {
			defaultVariation: coreBlocks?.getDefaultBlockVariation( name ),
			variations: coreBlocks?.getBlockVariations( name ),
			isParentOfSelectedBlock: coreBlockEditor?.hasSelectedInnerBlock( clientId, true ),
			getBlockParents : getBlockParentStore,
			parentBlocks : coreBlockEditor?.getBlocksByClientId( getBlockParentStore ),
			parentAttributes : coreBlockEditor.getBlockAttributes( parentClientId ),
		};
	} );


	if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		const gridCssInParent = 'grid' === parentAttributes?.layout;
		// If the parent block is a grid block, then we need to set the grid item settings.
		if ( gridCssInParent !== isGridCssInParent ) {
			setAttributes( { isGridCssInParent: gridCssInParent } );
		}
	}, [ parentAttributes?.layout ] );

	console.log("Parent Blocks")
	console.log(parentBlocks);

	useEffect( () => {
		// Check if a parent of this container is one of these special blocks.
		const attributesToUpdate = {};

		// Conditionally set the isBlockRootParent attribute
		if ( ! parentBlocks || parentBlocks.length === 0 || ! parentBlocks.some( parent => parent.name === 'frontis-blocks/container' ) ) {
			attributesToUpdate.isBlockRootParent = true;
		}

		// If the legacy video overlay opacity for video background was set, migrate it.
		if ( 'video' === backgroundType && backgroundVideoOpacity ) {
			attributesToUpdate.overlayOpacity = backgroundVideoOpacity;
			attributesToUpdate.backgroundVideoOpacity = 0;
		}

		// Compare with attribute and attributeToUpdate and update only if there is a change.
		if ( attributesToUpdate.isBlockRootParent !== attributes.isBlockRootParent
			|| attributesToUpdate.hasPopupParent !== attributes.hasPopupParent
			|| attributesToUpdate.hasSliderParent !== attributes.hasSliderParent
			|| attributesToUpdate.backgroundVideoOpacity !== attributes.backgroundVideoOpacity
		) {
			setAttributes( attributesToUpdate );
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
	}, [] );

	useEffect( () => {
		if ( hasDynamicContent && ! attributes?.context?.postId ) {
			setAttributes( ( prevAttributes ) => ( {
				...prevAttributes,
				context,
			} ) );
		}
	}, [ hasDynamicContent, context?.postId ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, attributes.deviceType ), [ attributes, attributes.deviceType ] );

	if ( ! variationSelected && 0 === getBlockParents?.length ) {
		return <VariationPicker { ...{ ...props, variations, defaultVariation } } />
	}

	const handleResponsive = (device) => {
		console.log(device)
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
