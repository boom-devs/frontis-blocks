<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';

// Get all column block attributes and sanitize them
$columns = isset($block_attributes['columns']) ? intval($block_attributes['columns']) : 2;
$wrapper_width = isset($block_attributes['wrapperWidthRange']) ? intval($block_attributes['wrapperWidthRange']) : 100;
$tab_wrapper_width = isset($block_attributes['TABwrapperWidthRange']) ? intval($block_attributes['TABwrapperWidthRange']) : $wrapper_width;
$mob_wrapper_width = isset($block_attributes['MOBwrapperWidthRange']) ? intval($block_attributes['MOBwrapperWidthRange']) : $wrapper_width;
$column_order = isset($block_attributes['columnOrderRange']) ? intval($block_attributes['columnOrderRange']) : 0;
$tab_column_order = isset($block_attributes['TABcolumnOrderRange']) ? intval($block_attributes['TABcolumnOrderRange']) : $column_order;
$mob_column_order = isset($block_attributes['MOBcolumnOrderRange']) ? intval($block_attributes['MOBcolumnOrderRange']) : $column_order;
$col_alignment = isset($block_attributes['colAli']) ? sanitize_text_field($block_attributes['colAli']) : 'center';
$row_overflow = isset($block_attributes['rowOverFlow']) ? sanitize_text_field($block_attributes['rowOverFlow']) : 'visible';
$class_hook = isset($block_attributes['classHook']) ? sanitize_html_class($block_attributes['classHook']) : '';

// Background
$background_type = isset($block_attributes['backgroundType']) ? sanitize_text_field($block_attributes['backgroundType']) : 'fill';
$background_color = isset($block_attributes['backgroundColor']) ? sanitize_hex_color($block_attributes['backgroundColor']) : '';
$background_gradient = isset($block_attributes['backgroundGradient']) ? sanitize_text_field($block_attributes['backgroundGradient']) : 'linear-gradient(45deg,#00000000,#00000000)';

// Border
$border_style = isset($block_attributes['borderStyle']) ? sanitize_text_field($block_attributes['borderStyle']) : 'none';
$border_width = isset($block_attributes['borderWidth']) ? intval($block_attributes['borderWidth']) : 1;
$border_color = isset($block_attributes['borderColor']) ? sanitize_hex_color($block_attributes['borderColor']) : '';
$border_radius = isset($block_attributes['borderRadius']) ? intval($block_attributes['borderRadius']) : 0;

// Padding
$padding_top = isset($block_attributes['paddingTop']) ? intval($block_attributes['paddingTop']) : 0;
$padding_right = isset($block_attributes['paddingRight']) ? intval($block_attributes['paddingRight']) : 0;
$padding_bottom = isset($block_attributes['paddingBottom']) ? intval($block_attributes['paddingBottom']) : 0;
$padding_left = isset($block_attributes['paddingLeft']) ? intval($block_attributes['paddingLeft']) : 0;

// Margin
$margin_top = isset($block_attributes['marginTop']) ? intval($block_attributes['marginTop']) : 0;
$margin_right = isset($block_attributes['marginRight']) ? intval($block_attributes['marginRight']) : 0;
$margin_bottom = isset($block_attributes['marginBottom']) ? intval($block_attributes['marginBottom']) : 0;
$margin_left = isset($block_attributes['marginLeft']) ? intval($block_attributes['marginLeft']) : 0;

$css_content = "
.frontis-column-{$blockId} {
    flex-basis: calc(100% / {$columns});
    width: {$wrapper_width}%;
    order: {$column_order};
    align-items: {$col_alignment};
    overflow: {$row_overflow};
    background: " . ($background_type === 'fill' ? $background_color : $background_gradient) . ";
    border-style: {$border_style};
    border-width: {$border_width}px;
    border-color: {$border_color};
    border-radius: {$border_radius}px;
    padding: {$padding_top}px {$padding_right}px {$padding_bottom}px {$padding_left}px;
    margin: {$margin_top}px {$margin_right}px {$margin_bottom}px {$margin_left}px;
}

@media (max-width: 768px) {
    .frontis-column-{$blockId} {
        flex-basis: 100%;
        width: {$tab_wrapper_width}%;
        order: {$tab_column_order};
    }
}

@media (max-width: 480px) {
    .frontis-column-{$blockId} {
        flex-basis: 100%;
        width: {$mob_wrapper_width}%;
        order: {$mob_column_order};
    }
}

" . ($class_hook ? ".{$class_hook} { }" : "");

EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);
