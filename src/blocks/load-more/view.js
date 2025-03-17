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
        
        // Get parent query container
        const parentQueryContainer = block.closest('.wp-block-query');
        
        if (!parentQueryContainer) {
          console.error('Parent query container not found');
          return;
        }
        
        const postsContainer = parentQueryContainer.querySelector('.wp-block-post-template');
        
        if (!postsContainer) {
          console.error('Posts container not found');
          return;
        }
        
        // Get data attributes from the block
        const loadMoreCount = parseInt(block.getAttribute('data-load-more-count'));
        
        // Get query ID from parent query container
        const queryId = parentQueryContainer.getAttribute('data-query-id') || '';
        
        // Add loading animation
        button.querySelector('svg').classList.add('animation');
        
        // Make AJAX request
        fetch(fbLoadMore.ajaxUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            action: 'load_more_query_posts',
            page: page,
            posts_per_page: loadMoreCount,
            query_id: queryId,
            nonce: fbLoadMore.nonce
          })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success && data.data.html) {
            // Append new content
            postsContainer.insertAdjacentHTML('beforeend', data.data.html);
            
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