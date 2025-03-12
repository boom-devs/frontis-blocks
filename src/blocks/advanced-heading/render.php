<?php
// Extract attributes with fallbacks
$block_id = isset($attributes['blockId']) ? $attributes['blockId'] : '';
$heading_text = isset($attributes['headingText']) ? $attributes['headingText'] : 'Default Heading';
$dynamic_content = isset($attributes['dynamicContent']) ? $attributes['dynamicContent'] : '';
$heading_tag = isset($attributes['headingTag']) ? $attributes['headingTag'] : 'h2';
$active_line_switcher = isset($attributes['activeLineSwitcher']) ? $attributes['activeLineSwitcher'] : false;

// Debug information
$debug = "<!-- Original heading: {$heading_text} | Dynamic: {$dynamic_content} -->";

// Process dynamic content if enabled
if ($dynamic_content) {
    $original_text = $heading_text;
    $post_id = get_the_ID();
    
    switch ($dynamic_content) {
        case 'post_title':
            $heading_text = get_the_title($post_id);
            break;
        case 'post_date':
            $heading_text = get_the_date('', $post_id);
            break;
        default:
            // Keep original text
            break;
    }
    
    $debug .= "<!-- Post ID: {$post_id} | New heading: {$heading_text} -->";
}

// Build the HTML with minimal wrappers
$active_line_class = $active_line_switcher ? 'active-line' : '';
$html = $debug;
$html .= '<div class="frontis-block fb-advanced-heading-main-wrapper">';
$html .= '<div class="fb-advanced-heading-wrapper">';
$html .= '<' . $heading_tag . ' class="fb-advanced-heading ' . $active_line_class . '">' . 
         wp_kses_post($heading_text) . 
         '</' . $heading_tag . '>';
$html .= '</div>';
$html .= '</div>';

return $html;