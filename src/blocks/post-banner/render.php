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
$category_link = !empty($categories) ? get_category_link($categories[0]->term_id) : '#';

// Get author info
$author_id = get_post_field('post_author', $post_id);
$author_name = get_the_author_meta('display_name', $author_id);
$author_avatar = get_avatar_url($author_id, array('size' => 28));
$author_archive_link = get_author_posts_url($author_id);

// Get featured image
$featured_image = '';
if (has_post_thumbnail()) {
    $featured_image = get_the_post_thumbnail_url(null, 'full');
}

// Get post metrics
$post_comments = get_comments_number($post_id);

// Block attributes with defaults
$category_switcher = isset($attributes['categorySwitcher']) ? $attributes['categorySwitcher'] : true;
$title_switcher = isset($attributes['titleSwitcher']) ? $attributes['titleSwitcher'] : true;
$post_meta_switcher = isset($attributes['postMetaSwitcher']) ? $attributes['postMetaSwitcher'] : true;

// Block ID
$block_id = isset($attributes['blockID']) ? $attributes['blockID'] : '';
$wrapper_attributes = get_block_wrapper_attributes(array('class' => 'fb-post-banner-block'));

// Utility function to format metric counts
function format_metric_count($count)
{
    $num = intval($count);

    if ($num >= 1000000) {
        $formatted = round($num / 1000000, 2);
        return $formatted . 'M';
    } elseif ($num >= 1000) {
        $formatted = round($num / 1000, 2);
        return $formatted . 'k';
    } else {
        return strval($num);
    }
}
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="fb-post-banner-container" <?php if ($featured_image)
        echo 'style="background-image: url(' . esc_url($featured_image) . ');"'; ?>>
        <div class="fb-post-banner-overlay"></div>
        <div class="fb-post-banner-content">

            <?php if ($category_switcher): ?>
                <div class='fb-post-category'>
                    <a href="<?php echo esc_url($category_link); ?>" class='fb-post-category-name'><?php echo $category_name; ?></a>
                </div>
            <?php endif; ?>

            <?php if ($title_switcher): ?>
                <div class='fb-post-title'>
                    <h1 class='fb-post-title-name'><?php echo $post_title; ?></h1>
                </div>
            <?php endif; ?>

            <?php if ($post_meta_switcher): ?>
                <div class='fb-post-banner-meta-wrapper'>
                    <div class='fb-post-author'>
                        <div class='fb-post-author-info'>
                            <span class="author-info">by <a href="<?php echo esc_url($author_archive_link); ?>" class='fb-post-author-name'><?php echo esc_html($author_name); ?></a></span>
                        </div>
                        <div class="fb-post-author-seperator">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#D5D7DA" />
                            </svg>
                        </div>
                        <div class='fb-post-author-meta'>
                            <span class='fb-post-date'><?php echo esc_html($post_date); ?></span>
                            <button class="fb-bookmark-btn" data-post-id="<?php echo $post_id; ?>" data-post-title="<?php echo esc_attr($post_title); ?>" data-post-url="<?php echo esc_url(get_permalink($post_id)); ?>" title="Bookmark this post">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.66634 7.10004H6.33301" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 5.47333V8.80666" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.2139 1.33331H4.7872C3.3672 1.33331 2.21387 2.49331 2.21387 3.90665V13.3C2.21387 14.5 3.07387 15.0066 4.1272 14.4266L7.38053 12.62C7.7272 12.4266 8.2872 12.4266 8.6272 12.62L11.8805 14.4266C12.9339 15.0133 13.7939 14.5066 13.7939 13.3V3.90665C13.7872 2.49331 12.6339 1.33331 11.2139 1.33331Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Post Metrics Section -->
                    <div class='fb-post-overview-meta'>
                        <div class='fb-post-metrics'>
                            <!-- Comments Metric -->
                            <div class='fb-post-metric-item fb-comments-btn' data-post-id="<?php echo $post_id; ?>">
                                <svg class='fb-post-metric-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M11.3335 1.33331H4.66683C2.82683 1.33331 1.3335 2.81998 1.3335 4.65331V8.63998V9.30665C1.3335 11.14 2.82683 12.6266 4.66683 12.6266H5.66683C5.84683 12.6266 6.08683 12.7466 6.20016 12.8933L7.20016 14.22C7.64016 14.8066 8.36016 14.8066 8.80016 14.22L9.80016 12.8933C9.92683 12.7266 10.1268 12.6266 10.3335 12.6266H11.3335C13.1735 12.6266 14.6668 11.14 14.6668 9.30665V4.65331C14.6668 2.81998 13.1735 1.33331 11.3335 1.33331ZM8.66683 9.16665H4.66683C4.3935 9.16665 4.16683 8.93998 4.16683 8.66665C4.16683 8.39331 4.3935 8.16665 4.66683 8.16665H8.66683C8.94016 8.16665 9.16683 8.39331 9.16683 8.66665C9.16683 8.93998 8.94016 9.16665 8.66683 9.16665ZM11.3335 5.83331H4.66683C4.3935 5.83331 4.16683 5.60665 4.16683 5.33331C4.16683 5.05998 4.3935 4.83331 4.66683 4.83331H11.3335C11.6068 4.83331 11.8335 5.05998 11.8335 5.33331C11.8335 5.60665 11.6068 5.83331 11.3335 5.83331Z"
                                        fill="black" />
                                </svg>
                                <span class='fb-post-metric-count'><?php echo format_metric_count($post_comments); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

        </div>
    </div>
</div>