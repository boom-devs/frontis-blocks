<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;

class GenerateFrontendCss {
	use Singleton;

	public static $used_blocks = [];

	public static function render_generated_css($block_content, $block, $block_attributes) {

		if($block && $block['blockName']) {
			if (str_contains($block['blockName'], 'frontis-blocks')) {
				$single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);

				if(!in_array($block['blockName'], self::$used_blocks)) {
					self::combined_blocks_frontend_css($single_block['slug']);
				}

				self::$used_blocks[] = $block['blockName'];
				$css_file_path = plugin_dir_path(__DIR__) . 'Assets/' . $single_block['slug'] . '/frontend.css.php';
				if(file_exists($css_file_path)) {
					include $css_file_path;
				}
			} else {
				$single_block['slug'] = preg_replace('/^.*?\//', '', $block['blockName']);
				$css_file_path = plugin_dir_path(__DIR__) . 'Assets/others/frontend.css.php';
				if(file_exists($css_file_path)) {
					include $css_file_path;
				}
			}
		}
	}

	public static function combined_blocks_frontend_css($block_slug) {
		// Get block style-index.css file from build folder by block slug
		$css_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $block_slug . '/style-index.css';
		
		self::generate_minified_css($css_file_path, $block_slug);
	}


	public static function generate_minified_css($css_file_path, $block_slug) {
		$css_content = file_get_contents($css_file_path);
		EnqueueBlocksCss::create_css_file($css_content, $block_slug);
	}
}


