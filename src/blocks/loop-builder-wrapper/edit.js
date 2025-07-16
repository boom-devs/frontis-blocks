// import { __ } from '@wordpress/i18n';
// import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
// import { useEffect, useMemo } from '@wordpress/element';
// import Inspector from './inspector';
// import { withSelect } from '@wordpress/data';
// import { compose } from '@wordpress/compose';

// const Edit = (props) => {
//     const { attributes, setAttributes, clientId, context, slideIndex } = props;

//     const { blockId } = attributes;


//     const parentBlocks = wp.blocks.getBlockTypes().filter( function ( item ) {
// 		return ! item.parent;
// 	} );

//     const TEMPLATE = [
//         [
//             'frontis-blocks/container',
//             {},
//             [
//                 [ 'frontis-blocks/advanced-heading',  ]
//             ]
//         ]
//     ];

//     // Hide slider block.
// 	const ALLOWED_BLOCKS = parentBlocks
//     .map( ( block ) => block.name )
//     .filter(
//         ( blockName ) => [ 'frontis-blocks/slider', ].indexOf( blockName ) === -1
//     );

//     const innerBlockOptions = {
//         allowedBlocks: ALLOWED_BLOCKS,
//         template: TEMPLATE,
//     };

//     const innerBlocksProps = useInnerBlocksProps(
//         {
//             className: `swiper-content`,
//             slot: 'container-start',
//         },
//         innerBlockOptions
//     );

//     const blockProps = useBlockProps({
//         className: `fb-slide-main-wrapper ${blockId || 'default-id'} swiper-slide`,
//     });

//     return (
//         <>
//             <div {...blockProps}>
//                 <div {...innerBlocksProps} />
//             </div>
//         </>
//     );
// };

// const applyWithSelect = withSelect((select, props) => {
//     const deviceType = select('core/editor')?.getDeviceType ? select('core/editor').getDeviceType() : null;
//     const { getBlocks, getBlockIndex } = select('core/block-editor');
//     const innerBlocks = getBlocks(props.clientId);
//     const slideIndex = getBlockIndex(props.clientId);

//     return {
//         innerBlocks,
//         deviceType,
//         isParentOfSelectedBlock: select('core/block-editor').hasSelectedInnerBlock(props.clientId, true),
//         slideIndex,
//     };
// });

// export default compose(applyWithSelect)(Edit);

/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { memo, useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __, _x } from '@wordpress/i18n';
import {
	BlockControls,
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { Spinner, ToolbarGroup } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { list, grid } from '@wordpress/icons';

const TEMPLATE = [
	[
		'frontis-blocks/container',
		{},
		[
			// [ 'frontis-blocks/advanced-heading' ],
			[ 'core/post-title' ],
		]
	]
];

function PostTemplateInnerBlocks({ classList }) {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: clsx('wp-block-post', classList) },
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true }
	);

	return <li {...innerBlocksProps} />;
}

function PostTemplateBlockPreview( {
	blocks,
	blockContextId,
	classList,
	isHidden,
	setActiveBlockContextId,
} ) {
	const blockPreviewProps = useBlockPreview( {
		blocks,
		props: {
			className: clsx( 'wp-block-post', classList ),
		},
	} );

	const handleOnClick = () => {
		setActiveBlockContextId( blockContextId );
	};

	const style = {
		display: isHidden ? 'none' : undefined,
	};

	return (
		<li
			{ ...blockPreviewProps }
			tabIndex={ 0 }
			role="button"
			onClick={ handleOnClick }
			onKeyPress={ handleOnClick }
			style={ style }
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo( PostTemplateBlockPreview );

export default function Edit( {
	setAttributes,
	clientId,
	attributes: { layout },
	__unstableLayoutClassNames,
} ) {
	const { type: layoutType, columnCount = 3 } = layout || {};
	const [ activeBlockContextId, setActiveBlockContextId ] = useState();

	const { posts, blocks } = useSelect(
		(select) => {
			const { getEntityRecords } = select('core');
			return {
				posts: getEntityRecords('postType', 'post', {
					per_page: 5,
					order: 'desc',
					orderby: 'date',
				}),
			};
		},
		[]
	);

	const blockContexts = useMemo(
		() =>
			posts?.map( ( post ) => ( {
				postType: post.type,
				postId: post.id,
				classList: post.class_list ?? '',
			} ) ),
		[ posts ]
	);

	const blockProps = useBlockProps( {
		className: clsx( __unstableLayoutClassNames, {
			[ `columns-${ columnCount }` ]:
				layoutType === 'grid' && columnCount,
		} ),
	} );

	if ( ! posts ) {
		return (
			<p { ...blockProps }>
				<Spinner />
			</p>
		);
	}

	if ( ! posts.length ) {
		return <p { ...blockProps }> { __( 'No results found.' ) }</p>;
	}

	console.log(blockContexts);

	return (
		<>
			<ul { ...blockProps }>
				{ blockContexts &&
					blockContexts.map( ( blockContext ) => (
						<BlockContextProvider
							key={ blockContext.postId }
							value={ blockContext }
						>
							{ blockContext.postId ===
							( activeBlockContextId ||
								blockContexts[ 0 ]?.postId ) ? (
								<PostTemplateInnerBlocks
									classList={ blockContext.classList }
								/>
							) : null }
							<MemoizedPostTemplateBlockPreview
								blocks={ blocks }
								blockContextId={ blockContext.postId }
								classList={ blockContext.classList }
								setActiveBlockContextId={
									setActiveBlockContextId
								}
								isHidden={
									blockContext.postId ===
									( activeBlockContextId ||
										blockContexts[ 0 ]?.postId )
								}
							/>
						</BlockContextProvider>
					) ) }
			</ul>
		</>
	);
}