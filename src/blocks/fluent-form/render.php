<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block attributes
$blockID        = isset( $attributes['blockID'] ) ? sanitize_text_field( $attributes['blockID'] ) : '';
$DeviceType     = isset( $attributes['DeviceType'] ) ? sanitize_text_field( $attributes['DeviceType'] ) : 'Desktop';
$formId         = isset( $attributes['formId'] ) ? sanitize_text_field( $attributes['formId'] ) : '';


$showLabels = isset( $attributes['showLabels'] ) ? (bool) $attributes['showLabels'] : true;
$showPlaceholder = isset( $attributes['showPlaceholder'] ) ? (bool) $attributes['showPlaceholder'] : true;
$showErrorMessage = isset( $attributes['showErrorMessage'] ) ? (bool) $attributes['showErrorMessage'] : true;


$_wrapper_classes = [
    "fb-parent-$blockID"
];


$_form_wrapper_classes = [
    $blockID,
    'fb-fluent-form-wrapper',
    !$showLabels ? 'fb-fluent-form-hide-label' : '',
    !$showPlaceholder ? 'fb-fluent-form-hide-placeholder' : '',
    !$showErrorMessage ? 'fb-fluent-form-hide-error-message' : '',
];

// Remove any empty classes
$_form_wrapper_classes = array_filter($_form_wrapper_classes);

$wrapper_attributes = get_block_wrapper_attributes(
    [
        'class' => $blockID
    ]
);

?>

<style>
    <?php echo ".$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group label:not(.ff-el-form-check-label),
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group .ff-el-input--label,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .ff-el-group .error.text-danger {
        display: none;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
        opacity: 0;
        visibility: hidden;
    }";
    ?>
</style>

<div <?php echo wp_kses_data( $wrapper_attributes ); ?> >
	<div class="<?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?> fb-parent-wrapper">
		<div class="<?php echo esc_attr( implode( ' ', $_form_wrapper_classes ) ); ?>">
			<?php
                $shortcode = sprintf( '[fluentform id="%s"]', esc_attr( $formId ) );
                echo do_shortcode( shortcode_unautop( wp_kses_post( $shortcode ) ) );
            ?>
		</div>
	</div>
</div>