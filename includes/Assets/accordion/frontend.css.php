<?php

use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes               = $block['attrs'];
$block_id                        = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';
$blockStyle                     = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

EnqueueBlocksCss::enqueue_block_asset(css_content: $blockStyle, block_name: $single_block['slug'], block_id: $block_id);