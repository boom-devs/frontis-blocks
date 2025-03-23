<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;

class AssetsGenerator {
    use Singleton;

    private $post_id;
    private $post;
    private $used_blocks = [];
    private $css_content = '';

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

                $css_file_name = 'global.css';
                $css_file = $css_dir . $css_file_name;
                file_put_contents($css_file, $styles);
            }
        }
    }

    public function generate_page_assets($post_id, $post) {
        $this->post_id = $post_id;
        $this->post = $post;

        // self::generate_global_assets();
        $this->generate_all_blocks_assets();
    }

    public function generate_block_assets($block) {
        if (str_contains($block['blockName'], 'frontis-blocks')) {
            $single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);

            if(!in_array($block['blockName'], $this->used_blocks)) {
                $static_css_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/style-index.css';
                $this->css_content .= file_get_contents($static_css_file_path);
            }

            $this->used_blocks[] = $block['blockName'];

            // Get the block attributes
            $block_attributes               = $block['attrs'];
            $blockStyle                     = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

            $this->css_content .= $blockStyle;
        }
    }

    public function generate_all_blocks_assets() {
        $post_content = $this->post->post_content;
        $blocks = parse_blocks($post_content);
        
        $this->get_inner_blocks($blocks);

        // Combine and save CSS files
        $page_name = $this->post->post_name;
        $this->combine_and_save_css_files($page_name);
    }
    
    private function get_inner_blocks($blocks) {
        foreach ($blocks as $block) {
            if ($block && isset($block['blockName'])) {
                $this->generate_block_assets($block);
            }
            
            if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
                $this->get_inner_blocks($block['innerBlocks']);
            }
        }
    }

    public function combine_and_save_css_files($page_name) {
        $upload_dir = wp_upload_dir();
        $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
        if (!file_exists($css_dir)) {
            wp_mkdir_p($css_dir);
        }

        $css_file_name = $page_name . '.css';
        $css_file = $css_dir . $css_file_name;
        
        file_put_contents($css_file, $this->css_content);
    }

    public static function genrate_root_css_from_data($data, $root_colors) {
        // Initialize style variables
        $rootStyles = '';
        $desktopStyles = '';
        $tabletStyles = '';
        $mobileStyles = '';

        $paragraphStyles = '';
        $linkStyles = '';
        $buttonStyles = '';
        $captionStyles = '';
        $heading1Styles = '';
        $heading2Styles = '';
        $heading3Styles = '';
        $heading4Styles = '';
        $heading5Styles = '';
        $heading6Styles = '';
        $combinedHeadingStyles = '';

        // Process global properties for each element

        $array_keys = array_keys($data);
        if($data) {
            foreach($array_keys as $key) {
                if (!isset($data[$key])) continue;
    
                // Process global properties
                $globalProps = ['fontFamily', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration'];
                foreach($globalProps as $prop) {
                    if (isset($data[$key][$prop]['value'])) {
                        $variable = $data[$key][$prop]['variable'];
                        $cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                        $styleValue = "var({$variable})";
                        $rootStyles .= "{$variable}: {$data[$key][$prop]['value']};\n";
                        
                        switch($key) {
                            case 'body':
                                $paragraphStyles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'link':
                                $linkStyles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'button':
                                $buttonStyles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'captions':
                                $captionStyles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'all':
                                $combinedHeadingStyles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'h1':
                                $heading1Styles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'h2':
                                $heading2Styles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'h3':
                                $heading3Styles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'h4':
                                $heading4Styles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'h5':
                                $heading5Styles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                            case 'h6':
                                $heading6Styles .= "{$cssProperty}: {$styleValue};\n";
                                break;
                        }
                    }
                }
    
                // Process responsive properties
                $responsiveProps = ['fontSize', 'letterSpacing', 'lineHeight'];
                foreach($responsiveProps as $prop) {
                    if (isset($data[$key][$prop]['value'])) {
                        $cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                        $cssVar = $data[$key][$prop]['variable'];
                        // $rootStyles .= "{$cssVar}: {$data[$key][$prop]['value']};\n";
    
                        // Desktop
                        if (!empty($data[$key][$prop]['value']['Desktop'])) {
                            $value = $data[$key][$prop]['value']['Desktop'];
                            $unit = $data[$key][$prop]['unit']['Desktop'];
                            $desktopStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                            
                            switch($key) {
                                case 'body':
                                    $paragraphStyles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'link':
                                    $linkStyles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'button':
                                    $buttonStyles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'captions':
                                    $captionStyles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'all':
                                    $combinedHeadingStyles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'h1':
                                    $heading1Styles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'h2':
                                    $heading2Styles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'h3':
                                    $heading3Styles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'h4':
                                    $heading4Styles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'h5':
                                    $heading5Styles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                                case 'h6':
                                    $heading6Styles .= "{$cssProperty}: var({$cssVar});\n";
                                    break;
                            }
                        }
    
                        // Tablet
                        if (!empty($data[$key][$prop]['value']['Tablet'])) {
                            $value = $data[$key][$prop]['value']['Tablet'];
                            $unit = $data[$key][$prop]['unit']['Tablet'];
                            $tabletStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                        }
    
                        // Mobile
                        if (!empty($data[$key][$prop]['value']['Mobile'])) {
                            $value = $data[$key][$prop]['value']['Mobile'];
                            $unit = $data[$key][$prop]['unit']['Mobile'];
                            $mobileStyles .= "{$cssVar}: " . self::createValueWithUnit($value, $unit) . ";\n";
                        }
                    }
                }
            }
        }


        $headingGrouped = "
            " . ($heading1Styles !== '' ? "
            body h1 {
                {$heading1Styles}
            }
            " : "") . "
            " . ($heading2Styles !== '' ? "
            body h2 {
                {$heading2Styles}
            }
            " : "") . "
            " . ($heading3Styles !== '' ? "
            body h3 {
                {$heading3Styles}
            }
            " : "") . "
            " . ($heading4Styles !== '' ? "
            body h4 {
                {$heading4Styles}
            }
            " : "") . "
            " . ($heading5Styles !== '' ? "
            body h5 {
                {$heading5Styles}
            }
            " : "") . "
            " . ($heading6Styles !== '' ? "
            body h6 {
                {$heading6Styles}
            }
            " : "") . "
        ";

        $finalCSS = "
            " . ($rootStyles !== '' || $desktopStyles !== '' ? "
            :root {
                {$rootStyles}
                {$desktopStyles}
                {$root_colors}
            }
            " : "") . "
            
            " . ($tabletStyles !== '' ? "
            @media (max-width: 1024px) {
                :root {
                    {$tabletStyles}
                }
            }
            " : "") . "
            
            " . ($mobileStyles !== '' ? "
            @media (max-width: 767px) {
                :root {
                    {$mobileStyles}
                }
            }
            " : "") . "

            " . ($paragraphStyles !== '' ? "
            body p, :root :where(p) {
                {$paragraphStyles}
            }
            " : "") . "

            " . ($linkStyles !== '' ? "
            body a,
            body p a,
            :root :where(a) {
                {$linkStyles}
            }
            " : "") . "

            " . ($buttonStyles !== '' ? "
            body .wp-block-button__link,
            :root :where(.wp-element-button, .wp-block-button__link),
            body button {
                {$buttonStyles}
            }
            " : "") . "

            " . ($captionStyles !== '' ? "
            body figcaption,
            :root :where(.wp-element-caption, .wp-block-audio figcaption,
                .wp-block-embed figcaption, .wp-block-gallery figcaption,
                .wp-block-image figcaption, .wp-block-table figcaption,
                .wp-block-video figcaption) {
                {$captionStyles}
            }
            " : "") . "

            " . ($combinedHeadingStyles !== '' ? "
            body h1,
            body h2,
            body h3,
            body h4,
            body h5,
            body h6 {
                {$combinedHeadingStyles}
            }
            " : "") . "

            {$headingGrouped}
        ";
        
        return $finalCSS;
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
}
