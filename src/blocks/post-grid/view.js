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

	document.body.addEventListener('click', function(event) {
		if (event.target.closest('.fb_load_more')) {
			const parentElement = event.target.closest(".wp-block-frontis-blocks-post-grid");
			document.querySelector('.fb_post_grid_container .fb_load_more_outter_wrap').style.display = 'block';
			document.querySelector('.fb_post_grid_container .fb_load_more .load_more_button_icon_wrap svg').style.display = 'none';

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

				const showAuthorSwitcher = parentElement.getAttribute("data-show-author-switcher");
				const showCategorySwitcher = parentElement.getAttribute("data-show-category-switcher");
				const showTagSwitcher = parentElement.getAttribute("data-show-tag-switcher");

				const postAuthorPrefixSwitcher = parentElement.getAttribute("data-post-author-prefix-switcher");
				const postAuthorPrefix = parentElement.getAttribute("data-post-author-prefix");

				const showDateSwitcher = parentElement.getAttribute("data-show-date-switcher");

				// Increase current page and update offset for the next batch of posts
				filterPost.currentPage = currentPage;

				console.log(filterPost.limit * (currentPage - 1))

				filterPost.offset = filterPost.limit * (currentPage - 1);
				filterPost.category = cat ? cat.split(',') : [];
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

				filterPost.showAuthorSwitcher = showAuthorSwitcher ? showAuthorSwitcher : false;
				filterPost.showCategorySwitcher = showCategorySwitcher ? showCategorySwitcher : false;
				filterPost.showTagSwitcher = showTagSwitcher ? showTagSwitcher : false;

				filterPost.postAuthorPrefixSwitcher = postAuthorPrefixSwitcher ? postAuthorPrefixSwitcher : false;
				filterPost.postAuthorPrefix = postAuthorPrefix ? postAuthorPrefix : 'Posted By';

				filterPost.showDateSwitcher = showDateSwitcher ? showDateSwitcher : true;


				// Call function to load more posts
				loadMorePosts(postType, blockId, cat, perpage, orderby, sortorder, tag, author, deauthor, detag, decategory, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher);
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

	function loadMorePosts(postType, blockId, cat, perpage, orderby, sortorder, tag, author, deauthor, detag, decategory, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher) {
		filterPost.post_type = postType;
		filterPost.block_id = blockId;
		filterPost.category = cat ? cat.split(',') : [];
		filterPost.post_tag = tag ? tag.split(',') : [];
		filterPost.post_author = author ? author.split(',') : [];
		filterPost.deauthor = deauthor ? deauthor.split(',') : [];
		filterPost.detag = detag ? detag.split(',') : [];
		filterPost.decategory = decategory ? decategory.split(',') : [];
		filterPost.limit = perpage;
		filterPost.orderby = orderby ? orderby.split(',') : [];
		filterPost.sortorder = sortorder ? sortorder.split(',') : [];

		filterPost.showAuthorSwitcher = showAuthorSwitcher ? showAuthorSwitcher : false;
		filterPost.showCategorySwitcher = showCategorySwitcher ? showCategorySwitcher : false;
		filterPost.showTagSwitcher = showTagSwitcher ? showTagSwitcher : false;

		filterPost.postTitleTag = postTitleTag ? postTitleTag : 'h3';
		filterPost.postDescriptionTag = postDescriptionTag ? postDescriptionTag : 'p';
		filterPost.postDescriptionExcerptLength = postDescriptionExcerptLength ? postDescriptionExcerptLength : 10;

		filterPost.postAuthorPrefixSwitcher = postAuthorPrefixSwitcher ? postAuthorPrefixSwitcher : false;
		filterPost.postAuthorPrefix = postAuthorPrefix ? postAuthorPrefix : 'Posted By';

		filterPost.showDateSwitcher = showDateSwitcher ? showDateSwitcher : true;

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
				// const loadMoreLoader = postGridElement.querySelector('.fb_load_more_loader');
				// loadMoreLoader.classList.remove('active');

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

				console.log("After")
				currentPage = currentPage + 1;
				console.log("current page");
				console.log(currentPage);
				console.log(filterPost.limit * (currentPage - 1))

				// Re-attach the Load More button if more pages are available
				// if (currentPage < posts.data.total_pages) {
				// 	let loadMoreButton = document.createElement('div');
				// 	loadMoreButton.className = 'fb_load_more';
				// 	loadMoreButton.textContent = 'Load more';
				// 	postListElement.appendChild(loadMoreButton);
				// }

				const loadMore = document.querySelector('.fb_post_grid_container .fb_load_more');
				if (loadMore) {
					loadMore.querySelector('.load_more_button_icon_wrap svg').style.display = 'block';
					loadMore.querySelector('.fb_load_more_outter_wrap').style.display = 'none';
				}
			})
			.catch(error => {
				console.error('Error fetching posts:', error);
				const loadMore = document.querySelector('.fb_post_grid_container .fb_load_more');
				if (loadMore) {
					loadMore.querySelector('.load_more_button_icon_wrap svg').style.display = 'block';
					loadMore.querySelector('.fb_load_more_outter_wrap').style.display = 'none';
				}
			});
	}

	const postGridBlocks = document.querySelectorAll('.wp-block-frontis-blocks-post-grid');

	postGridBlocks.forEach(block => {
		loadMorePosts(block.getAttribute('data-post-type'), block.getAttribute('data-block-id'), block.getAttribute('data-cat'), block.getAttribute('data-perpage'), block.getAttribute('data-orderby'), block.getAttribute('data-sortorder'), block.getAttribute('data-tag'), block.getAttribute('data-author'), block.getAttribute('data-deauthor'), block.getAttribute('data-detag'), block.getAttribute('data-decat'), block.getAttribute('data-post-title-tag'), block.getAttribute('data-post-description-tag'), block.getAttribute('data-post-description-excerpt-length'), block.getAttribute('data-show-author-switcher'), block.getAttribute('data-show-category-switcher'), block.getAttribute('data-show-tag-switcher'), block.getAttribute('data-post-author-prefix-switcher'), block.getAttribute('data-post-author-prefix'), block.getAttribute('data-show-date-switcher')); 
	});


});
