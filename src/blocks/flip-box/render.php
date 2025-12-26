<?php

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

if (!function_exists('fb_get_plain_text')) {
	function fb_get_plain_text($html)
	{
		$raw = (string) ($html ?? '');
		$decoded = wp_specialchars_decode($raw, ENT_QUOTES);
		$decoded = html_entity_decode($decoded, ENT_QUOTES, 'UTF-8');
		$txt = wp_strip_all_tags($decoded, true);
		$txt = preg_replace('/\x{00A0}/u', ' ', $txt);
		$txt = preg_replace('/[\x{200B}-\x{200D}\x{FEFF}]/u', '', $txt);
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

/* ---------- dynamic compute (reusable) ---------- */
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
						case 'description':
							$att = get_post($thumb_id);
							$out_value = fb_get_plain_text($att ? $att->post_content : '') ?: __('No Content', 'frontis-blocks');
							break;
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
					if ($count === 0)
						$out_value = $zeroTxt;
					elseif ($count === 1)
						$out_value = $oneTxt;
					else
						$out_value = (strpos($manyTxt, '{num}') !== false) ? str_replace('{num}', (string) $count, $manyTxt) : $manyTxt;
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

			// Link compute
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
					case 'avatar_profile_url':
						$author_id = $_post ? (int) $_post->post_author : 0;
						$link_url = $author_id ? (get_avatar_url($author_id) ?: '') : '';
						break;
					case 'author_page_url':
						$pt = $_post ? get_post_type($_post) : ($target_post_type ?: '');
						$link_url = $pt ? (get_post_type_archive_link($pt) ?: '') : '';
						break;
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

/* ---------- extract & normalize (attributes) with DEFAULTS ---------- */
$blockID = fb_norm_str(isset($attributes['blockID']) ? $attributes['blockID'] : '');

$flipBoxGlobalWraperClass = fb_norm_str(isset($attributes['flipBoxGlobalWraperClass']) ? $attributes['flipBoxGlobalWraperClass'] : '');
$flipBoxGlobalWraperID = fb_norm_str(isset($attributes['flipBoxGlobalWraperID']) ? $attributes['flipBoxGlobalWraperID'] : '');

$flipMediaUrl = fb_norm_str(isset($attributes['flipMediaUrl']) ? $attributes['flipMediaUrl'] : '');
$mediaSwitcher = isset($attributes['mediaSwitcher']) ? $attributes['mediaSwitcher'] : 'icon';

$frontendIcon = isset($attributes['frontendIcon']) ? $attributes['frontendIcon'] : '';

$headingText = fb_norm_str(isset($attributes['Heading_Text']) ? $attributes['Heading_Text'] : 'Web Design');
$headingTag = fb_tag_whitelist(isset($attributes['headingTag']) ? $attributes['headingTag'] : 'h2', 'h2');

$descSwitcher = isset($attributes['descSwitcher']) ? !empty($attributes['descSwitcher']) : false;
$titleSwitcher = isset($attributes['titleSwitcher']) ? !empty($attributes['titleSwitcher']) : true;

$subHeadingTag = fb_tag_whitelist(isset($attributes['Sub_Heading_Tag']) ? $attributes['Sub_Heading_Tag'] : 'p', 'p');
$subHeadingText = fb_norm_str(isset($attributes['Sub_Heading_Text']) ? $attributes['Sub_Heading_Text'] : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin');

$flipButtonSwitcher = isset($attributes['flip_Button_Switcher']) ? !empty($attributes['flip_Button_Switcher']) : false;
$flipButtonText = fb_norm_str(isset($attributes['flip_Button_Text']) ? $attributes['flip_Button_Text'] : 'Learn More');
$flipButtonLink = fb_norm_str(isset($attributes['flipButtonLink']) ? $attributes['flipButtonLink'] : '');
$flipBtnTargetUrl = !empty($attributes['flipbtnTargetUrl']);

$btnIconSwitcher = isset($attributes['buttonIconSwitcher']) ? !empty($attributes['buttonIconSwitcher']) : true;
$frontendBtnIcon = isset($attributes['frontendBtnIcon']) ? $attributes['frontendBtnIcon'] : '';

$flipBackMediaUrl = fb_norm_str(isset($attributes['flipBackMediaUrl']) ? $attributes['flipBackMediaUrl'] : '');
$mediaSwitcherBack = isset($attributes['mediaSwitcherBack']) ? $attributes['mediaSwitcherBack'] : 'icon'; // 'icon' | 'image'
$frontendIconBack = isset($attributes['frontendIconBack']) ? $attributes['frontendIconBack'] : '';

$headingTextBack = fb_norm_str(isset($attributes['headingTextBack']) ? $attributes['headingTextBack'] : 'Branding');
$headingTagBack = fb_tag_whitelist(isset($attributes['headingTagBack']) ? $attributes['headingTagBack'] : 'h2', 'h2');

$descSwitcherBack = isset($attributes['descSwitcherBack']) ? !empty($attributes['descSwitcherBack']) : true;
$titleSwitcherBack = isset($attributes['titleSwitcherBack']) ? !empty($attributes['titleSwitcherBack']) : true;

$flipBackContent = fb_norm_str(isset($attributes['flipBackContent']) ? $attributes['flipBackContent'] : 'Corrupti non maiores atque. Repellendus ratione omnis numquam minima ut harum eaque.');
$flipBackContentTag = fb_tag_whitelist(isset($attributes['flipBackContentTag']) ? $attributes['flipBackContentTag'] : 'p', 'p');

$flipBackButtonSwitcher = isset($attributes['flipBack_Button_Switcher']) ? !empty($attributes['flipBack_Button_Switcher']) : true;
$flipBackButtonText = fb_norm_str(isset($attributes['flipBack_Button_Text']) ? $attributes['flipBack_Button_Text'] : 'Read More');
$flipBackButtonLink = fb_norm_str(isset($attributes['flipBackButtonLink']) ? $attributes['flipBackButtonLink'] : '');
$flipBackBtnTargetUrl = !empty($attributes['flipBackbtnTargetUrl']);

$flipAnimationType = fb_norm_str(isset($attributes['flipAnimationType']) ? $attributes['flipAnimationType'] : 'flip-left');

$flipBoxDesktopSwitcher = isset($attributes['flipBoxDesktopSwitcher']) ? !empty($attributes['flipBoxDesktopSwitcher']) : false;
$flipBoxTabletSwitcher = isset($attributes['flipBoxTabletSwitcher']) ? !empty($attributes['flipBoxTabletSwitcher']) : false;
$flipBoxMobileSwitcher = isset($attributes['flipBoxMobileSwitcher']) ? !empty($attributes['flipBoxMobileSwitcher']) : false;

$btnIconSwitcherBack = isset($attributes['buttonIconSwitcherBack']) ? !empty($attributes['buttonIconSwitcherBack']) : true;
$frontendBtnIconBack = isset($attributes['frontendBtnIconBack']) ? $attributes['frontendBtnIconBack'] : '';

/* ---------- dynamic toggles (Title / Desc / Buttons) ---------- */
$dynamicTitleEnabled = !empty($attributes['dynamicTitleEnabled']);
$dynamicTitleSource = fb_norm_str($attributes['dynamicTitleSource'] ?? 'current_post');
$dynamicTitlePostId = fb_norm_str($attributes['dynamicTitlePostId'] ?? 0);
$dynamicTitlePostType = fb_norm_str($attributes['dynamicTitlePostType'] ?? '');
$dynamicTitleField = fb_norm_str($attributes['dynamicTitleField'] ?? 'post_title');
$dynamicTitleFeaturedImageField = fb_norm_str($attributes['dynamicTitleFeaturedImageField'] ?? 'title');
$dynamicTitleDateType = fb_norm_str($attributes['dynamicTitleDateType'] ?? '');
$dynamicTitleDateFormat = fb_norm_str($attributes['dynamicTitleDateFormat'] ?? '');
$dynamicTitleTimeType = fb_norm_str($attributes['dynamicTitleTimeType'] ?? '');
$dynamicTitleTimeFormat = fb_norm_str($attributes['dynamicTitleTimeFormat'] ?? '');
$dynamicTitleCommentsZeroText = fb_norm_str($attributes['dynamicTitleCommentsZeroText'] ?? '');
$dynamicTitleCommentsOneText = fb_norm_str($attributes['dynamicTitleCommentsOneText'] ?? '');
$dynamicTitleCommentsManyText = fb_norm_str($attributes['dynamicTitleCommentsManyText'] ?? '');
$dynamicTitleTermsTaxonomy = fb_norm_str($attributes['dynamicTitleTermsTaxonomy'] ?? 'category');
$dynamicTitleTermsSeparator = fb_norm_str($attributes['dynamicTitleTermsSeparator'] ?? '');
$dynamicTitleEnableLink = !empty($attributes['dynamicTitleEnableLink']);
$dynamicTitleLinkSource = fb_norm_str($attributes['dynamicTitleLinkSource'] ?? 'post_permalink');

$dynamicDescriptionEnabled = !empty($attributes['dynamicDescriptionEnabled']);
$dynamicDescriptionSource = fb_norm_str($attributes['dynamicDescriptionSource'] ?? 'current_post');
$dynamicDescriptionPostId = fb_norm_str($attributes['dynamicDescriptionPostId'] ?? 0);
$dynamicDescriptionPostType = fb_norm_str($attributes['dynamicDescriptionPostType'] ?? '');
$dynamicDescriptionField = fb_norm_str($attributes['dynamicDescriptionField'] ?? 'post_title');
$dynamicDescriptionFeaturedImageField = fb_norm_str($attributes['dynamicDescriptionFeaturedImageField'] ?? 'title');
$dynamicDescriptionDateType = fb_norm_str($attributes['dynamicDescriptionDateType'] ?? '');
$dynamicDescriptionDateFormat = fb_norm_str($attributes['dynamicDescriptionDateFormat'] ?? '');
$dynamicDescriptionTimeType = fb_norm_str($attributes['dynamicDescriptionTimeType'] ?? '');
$dynamicDescriptionTimeFormat = fb_norm_str($attributes['dynamicDescriptionTimeFormat'] ?? '');
$dynamicDescriptionCommentsZeroText = fb_norm_str($attributes['dynamicDescriptionCommentsZeroText'] ?? '');
$dynamicDescriptionCommentsOneText = fb_norm_str($attributes['dynamicDescriptionCommentsOneText'] ?? '');
$dynamicDescriptionCommentsManyText = fb_norm_str($attributes['dynamicDescriptionCommentsManyText'] ?? '');
$dynamicDescriptionTermsTaxonomy = fb_norm_str($attributes['dynamicDescriptionTermsTaxonomy'] ?? 'category');
$dynamicDescriptionTermsSeparator = fb_norm_str($attributes['dynamicDescriptionTermsSeparator'] ?? '');
$dynamicDescriptionEnableLink = !empty($attributes['dynamicDescriptionEnableLink']);
$dynamicDescriptionLinkSource = fb_norm_str($attributes['dynamicDescriptionLinkSource'] ?? 'post_permalink');

$dynamicBtnEnabled = !empty($attributes['dynamicBtnEnabled']);
$dynamicBtnSource = fb_norm_str($attributes['dynamicBtnSource'] ?? 'current_post');
$dynamicBtnPostId = fb_norm_str($attributes['dynamicBtnPostId'] ?? 0);
$dynamicBtnPostType = fb_norm_str($attributes['dynamicBtnPostType'] ?? '');
$dynamicBtnField = fb_norm_str($attributes['dynamicBtnField'] ?? 'post_title');
$dynamicBtnFeaturedImageField = fb_norm_str($attributes['dynamicBtnFeaturedImageField'] ?? 'title');
$dynamicBtnDateType = fb_norm_str($attributes['dynamicBtnDateType'] ?? '');
$dynamicBtnDateFormat = fb_norm_str($attributes['dynamicBtnDateFormat'] ?? '');
$dynamicBtnTimeType = fb_norm_str($attributes['dynamicBtnTimeType'] ?? '');
$dynamicBtnTimeFormat = fb_norm_str($attributes['dynamicBtnTimeFormat'] ?? '');
$dynamicBtnCommentsZeroText = fb_norm_str($attributes['dynamicBtnCommentsZeroText'] ?? '');
$dynamicBtnCommentsOneText = fb_norm_str($attributes['dynamicBtnCommentsOneText'] ?? '');
$dynamicBtnCommentsManyText = fb_norm_str($attributes['dynamicBtnCommentsManyText'] ?? '');
$dynamicBtnTermsTaxonomy = fb_norm_str($attributes['dynamicBtnTermsTaxonomy'] ?? 'category');
$dynamicBtnTermsSeparator = fb_norm_str($attributes['dynamicBtnTermsSeparator'] ?? '');
$dynamicBtnEnableLink = !empty($attributes['dynamicBtnEnableLink']);
$dynamicBtnLinkSource = fb_norm_str($attributes['dynamicBtnLinkSource'] ?? 'post_permalink');

$dynamicBackTitleEnabled = !empty($attributes['dynamicBackTitleEnabled']);
$dynamicBackTitleSource = fb_norm_str($attributes['dynamicBackTitleSource'] ?? 'current_post');
$dynamicBackTitlePostId = fb_norm_str($attributes['dynamicBackTitlePostId'] ?? 0);
$dynamicBackTitlePostType = fb_norm_str($attributes['dynamicBackTitlePostType'] ?? '');
$dynamicBackTitleField = fb_norm_str($attributes['dynamicBackTitleField'] ?? 'post_title');
$dynamicBackTitleFeaturedImageField = fb_norm_str($attributes['dynamicBackTitleFeaturedImageField'] ?? 'title');
$dynamicBackTitleDateType = fb_norm_str($attributes['dynamicBackTitleDateType'] ?? '');
$dynamicBackTitleDateFormat = fb_norm_str($attributes['dynamicBackTitleDateFormat'] ?? '');
$dynamicBackTitleTimeType = fb_norm_str($attributes['dynamicBackTitleTimeType'] ?? '');
$dynamicBackTitleTimeFormat = fb_norm_str($attributes['dynamicBackTitleTimeFormat'] ?? '');
$dynamicBackTitleCommentsZeroText = fb_norm_str($attributes['dynamicBackTitleCommentsZeroText'] ?? '');
$dynamicBackTitleCommentsOneText = fb_norm_str($attributes['dynamicBackTitleCommentsOneText'] ?? '');
$dynamicBackTitleCommentsManyText = fb_norm_str($attributes['dynamicBackTitleCommentsManyText'] ?? '');
$dynamicBackTitleTermsTaxonomy = fb_norm_str($attributes['dynamicBackTitleTermsTaxonomy'] ?? 'category');
$dynamicBackTitleTermsSeparator = fb_norm_str($attributes['dynamicBackTitleTermsSeparator'] ?? '');
$dynamicBackTitleEnableLink = !empty($attributes['dynamicBackTitleEnableLink']);
$dynamicBackTitleLinkSource = fb_norm_str($attributes['dynamicBackTitleLinkSource'] ?? 'post_permalink');

$dynamicBackDescriptionEnabled = !empty($attributes['dynamicBackDescriptionEnabled']);
$dynamicBackDescriptionSource = fb_norm_str($attributes['dynamicBackDescriptionSource'] ?? 'current_post');
$dynamicBackDescriptionPostId = fb_norm_str($attributes['dynamicBackDescriptionPostId'] ?? 0);
$dynamicBackDescriptionPostType = fb_norm_str($attributes['dynamicBackDescriptionPostType'] ?? '');
$dynamicBackDescriptionField = fb_norm_str($attributes['dynamicBackDescriptionField'] ?? 'post_title');
$dynamicBackDescriptionFeaturedImageField = fb_norm_str($attributes['dynamicBackDescriptionFeaturedImageField'] ?? 'title');
$dynamicBackDescriptionDateType = fb_norm_str($attributes['dynamicBackDescriptionDateType'] ?? '');
$dynamicBackDescriptionDateFormat = fb_norm_str($attributes['dynamicBackDescriptionDateFormat'] ?? '');
$dynamicBackDescriptionTimeType = fb_norm_str($attributes['dynamicBackDescriptionTimeType'] ?? '');
$dynamicBackDescriptionTimeFormat = fb_norm_str($attributes['dynamicBackDescriptionTimeFormat'] ?? '');
$dynamicBackDescriptionCommentsZeroText = fb_norm_str($attributes['dynamicBackDescriptionCommentsZeroText'] ?? '');
$dynamicBackDescriptionCommentsOneText = fb_norm_str($attributes['dynamicBackDescriptionCommentsOneText'] ?? '');
$dynamicBackDescriptionCommentsManyText = fb_norm_str($attributes['dynamicBackDescriptionCommentsManyText'] ?? '');
$dynamicBackDescriptionTermsTaxonomy = fb_norm_str($attributes['dynamicBackDescriptionTermsTaxonomy'] ?? 'category');
$dynamicBackDescriptionTermsSeparator = fb_norm_str($attributes['dynamicBackDescriptionTermsSeparator'] ?? '');
$dynamicBackDescriptionEnableLink = !empty($attributes['dynamicBackDescriptionEnableLink']);
$dynamicBackDescriptionLinkSource = fb_norm_str($attributes['dynamicBackDescriptionLinkSource'] ?? 'post_permalink');

$dynamicBackBtnEnabled = !empty($attributes['dynamicBackBtnEnabled']);
$dynamicBackBtnSource = fb_norm_str($attributes['dynamicBackBtnSource'] ?? 'current_post');
$dynamicBackBtnPostId = fb_norm_str($attributes['dynamicBackBtnPostId'] ?? 0);
$dynamicBackBtnPostType = fb_norm_str($attributes['dynamicBackBtnPostType'] ?? '');
$dynamicBackBtnField = fb_norm_str($attributes['dynamicBackBtnField'] ?? 'post_title');
$dynamicBackBtnFeaturedImageField = fb_norm_str($attributes['dynamicBackBtnFeaturedImageField'] ?? 'title');
$dynamicBackBtnDateType = fb_norm_str($attributes['dynamicBackBtnDateType'] ?? '');
$dynamicBackBtnDateFormat = fb_norm_str($attributes['dynamicBackBtnDateFormat'] ?? '');
$dynamicBackBtnTimeType = fb_norm_str($attributes['dynamicBackBtnTimeType'] ?? '');
$dynamicBackBtnTimeFormat = fb_norm_str($attributes['dynamicBackBtnTimeFormat'] ?? '');
$dynamicBackBtnCommentsZeroText = fb_norm_str($attributes['dynamicBackBtnCommentsZeroText'] ?? '');
$dynamicBackBtnCommentsOneText = fb_norm_str($attributes['dynamicBackBtnCommentsOneText'] ?? '');
$dynamicBackBtnCommentsManyText = fb_norm_str($attributes['dynamicBackBtnCommentsManyText'] ?? '');
$dynamicBackBtnTermsTaxonomy = fb_norm_str($attributes['dynamicBackBtnTermsTaxonomy'] ?? 'category');
$dynamicBackBtnTermsSeparator = fb_norm_str($attributes['dynamicBackBtnTermsSeparator'] ?? '');
$dynamicBackBtnEnableLink = !empty($attributes['dynamicBackBtnEnableLink']);
$dynamicBackBtnLinkSource = fb_norm_str($attributes['dynamicBackBtnLinkSource'] ?? 'post_permalink');

/* ---------- Pro gate ---------- */
if (!Helper::isProActivated()) {
	$dynamicTitleEnabled = false;
	$dynamicTitleEnableLink = false;
	$dynamicDescriptionEnabled = false;
	$dynamicDescriptionEnableLink = false;
	$dynamicBtnEnabled = false;
	$dynamicBtnEnableLink = false;
	$dynamicBackTitleEnabled = false;
	$dynamicBackTitleEnableLink = false;
	$dynamicBackDescriptionEnabled = false;
	$dynamicBackDescriptionEnableLink = false;
	$dynamicBackBtnEnabled = false;
	$dynamicBackBtnEnableLink = false;
}

/* ---------- compute dynamics ---------- */
$titleDyn = fb_compute_dynamic_text([
	'enabled' => $dynamicTitleEnabled,
	'source' => $dynamicTitleSource,
	'field' => $dynamicTitleField,
	'post_id' => $dynamicTitlePostId,
	'post_type' => $dynamicTitlePostType,
	'featured_image_field' => $dynamicTitleFeaturedImageField,
	'date_type' => $dynamicTitleDateType,
	'date_format' => $dynamicTitleDateFormat,
	'time_type' => $dynamicTitleTimeType,
	'time_format' => $dynamicTitleTimeFormat,
	'comments_zero' => $dynamicTitleCommentsZeroText,
	'comments_one' => $dynamicTitleCommentsOneText,
	'comments_many' => $dynamicTitleCommentsManyText,
	'terms_taxonomy' => $dynamicTitleTermsTaxonomy,
	'terms_separator' => $dynamicTitleTermsSeparator,
	'link_enabled' => $dynamicTitleEnableLink,
	'link_source' => $dynamicTitleLinkSource,
]);

$descriptionDyn = fb_compute_dynamic_text([
	'enabled' => $dynamicDescriptionEnabled,
	'source' => $dynamicDescriptionSource,
	'field' => $dynamicDescriptionField,
	'post_id' => $dynamicDescriptionPostId,
	'post_type' => $dynamicDescriptionPostType,
	'featured_image_field' => $dynamicDescriptionFeaturedImageField,
	'date_type' => $dynamicDescriptionDateType,
	'date_format' => $dynamicDescriptionDateFormat,
	'time_type' => $dynamicDescriptionTimeType,
	'time_format' => $dynamicDescriptionTimeFormat,
	'comments_zero' => $dynamicDescriptionCommentsZeroText,
	'comments_one' => $dynamicDescriptionCommentsOneText,
	'comments_many' => $dynamicDescriptionCommentsManyText,
	'terms_taxonomy' => $dynamicDescriptionTermsTaxonomy,
	'terms_separator' => $dynamicDescriptionTermsSeparator,
	'link_enabled' => $dynamicDescriptionEnableLink,
	'link_source' => $dynamicDescriptionLinkSource,
]);

$btnDyn = fb_compute_dynamic_text([
	'enabled' => $dynamicBtnEnabled,
	'source' => $dynamicBtnSource,
	'field' => $dynamicBtnField,
	'post_id' => $dynamicBtnPostId,
	'post_type' => $dynamicBtnPostType,
	'featured_image_field' => $dynamicBtnFeaturedImageField,
	'date_type' => $dynamicBtnDateType,
	'date_format' => $dynamicBtnDateFormat,
	'time_type' => $dynamicBtnTimeType,
	'time_format' => $dynamicBtnTimeFormat,
	'comments_zero' => $dynamicBtnCommentsZeroText,
	'comments_one' => $dynamicBtnCommentsOneText,
	'comments_many' => $dynamicBtnCommentsManyText,
	'terms_taxonomy' => $dynamicBtnTermsTaxonomy,
	'terms_separator' => $dynamicBtnTermsSeparator,
	'link_enabled' => $dynamicBtnEnableLink,
	'link_source' => $dynamicBtnLinkSource,
]);

$backTitleDyn = fb_compute_dynamic_text([
	'enabled' => $dynamicBackTitleEnabled,
	'source' => $dynamicBackTitleSource,
	'field' => $dynamicBackTitleField,
	'post_id' => $dynamicBackTitlePostId,
	'post_type' => $dynamicBackTitlePostType,
	'featured_image_field' => $dynamicBackTitleFeaturedImageField,
	'date_type' => $dynamicBackTitleDateType,
	'date_format' => $dynamicBackTitleDateFormat,
	'time_type' => $dynamicBackTitleTimeType,
	'time_format' => $dynamicBackTitleTimeFormat,
	'comments_zero' => $dynamicBackTitleCommentsZeroText,
	'comments_one' => $dynamicBackTitleCommentsOneText,
	'comments_many' => $dynamicBackTitleCommentsManyText,
	'terms_taxonomy' => $dynamicBackTitleTermsTaxonomy,
	'terms_separator' => $dynamicBackTitleTermsSeparator,
	'link_enabled' => $dynamicBackTitleEnableLink,
	'link_source' => $dynamicBackTitleLinkSource,
]);

$backDescriptionDyn = fb_compute_dynamic_text([
	'enabled' => $dynamicBackDescriptionEnabled,
	'source' => $dynamicBackDescriptionSource,
	'field' => $dynamicBackDescriptionField,
	'post_id' => $dynamicBackDescriptionPostId,
	'post_type' => $dynamicBackDescriptionPostType,
	'featured_image_field' => $dynamicBackDescriptionFeaturedImageField,
	'date_type' => $dynamicBackDescriptionDateType,
	'date_format' => $dynamicBackDescriptionDateFormat,
	'time_type' => $dynamicBackDescriptionTimeType,
	'time_format' => $dynamicBackDescriptionTimeFormat,
	'comments_zero' => $dynamicBackDescriptionCommentsZeroText,
	'comments_one' => $dynamicBackDescriptionCommentsOneText,
	'comments_many' => $dynamicBackDescriptionCommentsManyText,
	'terms_taxonomy' => $dynamicBackDescriptionTermsTaxonomy,
	'terms_separator' => $dynamicBackDescriptionTermsSeparator,
	'link_enabled' => $dynamicBackDescriptionEnableLink,
	'link_source' => $dynamicBackDescriptionLinkSource,
]);

$backBtnDyn = fb_compute_dynamic_text([
	'enabled' => $dynamicBackBtnEnabled,
	'source' => $dynamicBackBtnSource,
	'field' => $dynamicBackBtnField,
	'post_id' => $dynamicBackBtnPostId,
	'post_type' => $dynamicBackBtnPostType,
	'featured_image_field' => $dynamicBackBtnFeaturedImageField,
	'date_type' => $dynamicBackBtnDateType,
	'date_format' => $dynamicBackBtnDateFormat,
	'time_type' => $dynamicBackBtnTimeType,
	'time_format' => $dynamicBackBtnTimeFormat,
	'comments_zero' => $dynamicBackBtnCommentsZeroText,
	'comments_one' => $dynamicBackBtnCommentsOneText,
	'comments_many' => $dynamicBackBtnCommentsManyText,
	'terms_taxonomy' => $dynamicBackBtnTermsTaxonomy,
	'terms_separator' => $dynamicBackBtnTermsSeparator,
	'link_enabled' => $dynamicBackBtnEnableLink,
	'link_source' => $dynamicBackBtnLinkSource,
]);

/* ---------- final values ---------- */
/* ---------- final values (MAIN + BACK, separated) ---------- */

/* MAIN (front) */
$finalMainHeadingText = $dynamicTitleEnabled ? $titleDyn['value'] : $headingText;
$finalMainDescriptionText = $dynamicDescriptionEnabled ? $descriptionDyn['value'] : $subHeadingText;

$finalMainButtonText = $dynamicBtnEnabled ? $btnDyn['value'] : $flipButtonText;
$mainBtnTargetAttr = $flipBtnTargetUrl ? ' target="_blank" rel="noopener noreferrer"' : '';

/* BACK */
$finalBackHeadingText = $dynamicBackTitleEnabled ? $backTitleDyn['value'] : $headingTextBack;
$backTitleLinkUrl = ($dynamicBackTitleEnabled && $dynamicBackTitleEnableLink) ? fb_norm_str($backTitleDyn['link_url']) : '';

$finalBackDescriptionText = $dynamicBackDescriptionEnabled ? $backDescriptionDyn['value'] : $flipBackContent;
$backDescriptionLinkUrl = ($dynamicBackDescriptionEnabled && $dynamicBackDescriptionEnableLink) ? fb_norm_str($backDescriptionDyn['link_url']) : '';

$finalBackButtonText = $dynamicBackBtnEnabled ? $backBtnDyn['value'] : $flipBackButtonText;
$backBtnHrefDynamic = ($dynamicBackBtnEnabled && $dynamicBackBtnEnableLink) ? fb_norm_str($backBtnDyn['link_url']) : '';
$backBtnHrefFinal = $backBtnHrefDynamic !== '' ? $backBtnHrefDynamic : $flipBackButtonLink;

$backBtnTargetAttr = $flipBackBtnTargetUrl ? ' target="_blank" rel="noopener noreferrer"' : '';

/* ---------- classes (must mirror save.js) ---------- */
$responsiveClasses = [];
if ($flipBoxDesktopSwitcher)
	$responsiveClasses[] = 'fb-desktop-responsive';
if ($flipBoxTabletSwitcher)
	$responsiveClasses[] = 'fb-tablet-responsive';
if ($flipBoxMobileSwitcher)
	$responsiveClasses[] = 'fb-mobile-responsive';

$baseClasses = array_merge(['fb-flip-box-main-wrapper', $blockID], $responsiveClasses);

$wrapperClassesArr = array_filter(array_map(function ($c) {
	return sanitize_html_class(fb_norm_str($c));
}, $baseClasses));

$wrapperAttributes = get_block_wrapper_attributes([
	'class' => implode(' ', $wrapperClassesArr),
]);

?>
<div <?php echo $wrapperAttributes; ?>>
	<div class="fb-parent-wrapper fb-flip-box-wrapper <?php echo esc_attr(trim($blockID . ' ' . $flipBoxGlobalWraperClass)); ?>"
		id="<?php echo esc_attr($flipBoxGlobalWraperID); ?>">
		<div class="fb-flipper-wrapper <?php echo esc_attr($flipAnimationType); ?>">

			<!-- Front Side -->
			<div class="fb-flipbox-front">
				<div class="fb-flipbox-content-wrapper">

					<?php if (($mediaSwitcher === 'image' && $flipMediaUrl) || ($mediaSwitcher === 'icon' && $frontendIcon)): ?>
						<div class="fb-flip-media-container">
							<div class="fb-flip-media-wrapper">
								<?php if ($mediaSwitcher === 'image' && $flipMediaUrl): ?>
									<img src="<?php echo esc_url($flipMediaUrl); ?>"
										alt="<?php echo esc_attr(fb_get_plain_text($finalMainHeadingText) ?: 'Front media'); ?>" />
								<?php endif; ?>

								<?php if ($mediaSwitcher === 'icon' && $frontendIcon): ?>
									<div class="fb-icon-wrapper"><?php echo $frontendIcon; ?></div>
								<?php endif; ?>
							</div>
						</div>
					<?php endif; ?>

					<?php if (
						($titleSwitcher && $finalMainHeadingText !== '') ||
						($descSwitcher && $finalMainDescriptionText !== '') ||
						($flipButtonSwitcher && $finalMainButtonText !== '')
					): ?>
						<div class="fb-flip-box-content-wrapper">

							<?php if ($titleSwitcher && $finalMainHeadingText !== ''): ?>
								<<?php echo esc_html($headingTag); ?> class="fb-heading">
									<?php echo esc_html($finalMainHeadingText); ?>
								</<?php echo esc_html($headingTag); ?>>
							<?php endif; ?>

							<?php if ($descSwitcher && $finalMainDescriptionText !== ''): ?>
								<<?php echo esc_html($subHeadingTag); ?> class="fb-description">
									<?php echo esc_html($finalMainDescriptionText); ?>
								</<?php echo esc_html($subHeadingTag); ?>>
							<?php endif; ?>

							<?php if ($flipButtonSwitcher && $finalMainButtonText !== ''): ?>
								<div class="fb-flip-button">
									<div class="fb-flip-btn-container">
										<!-- MAIN(front): static link only, NO dynamic link -->
										<a class="fb-flip-btn-wrapper"
											href="<?php echo $flipButtonLink !== '' ? esc_url($flipButtonLink) : '#'; ?>" <?php echo $mainBtnTargetAttr; ?>>
											<span><?php echo esc_html($finalMainButtonText); ?></span>
											<?php if ($btnIconSwitcher && $frontendBtnIcon): ?>
												<div class="fb-btn-icon-wrapper"><?php echo $frontendBtnIcon; ?></div>
											<?php endif; ?>
										</a>
									</div>
								</div>
							<?php endif; ?>

						</div>
					<?php endif; ?>

				</div>
			</div>

			<!-- Back Side -->
			<div class="fb-flipbox-back">
				<div class="fb-flipbox-content-wrapper">

					<?php if (($mediaSwitcherBack === 'image' && $flipBackMediaUrl) || ($mediaSwitcherBack === 'icon' && $frontendIconBack)): ?>
						<div class="fb-flip-back-media-container">
							<div class="fb-flip-back-media-wrapper">
								<?php if ($mediaSwitcherBack === 'image' && $flipBackMediaUrl): ?>
									<img src="<?php echo esc_url($flipBackMediaUrl); ?>"
										alt="<?php echo esc_attr(fb_get_plain_text($finalBackHeadingText) ?: 'Back media'); ?>" />
								<?php endif; ?>

								<?php if ($mediaSwitcherBack === 'icon' && $frontendIconBack): ?>
									<div class="fb-icon-wrapper"><?php echo $frontendIconBack; ?></div>
								<?php endif; ?>
							</div>
						</div>
					<?php endif; ?>

					<?php if (
						($titleSwitcherBack && $finalBackHeadingText !== '') ||
						($descSwitcherBack && $finalBackDescriptionText !== '') ||
						($flipBackButtonSwitcher && $finalBackButtonText !== '')
					): ?>
						<div class="fb-flip-back-box-content-wrapper">

							<?php if ($titleSwitcherBack && $finalBackHeadingText !== ''): ?>
								<<?php echo esc_html($headingTagBack); ?> class="fb-heading">
									<?php if ($backTitleLinkUrl !== ''): ?>
										<a href="<?php echo esc_url($backTitleLinkUrl); ?>" <?php echo $backBtnTargetAttr; ?>>
											<?php echo esc_html($finalBackHeadingText); ?>
										</a>
									<?php else: ?>
										<?php echo esc_html($finalBackHeadingText); ?>
									<?php endif; ?>
								</<?php echo esc_html($headingTagBack); ?>>
							<?php endif; ?>

							<?php if ($descSwitcherBack && $finalBackDescriptionText !== ''): ?>
								<<?php echo esc_html($flipBackContentTag); ?> class="fb-description">
									<?php if ($backDescriptionLinkUrl !== ''): ?>
										<a href="<?php echo esc_url($backDescriptionLinkUrl); ?>" <?php echo $backBtnTargetAttr; ?>>
											<?php echo esc_html($finalBackDescriptionText); ?>
										</a>
									<?php else: ?>
										<?php echo esc_html($finalBackDescriptionText); ?>
									<?php endif; ?>
								</<?php echo esc_html($flipBackContentTag); ?>>
							<?php endif; ?>

							<?php if ($flipBackButtonSwitcher && $finalBackButtonText !== ''): ?>
								<div class="fb-flip-back-button">
									<div class="fb-flip-back-btn-container">
										<a class="fb-flip-back-btn-wrapper"
											href="<?php echo $backBtnHrefFinal !== '' ? esc_url($backBtnHrefFinal) : '#'; ?>"
											<?php echo $backBtnTargetAttr; ?>>
											<span><?php echo esc_html($finalBackButtonText); ?></span>
											<?php if ($btnIconSwitcherBack && $frontendBtnIconBack): ?>
												<div class="fb-btn-icon-wrapper"><?php echo $frontendBtnIconBack; ?></div>
											<?php endif; ?>
										</a>
									</div>
								</div>
							<?php endif; ?>

						</div>
					<?php endif; ?>

				</div>
			</div>

		</div>
	</div>
</div>