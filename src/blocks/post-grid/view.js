document.addEventListener('DOMContentLoaded', function() {
	let currentPage = 1;
	let limit = 12;

	let filterPost = {
		offset: limit * (currentPage - 1),
		limit: limit,
		post_type: 'post',
		currentPage: currentPage,
		category: null
	};

	document.body.addEventListener('click', function(event) {
		if (event.target.closest('.fb_load_more')) {
			const parentElement = event.target.closest(".wp-block-frontis-blocks-post-grid");

			if (parentElement) {
				const postType = parentElement.getAttribute("data-post-type");
				const blockId = parentElement.getAttribute("data-block-id");
				const cat = parentElement.getAttribute("data-cat");
				const perpage = parentElement.getAttribute("data-perpage");

				// Increase current page and update offset for the next batch of posts
				filterPost.currentPage = currentPage;

				console.log(filterPost.limit * (currentPage - 1))

				filterPost.offset = filterPost.limit * (currentPage - 1);
				filterPost.category = cat;

				// Call function to load more posts
				loadMorePosts(postType, blockId, cat, perpage);
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

	function loadMorePosts(postType, blockId, cat, perpage) {
		filterPost.post_type = postType;
		filterPost.block_id = blockId;
		filterPost.category = cat;
		filterPost.limit = perpage;
		let formData = convertToAjaxParams(filterPost);

		fetch('/wp-json/wp/v2/frontis-blocks/post', {
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
				const postListElement = postGridElement.querySelector('.post-list');

				// Remove any existing Load More button to avoid duplication
				const existingLoadMore = postListElement.querySelector('.fb_load_more');
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
			})
			.catch(error => {
				console.error('Error fetching posts:', error);
			});
	}

	const postGridBlocks = document.querySelectorAll('.wp-block-frontis-blocks-post-grid');

	postGridBlocks.forEach(block => {
		loadMorePosts(block.getAttribute('data-post-type'), block.getAttribute('data-block-id'), block.getAttribute('data-cat'), block.getAttribute('data-perpage'));
	});
});
