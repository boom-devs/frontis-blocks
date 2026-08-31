<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class JsonApiAdapter
 *
 * Connects to the Cloudflare Worker / REST JSON update endpoint.
 *
 * @package FrontisBlocks\Updater
 */
class JsonApiAdapter implements PluginUpdateAdapterInterface
{
    /** @var string Remote API endpoint URL */
    private string $apiUrl;

    /** @var string Currently installed version */
    private string $currentVersion;

    /** @var string Main plugin file path */
    private string $pluginFile;

    /** @var string Plugin slug */
    private string $slug;

    /** @var string Transient cache key */
    private string $cacheKey;

    /** @var int Cache duration in seconds (default: 12 hours) */
    private int $cacheDuration;

    /**
     * JsonApiAdapter constructor.
     *
     * @param string $apiUrl
     * @param string $currentVersion
     * @param string $pluginFile
     * @param string $slug
     * @param int $cacheDuration
     */
    public function __construct(
        string $apiUrl,
        string $currentVersion,
        string $pluginFile,
        string $slug,
        int $cacheDuration = 43200
    ) {
        $this->apiUrl         = $apiUrl;
        $this->currentVersion = $currentVersion;
        $this->pluginFile     = $pluginFile;
        $this->slug           = $slug;
        $this->cacheDuration  = $cacheDuration;
        $this->cacheKey       = sanitize_key($this->slug) . '_cf_update_' . md5($this->apiUrl);
    }

    /**
     * Fetches remote update data with transient caching.
     *
     * @return object|null
     */
    private function fetchRemoteData(): ?object
    {
        $cached = get_transient($this->cacheKey);
        if (false !== $cached) {
            return $cached;
        }

        $response = wp_remote_get($this->apiUrl, [
            'timeout' => 10,
            'headers' => ['Accept' => 'application/json'],
        ]);

        if (is_wp_error($response) || 200 !== wp_remote_retrieve_response_code($response)) {
            return null;
        }

        $body = wp_remote_retrieve_body($response);
        if (empty($body)) {
            return null;
        }

        $data = json_decode($body);
        if (!is_object($data) || empty($data->version)) {
            return null;
        }

        set_transient($this->cacheKey, $data, $this->cacheDuration);

        return $data;
    }

    /**
     * Checks if update info is available.
     *
     * @return object|null
     */
    public function getUpdateInfo(): ?object
    {
        $data = $this->fetchRemoteData();
        if (!$data) {
            return null;
        }

        if (!version_compare($this->currentVersion, $data->version, '<')) {
            return null;
        }

        return (object) [
            'id'           => plugin_basename($this->pluginFile),
            'slug'         => $this->slug,
            'plugin'       => plugin_basename($this->pluginFile),
            'new_version'  => $data->version,
            'url'          => $data->details_url ?? 'https://wpmessiah.com',
            'package'      => $data->download_url ?? '',
            'tested'       => $data->tested ?? '',
            'requires_php' => $data->requires_php ?? '',
            'requires'     => $data->requires ?? '',
        ];
    }

    /**
     * Returns plugin modal view details.
     *
     * @param string $action
     * @param object $args
     * @return object|false
     */
    public function getPluginDetails(string $action, object $args)
    {
        if ('plugin_information' !== $action || ($args->slug ?? '') !== $this->slug) {
            return false;
        }

        $data = $this->fetchRemoteData();
        if (!$data) {
            return false;
        }

        return (object) [
            'name'          => 'Frontis Blocks',
            'slug'          => $this->slug,
            'version'       => $data->version ?? '',
            'download_link' => $data->download_url ?? '',
            'homepage'      => 'https://wpmessiah.com',
            'last_updated'  => $data->last_updated ?? '',
            'sections'      => (array) ($data->sections ?? [
                'description' => 'A blocks library for Gutenberg editor.',
                'changelog'   => 'View release notes on WPmessiah.',
            ]),
        ];
    }
}
