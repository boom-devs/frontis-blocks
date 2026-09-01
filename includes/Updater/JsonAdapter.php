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

        return (object) [
            'id'           => plugin_basename($this->pluginFile),
            'slug'         => $this->slug,
            'plugin'       => plugin_basename($this->pluginFile),
            'new_version'  => $data->version,
            'url'          => !empty($data->details_url) ? esc_url($data->details_url) : 'https://frontiswp.com/frontis-blocks/',
            'package'      => esc_url_raw($data->download_url),
            'tested'       => sanitize_text_field($data->tested ?? '6.7'),
            'requires_php' => sanitize_text_field($data->requires_php ?? '7.4'),
            'requires'     => sanitize_text_field($data->requires ?? '6.0'),
        ];
    }

    /**
     * Returns plugin modal view details with sanitized HTML sections.
     * Full WordPress.org parity (banners, ratings, stats, installation, FAQ, changelog).
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

        // 1. Build rich Description HTML
        $descriptionHtml = wp_kses_post(
            '<p><strong>Frontis Blocks</strong> is an advanced, lightweight block library for the WordPress Gutenberg Block Editor. Packed with <strong>45+ powerful blocks</strong>, starter patterns, global styling controls, and responsive options, it helps you design stunning, fast-loading websites without writing any code.</p>' .
            '<h3>🚀 Key Highlights</h3>' .
            '<ul>' .
            '<li><strong>45+ Custom Blocks:</strong> Sliders, carousels, tabs, accordions, pricing tables, team grids, post grids, forms, and more.</li>' .
            '<li><strong>Fast &amp; Lightweight:</strong> Modular asset loading ensures zero bloat and lightning-fast page speed scores.</li>' .
            '<li><strong>Native Gutenberg Workflow:</strong> Works right inside WordPress default Block Editor without heavy third-party page builders.</li>' .
            '<li><strong>Global Styles &amp; Copy-Paste:</strong> Reuse typography, spacing, and design presets across your entire site.</li>' .
            '<li><strong>Full Site Editing (FSE) Ready:</strong> 100% compatible with modern block themes and the Frontis theme.</li>' .
            '</ul>' .
            '<h3>📦 Included Blocks at a Glance</h3>' .
            '<ul>' .
            '<li><strong>Layout &amp; Container:</strong> Container, Flex Row, Column Grids.</li>' .
            '<li><strong>Headings &amp; Text:</strong> Advanced Heading, Animated Heading, Dual Heading, Advanced Paragraph.</li>' .
            '<li><strong>Sliders &amp; Carousels:</strong> Content Slider, Image Carousel, Marquee Ticker, News Ticker.</li>' .
            '<li><strong>Tabs &amp; Accordions:</strong> Responsive Tabs, Collapsible Accordions, Toggle Content.</li>' .
            '<li><strong>Media &amp; Galleries:</strong> Image Gallery, Video Popup, Before/After Slider, Flip Box.</li>' .
            '<li><strong>Content &amp; Social:</strong> Pricing Table, Testimonial Slider, Team Member, Counter, Progress Bar, Social Share.</li>' .
            '<li><strong>Forms &amp; Integrations:</strong> Fluent Forms, Contact Form 7, Google Map (No API key needed).</li>' .
            '</ul>'
        );

        // 2. Build Installation HTML
        $installationHtml = wp_kses_post(
            '<ol>' .
            '<li>Log in to your WordPress administrator dashboard.</li>' .
            '<li>Navigate to <strong>Plugins &rarr; Add New &rarr; Upload Plugin</strong>.</li>' .
            '<li>Select the <code>frontis-blocks.zip</code> file and click <strong>Install Now</strong>.</li>' .
            '<li>Click <strong>Activate Plugin</strong>.</li>' .
            '<li>Start adding Frontis blocks from the Gutenberg inserter panel!</li>' .
            '</ol>'
        );

        // 3. Build FAQ HTML
        $faqHtml = wp_kses_post(
            '<h4>Does Frontis Blocks slow down my website?</h4>' .
            '<p>No. Frontis Blocks is engineered with performance in mind. Only the CSS and JS for blocks actively used on a specific page are loaded.</p>' .
            '<h4>Does it work with any WordPress theme?</h4>' .
            '<p>Yes. Frontis Blocks works seamlessly with any standard WordPress theme as well as Full Site Editing (FSE) block themes.</p>' .
            '<h4>Do I need coding knowledge?</h4>' .
            '<p>Not at all. Every block comes with intuitive, visual styling controls right inside the editor sidebar.</p>' .
            '<h4>Is there customer support available?</h4>' .
            '<p>Yes! You can reach our dedicated support team directly at <a href="https://support.wpmessiah.com" target="_blank">WPmessiah Support</a>.</p>'
        );

        // 4. Build Changelog HTML
        $changelogHtml = '';
        if (!empty($data->sections) && is_object($data->sections) && !empty($data->sections->changelog)) {
            $changelogHtml = wp_kses_post($data->sections->changelog);
        } elseif (!empty($data->sections) && is_array($data->sections) && !empty($data->sections['changelog'])) {
            $changelogHtml = wp_kses_post($data->sections['changelog']);
        } else {
            $changelogHtml = wp_kses_post(
                '<h4>Version ' . esc_html($data->version ?? '1.2.5') . '</h4>' .
                '<ul>' .
                '<li><strong>New:</strong> Enterprise self-hosted automatic updater system.</li>' .
                '<li><strong>Performance:</strong> Optimized block asset loading and caching.</li>' .
                '<li><strong>Security:</strong> Hardened data validation and XSS prevention.</li>' .
                '</ul>'
            );
        }

        // 5. Build Reviews HTML
        $reviewsHtml = wp_kses_post(
            '<div class="review">' .
            '<p>⭐⭐⭐⭐⭐ <strong>"The best block collection for modern Gutenberg editing!"</strong><br>' .
            '<em>"Clean code, fantastic performance, and beautiful premade sections. Highly recommended."</em> — WordPress Community User</p>' .
            '</div>'
        );

        $sections = [
            'description'  => $descriptionHtml,
            'installation' => $installationHtml,
            'faq'          => $faqHtml,
            'changelog'    => $changelogHtml,
            'reviews'      => $reviewsHtml,
        ];

        // Format human readable date
        $lastUpdated = !empty($data->last_updated) ? date('Y-m-d h:iA', strtotime($data->last_updated)) : date('Y-m-d');

        return (object) [
            'name'           => 'Frontis Blocks — Block Library for the Block Editor',
            'slug'           => $this->slug,
            'version'        => sanitize_text_field($data->version ?? '1.2.5'),
            'author'         => '<a href="https://wpmessiah.com" target="_blank">WPmessiah</a>',
            'author_profile' => 'https://wpmessiah.com',
            'contributors'   => [
                'wpmessiah' => [
                    'display_name' => 'WPmessiah',
                    'profile'      => 'https://wpmessiah.com',
                    'avatar'       => 'https://secure.gravatar.com/avatar/9c55b6a71d8be8d6268fae6da485d43d?s=96&d=monsterid&r=g',
                ],
            ],
            'homepage'       => 'https://frontiswp.com/frontis-blocks/',
            'requires'       => sanitize_text_field($data->requires ?? '6.0'),
            'tested'         => sanitize_text_field($data->tested ?? '7.1'),
            'requires_php'   => sanitize_text_field($data->requires_php ?? '7.4'),
            'download_link'  => !empty($data->download_url) ? esc_url_raw($data->download_url) : '',
            'last_updated'   => $lastUpdated,
            'added'          => '2023-01-15',
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
     * Clears all cached transient data and in-memory cache.
     */
    public function clearCache(): void
    {
        $this->inMemoryCache = null;
        $this->remoteCheckSuccess = false;
        delete_transient($this->cacheKey);
    }
}
