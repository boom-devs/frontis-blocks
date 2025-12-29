<?php
/**
 * Render callback for the Breadcrumb block.
 */

if (!defined('ABSPATH')) {
	exit;
}

// ---------- helpers ----------
if (!function_exists('fb_norm_str')) {
	function fb_norm_str($val, $default = '')
	{
		if (is_array($val)) {
			$val = implode(' ', array_filter(array_map('strval', $val)));
		}

		if ($val === null) {
			return $default;
		}

		return (string) $val;
	}
}

if (!function_exists('fb_breadcrumb_separator_html')) {
	function fb_breadcrumb_separator_html($type, $text, $icon_markup)
	{
		if ($type === 'text') {
			$separator_text = $text !== '' ? $text : '/';

			return sprintf(
				'<span class="fb-breadcrumb-separator text">%s</span>',
				esc_html($separator_text)
			);
		}

		return sprintf(
			'<div class="fb-breadcrumb-separator">%s</div>',
			$icon_markup ?: ''
		);
	}
}

if (!function_exists('fb_breadcrumb_home_prefix')) {
	function fb_breadcrumb_home_prefix($switcher, $show_icon, $icon_markup, $prefix_text)
	{
		if ($switcher === 'icon') {
			if ($show_icon && $icon_markup !== '') {
				return sprintf(
					'<div class="fb-breadcrumb-icon home">%s</div>',
					$icon_markup
				);
			}

			return '';
		}

		if ($switcher === 'text' && $prefix_text !== '') {
			return sprintf(
				'<span class="fb-breadcrumb-text-prefix">%s</span>',
				esc_html($prefix_text)
			);
		}

		return '';
	}
}

if (!function_exists('fb_breadcrumb_item_icon')) {
	function fb_breadcrumb_item_icon($enabled, $icon_markup)
	{
		if (!$enabled || $icon_markup === '') {
			return '';
		}

		return sprintf(
			'<div class="fb-breadcrumb-icon item">%s</div>',
			$icon_markup
		);
	}
}

if (!function_exists('fb_breadcrumb_item_html')) {
	function fb_breadcrumb_item_html($label, $link, $show_icon, $icon_markup, $is_final = false)
	{
		$label = fb_norm_str($label);

		if ($label === '') {
			return '';
		}

		$icon_html = fb_breadcrumb_item_icon($show_icon, $icon_markup);
		$content_html = '';

		if (!$is_final && $link) {
			$content_html = sprintf(
				'<a class="fb-breadcrumb-label fb-breadcrumb-link" href="%s">%s</a>',
				esc_url($link),
				esc_html($label)
			);
		} else {
			$content_html = sprintf(
				'<span class="fb-breadcrumb-label %s">%s</span>',
				$is_final ? 'fb-breadcrumb-text' : 'fb-breadcrumb-link',
				esc_html($label)
			);
		}

		return sprintf(
			'<div class="fb-breadcrumb-item item">%s%s</div>',
			$icon_html,
			$content_html
		);
	}
}

// ---------- extract & normalize ----------
$block_id = fb_norm_str($attributes['blockID'] ?? '');
$separator_type = fb_norm_str($attributes['separatorType'] ?? 'text');
$separator_text = fb_norm_str($attributes['separatorText'] ?? '/');
$separator_icon_frontend = $attributes['separatorIconFrontend'] ?? '';
$show_home_page = array_key_exists('showHomePage', $attributes) ? !empty($attributes['showHomePage']) : true;
$home_prefix_switcher = fb_norm_str($attributes['homeprefixSwitcher'] ?? 'icon');
$home_text_prefix = fb_norm_str($attributes['homeTextPrefix'] ?? 'Browsing:');
$show_home_icon = array_key_exists('showHomeIcon', $attributes) ? !empty($attributes['showHomeIcon']) : false;
$home_icon_frontend = $attributes['homeIconFrontend'] ?? '';
$home_text = fb_norm_str($attributes['homeText'] ?? 'Home');
$show_item_icon = array_key_exists('showItemIcon', $attributes) ? !empty($attributes['showItemIcon']) : false;
$item_icon_frontend = $attributes['itemIconFrontend'] ?? '';
$breadcrumb_global_wrapper_id = fb_norm_str($attributes['breadcrumbGlobalWraperID'] ?? '');
$breadcrumb_global_wrapper_cls = fb_norm_str($attributes['breadcrumbGlobalWraperClass'] ?? '');
$breadcrumb_desktop_switcher = array_key_exists('breadcrumbDesktopSwitcher', $attributes) ? !empty($attributes['breadcrumbDesktopSwitcher']) : false;
$breadcrumb_tablet_switcher = array_key_exists('breadcrumbTabletSwitcher', $attributes) ? !empty($attributes['breadcrumbTabletSwitcher']) : false;
$breadcrumb_mobile_switcher = array_key_exists('breadcrumbMobileSwitcher', $attributes) ? !empty($attributes['breadcrumbMobileSwitcher']) : false;

// ---------- classes (match save.js) ----------
$responsive_classes = [];
if ($breadcrumb_desktop_switcher) {
	$responsive_classes[] = 'fb-desktop-responsive';
}
if ($breadcrumb_tablet_switcher) {
	$responsive_classes[] = 'fb-tablet-responsive';
}
if ($breadcrumb_mobile_switcher) {
	$responsive_classes[] = 'fb-mobile-responsive';
}

$base_classes = array_merge(
	['frontis-block', 'fb-breadcrumb-main-wrapper', $block_id],
	$responsive_classes
);

$wrapper_classes_arr = array_filter(
	array_map(
		function ($class) {
			return sanitize_html_class(fb_norm_str($class));
		},
		$base_classes
	)
);

$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => implode(' ', $wrapper_classes_arr),
	]
);

// ---------- breadcrumb items ----------
$crumbs = [];
$separator_html = fb_breadcrumb_separator_html($separator_type, $separator_text, $separator_icon_frontend);

if ($show_home_page) {
	$home_prefix_html = fb_breadcrumb_home_prefix(
		$home_prefix_switcher,
		$show_home_icon,
		$home_icon_frontend,
		$home_text_prefix
	);

	$crumbs[] = sprintf(
		'<div class="fb-breadcrumb-item home">%s<a class="fb-breadcrumb-label fb-breadcrumb-link" href="%s">%s</a></div>',
		$home_prefix_html,
		esc_url(home_url('/')),
		esc_html($home_text)
	);
}

if (!is_front_page()) {
	if (is_home()) {
		$page_for_posts = (int) get_option('page_for_posts');

		if ($page_for_posts) {
			$crumbs[] = fb_breadcrumb_item_html(
				get_the_title($page_for_posts),
				get_permalink($page_for_posts),
				$show_item_icon,
				$item_icon_frontend,
				true
			);
		}
	} elseif (is_single()) {
		$post_id = get_the_ID();
		$post_type = get_post_type($post_id);

		if ($post_type && $post_type !== 'post') {
			$post_type_object = get_post_type_object($post_type);
			if ($post_type_object && !empty($post_type_object->has_archive)) {
				$crumbs[] = fb_breadcrumb_item_html(
					$post_type_object->labels->singular_name ?? ucfirst($post_type),
					get_post_type_archive_link($post_type),
					$show_item_icon,
					$item_icon_frontend
				);
			}
		}

		$categories = get_the_category($post_id);

		if (!empty($categories)) {
			$primary = $categories[0];

			$parent_categories = array_reverse(get_ancestors($primary->term_id, 'category'));
			foreach ($parent_categories as $parent_id) {
				$crumbs[] = fb_breadcrumb_item_html(
					get_cat_name($parent_id),
					get_category_link($parent_id),
					$show_item_icon,
					$item_icon_frontend
				);
			}

			$crumbs[] = fb_breadcrumb_item_html(
				$primary->name,
				get_category_link($primary->term_id),
				$show_item_icon,
				$item_icon_frontend
			);
		}

		$crumbs[] = fb_breadcrumb_item_html(
			get_the_title($post_id),
			'',
			$show_item_icon,
			$item_icon_frontend,
			true
		);
	} elseif (is_category()) {
		$category = get_queried_object();
		if ($category instanceof WP_Term) {
			$parents = array_reverse(get_ancestors($category->term_id, 'category'));
			foreach ($parents as $parent_id) {
				$crumbs[] = fb_breadcrumb_item_html(
					get_cat_name($parent_id),
					get_category_link($parent_id),
					$show_item_icon,
					$item_icon_frontend
				);
			}

			$crumbs[] = fb_breadcrumb_item_html(
				$category->name,
				'',
				$show_item_icon,
				$item_icon_frontend,
				true
			);
		}
	} elseif (is_page()) {
		$post = get_post();

		if ($post) {
			$ancestors = get_post_ancestors($post);
			if (!empty($ancestors)) {
				$ancestors = array_reverse($ancestors);
				foreach ($ancestors as $ancestor_id) {
					$crumbs[] = fb_breadcrumb_item_html(
						get_the_title($ancestor_id),
						get_permalink($ancestor_id),
						$show_item_icon,
						$item_icon_frontend
					);
				}
			}

			$crumbs[] = fb_breadcrumb_item_html(
				get_the_title($post),
				'',
				$show_item_icon,
				$item_icon_frontend,
				true
			);
		}
	} elseif (is_search()) {
		$crumbs[] = fb_breadcrumb_item_html(
			sprintf(
				/* translators: %s search query */
				__('Search Results for: %s', 'frontis-blocks'),
				get_search_query()
			),
			'',
			$show_item_icon,
			$item_icon_frontend,
			true
		);
	} elseif (is_tag()) {
		$crumbs[] = fb_breadcrumb_item_html(
			single_tag_title('', false),
			'',
			$show_item_icon,
			$item_icon_frontend,
			true
		);
	} elseif (is_author()) {
		$author = get_queried_object();
		if ($author) {
			$crumbs[] = fb_breadcrumb_item_html(
				$author->display_name ?? '',
				'',
				$show_item_icon,
				$item_icon_frontend,
				true
			);
		}
	} elseif (is_archive()) {
		$crumbs[] = fb_breadcrumb_item_html(
			get_the_archive_title(),
			'',
			$show_item_icon,
			$item_icon_frontend,
			true
		);
	} elseif (is_404()) {
		$crumbs[] = fb_breadcrumb_item_html(
			__('404 Not Found', 'frontis-blocks'),
			'',
			$show_item_icon,
			$item_icon_frontend,
			true
		);
	}
}

if (empty($crumbs)) {
	$crumbs[] = fb_breadcrumb_item_html(
		get_the_title(),
		'',
		$show_item_icon,
		$item_icon_frontend,
		true
	);
}

// ---------- render ----------
?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="<?php echo esc_attr(trim('fb-breadcrumb-container ' . $breadcrumb_global_wrapper_cls)); ?>" <?php if ($breadcrumb_global_wrapper_id): ?> id="<?php echo esc_attr($breadcrumb_global_wrapper_id); ?>" <?php endif; ?>>
		<div class="fb-breadcrumb-inner-wrapper">
			<div class="fb-breadcrumb-list">
				<?php
				$total = count($crumbs);

				foreach ($crumbs as $index => $crumb_html) {
					echo $crumb_html;

					if ($index < $total - 1 && $separator_html) {
						echo $separator_html;
					}
				}
				?>
			</div>
		</div>
	</div>
</div>
