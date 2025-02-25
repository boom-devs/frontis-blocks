<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Utils\Helper;

class EnqueueBlocksCss {
	public static function enqueue_block_asset($css_content, $block_name, $block_id) {
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
		if (!file_exists($css_dir)) {
			wp_mkdir_p($css_dir);
		}

		$css_file_name = $block_id . '.css';
		$css_file = $css_dir . $css_file_name;
		file_put_contents($css_file, $css_content);
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
				$css_contents[] = file_get_contents($file);
			}

			$new_css_content = implode("\n", $css_contents);

			// Check if the new CSS is different from the existing file
			if (file_exists($combined_css_file_path)) {
				$existing_css_content = file_get_contents($combined_css_file_path);
				if (md5($existing_css_content) === md5($new_css_content)) {
					if (!Helper::is_gutenberg_editor()) {
						$css_url = trailingslashit($upload_dir['baseurl']) . 'frontis-blocks/' . $page_name . '/' . $combined_css_file_name;
						wp_enqueue_style('frontis-block-styles', $css_url, [], FB_VERSION);
					}
					return false;
				}
			}

			file_put_contents($combined_css_file_path, $new_css_content);

			// Cleanup old files
			foreach ($css_files as $file) {
				unlink($file);
			}

			// Enqueue the CSS
			if (!Helper::is_gutenberg_editor()) {
				$css_url = trailingslashit($upload_dir['baseurl']) . 'frontis-blocks/' . $page_name . '/' . $combined_css_file_name;
				wp_enqueue_style('frontis-block-styles', $css_url, [], FB_VERSION);
			}
		}
	}
}