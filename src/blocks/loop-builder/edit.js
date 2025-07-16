// import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
// import { useEffect } from '@wordpress/element';
// import { useSelect, useDispatch } from '@wordpress/data'; // Import useDispatch for actions
// import { createBlock } from '@wordpress/blocks';
// import './editor.scss';

// const WRAPPER_BLOCK = 'frontis-blocks/loop-builder-wrapper';

// export default function Edit({ attributes, clientId }) {
//     const {
//         blockId,
//         postType,
//         postPerPage,
//         orderBy,
//         sortOrder,
//         selectedCat,
//         selectedCatSwitcher,
//         deSelectedCat,
//         selectedTag,
//         selectedTagSwitcher,
//         deSelectedTag,
//         selectedAuthor,
//         selectedAuthorSwitcher,
//         deSelectedAuthor,
//     } = attributes;

//     const blockProps = useBlockProps({
//         className: `frontis-loop-builder fb-post-grid-area ${blockId || ''}`,
//     });

//     // Fetch posts
//     const postLists = useSelect((select) => {
//         const query = {
//             orderby: orderBy,
//             order: sortOrder,
//             per_page: postPerPage,
//         };

//         if (selectedCatSwitcher === 'include' && selectedCat?.length) {
//             query.categories = selectedCat;
//         } else if (selectedCatSwitcher === 'exclude' && deSelectedCat?.length) {
//             query.categories_exclude = deSelectedCat;
//         }
//         if (selectedTagSwitcher === 'include' && selectedTag?.length) {
//             query.tags = selectedTag;
//         } else if (selectedTagSwitcher === 'exclude' && deSelectedTag?.length) {
//             query.tags_exclude = deSelectedTag;
//         }
//         if (selectedAuthorSwitcher === 'include' && selectedAuthor?.length) {
//             query.author = selectedAuthor;
//         } else if (selectedAuthorSwitcher === 'exclude' && deSelectedAuthor?.length) {
//             query.author_exclude = deSelectedAuthor;
//         }

//         return select('core').getEntityRecords('postType', postType, query);
//     }, [
//         postType,
//         postPerPage,
//         orderBy,
//         sortOrder,
//         selectedCat,
//         selectedCatSwitcher,
//         deSelectedCat,
//         selectedTag,
//         selectedTagSwitcher,
//         deSelectedTag,
//         selectedAuthor,
//         selectedAuthorSwitcher,
//         deSelectedAuthor,
//     ]);

//     // Use dispatch from wp.data
//     const { replaceInnerBlocks } = useDispatch('core/block-editor');

//     // Dynamically insert testimonial blocks inside the container
//     useEffect(() => {
//         if (!postLists || postLists.length === 0) return;

//         const { getBlocks } = wp.data.select('core/block-editor');
//         const existing = getBlocks(clientId);

//         // Ensure there is only one wrapper block
//         if (existing.length === 0) {
//             const wrapperBlock = createBlock(WRAPPER_BLOCK, {});
//             replaceInnerBlocks(clientId, [wrapperBlock], false);
//         }

//         const wrapperBlockClientId = getBlocks(clientId)[0]?.clientId;
//         if (!wrapperBlockClientId) return;

//         const wrapperInnerBlocks = getBlocks(wrapperBlockClientId);
//         if (wrapperInnerBlocks.length === 0) {
//             const containerBlock = createBlock('frontis-blocks/container', {});
//             replaceInnerBlocks(wrapperBlockClientId, [containerBlock], false);
//         }

//         const containerBlockClientId = getBlocks(wrapperBlockClientId)[0]?.clientId;
//         if (!containerBlockClientId) return;

//         const containerInnerBlocks = getBlocks(containerBlockClientId);
//         if (containerInnerBlocks.length === postLists.length) return;

//         const blocksToInsert = postLists.map(() =>
//             createBlock('frontis-blocks/testimonial', {})
//         );

//         replaceInnerBlocks(containerBlockClientId, blocksToInsert, false);
//     }, [postLists, clientId, replaceInnerBlocks]);

//     const innerBlocksProps = useInnerBlocksProps(blockProps, {
//         allowedBlocks: [WRAPPER_BLOCK],
//         template: [[WRAPPER_BLOCK, {}]],
//         templateLock: false,
//     });

//     return (
//         <div {...innerBlocksProps} />
//     );
// }

// import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
// import { useEffect } from '@wordpress/element';
// import { useSelect, useDispatch } from '@wordpress/data';
// import { createBlock } from '@wordpress/blocks';
// import './editor.scss';

// const WRAPPER_BLOCK = 'frontis-blocks/loop-builder-wrapper';
// const CONTAINER_BLOCK = 'frontis-blocks/container';
// const HEADING_BLOCK = 'frontis-blocks/advanced-heading';

// export default function Edit({ attributes, clientId }) {
// 	const {
// 		blockId,
// 		postType,
// 		postPerPage,
// 		orderBy,
// 		sortOrder,
// 		selectedCat,
// 		selectedCatSwitcher,
// 		deSelectedCat,
// 		selectedTag,
// 		selectedTagSwitcher,
// 		deSelectedTag,
// 		selectedAuthor,
// 		selectedAuthorSwitcher,
// 		deSelectedAuthor,
// 	} = attributes;

// 	const blockProps = useBlockProps({
// 		className: `frontis-loop-builder fb-post-grid-area ${blockId || ''}`,
// 	});

// 	// Fetch posts
// 	const posts = useSelect((select) => {
// 		const query = {
// 			orderby: orderBy,
// 			order: sortOrder,
// 			per_page: postPerPage,
// 		};

// 		if (selectedCatSwitcher === 'include') query.categories = selectedCat;
// 		else if (selectedCatSwitcher === 'exclude') query.categories_exclude = deSelectedCat;

// 		if (selectedTagSwitcher === 'include') query.tags = selectedTag;
// 		else if (selectedTagSwitcher === 'exclude') query.tags_exclude = deSelectedTag;

// 		if (selectedAuthorSwitcher === 'include') query.author = selectedAuthor;
// 		else if (selectedAuthorSwitcher === 'exclude') query.author_exclude = deSelectedAuthor;

// 		return select('core').getEntityRecords('postType', postType, query);
// 	}, [
// 		postType,
// 		postPerPage,
// 		orderBy,
// 		sortOrder,
// 		selectedCat,
// 		deSelectedCat,
// 		selectedTag,
// 		deSelectedTag,
// 		selectedAuthor,
// 		deSelectedAuthor,
// 	]);

// 	const { replaceInnerBlocks } = useDispatch('core/block-editor');

// 	useEffect(() => {
// 		if (!posts || !posts.length) return;

// 		const { getBlocks } = wp.data.select('core/block-editor');

// 		// 1. Create heading blocks per post
// 		const headingBlocks = posts.map((post) =>
// 			createBlock(HEADING_BLOCK, {
// 				postId: post.id,
// 				postTitle: post.title.rendered,
// 				postContent: post.content.rendered,
// 				postLink: post.link,
// 			})
// 		);

// 		// 2. Wrap all heading blocks in one container
// 		const containerBlock = createBlock(CONTAINER_BLOCK, {}, headingBlocks);

// 		// 3. Wrap the container block in a single wrapper
// 		const wrapperBlock = createBlock(WRAPPER_BLOCK, {}, [containerBlock]);

// 		// 4. Replace everything with new structure
// 		replaceInnerBlocks(clientId, [wrapperBlock], false);
// 	}, [posts, clientId]);

// 	// Allow WRAPPER_BLOCK inside this block
// 	const innerBlocksProps = useInnerBlocksProps(blockProps, {
// 		allowedBlocks: [WRAPPER_BLOCK],
// 		template: [[WRAPPER_BLOCK]],
// 		templateLock: false,
// 	});

// 	return <div {...innerBlocksProps} />;
// }

/**
 * WordPress dependencies
 */
// import { useSelect, useDispatch } from '@wordpress/data';
// import { useInstanceId } from '@wordpress/compose';
// import { useEffect, useCallback } from '@wordpress/element';
// import {
// 	BlockControls,
// 	InspectorControls,
// 	useBlockProps,
// 	store as blockEditorStore,
// 	useInnerBlocksProps,
// 	privateApis as blockEditorPrivateApis,
// } from '@wordpress/block-editor';
// import { __ } from '@wordpress/i18n';
// import { store as coreStore } from '@wordpress/core-data';

// /**
//  * Internal dependencies
//  */

// const DEFAULTS_POSTS_PER_PAGE = 3;

// const TEMPLATE = [ [ 'frontis-blocks/loop-builder-wrapper' ] ];
// export default function Edit( {
// 	attributes,
// 	setAttributes,
// 	clientId,
// 	context,
// 	name,
// } ) {
// 	const {
// 		queryId,
// 		query,
// 		enhancedPagination,
// 		tagName: TagName = 'div',
// 		query: { inherit } = {},
// 	} = attributes;
// 	const { templateSlug } = context;
// 	const { __unstableMarkNextChangeAsNotPersistent } =
// 		useDispatch( blockEditorStore );
// 	const instanceId = useInstanceId( Edit );
// 	const blockProps = useBlockProps();
// 	const innerBlocksProps = useInnerBlocksProps( blockProps, {
// 		template: TEMPLATE,
// 	} );
// 	const { postsPerPage } = useSelect( ( select ) => {
// 		const { getSettings } = select( blockEditorStore );
// 		const { getEntityRecord, getEntityRecordEdits, canUser } =
// 			select( coreStore );
// 		const settingPerPage = canUser( 'read', {
// 			kind: 'root',
// 			name: 'site',
// 		} )
// 			? +getEntityRecord( 'root', 'site' )?.posts_per_page
// 			: +getSettings().postsPerPage;

// 		// Gets changes made via the template area posts per page setting. These won't be saved
// 		// until the page is saved, but we should reflect this setting within the query loops
// 		// that inherit it.
// 		const editedSettingPerPage = +getEntityRecordEdits( 'root', 'site' )
// 			?.posts_per_page;

// 		return {
// 			postsPerPage:
// 				editedSettingPerPage ||
// 				settingPerPage ||
// 				DEFAULTS_POSTS_PER_PAGE,
// 		};
// 	}, [] );
// 	// There are some effects running where some initialization logic is
// 	// happening and setting some values to some attributes (ex. queryId).
// 	// These updates can cause an `undo trap` where undoing will result in
// 	// resetting again, so we need to mark these changes as not persistent
// 	// with `__unstableMarkNextChangeAsNotPersistent`.

// 	// Changes in query property (which is an object) need to be in the same callback,
// 	// because updates are batched after the render and changes in different query properties
// 	// would cause to override previous wanted changes.
// 	const updateQuery = useCallback(
// 		( newQuery ) =>
// 			setAttributes( ( prevAttributes ) => ( {
// 				query: { ...prevAttributes.query, ...newQuery },
// 			} ) ),
// 		[ setAttributes ]
// 	);
// 	useEffect( () => {
// 		const newQuery = {};
// 		// When we inherit from global query always need to set the `perPage`
// 		// based on the reading settings.
// 		if ( inherit && query.perPage !== postsPerPage ) {
// 			newQuery.perPage = postsPerPage;
// 		} else if ( ! query.perPage && postsPerPage ) {
// 			newQuery.perPage = postsPerPage;
// 		}

// 		if ( !! Object.keys( newQuery ).length ) {
// 			__unstableMarkNextChangeAsNotPersistent();
// 			updateQuery( newQuery );
// 		}
// 	}, [
// 		query.perPage,
// 		inherit,
// 		postsPerPage,
// 		__unstableMarkNextChangeAsNotPersistent,
// 		updateQuery,
// 	] );
// 	// We need this for multi-query block pagination.
// 	// Query parameters for each block are scoped to their ID.
// 	useEffect( () => {
// 		if ( ! Number.isFinite( queryId ) ) {
// 			__unstableMarkNextChangeAsNotPersistent();
// 			setAttributes( { queryId: instanceId } );
// 		}
// 	}, [
// 		queryId,
// 		instanceId,
// 		__unstableMarkNextChangeAsNotPersistent,
// 		setAttributes,
// 	] );

// 	return (
// 		<>
// 			<TagName { ...innerBlocksProps } />
// 		</>
// 	);
// }


import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { useEffect, useCallback } from '@wordpress/element';
import {
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';

const DEFAULT_POSTS_PER_PAGE = 6;

export default function Edit({
    attributes,
    setAttributes,
    clientId,
    context,
    name,
}) {
    const {
        queryId,
        query = {},
        enhancedPagination,
        tagName: TagName = 'div',
    } = attributes;
    const { templateSlug } = context;
    const { __unstableMarkNextChangeAsNotPersistent } =
        useDispatch(blockEditorStore);
    const instanceId = useInstanceId(Edit);
    const blockProps = useBlockProps();

    // Fetch posts based on query
    const { posts, postsPerPage } = useSelect(
        (select) => {
            const { getSettings } = select(blockEditorStore);
            const { getEntityRecords, canUser } = select(coreStore);
            const settingPerPage = canUser('read', {
                kind: 'root',
                name: 'site',
            })
                ? +select(coreStore).getEntityRecord('root', 'site')?.posts_per_page
                : +getSettings().postsPerPage;

            const queryParams = {
                per_page: query.perPage || settingPerPage || DEFAULT_POSTS_PER_PAGE,
                offset: query.offset || 0,
                order: query.order || 'desc',
                orderby: query.orderBy || 'date',
                post_type: query.postType || 'post',
                ...query,
            };

            return {
                posts: getEntityRecords('postType', query.postType || 'post', queryParams),
                postsPerPage: settingPerPage || DEFAULT_POSTS_PER_PAGE,
            };
        },
        [query, clientId]
    );

    // Update query.perPage based on settings
    const updateQuery = useCallback(
        (newQuery) =>
            setAttributes((prevAttributes) => ({
                query: { ...prevAttributes.query, ...newQuery },
            })),
        [setAttributes]
    );

    useEffect(() => {
        const newQuery = {};
        if (query.perPage !== postsPerPage) {
            newQuery.perPage = postsPerPage;
        } else if (!query.perPage && postsPerPage) {
            newQuery.perPage = postsPerPage;
        }

        if (Object.keys(newQuery).length > 0) {
            __unstableMarkNextChangeAsNotPersistent();
            updateQuery(newQuery);
        }
    }, [query.perPage, postsPerPage, __unstableMarkNextChangeAsNotPersistent, updateQuery]);

    // Set queryId if not finite
    useEffect(() => {
        if (!Number.isFinite(queryId)) {
            __unstableMarkNextChangeAsNotPersistent();
            setAttributes({ queryId: instanceId });
        }
    }, [queryId, instanceId, __unstableMarkNextChangeAsNotPersistent, setAttributes]);

    // Render inner blocks dynamically for each post
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: [['frontis-blocks/loop-builder-wrapper']],
        renderAppender: false,
    });

    return (
        <TagName {...blockProps}>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="wp-block-post frontis-loop-post">
                        <BlockContextProvider
                            value={{
                                postId: post.id,
                                postType: post.type,
                            }}
                        >
                            <InnerBlocks.Content />
                        </BlockContextProvider>
                    </div>
                ))
            ) : (
                <div {...innerBlocksProps} />
            )}
        </TagName>
    );
}