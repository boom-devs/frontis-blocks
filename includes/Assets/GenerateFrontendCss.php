<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;

class GenerateFrontendCss {
	use Singleton;

	public static function render_generated_css($block_content, $block, $block_attributes) {

		if($block && $block['blockName']) {
			if (str_contains($block['blockName'], 'frontis-blocks')) {
				$single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);
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
}



