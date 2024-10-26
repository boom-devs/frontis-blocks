import React from 'react';
import { __ } from '@wordpress/i18n';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useEntityRecord } from '@wordpress/core-data';

const CustomIcons = () => {

	// console.log(meta)


	const { pages, hasResolved } = useSelect(
		(select) => {
			// Fetch the posts
			const posts = select(coreDataStore).getEntityRecords('postType', 'post', { per_page: -1 });

			// Check if posts exist before trying to fetch meta
			const postMeta = posts?.map(post => {
				const meta = select(coreDataStore).getEditedEntityRecord('postType', post.id) || {};
				return {
					...post,
					fb_custom_icon: meta.meta?.fb_custom_icon || null // Accessing the meta value correctly
				};
			});

			return {
				pages: postMeta,
				hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', ['postType', 'post', { per_page: -1 }])
			};
		},
		[]
	);

	console.log(pages)
	return (
		<div>Hello world</div>
	)
}
export default CustomIcons;
