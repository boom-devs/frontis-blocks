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

 	public static function load_google_font( $fonts )
	{
		if ( is_array( $fonts ) && ! empty( $fonts ) ) {
			$gfonts      = '';
			$gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';
			foreach ( $fonts as $font ) {
				$gfonts .= str_replace( ' ', '+', trim( $font ) ) . $gfonts_attr . '|';
			}

			if ( ! empty( $gfonts ) ) {
				$query_args = [
					'family' => $gfonts
				 ];
				wp_register_style(
					'frontis-blocks-fonts',
					add_query_arg( $query_args, '//fonts.googleapis.com/css' ),
					[  ],
					FB_VERSION
				);

				wp_enqueue_style( 'frontis-blocks-fonts' );
			}

			// Reset.
			$gfonts = '';
		}
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
	 * Get installed WordPress Plugin List
	 *
	 * @return array
	 */
	public static function get_plugins()
	{
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
		return get_plugins();
	}

	 /**
	 * Get Active Plugins List
	 */
	public static function get_active_plugin_list()
	{
		$active_plugins = get_option( 'active_plugins' );
		if ( is_multisite() ) {
			$all = wp_get_active_network_plugins();
			if ( $all ) {
				$active_plugins = array_merge( $active_plugins, array_map( function ( $each ) {
					$arr = explode( '/', $each );
					return $arr[ count( $arr ) - 2 ] . DIRECTORY_SEPARATOR . end( $arr );
				}, $all ) );
			}
		}
		return $active_plugins;
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
