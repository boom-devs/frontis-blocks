<?php
/**
 * Server-side rendering for the Post Comment Form block
 */

if (!defined('ABSPATH')) {
	exit;
}

if ( ! function_exists( 'fb_norm_str' ) ) {
    function fb_norm_str( $val, $default = '' ) {
        if ( is_array( $val ) ) {
            $val = implode( ' ', array_filter( array_map( 'strval', $val ) ) );
        }
        if ( $val === null ) return $default;
        return (string) $val;
    }
}

// Element Visibility
$show_comment_title  = isset($attributes['showCommentTitle']) ? (bool) $attributes['showCommentTitle'] : true;
$show_comments_count = isset($attributes['showCommentsCount']) ? (bool) $attributes['showCommentsCount'] : true;

// $show_comments = isset($attributes['showComments']) ? (bool) $attributes['showComments'] : true;
$show_comment_form = isset($attributes['showCommentForm']) ? (bool) $attributes['showCommentForm'] : true;

$form_title        = isset($attributes['formTitle']) ? sanitize_text_field($attributes['formTitle']) : '';
$cancel_reply_text = isset($attributes['cancelReplyText']) ? sanitize_text_field($attributes['cancelReplyText']) : '';
$login_text        = isset($attributes['loginText']) ? sanitize_text_field($attributes['loginText']) : '';
$logout_text       = isset($attributes['logoutText']) ? sanitize_text_field($attributes['logoutText']) : '';
$button_text       = isset($attributes['buttonText']) ? sanitize_text_field($attributes['buttonText']) : '';

// Style Attributes
$block_style = isset($attributes['blockStyle']) ? $attributes['blockStyle'] : '';

// Advanced Attributes
$wrapper_id    = isset($attributes['wrapperId']) ? sanitize_text_field($attributes['wrapperId']) : '';
$wrapper_class = isset($attributes['wrapperClass']) ? sanitize_text_field($attributes['wrapperClass']) : '';
$block_id      = isset($attributes['blockId']) ? sanitize_text_field($attributes['blockId']) : '';

// Responsive Control
$comment_form_desktop_switcher = isset($attributes['commentFormDesktopSwitcher']) ? (bool) $attributes['commentFormDesktopSwitcher'] : false;
$comment_form_tablet_switcher  = isset($attributes['commentFormTabletSwitcher']) ? (bool) $attributes['commentFormTabletSwitcher'] : false;
$comment_form_mobile_switcher  = isset($attributes['commentFormMobileSwitcher']) ? (bool) $attributes['commentFormMobileSwitcher'] : false;

// Get Responsive Classes
$responsive_classes = [];
if ($comment_form_desktop_switcher) $responsive_classes[] = 'fb-desktop-responsive';
if ($comment_form_tablet_switcher)  $responsive_classes[] = 'fb-tablet-responsive';
if ($comment_form_mobile_switcher)  $responsive_classes[] = 'fb-mobile-responsive';

// Build main classes (old string version — রেখে দিলাম)
$parent_classes = 'fb-post-comment-form-block ' . $block_id . ' ' . implode(' ', $responsive_classes);

// NEW: get_block_wrapper_attributes এর জন্য array build
$parent_classes_arr = array_merge(
    ['fb-post-comment-form-block', $block_id],
    $responsive_classes
);

$comment_form_wrapper_classes_arr = array_filter(array_map(
    function($c) { return sanitize_html_class(fb_norm_str($c)); },
    $parent_classes_arr
));

$comment_form_wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $comment_form_wrapper_classes_arr),
]);

// Build wrapper classes
$wrapper_classes  = ['fb-post-comment-form', $wrapper_class];
$wrapper_id_attr  = $wrapper_id ? ' id="' . esc_attr($wrapper_id) . '"' : '';

// Get post data
$post_id        = get_the_ID();
$comments_count = get_comments_number($post_id);

/* ----- Helper: logout URL ------------------------------------------ */
$logout_url = wp_logout_url( apply_filters( 'the_permalink', get_permalink( $post_id ) ) );

// Get current user
$current_user  = wp_get_current_user();
$user_identity = $current_user->exists() ? $current_user->display_name : '';
$profile_url   = $current_user->exists() ? get_edit_profile_url( $current_user->ID ) : '#';


// Avatar fallback
// $avatar_fallback = FB_PLUGIN_URL . 'assets/images/avatar-placeholder.png';

/**
 * Improved detection for user's own pending comment
 */
if (!function_exists('frontis_is_user_comment')) {
    function frontis_is_user_comment($comment) {
        $current_user       = wp_get_current_user();
        $current_user_email = $current_user->exists() ? $current_user->user_email : '';
        $commenter          = wp_get_current_commenter();
        $cookie_email       = isset($commenter['comment_author_email']) ? $commenter['comment_author_email'] : '';

        // Logged-in user matches comment author email
        if ($current_user_email && strcasecmp($comment->comment_author_email, $current_user_email) === 0) {
            return true;
        }

        // Cookie matches for guest users
        if ($cookie_email && strcasecmp($comment->comment_author_email, $cookie_email) === 0) {
            return true;
        }

        // Also check URL parameters from unapproved redirect
        if (isset($_GET['unapproved']) && (int)$_GET['unapproved'] === (int)$comment->comment_ID) {
            return true;
        }

        return false;
    }
}

/**
 * Get comments to display (approved + user's own pending comments)
 */
if ( ! function_exists( 'frontis_get_comments_to_display' ) ) {
    function frontis_get_comments_to_display($post_id) {
        $approved_comments = get_comments([
            'post_id' => $post_id,
            'status'  => 'approve',
            'order'   => 'ASC',
        ]);

        $pending_comments = get_comments([
            'post_id' => $post_id,
            'status'  => 'hold',
            'order'   => 'ASC',
        ]);

        $user_pending_comments = [];
        foreach ($pending_comments as $comment) {
            if (frontis_is_user_comment($comment)) {
                $user_pending_comments[] = $comment;
            }
        }

        $all_comments = array_merge($approved_comments, $user_pending_comments);

        usort($all_comments, function ($a, $b) {
            return strtotime($a->comment_date) - strtotime($b->comment_date);
        });

        return $all_comments;
    }
}

/**
 * Recursive function to display comments with proper nested structure
 */
if ( ! function_exists( 'frontis_display_comments_manual' ) ) {
    function frontis_display_comments_manual($comments, $post_id, $parent_id = 0, $depth = 1) {
        $output = '';

        foreach ($comments as $comment) {
            if ($comment->comment_parent != $parent_id) continue;

            $is_pending     = ($comment->comment_approved == '0');
            $is_own_pending = $is_pending && frontis_is_user_comment($comment); // ✅ FIX

            // Only show approved or user's own pending comments
            if (!$is_pending || $is_own_pending) {
                $comment_class = $depth > 1 ? 'fb-comment fb-comment-child' : 'fb-comment fb-comment-parent';
                $comment_class .= ' depth-' . $depth;
                if ($is_pending) $comment_class .= ' fb-comment-pending';

                $comment_author  = $comment->comment_author;
                $comment_date    = get_comment_date('F j, Y \a\t g:i a', $comment->comment_ID);
                $comment_content = get_comment_text($comment->comment_ID);
                // $comment_avatar = get_avatar($comment, 64);
                $comment_avatar  = get_avatar(
                    $comment,
                    64,
                    '',
                    '',
                    array('class' => 'fb-comment-avatar')
                );

                $edit_link = get_edit_comment_link($comment->comment_ID);

                ob_start();
                ?>
                <div id="comment-<?php echo $comment->comment_ID; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" class="<?php echo esc_attr($comment_class); ?>">
                    
                    <?php echo $comment_avatar; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    <div class="fb-comment-body">
                        <strong class="fb-comment-author"><?php echo esc_html($comment_author); ?></strong>
                        <span class="fb-comment-meta">
                            <?php echo esc_html($comment_date); ?>
                            <?php if ($edit_link && current_user_can('edit_comment', $comment->comment_ID)) : ?>
                                <a href="<?php echo esc_url($edit_link); ?>">Edit</a>
                            <?php endif; ?>
                        </span>

                        <?php if ($is_own_pending) : //show only for user's own ?>
                            <div class="fb-comment-moderation-notice">
                                								<em><?php _e('Your comment is awaiting moderation. This is a preview; your comment will be visible after it has been approved.', 'frontis-blocks'); // phpcs:ignore WordPress.Security.EscapeOutput.UnsafePrintingFunction ?></em>
                            </div>
                        <?php endif; ?>

                        <div class="fb-comment-content"><?php echo wp_kses_post($comment_content); ?></div>

                        <?php if (!$is_pending) : ?>
                            <div class="fb-comment-reply">
                                <?php
                                $reply_link = get_comment_reply_link([
                                    'add_below'  => 'comment',
                                    'respond_id' => 'respond',
                                    'reply_text' => __('Reply', 'frontis-blocks'),
                                    'login_text' => __('Log in to Reply', 'frontis-blocks'),
                                    'depth'      => $depth,
                                    'max_depth'  => get_option('thread_comments_depth') ?: 5,
                                    'before'     => '',
                                    'after'      => '',
                                ], $comment->comment_ID, $post_id);

                                if ($reply_link) {
                                    echo $reply_link; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                                } else {
                                    ?>
                                    <a href="#respond"
                                       class="comment-reply-link"
                                       onclick="return addComment.moveForm('comment-<?php echo $comment->comment_ID; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>', '<?php echo $comment->comment_ID; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>', 'respond', '<?php echo $post_id; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>')">
                                        <?php _e('Reply', 'frontis-blocks'); // phpcs:ignore WordPress.Security.EscapeOutput.UnsafePrintingFunction ?>
                                    </a>
                                    <?php
                                }
                                ?>
                            </div>
                        <?php endif; ?>
                <?php
                $output .= ob_get_clean();

                // Children
                $child_comments = array_filter($comments, fn($c) => $c->comment_parent == $comment->comment_ID);
                if (!empty($child_comments)) {
                    $output .= '<div class="fb-comment-children">';
                    $output .= frontis_display_comments_manual($comments, $post_id, $comment->comment_ID, $depth + 1);
                    $output .= '</div>';
                }

                $output .= '</div><!-- .fb-comment-body --></div><!-- .fb-comment -->';
            }
        }
        return $output;
    }
}
?>
<div <?php echo $comment_form_wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

    		<div class="<?php echo esc_attr(implode(' ', array_filter($wrapper_classes))); ?>"<?php echo $wrapper_id_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

        <!-- Comment Count -->
        <!-- <?php if ($show_comment_title && $comments_count > 0) : ?>
            <h3 class="fb-comment-count-title">
                <?php /* translators: %d: number of comments */ printf(_n('%d Comment', '%d Comments', $comments_count, 'frontis-blocks'), $comments_count); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </h3>
        <?php endif; ?> -->

        <!-- Comment Count -->
        <?php if ($show_comment_title && $comments_count > 0) : ?>
            <h3 class="fb-comment-count-title">
                <?php if ($show_comments_count) : ?>
                    <span><?php echo esc_html($comments_count); ?></span>
                <?php endif; ?>
                <?php /* translators: %d: number of comments */ printf(_n('Comment', 'Comments', $comments_count, 'frontis-blocks')); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </h3>
        <?php endif; ?>

        <!-- Comments List -->
        <!-- <?php if ($show_comments_count) : ?><?php endif; ?> -->

        <div class="fb-comments-list">
            <?php
            $comments = frontis_get_comments_to_display($post_id);
            if (!empty($comments)) :
                echo frontis_display_comments_manual($comments, $post_id); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            else :
                ?><p class="fb-no-comments"><?php _e('No comments yet.', 'frontis-blocks'); // phpcs:ignore WordPress.Security.EscapeOutput.UnsafePrintingFunction ?></p><?php
            endif;
            ?>
        </div>

        <!-- Manual Comment Form -->
        <?php if ($show_comment_form) : ?>
            <?php
            $commenter = wp_get_current_commenter();
            $req       = get_option('require_name_email');
            $aria_req  = $req ? " aria-required='true'" : '';
            $html5     = current_theme_supports('html5', 'comment-form');
            $consent   = empty($commenter['comment_author_email']) ? '' : ' checked="checked"';
            ?>
            
            <div id="respond" class="fb-comment-form">
                <div class="fb-comment-form-header">
                    <strong class="fb-reply-title">
                        <?php echo esc_html($form_title ?: __('Leave a Reply', 'frontis-blocks')); ?>
                    </strong>
                    <?php if (get_option('thread_comments')) : ?>
                        <a href="#respond" id="cancel-comment-reply-link" class="fb-cancel-reply" style="display: none;" rel="nofollow">
                            <?php echo esc_html($cancel_reply_text ?: __('Cancel reply', 'frontis-blocks')); ?>
                        </a>
                    <?php endif; ?>
                </div>

                <?php if ($current_user->exists()) : ?>
                    <p class="fb-logged-in-as">
                        <?php
                            printf(
                                __( '%1$s <a href="%2$s">%3$s</a>. %4$s', 'frontis-blocks' ), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                                esc_html( $login_text ?: __( 'Logged in as', 'frontis-blocks' ) ), // phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
                                esc_url( $profile_url ),
                                esc_html( $user_identity ),
                                '<a href="' . esc_url( $logout_url ) . '">' .
                                esc_html( $logout_text ?: __( 'Log out?', 'frontis-blocks' ) ) .
                                '</a>'
                            );
                        ?>
                    </p>
                <?php else : ?>
                    <p class="fb-logged-in-as">
                        Your email address will not be published. Required fields are marked *
                    </p>
                <?php endif; ?>

                <form action="<?php echo esc_url(site_url('/wp-comments-post.php')); ?>" method="post" class="fb-comment-form-element" id="fb_commentform">
                    
                    <?php if (!$current_user->exists()) : ?>
                        <!-- Name Field -->
                        <div class="fb-comment-form-author">
                            <input 
                                id="author" 
                                name="author" 
                                type="text" 
                                value="<?php echo esc_attr($commenter['comment_author']); ?>" 
                                size="30" 
                                <?php echo $aria_req; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                                placeholder="<?php echo esc_attr(__('Name', 'frontis-blocks') . ($req ? ' *' : '')); ?>" 
                            />
                        </div>
                        
                        <!-- Email Field -->
                        <div class="fb-comment-form-email">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                value="<?php echo esc_attr($commenter['comment_author_email']); ?>" 
                                size="30" 
                                <?php echo $aria_req; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                                placeholder="<?php echo esc_attr(__('Email', 'frontis-blocks') . ($req ? ' *' : '')); ?>" 
                            />
                        </div>
                        
                        <!-- Website Field -->
                        <div class="fb-comment-form-url">
                            <input 
                                id="url" 
                                name="url" 
                                type="url" 
                                value="<?php echo esc_attr($commenter['comment_author_url']); ?>" 
                                size="30" 
                                placeholder="<?php echo esc_attr(__('Website', 'frontis-blocks')); ?>" 
                            />
                        </div>
                        
                        <!-- Cookies Consent -->
                        <?php if (has_action('set_comment_cookies', 'wp_set_comment_cookies') && get_option('show_comments_cookies_opt_in')) : ?>
                        <div class="comment-form-cookies-consent">
                            <input 
                                id="wp-comment-cookies-consent" 
                                name="wp-comment-cookies-consent" 
                                type="checkbox" 
                                value="yes" 
                                <?php echo $consent; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> 
                            />
                            <label for="wp-comment-cookies-consent">
                                <?php _e('Save my name, email, and website in this browser for the next time I comment.', 'frontis-blocks'); // phpcs:ignore WordPress.Security.EscapeOutput.UnsafePrintingFunction ?>
                            </label>
                        </div>
                        <?php endif; ?>
                    <?php endif; ?>

                    <!-- Comment Field -->
                    <div class="fb-comment-form-comment">
                        <textarea 
                            id="comment" 
                            class="fb-comment-textarea"
                            name="comment" 
                            cols="45" 
                            rows="8" 
                            aria-required="true"
                            placeholder="<?php esc_attr_e('Comment *', 'frontis-blocks'); ?>"
                        ></textarea>
                    </div>

                    <!-- Hidden Fields Required by WordPress -->
                    <input type="hidden" name="comment_post_ID" value="<?php echo esc_attr($post_id); ?>" id="comment_post_ID" />
                    <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                    
                    <!-- WordPress Security Nonce - CRITICAL -->
                    <?php wp_nonce_field('comment_form', '_wp_unfiltered_html_comment'); ?>
                    
                    <!-- WordPress Comment Form Action - CRITICAL -->
                    <?php do_action('comment_form', $post_id); ?>

                    <!-- Submit Button -->
                    <div class="form-submit">
                        <button 
                            name="submit" 
                            type="submit" 
                            id="submit" 
                            class="fb-post-comment-btn" 
                        >
                            <?php echo esc_attr($button_text ?: __('Post Comment', 'frontis-blocks')); ?>
                        </button>
                    </div>
                </form>
            </div>
        <?php endif; ?>

    </div>
</div>