<?php

namespace FrontisBlocks\Admin;
use FrontisBlocks\Admin\Settings;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        add_action( 'plugin_action_links', [ $this, 'fb_menu_action_links' ], 10, 2 );

        // add_action( 'wp_ajax_fb_save_settings', array( $this, 'save_settings' ) );

        // add_action( 'wp_ajax_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );
        // add_action( 'wp_ajax_nopriv_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );

        // Add the new REST API endpoint
        add_action('rest_api_init', [$this, 'register_rest_routes']);

        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
    }


    public function add_menu_page(){
        add_menu_page(
            __('Frontis Blocks', 'frontis-blocks'),
            __('Frontis Blocks', 'frontis-blocks'),
            'manage_options',
            'frontis-blocks',
            array( $this, 'display_page' ),
            'dashicons-admin-generic',
            30
        );
    }

    public function display_page(){
        echo "<div id='frontis-blocks-admin'></div>";
    }

    public function enqueue_styles($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }

        wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.css', array(), '1.0.0');


    }

    public function enqueue_scripts($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }
        wp_enqueue_script('jquery');
        $script_path = FB_PLUGIN_PATH . 'assets/admin/index.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        //push jquery in $script_asset['dependencies']
        $script_asset['dependencies'][] = 'jquery';

        // error_log(print_r($script_asset['dependencies'], true));

        wp_enqueue_script('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.js', $script_asset['dependencies'], '1.0.0', true);

        // Get the blocks list
        $blocks = BlockList::get_instance()->get_blocks();

        // Localize the script with new data
        wp_localize_script('frontis-blocks-admin', 'frontisBlocksAdmin', array(
            'blocks' => $blocks,
            'defaultBlocks' => BlockList::get_instance()->get_default_blocks(),
            'nonce' => wp_create_nonce('fb_settings_nonce'),
            'adminUrl' => admin_url(),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'restUrl' => get_rest_url(),
            'pluginUrl' => FB_PLUGIN_URL,
            'version' => FB_VERSION,
            'pro_url' => FB_UPGRADE_PRO_URL,
            'isProActive' => FB_IS_PRO_ACTIVE ? 'true' : 'false',
            'logo' => FB_PLUGIN_URL . 'assets/images/logo.svg',
        ));
    }

        /**
         * Menu Action Links
         *
         * @since 1.0.0
         */
        public function fb_menu_action_links( $links, $file )
        {
            if ( $file === FB_PLUGIN_BASENAME ) {
                $settings_links = sprintf(
                    '<a href="%1$s">Settings</a>',
                    admin_url( 'admin.php?page=frontis-blocks' )
                );
                array_unshift( $links, $settings_links );

                if ( ! class_exists( 'FrontisBlocks\Pro\Plugin' ) ) {
                    $go_pro_link = sprintf(
                        '<a target="_blank" href="%1$s"><strong style="color:#5e2eff;display: inline-block;">Go Pro</strong></a>',
                        FB_UPGRADE_PRO_URL
                    );
                    array_push( $links, $go_pro_link );
                }
            }

            return $links;
        }

    /**
     * Save settings via AJAX
     *
     * @since 1.0.0
     */
    public function save_settings() {
        // Check for nonce security
        if ( ! check_ajax_referer( 'fb_save_settings', 'nonce', false ) ) {
            wp_send_json_error( 'Invalid nonce' );
        }

        // Check user capabilities
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_send_json_error( 'You don\'t have permission to perform this action' );
        }

        $key = isset( $_POST['key'] ) ? sanitize_text_field( $_POST['key'] ) : '';
        $value = isset( $_POST['value'] ) ? sanitize_text_field( $_POST['value'] ) : '';

        if ( empty( $key ) ) {
            wp_send_json_error( 'Key is required' );
        }

        $result = Settings::save( $key, $value );

        if ( $result ) {
            wp_send_json_success( 'Settings saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save settings' );
        }
    }

    /**
     * Save all block settings via AJAX
     *
     * @since 1.0.0
     */
    public function save_all_block_settings() {
        // Check for nonce security
        if ( ! check_ajax_referer( 'fb_save_all_block_settings', 'nonce', false ) ) {
            wp_send_json_error( 'Invalid nonce' );
        }

        // Check user capabilities
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_send_json_error( 'You don\'t have permission to perform this action' );
        }

        $blocks = isset( $_POST['blocks'] ) ? $_POST['blocks'] : [];

        if ( empty( $blocks ) || ! is_array( $blocks ) ) {
            wp_send_json_error( 'No blocks provided or invalid format' );
        }

        $success = true;

        Settings::save_blocks($blocks);

        if ( $success ) {
            wp_send_json_success( 'All block settings saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save all block settings' );
        }
    }

    /**
     * Register REST API routes
     */
    public function register_rest_routes() {
        register_rest_route('frontis-blocks/v1', '/save-option', [
            'methods' => 'POST',
            'callback' => [$this, 'save_option_endpoint'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);

        register_rest_route('frontis-blocks/v1', '/get-options', [
            'methods' => 'POST',
            'callback' => [$this, 'get_options_endpoint'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);

        register_rest_route('wp/v2/frontis-blocks', '/system-health', [
            'methods' => 'GET',
            'callback' => [$this, 'get_system_health'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);

        register_rest_route('wp/v2/frontis-blocks', '/post', [
			'methods' => 'POST',
			'callback' => [$this, 'get_posts'],
			'permission_callback' => function () {
				return true;
			},
		]);

        $post_type = Helper::get_post_types();

		foreach ( $post_type as $key => $value ) {
			register_rest_field(
				$value['value'],
				'fb_featured_image_src',
				array(
					'get_callback'    => array( $this, 'get_post_img_src' ),
					'update_callback' => null,
					'schema'          => null,
				)
			);

// 			// Add author info.
// 			register_rest_field(
// 				$value['value'],
// 				'fb_author_info',
// 				array(
// 					'get_callback'    => array( $this, 'get_post_author_info' ),
// 					'update_callback' => null,
// 					'schema'          => null,
// 				)
// 			);
//
// 			// Add comment info.
// 			register_rest_field(
// 				$value['value'],
// 				'fb_comment_info',
// 				array(
// 					'get_callback'    => array( $this, 'get_post_comment_info' ),
// 					'update_callback' => null,
// 					'schema'          => null,
// 				)
// 			);
//
			// Add excerpt info.
			register_rest_field(
				$value['value'],
				'fb_post_excerpt',
				array(
					'get_callback'    => array( $this, 'get_post_excerpt' ),
					'update_callback' => null,
					'schema'          => null,
				)
			);
		}
    }

	/**
	 * Get excerpt for the rest field
	 *
	 * @param object $object Post Object.
	 * @param string $field_name Field name.
	 * @param object $request Request Object.
	 * @since 0.0.1
	 */
	public function get_post_excerpt( $object, $field_name, $request ) {
		$excerpt = wp_trim_words( get_the_excerpt( $object['id'] ) );
		if ( ! $excerpt ) {
			$excerpt = null;
		}
		return $excerpt;
	}

	/**
	 * Get featured image source for the rest field as per size
	 *
	 * @param object $object Post Object.
	 * @param string $field_name Field name.
	 * @param object $request Request Object.
	 * @since 0.0.1
	 */
	public function get_post_img_src( $object, $field_name, $request ) {
		$image_sizes = Helper::get_image_sizes();

		$featured_images = array();

		if ( ! isset( $object['featured_media'] ) ) {
			return $featured_images;
		}

		foreach ( $image_sizes as $key => $value ) {
			$size = $value['value'];

			$featured_images[ $size ] = wp_get_attachment_image_src(
				$object['featured_media'],
				$size,
				false
			);
		}

		return $featured_images;
	}

	public function get_posts() {
    	global $wpdb;

        // Get parameters from AJAX request
        $post_type = isset($_POST['post_type']) ? $_POST['post_type'] : 'post';
        $offset = isset($_POST['offset']) ? intval($_POST['offset']) : 0;
        $limit = isset($_POST['limit']) ? intval($_POST['limit']) : 12;
        $category = isset($_POST['category']) ? intval($_POST['category']) : 0;
        $current_page = isset($_POST['currentPage']) ? intval($_POST['currentPage']) : 1;

        ob_start();

        // Initial query to select posts based on type and status
        $query = $wpdb->prepare("
            SELECT *
            FROM {$wpdb->posts}
            WHERE post_type = %s
            AND post_status = 'publish'
        ", $post_type);

        if ($category !== 0) {
            $query .= " AND ID IN (
                SELECT object_id
                FROM {$wpdb->term_relationships} AS tr
                INNER JOIN {$wpdb->term_taxonomy} AS tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
                WHERE tt.taxonomy = 'category' AND tt.term_id = $category
            )";
        }

        // Count total number of records
        $count_query = "SELECT COUNT(*) FROM ($query) AS CountQuery";
        $total_records = $wpdb->get_var($count_query);

        // Calculate total number of pages
        $total_pages = ceil($total_records / $limit);

        // Adjust offset if it exceeds total records to avoid empty results
//         $offset = min($offset, max(0, $total_records - $limit));

        // Adding limit and offset to the query
        $temp_query = "
            SELECT * FROM (
                $query
            ) AS SubQuery
            LIMIT %d OFFSET %d
        ";

        // Prepare the final query
        $final_query = $wpdb->prepare($temp_query, $limit, $offset);

        // Execute the query to get results
        $results = $wpdb->get_results($final_query);

        if ($results) {
            foreach($results as $key => $single_post): ?>
                <div class="fb_post_grid_wrapper">
                    <a href="<?php echo get_permalink( $single_post->ID ); ?>">
                        <div class="fb_post_grid_image">
                            <?php if (has_post_thumbnail( $single_post->ID )): ?>
                                <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($single_post->ID), 'medium'); ?>
                                <img src="<?php echo $image[0]; ?>" alt=""/>
                            <?php endif; ?>
                        </div>
                        <div class="fb_post_grid_content">
                            <h3><?php echo $single_post->post_title; ?></h3>
                            <?php if($single_post->post_excerpt !== ''): ?>
                                <p><?php echo $single_post->post_excerpt; ?></p>
                            <?php else: ?>
                                <?php if(!empty($single_post->post_content)): ?>
                                    <p><?php echo wp_trim_words($single_post->post_content, 20, '...'); ?></p>
                                <?php endif; ?>
                            <?php endif; ?>
                        </div>
                    </a>
                </div>
            <?php endforeach;

            if ($total_pages > $current_page) { ?>
                <div class="fb_load_more" data-current_page="<?php echo $current_page; ?>">
                    Load more
                    <span>
                        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="black" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"/>
                            </g>
                            <path d="M18.25 4.5L25.75 12L18.25 19.5" stroke="black" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            <?php }
        } else { ?>
            <div class="empty-post">Nothing found.</div>
        <?php }

        $content = ob_get_contents();
        ob_end_clean();

        // Send response with content and total pages
        wp_send_json_success(array(
            'content' => $content,
            'total_pages' => $total_pages,
            'current_page' => $current_page
        ));
    }


    /**
     * Handle the save option REST API endpoint
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function save_option_endpoint($request) {
        $nonce = $request->get_param('nonce');
        if (!wp_verify_nonce($nonce, 'fb_save_settings')) {
            return new \WP_Error('invalid_nonce', 'Invalid nonce', ['status' => 403]);
        }

        error_log(print_r($request->get_params(), true));

        $key = $request->get_param('key');
        $value = $request->get_param('value');

        if (empty($key)) {
            return new \WP_Error('missing_key', 'Key is required', ['status' => 400]);
        }

        $result = Settings::save($key, $value);

        if ($result) {
            return new \WP_REST_Response(['success' => true, 'message' => 'Option saved successfully'], 200);
        } else {
            return new \WP_Error('save_failed', 'Failed to save option', ['status' => 500]);
        }
    }

    public function get_options_endpoint($request) {
        $nonce = $request->get_param('nonce');
        if (!wp_verify_nonce($nonce, 'fb_save_settings')) {
            return new \WP_Error('invalid_nonce', 'Invalid nonce', ['status' => 403]);
        }

        $keys = $request->get_param('keys');
        if (!is_array($keys)) {
            return new \WP_Error('invalid_keys', 'Keys must be an array', ['status' => 400]);
        }

        $options = [];
        foreach ($keys as $key) {
            $options[$key] = Settings::get($key, '');
        }

        return new \WP_REST_Response(['success' => true, 'data' => $options], 200);
    }

    public function get_system_health() {
        $health_info = [
            [
                'label' => __('PHP Version', 'frontis-blocks'),
                'value' => phpversion(),
                'status' => version_compare(phpversion(), '7.4', '>=') ? 'good' : 'error',
            ],
            [
                'label' => __('WordPress Version', 'frontis-blocks'),
                'value' => get_bloginfo('version'),
                'status' => version_compare(get_bloginfo('version'), '5.8', '>=') ? 'good' : 'warning',
            ],
            [
                'label' => __('Memory Limit', 'frontis-blocks'),
                'value' => ini_get('memory_limit'),
                'status' => (intval(ini_get('memory_limit')) >= 256) ? 'good' : 'warning',
            ],
            [
                'label' => __('Max Execution Time', 'frontis-blocks'),
                'value' => ini_get('max_execution_time') . 's',
                'status' => (ini_get('max_execution_time') >= 30) ? 'good' : 'warning',
            ],
            [
                'label' => __('Frontis Blocks Version', 'frontis-blocks'),
                'value' => FB_VERSION,
                'status' => version_compare(FB_VERSION, '1.0.0', '>=') ? 'good' : 'warning',
            ],
            [
                'label' => __('Upload max filesize', 'frontis-blocks'),
                'value' => ini_get('upload_max_filesize'),
                'status' => (intval(ini_get('upload_max_filesize')) >= 256) ? 'good' : 'warning',
            ],
            [
                'label' => __('Post max size', 'frontis-blocks'),
                'value' => ini_get('post_max_size'),
                'status' => (intval(ini_get('post_max_size')) >= 256) ? 'good' : 'warning',
            ],
            [
                'label' => __('Max input vars', 'frontis-blocks'),
                'value' => ini_get('max_input_vars'),
                'status' => (intval(ini_get('max_input_vars')) >= 1000) ? 'good' : 'warning',
            ],
            [
                'label' => __('Max execution time', 'frontis-blocks'),
                'value' => ini_get('max_execution_time') . 's',
                'status' => (ini_get('max_execution_time') >= 30) ? 'good' : 'warning',
            ],
        ];

        return new \WP_REST_Response($health_info, 200);
    }

    public function enqueue_editor_assets() {
        $script_path = FB_PLUGIN_PATH . 'assets/admin/sidebar.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/sidebar.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        wp_enqueue_script('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar.js', $script_asset['dependencies'], '1.0.0', true);

        wp_enqueue_style('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar.css', array(), '1.0.0');
    }

}
