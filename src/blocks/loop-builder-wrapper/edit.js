/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { memo, useEffect, useMemo, useState } from '@wordpress/element';
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

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

const TEMPLATE = [
		[ 'core/post-title' ],
		[ 'core/post-date' ],
		[ 'core/post-excerpt' ],
  ];

function PostTemplateInnerBlocks( { classList } ) {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: clsx( 'wp-block-post', classList, 'fb-loop-builder-wrapper-inner-container' ) },
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true }
	);
	return <div { ...innerBlocksProps } />;
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
			className: clsx( 'wp-block-post', classList, 'fb-loop-builder-wrapper-preview-container' ),
		},
	} );

	const handleOnClick = () => {
		setActiveBlockContextId( blockContextId );
	};

	const style = {
		display: isHidden ? 'none' : undefined,
	};

	return (
		<div
			{ ...blockPreviewProps }
			tabIndex={ 0 }
			// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
			role="button"
			onClick={ handleOnClick }
			onKeyPress={ handleOnClick }
			style={ style }
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo( PostTemplateBlockPreview );

export default function Edit({ attributes, setAttributes, clientId, context }) {

	const {
		blockId,
        loopBuilderWrapperClass,
	} = attributes;

	const {
		query: {
			perPage,
			offset = 0,
			postType,
			order,
			orderBy,
			author,
			search,
			exclude,
			sticky,
			inherit,
			taxQuery,
			parents,
			pages,
			format,
			selectedAuthorSwitcher,
			selectedAuthor,
			deSelectedAuthor,
			selectedCatSwitcher,
			selectedCat,
			deSelectedCat,
			selectedTagSwitcher,
			selectedTag,
			deSelectedTag,
			...restQueryArgs
		} = {},
		templateSlug,
		previewPostType,
	} = context;

	// console

	const [ activeBlockContextId, setActiveBlockContextId ] = useState();
	const { posts, blocks } = useSelect(
		( select ) => {
			const { getEntityRecords, getTaxonomies } = select( coreStore );
			const { getBlocks } = select( blockEditorStore );
			const templateCategory =
				inherit &&
				templateSlug?.startsWith( 'category-' ) &&
				getEntityRecords( 'taxonomy', 'category', {
					context: 'view',
					per_page: 1,
					_fields: [ 'id' ],
					slug: templateSlug.replace( 'category-', '' ),
				} );
			const templateTag =
				inherit &&
				templateSlug?.startsWith( 'tag-' ) &&
				getEntityRecords( 'taxonomy', 'post_tag', {
					context: 'view',
					per_page: 1,
					_fields: [ 'id' ],
					slug: templateSlug.replace( 'tag-', '' ),
				} );
			const query = {
				offset: offset || 0,
				order,
				orderby: orderBy,
			};
			// There is no need to build the taxQuery if we inherit.
			if ( taxQuery && ! inherit ) {
				const taxonomies = getTaxonomies( {
					type: postType,
					per_page: -1,
					context: 'view',
				} );
				// We have to build the tax query for the REST API and use as
				// keys the taxonomies `rest_base` with the `term ids` as values.
				const builtTaxQuery = Object.entries( taxQuery ).reduce(
					( accumulator, [ taxonomySlug, terms ] ) => {
						const taxonomy = taxonomies?.find(
							( { slug } ) => slug === taxonomySlug
						);
						if ( taxonomy?.rest_base ) {
							accumulator[ taxonomy?.rest_base ] = terms;
						}
						return accumulator;
					},
					{}
				);
				if ( !! Object.keys( builtTaxQuery ).length ) {
					Object.assign( query, builtTaxQuery );
				}
			}
			if ( perPage ) {
				query.per_page = perPage;
			}
			// if ( author ) {
			// 	query.author = author;
			// }

			// NEW: Handle author inclusion/exclusion
			if ( selectedAuthorSwitcher === 'include' && selectedAuthor?.length ) {
				query.author = selectedAuthor.join(',');
			}
			if ( selectedAuthorSwitcher === 'exclude' && deSelectedAuthor?.length ) {
				query.author_exclude = deSelectedAuthor.join(',');
			}

			// Category filter
			if ( selectedCatSwitcher === 'include' && selectedCat?.length ) {
				query.categories = selectedCat.join(',');
			}
			if ( selectedCatSwitcher === 'exclude' && deSelectedCat?.length ) {
				query.categories_exclude = deSelectedCat.join(',');
			}

			// Tag filter
			if ( selectedTagSwitcher === 'include' && selectedTag?.length ) {
				query.tags = selectedTag.join(',');
			}
			if ( selectedTagSwitcher === 'exclude' && deSelectedTag?.length ) {
				query.tags_exclude = deSelectedTag.join(',');
			}

			if ( search ) {
				query.search = search;
			}
			if ( exclude?.length ) {
				query.exclude = exclude;
			}
			if ( parents?.length ) {
				query.parent = parents;
			}
			if ( format?.length ) {
				query.format = format;
			}

			/*
			 * Handle cases where sticky is set to `exclude` or `only`.
			 * Which works as a `post__in/post__not_in` query for sticky posts.
			 */
			if ( [ 'exclude', 'only' ].includes( sticky ) ) {
				query.sticky = sticky === 'only';
			}

			// Empty string represents the default behavior of including sticky posts.
			if ( [ '', 'ignore' ].includes( sticky ) ) {
				// Remove any leftover sticky query parameter.
				delete query.sticky;
				query.ignore_sticky = sticky === 'ignore';
			}

			// If `inherit` is truthy, adjust conditionally the query to create a better preview.
			let currentPostType = postType;
			if ( inherit ) {
				// Change the post-type if needed.
				if ( templateSlug?.startsWith( 'archive-' ) ) {
					query.postType = templateSlug.replace( 'archive-', '' );
					currentPostType = query.postType;
				} else if ( templateCategory ) {
					query.categories = templateCategory[ 0 ]?.id;
				} else if ( templateTag ) {
					query.tags = templateTag[ 0 ]?.id;
				} else if (
					templateSlug?.startsWith( 'taxonomy-post_format' )
				) {
					// Get the post format slug from the template slug by removing the prefix.
					query.format = templateSlug.replace(
						'taxonomy-post_format-post-format-',
						''
					);
				}
			}
			// When we preview Query Loop blocks we should prefer the current
			// block's postType, which is passed through block context.
			const usedPostType = previewPostType || currentPostType;
			return {
				posts: getEntityRecords( 'postType', usedPostType, {
					...query,
					...restQueryArgs,
				} ),
				blocks: getBlocks( clientId ),
			};
		},
		[
			perPage,
			offset,
			order,
			orderBy,
			clientId,
			author,
			search,
			postType,
			exclude,
			sticky,
			inherit,
			templateSlug,
			taxQuery,
			parents,
			format,
			selectedAuthorSwitcher,
			selectedAuthor,
			deSelectedAuthor,
			selectedCatSwitcher,
			selectedCat,
			deSelectedCat,
			selectedTagSwitcher,
			selectedTag,
			deSelectedTag,
			restQueryArgs,
			previewPostType,
		]
	);
	const blockContexts = useMemo(
		() =>
			posts?.map( ( post ) => ( {
				postType: post.type,
				postId: post.id,
				classList: clsx(
					post.class_list ?? '',
					'fb-loop-builder-wrapper-block-context-container',
					loopBuilderWrapperClass
				),
			} ) ),
		[ posts, loopBuilderWrapperClass ]
	);

	const blockProps = useBlockProps( {
		className: `${blockId} fb-loop-builder-wrapper-main-container`,
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


	return (
		<>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				clientId={ clientId }
			/>

			<div { ...blockProps }>
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
			</div>
		</>
	);
}
