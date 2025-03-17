document.addEventListener('DOMContentLoaded', function() {
    // Find all load more blocks
    const loadMoreBlocks = document.querySelectorAll('.fb-load-more-block');
    
    loadMoreBlocks.forEach(block => {
      const blockId = block.className.split(' ').find(cls => cls.startsWith('fb-load-more-')); 
      const loadMoreButton = block.querySelector(`#load-more-${blockId}`);
      
      if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function(e) {
          e.preventDefault();
          
          const button = this;
          const page = parseInt(button.getAttribute('data-page'));
          const blockId = button.getAttribute('data-block-id');
          const portfolioItems = document.querySelector(`#portfolio-items-${blockId}`);
          
          // Get data attributes from the block
          const postType = block.getAttribute('data-post-type');
          const loadMoreCount = parseInt(block.getAttribute('data-load-more-count'));
          const orderBy = block.getAttribute('data-order-by');
          const order = block.getAttribute('data-order');
          const showFeaturedImage = block.getAttribute('data-show-featured-image') === '1';
          const showTitle = block.getAttribute('data-show-title') === '1';
          const showContent = block.getAttribute('data-show-content') === '1';
          const showCategories = block.getAttribute('data-show-categories') === '1';
          const alternateLayout = block.getAttribute('data-alternate-layout') === '1';
          
          // Add loading animation
          button.querySelector('svg').classList.add('animation');
          
          // Make AJAX request
          fetch(fbLoadMore.ajaxUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              action: 'load_more_portfolios',
              page: page,
              post_type: postType,
              posts_per_page: loadMoreCount,
              order_by: orderBy,
              order: order,
              show_featured_image: showFeaturedImage ? 1 : 0,
              show_title: showTitle ? 1 : 0,
              show_content: showContent ? 1 : 0,
              show_categories: showCategories ? 1 : 0,
              alternate_layout: alternateLayout ? 1 : 0,
              block_id: blockId,
              nonce: fbLoadMore.nonce
            })
          })
          .then(response => response.json())
          .then(data => {
            if (data.success && data.data.html) {
              // Append new content
              portfolioItems.insertAdjacentHTML('beforeend', data.data.html);
              
              // Update page number
              button.setAttribute('data-page', page + 1);
              
              // Remove loading animation
              button.querySelector('svg').classList.remove('animation');
              
              // Hide button if no more posts
              if (!data.data.has_more) {
                button.closest('.load-more').style.display = 'none';
              }
            } else {
              // Hide button if no more posts
              button.closest('.load-more').style.display = 'none';
              button.querySelector('svg').classList.remove('animation');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            button.querySelector('svg').classList.remove('animation');
          });
        });
      }
    });
  });