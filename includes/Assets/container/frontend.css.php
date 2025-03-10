<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
use FrontisBlocks\Utils\Helper;

if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$attributes = $block['attrs'];

if(isset($attributes['blockStyle']) && isset($attributes['p_block_id'])) {
	$css = $attributes['blockStyle'];
	EnqueueBlocksCss::enqueue_block_asset($css, $single_block['slug'], $attributes['p_block_id']);
}