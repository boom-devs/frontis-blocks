<?php

namespace FrontisBlocks\Utils;

class Helper
{
    /**
     * Check if the given block is a Frontis block
     *
     * @param string $block_content The block content
     * @param array $parsed_block The parsed block
     * @param string $class_attr The class attribute to check
     * @return bool
     */
    public static function is_frontis_block($block_content, $parsed_block, $class_attr = 'blockClass')
    {
        return isset($parsed_block['attrs'][$class_attr]) && strpos($parsed_block['attrs'][$class_attr], 'frontis-block') !== false;
    }

    /**
     * Generate a unique ID
     *
     * @return string
     */
    public static function generate_unique_id()
    {
        return 'fb-' . uniqid();
    }

    /**
     * Get block assets URL
     *
     * @param string $path The relative path to the asset
     * @return string
     */
    public static function get_block_asset_url($path)
    {
        return plugin_dir_url(FB_PLUGIN_PATH) . 'build/blocks/' . $path;
    }

    /**
     * Get plugin settings
     *
     * @param string $key The setting key
     * @param mixed $default The default value if the setting doesn't exist
     * @return mixed
     */
    public static function get_plugin_setting($key, $default = null)
    {
        $settings = get_option('frontis_blocks_settings', []);
        return isset($settings[$key]) ? $settings[$key] : $default;
    }

    /**
     * Check if the current page is a Gutenberg editor page
     *
     * @return bool
     */
    public static function is_gutenberg_editor()
    {
        global $pagenow;
        return in_array($pagenow, ['post.php', 'post-new.php', 'site-editor.php', 'widgets.php']);
    }

    /**
     * Sanitize HTML classes
     *
     * @param string|array $classes The classes to sanitize
     * @return string
     */
    public static function sanitize_html_classes($classes)
    {
        if (!is_array($classes)) {
            $classes = explode(' ', $classes);
        }

        $classes = array_map('sanitize_html_class', $classes);
        return implode(' ', $classes);
    }

    /**
     * Get responsive breakpoints
     *
     * @return array
     */
    public static function get_responsive_breakpoints()
    {
        return [
            'mobile'  => 767,
            'tablet'  => 1024,
            'desktop' => 1200,
        ];
    }

    /**
     * Parse block content for specific data
     *
     * @param string $content The block content
     * @param string $search The string to search for
     * @return string|null
     */
    public static function parse_block_content($content, $search)
    {
        preg_match('/' . preg_quote($search, '/') . '="([^"]*)"/', $content, $matches);
        return isset($matches[1]) ? $matches[1] : null;
    }

    /**
     * Check if a plugin is active
     *
     * @param string $plugin_path The path to the plugin file
     * @return bool
     */
    public static function is_plugin_active($plugin_path)
    {
        return in_array($plugin_path, (array) get_option('active_plugins', []), true) || self::is_plugin_active_for_network($plugin_path);
    }

    /**
     * Check if a plugin is active for the entire network
     *
     * @param string $plugin_path The path to the plugin file
     * @return bool
     */
    public static function is_plugin_active_for_network($plugin_path)
    {
        if (!is_multisite()) {
            return false;
        }

        $plugins = get_site_option('active_sitewide_plugins');
        if (isset($plugins[$plugin_path])) {
            return true;
        }

        return false;
    }
}