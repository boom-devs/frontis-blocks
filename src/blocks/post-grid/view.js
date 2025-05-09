(function () {
	let currentPages = {};

	/**
	 * Reusable function to get all attributes from block 
	 */
	function getPostGridOptions(block) {
		const attrs = block.dataset;
		return {
			postType: attrs.postType,
			premadeStyle: attrs.premadeStyle,
			blockId: attrs.blockId,
			cat: attrs.cat,
			perpage: parseInt(attrs.perpage || 12),
			orderby: attrs.orderby,
			sortorder: attrs.sortorder,
			tag: attrs.tag,
			author: attrs.author,
			deauthor: attrs.deauthor,
			detag: attrs.detag,
			decategory: attrs.decat,
			postTitleTag: attrs.postTitleTag,
			postDescriptionTag: attrs.postDescriptionTag,
			postDescriptionExcerptLength: attrs.postDescriptionExcerptLength,
			showExcerptSwitcher: attrs.showExcerptSwitcher,
			showAuthorSwitcher: attrs.showAuthorSwitcher,
			showCategorySwitcher: attrs.showCategorySwitcher,
			showTagSwitcher: attrs.showTagSwitcher,
			postAuthorPrefixSwitcher: attrs.postAuthorPrefixSwitcher,
			postAuthorPrefix: attrs.postAuthorPrefix,
			showDateSwitcher: attrs.showDateSwitcher,
			postAuthorAvatarSwitcher: attrs.postAuthorAvatarSwitcher,
			postImageSize: attrs.postImageSize,
			showLoadMoreSwitcher: attrs.showLoadMoreSwitcher,
			loadMoreText: attrs.loadMoreText,
			loadMoreIcon: attrs.loadMoreIcon,
			loadMoreIconAlign: attrs.loadMoreIconAlign,
			defaultImageUrl: attrs.defaultImageUrl,
			loadMoreType: attrs.loadMoreType,
			paginationPrevNextType: attrs.paginationPrevNextType,
			paginationPrevText: attrs.paginationPrevText,
			paginationPrevIcon: attrs.paginationPrevIcon,
			paginationNextText: attrs.paginationNextText,
			paginationNextIcon: attrs.paginationNextIcon,

			showFilterByTaxonomy: attrs.showFilterByTaxonomy,
			filterSelectedTaxonomy: attrs.filterSelectedTaxonomy,
			filterSelectedCat: attrs.filterSelectedCat,
			filterSelectedTag: attrs.filterSelectedTag,

			readMoreSwitcher: attrs.readMoreSwitcher,
			readMoreText: attrs.readMoreText,
			readMoreIconAlign: attrs.readMoreIconAlign,
			readMoreIcon: attrs.readMoreIcon,
			readMoreIconImageUrl: attrs.readMoreIconImageUrl,
			readMoreIconImageAlt: attrs.readMoreIconImageAlt,
		};
	}

	/**
	 * Convert object to FormData
	 */
	function convertToFormData(params) {
		let formData = new FormData();
		for (let key in params) {
			if (params.hasOwnProperty(key) && params[key] !== '') {
				formData.append(key, params[key]);
			}
		}
		return formData;
	}

	/**
	 * Main loader function
	 */
	function loadMorePosts(options) {
		const {
			postType,
			premadeStyle,
			blockId,
			cat,
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
			defaultImageUrl,
			loadMoreType,
			paginationPrevNextType,
			paginationPrevText,
			paginationPrevIcon,
			paginationNextText,
			paginationNextIcon,

			showFilterByTaxonomy,
			filterSelectedTaxonomy,
			filterSelectedCat,
			filterSelectedTag,

			readMoreSwitcher,
			readMoreText,
			readMoreIconAlign,
			readMoreIcon,
			readMoreIconImageUrl,
			readMoreIconImageAlt,
		} = options;

		let currentPage = currentPages[blockId] || 1;



		const categories = (showFilterByTaxonomy === 'true' && filterSelectedTaxonomy === 'category')
		? (filterSelectedCat || '').split(',').filter(id => id && id !== '0')
		: (cat && cat !== '0' ? cat.split(',').filter(id => id !== '0') : []);

		const tags = (showFilterByTaxonomy === 'true' && filterSelectedTaxonomy === 'tag')
		? (filterSelectedTag || '').split(',').filter(id => id && id !== '0')
		: (tag ? tag.split(',') : []);

		/**
		 * Build filter for fetch request
		 */
		const filterPost = {
			offset: perpage * (currentPage - 1),
			limit: perpage,
			currentPage,
			post_type: postType,
			premade_style: premadeStyle,
			block_id: blockId,
			category: categories,
			post_tag: tags,
			post_author: author ? author.split(',') : [],
			deauthor: deauthor ? deauthor.split(',') : [],
			detag: detag ? detag.split(',') : [],
			decategory: decategory ? decategory.split(',') : [],
			orderby: orderby ? orderby.split(',') : [],
			sortorder: sortorder ? sortorder.split(',') : [],
			showAuthorSwitcher: showAuthorSwitcher || false,
			showCategorySwitcher: showCategorySwitcher || false,
			showTagSwitcher: showTagSwitcher || false,
			postTitleTag: postTitleTag || 'h3',
			postDescriptionTag: postDescriptionTag || 'p',
			postDescriptionExcerptLength: postDescriptionExcerptLength || 10,
			showExcerptSwitcher: showExcerptSwitcher || true,
			postAuthorPrefixSwitcher: postAuthorPrefixSwitcher || false,
			postAuthorPrefix: postAuthorPrefix || 'Posted By',
			showDateSwitcher: showDateSwitcher || true,
			postAuthorAvatarSwitcher: postAuthorAvatarSwitcher || false,
			postImageSize: postImageSize || 'full',
			showLoadMoreSwitcher: showLoadMoreSwitcher || true,
			loadMoreText: loadMoreText || 'Load More',
			loadMoreIcon: loadMoreIcon || 'angle-right',
			loadMoreIconAlign: loadMoreIconAlign || 'none',
			defaultImageUrl: defaultImageUrl || '',
			loadMoreType: loadMoreType || 'button',
			paginationPrevNextType: paginationPrevNextType || 'button',
			paginationPrevText: paginationPrevText || 'Prev',
			paginationPrevIcon: paginationPrevIcon || 'angle-left',
			paginationNextText: paginationNextText || 'Next',
			paginationNextIcon: paginationNextIcon || 'angle-right',


			readMoreSwitcher: readMoreSwitcher || false,
			readMoreText: readMoreText || 'Read More',
			readMoreIconAlign: readMoreIconAlign || 'none',
			readMoreIcon: readMoreIcon || 'angle-right',
			readMoreIconImageUrl: readMoreIconImageUrl || '',
			readMoreIconImageAlt: readMoreIconImageAlt || '',

		};

		/**
		 * Convert filter to form data
		 */
		const formData = convertToFormData(filterPost);
		const siteUrl = FrontisBlocksData.site_url;

		fetch(`${siteUrl}/wp-json/wp/v2/frontis-blocks/post`, {
			method: 'POST',
			body: formData,
		})
			.then(response => {
				if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
				return response.json();
			})
			.then(posts => {
				const postGridElement = document.getElementById(blockId);
				const postListElement = postGridElement.querySelector('.fb_post_grid_container');

				const existingLoadMore = postListElement.querySelector('.fb_load_more_wrapper');
				if (existingLoadMore) existingLoadMore.remove();

				postListElement.insertAdjacentHTML('beforeend', posts.data.content);

				const loadingElement = postGridElement.querySelector('.loading.post');
				if (loadingElement) loadingElement.style.display = 'none';

				currentPages[blockId] = currentPage + 1;

				/**
				 * Load more button
				 */
				if (loadMoreType === 'button') {
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
							}`;
					}

					const loadMore = document.querySelector('.fb_post_grid_container .fb_load_more');
					if (loadMore && loadMoreIconAlign === 'icon') {
						const svgElement = loadMore.querySelector('.load_more_button_icon_wrap svg');
						if (svgElement) svgElement.style.display = 'block';

						const outerWrap = loadMore.querySelector('.fb_load_more_outter_wrap');
						if (outerWrap) outerWrap.style.display = 'none';
					}
				}

				/**
				 * Pagination button
				 */
				if(loadMoreType === 'pagination') {
					const paginationPreviousIconWrapper = postListElement.querySelector('.fb_pagination_previous_icon_Wrapper');
					const paginationNextIconWrapper = postListElement.querySelector('.fb_pagination_next_icon_Wrapper');

					const paginationPreviousIcon = postGridElement.querySelector('.fb_pagination_previous_icon');
					const paginationNextIcon = postGridElement.querySelector('.fb_pagination_next_icon');

					if (paginationPreviousIconWrapper) {
						paginationPreviousIconWrapper.innerHTML = `
							${
								paginationPrevNextType === 'icon'
									? paginationPreviousIcon?.outerHTML || ''
									: paginationPrevText
							}
						`;
					}

					if (paginationNextIconWrapper) {
						paginationNextIconWrapper.innerHTML = `
							${
								paginationPrevNextType === 'icon'
									? paginationNextIcon?.outerHTML || ''
									: paginationNextText
							}
						`;
					}
				}

				if (readMoreSwitcher) {
					const readMoreIconWrapper = postListElement.querySelectorAll('.fb_post_grid_read_more_icon_wrapper');
					const readMoreIconHTML = options.readMoreIconHTML || '';
				
					if (readMoreIconWrapper && readMoreIconHTML) {
						readMoreIconWrapper.forEach(wrapper => {
							wrapper.innerHTML = readMoreIconHTML;
						});
					}
				}
				

			})
			.catch(error => {
				console.error('Error fetching posts:', error);
			});
	}

	/**
	 * Initialize post grid
	 */
	function initPostGrid() {
		const postGridBlocks = document.querySelectorAll('.wp-block-frontis-blocks-post-grid');
		postGridBlocks.forEach(block => {
			if (block.hasAttribute('data-postgrid-initialized')) return;
			block.setAttribute('data-postgrid-initialized', 'true');

			const options = getPostGridOptions(block);
			currentPages[options.blockId] = 1;

			// Save the Read More icon HTML for initial load
			if (options.readMoreSwitcher) {
				const readMoreIcon = block.querySelector('.fb_post_grid_read_more_icon');
				if (readMoreIcon) {
					options.readMoreIconHTML = readMoreIcon.outerHTML;
				}
			}

			// Default Add active class in category
			document.querySelectorAll('.fb_post_grid_filter_category').forEach(item => {
				if (item.getAttribute('data-category-id') === '0') {
					item.classList.add('active');
				}
			});

			loadMorePosts(options);
		});
	}

	/**
	 * Setup post grid
	 */
	function setupPostGrid() {
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initPostGrid);
		} else {
			initPostGrid();
		}

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length || mutation.removedNodes.length) {
					initPostGrid();
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	/**
	 * Load more button click
	 */
	document.body.addEventListener('click', function(event) {
		if (event.target.closest('.fb_load_more')) {
			const block = event.target.closest('.wp-block-frontis-blocks-post-grid');
			if (!block) return;

			const options = getPostGridOptions(block);
			loadMorePosts(options);

			if (options.loadMoreIconAlign === 'icon') {
				const wrap = block.querySelector('.fb_post_grid_container .fb_load_more_outter_wrap');
				const svg = block.querySelector('.fb_post_grid_container .fb_load_more .load_more_button_icon_wrap svg');
				if (wrap) wrap.style.display = 'block';
				if (svg) svg.style.display = 'none';
			}
		}
	});
	/**
	 * Category items click
	 */
	const categoryItems = document.querySelectorAll('.fb_post_grid_filter_category');

	categoryItems.forEach((item) => {
		item.addEventListener('click', function () {
			const block = this.closest('.wp-block-frontis-blocks-post-grid');
			if (!block) return;

			const categoryId = this.getAttribute('data-category-id');
			const tagId = this.getAttribute('data-tag-id');
			const options = getPostGridOptions(block);

			/**
			 * save old pagination icons html 
			 */
			const prevIconEl = block.querySelector('.fb_pagination_previous_icon');
			const nextIconEl = block.querySelector('.fb_pagination_next_icon');
			const prevIconHtml = prevIconEl ? prevIconEl.outerHTML : '';
			const nextIconHtml = nextIconEl ? nextIconEl.outerHTML : '';

			let savedReadMoreIcon = '';
			if (options.readMoreSwitcher) {
				const readMoreIcon = block.querySelector('.fb_post_grid_read_more_icon');
				if (readMoreIcon) {
					savedReadMoreIcon = readMoreIcon.outerHTML;
				}
			}
			options.readMoreIconHTML = savedReadMoreIcon;
			

			// Reset page number for this block
			currentPages[options.blockId] = 1;

			// Update category based on selection
			if (categoryId === '0') {
				// Get all categories from data-cat attribute
				// const allCategories = block.getAttribute("data-cat") || '';
				const allCategories = block.getAttribute("data-filter-selected-cat") || '';
				options.cat = allCategories
					.split(',')
					.filter(id => id !== '0' && id.trim() !== '')
					.map(id => id.trim())
					.join(',');

					options.filterSelectedCat = options.cat;
			} else {
				options.cat = categoryId;
				options.filterSelectedCat = categoryId;
			}

			// Update tag based on selection
			if (tagId === '0') {
				// Get all tags from data-tag attribute
				// const allTags = block.getAttribute("data-tag") || '';
				const allTags = block.getAttribute("data-filter-selected-tag") || '';
				options.tag = allTags
					.split(',')
					.filter(id => id !== '0' && id.trim() !== '')
					.map(id => id.trim())
					.join(',');

					options.filterSelectedTag = options.tag;
			} else {
				options.tag = tagId;
				options.filterSelectedTag = tagId;
			}

			// Clear previous posts and show loading skeleton
			const postListElement = block.querySelector('.fb_post_grid_container');
			const loadingElement = block.querySelector('.loading.post');
			
			if (postListElement) {
				postListElement.innerHTML = '';
				// Restore pagination icons
				postListElement.insertAdjacentHTML('beforeend', prevIconHtml);
				postListElement.insertAdjacentHTML('beforeend', nextIconHtml);
			}

			if (loadingElement) {
				loadingElement.style.display = 'grid';
			}

			// Add active class to clicked category
			const allCategoryItems = block.querySelectorAll('.fb_post_grid_filter_category');
			allCategoryItems.forEach(cat => cat.classList.remove('active'));
			this.classList.add('active');

			setTimeout(() => {
				loadMorePosts(options);
				// Hide loading manually after a bit of time (e.g. 600ms)
				setTimeout(() => {
					if (loadingElement) {
						loadingElement.style.display = 'none';
					}
				}, 600);
			}, 300);
		});
	});


	/**
	 * pagination button click handler and build filter from grid
	 */
	let totalPages = 1;
	let currentGrid = null;

	const buildFilterFromGrid = (grid, page = 1) => {
		const showFilterByTaxonomy = grid.getAttribute('data-show-filter-by-taxonomy') === 'true';
		const filterSelectedTaxonomy = grid.getAttribute('data-filter-selected-taxonomy');
		
		const limit = parseInt(grid.getAttribute('data-perpage') || 12, 10);

		return {
			offset: limit * (page - 1),
			limit,
			post_type: grid.getAttribute('data-post-type') || 'post',
			premade_style: grid.getAttribute('data-premade-style') || 'style-1', 
			currentPage: page,

			showFilterByTaxonomy: showFilterByTaxonomy,
			filterSelectedTaxonomy: filterSelectedTaxonomy,
			filterSelectedCat: grid.getAttribute('data-filter-selected-cat') || '',
			filterSelectedTag: grid.getAttribute('data-filter-selected-tag') || '',

			category: (showFilterByTaxonomy && filterSelectedTaxonomy === 'category')
				? (grid.getAttribute('data-filter-selected-cat') || '').split(',').filter(id => id && id !== '0')
				: (grid.getAttribute('data-cat') || '').split(',').filter(id => id && id !== '0'),

			post_tag: (showFilterByTaxonomy && filterSelectedTaxonomy === 'tag')
				? (grid.getAttribute('data-filter-selected-tag') || '').split(',').filter(id => id && id !== '0')
				: (grid.getAttribute('data-tag') || '').split(',').filter(id => id && id !== '0'),


			post_author: (grid.getAttribute('data-author') || '').split(',').filter(Boolean),
			deauthor: (grid.getAttribute('data-deauthor') || '').split(',').filter(Boolean),
			detag: (grid.getAttribute('data-detag') || '').split(',').filter(Boolean),
			decategory: (grid.getAttribute('data-decat') || '').split(',').filter(Boolean),
			orderby: grid.getAttribute('data-orderby') || 'date',
			sortorder: grid.getAttribute('data-sortorder') || 'desc',
			postTitleTag: grid.getAttribute('data-post-title-tag') || 'h3',
			postDescriptionTag: grid.getAttribute('data-post-description-tag') || 'p',
			postDescriptionExcerptLength: grid.getAttribute('data-post-description-excerpt-length') || 10,
			showExcerptSwitcher: grid.getAttribute('data-show-excerpt-switcher') || true,
			showAuthorSwitcher: grid.getAttribute('data-show-author-switcher') || false,
			showCategorySwitcher: grid.getAttribute('data-show-category-switcher') || false,
			showTagSwitcher: grid.getAttribute('data-show-tag-switcher') || false,
			postAuthorPrefixSwitcher: grid.getAttribute('data-post-author-prefix-switcher') || false,
			postAuthorPrefix: grid.getAttribute('data-post-author-prefix') || 'Posted By',
			showDateSwitcher: grid.getAttribute('data-show-date-switcher') || true,
			postAuthorAvatarSwitcher: grid.getAttribute('data-post-author-avatar-switcher') || false,
			postImageSize: grid.getAttribute('data-post-image-size') || 'full',
			showLoadMoreSwitcher: grid.getAttribute('data-show-load-more-switcher') || true,
			loadMoreText: grid.getAttribute('data-load-more-text') || 'Load More',
			loadMoreIcon: grid.getAttribute('data-load-more-icon') || 'angle-right',
			loadMoreIconAlign: grid.getAttribute('data-load-more-icon-align') || 'none',
			defaultImageUrl: grid.getAttribute('data-default-image-url') || '',
			loadMoreType: grid.getAttribute('data-load-more-type') || 'pagination',
			block_id: grid.getAttribute('data-block-id'),
			paginationPrevNextType: grid.getAttribute('data-pagination-prev-next-type') || 'icon',
			paginationPrevTxt: grid.getAttribute('data-pagination-prev-text') || 'Prev',
			paginationPrevIcon: grid.getAttribute('data-pagination-prev-icon') || 'angle-left',
			paginationNextTxt: grid.getAttribute('data-pagination-next-text') || 'Next',
			paginationNextIcon: grid.getAttribute('data-pagination-next-icon') || 'angle-right',

			readMoreSwitcher: grid.getAttribute('data-read-more-switcher') || false,
			readMoreText: grid.getAttribute('data-read-more-text') || 'Read More',
			readMoreIconAlign: grid.getAttribute('data-read-more-icon-align') || 'none',
			readMoreIcon: grid.getAttribute('data-read-more-icon') || 'angle-right',
			readMoreIconImageUrl: grid.getAttribute('data-read-more-icon-image-url') || '',
			readMoreIconImageAlt: grid.getAttribute('data-read-more-icon-image-alt') || '',
		};
	};

	/**
	 * Fetch page and build filter from grid
	 */
	const fetchPage = async (grid, page) => {
		const filterPost = buildFilterFromGrid(grid, page);
		const formData = new FormData();
		
		Object.entries(filterPost).forEach(([key, value]) => {
			if (value) {
				formData.append(key, Array.isArray(value) ? value.join(',') : value);
			}
		});

		const listEl = grid.querySelector('.fb_post_grid_container');
		listEl.classList.add('fb_is_loading');

		/**
		 * save old icon html 
		 */		
		const prevIconHtml = (listEl.querySelector('.fb_pagination_previous_icon') || {}).outerHTML || '';
		const nextIconHtml = (listEl.querySelector('.fb_pagination_next_icon') || {}).outerHTML || '';

		/**
		 * save old read more icon html 
		 */
		const readMoreIconHtml = (listEl.querySelector('.fb_post_grid_read_more_icon') || {}).outerHTML || '';

		try {
			const response = await fetch(`${FrontisBlocksData.site_url}/wp-json/wp/v2/frontis-blocks/post`, {
				method: 'POST',
				body: formData
			});
			
			const {data} = await response.json();
			
			listEl.innerHTML = data.content;

			/**
			 * restore pagination icon html 
			 */
			const prevWrap = listEl.querySelector('.fb_pagination_previous_icon_Wrapper');
			const nextWrap = listEl.querySelector('.fb_pagination_next_icon_Wrapper');
			
			if (prevWrap) prevWrap.innerHTML = prevIconHtml;
			if (nextWrap) nextWrap.innerHTML = nextIconHtml;

			/**
			 * restore read more icon html 
			 */
			const readMoreIconWrapper = listEl.querySelectorAll('.fb_post_grid_read_more_icon_wrapper');
			if (readMoreIconWrapper) {
				readMoreIconWrapper.forEach(wrapper => {
					wrapper.innerHTML = readMoreIconHtml;
				});
			}

			const pagWrap = listEl.querySelector('.fb_pagination_wrapper');
			if (pagWrap) {
				pagWrap.dataset.current_page = data.current_page;
				pagWrap.dataset.total_pages = data.total_pages;
			}

			currentPages = data.current_page;
			totalPages = data.total_pages;

		} catch (err) {
			console.error('Pagination fetch error:', err);
		} finally {
			listEl.classList.remove('fb_is_loading');
		}
	};

	/**
	 * Pagination button click handler
	 */
	document.body.addEventListener('click', e => {
		const pageBtn = e.target.closest('.fb_pagination_item');
		const prevBtn = e.target.closest('.fb_pagination_previous'); 
		const nextBtn = e.target.closest('.fb_pagination_next');

		if (!pageBtn && !prevBtn && !nextBtn) return;

		e.preventDefault();
		currentGrid = e.target.closest('.wp-block-frontis-blocks-post-grid');
		if (!currentGrid) return;

		const pagWrapper = currentGrid.querySelector('.fb_pagination_wrapper');
		if (!pagWrapper) return;

		currentPages = parseInt(pagWrapper.dataset.current_page, 10) || 1; 
		totalPages = parseInt(pagWrapper.dataset.total_pages, 10) || 1;

		if (pageBtn) {
			currentPages = parseInt(pageBtn.dataset.pagenumber, 10);
		} else if (prevBtn) {
			currentPages = Math.max(1, currentPages - 1);
		} else if (nextBtn) {
			currentPages = Math.min(totalPages, currentPages + 1);
		}

		fetchPage(currentGrid, currentPages);
	});

	window.reinitPostGrid = initPostGrid;
	setupPostGrid();
})();
