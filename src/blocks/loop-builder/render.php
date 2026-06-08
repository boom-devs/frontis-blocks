<?php

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Pro Security Check
 */
if (!defined('FB_IS_PRO_ACTIVE') || !FB_IS_PRO_ACTIVE) {
	return;
}

if (!apply_filters('frontisblocks_loop_builder_available', false)) {
	return;
}

/**
 * Do not override in editor
 */
if (is_admin()) {
	return;
}

// Map the WP_Block object to a parsed block array for compatibility
$block_arr = isset($block) && is_object($block) ? $block->parsed_block : [];

/**
 * Attributes
 */
$attributes = isset($block_arr['attrs']) ? $block_arr['attrs'] : (isset($attributes) ? $attributes : []);
			$blockId = isset($attributes['blockID']) ? $attributes['blockID'] : (isset($attributes['blockId']) ? $attributes['blockId'] : '');
			$align_class = isset($attributes['align']) ? 'align' . $attributes['align'] : 'alignwide';

			$query_args = (isset($attributes['query']) && is_array($attributes['query'])) ? $attributes['query'] : [];

			$selectedAuthorSwitcher = isset($query_args['selectedAuthorSwitcher']) ? $query_args['selectedAuthorSwitcher'] : '';
			$selectedAuthor = isset($query_args['selectedAuthor']) ? $query_args['selectedAuthor'] : [];
			$deSelectedAuthor = isset($query_args['deSelectedAuthor']) ? $query_args['deSelectedAuthor'] : [];

			$selectedCatSwitcher = isset($query_args['selectedCatSwitcher']) ? $query_args['selectedCatSwitcher'] : '';
			$selectedCat = isset($query_args['selectedCat']) ? $query_args['selectedCat'] : [];
			$deSelectedCat = isset($query_args['deSelectedCat']) ? $query_args['deSelectedCat'] : [];

			$selectedTagSwitcher = isset($query_args['selectedTagSwitcher']) ? $query_args['selectedTagSwitcher'] : '';
			$selectedTag = isset($query_args['selectedTag']) ? $query_args['selectedTag'] : [];
			$deSelectedTag = isset($query_args['deSelectedTag']) ? $query_args['deSelectedTag'] : [];

			/**
			 * Offset from attributes
			 */
			$postOffset = isset($attributes['postOffset']) ? intval($attributes['postOffset']) : 0;
			$excerptWordLimitAttr = isset($attributes['excerptWordLimit']) ? $attributes['excerptWordLimit'] : [];
			if ( is_array( $excerptWordLimitAttr ) ) {
				$excerptWordLimit = isset($excerptWordLimitAttr['Desktop']) ? intval($excerptWordLimitAttr['Desktop']) : 20;
			} else {
				$excerptWordLimit = intval( $excerptWordLimitAttr ) ?: 20;
			}
			$excerptMoreText = isset($attributes['excerptMoreText']) ? $attributes['excerptMoreText'] : '...';

			/**
			 * Default query args
			 */
			$default_query_args = [
				'post_type' => isset($query_args['postType']) ? $query_args['postType'] : 'post',
				'posts_per_page' => isset($query_args['perPage']) ? intval($query_args['perPage']) : 6,
				'order' => isset($query_args['order']) ? $query_args['order'] : 'desc',
				'orderby' => isset($query_args['orderBy']) ? $query_args['orderBy'] : 'date',
				'offset' => $postOffset,
				'post_status' => 'publish',
			];

			/**
			 * Sticky posts
			 */
			$sticky = isset($query_args['sticky']) ? $query_args['sticky'] : '';
			if (empty($sticky) || $sticky === 'ignore') {
				$default_query_args['ignore_sticky_posts'] = true;
			} elseif ($sticky === 'exclude') {
				$default_query_args['ignore_sticky_posts'] = true;
				$sticky_posts = get_option('sticky_posts');
				if (is_array($sticky_posts) && !empty($sticky_posts)) {
					$default_query_args['post__not_in'] = isset($default_query_args['post__not_in'])
						? array_merge($default_query_args['post__not_in'], array_map('intval', $sticky_posts))
						: array_map('intval', $sticky_posts);
				}
			} elseif ($sticky === 'only') {
				$default_query_args['ignore_sticky_posts'] = true;
				$sticky_posts = get_option('sticky_posts');
				$default_query_args['post__in'] = is_array($sticky_posts) && !empty($sticky_posts) ? array_map('intval', $sticky_posts) : [0];
			}

			/**
			 * Author filter
			 */
			if ($selectedAuthorSwitcher === 'include' && is_array($selectedAuthor) && $selectedAuthor) {
				$default_query_args['author__in'] = array_map('intval', $selectedAuthor);
			}
			if ($selectedAuthorSwitcher === 'exclude' && is_array($deSelectedAuthor) && $deSelectedAuthor) {
				$default_query_args['author__not_in'] = array_map('intval', $deSelectedAuthor);
			}

			/**
			 * Category filter
			 */
			if ($selectedCatSwitcher === 'include' && is_array($selectedCat) && $selectedCat) {
				$default_query_args['category__in'] = array_map('intval', $selectedCat);
			}
			if ($selectedCatSwitcher === 'exclude' && is_array($deSelectedCat) && $deSelectedCat) {
				$default_query_args['category__not_in'] = array_map('intval', $deSelectedCat);
			}

			/**
			 * Tag filter
			 */
			if ($selectedTagSwitcher === 'include' && is_array($selectedTag) && $selectedTag) {
				$default_query_args['tag__in'] = array_map('intval', $selectedTag);
			}
			if ($selectedTagSwitcher === 'exclude' && is_array($deSelectedTag) && $deSelectedTag) {
				$default_query_args['tag__not_in'] = array_map('intval', $deSelectedTag);
			}

			/**
			 * Inner blocks (layout + pagination)
			 */
			$inner_blocks = isset($block_arr['innerBlocks']) ? $block_arr['innerBlocks'] : [];

			$item_block = null;
			foreach ($inner_blocks as $ib) {
				if (($ib['blockName'] ?? '') === 'frontis-blocks/loop-builder-item') {
					$item_block = $ib;
					break;
				}
			}

			$item_attrs = $item_block['attrs'] ?? [];
			$inner_block_id = isset($item_attrs['blockID']) ? $item_attrs['blockID'] : (isset($item_attrs['blockId']) ? $item_attrs['blockId'] : '');
			$postSwitcher = $item_attrs['postSwitcher'] ?? 'grid';
			$loop_builder_item_class = $item_attrs['loopBuilderItemClass'] ?? '';
			$layout_class = ($postSwitcher === 'list') ? 'list-layout' : 'grid-layout';

			/**
			 * Find pagination block
			 */
			$pagination_block = null;
			foreach ($inner_blocks as $ib) {
				if (($ib['blockName'] ?? '') === 'frontis-blocks/query-pagination') {
					$pagination_block = $ib;
					break;
				}
			}

			/**
			 * Pagination attrs + children
			 */
			$pagination_attrs = $pagination_block['attrs'] ?? [];
			$has_prev = $has_nums = $has_next = false;
			$pagination_children = $pagination_block['innerBlocks'] ?? [];
			foreach ($pagination_children as $child) {
				$bn = $child['blockName'] ?? '';
				if ($bn === 'frontis-blocks/query-pagination-previous') {
					$has_prev = true;
				}
				if ($bn === 'frontis-blocks/query-pagination-numbers') {
					$has_nums = true;
				}
				if ($bn === 'frontis-blocks/query-pagination-next') {
					$has_next = true;
				}
			}

			/**
			 * Per-block Pagination
			 */
			$per_page = (int) ($default_query_args['posts_per_page'] ?? 6);
			$postOffset = max(0, (int) $postOffset);

			/**
			 * Unique query param for this block
			 */
			$page_param = 'fb_paged_' . sanitize_key($blockId ?: 'loop');
			$current_page = isset($_GET[$page_param]) ? max(1, (int) $_GET[$page_param]) : 1;

			/**
			 * Offset + paged
			 */
			$calc_offset = $postOffset + (($current_page - 1) * $per_page);
			$default_query_args['offset'] = $calc_offset;
			$default_query_args['posts_per_page'] = $per_page;
			$default_query_args['paged'] = $current_page;

			/**
			 * Run the query
			 */
			$query = new WP_Query($default_query_args);

			$paginationPrevNextType = $pagination_attrs['paginationPrevNextType'] ?? 'icon';
			$paginationPrevTxt = $pagination_attrs['paginationPrevTxt'] ?? 'Prev';
			$paginationNextTxt = $pagination_attrs['paginationNextTxt'] ?? 'Next';
			$paginationPrevFrontendIcon = $pagination_attrs['paginationPrevFrontendIcon'] ?? '';
			$paginationNextFrontendIcon = $pagination_attrs['paginationNextFrontendIcon'] ?? '';

			/**
			 * Start output buffer
			 */
			ob_start();
			?>

			<div class="<?php echo esc_attr(trim("{$blockId} wp-block-frontis-blocks-loop-builder fb-loop-builder fb-query-content-container {$align_class}")); ?>"
				data-fb-block-id="<?php echo esc_attr($blockId); ?>">
				<div
					class="<?php echo esc_attr(trim("{$inner_block_id} wp-block-frontis-blocks-loop-builder-item fb-loop-builder-item-main-container {$layout_class}")); ?>">
					<?php
					if ($query->have_posts()):
						while ($query->have_posts()):
							$query->the_post();
							$post_id = get_the_ID();

							$temp_post = get_post( $post_id );
							$original_excerpt = $temp_post ? $temp_post->post_excerpt : '';
							$excerpt_overridden = false;
							if ( $temp_post && empty( $original_excerpt ) ) {
								$temp_post->post_excerpt = wp_trim_words( get_the_excerpt( $temp_post ), $excerptWordLimit, $excerptMoreText );
								wp_cache_set( $post_id, $temp_post, 'posts' );
								global $post;
								if ( $post ) {
									$post->post_excerpt = $temp_post->post_excerpt;
								}
								$excerpt_overridden = true;
							}

							$post_classes = implode(' ', get_post_class('wp-block-post', $post_id));
							$item_classes = trim("{$post_classes} fb-loop-builder-item-block-context-container {$loop_builder_item_class} fb-loop-builder-item-inner-container");
							?>
							<div class="<?php echo esc_attr($item_classes); ?>">
								<?php
								if ($item_block) {
									foreach (($item_block['innerBlocks'] ?? []) as $item_inner_block) {
										$item_inner_block['context'] = ['postId' => $post_id];
										echo render_block($item_inner_block); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									}
								}
								?>
							</div>
							<?php
							if ( $excerpt_overridden ) {
								clean_post_cache( $post_id );
							}
						endwhile;
						wp_reset_postdata();
					else:
						?>
						<p><?php esc_html_e('No posts found.', 'frontis-blocks'); ?></p>
						<?php
					endif;
					?>
				</div>

				<?php
				if ($pagination_block):

					$total_posts_all = (int) $query->found_posts;
					$effective_total = max(0, $total_posts_all - (int) $postOffset);
					$total_pages = $per_page > 0 ? (int) ceil($effective_total / $per_page) : 1;

					$base_url = remove_query_arg($page_param);
					$base = add_query_arg($page_param, '%#%', $base_url);

					$number_links = [];
					if ($has_nums && $total_pages > 1) {
						$number_links = paginate_links([
							'base' => $base,
							'format' => false,
							'current' => $current_page,
							'total' => max(1, $total_pages),
							'mid_size' => 2,
							'end_size' => 1,
							'prev_next' => false,
							'type' => 'array',
						]) ?: [];
					}

					$prev_url = ($has_prev && $current_page > 1)
						? add_query_arg($page_param, $current_page - 1, $base_url)
						: '';

					$next_url = ($has_next && $current_page < $total_pages)
						? add_query_arg($page_param, $current_page + 1, $base_url)
						: '';
					?>

					<div class="fb-query-pagination-wrapper <?php echo esc_attr($pagination_attrs['blockId'] ?? ''); ?>">
						<nav class="fb-query-pagination" aria-label="Pagination"
							data-current-page="<?php echo esc_attr($current_page); ?>"
							data-total-pages="<?php echo esc_attr($total_pages); ?>"
							data-page-param="<?php echo esc_attr($page_param); ?>" data-base-url="<?php echo esc_url($base_url); ?>">
							<?php if ($has_prev): ?>
								<?php if ($prev_url): ?>
									<a class="fb-page-prev" href="<?php echo esc_url($prev_url); ?>" rel="prev"
										aria-label="<?php esc_attr_e('Previous page', 'frontis-blocks'); ?>">
										<?php if ($paginationPrevNextType === 'icon'): ?>
											<span class="fb-pagination-icon"
												aria-hidden="true"><?php echo $paginationPrevFrontendIcon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
										<?php else: ?>
											<span class="fb-pagination-text"><?php echo esc_html($paginationPrevTxt); ?></span>
										<?php endif; ?>
									</a>
								<?php else: ?>
									<span class="fb-page-prev is-disabled" aria-disabled="true">
										<?php if ($paginationPrevNextType === 'icon'): ?>
											<span class="fb-pagination-icon"
												aria-hidden="true"><?php echo $paginationPrevFrontendIcon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
										<?php else: ?>
											<span class="fb-pagination-text"><?php echo esc_html($paginationPrevTxt); ?></span>
										<?php endif; ?>
									</span>
								<?php endif; ?>
							<?php endif; ?>

							<?php if ($has_nums && !empty($number_links)): ?>
								<div class="fb-page-numbers">
									<?php echo implode('', $number_links); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
								</div>
							<?php endif; ?>

							<?php if ($has_next): ?>
								<?php if ($next_url): ?>
									<a class="fb-page-next" href="<?php echo esc_url($next_url); ?>" rel="next"
										aria-label="<?php esc_attr_e('Next page', 'frontis-blocks'); ?>">
										<?php if ($paginationPrevNextType === 'icon'): ?>
											<span class="fb-pagination-icon"
												aria-hidden="true"><?php echo $paginationNextFrontendIcon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
										<?php else: ?>
											<span class="fb-pagination-text"><?php echo esc_html($paginationNextTxt); ?></span>
										<?php endif; ?>
									</a>
								<?php else: ?>
									<span class="fb-page-next is-disabled" aria-disabled="true">
										<?php if ($paginationPrevNextType === 'icon'): ?>
											<span class="fb-pagination-icon"
												aria-hidden="true"><?php echo $paginationNextFrontendIcon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
										<?php else: ?>
											<span class="fb-pagination-text"><?php echo esc_html($paginationNextTxt); ?></span>
										<?php endif; ?>
									</span>
								<?php endif; ?>
							<?php endif; ?>
						</nav>
					</div>

				<?php endif; ?>
			</div>
			<?php

			echo ob_get_clean();
