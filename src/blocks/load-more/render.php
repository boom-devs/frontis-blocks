<?php
/**
 * Process the load more AJAX request
 */
function fb_load_more_query_posts() {
    // Verify nonce
    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'fb_load_more_nonce')) {
        wp_send_json_error(array('message' => 'Invalid nonce'));
        exit;
    }

    // Get params
    $page = isset($_POST['page']) ? intval($_POST['page']) : 1;
    $posts_per_page = isset($_POST['posts_per_page']) ? intval($_POST['posts_per_page']) : 6;
    $query_id = isset($_POST['query_id']) ? sanitize_text_field($_POST['query_id']) : '';

    // Get the stored query
    $query_args = array();
    
    if (!empty($query_id)) {
        // Try to get the stored query
        $stored_query = get_transient('wp_query_' . $query_id);
        
        if ($stored_query) {
            $query_args = $stored_query;
        }
    }
    
    // If no stored query, use default query
    if (empty($query_args)) {
        $query_args = array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => $posts_per_page,
            'paged' => $page,
        );
    } else {
        // Update pagination parameters
        $query_args['posts_per_page'] = $posts_per_page;
        $query_args['paged'] = $page;
    }

    // Run the query
    $query = new WP_Query($query_args);
    
    $response = array(
        'html' => '',
        'has_more' => false
    );
    
    // Build the HTML
    if ($query->have_posts()) {
        ob_start();
        
        while ($query->have_posts()) {
            $query->the_post();
            
            // Generate HTML for each post
            echo '<li class="wp-block-post">';
            
            // This will use the template parts defined in the Query Loop block
            // You can also customize this HTML to match your theme structure
            do_action('render_block_core/post-template', '', array(), '');
            
            echo '</li>';
        }
        
        $response['html'] = ob_get_clean();
        $response['has_more'] = ($query->max_num_pages > $page);
    }
    
    wp_reset_postdata();
    wp_send_json_success($response);
    exit;
}
add_action('wp_ajax_load_more_query_posts', 'fb_load_more_query_posts');
add_action('wp_ajax_nopriv_load_more_query_posts', 'fb_load_more_query_posts');

/**
 * Register the block
 */
function register_fb_load_more_block() {
    register_block_type(__DIR__ . '/build', array(
        'render_callback' => 'render_fb_load_more_block',
    ));
}
add_action('init', 'register_fb_load_more_block');

/**
 * Server-side rendering of the block
 */
function render_fb_load_more_block($attributes, $content) {
    // Enqueue necessary scripts
    wp_enqueue_script(
        'fb-load-more-script',
        plugins_url('build/index.js', __FILE__),
        array('jquery'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
        true
    );

    // Pass data to the script
    wp_localize_script('fb-load-more-script', 'fbLoadMore', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('fb_load_more_nonce')
    ));

    // Return the block content
    return $content;
}

/**
 * Add script to store the query ID from the Query Loop block
 * This script will run on the frontend to store the query information
 */
function fb_load_more_store_query_info() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const queryLoops = document.querySelectorAll('.wp-block-query');
        
        queryLoops.forEach(function(queryLoop) {
            const queryId = queryLoop.getAttribute('data-query-id');
            if (queryId) {
                // Store the query ID in the HTML for later use
                queryLoop.setAttribute('data-query-id', queryId);
            }
        });
    });
    </script>
    <?php
}
add_action('wp_footer', 'fb_load_more_store_query_info');