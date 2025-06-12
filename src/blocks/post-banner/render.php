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
$post_views = get_post_meta($post_id, 'post_views_count', true) ?: 0;
$post_likes = get_post_meta($post_id, 'post_likes_count', true) ?: 0;
$post_comments = get_comments_number($post_id);

// Check if current user has liked this post
$user_has_liked = false;
if (is_user_logged_in()) {
    $user_id = get_current_user_id();
    $user_likes = get_user_meta($user_id, 'liked_posts', true) ?: array();
    $user_has_liked = in_array($post_id, $user_likes);
}

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
                            <!-- Views Metric -->
                            <div class='fb-post-metric-item'>
                                <svg class='fb-post-metric-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M14.1668 6.10002C12.6268 3.68001 10.3735 2.28668 8.00016 2.28668C6.8135 2.28668 5.66016 2.63335 4.60683 3.28002C3.5535 3.93335 2.60683 4.88668 1.8335 6.10002C1.16683 7.14668 1.16683 8.84668 1.8335 9.89335C3.3735 12.32 5.62683 13.7067 8.00016 13.7067C9.18683 13.7067 10.3402 13.36 11.3935 12.7133C12.4468 12.06 13.3935 11.1067 14.1668 9.89335C14.8335 8.85335 14.8335 7.14668 14.1668 6.10002ZM8.00016 10.6933C6.50683 10.6933 5.30683 9.48668 5.30683 8.00002C5.30683 6.51335 6.50683 5.30668 8.00016 5.30668C9.4935 5.30668 10.6935 6.51335 10.6935 8.00002C10.6935 9.48668 9.4935 10.6933 8.00016 10.6933Z"
                                        fill="black" />
                                    <path
                                        d="M8.0001 6.09332C6.95343 6.09332 6.1001 6.94666 6.1001 7.99999C6.1001 9.04666 6.95343 9.89999 8.0001 9.89999C9.04676 9.89999 9.90676 9.04666 9.90676 7.99999C9.90676 6.95332 9.04676 6.09332 8.0001 6.09332Z"
                                        fill="black" />
                                </svg>
                                <span class='fb-post-metric-count'><?php echo format_metric_count($post_views); ?></span>
                            </div>

                            <!-- Reactions Metric -->
                            <div class='fb-post-metric-item fb-like-btn' data-post-id="<?php echo $post_id; ?>" data-liked="<?php echo $user_has_liked ? 'true' : 'false'; ?>">
                                <svg class='fb-post-metric-icon fb-heart-icon <?php echo $user_has_liked ? 'liked' : ''; ?>' xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M10.9602 2.06665C9.7535 2.06665 8.6735 2.65332 8.00016 3.55332C7.32683 2.65332 6.24683 2.06665 5.04016 2.06665C2.9935 2.06665 1.3335 3.73332 1.3335 5.79332C1.3335 6.58665 1.46016 7.31998 1.68016 7.99998C2.7335 11.3333 5.98016 13.3266 7.58683 13.8733C7.8135 13.9533 8.18683 13.9533 8.4135 13.8733C10.0202 13.3266 13.2668 11.3333 14.3202 7.99998C14.5402 7.31998 14.6668 6.58665 14.6668 5.79332C14.6668 3.73332 13.0068 2.06665 10.9602 2.06665Z"
                                        fill="<?php echo $user_has_liked ? '#000000' : '#000000'; ?>" />
                                </svg>
                                <span class='fb-post-metric-count'><?php echo format_metric_count($post_likes); ?></span>
                            </div>

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