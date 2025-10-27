<?php

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
				return $diff >= 0 ? sprintf( _n( '%d '.$u.' ago', '%d '.$u.'s ago', $v, 'frontis-blocks' ), $v )
				                  : sprintf( _n( 'in %d '.$u, 'in %d '.$u.'s', $v, 'frontis-blocks' ), $v );
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
$block_id                 = fb_norm_str( isset($attributes['blockID']) ? $attributes['blockID'] : '' );

$heading_text             = fb_norm_str( isset($attributes['Heading_Text']) ? $attributes['Heading_Text'] : 'Fast Loading Speed' );
$heading_tag              = fb_tag_whitelist( isset($attributes['headingTag']) ? $attributes['headingTag'] : 'h2', 'h2' );

$sub_heading_switcher     = isset($attributes['Sub_Heading_Switcher']) ? ! empty($attributes['Sub_Heading_Switcher']) : true;
$sub_heading_text         = fb_norm_str( isset($attributes['Sub_Heading_Text']) ? $attributes['Sub_Heading_Text'] : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin' );

$info_btn_switcher        = isset($attributes['info_Button_Switcher']) ? ! empty($attributes['info_Button_Switcher']) : true;
$info_btn_text            = fb_norm_str( isset($attributes['info_Button_Text']) ? $attributes['info_Button_Text'] : 'Learn More' );

$icon_html                = isset($attributes['frontendIcon']) ? $attributes['frontendIcon'] : '';
$media_switcher           = isset($attributes['mediaSwitcher']) ? $attributes['mediaSwitcher'] : 'icon'; // 'icon' | 'image'
$info_media_url           = fb_norm_str( isset($attributes['infoMediaUrl']) ? $attributes['infoMediaUrl'] : '' );
$info_media_alt           = fb_norm_str( isset($attributes['infoMediaAlt']) ? $attributes['infoMediaAlt'] : '' );

$sub_heading_tag          = fb_tag_whitelist( isset($attributes['Sub_Heading_Tag']) ? $attributes['Sub_Heading_Tag'] : 'p', 'p' );
$btn_icon_switcher        = isset($attributes['buttonIconSwitcher']) ? ! empty($attributes['buttonIconSwitcher']) : true;
$btn_icon_html            = isset($attributes['frontendBtnIcon']) ? $attributes['frontendBtnIcon'] : '';
$btn_image_url            = fb_norm_str( isset($attributes['btnImageUrl']) ? $attributes['btnImageUrl'] : '' );
$btn_image_alt            = fb_norm_str( isset($attributes['btnImageAlt']) ? $attributes['btnImageAlt'] : '' );
$btn_icon_type            = fb_norm_str( isset($attributes['buttonIconType']) ? $attributes['buttonIconType'] : 'icon' );
$info_btn_target_url      = ! empty( $attributes['infobtnTargetUrl'] ); // boolean
$info_btn_link            = fb_norm_str( isset($attributes['infoButtonLink']) ? $attributes['infoButtonLink'] : '' );

$info_box_global_wrapper_id    = fb_norm_str( isset($attributes['infoBoxGlobalWraperID']) ? $attributes['infoBoxGlobalWraperID'] : '' );
$info_box_global_wrapper_class = fb_norm_str( isset($attributes['infoBoxGlobalWraperClass']) ? $attributes['infoBoxGlobalWraperClass'] : '' );

$info_box_desktop_switcher = isset($attributes['infoBoxDesktopSwitcher']) ? ! empty($attributes['infoBoxDesktopSwitcher']) : false;
$info_box_tablet_switcher  = isset($attributes['infoBoxTabletSwitcher']) ? ! empty($attributes['infoBoxTabletSwitcher']) : false;
$info_box_mobile_switcher  = isset($attributes['infoBoxMobileSwitcher']) ? ! empty($attributes['infoBoxMobileSwitcher']) : false;

/* ---------- dynamic toggles (Title / Desc / Buttons) ---------- */
$dynamicTitleEnabled                 = !empty($attributes['dynamicTitleEnabled']);
$dynamicTitleSource                  = fb_norm_str($attributes['dynamicTitleSource'] ?? 'current_post');
$dynamicTitlePostId                  = fb_norm_str($attributes['dynamicTitlePostId'] ?? 0);
$dynamicTitlePostType                = fb_norm_str($attributes['dynamicTitlePostType'] ?? '');
$dynamicTitleField                   = fb_norm_str($attributes['dynamicTitleField'] ?? 'post_title');
$dynamicTitleFeaturedImageField      = fb_norm_str($attributes['dynamicTitleFeaturedImageField'] ?? 'title');
$dynamicTitleDateType                = fb_norm_str($attributes['dynamicTitleDateType'] ?? '');
$dynamicTitleDateFormat              = fb_norm_str($attributes['dynamicTitleDateFormat'] ?? '');
$dynamicTitleTimeType                = fb_norm_str($attributes['dynamicTitleTimeType'] ?? '');
$dynamicTitleTimeFormat              = fb_norm_str($attributes['dynamicTitleTimeFormat'] ?? '');
$dynamicTitleCommentsZeroText        = fb_norm_str($attributes['dynamicTitleCommentsZeroText'] ?? '');
$dynamicTitleCommentsOneText         = fb_norm_str($attributes['dynamicTitleCommentsOneText'] ?? '');
$dynamicTitleCommentsManyText        = fb_norm_str($attributes['dynamicTitleCommentsManyText'] ?? '');
$dynamicTitleTermsTaxonomy           = fb_norm_str($attributes['dynamicTitleTermsTaxonomy'] ?? 'category');
$dynamicTitleTermsSeparator          = fb_norm_str($attributes['dynamicTitleTermsSeparator'] ?? '');
$dynamicTitleEnableLink              = !empty($attributes['dynamicTitleEnableLink']);
$dynamicTitleLinkSource              = fb_norm_str($attributes['dynamicTitleLinkSource'] ?? 'post_permalink');

$dynamicDescriptionEnabled                 = !empty($attributes['dynamicDescriptionEnabled']);
$dynamicDescriptionSource                  = fb_norm_str($attributes['dynamicDescriptionSource'] ?? 'current_post');
$dynamicDescriptionPostId                  = fb_norm_str($attributes['dynamicDescriptionPostId'] ?? 0);
$dynamicDescriptionPostType                = fb_norm_str($attributes['dynamicDescriptionPostType'] ?? '');
$dynamicDescriptionField                   = fb_norm_str($attributes['dynamicDescriptionField'] ?? 'post_title');
$dynamicDescriptionFeaturedImageField      = fb_norm_str($attributes['dynamicDescriptionFeaturedImageField'] ?? 'title');
$dynamicDescriptionDateType                = fb_norm_str($attributes['dynamicDescriptionDateType'] ?? '');
$dynamicDescriptionDateFormat              = fb_norm_str($attributes['dynamicDescriptionDateFormat'] ?? '');
$dynamicDescriptionTimeType                = fb_norm_str($attributes['dynamicDescriptionTimeType'] ?? '');
$dynamicDescriptionTimeFormat              = fb_norm_str($attributes['dynamicDescriptionTimeFormat'] ?? '');
$dynamicDescriptionCommentsZeroText        = fb_norm_str($attributes['dynamicDescriptionCommentsZeroText'] ?? '');
$dynamicDescriptionCommentsOneText         = fb_norm_str($attributes['dynamicDescriptionCommentsOneText'] ?? '');
$dynamicDescriptionCommentsManyText        = fb_norm_str($attributes['dynamicDescriptionCommentsManyText'] ?? '');
$dynamicDescriptionTermsTaxonomy           = fb_norm_str($attributes['dynamicDescriptionTermsTaxonomy'] ?? 'category');
$dynamicDescriptionTermsSeparator          = fb_norm_str($attributes['dynamicDescriptionTermsSeparator'] ?? '');
$dynamicDescriptionEnableLink              = !empty($attributes['dynamicDescriptionEnableLink']);
$dynamicDescriptionLinkSource              = fb_norm_str($attributes['dynamicDescriptionLinkSource'] ?? 'post_permalink');

$dynamicBtnEnabled                 = !empty($attributes['dynamicBtnEnabled']);
$dynamicBtnSource                  = fb_norm_str($attributes['dynamicBtnSource'] ?? 'current_post');
$dynamicBtnPostId                  = fb_norm_str($attributes['dynamicBtnPostId'] ?? 0);
$dynamicBtnPostType                = fb_norm_str($attributes['dynamicBtnPostType'] ?? '');
$dynamicBtnField                   = fb_norm_str($attributes['dynamicBtnField'] ?? 'post_title');
$dynamicBtnFeaturedImageField      = fb_norm_str($attributes['dynamicBtnFeaturedImageField'] ?? 'title');
$dynamicBtnDateType                = fb_norm_str($attributes['dynamicBtnDateType'] ?? '');
$dynamicBtnDateFormat              = fb_norm_str($attributes['dynamicBtnDateFormat'] ?? '');
$dynamicBtnTimeType                = fb_norm_str($attributes['dynamicBtnTimeType'] ?? '');
$dynamicBtnTimeFormat              = fb_norm_str($attributes['dynamicBtnTimeFormat'] ?? '');
$dynamicBtnCommentsZeroText        = fb_norm_str($attributes['dynamicBtnCommentsZeroText'] ?? '');
$dynamicBtnCommentsOneText         = fb_norm_str($attributes['dynamicBtnCommentsOneText'] ?? '');
$dynamicBtnCommentsManyText        = fb_norm_str($attributes['dynamicBtnCommentsManyText'] ?? '');
$dynamicBtnTermsTaxonomy           = fb_norm_str($attributes['dynamicBtnTermsTaxonomy'] ?? 'category');
$dynamicBtnTermsSeparator          = fb_norm_str($attributes['dynamicBtnTermsSeparator'] ?? '');
$dynamicBtnEnableLink              = !empty($attributes['dynamicBtnEnableLink']);
$dynamicBtnLinkSource              = fb_norm_str($attributes['dynamicBtnLinkSource'] ?? 'post_permalink');

/* ---------- Pro gate ---------- */
if ( ! Helper::isProActivated() ) {
    $dynamicTitleEnabled = false;
    $dynamicTitleEnableLink = false;
    $dynamicDescriptionEnabled = false;
    $dynamicDescriptionEnableLink = false;
    $dynamicBtnEnabled = false;
    $dynamicBtnEnableLink = false;
}

/* ---------- compute dynamics ---------- */
$title_dyn = fb_compute_dynamic_text( [
	'enabled'             => $dynamicTitleEnabled,
	'source'              => $dynamicTitleSource,
	'field'               => $dynamicTitleField,
	'post_id'             => $dynamicTitlePostId,
	'post_type'           => $dynamicTitlePostType,
	'featured_image_field'=> $dynamicTitleFeaturedImageField,
	'date_type'           => $dynamicTitleDateType,
	'date_format'         => $dynamicTitleDateFormat,
	'time_type'           => $dynamicTitleTimeType,
	'time_format'         => $dynamicTitleTimeFormat,
	'comments_zero'       => $dynamicTitleCommentsZeroText,
	'comments_one'        => $dynamicTitleCommentsOneText,
	'comments_many'       => $dynamicTitleCommentsManyText,
	'terms_taxonomy'      => $dynamicTitleTermsTaxonomy,
	'terms_separator'     => $dynamicTitleTermsSeparator,
	'link_enabled'        => $dynamicTitleEnableLink,
	'link_source'         => $dynamicTitleLinkSource,
] );

$description_dyn = fb_compute_dynamic_text( [
	'enabled'             => $dynamicDescriptionEnabled,
	'source'              => $dynamicDescriptionSource,
	'field'               => $dynamicDescriptionField,
	'post_id'             => $dynamicDescriptionPostId,
	'post_type'           => $dynamicDescriptionPostType,
	'featured_image_field'=> $dynamicDescriptionFeaturedImageField,
	'date_type'           => $dynamicDescriptionDateType,
	'date_format'         => $dynamicDescriptionDateFormat,
	'time_type'           => $dynamicDescriptionTimeType,
	'time_format'         => $dynamicDescriptionTimeFormat,
	'comments_zero'       => $dynamicDescriptionCommentsZeroText,
	'comments_one'        => $dynamicDescriptionCommentsOneText,
	'comments_many'       => $dynamicDescriptionCommentsManyText,
	'terms_taxonomy'      => $dynamicDescriptionTermsTaxonomy,
	'terms_separator'     => $dynamicDescriptionTermsSeparator,
	'link_enabled'        => $dynamicDescriptionEnableLink,
	'link_source'         => $dynamicDescriptionLinkSource,
] );

$btn_dyn = fb_compute_dynamic_text( [
	'enabled'             => $dynamicBtnEnabled,
	'source'              => $dynamicBtnSource,
	'field'               => $dynamicBtnField,
	'post_id'             => $dynamicBtnPostId,
	'post_type'           => $dynamicBtnPostType,
	'featured_image_field'=> $dynamicBtnFeaturedImageField,
	'date_type'           => $dynamicBtnDateType,
	'date_format'         => $dynamicBtnDateFormat,
	'time_type'           => $dynamicBtnTimeType,
	'time_format'         => $dynamicBtnTimeFormat,
	'comments_zero'       => $dynamicBtnCommentsZeroText,
	'comments_one'        => $dynamicBtnCommentsOneText,
	'comments_many'       => $dynamicBtnCommentsManyText,
	'terms_taxonomy'      => $dynamicBtnTermsTaxonomy,
	'terms_separator'     => $dynamicBtnTermsSeparator,
	'link_enabled'        => $dynamicBtnEnableLink,
	'link_source'         => $dynamicBtnLinkSource,
] );

/* ---------- final values ---------- */
$final_heading_text      = $dynamicTitleEnabled ? $title_dyn['value'] : $heading_text;
$title_link_url          = ($dynamicTitleEnabled && $dynamicTitleEnableLink) ? fb_norm_str($title_dyn['link_url']) : '';

$final_description_text  = $dynamicDescriptionEnabled ? $description_dyn['value'] : $sub_heading_text;
$description_link_url    = ($dynamicDescriptionEnabled && $dynamicDescriptionEnableLink) ? fb_norm_str($description_dyn['link_url']) : '';

$btn_text_final          = $dynamicBtnEnabled ? $btn_dyn['value'] : $info_btn_text;
$btn_href_dynamic        = ($dynamicBtnEnabled && $dynamicBtnEnableLink) ? fb_norm_str($btn_dyn['link_url']) : '';
$btn_href_final          = $btn_href_dynamic !== '' ? $btn_href_dynamic : $info_btn_link;

$btn_target_attr         = $info_btn_target_url ? ' target="_blank" rel="noopener noreferrer"' : '';

/* ---------- classes (must mirror save.js) ---------- */
$responsive_classes = [];
if ($info_box_desktop_switcher)  $responsive_classes[] = 'fb-desktop-responsive';
if ($info_box_tablet_switcher)   $responsive_classes[] = 'fb-tablet-responsive';
if ($info_box_mobile_switcher)   $responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['fb-info-box-main-wrapper', $block_id], $responsive_classes);

$wrapper_classes_arr = array_filter(array_map(function($c){
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);

?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="fb-parent-wrapper fb-info-box-wrapper <?php echo esc_attr( trim($block_id.' '.$info_box_global_wrapper_class) ); ?>" id="<?php echo esc_attr( $info_box_global_wrapper_id ); ?>">
		<div class="fb-info-box-wrapper-inner <?php echo esc_attr( $block_id ); ?>">

			<div class="fb-info-media-container">
				<div class="fb-info-media-wrapper">
					<?php if ( $media_switcher === 'image' && $info_media_url ) : ?>
						<img src="<?php echo esc_url( $info_media_url ); ?>" alt="<?php echo esc_attr( $info_media_alt ); ?>" />
					<?php elseif ( $media_switcher === 'icon' && $icon_html ) : ?>
						<div class="fb-icon-wrapper">
							<?php echo $icon_html; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>

			<div class="fb-info-box-content-wrapper">
				<<?php echo esc_attr( $heading_tag ); ?> class="fb-heading">
					<?php if ( $title_link_url !== '' ) : ?>
						<a class="fb-title-dynamic-link" href="<?php echo esc_url( $title_link_url ); ?>">
							<?php echo wp_kses_post( $final_heading_text ); ?>
						</a>
					<?php else : ?>
						<?php echo wp_kses_post( $final_heading_text ); ?>
					<?php endif; ?>
				</<?php echo esc_attr( $heading_tag ); ?>>

				<?php if ( $sub_heading_switcher ) : ?>
					<<?php echo esc_attr( $sub_heading_tag ); ?> class="fb-description">
						<?php if ( $description_link_url !== '' ) : ?>
							<a class="fb-description-dynamic-link" href="<?php echo esc_url( $description_link_url ); ?>">
								<?php echo wp_kses_post( $final_description_text ); ?>
							</a>
						<?php else : ?>
							<?php echo wp_kses_post( $final_description_text ); ?>
						<?php endif; ?>
					</<?php echo esc_attr( $sub_heading_tag ); ?>>
				<?php endif; ?>

				<?php if ( $info_btn_switcher ) : ?>
					<div class="fb-info-button">
						<div class="fb-info-btn-container">
							<a
								href="<?php echo esc_url( $btn_href_final ); ?>" target="<?php echo esc_attr( $btn_target_attr ); ?>"
								class="fb-info-btn-wrapper"
							>
								<span class="fb-info-button"><?php echo wp_kses_post( $btn_text_final ); ?></span>

								<?php if ( $btn_icon_switcher ) : ?>
									<div class="fb-btn-icon-wrapper">
										<?php if ( $btn_icon_type === 'image' && $btn_image_url ) : ?>
											<img src="<?php echo esc_url( $btn_image_url ); ?>" alt="<?php echo esc_attr( $btn_image_alt ); ?>" />
										<?php else : ?>
											<?php echo $btn_icon_html; ?>
										<?php endif; ?>
									</div>
								<?php endif; ?>
							</a>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>