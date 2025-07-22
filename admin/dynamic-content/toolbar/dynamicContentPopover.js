import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { SelectControl, TextControl, ToggleControl, PanelBody, Button } from '@wordpress/components';
import {toast} from "react-toastify";

const DynamicContentPopover = ({ dataSource, setDataSource, sourceField, setSourceField, selectPost, setSelectPost, enableLink, setEnableLink, linkSource, setLinkSource, replaceContent, setReplaceContent, beforeText, setBeforeText, afterText, setAfterText, fallbackText, setFallbackText, charLength, setCharLength }) => {
	const selectedBlockId = useSelect((select) => {
		return select('core/block-editor').getSelectedBlockClientId();
	}, []);

	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [allPosts, setAllPosts] = useState(frontisBlocksAdmin.all_posts)

	// Get the dispatch function to update block attributes
	const { updateBlockAttributes } = useDispatch('core/block-editor');

	// useEffect(() => {
	// 	if (selectedBlockId) {
	// 		// Example: Update an attribute called 'customText' for the selected block
	// 		updateBlockAttributes(selectedBlockId, {
	// 			headingText: 'Updated via script',
	// 		});
	// 	}
	// }, [selectedBlockId, updateBlockAttributes]);


	// Get the selected block's client ID and attributes
	const { testSelectedBlockId, selectedBlockAttributes } = useSelect((select) => {
		const clientId = select('core/block-editor').getSelectedBlockClientId();
		return {
			selectedBlockId: clientId,
			selectedBlockAttributes: clientId ? select('core/block-editor').getBlockAttributes(clientId) : null,
		};
	}, []);


	console.log(selectedBlockAttributes)

	const [initialValues, setInitialValues] = useState({});

	useEffect(() => {
		setInitialValues({
			dataSource,
			sourceField,
			selectPost,
			enableLink,
			linkSource,
			replaceContent,
			beforeText,
			afterText,
			fallbackText,
			charLength,
		});
	}, []);

	const hasChanges =
		dataSource !== initialValues.item ||
		sourceField !== initialValues.sourceField ||
		selectPost !== initialValues.selectPost ||
		enableLink !== initialValues.enableLink ||
		linkSource !== initialValues.linkSource ||
		replaceContent !== initialValues.replaceContent ||
		beforeText !== initialValues.beforeText ||
		afterText !== initialValues.afterText ||
		fallbackText !== initialValues.fallbackText ||
		charLength !== initialValues.charLength;

	// Get all post types
	const postTypes = useSelect((select) => {
		const types = select('core').getPostTypes({ per_page: -1 }) || [];
		// Filter out non-public post types or specific ones you don't want
		return types.filter(
			(type) =>
				type.viewable && // Only include viewable post types
				!['attachment', 'nav_menu_item', 'wp_block'].includes(type.slug) // Exclude unwanted types
		);
	}, []);

	// Fetch posts using useSelect
	// const fetchedPosts = useSelect(
	// 	(select) => {
	// 		return select('core').getEntityRecords('postType', postType, {
	// 			per_page: -1, // Fetch all posts (up to REST API limit of 100)
	// 			status: 'publish',
	// 		});
	// 	},
	// 	[postType] // Re-run when postType changes
	// );
	//
	// // Update posts when fetchedPosts changes
	// useEffect(() => {
	// 	if (fetchedPosts !== null) {
	// 		setPosts(fetchedPosts);
	// 		setIsLoading(false);
	// 	}
	// }, [fetchedPosts]);

	// Attribute update functions
	// const updateDynamicContentAttrs = () => {
	// 	return {
	// 	};
	// };

	const updateBlockContent = (text) => {
		// Update both headingText and dynamicContent in a single call
		updateBlockAttributes(selectedBlockId, {
			headingText: text,
			dynamicAttrs: {
				dataSource: dataSource,
				selectPost: selectPost,
				sourceField: sourceField,
			}
		});
		// console.log('Updated attrs', attributes);
	};

	const updateBlockDynamicContent = () => {
		if (dataSource === 'post_type' && selectPost) {
		const { ajaxUrl } = window.frontisBlocksAdmin;

		jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_get_post',
				security: frontisBlocksAdmin.bolck_nonce,
				post_id: selectPost,
				data_source: dataSource,
				source_field: sourceField
			},
			success: function(response) {
				if (response.success) {
					if(response.data) {
						if (response.data && response.data.post_title) {
							updateBlockContent(response.data.post_title);
						}

						if (response.data && response.data.post_excerpt) {
							updateBlockContent(response.data.post_excerpt);
						}

						if (response.data && response.data.post_date) {
							updateBlockContent(response.data.post_date);
						}

						if (response.data && response.data.post_time) {
							updateBlockContent(response.data.post_time);
						}

						if (response.data && response.data.author_name) {
							updateBlockContent(response.data.author_name);
						}

						if (response.data && response.data.author_first_name) {
							updateBlockContent(response.data.author_first_name);
						}

						if (response.data && response.data.author_last_name) {
							updateBlockContent(response.data.author_last_name);
						}

						if (response.data && response.data.author_nickname) {
							updateBlockContent(response.data.author_nickname);
						}

						if (response.data && response.data.author_bio) {
							updateBlockContent(response.data.author_bio);
						}

						if (response.data && response.data.author_email) {
							updateBlockContent(response.data.author_email);
						}

						if (response.data && response.data.author_website) {
							updateBlockContent(response.data.author_website);
						}
					}
					// setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
				} else {
					// toast.error(__(`Failed to fetch options: ${response.data?.message || 'Unknown error'}`, 'frontis-blocks'), {
					// 	position: "top-right",
					// 	autoClose: 5000,
					// 	hideProgressBar: false,
					// 	closeOnClick: true,
					// 	pauseOnHover: true,
					// 	draggable: true,
					// });
				}
			},
			error: function(xhr, status, error) {
				// toast.error(__(`Failed to fetch options: ${status} - ${error}`, 'frontis-blocks'), {
				// 	position: "top-right",
				// 	autoClose: 5000,
				// 	hideProgressBar: false,
				// 	closeOnClick: true,
				// 	pauseOnHover: true,
				// 	draggable: true,
				// });
			}
		});


			// // Determine the REST API endpoint based on post type
			// const postTypeEndpoint = postType === 'page' ? 'pages' : postType === 'post' ? 'posts' : 'posts';
			// console.log(postTypeEndpoint);
			// // First fetch the post/page/custom post type data
			// apiFetch({
			// 	path: `/wp/v2/${postTypeEndpoint}/${selectPost}`
			// }).then(post => {
			// 	console.log('Fetched post data:', post);
			//
			// 	// Handle different field types
			// 	switch(sourceField) {
			// 		// Post fields
			// 		case 'post_title':
			// 			console.log(post.title?.rendered)
			// 			updateBlockContent(post.title?.rendered || '');
			// 			break;
			// 		case 'post_excerpt':
			// 			updateBlockContent(post.excerpt?.rendered || '');
			// 			break;
			// 		case 'post_date':
			// 			updateBlockContent(formatDate(post.date));
			// 			break;
			// 		case 'post_time':
			// 			updateBlockContent(formatTime(post.date));
			// 			break;
			// 		case 'post_id':
			// 			updateBlockContent(post.id.toString());
			// 			break;
			// 		case 'comments_number':
			// 			updateBlockContent(post.comment_count?.toString() || '0');
			// 			break;
			// 		case 'post_custom_field':
			// 		case 'post_terms':
			// 			// Handle these special cases separately
			// 			break;
			//
			// 		// Author fields - need additional API call
			// 		default:
			// 			if (sourceField.startsWith('author_')) {
			// 				return fetchAuthorData(post.author, sourceField);
			// 			}
			// 			break;
			// 	}
			// }).catch(error => {
			// 	console.error('Error fetching post data:', error);
			// });
		}
	};

	// Helper function to fetch author data
	const fetchAuthorData = (authorId, field) => {
		return apiFetch({
			path: `/wp/v2/users/${authorId}`
		}).then(user => {
			let content = '';
			switch(field) {
				case 'author_name':
					content = user.name;
					break;
				case 'author_first_name':
					content = user.first_name;
					break;
				case 'author_last_name':
					content = user.last_name;
					break;
				case 'author_nickname':
					content = user.nickname;
					break;
				case 'author_bio':
					content = user.description;
					break;
				case 'author_email':
					content = user.email;
					break;
				case 'author_website':
					content = user.url;
					break;
				case 'author_custom_field':
					// Handle custom fields
					break;
			}
			updateBlockContent(content);
			return content;
		}).catch(error => {
			console.error('Error fetching author data:', error);
		});
	};

	console.log(allPosts)

	// Helper functions for date/time formatting
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString();
	};

	const formatTime = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleTimeString();
	};

	return (
		<div className="frontis-dynamic-content-wrap" style={{ padding: '10px' }}>
			<div className="frontis-dynamic-content-fields">
				{/* Data Source Dropdown */}
				<div className="frontis-dynamic-content-text-control">
					<label className="frontis-dynamic-content-text-control__label" htmlFor="data-source">
						{__('Data Source')}
					</label>
					<SelectControl
						id="data-source"
						value={dataSource}
						onChange={(selection) => setDataSource(selection)}
						className="frontis-dynamic-content-popover-posttype"
					>
						<optgroup label="Post">
							<option value="current_post">{__('Current Post')}</option>
							<option value="post_type">{__('Post Type')}</option>
						</optgroup>
						<optgroup label="Archive">
							<option value="archive_description">{__('Archive Description')}</option>
							<option value="archive_custom_field">{__('Archive Custom Field')}</option>
							<option value="archive_title">{__('Archive Title')}</option>
						</optgroup>
						<optgroup label="Site">
							<option value="site_tagline">{__('Site Tagline')}</option>
							<option value="site_title">{__('Site Title')}</option>
							<option value="request_parameter">{__('Request Parameter')}</option>
							<option value="shortcode">{__('Shortcode')}</option>
							<option value="user_custom_field - Current User">{__('User Custom Field - Current User')}</option>
						</optgroup>
					</SelectControl>
				</div>

				{/* Select post */}

				{dataSource === 'post_type' &&
					<>
						<div className="frontis-dynamic-content-text-control">
							<label className="frontis-dynamic-content-text-control__label" htmlFor="select-post">
								{__('Select post')}
							</label>
							<SelectControl
								id="select-post"
								value={selectPost}
								onChange={(selection) => setSelectPost(selection)}
								className="frontis-dynamic-content-popover-posttype"
							>
								<option value="">{__('Select post')}</option>
								{Object.entries(allPosts).map(([postType, posts]) => (
									<optgroup key={postType} label={postType}>
										{posts.map((post) => (
											<option key={post.ID} value={post.ID}>
												{post.title || __('No Title')}
											</option>
										))}
									</optgroup>
								))}
							</SelectControl>
						</div>
					</>
				}

				{/* Source field */}
				<div className="frontis-dynamic-content-text-control">
					<label className="frontis-dynamic-content-text-control__label" htmlFor="source-field">
						{__('Source field')}
					</label>
					<SelectControl
						id="source-field"
						value={sourceField}
						onChange={(selection) => setSourceField(selection)}
						className="frontis-dynamic-content-popover-posttype"
					>
						<option value="">{__('Select source field')}</option>
						<optgroup label="Post">
							<option value="post_title">{__('Post Title')}</option>
							<option value="post_excerpt">{__('Post Excerpt')}</option>
							<option value="featured_image">{__('Featured Image')}</option>
							<option value="post_custom_field">{__('Post Custom Field')}</option>
							<option value="post_date">{__('Post Date')}</option>
							<option value="post_time">{__('Post Time')}</option>
							<option value="post_terms">{__('Post Terms')}</option>
							<option value="post_id">{__('Post ID')}</option>
							<option value="comments_number">{__('Comments Number')}</option>
						</optgroup>
						<optgroup label="Author">
							<option value="author_name">{__('Name')}</option>
							<option value="author_first_name">{__('First Name')}</option>
							<option value="author_last_name">{__('Last Name')}</option>
							<option value="author_nickname">{__('Nickname')}</option>
							<option value="author_bio">{__('Bio')}</option>
							<option value="author_email">{__('Email')}</option>
							<option value="author_website">{__('Website')}</option>
							<option value="author_avatar_image_url">{__('Avatar Image URL')}</option>
							<option value="author_custom_field">{__('Author Custom Field')}</option>
						</optgroup>
					</SelectControl>
				</div>

				{/* Enable Link Toggle */}
				<div className="frontis-dynamic-content-text-control">
					<label className="frontis-dynamic-content-text-control__label" htmlFor="data-source">
						{__('Enable link')}
					</label>
					<ToggleControl
						checked={enableLink}
						onChange={(value) => setEnableLink(value)}
						className="frontis-dynamic-content-toggle"
					/>
				</div>
				{enableLink &&
					<div className="frontis-dynamic-content-text-control">
						<label className="frontis-dynamic-content-text-control__label" htmlFor="link-source">
							{__('Link Source')}
						</label>
						<SelectControl
							id="link-source"
							value={linkSource}
							onChange={(selection) => setLinkSource(selection)}
							className="frontis-dynamic-content-popover-posttype"
						>
							<optgroup label="Post">
								<option value="post_permalink">{__('Post Permalink')}</option>
								<option value="comments_area">{__('Comments Area')}</option>
								<option value="featured_image">{__('Featured Image')}</option>
								<option value="post_custom_field">{__('Post Custom Field')}</option>
							</optgroup>
							<optgroup label="Author">
								<option value="avatar_profile_url)">{__('Avatar (Profile URL)')}</option>
								<option value="author_custom_field">{__('Author Custom Field')}</option>
								<option value="author_archive_url">{__('Author Archive URL')}</option>
								<option value="author_page_url">{__('Author Page URL')}</option>
							</optgroup>
							<option value="custom_link">{__('Custom link')}</option>
						</SelectControl>
					</div>
				}

				{/* Replace Full Content */}
				<div className="frontis-dynamic-content-text-control">
					<label className="frontis-dynamic-content-text-control__label" htmlFor="replace-full">
						{__('Replace Full Content')}
					</label>
					<ToggleControl
						checked={replaceContent}
						onChange={(value) => setReplaceContent(value)}
						className="frontis-dynamic-content-toggle"
					/>
				</div>

				{/* Advanced Section */}
				<PanelBody className={`frontis-dynamic-content-advance`} title={__('Advanced')} initialOpen={false}>

					<div className="components-base-control" style={{marginTop: '30px'}}>
						<TextControl
							label={__('Before')}
							value={beforeText}
							onChange={(value) => setBeforeText(value)}
							className=""
						/>
					</div>
					<div className="components-base-control">
						<TextControl
							label={__('After')}
							value={afterText}
							onChange={(value) => setAfterText(value)}
							className=""
						/>
					</div>
					<div className="components-base-control">
						<TextControl
							label={__('Fallback')}
							value={fallbackText}
							onChange={(value) => setFallbackText(value)}
							className=""
							help={__('Show this text if no dynamic data is found.')}
						/>
					</div>
					<div className="components-base-control">
						<TextControl
							label={__('Character Length')}
							type="number"
							value={charLength}
							onChange={(value) => setCharLength(value)}
							className=""
						/>
					</div>
				</PanelBody>
				{hasChanges &&
					<div className={'frontis-dynamic-content-apply-btn'} style={{textAlign: 'center', marginTop: '20px'}}>
						<Button
							variant="primary"
							onClick={() => updateBlockDynamicContent()}
						>
							{__('Apply')}
						</Button>
					</div>
				}
			</div>
		</div>
	);
};

export default DynamicContentPopover;
