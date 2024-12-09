<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';
$blockStyle = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';


// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $blockStyle, $single_block['slug'], $blockId);
