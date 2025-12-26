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

/* ---------- extract & normalize (attributes) with DEFAULTS: Team Member ---------- */

$blockID = fb_norm_str(isset($attributes['blockID']) ? $attributes['blockID'] : '');

$teamMemberImageUrl = fb_norm_str(isset($attributes['teamMemberImageUrl']) ? $attributes['teamMemberImageUrl'] : '');
$teamMemberImageAlt = fb_norm_str(isset($attributes['teamMemberImageAlt']) ? $attributes['teamMemberImageAlt'] : '');
$teamMemberImageOverlaySwitcher = isset($attributes['teamMemberImageOverlaySwitcher']) ? !empty($attributes['teamMemberImageOverlaySwitcher']) : false;

$teamMemberName = fb_norm_str(isset($attributes['teamMemberName']) ? $attributes['teamMemberName'] : 'David John');
$teamMemberNameHeadingTag = fb_tag_whitelist(isset($attributes['teamMemberNameHeadingTag']) ? $attributes['teamMemberNameHeadingTag'] : 'h3', 'h3');

$teamMemberDesignation = fb_norm_str(isset($attributes['teamMemberDesignation']) ? $attributes['teamMemberDesignation'] : 'Senior Developer');

$teamMemberDescSwitcher = isset($attributes['teamMemberDescSwitcher']) ? !empty($attributes['teamMemberDescSwitcher']) : false;
$teamMemberDesc = fb_norm_str(isset($attributes['teamMemberDesc']) ? $attributes['teamMemberDesc'] : 'Lorem ipsum dolor sit amet consectetur Aliquam mauris bibendum.');

$teamMemberSocialPosition = fb_norm_str(isset($attributes['teamMemberSocialPosition']) ? $attributes['teamMemberSocialPosition'] : 'bottom');
$teamMemberSocialProfileSwitcher = isset($attributes['teamMemberSocialProfileSwitcher']) ? !empty($attributes['teamMemberSocialProfileSwitcher']) : true;
$teamMemberSocialProfileSeparator = fb_norm_str(isset($attributes['teamMemberSocialProfileSeparator']) ? $attributes['teamMemberSocialProfileSeparator'] : true);
$teamMemberSocialItems = (isset($attributes['frontendTeamMemberSocialItems']) && is_array($attributes['frontendTeamMemberSocialItems'])) ? $attributes['frontendTeamMemberSocialItems'] : array();
$teamMemberSocialType = fb_norm_str(isset($attributes['teamMemberSocialType']) ? $attributes['teamMemberSocialType'] : 'content');
$socialIconBtnSwitcher = isset($attributes['socialIconBtnSwitcher']) ? !empty($attributes['socialIconBtnSwitcher']) : false;
$socialIconBtnIcon = isset($attributes['frontendSocialIconBtnIcon']) ? $attributes['frontendSocialIconBtnIcon'] : '';
$teamMemberSocialProfileSeparatorPosition = fb_norm_str(isset($attributes['teamMemberSocialProfileSeparatorPosition']) ? $attributes['teamMemberSocialProfileSeparatorPosition'] : 'top');

$teamMemberDesktopSwitcher = isset($attributes['teamMemberDesktopSwitcher']) ? !empty($attributes['teamMemberDesktopSwitcher']) : false;
$teamMemberTabletSwitcher = isset($attributes['teamMemberTabletSwitcher']) ? !empty($attributes['teamMemberTabletSwitcher']) : false;
$teamMemberMobileSwitcher = isset($attributes['teamMemberMobileSwitcher']) ? !empty($attributes['teamMemberMobileSwitcher']) : false;

$teamMemberGlobalWraperID = fb_norm_str(isset($attributes['teamMemberGlobalWraperID']) ? $attributes['teamMemberGlobalWraperID'] : '');
$teamMemberGlobalWraperClass = fb_norm_str(isset($attributes['teamMemberGlobalWraperClass']) ? $attributes['teamMemberGlobalWraperClass'] : '');

$teamMemberBadgeSwitcher = isset($attributes['teamMemberBadgeSwitcher']) ? !empty($attributes['teamMemberBadgeSwitcher']) : false;
$teamMemberBadgePosition = fb_norm_str(isset($attributes['teamMemberBadgePosition']) ? $attributes['teamMemberBadgePosition'] : 'image');
$teamMemberBadge = fb_norm_str(isset($attributes['teamMemberBadge']) ? $attributes['teamMemberBadge'] : 'New');


/* ---------- dynamic toggles ( Description / Team Member Name / Team Member Designation) ---------- */
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
$dynamicDescriptionTermsSeparator = fb_norm_str($attributes['dynamicDescriptionTermsSeparator'] ?? ', ');
$dynamicDescriptionEnableLink = !empty($attributes['dynamicDescriptionEnableLink']);
$dynamicDescriptionLinkSource = fb_norm_str($attributes['dynamicDescriptionLinkSource'] ?? 'post_permalink');

$dynamicTeamMemberNameEnabled = !empty($attributes['dynamicTeamMemberNameEnabled']);
$dynamicTeamMemberNameSource = fb_norm_str($attributes['dynamicTeamMemberNameSource'] ?? 'current_post');
$dynamicTeamMemberNamePostId = fb_norm_str($attributes['dynamicTeamMemberNamePostId'] ?? 0);
$dynamicTeamMemberNamePostType = fb_norm_str($attributes['dynamicTeamMemberNamePostType'] ?? '');
$dynamicTeamMemberNamePostLabel = fb_norm_str($attributes['dynamicTeamMemberNamePostLabel'] ?? '');
$dynamicTeamMemberNameField = fb_norm_str($attributes['dynamicTeamMemberNameField'] ?? 'post_title');
$dynamicTeamMemberNameFeaturedImageField = fb_norm_str($attributes['dynamicTeamMemberNameFeaturedImageField'] ?? 'title');
$dynamicTeamMemberNameDateType = fb_norm_str($attributes['dynamicTeamMemberNameDateType'] ?? '');
$dynamicTeamMemberNameDateFormat = fb_norm_str($attributes['dynamicTeamMemberNameDateFormat'] ?? '');
$dynamicTeamMemberNameTimeType = fb_norm_str($attributes['dynamicTeamMemberNameTimeType'] ?? '');
$dynamicTeamMemberNameTimeFormat = fb_norm_str($attributes['dynamicTeamMemberNameTimeFormat'] ?? '');
$dynamicTeamMemberNameCommentsZeroText = fb_norm_str($attributes['dynamicTeamMemberNameCommentsZeroText'] ?? '');
$dynamicTeamMemberNameCommentsOneText = fb_norm_str($attributes['dynamicTeamMemberNameCommentsOneText'] ?? '');
$dynamicTeamMemberNameCommentsManyText = fb_norm_str($attributes['dynamicTeamMemberNameCommentsManyText'] ?? '');
$dynamicTeamMemberNameTermsTaxonomy = fb_norm_str($attributes['dynamicTeamMemberNameTermsTaxonomy'] ?? 'category');
$dynamicTeamMemberNameTermsSeparator = fb_norm_str($attributes['dynamicTeamMemberNameTermsSeparator'] ?? '');
$dynamicTeamMemberNameEnableLink = !empty($attributes['dynamicTeamMemberNameEnableLink']);
$dynamicTeamMemberNameLinkSource = fb_norm_str($attributes['dynamicTeamMemberNameLinkSource'] ?? 'post_permalink');

$dynamicTeamMemberDesignationEnabled = !empty($attributes['dynamicTeamMemberDesignationEnabled']);
$dynamicTeamMemberDesignationSource = fb_norm_str($attributes['dynamicTeamMemberDesignationSource'] ?? 'current_post');
$dynamicTeamMemberDesignationPostId = fb_norm_str($attributes['dynamicTeamMemberDesignationPostId'] ?? 0);
$dynamicTeamMemberDesignationPostType = fb_norm_str($attributes['dynamicTeamMemberDesignationPostType'] ?? '');
$dynamicTeamMemberDesignationPostLabel = fb_norm_str($attributes['dynamicTeamMemberDesignationPostLabel'] ?? '');
$dynamicTeamMemberDesignationField = fb_norm_str($attributes['dynamicTeamMemberDesignationField'] ?? 'post_title');
$dynamicTeamMemberDesignationFeaturedImageField = fb_norm_str($attributes['dynamicTeamMemberDesignationFeaturedImageField'] ?? 'title');
$dynamicTeamMemberDesignationDateType = fb_norm_str($attributes['dynamicTeamMemberDesignationDateType'] ?? '');
$dynamicTeamMemberDesignationDateFormat = fb_norm_str($attributes['dynamicTeamMemberDesignationDateFormat'] ?? '');
$dynamicTeamMemberDesignationTimeType = fb_norm_str($attributes['dynamicTeamMemberDesignationTimeType'] ?? '');
$dynamicTeamMemberDesignationTimeFormat = fb_norm_str($attributes['dynamicTeamMemberDesignationTimeFormat'] ?? '');
$dynamicTeamMemberDesignationCommentsZeroText = fb_norm_str($attributes['dynamicTeamMemberDesignationCommentsZeroText'] ?? '');
$dynamicTeamMemberDesignationCommentsOneText = fb_norm_str($attributes['dynamicTeamMemberDesignationCommentsOneText'] ?? '');
$dynamicTeamMemberDesignationCommentsManyText = fb_norm_str($attributes['dynamicTeamMemberDesignationCommentsManyText'] ?? '');
$dynamicTeamMemberDesignationTermsTaxonomy = fb_norm_str($attributes['dynamicTeamMemberDesignationTermsTaxonomy'] ?? 'category');
$dynamicTeamMemberDesignationTermsSeparator = fb_norm_str($attributes['dynamicTeamMemberDesignationTermsSeparator'] ?? '');
$dynamicTeamMemberDesignationEnableLink = !empty($attributes['dynamicTeamMemberDesignationEnableLink']);
$dynamicTeamMemberDesignationLinkSource = fb_norm_str($attributes['dynamicTeamMemberDesignationLinkSource'] ?? 'post_permalink');

/* ---------- Pro gate ---------- */
if (!Helper::isProActivated()) {
	$dynamicDescriptionEnabled = false;
	$dynamicDescriptionEnableLink = false;
	$dynamicTeamMemberNameEnabled = false;
	$dynamicTeamMemberNameEnableLink = false;
	$dynamicTeamMemberDesignationEnabled = false;
	$dynamicTeamMemberDesignationEnableLink = false;
}

/* ---------- compute dynamics ---------- */
$description_dyn = fb_compute_dynamic_text([
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

$team_member_name_dyn = fb_compute_dynamic_text([
	'enabled' => $dynamicTeamMemberNameEnabled,
	'source' => $dynamicTeamMemberNameSource,
	'field' => $dynamicTeamMemberNameField,
	'post_id' => $dynamicTeamMemberNamePostId,
	'post_type' => $dynamicTeamMemberNamePostType,
	'featured_image_field' => $dynamicTeamMemberNameFeaturedImageField,
	'date_type' => $dynamicTeamMemberNameDateType,
	'date_format' => $dynamicTeamMemberNameDateFormat,
	'time_type' => $dynamicTeamMemberNameTimeType,
	'time_format' => $dynamicTeamMemberNameTimeFormat,
	'comments_zero' => $dynamicTeamMemberNameCommentsZeroText,
	'comments_one' => $dynamicTeamMemberNameCommentsOneText,
	'comments_many' => $dynamicTeamMemberNameCommentsManyText,
	'terms_taxonomy' => $dynamicTeamMemberNameTermsTaxonomy,
	'terms_separator' => $dynamicTeamMemberNameTermsSeparator,
	'link_enabled' => $dynamicTeamMemberNameEnableLink,
	'link_source' => $dynamicTeamMemberNameLinkSource,
]);

$team_member_designation_dyn = fb_compute_dynamic_text([
	'enabled' => $dynamicTeamMemberDesignationEnabled,
	'source' => $dynamicTeamMemberDesignationSource,
	'field' => $dynamicTeamMemberDesignationField,
	'post_id' => $dynamicTeamMemberDesignationPostId,
	'post_type' => $dynamicTeamMemberDesignationPostType,
	'featured_image_field' => $dynamicTeamMemberDesignationFeaturedImageField,
	'date_type' => $dynamicTeamMemberDesignationDateType,
	'date_format' => $dynamicTeamMemberDesignationDateFormat,
	'time_type' => $dynamicTeamMemberDesignationTimeType,
	'time_format' => $dynamicTeamMemberDesignationTimeFormat,
	'comments_zero' => $dynamicTeamMemberDesignationCommentsZeroText,
	'comments_one' => $dynamicTeamMemberDesignationCommentsOneText,
	'comments_many' => $dynamicTeamMemberDesignationCommentsManyText,
	'terms_taxonomy' => $dynamicTeamMemberDesignationTermsTaxonomy,
	'terms_separator' => $dynamicTeamMemberDesignationTermsSeparator,
	'link_enabled' => $dynamicTeamMemberDesignationEnableLink,
	'link_source' => $dynamicTeamMemberDesignationLinkSource,
]);

/* ---------- final values ---------- */
$dynamic_team_member_description = $dynamicDescriptionEnabled ? $description_dyn['value'] : $teamMemberDesc;
$dynamic_team_member_description_link_url = ($dynamicDescriptionEnabled && $dynamicDescriptionEnableLink) ? fb_norm_str($description_dyn['link_url']) : '';

$dynamic_team_member_name = $dynamicTeamMemberNameEnabled ? $team_member_name_dyn['value'] : $teamMemberName;
$dynamic_team_member_name_link_url = ($dynamicTeamMemberNameEnabled && $dynamicTeamMemberNameEnableLink) ? fb_norm_str($team_member_name_dyn['link_url']) : '';

$dynamic_team_member_designation = $dynamicTeamMemberDesignationEnabled ? $team_member_designation_dyn['value'] : $teamMemberDesignation;
$dynamic_team_member_designation_link_url = ($dynamicTeamMemberDesignationEnabled && $dynamicTeamMemberDesignationEnableLink) ? fb_norm_str($team_member_designation_dyn['link_url']) : '';

/* ---------- classes (must mirror save.js) ---------- */
$responsive_classes = [];
if ($teamMemberDesktopSwitcher)
	$responsive_classes[] = 'fb-desktop-responsive';
if ($teamMemberTabletSwitcher)
	$responsive_classes[] = 'fb-tablet-responsive';
if ($teamMemberMobileSwitcher)
	$responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['fb-team-member-main-wrapper', $blockID], $responsive_classes);

$wrapper_classes_arr = array_filter(array_map(function ($c) {
	return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => implode(' ', $wrapper_classes_arr),
]);

?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="fb-parent-wrapper fb-team-member-wrapper <?php echo esc_attr($blockID . ' ' . $teamMemberGlobalWraperClass); ?>"
		id="<?php echo esc_attr($teamMemberGlobalWraperID); ?>">
		<div class="fb-team-member-item">

			<?php if ($teamMemberBadgeSwitcher && $teamMemberBadgePosition === 'content'): ?>
				<div class="fb-team-member-badge-wrapper">
					<span class="fb-team-member-badge"><?php echo esc_html($teamMemberBadge); ?></span>
				</div>
			<?php endif; ?>

			<div class="fb-team-member-image-wrapper">
				<?php if ($teamMemberBadgeSwitcher && $teamMemberBadgePosition === 'image'): ?>
					<div class="fb-team-member-badge-wrapper">
						<span class="fb-team-member-badge"><?php echo esc_html($teamMemberBadge); ?></span>
					</div>
				<?php endif; ?>

				<div class="fb-team-member-image">
					<?php if ($teamMemberImageOverlaySwitcher): ?>
						<div class="fb-team-member-image-overlay"></div>
					<?php endif; ?>

					<?php if ($teamMemberImageUrl): ?>
						<img src="<?php echo esc_url($teamMemberImageUrl); ?>"
							alt="<?php echo esc_attr($teamMemberImageAlt); ?>" aria-hidden="true" />
					<?php endif; ?>

					<?php if ($teamMemberSocialProfileSwitcher && $teamMemberSocialType === 'image'): ?>
						<div class="fb-team-member-social-profile-wrapper">
							<?php if ($socialIconBtnSwitcher): ?>
								<button class="fb-team-member-social-icon-wrapper-btn"
									aria-label="<?php esc_attr_e('Social Icon', 'frontis-blocks'); ?>">
									<?php echo $socialIconBtnIcon ? $socialIconBtnIcon : ''; ?>
								</button>
							<?php endif; ?>

							<div class="fb-team-member-social-profile">
								<?php foreach ($teamMemberSocialItems as $it):
									$link = !empty($it['link']) ? esc_url($it['link']) : '#';
									$svg = isset($it['svg']) ? $it['svg'] : '';
									?>
									<a href="<?php echo $link; ?>" class="fb-team-member-social-icon"
										aria-label="<?php esc_attr_e('Social Icon', 'frontis-blocks'); ?>">
										<?php echo $svg; ?>
									</a>
								<?php endforeach; ?>
							</div>
						</div>
					<?php endif; ?>
				</div>
			</div>

			<div class="fb-team-member-content-wrapper">
				<div class="fb-team-member-content">

					<<?php echo esc_html($teamMemberNameHeadingTag); ?> class="fb-team-member-name">
						<?php if (!empty($dynamic_team_member_name_link_url)): ?>
							<a href="<?php echo esc_url($dynamic_team_member_name_link_url); ?>">
								<?php echo esc_html($dynamic_team_member_name); ?>
							</a>
						<?php else: ?>
							<?php echo esc_html($dynamic_team_member_name); ?>
						<?php endif; ?>
					</<?php echo esc_html($teamMemberNameHeadingTag); ?>>

					<span class="fb-team-member-designation">
						<?php if (!empty($dynamic_team_member_designation_link_url)): ?>
							<a href="<?php echo esc_url($dynamic_team_member_designation_link_url); ?>">
								<?php echo esc_html($dynamic_team_member_designation); ?>
							</a>
						<?php else: ?>
							<?php echo esc_html($dynamic_team_member_designation); ?>
						<?php endif; ?>
					</span>

					<?php if ($teamMemberDescSwitcher): ?>
						<p class="fb-team-member-desc">
							<?php if (!empty($dynamic_team_member_description_link_url)): ?>
								<a href="<?php echo esc_url($dynamic_team_member_description_link_url); ?>">
									<?php echo esc_html($dynamic_team_member_description); ?>
								</a>
							<?php else: ?>
								<?php echo esc_html($dynamic_team_member_description); ?>
							<?php endif; ?>
						</p>
					<?php endif; ?>

				</div>

				<?php if ($teamMemberSocialProfileSwitcher && $teamMemberSocialType === 'content'): ?>
					<?php
					$show_top_sep = (($teamMemberSocialPosition === 'top' || $teamMemberSocialPosition === 'bottom') && $teamMemberSocialProfileSeparatorPosition === 'top' && !empty($teamMemberSocialProfileSeparator));
					$show_bottom_sep = (($teamMemberSocialPosition === 'top' || $teamMemberSocialPosition === 'bottom') && $teamMemberSocialProfileSeparatorPosition === 'bottom' && !empty($teamMemberSocialProfileSeparator));
					?>

					<?php if ($show_top_sep): ?>
						<div class="fb-team-member-social-profile-separator">
							<hr />
						</div>
					<?php endif; ?>

					<div class="fb-team-member-social-profile-wrapper">
						<?php if ($socialIconBtnSwitcher): ?>
							<button class="fb-team-member-social-icon-wrapper-btn"
								aria-label="<?php esc_attr_e('Social Icon', 'frontis-blocks'); ?>">
								<?php echo $socialIconBtnIcon ? $socialIconBtnIcon : ''; ?>
							</button>
						<?php endif; ?>

						<div class="fb-team-member-social-profile">
							<?php foreach ($teamMemberSocialItems as $it):
								$link = !empty($it['link']) ? esc_url($it['link']) : '#';
								$svg = isset($it['svg']) ? $it['svg'] : '';
								?>
								<a href="<?php echo $link; ?>" class="fb-team-member-social-icon"
									aria-label="<?php esc_attr_e('Social Icon', 'frontis-blocks'); ?>">
									<?php echo $svg; ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>

					<?php if ($show_bottom_sep): ?>
						<div class="fb-team-member-social-profile-separator">
							<hr />
						</div>
					<?php endif; ?>
				<?php endif; ?>

			</div>
		</div>
	</div>
</div>