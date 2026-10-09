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

$block_id = fb_norm_str(isset($attributes['blockID']) ? $attributes['blockID'] : '');

$testimonial_preset_style = fb_norm_str(isset($attributes['TestimonialPresetStyle']) ? $attributes['TestimonialPresetStyle'] : 'preset-1');

$testimonial_image_switcher = isset($attributes['TestimonialImageSwitcher']) ? !empty($attributes['TestimonialImageSwitcher']) : true;
$testimonial_image_url = fb_norm_str(isset($attributes['TestimonialImageUrl']) ? $attributes['TestimonialImageUrl'] : '');
$testimonial_image_alt = fb_norm_str(isset($attributes['TestimonialImageAlt']) ? $attributes['TestimonialImageAlt'] : 'Testimonial Image');

$testimonial_alignment = fb_norm_str(isset($attributes['TestimonialAlignment']) ? $attributes['TestimonialAlignment'] : 'left');

$title_switcher = isset($attributes['TitleSwitcher']) ? !empty($attributes['TitleSwitcher']) : true;
$testimonial_title = fb_norm_str(isset($attributes['TestimonialTitle']) ? $attributes['TestimonialTitle'] : 'A game changer for us');
$testimonial_title_tag = fb_tag_whitelist(isset($attributes['TestimonialTitleTag']) ? $attributes['TestimonialTitleTag'] : 'h3', 'h3');

$desc_switcher = isset($attributes['DescSwitcher']) ? !empty($attributes['DescSwitcher']) : true;
$testimonial_desc = fb_norm_str(isset($attributes['TestimonialDesc']) ? $attributes['TestimonialDesc'] : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

$author_switcher = isset($attributes['AuthorSwitcher']) ? !empty($attributes['AuthorSwitcher']) : true;
$testimonial_author = fb_norm_str(isset($attributes['TestimonialAuthor']) ? $attributes['TestimonialAuthor'] : 'John Doe');

$designation_switcher = isset($attributes['DesignationSwitcher']) ? !empty($attributes['DesignationSwitcher']) : true;
$testimonial_designation = fb_norm_str(isset($attributes['TestimonialDesignation']) ? $attributes['TestimonialDesignation'] : 'CEO, Company Name');

$rating_switcher = isset($attributes['RatingSwitcher']) ? !empty($attributes['RatingSwitcher']) : true;
$testimonial_rating_number = isset($attributes['TestimonialRatingNumber']) ? intval($attributes['TestimonialRatingNumber']) : 5;
$testimonial_rating_icon_slug = isset($attributes['TestimonialRatingicon']) ? $attributes['TestimonialRatingicon'] : 'star';
$testimonial_rating_icon = isset($attributes['FrontendTestimonialRatingicon']) ? $attributes['FrontendTestimonialRatingicon'] : '';

$testimonial_rating_image_url = fb_norm_str(isset($attributes['TestimonialRatingImageUrl']) ? $attributes['TestimonialRatingImageUrl'] : '');
$testimonial_rating_image_alt = fb_norm_str(isset($attributes['TestimonialRatingImageAlt']) ? $attributes['TestimonialRatingImageAlt'] : '');

$testimonial_rating_icon_align = fb_norm_str(isset($attributes['TestimonialRatinIconAlign']) ? $attributes['TestimonialRatinIconAlign'] : 'icon');

$quote_icon_switcher = isset($attributes['QuoteIconSwitcher']) ? !empty($attributes['QuoteIconSwitcher']) : false;
$testimonial_quote_icon_slug = isset($attributes['TestimonialQuoteIcon']) ? $attributes['TestimonialQuoteIcon'] : 'quote-left';
$testimonial_quote_icon = isset($attributes['FrontendTestimonialQuoteIcon']) ? $attributes['FrontendTestimonialQuoteIcon'] : '';

$testimonial_quote_image_url = fb_norm_str(isset($attributes['TestimonialQuoteImageUrl']) ? $attributes['TestimonialQuoteImageUrl'] : '');
$testimonial_quote_image_alt = fb_norm_str(isset($attributes['TestimonialQuoteImageAlt']) ? $attributes['TestimonialQuoteImageAlt'] : '');

$testimonial_quote_icon_align = fb_norm_str(isset($attributes['TestimonialQuoteIconAlign']) ? $attributes['TestimonialQuoteIconAlign'] : 'icon');

$testimonial_global_wraper_id = fb_norm_str(isset($attributes['testimonialGlobalWraperID']) ? $attributes['testimonialGlobalWraperID'] : '');
$testimonial_global_wraper_class = fb_norm_str(isset($attributes['testimonialGlobalWraperClass']) ? $attributes['testimonialGlobalWraperClass'] : '');

$testimonial_desktop_switcher = isset($attributes['testimonialDesktopSwitcher']) ? !empty($attributes['testimonialDesktopSwitcher']) : false;
$testimonial_tablet_switcher = isset($attributes['testimonialTabletSwitcher']) ? !empty($attributes['testimonialTabletSwitcher']) : false;
$testimonial_mobile_switcher = isset($attributes['testimonialMobileSwitcher']) ? !empty($attributes['testimonialMobileSwitcher']) : false;

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

$dynamicAuthorNameEnabled = !empty($attributes['dynamicAuthorNameEnabled']);
$dynamicAuthorNameSource = fb_norm_str($attributes['dynamicAuthorNameSource'] ?? 'current_post');
$dynamicAuthorNamePostId = fb_norm_str($attributes['dynamicAuthorNamePostId'] ?? 0);
$dynamicAuthorNamePostType = fb_norm_str($attributes['dynamicAuthorNamePostType'] ?? '');
$dynamicAuthorNameField = fb_norm_str($attributes['dynamicAuthorNameField'] ?? 'post_title');
$dynamicAuthorNameFeaturedImageField = fb_norm_str($attributes['dynamicAuthorNameFeaturedImageField'] ?? 'title');
$dynamicAuthorNameDateType = fb_norm_str($attributes['dynamicAuthorNameDateType'] ?? '');
$dynamicAuthorNameDateFormat = fb_norm_str($attributes['dynamicAuthorNameDateFormat'] ?? '');
$dynamicAuthorNameTimeType = fb_norm_str($attributes['dynamicAuthorNameTimeType'] ?? '');
$dynamicAuthorNameTimeFormat = fb_norm_str($attributes['dynamicAuthorNameTimeFormat'] ?? '');
$dynamicAuthorNameCommentsZeroText = fb_norm_str($attributes['dynamicAuthorNameCommentsZeroText'] ?? '');
$dynamicAuthorNameCommentsOneText = fb_norm_str($attributes['dynamicAuthorNameCommentsOneText'] ?? '');
$dynamicAuthorNameCommentsManyText = fb_norm_str($attributes['dynamicAuthorNameCommentsManyText'] ?? '');
$dynamicAuthorNameTermsTaxonomy = fb_norm_str($attributes['dynamicAuthorNameTermsTaxonomy'] ?? 'category');
$dynamicAuthorNameTermsSeparator = fb_norm_str($attributes['dynamicAuthorNameTermsSeparator'] ?? '');
$dynamicAuthorNameEnableLink = !empty($attributes['dynamicAuthorNameEnableLink']);
$dynamicAuthorNameLinkSource = fb_norm_str($attributes['dynamicAuthorNameLinkSource'] ?? 'post_permalink');

$dynamicAuthorDesignationEnabled = !empty($attributes['dynamicAuthorDesignationEnabled']);
$dynamicAuthorDesignationSource = fb_norm_str($attributes['dynamicAuthorDesignationSource'] ?? 'current_post');
$dynamicAuthorDesignationPostId = fb_norm_str($attributes['dynamicAuthorDesignationPostId'] ?? 0);
$dynamicAuthorDesignationPostType = fb_norm_str($attributes['dynamicAuthorDesignationPostType'] ?? '');
$dynamicAuthorDesignationField = fb_norm_str($attributes['dynamicAuthorDesignationField'] ?? 'post_title');
$dynamicAuthorDesignationFeaturedImageField = fb_norm_str($attributes['dynamicAuthorDesignationFeaturedImageField'] ?? 'title');
$dynamicAuthorDesignationDateType = fb_norm_str($attributes['dynamicAuthorDesignationDateType'] ?? '');
$dynamicAuthorDesignationDateFormat = fb_norm_str($attributes['dynamicAuthorDesignationDateFormat'] ?? '');
$dynamicAuthorDesignationTimeType = fb_norm_str($attributes['dynamicAuthorDesignationTimeType'] ?? '');
$dynamicAuthorDesignationTimeFormat = fb_norm_str($attributes['dynamicAuthorDesignationTimeFormat'] ?? '');
$dynamicAuthorDesignationCommentsZeroText = fb_norm_str($attributes['dynamicAuthorDesignationCommentsZeroText'] ?? '');
$dynamicAuthorDesignationCommentsOneText = fb_norm_str($attributes['dynamicAuthorDesignationCommentsOneText'] ?? '');
$dynamicAuthorDesignationCommentsManyText = fb_norm_str($attributes['dynamicAuthorDesignationCommentsManyText'] ?? '');
$dynamicAuthorDesignationTermsTaxonomy = fb_norm_str($attributes['dynamicAuthorDesignationTermsTaxonomy'] ?? 'category');
$dynamicAuthorDesignationTermsSeparator = fb_norm_str($attributes['dynamicAuthorDesignationTermsSeparator'] ?? '');
$dynamicAuthorDesignationEnableLink = !empty($attributes['dynamicAuthorDesignationEnableLink']);
$dynamicAuthorDesignationLinkSource = fb_norm_str($attributes['dynamicAuthorDesignationLinkSource'] ?? 'post_permalink');

/* ---------- compute dynamics ---------- */
$title_dyn = fb_compute_dynamic_text([
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

$author_name_dyn = fb_compute_dynamic_text([
	'enabled' => $dynamicAuthorNameEnabled,
	'source' => $dynamicAuthorNameSource,
	'field' => $dynamicAuthorNameField,
	'post_id' => $dynamicAuthorNamePostId,
	'post_type' => $dynamicAuthorNamePostType,
	'featured_image_field' => $dynamicAuthorNameFeaturedImageField,
	'date_type' => $dynamicAuthorNameDateType,
	'date_format' => $dynamicAuthorNameDateFormat,
	'time_type' => $dynamicAuthorNameTimeType,
	'time_format' => $dynamicAuthorNameTimeFormat,
	'comments_zero' => $dynamicAuthorNameCommentsZeroText,
	'comments_one' => $dynamicAuthorNameCommentsOneText,
	'comments_many' => $dynamicAuthorNameCommentsManyText,
	'terms_taxonomy' => $dynamicAuthorNameTermsTaxonomy,
	'terms_separator' => $dynamicAuthorNameTermsSeparator,
	'link_enabled' => $dynamicAuthorNameEnableLink,
	'link_source' => $dynamicAuthorNameLinkSource,
]);

$author_designation_dyn = fb_compute_dynamic_text([
	'enabled' => $dynamicAuthorDesignationEnabled,
	'source' => $dynamicAuthorDesignationSource,
	'field' => $dynamicAuthorDesignationField,
	'post_id' => $dynamicAuthorDesignationPostId,
	'post_type' => $dynamicAuthorDesignationPostType,
	'featured_image_field' => $dynamicAuthorDesignationFeaturedImageField,
	'date_type' => $dynamicAuthorDesignationDateType,
	'date_format' => $dynamicAuthorDesignationDateFormat,
	'time_type' => $dynamicAuthorDesignationTimeType,
	'time_format' => $dynamicAuthorDesignationTimeFormat,
	'comments_zero' => $dynamicAuthorDesignationCommentsZeroText,
	'comments_one' => $dynamicAuthorDesignationCommentsOneText,
	'comments_many' => $dynamicAuthorDesignationCommentsManyText,
	'terms_taxonomy' => $dynamicAuthorDesignationTermsTaxonomy,
	'terms_separator' => $dynamicAuthorDesignationTermsSeparator,
	'link_enabled' => $dynamicAuthorDesignationEnableLink,
	'link_source' => $dynamicAuthorDesignationLinkSource,
]);

/* ---------- final values ---------- */
$dynamic_testimonial_title = $dynamicTitleEnabled ? $title_dyn['value'] : $testimonial_title;
$dynamic_testimonial_title_link_url = ($dynamicTitleEnabled && $dynamicTitleEnableLink) ? fb_norm_str($title_dyn['link_url']) : '';

$dynamic_testimonial_description = $dynamicDescriptionEnabled ? $description_dyn['value'] : $testimonial_desc;
$dynamic_testimonial_description_link_url = ($dynamicDescriptionEnabled && $dynamicDescriptionEnableLink) ? fb_norm_str($description_dyn['link_url']) : '';

$dynamic_testimonial_author_name = $dynamicAuthorNameEnabled ? $author_name_dyn['value'] : $testimonial_author;
$dynamic_testimonial_author_name_link_url = ($dynamicAuthorNameEnabled && $dynamicAuthorNameEnableLink) ? fb_norm_str($author_name_dyn['link_url']) : '';

$dynamic_testimonial_author_designation = $dynamicAuthorDesignationEnabled ? $author_designation_dyn['value'] : $testimonial_designation;
$dynamic_testimonial_author_designation_link_url = ($dynamicAuthorDesignationEnabled && $dynamicAuthorDesignationEnableLink) ? fb_norm_str($author_designation_dyn['link_url']) : '';

/* ---------- classes (must mirror save.js) ---------- */
$responsive_classes = [];
if ($testimonial_desktop_switcher)
	$responsive_classes[] = 'fb-desktop-responsive';
if ($testimonial_tablet_switcher)
	$responsive_classes[] = 'fb-tablet-responsive';
if ($testimonial_mobile_switcher)
	$responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['fb-testimonial-main-wrapper', $block_id], $responsive_classes);

$wrapper_classes_arr = array_filter(array_map(function ($c) {
	return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => implode(' ', $wrapper_classes_arr),
]);

/* Helper: render rating icons (icon | image), mirrors save.js */
$render_rating_icons = function () use ($testimonial_rating_number, $testimonial_rating_icon_align, $testimonial_rating_icon, $testimonial_rating_icon_slug, $testimonial_rating_image_url, $testimonial_rating_image_alt) {
	$count = max(0, (int) $testimonial_rating_number);
	if ($count === 0 || $testimonial_rating_icon_align === 'none') {
		return '';
	}

	$out = '';
	for ($i = 0; $i < $count; $i++) {
		$out .= '<div class="fb-testimonial-rating-icon">';
		if ($testimonial_rating_icon_align === 'icon' && (!empty($testimonial_rating_icon) || !empty($testimonial_rating_icon_slug))) {
			$out .= Helper::render_icon($testimonial_rating_icon_slug, ['fallback' => $testimonial_rating_icon]);
		} elseif ($testimonial_rating_icon_align === 'image' && !empty($testimonial_rating_image_url)) {
			$out .= '<img src="' . esc_url($testimonial_rating_image_url) . '" alt="' . esc_attr($testimonial_rating_image_alt) . '" loading="lazy" decoding="async" />';
		}
		$out .= '</div>';
	}
	return $out;
};

?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="fb-parent-wrapper fb-testimonial-section fb-testimonial-section-<?php echo esc_attr($testimonial_alignment); ?> <?php echo esc_attr($testimonial_global_wraper_class); ?>"
		id="<?php echo esc_attr($testimonial_global_wraper_id); ?>">
		<div class="fb-testimonial-wrapper">
			<div class="fb-testimonial-inner-wrapper">
				<div class="fb-testimonial-container">

					<?php if ($testimonial_preset_style === 'preset-4'): ?>

						<div class="fb-testimonial-author-container">
							<div class="fb-testimonial-author-inner-container">
								<div class="fb-testimonial-author-image-container">
									<?php if ($testimonial_image_switcher && $testimonial_image_url): ?>
										<div class="fb-testimonial-image">
											<img src="<?php echo esc_url($testimonial_image_url); ?>"
												alt="<?php echo esc_attr($testimonial_image_alt); ?>" aria-hidden="true" />
										</div>
									<?php endif; ?>
								</div>
								<div class="fb-testimonial-userinfo-container">
									<?php if ($author_switcher): ?>
										<div class="fb-user">
											<?php if (!empty($dynamic_testimonial_author_name_link_url)): ?>
												<a href="<?php echo esc_url($dynamic_testimonial_author_name_link_url); ?>">
													<?php echo esc_html($dynamic_testimonial_author_name); ?>
												</a>
											<?php else: ?>
												<?php echo esc_html($dynamic_testimonial_author_name); ?>
											<?php endif; ?>
										</div>
									<?php endif; ?>

									<?php if ($designation_switcher): ?>
										<span class="fb-user-designation">
											<?php if (!empty($dynamic_testimonial_author_designation_link_url)): ?>
												<a href="<?php echo esc_url($dynamic_testimonial_author_designation_link_url); ?>">
													<?php echo esc_html($dynamic_testimonial_author_designation); ?>
												</a>
											<?php else: ?>
												<?php echo esc_html($dynamic_testimonial_author_designation); ?>
											<?php endif; ?>
										</span>
									<?php endif; ?>
								</div>
							</div>
						</div>

						<?php if ($rating_switcher && $testimonial_rating_icon_align !== 'none'): ?>
							<div class="fb-testimonial-rating">
								<?php echo $render_rating_icons(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</div>
						<?php endif; ?>

						<?php if ($title_switcher): ?>
							<div class="fb-testimonial-title-container">
								<<?php echo esc_html($testimonial_title_tag); ?> class="fb-testimonial-title">
									<?php if (!empty($dynamic_testimonial_title_link_url)): ?>
										<a href="<?php echo esc_url($dynamic_testimonial_title_link_url); ?>">
											<?php echo esc_html($dynamic_testimonial_title); ?>
										</a>
									<?php else: ?>
										<?php echo esc_html($dynamic_testimonial_title); ?>
									<?php endif; ?>
								</<?php echo esc_html($testimonial_title_tag); ?>>
							</div>
						<?php endif; ?>

						<?php if ($desc_switcher): ?>
							<div class="fb-testimonial-userdesc-container">
								<p class="fb-user-desc">
									<?php if (!empty($dynamic_testimonial_description_link_url)): ?>
										<a href="<?php echo esc_url($dynamic_testimonial_description_link_url); ?>">
											<?php echo wp_kses_post($dynamic_testimonial_description); ?>
										</a>
									<?php else: ?>
										<?php echo wp_kses_post($dynamic_testimonial_description); ?>
									<?php endif; ?>
								</p>
							</div>
						<?php endif; ?>

						<?php if ($quote_icon_switcher): ?>
							<?php if ($testimonial_quote_icon_align === 'icon' && !empty($testimonial_quote_icon)): ?>
								<div class="fb-testimonial-quote-icon">
									<?php 
									$testimonial_quote_icon_html = Helper::render_icon($testimonial_quote_icon_slug);
									if ($testimonial_quote_icon_html) {
										echo $testimonial_quote_icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									} else {
										echo $testimonial_quote_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									}
									?>
								</div>
							<?php elseif ($testimonial_quote_icon_align === 'image' && !empty($testimonial_quote_image_url)): ?>
								<div class="fb-testimonial-quote-icon">
									<img src="<?php echo esc_url($testimonial_quote_image_url); ?>" alt="<?php echo esc_attr($testimonial_quote_image_alt); ?>" aria-hidden="true" />
								</div>
							<?php endif; ?>
						<?php endif; ?>

					<?php elseif ($testimonial_preset_style === 'preset-5'): ?>

						<?php if ($title_switcher): ?>
							<div class="fb-testimonial-title-container">
								<<?php echo esc_html($testimonial_title_tag); ?> class="fb-testimonial-title">
									<?php if (!empty($dynamic_testimonial_title_link_url)): ?>
										<a href="<?php echo esc_url($dynamic_testimonial_title_link_url); ?>">
											<?php echo esc_html($dynamic_testimonial_title); ?>
										</a>
									<?php else: ?>
										<?php echo esc_html($dynamic_testimonial_title); ?>
									<?php endif; ?>
								</<?php echo esc_html($testimonial_title_tag); ?>>
							</div>
						<?php endif; ?>

						<?php if ($desc_switcher): ?>
							<div class="fb-testimonial-userdesc-container">
								<p class="fb-user-desc">
									<?php if (!empty($dynamic_testimonial_description_link_url)): ?>
										<a href="<?php echo esc_url($dynamic_testimonial_description_link_url); ?>">
											<?php echo wp_kses_post($dynamic_testimonial_description); ?>
										</a>
									<?php else: ?>
										<?php echo wp_kses_post($dynamic_testimonial_description); ?>
									<?php endif; ?>
								</p>
							</div>
						<?php endif; ?>

						<div class="fb-testimonial-author-container <?php echo esc_attr($testimonial_alignment); ?>">
							<div class="fb-testimonial-author-inner-container">
								<div class="fb-testimonial-author-image-container">
									<?php if ($testimonial_image_switcher && $testimonial_image_url): ?>
										<div class="fb-testimonial-image">
											<img src="<?php echo esc_url($testimonial_image_url); ?>"
												alt="<?php echo esc_attr($testimonial_image_alt); ?>" aria-hidden="true" />
										</div>
									<?php endif; ?>
								</div>
								<div class="fb-testimonial-userinfo-container">
									<?php if ($author_switcher): ?>
										<div class="fb-user">
											<?php if (!empty($dynamic_testimonial_author_name_link_url)): ?>
												<a href="<?php echo esc_url($dynamic_testimonial_author_name_link_url); ?>">
													<?php echo esc_html($dynamic_testimonial_author_name); ?>
												</a>
											<?php else: ?>
												<?php echo esc_html($dynamic_testimonial_author_name); ?>
											<?php endif; ?>
										</div>
									<?php endif; ?>
									<?php if ($designation_switcher): ?>
										<span class="fb-user-designation">
											<?php if (!empty($dynamic_testimonial_author_designation_link_url)): ?>
												<a href="<?php echo esc_url($dynamic_testimonial_author_designation_link_url); ?>">
													<?php echo esc_html($dynamic_testimonial_author_designation); ?>
												</a>
											<?php else: ?>
												<?php echo esc_html($dynamic_testimonial_author_designation); ?>
											<?php endif; ?>
										</span>
									<?php endif; ?>
								</div>
							</div>

							<?php if ($rating_switcher && $testimonial_rating_icon_align !== 'none'): ?>
								<div class="fb-testimonial-rating">
									<?php echo $render_rating_icons(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
								</div>
							<?php endif; ?>
						</div>

						<?php if ($quote_icon_switcher): ?>
							<?php if ($testimonial_quote_icon_align === 'icon' && !empty($testimonial_quote_icon)): ?>
								<div class="fb-testimonial-quote-icon">
									<?php 
									$testimonial_quote_icon_html = Helper::render_icon($testimonial_quote_icon_slug);
									if ($testimonial_quote_icon_html) {
										echo $testimonial_quote_icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									} else {
										echo $testimonial_quote_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									}
									?>
								</div>
							<?php elseif ($testimonial_quote_icon_align === 'image' && !empty($testimonial_quote_image_url)): ?>
								<div class="fb-testimonial-quote-icon">
									<img src="<?php echo esc_url($testimonial_quote_image_url); ?>" alt="<?php echo esc_attr($testimonial_quote_image_alt); ?>" aria-hidden="true" />
								</div>
							<?php endif; ?>
						<?php endif; ?>

					<?php else: ?>

						<?php if ($rating_switcher && $testimonial_rating_icon_align !== 'none'): ?>
							<div class="fb-testimonial-rating">
								<?php echo $render_rating_icons(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</div>
						<?php endif; ?>

						<?php if ($title_switcher): ?>
							<div class="fb-testimonial-title-container">
								<<?php echo esc_html($testimonial_title_tag); ?> class="fb-testimonial-title">
									<?php if (!empty($dynamic_testimonial_title_link_url)): ?>
										<a href="<?php echo esc_url($dynamic_testimonial_title_link_url); ?>">
											<?php echo esc_html($dynamic_testimonial_title); ?>
										</a>
									<?php else: ?>
										<?php echo esc_html($dynamic_testimonial_title); ?>
									<?php endif; ?>
								</<?php echo esc_html($testimonial_title_tag); ?>>
							</div>
						<?php endif; ?>

						<?php if ($desc_switcher): ?>
							<div class="fb-testimonial-userdesc-container">
								<p class="fb-user-desc">
									<?php if (!empty($dynamic_testimonial_description_link_url)): ?>
										<a href="<?php echo esc_url($dynamic_testimonial_description_link_url); ?>">
											<?php echo wp_kses_post($dynamic_testimonial_description); ?>
										</a>
									<?php else: ?>
										<?php echo wp_kses_post($dynamic_testimonial_description); ?>
									<?php endif; ?>
								</p>
							</div>
						<?php endif; ?>

						<div class="fb-testimonial-author-container <?php echo esc_attr($testimonial_alignment); ?>">
							<div class="fb-testimonial-author-inner-container">
								<div class="fb-testimonial-author-image-container">
									<?php if ($testimonial_image_switcher && $testimonial_image_url): ?>
										<div class="fb-testimonial-image">
											<img src="<?php echo esc_url($testimonial_image_url); ?>"
												alt="<?php echo esc_attr($testimonial_image_alt); ?>" aria-hidden="true" />
										</div>
									<?php endif; ?>
								</div>
								<div class="fb-testimonial-userinfo-container">
									<?php if ($author_switcher): ?>
										<div class="fb-user">
											<?php if (!empty($dynamic_testimonial_author_name_link_url)): ?>
												<a href="<?php echo esc_url($dynamic_testimonial_author_name_link_url); ?>">
													<?php echo esc_html($dynamic_testimonial_author_name); ?>
												</a>
											<?php else: ?>
												<?php echo esc_html($dynamic_testimonial_author_name); ?>
											<?php endif; ?>
										</div>
									<?php endif; ?>
									<?php if ($designation_switcher): ?>
										<span class="fb-user-designation">
											<?php if (!empty($dynamic_testimonial_author_designation_link_url)): ?>
												<a href="<?php echo esc_url($dynamic_testimonial_author_designation_link_url); ?>">
													<?php echo esc_html($dynamic_testimonial_author_designation); ?>
												</a>
											<?php else: ?>
												<?php echo esc_html($dynamic_testimonial_author_designation); ?>
											<?php endif; ?>
										</span>
									<?php endif; ?>
								</div>
							</div>
						</div>

						<?php if ($quote_icon_switcher): ?>
							<?php if ($testimonial_quote_icon_align === 'icon' && !empty($testimonial_quote_icon)): ?>
								<div class="fb-testimonial-quote-icon">
									<?php 
									$testimonial_quote_icon_html = Helper::render_icon($testimonial_quote_icon_slug);
									if ($testimonial_quote_icon_html) {
										echo $testimonial_quote_icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									} else {
										echo $testimonial_quote_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									}
									?>
								</div>
							<?php elseif ($testimonial_quote_icon_align === 'image' && !empty($testimonial_quote_image_url)): ?>
								<div class="fb-testimonial-quote-icon">
									<img src="<?php echo esc_url($testimonial_quote_image_url); ?>" alt="<?php echo esc_attr($testimonial_quote_image_alt); ?>" aria-hidden="true" />
								</div>
							<?php endif; ?>
						<?php endif; ?>

					<?php endif; ?>

				</div>
			</div>
		</div>
	</div>
</div>