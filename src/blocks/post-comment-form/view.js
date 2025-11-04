(function () {
    "use strict";

    function initPostCommentFormBlocks() {
        const blocks = document.querySelectorAll(".fb-post-comment-form-block");
        
        blocks.forEach((block) => {
            if (block.hasAttribute("data-initialized")) return;
            block.setAttribute("data-initialized", "true");
            
            // Enhanced reply functionality
            const replyLinks = block.querySelectorAll('.comment-reply-link');
            const cancelReply = block.querySelector('.fb-cancel-reply');
            const commentForm = block.querySelector('.fb-comment-form');
            const commentTextarea = block.querySelector('#comment');
            const replyTitle = block.querySelector('.fb-reply-title');
            const commentParent = block.querySelector('#comment_parent');
            
            // ADDED: Store the original custom form title
            let originalFormTitle = '';
            if (replyTitle) {
                // Store the current title as original (could be custom or default)
                originalFormTitle = replyTitle.textContent.trim();
                // Also store it as data attribute for persistence
                replyTitle.setAttribute('data-original-title', originalFormTitle);
            }
            
            // If WordPress comment script is available, use it
            if (typeof addComment !== 'undefined') {
                console.log('WordPress comment script loaded');
            } else {
                console.log('Using custom reply functionality');
            }
            
            // Add click handlers to all reply links
            replyLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get comment ID from the link attributes or parent element
                    let commentId = this.getAttribute('data-commentid');
                    if (!commentId) {
                        // Extract comment ID from href or parent element ID
                        const href = this.getAttribute('href');
                        if (href && href.includes('comment-')) {
                            commentId = href.split('comment-')[1];
                        } else {
                            const commentElement = this.closest('.fb-comment');
                            if (commentElement && commentElement.id) {
                                commentId = commentElement.id.replace('comment-', '');
                            }
                        }
                    }
                    
                    if (!commentId) {
                        console.log('Could not find comment ID');
                        return;
                    }
                    
                    console.log('Replying to comment:', commentId);
                    
                    // Show cancel reply link
                    if (cancelReply) {
                        cancelReply.style.display = 'inline';
                    }
                    
                    // UPDATE: Enhanced form title handling with custom text support
                    if (replyTitle) {
                        const commentAuthor = this.closest('.fb-comment').querySelector('.fb-comment-author');
                        // Get the original title (custom or default)
                        const originalTitle = replyTitle.getAttribute('data-original-title') || originalFormTitle || 'Leave a Reply';
                        
                        if (commentAuthor) {
                            // Use the custom form title + " to [author]" format
                            replyTitle.textContent = originalTitle + ' to ' + commentAuthor.textContent;
                        } else {
                            // Fallback to original title
                            replyTitle.textContent = originalTitle;
                        }
                    }
                    
                    // Set comment parent
                    if (commentParent) {
                        commentParent.value = commentId;
                        console.log('Set comment_parent to:', commentId);
                    }
                    
                    // Scroll to comment form
                    if (commentForm) {
                        commentForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    
                    // Focus comment textarea
                    if (commentTextarea) {
                        setTimeout(() => {
                            commentTextarea.focus();
                        }, 300);
                    }
                });
            });
            
            // Handle cancel reply
            if (cancelReply) {
                cancelReply.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Cancel reply clicked');
                    
                    this.style.display = 'none';
                    
                    // UPDATE: Reset to original custom form title
                    if (replyTitle) {
                        const originalTitle = replyTitle.getAttribute('data-original-title') || originalFormTitle || 'Leave a Reply';
                        replyTitle.textContent = originalTitle;
                    }
                    
                    // Reset comment parent
                    if (commentParent) {
                        commentParent.value = '0';
                        console.log('Reset comment_parent to 0');
                    }
                });
            }
            
            // Also handle the default WordPress cancel link if it exists
            const wpCancelReply = block.querySelector('#cancel-comment-reply-link');
            if (wpCancelReply && cancelReply) {
                wpCancelReply.style.display = 'none'; // Hide default WordPress cancel
                
                // Sync our cancel button with WordPress's
                wpCancelReply.addEventListener('click', function() {
                    cancelReply.style.display = 'none';
                    // UPDATE: Also reset form title when WordPress cancel is clicked
                    if (replyTitle) {
                        const originalTitle = replyTitle.getAttribute('data-original-title') || originalFormTitle || 'Leave a Reply';
                        replyTitle.textContent = originalTitle;
                    }
                });
            }
            
            // Reset form when submitting a new comment (not a reply)
            const commentFormElement = block.querySelector('.fb-comment-form-element');
            if (commentFormElement) {
                commentFormElement.addEventListener('submit', function() {
                    // Small delay to ensure the form is actually submitted
                    setTimeout(() => {
                        if (cancelReply) {
                            cancelReply.style.display = 'none';
                        }
                        // UPDATE: Reset to original custom form title
                        if (replyTitle) {
                            const originalTitle = replyTitle.getAttribute('data-original-title') || originalFormTitle || 'Leave a Reply';
                            replyTitle.textContent = originalTitle;
                        }
                        if (commentParent) {
                            commentParent.value = '0';
                        }
                    }, 100);
                });
            }

            // ADDED: Handle page refresh/reload to maintain custom title
            window.addEventListener('beforeunload', function() {
                // Ensure custom title is preserved if needed
                if (replyTitle && originalFormTitle) {
                    replyTitle.setAttribute('data-original-title', originalFormTitle);
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPostCommentFormBlocks);
    } else {
        initPostCommentFormBlocks();
    }

    // Reinitialize when new comments are added (for AJAX support)
    window.reinitPostCommentFormBlocks = initPostCommentFormBlocks;
    
    // Also initialize when WordPress comment script loads
    let wpCheckInterval = setInterval(() => {
        if (typeof addComment !== 'undefined') {
            clearInterval(wpCheckInterval);
            initPostCommentFormBlocks();
        }
    }, 100);

})(jQuery);