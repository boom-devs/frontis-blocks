<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

class AssetsGenerator {
    use Singleton;

    private $post_id;
    private $post;
    private $used_blocks = [];
    private $css_content = '';
    private $js_content = '';
    private $gfonts = [];
    private $block_fonts = [];
    private $wp_template_css_content = '';

    public static function generate_root_css($color_data, $typography_data) {
        
        $global_colors = "";
        $root_css = "";
    
        // Process base colors
        if (!empty($color_data[0])) {
            $global_colors .= "/* Base Colors */\n";
            foreach ($color_data[0] as $color) {
                $var_name = "--wp--frontis--color--" . $color['slug'];
                $global_colors .= "{$var_name}: {$color['color']};\n";
            }
        }

        // Process custom colors
        if (!empty($color_data[1])) {
            $global_colors .= "\n/* Custom Colors */\n";
            foreach ($color_data[1] as $color) {
                $original_var = $color['slug'];
                $prefixed_var = "--wp--frontis--color--" . $original_var;
                $global_colors .= "{$prefixed_var}: {$color['color']};\n";
            }
        }

        // Process gradient colors
        if (!empty($color_data[2])) {
            $global_colors .= "\n/* Gradient Colors */\n";
            foreach ($color_data[2] as $color) {
                $original_var = $color['slug'];
                $prefixed_var = "--wp--frontis--color--" . $original_var;
                $global_colors .= "{$prefixed_var}: {$color['color']};\n";
            }
        }

        // Process custom gradient colors
        if (!empty($color_data[3])) {
            $global_colors .= "\n/* Custom Gradient Colors */\n";
            foreach ($color_data[3] as $color) {
                $original_var = $color['slug'];
                $prefixed_var = "--wp--frontis--color--" . $original_var;
                $global_colors .= "{$prefixed_var}: {$color['color']};\n";
            }
        }

         // Global Typography
         if($typography_data) {
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

            $array_keys = array_keys($typography_data);
            if($typography_data) {
                foreach($array_keys as $key) {
                    if (!isset($typography_data[$key])) continue;
        
                    // Process global properties
                    $globalProps = ['fontFamily', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration'];
                    foreach($globalProps as $prop) {
                        if (isset($typography_data[$key][$prop]['value'])) {
                            $variable = $typography_data[$key][$prop]['variable'];
                            $cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                            $styleValue = "var({$variable})";
                            $rootStyles .= "{$variable}: {$typography_data[$key][$prop]['value']};\n";
                            
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
                        if (isset($typography_data[$key][$prop]['value'])) {
                            $cssProperty = strtolower(preg_replace('/([A-Z])/', '-$1', $prop));
                            $cssVar = $typography_data[$key][$prop]['variable'];
                            // $rootStyles .= "{$cssVar}: {$data[$key][$prop]['value']};\n";
        
                            // Desktop
                            if (!empty($typography_data[$key][$prop]['value']['Desktop'])) {
                                $value = $typography_data[$key][$prop]['value']['Desktop'];
                                $unit = $typography_data[$key][$prop]['unit']['Desktop'];
                                $desktopStyles .= "{$cssVar}: " . Helper::create_value_with_unit($value, $unit) . ";\n";
                                
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
                            if (!empty($typography_data[$key][$prop]['value']['Tablet'])) {
                                $value = $typography_data[$key][$prop]['value']['Tablet'];
                                $unit = $typography_data[$key][$prop]['unit']['Tablet'];
                                $tabletStyles .= "{$cssVar}: " . Helper::create_value_with_unit($value, $unit) . ";\n";
                            }
        
                            // Mobile
                            if (!empty($typography_data[$key][$prop]['value']['Mobile'])) {
                                $value = $typography_data[$key][$prop]['value']['Mobile'];
                                $unit = $typography_data[$key][$prop]['unit']['Mobile'];
                                $mobileStyles .= "{$cssVar}: " . Helper::create_value_with_unit($value, $unit) . ";\n";
                            }
                        }
                    }
                }
            }


            $heading_grouped = "
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

            $root_css = "
                " . ($rootStyles !== '' || $desktopStyles !== '' ? "
                :root {
                    {$rootStyles}
                    {$desktopStyles}
                    {$global_colors}
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

                {$heading_grouped}
            ";


            return $root_css;
        } else {
            $root_css = "
                :root {
                    {$global_colors}
                }
            ";
        }

        return $root_css;
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

		$merged_colors = array_values($merged_colors);
        $global_typography = get_option('fb_globaltypo');
        $root_css = self::generate_root_css($merged_colors, $global_typography);

        if($root_css) {
            $upload_dir = wp_upload_dir();
            $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/global/';

            if (!file_exists($css_dir)) {
                wp_mkdir_p($css_dir);
            }

            $css_file_name = 'global.css';
            $css_file = $css_dir . $css_file_name;
            file_put_contents($css_file, $root_css);
        }
    }

    public function combine_static_assets() {
        // Css files
        $assets_dir = FB_PLUGIN_PATH . 'assets/css/frontend/';
		$css_files = Helper::get_css_files($assets_dir);

		if(!empty($css_files)) {
			foreach ($css_files as $key => $css_file) {
				$this->css_content .= file_get_contents($css_file) . "\n";
			}
		}

        // Js files
        $js_dir = FB_PLUGIN_PATH . 'assets/js/frontend/';
        $js_files = Helper::get_js_files($js_dir);

		if(!empty($js_files)) {
			foreach ($js_files as $key => $js_file) {
				$this->js_content .= file_get_contents($js_file) . "\n";
			}
		}
    }

    public function get_template_css() {

        $used_wp_template = get_post_meta($this->post_id, '_wp_page_template', true);

        if($used_wp_template) {
            $upload_dir = wp_upload_dir();
            $wp_template_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
            $wp_tempalte_css_file = $wp_template_dir . '/'.$used_wp_template.'/'.$used_wp_template.'.css';

            if (file_exists($wp_tempalte_css_file)) {
                $this->css_content .= file_get_contents($wp_tempalte_css_file) . "\n";
            }
        }
    }

    public function generate_page_assets($post_id, $post) {
        $this->post_id = $post_id;
        $this->post = $post;

        if ( get_post_type( $this->post_id ) !== 'wp_template' && get_post_type( $this->post_id ) !== 'wp_template_part' ) {
            $this->generate_global_assets();
            $this->combine_static_assets();
            $this->get_template_css();
        }

        $this->generate_all_blocks_assets();

        if ( get_post_type( $this->post_id ) !== 'wp_template' && get_post_type( $this->post_id ) !== 'wp_template_part' ) {
            $this->get_font_families();
        }
    }

    public function generate_block_assets($block) {
        if (str_contains($block['blockName'], 'frontis-blocks')) {
            $single_block['slug'] = str_replace('frontis-blocks/', '', $block['blockName']);
            if(!in_array($block['blockName'], $this->used_blocks)) {

                // Css file
                $block_static_css_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/style-index.css';
                if(file_exists($block_static_css_file_path)) {
                    $this->css_content .= file_get_contents($block_static_css_file_path) . "\n";
                }

                // Js file
                $block_static_js_file_path = plugin_dir_path(__DIR__) . '../build/blocks/' . $single_block['slug'] . '/view.js';
                if(file_exists($block_static_js_file_path)) {
                    $this->js_content .= file_get_contents($block_static_js_file_path) . "\n";
                }
            }

            $this->used_blocks[] = $block['blockName'];

            // Get the block attributes
            $block_attributes               = $block['attrs'];
            $blockStyle                     = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

            $fonts        = Helper::get_fonts_family( $block_attributes );

            if(!empty($fonts)) {
                foreach($fonts as $font => $weight) {
                    if(array_key_exists($font, $this->block_fonts)) {
                        $this->block_fonts[$font][] = $weight;
                    } else {
                        $this->block_fonts[$font][] = $weight;
                    }
                }
            }

            $this->css_content .= $blockStyle . "\n";
        }
    }

    public function generate_all_blocks_assets() {
        $post_content = $this->post->post_content;
        $blocks = parse_blocks($post_content);
        $this->get_inner_blocks($blocks);

        // Combine and save CSS files
        $page_name = $this->post->post_name;
        $this->combine_and_save_css_file($page_name);
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

    public function combine_and_save_css_file($page_name) {

        $upload_dir = wp_upload_dir();
        $global_css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
        $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/' . $page_name . '/';
        if (!file_exists($css_dir)) {
            wp_mkdir_p($css_dir);
        }
        
        // Add global css
        if ( get_post_type( $this->post_id ) !== 'wp_template' && get_post_type( $this->post_id ) !== 'wp_template_part' ) {
            $global_css_file = $global_css_dir . '/global/global.css';
            if(file_exists($global_css_file)) {
                $this->css_content .= file_get_contents($global_css_file) . "\n";
            }
        }

        // Css file
        $css_file_name = $page_name . '.css';
        $css_file = $css_dir . $css_file_name;
        file_put_contents($css_file, $this->css_content);

        // Js file
        $js_file_name = $page_name . '.js';
        $js_file = $css_dir . $js_file_name;
        file_put_contents($js_file, $this->js_content);
    }

    public function get_font_families() {

        $custom_typography = get_option('fb_custom_typography');
        $typography_data = get_option('fb_typography');

        $custom_fonts = Helper::extract_font_families($custom_typography);
        $typography_fonts = Helper::extract_font_families($typography_data);

        $fonts_families = array_merge($custom_fonts, $typography_fonts);

        if(!empty($fonts_families)) {
            foreach ($fonts_families as $key => $values) {
                $fonts_families[$key] = array_values(array_unique($values));
            }
        }

        $fonts_families = array_merge($fonts_families, $this->block_fonts);

        if (!empty($fonts_families)) {
            $font_url = "https://fonts.googleapis.com/css?family=";
            $font_parts = [];
        
            foreach ($fonts_families as $font => $weight) {

                if($font === 'Default' || $font === 'default') {
                    continue;
                }

                if (is_array($weight)) {
                    $font_parts[] = str_replace(' ', '+', $font) . ":" . implode(",", $weight);
                } else {
                    $font_parts[] = str_replace(' ', '+', $font) . ":{$weight}";
                }
            }
        
            $font_url .= implode("|", $font_parts);
            update_option('fb_google_fonts_url', $font_url);
        }
    }
}