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

				const postAuthorAvatarSwitcher = parentElement.getAttribute("data-post-author-avatar-switcher");
				const postImageSize = parentElement.getAttribute("data-post-image-size");

				const showLoadMoreSwitcher = parentElement.getAttribute("data-show-load-more-switcher");
				const loadMoreText = parentElement.getAttribute("data-load-more-text");
				

				// Increase current page and update offset for the next batch of posts
				filterPost.currentPage = currentPage;

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

				filterPost.postAuthorAvatarSwitcher = postAuthorAvatarSwitcher ? postAuthorAvatarSwitcher : false;

				filterPost.postImageSize = postImageSize ? postImageSize : 'full';
				
				filterPost.showLoadMoreSwitcher = showLoadMoreSwitcher ? showLoadMoreSwitcher : true;
				filterPost.loadMoreText = loadMoreText ? loadMoreText : 'Load More';



				// Call function to load more posts
				loadMorePosts(postType, blockId, cat, perpage, orderby, sortorder, tag, author, deauthor, detag, decategory, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher, postAuthorAvatarSwitcher, postImageSize, showLoadMoreSwitcher, loadMoreText);
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

	function loadMorePosts(postType, blockId, cat, perpage, orderby, sortorder, tag, author, deauthor, detag, decategory, postTitleTag, postDescriptionTag, postDescriptionExcerptLength, showAuthorSwitcher, showCategorySwitcher, showTagSwitcher, postAuthorPrefixSwitcher, postAuthorPrefix, showDateSwitcher, postAuthorAvatarSwitcher, postImageSize, showLoadMoreSwitcher, loadMoreText) {
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

		filterPost.postAuthorAvatarSwitcher = postAuthorAvatarSwitcher ? postAuthorAvatarSwitcher : false;
		filterPost.postImageSize = postImageSize ? postImageSize : 'full';

		filterPost.showLoadMoreSwitcher = showLoadMoreSwitcher ? showLoadMoreSwitcher : true;	
		filterPost.loadMoreText = loadMoreText ? loadMoreText : 'Load More';

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
				if (loadMoreWrapper) {
					loadMoreWrapper.innerHTML = `
						${loadMoreText}
						<span class="load_more_button_icon_wrap">
							<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"></path>
							</svg>
							<div class="fb_load_more_outter_wrap">
								<span class="fb_load_more_loader"></span>
							</div>
						</span>
					`;
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
		loadMorePosts(block.getAttribute('data-post-type'), block.getAttribute('data-block-id'), block.getAttribute('data-cat'), block.getAttribute('data-perpage'), block.getAttribute('data-orderby'), block.getAttribute('data-sortorder'), block.getAttribute('data-tag'), block.getAttribute('data-author'), block.getAttribute('data-deauthor'), block.getAttribute('data-detag'), block.getAttribute('data-decat'), block.getAttribute('data-post-title-tag'), block.getAttribute('data-post-description-tag'), block.getAttribute('data-post-description-excerpt-length'), block.getAttribute('data-show-author-switcher'), block.getAttribute('data-show-category-switcher'), block.getAttribute('data-show-tag-switcher'), block.getAttribute('data-post-author-prefix-switcher'), block.getAttribute('data-post-author-prefix'), block.getAttribute('data-show-date-switcher'), block.getAttribute('data-post-author-avatar-switcher'), block.getAttribute('data-post-image-size'), block.getAttribute('data-show-load-more-switcher'), block.getAttribute('data-load-more-text')); 
	});


});
