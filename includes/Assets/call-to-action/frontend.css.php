<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

$block_attributes = $block['attrs'];

$block_id = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';

$boxPadding = isset( $block_attributes['BoxPadding'] ) ? sanitize_text_field( $block_attributes['BoxPadding'] ) : '20px';
$boxMargin = isset( $block_attributes['BoxMargin'] ) ? sanitize_text_field( $block_attributes['BoxMargin'] ) : '0';
$infoBoxBorder = isset( $block_attributes['InfoBoxBorder'] ) ? sanitize_text_field( $block_attributes['InfoBoxBorder'] ) : 'none';
$boxBorderWidth = isset( $block_attributes['BoxBorderWidth'] ) ? sanitize_text_field( $block_attributes['BoxBorderWidth'] ) : '1px';
$boxBorderRadiusWidth = isset( $block_attributes['BoxBorderRadiusWidth'] ) ? sanitize_text_field( $block_attributes['BoxBorderRadiusWidth'] ) : '4px';
$infoBoxBorderColor = isset( $block_attributes['InfoBoxBorderColor'] ) ? sanitize_text_field( $block_attributes['InfoBoxBorderColor'] ) : '';
$boxBgColor = isset( $block_attributes['BoxBgColor'] ) ? sanitize_text_field( $block_attributes['BoxBgColor'] ) : '#000';
var_dump($boxBgColor);
$contentAlignment = isset( $block_attributes['ContentAlignment'] ) ? sanitize_text_field( $block_attributes['ContentAlignment'] ) : 'left';



$css_content = "
	.$block_id.fb-cta-content-wrapper {
    padding: " . ( ! empty( $boxPadding ) ? $boxPadding : '20px' ) . ";
    margin: " . ( ! empty( $boxMargin ) ? $boxMargin : '0' ) . ";
    border: " . ( ! empty( $infoBoxBorder ) ? $infoBoxBorder : 'none' ) . ";
    border-width: " . ( ! empty( $boxBorderWidth ) ? $boxBorderWidth : '1px' ) . ";
    border-radius: " . ( ! empty( $boxBorderRadiusWidth ) ? $boxBorderRadiusWidth : '4px' ) . ";
    " . ( ! empty( $infoBoxBorderColor ) ? "border-color: $infoBoxBorderColor;" : '' ) . "
    " . ( ! empty( $boxBgColor ) ? "background-color: $boxBgColor;" : '' ) . "
    text-align: " . ( ! empty( $contentAlignment ) ? $contentAlignment : 'left' ) . ";
}
";


EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_id);
