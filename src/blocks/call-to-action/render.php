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
            'year' => 31536000, 'month' => 2592000, 'week' => 604800, 'day' => 86400,
            'hour' => 3600, 'minute' => 60, 'second' => 1,
        ];
        foreach ( $units as $u => $s ) {
            $v = floor( $abs / $s );
            if ( $v >= 1 ) {
                return $diff >= 0
                    ? sprintf( _n( '%d '.$u.' ago', 'in %d '.$u.'s', $v, 'frontis-blocks' ), $v )
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
$block_id            = fb_norm_str( $attributes['blockID'] ?? '' );

$heading_text        = fb_norm_str( $attributes['Heading_Text'] ?? '' );
$heading_tag_attr    = fb_norm_str( $attributes['headingTag'] ?? 'h2' ); // use headingTag if present
$alignment           = fb_norm_str( $attributes['Alignment'] ?? 'left' );

$desc_switcher       = ! empty( $attributes['descriptionSwitcher'] );
$sub_heading_text    = fb_norm_str( $attributes['Sub_Heading_Text'] ?? '' );
$sub_heading_tag     = fb_norm_str( $attributes['Sub_Heading_Tag'] ?? 'p' );
$desc_alignment      = fb_norm_str( $attributes['descAlignment'] ?? 'left' );

$button_alignment    = fb_norm_str( $attributes['buttonAlignment'] ?? 'flex-start' );

// CTA Button One
$cta_btn_one_switch  = ! empty( $attributes['ctaBtnOneSwitcher'] );
$info_button_link    = fb_norm_str( $attributes['info_Button_Link'] ?? '' );
$info_button_text    = fb_norm_str( $attributes['info_Button_Text'] ?? '' );
$btn_icon_pos        = fb_norm_str( $attributes['btnIconPosition'] ?? 'right' );
$btn_icon_switcher   = ! empty( $attributes['buttonIconSwitcher'] );
$btn_icon_frontend   = fb_norm_str( $attributes['btnIconFrontend'] ?? '' ); // optional: svg markup string
$btn_one_target      = ! empty( $attributes['btnOneTargetUrl'] );

// CTA Button Two
$btn_two_switch      = ! empty( $attributes['btnTwoSwitcher'] );
$btn_two_link        = fb_norm_str( $attributes['btnTwoLink'] ?? '' );
$btn_two_text        = fb_norm_str( $attributes['btnTwoText'] ?? '' );
$btn_two_icon_pos    = fb_norm_str( $attributes['btnTwoIconPosition'] ?? 'right' );
$btn_two_icon_switch = ! empty( $attributes['buttonTwoIconSwitcher'] );
$btn_two_icon_front  = fb_norm_str( $attributes['btnTwoIconFrontend'] ?? '' ); // optional: svg markup string
$btn_two_target      = ! empty( $attributes['btnTwoTargetUrl'] );

// wrapper id/class & responsive toggles
$cta_wrapper_id      = fb_norm_str( $attributes['ctaGlobalWraperID'] ?? '' );
$cta_wrapper_class   = fb_norm_str( $attributes['ctaGlobalWraperClass'] ?? '' );
$cta_desktop_sw      = ! empty( $attributes['ctaDesktopSwitcher'] );
$cta_tablet_sw       = ! empty( $attributes['ctaTabletSwitcher'] );
$cta_mobile_sw       = ! empty( $attributes['ctaMobileSwitcher'] );

// Dynamic Title (text + optional link)
$dyn_enabled         = ! empty( $attributes['dynamicTitleEnabled'] );
$dyn_source          = fb_norm_str( $attributes['dynamicTitleSource'] ?? 'current_post' );
$dyn_post_id_attr    = fb_norm_str( $attributes['dynamicTitlePostId'] ?? 0 );
$dyn_post_type_attr  = fb_norm_str( $attributes['dynamicTitlePostType'] ?? '' );
$dyn_field           = fb_norm_str( $attributes['dynamicTitleField'] ?? 'post_title' );
$dyn_feat_img_field  = fb_norm_str( $attributes['dynamicTitleFeaturedImageField'] ?? 'title' );

$dyn_date_type       = fb_norm_str( $attributes['dynamicTitleDateType'] ?? 'published' );
$dyn_date_format     = fb_norm_str( $attributes['dynamicTitleDateFormat'] ?? 'default' );
$dyn_time_type       = fb_norm_str( $attributes['dynamicTitleTimeType'] ?? 'published' );
$dyn_time_format     = fb_norm_str( $attributes['dynamicTitleTimeFormat'] ?? 'default' );

$dyn_cmnt_zero       = fb_norm_str( $attributes['dynamicTitleCommentsZeroText'] ?? 'No Response' );
$dyn_cmnt_one        = fb_norm_str( $attributes['dynamicTitleCommentsOneText'] ?? 'One Response' );
$dyn_cmnt_many       = fb_norm_str( $attributes['dynamicTitleCommentsManyText'] ?? '{num} Response' );

$dyn_terms_tax       = fb_norm_str( $attributes['dynamicTitleTermsTaxonomy'] ?? 'category' );
$dyn_terms_sep       = fb_norm_str( $attributes['dynamicTitleTermsSeparator'] ?? ', ' );

$dyn_link_enabled    = ! empty( $attributes['dynamicTitleEnableLink'] );
$dyn_link_source     = fb_norm_str( $attributes['dynamicTitleLinkSource'] ?? 'post_permalink' );

// ---------- compute dynamic heading value ----------
$dyn_value   = '';
$dyn_url     = '';
$is_site     = in_array( $dyn_source, ['site_title','site_tagline'], true );
$is_archive  = in_array( $dyn_source, ['archive_title','archive_description'], true );
$is_post_src = in_array( $dyn_source, ['current_post','post_type'], true );

$target_post_id   = ( $dyn_source === 'post_type' && $dyn_post_id_attr ) ? (int) $dyn_post_id_attr : get_the_ID();
$target_post_type = ( $dyn_source === 'post_type' && $dyn_post_type_attr ) ? $dyn_post_type_attr : get_post_type( $target_post_id );

if ( $dyn_enabled ) {
    if ( $is_site ) {
        $dyn_value = ($dyn_source === 'site_title')
            ? fb_get_plain_text( get_bloginfo('name') ?: __( 'No Content','frontis-blocks') )
            : fb_get_plain_text( get_bloginfo('description') ?: __( 'No Content','frontis-blocks') );
    }
    elseif ( $is_archive ) {
        $dyn_value = ($dyn_source === 'archive_title')
            ? fb_get_plain_text( get_the_archive_title() ?: __( 'No Content','frontis-blocks') )
            : fb_get_plain_text( get_the_archive_description() ?: __( 'No Content','frontis-blocks') );
    }
    elseif ( $is_post_src && $target_post_id ) {
        $post = get_post( $target_post_id );

        switch ( $dyn_field ) {
            case 'post_title':
                $dyn_value = fb_get_plain_text( $post ? get_the_title($post) : '' );
                break;

            case 'post_excerpt':
                if ( $post ) {
                    $raw = has_excerpt( $post ) ? $post->post_excerpt : '';
                    $dyn_value = $raw ? fb_get_plain_text($raw) : __( 'No Content','frontis-blocks' );
                }
                break;

            case 'post_thumbnail':
                $thumb_id = $post ? get_post_thumbnail_id($post) : 0;
                if ( ! $thumb_id ) { $dyn_value = __( 'No Content','frontis-blocks' ); break; }
                $sub = $dyn_feat_img_field ?: 'attachment_url';
                switch ( $sub ) {
                    case 'title':       $dyn_value = fb_get_plain_text( get_the_title($thumb_id) ) ?: __( 'No Content','frontis-blocks' ); break;
                    case 'alt':         $dyn_value = fb_get_plain_text( get_post_meta($thumb_id, '_wp_attachment_image_alt', true) ) ?: __( 'No Content','frontis-blocks' ); break;
                    case 'caption':     $dyn_value = fb_get_plain_text( wp_get_attachment_caption($thumb_id) ) ?: __( 'No Content','frontis-blocks' ); break;
                    case 'description': $att = get_post($thumb_id); $dyn_value = fb_get_plain_text($att ? $att->post_content : '') ?: __( 'No Content','frontis-blocks' ); break;
                    case 'attachment_url':
                    default:            $dyn_value = wp_get_attachment_url($thumb_id) ?: __( 'No Content','frontis-blocks' ); break;
                }
                break;

            case 'post_date':
                $raw = ($dyn_date_type === 'modified') ? get_post_modified_time('U', true, $post) : get_post_time('U', true, $post);
                if ( ! $raw ) { $dyn_value = __( 'No Content','frontis-blocks' ); break; }
                switch ( $dyn_date_format ) {
                    case 'jS F Y':
                    case 'Y-m-d':
                    case 'm/d/Y':
                    case 'd/m/Y': $dyn_value = date_i18n($dyn_date_format, (int)$raw); break;
                    case 'human': $dyn_value = fb_humanize_date((int)$raw); break;
                    default:      $dyn_value = date_i18n( fb_get_site_date_format(), (int)$raw ); break;
                }
                break;

            case 'post_time':
                $raw = ($dyn_time_type === 'modified') ? get_post_modified_time('U', true, $post) : get_post_time('U', true, $post);
                if ( ! $raw ) { $dyn_value = __( 'No Content','frontis-blocks' ); break; }
                $fmt = ($dyn_time_format && $dyn_time_format !== 'default') ? $dyn_time_format : fb_get_site_time_format();
                $dyn_value = date_i18n( $fmt, (int)$raw );
                break;

            case 'post_terms':
                $tax = $dyn_terms_tax ?: '';
                if ( ! $tax ) { $dyn_value = __( 'No Content','frontis-blocks' ); break; }
                $terms = get_the_terms( $post, $tax );
                if ( is_wp_error($terms) || empty($terms) ) { $dyn_value = __( 'No Content','frontis-blocks' ); break; }
                $sep = ($dyn_terms_sep !== '') ? $dyn_terms_sep : ', ';
                $dyn_value = implode( $sep, wp_list_pluck($terms,'name') );
                break;

            case 'post_id':
                $dyn_value = $post ? (string)$post->ID : '';
                break;

            case 'comments_number':
                $count = ($post instanceof WP_Post) ? (int) get_comments_number($post) : 0;
                $zero = trim( $dyn_cmnt_zero ?: __('No Responses','frontis-blocks') );
                $one  = trim( $dyn_cmnt_one  ?: __('One Response','frontis-blocks') );
                $many = trim( $dyn_cmnt_many ?: __('Responses {num}','frontis-blocks') );
                if ( $count === 0 ) $dyn_value = $zero;
                elseif ( $count === 1 ) $dyn_value = $one;
                else $dyn_value = (strpos($many,'{num}') !== false) ? str_replace('{num}', (string)$count, $many) : $many;
                break;

            case 'author_name':
            case 'author_first_name':
            case 'author_last_name':
            case 'author_nickname':
            case 'author_description':
            case 'author_email':
            case 'author_url':
            case 'author_avatar':
                $author_id = $post ? (int) $post->post_author : 0;
                if ( ! $author_id ) { $dyn_value = __('No Content','frontis-blocks'); break; }
                switch ( $dyn_field ) {
                    case 'author_name':        $v = fb_get_plain_text( get_the_author_meta('display_name', $author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_first_name':  $v = fb_get_plain_text( get_the_author_meta('first_name',  $author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_last_name':   $v = fb_get_plain_text( get_the_author_meta('last_name',   $author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_nickname':    $v = fb_get_plain_text( get_the_author_meta('nickname',    $author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_description': $v = fb_get_plain_text( get_the_author_meta('description', $author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_email':       $v = trim( (string) get_the_author_meta('email',$author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_url':         $v = trim( (string) get_the_author_meta('url',  $author_id) ); $dyn_value = $v !== '' ? $v : __('No Content','frontis-blocks'); break;
                    case 'author_avatar':      $v = get_avatar_url( $author_id, ['size'=>96] ); $dyn_value = $v ?: __('No Content','frontis-blocks'); break;
                }
                break;
        }
    }

    // optional dynamic link for the heading
    if ( $dyn_link_enabled ) {
        if ( ! isset($post) && $is_post_src && $target_post_id ) {
            $post = get_post( $target_post_id );
        }
        switch ( $dyn_link_source ) {
            case 'post_permalink':
                $dyn_url = $target_post_id ? get_permalink( $target_post_id ) : '';
                break;
            case 'comments_area':
                $dyn_url = ! empty($post) ? get_comments_link( $post ) : '';
                break;
            case 'featured_image':
                $dyn_url = ! empty($post) ? ( get_the_post_thumbnail_url($post,'full') ?: '' ) : '';
                break;
            case 'avatar_profile_url':
                $author_id = ! empty($post) ? (int) $post->post_author : 0;
                $dyn_url = $author_id ? ( get_avatar_url($author_id) ?: '' ) : '';
                break;
            case 'author_page_url': {
                $pt = ! empty($post) ? get_post_type($post) : ( $target_post_type ?: '' );
                $dyn_url = $pt ? ( get_post_type_archive_link($pt) ?: '' ) : '';
                break;
            }
            case 'archive_url': {
                $author_id = ! empty($post) ? (int) $post->post_author : 0;
                $dyn_url = $author_id ? get_author_posts_url( $author_id ) : '';
                break;
            }
            default:
                $dyn_url = '';
        }
    }
}

// ---------- classes ----------
$responsive_classes = [];
if ( $cta_desktop_sw ) $responsive_classes[] = 'fb-desktop-responsive';
if ( $cta_tablet_sw  ) $responsive_classes[] = 'fb-tablet-responsive';
if ( $cta_mobile_sw  ) $responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge( ['fb-cta-main-wrapper', $block_id], $responsive_classes );
$wrapper_classes_arr = array_filter( array_map( 'sanitize_html_class', $base_classes ) );

$wrapper_attributes = get_block_wrapper_attributes( [
    'class' => implode( ' ', $wrapper_classes_arr ),
] );

// ---------- final heading text ----------
$final_heading_text = $dyn_enabled ? $dyn_value : $heading_text;

// ---------- sanitize tag names ----------
$allowed_heading_tags = ['h1','h2','h3','h4','h5','h6','p','div','span'];
$heading_tag = in_array( $heading_tag_attr, $allowed_heading_tags, true ) ? $heading_tag_attr : 'h2';
$sub_tag     = in_array( $sub_heading_tag,  $allowed_heading_tags, true ) ? $sub_heading_tag  : 'p';

// ---------- buttons ----------
$btn1_target_attr = $btn_one_target ? ' target="_blank" rel="noopener noreferrer"' : '';
$btn2_target_attr = $btn_two_target ? ' target="_blank" rel="noopener noreferrer"' : '';

// ---------- output ----------
?>
<div <?php echo $wrapper_attributes; ?>>
  <div class="fb-parent-wrapper fb-cta-content-wrapper <?php echo esc_attr( $block_id . ' ' . $cta_wrapper_class ); ?>"
       <?php if ( $cta_wrapper_id ) : ?>id="<?php echo esc_attr( $cta_wrapper_id ); ?>"<?php endif; ?>>
    <div class="fb-cta-content-wrapper-inner <?php echo esc_attr( $block_id ); ?>">
      <div class="fb-cta-content-wrapper">

        <<?php echo $heading_tag; ?> class="fb-heading" style="text-align:<?php echo esc_attr( $alignment ); ?>;">
          <?php if ( $dyn_link_enabled && $dyn_url ) : ?>
            <a href="<?php echo esc_url( $dyn_url ); ?>"><?php echo wp_kses_post( $final_heading_text ); ?></a>
          <?php else: ?>
            <?php echo wp_kses_post( $final_heading_text ); ?>
          <?php endif; ?>
        </<?php echo $heading_tag; ?>>

        <?php if ( $desc_switcher ) : ?>
          <<?php echo $sub_tag; ?> class="fb-description" style="text-align:<?php echo esc_attr( $desc_alignment ); ?>;">
            <?php echo wp_kses_post( $sub_heading_text ); ?>
          </<?php echo $sub_tag; ?>>
        <?php endif; ?>

        <div class="fb-cta-buttons-wrapper" style="justify-content:<?php echo esc_attr( $button_alignment ); ?>;">

          <?php if ( $cta_btn_one_switch ) : ?>
          <div class="fb-cta-btn-one-wrapper">
            <div class="fb-cta-btn-wrapper" style="flex-direction:<?php echo esc_attr( $btn_icon_pos === 'left' ? 'row-reverse' : 'row' ); ?>;">
              <a class="fb-cta-button" href="<?php echo esc_url( $info_button_link ); ?>"<?php echo $btn1_target_attr; ?>>
                <span><?php echo wp_kses_post( $info_button_text ); ?></span>
              </a>
              <?php if ( $btn_icon_switcher && $btn_icon_frontend ) : ?>
                <div class="fb-btn-icon-wrapper"><?php echo $btn_icon_frontend; ?></div>
              <?php endif; ?>
            </div>
          </div>
          <?php endif; ?>

          <?php if ( $btn_two_switch ) : ?>
          <div class="fb-cta-btn-two-wrapper">
            <div class="fb-cta-btn-wrapper" style="flex-direction:<?php echo esc_attr( $btn_two_icon_pos === 'left' ? 'row-reverse' : 'row' ); ?>;">
              <a class="fb-cta-button" href="<?php echo esc_url( $btn_two_link ); ?>"<?php echo $btn2_target_attr; ?>>
                <span><?php echo wp_kses_post( $btn_two_text ); ?></span>
              </a>
              <?php if ( $btn_two_icon_switch && $btn_two_icon_front ) : ?>
                <div class="fb-btn-icon-wrapper"><?php echo $btn_two_icon_front; ?></div>
              <?php endif; ?>
            </div>
          </div>
          <?php endif; ?>

        </div>
      </div>
    </div>
  </div>
</div>