<?php

defined('ABSPATH') || exit;

namespace FrontisBlocks\Assets;

class AssetsGenerator {

    private $post_id;
    private $post;
    private $used_blocks = [];

    public function __construct($post_id, $post) {
        $this->post_id = $post_id;
        $this->post = $post;
    }

    public static function generate_global_assets() {
        // Global Colors
        $global_colors = get_option('fb_global_colors');
		$global_custom_colors = get_option('fb_custom_colors');
		$global_gradient_colors = get_option('fb_gradient_colors');
		$global_custom_gradient_colors = get_option('fb_custom_gradient_colors');

		$merged_colors = array_filter([
			'global_colors' => $global_colors,
			'global_custom_colors' => $global_custom_colors,
			'global_gradient_colors' => $global_gradient_colors,
			'global_custom_gradient_colors' => $global_custom_gradient_colors
		], function ($value) {
			return !empty($value);
		});

		// Optional: Reset array keys if necessary
        $root_colors = '';
		$merged_colors = array_values($merged_colors);
		if($merged_colors){
			$root_colors = self::generate_root_colors($merged_colors);
		}

        // Global Typography
        $global_typography = get_option('fb_globaltypo');
        
        if($global_typography) {
            $styles = self::processData($global_typography, $root_colors);
            if($styles) {
                $upload_dir = wp_upload_dir();
                $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';

                // Ensure the target directory exists
                if (!file_exists($css_dir)) {
                    wp_mkdir_p($css_dir);
                }

                $css_file_name = 'header.css';
                $css_file = $css_dir . $css_file_name;
                file_put_contents($css_file, $styles);
            }
        }
    }

    public function generate_page_assets() {
        self::generate_global_assets();
        $this->generate_all_blocks_assets();
    }

    public function generate_block_assets($block) {
        if (str_contains($block['blockName'], 'frontis-blocks')) {
            $single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);

            if(!in_array($block['blockName'], $this->used_blocks)) {
                self::combined_blocks_frontend_css($single_block['slug']);
            }

            $this->used_blocks[] = $block['blockName'];
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

    public function generate_all_blocks_assets($blocks) {

        $post_content = $this->post->post_content;
        $blocks = parse_blocks($post_content);
        $this->generate_blo($blocks);


        if($block && $block['blockName']) {
			
		}
        
    }


    // $upload_dir = wp_upload_dir();
	// 	$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
	// 	if (!file_exists($css_dir)) {
	// 		wp_mkdir_p($css_dir);
	// 	}

	// 	$css_file_name = $block_id . '.css';
	// 	$css_file = $css_dir . $css_file_name;
		
	// 	file_put_contents($css_file, $css_content);
	// 	self::combined_css_files(self::$page_name);

    public function generate_asset($block_slug, $block_style) {
        echo 'Hello World';
    }
}
