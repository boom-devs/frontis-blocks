<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * @package advanced-megamenu
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

$items = isset($attributes['menuItems']) ? $attributes['menuItems'] : array();
$trigger_type = isset($attributes['triggerType']) ? $attributes['triggerType'] : 'hover';
$block_id = isset($attributes['blockId']) ? $attributes['blockId'] : '';
$mega_menu_desktop_switcher = isset($attributes['megaMenuDesktopSwitcher']) ? $attributes['megaMenuDesktopSwitcher'] : '';
$mega_menu_tablet_switcher = isset($attributes['megaMenuTabletSwitcher']) ? $attributes['megaMenuTabletSwitcher'] : '';
$mega_menu_mobile_switcher = isset($attributes['megaMenuMobileSwitcher']) ? $attributes['megaMenuMobileSwitcher'] : '';

$classes = [
    'frontis-block',
    'fb-advanced-mega-menu-main-wrapper',
    $block_id,
];

if ($mega_menu_desktop_switcher) {
    $classes[] = 'fb-desktop-responsive';
}

if ($mega_menu_tablet_switcher) {
    $classes[] = 'fb-tablet-responsive';
}

if ($mega_menu_mobile_switcher) {
    $classes[] = 'fb-mobile-responsive';
}

$class_attr = implode(' ', array_filter($classes));


if (empty($items)) {
    echo '<div class="fb-advanced-mega-menu-empty">Add menu items in the block settings</div>';
    return;
}
?>

<div class="fb-advanced-mega-menu-main-wrapper <?php echo esc_attr($class_attr); ?>">
    <div class="fb-advanced-mega-menu-wrapper">
        <nav class="fb-advanced-mega-menu" data-trigger="<?php echo esc_attr($trigger_type); ?>">
            <button class="fb-advanced-mega-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="fb-advanced-mega-menu-list">
                <?php foreach ($items as $item): ?>
                    <li
                        class="fb-advanced-mega-menu-item <?php echo !empty($item['patternSlug']) ? 'has-mega-menu' : ''; ?>">
                        <?php if (!empty($item['url'])): ?>
                            <a href="<?php echo esc_url($item['url']); ?>" class="fb-advanced-mega-menu-link">
                                <?php echo esc_html($item['label']); ?>
                                <?php if (!empty($item['patternSlug'])): ?>
                                    <span class="fb-advanced-mega-menu-indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            fill="#000000" version="1.1" id="Capa_1" width="14px" height="14px"
                                            viewBox="0 0 30.727 30.727" xml:space="preserve">
                                            <g>
                                                <path
                                                    d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0   l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
                                            </g>
                                        </svg>
                                    </span>
                                <?php endif; ?>
                            </a>
                        <?php else: ?>
                            <span class="fb-advanced-mega-menu-link">
                                <?php echo esc_html($item['label']); ?>
                                <?php if (!empty($item['patternSlug'])): ?>
                                    <span class="fb-advanced-mega-menu-indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            fill="#000000" version="1.1" id="Capa_1" width="14px" height="14px"
                                            viewBox="0 0 30.727 30.727" xml:space="preserve">
                                            <g>
                                                <path
                                                    d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0   l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
                                            </g>
                                        </svg>
                                    </span>
                                <?php endif; ?>
                            </span>
                        <?php endif; ?>

                        <?php if (!empty($item['patternSlug'])): ?>
                            <div class="fb-advanced-mega-menu-panel">
                                <div class="fb-advanced-mega-menu-content">
                                    <?php
                                    $pattern_content = '';

                                    if (strpos($item['patternSlug'], 'user-') === 0) {
                                        $pattern_id = intval(str_replace('user-', '', $item['patternSlug']));
                                        $user_pattern = get_post($pattern_id);
                                        if ($user_pattern && $user_pattern->post_type === 'wp_block') {
                                            $pattern_content = $user_pattern->post_content;
                                        } else {
                                            echo '<p>User pattern not found: ' . esc_html($item['patternSlug']) . '</p>';
                                        }
                                    } else {
                                        $pattern = WP_Block_Patterns_Registry::get_instance()->get_registered($item['patternSlug']);
                                        if ($pattern && isset($pattern['content'])) {
                                            $pattern_content = $pattern['content'];
                                        } else {
                                            echo '<p>Pattern not found: ' . esc_html($item['patternSlug']) . '</p>';
                                        }
                                    }

                                    if ($pattern_content) {
                                        echo do_blocks($pattern_content);
                                    }
                                    ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </nav>
    </div>
</div>