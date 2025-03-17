<?php
add_filter('render_block', function($block_content, $block) {
    // Only apply to query loop blocks
    if ($block['blockName'] !== 'core/query') {
        return $block_content;
    }
    
    // Check if our attribute exists and is enabled
    $featured_image_switcher = $block['attrs']['featuredImageSwitcher'] ?? false;
    
    if ($featured_image_switcher) {
        // Add CSS to page
        add_action('wp_footer', function() {
            ?>
            <style>
                .wp-block-post {
                    position: relative !important;
                }
                
                .featured-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 99;
                    pointer-events: none;
                }
                
                .wp-block-post:hover .featured-image-overlay {
                    opacity: 0.3;
                }
            </style>
            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    // Find all post items with featured images
                    const postItems = document.querySelectorAll('.wp-block-post.has-post-thumbnail');
                    
                    postItems.forEach(function(item) {
                        // Get post ID from class
                        const classes = item.className.split(' ');
                        const postIdClass = classes.find(function(c) { 
                            return c.match(/^post-\d+$/); 
                        });
                        
                        if (postIdClass) {
                            const postId = postIdClass.replace('post-', '');
                            
                            // Create featured image overlay
                            fetch('/wp-json/wp/v2/posts/' + postId + '?_embed')
                                .then(response => response.json())
                                .then(post => {
                                    if (post._embedded && 
                                        post._embedded['wp:featuredmedia'] && 
                                        post._embedded['wp:featuredmedia'][0]) {
                                        
                                        const imgUrl = post._embedded['wp:featuredmedia'][0].source_url;
                                        
                                        // Create and add overlay
                                        const overlay = document.createElement('div');
                                        overlay.className = 'featured-image-overlay';
                                        overlay.style.backgroundImage = 'url(' + imgUrl + ')';
                                        item.appendChild(overlay);
                                    }
                                });
                        }
                    });
                });
            </script>
            <?php
        });
    }
    
    return $block_content;
}, 10, 2);