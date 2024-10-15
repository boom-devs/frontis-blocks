<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;

class GenerateFrontendCss {
	use Singleton;

	public static function render_generated_css($block_content, $block, $block_attributes) {

		$blocks_list = BlockList::get_instance()->get_blocks();

		if (!empty($blocks_list)) {
			foreach ($blocks_list as $single_block) {
			 	if ('frontis-blocks/'.$single_block['slug']  === $block['blockName']) {
					include plugin_dir_path(__DIR__) . 'Assets/' . $single_block['slug'] . '/frontend.css.php';
				}
			}
		}
	}

	public static function generate_css($block_content, $block) {
		self::render_generated_css($block_content, $block, $block['attrs']);
		return $block_content;
	}
}
