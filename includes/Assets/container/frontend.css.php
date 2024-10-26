<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['block_id']) ? sanitize_text_field($block_attributes['block_id']) : '';

// Extract attributes
$layoutType = isset($block_attributes['layoutType']) ? esc_attr($block_attributes['layoutType']) : 'flex';
$containerWidth = isset($block_attributes['containerWidth']) ? esc_attr($block_attributes['containerWidth']) : 'full-width';
$contentBoxWidth = isset($block_attributes['contentBoxWidth']) ? intval($block_attributes['contentBoxWidth']) : 1140;
$minimumHeight = isset($block_attributes['minimumHeight']) ? intval($block_attributes['minimumHeight']) : 0;
$overflow = isset($block_attributes['overflow']) ? esc_attr($block_attributes['overflow']) : 'visible';
$backgroundColor = isset($block_attributes['backgroundColor']) ? esc_attr($block_attributes['backgroundColor']) : 'transparent';
$backgroundGradient = isset($block_attributes['backgroundGradient']) ? esc_attr($block_attributes['backgroundGradient']) : '';
$textColor = isset($block_attributes['textColor']) ? esc_attr($block_attributes['textColor']) : 'inherit';
$paddingTop = isset($block_attributes['paddingTop']) ? intval($block_attributes['paddingTop']) : 0;
$paddingRight = isset($block_attributes['paddingRight']) ? intval($block_attributes['paddingRight']) : 0;
$paddingBottom = isset($block_attributes['paddingBottom']) ? intval($block_attributes['paddingBottom']) : 0;
$paddingLeft = isset($block_attributes['paddingLeft']) ? intval($block_attributes['paddingLeft']) : 0;
$marginTop = isset($block_attributes['marginTop']) ? intval($block_attributes['marginTop']) : 0;
$marginRight = isset($block_attributes['marginRight']) ? intval($block_attributes['marginRight']) : 0;
$marginBottom = isset($block_attributes['marginBottom']) ? intval($block_attributes['marginBottom']) : 0;
$marginLeft = isset($block_attributes['marginLeft']) ? intval($block_attributes['marginLeft']) : 0;
$flexDirection = isset($block_attributes['flexDirection']) ? esc_attr($block_attributes['flexDirection']) : 'row';
$flexWrap = isset($block_attributes['flexWrap']) ? esc_attr($block_attributes['flexWrap']) : 'nowrap';
$justifyContent = isset($block_attributes['justifyContent']) ? esc_attr($block_attributes['justifyContent']) : 'flex-start';
$alignItems = isset($block_attributes['alignItems']) ? esc_attr($block_attributes['alignItems']) : 'stretch';
$alignContent = isset($block_attributes['alignContent']) ? esc_attr($block_attributes['alignContent']) : 'stretch';
$gridTemplateColumns = isset($block_attributes['gridTemplateColumns']) ? esc_attr($block_attributes['gridTemplateColumns']) : 'repeat(3, 1fr)';
$gridTemplateRows = isset($block_attributes['gridTemplateRows']) ? esc_attr($block_attributes['gridTemplateRows']) : 'auto';
$gridGap = isset($block_attributes['gridGap']) ? esc_attr($block_attributes['gridGap']) : '10px';
$equalHeight = isset($block_attributes['equalHeight']) ? (bool)$block_attributes['equalHeight'] : false;

$css_content = "
.wp-block-frontis-blocks-container.{$blockId} {
    display: {$layoutType};
    " . ($containerWidth === 'full-width' ? 'width: 100%;' : '') . "
    " . ($containerWidth === 'content-width' ? "max-width: {$contentBoxWidth}px;" : '') . "
    min-height: {$minimumHeight}px;
    overflow: {$overflow};
    " . ($backgroundGradient ? "background: {$backgroundGradient};" : "background-color: {$backgroundColor};") . "
    color: {$textColor};
    padding-top: {$paddingTop}px;
    padding-right: {$paddingRight}px;
    padding-bottom: {$paddingBottom}px;
    padding-left: {$paddingLeft}px;
    margin-top: {$marginTop}px;
    margin-right: {$marginRight}px;
    margin-bottom: {$marginBottom}px;
    margin-left: {$marginLeft}px;
}

.wp-block-frontis-blocks-container.{$blockId}.layout-flex {
    flex-direction: {$flexDirection};
    flex-wrap: {$flexWrap};
    justify-content: {$justifyContent};
    align-items: {$alignItems};
    align-content: {$alignContent};
}

.wp-block-frontis-blocks-container.{$blockId}.layout-grid {
    grid-template-columns: {$gridTemplateColumns};
    grid-template-rows: {$gridTemplateRows};
    grid-gap: {$gridGap};
}

" . ($equalHeight ? "
.wp-block-frontis-blocks-container.{$blockId} > * {
    height: 100%;
}
" : '') . "
";

EnqueueBlocksCss::enqueue_block_asset($css_content, $block['slug'], $blockId);
