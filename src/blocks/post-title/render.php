<?php
/**
 * Server-side rendering for the Post Title block
 */

$post_title_tag = isset( $attributes['postTitleTag'] ) ? esc_attr( $attributes['postTitleTag'] ) : 'h2';
$is_link = isset( $attributes['isLink'] ) ? (bool) $attributes['isLink'] : false;
$rel = isset( $attributes['rel'] ) ? esc_attr( $attributes['rel'] ) : '';
$link_target = isset( $attributes['linkTarget'] ) ? esc_attr( $attributes['linkTarget'] ) : '_self';
$title_excerpt_length = isset($attributes['titleExcerptLength']) ? (int) $attributes['titleExcerptLength'] : 0;

$wrapper_id = isset( $attributes['wrapperId'] ) ? esc_attr( $attributes['wrapperId'] ) : '';
$wrapper_class = isset( $attributes['wrapperClass'] ) ? esc_attr( $attributes['wrapperClass'] ) : '';

$block_id = isset( $attributes['blockId'] ) ? esc_attr( $attributes['blockId'] ) : '';


$post_title_desktop_switcher = isset($attributes['postTitleDesktopSwitcher']) ? $attributes['postTitleDesktopSwitcher'] : false;
$post_title_tablet_switcher = isset($attributes['postTitleTabletSwitcher']) ? $attributes['postTitleTabletSwitcher'] : false;
$post_title_mobile_switcher = isset($attributes['postTitleMobileSwitcher']) ? $attributes['postTitleMobileSwitcher'] : false;

// Get Responsive Class
$responsive_classes = [];
if($post_title_desktop_switcher) {
    $responsive_classes[] = 'fb-desktop-responsive';
}
if($post_title_tablet_switcher) {
    $responsive_classes[] = 'fb-tablet-responsive';
}
if($post_title_mobile_switcher) {
    $responsive_classes[] = 'fb-mobile-responsive';
}

// Get the current post title
$post_title = get_the_title();

if ( empty( $post_title ) ) {
    $post_title = __( 'No title found', 'frontis-blocks' );
}

// Trim title
if ($title_excerpt_length > 0) {
    $words = explode(' ', $post_title);
    if (count($words) > $title_excerpt_length) {
        $post_title = implode(' ', array_slice($words, 0, $title_excerpt_length));
    }
}

// build main tag classes - including blockid
$parent_classes = 'fb-post-title-block ' . $block_id . ' ' . implode(' ', $responsive_classes);

// Build HTML tag classes
$html_tag_classes = [
    'fb-post-title',
    $wrapper_class, // Custom CSS classes from advanced tab
];

// Prepare HTML tag ID attribute
$html_tag_id_attr = ! empty( $wrapper_id ) ? ' id="' . $wrapper_id . '"' : '';

?>
<div class="<?php echo esc_attr($parent_classes); ?>">
    <?php if ( $is_link ) : ?>
        <<?php echo $post_title_tag; ?> class="<?php echo esc_attr( implode( ' ', array_filter( $html_tag_classes ) ) ); ?>"<?php echo $html_tag_id_attr; ?>>
            <a class="fb-post-title-link" 
               href="<?php echo esc_url( get_permalink() ); ?>" 
               rel="<?php echo esc_attr( $rel ); ?>" 
               target="<?php echo esc_attr( $link_target ); ?>">
                <?php echo esc_html( $post_title ); ?>
            </a>
        </<?php echo $post_title_tag; ?>>
    <?php else : ?>
        <<?php echo $post_title_tag; ?> class="<?php echo esc_attr( implode( ' ', array_filter( $html_tag_classes ) ) ); ?>"<?php echo $html_tag_id_attr; ?>>
            <?php echo esc_html( $post_title ); ?>
        </<?php echo $post_title_tag; ?>>
    <?php endif; ?>
</div>