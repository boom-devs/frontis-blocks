<?php

namespace FrontisBlocks\Admin\Ajax;

if (!defined('ABSPATH')) {
    exit;
}

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
// require_once(ABSPATH . 'wp-admin/includes/class-pclzip.php');
use FrontisBlocks\Core\PclZip;

// Ensure WP_Filesystem is available
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

    /**
     * register_ajax_events
     *
     * @return void
     */
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

    public function update_option()
    {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? sanitize_key($_POST['option_name']) : '';
        $value = isset($_POST['value']) ? sanitize_text_field($_POST['value']) : '';

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
        $value = get_option("fb_$option_name");

        if ($value) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to update option']);
        }
    }

    function upload_files()
    {
        $this->check_permission();

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
            // Download ZIP using WordPress safe HTTP API
            $response = wp_safe_remote_get($zip_url, array(
                'timeout' => 300,
                'sslverify' => true,
            ));

            if (is_wp_error($response))
                throw new \Exception('Download Error: ' . $response->get_error_message());

            $httpCode = wp_remote_retrieve_response_code($response);
            if ($httpCode !== 200)
                throw new \Exception('Failed to download zip file');

            $data = wp_remote_retrieve_body($response);
            if (empty($data))
                throw new \Exception('Downloaded file is empty');

            file_put_contents($tempZipFile, $data);

            // Extract ZIP
            $zip = new PclZip($tempZipFile);
            $content = $zip->listContent();
            if ($content == 0)
                throw new Exception('Failed to read zip content');

            $extracted_files = [];

            foreach ($content as $file_info) {
                $filePath = $destination . $file_info['filename'];

                // Create folder structure too
                if (!empty($file_info['folder'])) {
                    if (!is_dir($filePath))
                        wp_mkdir_p($filePath);
                    continue;
                }

                // Security: Skip dangerous file types
                $dangerous_extensions = array('php', 'php3', 'php4', 'php5', 'php7', 'php8', 'phtml', 'phar', 'exe', 'sh', 'bat', 'htaccess');
                $ext = strtolower(pathinfo($file_info['filename'], PATHINFO_EXTENSION));
                if (in_array($ext, $dangerous_extensions))
                    continue;

                // Extract file
                $result = $zip->extractByIndex(
                    $file_info['index'],
                    PCLZIP_OPT_PATH,
                    $destination,
                    PCLZIP_OPT_REPLACE_NEWER
                );

                if ($result != 0 && file_exists($filePath)) {
                    $extracted_files[] = $file_info['filename'];
                }
            }

            unlink($tempZipFile);

            wp_send_json_success([
                'message' => 'Files extracted successfully',
                'path' => $destination,
                'files' => $extracted_files,
                'count' => count($extracted_files),
            ]);

        } catch (Exception $e) {
            if (file_exists($tempZipFile))
                unlink($tempZipFile);
            wp_send_json_error(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Activate Theme (install if missing)
     * AJAX action: fb_active_theme
     */
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

        // If theme is not installed - download & install
        if (!$wp_theme->exists()) {

            // Correct API endpoint
            $theme_information = wp_remote_get("https://api.wordpress.org/themes/info/1.2/?action=theme_information&request[slug]={$theme_slug}");

            if (is_wp_error($theme_information)) {
                wp_send_json_error(['message' => 'Theme info request failed: ' . $theme_information->get_error_message()]);
            }

            $theme_data = json_decode(wp_remote_retrieve_body($theme_information), true);
            $download_url = $theme_data['download_link'] ?? null;

            if (!$download_url) {
                wp_send_json_error(['message' => 'Theme download link not found from wordpress.org']);
            }

            $upgrader = new \Theme_Upgrader(new \Automatic_Upgrader_Skin());
            $install_result = $upgrader->install($download_url);

            if (!$install_result) {
                wp_send_json_error(['message' => 'Theme installation failed']);
            }
        }

        // Activate this theme
        switch_theme($theme_slug);

        wp_send_json_success(['theme' => $theme_slug, 'activated' => true]);
    }


    /**
     * Install & Activate Plugins
     * AJAX action: fb_install_active_plugins
     * Expected $_POST['plugins'] = json_encode([ {slug: 'plugin-slug', version: '1.2.3'}, ... ])
     */
    public function install_active_plugins()
    {
        $this->check_permission();

        $plugins = json_decode(stripslashes($_POST['plugins'] ?? '[]'), true);
        if (!is_array($plugins) || empty($plugins)) {
            wp_send_json_error(['message' => 'No plugins provided']);
        }

        // include required WP files
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/misc.php';
        require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
        require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
        require_once ABSPATH . 'wp-admin/includes/update.php';

        $results = [];

        // get all plugins list for detection
        $all_plugins = get_plugins();

        foreach ($plugins as $plugin) {
            $slug = sanitize_text_field($plugin['slug']);
            $version = sanitize_text_field($plugin['version'] ?? '');
            $plugin_main_file = $slug . '/' . $slug . '.php';

            // detect installed plugin by slug (more robust: search get_plugins by folder)
            $is_installed = false;
            $installed_version = null;
            foreach ($all_plugins as $path => $meta) {
                // path is like 'plugin-folder/plugin-main.php'
                if (strpos($path, $slug . '/') === 0) {
                    $is_installed = true;
                    $installed_version = $meta['Version'] ?? null;
                    $plugin_main_file = $path; // actual relative path for activate_plugin
                    break;
                }
            }

            $need_install = !$is_installed || ($version && $installed_version && version_compare($installed_version, $version, '<'));

            if ($need_install) {
                $download_url = $version ? "https://downloads.wordpress.org/plugin/{$slug}.{$version}.zip" : "https://downloads.wordpress.org/plugin/{$slug}.zip";

                $upgrader = new \Plugin_Upgrader(new \Automatic_Upgrader_Skin());
                $install_result = $upgrader->install($download_url);

                if (!$install_result) {
                    $results[$slug] = 'install_failed';
                    // refresh plugin list (maybe installed under different path)
                    $all_plugins = get_plugins();
                    continue;
                }

                // refresh plugin list and attempt to find plugin file path
                $all_plugins = get_plugins();
                $found = false;
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

            // Activate plugin if not active
            if (!is_plugin_active($plugin_main_file)) {
                $activate_result = activate_plugin($plugin_main_file);

                if (is_wp_error($activate_result)) {
                    $results[$slug] = 'activation_failed: ' . $activate_result->get_error_message();
                } else {
                    $results[$slug] = 'installed_and_activated';
                }
            } else {
                $results[$slug] = $need_install ? 'installed_and_already_active' : 'already_active';
            }
        }

        wp_send_json_success(['plugins' => $results]);
    }


    public function pages_import()
    {
        $this->check_permission();

        // Input data
        $title = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
        $content = isset($_POST['content']) ? $_POST['content'] : '';
        $slug = isset($_POST['slug']) ? sanitize_title($_POST['slug']) : '';
        $template = isset($_POST['template']) ? sanitize_text_field($_POST['template']) : '';
        $badge = isset($_POST['badge']) ? sanitize_text_field($_POST['badge']) : '';
        $site_url = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';
        $uploads_updated = isset($_POST['uploads_updated']) ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;

        if (empty($title)) {
            wp_send_json_error(['message' => 'Title is required']);
        }

        // Step 1: Update image URLs (if uploads_updated)
        if ($uploads_updated && !empty($site_url)) {
            $content = $this->replace_image_urls($content, $my_domain = trailingslashit($site_url));
        }

        // Step 2: Generate unique slug if not provided or duplicate
        if (empty($slug)) {
            $slug = sanitize_title($title);
        }

        $original_slug = $slug;
        $suffix = 1;
        while (get_page_by_path($slug)) {
            $slug = $original_slug . '-' . $suffix;
            $suffix++;
        }

        // Step 3: Check if page with same title exists → unique title
        $original_title = $title;
        $title_suffix = 1;
        while ($this->post_exists_by_title($title, 'page')) {
            $title = $original_title . ' ' . $title_suffix;
            $title_suffix++;
        }

        // Step 4: Create page
        $page_id = wp_insert_post([
            'post_title' => $title,
            'post_name' => $slug,
            'post_content' => wp_kses_post($content),
            'post_status' => 'publish',
            'post_type' => 'page',
        ], true);

        if (is_wp_error($page_id)) {
            wp_send_json_error(['message' => 'Failed to create page: ' . $page_id->get_error_message()]);
        }

        // Step 5: Assign template
        if (!empty($template)) {
            update_post_meta($page_id, '_wp_page_template', $template);
        }

        // Step 6: Handle badge
        if ($badge === 'front-page' || stripos($title, 'home') !== false || $slug === 'home') {
            update_option('page_on_front', $page_id);
            update_option('show_on_front', 'page');
        }
        // Future: Add logic for 'blog', 'privacy', etc.
        // Example: if ($badge === 'blog') { update_option('page_for_posts', $page_id); }

        // Step 7: Save badge as meta (optional, for future use)
        if (!empty($badge)) {
            update_post_meta($page_id, '_fb_page_badge', $badge);
        }

        // Step 8: Insert job (your helper)
        if (class_exists('FrontisBlocks\Utils\Helper')) {
            Helper::insert_job($page_id, $title . '-' . $page_id);
        }

        wp_send_json_success([
            'message' => 'Page created successfully',
            'page_id' => $page_id,
            'title' => $title,
            'slug' => $slug,
            'template' => $template,
            'badge' => $badge
        ]);
    }

    /**
     * Replace image URLs from external to local uploads
     */
    private function replace_image_urls($content, $my_domain)
    {
        preg_match_all('/https?:\/\/[^"\'\s>]+?\.(jpg|jpeg|png|gif|webp|svg|avif)/i', $content, $matches);

        if (empty($matches[0]))
            return $content;

        $image_urls = array_unique($matches[0]);

        foreach ($image_urls as $url) {
            $parsed = parse_url($url);
            $path = isset($parsed['path']) ? $parsed['path'] : '';

            if (preg_match('/\/2025\//', $path)) {
                $new_url = preg_replace(
                    '/^https?:\/\/[^\/]+\/.*?(?=2025\/)/',
                    $my_domain . 'wp-content/uploads/',
                    $url
                );
            } elseif (preg_match('/wp-content\/uploads/', $path)) {
                $new_url = preg_replace(
                    '/^https?:\/\/[^\/]+\//',
                    $my_domain,
                    $url
                );
            } else {
                $new_url = $my_domain . ltrim($path, '/');
            }

            $content = str_replace($url, $new_url, $content);
        }

        return $content;
    }

    /**
     * Check if post exists by title and post type
     */
    private function post_exists_by_title($title, $post_type = 'page')
    {
        global $wpdb;

        $cache_key = 'fb_post_exists_' . md5($title . $post_type);
        $exists = wp_cache_get($cache_key, 'frontis_blocks');

        if (false === $exists) {
            $exists = $wpdb->get_var($wpdb->prepare( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, PluginCheck.Security.DirectDB.UnescapedDBParameter
                "SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type = %s AND post_status IN ('publish', 'draft', 'private') LIMIT 1",
                $title,
                $post_type
            ));
            wp_cache_set($cache_key, $exists, 'frontis_blocks', 300);
        }

        return !empty($exists);
    }


    public function demo_import()
    {
        $this->check_permission();

        if (!isset($_POST['json_data'])) {
            wp_send_json_error('No JSON data found');
            return;
        }

        $data = json_decode(wp_unslash($_POST['json_data']), true);
        $content = $data['content'] ?? '';

        if (json_last_error() !== JSON_ERROR_NONE) {
            wp_send_json_error('Invalid JSON data');
            return;
        }

        // Define patterns for img src and background-image
        $patterns = [
            'img' => '/<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i',
            'bg' => '/background-image\s*:\s*url\((["\']?)([^"\')]+)\1\)/i'
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
            if (is_wp_error($response)) {
                continue;
            }

            $body = wp_remote_retrieve_body($response);
            $filename = basename($img_src);

            // Use WordPress functions to handle file uploads
            $upload = wp_upload_bits($filename, null, $body);

            if ($upload['error'] || !file_exists($upload['file'])) {
                continue;
            }

            // Add image to media library
            $wp_filetype = wp_check_filetype($filename, null);
            $attachment = [
                'post_mime_type' => $wp_filetype['type'],
                'post_title' => sanitize_file_name($filename),
                'post_content' => '',
                'post_status' => 'inherit',
            ];
            $attach_id = wp_insert_attachment($attachment, $upload['file']);

            // Require the needed file
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            $attached_data = wp_generate_attachment_metadata($attach_id, $upload['file']);

            // Update the attachment metadata
            wp_update_attachment_metadata($attach_id, $attached_data);

            // Replace the image URL in the content
            $content = str_replace($img_src, $upload['url'], $content);
        }

        // Process your JSON data here
        wp_send_json_success([
            'status' => 'success',
            'message' => __('Pattern imported successfully!', 'frontis-blocks'),
            'content' => $content,
            'img_srcs' => $img_srcs,
            'bg_srcs' => $bg_srcs,
        ]);
    }

    function update_site_settings()
    {
        $this->check_permission();

        $site_name = isset($_POST['siteName']) ? sanitize_text_field($_POST['siteName']) : '';
        $site_tagline = isset($_POST['siteTagline']) ? sanitize_text_field($_POST['siteTagline']) : '';
        $site_logo = isset($_POST['siteLogo']) ? intval($_POST['siteLogo']) : 0;

        if (!empty($site_name)) {
            update_option('blogname', $site_name);
        }
        if (!empty($site_tagline)) {
            update_option('blogdescription', $site_tagline);
        }
        if (!empty($site_logo)) {
            set_theme_mod('custom_logo', $site_logo);
        }

        wp_send_json_success([
            'message' => 'Site settings updated',
            'site' => [
                'name' => get_option('blogname'),
                'tagline' => get_option('blogdescription'),
                'logo' => get_theme_mod('custom_logo'),
            ]
        ]);
    }


    public function import_headers_footers()
    {
        $this->check_permission();

        // JSON decode safely
        $headers = isset($_POST['headers']) ? json_decode(wp_unslash($_POST['headers']), associative: true) : [];
        $footers = isset($_POST['footers']) ? json_decode(wp_unslash($_POST['footers']), associative: true) : [];

        if (!is_array($headers))
            $headers = [];
        if (!is_array($footers))
            $footers = [];

        // PHP 7.0+ compatible merge (no spread operator)
        $header_parts = [];
        foreach ($headers as $h) {
            $header_parts[] = array_merge($h, ['area' => 'header']);
        }

        $footer_parts = [];
        foreach ($footers as $f) {
            $footer_parts[] = array_merge($f, ['area' => 'footer']);
        }

        $all_parts = array_merge($header_parts, $footer_parts);

        $navigation_mapping = [];
        $stats = [
            'nav_created' => 0,
            'nav_skipped' => 0,
            'part_created' => 0,
            'part_skipped' => 0,
            'errors' => []
        ];

        // Step 1: Create Navigations
        foreach ($all_parts as $part) {
            if (empty($part['navigations']) || !is_array($part['navigations'])) {
                continue;
            }

            foreach ($part['navigations'] as $nav) {
                $old_id = $nav['id'] ?? null;
                $content = $nav['content'] ?? '';

                if (!$old_id || empty($content)) {
                    continue;
                }

                $slug = 'imported-nav-' . $old_id;

                $existing = get_page_by_path($slug, OBJECT, 'wp_navigation');
                if ($existing) {
                    $navigation_mapping[$old_id] = $existing->ID;
                    $stats['nav_skipped']++;
                    continue;
                }

                $new_id = wp_insert_post([
                    'post_title' => 'Imported Nav ' . $old_id,
                    'post_name' => $slug,
                    'post_content' => wp_kses_post($content),
                    'post_status' => 'publish',
                    'post_type' => 'wp_navigation',
                ]);

                if (!is_wp_error($new_id)) {
                    $navigation_mapping[$old_id] = $new_id;
                    $stats['nav_created']++;
                }
            }
        }

        // Step 2: Create/Update Header & Footer
        foreach ($all_parts as $part) {
            $slug = $part['slug'] ?? '';
            $title = $part['title'] ?? $slug;
            $content = $part['content'] ?? '';
            $area = $part['area'] ?? 'uncategorized';

            if (empty($slug)) {
                continue;
            }

            // Replace navigation refs
            foreach ($navigation_mapping as $old => $new) {
                $content = preg_replace('/("ref":\s*)' . preg_quote((string) $old, '/') . '\b/', '$1' . $new, $content);
            }

            // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query -- Required for template detection
            $existing = get_posts([
                'post_type' => 'wp_template_part',
                'name' => $slug,
                'post_status' => 'publish',
                'posts_per_page' => 1,
                // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query -- Required for template detection
                'tax_query' => [
                    [
                        'taxonomy' => 'wp_theme',
                        'field' => 'slug',
                        'terms' => get_stylesheet(),
                    ]
                ],
                'fields' => 'ids'
            ]);

            if (!empty($existing)) {
                wp_update_post([
                    'ID' => $existing[0],
                    'post_content' => wp_kses_post($content),
                    'post_title' => $title,
                ]);
                $stats['part_skipped']++;
            } else {
                $id = wp_insert_post([
                    'post_title' => $title,
                    'post_name' => $slug,
                    'post_content' => wp_kses_post($content),
                    'post_status' => 'publish',
                    'post_type' => 'wp_template_part',
                ]);

                if (!is_wp_error($id)) {
                    wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                    wp_set_object_terms($id, $area, 'wp_template_part_area');
                    $stats['part_created']++;
                } else {
                    $stats['errors'][] = $slug;
                }
            }
        }

        wp_send_json_success([
            'message' => 'Headers & Footers imported successfully!',
            'stats' => $stats,
            'mapping' => $navigation_mapping
        ]);
    }

    public function import_templates()
    {
        $this->check_permission();

        $templates = isset($_POST['templates']) ? json_decode(wp_unslash($_POST['templates']), true) : [];
        $mapping = isset($_POST['mapping']) ? json_decode(wp_unslash($_POST['mapping']), true) : [];

        if (!is_array($templates))
            $templates = [];

        $created = 0;
        $skipped = 0;

        foreach ($templates as $tmpl) {
            $slug = $tmpl['slug'] ?? '';
            $title = $tmpl['title'] ?? $slug;
            $content = $tmpl['content'] ?? '';

            if (empty($slug))
                continue;

            foreach ($mapping as $old => $new) {
                $content = preg_replace('/("ref":\s*)' . preg_quote((string) $old, '/') . '\b/', '$1' . $new, $content);
            }

            $existing = get_page_by_path($slug, OBJECT, 'wp_template');
            if ($existing) {
                wp_update_post([
                    'ID' => $existing->ID,
                    'post_content' => wp_kses_post($content),
                    'post_title' => $title,
                ]);
                $skipped++;
            } else {
                $id = wp_insert_post([
                    'post_title' => $title,
                    'post_name' => $slug,
                    'post_content' => wp_kses_post($content),
                    'post_status' => 'publish',
                    'post_type' => 'wp_template',
                ]);
                if (!is_wp_error($id)) {
                    wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                    $created++;
                }
            }
        }

        wp_send_json_success([
            'message' => 'Templates imported!',
            'created' => $created,
            'skipped' => $skipped
        ]);
    }


    public function posts_import()
    {
        $this->check_permission();

        $title = sanitize_text_field($_POST['title'] ?? '');
        $content = wp_unslash($_POST['content'] ?? '');
        $slug = sanitize_title($_POST['slug'] ?? '');
        $template = sanitize_text_field($_POST['template'] ?? '');

        if (empty($title)) {
            wp_send_json_error(['message' => 'Post title is required']);
        }

        // Slug generate if empty
        if (empty($slug)) {
            $slug = sanitize_title($title);
        }

        // Unique slug
        $original_slug = $slug;
        $i = 1;
        while (get_page_by_path($slug, OBJECT, 'post')) {
            $slug = $original_slug . '-' . $i++;
        }

        // Unique title (optional but safe)
        $original_title = $title;
        $i = 1;
        while ($this->post_exists_by_title($title, 'post')) {
            $title = $original_title . ' ' . $i++;
        }

        // Create post
        $post_id = wp_insert_post([
            'post_title' => $title,
            'post_name' => $slug,
            'post_content' => wp_kses_post($content),
            'post_status' => 'publish',
            'post_type' => 'post',
            'post_date' => current_time('mysql'),
            'post_date_gmt' => current_time('mysql', 1),
        ], true);

        if (is_wp_error($post_id)) {
            wp_send_json_error(['message' => $post_id->get_error_message()]);
        }

        // Only assign template if provided
        if (!empty($template)) {
            update_post_meta($post_id, '_wp_page_template', $template);
        }

        if (class_exists('FrontisBlocks\Utils\Helper')) {
            Helper::insert_job($post_id, $title);
        }

        wp_send_json_success([
            'message' => 'Post imported successfully',
            'post_id' => $post_id,
            'title' => $title,
            'slug' => $slug,
            'template' => $template ?: 'default'
        ]);
    }

}
