<?php
/**
 * Server-side rendering for the Post Comment Form block
 */

// Element Visibility
$show_comment_title = isset($attributes['showCommentTitle']) ? (bool) $attributes['showCommentTitle'] : true;
$show_comments = isset($attributes['showComments']) ? (bool) $attributes['showComments'] : true;
$show_comment_form = isset($attributes['showCommentForm']) ? (bool) $attributes['showCommentForm'] : true;

// Style Attributes
$block_style = isset($attributes['blockStyle']) ? $attributes['blockStyle'] : '';

// Advanced Attributes
$wrapper_id = isset($attributes['wrapperId']) ? sanitize_text_field($attributes['wrapperId']) : '';
$wrapper_class = isset($attributes['wrapperClass']) ? sanitize_text_field($attributes['wrapperClass']) : '';
$block_id = isset($attributes['blockId']) ? sanitize_text_field($attributes['blockId']) : '';

// Responsive Control
$comment_form_desktop_switcher = isset($attributes['commentFormDesktopSwitcher']) ? (bool) $attributes['commentFormDesktopSwitcher'] : false;
$comment_form_tablet_switcher = isset($attributes['commentFormTabletSwitcher']) ? (bool) $attributes['commentFormTabletSwitcher'] : false;
$comment_form_mobile_switcher = isset($attributes['commentFormMobileSwitcher']) ? (bool) $attributes['commentFormMobileSwitcher'] : false;

// Get Responsive Classes
$responsive_classes = [];
if ($comment_form_desktop_switcher) {
    $responsive_classes[] = 'fb-desktop-responsive';
}
if ($comment_form_tablet_switcher) {
    $responsive_classes[] = 'fb-tablet-responsive';
}
if ($comment_form_mobile_switcher) {
    $responsive_classes[] = 'fb-mobile-responsive';
}

// Build main classes
$parent_classes = 'fb-post-comment-form-block ' . $block_id . ' ' . implode(' ', $responsive_classes);

// Build wrapper classes
$wrapper_classes = [
    'fb-post-comment-form',
    $wrapper_class,
];

// Prepare wrapper ID attribute
$wrapper_id_attr = $wrapper_id ? ' id="' . esc_attr($wrapper_id) . '"' : '';

// Get post data
$post_id = get_the_ID();
$comments_count = get_comments_number($post_id);

// Get current user
$current_user = wp_get_current_user();
$user_identity = $current_user->exists() ? $current_user->display_name : '';

// Avatar fallback
$avatar_fallback = FB_PLUGIN_URL . 'assets/images/avatar-placeholder.png';

/**
 * Recursive function to display comments with proper nested structure
 */
function frontis_display_comments_manual($comments, $post_id, $parent_id = 0, $depth = 1) {
    $output = '';
    
    foreach ($comments as $comment) {
        // Only show comments with the current parent ID
        if ($comment->comment_parent != $parent_id) {
            continue;
        }

        // Determine comment class based on depth
        $comment_class = $depth > 1 ? 'fb-comment fb-comment-child' : 'fb-comment fb-comment-parent';
        $comment_class .= ' depth-' . $depth;

        $comment_author = $comment->comment_author;
        $comment_date = get_comment_date('F j, Y \a\t g:i a', $comment->comment_ID);
        $comment_content = get_comment_text($comment->comment_ID);
        $comment_avatar = get_avatar($comment, 64);
        $edit_link = get_edit_comment_link($comment->comment_ID);

        ob_start();
        ?>
        
        <div id="comment-<?php echo $comment->comment_ID; ?>" class="<?php echo esc_attr($comment_class); ?>">
            <?php echo $comment_avatar; ?>
            <div class="fb-comment-body">
                <strong class="fb-comment-author"><?php echo esc_html($comment_author); ?></strong>
                <span class="fb-comment-meta">
                    <?php echo esc_html($comment_date); ?>
                    <?php if ($edit_link && current_user_can('edit_comment', $comment->comment_ID)) : ?>
                        <a href="<?php echo esc_url($edit_link); ?>">Edit</a>
                    <?php endif; ?>
                </span>
                <div class="fb-comment-content"><?php echo wp_kses_post($comment_content); ?></div>
                
                <div class="fb-comment-reply">
                    <?php 
                    // FIXED: Generate proper reply link with all required parameters
                    $reply_link = get_comment_reply_link(array(
                        'add_below' => 'comment',
                        'respond_id' => 'respond',
                        'reply_text' => __('Reply', 'frontis-blocks'),
                        'login_text' => __('Log in to Reply', 'frontis-blocks'),
                        'depth' => $depth,
                        'max_depth' => get_option('thread_comments_depth') ? get_option('thread_comments_depth') : 5,
                        'before' => '',
                        'after' => ''
                    ), $comment->comment_ID, $post_id);
                    
                    if ($reply_link) {
                        echo $reply_link;
                    } else {
                        // Fallback manual reply link
                        ?>
                        <a href="#respond" 
                           class="comment-reply-link" 
                           onclick="return addComment.moveForm('comment-<?php echo $comment->comment_ID; ?>', '<?php echo $comment->comment_ID; ?>', 'respond', '<?php echo $post_id; ?>')">
                            <?php _e('Reply', 'frontis-blocks'); ?>
                        </a>
                        <?php
                    }
                    ?>
                </div>

        <?php
        $output .= ob_get_clean();

        // Check for child comments
        $has_children = false;
        foreach ($comments as $child_comment) {
            if ($child_comment->comment_parent == $comment->comment_ID) {
                $has_children = true;
                break;
            }
        }

        // If has children, start children container and recursively display them
        if ($has_children) {
            ob_start();
            ?>
            <div class="fb-comment-children">
            <?php
            $output .= ob_get_clean();
            
            $output .= frontis_display_comments_manual($comments, $post_id, $comment->comment_ID, $depth + 1);
            
            ob_start();
            ?>
            </div><!-- .fb-comment-children -->
            <?php
            $output .= ob_get_clean();
        }

        // Close comment body and comment div
        ob_start();
        ?>
            </div><!-- .fb-comment-body -->
        </div><!-- .fb-comment -->
        <?php
        $output .= ob_get_clean();
    }
    
    return $output;
}

?>
<div class="<?php echo esc_attr($parent_classes); ?>">
    <?php if (!empty($block_style)) : ?>
        <style><?php echo wp_strip_all_tags($block_style); ?></style>
    <?php endif; ?>
    
    <div class="<?php echo esc_attr(implode(' ', array_filter($wrapper_classes))); ?>"<?php echo $wrapper_id_attr; ?>>
        
        <!-- Comment Count -->
        <?php if ($show_comment_title && $comments_count > 0) : ?>
            <h3 class="fb-comment-count-title">
                <?php 
                printf(
                    _n('%d Comment', '%d Comments', $comments_count, 'frontis-blocks'),
                    $comments_count
                );
                ?>
            </h3>
        <?php endif; ?>

        <!-- Comments List with Nested Structure -->
        <?php if ($show_comments) : ?>
            <div class="fb-comments-list">
                <?php
                // Get all approved comments for this post
                $comments = get_comments(array(
                    'post_id' => $post_id,
                    'status' => 'approve',
                    'order' => 'ASC'
                ));

                if (!empty($comments)) :
                    echo frontis_display_comments_manual($comments, $post_id);
                else : ?>
                    <p class="fb-no-comments"><?php _e('No comments yet.', 'frontis-blocks'); ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <!-- Comment Form -->
        <?php if ($show_comment_form) : ?>
            <div id="respond" class="fb-comment-form">
                <div class="fb-comment-form-header">
                    <strong class="fb-reply-title">
                        <?php 
                        if (get_option('thread_comments')) {
                            comment_form_title('Leave a Reply', 'Leave a Reply to %s');
                        } else {
                            _e('Leave a Reply', 'frontis-blocks');
                        }
                        ?>
                    </strong>
                    <!-- FIXED: Proper cancel reply link that works with WordPress -->
                    <?php if (get_option('thread_comments')) : ?>
                        <a href="#respond" id="cancel-comment-reply-link" class="fb-cancel-reply" style="display: none;" rel="nofollow"><?php _e('Cancel reply', 'frontis-blocks'); ?></a>
                    <?php endif; ?>
                </div>

                <?php if ($current_user->exists()) : ?>
                    <p class="fb-logged-in-as">
                        <?php
                        printf(
                            __('Logged in as %s. %s', 'frontis-blocks'),
                            '<strong>' . esc_html($user_identity) . '</strong>',
                            '<a href="' . wp_logout_url(apply_filters('the_permalink', get_permalink($post_id))) . '">' . __('Log Out?', 'frontis-blocks') . '</a>'
                        );
                        ?>
                    </p>
                <?php endif; ?>

                <?php
                // Get commenter data for form fields
                $commenter = wp_get_current_commenter();
                $req = get_option('require_name_email');
                $aria_req = ($req ? " aria-required='true'" : '');
                
                // Define form fields
                $fields = array(
                    'author' => '<p class="fb-comment-form-author">' .
                        '<input id="author" name="author" type="text" value="' . esc_attr($commenter['comment_author']) . '" size="30"' . $aria_req . ' placeholder="' . __('Name', 'frontis-blocks') . ($req ? ' *' : '') . '" /></p>',
                    'email' => '<p class="fb-comment-form-email">' .
                        '<input id="email" name="email" type="email" value="' . esc_attr($commenter['comment_author_email']) . '" size="30"' . $aria_req . ' placeholder="' . __('Email', 'frontis-blocks') . ($req ? ' *' : '') . '" /></p>',
                    'url' => '<p class="fb-comment-form-url">' .
                        '<input id="url" name="url" type="url" value="' . esc_attr($commenter['comment_author_url']) . '" size="30" placeholder="' . __('Website', 'frontis-blocks') . '" /></p>',
                );
                
                // Complete comment form arguments
                $comment_form_args = array(
                    'title_reply' => '',
                    'title_reply_to' => '',
                    'cancel_reply_before' => '',
                    'cancel_reply_after' => '',
                    'cancel_reply_link' => __('Cancel reply', 'frontis-blocks'),
                    'label_submit' => __('Post Comment', 'frontis-blocks'),
                    'comment_notes_before' => '',
                    'comment_notes_after' => '',
                    'comment_field' => '<p class="fb-comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" placeholder="' . __('Comment', 'frontis-blocks') . ' *"></textarea></p>',
                    'fields' => apply_filters('comment_form_default_fields', $fields),
                    'class_form' => 'fb-comment-form-element',
                    'class_submit' => 'fb-post-comment-btn',
                    'id_form' => 'commentform',
                    'id_submit' => 'submit',
                    'must_log_in' => '<p class="must-log-in">' . sprintf(
                        __('You must be <a href="%s">logged in</a> to post a comment.', 'frontis-blocks'),
                        wp_login_url(apply_filters('the_permalink', get_permalink($post_id)))
                    ) . '</p>',
                    'logged_in_as' => '', // We handle this separately above
                );
                
                // Display the comment form
                comment_form($comment_form_args, $post_id);
                ?>
            </div>
        <?php endif; ?>
        
    </div>
</div>