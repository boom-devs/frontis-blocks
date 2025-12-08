<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class SupportRive {
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
        add_filter('upload_mimes', [$this, 'allowRiveMimeType']);

        // Initialize WP_Filesystem
        if (!function_exists('WP_Filesystem')) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        WP_Filesystem();
        global $wp_filesystem;
        $this->wpFilesystem = $wp_filesystem;
    }

    /**
     * Allow Rive MIME type in uploads.
     * 
     * @param array $mimes
     * @return array
     */
    public function allowRiveMimeType(array $mimes): array {
        $mimes['riv'] = 'application/octet-stream';
        return $mimes;
    }
}