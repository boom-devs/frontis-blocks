<!-- Image Hotspot block with Woocommerce support -->

<?php

if (!defined('ABSPATH')) {
    exit;
}
// Get attributes
$image_url = $attributes['imageUrl'] ?? '';
$hotspots = $attributes['hotspots'] ?? [];
$block_id = $attributes['blockId'] ?? '';

if ( empty( $image_url ) ) {
    return;
}
?>

<div <?php echo get_block_wrapper_attributes(); ?> data-block-id="<?php echo esc_attr( $block_id ); ?>">
    <div class="image-hotspot-container">
        <img src="<?php echo esc_url( $image_url ); ?>" alt="Hotspot Image" />
        
        <?php if ( ! empty( $hotspots ) ) : ?>
            <?php foreach ( $hotspots as $hotspot ) : ?>
                <div class="hotspot-marker" style="left: <?php echo esc_attr( $hotspot['x'] ); ?>%; top: <?php echo esc_attr( $hotspot['y'] ); ?>%;">
                    <button class="hotspot-button">
                        <span class="hotspot-title"><?php echo esc_html( $hotspot['title'] ); ?></span>
                    </button>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>