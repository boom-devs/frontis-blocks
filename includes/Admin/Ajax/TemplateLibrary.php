<?php

namespace FrontisBlocks\Admin\Ajax;

if (!defined('ABSPATH')) {
    exit;
}

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Core\PclZip;

if (!function_exists('request_filesystem_credentials')) {
    require_once ABSPATH . 'wp-admin/includes/file.php';
}

/**
 * Settings
 *
 * @package FrontisBlocks
 */
class TemplateLibrary extends AjaxBase
{
    use Singleton;

    public function register_ajax_events()
    {
        $ajax_events = [
            'update_option',
            'get_option',
            'update_site_settings',
            'demo_import',
            'upload_files',
            'install_active_plugins',
            'active_theme',
            'import_headers_footers',
            'import_templates',
            'pages_import',
            'posts_import',
        ];

        $this->init_ajax_events($ajax_events);
    }

    public function check_permission()
    {
        if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
            wp_send_json_error(['message' => 'Invalid nonce'], 400);
            return;
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Insufficient permissions'], 403);
            return;
        }
    }

    // =========================================================================
    // CORE CONTENT PIPELINE  (mirrors DemoContentImporter exactly)
    // =========================================================================

    /**
     * Prepare raw POST content for wp_insert_post / wp_update_post.
     *
     * $_POST values arrive magic-quoted by WordPress. Steps:
     *   1. wp_unslash()  – strip the magic-quotes layer added by WP.
     *   2. replace_media_urls() / replace_demo_urls() – URL rewrites on clean string.
     *   3. wp_slash()    – re-add ONE level of slashes so that wp_insert_post's
     *                      internal wp_unslash() cancels them out and saves the
     *                      Gutenberg block JSON backslashes intact.
     *
     * Content that arrives already decoded (e.g. from json_decode on a POST field
     * that itself was JSON) should be passed in AFTER json_decode, then go through
     * steps 2 & 3 only — call prepare_decoded_content() in that case.
     */
    private function prepare_post_content( string $raw ): string {
        return wp_slash( wp_unslash( $raw ) );
    }

    /**
     * Prepare content that was already decoded (e.g. via json_decode on a POST field).
     * Skips the wp_unslash step — only applies wp_slash before insert.
     */
    private function prepare_decoded_content( string $content ): string {
        return wp_slash( $content );
    }

    // =========================================================================
    // OPTION HELPERS
    // =========================================================================

    public function update_option()
    {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? sanitize_key($_POST['option_name']) : '';
        $value       = isset($_POST['value'])        ? sanitize_text_field($_POST['value']) : '';

        $updated = update_option("fb_$option_name", $value);

        if ($updated) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to update option']);
        }
    }

    public function get_option()
    {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? sanitize_key($_POST['option_name']) : '';
        $value       = get_option("fb_$option_name");

        if ($value) {
            wp_send_json_success(['message' => 'Option retrieved successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to get option']);
        }
    }

    // =========================================================================
    // UPLOAD FILES
    // =========================================================================

    public function upload_files()
    {
        $this->check_permission();
        global $wpdb;

        $zip_url = isset($_POST['uploads']) ? esc_url_raw($_POST['uploads']) : '';

        if (!$zip_url) {
            wp_send_json_error(['message' => 'No uploads URL provided'], 400);
        }

        $uploads_dir = wp_upload_dir();
        $destination = trailingslashit($uploads_dir['basedir']);

        if (!is_dir($destination)) {
            wp_mkdir_p($destination);
        }

        $tempZipFile = tempnam(sys_get_temp_dir(), 'downloaded_zip_');

        try {
            $response = wp_safe_remote_get($zip_url, [
                'timeout'   => 300,
                'sslverify' => true,
            ]);

            if (is_wp_error($response))
                throw new \Exception('Download Error: ' . $response->get_error_message());

            $httpCode = wp_remote_retrieve_response_code($response);
            if ($httpCode !== 200)
                throw new \Exception('Failed to download zip file');

            $data = wp_remote_retrieve_body($response);
            if (empty($data))
                throw new \Exception('Downloaded file is empty');

            file_put_contents($tempZipFile, $data);

            $zip     = new PclZip($tempZipFile);
            $content = $zip->listContent();
            if ($content == 0)
                throw new \Exception('Failed to read zip content');

            $extracted_files      = [];
            $dangerous_extensions = ['php','php3','php4','php5','php7','php8','phtml','phar','exe','sh','bat','htaccess'];

            foreach ($content as $file_info) {
                $filePath = $destination . $file_info['filename'];

                if (!empty($file_info['folder'])) {
                    if (!is_dir($filePath)) wp_mkdir_p($filePath);
                    continue;
                }

                $ext = strtolower(pathinfo($file_info['filename'], PATHINFO_EXTENSION));
                if (in_array($ext, $dangerous_extensions)) continue;

                $result = $zip->extractByIndex(
                    $file_info['index'],
                    PCLZIP_OPT_PATH, $destination,
                    PCLZIP_OPT_REPLACE_NEWER
                );

                if ($result != 0 && file_exists($filePath)) {
                    $extracted_files[] = $file_info['filename'];
                }
            }

            unlink($tempZipFile);

            require_once ABSPATH . 'wp-admin/includes/image.php';
            require_once ABSPATH . 'wp-admin/includes/media.php';
            require_once ABSPATH . 'wp-admin/includes/file.php';

            $registered_count = 0;
            foreach ($extracted_files as $relative_file_path) {
                $full_path = $destination . $relative_file_path;

                if (!file_exists($full_path) || is_dir($full_path)) continue;

                if (preg_match('/-(\d+)x(\d+)\.(jpg|jpeg|png|gif|webp|svg|avif)$/i', basename($full_path))) continue;

                $existing_attachment = $wpdb->get_var($wpdb->prepare(
                    "SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_wp_attached_file' AND meta_value = %s LIMIT 1",
                    $relative_file_path
                ));

                if ($existing_attachment) continue;

                $filetype   = wp_check_filetype(basename($full_path), null);
                $attachment = [
                    'guid'           => $uploads_dir['baseurl'] . '/' . $relative_file_path,
                    'post_mime_type' => $filetype['type'],
                    'post_title'     => preg_replace('/\.[^.]+$/', '', basename($full_path)),
                    'post_content'   => '',
                    'post_status'    => 'inherit',
                ];

                $attach_id = wp_insert_attachment($attachment, $full_path);

                if (!is_wp_error($attach_id)) {
                    $attach_data = wp_generate_attachment_metadata($attach_id, $full_path);
                    wp_update_attachment_metadata($attach_id, $attach_data);
                    $registered_count++;
                }
            }

            wp_send_json_success([
                'message'    => 'Files extracted and registered successfully',
                'path'       => $destination,
                'files'      => $extracted_files,
                'count'      => count($extracted_files),
                'registered' => $registered_count,
            ]);

        } catch (\Exception $e) {
            if (file_exists($tempZipFile)) unlink($tempZipFile);
            wp_send_json_error(['message' => $e->getMessage()], 500);
        }
    }

    // =========================================================================
    // THEME
    // =========================================================================

    public function active_theme()
    {
        $this->check_permission();

        $theme_slug = !empty($_POST['theme_slug']) ? sanitize_text_field($_POST['theme_slug']) : 'frontis';

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/misc.php';
        require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        require_once ABSPATH . 'wp-admin/includes/theme.php';
        require_once ABSPATH . 'wp-admin/includes/template.php';

        $wp_theme = wp_get_theme($theme_slug);

        if (!$wp_theme->exists()) {
            $theme_information = wp_remote_get("https://api.wordpress.org/themes/info/1.2/?action=theme_information&request[slug]={$theme_slug}");

            if (is_wp_error($theme_information)) {
                wp_send_json_error(['message' => 'Theme info request failed: ' . $theme_information->get_error_message()]);
            }

            $theme_data   = json_decode(wp_remote_retrieve_body($theme_information), true);
            $download_url = $theme_data['download_link'] ?? null;

            if (!$download_url) {
                wp_send_json_error(['message' => 'Theme download link not found from wordpress.org']);
            }

            $upgrader      = new \Theme_Upgrader(new \Automatic_Upgrader_Skin());
            $install_result = $upgrader->install($download_url);

            if (!$install_result) {
                wp_send_json_error(['message' => 'Theme installation failed']);
            }
        }

        switch_theme($theme_slug);

        wp_send_json_success(['theme' => $theme_slug, 'activated' => true]);
    }

    // =========================================================================
    // PLUGINS
    // =========================================================================

    public function install_active_plugins()
    {
        $this->check_permission();

        $plugins = json_decode(stripslashes($_POST['plugins'] ?? '[]'), true);
        if (!is_array($plugins) || empty($plugins)) {
            wp_send_json_error(['message' => 'No plugins provided']);
        }

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/misc.php';
        require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
        require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
        require_once ABSPATH . 'wp-admin/includes/update.php';

        $results     = [];
        $all_plugins = get_plugins();

        foreach ($plugins as $plugin) {
            $slug             = sanitize_text_field($plugin['slug']);
            $version          = sanitize_text_field($plugin['version'] ?? '');
            $plugin_main_file = $slug . '/' . $slug . '.php';

            $is_installed      = false;
            $installed_version = null;

            foreach ($all_plugins as $path => $meta) {
                if (strpos($path, $slug . '/') === 0) {
                    $is_installed      = true;
                    $installed_version = $meta['Version'] ?? null;
                    $plugin_main_file  = $path;
                    break;
                }
            }

            $need_install = !$is_installed || ($version && $installed_version && version_compare($installed_version, $version, '<'));

            if ($need_install) {
                $download_url  = $version
                    ? "https://downloads.wordpress.org/plugin/{$slug}.{$version}.zip"
                    : "https://downloads.wordpress.org/plugin/{$slug}.zip";

                $upgrader      = new \Plugin_Upgrader(new \Automatic_Upgrader_Skin());
                $install_result = $upgrader->install($download_url);

                if (!$install_result) {
                    $results[$slug] = 'install_failed';
                    $all_plugins    = get_plugins();
                    continue;
                }

                $all_plugins = get_plugins();
                $found       = false;
                foreach ($all_plugins as $path => $meta) {
                    if (strpos($path, $slug . '/') === 0) {
                        $plugin_main_file = $path;
                        $found = true;
                        break;
                    }
                }
                if (!$found) {
                    $results[$slug] = 'installed_but_entry_not_found';
                    continue;
                }
            }

            if (!is_plugin_active($plugin_main_file)) {
                $activate_result = activate_plugin($plugin_main_file);
                $results[$slug]  = is_wp_error($activate_result)
                    ? 'activation_failed: ' . $activate_result->get_error_message()
                    : 'installed_and_activated';
            } else {
                $results[$slug] = $need_install ? 'installed_and_already_active' : 'already_active';
            }
        }

        wp_send_json_success(['plugins' => $results]);
    }

    // =========================================================================
    // PAGES IMPORT  — mirrors DemoContentImporter pipeline
    // =========================================================================

    public function pages_import()
    {
        $this->check_permission();

        $title           = isset($_POST['title'])    ? sanitize_text_field($_POST['title'])   : '';
        $slug            = isset($_POST['slug'])     ? sanitize_title($_POST['slug'])          : '';
        $template        = isset($_POST['template']) ? sanitize_text_field($_POST['template']) : '';
        $badge           = isset($_POST['badge'])    ? sanitize_text_field($_POST['badge'])    : '';
        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url'])         : '';
        $uploads_updated = isset($_POST['uploads_updated'])
            ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;

        if (empty($title)) {
            wp_send_json_error(['message' => 'Title is required']);
        }

        /*
         * CONTENT PIPELINE (identical logic to DemoContentImporter):
         *
         * $_POST arrives magic-quoted by WordPress.
         * 1. wp_unslash()          — remove WP magic-quote layer.
         * 2. URL replacement       — rewrite media/demo URLs on the clean string.
         * 3. wp_slash()            — re-add one slash level so wp_insert_post's
         *                           internal wp_unslash() cancels it out and the
         *                           Gutenberg block JSON backslashes survive intact.
         */
       
        // $import_demo = isset($_POST['import_demo']) ? filter_var($_POST['import_demo'], FILTER_VALIDATE_BOOLEAN) : false;

        // Dynamic Remote URL based on site_url and slug
        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/content/' . $slug;

        // Log the remote URL for debugging
        error_log('Frontis Blocks: Importing from remote URL: ' . $remote_url);

        $response = wp_remote_get($remote_url, [
            'timeout' => 90,
            'headers' => ['Accept' => 'application/json'],
        ]);

        if (is_wp_error($response)) {
            wp_send_json_error(['message' => 'Import failed for ' . $remote_url . ': ' . $response->get_error_message()]);
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body        = wp_remote_retrieve_body($response);

        if (200 !== $status_code || empty($body)) {
            wp_send_json_error(['message' => 'Import failed (HTTP ' . $status_code . ') for URL: ' . $remote_url]);
        }

        $payload = json_decode($body, true);

        if (JSON_ERROR_NONE !== json_last_error() || !is_array($payload)) {
            wp_send_json_error(['message' => 'Invalid JSON payload from ' . $remote_url]);
        }

        if (empty($payload['success'])) {
            wp_send_json_error(['message' => 'API returned success=false for ' . $remote_url]);
        }

        $title   = (string) ($payload['title']   ?? $title);
        $slug    = (string) ($payload['slug']    ?? $slug);
        $content = (string) ($payload['content'] ?? '');

        if (empty(trim($content))) {
            wp_send_json_error(['message' => 'Import failed: Content is empty']);
        }

        $uploads_updated = isset($_POST['uploads_updated']) ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

        // Process content (URL rewrites)
        if ($uploads_updated && !empty($site_url)) {
            $content = $this->replace_media_urls($content, trailingslashit($site_url));
        }
        $content = $this->replace_demo_urls($content, $site_url);

        $existing = get_page_by_path($slug, OBJECT, 'page');

        $post_data = [
            'post_title'   => wp_strip_all_tags($title),
            'post_name'    => sanitize_title($slug),
            'post_content' => wp_slash($content),
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ];

        if ($existing && !empty($existing->ID)) {
            $post_data['ID'] = $existing->ID;
            $page_id         = wp_update_post($post_data, true);
            $action          = 'updated';
        } else {
            $page_id = wp_insert_post($post_data, true);
            $action  = 'created';
        }

        if (is_wp_error($page_id)) {
            wp_send_json_error(['message' => 'Import failed: ' . $page_id->get_error_message()]);
        }

        if (!empty($_POST['template'])) {
            update_post_meta($page_id, '_wp_page_template', sanitize_text_field($_POST['template']));
        }

        $badge = isset($_POST['badge']) ? sanitize_text_field($_POST['badge']) : '';
        if ($badge === 'front-page') {
            update_option('page_on_front', $page_id);
            update_option('show_on_front', 'page');
        } elseif ($badge === 'blog-page') {
            update_option('page_for_posts', $page_id);
        }

        if (!empty($badge)) {
            update_post_meta($page_id, '_fb_page_badge', $badge);
        }

        update_post_meta($page_id, 'fb_page_assets_generation', 'compiling');

        wp_send_json_success([
            'message'  => sprintf('Page "%s" has been %s successfully', $title, $action),
            'page_id'  => $page_id,
            'title'    => $title,
            'slug'     => $slug,
            'template' => $template,
            'badge'    => $badge,
            'action'   => $action,
        ]);
    }

    // =========================================================================
    // POSTS IMPORT  — same pipeline as pages_import
    // =========================================================================

    public function posts_import()
    {
        $this->check_permission();

        $title           = sanitize_text_field($_POST['title']    ?? '');
        $slug            = sanitize_title($_POST['slug']           ?? '');
        $template        = sanitize_text_field($_POST['template']  ?? '');
        $uploads_updated = isset($_POST['uploads_updated'])
            ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

        if (empty($title)) {
            wp_send_json_error(['message' => 'Post title is required']);
        }

        // Dynamic Remote URL based on site_url and slug
        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/content/' . $slug;

        // Log the remote URL for debugging
        error_log('Frontis Blocks: Importing from remote URL: ' . $remote_url);

        $response = wp_remote_get($remote_url, [
            'timeout' => 90,
            'headers' => ['Accept' => 'application/json'],
        ]);

        if (is_wp_error($response)) {
            wp_send_json_error(['message' => 'Import failed for ' . $remote_url . ': ' . $response->get_error_message()]);
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body        = wp_remote_retrieve_body($response);

        if (200 !== $status_code || empty($body)) {
            wp_send_json_error(['message' => 'Import failed (HTTP ' . $status_code . ') for URL: ' . $remote_url]);
        }

        $payload = json_decode($body, true);

        if (JSON_ERROR_NONE !== json_last_error() || !is_array($payload)) {
            wp_send_json_error(['message' => 'Invalid JSON payload from ' . $remote_url]);
        }

        if (empty($payload['success'])) {
            wp_send_json_error(['message' => 'API returned success=false for ' . $remote_url]);
        }

        $title   = (string) ($title);
        $slug    = (string) ($slug);
        $content = (string) ($payload['content'] ?? '');

        if (empty(trim($content))) {
            wp_send_json_error(['message' => 'Import failed: Content is empty']);
        }

        $uploads_updated = isset($_POST['uploads_updated']) ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

        if ($uploads_updated && !empty($site_url)) {
            $content = $this->replace_media_urls($content, trailingslashit($site_url));
        }
        $content = $this->replace_demo_urls($content, $site_url);

        if (empty($slug)) $slug = sanitize_title($title);

        $existing = get_page_by_path($slug, OBJECT, 'post');

        $post_data = [
            'post_title'    => wp_strip_all_tags($title),
            'post_name'     => sanitize_title($slug),
            'post_content'  => wp_slash($content), // ← matches DemoContentImporter
            'post_status'   => 'publish',
            'post_type'     => 'post',
            'post_date'     => current_time('mysql'),
            'post_date_gmt' => current_time('mysql', 1),
        ];

        if ($existing && !empty($existing->ID)) {
            $post_data['ID'] = $existing->ID;
            $post_id         = wp_update_post($post_data, true);
            $action          = 'updated';
        } else {
            $post_id = wp_insert_post($post_data, true);
            $action  = 'created';
        }

        if (is_wp_error($post_id)) {
            wp_send_json_error(['message' => $post_id->get_error_message()]);
        }

        if (!empty($template)) {
            update_post_meta($post_id, '_wp_page_template', $template);
        }

        update_post_meta($post_id, 'fb_page_assets_generation', 'compiling');

        if (class_exists('FrontisBlocks\Utils\Helper')) {
            Helper::insert_job($post_id, $title . '-' . $post_id);
        }

        wp_send_json_success([
            'message'  => sprintf('Post "%s" has been %s successfully', $title, $action),
            'post_id'  => $post_id,
            'title'    => $title,
            'slug'     => $slug,
            'template' => $template ?: 'default',
            'action'   => $action,
        ]);
    }

    // =========================================================================
    // HEADERS & FOOTERS IMPORT  — same pipeline
    // =========================================================================

    public function import_headers_footers()
    {
        $this->check_permission();

        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';
        $uploads_updated = isset($_POST['uploads_updated'])
            ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;

        if (empty($site_url)) {
            wp_send_json_error(['message' => 'Site URL is required']);
        }

        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/layout';
        $response   = wp_remote_get($remote_url, ['timeout' => 90]);

        if (is_wp_error($response)) {
            wp_send_json_error(['message' => 'Import failed: ' . $response->get_error_message()]);
        }

        $payload = json_decode(wp_remote_retrieve_body($response), true);
        if (!$payload || !is_array($payload)) {
            wp_send_json_error(['message' => 'Invalid JSON payload from ' . $remote_url]);
        }

        $headers = $payload['header'] ?? [];
        $footers = $payload['footer'] ?? [];

        $navigation_mapping = [];
        $stats = [
            'nav_created'  => 0,
            'nav_skipped'  => 0,
            'part_created' => 0,
            'part_skipped' => 0,
            'errors'       => [],
        ];

        $parts_to_process = [
            'header' => $headers,
            'footer' => $footers,
        ];

        // ── Step 1: Navigations ───────────────────────────────────────────────
        foreach ($parts_to_process as $items) {
            foreach ($items as $item) {
                if (empty($item['navigations']) || !is_array($item['navigations'])) continue;

                foreach ($item['navigations'] as $nav) {
                    $old_id  = $nav['id']      ?? null;
                    $content = $nav['content'] ?? '';
                    $title   = $nav['title']   ?? ('Imported Nav ' . $old_id);

                    if (!$old_id || empty($content)) continue;

                    if ($uploads_updated && !empty($site_url)) {
                        $content = $this->replace_media_urls($content, trailingslashit($site_url));
                    }
                    $content = $this->replace_demo_urls($content, $site_url);
                    $content = $this->clean_navigation_block_content($content);

                    $slug     = 'imported-nav-' . $old_id;
                    $existing = get_page_by_path($slug, OBJECT, 'wp_navigation');

                    if ($existing) {
                        wp_update_post([
                            'ID'           => $existing->ID,
                            'post_content' => wp_slash($content),
                            'post_title'   => $title,
                        ]);
                        wp_set_object_terms($existing->ID, get_stylesheet(), 'wp_theme');
                        $navigation_mapping[$old_id] = $existing->ID;
                        $stats['nav_skipped']++;
                    } else {
                        $new_id = wp_insert_post([
                            'post_title'   => $title,
                            'post_name'    => $slug,
                            'post_content' => wp_slash($content),
                            'post_status'  => 'publish',
                            'post_type'    => 'wp_navigation',
                        ]);
                        if (!is_wp_error($new_id)) {
                            wp_set_object_terms($new_id, get_stylesheet(), 'wp_theme');
                            $navigation_mapping[$old_id] = $new_id;
                            $stats['nav_created']++;
                        }
                    }
                }
            }
        }

        // ── Step 2: Template Parts ───────────────────────────────────────────
        foreach ($parts_to_process as $area => $items) {
            foreach ($items as $item) {
                $slug    = $item['slug']    ?? '';
                $title   = $item['title']   ?? $slug;
                $content = $item['content'] ?? '';

                if (empty($slug)) continue;

                if ($uploads_updated && !empty($site_url)) {
                    $content = $this->replace_media_urls($content, trailingslashit($site_url));
                }
                $content = $this->replace_demo_urls($content, $site_url);
                $content = $this->replace_navigation_refs($content, $navigation_mapping);
                $content = $this->replace_theme_refs($content);

                $existing = get_posts([
                    'post_type'      => 'wp_template_part',
                    'name'           => $slug,
                    'post_status'    => 'any',
                    'posts_per_page' => 1,
                    'tax_query'      => [[
                        'taxonomy' => 'wp_theme',
                        'field'    => 'slug',
                        'terms'    => get_stylesheet(),
                    ]],
                    'fields' => 'ids',
                ]);

                if (!empty($existing)) {
                    $id = $existing[0];
                    wp_update_post([
                        'ID'           => $id,
                        'post_content' => wp_slash($content),
                        'post_title'   => $title,
                    ]);
                    wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                    $stats['part_skipped']++;
                } else {
                    $id = wp_insert_post([
                        'post_title'   => $title,
                        'post_name'    => $slug,
                        'post_content' => wp_slash($content),
                        'post_status'  => 'publish',
                        'post_type'    => 'wp_template_part',
                    ]);
                    if (!is_wp_error($id)) {
                        wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                        wp_set_object_terms($id, $area, 'wp_template_part_area');
                        $stats['part_created']++;
                    } else {
                        $stats['errors'][] = $slug;
                    }
                }

                // Logo Detection
                if (!is_wp_error($id) && $id > 0) {
                    $logo_id = 0;
                    if (preg_match('/<!--\s+wp:site-logo\s+({.*?})\s+\/-->/s', $content, $logo_matches)) {
                        $logo_attrs = json_decode($logo_matches[1], true);
                        if (!empty($logo_attrs['id'])) $logo_id = (int) $logo_attrs['id'];
                    }
                    if (!$logo_id && preg_match('/<img[^>]+src=["\']([^"\']+)["\'][^>]*>/i', $content, $img_matches)) {
                        $logo_id = attachment_url_to_postid($img_matches[1]);
                    }
                    if ($logo_id) set_theme_mod('custom_logo', $logo_id);
                }
            }
        }

        wp_send_json_success([
            'message' => 'Headers & Footers imported successfully!',
            'stats'   => $stats,
            'mapping' => $navigation_mapping,
        ]);
    }

    private function replace_navigation_refs( string $content, array $mapping ): string {
        foreach ( $mapping as $old => $new ) {
            $old_str = preg_quote( (string) $old, '/' );
            $content = preg_replace( '/((\\\\*)"ref"(\\\\*)\s*:\s*)' . $old_str . '\b/', '${1}' . $new, $content );
        }
        return $content;
    }

    // =========================================================================
    // TEMPLATES IMPORT  — same pipeline as pages_import (optional remote JSON)
    // =========================================================================

    /**
     * Load templates from remote demo: {site_url}/wp-json/gb/v1/templates
     */
    private function fetch_remote_templates( string $site_url ): array {
        if ( empty( $site_url ) ) {
            return [];
        }

        $remote_url = untrailingslashit( $site_url ) . '/wp-json/gb/v1/templates';

        $response = wp_remote_get(
            $remote_url,
            [
                'timeout' => 90,
                'headers' => [ 'Accept' => 'application/json' ],
            ]
        );

        if ( is_wp_error( $response ) ) {
            error_log( 'FB Import: Templates REST failed: ' . $response->get_error_message() );
            return [];
        }

        $status = wp_remote_retrieve_response_code( $response );
        $body   = wp_remote_retrieve_body( $response );

        if ( 200 !== $status || empty( $body ) ) {
            error_log( 'FB Import: Templates REST HTTP ' . $status . ' for ' . $remote_url );
            return [];
        }

        $payload = json_decode( $body, true );

        if ( JSON_ERROR_NONE !== json_last_error() || ! is_array( $payload ) ) {
            error_log( 'FB Import: Invalid JSON from templates REST: ' . $remote_url );
            return [];
        }

        if ( empty( $payload['success'] ) || empty( $payload['templates'] ) || ! is_array( $payload['templates'] ) ) {
            return [];
        }

        return $payload['templates'];
    }

    public function import_templates()
    {
        $this->check_permission();

        /*
         * Prefer remote list (same idea as pages_import hitting gb/v1/content/{slug}):
         * GET {site_url}/wp-json/gb/v1/templates → templates[].content → wp_template post_content.
         * Fallback: templates JSON in POST (portal / legacy).
         */
        $mapping_raw   = isset($_POST['mapping'])   ? wp_unslash($_POST['mapping'])   : '[]';

        $mapping         = json_decode($mapping_raw,   true) ?: [];
        $uploads_updated = isset($_POST['uploads_updated'])
            ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

        if (!is_array($mapping)) $mapping = [];

        // When the portal sends no templates, load from demo REST (same pattern as pages_import).
        $templates = $this->fetch_remote_templates($site_url);

        if (!is_array($templates)) $templates = [];

        $created = 0;
        $skipped = 0;

        foreach ($templates as $tmpl) {
            $slug    = $tmpl['slug']    ?? '';
            $title   = $tmpl['title']   ?? $slug;
            $content = $tmpl['content'] ?? '';

            if (empty($slug)) continue;

            // Content from json_decode — already clean
            if ($uploads_updated && !empty($site_url)) {
                $content = $this->replace_media_urls($content, trailingslashit($site_url));
            }
            $content = $this->replace_demo_urls($content, $site_url);

            // Replace navigation refs
            $content = $this->replace_navigation_refs($content, $mapping);
            $content = $this->replace_theme_refs($content);

            error_log("FB Import: Template $title, slug $slug, length: " . strlen($content));

            $existing = get_posts([
                'post_type'      => 'wp_template',
                'name'           => $slug,
                'posts_per_page' => 1,
                'post_status'    => 'any',
                'fields'         => 'ids',
                'tax_query'      => [[
                    'taxonomy' => 'wp_theme',
                    'field'    => 'slug',
                    'terms'    => get_stylesheet(),
                ]],
            ]);

            if (!empty($existing)) {
                $update_res = wp_update_post([
                    'ID'           => $existing[0],
                    'post_content' => wp_slash($content), // ← DemoContentImporter pattern
                    'post_title'   => $title,
                ]);
                if ($update_res) {
                    wp_set_object_terms($existing[0], get_stylesheet(), 'wp_theme');
                    $skipped++;
                } else {
                    error_log("FB Import Error: Failed to update template $slug (ID: {$existing[0]})");
                }
            } else {
                $id = wp_insert_post([
                    'post_title'   => $title,
                    'post_name'    => $slug,
                    'post_content' => wp_slash($content), // ← DemoContentImporter pattern
                    'post_status'  => 'publish',
                    'post_type'    => 'wp_template',
                ]);
                if (!is_wp_error($id)) {
                    wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                    $created++;
                } else {
                    error_log("FB Import Error: Failed to insert template $slug - " . $id->get_error_message());
                }
            }
        }

        wp_send_json_success([
            'message' => 'Templates imported!',
            'created' => $created,
            'skipped' => $skipped,
        ]);
    }

    // =========================================================================
    // DEMO IMPORT (pattern importer)
    // =========================================================================

    public function demo_import()
    {
        $this->check_permission();

        if (!isset($_POST['json_data'])) {
            wp_send_json_error('No JSON data found');
            return;
        }

        $data    = json_decode(wp_unslash($_POST['json_data']), true);
        $content = $data['content'] ?? '';

        if (json_last_error() !== JSON_ERROR_NONE) {
            wp_send_json_error('Invalid JSON data');
            return;
        }

        $patterns = [
            'img' => '/<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i',
            'bg'  => '/background-image\s*:\s*url\((["\']?)([^"\')]+)\1\)/i',
        ];

        $all_img_srcs = [];

        foreach ($patterns as $type => $pattern) {
            preg_match_all($pattern, $content, $matches);
            $srcs = $matches[1] ?? $matches[2];

            if ($type === 'bg') {
                $srcs = array_map(function ($src) {
                    return str_replace('\\u0022', '', $src);
                }, $srcs);
            }

            $all_img_srcs = array_merge($all_img_srcs, array_filter($srcs));
        }

        foreach ($all_img_srcs as $img_src) {
            $response = wp_safe_remote_get($img_src);
            if (is_wp_error($response)) continue;

            $body     = wp_remote_retrieve_body($response);
            $filename = basename($img_src);
            $upload   = wp_upload_bits($filename, null, $body);

            if ($upload['error'] || !file_exists($upload['file'])) continue;

            $wp_filetype = wp_check_filetype($filename, null);
            $attachment  = [
                'post_mime_type' => $wp_filetype['type'],
                'post_title'     => sanitize_file_name($filename),
                'post_content'   => '',
                'post_status'    => 'inherit',
            ];
            $attach_id = wp_insert_attachment($attachment, $upload['file']);

            require_once ABSPATH . 'wp-admin/includes/image.php';
            $attached_data = wp_generate_attachment_metadata($attach_id, $upload['file']);
            wp_update_attachment_metadata($attach_id, $attached_data);

            $content = str_replace($img_src, $upload['url'], $content);
        }

        wp_send_json_success([
            'status'  => 'success',
            'message' => __('Pattern imported successfully!', 'frontis-blocks'),
            'content' => $content,
        ]);
    }

    // =========================================================================
    // SITE SETTINGS
    // =========================================================================

    public function update_site_settings()
    {
        $this->check_permission();

        $site_name    = isset($_POST['siteName'])    ? sanitize_text_field($_POST['siteName'])    : '';
        $site_tagline = isset($_POST['siteTagline']) ? sanitize_text_field($_POST['siteTagline']) : '';
        $site_logo    = isset($_POST['siteLogo'])    ? intval($_POST['siteLogo'])                  : 0;

        if (!empty($site_name))    update_option('blogname',        $site_name);
        if (!empty($site_tagline)) update_option('blogdescription', $site_tagline);
        if (!empty($site_logo))    set_theme_mod('custom_logo',     $site_logo);

        if (get_option('permalink_structure') !== '/%postname%/') {
            update_option('permalink_structure', '/%postname%/');
            flush_rewrite_rules();
        }

        wp_send_json_success([
            'message' => 'Site settings updated',
            'site'    => [
                'name'    => get_option('blogname'),
                'tagline' => get_option('blogdescription'),
                'logo'    => get_theme_mod('custom_logo'),
            ],
        ]);
    }

    // =========================================================================
    // PRIVATE HELPERS
    // =========================================================================

    /**
     * Replace external media URLs with local upload URLs.
     */
    private function replace_media_urls( string $content, string $my_domain ): string
    {
        if (empty($content)) return $content;

        $regex = '/https?(?::|\\\\:)\/\/(?:[^"\'\s>]+?)(?:wp-content(?:\/|\\\\\/)uploads(?:\/|\\\\\/))([^"\'\s>]+)/i';
        preg_match_all($regex, $content, $matches);

        if (empty($matches[0])) return $content;

        $found_urls       = array_unique($matches[0]);
        $upload_dir       = wp_upload_dir();
        $local_upload_base = trailingslashit($upload_dir['baseurl']);

        error_log('FB Import: Found ' . count($found_urls) . ' media URLs to potentially replace.');

        foreach ($found_urls as $original_url) {
            $is_escaped = (strpos($original_url, '\/') !== false);
            $search_str = $is_escaped ? 'wp-content\/uploads\/' : 'wp-content/uploads/';
            $pos        = strpos($original_url, $search_str);

            if ($pos !== false) {
                $relative_path = substr($original_url, $pos + strlen($search_str));
                $relative_path = rtrim($relative_path, '"\'\\ ');
                $relative_path = preg_replace('/^sites(?:\/|\\\\\/)\d+(?:\/|\\\\\/)/', '', $relative_path);
                $local_url     = $local_upload_base . $relative_path;

                if ($is_escaped) {
                    $local_url = str_replace('/', '\/', $local_url);
                }

                $content = str_replace($original_url, $local_url, $content);
                error_log("FB Import: Replaced $original_url → $local_url");
            }
        }

        return $content;
    }

    /**
     * Replace demo site URLs with relative paths.
     */
    private function replace_demo_urls( string $content, string $site_url ): string
    {
        if (empty($content) || empty($site_url)) return $content;

        $demo_url         = trailingslashit($site_url);
        $escaped_demo_url = str_replace('/', '\/', $demo_url);

        $content = str_replace($demo_url, '/', $content);
        $content = str_replace($escaped_demo_url, '\/', $content);
        $content = preg_replace(
            '/(wp-content(?:\/|\\\\\/)uploads(?:\/|\\\\\/))sites(?:\/|\\\\\/)\d+(?:\/|\\\\\/)/i',
            '$1',
            $content
        );

        return $content;
    }

    /**
     * Reset navigation blocks to 'custom' kind and strip invalid post IDs.
     */
    private function clean_navigation_block_content( string $content ): string
    {
        if (empty($content)) return $content;

        $content = preg_replace('/("kind"\s*:\s*)"post-type"/', '$1"custom"', $content);
        $content = preg_replace('/(\\\\"kind\\\\"\\s*:\\s*)\\\\"post-type\\\\"/', '$1\\"custom\\"', $content);

        $content = preg_replace('/"id"\s*:\s*\d+\s*,?/', '', $content);
        $content = preg_replace('/\\\\"id\\\\"\\s*:\\s*\\d+\\s*,?/', '', $content);

        $content = preg_replace('/"type"\s*:\s*"[^"]*"\s*,?/', '', $content);
        $content = preg_replace('/\\\\"type\\\\"\\s*:\\s*\\\\"[^"]*\\\\"\\s*,?/', '', $content);

        $content = preg_replace('/,\s*}/', '}', $content);
        $content = preg_replace('/,\s*\\\\}/', '\\}', $content);

        return $content;
    }

    /**
     * Replace theme name in block attributes.
     */
    private function replace_theme_refs( string $content ): string
    {
        $theme = get_stylesheet();
        // Replace theme name in attributes like "theme":"twentytwentyfive" or \"theme\":\"twentytwentyfive\"
        return preg_replace( '/((\\\\*)"theme"(\\\\*)\s*:\s*(\\\\*)")[^"\\\\]*(\\\\*")/', '${1}' . $theme . '${5}', $content );
    }

    /**
     * Check if a post with this title already exists.
     */
    private function post_exists_by_title( string $title, string $post_type = 'page' ): bool
    {
        global $wpdb;

        $cache_key = 'fb_post_exists_' . md5($title . $post_type);
        $exists    = wp_cache_get($cache_key, 'frontis_blocks');

        if (false === $exists) {
            $exists = $wpdb->get_var($wpdb->prepare(
                "SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type = %s AND post_status IN ('publish','draft','private') LIMIT 1",
                $title,
                $post_type
            ));
            wp_cache_set($cache_key, $exists, 'frontis_blocks', 300);
        }

        return !empty($exists);
    }
}