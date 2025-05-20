<?php

namespace FrontisBlocks\Utils;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Admin\Ajax\Settings;

defined('ABSPATH') || exit;

class PluginSetup {
    use Singleton;

    /**
     * Initialize plugin setup hooks.
     */
    public function init() {
        add_action('plugins_loaded', [$this, 'fb_set_initial_version']);
        add_action('upgrader_process_complete', [$this, 'fb_on_update'], 10, 2);
    }

    /**
     * Register activation hook (must be called from main plugin file)
     */
    public static function register_activation_hook() {
        register_activation_hook(FB_PLUGIN_FILE, function () {
            self::get_instance()->fb_on_activate();
        });
    }

    /**
     * Handle plugin activation
     */
    public function fb_on_activate() {
        $this->fb_update_version_and_generate_assets();
    }

    /**
     * Handle plugin update
     */
    public function fb_on_update($upgrader_object, $options) {
        if (
            $options['action'] === 'update' &&
            $options['type'] === 'plugin' &&
            isset($options['plugins']) &&
            in_array(FB_PLUGIN_BASENAME, $options['plugins'], true)
        ) {
            $this->fb_update_version_and_generate_assets();
        }
    }

    /**
     * Set the version if it was never saved before
     */
    public function fb_set_initial_version() {
        if (get_option('frontis_blocks_version') === false) {
            update_option('frontis_blocks_version', FB_VERSION);
        }
    }

    /**
     * Compare stored version and regenerate assets if needed
     */
    private function fb_update_version_and_generate_assets() {
        $saved_version = get_option('frontis_blocks_version');

        if ($saved_version !== FB_VERSION) {
            update_option('frontis_blocks_version', FB_VERSION);

            Settings::get_instance()->generate_assets_on_activation_update();
        }
    }
}
