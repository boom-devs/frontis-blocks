<?php
// Extract attributes with fallbacks
$block_id = isset($attributes['blockId']) ? $attributes['blockId'] : '';
$paragraph_text = isset($attributes['paragraphText']) ? $attributes['paragraphText'] : 'Advanced Paragraph';
$paragraph_alignment = isset($attributes['paragraphAlignment']) ? $attributes['paragraphAlignment'] : '';
$dynamic_content = isset($attributes['dynamicContent']) ? $attributes['dynamicContent'] : '';
$paragraph_global_wraper_id = isset($attributes['paragraphGlobalWraperID']) ? $attributes['paragraphGlobalWraperID'] : '';
$paragraph_global_wraper_class = isset($attributes['paragraphGlobalWraperClass']) ? $attributes['paragraphGlobalWraperClass'] : '';

$advanced_paragraph_desktop_switcher = isset($attributes['advancedParagraphDesktopSwitcher']) ? $attributes['advancedParagraphDesktopSwitcher'] : false;
$advanced_paragraph_tablet_switcher = isset($attributes['advancedParagraphTabletSwitcher']) ? $attributes['advancedParagraphTabletSwitcher'] : false;
$advanced_paragraph_mobile_switcher = isset($attributes['advancedParagraphMobileSwitcher']) ? $attributes['advancedParagraphMobileSwitcher'] : false;

// Handle dynamic content
$dynamic_value = '';
if (!empty($dynamic_content)) {
    // If we're in a query loop context
    if (isset($block->context['postId'])) {
        $post_id = $block->context['postId'];

        switch ($dynamic_content) {
            case 'post_title':
                $dynamic_value = get_the_title($post_id);
                break;
            case 'post_date':
                $dynamic_value = get_the_date('', $post_id);
                break;
            default:
                $dynamic_value = '';
        }
    } else {
        // Regular context (not in a query loop)
        global $post;

        switch ($dynamic_content) {
            case 'post_title':
                $dynamic_value = get_the_title();
                break;
            case 'post_date':
                $dynamic_value = get_the_date();
                break;
            default:
                $dynamic_value = '';
        }
    }
}

// Determine the paragraph content (dynamic or static)
$paragraph_content = !empty($dynamic_value) ? $dynamic_value : $paragraph_text;

// Get responsive classes
$responsive_classes = [];
if ($advanced_paragraph_desktop_switcher) {
    $responsive_classes[] = 'fb-desktop-responsive';
}
if ($advanced_paragraph_tablet_switcher) {
    $responsive_classes[] = 'fb-tablet-responsive';
}
if ($advanced_paragraph_mobile_switcher) {
    $responsive_classes[] = 'fb-mobile-responsive';
}

$classes = array_merge(['frontis-block', 'fb-advanced-paragraph-main-wrapper', $block_id], $responsive_classes);
$wrapper_attributes = get_block_wrapper_attributes(['class' => implode(' ', $classes)]);

// Start building the HTML output
$output = '<div ' . $wrapper_attributes . '>';
$output .= '<div class="fb-parent-wrapper fb-advanced-wrapper ' . esc_attr($paragraph_global_wraper_class) . '" id="' . esc_attr($paragraph_global_wraper_id) . '" style="text-align: ' . esc_attr($paragraph_alignment) . ';">';


// Add main paragraph
$output .= '<div class="fb-advanced-paragraph-wrapper">';
$output .= '<p class="' . 'fb-advanced-paragraph' . '">' . wp_kses_post($paragraph_content) . '</p>';
$output .= '</div>';



$output .= '</div>';
$output .= '</div>';

// Echo the final output
echo $output;