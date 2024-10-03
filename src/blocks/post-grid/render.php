<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<script src='https://cdn.jsdelivr.net/npm/react-player/dist/ReactPlayer.standalone.js'></script>

<p <?php echo get_block_wrapper_attributes(); ?>>
	<div id='container'></div>
	<button onClick='javascript: playPlayer()'>Play</button>
	<button onClick='javascript: pausePlayer()'>Pause</button>
</p>

<script>
const url = 'https://www.youtube.com/watch?v=d46Azg3Pm4c'
const container = document.getElementById('container')

window.playPlayer = function () {
  renderReactPlayer(container, { url, playing: true })
}

window.pausePlayer = function () {
  renderReactPlayer(container, { url, playing: false })
}

playPlayer()
</script>
