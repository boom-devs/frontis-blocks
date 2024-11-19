<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Utils\Helper;

class EnqueueBlocksCss {
	public static function enqueue_block_asset($css_content, $block_name, $block_id) {
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit( $upload_dir['basedir'] ) . 'frontis-blocks/';
		if ( ! file_exists( $css_dir ) ) {
			wp_mkdir_p( $css_dir );
		}

		$css_file_name = $block_id . '.css';
		$css_file = $css_dir . $css_file_name;
		file_put_contents( $css_file, $css_content );
	}

	// Function to minify CSS
	public static function minify_css( $css ) {
		 $css = preg_replace('!/\*.*?\*/!s', '', $css);
		 $css = preg_replace('/\s+/', ' ', $css);
		 $css = preg_replace('/\s*({|}|;|:|,)\s*/', '$1', $css);
		 return trim($css);
	}

	/**
	 * Combine all generated CSS files into one file, with caching.
	 */
	public static function combined_css_files($page_name) {
		$current_page = Helper::get_page_name();
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		$css_new_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/' . $page_name . '/';
		$combined_css_file_name = 'frontis-blocks.min.css';
		$combined_css_file_path = $css_new_dir . $combined_css_file_name;

		// Use a cache identifier based on the modification times of all CSS files
		$cache_key_file = $css_new_dir . 'cache-key.txt';

		// Ensure the target directory exists
		if (!file_exists($css_new_dir)) {
			wp_mkdir_p($css_new_dir);
		}

		// Check if the cache key exists and matches
		$cached_key = file_exists($cache_key_file) ? file_get_contents($cache_key_file) : '';
		$current_key = self::generate_cache_key($css_dir);

		// If the cache is valid, enqueue the existing CSS file
		if ($cached_key === $current_key && file_exists($combined_css_file_path)) {
			$css_url = trailingslashit($upload_dir['baseurl']) . 'frontis-blocks/' . $page_name . '/' . $combined_css_file_name;
			wp_enqueue_style('frontis-block-styles', $css_url);
			return;
		}

		// Combine and minify CSS files
		$css_files = glob($css_dir . '*.css');
		if (!empty($css_files)) {
			$css_contents = [];

			foreach ($css_files as $file) {
				$css_content = file_get_contents($file);
				$css_contents[] = $css_content;
			}

			$minified_css = self::minify_css(implode("\n", $css_contents));
			file_put_contents($combined_css_file_path, $minified_css);

			// Save the new cache key
			file_put_contents($cache_key_file, $current_key);

			// Cleanup old files
			foreach ($css_files as $file) {
				if (file_exists($file)) {
					unlink($file);
				}
			}

			// Enqueue the CSS
			$css_url = trailingslashit($upload_dir['baseurl']) . 'frontis-blocks/' . $page_name . '/' . $combined_css_file_name;
			wp_enqueue_style('frontis-block-styles', $css_url);
		}
	}

	// Generate a cache key based on CSS file modification times
	private static function generate_cache_key($css_dir) {
		$css_files = glob($css_dir . '*.css');
		$mod_times = [];

		foreach ($css_files as $file) {
			$mod_times[] = filemtime($file);
		}

		return md5(implode('|', $mod_times));
	}
}
