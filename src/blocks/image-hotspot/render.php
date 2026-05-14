<!-- Will be converted to static save.js tomorrow -->

<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Frontend render for Image Hotspot block
 */

// Get attributes
$image_url = $attributes['imageUrl'] ?? '';
$image_alt = $attributes['imageAlt'] ?? '';
$image_size = $attributes['imageSize'] ?? 'cover';
$hotspots = $attributes['hotspots'] ?? [];
$block_id = $attributes['blockId'] ?? '';

// Return if no image
if ( empty( $image_url ) ) {
    return;
}

// Get wrapper attributes
$wrapper_attributes = get_block_wrapper_attributes( [
    'class' => 'wp-block-frontis-blocks-image-hotspot',
    'data-block-id' => esc_attr( $block_id ),
] );
?>

<div <?php echo $wrapper_attributes; ?>>
    <div class="fb-image-hotspot-wrapper">
        <div class="fb-hotspot-image-container" style="position: relative; display: inline-block; width: 100%;">
            <img 
                src="<?php echo esc_url( $image_url ); ?>" 
                alt="<?php echo esc_attr( $image_alt ?: __( 'Hotspot Image', 'frontis-blocks' ) ); ?>"
                style="max-width: 100%; height: auto; object-fit: <?php echo esc_attr( $image_size ); ?>; display: block;"
                class="fb-hotspot-base-image"
            />
            
            <?php if ( ! empty( $hotspots ) ) : ?>
                <?php foreach ( $hotspots as $hotspot ) : 
                    $hotspot_id = $hotspot['id'] ?? '';
                    $x = $hotspot['x'] ?? 50;
                    $y = $hotspot['y'] ?? 50;
                    $title = $hotspot['title'] ?? '';
                    $description = $hotspot['description'] ?? '';
                    $bg_color = $hotspot['backgroundColor'] ?? '#ff0000';
                    $icon = $hotspot['icon'] ?? 'plus';
                    $link = $hotspot['link'] ?? '';
                    $open_in_new_tab = $hotspot['openInNewTab'] ?? false;
                    $hide_desktop = $hotspot['hideDesktop'] ?? false;
                    $hide_tablet = $hotspot['hideTablet'] ?? false;
                    $hide_mobile = $hotspot['hideMobile'] ?? false;
                    
                    // Responsive visibility classes
                    $visibility_class = '';
                    if ( $hide_desktop ) $visibility_class .= ' hide-desktop ';
                    if ( $hide_tablet ) $visibility_class .= ' hide-tablet ';
                    if ( $hide_mobile ) $visibility_class .= ' hide-mobile ';
                    ?>
                    
                    <div 
                        class="fb-hotspot-marker <?php echo esc_attr( $visibility_class ); ?>"
                        data-hotspot-id="<?php echo esc_attr( $hotspot_id ); ?>"
                        style="
                            position: absolute;
                            left: <?php echo esc_attr( $x ); ?>%;
                            top: <?php echo esc_attr( $y ); ?>%;
                            transform: translate(-50%, -50%);
                            z-index: 10;
                        "
                    >
                        <?php if ( ! empty( $link ) ) : ?>
                            <a 
                                href="<?php echo esc_url( $link ); ?>" 
                                <?php echo $open_in_new_tab ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
                                class="fb-hotspot-link"
                            >
                        <?php endif; ?>
                        
                        <div 
                            class="fb-hotspot-trigger"
                            style="
                                width: 32px;
                                height: 32px;
                                background: <?php echo esc_attr( $bg_color ); ?>;
                                border-radius: 50%;
                                border: 2px solid #fff;
                                cursor: pointer;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                                transition: transform 0.2s ease;
                            "
                            onmouseenter="this.style.transform='scale(1.1)'"
                            onmouseleave="this.style.transform='scale(1)'"
                        >
                            <span class="fb-hotspot-icon"><?php echo esc_html( $icon ); ?></span>
                        </div>
                        
                        <?php if ( ! empty( $link ) ) : ?>
                            </a>
                        <?php endif; ?>
                        
                        <!-- Popover content -->
                        <div class="fb-hotspot-popover" style="display: none; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 10px; background: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); padding: 12px; min-width: 200px; z-index: 20;">
                            <?php if ( ! empty( $title ) ) : ?>
                                <h4 class="fb-hotspot-popover-title" style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">
                                    <?php echo esc_html( $title ); ?>
                                </h4>
                            <?php endif; ?>
                            
                            <?php if ( ! empty( $description ) ) : ?>
                                <p class="fb-hotspot-popover-description" style="margin: 0; font-size: 14px; line-height: 1.5; color: #666;">
                                    <?php echo esc_html( $description ); ?>
                                </p>
                            <?php endif; ?>
                        </div>
                    </div>
                    
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</div>

<!-- Add JavaScript for popover functionality -->
<script>
(function() {
    const markers = document.querySelectorAll('.fb-hotspot-marker');
    
    markers.forEach(marker => {
        const trigger = marker.querySelector('.fb-hotspot-trigger');
        const popover = marker.querySelector('.fb-hotspot-popover');
        
        if (trigger && popover) {
            let timeout;
            
            const showPopover = () => {
                clearTimeout(timeout);
                popover.style.display = 'block';
            };
            
            const hidePopover = () => {
                timeout = setTimeout(() => {
                    popover.style.display = 'none';
                }, 200);
            };
            
            trigger.addEventListener('mouseenter', showPopover);
            trigger.addEventListener('mouseleave', hidePopover);
            popover.addEventListener('mouseenter', showPopover);
            popover.addEventListener('mouseleave', hidePopover);
        }
    });
})();
</script>

<style>
/* Responsive visibility */
@media (min-width: 1024px) {
    .fb-hotspot-marker.hide-desktop { display: none; }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .fb-hotspot-marker.hide-tablet { display: none; }
}
@media (max-width: 767px) {
    .fb-hotspot-marker.hide-mobile { display: none; }
}

/* Hotspot animation */
.fb-hotspot-trigger {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.fb-hotspot-trigger:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

/* Popover arrow */
.fb-hotspot-popover::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
}
</style>