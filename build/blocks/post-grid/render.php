<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php

	 	var_dump($attributes);
	 esc_html_e( 'Post Grid – hello from a dynamic block!', 'post-grid' ); ?>
</p>
