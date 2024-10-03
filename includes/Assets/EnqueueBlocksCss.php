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
		$css_file_name = $block_id . '.css';
		$css_file = $css_dir . $css_file_name;

		// Write the CSS content to the file
		file_put_contents( $css_file, $css_content );

		// Enqueue the generated CSS file
		$css_url = trailingslashit( $upload_dir['baseurl'] ) . 'frontis-blocks/' . $css_file_name;
		wp_enqueue_style( $block_name . $block_id, $css_url );
	}
}
