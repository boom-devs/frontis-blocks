<?php
/**
 * Server-side rendering of the Table of Contents block
 *
 * @package Frontis_Blocks
 */

// Parse block attributes from saved content
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'fb-table-of-contents-block ' . 
               (isset($attributes['blockID']) ? $attributes['blockID'] : '') . ' ' .
               (isset($attributes['customClass']) ? $attributes['customClass'] : '') . ' ' .
               (isset($attributes['enableDesktopSticky']) && $attributes['enableDesktopSticky'] ? 'sticky-desktop' : '') . ' ' .
               (isset($attributes['enableMobileCollapsible']) && $attributes['enableMobileCollapsible'] ? 'collapsible-mobile' : '')
]);

// Default attributes with fallbacks
$title = isset($attributes['tocTitle']) ? $attributes['tocTitle'] : 'Table of Contents';
$min_level = isset($attributes['minHeadingLevel']) ? intval($attributes['minHeadingLevel']) : 2;
$max_level = isset($attributes['maxHeadingLevel']) ? intval($attributes['maxHeadingLevel']) : 4;
$list_style = isset($attributes['listStyle']) ? $attributes['listStyle'] : 'disc';
$collapsible = isset($attributes['collapsible']) ? $attributes['collapsible'] : true;
$initial_collapsed = isset($attributes['initialCollapsed']) ? $attributes['initialCollapsed'] : false;
$smooth_scroll = isset($attributes['smoothScroll']) ? $attributes['smoothScroll'] : true;
$scroll_offset = isset($attributes['scrollOffset']) ? intval($attributes['scrollOffset']) : 20;
$collapsible_mobile = isset($attributes['enableMobileCollapsible']) ? $attributes['enableMobileCollapsible'] : true;

// Get the current post content
$post = get_post();

if (!$post) {
    return '<div ' . $wrapper_attributes . '>
        <div class="fb-toc-container">
            <div class="fb-toc-list-container">
                <p class="fb-toc-empty">No content available to generate table of contents.</p>
            </div>
        </div>
    </div>';
}

// Extract headings from post content
$headings = array();

$pattern = '/<h([' . $min_level . '-' . $max_level . '])(.*?)>(.*?)<\/h\1>/i';

if (preg_match_all($pattern, $post->post_content, $matches, PREG_SET_ORDER)) {
    foreach ($matches as $index => $match) {
        $level = intval($match[1]);
        $attributes_str = $match[2];
        $text = strip_tags($match[3]);
        
        // Extract ID if it exists
        $id = '';
        if (preg_match('/id=["\']([^"\']+)["\']/i', $attributes_str, $id_match)) {
            $id = $id_match[1];
        } else {
            // Generate ID if none exists
            $id = sanitize_title($text);
            if (empty($id)) {
                $id = 'heading-' . $index;
            }
        }
        
        $headings[] = array(
            'id' => $id,
            'text' => $text,
            'level' => $level,
            'index' => $index
        );
    }
}

// If no headings found, return a message
if (empty($headings)) {
    return '<div ' . $wrapper_attributes . '>
        <div class="fb-toc-container">
            <div class="fb-toc-content">
                <h4 class="fb-toc-title">' . esc_html($title) . '</h4>
                <div class="fb-toc-list-container">
                    <p class="fb-toc-empty">No headings found in the content.</p>
                </div>
            </div>
        </div>
    </div>';
}

// Build hierarchical TOC structure
$toc_html = '';
if (!empty($headings)) {
    // Start with the main list
    $toc_html = '<ul class="fb-toc-list list-style-' . esc_attr($list_style) . '">';
    
    // Track hierarchical structure
    $stack = array();
    $current_level = null;
    $last_item_at_level = array();
    
    // Process each heading
    foreach ($headings as $heading) {
        $list_item = '<li class="toc-level-' . $heading['level'] . '">';
        $list_item .= '<a href="#' . esc_attr($heading['id']) . '">' . esc_html($heading['text']) . '</a>';
        
        // Initialize for first item
        if ($current_level === null) {
            $current_level = $heading['level'];
            $stack[] = $list_item;
            $last_item_at_level[$heading['level']] = count($stack) - 1;
            continue;
        }
        
        // Handle item with same level as current 
        if ($heading['level'] === $current_level) {
            $stack[] = $list_item;
            $last_item_at_level[$heading['level']] = count($stack) - 1;
        }
        // Handle going deeper in hierarchy
        elseif ($heading['level'] > $current_level) {
            // Find parent item and add sublist
            $parent_index = $last_item_at_level[$current_level];
            $stack[$parent_index] = substr($stack[$parent_index], 0, -5);
            $stack[$parent_index] .= '<ul class="fb-toc-sublist">' . $list_item;
            
            $last_item_at_level[$heading['level']] = count($stack) - 1;
            $current_level = $heading['level'];
        }
        // Handle going up in hierarchy
        elseif ($heading['level'] < $current_level) {
            // Close any open sublists
            $closings = '';
            for ($i = $current_level; $i > $heading['level']; $i--) {
                $closings .= '</li></ul>';
            }
            
            // Find the nearest parent level
            $parent_index = isset($last_item_at_level[$heading['level'] - 1]) ? 
                $last_item_at_level[$heading['level'] - 1] : null;
            
            if ($parent_index !== null) {
                $stack[$parent_index] = substr($stack[$parent_index], 0, -5) . $closings . '</li>';
            } else {
                $stack[] = $closings;
            }
            
            $stack[] = $list_item;
            $last_item_at_level[$heading['level']] = count($stack) - 1;
            $current_level = $heading['level'];
        }
    }
    
    // Close any remaining open tags
    if ($current_level > $headings[0]['level']) {
        for ($i = $current_level; $i > $headings[0]['level']; $i--) {
            $stack[] = '</li></ul>';
        }
    }
    
    // Close all items
    foreach ($stack as &$item) {
        if (substr($item, -5) !== '</li>' && substr($item, -5) !== '</ul>') {
            $item .= '</li>';
        }
    }
    
    $toc_html .= implode('', $stack);
    $toc_html .= '</ul>';
}

// Set data attributes for JS functionality
$data_attributes = ' data-min-heading-level="' . esc_attr($min_level) . '"'
                 . ' data-max-heading-level="' . esc_attr($max_level) . '"'
                 . ' data-smooth-scroll="' . ($smooth_scroll ? 'true' : 'false') . '"'
                 . ' data-collapsible="' . ($collapsible ? 'true' : 'false') . '"'
                 . ' data-initial-collapsed="' . ($initial_collapsed ? 'true' : 'false') . '"'
                 . ' data-scroll-offset="' . esc_attr($scroll_offset) . '"';

// Initialize collapse state classes
$content_class = 'fb-toc-content';
$icon_class = 'dashicons dashicons-minus';

if ($collapsible && $initial_collapsed) {
    $content_class .= ' collapsed';
    $icon_class = 'dashicons dashicons-plus';
}

// Build the final HTML output
$output = '<div ' . $wrapper_attributes . $data_attributes . '>';

// Mobile toggle button
if ($collapsible_mobile) {
    $output .= '<div class="fb-toc-mobile-toggle">
        <span class="dashicons dashicons-menu-alt"></span>
        <span class="toggle-text">' . esc_html($title) . '</span>
    </div>';
}

$output .= '<div class="fb-toc-container">';
$output .= '<div class="' . esc_attr($content_class) . '">';

// Add title and collapse toggle button
$output .= '<div class="fb-toc-header">';
$output .= '<h4 class="fb-toc-title">' . esc_html($title) . '</h4>';

if ($collapsible) {
    $output .= '<div class="fb-toc-collapse-toggle">
        <span class="' . esc_attr($icon_class) . '"></span>
    </div>';
}

$output .= '</div>'; 

// Add the TOC list
$output .= '<div class="fb-toc-list-container">';
$output .= $toc_html;
$output .= '</div>'; 

$output .= '</div>'; 
$output .= '</div>'; 
$output .= '</div>'; 

return $output;