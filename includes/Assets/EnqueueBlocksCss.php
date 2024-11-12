<?php

namespace FrontisBlocks\Assets;

class EnqueueBlocksCss {
	public static function enqueue_block_asset($css_content, $block_name, $block_id) {

		// Define the path to save the CSS file in the uploads directory
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit( $upload_dir['basedir'] ) . 'frontis-blocks/';

		// Ensure the directory exists
		if ( ! file_exists( $css_dir ) ) {
			wp_mkdir_p( $css_dir );
		}

		// Create a unique CSS file name
		$css_file_name = $block_id . '.min.css';
		$css_file = $css_dir . $css_file_name;
		$minified_css = self::minify_css($css_content);
		file_put_contents( $css_file, $minified_css );

		// // Enqueue the generated CSS file
		// $css_url = trailingslashit( $upload_dir['baseurl'] ) . 'frontis-blocks/' . $css_file_name;
		// wp_enqueue_style( $block_id, $css_url );
	}

	// Function to minify CSS
	public static function minify_css( $css ) {
		 // Remove comments
		 $css = preg_replace('!/\*.*?\*/!s', '', $css);
		 // Remove whitespace and newlines
		 $css = preg_replace('/\s+/', ' ', $css);
		 // Remove spaces around braces and other delimiters
		 $css = preg_replace('/\s*({|}|;|:|,)\s*/', '$1', $css);
		 return trim($css); // Remove leading and trailing whitespace
	}

	/**
	 * Combined all generated css files to one files
	 */

	 public static function combined_css_files() {
		// Define the path to the directory containing the CSS files
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';

		// Define the combined CSS file name
		$combined_css_file_name = 'frontis-blocks.min.css';
		$combined_css_file_path = $css_dir . $combined_css_file_name;

		// Check if the combined CSS file exists and delete it if it does
		if (file_exists($combined_css_file_path)) {
			unlink($combined_css_file_path);
		}

		// Get all CSS files in the directory
		$css_files = glob($css_dir . '*.css');

		if (!empty($css_files)) {
			// Array to collect CSS content
			$css_contents = [];

			// Read and combine all CSS files, except for the combined CSS file
			foreach ($css_files as $file) {
				// Skip the combined minified CSS file
				if (basename($file) === $combined_css_file_name) {
					continue;
				}
				// Read the file content
				$css_content = file_get_contents($file);
				// Collect the CSS content
				$css_contents[] = $css_content;
			}

			// Minify the combined CSS
			$minified_css = self::minify_css(implode("\n", $css_contents));

			// Write the minified CSS content to the new file
			file_put_contents($combined_css_file_path, $minified_css);

			// Delete the original CSS files except for frontis-blocks.min.css
			foreach ($css_files as $file) {
				if (basename($file) !== $combined_css_file_name) {
					unlink($file);
				}
			}

			// Enqueue the combined CSS file
			$css_url = trailingslashit($upload_dir['baseurl']) . 'frontis-blocks/' . $combined_css_file_name;
			wp_enqueue_style('combined-block-styles', $css_url);
		}
	 }
}
