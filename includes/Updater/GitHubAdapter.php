<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class GitHubAdapter
 *
 * Fetches update information and release assets directly from GitHub Releases.
 * Includes in-memory caching, failure negative caching, XSS protection, and validation.
 *
 * @package FrontisBlocks\Updater
 */
class GitHubAdapter implements AdapterInterface
{
    /** @var string GitHub repository path (e.g. 'boom-devs/frontis-blocks') */
    private string $repoPath;

    /** @var string Currently installed version */
    private string $currentVersion;

    /** @var string Main plugin file path */
    private string $pluginFile;

    /** @var string Plugin slug */
    private string $slug;

    /** @var string|null GitHub Personal Access Token */
    private ?string $accessToken;

    /** @var string Transient cache key */
    private string $cacheKey;

    /** @var object|null In-memory request cache */
    private ?object $inMemoryCache = null;

    /** @var bool Tracks if the remote check was successful */
    private bool $remoteCheckSuccess = false;

    /**
     * GitHubAdapter constructor.
     *
     * @param string $repoPath Repository path formatted as 'owner/repo'
     * @param string $currentVersion Current plugin version
     * @param string $pluginFile Full path to main plugin file
     * @param string $slug Plugin slug
     * @param string|null $accessToken Optional GitHub PAT token
     */
    public function __construct(
        string $repoPath,
        string $currentVersion,
        string $pluginFile,
        string $slug,
        ?string $accessToken = null
    ) {
        $this->repoPath       = trim($repoPath, '/');
        $this->currentVersion = $currentVersion;
        $this->pluginFile     = $pluginFile;
        $this->slug           = $slug;
        $this->accessToken    = $accessToken;
        $this->cacheKey       = sanitize_key($this->slug) . '_gh_update_' . md5($this->repoPath);
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
     * Fetches latest release data from GitHub API.
     *
     * @return object|null Decoded release object or null
     */
    private function fetchLatestRelease(): ?object
    {
        if (null !== $this->inMemoryCache) {
            $this->remoteCheckSuccess = true;
            return $this->inMemoryCache;
        }

        if (!$this->isForceCheck()) {
            $cached = get_transient($this->cacheKey);
            if (false !== $cached) {
                if (is_object($cached) && isset($cached->is_error)) {
                    $this->remoteCheckSuccess = false;
                    return null;
                }
                $this->inMemoryCache = is_object($cached) ? $cached : null;
                $this->remoteCheckSuccess = (null !== $this->inMemoryCache);
                return $this->inMemoryCache;
            }
        }

        $endpoint = "https://api.github.com/repos/{$this->repoPath}/releases/latest";

        $args = [
            'timeout' => 10,
            'headers' => [
                'Accept'     => 'application/vnd.github.v3+json',
                'User-Agent' => 'WordPress/' . get_bloginfo('version') . '; ' . home_url(),
            ],
        ];

        if (!empty($this->accessToken)) {
            $args['headers']['Authorization'] = "Bearer {$this->accessToken}";
        }

        $response = wp_remote_get($endpoint, $args);

        if (is_wp_error($response)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            $this->remoteCheckSuccess = false;
            return null;
        }

        $responseCode = wp_remote_retrieve_response_code($response);

        // Rate limit reached (403) or error
        if (403 === $responseCode) {
            set_transient($this->cacheKey . '_rate_limited', true, HOUR_IN_SECONDS);
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            $this->remoteCheckSuccess = false;
            return null;
        }

        if (200 !== $responseCode) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            $this->remoteCheckSuccess = false;
            return null;
        }

        $release = json_decode(wp_remote_retrieve_body($response));

        if (!is_object($release) || empty($release->tag_name)) {
            set_transient($this->cacheKey, (object) ['is_error' => true], 15 * MINUTE_IN_SECONDS);
            $this->remoteCheckSuccess = false;
            return null;
        }

        // Cache response for 1 hour
        set_transient($this->cacheKey, $release, HOUR_IN_SECONDS);
        $this->inMemoryCache = $release;
        $this->remoteCheckSuccess = true;

        return $release;
    }

    /**
     * Checks if a newer version is available.
     *
     * @return object|null Normalized update object or null
     */
    public function getUpdateInfo(): ?object
    {
        if (get_transient($this->cacheKey . '_rate_limited') && !$this->isForceCheck()) {
            return null;
        }

        $release = $this->fetchLatestRelease();
        if (!$release) {
            return null;
        }

        $latestVersion = ltrim($release->tag_name, 'vV');

        if (!version_compare($this->currentVersion, $latestVersion, '<')) {
            return null;
        }

        $downloadUrl = $release->zipball_url ?? '';

        if (!empty($release->assets) && is_array($release->assets)) {
            foreach ($release->assets as $asset) {
                if (!empty($asset->name) && 'zip' === strtolower(pathinfo($asset->name, PATHINFO_EXTENSION))) {
                    $downloadUrl = $asset->browser_download_url ?? '';
                    break;
                }
            }
        }

        if (empty($downloadUrl)) {
            return null;
        }

        return (object) [
            'id'          => plugin_basename($this->pluginFile),
            'slug'        => $this->slug,
            'plugin'      => plugin_basename($this->pluginFile),
            'new_version' => $latestVersion,
            'url'         => !empty($release->html_url) ? esc_url($release->html_url) : '',
            'package'     => esc_url_raw($downloadUrl),
            'tested'      => '6.7',
            'requires_php'=> '7.4',
            'requires'    => '6.0',
        ];
    }

    /**
     * Provides plugin details for the WordPress update modal.
     * Full WordPress.org parity (banners, ratings, stats, installation, FAQ, changelog).
     *
     * @param string $action Action name
     * @param object $args Query arguments
     * @return object|false
     */
    public function getPluginDetails(string $action, object $args)
    {
        if ('plugin_information' !== $action || ($args->slug ?? '') !== $this->slug) {
            return false;
        }

        $release = $this->fetchLatestRelease();
        if (!$release) {
            return false;
        }

        $latestVersion = ltrim($release->tag_name, 'vV');

        $downloadUrl = $release->zipball_url ?? '';
        if (!empty($release->assets) && is_array($release->assets)) {
            foreach ($release->assets as $asset) {
                if (!empty($asset->name) && 'zip' === strtolower(pathinfo($asset->name, PATHINFO_EXTENSION))) {
                    $downloadUrl = $asset->browser_download_url ?? '';
                    break;
                }
            }
        }

        $readmePath = dirname($this->pluginFile) . '/readme.txt';
        $readme = new ReadmeParser($readmePath);
        $sections = $readme->getSections();

        if (!empty($release->body)) {
            $sections['changelog'] = wp_kses_post(wpautop($release->body));
        }

        if (empty($sections['description'])) {
            $sections['description'] = wp_kses_post('<p>Frontis Blocks is a modern Gutenberg block library for WordPress with 45+ blocks.</p>');
        }

        return (object) [
            'name'           => $readme->getMeta('name', 'Frontis Blocks — Block Library for the Block Editor'),
            'slug'           => $this->slug,
            'version'        => sanitize_text_field($latestVersion),
            'author'         => '<a href="https://wpmessiah.com" target="_blank">WPmessiah</a>',
            'author_profile' => 'https://wpmessiah.com',
            'homepage'       => 'https://frontiswp.com/frontis-blocks/',
            'requires'       => $readme->getMeta('requires', '6.0'),
            'tested'         => $readme->getMeta('tested', '7.1'),
            'requires_php'   => $readme->getMeta('requires_php', '7.4'),
            'download_link'  => !empty($downloadUrl) ? esc_url_raw($downloadUrl) : '',
            'last_updated'   => sanitize_text_field($release->published_at ?? date('Y-m-d')),
            'banners'        => [
                'low'  => 'https://wpmessiah.com/api/updates/frontis-blocks/assets/banner-772x250.gif',
                'high' => 'https://wpmessiah.com/api/updates/frontis-blocks/assets/banner-1544x500.gif',
            ],
            'icons'          => [
                '1x' => 'https://wpmessiah.com/api/updates/frontis-blocks/assets/icon-128x128.gif',
                '2x' => 'https://wpmessiah.com/api/updates/frontis-blocks/assets/icon-128x128.gif',
            ],
            'sections'       => $sections,
        ];
    }

    /**
     * Clears all cached transient data.
     */
    public function clearCache(): void
    {
        $this->inMemoryCache = null;
        $this->remoteCheckSuccess = false;
        delete_transient($this->cacheKey);
        delete_transient($this->cacheKey . '_rate_limited');
    }
}
