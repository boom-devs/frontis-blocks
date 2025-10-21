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

    function install_active_plugins() {
        
    }

    // function upload_files() {
    //     $tempZipFile = null;
    //     $uploads_dir = null;
    //     $zip_url = 'https://templates.frontiswp.com/melinoe/wp-content/uploads/sites/14/2025.zip';
        
    //     try {
            
    //         // Get the WordPress uploads directory
    //         $uploads_dir = wp_upload_dir();
    //         $destination = trailingslashit($uploads_dir['basedir']); // This is the uploads folder
            
    //         // Ensure the uploads directory exists
    //         if (!is_dir($destination)) {
    //             wp_mkdir_p($destination);
    //         }
            
    //         // Create temporary file
    //         $tempZipFile = tempnam(sys_get_temp_dir(), 'downloaded_zip_');
            
    //         if (!$tempZipFile) {
    //             throw new Exception('Failed to create temporary file');
    //         }
            
    //         // Download the zip file using cURL
    //         $ch = curl_init($zip_url);
            
    //         if (!$ch) {
    //             throw new Exception('Failed to initialize cURL');
    //         }
            
    //         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //         curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    //         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    //         curl_setopt($ch, CURLOPT_TIMEOUT, 300);
    //         curl_setopt($ch, CURLOPT_USERAGENT, 'WordPress/' . get_bloginfo('version'));
            
    //         $data = curl_exec($ch);
    //         $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            
    //         if (curl_errno($ch)) {
    //             $error = curl_error($ch);
    //             curl_close($ch);
    //             throw new Exception('cURL Error: ' . $error);
    //         }
            
    //         curl_close($ch);
            
    //         if ($data === false || empty($data)) {
    //             throw new Exception('Failed to download file from URL');
    //         }
            
    //         if ($httpCode !== 200) {
    //             throw new Exception('HTTP Error: ' . $httpCode);
    //         }
            
    //         if (file_put_contents($tempZipFile, $data) === false) {
    //             throw new Exception('Failed to save downloaded data to temporary file');
    //         }
            
    //         if (!file_exists($tempZipFile) || filesize($tempZipFile) == 0) {
    //             throw new Exception('Temporary zip file is empty or missing');
    //         }
            
    //         // Extract using proper PclZip parameters
    //         $zip = new PclZip($tempZipFile);
            
    //         // First, get the zip content to analyze structure
    //         $content = $zip->listContent();
    //         if ($content == 0) {
    //             throw new Exception('Failed to read zip content: ' . $zip->errorInfo(true));
    //         }
            
    //         $extracted_files = [];
    //         $extracted_count = 0;
            
    //         // Extract each file individually to flatten structure
    //         foreach ($content as $file_info) {
    //             // Skip directories
    //             if (isset($file_info['folder']) && $file_info['folder']) {
    //                 continue;
    //             }
                
    //             $original_filename = $file_info['filename'];
                
    //             // Get just the filename (remove directory structure)
    //             $filename = basename($original_filename);
                
    //             // Skip if filename is empty or contains directory separators
    //             if (empty($filename) || strpos($filename, '/') !== false || strpos($filename, '\\') !== false) {
    //                 continue;
    //             }
                
    //             // Create full target path in uploads directory
    //             $target_path = $destination . $filename;
                
    //             // Check if file already exists (optional: you can skip or overwrite)
    //             if (file_exists($target_path)) {
    //                 // Option 1: Skip existing files
    //                 // continue;
                    
    //                 // Option 2: Overwrite existing files
    //                 unlink($target_path);
    //             }
                
    //             // Extract single file using its index
    //             $result = $zip->extractByIndex(
    //                 $file_info['index'],
    //                 PCLZIP_OPT_PATH, $destination,
    //                 PCLZIP_OPT_REPLACE_NEWER
    //             );
                
    //             if ($result == 0) {
    //                 error_log('Failed to extract ' . $original_filename . ': ' . $zip->errorInfo(true));
    //             } else {
    //                 // Verify the file was actually extracted with correct name
    //                 if (file_exists($target_path)) {
    //                     $extracted_files[] = $filename;
    //                     $extracted_count++;
    //                 }
    //             }
    //         }
            
    //         // Clean up temp file
    //         if (file_exists($tempZipFile)) {
    //             unlink($tempZipFile);
    //         }
            
    //         // Set success headers
    //         header("Content-type: application/json; charset=utf-8");
    //         http_response_code(200);
            
    //         return [
    //             'success' => true,
    //             'message' => 'Files extracted successfully to uploads folder',
    //             'path' => $destination,
    //             'extracted_files' => $extracted_count,
    //             'files' => $extracted_files
    //         ];
            
    //     } catch (Exception $e) {
    //         if ($tempZipFile && file_exists($tempZipFile)) {
    //             unlink($tempZipFile);
    //         }
            
    //         header("Content-type: application/json; charset=utf-8");
    //         http_response_code(500);
            
    //         return false;
    //     }
    // }

    function upload_files() {
        check_ajax_referer('wp_rest', 'security');
    
        $zip_url = isset($_POST['uploads']) ? esc_url_raw($_POST['uploads']) : '';
    
        if (empty($zip_url) || !filter_var($zip_url, FILTER_VALIDATE_URL)) {
            wp_send_json_error(['message' => 'Invalid or missing ZIP URL']);
        }
    
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/class-pclzip.php';
    
        $upload_dir = wp_upload_dir();
        $destination = trailingslashit($upload_dir['basedir']);
    
        // ensure upload dir
        if (!is_dir($destination)) {
            wp_mkdir_p($destination);
        }
    
        $tempZipFile = null;
    
        try {
            // Create temp file
            $tempZipFile = tempnam(sys_get_temp_dir(), 'downloaded_zip_');
            if (!$tempZipFile) {
                wp_send_json_error(['message' => 'Failed to create temporary file']);
            }
    
            // cURL download
            $ch = curl_init($zip_url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_TIMEOUT, 300);
    
            $data = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
    
            if ($httpCode !== 200 || empty($data)) {
                wp_send_json_error(['message' => 'Download failed or invalid ZIP']);
            }
    
            // Save to temp file
            file_put_contents($tempZipFile, $data);
    
            // unzip using PclZip
            $zip = new PclZip($tempZipFile);
            $content = $zip->listContent();
            if ($content == 0) {
                wp_send_json_error(['message' => 'Failed to read ZIP content']);
            }
    
            $extracted_files_total = 0;
            foreach ($content as $file_info) {
                if (!empty($file_info['folder'])) continue;
                $filename = basename($file_info['filename']);
                if (!$filename) continue;
    
                $zip->extractByIndex(
                    $file_info['index'],
                    PCLZIP_OPT_PATH, $destination,
                    PCLZIP_OPT_REPLACE_NEWER
                );
    
                if (file_exists($destination . $filename)) {
                    $extracted_files_total++;
                }
            }
    
        } finally {
            if ($tempZipFile && file_exists($tempZipFile)) {
                unlink($tempZipFile);
            }
        }
    
        wp_send_json_success([
            'message' => 'ZIP extracted successfully',
            'count'   => $extracted_files_total,
            'path'    => $destination
        ]);
    }    
    
    public function active_theme() {
        $theme_slug = 'frontis';
        $theme_information = wp_remote_get("https://api.wordpress.org/themes/info/1.1/?action=query_themes&request[theme]={$theme_slug}");
        $theme_information_response = json_decode($theme_information['body'], true);       
        $themes = wp_get_themes();
        $theme_exist = false;

        if($themes) {
            foreach($themes as $key => $theme) {
                if($key === $theme_slug) {
                    $theme_exist = true;
                }
                
                continue;
            }
        }
        
        $theme_version = $theme_information_response['themes'][0]['version'];
        if(!$theme_exist) {
            $download_url = "https://downloads.wordpress.org/theme/{$theme_slug}.{$theme_version}.zip";
            $upload = wp_upload_bits('temp-' . $theme_slug . '.zip', null, '');
            
            if ($upload['error']) {
                wp_die('Upload error: ' . $upload['error']);
            }
            
            $temp_zip_path = $upload['file'];
            
            // Download using wp_remote_get with stream to file
            $download_result = wp_remote_get($download_url, array(
                'timeout' => 300,
                'stream' => true,
                'filename' => $temp_zip_path
            ));
            
            if (is_wp_error($download_result)) {
                wp_die('Download failed: ' . $download_result->get_error_message());
            }
            
            // Verify download
            if (!file_exists($temp_zip_path) || filesize($temp_zip_path) == 0) {
                wp_die('Downloaded file is empty or missing');
            }
            
            $themes_dir = WP_CONTENT_DIR . '/themes';
            $extract_path = $themes_dir . '/' . $theme_slug;
            
            // Create themes directory if it doesn't exist
            if (!file_exists($themes_dir)) {
                wp_mkdir_p($themes_dir);
            }
            
            // Remove existing directory if it exists (backup first)
            if (file_exists($extract_path)) {
                $backup_dir = $extract_path . '_backup_' . time();
                rename($extract_path, $backup_dir);
            }
            
            // Initialize PclZip
            $archive = new PclZip($temp_zip_path);
            
            // Extract to themes directory
            $extract_result = $archive->extract(PCLZIP_OPT_PATH, $themes_dir);
            
            if ($extract_result == 0) {
                wp_die('PclZip extraction failed: ' . $archive->errorInfo(true));
            }
            
            // Clean up temp zip file
            unlink($temp_zip_path);
            
            // Verify extraction by checking for style.css
            $style_css_path = $extract_path . '/style.css';
            if (!file_exists($style_css_path)) {
                wp_die('Theme extraction failed - style.css not found at: ' . $style_css_path);
            }
            
            // Remove any parent directories created by extraction (zip often has extra folder)
            $extracted_dirs = glob($themes_dir . '/' . $theme_slug . '*');
            if (count($extracted_dirs) > 1 || (count($extracted_dirs) == 1 && basename($extracted_dirs[0]) != $theme_slug)) {
                // Move contents from subfolder to correct location
                foreach ($extracted_dirs as $dir) {
                    if (is_dir($dir) && basename($dir) != $theme_slug) {
                        $iterator = new RecursiveIteratorIterator(
                            new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
                            RecursiveIteratorIterator::SELF_FIRST
                        );
                        
                        foreach ($iterator as $item) {
                            $dest = str_replace($dir, $extract_path, $item->getPathname());
                            if ($item->isDir()) {
                                wp_mkdir_p($dest);
                            } else {
                                copy($item->getPathname(), $dest);
                            }
                        }
                        // Remove the extra directory
                        $this->rmdir_recursive($dir);
                    }
                }
            }
        }
        
        // Activate the theme
        $activate_result = switch_theme($theme_slug);
        
        if (is_wp_error($activate_result)) {
            return false;
        }

        return true;
    }


    public function full_site_import() {
        $this->check_permission();

        $this->upload_files();
        $this->install_active_plugins();
        $this->active_theme();
    
        $title   = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
        $content = isset($_POST['content']) ? $_POST['content'] : '';
    
        if (empty($title)) {
            wp_send_json_error(['message' => 'Title is required']);
        }

        if($uploads_updated) {
            $my_domain = 'http://boomdevsco.test/';
            preg_match_all('/https?:\/\/[^"\'\s>]+?\.(jpg|jpeg|png|gif|webp|svg)/i', $content, $matches);
    
            if (!empty($matches[0])) {
                $image_urls = array_unique($matches[0]);
    
                foreach ($image_urls as $url) {
    
                    // If URL contains "2025"
                    if (preg_match('/\/2025\//', $url)) {
                        // Replace everything before 2025 with your given URL
                        $new_url = preg_replace('/^https?:\/\/[^\/]+\/.*?(?=2025\/)/', $my_domain . 'wp-content/uploads/', $url);
                    } else {
                        // Replace only the domain name
                        $new_url = preg_replace('/^https?:\/\/[^\/]+\//', $my_domain, $url);
                    }
    
                    // Replace inside content
                    $content = str_replace($url, $new_url, $content);
                }
            }
        }

        $page_id = wp_insert_post([
            'post_title'   => $title,
            'post_content' => $content, // Save raw JSON directly
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ]);
    
        if ($page_id) {
            // Insert job using your existing Helper method
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
}
