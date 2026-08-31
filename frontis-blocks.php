<?php

/**
 * Plugin Name:       Frontis Blocks — Block Library for the Block Editor
 * Plugin URI:        https://wpmessiah.com/products/frontis-blocks/
 * Description:       A blocks library for the Gutenberg editor.
 * Version:           1.2.5-beta2
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

/**
 * Visual Test Notice: Displays the currently active plugin version in WP Admin.
 */
add_action('admin_notices', function () {
    echo '<div class="notice notice-success is-dismissible" style="border-left-color: #00a32a; padding: 12px 18px; background: #f0fdf4;">';
    echo '<p style="margin: 0; font-size: 15px; font-weight: 700; color: #166534;">';
    echo '🎉 Frontis Blocks Successfully Updated to Version: <span style="color: #00a32a; text-decoration: underline;">' . esc_html(FrontisBlocks\Plugin::VERSION) . '</span> (Test Banner)';
    echo '</p>';
    echo '</div>';
});
