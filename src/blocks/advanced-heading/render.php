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

// ---------- extract & normalize ----------
$block_id                      = fb_norm_str(isset($attributes['blockId']) ? $attributes['blockId'] : '');
$heading_text                  = fb_norm_str(isset($attributes['headingText']) ? $attributes['headingText'] : 'Advanced Heading');
$heading_tag                   = fb_tag_whitelist(isset($attributes['headingTag']) ? $attributes['headingTag'] : 'h2', 'h2');
$heading_alignment             = fb_norm_str(isset($attributes['headingAlignment']) ? $attributes['headingAlignment'] : '');
$sub_heading_switcher          = !empty($attributes['subHeadingSwitcher']);
$sub_heading_text              = fb_norm_str(isset($attributes['subHeadingText']) ? $attributes['subHeadingText'] : 'Advanced Sub Heading');
$sub_heading_tag               = fb_tag_whitelist(isset($attributes['subHeadingTag']) ? $attributes['subHeadingTag'] : 'p', 'p');
$sub_heading_position          = fb_norm_str(isset($attributes['subHeadingPosition']) ? $attributes['subHeadingPosition'] : 'bottom');
$active_line_switcher          = !empty($attributes['activeLineSwitcher']);
$heading_icon_switcher         = !empty($attributes['headingIconSwitcher']);
$heading_icon_align            = fb_norm_str(isset($attributes['headingIconAlign']) ? $attributes['headingIconAlign'] : 'icon');
$heading_icon_frontend         = fb_norm_str(isset($attributes['headingIconFrontend']) ? $attributes['headingIconFrontend'] : '');
$show_separator_switcher       = !empty($attributes['showSeparatorSwitcher']);
$separator                     = fb_norm_str(isset($attributes['separator']) ? $attributes['separator'] : '');
$separator_position            = fb_norm_str(isset($attributes['separatorPosition']) ? $attributes['separatorPosition'] : 'bottom');
$separator_color               = fb_norm_str(isset($attributes['separatorColor']) ? $attributes['separatorColor'] : '#399CFF');
$heading_global_wraper_id      = fb_norm_str(isset($attributes['headingGlobalWraperID']) ? $attributes['headingGlobalWraperID'] : '');
$heading_global_wraper_class   = fb_norm_str(isset($attributes['headingGlobalWraperClass']) ? $attributes['headingGlobalWraperClass'] : '');

$advanced_desktop_switcher     = !empty($attributes['advancedHeadingDesktopSwitcher']);
$advanced_tablet_switcher      = !empty($attributes['advancedHeadingTabletSwitcher']);
$advanced_mobile_switcher      = !empty($attributes['advancedHeadingMobileSwitcher']);
$heading_before_after_switcher = !empty($attributes['headingBeforeAfterSwitcher']);

// Heading dynamic attrs
$dynamicTextEnabled            = !empty($attributes['dynamicTextEnabled']);
$dynamicTextSource             = fb_norm_str(isset($attributes['dynamicTextSource']) ? $attributes['dynamicTextSource'] : 'current_post');
$dynamicTextPostId             = fb_norm_str(isset($attributes['dynamicTextPostId']) ? $attributes['dynamicTextPostId'] : 0);
$dynamicTextPostType           = fb_norm_str(isset($attributes['dynamicTextPostType']) ? $attributes['dynamicTextPostType'] : '');
$dynamicTextPostLabel          = fb_norm_str(isset($attributes['dynamicTextPostLabel']) ? $attributes['dynamicTextPostLabel'] : '');
$dynamicTextField              = fb_norm_str(isset($attributes['dynamicTextField']) ? $attributes['dynamicTextField'] : 'post_title');
$dynamicFeaturedImageField     = fb_norm_str(isset($attributes['dynamicFeaturedImageField']) ? $attributes['dynamicFeaturedImageField'] : 'title');
$dynamicTextDateType           = fb_norm_str(isset($attributes['dynamicTextDateType']) ? $attributes['dynamicTextDateType'] : '');
$dynamicTextDateFormat         = fb_norm_str(isset($attributes['dynamicTextDateFormat']) ? $attributes['dynamicTextDateFormat'] : '');
$dynamicTextTimeType           = fb_norm_str(isset($attributes['dynamicTextTimeType']) ? $attributes['dynamicTextTimeType'] : '');
$dynamicTextTimeFormat         = fb_norm_str(isset($attributes['dynamicTextTimeFormat']) ? $attributes['dynamicTextTimeFormat'] : '');
$dynamicTextCommentsZeroText   = fb_norm_str(isset($attributes['dynamicTextCommentsZeroText']) ? $attributes['dynamicTextCommentsZeroText'] : '');
$dynamicTextCommentsOneText    = fb_norm_str(isset($attributes['dynamicTextCommentsOneText']) ? $attributes['dynamicTextCommentsOneText'] : '');
$dynamicTextCommentsManyText   = fb_norm_str(isset($attributes['dynamicTextCommentsManyText']) ? $attributes['dynamicTextCommentsManyText'] : '');
$dynamicTextTermsTaxonomy      = fb_norm_str(isset($attributes['dynamicTextTermsTaxonomy']) ? $attributes['dynamicTextTermsTaxonomy'] : 'category');
$dynamicTextTermsSeparator     = fb_norm_str(isset($attributes['dynamicTextTermsSeparator']) ? $attributes['dynamicTextTermsSeparator'] : '');
$dynamicTextEnableLink         = !empty($attributes['dynamicTextEnableLink']);
$dynamicTextLinkSource         = fb_norm_str(isset($attributes['dynamicTextLinkSource']) ? $attributes['dynamicTextLinkSource'] : 'post_permalink');

// Sub Heading dynamic attrs
$dynamicSubHeadingTextEnabled 			= !empty($attributes['dynamicSubHeadingTextEnabled']);
$dynamicSubHeadingTextSource 			= fb_norm_str(isset($attributes['dynamicSubHeadingTextSource']) ? $attributes['dynamicSubHeadingTextSource'] : 'current_post');
$dynamicSubHeadingTextPostId 			= fb_norm_str(isset($attributes['dynamicSubHeadingTextPostId']) ? $attributes['dynamicSubHeadingTextPostId'] : 0);
$dynamicSubHeadingTextPostType 			= fb_norm_str(isset($attributes['dynamicSubHeadingTextPostType']) ? $attributes['dynamicSubHeadingTextPostType'] : '');
$dynamicSubHeadingTextPostLabel 		= fb_norm_str(isset($attributes['dynamicSubHeadingTextPostLabel']) ? $attributes['dynamicSubHeadingTextPostLabel'] : '');
$dynamicSubHeadingTextField 			= fb_norm_str(isset($attributes['dynamicSubHeadingTextField']) ? $attributes['dynamicSubHeadingTextField'] : 'post_title');
$dynamicSubHeadingFeaturedImageField 	= fb_norm_str(isset($attributes['dynamicSubHeadingFeaturedImageField']) ? $attributes['dynamicSubHeadingFeaturedImageField'] : 'title');
$dynamicSubHeadingTextDateType 			= fb_norm_str(isset($attributes['dynamicSubHeadingTextDateType']) ? $attributes['dynamicSubHeadingTextDateType'] : 'published');
$dynamicSubHeadingTextDateFormat 		= fb_norm_str(isset($attributes['dynamicSubHeadingTextDateFormat']) ? $attributes['dynamicSubHeadingTextDateFormat'] : 'default');
$dynamicSubHeadingTextTimeType 			= fb_norm_str(isset($attributes['dynamicSubHeadingTextTimeType']) ? $attributes['dynamicSubHeadingTextTimeType'] : 'published');
$dynamicSubHeadingTextTimeFormat 		= fb_norm_str(isset($attributes['dynamicSubHeadingTextTimeFormat']) ? $attributes['dynamicSubHeadingTextTimeFormat'] : 'default');
$dynamicSubHeadingTextCommentsZeroText 	= fb_norm_str(isset($attributes['dynamicSubHeadingTextCommentsZeroText']) ? $attributes['dynamicSubHeadingTextCommentsZeroText'] : '');
$dynamicSubHeadingTextCommentsOneText 	= fb_norm_str(isset($attributes['dynamicSubHeadingTextCommentsOneText']) ? $attributes['dynamicSubHeadingTextCommentsOneText'] : '');
$dynamicSubHeadingTextCommentsManyText 	= fb_norm_str(isset($attributes['dynamicSubHeadingTextCommentsManyText']) ? $attributes['dynamicSubHeadingTextCommentsManyText'] : '');
$dynamicSubHeadingTextTermsTaxonomy 	= fb_norm_str(isset($attributes['dynamicSubHeadingTextTermsTaxonomy']) ? $attributes['dynamicSubHeadingTextTermsTaxonomy'] : 'category');
$dynamicSubHeadingTextTermsSeparator 	= fb_norm_str(isset($attributes['dynamicSubHeadingTextTermsSeparator']) ? $attributes['dynamicSubHeadingTextTermsSeparator'] : '');
$dynamicSubHeadingTextEnableLink 		= !empty($attributes['dynamicSubHeadingTextEnableLink']);
$dynamicSubHeadingTextLinkSource 		= fb_norm_str(isset($attributes['dynamicSubHeadingTextLinkSource']) ? $attributes['dynamicSubHeadingTextLinkSource'] : 'post_permalink');

/**
 * Disable dynamic if not pro active
 */
if ( !Helper::isProActivated() ) {
    $dynamicTextEnabled = false;
    $dynamicSubHeadingTextEnabled = false;
    $dynamicTextEnableLink = false;
    $dynamicSubHeadingTextEnableLink = false;
}

// compute dynamic heading/subheading via reusable function
$heading_dyn = fb_compute_dynamic_text( [
	'enabled'             => $dynamicTextEnabled,
	'source'              => $dynamicTextSource,
	'field'               => $dynamicTextField,
	'post_id'             => $dynamicTextPostId,
	'post_type'           => $dynamicTextPostType,
	'featured_image_field'=> $dynamicFeaturedImageField,
	'date_type'           => $dynamicTextDateType,
	'date_format'         => $dynamicTextDateFormat,
	'time_type'           => $dynamicTextTimeType,
	'time_format'         => $dynamicTextTimeFormat,
	'comments_zero'       => $dynamicTextCommentsZeroText,
	'comments_one'        => $dynamicTextCommentsOneText,
	'comments_many'       => $dynamicTextCommentsManyText,
	'terms_taxonomy'      => $dynamicTextTermsTaxonomy,
	'terms_separator'     => $dynamicTextTermsSeparator,
	'link_enabled'        => $dynamicTextEnableLink,
	'link_source'         => $dynamicTextLinkSource,
] );

$sub_dyn = fb_compute_dynamic_text( [
	'enabled'             => $dynamicSubHeadingTextEnabled,
	'source'              => $dynamicSubHeadingTextSource,
	'field'               => $dynamicSubHeadingTextField,
	'post_id'             => $dynamicSubHeadingTextPostId,
	'post_type'           => $dynamicSubHeadingTextPostType,
	'featured_image_field'=> $dynamicSubHeadingFeaturedImageField,
	'date_type'           => $dynamicSubHeadingTextDateType,
	'date_format'         => $dynamicSubHeadingTextDateFormat,
	'time_type'           => $dynamicSubHeadingTextTimeType,
	'time_format'         => $dynamicSubHeadingTextTimeFormat,
	'comments_zero'       => $dynamicSubHeadingTextCommentsZeroText,
	'comments_one'        => $dynamicSubHeadingTextCommentsOneText,
	'comments_many'       => $dynamicSubHeadingTextCommentsManyText,
	'terms_taxonomy'      => $dynamicSubHeadingTextTermsTaxonomy,
	'terms_separator'     => $dynamicSubHeadingTextTermsSeparator,
	'link_enabled'        => $dynamicSubHeadingTextEnableLink,
	'link_source'         => $dynamicSubHeadingTextLinkSource,
] );

// Final display values
$headingDisplayValue    = $dynamicTextEnabled ? $heading_dyn['value'] : $heading_text;
$heading_link_url       = ($dynamicTextEnabled && $dynamicTextEnableLink) ? $heading_dyn['link_url'] : '';

$subHeadingDisplayValue = $dynamicSubHeadingTextEnabled ? $sub_dyn['value'] : $sub_heading_text;
$sub_heading_link_url   = ($dynamicSubHeadingTextEnabled && $dynamicSubHeadingTextEnableLink) ? $sub_dyn['link_url'] : '';

// ---------- classes (match save.js) ----------
$responsive_classes = [];
if ($advanced_desktop_switcher)  $responsive_classes[] = 'fb-desktop-responsive';
if ($advanced_tablet_switcher)   $responsive_classes[] = 'fb-tablet-responsive';
if ($advanced_mobile_switcher)   $responsive_classes[] = 'fb-mobile-responsive';
if ($heading_before_after_switcher) $responsive_classes[] = 'fb-advanced-heading-before-after';

$base_classes = array_merge(['frontis-block', 'fb-advanced-heading-main-wrapper', $block_id], $responsive_classes);

// sanitize and keep as array
$wrapper_classes_arr = array_filter(array_map(function($c){
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

// precompute wrapper attributes string
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);

?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="fb-parent-wrapper fb-advanced-wrapper <?php echo esc_attr( $heading_global_wraper_class ); ?>"
	     <?php if ( $heading_global_wraper_id ) : ?>
		     id="<?php echo esc_attr( $heading_global_wraper_id ); ?>"
	     <?php endif; ?>
	     <?php if ( $heading_alignment ) : ?>
		     style="text-align:<?php echo esc_attr( $heading_alignment ); ?>;"
	     <?php endif; ?>
	>

		<?php if ( $heading_icon_switcher && $heading_icon_align === 'icon' ) : ?>
			<div class="fb-advanced-icon-wrapper" style="justify-content:<?php echo esc_attr( $heading_alignment ?: 'initial' ); ?>;">
				<div class="fb-advanced-icon"><?php echo $heading_icon_frontend; ?></div>
			</div>
		<?php endif; ?>

		<?php if ( $show_separator_switcher && $separator_position === 'top' ) : ?>
			<div class="fb-advanced-title-separator">
                <?php if ( $separator === 'zigzag' ) : ?>
                    <div class='fb-advanced-title-separator-zigzag'>
                        <svg 
                            class='fb-advanced-title-separator-zigzag-svg' 
                            width="322" 
                            height="7" 
                            viewBox="0 0 322 7" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            style="stroke: <?php echo esc_attr( $separator_color ); ?>;"
                        >
                            <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094" 
                            strokeWidth="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                <?php endif; ?>
            </div>
		<?php endif; ?>

		<?php if ( $sub_heading_switcher && $sub_heading_position === 'top' ) : ?>
			<div class="fb-advanced-sub-heading-wrapper">
				<<?php echo esc_attr( $sub_heading_tag ); ?> class="fb-advanced-sub-heading">
					<?php if ( $dynamicSubHeadingTextEnabled && $dynamicSubHeadingTextEnableLink && $sub_heading_link_url ) : ?>
						<a class="fb-dynamic-link" href="<?php echo esc_url( $sub_heading_link_url ); ?>">
							<?php echo wp_kses_post( $subHeadingDisplayValue ); ?>
						</a>
					<?php else : ?>
						<?php echo wp_kses_post( $subHeadingDisplayValue ); ?>
					<?php endif; ?>
				</<?php echo esc_attr( $sub_heading_tag ); ?>>
			</div>
		<?php endif; ?>

		<div class="fb-advanced-heading-wrapper">
			<<?php echo esc_attr( $heading_tag ); ?> class="fb-advanced-heading<?php echo $active_line_switcher ? ' active-line' : ''; ?>">
				<?php if ( $dynamicTextEnabled && $dynamicTextEnableLink && $heading_link_url ) : ?>
					<a class="fb-dynamic-link" href="<?php echo esc_url( $heading_link_url ); ?>">
						<?php echo wp_kses_post( $headingDisplayValue ); ?>
					</a>
				<?php else : ?>
					<?php echo wp_kses_post( $headingDisplayValue ); ?>
				<?php endif; ?>
			</<?php echo esc_attr( $heading_tag ); ?>>
		</div>

		<?php if ( $sub_heading_switcher && $sub_heading_position === 'bottom' ) : ?>
			<div class="fb-advanced-sub-heading-wrapper">
				<<?php echo esc_attr( $sub_heading_tag ); ?> class="fb-advanced-sub-heading">
					<?php if ( $dynamicSubHeadingTextEnabled && $dynamicSubHeadingTextEnableLink && $sub_heading_link_url ) : ?>
						<a class="fb-dynamic-link" href="<?php echo esc_url( $sub_heading_link_url ); ?>">
							<?php echo wp_kses_post( $subHeadingDisplayValue ); ?>
						</a>
					<?php else : ?>
						<?php echo wp_kses_post( $subHeadingDisplayValue ); ?>
					<?php endif; ?>
				</<?php echo esc_attr( $sub_heading_tag ); ?>>
			</div>
		<?php endif; ?>

		<?php if ( $show_separator_switcher && $separator_position === 'bottom' ) : ?>
			<div class="fb-advanced-title-separator">
                <?php if ( $separator === 'zigzag' ) : ?>
                    <div class='fb-advanced-title-separator-zigzag'>
                        <svg 
                            class='fb-advanced-title-separator-zigzag-svg' 
                            width="322" 
                            height="7" 
                            viewBox="0 0 322 7" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            style="stroke: <?php echo esc_attr( $separator_color ); ?>;"
                        >
                            <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094" 
                            strokeWidth="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                <?php endif; ?>
            </div>
		<?php endif; ?>
	</div>
</div>