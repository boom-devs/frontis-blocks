document.addEventListener('DOMContentLoaded', function() {
	let currentPage = 1;
	let limit = 12;

	let filterPost = {
		offset: limit * (currentPage - 1),
		limit: limit,
		post_type: 'post',
		currentPage: currentPage,
		category: null,
		post_tag: null,
		post_author: null,
		sortorder: null,
		orderby: null,
		deauthor: null,
		detag: null,
		decategory: null,
	};

	// GLOBAL Parent Block for Settings
	const parentElement = document.querySelector('.wp-block-frontis-blocks-post-grid');

	const filterSelectedCat = parentElement?.getAttribute("data-filter-selected-cat"); // e.g., "4,16,0"
	const filterSelectedTag = parentElement?.getAttribute("data-filter-selected-tag");
	const filterSelectedTaxonomy = parentElement?.getAttribute("data-show-filter-by-taxonomy");
	const filterAllPostsCount = parentElement?.getAttribute("data-filter-all-posts-count");

	// Set initial filterPost values based on filterSelectedTaxonomy
	if (filterSelectedTaxonomy === 'true') {
		filterPost.category = filterSelectedCat && filterSelectedCat !== '0' ? filterSelectedCat.split(',').filter(id => id !== '0') : [];
		filterPost.post_tag = filterSelectedTag ? filterSelectedTag.split(',') : [];
		filterPost.limit = filterAllPostsCount || limit;
	}

	document.body.addEventListener('click', function(event) {
		if (event.target.closest('.fb_load_more')) {
			const parentElement = event.target.closest(".wp-block-frontis-blocks-post-grid");


			if (parentElement) {
				const postType = parentElement.getAttribute("data-post-type");
				const blockId = parentElement.getAttribute("data-block-id");
				const cat = parentElement.getAttribute("data-cat");
				const tag = parentElement.getAttribute("data-tag");
				const author = parentElement.getAttribute("data-author");
				const deauthor = parentElement.getAttribute("data-deauthor");
				const detag = parentElement.getAttribute("data-detag");
				const decategory = parentElement.getAttribute("data-decat");

				const perpage = parentElement.getAttribute("data-perpage");
				const orderby = parentElement.getAttribute("data-orderby");
				const sortorder = parentElement.getAttribute("data-sortorder");

				const postTitleTag = parentElement.getAttribute("data-post-title-tag");
				const postDescriptionTag = parentElement.getAttribute("data-post-description-tag");
				const postDescriptionExcerptLength = parentElement.getAttribute("data-post-description-excerpt-length");
				const showExcerptSwitcher = parentElement.getAttribute("data-show-excerpt-switcher");

				const showAuthorSwitcher = parentElement.getAttribute("data-show-author-switcher");
				const showCategorySwitcher = parentElement.getAttribute("data-show-category-switcher");
				const showTagSwitcher = parentElement.getAttribute("data-show-tag-switcher");

				const postAuthorPrefixSwitcher = parentElement.getAttribute("data-post-author-prefix-switcher");
				const postAuthorPrefix = parentElement.getAttribute("data-post-author-prefix");

				const showDateSwitcher = parentElement.getAttribute("data-show-date-switcher");

				const postAuthorAvatarSwitcher = parentElement.getAttribute("data-post-author-avatar-switcher");
				const postImageSize = parentElement.getAttribute("data-post-image-size");

				const showLoadMoreSwitcher = parentElement.getAttribute("data-show-load-more-switcher");
				const loadMoreType = parentElement.getAttribute("data-load-more-type");
				const loadMoreText = parentElement.getAttribute("data-load-more-text");
				const loadMoreIcon = parentElement.getAttribute("data-load-more-icon");
				const loadMoreIconAlign = parentElement.getAttribute("data-load-more-icon-align");
				const prevTxt = parentElement.getAttribute("data-prev-text");
				const prevTxtIcon = parentElement.getAttribute("data-prev-icon");
				const nextTxt = parentElement.getAttribute("data-next-text");
				const nextTxtIcon = parentElement.getAttribute("data-next-icon");
				const defaultImageUrl = parentElement.getAttribute("data-default-image-url");

				// Increase current page and update offset for the next batch of posts
				filterPost.currentPage = currentPage;

				filterPost.offset = filterPost.limit * (currentPage - 1);
				// filterPost.category = cat ? cat.split(',') : [];
				filterPost.category = cat && cat !== '0' ? cat.split(',').filter(id => id !== '0') : [];
				filterPost.post_tag = tag ? tag.split(',') : [];
				filterPost.post_author = author ? author.split(',') : [];
				filterPost.orderby = orderby ? orderby.split(',') : [];
				filterPost.sortorder = sortorder ? sortorder.split(',') : [];
				filterPost.deauthor = deauthor ? deauthor.split(',') : [];
				filterPost.detag = detag ? detag.split(',') : [];
				filterPost.decategory = decategory ? decategory.split(',') : [];

				filterPost.postTitleTag = postTitleTag ? postTitleTag : 'h3';
				filterPost.postDescriptionTag = postDescriptionTag ? postDescriptionTag : 'p';
				filterPost.postDescriptionExcerptLength = postDescriptionExcerptLength ? postDescriptionExcerptLength : 10;
				filterPost.showExcerptSwitcher = showExcerptSwitcher ? showExcerptSwitcher : true;

				filterPost.showAuthorSwitcher = showAuthorSwitcher ? showAuthorSwitcher : false;
				filterPost.showCategorySwitcher = showCategorySwitcher ? showCategorySwitcher : false;
				filterPost.showTagSwitcher = showTagSwitcher ? showTagSwitcher : false;

				filterPost.postAuthorPrefixSwitcher = postAuthorPrefixSwitcher ? postAuthorPrefixSwitcher : false;
				filterPost.postAuthorPrefix = postAuthorPrefix ? postAuthorPrefix : 'Posted By';

				filterPost.showDateSwitcher = showDateSwitcher ? showDateSwitcher : true;

				filterPost.postAuthorAvatarSwitcher = postAuthorAvatarSwitcher ? postAuthorAvatarSwitcher : false;

				filterPost.postImageSize = postImageSize ? postImageSize : 'full';
				
				filterPost.showLoadMoreSwitcher = showLoadMoreSwitcher ? showLoadMoreSwitcher : true;
				filterPost.loadMoreType = loadMoreType ? loadMoreType : 'button';
				filterPost.loadMoreText = loadMoreText ? loadMoreText : 'Load More';
				filterPost.prevTxt = prevTxt ? prevTxt : '';
				filterPost.prevTxtIcon = prevTxtIcon ? prevTxtIcon : '';
				filterPost.nextTxt = nextTxt ? nextTxt : '';
				filterPost.nextTxtIcon = nextTxtIcon ? nextTxtIcon : '';
				filterPost.loadMoreIcon = loadMoreIcon ? loadMoreIcon : 'angle-right';
				filterPost.loadMoreIconAlign = loadMoreIconAlign ? loadMoreIconAlign : 'none';

				filterPost.defaultImageUrl = defaultImageUrl ? defaultImageUrl : '';


				// Call function to load more posts
				loadMorePosts(postType, blockId, cat, perpage, orderby, sortorder, tag, author, deauthor, detag, decategory, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showExcerptSwitcher, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher, postAuthorAvatarSwitcher, postImageSize, showLoadMoreSwitcher, loadMoreType, prevTxt, prevTxtIcon, nextTxt, nextTxtIcon, loadMoreText, loadMoreIcon, loadMoreIconAlign, defaultImageUrl);

				if (loadMoreIconAlign === 'icon') {
					document.querySelector('.fb_post_grid_container .fb_load_more_outter_wrap').style.display = 'block';
					document.querySelector('.fb_post_grid_container .fb_load_more .load_more_button_icon_wrap svg').style.display = 'none';
				}
			}
		}
	});

	function convertToAjaxParams(params) {
		let formData = new FormData();

		for (let key in params) {
			if (params.hasOwnProperty(key) && params[key] !== '') {
				formData.append(key, params[key]);
			}
		}

		return formData;
	}

	function loadMorePosts(postType, blockId, cat, perpage, orderby, sortorder, tag, author, deauthor, detag, decategory, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showExcerptSwitcher, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher, postAuthorAvatarSwitcher, postImageSize, showLoadMoreSwitcher, loadMoreType, prevTxt, prevTxtIcon, nextTxt, nextTxtIcon, loadMoreText, loadMoreIcon, loadMoreIconAlign, defaultImageUrl) {
		filterPost.post_type = postType;
		filterPost.block_id = blockId;
		// filterPost.category = cat ? cat.split(',') : [];
		filterPost.category = cat && cat !== '0' ? cat.split(',').filter(id => id !== '0') : [];
		filterPost.post_tag = tag ? tag.split(',') : [];
		filterPost.post_author = author ? author.split(',') : [];
		filterPost.deauthor = deauthor ? deauthor.split(',') : [];
		filterPost.detag = detag ? detag.split(',') : [];
		filterPost.decategory = decategory ? decategory.split(',') : [];

		filterPost.limit = filterSelectedTaxonomy === 'true' ? (filterAllPostsCount || perpage) : perpage;

		filterPost.orderby = orderby ? orderby.split(',') : [];
		filterPost.sortorder = sortorder ? sortorder.split(',') : [];

		filterPost.showAuthorSwitcher = showAuthorSwitcher ? showAuthorSwitcher : false;
		filterPost.showCategorySwitcher = showCategorySwitcher ? showCategorySwitcher : false;
		filterPost.showTagSwitcher = showTagSwitcher ? showTagSwitcher : false;

		filterPost.postTitleTag = postTitleTag ? postTitleTag : 'h3';
		filterPost.postDescriptionTag = postDescriptionTag ? postDescriptionTag : 'p';
		filterPost.postDescriptionExcerptLength = postDescriptionExcerptLength ? postDescriptionExcerptLength : 10;
		filterPost.showExcerptSwitcher = showExcerptSwitcher ? showExcerptSwitcher : true;

		filterPost.postAuthorPrefixSwitcher = postAuthorPrefixSwitcher ? postAuthorPrefixSwitcher : false;
		filterPost.postAuthorPrefix = postAuthorPrefix ? postAuthorPrefix : 'Posted By';

		filterPost.showDateSwitcher = showDateSwitcher ? showDateSwitcher : true;

		filterPost.postAuthorAvatarSwitcher = postAuthorAvatarSwitcher ? postAuthorAvatarSwitcher : false;
		filterPost.postImageSize = postImageSize ? postImageSize : 'full';

		filterPost.showLoadMoreSwitcher = showLoadMoreSwitcher ? showLoadMoreSwitcher : true;

		filterPost.loadMoreType = loadMoreType ? loadMoreType : 'button';
		filterPost.loadMoreText = loadMoreText ? loadMoreText : 'Load More';
		filterPost.loadMoreIcon = loadMoreIcon ? loadMoreIcon : 'angle-right';
		filterPost.loadMoreIconAlign = loadMoreIconAlign ? loadMoreIconAlign : 'none';

		filterPost.prevTxt = prevTxt ? prevTxt : '';
		filterPost.prevTxtIcon = prevTxtIcon ? prevTxtIcon : '';
		filterPost.nextTxt = nextTxt ? nextTxt : '';
		filterPost.nextTxtIcon = nextTxtIcon ? nextTxtIcon : '';

		filterPost.defaultImageUrl = defaultImageUrl ? defaultImageUrl : '';

		let formData = convertToAjaxParams(filterPost);
		let siteUrl = FrontisBlocksData.site_url;

		fetch(`${siteUrl}/wp-json/wp/v2/frontis-blocks/post`, {
			method: 'POST',
			body: formData
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then(posts => {
				const postGridElement = document.getElementById(blockId);
				const postListElement = postGridElement.querySelector('.fb_post_grid_container'); 

				// Remove any existing Load More button to avoid duplication
				const existingLoadMore = postListElement.querySelector('.fb_load_more_wrapper');
				if (existingLoadMore) {
					existingLoadMore.remove();
				}

				// Append new posts instead of replacing existing content
				postListElement.insertAdjacentHTML('beforeend', posts.data.content);

				const loadingElement = postGridElement.querySelector('.loading.post');
				if (loadingElement) {
					loadingElement.style.display = 'none';
				}

				currentPage = currentPage + 1;
				
				const loadMoreWrapper = postListElement.querySelector('.fb_load_more');
				const loadMoreIconWrapper = postListElement.querySelector('.load_more_button_icon');
				if (loadMoreWrapper) {
					loadMoreWrapper.innerHTML = `
						${loadMoreText}

						${
							loadMoreIconAlign === 'icon'
								? `<span class="load_more_button_icon_wrap">
									${loadMoreIconWrapper?.outerHTML || ''}
									<div class="fb_load_more_outter_wrap">
										<span class="fb_load_more_loader"></span>
									</div>
								</span>`
								: ''
						}
					`;
				}

				const loadMore = document.querySelector('.fb_post_grid_container .fb_load_more');
				if (loadMore) {
					if (loadMoreIconAlign === 'icon') {
						const svgElement = loadMore.querySelector('.load_more_button_icon_wrap svg');
						if (svgElement) {
							svgElement.style.display = 'block';
						}
				
						const outerWrap = loadMore.querySelector('.fb_load_more_outter_wrap');
						if (outerWrap) {
							outerWrap.style.display = 'none';
						}
					}
				}
				
			})
			.catch(error => {
				console.error('Error fetching posts:', error);
				const loadMore = document.querySelector('.fb_post_grid_container .fb_load_more');
				if (loadMore) {
					loadMore.querySelector('.fb_load_more_outter_wrap').style.display = 'block';
					loadMore.querySelector('.fb_load_more_outter_wrap').style.display = 'none';
				}
			});
	}

	const postGridBlocks = document.querySelectorAll('.wp-block-frontis-blocks-post-grid');

	postGridBlocks.forEach(block => {
		const cat = filterSelectedTaxonomy === 'true' ? filterSelectedCat : block.getAttribute('data-cat');
        const tag = filterSelectedTaxonomy === 'true' ? filterSelectedTag : block.getAttribute('data-tag');
		loadMorePosts(
            block.getAttribute('data-post-type'),
            block.getAttribute('data-block-id'),
            cat,
            block.getAttribute('data-perpage'),
            block.getAttribute('data-orderby'),
            block.getAttribute('data-sortorder'),
            tag,
            block.getAttribute('data-author'),
            block.getAttribute('data-deauthor'),
            block.getAttribute('data-detag'),
            block.getAttribute('data-decat'),
            block.getAttribute('data-post-title-tag'),
            block.getAttribute('data-post-description-tag'),
            block.getAttribute('data-post-description-excerpt-length'),
            block.getAttribute('data-show-excerpt-switcher'),
            block.getAttribute('data-show-author-switcher'),
            block.getAttribute('data-show-category-switcher'),
            block.getAttribute('data-show-tag-switcher'),
            block.getAttribute('data-post-author-prefix-switcher'),
            block.getAttribute('data-post-author-prefix'),
            block.getAttribute('data-show-date-switcher'),
            block.getAttribute('data-post-author-avatar-switcher'),
            block.getAttribute('data-post-image-size'),
            block.getAttribute('data-show-load-more-switcher'),
            block.getAttribute('data-load-more-text'),
            block.getAttribute('data-load-more-icon'),
            block.getAttribute('data-load-more-icon-align'),
            block.getAttribute('data-default-image-url')
        );
	});

	// Default Add active class in category
	document.querySelectorAll('.fb_post_grid_filter_category').forEach(item => {
		if (item.getAttribute('data-category-id') === '0') {
			item.classList.add('active');
		}
	});

	const categoryItems = document.querySelectorAll('.fb_post_grid_filter_category');

	categoryItems.forEach((item) => {
		item.addEventListener('click', function () {
			const categoryId = this.getAttribute('data-category-id');
            currentPage = 1;
            filterPost.offset = 0;
			
			// Remove active class from all items
			categoryItems.forEach(el => el.classList.remove('active'));

			// Add active class to the clicked item
			this.classList.add('active');

            // Update filterPost.category
            // filterPost.category = categoryId === '0' ? [] : [categoryId]; // "All" should reset filter

			// Update filterPost.category
			if (categoryId === '0') {
				// Get all categories from data-filter-selected-cat (e.g., "4,16,0")
				const filterSelectedCat = parentElement?.getAttribute("data-filter-selected-cat") || '';
				// Split the string into an array and filter out '0' or invalid entries
				filterPost.category = filterSelectedCat
					.split(',')
					.filter(id => id !== '0' && id.trim() !== '')
					.map(id => id.trim());
			} else {
				// For specific category, set it as the only filter
				filterPost.category = [categoryId];
			}

			console.log('categoryId', categoryId);
			console.log('categorycat', filterPost.category);

            const parentBlock = this.closest('.wp-block-frontis-blocks-post-grid');

			if (parentBlock) {
				const blockId = parentBlock.getAttribute('data-block-id');
                const postType = parentBlock.getAttribute('data-post-type');
                let perpage = parentBlock.getAttribute('data-perpage');
                if (filterSelectedTaxonomy === 'true') {
                    perpage = filterAllPostsCount;
                }

                const orderby = parentBlock.getAttribute('data-orderby');
                const sortorder = parentBlock.getAttribute('data-sortorder');
                const tag = filterSelectedTaxonomy === 'true' ? filterSelectedTag : parentBlock.getAttribute('data-tag');
                const author = parentBlock.getAttribute('data-author');
                const deauthor = parentBlock.getAttribute('data-deauthor');
                const detag = parentBlock.getAttribute('data-detag');
                const decategory = parentBlock.getAttribute('data-decat');

                const postTitleTag = parentBlock.getAttribute('data-post-title-tag');
                const postDescriptionTag = parentBlock.getAttribute('data-post-description-tag');
                const postDescriptionExcerptLength = parentBlock.getAttribute('data-post-description-excerpt-length');
                const showExcerptSwitcher = parentBlock.getAttribute('data-show-excerpt-switcher');
                const showAuthorSwitcher = parentBlock.getAttribute('data-show-author-switcher');
                const showCategorySwitcher = parentBlock.getAttribute('data-show-category-switcher');
                const showTagSwitcher = parentBlock.getAttribute('data-show-tag-switcher');

                const postAuthorPrefixSwitcher = parentBlock.getAttribute('data-post-author-prefix-switcher');
                const postAuthorPrefix = parentBlock.getAttribute('data-post-author-prefix');
                const showDateSwitcher = parentBlock.getAttribute('data-show-date-switcher');
                const postAuthorAvatarSwitcher = parentBlock.getAttribute('data-post-author-avatar-switcher');
                const postImageSize = parentBlock.getAttribute('data-post-image-size');
                const showLoadMoreSwitcher = parentBlock.getAttribute('data-show-load-more-switcher');
                const loadMoreText = parentBlock.getAttribute('data-load-more-text');
                const loadMoreIcon = parentBlock.getAttribute('data-load-more-icon');
                const loadMoreIconAlign = parentBlock.getAttribute('data-load-more-icon-align');
				const loadMoreType = parentBlock.getAttribute('data-load-more-type');
				const prevTxt = parentBlock.getAttribute('data-prev-text');
				const prevTxtIcon = parentBlock.getAttribute('data-prev-icon');
				const nextTxt = parentBlock.getAttribute('data-next-text');
				const nextTxtIcon = parentBlock.getAttribute('data-next-icon');
                const defaultImageUrl = parentBlock.getAttribute('data-default-image-url');

                // Clear previous posts
                const postListElement = parentBlock.querySelector('.fb_post_grid_container');
                if (postListElement) {
                    postListElement.innerHTML = '';
                }

                // Call Ajax to load filtered posts
                loadMorePosts(
                    postType,
                    blockId,
                    filterPost.category.join(','),
                    perpage,
                    orderby,
                    sortorder,
                    tag,
                    author,
                    deauthor,
                    detag,
                    decategory,
                    postTitleTag,
                    postDescriptionTag,
                    postDescriptionExcerptLength,
                    showExcerptSwitcher,
                    showAuthorSwitcher,
                    showCategorySwitcher,
                    showTagSwitcher,
                    postAuthorPrefixSwitcher,
                    postAuthorPrefix,
                    showDateSwitcher,
                    postAuthorAvatarSwitcher,
                    postImageSize,
                    showLoadMoreSwitcher,
                    loadMoreText,
                    loadMoreIcon,
                    loadMoreIconAlign,
					loadMoreType,
					prevTxt,
					prevTxtIcon,
					nextTxt,
					nextTxtIcon,
                    defaultImageUrl
                );
			}
		});
	});


});
