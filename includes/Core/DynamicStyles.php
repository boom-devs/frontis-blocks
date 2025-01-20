<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;

class DynamicStyles {

    use Singleton;

    public function __construct() {
        // Add actions for both editor and front-end
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_dynamic_styles'], 20);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_dynamic_styles'], 20);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_dynamic_styles'], 20);
    }

    public function enqueue_dynamic_styles() {
        $css = '';
        
        // Get color styles
        $color_css = $this->get_global_colors();
        if (!empty($color_css)) {
            $css .= $color_css;
        }
        
        // Get typography styles
        $typography_css = $this->get_global_typography();
        if (!empty($typography_css)) {
            $css .= $typography_css;
        }

        // Only add if we have styles
        if (!empty($css)) {
            // Make sure frontis-blocks-style is registered
            if (!wp_style_is('frontis-blocks-style', 'registered')) {
                wp_register_style('frontis-blocks-style', false);
            }
            
            // Enqueue the style if it's not already enqueued
            if (!wp_style_is('frontis-blocks-style', 'enqueued')) {
                wp_enqueue_style('frontis-blocks-style');
            }
            
            wp_add_inline_style('frontis-blocks-style', $css);
        }
    }

    public function get_global_colors() {
        $global_colors = get_option('fb_global_colors', []);
        if (empty($global_colors)) {
            return '';
        }

        $css = ":root {\n";
        foreach ($global_colors as $color) {
            if (!empty($color['var']) && !empty($color['color'])) {
                $css .= "    " . $color['var'] . ": " . $color['color'] . ";\n";
                
                // Add shade variables if they exist
                // if (!empty($color['shades'])) {
                //     foreach ($color['shades'] as $shade => $value) {
                //         $shade_var = str_replace(')', "-{$shade})", $color['var']);
                //         $css .= "    " . $shade_var . ": " . $value . ";\n";
                //     }
                // }
            }
        }
        $css .= "}\n\n";

        return $css;
    }

    public function get_global_typography() {
        $typography_settings = get_option('fb_typography', []);
        if (empty($typography_settings)) {
            return '';
        }
        // error_log(print_r($typography_settings, true));

        $css = ":root {\n";
        
        foreach ($typography_settings as $key => $value) {
            error_log(print_r($value, true));
            if (is_array($value)) {
                foreach ($value as $prop => $setting) {
                    if (is_array($setting)) {
                        foreach ($setting as $device => $val) {
                            if ($device === 'Desktop') {
                                $css .= "    --fb-typography-{$key}-{$prop}: {$val};\n";
                            }
                        }
                    } else {
                        $css .= "    --fb-typography-{$key}-{$prop}: {$setting};\n";
                    }
                }
            }
        }
        
        $css .= "}\n\n";

        // Add responsive styles
        foreach (['tablet' => '768px', 'mobile' => '480px'] as $device => $breakpoint) {
            $css .= "@media (max-width: {$breakpoint}) {\n";
            $css .= "    :root {\n";
            
            foreach ($typography_settings as $key => $value) {
                if (is_array($value)) {
                    foreach ($value as $prop => $setting) {
                        if (is_array($setting) && isset($setting[ucfirst($device)])) {
                            $css .= "        --fb-typography-{$key}-{$prop}: {$setting[ucfirst($device)]};\n";
                        }
                    }
                }
            }
            
            $css .= "    }\n";
            $css .= "}\n\n";
        }

        return $css;
    }
}