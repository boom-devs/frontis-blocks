/**
 * Post Banner Block Interactive Features
 */
document.addEventListener('DOMContentLoaded', function () {

    // Bookmark functionality
    const bookmarkButtons = document.querySelectorAll('.fb-bookmark-btn');
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const postId = this.dataset.postId;
            const postTitle = this.dataset.postTitle;
            const postUrl = this.dataset.postUrl;

            // Try to bookmark the page
            if (window.external && window.external.AddFavorite) {
                // Internet Explorer
                window.external.AddFavorite(postUrl, postTitle);
            } else if (window.sidebar && window.sidebar.addPanel) {
                // Firefox
                window.sidebar.addPanel(postTitle, postUrl, '');
            } else {
                // Modern browsers - show instruction
                showBookmarkModal(postTitle, postUrl);
            }
        });
    });

    // Like/Unlike functionality
    const likeButtons = document.querySelectorAll('.fb-like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log(FrontisBlocksData)
            // Check if user is logged in
            if (!FrontisBlocksData.user_logged_in) {
                alert('Please log in to like posts.');
                return;
            }

            const postId = this.dataset.postId;
            const isLiked = this.dataset.liked === 'true';

            // Add loading state
            this.classList.add('loading');

            // AJAX request to handle like/unlike
            const formData = new FormData();
            formData.append('action', FrontisBlocksData.prefix + 'toggle_post_like');
            formData.append('post_id', postId);
            formData.append('nonce', FrontisBlocksData.nonce);

            fetch(FrontisBlocksData.ajax_url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Update UI
                        const heartIcon = this.querySelector('.fb-heart-icon');
                        const countSpan = this.querySelector('.fb-post-metric-count');

                        if (data.data.liked) {
                            heartIcon.classList.add('liked');
                            heartIcon.querySelector('path').setAttribute('fill', '#000000');
                            this.dataset.liked = 'true';
                        } else {
                            heartIcon.classList.remove('liked');
                            heartIcon.querySelector('path').setAttribute('fill', '#000000');
                            this.dataset.liked = 'false';
                        }

                        // Update count using the formatted count from server
                        countSpan.textContent = data.data.formatted_count;

                        // Add animation
                        heartIcon.classList.add('animate-like');
                        setTimeout(() => {
                            heartIcon.classList.remove('animate-like');
                        }, 300);
                    } else {
                        console.error('Error toggling like:', data.data);
                        alert('Failed to update like. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Network error. Please check your connection and try again.');
                })
                .finally(() => {
                    this.classList.remove('loading');
                });
        });
    });

    // Comments functionality
    const commentButtons = document.querySelectorAll('.fb-comments-btn');
    commentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postId = this.dataset.postId;

            // Scroll to comments section if it exists
            const commentsSection = document.getElementById('comments');
            if (commentsSection) {
                commentsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If no comments section, try to find WordPress comment form
                const commentForm = document.getElementById('respond');
                if (commentForm) {
                    commentForm.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Show comments modal or redirect to post with comments anchor
                    window.location.href = window.location.href + '#comments';
                }
            }
        });
    });

    // Helper function to show bookmark modal
    function showBookmarkModal(title, url) {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'fb-bookmark-modal';
        modal.innerHTML = `
            <div class="fb-modal-content">
                <div class="fb-modal-header">
                    <h6>Bookmark This Page</h6>
                    <button class="fb-modal-close">&times;</button>
                </div>
                <div class="fb-modal-body">
                    <p>To bookmark this page, press:</p>
                    <div class="fb-shortcut-keys">
                        <span class="fb-key">Ctrl</span> + <span class="fb-key">D</span>
                        <span class="fb-or">or</span>
                        <span class="fb-key">Cmd</span> + <span class="fb-key">D</span>
                    </div>
                    <p class="fb-url">${url}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeModal = () => {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        };

        modal.querySelector('.fb-modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    // Helper function to format metric counts
    function formatMetricCount(count) {
        const num = parseInt(count);

        if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(2) + 'k';
        } else {
            return num.toString();
        }
    }
});