<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Assets\AssetsGenerator;

/**
 * Class Enqueues
 *
 * @package FrontisBlocks\Enqueues
 */
class Enqueues
{

    use Singleton;

    private $upload_dir = '';
    private $header_name = '';
    private $footer_name = '';
    private $critical_css_template = false;
    private $critical_css_page = false;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->upload_dir = wp_upload_dir();
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_scripts']);
        add_action('wp_footer', [$this, 'enqueue_assets_footer']);
    }

    public function get_page_template_name()
    {
        $template_name = Helper::determine_template_post_type(get_the_ID());
        $template_id = Helper::get_post_id_by_slug($template_name, 'wp_template');
        $frontis_critical_css_generation_template = get_post_meta($template_id, 'generate_critical_css', true);
        $frontis_critical_css_generation_page = get_post_meta(get_the_ID(), 'generate_critical_css', true);
        $this->critical_css_page = $frontis_critical_css_generation_page;
        $this->critical_css_template = $frontis_critical_css_generation_template;

        return $template_name;
    }

    public function enqueue_scripts()
    {
        $this->load_google_font();

        // Enqueue assets
        $page_compiling_mode = get_post_meta(get_the_ID(), 'fb_page_assets_generation', true);

        if ($page_compiling_mode === 'compiling') {
            global $wpdb;
            $upload_directory = WP_CONTENT_DIR . '/uploads/frontis-blocks/';

            if (!is_dir($upload_directory)) {
                if (!mkdir($upload_directory, 0755, true)) {
                    wp_send_json_error(['message' => 'Failed to create upload directory']);
                    return;
                }
            }

            // Generate global assets
            AssetsGenerator::generate_global_assets();

            $modified_post = get_post(get_the_ID());
            $post_content = $modified_post->post_content;

            $pattern = "/frontis-blocks/i";
            // Get synced pattern contents
            $pattern_contents = Helper::check_patterns_used($post_content);

            // Append pattern contents to post_content
            if (!empty($pattern_contents)) {
                foreach ($pattern_contents as $pattern_content) {
                    $post_content .= "\n" . $pattern_content; // Append each pattern content
                }

                // Pass modified post object to generate_page_assets
                $modified_post->post_content = $post_content; // Update post object
            }

            update_post_meta($modified_post->ID, 'frontis_blocks_used', false);
            update_post_meta($modified_post->ID, 'generate_critical_css', false);

            if (preg_match_all($pattern, $post_content) > 0) {
                update_post_meta($modified_post->ID, 'frontis_blocks_used', true);
            }

            $critical_css_used = preg_match_all("/frontis-blocks\/critical-css/i", $post_content) > 0;

            if ($critical_css_used) {
                update_post_meta($modified_post->ID, 'generate_critical_css', $critical_css_used);
            }

            AssetsGenerator::get_instance()->generate_page_assets($modified_post->ID, $modified_post, $critical_css_used);
        }

        $page_name = $this->get_page_template_name();
        $frontis_used = get_post_meta(get_the_ID(), 'frontis_blocks_used', true);

        $page_name = $frontis_used ? get_post(get_the_ID())->post_name : $page_name;
        $frontend_dir = $this->upload_dir['basedir'] . '/frontis-blocks/' . $page_name . '/';
        $frontend_url = $this->upload_dir['baseurl'] . '/frontis-blocks/' . $page_name . '/';

        // CSS file paths based on post_name
        $css_file_system_path_page = $frontend_dir . $page_name . '.min.css';
        $css_file_url_page = $frontend_url . $page_name . '.min.css';

        // Critical CSS file paths based on post_name
        $critical_css_file_system_path = $frontend_dir . $page_name . '-critical.min.css';
        $critical_css_file_url = $frontend_url . $page_name . '-critical.min.css';

        // Enqueue critical CSS in header if it exists
        if (($this->critical_css_page || $this->critical_css_template) && file_exists($critical_css_file_system_path)) {
            $version = filemtime($critical_css_file_system_path);
            wp_enqueue_style('frontis-blocks-page-critical', $critical_css_file_url, [], $version);
        }

        // Enqueue general CSS (in footer if critical CSS is used, otherwise in header)
        if (($this->critical_css_page || $this->critical_css_template)) {
            add_action('wp_footer', function () use ($css_file_system_path_page, $css_file_url_page) {
                if (file_exists($css_file_system_path_page)) {
                    $version = filemtime($css_file_system_path_page);
                    wp_enqueue_style('frontis-blocks-page', $css_file_url_page, [], $version);
                    wp_print_styles('frontis-blocks-page'); // Outputs the CSS in the footer
                }
            }, 100);
        } else {
            if (file_exists($css_file_system_path_page)) {
                $version = filemtime($css_file_system_path_page);
                wp_enqueue_style('frontis-blocks-page', $css_file_url_page, [], $version);
            }
        }
    }

    public function enqueue_assets_footer()
    {
        $page_name = $this->get_page_template_name();
        $frontis_used = get_post_meta(get_the_ID(), 'frontis_blocks_used', true);
        $page_name = $frontis_used ? get_post(get_the_ID())->post_name : $page_name;
        $frontend_dir_page_js = $this->upload_dir['basedir'] . '/frontis-blocks/' . $page_name . '/';
        $frontend_url_page_js = $this->upload_dir['baseurl'] . '/frontis-blocks/' . $page_name . '/';
        $file_system_path_page_js = $frontend_dir_page_js . $page_name . '.js';
        $file_url_page_js = $frontend_url_page_js . $page_name . '.js';

        // Enqueue JS in footer with defer
        if (file_exists($file_system_path_page_js)) {
            $version = filemtime($file_system_path_page_js);
            wp_enqueue_script('frontis-blocks-frontend', $file_url_page_js, ['jquery'], $version, true);
            add_filter('script_loader_tag', function ($tag, $handle) {
                if ($handle === 'frontis-blocks-frontend') {
                    return str_replace(' src', ' defer src', $tag);
                }
                return $tag;
            }, 10, 2);
        }

        // Localize script for frontend
        $localize_array = [
            'site_url' => site_url(),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('frontis_loop_nonce'),
        ];
        wp_localize_script('frontis-blocks-frontend', 'FrontisBlocksData', $localize_array);
        wp_localize_script('frontis-blocks-frontend', 'SocialShareData', [
            'permalink' => get_permalink(),
            'title' => get_the_title(),
            'network_labels' => [
                'facebook' => 'Facebook',
                'twitter' => 'Twitter',
                'linkedin' => 'LinkedIn',
                'whatsapp' => 'WhatsApp',
                'pinterest' => 'Pinterest',
                'reddit' => 'Reddit',
            ],
            'share_urls' => [
                'facebook' => 'https://www.facebook.com/sharer/sharer.php?u=',
                'twitter' => 'https://twitter.com/intent/tweet?url=',
                'linkedin' => 'https://www.linkedin.com/sharing/share-offsite/?url=',
                'pinterest' => 'https://pinterest.com/pin/create/button/?url=',
                'reddit' => 'https://reddit.com/submit?url=',
                'whatsapp' => 'https://wa.me/?text=',
            ]
        ]);
    }

    public function enqueue_editor_scripts()
    {
        wp_enqueue_script('frontis-responsive-css', FB_PLUGIN_URL . 'assets/js/backend/responsive-css.js', [], FB_VERSION, true);
        wp_register_style('frontis-swiper-style', FB_PLUGIN_URL . 'assets/css/backend/swiper/swiper-bundle.min.css', [], FB_VERSION);
        wp_enqueue_script('frontis-swiper-script', FB_PLUGIN_URL . 'assets/js/backend/swiper/swiper-bundle.min.js', [], FB_VERSION, true);

        wp_register_style('frontis-slick-style', FB_PLUGIN_URL . 'assets/css/backend/slick/slick.css', [], FB_VERSION);
        wp_register_style('frontis-slick-theme-style', FB_PLUGIN_URL . 'assets/css/backend/slick/slick-theme.css', [], FB_VERSION);
        wp_register_script('frontis-slick-script', FB_PLUGIN_URL . 'assets/js/backend/slick/slick.min.js', [], FB_VERSION, true);
    }
    public function load_google_font()
    {
        // Enqueue google fonts
        $google_font_url = get_option('fb_google_fonts_url');
        if ($google_font_url) {
            echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
            echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
            echo '<link rel="preload" as="style" href="' . $google_font_url . '" onload="this.onload=null;this.rel=\'stylesheet\'">';
            // echo '<noscript><link rel="stylesheet" href="' . $google_font_url . '"></noscript>';
        }
    }
}