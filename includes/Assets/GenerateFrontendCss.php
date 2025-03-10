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
			}
		}
	}

	// public function get_blocks_on_save($post_id, $post, $update) {
	// 	// when post is saved or update then get the blocks
	// 	if($update) {
	// 		$post_content = $post->post_content;
	// 		$blocks = parse_blocks($post_content);
	// 		foreach($blocks as $block) {
	// 			self::render_generated_css($block, $block, $block['attrs']);
	// 		}
	// 	}
	// }
}



