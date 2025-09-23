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
                return $diff >= 0
                    ? sprintf( _n( '%d '.$u.' ago', '%d '.$u.'s ago', $v, 'frontis-blocks' ), $v )
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

// ---------- extract & normalize (attributes) ----------
$block_id                  = fb_norm_str( isset($attributes['blockId']) ? $attributes['blockId'] : '' );

$button_alignment          = fb_norm_str( isset($attributes['buttonAlignment']) ? $attributes['buttonAlignment'] : 'left' );
$button_text_switcher      = isset($attributes['buttonTextSwitcher']) ? ! empty($attributes['buttonTextSwitcher']) : true;
$button_text               = fb_norm_str( isset($attributes['buttonText']) ? $attributes['buttonText'] : 'Add Text' );

$button_url                = fb_norm_str( isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '' );
$button_target_url         = ! empty( $attributes['buttonTargetUrl'] );

$button_icon_align         = fb_norm_str( isset($attributes['buttonIconAlign']) ? $attributes['buttonIconAlign'] : 'none' );
$button_icon_position      = fb_norm_str( isset($attributes['buttonIconPosition']) ? $attributes['buttonIconPosition'] : 'right' );

$button_icon_frontend      = fb_norm_str( isset($attributes['buttonIconFrontend']) ? $attributes['buttonIconFrontend'] : '' );
$button_icon_image_url     = fb_norm_str( isset($attributes['buttonIconImageUrl']) ? $attributes['buttonIconImageUrl'] : '' );
$button_icon_image_alt     = fb_norm_str( isset($attributes['buttonIconImageAlt']) ? $attributes['buttonIconImageAlt'] : '' );

$button_global_wraper_id   = fb_norm_str( isset($attributes['buttonGlobalWraperID']) ? $attributes['buttonGlobalWraperID'] : '' );
$button_global_wraper_class= fb_norm_str( isset($attributes['buttonGlobalWraperClass']) ? $attributes['buttonGlobalWraperClass'] : '' );

$advanced_btn_desktop      = ! empty( $attributes['advancedBtnDesktopSwitcher'] );
$advanced_btn_tablet       = ! empty( $attributes['advancedBtnTabletSwitcher'] );
$advanced_btn_mobile       = ! empty( $attributes['advancedBtnMobileSwitcher'] );

$dynamic_enabled           = ! empty( $attributes['dynamicTextEnabled'] );
$dynamic_source            = fb_norm_str( isset($attributes['dynamicTextSource']) ? $attributes['dynamicTextSource'] : 'current_post' );
$dynamic_post_id_attr      = fb_norm_str( isset($attributes['dynamicTextPostId']) ? $attributes['dynamicTextPostId'] : 0 );
$dynamic_post_type_attr    = fb_norm_str( isset($attributes['dynamicTextPostType']) ? $attributes['dynamicTextPostType'] : '' );
$dynamic_post_label        = fb_norm_str( isset($attributes['dynamicTextPostLabel']) ? $attributes['dynamicTextPostLabel'] : '' ); // optional
$dynamic_field             = fb_norm_str( isset($attributes['dynamicTextField']) ? $attributes['dynamicTextField'] : 'post_title' );
$dynamic_feat_img_field    = fb_norm_str( isset($attributes['dynamicFeaturedImageField']) ? $attributes['dynamicFeaturedImageField'] : 'title' );

$dynamic_date_type         = fb_norm_str( isset($attributes['dynamicTextDateType']) ? $attributes['dynamicTextDateType'] : 'published' );
$dynamic_date_format       = fb_norm_str( isset($attributes['dynamicTextDateFormat']) ? $attributes['dynamicTextDateFormat'] : 'default' );

$dynamic_time_type         = fb_norm_str( isset($attributes['dynamicTextTimeType']) ? $attributes['dynamicTextTimeType'] : 'published' );
$dynamic_time_format       = fb_norm_str( isset($attributes['dynamicTextTimeFormat']) ? $attributes['dynamicTextTimeFormat'] : 'default' );

$dynamic_comments_zero     = fb_norm_str( isset($attributes['dynamicTextCommentsZeroText']) ? $attributes['dynamicTextCommentsZeroText'] : 'No Response' );
$dynamic_comments_one      = fb_norm_str( isset($attributes['dynamicTextCommentsOneText']) ? $attributes['dynamicTextCommentsOneText'] : 'One Response' ); 
$dynamic_comments_many     = fb_norm_str( isset($attributes['dynamicTextCommentsManyText']) ? $attributes['dynamicTextCommentsManyText'] : '{num} Response' );

$dynamic_terms_taxonomy    = fb_norm_str( isset($attributes['dynamicTextTermsTaxonomy']) ? $attributes['dynamicTextTermsTaxonomy'] : 'category' );
$dynamic_terms_separator   = fb_norm_str( isset($attributes['dynamicTextTermsSeparator']) ? $attributes['dynamicTextTermsSeparator'] : ',' );

$dynamic_enable_link       = ! empty( $attributes['dynamicTextEnableLink'] );
$dynamic_link_source       = fb_norm_str( isset($attributes['dynamicTextLinkSource']) ? $attributes['dynamicTextLinkSource'] : 'post_permalink' );

// -------- DYNAMIC: compute $dynamic_value and $dynamic_permalink ----------
$dynamic_value     = '';
$dynamic_permalink = '';
$dynamic_link_url  = '';

$is_site_field     = in_array( $dynamic_source, ['site_title','site_tagline'], true );
$is_archive_field  = in_array( $dynamic_source, ['archive_title','archive_description'], true );
$is_post_based     = in_array( $dynamic_source, ['current_post','post_type'], true );

$target_post_id    = ( $dynamic_source === 'post_type' && $dynamic_post_id_attr ) ? (int) $dynamic_post_id_attr : get_the_ID();
$target_post_type  = ( $dynamic_source === 'post_type' && $dynamic_post_type_attr ) ? $dynamic_post_type_attr : get_post_type( $target_post_id );

// Only compute if enabled
if ( $dynamic_enabled ) {

    if ( $is_site_field ) {
        if ( $dynamic_source === 'site_title' ) {
            $dynamic_value = fb_get_plain_text( get_bloginfo( 'name' ) ?: __( 'No Content', 'frontis-blocks' ) );
        } elseif ( $dynamic_source === 'site_tagline' ) {
            $dynamic_value = fb_get_plain_text( get_bloginfo( 'description' ) ?: __( 'No Content', 'frontis-blocks' ) );
        }
    }
    elseif ( $is_archive_field ) {
        if ( $dynamic_source === 'archive_title' ) {
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

        switch ( $dynamic_field ) {
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
                $thumb_id = $post ? get_post_thumbnail_id( $post ) : 0;
            
                if ( ! $thumb_id ) {
                    $dynamic_value = __( 'No Content', 'frontis-blocks' );
                    break;
                }
            
                $sub = $dynamic_feat_img_field ?: 'attachment_url';
            
                switch ( $sub ) {
                    case 'title':
                        $dynamic_value = fb_get_plain_text( get_the_title( $thumb_id ) ) ?: __( 'No Content', 'frontis-blocks' );
                        break;
            
                    case 'alt':
                        $dynamic_value = fb_get_plain_text( get_post_meta( $thumb_id, '_wp_attachment_image_alt', true ) ) ?: __( 'No Content', 'frontis-blocks' );
                        break;
            
                    case 'caption':
                        $dynamic_value = fb_get_plain_text( wp_get_attachment_caption( $thumb_id ) ) ?: __( 'No Content', 'frontis-blocks' );
                        break;
            
                    case 'description': {
                        $att = get_post( $thumb_id );
                        $dynamic_value = fb_get_plain_text( $att ? $att->post_content : '' ) ?: __( 'No Content', 'frontis-blocks' );
                        break;
                    }
            
                    case 'attachment_url':
                    default:
                        $dynamic_value = wp_get_attachment_url( $thumb_id ) ?: __( 'No Content', 'frontis-blocks' );
                        break;
                }
                break;

            case 'post_date': {
                $raw = ( $dynamic_date_type === 'modified' )
                    ? get_post_modified_time( 'U', true, $post )
                    : get_post_time( 'U', true, $post );
                if ( ! $raw ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }

                switch ( $dynamic_date_format ) {
                    case 'jS F Y':
                    case 'Y-m-d':
                    case 'm/d/Y':
                    case 'd/m/Y':
                        $dynamic_value = date_i18n( $dynamic_date_format, (int) $raw );
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
                $raw = ( $dynamic_time_type === 'modified' )
                    ? get_post_modified_time( 'U', true, $post )
                    : get_post_time( 'U', true, $post );
                if ( ! $raw ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }

                $fmt = ( $dynamic_time_format && $dynamic_time_format !== 'default' )
                    ? $dynamic_time_format
                    : fb_get_site_time_format();
                $dynamic_value = date_i18n( $fmt, (int) $raw );
                break;
            }

            case 'post_terms': {
                $tax = $dynamic_terms_taxonomy ?: '';
                if ( ! $tax ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }
                $terms = get_the_terms( $post, $tax );
                if ( is_wp_error( $terms ) || empty( $terms ) ) { $dynamic_value = __( 'No Content', 'frontis-blocks' ); break; }
                $sep = $dynamic_terms_separator !== '' ? $dynamic_terms_separator : ', ';
                $dynamic_value = implode( $sep, wp_list_pluck( $terms, 'name' ) );
                break;
            }

            case 'post_id':
                $dynamic_value = $post ? (string) $post->ID : '';
                break;

            case 'comments_number': {
                $count = ( $post instanceof WP_Post ) ? get_comments_number( $post ) : 0;
                $count = is_numeric( $count ) ? (int) $count : 0;

                $zeroTxt = trim( $dynamic_comments_zero ?: __( 'No Responses', 'frontis-blocks' ) );
                $oneTxt  = trim( $dynamic_comments_one  ?: __( 'One Response',  'frontis-blocks' ) );
                $manyTxt = trim( $dynamic_comments_many ?: __( 'Responses {num}', 'frontis-blocks' ) );

                if ( $count === 0 ) {
                    $dynamic_value = $zeroTxt;
                } elseif ( $count === 1 ) {
                    $dynamic_value = $oneTxt;
                } else {
                    if ( strpos( $manyTxt, '{num}' ) !== false ) {
                        $dynamic_value = str_replace( '{num}', (string) $count, $manyTxt );
                    } else {
                        $dynamic_value = $manyTxt;
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

                switch ( $dynamic_field ) {
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
if ( $dynamic_enabled && $dynamic_enable_link ) {

    // ensure $post if needed
    if ( ! isset( $post ) && $is_post_based && $target_post_id ) {
        $post = get_post( $target_post_id );
    }

    switch ( $dynamic_link_source ) {
        case 'post_permalink':
            $dynamic_link_url = $dynamic_permalink ?: '';
            break;

        case 'comments_area':
            $dynamic_link_url = ! empty( $post ) ? get_comments_link( $post ) : '';
            break;

        case 'featured_image':
            $dynamic_link_url = ! empty( $post ) ? ( get_the_post_thumbnail_url( $post, 'full' ) ?: '' ) : '';
            break;

        case 'avatar_profile_url': {
            $author_id = ! empty( $post ) ? (int) $post->post_author : 0;
            $dynamic_link_url = $author_id ? ( get_avatar_url( $author_id ) ?: '' ) : '';
            break;
        }

        case 'author_page_url': {
            $pt = ! empty( $post ) ? get_post_type( $post ) : ( $target_post_type ?: '' );
            $dynamic_link_url = $pt ? ( get_post_type_archive_link( $pt ) ?: '' ) : '';
            break;
        }

        case 'archive_url': {
            $author_id = ! empty( $post ) ? (int) $post->post_author : 0;
            $dynamic_link_url = $author_id ? get_author_posts_url( $author_id ) : '';
            break;
        }

        default:
            $dynamic_link_url = '';
            break;
    }
}

// ---------- classes ----------
$responsive_classes = [];
if ( $advanced_btn_desktop ) $responsive_classes[] = 'fb-desktop-responsive';
if ( $advanced_btn_tablet  ) $responsive_classes[] = 'fb-tablet-responsive';
if ( $advanced_btn_mobile  ) $responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge( ['frontis-block', 'fb-advanced-button-main-wrapper', $block_id], $responsive_classes );

$wrapper_classes_arr = array_filter( array_map( function( $c ) {
    return sanitize_html_class( fb_norm_str( $c ) );
}, $base_classes ) );

$wrapper_attributes = get_block_wrapper_attributes( [
    'class' => implode( ' ', $wrapper_classes_arr ),
] );

// ---------- final text (dynamic or manual) ----------
$final_button_text = $dynamic_enabled ? $dynamic_value : $button_text;

// ---------- link (dynamic takes priority if enabled & URL exists) ----------
$final_href   = '';
$final_target = $button_target_url ? ' target="_blank" rel="noopener noreferrer"' : '';

if ( $dynamic_enabled && $dynamic_enable_link && $dynamic_link_url ) {
    $final_href = esc_url( $dynamic_link_url );
} else {
    $final_href = esc_url( $button_url );
}

?>
<div <?php echo $wrapper_attributes; ?>>
    <div
        class="fb-parent-wrapper fb-advanced-button-wrapper <?php echo esc_attr( $button_global_wraper_class ); ?>"
        <?php if ( $button_global_wraper_id ) : ?>
            id="<?php echo esc_attr( $button_global_wraper_id ); ?>"
        <?php endif; ?>
        <?php if ( $button_alignment ) : ?>
            style="text-align:<?php echo esc_attr( $button_alignment ); ?>;"
        <?php endif; ?>
    >
        <a class="fb-advanced-button"<?php echo $final_href ? ' href="'.$final_href.'"' : ''; ?><?php echo $final_target; ?>>
            <?php if ( $button_icon_position === 'left' && $button_icon_align === 'icon-text' ) : ?>
                <div class="fb-advanced-button-icon-wrapper left">
                    <div class="fb-advanced-button-icon"><?php echo $button_icon_frontend; ?></div>
                </div>
            <?php endif; ?>

            <?php if ( $button_icon_position === 'left' && $button_icon_align === 'image' && $button_icon_image_url ) : ?>
                <div class="fb-advanced-button-icon-wrapper left">
                    <div class="fb-advanced-button-icon-image">
                        <img src="<?php echo esc_url( $button_icon_image_url ); ?>" alt="<?php echo esc_attr( $button_icon_image_alt ); ?>" />
                    </div>
                </div>
            <?php endif; ?>

            <?php if ( $button_text_switcher ) : ?>
                <span class="fb-advanced-button-text">
                    <?php
                        echo wp_kses_post( $final_button_text !== '' ? $final_button_text : '' );
                    ?>
                </span>
            <?php endif; ?>

            <?php if ( $button_icon_position === 'right' && $button_icon_align === 'icon-text' ) : ?>
                <div class="fb-advanced-button-icon-wrapper right">
                    <div class="fb-advanced-button-icon"><?php echo $button_icon_frontend; ?></div>
                </div>
            <?php endif; ?>

            <?php if ( $button_icon_position === 'right' && $button_icon_align === 'image' && $button_icon_image_url ) : ?>
                <div class="fb-advanced-button-icon-wrapper right">
                    <div class="fb-advanced-button-icon-image">
                        <img src="<?php echo esc_url( $button_icon_image_url ); ?>" alt="<?php echo esc_attr( $button_icon_image_alt ); ?>" />
                    </div>
                </div>
            <?php endif; ?>
        </a>
    </div>
</div>
