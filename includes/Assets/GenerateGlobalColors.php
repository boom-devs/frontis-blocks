<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;

class GenerateGlobalColors {
	use Singleton;

	public static function generate_global_colors() {
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
		$merged_colors = array_values($merged_colors);
		if($merged_colors){
			self::generate_root_colors($merged_colors);
		}
	}

	public static function generate_root_colors($color_data) {
		$global_colors = ":root {\n";
    
		// Process base colors
		if (!empty($color_data[0])) {
			$global_colors .= "  /* Base Colors */\n";
			foreach ($color_data[0] as $color) {
				$var_name = "--wp--frontis--color--" . $color['slug'];
				$global_colors .= "  {$var_name}: {$color['color']};\n";
			}
		}
		
		// Process custom colors
		if (!empty($color_data[1])) {
			$global_colors .= "\n  /* Custom Colors */\n";
			foreach ($color_data[1] as $color) {
				$original_var = $color['slug'];
				$prefixed_var = "--wp--frontis--color--" . $original_var;
				$global_colors .= "  {$prefixed_var}: {$color['color']};\n";
			}
		}
		
		// Process gradient colors
		if (!empty($color_data[2])) {
			$global_colors .= "\n  /* Gradient Colors */\n";
			foreach ($color_data[2] as $color) {
				$original_var = $color['slug'];
				$prefixed_var = "--wp--frontis--color--" . $original_var;
				$global_colors .= "  {$prefixed_var}: {$color['color']};\n";
			}
		}
		
		// Process custom gradient colors
		if (!empty($color_data[3])) {
			$global_colors .= "\n  /* Custom Gradient Colors */\n";
			foreach ($color_data[3] as $color) {
				$original_var = $color['slug'];
				$prefixed_var = "--wp--frontis--color--" . $original_var;
				$global_colors .= "  {$prefixed_var}: {$color['color']};\n";
			}
		}
		
		$global_colors .= "}\n";
		
		// Write the CSS to a file
		$upload_dir = wp_upload_dir();
		$css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
	
		// Ensure the target directory exists
		if (!file_exists($css_dir)) {
			wp_mkdir_p($css_dir);
		}
	
		$css_file_name = 'frontis-global-colors.css';
		$css_file = $css_dir . $css_file_name;
		file_put_contents($css_file, $global_colors);
	}
}
