<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Resolves plugin metadata from readme.txt and plugin headers.
 * readme.txt takes priority over remote API values for compatibility fields.
 */
class PluginMetadata
{
    private ReadmeParser $readme;

    private string $pluginFile;

    private string $slug;

    public function __construct(string $pluginFile, string $slug)
    {
        $this->pluginFile = $pluginFile;
        $this->slug       = $slug;
        $this->readme     = new ReadmeParser(dirname($pluginFile) . '/readme.txt');
    }

    public function getReadme(): ReadmeParser
    {
        return $this->readme;
    }

    /**
     * Resolves a metadata field: readme.txt first, then API, then default.
     */
    public function resolve(string $key, ?string $apiValue = null, string $default = ''): string
    {
        $readmeValue = $this->readme->getMeta($key, '');

        if ('' !== $readmeValue) {
            return $readmeValue;
        }

        if (null !== $apiValue && '' !== $apiValue) {
            return (string) $apiValue;
        }

        return $default;
    }

    public function getHomepage(): string
    {
        $headers = get_file_data($this->pluginFile, [
            'PluginURI' => 'Plugin URI',
        ]);

        if (!empty($headers['PluginURI'])) {
            return $headers['PluginURI'];
        }

        return 'https://wpmessiah.com';
    }

    public function getAssetBaseUrl(): string
    {
        return 'https://wpmessiah.com/api/updates/' . $this->slug . '/assets';
    }

    /**
     * @return array{low: string, high: string}
     */
    public function getBanners(): array
    {
        $base = $this->getAssetBaseUrl();

        return [
            'low'  => $base . '/banner-772x250.gif',
            'high' => $base . '/banner-1544x500.gif',
        ];
    }

    /**
     * @return array{1x: string, 2x: string}
     */
    public function getIcons(): array
    {
        $base = $this->getAssetBaseUrl();
        $icon = $base . '/icon-128x128.gif';

        return [
            '1x' => $icon,
            '2x' => $icon,
        ];
    }

    /**
     * Compatibility metadata for update transients and plugin modal.
     *
     * @param object|null $api Remote API payload.
     * @return array{requires: string, tested: string, requires_php: string, homepage: string}
     */
    public function getCompatibilityMeta(?object $api = null): array
    {
        return [
            'requires'     => sanitize_text_field($this->resolve('requires', $api->requires ?? null, '6.0')),
            'tested'       => sanitize_text_field($this->resolve('tested', $api->tested ?? null, '6.7')),
            'requires_php' => sanitize_text_field($this->resolve('requires_php', $api->requires_php ?? null, '7.4')),
            'homepage'     => esc_url($this->getHomepage()),
        ];
    }
}
