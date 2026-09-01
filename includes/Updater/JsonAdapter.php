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

    /** @var bool Tracks if the remote check was successful */
    private bool $remoteCheckSuccess = false;

    /** @var PluginMetadata|null Lazy-loaded plugin metadata resolver */
    private ?PluginMetadata $metadata = null;

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
     * Checks whether the last remote API check was successful.
     *
     * @return bool
     */
    public function wasRemoteCheckSuccessful(): bool
    {
        return $this->remoteCheckSuccess;
    }

    /**
     * Returns compatibility metadata from readme.txt (priority) with API fallback.
     *
     * @return array{requires: string, tested: string, requires_php: string, homepage: string}
     */
    public function getCompatibilityMeta(): array
    {
        $data = $this->fetchRemoteData();

        return $this->getMetadata()->getCompatibilityMeta(is_object($data) ? $data : null);
    }

    /**
     * Returns the lazy-loaded metadata resolver.
     */
    private function getMetadata(): PluginMetadata
    {
        if (null === $this->metadata) {
            $this->metadata = new PluginMetadata($this->pluginFile, $this->slug);
        }

        return $this->metadata;
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
            $this->remoteCheckSuccess = true;
            return $this->inMemoryCache;
        }

        // Bypass transient cache if user clicked "Check Again" in WP Dashboard
        if (!$this->isForceCheck()) {
            $cached = get_transient($this->cacheKey);
            if (false !== $cached) {
                // If cached value is false/error flag from previous failure, return null
                if (is_object($cached) && isset($cached->is_error)) {
                    $this->remoteCheckSuccess = false;
                    return null;
                }
                $this->inMemoryCache = is_object($cached) ? $cached : null;
                $this->remoteCheckSuccess = (null !== $this->inMemoryCache);
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
            $this->remoteCheckSuccess = false;
            return null;
        }

        $body = wp_remote_retrieve_body($response);
        if (empty($body)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            $this->remoteCheckSuccess = false;
            return null;
        }

        $data = json_decode($body);
        if (!is_object($data) || empty($data->version)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            $this->remoteCheckSuccess = false;
            return null;
        }

        set_transient($this->cacheKey, $data, $this->cacheDuration);
        $this->inMemoryCache = $data;
        $this->remoteCheckSuccess = true;

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

        $meta = $this->getMetadata()->getCompatibilityMeta($data);

        return (object) [
            'id'           => plugin_basename($this->pluginFile),
            'slug'         => $this->slug,
            'plugin'       => plugin_basename($this->pluginFile),
            'new_version'  => $data->version,
            'url'          => !empty($data->details_url) ? esc_url($data->details_url) : $meta['homepage'],
            'package'      => esc_url_raw($data->download_url),
            'tested'       => $meta['tested'],
            'requires_php' => $meta['requires_php'],
            'requires'     => $meta['requires'],
        ];
    }

    /**
     * Returns plugin modal view details with sanitized HTML sections.
     * Parses readme.txt dynamically for full WordPress.org parity.
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

        $metadata = $this->getMetadata();
        $readme   = $metadata->getReadme();
        $sections = $readme->getSections();
        $meta     = $metadata->getCompatibilityMeta($data);

        // If remote API provided latest release notes, prioritize as changelog
        if (!empty($data->sections) && is_object($data->sections) && !empty($data->sections->changelog)) {
            $sections['changelog'] = wp_kses_post($data->sections->changelog);
        } elseif (!empty($data->sections) && is_array($data->sections) && !empty($data->sections['changelog'])) {
            $sections['changelog'] = wp_kses_post($data->sections['changelog']);
        }

        if (empty($sections['description'])) {
            $sections['description'] = wp_kses_post(
                '<p>' . esc_html($readme->getMeta('name', $this->slug)) . '</p>'
            );
        }

        $lastUpdated = !empty($data->last_updated)
            ? gmdate('Y-m-d h:iA', strtotime($data->last_updated))
            : gmdate('Y-m-d');

        return (object) [
            'name'           => $readme->getMeta('name', $this->slug),
            'slug'           => $this->slug,
            'version'        => sanitize_text_field($data->version ?? $this->currentVersion),
            'author'         => '<a href="https://wpmessiah.com" target="_blank">WPmessiah</a>',
            'author_profile' => 'https://wpmessiah.com',
            'contributors'   => [
                'wpmessiah' => [
                    'display_name' => 'WPmessiah',
                    'profile'      => 'https://wpmessiah.com',
                    'avatar'       => 'https://secure.gravatar.com/avatar/9c55b6a71d8be8d6268fae6da485d43d?s=96&d=monsterid&r=g',
                ],
            ],
            'homepage'       => $meta['homepage'],
            'requires'       => $meta['requires'],
            'tested'         => $meta['tested'],
            'requires_php'   => $meta['requires_php'],
            'download_link'  => !empty($data->download_url) ? esc_url_raw($data->download_url) : '',
            'last_updated'   => $lastUpdated,
            'banners'        => $metadata->getBanners(),
            'icons'          => $metadata->getIcons(),
            'sections'       => $sections,
        ];
    }

    /**
     * Clears all cached transient data and in-memory cache.
     */
    public function clearCache(): void
    {
        $this->inMemoryCache = null;
        $this->remoteCheckSuccess = false;
        delete_transient($this->cacheKey);
    }
}
