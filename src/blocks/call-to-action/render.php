<?php

use FrontisBlocks\Utils\Helper;

// ---------- helpers ----------
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

// --- Dynamic helpers ---
if ( ! function_exists('fb_get_plain_text') ) {
	function fb_get_plain_text( $html ) {
		$raw = (string) ( $html ?? '' );
		$decoded = wp_specialchars_decode( $raw, ENT_QUOTES );
		$decoded = html_entity_decode( $decoded, ENT_QUOTES, 'UTF-8' );
		$txt = wp_strip_all_tags( $decoded, true );
		$txt = preg_replace( '/\x{00A0}/u', ' ', $txt ); // nbsp
		$txt = preg_replace( '/[\x{200B}-\x{200D}\x{FEFF}]/u', '', $txt ); // zero-width
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

/**
 * Compute dynamic text + link in a reusable way (for heading/subheading)
 *
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
						case 'description': {
							$att = get_post( $thumb_id );
							$out_value = fb_get_plain_text( $att ? $att->post_content : '' ) ?: __( 'No Content', 'frontis-blocks' );
							break;
						}
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
						case 'default':
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
					if ( $count === 0 ) {
						$out_value = $zeroTxt;
					} elseif ( $count === 1 ) {
						$out_value = $oneTxt;
					} else {
						$out_value = (strpos($manyTxt,'{num}') !== false) ? str_replace('{num}', (string)$count, $manyTxt) : $manyTxt;
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

			// Link compute (only if enabled)
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
					case 'avatar_profile_url': {
						$author_id = $_post ? (int) $_post->post_author : 0;
						$link_url = $author_id ? ( get_avatar_url( $author_id ) ?: '' ) : '';
						break;
					}
					case 'author_page_url': {
						$pt = $_post ? get_post_type( $_post ) : ( $target_post_type ?: '' );
						$link_url = $pt ? ( get_post_type_archive_link( $pt ) ?: '' ) : '';
						break;
					}
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

/* ---------- extract & normalize (attributes) ---------- */
$block_id               = fb_norm_str( isset($attributes['blockID']) ? $attributes['blockID'] : '' );
$heading_text           = fb_norm_str( isset($attributes['Heading_Text']) ? $attributes['Heading_Text'] : '' );
$heading_alignment      = fb_norm_str( isset($attributes['Alignment']) ? $attributes['Alignment'] : '' );
$description_switcher   = ! empty( $attributes['descriptionSwitcher'] );
$sub_heading_text       = fb_norm_str( isset($attributes['Sub_Heading_Text']) ? $attributes['Sub_Heading_Text'] : '' );
$sub_heading_tag        = fb_norm_str( isset($attributes['Sub_Heading_Tag']) ? $attributes['Sub_Heading_Tag'] : 'p' );
$description_alignment  = fb_norm_str( isset($attributes['descAlignment']) ? $attributes['descAlignment'] : '' ); 
$buttons_alignment      = fb_norm_str( isset($attributes['buttonAlignment']) ? $attributes['buttonAlignment'] : '' );

$cta_btn_one_switcher   = ! empty( $attributes['ctaBtnOneSwitcher'] );
$btn_one_link           = fb_norm_str( isset($attributes['info_Button_Link']) ? $attributes['info_Button_Link'] : '' );
$btn_one_text           = fb_norm_str( isset($attributes['info_Button_Text']) ? $attributes['info_Button_Text'] : '' );
$btn_one_icon_position  = fb_norm_str( isset($attributes['btnIconPosition']) ? $attributes['btnIconPosition'] : 'right' );
$btn_one_icon_switcher  = ! empty( $attributes['buttonIconSwitcher'] );
$btn_one_icon           = isset($attributes['btnFrontendIcon']) ? $attributes['btnFrontendIcon'] : '';
$btn_one_target_url     = ! empty( $attributes['btnOneTargetUrl'] );

$btn_two_switcher       = ! empty( $attributes['btnTwoSwitcher'] );
$btn_two_link           = fb_norm_str( isset($attributes['btnTwoLink']) ? $attributes['btnTwoLink'] : '' );
$btn_two_text           = fb_norm_str( isset($attributes['btnTwoText']) ? $attributes['btnTwoText'] : '' );
$btn_two_icon_position  = fb_norm_str( isset($attributes['btnTwoIconPosition']) ? $attributes['btnTwoIconPosition'] : 'right' );
$btn_two_icon_switcher  = ! empty( $attributes['buttonTwoIconSwitcher'] );
$btn_two_icon           = isset($attributes['btnTwoFrontendIcon']) ? $attributes['btnTwoFrontendIcon'] : '';
$btn_two_target_url     = ! empty( $attributes['btnTwoTargetUrl'] );

$cta_global_wrapper_id  = fb_norm_str( isset($attributes['ctaGlobalWraperID']) ? $attributes['ctaGlobalWraperID'] : '' );
$cta_global_wrapper_class = fb_norm_str( isset($attributes['ctaGlobalWraperClass']) ? $attributes['ctaGlobalWraperClass'] : '' );

$cta_desktop_switcher   = ! empty( $attributes['ctaDesktopSwitcher'] );
$cta_tablet_switcher    = ! empty( $attributes['ctaTabletSwitcher'] );
$cta_mobile_switcher    = ! empty( $attributes['ctaMobileSwitcher'] );

// Title dynamic attrs
$dynamicTitleEnabled            = !empty($attributes['dynamicTitleEnabled']);
$dynamicTitleSource             = fb_norm_str(isset($attributes['dynamicTitleSource']) ? $attributes['dynamicTitleSource'] : 'current_post');
$dynamicTitlePostId             = fb_norm_str(isset($attributes['dynamicTitlePostId']) ? $attributes['dynamicTitlePostId'] : 0);
$dynamicTitlePostType           = fb_norm_str(isset($attributes['dynamicTitlePostType']) ? $attributes['dynamicTitlePostType'] : '');
$dynamicTitlePostLabel          = fb_norm_str(isset($attributes['dynamicTitlePostLabel']) ? $attributes['dynamicTitlePostLabel'] : '');
$dynamicTitleField              = fb_norm_str(isset($attributes['dynamicTitleField']) ? $attributes['dynamicTitleField'] : 'post_title');
$dynamicTitleFeaturedImageField     = fb_norm_str(isset($attributes['dynamicTitleFeaturedImageField']) ? $attributes['dynamicTitleFeaturedImageField'] : 'title');
$dynamicTitleDateType           = fb_norm_str(isset($attributes['dynamicTitleDateType']) ? $attributes['dynamicTitleDateType'] : '');
$dynamicTitleDateFormat         = fb_norm_str(isset($attributes['dynamicTitleDateFormat']) ? $attributes['dynamicTitleDateFormat'] : '');
$dynamicTitleTimeType           = fb_norm_str(isset($attributes['dynamicTitleTimeType']) ? $attributes['dynamicTitleTimeType'] : '');
$dynamicTitleTimeFormat         = fb_norm_str(isset($attributes['dynamicTitleTimeFormat']) ? $attributes['dynamicTitleTimeFormat'] : '');
$dynamicTitleCommentsZeroText   = fb_norm_str(isset($attributes['dynamicTitleCommentsZeroText']) ? $attributes['dynamicTitleCommentsZeroText'] : '');
$dynamicTitleCommentsOneText    = fb_norm_str(isset($attributes['dynamicTitleCommentsOneText']) ? $attributes['dynamicTitleCommentsOneText'] : '');
$dynamicTitleCommentsManyText   = fb_norm_str(isset($attributes['dynamicTitleCommentsManyText']) ? $attributes['dynamicTitleCommentsManyText'] : '');
$dynamicTitleTermsTaxonomy      = fb_norm_str(isset($attributes['dynamicTitleTermsTaxonomy']) ? $attributes['dynamicTitleTermsTaxonomy'] : 'category');
$dynamicTitleTermsSeparator     = fb_norm_str(isset($attributes['dynamicTitleTermsSeparator']) ? $attributes['dynamicTitleTermsSeparator'] : '');
$dynamicTitleEnableLink         = !empty($attributes['dynamicTitleEnableLink']);
$dynamicTitleLinkSource         = fb_norm_str(isset($attributes['dynamicTitleLinkSource']) ? $attributes['dynamicTitleLinkSource'] : 'post_permalink');

/** Start Dynamic Description Text */
$dynamicDescriptionEnabled            = !empty($attributes['dynamicDescriptionEnabled']);
$dynamicDescriptionSource             = fb_norm_str(isset($attributes['dynamicDescriptionSource']) ? $attributes['dynamicDescriptionSource'] : 'current_post');
$dynamicDescriptionPostId             = fb_norm_str(isset($attributes['dynamicDescriptionPostId']) ? $attributes['dynamicDescriptionPostId'] : 0);
$dynamicDescriptionPostType           = fb_norm_str(isset($attributes['dynamicDescriptionPostType']) ? $attributes['dynamicDescriptionPostType'] : '');
$dynamicDescriptionPostLabel          = fb_norm_str(isset($attributes['dynamicDescriptionPostLabel']) ? $attributes['dynamicDescriptionPostLabel'] : '');
$dynamicDescriptionField              = fb_norm_str(isset($attributes['dynamicDescriptionField']) ? $attributes['dynamicDescriptionField'] : 'post_title');
$dynamicDescriptionFeaturedImageField     = fb_norm_str(isset($attributes['dynamicDescriptionFeaturedImageField']) ? $attributes['dynamicDescriptionFeaturedImageField'] : 'title');
$dynamicDescriptionDateType           = fb_norm_str(isset($attributes['dynamicDescriptionDateType']) ? $attributes['dynamicDescriptionDateType'] : '');
$dynamicDescriptionDateFormat         = fb_norm_str(isset($attributes['dynamicDescriptionDateFormat']) ? $attributes['dynamicDescriptionDateFormat'] : '');
$dynamicDescriptionTimeType           = fb_norm_str(isset($attributes['dynamicDescriptionTimeType']) ? $attributes['dynamicDescriptionTimeType'] : '');
$dynamicDescriptionTimeFormat         = fb_norm_str(isset($attributes['dynamicDescriptionTimeFormat']) ? $attributes['dynamicDescriptionTimeFormat'] : '');
$dynamicDescriptionCommentsZeroText   = fb_norm_str(isset($attributes['dynamicDescriptionCommentsZeroText']) ? $attributes['dynamicDescriptionCommentsZeroText'] : '');
$dynamicDescriptionCommentsOneText    = fb_norm_str(isset($attributes['dynamicDescriptionCommentsOneText']) ? $attributes['dynamicDescriptionCommentsOneText'] : '');
$dynamicDescriptionCommentsManyText   = fb_norm_str(isset($attributes['dynamicDescriptionCommentsManyText']) ? $attributes['dynamicDescriptionCommentsManyText'] : '');
$dynamicDescriptionTermsTaxonomy      = fb_norm_str(isset($attributes['dynamicDescriptionTermsTaxonomy']) ? $attributes['dynamicDescriptionTermsTaxonomy'] : 'category');
$dynamicDescriptionTermsSeparator     = fb_norm_str(isset($attributes['dynamicDescriptionTermsSeparator']) ? $attributes['dynamicDescriptionTermsSeparator'] : '');
$dynamicDescriptionEnableLink         = !empty($attributes['dynamicDescriptionEnableLink']);
$dynamicDescriptionLinkSource         = fb_norm_str(isset($attributes['dynamicDescriptionLinkSource']) ? $attributes['dynamicDescriptionLinkSource'] : 'post_permalink');

/** Start Dynamic Btn One Text */
$dynamicBtnOneEnabled            = !empty($attributes['dynamicBtnOneEnabled']);
$dynamicBtnOneSource             = fb_norm_str(isset($attributes['dynamicBtnOneSource']) ? $attributes['dynamicBtnOneSource'] : 'current_post');
$dynamicBtnOnePostId             = fb_norm_str(isset($attributes['dynamicBtnOnePostId']) ? $attributes['dynamicBtnOnePostId'] : 0);
$dynamicBtnOnePostType           = fb_norm_str(isset($attributes['dynamicBtnOnePostType']) ? $attributes['dynamicBtnOnePostType'] : '');
$dynamicBtnOnePostLabel          = fb_norm_str(isset($attributes['dynamicBtnOnePostLabel']) ? $attributes['dynamicBtnOnePostLabel'] : '');
$dynamicBtnOneField              = fb_norm_str(isset($attributes['dynamicBtnOneField']) ? $attributes['dynamicBtnOneField'] : 'post_title');
$dynamicBtnOneFeaturedImageField     = fb_norm_str(isset($attributes['dynamicBtnOneFeaturedImageField']) ? $attributes['dynamicBtnOneFeaturedImageField'] : 'title');
$dynamicBtnOneDateType           = fb_norm_str(isset($attributes['dynamicBtnOneDateType']) ? $attributes['dynamicBtnOneDateType'] : '');
$dynamicBtnOneDateFormat         = fb_norm_str(isset($attributes['dynamicBtnOneDateFormat']) ? $attributes['dynamicBtnOneDateFormat'] : '');
$dynamicBtnOneTimeType           = fb_norm_str(isset($attributes['dynamicBtnOneTimeType']) ? $attributes['dynamicBtnOneTimeType'] : '');
$dynamicBtnOneTimeFormat         = fb_norm_str(isset($attributes['dynamicBtnOneTimeFormat']) ? $attributes['dynamicBtnOneTimeFormat'] : '');
$dynamicBtnOneCommentsZeroText   = fb_norm_str(isset($attributes['dynamicBtnOneCommentsZeroText']) ? $attributes['dynamicBtnOneCommentsZeroText'] : '');
$dynamicBtnOneCommentsOneText    = fb_norm_str(isset($attributes['dynamicBtnOneCommentsOneText']) ? $attributes['dynamicBtnOneCommentsOneText'] : '');
$dynamicBtnOneCommentsManyText   = fb_norm_str(isset($attributes['dynamicBtnOneCommentsManyText']) ? $attributes['dynamicBtnOneCommentsManyText'] : '');
$dynamicBtnOneTermsTaxonomy      = fb_norm_str(isset($attributes['dynamicBtnOneTermsTaxonomy']) ? $attributes['dynamicBtnOneTermsTaxonomy'] : 'category');
$dynamicBtnOneTermsSeparator     = fb_norm_str(isset($attributes['dynamicBtnOneTermsSeparator']) ? $attributes['dynamicBtnOneTermsSeparator'] : '');
$dynamicBtnOneEnableLink         = !empty($attributes['dynamicBtnOneEnableLink']);
$dynamicBtnOneLinkSource         = fb_norm_str(isset($attributes['dynamicBtnOneLinkSource']) ? $attributes['dynamicBtnOneLinkSource'] : 'post_permalink');

/** Start Dynamic Btn Two Text */
$dynamicBtnTwoEnabled            = !empty($attributes['dynamicBtnTwoEnabled']);
$dynamicBtnTwoSource             = fb_norm_str(isset($attributes['dynamicBtnTwoSource']) ? $attributes['dynamicBtnTwoSource'] : 'current_post');
$dynamicBtnTwoPostId             = fb_norm_str(isset($attributes['dynamicBtnTwoPostId']) ? $attributes['dynamicBtnTwoPostId'] : 0);
$dynamicBtnTwoPostType           = fb_norm_str(isset($attributes['dynamicBtnTwoPostType']) ? $attributes['dynamicBtnTwoPostType'] : '');
$dynamicBtnTwoPostLabel          = fb_norm_str(isset($attributes['dynamicBtnTwoPostLabel']) ? $attributes['dynamicBtnTwoPostLabel'] : '');
$dynamicBtnTwoField              = fb_norm_str(isset($attributes['dynamicBtnTwoField']) ? $attributes['dynamicBtnTwoField'] : 'post_title');
$dynamicBtnTwoFeaturedImageField     = fb_norm_str(isset($attributes['dynamicBtnTwoFeaturedImageField']) ? $attributes['dynamicBtnTwoFeaturedImageField'] : 'title');
$dynamicBtnTwoDateType           = fb_norm_str(isset($attributes['dynamicBtnTwoDateType']) ? $attributes['dynamicBtnTwoDateType'] : '');
$dynamicBtnTwoDateFormat         = fb_norm_str(isset($attributes['dynamicBtnTwoDateFormat']) ? $attributes['dynamicBtnTwoDateFormat'] : '');
$dynamicBtnTwoTimeType           = fb_norm_str(isset($attributes['dynamicBtnTwoTimeType']) ? $attributes['dynamicBtnTwoTimeType'] : '');
$dynamicBtnTwoTimeFormat         = fb_norm_str(isset($attributes['dynamicBtnTwoTimeFormat']) ? $attributes['dynamicBtnTwoTimeFormat'] : '');
$dynamicBtnTwoCommentsZeroText   = fb_norm_str(isset($attributes['dynamicBtnTwoCommentsZeroText']) ? $attributes['dynamicBtnTwoCommentsZeroText'] : '');
$dynamicBtnTwoCommentsOneText    = fb_norm_str(isset($attributes['dynamicBtnTwoCommentsOneText']) ? $attributes['dynamicBtnTwoCommentsOneText'] : '');
$dynamicBtnTwoCommentsManyText   = fb_norm_str(isset($attributes['dynamicBtnTwoCommentsManyText']) ? $attributes['dynamicBtnTwoCommentsManyText'] : '');
$dynamicBtnTwoTermsTaxonomy      = fb_norm_str(isset($attributes['dynamicBtnTwoTermsTaxonomy']) ? $attributes['dynamicBtnTwoTermsTaxonomy'] : 'category');
$dynamicBtnTwoTermsSeparator     = fb_norm_str(isset($attributes['dynamicBtnTwoTermsSeparator']) ? $attributes['dynamicBtnTwoTermsSeparator'] : '');
$dynamicBtnTwoEnableLink         = !empty($attributes['dynamicBtnTwoEnableLink']);
$dynamicBtnTwoLinkSource         = fb_norm_str(isset($attributes['dynamicBtnTwoLinkSource']) ? $attributes['dynamicBtnTwoLinkSource'] : 'post_permalink');

/**
 * Disable dynamic if not pro active
 */
if ( !Helper::isProActivated() ) {
    $dynamicTitleEnabled = false; 
    $dynamicTitleEnableLink = false; 
    $dynamicDescriptionEnabled = false; 
    $dynamicDescriptionEnableLink = false; 
    $dynamicBtnOneEnabled = false; 
    $dynamicBtnOneEnableLink = false; 
    $dynamicBtnTwoEnabled = false; 
    $dynamicBtnTwoEnableLink = false; 
}

// compute dynamic title
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

$btn_one_dyn = fb_compute_dynamic_text( [
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

$btn_two_dyn = fb_compute_dynamic_text( [
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

$titleDynamicValue           = $dynamicTitleEnabled ? $title_dyn['value'] : $heading_text;
$titleDynamicUrl             = ($dynamicTitleEnabled && $dynamicTitleEnableLink) ? $title_dyn['link_url'] : '';
$titleDynamicPermalink       = $title_dyn['permalink'];

$descriptionDynamicValue     = $dynamicDescriptionEnabled ? $description_dyn['value'] : $sub_heading_text; 
$descriptionDynamicUrl      = ($dynamicDescriptionEnabled && $dynamicDescriptionEnableLink) ? $description_dyn['link_url'] : '';

$btnOneDynamicValue          = $dynamicBtnOneEnabled ? $btn_one_dyn['value'] : $btn_one_text;
$btnOneDynamicUrl           = ($dynamicBtnOneEnabled && $dynamicBtnOneEnableLink) ? $btn_one_dyn['link_url'] : '';
$btnOneTarget                = $btn_one_target_url ? ' target="_blank" rel="noopener noreferrer"' : '';

$btnTwoDynamicValue          = $dynamicBtnTwoEnabled ? $btn_two_dyn['value'] : $btn_two_text;
$btnTwoDynamicUrl           = ($dynamicBtnTwoEnabled && $dynamicBtnTwoEnableLink) ? $btn_two_dyn['link_url'] : '';
$btnTwoTarget                = $btn_two_target_url ? ' target="_blank" rel="noopener noreferrer"' : '';

// ---------- classes (match save.js) ----------
$responsive_classes = [];
if ($cta_desktop_switcher)  $responsive_classes[] = 'fb-desktop-responsive';
if ($cta_tablet_switcher)   $responsive_classes[] = 'fb-tablet-responsive';
if ($cta_mobile_switcher)   $responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['fb-cta-main-wrapper', $block_id], $responsive_classes);

// sanitize and keep as array
$wrapper_classes_arr = array_filter(array_map(function($c){
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

// precompute wrapper attributes string
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);

?>