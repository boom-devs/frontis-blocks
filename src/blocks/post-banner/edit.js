import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		categorySwitcher,
		titleSwitcher,
		postMetaSwitcher
	} = attributes;

	// Get current post data
	const postData = useSelect((select) => {
		const { getCurrentPost, getCurrentPostType, getEditedPostAttribute } = select('core/editor');
		const featuredImageId = getEditedPostAttribute('featured_media');
		const featuredImage = featuredImageId ? getMedia(featuredImageId) : null;

		return {
			title: getEditedPostAttribute('title'),
			date: getEditedPostAttribute('date'),
			categories: getEditedPostAttribute('categories'),
			author: getEditedPostAttribute('author'),
			featuredImageUrl: featuredImage?.source_url || ''
		};
	}, []);

	const containerStyle = postData.featuredImageUrl ? {
		backgroundImage: `url(${postData.featuredImageUrl})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	} : {};

	// Get category and author information
	const categoryInfo = useSelect((select) => {
		if (!postData.categories || !postData.categories.length) return { name: 'Uncategorized' };
		const { getEntityRecord } = select('core');
		const category = getEntityRecord('taxonomy', 'category', postData.categories[0]);
		return category;
	}, [postData.categories]);

	const authorInfo = useSelect((select) => {
		if (!postData.author) return { name: 'Unknown', avatar_urls: {} };
		const { getUser } = select('core');
		return getUser(postData.author);
	}, [postData.author]);

	const blockProps = useBlockProps({
		className: `fb-post-banner-block ${blockID}`,
	});

	// Format date
	const formatDate = (dateString) => {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
	};

	return (
		<div {...blockProps}>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div className="fb-post-banner-container" style={containerStyle}>
				<div className='fb-post-banner-content'>
					{categorySwitcher && (
						<div className='fb-post-category'>
							<span className='fb-post-category-name'>
								{categoryInfo?.name || 'Web Development'}
							</span>
						</div>
					)}
					{titleSwitcher && (
						<div className='fb-post-title'>
							<h1 className='fb-post-title-name'>
								{postData.title || 'Best 33 Interview Questions for Backend Developers with Answers in 2025'}
							</h1>
						</div>
					)}

					{postMetaSwitcher && (
						<div className='fb-post-author'>
							<div className='fb-post-author-info'>
								<img
									src={authorInfo?.avatar_urls?.['28'] || ''}
									className='fb-post-author-avatar'
								/>
								<span className='fb-post-author-name'>
									{authorInfo?.name || 'John Doe'}
								</span>
							</div>
							<div className="fb-post-author-seperator">
								<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
									<circle cx="2" cy="2" r="2" fill="#717680" />
								</svg>
							</div>
							<div className='fb-post-author-meta'>
								<span className='fb-post-date'>
									{formatDate(postData.date) || 'Feb 17, 2025'}
								</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M9.66536 7.10001H6.33203" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M8 5.47333V8.80666" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M11.2148 1.33334H4.78818C3.36818 1.33334 2.21484 2.49334 2.21484 3.90668V13.3C2.21484 14.5 3.07484 15.0067 4.12818 14.4267L7.38151 12.62C7.72818 12.4267 8.28818 12.4267 8.62818 12.62L11.8815 14.4267C12.9348 15.0133 13.7948 14.5067 13.7948 13.3V3.90668C13.7882 2.49334 12.6348 1.33334 11.2148 1.33334Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
					)}

				</div>
			</div>
		</div>
	);
}