<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block attributes
$blockID = isset( $attributes['blockID'] ) ? sanitize_text_field( $attributes['blockID'] ) : '';

$videoURL = isset( $attributes['videoURL'] ) ? esc_url( $attributes['videoURL'] ) : 'https://www.youtube.com/watch?v=WZdCL4Y5EBY';
$autoPlaySwitcher = isset( $attributes['autoPlaySwitcher'] ) ? boolval( $attributes['autoPlaySwitcher'] ) : false;
$muteSwitcher = isset( $attributes['muteSwitcher'] ) ? boolval( $attributes['muteSwitcher'] ) : false;
$loopSwitcher = isset( $attributes['loopSwitcher'] ) ? boolval( $attributes['loopSwitcher'] ) : false;
$showControlsSwitcher = isset( $attributes['showControlsSwitcher'] ) ? boolval( $attributes['showControlsSwitcher'] ) : false;
$imageOverlaySwitcher = isset( $attributes['imageOverlaySwitcher'] ) ? boolval( $attributes['imageOverlaySwitcher'] ) : false;
$previewImageUrl = isset( $attributes['previewImageUrl'] ) ? esc_url( $attributes['previewImageUrl'] ) : '';
$videoPlayIcon = isset( $attributes['videoPlayIcon'] ) ? sanitize_text_field( $attributes['videoPlayIcon'] ) : 'play';

?>

<script src='https://cdn.jsdelivr.net/npm/react-player/dist/ReactPlayer.standalone.js'></script>

<div <?php echo get_block_wrapper_attributes(); ?>>

	<div class="fb-parent-wrapper">
        <div class="fb-advanced-video-wrapper <?php echo esc_attr($blockID); ?>">
			<div class="fb-player-wrapper">
				<div 
					id="fb-player-option"
					class="fb-player-option"
					data-url="<?php echo esc_attr( $videoURL ); ?>"
					data-autoplay="<?php echo esc_attr( $autoPlaySwitcher ? 'true' : 'false' ); ?>"
					data-muted="<?php echo esc_attr( $muteSwitcher ? 'true' : 'false' ); ?>"
					data-loop="<?php echo esc_attr( $loopSwitcher ? 'true' : 'false' ); ?>"
					data-controls="<?php echo esc_attr( $showControlsSwitcher ? 'true' : 'false' ); ?>"
					data-preview-image="<?php echo esc_attr( $imageOverlaySwitcher ? $previewImageUrl : null ); ?>"
					data-play-icon="<?php echo esc_attr( $videoPlayIcon ); ?>"
				></div>
			</div>
		</div>
	</div>
</div>