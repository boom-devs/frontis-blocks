<?php
/**
 * Render callback for the post-banner block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Block output.
 */

// Get post data
$post_id = get_the_ID();
$post_title = get_the_title();
$post_date = get_the_date('M j, Y');

// Get category
$categories = get_the_category();
$category_name = !empty($categories) ? esc_html($categories[0]->name) : 'Uncategorized';

// Get author info
$author_id = get_post_field('post_author', $post_id);
$author_name = get_the_author_meta('display_name', $author_id);
$author_avatar = get_avatar_url($author_id, array('size' => 28));

// Get featured image
$featured_image = '';
if (has_post_thumbnail()) {
    $featured_image = get_the_post_thumbnail_url(null, 'full');
}

// Block ID
$block_id = isset($attributes['blockID']) ? $attributes['blockID'] : '';
$wrapper_attributes = get_block_wrapper_attributes(array('class' => 'fb-post-banner-block'));
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="fb-post-banner-container" <?php if ($featured_image)
        echo 'style="background-image: url(' . esc_url($featured_image) . ');"'; ?>>
        <div class="fb-post-banner-overlay"></div>
        <div class="fb-post-banner-content">
            <div class='fb-post-category'>
                <span class='fb-post-category-name'><?php echo $category_name; ?></span>
            </div>
            <div class='fb-post-title'>
                <h1 class='fb-post-title-name'><?php echo $post_title; ?></h1>
            </div>
            <div class='fb-post-author'>
                <div class='fb-post-author-info'>
                    <img src="<?php echo $author_avatar; ?>" class="fb-post-author-avatar" />
                    <span class='fb-post-author-name'><?php echo $author_name; ?></span>
                </div>
                <div class="fb-post-author-seperator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#717680" />
                    </svg>
                </div>
                <div class='fb-post-author-meta'>
                    <span class='fb-post-date'><?php echo $post_date; ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.66536 7.10001H6.33203" stroke="black" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8 5.47333V8.80666" stroke="black" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M11.2148 1.33334H4.78818C3.36818 1.33334 2.21484 2.49334 2.21484 3.90668V13.3C2.21484 14.5 3.07484 15.0067 4.12818 14.4267L7.38151 12.62C7.72818 12.4267 8.28818 12.4267 8.62818 12.62L11.8815 14.4267C12.9348 15.0133 13.7948 14.5067 13.7948 13.3V3.90668C13.7882 2.49334 12.6348 1.33334 11.2148 1.33334Z"
                            stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>