<?php
$block_id = $attributes['blockID'] ?? '';
$display_style = $attributes['displayStyle'] ?? 'icon';
$icon_size = $attributes['iconSize'] ?? 24;
$icon_spacing = $attributes['iconSpacing'] ?? 10;
$alignment = $attributes['alignment'] ?? 'left';
$share_networks = $attributes['shareNetworks'] ?? [];

if (empty($share_networks)) {
    $share_networks = [
        [ 'id' => 'facebook', 'enabled' => true, 'label' => 'Facebook' ],
        [ 'id' => 'twitter', 'enabled' => true, 'label' => 'Twitter' ],
        [ 'id' => 'linkedin', 'enabled' => true, 'label' => 'LinkedIn' ],
        [ 'id' => 'whatsapp', 'enabled' => true, 'label' => 'Whatsapp' ],
        [ 'id' => 'pinterest', 'enabled' => false, 'label' => 'Pinterest' ],
        [ 'id' => 'reddit', 'enabled' => false, 'label' => 'Reddit' ],
    ];
}

$svg_icons = [
    'facebook' => '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.74 21.13 22 16.99 22 12z"/></svg>',
    'twitter' => '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6.01c-.79.35-1.64.59-2.54.7a4.42 4.42 0 001.95-2.45 8.89 8.89 0 01-2.81 1.07A4.42 4.42 0 0015.5 4c-2.44 0-4.42 1.98-4.42 4.42 0 .35.04.68.11 1A12.55 12.55 0 013 5.1a4.44 4.44 0 001.37 5.9 4.39 4.39 0 01-2-.55v.06a4.42 4.42 0 003.54 4.33 4.43 4.43 0 01-2 .08 4.43 4.43 0 004.13 3.07A8.87 8.87 0 013 19.54a12.5 12.5 0 006.79 1.99c8.14 0 12.6-6.75 12.6-12.6 0-.19 0-.38-.01-.57a8.93 8.93 0 002.2-2.29z"/></svg>',
    'linkedin' => '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg>',
    'pinterest' => '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0012 12c.25 0 .5-.01.75-.03a9.5 9.5 0 01-1.08-2.62c-.11-.47-.65-2.7-.65-2.7-.17-.43-.33-.86-.47-1.24a3.82 3.82 0 01-.09-3.1c.42-1.01 1.71-1.84 2.58-1.5.65.26 1.04 1.02.95 1.82-.1.86-.63 2.14-.95 3.29a22.24 22.24 0 00.35 3.4c.14.52.5.92.92.95.94.06 2.15-.97 2.67-2.39.69-1.89.69-4.41.06-6.14-.68-1.82-2.04-3.07-3.86-3.14-2.17-.1-3.9 1.64-3.95 3.84a3.77 3.77 0 00.84 2.54c.13.16.14.29.1.46-.11.5-.36 1.56-.41 1.78-.06.26-.21.31-.49.19-1.84-.76-2.68-2.78-2.66-4.8.02-3.78 2.74-7.24 7.91-7.11 4.14.1 6.91 3.01 7.11 6.96.14 2.68-.78 5.17-2.9 6.17a3.7 3.7 0 01-2.47.22 6.36 6.36 0 01-.63 2.42A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    'reddit' => '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12a12 12 0 0024 0zM7.5 13c0 .83-.67 1.5-1.5 1.5S4.5 13.83 4.5 13s.67-1.5 1.5-1.5S7.5 12.17 7.5 13zm9.5 1.5a1.5 1.5 0 10.001-3.001A1.5 1.5 0 0017 14.5zM12 17.5c-1.8 0-3.29-1.1-3.94-2.62l1.4-.6a2.5 2.5 0 004.88 0l1.4.6C15.29 16.4 13.8 17.5 12 17.5zm7.5-5.4a1.1 1.1 0 00-1.06-.75c-.12 0-.25.02-.37.05l-1.54.38a3.49 3.49 0 00-6.06 0l-1.54-.38a1.1 1.1 0 10-.43 2.14 1.1 1.1 0 00.43-.08l.85.21c.07.91.4 1.75.92 2.45-.4.19-.77.44-1.1.73a1.1 1.1 0 001.5 1.6c.65-.53 1.46-.84 2.33-.84.87 0 1.68.31 2.33.84a1.1 1.1 0 001.5-1.6 4.46 4.46 0 00-1.1-.73c.52-.7.85-1.54.92-2.45l.85-.21a1.1 1.1 0 00.63-1.41z"/></svg>',
    'whatsapp' => '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M16.004 2.98a13.003 13.003 0 00-11.277 19.5l-1.38 5.04a1 1 0 001.212 1.212l5.04-1.38A13.003 13.003 0 1016.004 2.98zm0 2a11 11 0 110 22 10.96 10.96 0 01-5.56-1.54l-.39-.23-2.97.81.81-2.97-.23-.39A10.96 10.96 0 0116.004 4.98zm-4.32 7.69c-.24-.54-.5-.56-.73-.57h-.62c-.21 0-.55.08-.83.39-.28.31-1.09 1.07-1.09 2.61 0 1.54 1.12 3.03 1.28 3.24.16.21 2.15 3.44 5.28 4.68 2.61 1.03 3.14.82 3.7.77.56-.05 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.3-.21-.62-.36-.32-.15-1.83-.9-2.12-1-.28-.1-.48-.15-.69.15-.21.3-.8 1-1 1.2-.18.2-.38.22-.7.08-.32-.15-1.36-.5-2.6-1.58-.96-.85-1.61-1.91-1.8-2.23-.19-.32-.02-.5.14-.65.14-.14.32-.37.48-.55.16-.18.21-.3.32-.5.1-.21.05-.39-.02-.54-.07-.16-.69-1.65-.95-2.25z"/></svg>',
];


echo '<style>';
echo ".$block_id .social-share-icon {";
echo "font-size: {$icon_size}px;";
echo "margin-right: {$icon_spacing}px;";
echo "display: inline-flex;";
echo "align-items: center;";
echo "justify-content: center;";
echo "width: {$icon_size}px;";
echo "height: {$icon_size}px;";
echo "}";
echo ".$block_id .social-share-container { text-align: {$alignment}; }";
echo '</style>';

echo '<div class="fb-social-share ' . esc_attr($block_id) . '">';
echo '<div class="social-share-container">';

foreach ($share_networks as $network) {
    if (!$network['enabled'])
        continue;

    $id = $network['id'];
    $label = $network['label'];
    $post_link = get_the_permalink();
    $page_title = get_the_title();
    $data_share_url = '#';

    switch ($id) {
        case 'facebook':
            $data_share_url = 'https://www.facebook.com/sharer/sharer.php?u=' . $post_link;
            break;
        case 'twitter':
            $data_share_url = 'https://twitter.com/intent/tweet?url=' . $post_link . '&text=' . $page_title;
            break;
        case 'linkedin':
            $data_share_url = 'https://www.linkedin.com/sharing/share-offsite/?url=' . $post_link;
            break;
        case 'pinterest':
            $data_share_url = 'https://pinterest.com/pin/create/button/?url=' . $post_link . '&description=' . $page_title;
            break;
        case 'reddit':
            $data_share_url = 'https://reddit.com/submit?url=' . $post_link . '&title=' . $page_title;
            break;
        case 'whatsapp':
            $data_share_url = 'https://wa.me/?text=' . $page_title . ' ' . $post_link;
            break;
    }

    echo '<a href="' . esc_url($data_share_url) . '" class="social-share-button ' . esc_attr($id) . '" target="_blank" rel="noopener noreferrer" aria-label="Share on ' . esc_attr($label) . '">';

    if ($display_style === 'icon' || $display_style === 'icon-text') {
        echo '<span class="social-share-icon">';
        echo $svg_icons[$id] ?? '';
        echo '</span>';
    }

    if ($display_style === 'text' || $display_style === 'icon-text') {
        echo '<span class="social-share-label">' . esc_html($label) . '</span>';
    }

    echo '</a>';
}

echo '</div>';
echo '</div>';
