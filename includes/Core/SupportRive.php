<?php

namespace FrontisBlocks\Core;

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Traits\Singleton;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class SupportRive {
    use Singleton;

    private $wpFilesystem;

    public function __construct() {
        add_filter('upload_mimes', [$this, 'allowRiveMimeType']);

        add_filter('wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {
            if (strpos($filename, '.json') !== false) {
                $data['ext']  = 'json';
                $data['type'] = 'application/json';
            }
            return $data;
        }, 10, 4);

        if (!function_exists('WP_Filesystem')) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }
        WP_Filesystem();

        global $wp_filesystem;
        $this->wpFilesystem = $wp_filesystem;
    }

    public function allowRiveMimeType(array $mimes): array {
        $mimes['riv']  = 'application/octet-stream';
        $mimes['json'] = 'application/json';

        return $mimes;
    }
}
