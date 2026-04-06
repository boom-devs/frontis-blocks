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

            // Register files in Media Library
            require_once ABSPATH . 'wp-admin/includes/image.php';
            require_once ABSPATH . 'wp-admin/includes/media.php';
            require_once ABSPATH . 'wp-admin/includes/file.php';

            $registered_count = 0;
            foreach ($extracted_files as $relative_file_path) {
                $full_path = $destination . $relative_file_path;
                
                if (!file_exists($full_path) || is_dir($full_path)) {
                    continue;
                }

                // Filter out resized images (e.g., filename-1024x768.webp)
                if (preg_match('/-(\d+)x(\d+)\.(jpg|jpeg|png|gif|webp|svg|avif)$/i', basename($full_path))) {
                    continue;
                }

                // Check if already registered
                $existing_attachment = $wpdb->get_var($wpdb->prepare(
                    "SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_wp_attached_file' AND meta_value = %s LIMIT 1",
                    $relative_file_path
                ));

                if ($existing_attachment) {
                    continue;
                }

                $filetype = wp_check_filetype(basename($full_path), null);
                
                $attachment = array(
                    'guid'           => $uploads_dir['baseurl'] . '/' . $relative_file_path,
                    'post_mime_type' => $filetype['type'],
                    'post_title'     => preg_replace('/\.[^.]+$/', '', basename($full_path)),
                    'post_content'   => '',
                    'post_status'    => 'inherit'
                );

                $attach_id = wp_insert_attachment($attachment, $full_path);

                if (!is_wp_error($attach_id)) {
                    $attach_data = wp_generate_attachment_metadata($attach_id, $full_path);
                    wp_update_attachment_metadata($attach_id, $attach_data);
                    $registered_count++;
                }
            }

            wp_send_json_success([
                'message' => 'Files extracted and registered successfully',
                'path' => $destination,
                'files' => $extracted_files,
                'count' => count($extracted_files),
                'registered' => $registered_count,
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
        
        // Decode unicode escapes BEFORE unslashing to preserve the backslash
        $content = $this->decode_content($content);
        $content = wp_unslash($content);

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
            $content = $this->replace_media_urls($content, trailingslashit($site_url));
        }

        // Step 1.1: Replace demo URLs with relative paths
        $content = $this->replace_demo_urls($content, $site_url);

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
            'post_content' => $content,
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
        if ($badge === 'front-page') {
            update_option('page_on_front', $page_id);
            update_option('show_on_front', 'page');
        } elseif ($badge === 'blog-page') {
            update_option('page_for_posts', $page_id);
        }

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
     * Decode unicode escapes like \u003c to <
     */
    private function decode_content($content)
    {
        if (empty($content)) {
            return $content;
        }

        // If it starts and ends with quotes, it might be a double-encoded JSON string
        // We need to handle both \uXXXX and \\uXXXX (handled by \\\\+u)
        $content = preg_replace_callback('/\\\\+u([0-9a-fA-F]{4})/', function ($match) {
            $hex = strtolower($match[1]);
            
            // SECURITY/INTEGRITY: Do not decode characters that could break JSON attributes or HTML structure
            // 0022: " | 005c: \ | 0027: ' | 003c: < | 003e: >
            // Wait, we actually WANT to decode < and > for the user's "weird text" issue
            // but we MUST NOT decode " and \ in attributes.
            // Since we can't easily tell if we are in an attribute here without a full parser,
            // we will only skip the most dangerous ones for JSON: " and \
            if (in_array($hex, ['0022', '005c'])) {
                return $match[0];
            }
            
            return mb_convert_encoding(pack('H*', $match[1]), 'UTF-8', 'UCS-2BE');
        }, $content);

        return $content;
    }

    /**
     * Replace media URLs from external to local uploads
     */
    private function replace_media_urls($content, $my_domain)
    {
        if (empty($content)) {
            return $content;
        }

        // 1. Match normal URLs: https://domain.com/wp-content/uploads/...
        // 2. Match escaped URLs: https:\/\/domain.com\/wp-content\/uploads\/...
        
        // Comprehensive regex to catch both normal and escaped versions
        // It looks for http/https followed by anything until it finds wp-content/uploads
        // then captures everything until a space, quote, or other terminator.
        $regex = '/https?(?::|\\\\:)\/\/(?:[^"\'\s>]+?)(?:wp-content(?:\/|\\\\\/)uploads(?:\/|\\\\\/))([^"\'\s>]+)/i';
        
        preg_match_all($regex, $content, $matches);

        if (empty($matches[0])) {
            return $content;
        }

        $found_urls = array_unique($matches[0]);
        $upload_dir = wp_upload_dir();
        $local_upload_base = trailingslashit($upload_dir['baseurl']);
        
        error_log("FB Import: Found " . count($found_urls) . " media URLs to potentialy replace.");

        foreach ($found_urls as $original_url) {
            // Determine if this specific match is escaped
            $is_escaped = (strpos($original_url, '\/') !== false);
            
            // Find the split point
            $search_str = $is_escaped ? 'wp-content\/uploads\/' : 'wp-content/uploads/';
            $pos = strpos($original_url, $search_str);
            
            if ($pos !== false) {
                $relative_path = substr($original_url, $pos + strlen($search_str));
                
                // Content sometimes has trailing garbage if regex was too greedy
                $relative_path = rtrim($relative_path, '"\'\\ ');
                
                // FIX MULTISITE PATHS: Remove 'sites/14/' etc. from the path
                // This covers both normal slashes and escaped slashes
                $relative_path = preg_replace('/^sites(?:\/|\\\\\/)\d+(?:\/|\\\\\/)/', '', $relative_path);

                $local_url = $local_upload_base . $relative_path;
                
                // If the original was escaped, the replacement should be too
                if ($is_escaped) {
                    $local_url = str_replace('/', '\/', $local_url);
                }
                
                $content = str_replace($original_url, $local_url, $content);
                error_log("FB Import: Replaced $original_url with $local_url");
            }
        }

        return $content;
    }

    /**
     * Replace demo URLs from external to relative
     */
    private function replace_demo_urls($content, $site_url)
    {
        if (empty($content) || empty($site_url)) {
            return $content;
        }

        $demo_url = trailingslashit($site_url);
        $escaped_demo_url = str_replace('/', '\/', $demo_url);

        $content = str_replace($demo_url, '/', $content);
        $content = str_replace($escaped_demo_url, '\/', $content);

        // Fix multisite paths: remove /sites/X/ from any wp-content/uploads/ path
        // This covers both normal slashes and escaped slashes
        $content = preg_replace('/(wp-content(?:\/|\\\\\/)uploads(?:\/|\\\\\/))sites(?:\/|\\\\\/)\d+(?:\/|\\\\\/)/i', '$1', $content);

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

        // Update permalink structure to Post name if not set
        if (get_option('permalink_structure') !== '/%postname%/') {
            update_option('permalink_structure', '/%postname%/');
            flush_rewrite_rules();
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
        // Note: json_decode already handles unicode escapes if they are standard JSON.
        // But if they are double-escaped or malformed, we might need decode_content.
        $headers_raw = isset($_POST['headers']) ? wp_unslash($_POST['headers']) : '[]';
        $footers_raw = isset($_POST['footers']) ? wp_unslash($_POST['footers']) : '[]';
        
        $headers = json_decode($headers_raw, true) ?: [];
        $footers = json_decode($footers_raw, true) ?: [];

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

        $uploads_updated = isset($_POST['uploads_updated']) ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

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

                // Decode and unslash navigation content
                $content = $this->decode_content($content);
                $content = wp_unslash($content);

                // Replace media URLs in navigation content
                if ($uploads_updated && !empty($site_url)) {
                    $content = $this->replace_media_urls($content, trailingslashit($site_url));
                }

                // Replace demo URLs with relative paths
                $content = $this->replace_demo_urls($content, $site_url);

                // slug for navigation
                $slug = 'imported-nav-' . $old_id;

                $existing = get_page_by_path($slug, OBJECT, 'wp_navigation');
                if ($existing) {
                    wp_update_post([
                        'ID' => $existing->ID,
                        'post_content' => $content,
                        'post_title' => 'Imported Nav ' . $old_id,
                    ]);
                    $navigation_mapping[$old_id] = $existing->ID;
                    $stats['nav_skipped']++;
                    continue;
                }

                $new_id = wp_insert_post([
                    'post_title' => 'Imported Nav ' . $old_id,
                    'post_name' => $slug,
                    'post_content' => $content,
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

            // Decode and unslash part content
            $content = $this->decode_content($content);
            $content = wp_unslash($content);

            error_log("FB Import: Header/Footer part $title, content length: " . strlen($content));

            // Replace image URLs (if uploads_updated)
            if ($uploads_updated && !empty($site_url)) {
                $content = $this->replace_media_urls($content, trailingslashit($site_url));
            }

            // Replace demo URLs with relative paths
            $content = $this->replace_demo_urls($content, $site_url);

            // Replace navigation refs in both block comments and escaped JSON
            foreach ($navigation_mapping as $old => $new) {
                $old_str = preg_quote((string) $old, '/');
                // Pattern for block comments: "ref":OLD_ID or "ref": OLD_ID
                $content = preg_replace('/("ref"\s*:\s*)' . $old_str . '\b/', '${1}' . $new, $content);
                // Pattern for escaped JSON attributes: \"ref\":OLD_ID
                $content = preg_replace('/(\\\\"ref\\\\"\s*:\s*)' . $old_str . '\b/', '${1}' . $new, $content);
            }

            error_log("FB Import: Navigation mapping applied to $title: " . wp_json_encode($navigation_mapping));

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
                    'post_content' => $content,
                    'post_title' => $title,
                ]);
                $stats['part_skipped']++;
            } else {
                $id = wp_insert_post([
                    'post_title' => $title,
                    'post_name' => $slug,
                    'post_content' => $content,
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

        $templates_raw = isset($_POST['templates']) ? wp_unslash($_POST['templates']) : '[]';
        $mapping_raw = isset($_POST['mapping']) ? wp_unslash($_POST['mapping']) : '[]';
        
        $templates = json_decode($templates_raw, true) ?: [];
        $mapping = json_decode($mapping_raw, true) ?: [];
        $uploads_updated = isset($_POST['uploads_updated']) ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

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

            // Decode and unslash template content
            $content = $this->decode_content($content);
            $content = wp_unslash($content);

            // Replace image URLs (if uploads_updated)
            if ($uploads_updated && !empty($site_url)) {
                $content = $this->replace_media_urls($content, trailingslashit($site_url));
            }

            // Replace demo URLs with relative paths
            $content = $this->replace_demo_urls($content, $site_url);

            foreach ($mapping as $old => $new) {
                $content = preg_replace('/("ref":\s*)' . preg_quote((string) $old, '/') . '\b/', '$1' . $new, $content);
            }

            error_log("FB Import: Template $title, slug $slug, content length: " . strlen($content));

            // Check if template exists for CURRENT THEME
            $existing = get_posts([
                'post_type' => 'wp_template',
                'name' => $slug,
                'posts_per_page' => 1,
                'post_status' => 'any',
                'fields' => 'ids',
                'tax_query' => [
                    [
                        'taxonomy' => 'wp_theme',
                        'field' => 'slug',
                        'terms' => get_stylesheet(),
                    ]
                ],
            ]);

            if (!empty($existing)) {
                $update_res = wp_update_post([
                    'ID' => $existing[0],
                    'post_content' => $content,
                    'post_title' => $title,
                ]);
                if ($update_res) {
                    $skipped++;
                } else {
                    error_log("FB Import Error: Failed to update template $slug (ID: {$existing[0]})");
                }
            } else {
                $id = wp_insert_post([
                    'post_title' => $title,
                    'post_name' => $slug,
                    'post_content' => $content,
                    'post_status' => 'publish',
                    'post_type' => 'wp_template',
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
            'skipped' => $skipped
        ]);
    }


    public function posts_import()
    {
        $this->check_permission();

        $title = sanitize_text_field($_POST['title'] ?? '');
        $content_raw = $_POST['content'] ?? '';
        
        // Decode BEFORE unslashing
        $content = $this->decode_content($content_raw);
        $content = wp_unslash($content);

        $slug = sanitize_title($_POST['slug'] ?? '');
        $template = sanitize_text_field($_POST['template'] ?? '');
        $uploads_updated = isset($_POST['uploads_updated']) ? filter_var($_POST['uploads_updated'], FILTER_VALIDATE_BOOLEAN) : false;
        $site_url = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';

        if (empty($title)) {
            wp_send_json_error(['message' => 'Post title is required']);
        }

        // Replace image URLs (if uploads_updated)
        if ($uploads_updated && !empty($site_url)) {
            $content = $this->replace_media_urls($content, trailingslashit($site_url));
        }

        // Replace demo URLs with relative paths
        $content = $this->replace_demo_urls($content, $site_url);

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
            'post_content' => $content,
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
