<?php

// Extract attributes with fallbacks
$block_id = isset($attributes['blockId']) ? $attributes['blockId'] : '';
$heading_text = isset($attributes['headingText']) ? $attributes['headingText'] : 'Default Heading';
$dynamic_content = isset($attributes['dynamicContent']) ? $attributes['dynamicContent'] : '';
$heading_tag = isset($attributes['headingTag']) ? $attributes['headingTag'] : 'h2';
$active_line_switcher = isset($attributes['activeLineSwitcher']) ? $attributes['activeLineSwitcher'] : false;
$heading_alignment = isset($attributes['headingAlignment']) ? $attributes['headingAlignment'] : '';

// Debug information (optional - you can remove in production)
$debug = "<!-- Dynamic content type: {$dynamic_content} -->";

// Process dynamic content if enabled
if ($dynamic_content) {
    // Check if we're inside a Query Loop
    if (isset($block->context['postId'])) {
        $post_id = $block->context['postId'];
        $debug .= "<!-- Inside Query Loop, Post ID: {$post_id} -->";

        switch ($dynamic_content) {
            case 'post_title':
                $heading_text = get_the_title($post_id);
                break;
            case 'post_date':
                $heading_text = get_the_date('', $post_id);
                break;
        }
    } else {
        $post_id = get_the_ID();
        $debug .= "<!-- Regular context, Post ID: {$post_id} -->";

        switch ($dynamic_content) {
            case 'post_title':
                $heading_text = get_the_title($post_id);
                break;
            case 'post_date':
                $heading_text = get_the_date('', $post_id);
                break;
        }
    }
}

// Set up alignment style if provided
$style_attr = '';
if (!empty($heading_alignment)) {
    $style_attr = ' style="text-align:' . esc_attr($heading_alignment) . ';"';
}

// Build the HTML with minimal wrappers
$active_line_class = $active_line_switcher ? 'active-line' : '';
$html = $debug;
$html .= '<div ' . get_block_wrapper_attributes(['class' => "frontis-advanced-heading {$block_id}"]) . '>';
$html .= "<{$heading_tag} class='fb-advanced-heading {$active_line_class}'{$style_attr}>" . wp_kses_post($heading_text) . "</{$heading_tag}>";
$html .= '</div>';

// Output the final HTML
echo $html;
