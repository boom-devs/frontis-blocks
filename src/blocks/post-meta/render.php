<?php
/**
 * Render callback for the post-meta block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Block output.
 */

// Get current post ID dynamically
$post_id = get_the_ID();
if ( ! $post_id ) {
    return '';
}

// Block attributes with defaults
$block_id          = isset( $attributes['blockID'] ) ? $attributes['blockID'] : '';
$post_metaterms    = isset( $attributes['postMetaterms'] ) ? $attributes['postMetaterms'] : [];
$single_item_color = isset( $attributes['singleItemColorStyle'] ) ? $attributes['singleItemColorStyle'] : 'red';
$block_style       = isset( $attributes['blockStyle'] ) ? $attributes['blockStyle'] : '';
$alignment         = isset( $attributes['alignment'] ) ? $attributes['alignment'] : '';

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => "fb-post-meta-main-wrapper {$block_id} {$block_style} align-{$alignment}",
) );

// Get post data
$post_title = get_the_title( $post_id );
$post_date  = get_the_date( 'M j, Y', $post_id );

// Author info
$author_id          = get_post_field( 'post_author', $post_id );
$author_name        = get_the_author_meta( 'display_name', $author_id );
$author_avatar      = get_avatar_url( $author_id, array( 'size' => 28 ) );
$author_archive_url  = get_author_posts_url( $author_id );

// Get categories
$categories = get_the_category( $post_id );
$category_list = '';
if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
    $links = [];
    foreach ( $categories as $cat ) {
        $links[] = '<a href="' . esc_url( get_category_link( $cat->term_id ) ) . '" class="fb-post-category-name">' . esc_html( $cat->name ) . '</a>';
    }
    $category_list = implode( ', ', $links );
}

// Comments
$post_comments = get_comments_number( $post_id );

// Utility function for formatting numbers
function format_metric_count_comment( $count ) {
    $num = intval( $count );
    if ( $num >= 1000000 ) return round( $num / 1000000, 2 ) . 'M';
    if ( $num >= 1000 ) return round( $num / 1000, 2 ) . 'k';
    return strval( $num );
}

// Output
?>
<div <?php echo $wrapper_attributes; ?>>
    <ul class="fb-post-meta-list">
        <?php foreach ( $post_metaterms as $item ) :
            $value = '';
            switch ( $item['metaType'] ) {
                case 'author':
                    $value = '<a href="' . esc_url( $author_archive_url ) . '" class="fb-post-author-name">' . esc_html( $author_name ) . '</a>';
                    break;
                case 'authorImage':
                    $value = '<img src="' . esc_url( $author_avatar ) . '" alt="' . esc_attr( $author_name ) . '" />';
                    break;
                case 'date':
                    $value = esc_html( $post_date );
                    break;
                case 'category':
                    $value = $category_list;
                    break;
                case 'comments':
                    $value = format_metric_count_comment( $post_comments );
                    break;
                case 'custom':
                    $value = ! empty( $item['metaLabel'] ) ? esc_html( $item['metaLabel'] ) : '';
                    break;
            }

            if ( $value ) :
                ?>
                <li class="fb-post-meta-item single-item-<?php echo esc_attr( $item['id'] ); ?>" style="color:<?php echo esc_attr( $single_item_color ); ?>;">
                    <?php echo $value; ?>
                </li>
            <?php endif; endforeach; ?>
    </ul>
</div>
