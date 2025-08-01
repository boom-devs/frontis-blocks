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

        // Pagination block সংগ্রহ
        $pagination_block = null;
        foreach ( $inner_blocks as $ib ) {
            if ( isset($ib['blockName']) && $ib['blockName'] === 'frontis-blocks/query-pagination' ) {
                $pagination_block = $ib;
                break;
            }
        }

		// Pagination attributes
		$pagination_attrs  = $pagination_block['attrs'] ?? [];
		$layout            = $pagination_attrs['layout'] ?? [];
		$justify_content   = $layout['justifyContent'] ?? 'flex-start';

		$has_prev = $has_nums = $has_next = false;
		$pagination_children = $pagination_block['innerBlocks'] ?? [];
		foreach ( $pagination_children as $child ) {
			$bn = $child['blockName'] ?? '';
			if ( $bn === 'frontis-blocks/query-pagination-previous' ) $has_prev = true;
			if ( $bn === 'frontis-blocks/query-pagination-numbers' )  $has_nums = true;
			if ( $bn === 'frontis-blocks/query-pagination-next' )     $has_next = true;
		}


		// Wrapper শুরু
		$attr_json = htmlspecialchars(json_encode($attributes), ENT_QUOTES, 'UTF-8');
		$output = '<div class="' . esc_attr($blockId) . ' wp-block-frontis-blocks-loop-builder fb-loop-builder ' . esc_attr($align_class) . '" data-attrs="' . $attr_json . '">';
		$output .= '<div class="'. esc_attr($inner_block_id) .' fb-loop-builder-wrapper-main-container '. esc_attr($postSwitcher) .'-layout">';


		// Pagination হিসাব
		$paged     = max( 1, get_query_var('paged') ? (int) get_query_var('paged') : ( (int) get_query_var('page') ) );
		$per_page  = (int) ( $default_query_args['posts_per_page'] ?? 6 );
		$calc_offset = max(0, (int) $postOffset ) + ( ($paged - 1) * $per_page );

		$default_query_args['offset']         = $calc_offset;
		$default_query_args['posts_per_page'] = $per_page;
		

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

		// ===== Pagination render =====
		if ( $pagination_block ) {
			$total_posts_all = (int) $query->found_posts; // offset ছাড়া মোট
			$effective_total = max( 0, $total_posts_all - (int) $postOffset );
			$total_pages     = $per_page > 0 ? (int) ceil( $effective_total / $per_page ) : 1;

			// numbers
			$number_links = [];
			if ( $has_nums && $total_pages > 1 ) {
				$number_links = paginate_links( [
					'base'      => get_pagenum_link(1) . '%_%',
					'format'    => ( get_option('permalink_structure') ? 'page/%#%/' : '&paged=%#%' ),
					'current'   => $paged,
					'total'     => max(1, $total_pages),
					'mid_size'  => 2,
					'end_size'  => 1,
					'prev_next' => false,
					'type'      => 'array',
				] ) ?: [];
			}

			$prev_url = ( $has_prev && $paged > 1 ) ? get_pagenum_link( $paged - 1 ) : '';
			$next_url = ( $has_next && $paged < $total_pages ) ? get_pagenum_link( $paged + 1 ) : '';

			// justify-content ক্লাস/স্টাইল (আপনার CSS অনুযায়ী এডজাস্ট করুন)
			$jc_map = [
				'center'       => 'justify-center',
				'flex-end'     => 'justify-end',
				'space-between'=> 'justify-between',
				'space-around' => 'justify-around',
				'space-evenly' => 'justify-evenly',
				'flex-start'   => 'justify-start',
			];
			$jc_class = $jc_map[ $justify_content ] ?? 'justify-start';

			$output .= '<nav class="fb-query-pagination ' . esc_attr( $jc_class ) . '" aria-label="Pagination">';

			if ( $has_prev ) {
				$output .= '<span class="fb-page-prev'. ( $prev_url ? '' : ' is-disabled' ) .'">';
				if ( $prev_url ) {
					$output .= '<a href="' . esc_url( $prev_url ) . '" rel="prev" aria-label="Previous page">&laquo; Previous</a>';
				} else {
					$output .= '<span aria-disabled="true">&laquo; Previous</span>';
				}
				$output .= '</span>';
			}

			if ( $has_nums && !empty($number_links) ) {
				$output .= '<span class="fb-page-numbers">';
				// paginate_links() ইতোমধ্যে <a> / <span class="current"> বানিয়ে দেয়
				$output .= implode( '', $number_links );
				$output .= '</span>';
			}

			if ( $has_next ) {
				$output .= '<span class="fb-page-next'. ( $next_url ? '' : ' is-disabled' ) .'">';
				if ( $next_url ) {
					$output .= '<a href="' . esc_url( $next_url ) . '" rel="next" aria-label="Next page">Next &raquo;</a>';
				} else {
					$output .= '<span aria-disabled="true">Next &raquo;</span>';
				}
				$output .= '</span>';
			}

			$output .= '</nav>';
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

add_action('wp_ajax_nopriv_frontis_loop_pagination', 'frontis_loop_pagination');
add_action('wp_ajax_frontis_loop_pagination', 'frontis_loop_pagination');

function frontis_loop_pagination() {
    // ✅ FIXED: Specify _ajax_nonce here
    if ( ! check_ajax_referer('loop_builder_nonce', '_ajax_nonce') ) {
        wp_send_json_error(['message' => '❌ Nonce verification failed']);
        wp_die();
    }

    $paged = isset($_POST['paged']) ? intval($_POST['paged']) : 1;
    $block_attrs = isset($_POST['blockAttrs']) ? json_decode(stripslashes($_POST['blockAttrs']), true) : [];

    $block = [
        'blockName' => 'frontis-blocks/loop-builder',
        'attrs'     => $block_attrs,
    ];

    $response = render_loop_builder('', $block);
    wp_send_json_success(['html' => $response]);
}



}
