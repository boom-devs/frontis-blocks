<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class GitHubApiAdapter
 *
 * Fetches update information and release assets directly from GitHub Releases.
 *
 * @package FrontisBlocks\Updater
 */
class GitHubApiAdapter implements PluginUpdateAdapterInterface
{
    /** @var string GitHub repository path (e.g. 'boom-devs/frontis-blocks') */
    private string $repoPath;

    /** @var string Currently installed version */
    private string $currentVersion;

    /** @var string Main plugin file path */
    private string $pluginFile;

    /** @var string Plugin slug */
    private string $slug;

    /** @var string|null GitHub Personal Access Token (for private repo if needed) */
    private ?string $accessToken;

    /** @var string Transient cache key */
    private string $cacheKey;

    /**
     * GitHubApiAdapter constructor.
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
     * Fetches latest release data from GitHub API (cached for 1 hour to respect rate limits).
     *
     * @return object|null Decoded release object or null
     */
    private function fetchLatestRelease(): ?object
    {
        $cached = get_transient($this->cacheKey);
        if (false !== $cached) {
            return $cached;
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
            return null;
        }

        $responseCode = wp_remote_retrieve_response_code($response);

        // Rate limit reached (403)
        if (403 === $responseCode) {
            set_transient($this->cacheKey . '_rate_limited', true, HOUR_IN_SECONDS);
            return null;
        }

        if (200 !== $responseCode) {
            return null;
        }

        $release = json_decode(wp_remote_retrieve_body($response));

        if (!is_object($release) || empty($release->tag_name)) {
            return null;
        }

        // Cache response for 1 hour
        set_transient($this->cacheKey, $release, HOUR_IN_SECONDS);

        return $release;
    }

    /**
     * Checks if a newer version is available.
     *
     * @return object|null Normalized update object or null
     */
    public function getUpdateInfo(): ?object
    {
        if (get_transient($this->cacheKey . '_rate_limited')) {
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

        // Locate .zip asset or fallback to zipball_url
        $downloadUrl = $release->zipball_url ?? '';

        if (!empty($release->assets) && is_array($release->assets)) {
            foreach ($release->assets as $asset) {
                if (!empty($asset->name) && 'zip' === strtolower(pathinfo($asset->name, PATHINFO_EXTENSION))) {
                    $downloadUrl = $asset->browser_download_url;
                    break;
                }
            }
        }

        if (!empty($this->accessToken) && strpos($downloadUrl, 'api.github.com') !== false) {
            $downloadUrl = add_query_arg('access_token', $this->accessToken, $downloadUrl);
        }

        return (object) [
            'id'          => plugin_basename($this->pluginFile),
            'slug'        => $this->slug,
            'plugin'      => plugin_basename($this->pluginFile),
            'new_version' => $latestVersion,
            'url'         => $release->html_url ?? '',
            'package'     => $downloadUrl,
        ];
    }

    /**
     * Provides plugin details for the WordPress update modal.
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
                    $downloadUrl = $asset->browser_download_url;
                    break;
                }
            }
        }

        $changelog = '';
        if (!empty($release->body)) {
            $changelog = wpautop(wp_kses_post($release->body));
        }

        return (object) [
            'name'          => 'Frontis Blocks',
            'slug'          => $this->slug,
            'version'       => $latestVersion,
            'download_link' => $downloadUrl,
            'homepage'      => "https://github.com/{$this->repoPath}",
            'last_updated'  => $release->published_at ?? '',
            'sections'      => [
                'description' => 'A blocks library for the Gutenberg editor.',
                'changelog'   => $changelog ?: 'View full release notes on GitHub: ' . ($release->html_url ?? ''),
            ],
        ];
    }
}
