<?php

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Utils\Helper;

/* ---------- helpers ---------- */
if ( ! function_exists('fb_norm_str') ) {
    function fb_norm_str($val, $default = '') {
        if (is_array($val)) {
            $val = implode(' ', array_filter(array_map('strval', $val)));
        }
        if ($val === null) return $default;
        return (string) $val;
    }
}

if ( ! function_exists('fb_tag_whitelist') ) {
    function fb_tag_whitelist($tag, $fallback = 'div') {
        $allowed = ['h1','h2','h3','h4','h5','h6','p','div','span'];
        $tag = strtolower(fb_norm_str($tag, $fallback));
        return in_array($tag, $allowed, true) ? $tag : $fallback;
    }
}

if ( ! function_exists('fb_get_plain_text') ) {
	function fb_get_plain_text( $html ) {
		$raw = (string) ( $html ?? '' );
		$decoded = wp_specialchars_decode( $raw, ENT_QUOTES );
		$decoded = html_entity_decode( $decoded, ENT_QUOTES, 'UTF-8' );
		$txt = wp_strip_all_tags( $decoded, true );
		$txt = preg_replace( '/\x{00A0}/u', ' ', $txt );
		$txt = preg_replace( '/[\x{200B}-\x{200D}\x{FEFF}]/u', '', $txt );
		$txt = preg_replace( '/\s{2,}/', ' ', $txt );
		return trim( (string) $txt );
	}
}

if ( ! function_exists('fb_humanize_date') ) {
	function fb_humanize_date( $date ) {
		if ( ! $date ) return '';
		$timestamp = is_numeric( $date ) ? (int) $date : strtotime( (string) $date );
		if ( ! $timestamp ) return '';
		$diff = time() - $timestamp;
		$abs  = abs( $diff );

		$units = [
			'year'   => 31536000,
			'month'  => 2592000,
			'week'   => 604800,
			'day'    => 86400,
			'hour'   => 3600,
			'minute' => 60,
			'second' => 1,
		];
		foreach ( $units as $u => $s ) {
			$v = floor( $abs / $s );
			if ( $v >= 1 ) {
				if ( $diff >= 0 ) {
					switch ( $u ) {
						case 'year':
							/* translators: %d: number of years */
							return sprintf( _n( '%d year ago', '%d years ago', $v, 'frontis-blocks' ), $v );
						case 'month':
							/* translators: %d: number of months */
							return sprintf( _n( '%d month ago', '%d months ago', $v, 'frontis-blocks' ), $v );
						case 'week':
							/* translators: %d: number of weeks */
							return sprintf( _n( '%d week ago', '%d weeks ago', $v, 'frontis-blocks' ), $v );
						case 'day':
							/* translators: %d: number of days */
							return sprintf( _n( '%d day ago', '%d days ago', $v, 'frontis-blocks' ), $v );
						case 'hour':
							/* translators: %d: number of hours */
							return sprintf( _n( '%d hour ago', '%d hours ago', $v, 'frontis-blocks' ), $v );
						case 'minute':
							/* translators: %d: number of minutes */
							return sprintf( _n( '%d minute ago', '%d minutes ago', $v, 'frontis-blocks' ), $v );
						case 'second':
							/* translators: %d: number of seconds */
							return sprintf( _n( '%d second ago', '%d seconds ago', $v, 'frontis-blocks' ), $v );
					}
				} else {
					switch ( $u ) {
						case 'year':
							/* translators: %d: number of years */
							return sprintf( _n( 'in %d year', 'in %d years', $v, 'frontis-blocks' ), $v );
						case 'month':
							/* translators: %d: number of months */
							return sprintf( _n( 'in %d month', 'in %d months', $v, 'frontis-blocks' ), $v );
						case 'week':
							/* translators: %d: number of weeks */
							return sprintf( _n( 'in %d week', 'in %d weeks', $v, 'frontis-blocks' ), $v );
						case 'day':
							/* translators: %d: number of days */
							return sprintf( _n( 'in %d day', 'in %d days', $v, 'frontis-blocks' ), $v );
						case 'hour':
							/* translators: %d: number of hours */
							return sprintf( _n( 'in %d hour', 'in %d hours', $v, 'frontis-blocks' ), $v );
						case 'minute':
							/* translators: %d: number of minutes */
							return sprintf( _n( 'in %d minute', 'in %d minutes', $v, 'frontis-blocks' ), $v );
						case 'second':
							/* translators: %d: number of seconds */
							return sprintf( _n( 'in %d second', 'in %d seconds', $v, 'frontis-blocks' ), $v );
					}
				}
			}
		}
		return __( 'just now', 'frontis-blocks' );
	}
}

if ( ! function_exists('fb_get_site_date_format') ) {
	function fb_get_site_date_format() {
		$fmt = get_option( 'date_format' );
		return $fmt ? $fmt : 'F j, Y';
	}
}
if ( ! function_exists('fb_get_site_time_format') ) {
	function fb_get_site_time_format() {
		$fmt = get_option( 'time_format' );
		return $fmt ? $fmt : 'g:i a';
	}
}

/* ---------- dynamic compute (reusable) ---------- */
/**
 * @param array $args
 * @return array{ value: string, link_url: string, permalink: string }
 */
if ( ! function_exists('fb_compute_dynamic_text') ) {
	function fb_compute_dynamic_text( $args ) {
		$enabled                  = ! empty( $args['enabled'] );
		$source                   = fb_norm_str( $args['source'] ?? 'current_post' );
		$field                    = fb_norm_str( $args['field'] ?? 'post_title' );

		$post_id_in               = fb_norm_str( $args['post_id'] ?? 0 );
		$post_type_in             = fb_norm_str( $args['post_type'] ?? '' );
		$featured_image_field     = fb_norm_str( $args['featured_image_field'] ?? 'title' );

		$date_type                = fb_norm_str( $args['date_type'] ?? 'published' );
		$date_format              = fb_norm_str( $args['date_format'] ?? 'default' );
		$time_type                = fb_norm_str( $args['time_type'] ?? 'published' );
		$time_format              = fb_norm_str( $args['time_format'] ?? 'default' );

		$cm_zero                  = fb_norm_str( $args['comments_zero'] ?? '' );
		$cm_one                   = fb_norm_str( $args['comments_one'] ?? '' );
		$cm_many                  = fb_norm_str( $args['comments_many'] ?? '' );

		$terms_tax                = fb_norm_str( $args['terms_taxonomy'] ?? 'category' );
		$terms_sep                = fb_norm_str( $args['terms_separator'] ?? '' );

		$link_enabled             = ! empty( $args['link_enabled'] );
		$link_source              = fb_norm_str( $args['link_source'] ?? 'post_permalink' );

		$out_value = '';
		$link_url  = '';
		$permalink = '';

		if ( ! $enabled ) {
			return [ 'value' => '', 'link_url' => '', 'permalink' => '' ];
		}

		$is_site_field    = in_array( $source, ['site_title','site_tagline'], true );
		$is_archive_field = in_array( $source, ['archive_title','archive_description'], true );
		$is_post_based    = in_array( $source, ['current_post','post_type'], true );

		$target_post_id   = ($source === 'post_type' && $post_id_in) ? (int) $post_id_in : get_the_ID();
		$target_post_type = ($source === 'post_type' && $post_type_in) ? $post_type_in : get_post_type( $target_post_id );

		if ( $is_site_field ) {
			if ( $source === 'site_title' ) {
				$out_value = fb_get_plain_text( get_bloginfo( 'name' ) ?: __( 'No Content', 'frontis-blocks' ) );
			} else {
				$out_value = fb_get_plain_text( get_bloginfo( 'description' ) ?: __( 'No Content', 'frontis-blocks' ) );
			}
		}
		elseif ( $is_archive_field ) {
			if ( $source === 'archive_title' ) {
				$out_value = fb_get_plain_text( get_the_archive_title() ?: __( 'No Content', 'frontis-blocks' ) );
			} else {
				$out_value = fb_get_plain_text( get_the_archive_description() ?: __( 'No Content', 'frontis-blocks' ) );
			}
		}
		elseif ( $is_post_based && $target_post_id ) {
			$_post = get_post( $target_post_id );
			if ( $_post && ! is_wp_error( $_post ) ) {
				$permalink = get_permalink( $_post );
			}

			switch ( $field ) {
				case 'post_title':
					$out_value = fb_get_plain_text( $_post ? get_the_title( $_post ) : '' );
					break;

				case 'post_excerpt':
					if ( $_post ) {
						$raw = has_excerpt( $_post ) ? $_post->post_excerpt : '';
						$out_value = $raw ? fb_get_plain_text( $raw ) : __( 'No Content', 'frontis-blocks' );
					}
					break;

				case 'post_thumbnail':
					$thumb_id = $_post ? get_post_thumbnail_id( $_post ) : 0;
					if ( ! $thumb_id ) { $out_value = __( 'No Content', 'frontis-blocks' ); break; }
					$sub = $featured_image_field ?: 'attachment_url';
					switch ( $sub ) {
						case 'title':
							$out_value = fb_get_plain_text( get_the_title( $thumb_id ) ) ?: __( 'No Content', 'frontis-blocks' );
							break;
						case 'alt':
							$out_value = fb_get_plain_text( get_post_meta( $thumb_id, '_wp_attachment_image_alt', true ) ) ?: __( 'No Content', 'frontis-blocks' );
							break;
						case 'caption':
							$out_value = fb_get_plain_text( wp_get_attachment_caption( $thumb_id ) ) ?: __( 'No Content', 'frontis-blocks' );
							break;
						case 'description':
							$att = get_post( $thumb_id );
							$out_value = fb_get_plain_text( $att ? $att->post_content : '' ) ?: __( 'No Content', 'frontis-blocks' );
							break;
						case 'attachment_url':
						default:
							$out_value = wp_get_attachment_url( $thumb_id ) ?: __( 'No Content', 'frontis-blocks' );
							break;
					}
					break;

				case 'post_date':
					$raw = ($date_type === 'modified') ? get_post_modified_time( 'U', true, $_post ) : get_post_time( 'U', true, $_post );
					if ( ! $raw ) { $out_value = __( 'No Content', 'frontis-blocks' ); break; }
					switch ( $date_format ) {
						case 'jS F Y':
						case 'Y-m-d':
						case 'm/d/Y':
						case 'd/m/Y':
							$out_value = date_i18n( $date_format, (int) $raw );
							break;
						case 'human':
							$out_value = fb_humanize_date( (int) $raw );
							break;
						default:
							$out_value = date_i18n( fb_get_site_date_format(), (int) $raw );
							break;
					}
					break;

				case 'post_time':
					$raw = ($time_type === 'modified') ? get_post_modified_time( 'U', true, $_post ) : get_post_time( 'U', true, $_post );
					if ( ! $raw ) { $out_value = __( 'No Content', 'frontis-blocks' ); break; }
					$fmt = $time_format && $time_format !== 'default' ? $time_format : fb_get_site_time_format();
					$out_value = date_i18n( $fmt, (int) $raw );
					break;

				case 'post_terms':
					$tax = $terms_tax ?: '';
					if ( ! $tax ) { $out_value = __( 'No Content', 'frontis-blocks' ); break; }
					$terms = get_the_terms( $_post, $tax );
					if ( is_wp_error( $terms ) || empty( $terms ) ) { $out_value = __( 'No Content', 'frontis-blocks' ); break; }
					$sep = $terms_sep !== '' ? $terms_sep : ', ';
					$out_value = implode( $sep, wp_list_pluck( $terms, 'name' ) );
					break;

				case 'post_id':
					$out_value = $_post ? (string) $_post->ID : '';
					break;

				case 'comments_number':
					$count = ($_post instanceof WP_Post) ? get_comments_number( $_post ) : 0;
					$count = is_numeric( $count ) ? (int) $count : 0;
					$zeroTxt = trim( $cm_zero ?: __( 'No Responses', 'frontis-blocks' ) );
					$oneTxt  = trim( $cm_one  ?: __( 'One Response',  'frontis-blocks' ) );
					$manyTxt = trim( $cm_many ?: __( 'Responses {num}', 'frontis-blocks' ) );
					if ( $count === 0 )        $out_value = $zeroTxt;
					elseif ( $count === 1 )    $out_value = $oneTxt;
					else                       $out_value = (strpos($manyTxt,'{num}') !== false) ? str_replace('{num}', (string)$count, $manyTxt) : $manyTxt;
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
					if ( ! $author_id ) { $out_value = __( 'No Content', 'frontis-blocks' ); break; }
					switch ( $field ) {
						case 'author_name':
							$val = fb_get_plain_text( get_the_author_meta( 'display_name', $author_id ) );
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_first_name':
							$val = fb_get_plain_text( get_the_author_meta( 'first_name', $author_id ) );
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_last_name':
							$val = fb_get_plain_text( get_the_author_meta( 'last_name', $author_id ) );
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_nickname':
							$val = fb_get_plain_text( get_the_author_meta( 'nickname', $author_id ) );
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_description':
							$val = fb_get_plain_text( get_the_author_meta( 'description', $author_id ) );
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_email':
							$raw = get_the_author_meta( 'email', $author_id );
							$val = is_string( $raw ) ? trim( $raw ) : '';
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_url':
							$raw = get_the_author_meta( 'url', $author_id );
							$val = is_string( $raw ) ? trim( $raw ) : '';
							$out_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
							break;
						case 'author_avatar':
							$val = get_avatar_url( $author_id, [ 'size' => 96 ] );
							$out_value = $val ? $val : __( 'No Content', 'frontis-blocks' );
							break;
					}
					break;

				default:
					$out_value = '';
			}

			// Link compute
			if ( $link_enabled ) {
				switch ( $link_source ) {
					case 'post_permalink':
						$link_url = $permalink ?: '';
						break;
					case 'comments_area':
						$link_url = $_post ? get_comments_link( $_post ) : '';
						break;
					case 'featured_image':
						$link_url = $_post ? ( get_the_post_thumbnail_url( $_post, 'full' ) ?: '' ) : '';
						break;
					case 'avatar_profile_url':
						$author_id = $_post ? (int) $_post->post_author : 0;
						$link_url = $author_id ? ( get_avatar_url( $author_id ) ?: '' ) : '';
						break;
					case 'author_page_url':
						$pt = $_post ? get_post_type( $_post ) : ( $target_post_type ?: '' );
						$link_url = $pt ? ( get_post_type_archive_link( $pt ) ?: '' ) : '';
						break;
					case 'archive_url':
						$author_id = $_post ? (int) $_post->post_author : 0;
						$link_url = $author_id ? get_author_posts_url( $author_id ) : '';
						break;
					default:
						$link_url = '';
				}
			}
		}

		return [
			'value'     => $out_value,
			'link_url'  => $link_url,
			'permalink' => $permalink,
		];
	}
}

/* ---------- extract & normalize (attributes) with DEFAULTS ---------- */
$blockID                 = fb_norm_str( isset($attributes['blockID']) ? $attributes['blockID'] : '' );

$ButtonAlignment         = fb_norm_str( isset($attributes['ButtonAlignment']) ? $attributes['ButtonAlignment'] : 'start' );
$ButtonText              = fb_norm_str( isset($attributes['ButtonText']) ? $attributes['ButtonText'] : 'Button One' );
$ButtonUrl               = fb_norm_str( isset($attributes['ButtonUrl']) ? $attributes['ButtonUrl'] : '' );
$ButtonTargetUrl         = ! empty( $attributes['ButtonTargetUrl'] );
$buttonIcon              = isset($attributes['ButtonIcon']) ? $attributes['ButtonIcon'] : '';
$frontendButtonIcon     = isset($attributes['frontendButtonIcon']) ? $attributes['frontendButtonIcon'] : '';
$buttonIconHtml          = Helper::render_icon( $buttonIcon, ['fallback' => $frontendButtonIcon] );
$buttonIconAlign        = isset($attributes['buttonIconAlign']) ? $attributes['buttonIconAlign'] : 'none';

$ButtonTwoText          = fb_norm_str( isset($attributes['ButtonTwoText']) ? $attributes['ButtonTwoText'] : 'Button Two' );
$ButtonTwoUrl           = fb_norm_str( isset($attributes['ButtonTwoUrl']) ? $attributes['ButtonTwoUrl'] : '' );
$ButtonTwoTargetUrl     = ! empty( $attributes['ButtonTwoTargetUrl'] );
$buttonTwoIcon          = isset($attributes['ButtonTwoIcon']) ? $attributes['ButtonTwoIcon'] : '';
$frontendButtonTwoIcon  = isset($attributes['frontendButtonTwoIcon']) ? $attributes['frontendButtonTwoIcon'] : '';
$buttonTwoIconHtml      = Helper::render_icon( $buttonTwoIcon, ['fallback' => $frontendButtonTwoIcon] );
$buttonTwoIconAlign     = isset($attributes['buttonTwoIconAlign']) ? $attributes['buttonTwoIconAlign'] : 'none';

$connectorSwitcher      = isset($attributes['connectorSwitcher']) ? !empty($attributes['connectorSwitcher']) : true;
$connectorText          = fb_norm_str( isset($attributes['connectorText']) ? $attributes['connectorText'] : 'OR' );

$buttonsDirection       = isset($attributes['buttonsDirection']) ? $attributes['buttonsDirection'] : 'vertical';
$btnIconPosition        = isset($attributes['btnIconPosition']) ? $attributes['btnIconPosition'] : 'right';
$btnTwoIconPosition     = isset($attributes['btnTwoIconPosition']) ? $attributes['btnTwoIconPosition'] : 'right';

$dualButtonGlobalWraperID       = fb_norm_str( isset($attributes['dualButtonGlobalWraperID']) ? $attributes['dualButtonGlobalWraperID'] : '' ); 
$dualButtonGlobalWraperClass    = fb_norm_str( isset($attributes['dualButtonGlobalWraperClass']) ? $attributes['dualButtonGlobalWraperClass'] : '' );

$dualBtnDesktopSwitcher   = isset($attributes['dualBtnDesktopSwitcher']) ? !empty($attributes['dualBtnDesktopSwitcher']) : false;
$dualBtnTabletSwitcher    = isset($attributes['dualBtnTabletSwitcher']) ? !empty($attributes['dualBtnTabletSwitcher']) : false;
$dualBtnMobileSwitcher    = isset($attributes['dualBtnMobileSwitcher']) ? !empty($attributes['dualBtnMobileSwitcher']) : false;

/* ---------- dynamic toggles (Buttons) ---------- */
$dynamicBtnOneEnabled                 = !empty($attributes['dynamicBtnOneEnabled']);
$dynamicBtnOneSource                  = fb_norm_str($attributes['dynamicBtnOneSource'] ?? 'current_post');
$dynamicBtnOnePostId                  = fb_norm_str($attributes['dynamicBtnOnePostId'] ?? 0);
$dynamicBtnOnePostType                = fb_norm_str($attributes['dynamicBtnOnePostType'] ?? '');
$dynamicBtnOneField                   = fb_norm_str($attributes['dynamicBtnOneField'] ?? 'post_title');
$dynamicBtnOneFeaturedImageField      = fb_norm_str($attributes['dynamicBtnOneFeaturedImageField'] ?? 'title');
$dynamicBtnOneDateType                = fb_norm_str($attributes['dynamicBtnOneDateType'] ?? '');
$dynamicBtnOneDateFormat              = fb_norm_str($attributes['dynamicBtnOneDateFormat'] ?? '');
$dynamicBtnOneTimeType                = fb_norm_str($attributes['dynamicBtnOneTimeType'] ?? '');
$dynamicBtnOneTimeFormat              = fb_norm_str($attributes['dynamicBtnOneTimeFormat'] ?? '');
$dynamicBtnOneCommentsZeroText        = fb_norm_str($attributes['dynamicBtnOneCommentsZeroText'] ?? '');
$dynamicBtnOneCommentsOneText         = fb_norm_str($attributes['dynamicBtnOneCommentsOneText'] ?? '');
$dynamicBtnOneCommentsManyText        = fb_norm_str($attributes['dynamicBtnOneCommentsManyText'] ?? '');
$dynamicBtnOneTermsTaxonomy           = fb_norm_str($attributes['dynamicBtnOneTermsTaxonomy'] ?? 'category');
$dynamicBtnOneTermsSeparator          = fb_norm_str($attributes['dynamicBtnOneTermsSeparator'] ?? '');
$dynamicBtnOneEnableLink              = !empty($attributes['dynamicBtnOneEnableLink']);
$dynamicBtnOneLinkSource              = fb_norm_str($attributes['dynamicBtnOneLinkSource'] ?? 'post_permalink');

$dynamicBtnTwoEnabled                 = !empty($attributes['dynamicBtnTwoEnabled']);
$dynamicBtnTwoSource                  = fb_norm_str($attributes['dynamicBtnTwoSource'] ?? 'current_post');
$dynamicBtnTwoPostId                  = fb_norm_str($attributes['dynamicBtnTwoPostId'] ?? 0);
$dynamicBtnTwoPostType                = fb_norm_str($attributes['dynamicBtnTwoPostType'] ?? '');
$dynamicBtnTwoField                   = fb_norm_str($attributes['dynamicBtnTwoField'] ?? 'post_title');
$dynamicBtnTwoFeaturedImageField      = fb_norm_str($attributes['dynamicBtnTwoFeaturedImageField'] ?? 'title');
$dynamicBtnTwoDateType                = fb_norm_str($attributes['dynamicBtnTwoDateType'] ?? '');
$dynamicBtnTwoDateFormat              = fb_norm_str($attributes['dynamicBtnTwoDateFormat'] ?? '');
$dynamicBtnTwoTimeType                = fb_norm_str($attributes['dynamicBtnTwoTimeType'] ?? '');
$dynamicBtnTwoTimeFormat              = fb_norm_str($attributes['dynamicBtnTwoTimeFormat'] ?? '');
$dynamicBtnTwoCommentsZeroText        = fb_norm_str($attributes['dynamicBtnTwoCommentsZeroText'] ?? '');
$dynamicBtnTwoCommentsOneText         = fb_norm_str($attributes['dynamicBtnTwoCommentsOneText'] ?? '');
$dynamicBtnTwoCommentsManyText        = fb_norm_str($attributes['dynamicBtnTwoCommentsManyText'] ?? '');
$dynamicBtnTwoTermsTaxonomy           = fb_norm_str($attributes['dynamicBtnTwoTermsTaxonomy'] ?? 'category');
$dynamicBtnTwoTermsSeparator          = fb_norm_str($attributes['dynamicBtnTwoTermsSeparator'] ?? '');
$dynamicBtnTwoEnableLink              = !empty($attributes['dynamicBtnTwoEnableLink']);
$dynamicBtnTwoLinkSource              = fb_norm_str($attributes['dynamicBtnTwoLinkSource'] ?? 'post_permalink');

/* ---------- Pro gate ---------- */
if ( ! Helper::isProActivated() ) {
    $dynamicBtnOneEnabled = false;
	$dynamicBtnOneEnableLink = false;
    $dynamicBtnTwoEnabled = false;
	$dynamicBtnTwoEnableLink = false;
}

/* ---------- compute dynamics ---------- */
$btnOneDynamic = fb_compute_dynamic_text( [
	'enabled'             => $dynamicBtnOneEnabled,
	'source'              => $dynamicBtnOneSource,
	'field'               => $dynamicBtnOneField,
	'post_id'             => $dynamicBtnOnePostId,
	'post_type'           => $dynamicBtnOnePostType,
	'featured_image_field'=> $dynamicBtnOneFeaturedImageField,
	'date_type'           => $dynamicBtnOneDateType,
	'date_format'         => $dynamicBtnOneDateFormat,
	'time_type'           => $dynamicBtnOneTimeType,
	'time_format'         => $dynamicBtnOneTimeFormat,
	'comments_zero'       => $dynamicBtnOneCommentsZeroText,
	'comments_one'        => $dynamicBtnOneCommentsOneText,
	'comments_many'       => $dynamicBtnOneCommentsManyText,
	'terms_taxonomy'      => $dynamicBtnOneTermsTaxonomy,
	'terms_separator'     => $dynamicBtnOneTermsSeparator,
	'link_enabled'        => $dynamicBtnOneEnableLink,
	'link_source'         => $dynamicBtnOneLinkSource,
] );

$btnTwoDynamic = fb_compute_dynamic_text( [
	'enabled'             => $dynamicBtnTwoEnabled,
	'source'              => $dynamicBtnTwoSource,
	'field'               => $dynamicBtnTwoField,
	'post_id'             => $dynamicBtnTwoPostId,
	'post_type'           => $dynamicBtnTwoPostType,
	'featured_image_field'=> $dynamicBtnTwoFeaturedImageField,
	'date_type'           => $dynamicBtnTwoDateType,
	'date_format'         => $dynamicBtnTwoDateFormat,
	'time_type'           => $dynamicBtnTwoTimeType,
	'time_format'         => $dynamicBtnTwoTimeFormat,
	'comments_zero'       => $dynamicBtnTwoCommentsZeroText,
	'comments_one'        => $dynamicBtnTwoCommentsOneText,
	'comments_many'       => $dynamicBtnTwoCommentsManyText,
	'terms_taxonomy'      => $dynamicBtnTwoTermsTaxonomy,
	'terms_separator'     => $dynamicBtnTwoTermsSeparator,
	'link_enabled'        => $dynamicBtnTwoEnableLink,
	'link_source'         => $dynamicBtnTwoLinkSource,
] );

/* ---------- final values ---------- */
$btnOneTextFinal         = $dynamicBtnOneEnabled ? $btnOneDynamic['value'] : $ButtonText;
$btnTwoTextFinal         = $dynamicBtnTwoEnabled ? $btnTwoDynamic['value'] : $ButtonTwoText;

$btnOneHrefDynamic       = ($dynamicBtnOneEnabled && $dynamicBtnOneEnableLink) ? $btnOneDynamic['link_url'] : '';
$btnTwoHrefDynamic       = ($dynamicBtnTwoEnabled && $dynamicBtnTwoEnableLink) ? $btnTwoDynamic['link_url'] : '';

$btnOneHrefFinal         = $btnOneHrefDynamic !== '' ? $btnOneHrefDynamic : $ButtonUrl;
$btnTwoHrefFinal         = $btnTwoHrefDynamic !== '' ? $btnTwoHrefDynamic : $ButtonTwoUrl;

$btnOneTargetAttr        = $ButtonTargetUrl ? ' target="_blank" rel="noopener noreferrer"' : '';
$btnTwoTargetAttr        = $ButtonTwoTargetUrl ? ' target="_blank" rel="noopener noreferrer"' : '';

/* ---------- classes (must mirror save.js) ---------- */
$responsiveClasses = [];
if ($dualBtnDesktopSwitcher)  $responsiveClasses[] = 'fb-desktop-responsive';
if ($dualBtnTabletSwitcher)   $responsiveClasses[] = 'fb-tablet-responsive';
if ($dualBtnMobileSwitcher)   $responsiveClasses[] = 'fb-mobile-responsive';

$baseClasses = array_merge(['fb-dual-button-main-wrapper', $blockID], $responsiveClasses);

$wrapperClassesArr = array_filter(array_map(function($c){
    return sanitize_html_class(fb_norm_str($c));
}, $baseClasses));

$wrapperAttributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapperClassesArr),
]);

/* ---------- render ---------- */
?>
<div <?php echo $wrapperAttributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php
		$containerWrapperClasses = trim('fb-parent-wrapper fb-dual-button-container ' . $blockID . ' ' . $dualButtonGlobalWraperClass);
		$flexDirWrapper  = ($buttonsDirection === 'vertical') ? 'row' : 'column'; 
		$btnOneFlexDir     = ($btnIconPosition === 'left') ? 'row-reverse' : 'row';
		$btnTwoFlexDir     = ($btnTwoIconPosition === 'left') ? 'row-reverse' : 'row';
	?>
	<div class="<?php echo esc_attr( $containerWrapperClasses ); ?>" id="<?php echo esc_attr( $dualButtonGlobalWraperID ); ?>">
		<div
			class="fb-dual-button-wrapper"
			style="justify-content: <?php echo esc_attr( $ButtonAlignment ); ?>; flex-direction: <?php echo esc_attr( $flexDirWrapper ); ?>;"
		>
			<div class="fb-dual-button-one-wrapper">
				<a
					class="fb-advanced-button fb-dual-button-one"
					href="<?php echo esc_url( $btnOneHrefFinal ); ?>"
					<?php echo $btnOneTargetAttr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					style="flex-direction: <?php echo esc_attr( $btnOneFlexDir ); ?>;"
				>
					<span class="fb-advanced-button-text">
						<?php echo esc_html( $btnOneTextFinal ); ?>
					</span>
					<?php if ( $buttonIconAlign === 'icon-text' ) : ?>
						<div class="fb-advanced-button-icon-wrapper">
							<div class="fb-advanced-button-icon">
								<?php echo $buttonIconHtml; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</div>
						</div>
					<?php endif; ?>
				</a>
			</div>

			<?php if ( $connectorSwitcher ) : ?>
				<div class="fb-dual-button-connector">
					<span class="fb-dual-button-connector-text">
						<?php echo esc_html( $connectorText ); ?>
					</span>
				</div>
			<?php endif; ?>

			<div class="fb-dual-button-two-wrapper">
				<a
					class="fb-advanced-button fb-dual-button-two"
					href="<?php echo esc_url( $btnTwoHrefFinal ); ?>"
					<?php echo $btnTwoTargetAttr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					style="flex-direction: <?php echo esc_attr( $btnTwoFlexDir ); ?>;"
				>
					<span class="fb-advanced-button-text">
						<?php echo esc_html( $btnTwoTextFinal ); ?>
					</span>
					<?php if ( $buttonTwoIconAlign === 'icon-text' ) : ?>
						<div class="fb-advanced-button-icon-wrapper">
							<div class="fb-advanced-button-icon">
								<?php echo $buttonTwoIconHtml; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
							</div>
						</div>
					<?php endif; ?>
				</a>
			</div>
		</div>
	</div>
</div>