<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class PluginUpdaterManager
 *
 * Connects the updater adapter to WordPress native update lifecycle hooks.
 *
 * @package FrontisBlocks\Updater
 */
class PluginUpdaterManager
{
    /** @var PluginUpdateAdapterInterface */
    private PluginUpdateAdapterInterface $adapter;

    /** @var string Full path to main plugin file */
    private string $pluginFile;

    /** @var string Plugin slug / folder name */
    private string $pluginSlug;

    /**
     * PluginUpdaterManager constructor.
     *
     * @param PluginUpdateAdapterInterface $adapter
     * @param string $pluginFile
     */
    public function __construct(PluginUpdateAdapterInterface $adapter, string $pluginFile)
    {
        $this->adapter    = $adapter;
        $this->pluginFile = $pluginFile;
        $this->pluginSlug = dirname(plugin_basename($this->pluginFile));
    }

    /**
     * Register WordPress update hooks.
     */
    public function register(): void
    {
        // Inject update into plugins update transient
        add_filter('site_transient_update_plugins', [$this, 'injectUpdateTransient']);

        // View details popup in plugins dashboard
        add_filter('plugins_api', [$this, 'injectPluginDetails'], 20, 3);

        // Fix folder name after GitHub zip extraction
        add_filter('upgrader_source_selection', [$this, 'fixSourceDirectory'], 10, 4);

        // Clear cached transients after update completion
        add_action('upgrader_process_complete', [$this, 'clearCacheAfterUpdate'], 10, 2);
    }

    /**
     * Injects update information into WordPress transient.
     *
     * @param object $transient
     * @return object
     */
    public function injectUpdateTransient($transient)
    {
        if (empty($transient->checked)) {
            return $transient;
        }

        $update = $this->adapter->getUpdateInfo();

        if ($update) {
            $pluginBasename = plugin_basename($this->pluginFile);
            $transient->response[$pluginBasename] = $update;
        }

        return $transient;
    }

    /**
     * Injects plugin modal information into plugins_api response.
     *
     * @param mixed $result
     * @param string $action
     * @param object $args
     * @return mixed
     */
    public function injectPluginDetails($result, string $action, object $args)
    {
        $details = $this->adapter->getPluginDetails($action, $args);
        return false !== $details ? $details : $result;
    }

    /**
     * Corrects the plugin directory name after extraction.
     *
     * @param string $source
     * @param string $remote_source
     * @param \WP_Upgrader $upgrader
     * @param array $hook_extra
     * @return string
     */
    public function fixSourceDirectory($source, $remote_source, $upgrader, $hook_extra)
    {
        global $wp_filesystem;

        if (
            !isset($hook_extra['plugin'])
            || plugin_basename($this->pluginFile) !== $hook_extra['plugin']
        ) {
            return $source;
        }

        $correctedSource = trailingslashit($remote_source) . $this->pluginSlug . '/';

        if (trailingslashit($source) === $correctedSource) {
            return $source;
        }

        if ($wp_filesystem->move($source, $correctedSource)) {
            return $correctedSource;
        }

        return $source;
    }

    /**
     * Clears transients when this plugin has finished updating.
     *
     * @param \WP_Upgrader $upgrader
     * @param array $options
     */
    public function clearCacheAfterUpdate($upgrader, $options)
    {
        if (
            'update' !== ($options['action'] ?? '')
            || 'plugin' !== ($options['type'] ?? '')
        ) {
            return;
        }

        $plugins = $options['plugins'] ?? [];

        if (in_array(plugin_basename($this->pluginFile), $plugins, true)) {
            $slugKey = sanitize_key($this->pluginSlug);
            delete_transient($slugKey . '_gh_update');
            delete_transient($slugKey . '_gh_rate_limited');
        }
    }
}
