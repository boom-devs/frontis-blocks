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
        
//         // Handle both cases: posts exist or no posts
//         let blocksToInsert = [];
//         if (postLists && postLists.length > 0) {
//             blocksToInsert = postLists.map((post, index) =>
//                 createBlock('frontis-blocks/advanced-heading', {
//                     postId: post.id,
//                     postTitle: post.title?.rendered || '',
//                     postContent: post.content?.rendered || '',
//                 })
//             );
//         }
        
//         // Always sync the container blocks with the posts
//         // This ensures exact match - removes extra blocks and adds missing ones
//         if (containerInnerBlocks.length !== blocksToInsert.length) {
//             replaceInnerBlocks(containerBlockClientId, blocksToInsert, false);
//         }
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

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import './editor.scss';

const WRAPPER_BLOCK = 'frontis-blocks/loop-builder-wrapper';
const CONTAINER_BLOCK = 'frontis-blocks/container';
const HEADING_BLOCK = 'frontis-blocks/advanced-heading';

export default function Edit({ attributes, clientId }) {
	const {
		blockId,
		postType,
		postPerPage,
		orderBy,
		sortOrder,
		selectedCat,
		selectedCatSwitcher,
		deSelectedCat,
		selectedTag,
		selectedTagSwitcher,
		deSelectedTag,
		selectedAuthor,
		selectedAuthorSwitcher,
		deSelectedAuthor,
	} = attributes;

	const blockProps = useBlockProps({
		className: `frontis-loop-builder fb-post-grid-area ${blockId || ''}`,
	});

	// Fetch posts
	const posts = useSelect((select) => {
		const query = {
			orderby: orderBy,
			order: sortOrder,
			per_page: postPerPage,
		};

		if (selectedCatSwitcher === 'include') query.categories = selectedCat;
		else if (selectedCatSwitcher === 'exclude') query.categories_exclude = deSelectedCat;

		if (selectedTagSwitcher === 'include') query.tags = selectedTag;
		else if (selectedTagSwitcher === 'exclude') query.tags_exclude = deSelectedTag;

		if (selectedAuthorSwitcher === 'include') query.author = selectedAuthor;
		else if (selectedAuthorSwitcher === 'exclude') query.author_exclude = deSelectedAuthor;

		return select('core').getEntityRecords('postType', postType, query);
	}, [
		postType,
		postPerPage,
		orderBy,
		sortOrder,
		selectedCat,
		deSelectedCat,
		selectedTag,
		deSelectedTag,
		selectedAuthor,
		deSelectedAuthor,
	]);

	const { replaceInnerBlocks } = useDispatch('core/block-editor');

	useEffect(() => {
		if (!posts || !posts.length) return;

		const { getBlocks } = wp.data.select('core/block-editor');

		// 1. Create heading blocks per post
		const headingBlocks = posts.map((post) =>
			createBlock(HEADING_BLOCK, {
				postId: post.id,
				postTitle: post.title.rendered,
				postContent: post.content.rendered,
				postLink: post.link,
			})
		);

		// 2. Wrap all heading blocks in one container
		const containerBlock = createBlock(CONTAINER_BLOCK, {}, headingBlocks);

		// 3. Wrap the container block in a single wrapper
		const wrapperBlock = createBlock(WRAPPER_BLOCK, {}, [containerBlock]);

		// 4. Replace everything with new structure
		replaceInnerBlocks(clientId, [wrapperBlock], false);
	}, [posts, clientId]);

	// Allow WRAPPER_BLOCK inside this block
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: [WRAPPER_BLOCK],
		template: [[WRAPPER_BLOCK]],
		templateLock: false,
	});

	return <div {...innerBlocksProps} />;
}
