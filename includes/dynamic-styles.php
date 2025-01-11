<?php
/**
 * Handle dynamic styles for Frontis Blocks
 */

function fb_get_dynamic_css() {
    // Get saved colors from options
    $global_colors = get_option('fb_global_colors', []);
    
    if (empty($global_colors)) {
        return '';
    }

    $css = ':root {';
    
    foreach ($global_colors as $color) {
        if (!empty($color['var']) && !empty($color['color'])) {
            $css .= sprintf('%s: %s;', $color['var'], $color['color']);
        }
    }
    
    $css .= '}';
    
    return $css;
}

function fb_enqueue_dynamic_styles() {
    // Get the dynamic CSS
    $dynamic_css = fb_get_dynamic_css();
    
    if (!empty($dynamic_css)) {
        // Add the dynamic CSS to the header
        wp_add_inline_style('frontis-blocks-style', $dynamic_css);
    }
}
add_action('wp_enqueue_scripts', 'fb_enqueue_dynamic_styles', 20);
add_action('admin_enqueue_scripts', 'fb_enqueue_dynamic_styles', 20); 