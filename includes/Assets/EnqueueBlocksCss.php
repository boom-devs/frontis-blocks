<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Utils\Helper;

class EnqueueBlocksCss {
	public static $page_name;

	public function __construct($page_name) {
		self::$page_name = $page_name;
	}

	public function get_page_name($post_id) {
		self::$page_name = Helper::get_current_page_name($post_id);
	}

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
	 * Combine all generated CSS files into one file, with caching.
	 */
	public static function combined_css_files($page_name) {
		
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		$css_new_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/' . $page_name . '/';
		$combined_css_file_name = 'frontis-blocks.css';
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
				if(str_contains($file, 'frontis-global-colors.css') || str_contains($file, 'frontis-global-typography.css') || str_contains($file, 'frontis-google-fonts.css')) {
					continue;
				}

				$css_contents[] = file_get_contents($file);
			}

			$new_css_content = implode("\n", $css_contents);

			file_put_contents($combined_css_file_path, $new_css_content);
		}
	}
}