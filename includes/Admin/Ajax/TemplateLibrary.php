<?php

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
// require_once(ABSPATH . 'wp-admin/includes/class-pclzip.php');
use FrontisBlocks\Core\PclZip;

// Ensure WP_Filesystem is available
if ( ! function_exists( 'request_filesystem_credentials' ) ) {
    require_once ABSPATH . 'wp-admin/includes/file.php';
}

/**
 * Settings
 *
 * @package FrontisBlocks
 */
class TemplateLibrary extends AjaxBase {

	use Singleton;

	/**
	 * register_ajax_events
	 *
	 * @return void
	 */
	public function register_ajax_events() {
		$ajax_events = [
			'update_option',
			'get_option',
            'full_site_import',
            'update_site_settings',
            'demo_import',
            'upload_files',
            'install_active_plugins',
            'active_theme',
            'update_database',
            'get_templates',
            'get_template_parts',
            'push_template',
            'get_all_template_parts',
            'push_template_parts',
		];

		$this->init_ajax_events($ajax_events);
	}

    public function check_permission() {
        if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
			wp_send_json_error(['message' => 'Invalid nonce'], 400);
			return;
		}

		if (!current_user_can('manage_options')) {
			wp_send_json_error(['message' => 'Insufficient permissions'], 403);
			return;
		}
    }

    public function update_option() {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? $_POST['option_name'] : '';
        $value = isset($_POST['value']) ? $_POST['value'] : '';

        $updated = update_option("fb_$option_name", $value);

        if ($updated) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to update option']);
        }
    }

    public function get_option() {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? $_POST['option_name'] : '';
        $value = get_option("fb_$option_name");

        if ($value) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to update option']);
        }
    }

    function upload_files() {
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
            // Download ZIP
            $ch = curl_init($zip_url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_TIMEOUT, 300);
            $data = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
            if (curl_errno($ch)) throw new Exception('cURL Error: ' . curl_error($ch));
            curl_close($ch);
    
            if ($httpCode !== 200 || !$data) throw new Exception('Failed to download zip file');
    
            file_put_contents($tempZipFile, $data);
    
            // Extract ZIP
            $zip = new PclZip($tempZipFile);
            $content = $zip->listContent();
            if ($content == 0) throw new Exception('Failed to read zip content');
    
            $extracted_files = [];
    
            foreach ($content as $file_info) {
                $filePath = $destination . $file_info['filename'];
    
                // Create folder structure too
                if (!empty($file_info['folder'])) {
                    if (!is_dir($filePath)) wp_mkdir_p($filePath);
                    continue;
                }
    
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
                'path'    => $destination,
                'files'   => $extracted_files,
                'count'   => count($extracted_files),
            ]);
    
        } catch (Exception $e) {
            if (file_exists($tempZipFile)) unlink($tempZipFile);
            wp_send_json_error(['message' => $e->getMessage()], 500);
        }
    }
    
    /**
     * Activate Theme (install if missing)
     * AJAX action: fb_active_theme
     */
    public function active_theme() {
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
    public function install_active_plugins() {
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

                $upgrader = new \Plugin_Upgrader( new \Automatic_Upgrader_Skin() );
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
    

    // public function full_site_import() {
    //     $this->check_permission();
    
    //     $title            = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
    //     $content          = isset($_POST['content']) ? $_POST['content'] : '';
    //     $site_url         = isset($_POST['site_url']) ? sanitize_text_field($_POST['site_url']) : '';
    //     $uploads_updated  = isset($_POST['uploads_updated']) ? sanitize_text_field($_POST['uploads_updated']) : false;
    
    //     if (empty($title)) {
    //         wp_send_json_error(['message' => 'Title is required']);
    //     }
    
    //     if ($uploads_updated) {
    //         $my_domain = trailingslashit($site_url);
    //         preg_match_all('/https?:\/\/[^"\'\s>]+?\.(jpg|jpeg|png|gif|webp|svg)/i', $content, $matches);
    
    //         if (!empty($matches[0])) {
    //             $image_urls = array_unique($matches[0]);
    
    //             foreach ($image_urls as $url) {
    
    //                 if (preg_match('/\/2025\//', $url)) {
    //                     $new_url = preg_replace(
    //                         '/^https?:\/\/[^\/]+\/.*?(?=2025\/)/',
    //                         $my_domain . 'wp-content/uploads/',
    //                         $url
    //                     );
    //                 } else {
    //                     $new_url = preg_replace(
    //                         '/^https?:\/\/[^\/]+\//',
    //                         $my_domain,
    //                         $url
    //                     );
    //                 }
    
    //                 $content = str_replace($url, $new_url, $content);
    //             }
    //         }
    //     }
    
    //     // Ensure unique title
    //     $original_title = $title;
    //     $suffix = 1;
    //     while (post_exists($title)) {
    //         $title = $original_title . ' ' . $suffix;
    //         $suffix++;
    //     }
    
    //     $page_id = wp_insert_post([
    //         'post_title'   => $title,
    //         'post_content' => $content,
    //         'post_status'  => 'publish',
    //         'post_type'    => 'page',
    //     ]);
    
    //     if ($page_id) {
    
    //         // Make front page if imported title contains "home"
    //         if (stripos($title, 'home') !== false) {
    //             update_option('page_on_front', $page_id);
    //             update_option('show_on_front', 'page');
    //         }
    
    //         Helper::insert_job($page_id, $title . $page_id);
    
    //         wp_send_json_success([
    //             'message' => 'Page created successfully',
    //             'page_id' => $page_id,
    //             'title'   => $title
    //         ]);
    //     } else {
    //         wp_send_json_error(['message' => 'Failed to create page']);
    //     }
    // }

    public function full_site_import() {
        $this->check_permission();
    
        // Input data
        $title           = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
        $content          = isset($_POST['content']) ? $_POST['content'] : '';
        $slug            = isset($_POST['slug']) ? sanitize_title($_POST['slug']) : '';
        $template        = isset($_POST['template']) ? sanitize_text_field($_POST['template']) : '';
        $badge           = isset($_POST['badge']) ? sanitize_text_field($_POST['badge']) : '';
        $site_url        = isset($_POST['site_url']) ? esc_url_raw($_POST['site_url']) : '';
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
            'post_title'   => $title,
            'post_name'    => $slug,
            'post_content' => $content,
            'post_status'  => 'publish',
            'post_type'    => 'page',
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
            'message'     => 'Page created successfully',
            'page_id'     => $page_id,
            'title'       => $title,
            'slug'        => $slug,
            'template'    => $template,
            'badge'       => $badge
        ]);
    }

    /**
     * Replace image URLs from external to local uploads
     */
    private function replace_image_urls($content, $my_domain) {
        preg_match_all('/https?:\/\/[^"\'\s>]+?\.(jpg|jpeg|png|gif|webp|svg|avif)/i', $content, $matches);

        if (empty($matches[0])) return $content;

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
    private function post_exists_by_title($title, $post_type = 'page') {
        global $wpdb;
        $exists = $wpdb->get_var($wpdb->prepare(
            "SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type = %s AND post_status IN ('publish', 'draft', 'private') LIMIT 1",
            $title, $post_type
        ));
        return !empty($exists);
    }
    
    
    public function demo_import() {
        if (!isset($_POST['json_data'])) {
            wp_send_json_error('No JSON data found');
            return;
        }

        $data    = json_decode($_POST['json_data'], true);
        $content = $data['content'] ?? '';

        if (json_last_error() !== JSON_ERROR_NONE) {
            wp_send_json_error('Invalid JSON data');
            return;
        }

        // Define patterns for img src and background-image
        $patterns = [
            'img' => '/<img[^>]+src=[\'"]([^\'"]+)[\'"][^>]*>/i',
            'bg'  => '/background-image\s*:\s*url\((["\']?)([^"\')]+)\1\)/i'
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
            $response = wp_remote_get($img_src);
            if (is_wp_error($response)) {
                continue;
            }

            $body     = wp_remote_retrieve_body($response);
            $filename = basename($img_src);

            // Use WordPress functions to handle file uploads
            $upload = wp_upload_bits($filename, null, $body);

            if ($upload['error'] || !file_exists($upload['file'])) {
                continue;
            }

            // Add image to media library
            $wp_filetype = wp_check_filetype($filename, null);
            $attachment  = [
                'post_mime_type' => $wp_filetype['type'],
                'post_title'     => sanitize_file_name($filename),
                'post_content'   => '',
                'post_status'    => 'inherit',
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
            'status'   => 'success',
            'message'  => __('Pattern imported successfully!', 'zoloblocks'),
            'content'  => $content,
            'img_srcs' => $img_srcs,
            'bg_srcs'  => $bg_srcs,
        ]);
    }

    function update_site_settings() {
        $this->check_permission();
    
        $site_name    = isset($_POST['siteName']) ? sanitize_text_field($_POST['siteName']) : '';
        $site_tagline = isset($_POST['siteTagline']) ? sanitize_text_field($_POST['siteTagline']) : '';
        $site_logo    = isset($_POST['siteLogo']) ? intval($_POST['siteLogo']) : 0;
    
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
                'name'     => get_option('blogname'),
                'tagline'  => get_option('blogdescription'),
                'logo'     => get_theme_mod('custom_logo'),
            ]
        ]);
    }

    
    /**
     * Get templates by post type and name.
     *
     * @param string $post_type Post type to filter templates.
     * @return WP_Block_Template[] Array of matching templates.
     */
    // public function get_templates() {
    //     $this->check_permission();
    
    //     $post_type = isset($_POST['post_type']) ? sanitize_text_field(wp_unslash($_POST['post_type'])) : 'page';
    
    //     // Step 1: Get templates ONLY from CURRENT active theme
    //     $current_theme = get_stylesheet(); // e.g., 'frontisblocks'
    //     $all_templates = get_block_templates(['theme' => $current_theme], 'wp_template');
    
    //     // Step 2: Filter: slug contains 'fb-template' + post_type match
    //     $matching_templates = array_filter($all_templates, function ($template) use ($post_type) {
    //         // 1. Must have 'fb-template' in slug
    //         if (strpos($template->slug, 'fb-template') === false) {
    //             return false;
    //         }
    
    //         // 2. Get assigned post_types from meta
    //         $assigned_post_types = get_post_meta($template->wp_id, '_wp_post_types', true);
    //         $assigned_post_types = is_array($assigned_post_types) ? $assigned_post_types : [];
    
    //         // If no post_types assigned → include as fallback
    //         if (empty($assigned_post_types)) {
    //             return true;
    //         }
    
    //         // Match requested post_type
    //         return in_array($post_type, $assigned_post_types, true);
    //     });
    
    //     if (!empty($matching_templates)) {
    //         $output = [];
    //         foreach ($matching_templates as $template) {
    //             $assigned_post_types = get_post_meta($template->wp_id, '_wp_post_types', true);
    //             $assigned_post_types = is_array($assigned_post_types) ? $assigned_post_types : [];
    
    //             $output[] = [
    //                 'title'        => $template->title,
    //                 'slug'         => $template->slug,
    //                 'content'      => $template->content,
    //                 'post_types'   => $assigned_post_types,
    //             ];
    //         }
    
    //         wp_send_json_success(['templates' => $output]);
    //     } else {
    //         wp_send_json_error(['message' => 'No fb-template found in current theme']);
    //     }
    // }

    // public function get_all_template_parts() {
    //     $this->check_permission();
    
    //     $current_theme = get_stylesheet();
    
    //     // Step 1: Get ALL fb-template from current theme
    //     $all_templates = get_block_templates(['theme' => $current_theme], 'wp_template');
    //     $fb_templates = array_filter($all_templates, function ($t) {
    //         return strpos($t->slug, 'fb-template') !== false;
    //     });
    
    //     if (empty($fb_templates)) {
    //         wp_send_json_success(['template_parts' => []]);
    //     }
    
    //     $all_parts = [];
    
    //     foreach ($fb_templates as $template) {
    //         $parsed = parse_blocks($template->content);
    //         $slugs = [];
    //         $this->extract_template_part_slugs($parsed, $slugs);
    
    //         foreach ($slugs as $slug) {
    //             $part_id = $current_theme . '//' . $slug;
    //             $part = get_block_template($part_id, 'wp_template_part');
    
    //             if ($part) {
    //                 $key = $part->slug; // unique by slug
    //                 if (!isset($all_parts[$key])) {
    //                     $all_parts[$key] = [
    //                         'title'   => $part->title,
    //                         'slug'    => $part->slug,
    //                         'content' => $part->content,
    //                         'area'    => get_post_meta($part->wp_id, 'wp_template_part_area', true),
    //                         'used_in' => []
    //                     ];
    //                 }
    //                 $all_parts[$key]['used_in'][] = $template->slug;
    //             }
    //         }
    //     }
    
    //     wp_send_json_success(['template_parts' => array_values($all_parts)]);
    // }
    // private function extract_template_part_slugs($blocks, &$slugs) {
    //     foreach ($blocks as $block) {
    //         if ($block['blockName'] === 'core/template-part' && !empty($block['attrs']['slug'])) {
    //             $slugs[] = $block['attrs']['slug'];
    //         }
    //         if (!empty($block['innerBlocks'])) {
    //             $this->extract_template_part_slugs($block['innerBlocks'], $slugs);
    //         }
    //     }
    // }

    /**
     * Create a custom block-template and assign it to the "page" post-type.
     *
     * Put this in your theme’s functions.php or in a small MU-plugin.
     */
    public function create_single_page_template($slug, $content, $title) {

        $existing = get_page_by_path(
            $slug,
            OBJECT,
            'wp_template'
        );

        if ( $existing ) {
            return; // already created
        }

        $template_id = wp_insert_post( [
            'post_title'   => $slug,                 // Human readable title
            'post_name'    => $slug, // slug
            'post_content' => $content,
            'post_status'  => 'publish',
            'post_type'    => 'wp_template',
        ] );

        if ( is_wp_error( $template_id ) ) {
            return false;
        }

        wp_set_object_terms( $template_id, get_stylesheet(), 'wp_theme' );
        update_option( 'fb_template_single_page_created', true );
    }

    /**
     * AJAX: Push a single template to wp_template
     */
    public function push_template() {
        $this->check_permission();
    
        $slug       = $_POST['slug'];
        $title      = $_POST['title'];
        $content    = $_POST['content'];
        $post_types = array_map('sanitize_text_field', (array)($_POST['post_types'] ?? []));
    
        if (empty($slug) || empty($title) || empty($content)) {
            wp_send_json_error(['message' => 'Required fields missing']);
        }
    
        $this->create_single_page_template($slug, $content, $title);

        wp_send_json_success(['message' => 'Template created']);
    }

    function process_template_parts($template_parts) {
        $id_mapping = [];
        $navigations = $template_parts['navigations'] ?? [];
        $template_content = $template_parts['template_content'] ?? '';
        
        // Step 1: Create navigation posts and store ID mapping
        foreach ($navigations as $nav_key => $nav_data) {
            $old_id = $nav_data['id'];
            
            // Create the navigation post
            $new_post_id = wp_insert_post([
                'post_title'   => $nav_data['slug'],
                'post_content' => $nav_data['content'],
                'post_status'  => 'publish',
                'post_type'    => 'wp_navigation',
                'post_name'    => $nav_data['slug']
            ]);
            
            if (!is_wp_error($new_post_id)) {
                // Store the mapping of old ID to new ID
                $id_mapping[$old_id] = $new_post_id;
                
                echo "Created navigation: {$nav_data['slug']} (Old ID: {$old_id} → New ID: {$new_post_id})\n";
            } else {
                echo "Error creating navigation: {$nav_data['slug']}\n";
            }
        }
        
        // Step 2: Replace IDs in template content
        $updated_content = $this->replace_navigation_ids($template_content, $id_mapping);
        
        return [
            'id_mapping' => $id_mapping,
            'updated_content' => $updated_content
        ];
    }

    function replace_navigation_ids($content, $id_mapping) {
        foreach ($id_mapping as $old_id => $new_id) {
            // Pattern 1: Replace in wp:navigation blocks with "ref" attribute
            // Example: <!-- wp:navigation {"ref":1047,...} /-->
            $content = preg_replace(
                '/("ref":)' . $old_id . '\b/',
                '${1}' . $new_id,
                $content
            );
        }
        
        return $content;
    }

    public function create_navigation_with_assign($content, $navigations) {
        $template_parts = array(
            'navigations' => array(
                'main_nav' => array(
                    'content' => '<!-- wp:navigation-link {"label":"Privacy Policy","url":"/privacy-policy","kind":"custom"} /-->

<!-- wp:navigation-link {"label":"Terms of Service","url":"/terms-of-service","kind":"custom"} /-->

<!-- wp:navigation-link {"label":"Cookie Policy","url":"/cookie-policy","kind":"custom"} /-->',
'slug' => 'navigation-14',
'id' => 1047
                ),
                'secondary_nav' => array(
                    'content' => '<!-- wp:navigation-link {"label":"Privacy Policy","url":"/privacy-policy","kind":"custom"} /-->

<!-- wp:navigation-link {"label":"Terms of Service","url":"/terms-of-service","kind":"custom"} /-->

<!-- wp:navigation-link {"label":"Cookie Policy","url":"/cookie-policy","kind":"custom"} /-->',
'slug' => 'navigation-15',
'id' => 1047
                )
            ),
            'template_content' => '<!-- wp:frontis-blocks/container {"p_block_id":"block-bd6aebd6-2b35-4d68-99a4-623326f20e54","blockStyle":"#block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{max-width: 100%;width: 100%;padding: 10px;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54 {max-width: 100%;width: 100%;padding: 10px;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54 {max-width: 100%;width: 100%;padding: 10px;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"directionDesktop":"row","containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"variationSelected":true,"isBlockRootParent":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54 alignfull frontis-blocks-is-root-container" id="block-bd6aebd6-2b35-4d68-99a4-623326f20e54"><div class="frontis-blocks-container-inner-blocks-wrap " id=""><!-- wp:frontis-blocks/container {"p_block_id":"block-ac44a291-0126-4c4e-9a52-d0dc11119e60","blockStyle":"#block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: flex-start;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{max-width: 25%;width: 100%;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{display: flex;flex-direction: row;align-items: center;justify-content: flex-start;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60 {max-width: 25%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60 {max-width: 100%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","customWidth":{"Desktop":25,"Tablet":25,"Mobile":100},"globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"containerJustify":{"Desktop":"flex-start","Tablet":"","Mobile":""},"containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"widthSetByUser":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60 child " id="block-ac44a291-0126-4c4e-9a52-d0dc11119e60"><!-- wp:site-logo /--></div>
<!-- /wp:frontis-blocks/container -->

<!-- wp:frontis-blocks/container {"p_block_id":"block-13613bfd-5231-4669-b7dd-c697f27d5e11","blockStyle":"#block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{max-width: 50%;width: 100%;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11 {max-width: 50%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11 {max-width: 100%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","customWidth":{"Desktop":50,"Tablet":50,"Mobile":100},"globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"widthSetByUser":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11 child " id="block-13613bfd-5231-4669-b7dd-c697f27d5e11"><!-- wp:navigation {"ref":1047,"metadata":{"ignoredHookedBlocks":["woocommerce/customer-account","woocommerce/mini-cart"]}} /-->

<!-- wp:navigation {"ref":1047,"metadata":{"ignoredHookedBlocks":["woocommerce/customer-account"]}} /--></div>
<!-- /wp:frontis-blocks/container -->

<!-- wp:frontis-blocks/container {"p_block_id":"block-de53b0da-1f6b-4924-9f6e-a537b357d233","blockStyle":"#block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: flex-end;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{max-width: 25%;width: 100%;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{display: flex;flex-direction: row;align-items: center;justify-content: flex-end;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233 {max-width: 25%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233 {max-width: 100%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","customWidth":{"Desktop":25,"Tablet":25,"Mobile":100},"globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"containerJustify":{"Desktop":"flex-end","Tablet":"","Mobile":""},"containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"widthSetByUser":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233 child " id="block-de53b0da-1f6b-4924-9f6e-a537b357d233"><!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Contact us</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:frontis-blocks/container --></div></div>
<!-- /wp:frontis-blocks/container -->'
        );

        $this->process_template_parts($template_parts);
    }

    function create_template_part($content, $slug, $title, $area, $navigations) {
        // Check if template parts are supported
        if ( ! function_exists( 'wp_is_block_theme' ) || ! wp_is_block_theme() ) {
            return;
        }
        
        $content = $this->create_navigation_with_assign($content, $navigations);

        // Check if the template part already exists
        $existing_template_part = get_posts( array(
            'post_type'      => 'wp_template_part',
            'post_status'    => 'publish',
            'name'           => $slug,
            'posts_per_page' => 1,
            'fields'         => 'ids',
            'tax_query'      => array(
                array(
                    'taxonomy' => 'wp_theme',
                    'field'    => 'slug',
                    'terms'    => get_stylesheet(), // Current theme
                ),
            ),
        ) );
    
        $post_data = array(
            'post_content' => $content,
            'post_title'   => $title,
            'post_name'    => $slug,
            'post_type'    => 'wp_template_part',
            'post_status'  => 'publish',
            'tax_input'    => array(
                'wp_theme' => get_stylesheet(),
            ),
        );
    
        if ( ! empty( $existing_template_part ) ) {
            // Update existing
            $post_data['ID'] = $existing_template_part[0];
            wp_update_post( $post_data );
        } else {
            // Insert new
            $post_id = wp_insert_post( $post_data );
    
            // Assign to theme taxonomy
            if ( $post_id ) {
                wp_set_object_terms( $post_id, get_stylesheet(), 'wp_theme' );
            }
        }
    
        wp_set_object_terms( $post_id ?? $existing_template_part[0], $$area, 'wp_template_part_area' );
    }

    public function push_template_parts() {
        $this->check_permission();

        $parts_data = [];
        if (isset($_POST['parts']) && is_array($_POST['parts'])) {
            foreach ($_POST['parts'] as $part) {
                $this->create_template_part($part['content'], $part['slug'], $part['title'], $part['area'], $part['navigations']);
            }
        }
    
        wp_send_json_success([
            'message'  => 'Template parts created',
        ]);
    }

}
