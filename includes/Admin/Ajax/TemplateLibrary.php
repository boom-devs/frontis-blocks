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
            'get_template_parts'
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
    

    public function full_site_import() {
        $this->check_permission();
    
        $title            = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
        $content          = isset($_POST['content']) ? $_POST['content'] : '';
        $site_url         = isset($_POST['site_url']) ? sanitize_text_field($_POST['site_url']) : '';
        $uploads_updated  = isset($_POST['uploads_updated']) ? sanitize_text_field($_POST['uploads_updated']) : false;
    
        if (empty($title)) {
            wp_send_json_error(['message' => 'Title is required']);
        }
    
        if ($uploads_updated) {
            $my_domain = trailingslashit($site_url);
            preg_match_all('/https?:\/\/[^"\'\s>]+?\.(jpg|jpeg|png|gif|webp|svg)/i', $content, $matches);
    
            if (!empty($matches[0])) {
                $image_urls = array_unique($matches[0]);
    
                foreach ($image_urls as $url) {
    
                    if (preg_match('/\/2025\//', $url)) {
                        $new_url = preg_replace(
                            '/^https?:\/\/[^\/]+\/.*?(?=2025\/)/',
                            $my_domain . 'wp-content/uploads/',
                            $url
                        );
                    } else {
                        $new_url = preg_replace(
                            '/^https?:\/\/[^\/]+\//',
                            $my_domain,
                            $url
                        );
                    }
    
                    $content = str_replace($url, $new_url, $content);
                }
            }
        }
    
        // Ensure unique title
        $original_title = $title;
        $suffix = 1;
        while (post_exists($title)) {
            $title = $original_title . ' ' . $suffix;
            $suffix++;
        }
    
        $page_id = wp_insert_post([
            'post_title'   => $title,
            'post_content' => $content,
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ]);
    
        if ($page_id) {
    
            // Make front page if imported title contains "home"
            if (stripos($title, 'home') !== false) {
                update_option('page_on_front', $page_id);
                update_option('show_on_front', 'page');
            }
    
            Helper::insert_job($page_id, $title . $page_id);
    
            wp_send_json_success([
                'message' => 'Page created successfully',
                'page_id' => $page_id,
                'title'   => $title
            ]);
        } else {
            wp_send_json_error(['message' => 'Failed to create page']);
        }
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

    // /**
    //  * Get templates by post type and name.
    //  *
    //  * @param string $post_type Post type to filter templates.
    //  * @return WP_Block_Template[] Array of matching templates.
    //  */
    // public function get_templates_by_post_type_and_name( $post_type ) {
    //     $templates = get_block_templates(
    //         array(
    //             'post_type'  => array( $post_type ), // Filter by specific post type(s).
    //             'slug__like' => 'fb-template',       // Partial match on slug.
    //         ),
    //         'wp_template' // Specify template type.
    //     );

    //     $matching_templates = array_filter(
    //         $templates,
    //         function( $template ) use ( $post_type ) {
    //             return strpos( $template->slug, 'fb-template' ) !== false &&
    //                    ( empty( $template->post_types ) || in_array( $post_type, (array) $template->post_types, true ) );
    //         }
    //     );

    //     return array_values( $matching_templates ); // Reindex array.
    // }

    // /**
    //  * AJAX handler to get templates.
    //  */
    // public function get_templates() {
    //     $this->check_permission();

    //     $post_type = isset( $_POST['post_type'] ) ? sanitize_text_field( wp_unslash( $_POST['post_type'] ) ) : 'page';

    //     $templates = $this->get_templates_by_post_type_and_name( $post_type );

    //     if ( ! empty( $templates ) ) {
    //         $output = [];
    //         foreach ( $templates as $template ) {
    //             $output[] = [
    //                 'id'    => $template->id,
    //                 'slug'  => $template->slug,
    //                 'title' => $template->title,
    //                 'content' => $template->content, // Optional: Include content if needed.
    //             ];
    //         }
    //         wp_send_json_success( [ 'templates' => $output ] );
    //     } else {
    //         wp_send_json_error( [ 'message' => 'No matching templates found' ] );
    //     }
    // }

    // /**
    //  * Get header and footer template parts for a single template by slug.
    //  *
    //  * @param string $template_slug The slug or full ID of the template.
    //  * @return array Array of header and footer template parts.
    //  */
    // public function get_header_footer_by_template_slug($template_slug)
    // {
    //     // Normalize slug (remove theme prefix if present).
    //     $slug_parts = explode('//', $template_slug);
    //     $template_slug = end($slug_parts);
    //     error_log('get_header_footer_by_template_slug called with slug: ' . $template_slug);

    //     // Fetch the template.
    //     $templates = get_block_templates(
    //         [
    //             'slug' => $template_slug,
    //         ],
    //         'wp_template'
    //     );

    //     if (empty($templates)) {
    //         error_log('No template found for slug: ' . $template_slug);
    //         return [];
    //     }

    //     $template = reset($templates);
    //     error_log('Template found: ' . print_r([
    //         'id' => $template->id,
    //         'slug' => $template->slug,
    //         'title' => $template->title,
    //     ], true));

    //     $header_footer_parts = [];

    //     // Parse template content for wp:template-part blocks.
    //     $blocks = parse_blocks($template->content);
    //     error_log('Parsed blocks: ' . count($blocks));

    //     foreach ($blocks as $block) {
    //         if ($block['blockName'] === 'core/template-part' && !empty($block['attrs']['slug'])) {
    //             $part_slug = $block['attrs']['slug'];
    //             error_log('Found template-part block with slug: ' . $part_slug);

    //             // Query wp_template_part by slug.
    //             $args = [
    //                 'post_type'      => 'wp_template_part',
    //                 'posts_per_page' => 1,
    //                 'post_status'    => 'publish',
    //                 'name'           => $part_slug,
    //                 'meta_query'     => [
    //                     [
    //                         'key'     => 'area',
    //                         'value'   => ['header', 'footer'],
    //                         'compare' => 'IN',
    //                     ],
    //                 ],
    //             ];

    //             $parts = get_posts($args);
    //             if (!empty($parts)) {
    //                 $part = reset($parts);
    //                 $area = get_post_meta($part->ID, 'area', true);
    //                 error_log('Found template part: ' . print_r([
    //                     'id' => $part->ID,
    //                     'slug' => $part->post_name,
    //                     'title' => $part->post_title,
    //                     'area' => $area,
    //                 ], true));

    //                 $header_footer_parts[] = [
    //                     'id'    => $part->ID,
    //                     'slug'  => $part->post_name,
    //                     'title' => $part->post_title,
    //                     'area'  => $area,
    //                     'content' => $part->post_content,
    //                 ];
    //             } else {
    //                 error_log('No template part found for slug: ' . $part_slug);
    //             }
    //         }
    //     }

    //     return $header_footer_parts;
    // }

    // /**
    //  * AJAX handler to get header/footer template parts for a template.
    //  */
    // public function get_template_parts()
    // {
    //     $this->check_permission();

    //     $template_slug = isset($_POST['template_slug']) ? sanitize_text_field(wp_unslash($_POST['template_slug'])) : '';

    //     if (empty($template_slug)) {
    //         wp_send_json_error(['message' => 'Template slug is required'], 400);
    //         return;
    //     }

    //     $template_parts = $this->get_header_footer_by_template_slug($template_slug);


    //     if (!empty($template_parts)) {
    //         wp_send_json_success(['template_parts' => $template_parts]);
    //     } else {
    //         wp_send_json_error([
    //             'message' => 'No header/footer template parts found for template: ' . $template_slug,
    //             'slug' => $template_slug,
    //         ]);
    //     }
    // }

    // /**
    //  * AJAX handler to push custom header/footer content.
    //  */
    // public function push_template_parts()
    // {
    //     $this->check_permission();

    //     $template_slug = isset($_POST['template_slug']) ? sanitize_text_field(wp_unslash($_POST['template_slug'])) : '';
    //     $header_content = isset($_POST['header_content']) ? wp_kses_post(wp_unslash($_POST['header_content'])) : '';
    //     $footer_content = isset($_POST['footer_content']) ? wp_kses_post(wp_unslash($_POST['footer_content'])) : '';

    //     if (empty($template_slug)) {
    //         wp_send_json_error(['message' => 'Template slug is required'], 400);
    //         return;
    //     }

    //     // Normalize slug.
    //     $slug_parts = explode('//', $template_slug);
    //     $template_slug = end($slug_parts);

    //     // Get existing template parts.
    //     $template_parts = $this->get_header_footer_by_template_slug($template_slug);
    //     $header_id = null;
    //     $footer_id = null;

    //     foreach ($template_parts as $part) {
    //         if ($part['area'] === 'header') {
    //             $header_id = $part['id'];
    //         } elseif ($part['area'] === 'footer') {
    //             $footer_id = $part['id'];
    //         }
    //     }

    //     // Create or update header.
    //     if ($header_content) {
    //         $header_args = [
    //             'post_type'    => 'wp_template_part',
    //             'post_status'  => 'publish',
    //             'post_name'    => 'header-' . $template_slug, // Unique slug.
    //             'post_title'   => 'Header for ' . $template_slug,
    //             'post_content' => $header_content,
    //             'meta_input'   => [
    //                 'area' => 'header',
    //                 'theme' => 'frontis', // Match theme from template.
    //             ],
    //         ];

    //         if ($header_id) {
    //             $header_args['ID'] = $header_id;
    //             wp_update_post($header_args);
    //             error_log('Updated header for template: ' . $template_slug);
    //         } else {
    //             $header_id = wp_insert_post($header_args);
    //             error_log('Created header for template: ' . $template_slug . ', ID: ' . $header_id);
    //         }
    //     }

    //     // Create or update footer.
    //     if ($footer_content) {
    //         $footer_args = [
    //             'post_type'    => 'wp_template_part',
    //             'post_status'  => 'publish',
    //             'post_name'    => 'footer-' . $template_slug, // Unique slug.
    //             'post_title'   => 'Footer for ' . $template_slug,
    //             'post_content' => $footer_content,
    //             'meta_input'   => [
    //                 'area' => 'footer',
    //                 'theme' => 'frontis',
    //             ],
    //         ];

    //         if ($footer_id) {
    //             $footer_args['ID'] = $footer_id;
    //             wp_update_post($footer_args);
    //             error_log('Updated footer for template: ' . $template_slug);
    //         } else {
    //             $footer_id = wp_insert_post($footer_args);
    //             error_log('Created footer for template: ' . $template_slug . ', ID: ' . $footer_id);
    //         }
    //     }

    //     // Update template content to reference new template parts.
    //     if ($header_id || $footer_id) {
    //         $templates = get_block_templates(['slug' => $template_slug], 'wp_template');
    //         if (!empty($templates)) {
    //             $template = reset($templates);
    //             $content = $template->content;
    //             if ($header_id) {
    //                 $content = preg_replace(
    //                     '/<!-- wp:template-part {"slug":"header".*?} \/-->/',
    //                     '<!-- wp:template-part {"slug":"header-' . $template_slug . '","theme":"frontis","tagName":"header"} /-->',
    //                     $content
    //                 );
    //             }
    //             if ($footer_id) {
    //                 $content = preg_replace(
    //                     '/<!-- wp:template-part {"slug":"footer".*?} \/-->/',
    //                     '<!-- wp:template-part {"slug":"footer-' . $template_slug . '","theme":"frontis","tagName":"footer"} /-->',
    //                     $content
    //                 );
    //             }
    //             wp_update_post([
    //                 'ID' => $template->wp_id,
    //                 'post_content' => $content,
    //             ]);
    //             error_log('Updated template content for: ' . $template_slug);
    //         }
    //     }

    //     wp_send_json_success([
    //         'message' => 'Header/footer pushed successfully',
    //         'header_id' => $header_id,
    //         'footer_id' => $footer_id,
    //     ]);
    // }
}
