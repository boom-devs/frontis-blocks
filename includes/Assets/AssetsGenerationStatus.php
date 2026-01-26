<?php

namespace FrontisBlocks\Assets;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

defined('ABSPATH') || exit;

class AssetsGenerationStatus {

    use Singleton;

    public function __construct() {
        add_action('add_meta_boxes', [$this, 'add_fb_assets_meta_box']);
        add_action('admin_head', [$this, 'fb_assets_admin_styles']);
    }

    // Add meta box to all post types (pages, posts, and custom post types)
    function add_fb_assets_meta_box() {
        // Get all public post types, including built-in and custom
        $post_types = get_post_types(['public' => true], 'names');
        
        // Add meta box to each post type
        foreach ($post_types as $post_type) {
            add_meta_box(
                'fb_assets_meta_box', // Meta box ID
                'FB Page Assets Generation Status', // Meta box title
                [$this, 'render_fb_assets_meta_box'], // Callback to render content
                $post_type, // Post type
                'side', // Context (side, normal, advanced)
                'default' // Priority
            );
        }
    }

    // Render the meta box content
    function render_fb_assets_meta_box($post) {
        
        // Get current meta value
        $status = get_post_meta($post->ID, 'fb_page_assets_generation', true);
        
        // Define options
        $options = [
            'compiling' => 'Compiling',
            'compiled' => 'Compiled'
        ];
        
        ?>
        <div class="fb-assets-meta-box">
            <div name="fb_page_assets_generation" id="fb_page_assets_generation">Compilation Status:<span><?php echo esc_html( $status ); ?></span></div>
        </div>
        <?php
    }

    // Optional: Add some basic styling for the meta box
    function fb_assets_admin_styles() {
        if (!is_admin()) {
            return;
        }
        
        $screen = get_current_screen();
        if ($screen->base !== 'post') {
            return;
        }
        
        ?>
        <style type="text/css">

            #fb_page_assets_generation {
                font-size: 16px;
                text-transform: capitalize;
                border-radius: 5px;
                display: inline-block;
            }

            #fb_page_assets_generation span {
                margin-left: 8px;
            }
        </style>
        <?php
    }
}