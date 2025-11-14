<?php

/**
 * Plugin Name:       Frontis Blocks – The Ultimate WordPress Block Plugin
 * Plugin URI:        https://wpmessiah.com/products/frontis-blocks/
 * Description:       The ultimate blocks library for Gutenberg editor.
 * Version:           1.1.2
 * Author:            WPmessiah
 * Author URI:        https://wpmessiah.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       frontis-blocks
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define things
define( 'FB_PLUGIN_FILE', __FILE__ );
define( 'PORTAL_API', 'https://template-library.boomdevshub.com' );
define( 'WORDPRESS_SYNC_API', 'https://frontis-sync.boomdevshub.com' );

/**
 * Autoloader
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Initialize plugin
 */
function frontis_blocks(){
    FrontisBlocks\Activator\Activator::get_instance();
    FrontisBlocks\Plugin::get_instance();
}

frontis_blocks();

// upload_files();

function upload_files() {
    $tempZipFile = null;
    $uploads_dir = null;
    $zip_url = 'https://templates.frontiswp.com/melinoe/wp-content/uploads/sites/14/2025.zip';
    
    try {
        // Include PclZip
        require_once(ABSPATH . 'wp-admin/includes/class-pclzip.php');
        
        // Get the WordPress uploads directory
        $uploads_dir = wp_upload_dir();
        $destination = trailingslashit($uploads_dir['basedir']); // This is the uploads folder
        
        // Ensure the uploads directory exists
        if (!is_dir($destination)) {
            wp_mkdir_p($destination);
        }
        
        // Create temporary file
        $tempZipFile = tempnam(sys_get_temp_dir(), 'downloaded_zip_');
        
        if (!$tempZipFile) {
            throw new Exception('Failed to create temporary file');
        }
        
        // Download the zip file using cURL
        $ch = curl_init($zip_url);
        
        if (!$ch) {
            throw new Exception('Failed to initialize cURL');
        }
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 300);
        curl_setopt($ch, CURLOPT_USERAGENT, 'WordPress/' . get_bloginfo('version'));
        
        $data = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        
        if (curl_errno($ch)) {
            $error = curl_error($ch);
            curl_close($ch);
            throw new Exception('cURL Error: ' . $error);
        }
        
        curl_close($ch);
        
        if ($data === false || empty($data)) {
            throw new Exception('Failed to download file from URL');
        }
        
        if ($httpCode !== 200) {
            throw new Exception('HTTP Error: ' . $httpCode);
        }
        
        if (file_put_contents($tempZipFile, $data) === false) {
            throw new Exception('Failed to save downloaded data to temporary file');
        }
        
        if (!file_exists($tempZipFile) || filesize($tempZipFile) == 0) {
            throw new Exception('Temporary zip file is empty or missing');
        }
        
        // Extract using proper PclZip parameters
        $zip = new PclZip($tempZipFile);
        
        // First, get the zip content to analyze structure
        $content = $zip->listContent();
        if ($content == 0) {
            throw new Exception('Failed to read zip content: ' . $zip->errorInfo(true));
        }
        
        $extracted_files = [];
        $extracted_count = 0;
        
        // Extract each file individually to flatten structure
        foreach ($content as $file_info) {
            // Skip directories
            if (isset($file_info['folder']) && $file_info['folder']) {
                continue;
            }
            
            $original_filename = $file_info['filename'];
            
            // Get just the filename (remove directory structure)
            $filename = basename($original_filename);
            
            // Skip if filename is empty or contains directory separators
            if (empty($filename) || strpos($filename, '/') !== false || strpos($filename, '\\') !== false) {
                continue;
            }
            
            // Create full target path in uploads directory
            $target_path = $destination . $filename;
            
            // Check if file already exists (optional: you can skip or overwrite)
            if (file_exists($target_path)) {
                // Option 1: Skip existing files
                // continue;
                
                // Option 2: Overwrite existing files
                unlink($target_path);
            }
            
            // Extract single file using its index
            $result = $zip->extractByIndex(
                $file_info['index'],
                PCLZIP_OPT_PATH, $destination,
                PCLZIP_OPT_REPLACE_NEWER
            );
            
            if ($result == 0) {
                error_log('Failed to extract ' . $original_filename . ': ' . $zip->errorInfo(true));
            } else {
                // Verify the file was actually extracted with correct name
                if (file_exists($target_path)) {
                    $extracted_files[] = $filename;
                    $extracted_count++;
                }
            }
        }
        
        // Clean up temp file
        if (file_exists($tempZipFile)) {
            unlink($tempZipFile);
        }
        
        // Set success headers
        header("Content-type: application/json; charset=utf-8");
        http_response_code(200);
        
        return [
            'success' => true,
            'message' => 'Files extracted successfully to uploads folder',
            'path' => $destination,
            'extracted_files' => $extracted_count,
            'files' => $extracted_files
        ];
        
    } catch (Exception $e) {
        if ($tempZipFile && file_exists($tempZipFile)) {
            unlink($tempZipFile);
        }
        
        header("Content-type: application/json; charset=utf-8");
        http_response_code(500);
        
        return [
            'success' => false,
            'message' => $e->getMessage(),
            'error' => 'Extraction to uploads folder failed'
        ];
    }
}