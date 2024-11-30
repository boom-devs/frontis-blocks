<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes   = $block['attrs'];
$blockID            = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';
$blockStyle         = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';


// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($blockStyle, $single_block['slug'], $blockID);