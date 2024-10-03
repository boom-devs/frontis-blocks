<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// $block
// Extract the block attributes
$block_attributes = $block['attrs'];
$block_id = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$heading_color = isset( $block_attributes['HeadingColor'] ) ? sanitize_hex_color( $block_attributes['HeadingColor'] ) : '#000000';
$heading_border = isset( $block_attributes['HeadingBorder'] ) ? sanitize_text_field( $block_attributes['HeadingBorder'] ) : 'none';
$border_widths = isset( $block_attributes['HeadingDesktopBorderWidth'] ) ? $block_attributes['HeadingDesktopBorderWidth'] : array( 'top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0' );

// Generate CSS content
$css_content = "
#$block_id {
	color: $heading_color;
	border-style: $heading_border;
	border-width: {$border_widths['top']}px {$border_widths['right']}px {$border_widths['bottom']}px {$border_widths['left']}px;
}";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_id);
