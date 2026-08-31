<?php

/**
 * Plugin Name:       Frontis Blocks — Block Library for the Block Editor
 * Plugin URI:        https://wpmessiah.com/products/frontis-blocks/
 * Description:       A blocks library for the Gutenberg editor.
 * Version:           1.2.5-beta1
 * Author:            WPmessiah
 * Author URI:        https://wpmessiah.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       frontis-blocks
 * Domain Path:       /languages
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define things
define('FB_PLUGIN_FILE', __FILE__);
define('PORTAL_API', 'https://template-library.frontiswp.com');
define('WORDPRESS_SYNC_API', 'https://sync.frontiswp.com');

/**
 * Autoloader
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Initialize plugin
 */
function frontis_blocks()
{
    FrontisBlocks\Activator\Activator::get_instance();
    FrontisBlocks\Plugin::get_instance();
}

frontis_blocks();
