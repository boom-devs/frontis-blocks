import {select, useSelect} from '@wordpress/data';
import {useEffect, useMemo} from '@wordpress/element';
import Inspector from './inspector';
import {ColumnsPicker} from './variationPicker';
import './editor.scss';
import DynamicCSSLoader from "@Components/dynamic-css-loader/dynamic-css-loader";
import Render from "@Blocks/container/render";
import styling from "@Blocks/container/styling";
import frontEndStyle from "@Blocks/container/frontend-style";
import {useDeviceType} from "@Config/displayType";

const Edit = (props) => {
	let deviceType= useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			p_block_id,
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
		},
		clientId,
		setAttributes,
		name,
		blockStyle,
		context,
		hasDynamicContent,
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

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );
	const blockFrontEndStyle = useMemo( () => frontEndStyle( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

    // const customCss = getCustomCss(advancedHeadingCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${blockFrontEndStyle}`.replace(/\s+/g, ' ').trim()});
    }, [blockFrontEndStyle] );


	console.log( blockFrontEndStyle );

	if ( ! variationSelected && 0 === getBlockParents?.length ) {
		const block = select('core/block-editor').getBlock(clientId);
		if (block) {
			const coreBlockEditord = select( 'core/block-editor' );
			const parentBlockId = coreBlockEditord.getBlockRootClientId( props.clientId );
			setAttributes({p_block_id: parentBlockId});
		}

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
