<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// function testfn() {
// 	echo "Hello world";
// }

// testfn();
?>

<div data-attributes='<?php echo json_encode($attributes); ?>'>
	<span id="icon_<?php echo $attributes['blockId']; ?>">
		<h1>Hello</h1>
	</span>
</div>
