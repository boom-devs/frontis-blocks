<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class JsonAdapter
 *
 * Connects to the Cloudflare Worker / REST JSON update endpoint.
 * Includes in-memory caching, failure negative caching, XSS protection, and validation.
 *
 * @package FrontisBlocks\Updater
 */
class JsonAdapter implements AdapterInterface
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

    /** @var object|null In-memory request cache to prevent duplicate HTTP calls */
    private ?object $inMemoryCache = null;

    /**
     * JsonAdapter constructor.
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
     * Returns the currently installed plugin version.
     *
     * @return string
     */
    public function getCurrentVersion(): string
    {
        return $this->currentVersion;
    }

    /**
     * Checks whether a forced update check is in progress.
     *
     * @return bool
     */
    private function isForceCheck(): bool
    {
        return !empty($_GET['force-check'])
            || (isset($_GET['action']) && 'check-again' === $_GET['action']);
    }

    /**
     * Fetches remote update data with transient and in-memory caching.
     *
     * @return object|null
     */
    private function fetchRemoteData(): ?object
    {
        // Return in-memory cached instance if already fetched in this lifecycle
        if (null !== $this->inMemoryCache) {
            return $this->inMemoryCache;
        }

        // Bypass transient cache if user clicked "Check Again" in WP Dashboard
        if (!$this->isForceCheck()) {
            $cached = get_transient($this->cacheKey);
            if (false !== $cached) {
                // If cached value is false/error flag from previous failure, return null
                if (is_object($cached) && isset($cached->is_error)) {
                    return null;
                }
                $this->inMemoryCache = is_object($cached) ? $cached : null;
                return $this->inMemoryCache;
            }
        }

        $response = wp_remote_get($this->apiUrl, [
            'timeout' => 10,
            'headers' => ['Accept' => 'application/json'],
        ]);

        // Negative caching: Cache 15-minute failure state if API fails or server errors
        if (is_wp_error($response) || 200 !== wp_remote_retrieve_response_code($response)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            return null;
        }

        $body = wp_remote_retrieve_body($response);
        if (empty($body)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            return null;
        }

        $data = json_decode($body);
        if (!is_object($data) || empty($data->version)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            return null;
        }

        set_transient($this->cacheKey, $data, $this->cacheDuration);
        $this->inMemoryCache = $data;

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

        // Must have a newer version AND a valid non-empty package download URL
        if (
            !version_compare($this->currentVersion, $data->version, '<')
            || empty($data->download_url)
        ) {
            return null;
        }

        return (object) [
            'id'           => plugin_basename($this->pluginFile),
            'slug'         => $this->slug,
            'plugin'       => plugin_basename($this->pluginFile),
            'new_version'  => $data->version,
            'url'          => !empty($data->details_url) ? esc_url($data->details_url) : 'https://wpmessiah.com',
            'package'      => esc_url_raw($data->download_url),
            'tested'       => sanitize_text_field($data->tested ?? ''),
            'requires_php' => sanitize_text_field($data->requires_php ?? ''),
            'requires'     => sanitize_text_field($data->requires ?? ''),
        ];
    }

    /**
     * Returns plugin modal view details with sanitized HTML sections.
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

        // Sanitize sections against XSS
        $sections = [];
        if (!empty($data->sections) && is_object($data->sections) || is_array($data->sections)) {
            foreach ((array) $data->sections as $sectionKey => $sectionContent) {
                $sections[sanitize_key($sectionKey)] = wp_kses_post($sectionContent);
            }
        } else {
            $sections = [
                'description' => wp_kses_post($data->description ?? 'Frontis Blocks - WordPress block library for Gutenberg Editor.'),
                'changelog'   => wp_kses_post($data->changelog ?? 'View release notes on WPmessiah.'),
            ];
        }

        return (object) [
            'name'          => 'Frontis Blocks',
            'slug'          => $this->slug,
            'version'       => sanitize_text_field($data->version ?? ''),
            'download_link' => !empty($data->download_url) ? esc_url_raw($data->download_url) : '',
            'homepage'      => 'https://wpmessiah.com',
            'last_updated'  => sanitize_text_field($data->last_updated ?? ''),
            'sections'      => $sections,
        ];
    }

    /**
     * Clears all cached transient data and in-memory cache.
     */
    public function clearCache(): void
    {
        $this->inMemoryCache = null;
        delete_transient($this->cacheKey);
    }
}
