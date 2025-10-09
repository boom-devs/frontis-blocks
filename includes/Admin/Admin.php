<?php

namespace FrontisBlocks\Admin;
use FrontisBlocks\Admin\Settings;
use FrontisBlocks\Admin\TemplateLibrary;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Assets\GenerateGlobalTypography;
use FrontisBlocks\Assets\GenerateGlobalColors;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action( 'plugin_action_links', [ $this, 'fb_menu_action_links' ], 10, 2 );

        // Add the new REST API endpoint
        add_action('rest_api_init', [$this, 'register_rest_routes']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_assets']);
        add_action('init', [$this, 'register_meta_settings']);
        $this->store_google_fonts();

        // Template proxy
        add_filter('query_vars', function ($vars) {
            $vars[] = 'template_proxy';
            $vars[] = 'url';
            return $vars;
        });

        add_action('template_redirect', [$this, 'template_proxy']);
    }

    /**
     * Register Post Meta options for react based fields.
     *
     * @since 0.0.1
     * @return void
     */
    function register_meta_settings(): void {
        register_post_meta(
            '',
            '_frontis_meta_header_display',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        register_post_meta(
            '',
            '_frontis_meta_footer_display',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        register_post_meta(
            '',
            '_frontis_meta_site_title_display',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        register_post_meta(
            '',
            '_frontis_meta_sticky_header',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        register_post_meta(
            '',
            '_frontis_meta_transparent_header',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'boolean',
                'auth_callback' => '__return_true',
            )
        );
        register_post_meta(
            '',
            '_frontis_meta_lazy_load',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'boolean',
                'auth_callback' => '__return_true',
            )
        );
        register_post_meta(
            '',
            '_frontis_meta_transparent_bg_color',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'string',
                'auth_callback' => '__return_true',
            )
        );
        register_post_meta(
            '',
            '_frontis_meta_sticky_bg_color',
            array(
                'show_in_rest'  => true,
                'single'        => true,
                'type'          => 'string',
                'auth_callback' => '__return_true',
            )
        );

        // Init template proxy
        add_rewrite_rule('^template-proxy/?$', 'index.php?template_proxy=1', 'top');
        flush_rewrite_rules(false);
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

		// Get the blocks list
		$theme_colors = [];
		$theme_default_gradients_colors = [];
		$gutenberg_default_gutenberg_colors = [];
		$gradient_colors = [];
		$theme_json = wp_get_global_settings();
		$global_colors = get_option('fb_global_colors');


        // Font families are at ['typography']['fontFamilies']['theme'] or ['custom'].
        $font_families['theme'] = isset($theme_json['typography']['fontFamilies']['theme']) 
        ? $theme_json['typography']['fontFamilies']['theme']
        : array();

        // Merge with custom fonts if they exist (e.g., user-installed via Font Library).
        if (isset($theme_json['typography']['fontFamilies']['custom'])) {
            $font_families = array_merge($font_families, $theme_json['typography']['fontFamilies']['custom']);
        }

        $installed_fonts_families = array(
            'theme'  => array(),  // Custom fonts with fontFace definitions.
            'system' => array(),  // System fonts (no fontFace).
        );

        // Categorize font families.
        foreach ($font_families as $font_family) {
            $type = isset($font_family['fontFace']) && !empty($font_family['fontFace']) ? 'theme' : 'system';
            
            $installed_fonts_families[$type][] = array(
                'fontFamily' => $font_family['fontFamily'] ?? '',  // CSS font-family stack.
                'slug'       => $font_family['slug'] ?? '',        // Unique slug for CSS variables.
                'name'       => $font_family['name'] ?? '',        // Human-readable name.
                'fontFace'   => $font_family['fontFace'] ?? null,  // Font face definitions (if any).
            );
        }

        var_dump($installed_fonts_families);

        $automatic_block_recovery = get_option('fb_automatic_block_recovery');
        $enable_quick_action_bar = get_option('fb_enable_quick_action_bar'); 

        $copy_paste_style = get_option('fb_copy_paste_style');
        $copy_paste_style = trim($copy_paste_style, '"');

        $automatic_block_recovery = trim($automatic_block_recovery, '"');
        $enable_quick_action_bar = trim($enable_quick_action_bar, '"');

        // var_dump($theme_json);

		if ($theme_json && isset($theme_json['color'])) {
			if(isset($theme_json['color']['palette'])) {
				if (isset($theme_json['color']['palette']['theme'])) {
					$theme_colors = $theme_json['color']['palette']['theme'];

					if(!Helper::option_exists('fb_global_colors')) {
						update_option('fb_global_colors', $theme_colors);
					}
				}
			}

			// Gradients colors
			if($theme_json['color']['defaultGradients']) {
				$gutenberg_default_gutenberg_colors = $theme_json['color']['gradients']['default'];
			}

			if(isset($theme_json['color']['gradients']['theme']) && $theme_json['color']['gradients']['theme']) {
				$theme_default_gradients_colors = $theme_json['color']['gradients']['theme'];
			}

			$gradient_colors = array_merge($gutenberg_default_gutenberg_colors, $theme_default_gradients_colors);

			$db_gradient_colors = get_option('fb_gradient_colors');
			if($gutenberg_default_gutenberg_colors) {
				update_option('fb_gradient_colors', $gradient_colors);
			}
		}

		$google_fonts = get_transient( 'google_fonts_data' );

		$blocks = BlockList::get_instance()->get_blocks();
		$localizeArray = array(
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
            'global_styles' => wp_get_global_styles(),
            'global_typography' => get_option('fb_globaltypo'),
            'theme_colors' => $theme_colors,
			'global_colors' => $global_colors,
			'gradients_colors' => $gradient_colors,
            'home_url' => home_url(),
			'google_fonts' => $google_fonts,
            'siteName' => get_bloginfo('name'),
            'siteTagline' => get_bloginfo('description'),
            'siteLogo' => get_theme_mod('custom_logo'),
			'all_posts' => Helper::get_all_posts(),
			'bolck_nonce' => wp_create_nonce('fb_block_nonce'),
            'all_post_ids' => Helper::get_all_post_ids(),
		);

		if('post.php' == $hook || 'post-new.php' == $hook || 'site-editor.php' == $hook){
			$tl_script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
			$tl_script_asset = file_exists( $tl_script_asset_path ) ? require( $tl_script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( FB_VERSION ) );
			$tl_script_asset['dependencies'][] = 'jquery';

            $activation_key = get_option('frontisblockspro_license_options');
            if(is_array($activation_key) && $activation_key && count($activation_key) > 0 && isset($activation_key['sc_license_key']) && $activation_key['sc_license_key'] !== '') {
                $activation_key = $activation_key['sc_license_key'];
            }

			wp_enqueue_style('frontis-template-library', FB_PLUGIN_URL . 'assets/admin/style-tlibrary.css', array(), '1.0.0');
			wp_enqueue_script('frontis-template-library', FB_PLUGIN_URL . 'assets/admin/tlibrary.js', $tl_script_asset['dependencies'], '1.0.0', true);
            wp_localize_script(
                'frontis-template-library',
                'FB_TLibrary',
                array(
                    'activationKey' => $activation_key,
                    'portalApi' => PORTAL_API,
                    'wordpressSyncApi' => WORDPRESS_SYNC_API
                )
            );

            if ($enable_quick_action_bar === "true") { 
                wp_enqueue_style('frontis-quick-access', FB_PLUGIN_URL . 'assets/admin/quickAccess.css', array(), '1.0.0');
                wp_enqueue_script('frontis-quick-access', FB_PLUGIN_URL . 'assets/admin/quickAccess.js', $tl_script_asset['dependencies'], '1.0.0', true);
            }

            if ($copy_paste_style === "true") { 
			    wp_enqueue_script('frontis-copy-paste', FB_PLUGIN_URL . 'assets/admin/copyPasteStyle.js', $tl_script_asset['dependencies'], '1.0.0', true);
            }

            // wp_enqueue_script('frontis-highlight-color', FB_PLUGIN_URL . 'assets/admin/highlightColor.js', $tl_script_asset['dependencies'], '1.0.0', true);
            
            if ($automatic_block_recovery === "true") {
                wp_enqueue_script('frontis-block-recovery', FB_PLUGIN_URL . 'assets/admin/blockRecovery.js', $tl_script_asset['dependencies'], '1.0.0', true);
            }

			// $localizeArray['nonce'] = wp_create_nonce('fb_import_demo_data');
			wp_localize_script('frontis-template-library', 'frontisBlocksAdmin', $localizeArray);
		}

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

        // Localize the script with new data
		wp_localize_script('frontis-blocks-admin', 'frontisBlocksAdmin', $localizeArray);
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

	public function store_google_fonts() {
		$transient_key = 'google_fonts_data';

		// Check if transient exists
		$cached_data = get_transient($transient_key);

		if ($cached_data !== false) {
			// Return cached data if available
			return $cached_data;
		}

		// Replace with the actual URL to your google-fonts.json file
		$plugin_url = FB_PLUGIN_URL.'assets/google-fonts/google-fonts.json';

		// Fetch the JSON file
		$response = wp_remote_get($plugin_url);

		// Check for errors
		if (is_wp_error($response)) {
			return [];
		}

		// Get the response body
		$body = wp_remote_retrieve_body($response);

		// Decode JSON data
		$data = json_decode($body, true);

		if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
			return [];
		}

		// Transform data to match the JavaScript output
		$formatted_data = array_map(function($family) use ($data) {
			return [
				'label' => $family,
				'value' => $family,
				'weights' => $data[$family]
			];
		}, array_keys($data));

		// Cache the data for 1 month (30 days)
		set_transient($transient_key, $formatted_data, MONTH_IN_SECONDS);

		return $formatted_data;
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

        register_rest_route('wp/v2/frontis-blocks', '/icons', [
            'methods' => 'GET',
            'callback' => [$this, 'get_icons'],
            'permission_callback' => function () {
                return true;
            },
        ]);

        register_rest_route('custom/v1', '/proxy-image', [
            'methods' => 'GET',
            'callback' => [$this, 'proxy_image'],
            'permission_callback' => '__return_true', // Adjust permissions as needed
        ]);

        register_rest_route(
            'frontis/v1',
            '/global-settings',
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            =>  [$this, 'frontis_get_global_settings'],
                    'permission_callback' => function () {
                        return true;
                    },
                ),
                array(
                    'methods'             => \WP_REST_Server::EDITABLE,
                    'callback'            => [$this, 'frontis_update_global_settings'],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_options' );
                    },
                ),
            )
        );

        register_rest_route(
            'frontis/v1',
            '/template-settings',
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            =>  [$this, 'frontis_get_template_settings'],
                    'permission_callback' => function () {
                        return true;
                    },
                ),
                array(
                    'methods'             => \WP_REST_Server::EDITABLE,
                    'callback'            => [$this, 'frontis_update_template_settings'],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_options' );
                    },
                ),
            )
        );

        register_rest_route(
            'frontis/v1',
            '/template',
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'frontis_get_post_template_data'],
                    'permission_callback' => function ( \WP_REST_Request $request ) {
                        return current_user_can( 'manage_options' );
                    },
                )
            )
        );
    }

    function proxy_image($request) {
        $image_url = $request->get_param('url');
        if (!$image_url || !filter_var($image_url, FILTER_VALIDATE_URL)) {
            return new WP_Error('invalid_url', 'Invalid or missing URL', ['status' => 400]);
        }
    
        $response = wp_remote_get($image_url);
        if (is_wp_error($response)) {
            return new WP_Error('fetch_failed', 'Failed to fetch image', ['status' => 500]);
        }
    
        $body = wp_remote_retrieve_body($response);
        $content_type = wp_remote_retrieve_header($response, 'content-type');
    
        // Set headers and output the image
        header('Content-Type: ' . $content_type);
        echo $body;
        exit;
    }

    /**
     * Get options
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */
    function frontis_get_global_settings( \WP_REST_Request $request ) {
        $default_settings = array(
            'disableHeader'     => false,
            'disableFooter'     => false,
            'stickyHeader'      => false,
            'stickyHeaderOffset' => 0,
            'transparentHeader' => false,
            'scrollToTop'       => false,
            'smoothScroll'       => false,
            'relatedPosts'       => false,
            'authorBox'       => false,
            'lazyLoading'       => false,
            'stickyHeaderColor'       => null,
            'transparentHeaderColor'       => 'transparent',
        );

        $settings = get_option( 'frontis_theme_options' );

        return rest_ensure_response( $settings, $default_settings );
    }

    function frontis_get_post_template_data( \WP_REST_Request $request ) {
        $post_id = $request->get_param( 'id' );
        $template_id = Helper::get_template_id($post_id);
        
        // Validate post_id
        if ( empty( $post_id ) || ! is_numeric( $post_id ) ) {
            return new \WP_Error(
                'invalid_post_id',
                __( 'Invalid or missing post ID.', 'frontis' ),
                array( 'status' => 400 )
            );
        }

        // Retrieve post meta for the given post_id
        $settings = get_post_meta( $template_id, 'frontis_template_options', true );

        // Return empty array if no settings found, or the settings themselves
        return rest_ensure_response( $settings ? $settings : [] );
    }

    /**
     * Set options
     *
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     * @since 1.0.2
     */
    function frontis_update_global_settings( \WP_REST_Request $request ) {

        $fields = isset( $request['setting'] ) ? $request['setting'] : array();

        error_log( print_r( $fields, true ) );

        // Validate incoming data.
        $valid_fields = array(
            'disableHeader'     => filter_var( $fields['disableHeader'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'disableFooter'     => filter_var( $fields['disableFooter'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'stickyHeader'      => filter_var( $fields['stickyHeader'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'stickyHeaderOffset' => filter_var( $fields['stickyHeaderOffset'] ?? 0, FILTER_VALIDATE_INT ),
            'transparentHeader' => filter_var( $fields['transparentHeader'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'scrollToTop'       => filter_var( $fields['scrollToTop'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'smoothScroll'       => filter_var( $fields['smoothScroll'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'relatedPosts'       => filter_var( $fields['relatedPosts'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'authorBox'       => filter_var( $fields['authorBox'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'lazyLoading'       => filter_var( $fields['lazyLoading'] ?? false, FILTER_VALIDATE_BOOLEAN ),
            'stickyHeaderColor' => $this->validate_color( $fields['stickyHeaderColor'] ?? '' ),
            'transparentHeaderColor' => $this->validate_color( $fields['transparentHeaderColor'] ?? '' ),
        );

        if ( ! empty( $fields ) ) {
            update_option( 'frontis_theme_options', $valid_fields );
        }

        return rest_ensure_response( 'success' );
    }

    public function get_icons() {
        // Assets er vitore fontawesome icon ache icons.php file a oita fetch korbo using rest api
        $data = include FB_PLUGIN_PATH . 'assets/fontawesome/icons.php';
        return $data;
    }

    /**
     * Validate color in HEX format.
     *
     * @param string $color The color to validate.
     * @return string|null Returns the validated color or null if invalid.
     */
    function validate_color( $color ) {
        if ( preg_match( '/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/', $color ) ) {
            return $color;
        }
        return null;
    }

    /**
     * Get template settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */

    public function frontis_get_template_settings( \WP_REST_Request $request ) {
        // Get post_id from query parameters
        $post_id = $request->get_param('post_id');

        // Validate post_id
        if ( empty( $post_id ) || ! is_numeric( $post_id ) ) {
            return new \WP_Error(
                'invalid_post_id',
                __( 'Invalid or missing post ID.', 'frontis' ),
                array( 'status' => 400 )
            );
        }

        // Retrieve post meta for the given post_id
        $settings = get_post_meta( $post_id, 'frontis_template_options', true );

        // Return empty array if no settings found, or the settings themselves
        return rest_ensure_response( $settings ? $settings : [] );
    }

    /**
     * Update template settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */
    public function frontis_update_template_settings( \WP_REST_Request $request ) {
        $fields = isset( $request['setting'] ) ? $request['setting'] : array();
        update_post_meta( $request['post_id'], 'frontis_template_options', $fields );
        return rest_ensure_response( 'success' );
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

    public function enqueue_editor_assets() {
        $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '';
        $theme = wp_get_theme();

        $script_path = FB_PLUGIN_PATH . 'assets/admin/sidebar' . $suffix . '.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/sidebar.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        wp_enqueue_script('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar.js', $script_asset['dependencies'], '1.0.0', true);
        wp_localize_script('frontis-blocks-admin-sidebar', 'frontisBlocksAdminSidebar', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('fb_sidebar_nonce'),
            'frontis_theme' => 'Frontis' == $theme->name || 'Frontis' == $theme->parent_theme
        ));

        wp_enqueue_style('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar' . $suffix . '.css', array(), '1.0.0');
	}

    public function template_proxy() {
        global $wp_query;

        $is_proxy   = get_query_var('template_proxy');
        $remote_url = get_query_var('url');
    
        // fallback: check raw $_GET if query_vars fail
        if (empty($is_proxy) && isset($_GET['template_proxy'])) {
            $is_proxy = sanitize_text_field($_GET['template_proxy']);
        }
        if (empty($remote_url) && isset($_GET['url'])) {
            $remote_url = sanitize_text_field($_GET['url']);
        }
    
        if ($is_proxy && $remote_url) {
            $remote_url = urldecode($remote_url);
    
            $response = wp_remote_get($remote_url);
            if (is_wp_error($response)) {
                wp_die('Proxy request failed: ' . $response->get_error_message());
            }
    
            $body = wp_remote_retrieve_body($response);
            $content_type = wp_remote_retrieve_header($response, 'content-type');
            header("Content-Type: " . ($content_type ?: 'text/html; charset=UTF-8'));
    
            // Fix relative asset URLs
            $body = preg_replace_callback(
                '/(src|href)=["\'](\/[^"\']+)["\']/i',
                function ($matches) use ($remote_url) {
                    $base = preg_replace('#/[^/]*$#', '/', $remote_url);
                    return $matches[1] . '="' . rtrim($base, '/') . $matches[2] . '"';
                },
                $body
            );
    
            echo $body;
            exit;
        }
    }
}
