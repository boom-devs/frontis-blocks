import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import { store as coreStore } from '@wordpress/core-data';
import { Placeholder, Spinner, Button } from '@wordpress/components';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		postType = 'post',
		postsPerPage = 6,
		order = 'desc',
		orderBy = 'date',
		includedCategories = [],
		includedTags = [],
		offset = 0,
		showFeaturedImage = true,
		showTitle = true,
		showExcerpt = true,
		excerptLength = 25,
		showReadMore = true,
		readMoreText = __('Read More', 'frontis-blocks'),
		columns = 3,
		gap = 20
	} = attributes;

	// Generate a unique ID for the block if not set
	useEffect(() => {
		if (!blockID) {
			setAttributes({ blockID: `fb-loop-builder-${clientId.slice(0, 8)}` });
		}
	}, [blockID, clientId, setAttributes]);

	// Fetch posts based on query parameters
	const { posts, isLoading } = useSelect((select) => {
		const { getEntityRecords } = select(coreStore);
		
		// Build the query
		const query = {
			per_page: postsPerPage,
			order,
			orderby: orderBy,
			offset,
		};
		
		// Add taxonomies to query if selected
		if (includedCategories && includedCategories.length > 0) {
			query.categories = includedCategories;
		}
		
		if (includedTags && includedTags.length > 0) {
			query.tags = includedTags;
		}
		
		return {
			posts: getEntityRecords('postType', postType, query) || [],
			isLoading: !select(coreStore).hasFinishedResolution('getEntityRecords', [
				'postType',
				postType,
				query,
			]),
		};
	}, [postType, postsPerPage, order, orderBy, includedCategories, includedTags, offset]);

	// Get inner blocks
	const { innerBlocks } = useSelect(
		(select) => ({
			innerBlocks: select(blockEditorStore).getBlocks(clientId),
		}),
		[clientId]
	);

	// Add default template blocks if empty
	const { replaceInnerBlocks } = useDispatch(blockEditorStore);
	useEffect(() => {
		if (innerBlocks.length === 0) {
			const defaultTemplate = [
				['core/group', { className: 'fb-loop-item' }, [
					['core/image', { className: 'fb-loop-item-image', sizeSlug: 'large' }],
					['core/heading', { level: 3, className: 'fb-loop-item-title', placeholder: 'Post Title' }],
					['core/paragraph', { className: 'fb-loop-item-excerpt', placeholder: 'Post excerpt will appear here' }],
					['core/button', { className: 'fb-loop-item-readmore', text: readMoreText || __('Read More', 'frontis-blocks') }],
				]],
			];
			
			replaceInnerBlocks(clientId, parse(JSON.stringify(defaultTemplate)), false);
		}
	}, []);

	// Define the style for the grid layout
	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
		gap: `${gap}px`,
	};

	// Prepare the preview items
	const renderPreviewItems = () => {
		if (isLoading) {
			return (
				<div className="fb-loop-builder-loading">
					<Spinner />
					<p>{__('Loading posts...', 'frontis-blocks')}</p>
				</div>
			);
		}

		if (posts.length === 0) {
			return (
				<div className="fb-loop-builder-empty">
					<p>{__('No posts found matching your criteria.', 'frontis-blocks')}</p>
				</div>
			);
		}

		// Get up to 3 posts for preview
		const previewPosts = posts.slice(0, 3);
		
		return previewPosts.map((post) => (
			<div key={post.id} className="fb-loop-preview-item">
				{showFeaturedImage && post.featured_media > 0 && (
					<div className="fb-loop-preview-image">
						<img src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/api/placeholder/400/250'} alt={post.title.rendered} />
					</div>
				)}
				
				{showTitle && (
					<h3 className="fb-loop-preview-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
				)}
				
				{showExcerpt && (
					<div className="fb-loop-preview-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
				)}
				
				{showReadMore && (
					<div className="fb-loop-preview-readmore">
						<a href="#" onClick={(e) => e.preventDefault()}>{readMoreText || __('Read More', 'frontis-blocks')}</a>
					</div>
				)}
			</div>
		));
	};

	// Set up InnerBlocks props
	const ALLOWED_BLOCKS = ['core/group', 'core/columns', 'core/paragraph', 'core/heading', 'core/image', 'core/button'];
	const TEMPLATE = [
		['core/group', { className: 'fb-loop-item' }, [
			['core/image', { className: 'fb-loop-item-image', sizeSlug: 'large' }],
			['core/heading', { level: 3, className: 'fb-loop-item-title', placeholder: 'Post Title' }],
			['core/paragraph', { className: 'fb-loop-item-excerpt', placeholder: 'Post excerpt will appear here' }],
			['core/button', { className: 'fb-loop-item-readmore', text: readMoreText || __('Read More', 'frontis-blocks') }],
		]],
	];

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'fb-loop-builder-template' },
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			templateLock: false,
		}
	);

	const blockProps = useBlockProps({
		className: `fb-loop-builder-block ${blockID}`,
	});

	// View modes: 'edit' for template editing, 'preview' for post preview
	const [viewMode, setViewMode] = useState('edit');

	return (
		<div {...blockProps}>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div className="fb-loop-builder-toolbar">
				<div className="fb-loop-builder-viewmode">
					<Button
						isPrimary={viewMode === 'edit'}
						isSecondary={viewMode !== 'edit'}
						onClick={() => setViewMode('edit')}
					>
						{__('Edit Template', 'frontis-blocks')}
					</Button>
					<Button
						isPrimary={viewMode === 'preview'}
						isSecondary={viewMode !== 'preview'}
						onClick={() => setViewMode('preview')}
					>
						{__('Preview', 'frontis-blocks')}
					</Button>
				</div>
			</div>

			{viewMode === 'edit' ? (
				<div className="fb-loop-builder-editor">
					<div className="fb-loop-builder-info">
						<p>
							{__('Edit the template below. This will be used for each post in your loop.', 'frontis-blocks')}
						</p>
					</div>
					<div {...innerBlocksProps} />
				</div>
			) : (
				<div className="fb-loop-builder-preview" style={gridStyle}>
					{renderPreviewItems()}
				</div>
			)}
		</div>
	);
}