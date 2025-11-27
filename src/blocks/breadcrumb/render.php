<?php
/**
 * Render callback for the Breadcrumb block.
 */

$attributes = $attributes ?? [];
$blockID = $attributes['blockID'] ?? '';
$separatorType = $attributes['separatorType'] ?? 'icon';
$separatorText = $attributes['separatorText'] ?? '/';
$separatorIcon = $attributes['separatorIconFrontend'] ?? '';
$showHomeIcon = $attributes['showHomeIcon'] ?? '';
$homeIcon = $attributes['homeIconFrontend'] ?? '';
$homeText = $attributes['homeText'] ?? 'Home';
$showItemIcon = $attributes['showItemIcon'] ?? false;
$itemIcon = $attributes['itemIconFrontend'] ?? '';

// Helper to render separator
$render_separator = function() use ($separatorType, $separatorText, $separatorIcon) {
    if ($separatorType === 'text') {
        return '<span class="fb-breadcrumb-separator">' . esc_html($separatorText) . '</span>';
    }
    return '<div class="fb-breadcrumb-separator">
        ' . $separatorIcon . '
    </div>';
};

// Helper to render item icon
$render_item_icon = function() use ($showItemIcon, $itemIcon) {
    if ($showItemIcon) {
        return '<div class="fb-breadcrumb-icon">
        ' . $itemIcon . '</div>';
    }
    return '';
};

?>
<div class="fb-breadcrumb-main-wrapper <?php echo esc_attr($blockID); ?>">
    <div class="fb-parent-wrapper fb-breadcrumb-container <?php echo esc_attr($blockID); ?>">
        <div class="fb-breadcrumb-list">

            <!-- Home -->
            <div class="fb-breadcrumb-item">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="fb-breadcrumb-link">
                    <?php if ($showHomeIcon): ?>
                        <div class="fb-breadcrumb-icon">
                            <?php echo $homeIcon; ?>
                        </div>
                    <?php endif; ?>
                    <?php echo esc_html($homeText); ?>
                </a>
            </div>

            <?php if (!is_front_page()): ?>
                <?php echo $render_separator(); ?>

                <?php if (is_category() || is_single()): ?>

                    <?php if (is_single()):
                        $category = get_the_category();
                        if ($category):
                            $cat = $category[0]; ?>
                            <div class="fb-breadcrumb-item">
                                <a href="<?php echo esc_url(get_category_link($cat->term_id)); ?>" class="fb-breadcrumb-link">
                                    <?php echo $render_item_icon(); ?>
                                    <?php echo esc_html($cat->name); ?>
                                </a>
                            </div>
                            <?php echo $render_separator(); ?>
                        <?php endif; endif; ?>

                    <div class="fb-breadcrumb-item">
                        <?php echo $render_item_icon(); ?>
                        <span class="fb-breadcrumb-text"><?php echo get_the_title(); ?></span>
                    </div>

                <?php elseif (is_page()): ?>

                    <?php
                    global $post;
                    if ($post->post_parent):
                        $anc = array_reverse(get_post_ancestors($post->ID));
                        foreach ($anc as $ancestor): ?>
                            <div class="fb-breadcrumb-item">
                                <a href="<?php echo esc_url(get_permalink($ancestor)); ?>" class="fb-breadcrumb-link">
                                    <?php echo $render_item_icon(); ?>
                                    <?php echo esc_html(get_the_title($ancestor)); ?>
                                </a>
                            </div>
                            <?php echo $render_separator(); ?>
                        <?php endforeach;
                    endif; ?>

                    <div class="fb-breadcrumb-item">
                        <?php echo $render_item_icon(); ?>
                        <span class="fb-breadcrumb-text"><?php echo get_the_title(); ?></span>
                    </div>

                <?php elseif (is_search()): ?>
                    <div class="fb-breadcrumb-item">
                        <?php echo $render_item_icon(); ?>
                        <span class="fb-breadcrumb-text">Search Results for: <?php echo get_search_query(); ?></span>
                    </div>
                <?php endif; ?>

            <?php endif; ?>

        </div>
    </div>
</div>