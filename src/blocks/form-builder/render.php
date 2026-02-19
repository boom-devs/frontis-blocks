<?php
/**
 * Render File for Form Builder Block
 */

$block_id = isset( $attributes['blockID'] ) ? $attributes['blockID'] : '';
$form_id  = isset( $attributes['formId'] ) ? $attributes['formId'] : '';

// Generate classes
$classes = array(
    'fb-form-builder-main-wrapper',
    'fb-form-builder-main-wrapper-' . $block_id,
    $block_id,
);

if ( isset( $attributes['className'] ) ) {
    $classes[] = $attributes['className'];
}

$class_string = implode( ' ', $classes );

// Render
?>
<div class="<?php echo esc_attr( $class_string ); ?>">
    <div class="fb-form-builder-wrapper">
        <form 
            class="fb-form-builder-form" 
            data-form-id="<?php echo esc_attr( $form_id ); ?>"
            data-block-id="<?php echo esc_attr( $block_id ); ?>"
        >
            <?php echo $content; ?>
            <div class="fb-form-messages">
                <div class="fb-success-message fb-hide"></div>
                <div class="fb-error-message fb-hide"></div>
                <div class="fb-validation-message fb-hide"></div>
            </div>
        </form>
    </div>
</div>
