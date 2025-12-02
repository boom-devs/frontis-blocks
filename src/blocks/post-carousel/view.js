(function () {
	let currentPages = {};

	/**
	 * Reusable function to get all attributes from block 
	 */
	function getPostGridOptions(block) {
		const attrs = block.dataset;
		return {
			postType: attrs.postType,
			blockId: attrs.blockId,
			categoryKey: attrs.categoryKey,
			tagKey: attrs.tagKey,
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
			defaultImageUrl: attrs.defaultImageUrl,

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

			customPermalinkSwitcher: attrs.customPermalinkSwitcher,
			customPermalink: attrs.customPermalink,

			thumbnailLinkSwitcher: attrs.thumbnailLinkSwitcher,
			categoryLinkSwitcher: attrs.categoryLinkSwitcher,
			tagLinkSwitcher: attrs.tagLinkSwitcher,
			authorLinkSwitcher: attrs.authorLinkSwitcher,
			titleLinkSwitcher: attrs.titleLinkSwitcher,

			postWrapperLinkSwitcher: attrs.postWrapperLinkSwitcher,
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
			blockId,
			categoryKey,
			tagKey,
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
			defaultImageUrl,

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

			customPermalinkSwitcher,
			customPermalink,

			thumbnailLinkSwitcher,
			categoryLinkSwitcher,
			tagLinkSwitcher,
			authorLinkSwitcher,
			titleLinkSwitcher,

			postWrapperLinkSwitcher,
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
			block_id: blockId,
			categoryKey: categoryKey,
			tagKey: tagKey,
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
			defaultImageUrl: defaultImageUrl || '',

			readMoreSwitcher: readMoreSwitcher || false,
			readMoreText: readMoreText || '',
			readMoreIconAlign: readMoreIconAlign || 'none',
			readMoreIcon: readMoreIcon || 'angle-right',
			readMoreIconImageUrl: readMoreIconImageUrl || '',
			readMoreIconImageAlt: readMoreIconImageAlt || '',

			customPermalinkSwitcher: customPermalinkSwitcher || false,
			customPermalink: customPermalink || '',

			thumbnailLinkSwitcher: thumbnailLinkSwitcher || true,
			categoryLinkSwitcher: categoryLinkSwitcher || true,
			tagLinkSwitcher: tagLinkSwitcher || true,
			authorLinkSwitcher: authorLinkSwitcher || true,
			titleLinkSwitcher: titleLinkSwitcher || true,

			postWrapperLinkSwitcher: postWrapperLinkSwitcher || false,

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
				const isCarouselEnabled = postGridElement.classList.contains('wp-block-frontis-blocks-post-carousel') || postGridElement.getAttribute('data-carousel-enabled') === 'true';
				
				// Check if carousel container exists
				const carouselContainer = postGridElement.querySelector('.fb-post-carousel-container');
				const postListElement = isCarouselEnabled && carouselContainer 
					? carouselContainer.querySelector('.swiper-wrapper.fb_post_grid_container')
					: postGridElement.querySelector('.fb_post_grid_container');

				if (!postListElement) return;

				const existingLoadMore = postListElement.querySelector('.fb_load_more_wrapper');
				if (existingLoadMore) existingLoadMore.remove();

				// If carousel is enabled, wrap each post in swiper-slide
				if (isCarouselEnabled && carouselContainer) {
					// Parse the HTML and wrap each post item in swiper-slide
					const tempDiv = document.createElement('div');
					tempDiv.innerHTML = posts.data.content;
					const postItems = tempDiv.querySelectorAll('.fb_post_grid_item, .post-card, [class*="post-item"]');
					
					postItems.forEach(item => {
						const slide = document.createElement('div');
						slide.className = 'swiper-slide';
						slide.innerHTML = item.outerHTML;
						postListElement.appendChild(slide);
					});
					
					// Initialize or update Swiper after adding slides
					setTimeout(() => {
						if (window.reinitPostCarousel) {
							window.reinitPostCarousel();
						}
					}, 100);
				} else {
					postListElement.insertAdjacentHTML('beforeend', posts.data.content);
				}

				const loadingElement = postGridElement.querySelector('.loading.post');
				if (loadingElement) loadingElement.style.display = 'none';

				currentPages[blockId] = currentPage + 1;


				// Save the Read More icon HTML for when click on load more button
				if (readMoreSwitcher) {
					const readMoreIcon = postGridElement.querySelector('.fb_post_grid_read_more_icon');
					if (readMoreIcon) {
						options.readMoreIconHTML = readMoreIcon.outerHTML;
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
		// Support both post-grid and post-carousel blocks
		const postGridBlocks = document.querySelectorAll('.wp-block-frontis-blocks-post-grid, .wp-block-frontis-blocks-post-carousel');
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
	 * Category items click
	 */
	const categoryItems = document.querySelectorAll('.fb_post_grid_filter_category');

	categoryItems.forEach((item) => {
		item.addEventListener('click', function () {
			const block = this.closest('.wp-block-frontis-blocks-post-grid, .wp-block-frontis-blocks-post-carousel');
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


	window.reinitPostGrid = initPostGrid;
	setupPostGrid();

	/**
	 * Initialize Post Carousel Swiper
	 */
	function initPostCarousel() {
		// Select all post carousel containers
		document
			.querySelectorAll(".fb-post-carousel-container")
			.forEach(function (carouselContainer) {
				const blockId = carouselContainer.dataset.blockId;
				if (!blockId) return;

				const swiperSettings = carouselContainer.dataset.swiperSettings;
				if (!swiperSettings) return;

				let sliderOptions = {};
				try {
					sliderOptions = JSON.parse(swiperSettings);
				} catch (e) {
					console.error("Invalid Swiper settings JSON", e);
					return;
				}

				const swiperEl = carouselContainer.querySelector(".fb-post-carousel-swiper");
				if (!swiperEl) return;

				// Check if already initialized
				if (swiperEl.swiper) {
					swiperEl.swiper.update();
					return;
				}

				// Initialize Swiper
				const swiperInstance = new Swiper(swiperEl, {
					...sliderOptions,
				});

				// Autoplay toggle support
				if (sliderOptions.navigation?.nextEl) {
					const match = sliderOptions.navigation.nextEl.match(/\.([^ ]+)/);
					if (match) {
						const arrowsId = match[1];
						const wrapper = document.querySelector(`.${arrowsId}`);
						if (wrapper) {
							const btn = wrapper.querySelector(".fb-news-ticker-pause-btn");
							if (btn) {
								btn.addEventListener("click", function () {
									if (swiperInstance.autoplay?.running) {
										swiperInstance.autoplay.stop();
										btn.classList.add("paused");
									} else {
										swiperInstance.autoplay.start();
										btn.classList.remove("paused");
									}
								});
							}
						}
					}
				}
			});
	}

	/**
	 * Setup post carousel initialization
	 */
	function setupPostCarousel() {
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', function() {
				setTimeout(initPostCarousel, 100);
			});
		} else {
			setTimeout(initPostCarousel, 100);
		}

		// Reinitialize when content changes (e.g., after load more)
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					setTimeout(initPostCarousel, 300);
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}

	setupPostCarousel();
	window.reinitPostCarousel = initPostCarousel;
})();
