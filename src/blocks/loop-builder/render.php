<?php
/**
 * Custom rendering for the frontis-blocks/loop-builder block using the render_block filter.
 *
 * @param string $block_content The default block content.
 * @param array  $block The block data, including attributes and inner blocks.
 * @return string The rendered block content.
 */

if (!function_exists('render_loop_builder')) {
function render_loop_builder($block_content, $block) {
	// Check if the block is frontis-blocks/loop-builder
	if (isset($block['blockName']) && $block['blockName'] === 'frontis-blocks/loop-builder') {
		// Skip custom rendering in the admin (block editor)
		if (is_admin()) {
			return $block_content; // Return default content for the editor
		}

		// Get block attributes
		$attributes = isset($block['attrs']) ? $block['attrs'] : [];
		$blockId = isset($attributes['blockId']) ? $attributes['blockId'] : '';
		$align_class = isset($attributes['align']) ? 'align' . $attributes['align'] : '';

		$query_args = isset($attributes['query']) && is_array($attributes['query']) ? $attributes['query'] : [];

		$selectedAuthorSwitcher = isset($query_args['selectedAuthorSwitcher']) ? $query_args['selectedAuthorSwitcher'] : '';
		$selectedAuthor         = isset($query_args['selectedAuthor']) ? $query_args['selectedAuthor'] : [];
		$deSelectedAuthor       = isset($query_args['deSelectedAuthor']) ? $query_args['deSelectedAuthor'] : [];
		
		$selectedCatSwitcher    = isset($query_args['selectedCatSwitcher']) ? $query_args['selectedCatSwitcher'] : '';
		$selectedCat            = isset($query_args['selectedCat']) ? $query_args['selectedCat'] : [];
		$deSelectedCat          = isset($query_args['deSelectedCat']) ? $query_args['deSelectedCat'] : [];
		
		$selectedTagSwitcher    = isset($query_args['selectedTagSwitcher']) ? $query_args['selectedTagSwitcher'] : '';
		$selectedTag            = isset($query_args['selectedTag']) ? $query_args['selectedTag'] : [];
		$deSelectedTag          = isset($query_args['deSelectedTag']) ? $query_args['deSelectedTag'] : [];

		// Offset support from block attributes
		$postOffset = isset($attributes['postOffset']) ? intval($attributes['postOffset']) : 0;

		// Initialize the output for the frontend
		$output = '<div class="' . esc_attr($blockId) . ' wp-block-frontis-blocks-loop-builder fb-loop-builder ' . esc_attr($align_class) . '">';

		// Default query arguments
		$default_query_args = [
			'post_type'      => isset($query_args['postType']) ? $query_args['postType'] : 'post',
			'posts_per_page' => isset($query_args['perPage']) ? intval($query_args['perPage']) : 6,
			'order'          => isset($query_args['order']) ? $query_args['order'] : 'desc',
			'orderby'        => isset($query_args['orderBy']) ? $query_args['orderBy'] : 'date',
			'offset'         => $postOffset,
			'post_status'    => 'publish',
		];

		// Author filter
		if ($selectedAuthorSwitcher === 'include' && is_array($selectedAuthor) && count($selectedAuthor)) {
			$default_query_args['author__in'] = array_map('intval', $selectedAuthor);
		}
		if ($selectedAuthorSwitcher === 'exclude' && is_array($deSelectedAuthor) && count($deSelectedAuthor)) {
			$default_query_args['author__not_in'] = array_map('intval', $deSelectedAuthor);
		}

		// Category filter
		if ($selectedCatSwitcher === 'include' && is_array($selectedCat) && count($selectedCat)) {
			$default_query_args['category__in'] = array_map('intval', $selectedCat);
		}
		if ($selectedCatSwitcher === 'exclude' && is_array($deSelectedCat) && count($deSelectedCat)) {
			$default_query_args['category__not_in'] = array_map('intval', $deSelectedCat);
		}

		// Tag filter
		if ($selectedTagSwitcher === 'include' && is_array($selectedTag) && count($selectedTag)) {
			$default_query_args['tag__in'] = array_map('intval', $selectedTag);
		}
		if ($selectedTagSwitcher === 'exclude' && is_array($deSelectedTag) && count($deSelectedTag)) {
			$default_query_args['tag__not_in'] = array_map('intval', $deSelectedTag);
		}


		// Get the inner blocks of the loop-builder
		$inner_blocks = isset($block['innerBlocks']) ? $block['innerBlocks'] : [];

		$inner_block_attributes = isset($inner_blocks[0]['attrs']) ? $inner_blocks[0]['attrs'] : [];

		$inner_block_id = isset($inner_block_attributes['blockId']) ? $inner_block_attributes['blockId'] : '';
		$postSwitcher = isset($inner_block_attributes['postSwitcher']) ? $inner_block_attributes['postSwitcher'] : 'grid';

		$output .= '<div class="'. esc_attr($inner_block_id) .' fb-loop-builder-wrapper-main-container '. esc_attr($postSwitcher) .'-layout">';

		// Run the query
		$query = new WP_Query($default_query_args);

		// Check if there are posts
		if ($query->have_posts()) {
			while ($query->have_posts()) {
				$query->the_post();

				// Loop through inner blocks to find loop-builder-wrapper
				foreach ($inner_blocks as $inner_block) {
					if (isset($inner_block['blockName']) && $inner_block['blockName'] === 'frontis-blocks/loop-builder-wrapper') {
						// Get the inner blocks of loop-builder-wrapper
						$wrapper_inner_blocks = isset($inner_block['innerBlocks']) ? $inner_block['innerBlocks'] : [];

						// Render each inner block (e.g., container and its children)
						foreach ($wrapper_inner_blocks as $wrapper_inner_block) {
							// Set the post ID in the block context for dynamic blocks
							$wrapper_inner_block['context'] = ['postId' => get_the_ID()];
							$output .= render_block($wrapper_inner_block);
						}
					}
				}
			}

			// Reset post data
			wp_reset_postdata();
		} else {
			// Fallback content if no posts are found
			$output .= '<p>No posts found.</p>';
		}

		// Close the wrapper
		$output .= '</div>';
		$output .= '</div>';

		// Return the custom output for the frontend
		return $output;
	}

	// Return the default block content for other blocks
	return $block_content;
}

add_filter('render_block', 'render_loop_builder', 10, 2);
}
