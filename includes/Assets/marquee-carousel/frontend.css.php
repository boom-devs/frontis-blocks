<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';
$blockStyle = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($blockStyle, $single_block['slug'], $blockId);
