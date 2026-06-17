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
$mobile_logo_url = isset($attributes['megaMenuMobileLogoUrl']) ? $attributes['megaMenuMobileLogoUrl'] : '';
$mobile_logo_alt = isset($attributes['megaMenuMobileLogoAlt']) ? $attributes['megaMenuMobileLogoAlt'] : '';
$block_id = isset($attributes['blockID']) ? $attributes['blockID'] : '';
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

$queried_id = get_queried_object_id();
global $wp;
$request = isset($wp->request) ? (string) $wp->request : '';
$current_path = untrailingslashit('/' . $request);
$home_url = untrailingslashit(home_url('/'));
$current_permalink = $queried_id ? get_permalink($queried_id) : '';
$current_url = $current_permalink ? untrailingslashit(strtok((string) $current_permalink, '?')) : '';

if (empty($items)) {
    echo '<div class="fb-advanced-mega-menu-empty">Add menu items in the block settings</div>';
    return;
}
?>

<div class="fb-advanced-mega-menu-main-wrapper <?php echo esc_attr($class_attr); ?>">
    <div class="fb-advanced-mega-menu-wrapper">
        <nav class="fb-advanced-mega-menu" data-trigger="<?php echo esc_attr($trigger_type); ?>">
            <button class="fb-advanced-mega-menu-toggle" aria-label="Toggle menu">
                <span class="hamburger-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </span>
                <span class="close-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </span>

            </button>
            <div class="fb-advanced-mega-menu-overlay" aria-hidden="true"></div>
            <ul class="fb-advanced-mega-menu-list">
                <?php if (!empty($mobile_logo_url)) : ?>
                    <li class="mobile-logo">
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <img src="<?php echo esc_url($mobile_logo_url); ?>" alt="<?php echo esc_attr($mobile_logo_alt); ?>">
                        </a>
                    </li>
                <?php endif; ?>
                <?php foreach ($items as $item):
                    $item_icon = isset($item['megaMenuIconFrontend']) ? $item['megaMenuIconFrontend'] : '';
                    $is_current_item = false;

                    if (!empty($item) && is_array($item)) {
                        if (!empty($item['pageId']) && (int) $item['pageId'] === (int) $queried_id) {
                            $is_current_item = true;
                        } elseif (!empty($item['url'])) {
                            $item_url = untrailingslashit(strtok((string) $item['url'], '?'));

                            if (
                                is_front_page() && (
                                    $item_url === $home_url ||
                                    $item_url === untrailingslashit(home_url())
                                )
                            ) {
                                $is_current_item = true;
                            } elseif ($current_url && $item_url === $current_url) {
                                $is_current_item = true;
                            } else {
                                $item_path = wp_parse_url($item['url'], PHP_URL_PATH);

                                if ($item_path) {
                                    $item_path = untrailingslashit($item_path);

                                    if ($item_path === $current_path) {
                                        $is_current_item = true;
                                    }
                                }
                            }
                        }
                    }

                    $item_classes = ['fb-advanced-mega-menu-item'];

                    if (!empty($item['patternSlug'])) {
                        $item_classes[] = 'has-mega-menu';
                    }

                    if ($is_current_item) {
                        $item_classes[] = 'current-menu-item';
                    }
                    ?>
                    <li class="<?php echo esc_attr(implode(' ', $item_classes)); ?>">
                        <?php if (!empty($item['url'])): ?>
                            <a href="<?php echo esc_url($item['url']); ?>" class="fb-advanced-mega-menu-link"<?php echo $is_current_item ? ' aria-current="page"' : ''; ?>>
                                <?php echo esc_html($item['label']); ?>
                                <?php if (!empty($item['patternSlug']) && !empty($item_icon)): ?>
                                    <span class="fb-advanced-mega-menu-indicator">
                                        <?php echo $item_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                                    </span>
                                <?php endif; ?>
                            </a>
                        <?php else: ?>
                            <span class="fb-advanced-mega-menu-link">
                                <?php echo esc_html($item['label']); ?>
                                <?php if (!empty($item['patternSlug']) && !empty($item_icon)): ?>
                                    <span class="fb-advanced-mega-menu-indicator">
                                        <?php echo $item_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                                    </span>
                                <?php endif; ?>
                            </span>
                        <?php endif; ?>

                        <?php if (!empty($item['patternSlug'])): ?>
                            <div class="fb-advanced-mega-menu-panel">
                                <div class="fb-advanced-mega-menu-content">
                                    <?php
                                    $pattern_content = '';

                                    if ($item['patternSlug']) {
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
                                        echo do_blocks($pattern_content); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
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