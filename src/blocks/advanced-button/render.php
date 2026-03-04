<?php

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Utils\Helper;

/* ---------- helpers ---------- */
if (!function_exists('fb_norm_str')) {
	function fb_norm_str($val, $default = '')
	{
		if (is_array($val)) {
			$val = implode(' ', array_filter(array_map('strval', $val)));
		}
		if ($val === null)
			return $default;
		return (string) $val;
	}
}

if (!function_exists('fb_tag_whitelist')) {
	function fb_tag_whitelist($tag, $fallback = 'div')
	{
		$allowed = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'];
		$tag = strtolower(fb_norm_str($tag, $fallback));
		return in_array($tag, $allowed, true) ? $tag : $fallback;
	}
}

// --- Dynamic helpers ---
if (!function_exists('fb_get_plain_text')) {
	function fb_get_plain_text($html)
	{
		$raw = (string) ($html ?? '');
		$decoded = wp_specialchars_decode($raw, ENT_QUOTES);
		$decoded = html_entity_decode($decoded, ENT_QUOTES, 'UTF-8');
		$txt = wp_strip_all_tags($decoded, true);
		$txt = preg_replace('/\x{00A0}/u', ' ', $txt); // nbsp
		$txt = preg_replace('/[\x{200B}-\x{200D}\x{FEFF}]/u', '', $txt); // zero-width
		$txt = preg_replace('/\s{2,}/', ' ', $txt);
		return trim((string) $txt);
	}
}

if (!function_exists('fb_humanize_date')) {
	function fb_humanize_date($date)
	{
		if (!$date)
			return '';
		$timestamp = is_numeric($date) ? (int) $date : strtotime((string) $date);
		if (!$timestamp)
			return '';
		$diff = time() - $timestamp;
		$abs = abs($diff);

		$units = [
			'year' => 31536000,
			'month' => 2592000,
			'week' => 604800,
			'day' => 86400,
			'hour' => 3600,
			'minute' => 60,
			'second' => 1,
		];
		foreach ($units as $u => $s) {
			$v = floor($abs / $s);
			if ($v >= 1) {
				if ($diff >= 0) {
					switch ($u) {
						case 'year':
							/* translators: %d: number of years */
							return sprintf(_n('%d year ago', '%d years ago', $v, 'frontis-blocks'), $v);
						case 'month':
							/* translators: %d: number of months */
							return sprintf(_n('%d month ago', '%d months ago', $v, 'frontis-blocks'), $v);
						case 'week':
							/* translators: %d: number of weeks */
							return sprintf(_n('%d week ago', '%d weeks ago', $v, 'frontis-blocks'), $v);
						case 'day':
							/* translators: %d: number of days */
							return sprintf(_n('%d day ago', '%d days ago', $v, 'frontis-blocks'), $v);
						case 'hour':
							/* translators: %d: number of hours */
							return sprintf(_n('%d hour ago', '%d hours ago', $v, 'frontis-blocks'), $v);
						case 'minute':
							/* translators: %d: number of minutes */
							return sprintf(_n('%d minute ago', '%d minutes ago', $v, 'frontis-blocks'), $v);
						case 'second':
							/* translators: %d: number of seconds */
							return sprintf(_n('%d second ago', '%d seconds ago', $v, 'frontis-blocks'), $v);
					}
				} else {
					switch ($u) {
						case 'year':
							/* translators: %d: number of years */
							return sprintf(_n('in %d year', 'in %d years', $v, 'frontis-blocks'), $v);
						case 'month':
							/* translators: %d: number of months */
							return sprintf(_n('in %d month', 'in %d months', $v, 'frontis-blocks'), $v);
						case 'week':
							/* translators: %d: number of weeks */
							return sprintf(_n('in %d week', 'in %d weeks', $v, 'frontis-blocks'), $v);
						case 'day':
							/* translators: %d: number of days */
							return sprintf(_n('in %d day', 'in %d days', $v, 'frontis-blocks'), $v);
						case 'hour':
							/* translators: %d: number of hours */
							return sprintf(_n('in %d hour', 'in %d hours', $v, 'frontis-blocks'), $v);
						case 'minute':
							/* translators: %d: number of minutes */
							return sprintf(_n('in %d minute', 'in %d minutes', $v, 'frontis-blocks'), $v);
						case 'second':
							/* translators: %d: number of seconds */
							return sprintf(_n('in %d second', 'in %d seconds', $v, 'frontis-blocks'), $v);
					}
				}
			}
		}
		return __('just now', 'frontis-blocks');
	}
}

if (!function_exists('fb_get_site_date_format')) {
	function fb_get_site_date_format()
	{
		$fmt = get_option('date_format');
		return $fmt ? $fmt : 'F j, Y';
	}
}
if (!function_exists('fb_get_site_time_format')) {
	function fb_get_site_time_format()
	{
		$fmt = get_option('time_format');
		return $fmt ? $fmt : 'g:i a';
	}
}

/**
 * Compute dynamic text + link in a reusable way
 *
 * @param array $args
 * @return array{ value: string, link_url: string, permalink: string }
 */
if (!function_exists('fb_compute_dynamic_text')) {
	function fb_compute_dynamic_text($args)
	{
		$enabled = !empty($args['enabled']);
		$source = fb_norm_str($args['source'] ?? 'current_post');
		$field = fb_norm_str($args['field'] ?? 'post_title');

		$post_id_in = fb_norm_str($args['post_id'] ?? 0);
		$post_type_in = fb_norm_str($args['post_type'] ?? '');
		$featured_image_field = fb_norm_str($args['featured_image_field'] ?? 'title');

		$date_type = fb_norm_str($args['date_type'] ?? 'published');
		$date_format = fb_norm_str($args['date_format'] ?? 'default');
		$time_type = fb_norm_str($args['time_type'] ?? 'published');
		$time_format = fb_norm_str($args['time_format'] ?? 'default');

		$cm_zero = fb_norm_str($args['comments_zero'] ?? '');
		$cm_one = fb_norm_str($args['comments_one'] ?? '');
		$cm_many = fb_norm_str($args['comments_many'] ?? '');

		$terms_tax = fb_norm_str($args['terms_taxonomy'] ?? 'category');
		$terms_sep = fb_norm_str($args['terms_separator'] ?? '');

		$link_enabled = !empty($args['link_enabled']);
		$link_source = fb_norm_str($args['link_source'] ?? 'post_permalink');

		$out_value = '';
		$link_url = '';
		$permalink = '';

		if (!$enabled) {
			return ['value' => '', 'link_url' => '', 'permalink' => ''];
		}

		$is_site_field = in_array($source, ['site_title', 'site_tagline'], true);
		$is_archive_field = in_array($source, ['archive_title', 'archive_description'], true);
		$is_post_based = in_array($source, ['current_post', 'post_type'], true);

		$target_post_id = ($source === 'post_type' && $post_id_in) ? (int) $post_id_in : get_the_ID();
		$target_post_type = ($source === 'post_type' && $post_type_in) ? $post_type_in : get_post_type($target_post_id);

		if ($is_site_field) {
			if ($source === 'site_title') {
				$out_value = fb_get_plain_text(get_bloginfo('name') ?: __('No Content', 'frontis-blocks'));
			} else {
				$out_value = fb_get_plain_text(get_bloginfo('description') ?: __('No Content', 'frontis-blocks'));
			}
		} elseif ($is_archive_field) {
			if ($source === 'archive_title') {
				$out_value = fb_get_plain_text(get_the_archive_title() ?: __('No Content', 'frontis-blocks'));
			} else {
				$out_value = fb_get_plain_text(get_the_archive_description() ?: __('No Content', 'frontis-blocks'));
			}
		} elseif ($is_post_based && $target_post_id) {
			$_post = get_post($target_post_id);

			if ($_post && !is_wp_error($_post)) {
				$permalink = get_permalink($_post);
			}

			switch ($field) {
				case 'post_title':
					$out_value = fb_get_plain_text($_post ? get_the_title($_post) : '');
					break;

				case 'post_excerpt':
					if ($_post) {
						$raw = has_excerpt($_post) ? $_post->post_excerpt : '';
						$out_value = $raw ? fb_get_plain_text($raw) : __('No Content', 'frontis-blocks');
					}
					break;

				case 'post_thumbnail':
					$thumb_id = $_post ? get_post_thumbnail_id($_post) : 0;
					if (!$thumb_id) {
						$out_value = __('No Content', 'frontis-blocks');
						break;
					}
					$sub = $featured_image_field ?: 'attachment_url';
					switch ($sub) {
						case 'title':
							$out_value = fb_get_plain_text(get_the_title($thumb_id)) ?: __('No Content', 'frontis-blocks');
							break;
						case 'alt':
							$out_value = fb_get_plain_text(get_post_meta($thumb_id, '_wp_attachment_image_alt', true)) ?: __('No Content', 'frontis-blocks');
							break;
						case 'caption':
							$out_value = fb_get_plain_text(wp_get_attachment_caption($thumb_id)) ?: __('No Content', 'frontis-blocks');
							break;
						case 'description': {
							$att = get_post($thumb_id);
							$out_value = fb_get_plain_text($att ? $att->post_content : '') ?: __('No Content', 'frontis-blocks');
							break;
						}
						case 'attachment_url':
						default:
							$out_value = wp_get_attachment_url($thumb_id) ?: __('No Content', 'frontis-blocks');
							break;
					}
					break;

				case 'post_date':
					$raw = ($date_type === 'modified') ? get_post_modified_time('U', true, $_post) : get_post_time('U', true, $_post);
					if (!$raw) {
						$out_value = __('No Content', 'frontis-blocks');
						break;
					}
					switch ($date_format) {
						case 'jS F Y':
						case 'Y-m-d':
						case 'm/d/Y':
						case 'd/m/Y':
							$out_value = date_i18n($date_format, (int) $raw);
							break;
						case 'human':
							$out_value = fb_humanize_date((int) $raw);
							break;
						case 'default':
						default:
							$out_value = date_i18n(fb_get_site_date_format(), (int) $raw);
							break;
					}
					break;

				case 'post_time':
					$raw = ($time_type === 'modified') ? get_post_modified_time('U', true, $_post) : get_post_time('U', true, $_post);
					if (!$raw) {
						$out_value = __('No Content', 'frontis-blocks');
						break;
					}
					$fmt = $time_format && $time_format !== 'default' ? $time_format : fb_get_site_time_format();
					$out_value = date_i18n($fmt, (int) $raw);
					break;

				case 'post_terms':
					$tax = $terms_tax ?: '';
					if (!$tax) {
						$out_value = __('No Content', 'frontis-blocks');
						break;
					}
					$terms = get_the_terms($_post, $tax);
					if (is_wp_error($terms) || empty($terms)) {
						$out_value = __('No Content', 'frontis-blocks');
						break;
					}
					$sep = $terms_sep !== '' ? $terms_sep : ', ';
					$out_value = implode($sep, wp_list_pluck($terms, 'name'));
					break;

				case 'post_id':
					$out_value = $_post ? (string) $_post->ID : '';
					break;

				case 'comments_number':
					$count = ($_post instanceof WP_Post) ? get_comments_number($_post) : 0;
					$count = is_numeric($count) ? (int) $count : 0;
					$zeroTxt = trim($cm_zero ?: __('No Responses', 'frontis-blocks'));
					$oneTxt = trim($cm_one ?: __('One Response', 'frontis-blocks'));
					$manyTxt = trim($cm_many ?: __('Responses {num}', 'frontis-blocks'));
					if ($count === 0) {
						$out_value = $zeroTxt;
					} elseif ($count === 1) {
						$out_value = $oneTxt;
					} else {
						$out_value = (strpos($manyTxt, '{num}') !== false) ? str_replace('{num}', (string) $count, $manyTxt) : $manyTxt;
					}
					break;

				// Author fields
				case 'author_name':
				case 'author_first_name':
				case 'author_last_name':
				case 'author_nickname':
				case 'author_description':
				case 'author_email':
				case 'author_url':
				case 'author_avatar':
					$author_id = $_post ? (int) $_post->post_author : 0;
					if (!$author_id) {
						$out_value = __('No Content', 'frontis-blocks');
						break;
					}
					switch ($field) {
						case 'author_name':
							$val = fb_get_plain_text(get_the_author_meta('display_name', $author_id));
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_first_name':
							$val = fb_get_plain_text(get_the_author_meta('first_name', $author_id));
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_last_name':
							$val = fb_get_plain_text(get_the_author_meta('last_name', $author_id));
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_nickname':
							$val = fb_get_plain_text(get_the_author_meta('nickname', $author_id));
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_description':
							$val = fb_get_plain_text(get_the_author_meta('description', $author_id));
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_email':
							$raw = get_the_author_meta('email', $author_id);
							$val = is_string($raw) ? trim($raw) : '';
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_url':
							$raw = get_the_author_meta('url', $author_id);
							$val = is_string($raw) ? trim($raw) : '';
							$out_value = $val !== '' ? $val : __('No Content', 'frontis-blocks');
							break;
						case 'author_avatar':
							$val = get_avatar_url($author_id, ['size' => 96]);
							$out_value = $val ? $val : __('No Content', 'frontis-blocks');
							break;
					}
					break;

				default:
					$out_value = '';
			}

			// Link compute (only if enabled)
			if ($link_enabled) {
				switch ($link_source) {
					case 'post_permalink':
						$link_url = $permalink ?: '';
						break;
					case 'comments_area':
						$link_url = $_post ? get_comments_link($_post) : '';
						break;
					case 'featured_image':
						$link_url = $_post ? (get_the_post_thumbnail_url($_post, 'full') ?: '') : '';
						break;
					case 'avatar_profile_url': {
						$author_id = $_post ? (int) $_post->post_author : 0;
						$link_url = $author_id ? (get_avatar_url($author_id) ?: '') : '';
						break;
					}
					case 'author_page_url': {
						$pt = $_post ? get_post_type($_post) : ($target_post_type ?: '');
						$link_url = $pt ? (get_post_type_archive_link($pt) ?: '') : '';
						break;
					}
					case 'archive_url':
						$author_id = $_post ? (int) $_post->post_author : 0;
						$link_url = $author_id ? get_author_posts_url($author_id) : '';
						break;
					default:
						$link_url = '';
				}
			}
		}

		return [
			'value' => $out_value,
			'link_url' => $link_url,
			'permalink' => $permalink,
		];
	}
}

/* ---------- extract & normalize (attributes) ---------- */
$block_id = fb_norm_str(isset($attributes['blockID']) ? $attributes['blockID'] : '');

$button_alignment = fb_norm_str(isset($attributes['buttonAlignment']) ? $attributes['buttonAlignment'] : 'left');
$button_text_switcher = isset($attributes['buttonTextSwitcher']) ? !empty($attributes['buttonTextSwitcher']) : true;
$button_text = fb_norm_str(isset($attributes['buttonText']) ? $attributes['buttonText'] : 'Add Text');

$button_url = fb_norm_str(isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '');
$button_target_url = !empty($attributes['buttonTargetUrl']);

$button_icon_align = fb_norm_str(isset($attributes['buttonIconAlign']) ? $attributes['buttonIconAlign'] : 'none'); // none|icon-text|image
$button_icon_position = fb_norm_str(isset($attributes['buttonIconPosition']) ? $attributes['buttonIconPosition'] : 'right'); // left|right

$button_icon = fb_norm_str(isset($attributes['buttonIcon']) ? $attributes['buttonIcon'] : '');
$button_icon_frontend = fb_norm_str(isset($attributes['buttonIconFrontend']) ? $attributes['buttonIconFrontend'] : '');
$button_icon_image_url = fb_norm_str(isset($attributes['buttonIconImageUrl']) ? $attributes['buttonIconImageUrl'] : '');
$button_icon_image_alt = fb_norm_str(isset($attributes['buttonIconImageAlt']) ? $attributes['buttonIconImageAlt'] : '');

$button_global_wraper_id = fb_norm_str(isset($attributes['buttonGlobalWraperID']) ? $attributes['buttonGlobalWraperID'] : '');
$button_global_wraper_class = fb_norm_str(isset($attributes['buttonGlobalWraperClass']) ? $attributes['buttonGlobalWraperClass'] : '');

$advanced_btn_desktop = !empty($attributes['advancedBtnDesktopSwitcher']);
$advanced_btn_tablet = !empty($attributes['advancedBtnTabletSwitcher']);
$advanced_btn_mobile = !empty($attributes['advancedBtnMobileSwitcher']);

/* ---------- dynamic attributes ---------- */
$dynamic_enabled = !empty($attributes['dynamicTextEnabled']);
$dynamic_source = fb_norm_str(isset($attributes['dynamicTextSource']) ? $attributes['dynamicTextSource'] : 'current_post');
$dynamic_post_id_attr = fb_norm_str(isset($attributes['dynamicTextPostId']) ? $attributes['dynamicTextPostId'] : 0);
$dynamic_post_type_attr = fb_norm_str(isset($attributes['dynamicTextPostType']) ? $attributes['dynamicTextPostType'] : '');
$dynamic_post_label = fb_norm_str(isset($attributes['dynamicTextPostLabel']) ? $attributes['dynamicTextPostLabel'] : ''); // not used directly, kept for UI
$dynamic_field = fb_norm_str(isset($attributes['dynamicTextField']) ? $attributes['dynamicTextField'] : 'post_title');
$dynamic_feat_img_field = fb_norm_str(isset($attributes['dynamicFeaturedImageField']) ? $attributes['dynamicFeaturedImageField'] : 'title');

$dynamic_date_type = fb_norm_str(isset($attributes['dynamicTextDateType']) ? $attributes['dynamicTextDateType'] : 'published');
$dynamic_date_format = fb_norm_str(isset($attributes['dynamicTextDateFormat']) ? $attributes['dynamicTextDateFormat'] : 'default');

$dynamic_time_type = fb_norm_str(isset($attributes['dynamicTextTimeType']) ? $attributes['dynamicTextTimeType'] : 'published');
$dynamic_time_format = fb_norm_str(isset($attributes['dynamicTextTimeFormat']) ? $attributes['dynamicTextTimeFormat'] : 'default');

$dynamic_comments_zero = fb_norm_str(isset($attributes['dynamicTextCommentsZeroText']) ? $attributes['dynamicTextCommentsZeroText'] : 'No Response');
$dynamic_comments_one = fb_norm_str(isset($attributes['dynamicTextCommentsOneText']) ? $attributes['dynamicTextCommentsOneText'] : 'One Response');
$dynamic_comments_many = fb_norm_str(isset($attributes['dynamicTextCommentsManyText']) ? $attributes['dynamicTextCommentsManyText'] : '{num} Response');

$dynamic_terms_taxonomy = fb_norm_str(isset($attributes['dynamicTextTermsTaxonomy']) ? $attributes['dynamicTextTermsTaxonomy'] : 'category');
$dynamic_terms_separator = fb_norm_str(isset($attributes['dynamicTextTermsSeparator']) ? $attributes['dynamicTextTermsSeparator'] : ',');

$dynamic_enable_link = !empty($attributes['dynamicTextEnableLink']);
$dynamic_link_source = fb_norm_str(isset($attributes['dynamicTextLinkSource']) ? $attributes['dynamicTextLinkSource'] : 'post_permalink');

/**
 * Disable dynamic if not pro active
 */
if (!Helper::isProActivated()) {
	$dynamic_enabled = false;
	$dynamic_enable_link = false;
}

/* ---------- compute dynamic via reusable function ---------- */
$btn_dyn = fb_compute_dynamic_text([
	'enabled' => $dynamic_enabled,
	'source' => $dynamic_source,
	'field' => $dynamic_field,
	'post_id' => $dynamic_post_id_attr,
	'post_type' => $dynamic_post_type_attr,
	'featured_image_field' => $dynamic_feat_img_field,
	'date_type' => $dynamic_date_type,
	'date_format' => $dynamic_date_format,
	'time_type' => $dynamic_time_type,
	'time_format' => $dynamic_time_format,
	'comments_zero' => $dynamic_comments_zero,
	'comments_one' => $dynamic_comments_one,
	'comments_many' => $dynamic_comments_many,
	'terms_taxonomy' => $dynamic_terms_taxonomy,
	'terms_separator' => $dynamic_terms_separator,
	'link_enabled' => $dynamic_enable_link,
	'link_source' => $dynamic_link_source,
]);

// final text (dynamic or manual)
$final_button_text = $dynamic_enabled ? $btn_dyn['value'] : $button_text;

// final link (dynamic takes priority when enabled & URL exists)
$final_href = '';
if ($dynamic_enabled && $dynamic_enable_link && !empty($btn_dyn['link_url'])) {
	$final_href = esc_url($btn_dyn['link_url']);
} else {
	$final_href = esc_url($button_url);
}
$final_target = $button_target_url ? ' target="_blank" rel="noopener noreferrer"' : '';

/* ---------- classes ---------- */
$responsive_classes = [];
if ($advanced_btn_desktop)
	$responsive_classes[] = 'fb-desktop-responsive';
if ($advanced_btn_tablet)
	$responsive_classes[] = 'fb-tablet-responsive';
if ($advanced_btn_mobile)
	$responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['frontis-block', 'fb-advanced-button-main-wrapper', $block_id], $responsive_classes);

// sanitize and keep as array
$wrapper_classes_arr = array_filter(array_map(function ($c) {
	return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

// precompute wrapper attributes string
$wrapper_attributes = get_block_wrapper_attributes([
	'class' => implode(' ', $wrapper_classes_arr),
]);

$button_icon_html = Helper::render_icon($button_icon, ['fallback' => $button_icon_frontend]);

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="fb-parent-wrapper fb-advanced-button-wrapper <?php echo esc_attr($button_global_wraper_class); ?>" <?php if ($button_global_wraper_id): ?> id="<?php echo esc_attr($button_global_wraper_id); ?>" <?php endif; ?> <?php if ($button_alignment): ?> style="text-align:<?php echo esc_attr($button_alignment); ?>;" <?php endif; ?>>
		<a class="fb-advanced-button" <?php echo $final_href ? ' href="' . $final_href . '"' : ''; ?><?php echo $final_target; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

			<?php if ($button_icon_position === 'left' && $button_icon_align === 'icon-text'): ?>
				<div class="fb-advanced-button-icon-wrapper left">
					<div class="fb-advanced-button-icon">
						<?php echo $button_icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</div>
				</div>
			<?php endif; ?>

			<?php if ($button_icon_position === 'left' && $button_icon_align === 'image' && $button_icon_image_url): ?>
				<div class="fb-advanced-button-icon-wrapper left">
					<div class="fb-advanced-button-icon-image">
						<img src="<?php echo esc_url($button_icon_image_url); ?>"
							alt="<?php echo esc_attr($button_icon_image_alt); ?>" />
					</div>
				</div>
			<?php endif; ?>

			<?php if ($button_text_switcher): ?>
				<span class="fb-advanced-button-text">
					<?php echo wp_kses_post($final_button_text !== '' ? $final_button_text : ''); ?>
				</span>
			<?php endif; ?>

			<?php if ($button_icon_position === 'right' && $button_icon_align === 'icon-text'): ?>
				<div class="fb-advanced-button-icon-wrapper right">
					<div class="fb-advanced-button-icon">
						<?php echo $button_icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</div>
				</div>
			<?php endif; ?>

			<?php if ($button_icon_position === 'right' && $button_icon_align === 'image' && $button_icon_image_url): ?>
				<div class="fb-advanced-button-icon-wrapper right">
					<div class="fb-advanced-button-icon-image">
						<img src="<?php echo esc_url($button_icon_image_url); ?>"
							alt="<?php echo esc_attr($button_icon_image_alt); ?>" />
					</div>
				</div>
			<?php endif; ?>

		</a>
	</div>
</div>