<?php
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

// --- Dynamic helpers (add after your existing helpers) ---
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



$dynamicEnabled                = !empty($attributes['dynamicEnabled']);
$dynamicSource                 = fb_norm_str(isset($attributes['dynamicSource']) ? $attributes['dynamicSource'] : 'current_post');
$dynamicPostId                 = fb_norm_str(isset($attributes['dynamicPostId']) ? $attributes['dynamicPostId'] : 0);
$dynamicPostType               = fb_norm_str(isset($attributes['dynamicPostType']) ? $attributes['dynamicPostType'] : '');
$dynamicPostLabel              = fb_norm_str(isset($attributes['dynamicPostLabel']) ? $attributes['dynamicPostLabel'] : '');
$dynamicField                  = fb_norm_str(isset($attributes['dynamicField']) ? $attributes['dynamicField'] : 'post_title');
$dynamicEnableLink             = !empty($attributes['dynamicEnableLink']);
$dynamicFeaturedImageField     = fb_norm_str(isset($attributes['dynamicFeaturedImageField']) ? $attributes['dynamicFeaturedImageField'] : 'title');

$dynamicDateType               = fb_norm_str(isset($attributes['dynamicDateType']) ? $attributes['dynamicDateType'] : '');
$dynamicDateFormat             = fb_norm_str(isset($attributes['dynamicDateFormat']) ? $attributes['dynamicDateFormat'] : '');

$dynamicTimeType               = fb_norm_str(isset($attributes['dynamicTimeType']) ? $attributes['dynamicTimeType'] : '');
$dynamicTimeFormat             = fb_norm_str(isset($attributes['dynamicTimeFormat']) ? $attributes['dynamicTimeFormat'] : '');

$dynamicCommentsZeroText       = fb_norm_str(isset($attributes['dynamicCommentsZeroText']) ? $attributes['dynamicCommentsZeroText'] : '');
$dynamicCommentsOneText        = fb_norm_str(isset($attributes['dynamicCommentsOneText']) ? $attributes['dynamicCommentsOneText'] : '');
$dynamicCommentsManyText       = fb_norm_str(isset($attributes['dynamicCommentsManyText']) ? $attributes['dynamicCommentsManyText'] : '');

$dynamicTermsTaxonomy          = fb_norm_str(isset($attributes['dynamicTermsTaxonomy']) ? $attributes['dynamicTermsTaxonomy'] : 'category');
$dynamicTermsSeparator         = fb_norm_str(isset($attributes['dynamicTermsSeparator']) ? $attributes['dynamicTermsSeparator'] : '');

$dynamicLinkSource             = fb_norm_str(isset($attributes['dynamicLinkSource']) ? $attributes['dynamicLinkSource'] : 'post_permalink');



// -------- DYNAMIC: compute $dynamic_value and $dynamic_permalink ----------
$dynamic_value     = '';
$dynamic_permalink = '';
$dynamic_link_url = '';

$is_site_field    = in_array( $dynamicSource, ['site_title','site_tagline'], true );
$is_archive_field = in_array( $dynamicSource, ['archive_title','archive_description'], true );
$is_post_based    = in_array( $dynamicSource, ['current_post','post_type'], true );

$target_post_id   = ($dynamicSource === 'post_type' && $dynamicPostId) ? (int) $dynamicPostId : get_the_ID();
$target_post_type = ($dynamicSource === 'post_type' && $dynamicPostType) ? $dynamicPostType : get_post_type( $target_post_id );

// Only compute if enabled
if ( $dynamicEnabled ) {

	if ( $is_site_field ) {
		if ( $dynamicSource === 'site_title' ) {
			$dynamic_value = fb_get_plain_text( get_bloginfo( 'name' ) ?: __( 'No Content', 'frontis-blocks' ) );
		} elseif ( $dynamicSource === 'site_tagline' ) {
			$dynamic_value = fb_get_plain_text( get_bloginfo( 'description' ) ?: __( 'No Content', 'frontis-blocks' ) );
		}
	}
	elseif ( $is_archive_field ) {
		if ( $dynamicSource === 'archive_title' ) {
			$dynamic_value = fb_get_plain_text( get_the_archive_title() ?: __( 'No Content', 'frontis-blocks' ) );
		} else {
			$dynamic_value = fb_get_plain_text( get_the_archive_description() ?: __( 'No Content', 'frontis-blocks' ) );
		}
	}
	elseif ( $is_post_based && $target_post_id ) {
		$post = get_post( $target_post_id );

		// permalink (for optional link)
		if ( $post && ! is_wp_error( $post ) ) {
			$dynamic_permalink = get_permalink( $post );
		}

		switch ( $dynamicField ) {
			case 'post_title':
				$dynamic_value = fb_get_plain_text( $post ? get_the_title( $post ) : '' );
				break;

			case 'post_excerpt':
				if ( $post ) {
					$raw = has_excerpt( $post ) ? $post->post_excerpt : '';
					$dynamic_value = $raw ? fb_get_plain_text( $raw ) : __( 'No Content', 'frontis-blocks' );
				}
				break;

			case 'post_thumbnail':
				// pick subfield
				$thumb_id = $post ? get_post_thumbnail_id( $post ) : 0;
				if ( ! $thumb_id ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }

				$sub = $dynamicFeaturedImageField ?: 'attachment_url';
				switch ( $sub ) {
					case 'title':
						$dynamic_value = fb_get_plain_text( get_the_title( $thumb_id ) );
						break;
					case 'alt':
						$dynamic_value = fb_get_plain_text( get_post_meta( $thumb_id, '_wp_attachment_image_alt', true ) );
						break;
					case 'caption':
						$dynamic_value = fb_get_plain_text( wp_get_attachment_caption( $thumb_id ) );
						break;
					case 'description': {
						$att = get_post( $thumb_id );
						$dynamic_value = fb_get_plain_text( $att ? $att->post_content : '' );
						break;
					}
					case 'attachment_url':
					default:
						$dynamic_value = wp_get_attachment_url( $thumb_id ) ?: __( 'No Content', 'frontis-blocks' );
						break;
				}
				break;

			case 'post_date': {
				$raw = ($dynamicDateType === 'modified') ? get_post_modified_time( 'U', true, $post ) : get_post_time( 'U', true, $post );
				if ( ! $raw ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }

				switch ( $dynamicDateFormat ) {
					case 'jS F Y':
					case 'Y-m-d':
					case 'm/d/Y':
					case 'd/m/Y':
						$dynamic_value = date_i18n( $dynamicDateFormat, (int) $raw );
						break;
					case 'human':
						$dynamic_value = fb_humanize_date( (int) $raw );
						break;
					case 'default':
					default:
						$dynamic_value = date_i18n( fb_get_site_date_format(), (int) $raw );
						break;
				}
				break;
			}

			case 'post_time': {
				$raw = ($dynamicTimeType === 'modified') ? get_post_modified_time( 'U', true, $post ) : get_post_time( 'U', true, $post );
				if ( ! $raw ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }

				$fmt = $dynamicTimeFormat && $dynamicTimeFormat !== 'default' ? $dynamicTimeFormat : fb_get_site_time_format();
				$dynamic_value = date_i18n( $fmt, (int) $raw );
				break;
			}

			case 'post_terms': {
				$tax = $dynamicTermsTaxonomy ?: '';
				if ( ! $tax ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }
				$terms = get_the_terms( $post, $tax );
				if ( is_wp_error( $terms ) || empty( $terms ) ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }
				$sep = $dynamicTermsSeparator !== '' ? $dynamicTermsSeparator : ', ';
				$dynamic_value = implode( $sep, wp_list_pluck( $terms, 'name' ) );
				break;
			}

			case 'post_id':
				$dynamic_value = $post ? (string) $post->ID : '';
				break;

            case 'comments_number': {
                $count = ($post instanceof WP_Post) ? get_comments_number( $post ) : 0;
                $count = is_numeric( $count ) ? (int) $count : 0;
            
                $zeroTxt = trim( $dynamicCommentsZeroText ?: __( 'No Responses', 'frontis-blocks' ) );
                $oneTxt  = trim( $dynamicCommentsOneText  ?: __( 'One Response',  'frontis-blocks' ) );
                $manyTxt = trim( $dynamicCommentsManyText ?: __( 'Responses {num}', 'frontis-blocks' ) );
            
                if ( $count === 0 ) {
                    $dynamic_value = $zeroTxt;
                } elseif ( $count === 1 ) {
                    $dynamic_value = $oneTxt;
                } else {
                    if ( strpos( $manyTxt, '{num}' ) !== false ) {
                        $dynamic_value = str_replace( '{num}', (string) $count, $manyTxt );
                    } else {
                        $dynamic_value = $manyTxt; // no auto-append
                    }
                }
                break;
            }

			// ---- Author fields ----
            case 'author_name':
            case 'author_first_name':
            case 'author_last_name':
            case 'author_nickname':
            case 'author_description':
            case 'author_email':
            case 'author_url':
            case 'author_avatar': {
                $author_id = $post ? (int) $post->post_author : 0;
                if ( ! $author_id ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }
            
                switch ( $dynamicField ) {
                    case 'author_name': {
                        $val = fb_get_plain_text( get_the_author_meta( 'display_name', $author_id ) );
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_first_name': {
                        $val = fb_get_plain_text( get_the_author_meta( 'first_name', $author_id ) );
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_last_name': {
                        $val = fb_get_plain_text( get_the_author_meta( 'last_name', $author_id ) );
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_nickname': {
                        $val = fb_get_plain_text( get_the_author_meta( 'nickname', $author_id ) );
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_description': {
                        $val = fb_get_plain_text( get_the_author_meta( 'description', $author_id ) );
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_email': {
                        $raw = get_the_author_meta( 'email', $author_id );
                        $val = is_string( $raw ) ? trim( $raw ) : '';
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_url': {
                        $raw = get_the_author_meta( 'url', $author_id );
                        $val = is_string( $raw ) ? trim( $raw ) : '';
                        $dynamic_value = $val !== '' ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                    case 'author_avatar': {
                        $val = get_avatar_url( $author_id, [ 'size' => 96 ] );
                        $dynamic_value = $val ? $val : __( 'No Content', 'frontis-blocks' );
                        break;
                    }
                }
                break;
            }

			default:
				$dynamic_value = '';
		}
	}
}


// Only compute link when dynamic is enabled & link toggle is on
if ( $dynamicEnabled && $dynamicEnableLink ) {

    switch ( $dynamicLinkSource ) {
        case 'post_permalink':
            // Already computed above
            $dynamic_link_url = $dynamic_permalink ?: '';
            break;

        case 'comments_area':
			$dynamic_link_url = $post ? get_comments_link( $post ) : '';
            break;

        case 'featured_image':
            // Full size thumbnail URL
            $dynamic_link_url = $post ? ( get_the_post_thumbnail_url( $post, 'full' ) ?: '' ) : '';
            break;

        case 'avatar_profile_url': {
            $author_id = $post ? (int) $post->post_author : 0;
            $dynamic_link_url = $author_id ? ( get_avatar_url( $author_id ) ?: '' ) : '';
            break;
        }

        case 'author_page_url': {
            $pt = $post ? get_post_type( $post ) : ( $target_post_type ?: '' );
            $dynamic_link_url = $pt ? ( get_post_type_archive_link( $pt ) ?: '' ) : '';
            break;
        }

        case 'archive_url':
            $author_id = $post ? (int) $post->post_author : 0;
            $dynamic_link_url = $author_id ? get_author_posts_url( $author_id ) : '';
            break;

        default:
            $dynamic_link_url = '';
            break;
    }
}

// Final text that will appear in heading (only heading is dynamic like in Edit.js)
$dynamicDisplayValue = $dynamicEnabled ? $dynamic_value : $heading_text;



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
					<?php echo wp_kses_post( $sub_heading_text ); ?>
				</<?php echo esc_attr( $sub_heading_tag ); ?>>
			</div>
		<?php endif; ?>

		<div class="fb-advanced-heading-wrapper">
			<<?php echo esc_attr( $heading_tag ); ?> class="fb-advanced-heading<?php echo $active_line_switcher ? ' active-line' : ''; ?>">
				<?php if ( $dynamicEnabled && $dynamicEnableLink && $dynamic_link_url ) : ?>
					<a class="fb-dynamic-link" href="<?php echo esc_url( $dynamic_link_url ); ?>">
						<?php echo wp_kses_post( $dynamicDisplayValue ); ?>
					</a>
				<?php else : ?>
					<?php echo wp_kses_post( $dynamicDisplayValue ); ?>
				<?php endif; ?>
			</<?php echo esc_attr( $heading_tag ); ?>>
		</div>

		<?php if ( $sub_heading_switcher && $sub_heading_position === 'bottom' ) : ?>
			<div class="fb-advanced-sub-heading-wrapper">
				<<?php echo esc_attr( $sub_heading_tag ); ?> class="fb-advanced-sub-heading">
					<?php echo wp_kses_post( $sub_heading_text ); ?>
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
