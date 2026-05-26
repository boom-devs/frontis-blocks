<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class SupportSVG {
    use Singleton;

    /**
     * WP_Filesystem instance
     * 
     * @var \WP_Filesystem_Base
     */
    private $wpFilesystem;

    /**
     * Constructor
     */
    public function __construct() {
        // Prevent PHP warnings/notices from corrupting JSON responses during AJAX and REST API requests
        if ((function_exists('wp_doing_ajax') && wp_doing_ajax()) || (defined('REST_REQUEST') && REST_REQUEST)) {
            @ini_set('display_errors', 0);
        }
        add_action('rest_api_init', function() {
            @ini_set('display_errors', 0);
        });

        add_filter('upload_mimes', [$this, 'allowSvgMimeType']);
        add_filter('wp_handle_upload_prefilter', [$this, 'validateSvgUpload']);
        add_filter('wp_prepare_attachment_for_js', [$this, 'fixSvgThumbnail']);
        
        // Register filters to generate and fetch correct SVG dimensions (prevents core warnings)
        add_filter('wp_generate_attachment_metadata', [$this, 'generateSvgAttachmentMetadata'], 10, 2);
        add_filter('wp_get_attachment_metadata', [$this, 'getSvgAttachmentMetadata'], 10, 2);

        // Register the SVG filetype support directly so it is available in REST API (wp-json) requests.
        $this->enableSvgSupport();

        // Initialize WP_Filesystem
        if (!function_exists('WP_Filesystem')) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        WP_Filesystem();
        global $wp_filesystem;
        $this->wpFilesystem = $wp_filesystem;
    }

    /**
     * Allow SVG MIME type in uploads.
     * 
     * @param array $mimes
     * @return array
     */
    public function allowSvgMimeType(array $mimes): array {
        $mimes['svg'] = 'image/svg+xml';
        $mimes['svgz'] = 'image/svg+xml';
        return $mimes;
    }

    /**
     * Validate the uploaded SVG file.
     * 
     * @param array $file
     * @return array
     */
    public function validateSvgUpload(array $file): array {
        if (!empty($file['error'])) {
            return $file;
        }

        if ($file['type'] !== 'image/svg+xml') {
            return $file;
        }

        // Validate file extension
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        if (!in_array($extension, ['svg', 'svgz'], true)) {
            $file['error'] = __('Invalid SVG file extension.', 'frontis-blocks');
            return $file;
        }

        // Read file content with fallback to native PHP functions if WP_Filesystem is not initialized
        $content = '';
        $exists = $this->wpFilesystem ? $this->wpFilesystem->exists($file['tmp_name']) : file_exists($file['tmp_name']);
        if (!$exists) {
            $file['error'] = __('Unable to locate uploaded file.', 'frontis-blocks');
            return $file;
        }

        $content = $this->wpFilesystem ? $this->wpFilesystem->get_contents($file['tmp_name']) : file_get_contents($file['tmp_name']);
        if (!$content) {
            $file['error'] = __('Unable to read SVG file.', 'frontis-blocks');
            return $file;
        }

        // Validate SVG structure
        libxml_use_internal_errors(true);
        $doc = new \DOMDocument();
        if (!@$doc->loadXML($content, LIBXML_NOENT | LIBXML_DTDLOAD | LIBXML_NOERROR | LIBXML_NOWARNING)) {
            $file['error'] = __('Invalid SVG XML structure.', 'frontis-blocks');
            libxml_clear_errors();
            return $file;
        }

        // Check for prohibited elements and attributes
        $isValid = $this->validateSvgContent($doc);
        if (!$isValid) {
            $file['error'] = __('SVG contains prohibited elements or attributes.', 'frontis-blocks');
            return $file;
        }

        // Sanitize SVG content
        $sanitizedContent = $this->sanitizeSvgContent($content);
        $saved = $this->wpFilesystem ? $this->wpFilesystem->put_contents($file['tmp_name'], $sanitizedContent) : (file_put_contents($file['tmp_name'], $sanitizedContent) !== false);
        if (!$saved) {
            $file['error'] = __('Unable to save sanitized SVG file.', 'frontis-blocks');
            return $file;
        }

        return $file;
    }

    /**
     * Fix SVG thumbnail display in the media library.
     * 
     * @param array $response
     * @return array
     */
    public function fixSvgThumbnail(array $response): array {
        if ($response['mime'] === 'image/svg+xml') {
            $response['sizes'] = [
                'full' => [
                    'url' => $response['url'],
                    'width' => $response['width'],
                    'height' => $response['height'],
                    'orientation' => $response['orientation'],
                ],
            ];
        }
        return $response;
    }

    /**
     * Enable SVG support by updating file type checks.
     */
    public function enableSvgSupport(): void {
        add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            if (in_array(strtolower($ext), ['svg', 'svgz'], true)) {
                $filetype = wp_check_filetype($filename, $mimes);
                return [
                    'ext'             => $filetype['ext'],
                    'type'            => $filetype['type'],
                    'proper_filename' => is_array($data) && isset($data['proper_filename']) ? $data['proper_filename'] : false,
                ];
            }
            return $data;
        }, 10, 4);
    }

    /**
     * Validate the SVG content for prohibited elements and attributes.
     * 
     * @param \DOMDocument $doc
     * @return bool
     */
    private function validateSvgContent(\DOMDocument $doc): bool {
        $xpath = new \DOMXPath($doc);

        // Prohibited elements
        $prohibitedElements = ['script', 'iframe'];
        foreach ($prohibitedElements as $tag) {
            if ($xpath->query("//{$tag}")->length > 0) {
                return false;
            }
        }

        // Prohibited attributes
        $prohibitedAttributes = ['onclick', 'onload', 'onerror', 'xlink:href', 'javascript:', 'data:'];
        foreach ($prohibitedAttributes as $attr) {
            if ($xpath->query("//*[contains(@*, '{$attr}')]")->length > 0) {
                return false;
            }
        }

        return true;
    }

    /**
     * Sanitize SVG content to remove unwanted elements and attributes.
     * 
     * @param string $content
     * @return string
     */
    private function sanitizeSvgContent(string $content): string {
        libxml_use_internal_errors(true);
        $doc = new \DOMDocument();
        @$doc->loadXML($content, LIBXML_NOENT | LIBXML_DTDLOAD | LIBXML_NOERROR | LIBXML_NOWARNING);

        // Remove comments
        $xpath = new \DOMXPath($doc);
        foreach ($xpath->query('//comment()') as $comment) {
            $comment->parentNode->removeChild($comment);
        }

        // Remove unsafe attributes
        $elements = $doc->getElementsByTagName('*');
        foreach ($elements as $element) {
            $attributes = [];
            foreach ($element->attributes as $attribute) {
                $attributes[] = $attribute->nodeName;
            }
            foreach ($attributes as $attribute) {
                if (strpos($attribute, 'on') === 0) {
                    $element->removeAttribute($attribute);
                }
            }
        }

        libxml_clear_errors();
        return $doc->saveXML();
    }

    /**
     * Generate attachment metadata for SVG files (adds width/height).
     * 
     * @param array|mixed $metadata
     * @param int         $attachment_id
     * @return array
     */
    public function generateSvgAttachmentMetadata($metadata, $attachment_id) {
        $mime_type = get_post_mime_type($attachment_id);
        if ($mime_type === 'image/svg+xml') {
            if (!is_array($metadata)) {
                $metadata = [];
            }
            if (empty($metadata['width']) || empty($metadata['height'])) {
                $file = get_attached_file($attachment_id);
                $dimensions = $this->getSvgDimensions($file);
                $metadata['width'] = $dimensions['width'];
                $metadata['height'] = $dimensions['height'];
            }
        }
        return $metadata;
    }

    /**
     * Retrieve attachment metadata for SVG files dynamically.
     * 
     * @param array|mixed $data
     * @param int         $post_id
     * @return array
     */
    public function getSvgAttachmentMetadata($data, $post_id) {
        $mime_type = get_post_mime_type($post_id);
        if ($mime_type === 'image/svg+xml') {
            if (!is_array($data)) {
                $data = [];
            }
            if (empty($data['width']) || empty($data['height'])) {
                $file = get_attached_file($post_id);
                $dimensions = $this->getSvgDimensions($file);
                $data['width'] = $dimensions['width'];
                $data['height'] = $dimensions['height'];
            }
        }
        return $data;
    }

    /**
     * Read and parse dimensions (width/height) from an SVG file.
     * 
     * @param string $file
     * @return array
     */
    private function getSvgDimensions($file): array {
        $default = ['width' => 100, 'height' => 100];
        if (!$file || !file_exists($file)) {
            return $default;
        }
        
        $content = file_get_contents($file);
        if (!$content) {
            return $default;
        }
        
        libxml_use_internal_errors(true);
        $svg = @simplexml_load_string($content);
        if (!$svg) {
            return $default;
        }
        
        $attributes = $svg->attributes();
        $width = isset($attributes->width) ? (string) $attributes->width : '';
        $height = isset($attributes->height) ? (string) $attributes->height : '';
        
        if (!$width || !$height) {
            $viewBox = isset($attributes->viewBox) ? (string) $attributes->viewBox : '';
            if ($viewBox) {
                $parts = preg_split('/[\s,]+/', trim($viewBox));
                if (count($parts) === 4) {
                    $width = $parts[2];
                    $height = $parts[3];
                }
            }
        }
        
        // Clean non-numeric characters (like 'px', 'em', '%')
        $width = preg_replace('/[^0-9.]/', '', $width);
        $height = preg_replace('/[^0-9.]/', '', $height);
        
        return [
            'width' => $width ? (int) $width : 100,
            'height' => $height ? (int) $height : 100,
        ];
    }
}
