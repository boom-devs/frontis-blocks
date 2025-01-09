<?php

namespace FrontisBlocks\Admin;
use FrontisBlocks\Admin\Settings;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Assets\GenerateGlobalTypography;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        add_action( 'plugin_action_links', [ $this, 'fb_menu_action_links' ], 10, 2 );
        add_action('admin_init', [$this, 'register_block_assets_in_site_editor']);

        // add_action( 'wp_ajax_fb_save_settings', array( $this, 'save_settings' ) );

        // add_action( 'wp_ajax_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );
        // add_action( 'wp_ajax_nopriv_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );

        // Add the new REST API endpoint
        add_action('rest_api_init', [$this, 'register_rest_routes']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
		GenerateGlobalTypography::generate_global_typography();
// 		add_action( 'admin_enqueue_scripts', GenerateGlobalTypography::generate_global_typography() );
    }

    public function add_menu_page(){
        add_menu_page(
            __('Frontis Blocks', 'frontis-blocks'),
            __('Frontis Blocks', 'frontis-blocks'),
            'manage_options',
            'frontis-blocks',
            array( $this, 'display_page' ),
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM0ODkgNi45OTc5MUwxMi43NTM1IDcuODEyMDJDMTIuOTU1NCA3LjkyOTE1IDEzLjEyMyA4LjA5NzYzIDEzLjIzOTUgOC4zMDA1MUMxMy4zNTYgOC41MDMzOSAxMy40MTc0IDguNzMzNTMgMTMuNDE3NCA4Ljk2Nzc5VjkuODI5OTRDMTMuNDE3NCAxMC4wNjQyIDEzLjM1NiAxMC4yOTQzIDEzLjIzOTUgMTAuNDk3MkMxMy4xMjMgMTAuNzAwMSAxMi45NTU0IDEwLjg2ODYgMTIuNzUzNSAxMC45ODU3TDExLjM0ODkgMTEuNzk5OEw5LjI3MjQ0IDEzLjAwMzZMNy44NjUxMyAxMy44MjA0QzcuNjYzMyAxMy45Mzc1IDcuNDM0MzUgMTMuOTk5MiA3LjIwMTMgMTMuOTk5MkM2Ljk2ODI1IDEzLjk5OTIgNi43MzkzIDEzLjkzNzUgNi41Mzc0NyAxMy44MjA0TDUuMTMyODEgMTMuMDAzNlYxMC42MDEzTDcuMjAxMyAxMS44MDI1TDkuMjcyNDQgMTAuNjAxM0wxMS4zNDA5IDkuNDAyODdMOS4yNzI0NCA4LjIwMTczTDcuMjAxMyA3LjAwMDU5TDkuMjcyNDQgNS43OTY3N0wxMS4zNDA5IDQuNTk4M0w5LjI3MjQ0IDMuMzk3MTVMNy4yMDEzIDIuMTk4NjdMNS4xMzI4MSAwLjk5NzUzTDYuNTM3NDcgMC4xODA3NTNDNi43MzkzIDAuMDYzNjE3IDYuOTY4MjUgMC4wMDE5NTMxMiA3LjIwMTMgMC4wMDE5NTMxMkM3LjQzNDM1IDAuMDAxOTUzMTIgNy42NjMzIDAuMDYzNjE3IDcuODY1MTMgMC4xODA3NTNMOS4yNjk3OCAwLjk5NzUzTDExLjMzNTYgMi4xOTg2N0wxMi43NDAzIDMuMDE1NDVDMTIuOTQyMSAzLjEzMjU4IDEzLjEwOTcgMy4zMDEwNiAxMy4yMjYyIDMuNTAzOTRDMTMuMzQyOCAzLjcwNjgyIDEzLjQwNDEgMy45MzY5NiAxMy40MDQxIDQuMTcxMjJWNS4wMzA3MUMxMy40MDQxIDUuMjY0OTggMTMuMzQyOCA1LjQ5NTExIDEzLjIyNjIgNS42OTc5OUMxMy4xMDk3IDUuOTAwODcgMTIuOTQyMSA2LjA2OTM0IDEyLjc0MDMgNi4xODY0N0wxMS4zNDg5IDYuOTk3OTFaIiBmaWxsPSIjMEIwQzBFIi8+CjxwYXRoIGQ9Ik01LjEzNDMyIDMuMzk5ODdMMy4wNjg0OSA0LjU5NTY4VjExLjgwMjVMMS42NjY0OCAxMC45ODg0QzEuNDY0MTYgMTAuODcxNiAxLjI5NjAzIDEwLjcwMzMgMS4xNzkwMyAxMC41MDA0QzEuMDYyMDIgMTAuMjk3NSAxLjAwMDI3IDEwLjA2NzIgMSA5LjgzMjY3VjQuMTY1OTRDMS4wMDAwMSAzLjkzMTY4IDEuMDYxMzUgMy43MDE1NCAxLjE3Nzg4IDMuNDk4NjZDMS4yOTQ0IDMuMjk1NzggMS40NjIgMy4xMjczIDEuNjYzODMgMy4wMTAxN0wyLjQwMiAyLjU4MzFDMi42MDM4MyAyLjQ2NTk2IDIuODMyNzggMi40MDQzIDMuMDY1ODMgMi40MDQzQzMuMjk4ODggMi40MDQzIDMuNTI3ODMgMi40NjU5NiAzLjcyOTY2IDIuNTgzMUw1LjEzNDMyIDMuMzk5ODdaIiBmaWxsPSIjMzk5Q0ZGIi8+CjxwYXRoIGQ9Ik05LjI3MjAyIDUuNzk3Nkw3LjIwMDg4IDYuOTk4NzRMNS43OTYyMiA3LjgxMjg1QzUuNTk0MzkgNy45Mjk5OSA1LjM2NTQ0IDcuOTkxNjYgNS4xMzIzOSA3Ljk5MTY2QzQuODk5MzQgNy45OTE2NiA0LjY3MDM5IDcuOTI5OTkgNC40Njg1NiA3LjgxMjg1TDMuMDU4NTkgNi45OTg3NEw1LjEyNzA4IDUuODAwMjdMNi41MzQzOSA0Ljk4MzVDNi43MzYyMiA0Ljg2NjM2IDYuOTY1MTcgNC44MDQ2OSA3LjE5ODIyIDQuODA0NjlDNy40MzEyNyA0LjgwNDY5IDcuNjYwMjIgNC44NjYzNiA3Ljg2MjA1IDQuOTgzNUw5LjI3MjAyIDUuNzk3NloiIGZpbGw9IiMzOTlDRkYiLz4KPC9zdmc+Cg==',
            30
        );
    }

    public function display_page(){
        echo "<div id='frontis-blocks-admin'></div>";
    }

    public function enqueue_styles($hook){

        if('toplevel_page_frontis-blocks' == $hook || 'post.php' == $hook || 'post-new.php' == $hook || 'site-editor.php' == $hook){
            $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '';

            wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index' . $suffix . '.css', array(), '1.0.0');
        }
    }

    public function enqueue_scripts($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }
        $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '';

        wp_enqueue_script('jquery');
        $script_path = FB_PLUGIN_PATH . 'assets/admin/index' . $suffix . '.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        //push jquery in $script_asset['dependencies']
        $script_asset['dependencies'][] = 'jquery';

        wp_enqueue_script('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index' . $suffix . '.js', $script_asset['dependencies'], '1.0.0', true);
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

			// Add author info.
			register_rest_field(
				$value['value'],
				'fb_author_info',
				array(
					'get_callback'    => array( $this, 'get_post_author_info' ),
					'update_callback' => null,
					'schema'          => null,
				)
			);

			// Add category info.
			register_rest_field(
				$value['value'],
				'fb_category_info',
				array(
					'get_callback'    => array( $this, 'get_post_category_info' ),
					'update_callback' => null,
					'schema'          => null,
				)
			);

			// Add post_tag info.
			register_rest_field(
				$value['value'],
				'fb_post_tag_info',
				array(
					'get_callback'    => array( $this, 'get_post_post_tag_info' ),
					'update_callback' => null,
					'schema'          => null,
				)
			);
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

    public function get_post_author_info($object, $field_name, $request) {
        $author_id = $object['author'];

        // Check if the author has published posts
        $author_has_posts = count_user_posts($author_id, 'post', true) > 0;

        // If the author has no published posts, return null
        if (!$author_has_posts) {
            return null;
        }

        // Get the latest published post of the author
        $latest_post = get_posts(array(
            'author' => $author_id,
            'post_type' => 'post',
            'posts_per_page' => 1,
            'post_status' => 'publish',
            'orderby' => 'date',
            'order' => 'DESC'
        ));

        // Get the publish date of the latest post
        $latest_post_date = $latest_post ? get_the_date('j M Y', $latest_post[0]) : null;

        // Get author's display name
        $author_name = get_the_author_meta('display_name', $author_id);

        // Get author's avatar URL
        $author_avatar = get_avatar_url($author_id);

        // Get author's bio
        $author_bio = get_the_author_meta('description', $author_id);

        // Get author's URL (if set)
        $author_archive_url = get_author_posts_url($author_id);
        // Get author's email
        $author_email = get_the_author_meta('email', $author_id);

        // Return all information in an associative array
        return array(
            'name'        => $author_name,
            'avatar'      => $author_avatar,
            'bio'         => $author_bio,
            'archive_url' => $author_archive_url,
            'email'       => $author_email,
            'latest_post_date' => $latest_post_date,
        );
    }

    public function get_post_category_info($object, $field_name, $request) {
        $categories = get_the_category($object['id']);

        if (empty($categories)) {
            return [];
        }

        // Map the categories to include detailed information
        return array_map(function ($category) {
            return array(
                'id'   => $category->term_id,
                'name' => $category->name,
                'slug' => $category->slug,
                'url' => get_category_link($category->term_id),
            );
        }, $categories);
    }


    public function get_post_post_tag_info($object, $field_name, $request) {
        // Get the tags associated with the post
        $tags = get_the_tags($object['id']);

        // Prepare a formatted array of tag information
        if (!empty($tags) && is_array($tags)) {
            $tag_info = array_map(function($tag) {
                return array(
                    'id'    => $tag->term_id,
                    'name'  => $tag->name,
                    'slug'  => $tag->slug,
                    'url'   => get_tag_link($tag->term_id),
                );
            }, $tags);
        } else {
            $tag_info = array();
        }

        return $tag_info;
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
        $category = isset($_POST['category']) ? $_POST['category'] : '';
        $post_tag = isset($_POST['post_tag']) ? $_POST['post_tag'] : '';
        $post_author = isset($_POST['post_author']) ? $_POST['post_author'] : '';
        $deselected_post_author = isset($_POST['deauthor']) ? $_POST['deauthor'] : '';
        $deselected_post_tag = isset($_POST['detag']) ? $_POST['detag'] : '';
        $deselected_post_category = isset($_POST['decategory']) ? $_POST['decategory'] : '';
        $current_page = isset($_POST['currentPage']) ? intval($_POST['currentPage']) : 1;
        $orderby = isset($_POST['orderby']) ? $_POST['orderby'] : 'date';
        $sortorder = isset($_POST['sortorder']) ? $_POST['sortorder'] : 'desc';

        $post_title_tag = isset($_POST['postTitleTag']) ? $_POST['postTitleTag'] : 'h3';
        $post_description_tag = isset($_POST['postDescriptionTag']) ? $_POST['postDescriptionTag'] : 'p';
        $post_description_excerpt_length = isset($_POST['postDescriptionExcerptLength']) ? intval($_POST['postDescriptionExcerptLength']) : 10;

        $show_author_switcher = isset($_POST['showAuthorSwitcher']) ? $_POST['showAuthorSwitcher'] : false;
        $show_category_switcher = isset($_POST['showCategorySwitcher']) ? $_POST['showCategorySwitcher'] : false;
        $show_tag_switcher = isset($_POST['showTagSwitcher']) ? $_POST['showTagSwitcher'] : false;

        $post_author_prefix_switcher = isset($_POST['postAuthorPrefixSwitcher']) ? $_POST['postAuthorPrefixSwitcher'] : true;
        $post_author_prefix = isset($_POST['postAuthorPrefix']) ? $_POST['postAuthorPrefix'] : 'Posted By';

        $show_date_switcher = isset($_POST['showDateSwitcher']) ? $_POST['showDateSwitcher'] : true;

        $post_author_avatar_switcher = isset($_POST['postAuthorAvatarSwitcher']) ? $_POST['postAuthorAvatarSwitcher'] : true;

        $post_image_size = isset($_POST['postImageSize']) ? $_POST['postImageSize'] : 'full';

        $show_load_more_switcher = isset($_POST['showLoadMoreSwitcher']) ? $_POST['showLoadMoreSwitcher'] : true;


        ob_start();

        // Initial query to select posts based on type and status
        $query = $wpdb->prepare("
            SELECT *
            FROM {$wpdb->posts}
            WHERE post_type = %s
            AND post_status = 'publish'
        ", $post_type);

        /** Start Selected post category */
        if (!empty($category)) {
            $category_ids = explode(',', $category);
            $placeholders = implode(',', array_fill(0, count($category_ids), '%d'));
            $query .= $wpdb->prepare(" AND ID IN (
                SELECT object_id
                FROM {$wpdb->term_relationships} AS tr
                INNER JOIN {$wpdb->term_taxonomy} AS tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
                WHERE tt.taxonomy = 'category' AND tt.term_id IN ($placeholders)
            )", $category_ids);
        }
        /** End Selected post category */

        /** Start Deselected post category */
        if (!empty($deselected_post_category)) {
            $deselected_post_category_ids = explode(',', $deselected_post_category);
            $placeholders = implode(',', array_fill(0, count($deselected_post_category_ids), '%d'));
            $query .= $wpdb->prepare(" AND ID NOT IN (
                SELECT object_id
                FROM {$wpdb->term_relationships} AS tr
                INNER JOIN {$wpdb->term_taxonomy} AS tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
                WHERE tt.taxonomy = 'category' AND tt.term_id IN ($placeholders)
            )", $deselected_post_category_ids);
        }
        /** End Deselected post category */

        /** Start Selected post tag */
        if (!empty($post_tag)) {
            $post_tag_ids = explode(',', $post_tag);
            $placeholders = implode(',', array_fill(0, count($post_tag_ids), '%d'));
            $query .= $wpdb->prepare(" AND ID IN (
                SELECT object_id
                FROM {$wpdb->term_relationships} AS tr
                INNER JOIN {$wpdb->term_taxonomy} AS tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
                WHERE tt.taxonomy = 'post_tag' AND tt.term_id IN ($placeholders)
            )", $post_tag_ids);
        }
        /** End Selected post tag */

        /** Start Deselected post tag */
        if (!empty($deselected_post_tag)) {
            $deselected_post_tag_ids = explode(',', $deselected_post_tag);
            $placeholders = implode(',', array_fill(0, count($deselected_post_tag_ids), '%d'));
            $query .= $wpdb->prepare(" AND ID NOT IN (
                SELECT object_id
                FROM {$wpdb->term_relationships} AS tr
                INNER JOIN {$wpdb->term_taxonomy} AS tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
                WHERE tt.taxonomy = 'post_tag' AND tt.term_id IN ($placeholders)
            )", $deselected_post_tag_ids);
        }
        /** End Deselected post tag */

        /** Start Selected post author */
        if (!empty($post_author)) {
            $post_author_ids = explode(',', $post_author);
            $placeholders = implode(',', array_fill(0, count($post_author_ids), '%d'));
            $query .= $wpdb->prepare(" AND post_author IN ($placeholders)", $post_author_ids);
        }
        /** End Selected post author */

        /** Start Deselected post author */
        if (!empty($deselected_post_author)) {
            $deselected_post_author_ids = explode(',', $deselected_post_author);
            $placeholders = implode(',', array_fill(0, count($deselected_post_author_ids), '%d'));
            $query .= $wpdb->prepare(" AND post_author NOT IN ($placeholders)", $deselected_post_author_ids);
        }
        /** End Deselected post author */

        /** Start Orderby and Sortorder */
        $valid_orderby_values = ['date', 'author', 'title', 'modified'];
        if (!in_array($orderby, $valid_orderby_values)) {
            $orderby = 'date'; // Default to 'date' if invalid value provided
        }

        $valid_sortorder_values = ['asc', 'desc'];
        if (!in_array(strtolower($sortorder), $valid_sortorder_values)) {
            $sortorder = 'desc'; // Default to 'desc' if invalid value provided
        }

        $sortorder = strtoupper($sortorder);

        $orderby = sanitize_key($orderby);

        switch ($orderby) {
            case 'author':
                $query .= " ORDER BY post_author $sortorder";
                break;
            case 'title':
                $query .= " ORDER BY post_title COLLATE utf8mb4_unicode_ci $sortorder";
                break;
            case 'modified':
                $query .= " ORDER BY post_modified $sortorder";
                break;
            case 'date':
            default:
                $query .= " ORDER BY post_date $sortorder";
                break;
        }
        /** End Orderby and Sortorder */

        /** Start Count total number of records */
        $count_query = "SELECT COUNT(*) FROM ($query) AS CountQuery";
        $total_records = $wpdb->get_var($count_query);

        /** Start Calculate total number of pages */
        $total_pages = ceil($total_records / $limit);

        $query_with_limit = $query . " LIMIT %d OFFSET %d";

        /** Start Prepare the final query */
        $final_query = $wpdb->prepare($query_with_limit, $limit, $offset);

        /** Start Execute the query to get results */
        $results = $wpdb->get_results($final_query);

        if ($results) {
            foreach($results as $key => $single_post): ?>
                <div class="fb_post_grid_wrapper">
                    <div class="fb_post_grid_image_wrapper">
                        <div class="fb_post_grid_image">
                            <?php if (has_post_thumbnail($single_post->ID)): ?>
                                <?php
                                    $image = wp_get_attachment_image_src(get_post_thumbnail_id($single_post->ID), $post_image_size);
                                    $image_srcset = wp_get_attachment_image_srcset(get_post_thumbnail_id($single_post->ID), $post_image_size);
                                ?>
                                <a href="<?php echo get_permalink($single_post->ID); ?>" aria-label="Read more about <?php echo esc_attr($single_post->post_title); ?>">
                                    <img src="<?php echo esc_url($image[0]); ?>"
                                        srcset="<?php echo esc_attr($image_srcset); ?>"
                                        alt="<?php echo esc_attr(get_the_title($single_post->ID)); ?>" />
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="fb_post_grid_content_wrapper">
                        <?php if ($show_author_switcher == 'true'): ?>
                            <div class="fb_post_grid_author">
                                <?php if ($post_author_avatar_switcher == 'true'): ?>
                                    <div class="fb_post_grid_author_avatar">
                                        <a class="fb_post_grid_author_avatar_url" href="<?php echo esc_url(get_author_posts_url($single_post->post_author)); ?>"
                                        aria-label="View all posts by <?php echo esc_attr(get_the_author_meta('display_name', $single_post->post_author)); ?>">
                                            <img src="<?php echo esc_url(get_avatar_url($single_post->post_author)); ?>"
                                                alt="<?php echo esc_attr(get_the_author_meta('display_name', $single_post->post_author)); ?>" />
                                        </a>
                                    </div>
                                <?php endif; ?>
                                <div class="fb_post_grid_author_info">
                                    <div class="fb_post_grid_author_info_name">
                                        <?php if ($post_author_prefix_switcher == 'true'): ?>
                                            <span class="fb_post_grid_author_posted_by"><?php echo esc_html($post_author_prefix); ?></span>
                                        <?php endif; ?>
                                        <div class="fb_post_grid_author_name">
                                            <a class="fb_post_grid_author_name_url" href="<?php echo esc_url(get_author_posts_url($single_post->post_author)); ?>"
                                            aria-label="View all posts by <?php echo esc_attr(get_the_author_meta('display_name', $single_post->post_author)); ?>">
                                                <?php echo esc_html(get_the_author_meta('display_name', $single_post->post_author)); ?>
                                            </a>
                                        </div>
                                    </div>
                                    <?php if ($show_date_switcher == 'true'): ?>
                                        <div class="fb_post_grid_date">
                                            <?php echo esc_html(get_the_date('j M Y', $single_post->ID)); ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php if ($show_category_switcher == 'true'): ?>
                            <div class="fb_post_grid_categories">
                                <?php
                                    $categories = get_the_category($single_post->ID);
                                    if ($categories):
                                        foreach ($categories as $category): ?>
                                            <div class="fb_post_grid_category" key="<?php echo esc_attr($category->term_id); ?>">
                                                <a class="fb_post_grid_category_url"
                                                href="<?php echo esc_url(get_category_link($category->term_id)); ?>"
                                                aria-label="<?php echo esc_attr(sprintf('View posts in %s category', $category->name)); ?>">
                                                    <?php echo esc_html($category->name); ?>
                                                </a>
                                            </div>
                                        <?php endforeach;
                                    endif;
                                ?>
                            </div>
                        <?php endif; ?>

                        <?php if ($show_tag_switcher == 'true'): ?>
                            <div class="fb_post_grid_tags">
                                <?php
                                    $tags = get_the_tags($single_post->ID);
                                    if ($tags):
                                        foreach ($tags as $tag): ?>
                                            <div class="fb_post_grid_tag" key="<?php echo esc_attr($tag->term_id); ?>">
                                                <a class="fb_post_grid_tag_url"
                                                href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>"
                                                aria-label="<?php echo esc_attr(sprintf('View posts tagged with %s', $tag->name)); ?>">
                                                    <?php echo esc_html($tag->name); ?>
                                                </a>
                                            </div>
                                        <?php endforeach;
                                    endif;
                                ?>
                            </div>
                        <?php endif; ?>

                        <div class="fb_post_grid_content">

                            <a href="<?php echo esc_url(get_permalink($single_post->ID)); ?>">
                                <<?php echo esc_html($post_title_tag); ?> class="fb_post_title">
                                    <?php echo esc_html($single_post->post_title); ?>
                                </<?php echo esc_html($post_title_tag); ?>>
                            </a>

                            <?php if (!empty($single_post->post_excerpt)): ?>
                                <<?php echo esc_html($post_description_tag); ?> class="fb_post_desc">
                                    <?php echo esc_html(wp_trim_words($single_post->post_excerpt, $post_description_excerpt_length, '...')); ?>
                                </<?php echo esc_html($post_description_tag); ?>>
                            <?php elseif (!empty($single_post->post_content)): ?>
                                <<?php echo esc_html($post_description_tag); ?> class="fb_post_desc">
                                    <?php echo esc_html(wp_trim_words($single_post->post_content, $post_description_excerpt_length, '...')); ?>
                                </<?php echo esc_html($post_description_tag); ?>>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endforeach;

            if ($total_pages > $current_page && $show_load_more_switcher == 'true') { ?>
                <div class="fb_load_more_wrapper">
                    <div class="fb_load_more" data-current_page="<?php echo $current_page; ?>"></div>
                </div>
            <?php }
        } else { ?>
            <div class="empty-post">Nothing found.</div>
        <?php }

        $content = ob_get_contents();
        ob_end_clean();

        /** Start Send response with content and total pages */
        wp_send_json_success(array(
            'content' => $content,
            'total_pages' => $total_pages,
            'current_page' => $current_page
        ));
        /** End Send response with content and total pages */
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

        //error_log(print_r($request->get_params(), true));

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

    public function render_generated_css() {
		$css_content = get_option('fb_global_typo_css');
		if($css_content){
			echo '<style id="test-global-typo" type="text/css" >'.$css_content.'</style>';
		}
	}

    public function enqueue_editor_assets() {
        $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '';

        $script_path = FB_PLUGIN_PATH . 'assets/admin/sidebar' . $suffix . '.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/sidebar.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        // Styles from function
		$this->render_generated_css();

        wp_enqueue_script('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar' . $suffix . '.js', $script_asset['dependencies'], '1.0.0', true);
        wp_localize_script('frontis-blocks-admin-sidebar', 'frontisBlocksAdminSidebar', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('fb_sidebar_nonce'),
        ));

        wp_enqueue_style('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar' . $suffix . '.css', array(), '1.0.0');
    }



    public function register_block_assets_in_site_editor() {
        global $pagenow;

        if ('site-editor.php' === $pagenow) {
            // Styles from function
            $this->render_generated_css();
        }
    }

}
