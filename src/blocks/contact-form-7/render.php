<?php
$form_id = isset( $attributes['formId'] ) ? esc_attr( $attributes['formId'] ) : '';
$block_id = isset( $attributes['blockID'] ) ? esc_attr( $attributes['blockID'] ) : '';
$show_labels = isset( $attributes['showLabels'] ) ? $attributes['showLabels'] : true;
$show_placeholder = isset( $attributes['showPlaceholder'] ) ? $attributes['showPlaceholder'] : true;
$show_error_message = isset( $attributes['showErrorMessage'] ) ? $attributes['showErrorMessage'] : true;

$wrapper_classes = [
	'fb-contact-form-wrapper',
	$block_id,
	!$show_labels ? 'fb-contact-form-hide-label' : '',
	!$show_placeholder ? 'fb-contact-form-hide-placeholder' : '',
	!$show_error_message ? 'fb-contact-form-hide-error-message' : '',
];

$form_wrapper_classes = [
	'fb-contact-form',
];

$shortcode = sprintf( '[contact-form-7 id="%s"]', $form_id );

?>
<div class="<?php echo esc_attr( implode( ' ', $wrapper_classes ) ); ?>">
	<div class="<?php echo esc_attr( implode( ' ', $form_wrapper_classes ) ); ?>">
		<?php echo do_shortcode( shortcode_unautop( wp_kses_post( $shortcode ) ) ); ?>
	</div>
</div>
