<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Utils\Helper;

class EnqueueBlocksCss {
	public static $page_name;

	/**
	 * Constructor
	 * 
	 * @param string $page_name The name of the page	
	 */
	public function __construct($page_name) {
		self::$page_name = $page_name;

		self::combine_assets_folder(self::$page_name);
	}

	/**
	 * Get the page name
	 * 
	 * @param int $post_id The ID of the post
	 * @return string The name of the page
	 */
	public function get_page_name($post_id) {
		self::$page_name = Helper::get_current_page_name($post_id);
	}

	/**
	 * Create a CSS file
	 * 
	 * @param string $css_content The content of the CSS file
	 * @param string $block_slug The slug of the block
	 */
	public static function create_css_file($css_content, $block_slug) {
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		if (!file_exists($css_dir)) {
			wp_mkdir_p($css_dir);
		}

		$css_file_name = $block_slug . '.css';
		$css_file = $css_dir . $css_file_name;
		file_put_contents($css_file, $css_content);
	}

	/**
	 * Get all CSS files from the given directory
	 * 
	 * @param string $dir The directory to search for CSS files
	 * @return array An array of CSS file paths
	 */
	public static function get_css_files($dir) {
		$cssFiles = [];
		$files = scandir($dir);
		foreach ($files as $file) {
			if ($file == '.' || $file == '..') continue;
			
			$path = $dir . '/' . $file;
			if (is_dir($path)) {
				// Recursively scan subdirectories
				$cssFiles = array_merge($cssFiles, self::get_css_files($path));
			} else if (pathinfo($path, PATHINFO_EXTENSION) == 'css') {
				$cssFiles[] = $path;
			}
		}
		
		return $cssFiles;
	}

	/**
	 * Enqueue a block asset
	 * 
	 * @param string $css_content The content of the CSS file
	 * @param string $block_name The name of the block
	 * @param string $block_id The ID of the block
	 */
	public static function enqueue_block_asset($css_content, $block_name, $block_id) {
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		if (!file_exists($css_dir)) {
			wp_mkdir_p($css_dir);
		}

		$css_file_name = $block_id . '.css';
		$css_file = $css_dir . $css_file_name;
		
		file_put_contents($css_file, $css_content);
		self::combined_css_files(self::$page_name);
	}

	/**
	 * Combine all assets from the given directory
	 * 
	 * @param string $page_name The name of the page
	 */
	public static function combine_assets_folder($page_name) {
		// echo FB_PLUGIN_URL;
		$assets_dir = FB_PLUGIN_PATH . 'assets/css/';
		$css_files = self::get_css_files($assets_dir);

		if(!empty($css_files)) {
			foreach ($css_files as $key => $css_file) {
				$css_content = file_get_contents($css_file);
				self::create_css_file($css_content, $key);
			}
		}
	}

	/**
	 * Combine all generated CSS files into one file, with caching.
	 * 
	 * @param string $page_name The name of the page
	 */
	public static function combined_css_files($page_name) {
		
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		$css_new_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/' . $page_name . '/';
		$combined_css_file_name = $page_name.'.css';
		$combined_css_file_path = $css_new_dir . $combined_css_file_name;

		// Ensure the target directory exists
		if (!file_exists($css_new_dir)) {
			wp_mkdir_p($css_new_dir);
		}

		// Combine and minify CSS files
		$css_files = glob($css_dir . '*.css');

		if (!empty($css_files)) {
			$css_contents = [];

			foreach ($css_files as $file) {
				$css_contents[] = file_get_contents($file);
			}

			$css_contents[] = '@media only screen and (min-width: 1025px) {
						.fb-desktop-responsive {
							display: none !important;
						}
					}

					@media only screen and (min-width: 768px) and (max-width: 1024px) {
						.fb-tablet-responsive {
							display: none !important;
						}
					}

					@media only screen and (max-width: 767px) {
						.fb-mobile-responsive {
							display: none !important;
						}
					}';

			$new_css_content = implode("\n", $css_contents);

			file_put_contents($combined_css_file_path, $new_css_content);
		}
	}
}