<?php

namespace FrontisBlocks\Admin;

if (!defined('ABSPATH')) {
    exit;
}

use FrontisBlocks\Admin\Settings;
use FrontisBlocks\Admin\TemplateLibrary;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Assets\GenerateGlobalTypography;
use FrontisBlocks\Assets\GenerateGlobalColors;

class Admin
{

    use Singleton;

    /**
     * Bootstrap admin hooks for menus, assets, REST endpoints, and proxies.
     */
    public function __construct()
    {
        add_action('admin_menu', array($this, 'add_menu_page'));
        add_action('admin_init', array($this, 'remove_admin_notices'));
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('plugin_action_links', [$this, 'fb_menu_action_links'], 10, 2);

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
    function register_meta_settings(): void
    {
        register_post_meta(
            '',
            '_frontis_meta_header_display',
            array(
                'show_in_rest' => true,
                'single' => true,
                'type' => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        register_post_meta(
            '',
            '_frontis_meta_footer_display',
            array(
                'show_in_rest' => true,
                'single' => true,
                'type' => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        register_post_meta(
            '',
            '_frontis_meta_site_title_display',
            array(
                'show_in_rest' => true,
                'single' => true,
                'type' => 'boolean',
                'auth_callback' => '__return_true',
            )
        );

        // Init template proxy
        add_rewrite_rule('^template-proxy/?$', 'index.php?template_proxy=1', 'top');
        flush_rewrite_rules(false);
    }

    /**
     * Hide default WP admin notices inside the Frontis dashboard to prevent clutter.
     */
    public function remove_admin_notices()
    {
        if (isset($_GET['page']) && $_GET['page'] === 'frontis-blocks') {
            remove_all_actions('admin_notices');
            remove_all_actions('all_admin_notices');
        }
    }

    /**
     * Register the root Frontis Blocks menu entry inside wp-admin.
     */
    public function add_menu_page()
    {
        add_menu_page(
            __('Frontis Blocks', 'frontis-blocks'),
            __('Frontis Blocks', 'frontis-blocks'),
            'manage_options',
            'frontis-blocks',
            array($this, 'display_page'),
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM0ODkgNi45OTc5MUwxMi43NTM1IDcuODEyMDJDMTIuOTU1NCA3LjkyOTE1IDEzLjEyMyA4LjA5NzYzIDEzLjIzOTUgOC4zMDA1MUMxMy4zNTYgOC41MDMzOSAxMy40MTc0IDguNzMzNTMgMTMuNDE3NCA4Ljk2Nzc5VjkuODI5OTRDMTMuNDE3NCAxMC4wNjQyIDEzLjM1NiAxMC4yOTQzIDEzLjIzOTUgMTAuNDk3MkMxMy4xMjMgMTAuNzAwMSAxMi45NTU0IDEwLjg2ODYgMTIuNzUzNSAxMC45ODU3TDExLjM0ODkgMTEuNzk5OEw5LjI3MjQ0IDEzLjAwMzZMNy44NjUxMyAxMy44MjA0QzcuNjYzMyAxMy45Mzc1IDcuNDM0MzUgMTMuOTk5MiA3LjIwMTMgMTMuOTk5MkM2Ljk2ODI1IDEzLjk5OTIgNi43MzkzIDEzLjkzNzUgNi41Mzc0NyAxMy44MjA0TDUuMTMyODEgMTMuMDAzNlYxMC42MDEzTDcuMjAxMyAxMS44MDI1TDkuMjcyNDQgMTAuNjAxM0wxMS4zNDA5IDkuNDAyODdMOS4yNzI0NCA4LjIwMTczTDcuMjAxMyA3LjAwMDU5TDkuMjcyNDQgNS43OTY3N0wxMS4zNDA5IDQuNTk4M0w5LjI3MjQ0IDMuMzk3MTVMNy4yMDEzIDIuMTk4NjdMNS4xMzI4MSAwLjk5NzUzTDYuNTM3NDcgMC4xODA3NTNDNi43MzkzIDAuMDYzNjE3IDYuOTY4MjUgMC4wMDE5NTMxMiA3LjIwMTMgMC4wMDE5NTMxMkM3LjQzNDM1IDAuMDAxOTUzMTIgNy42NjMzIDAuMDYzNjE3IDcuODY1MTMgMC4xODA3NTNMOS4yNjk3OCAwLjk5NzUzTDExLjMzNTYgMi4xOTg2N0wxMi43NDAzIDMuMDE1NDVDMTIuOTQyMSAzLjEzMjU4IDEzLjEwOTcgMy4zMDEwNiAxMy4yMjYyIDMuNTAzOTRDMTMuMzQyOCAzLjcwNjgyIDEzLjQwNDEgMy45MzY5NiAxMy40MDQxIDQuMTcxMjJWNS4wMzA3MUMxMy40MDQxIDUuMjY0OTggMTMuMzQyOCA1LjQ5NTExIDEzLjIyNjIgNS42OTc5OUMxMy4xMDk3IDUuOTAwODcgMTIuOTQyMSA2LjA2OTM0IDEyLjc0MDMgNi4xODY0N0wxMS4zNDg5IDYuOTk3OTFaIiBmaWxsPSIjMEIwQzBFIi8+CjxwYXRoIGQ9Ik01LjEzNDMyIDMuMzk5ODdMMy4wNjg0OSA0LjU5NTY4VjExLjgwMjVMMS42NjY0OCAxMC45ODg0QzEuNDY0MTYgMTAuODcxNiAxLjI5NjAzIDEwLjcwMzMgMS4xNzkwMyAxMC41MDA0QzEuMDYyMDIgMTAuMjk3NSAxLjAwMDI3IDEwLjA2NzIgMSA5LjgzMjY3VjQuMTY1OTRDMS4wMDAwMSAzLjkzMTY4IDEuMDYxMzUgMy43MDE1NCAxLjE3Nzg4IDMuNDk4NjZDMS4yOTQ0IDMuMjk1NzggMS40NjIgMy4xMjczIDEuNjYzODMgMy4wMTAxN0wyLjQwMiAyLjU4MzFDMi42MDM4MyAyLjQ2NTk2IDIuODMyNzggMi40MDQzIDMuMDY1ODMgMi40MDQzQzMuMjk4ODggMi40MDQzIDMuNTI3ODMgMi40NjU5NiAzLjcyOTY2IDIuNTgzMUw1LjEzNDMyIDMuMzk5ODdaIiBmaWxsPSIjMzk5Q0ZGIi8+CjxwYXRoIGQ9Ik05LjI3MjAyIDUuNzk3Nkw3LjIwMDg4IDYuOTk4NzRMNS43OTYyMiA3LjgxMjg1QzUuNTk0MzkgNy45Mjk5OSA1LjM2NTQ0IDcuOTkxNjYgNS4xMzIzOSA3Ljk5MTY2QzQuODk5MzQgNy45OTE2NiA0LjY3MDM5IDcuOTI5OTkgNC40Njg1NiA3LjgxMjg1TDMuMDU4NTkgNi45OTg3NEw1LjEyNzA4IDUuODAwMjdMNi41MzQzOSA0Ljk4MzVDNi43MzYyMiA0Ljg2NjM2IDYuOTY1MTcgNC44MDQ2OSA3LjE5ODIyIDQuODA0NjlDNy40MzEyNyA0LjgwNDY5IDcuNjYwMjIgNC44NjYzNiA3Ljg2MjA1IDQuOTgzNUw5LjI3MjAyIDUuNzk3NloiIGZpbGw9IiMzOTlDRkYiLz4KPC9zdmc+Cg==',
            30
        );
    }

    /**
     * Render the React admin container.
     */
    public function display_page()
    {
        echo "<div id='frontis-blocks-admin'></div>";
    }

    /**
     * Load admin styles where needed (dashboard, post editor, site editor).
     */
    public function enqueue_styles($hook)
    {

        if ('toplevel_page_frontis-blocks' == $hook || 'post.php' == $hook || 'post-new.php' == $hook || 'site-editor.php' == $hook) {
            $suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '';

            wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/dashboard' . $suffix . '.css', array(), '1.0.1');
        }
    }

    /**
     * Load admin scripts and localize data depending on the current screen.
     */
    public function enqueue_scripts($hook)
    {

        // Get the blocks list
        $theme_colors = [];
        $theme_default_gradients_colors = [];
        $gutenberg_default_gutenberg_colors = [];
        $gradient_colors = [];
        $theme_color_palette_hash = '';
        $theme_gradient_palette_hash = '';
        $theme_json = wp_get_global_settings();
        $global_colors = get_option('fb_global_colors');


        // Font families are at ['typography']['fontFamilies']['theme'] or ['custom'].
        $font_families['theme'] = isset($theme_json['typography']['fontFamilies']['theme'])
            ? $theme_json['typography']['fontFamilies']['theme']
            : array();

        // Merge with custom fonts if they exist (e.g., user-installed via Font Library).
        if (isset($theme_json['typography']['fontFamilies']['custom'])) {
            $custom_fonts['custom'] = $theme_json['typography']['fontFamilies']['custom'];
            $font_families = array_merge($font_families, $custom_fonts);
        }

        $automatic_block_recovery = get_option('fb_automatic_block_recovery');
        $enable_quick_action_bar = get_option('fb_enable_quick_action_bar');

        $copy_paste_style = get_option('fb_copy_paste_style');
        $copy_paste_style = trim($copy_paste_style, '"');

        $automatic_block_recovery = trim($automatic_block_recovery, '"');
        $enable_quick_action_bar = trim($enable_quick_action_bar, '"');

        if ($theme_json && isset($theme_json['color'])) {
            if (isset($theme_json['color']['palette'])) {
                if (isset($theme_json['color']['palette']['theme'])) {
                    $theme_colors = $theme_json['color']['palette']['theme'];
                    $theme_color_palette_hash = md5(wp_json_encode($theme_colors));

                    if (!Helper::option_exists('fb_global_colors')) {
                        update_option('fb_global_colors', $theme_colors);
                        update_option('fb_global_colors_theme_synced', true, true);
                        update_option('fb_global_colors_theme_palette_hash', $theme_color_palette_hash, true);
                        $global_colors = $theme_colors;
                    } else {
                        $has_global_color_sync_meta = Helper::option_exists('fb_global_colors_theme_synced');
                        $global_colors_theme_synced = $has_global_color_sync_meta
                            ? (bool) get_option('fb_global_colors_theme_synced')
                            : $global_colors == $theme_colors;

                        if (!$has_global_color_sync_meta) {
                            update_option('fb_global_colors_theme_synced', $global_colors_theme_synced, true);
                        }

                        $stored_theme_color_palette_hash = Helper::option_exists('fb_global_colors_theme_palette_hash')
                            ? (string) get_option('fb_global_colors_theme_palette_hash')
                            : '';

                        if ($stored_theme_color_palette_hash !== $theme_color_palette_hash) {
                            if ($global_colors_theme_synced) {
                                update_option('fb_global_colors', $theme_colors, true);
                                $global_colors = $theme_colors;
                            }

                            update_option('fb_global_colors_theme_palette_hash', $theme_color_palette_hash, true);
                        }
                    }
                }
            }

            // Gradients colors
            if ($theme_json['color']['defaultGradients']) {
                $gutenberg_default_gutenberg_colors = $theme_json['color']['gradients']['default'];
            }

            if (isset($theme_json['color']['gradients']['theme']) && $theme_json['color']['gradients']['theme']) {
                $theme_default_gradients_colors = $theme_json['color']['gradients']['theme'];
            }

            $gradient_colors = array_merge($gutenberg_default_gutenberg_colors, $theme_default_gradients_colors);
            $theme_gradient_palette_hash = md5(wp_json_encode($gradient_colors));

            $db_gradient_colors = get_option('fb_gradient_colors');
            if ($gutenberg_default_gutenberg_colors) {
                update_option('fb_gradient_colors', $gradient_colors);
            }
        }

        $google_fonts = get_transient('google_fonts_data');

        $blocks = BlockList::get_instance()->get_blocks();
        $localizeArray = array(
            'blocks' => $blocks,
            'defaultBlocks' => BlockList::get_instance()->get_default_blocks(),
            'completedBlocks' => Helper::get_completed_blocks(),
            'blocksInfo' => Helper::get_blocks_info(),
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
            'theme_color_palette_hash' => $theme_color_palette_hash,
            'theme_gradient_palette_hash' => $theme_gradient_palette_hash,
            'global_colors' => $global_colors,
            'gradients_colors' => $gradient_colors,
            'home_url' => home_url(),
            'google_fonts' => $google_fonts,
            'installed_fonts' => $font_families,
            'siteName' => get_bloginfo('name'),
            'siteTagline' => get_bloginfo('description'),
            'siteLogo' => get_theme_mod('custom_logo'),
            'all_posts' => Helper::get_all_posts(),
            'bolck_nonce' => wp_create_nonce('fb_block_nonce'),
            'all_post_ids' => Helper::get_all_post_ids(),
            'system_requirements' => Helper::system_requirements(),
        );

        if ('post.php' == $hook || 'post-new.php' == $hook || 'site-editor.php' == $hook) {
            $tl_script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
            $tl_script_asset = file_exists($tl_script_asset_path) ? require($tl_script_asset_path) : array('dependencies' => array(), 'version' => FB_VERSION);
            $tl_script_asset['dependencies'][] = 'jquery';

            $activation_key = get_option('frontisblockspro_license_options');
            if (is_array($activation_key) && $activation_key && count($activation_key) > 0 && isset($activation_key['sc_license_key']) && $activation_key['sc_license_key'] !== '') {
                $activation_key = $activation_key['sc_license_key'];
            }

            wp_enqueue_style('frontis-template-library', FB_PLUGIN_URL . 'assets/admin/style-tlibrary.css', array(), '1.0.0');
            wp_enqueue_script('frontis-template-library', FB_PLUGIN_URL . 'assets/admin/tlibrary.js', $tl_script_asset['dependencies'], '1.0.0', true);
            wp_localize_script(
                'frontis-template-library',
                'FB_TLibrary',
                array(
                    'ajaxUrl' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('fb_settings_nonce'),
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

            if ($automatic_block_recovery === "true") {
                wp_enqueue_script('frontis-block-recovery', FB_PLUGIN_URL . 'assets/admin/blockRecovery.js', $tl_script_asset['dependencies'], '1.0.0', true);
            }

            wp_localize_script('frontis-template-library', 'frontisBlocksAdmin', $localizeArray);
        }

        if ('toplevel_page_frontis-blocks' != $hook) {
            return;
        }

        $suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '';

        wp_enqueue_script('jquery');
        $script_path = FB_PLUGIN_PATH . 'assets/admin/dashboard.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/dashboard.asset.php';
        $script_asset = file_exists($script_asset_path) ? require($script_asset_path) : array('dependencies' => array(), 'version' => filemtime($script_path));

        //push jquery in $script_asset['dependencies']
        $script_asset['dependencies'][] = 'jquery';

        wp_enqueue_script('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/dashboard.js', $script_asset['dependencies'], '1.0.0', true);

        // Localize the script with new data
        wp_localize_script('frontis-blocks-admin', 'frontisBlocksAdmin', $localizeArray);
    }

    /**
     * Menu Action Links
     *
     * @since 1.0.0
     */
    public function fb_menu_action_links($links, $file)
    {
        if ($file === FB_PLUGIN_BASENAME) {
            $settings_links = sprintf(
                '<a href="%1$s">Settings</a>',
                admin_url('admin.php?page=frontis-blocks')
            );
            array_unshift($links, $settings_links);

            if (!class_exists('FrontisBlocks\Pro\Plugin')) {
                $go_pro_link = sprintf(
                    '<a target="_blank" href="%1$s"><strong style="color:#5e2eff;display: inline-block;">Go Pro</strong></a>',
                    FB_UPGRADE_PRO_URL
                );
                array_push($links, $go_pro_link);
            }
        }

        return $links;
    }

    /**
     * Cache the Google Fonts manifest so the editor can quickly offer font choices.
     */
    public function store_google_fonts()
    {
        $transient_key = 'google_fonts_data';

        // Check if transient exists
        $cached_data = get_transient($transient_key);

        if ($cached_data !== false) {
            // Return cached data if available
            return $cached_data;
        }

        // Replace with the actual URL to your google-fonts.json file
        $plugin_url = FB_PLUGIN_URL . 'assets/google-fonts/google-fonts.json';

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
        $formatted_data = array_map(function ($family) use ($data) {
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
    public function save_settings()
    {
        // Check for nonce security
        if (!check_ajax_referer('fb_save_settings', 'nonce', false)) {
            wp_send_json_error('Invalid nonce');
        }

        // Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('You don\'t have permission to perform this action');
        }

        $key = isset($_POST['key']) ? sanitize_text_field($_POST['key']) : '';
        $value = isset($_POST['value']) ? sanitize_text_field($_POST['value']) : '';

        if (empty($key)) {
            wp_send_json_error('Key is required');
        }

        $result = Settings::save($key, $value);

        if ($result) {
            wp_send_json_success('Settings saved successfully');
        } else {
            wp_send_json_error('Failed to save settings');
        }
    }

    /**
     * Save all block settings via AJAX
     *
     * @since 1.0.0
     */
    public function save_all_block_settings()
    {
        // Check for nonce security
        if (!check_ajax_referer('fb_save_all_block_settings', 'nonce', false)) {
            wp_send_json_error('Invalid nonce');
        }

        // Check user capabilities
        if (!current_user_can('manage_options')) {
            wp_send_json_error('You don\'t have permission to perform this action');
        }

        $blocks = isset($_POST['blocks']) ? $_POST['blocks'] : [];

        if (empty($blocks) || !is_array($blocks)) {
            wp_send_json_error('No blocks provided or invalid format');
        }

        $success = true;

        Settings::save_blocks($blocks);

        if ($success) {
            wp_send_json_success('All block settings saved successfully');
        } else {
            wp_send_json_error('Failed to save all block settings');
        }
    }

    /**
     * Register REST API routes
     */
    public function register_rest_routes()
    {
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
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);

        register_rest_route(
            'frontis/v1',
            '/global-settings',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => [$this, 'frontis_get_global_settings'],
                    'permission_callback' => function () {
                        return true;
                    },
                ),
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => [$this, 'frontis_update_global_settings'],
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ),
            )
        );

        register_rest_route(
            'frontis/v1',
            '/template-settings',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => [$this, 'frontis_get_template_settings'],
                    'permission_callback' => function () {
                        return true;
                    },
                ),
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => [$this, 'frontis_update_template_settings'],
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ),
            )
        );

        register_rest_route(
            'frontis/v1',
            '/template',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => [$this, 'frontis_get_post_template_data'],
                    'permission_callback' => function (\WP_REST_Request $request) {
                        return current_user_can('manage_options');
                    },
                )
            )
        );

        register_rest_route(
            'frontis/v1',
            '/page-settings',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => [$this, 'frontis_get_page_settings'],
                    'permission_callback' => function () {
                        return current_user_can('edit_posts');
                    },
                ),
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => [$this, 'frontis_update_page_settings'],
                    'permission_callback' => function () {
                        return current_user_can('edit_posts');
                    },
                ),
            )
        );
    }

    /**
     * Simple proxy endpoint so remote images can be previewed without CORS issues.
     */
    function proxy_image($request)
    {
        $image_url = $request->get_param('url');
        if (!$image_url) {
            return new \WP_Error('invalid_url', 'Missing URL', ['status' => 400]);
        }

        $image_url = urldecode($image_url);
        $parsed_url = parse_url($image_url);

        if (!$parsed_url || !isset($parsed_url['scheme']) || !in_array($parsed_url['scheme'], ['http', 'https'], true)) {
             return new \WP_Error('invalid_url', 'Invalid URL scheme', ['status' => 400]);
        }

        $response = wp_safe_remote_get($image_url, ['sslverify' => false]);
        if (is_wp_error($response)) {
            return new \WP_Error('fetch_failed', 'Failed to fetch image: ' . $response->get_error_message(), ['status' => 500]);
        }

        $body = wp_remote_retrieve_body($response);
        $content_type = wp_remote_retrieve_header($response, 'content-type');

        // Set headers and output the image
        header('Content-Type: ' . $content_type);
        echo $body; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Binary image data
        exit;
    }

    /**
     * Get options
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */
    function frontis_get_global_settings(\WP_REST_Request $request)
    {

        $post_id = $request->get_param('post_id');
        $template_id = $request->get_param('template_id');

        // Only header & footer settings
        $default_settings = array(
            'disableHeader' => false,
            'disableFooter' => false,
        );

        // 1. Global option table
        $global_settings = get_option('frontis_theme_options', $default_settings);

        // 2. Template override
        $template_settings = $template_id ? get_post_meta($template_id, '_frontis_template_settings', true) : [];
        if (!is_array($template_settings)) {
            $template_settings = [];
        }

        // 3. Page/Post override
        $post_settings = $post_id ? get_post_meta($post_id, '_frontis_page_settings', true) : [];
        if (!is_array($post_settings)) {
            $post_settings = [];
        }

        // Priority: default < global < template < post
        $final_settings = array_merge(
            $default_settings,
            $global_settings,
            $template_settings,
            $post_settings
        );

        return rest_ensure_response($final_settings);
    }

    /**
     * Update global settings
     */
    function frontis_update_global_settings(\WP_REST_Request $request)
    {

        $scope = $request->get_param('scope'); // global|template|post
        $id = $request->get_param('id');
        $fields = $request->get_param('setting') ?: [];

        if (empty($scope)) {
            return new \WP_Error('missing_scope', 'Scope parameter is required');
        }

        // Only valid fields
        $valid_fields = array(
            'disableHeader' => filter_var($fields['disableHeader'] ?? false, FILTER_VALIDATE_BOOLEAN),
            'disableFooter' => filter_var($fields['disableFooter'] ?? false, FILTER_VALIDATE_BOOLEAN),
        );

        if ('global' === $scope) {
            update_option('frontis_theme_options', $valid_fields);
        } elseif ('template' === $scope && $id) {
            update_post_meta((int) $id, '_frontis_template_settings', $valid_fields);
        } elseif ('post' === $scope && $id) {
            update_post_meta((int) $id, '_frontis_page_settings', $valid_fields);
        }

        return rest_ensure_response('success');
    }

    function frontis_get_post_template_data(\WP_REST_Request $request)
    {
        $post_id = $request->get_param('id');

        // Validate post_id
        if (empty($post_id) || !is_numeric($post_id)) {
            return new \WP_Error(
                'invalid_post_id',
                __('Invalid or missing post ID.', 'frontis-blocks'),
                array('status' => 400)
            );
        }

        // Get template ID for this post
        $template_id = Helper::get_template_id($post_id);

        // If template ID is not found, return empty array
        if (empty($template_id)) {
            return rest_ensure_response([]);
        }

        // Retrieve post meta for the template
        $settings = get_post_meta($template_id, '_frontis_template_settings', true);

        // Return empty array if no settings found, or the settings themselves
        return rest_ensure_response($settings ? $settings : []);
    }

    /**
     * Provide the bundled Font Awesome icons list to the editor UI.
     */
    public function get_icons()
    {
        $data = include FB_PLUGIN_PATH . 'assets/fontawesome/icons.php';
        return $data;
    }

    /**
     * Validate color in HEX format.
     *
     * @param string $color The color to validate.
     * @return string|null Returns the validated color or null if invalid.
     */
    function validate_color($color)
    {
        if (preg_match('/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/', $color)) {
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

    public function frontis_get_template_settings(\WP_REST_Request $request)
    {
        $post_id = absint($request->get_param('post_id'));

        if (!$post_id) {
            return new \WP_Error(
                'invalid_post_id',
                __('Invalid or missing post ID.', 'frontis-blocks'),
                array('status' => 400)
            );
        }

        $settings = get_post_meta($post_id, '_frontis_template_settings', true);

        return rest_ensure_response(is_array($settings) ? $settings : []);
    }

    /**
     * Update template settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */
    public function frontis_update_template_settings(\WP_REST_Request $request)
    {
        $post_id = absint($request->get_param('post_id'));

        if (!$post_id) {
            return new \WP_Error(
                'invalid_post_id',
                __('Invalid or missing post ID.', 'frontis-blocks'),
                array('status' => 400)
            );
        }

        $fields = (array) $request->get_param('setting');

        // Ensure boolean values are properly saved (not converted to empty strings)
        // WordPress update_post_meta can have issues with false values
        foreach ($fields as $key => $value) {
            if ($value === false || $value === 'false' || $value === 0 || $value === '0') {
                $fields[$key] = false; // Explicitly set to false
            } elseif ($value === true || $value === 'true' || $value === 1 || $value === '1') {
                $fields[$key] = true; // Explicitly set to true
            }
        }

        $result = update_post_meta($post_id, '_frontis_template_settings', $fields);

        // Verify the save
        $saved_settings = get_post_meta($post_id, '_frontis_template_settings', true);

        return rest_ensure_response('success');
    }

    /**
     * Get page/post settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */
    public function frontis_get_page_settings(\WP_REST_Request $request)
    {
        $post_id = absint($request->get_param('post_id'));

        if (!$post_id) {
            return new \WP_Error(
                'invalid_post_id',
                __('Invalid or missing post ID.', 'frontis-blocks'),
                array('status' => 400)
            );
        }

        // Get page/post settings from meta
        $settings = get_post_meta($post_id, '_frontis_page_settings', true);

        return rest_ensure_response(is_array($settings) ? $settings : []);
    }

    /**
     * Update page/post settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     * @return \WP_REST_Response|\WP_Error Response object on success, or WP_Error object on failure.
     */
    public function frontis_update_page_settings(\WP_REST_Request $request)
    {
        $post_id = absint($request->get_param('post_id'));

        if (!$post_id) {
            return new \WP_Error(
                'invalid_post_id',
                __('Invalid or missing post ID.', 'frontis-blocks'),
                array('status' => 400)
            );
        }

        $fields = (array) $request->get_param('setting');

        // Ensure boolean values are properly saved (not converted to empty strings)
        foreach ($fields as $key => $value) {
            if ($value === false || $value === 'false' || $value === 0 || $value === '0') {
                $fields[$key] = false; // Explicitly set to false
            } elseif ($value === true || $value === 'true' || $value === 1 || $value === '1') {
                $fields[$key] = true; // Explicitly set to true
            }
        }

        $result = update_post_meta($post_id, '_frontis_page_settings', $fields);

        // Verify the save
        $saved_settings = get_post_meta($post_id, '_frontis_page_settings', true);

        return rest_ensure_response('success');
    }

    /**
     * Check if meta exists
     */
    public function frontis_meta_exists(\WP_REST_Request $request)
    {
        $post_id = absint($request->get_param('post_id'));
        $key = $request->get_param('key');

        if (!$post_id || !$key) {
            return new \WP_Error(
                'invalid_meta_exists_params',
                __('Missing post_id or key.', 'frontis-blocks'),
                array('status' => 400)
            );
        }

        $exists = metadata_exists('post', $post_id, $key);

        return rest_ensure_response(
            array(
                'exists' => (bool) $exists,
            )
        );
    }

    /**
     * Handle the save option REST API endpoint
     *
     * @param WP_REST_Request
     * @return WP_REST_Response|WP_Error
     */
    public function save_option_endpoint($request)
    {
        $nonce = $request->get_param('nonce');
        if (!wp_verify_nonce($nonce, 'fb_save_settings')) {
            return new \WP_Error('invalid_nonce', 'Invalid nonce', ['status' => 403]);
        }

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

    public function get_options_endpoint($request)
    {
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

    public function enqueue_editor_assets()
    {
        // Skip loading plugin assets on SureCart product edit page to avoid conflicts.
        if (isset($_GET['page']) && $_GET['page'] === 'sc-products') {
            return;
        }

        $suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '';
        $theme = wp_get_theme();

        $script_path = FB_PLUGIN_PATH . 'assets/admin/sidebar' . $suffix . '.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/sidebar.asset.php';
        $script_asset = file_exists($script_asset_path) ? require($script_asset_path) : array('dependencies' => array(), 'version' => filemtime($script_path));

        wp_enqueue_script('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar.js', $script_asset['dependencies'], '1.0.0', true);
        wp_localize_script('frontis-blocks-admin-sidebar', 'frontisBlocksAdminSidebar', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('fb_sidebar_nonce'),
            'frontis_theme' => 'Frontis' == $theme->name || 'Frontis' == $theme->parent_theme
        ));

        wp_enqueue_style('frontis-blocks-admin-sidebar', FB_PLUGIN_URL . 'assets/admin/sidebar' . $suffix . '.css', array(), '1.0.0');
    }

    public function template_proxy()
    {
        // 1. Detect if this is a proxy request through various methods
        $is_proxy = false;
        
        // Method A: Query Variable (from rewrite rule)
        if (get_query_var('template_proxy')) {
            $is_proxy = true;
        }
        // Method B: Direct GET parameter
        elseif (isset($_GET['template_proxy']) && ('1' === (string)$_GET['template_proxy'] || 'true' === strtolower((string)$_GET['template_proxy']))) {
            $is_proxy = true;
        }
        // Method C: Path detection (failsafe for rewrite rules)
        elseif (strpos($_SERVER['REQUEST_URI'], '/template-proxy/') !== false) {
            $is_proxy = true;
        }

        if (!$is_proxy) {
            return;
        }

        // 2. Get and validate the remote URL
        $remote_url = isset($_GET['url']) ? $_GET['url'] : get_query_var('url');

        if (empty($remote_url)) {
            return; // Let WP handle it (likely a 404 or home) if no URL is provided
        }

        // Security: Only allow admins to use this proxy
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized. Only administrators can use the preview proxy.', 403);
        }

        // Note: PHP automatically decodes $_GET once. 
        $remote_url = esc_url_raw($remote_url);

        // Security: Validate URL format and scheme
        $parsed_url = parse_url($remote_url);
        if (!$parsed_url || !isset($parsed_url['scheme']) || !in_array($parsed_url['scheme'], ['http', 'https'], true)) {
            wp_die('Invalid URL scheme in preview URL. Only http and https are allowed.', 400);
        }

        // Security: Domain Allowlist
        $allowed_hosts = ['demo.frontiswp.com', 'frontistest.1wp.site', 'frontiswp.com'];
        if (defined('PORTAL_API')) {
            $host = parse_url(PORTAL_API, PHP_URL_HOST);
            if ($host) $allowed_hosts[] = $host;
        }
        if (defined('WORDPRESS_SYNC_API')) {
            $host = parse_url(WORDPRESS_SYNC_API, PHP_URL_HOST);
            if ($host) $allowed_hosts[] = $host;
        }

        $remote_host = strtolower($parsed_url['host'] ?? '');

        // Allow any subdomain of allowed hosts for flexibility
        $is_allowed = false;
        foreach ($allowed_hosts as $allowed_host) {
            $allowed_host = strtolower($allowed_host);
            if ($remote_host === $allowed_host) {
                $is_allowed = true;
                break;
            }
            
            // Subdomain check (compatible with PHP < 8.0)
            $dot_allowed_host = '.' . $allowed_host;
            if (substr($remote_host, -strlen($dot_allowed_host)) === $dot_allowed_host) {
                $is_allowed = true;
                break;
            }
        }

        if (!$is_allowed) {
             wp_die('Domain not allowed: ' . esc_html($remote_host) . '. Please ensure the domain is in the allowlist.', 403);
        }

            // Security: Use wp_safe_remote_get to prevent SSRF to private IPs
            $response = wp_safe_remote_get($remote_url, [
                'timeout'     => 30,
                'redirection' => 5,
                'sslverify'   => false, // Allow self-signed or invalid certs for preview if needed
                'user-agent'  => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            ]);

            if (is_wp_error($response)) {
                wp_die('Proxy request failed: ' . esc_html($response->get_error_message()));
            }

            $body = wp_remote_retrieve_body($response);
            $content_type = wp_remote_retrieve_header($response, 'content-type');
            
            // Remove headers that might prevent iframing or cause CORS issues in the preview
            header_remove('X-Frame-Options');
            header_remove('Content-Security-Policy');
            header_remove('X-Content-Type-Options');

            // Set the content type from the remote response
            header("Content-Type: " . ($content_type ?: 'text/html; charset=UTF-8'));
            
            // SUPER FIX: Add CORS headers to the proxied response so the browser allows fonts/scripts/fetch
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
            header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-WP-Nonce");
            
            // Add custom header to indicate proxying
            header("X-Proxy-By: FrontisBlocks");

            // If it's HTML or JS/JSON, rewrite URLs to go through the proxy
            $is_html = empty($content_type) || strpos($content_type, 'text/html') !== false;
            $is_js_json = strpos($content_type, 'javascript') !== false || strpos($content_type, 'json') !== false;

            if ($is_html || $is_js_json) {
                $remote_origin = $parsed_url['scheme'] . '://' . $parsed_url['host'];
                $proxy_url_base = home_url('/template-proxy/?template_proxy=1&url=');
                
                // We need to be careful with double-proxying, so we only replace the remote origin 
                // when it's not already preceded by our proxy URL.
                // For simplicity and "super" effect, we'll replace the remote origin with the proxied version.
                
                // Handle both normal and escaped versions (for JS/JSON)
                $search = [$remote_origin, str_replace('/', '\\/', $remote_origin)];
                $replace = [$proxy_url_base . $remote_origin, str_replace('/', '\\/', $proxy_url_base . $remote_origin)];
                
                $body = str_replace($search, $replace, $body);

                // For HTML, still add the <base> tag as a safety measure for any missed relative URLs
                if ($is_html) {
                    $base_tag = '<base href="' . esc_url($remote_url) . '">';
                    if (stripos($body, '<head>') !== false) {
                        $body = preg_replace('/(<head[^>]*>)/i', '$1' . $base_tag, $body);
                    } else {
                        $body = $base_tag . $body;
                    }
                    
                    // Also strip any existing X-Frame-Options or CSP meta tags in the HTML
                    $body = preg_replace('/<meta[^>]+http-equiv=["\'](X-Frame-Options|Content-Security-Policy)["\'][^>]*>/i', '', $body);
                }
            }

            echo $body; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            exit;
    }
}
