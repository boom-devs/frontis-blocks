<?php

namespace FrontisBlocks\Core;

if (!defined('ABSPATH')) {
	exit;
}

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
    private $google_fonts_handle = 'frontis-blocks-google-fonts';
    private $google_fonts_preload = false;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->upload_dir = wp_upload_dir();
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_scripts']);
        add_action('wp_footer', [$this, 'enqueue_assets_footer']);
        add_filter('wp_resource_hints', [$this, 'add_google_font_resource_hints'], 10, 2);
        add_filter('style_loader_tag', [$this, 'filter_google_font_style_tag'], 10, 4);
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

        $this->load_google_font();

        // Enqueue global CSS
        $global_css_path = $this->upload_dir['basedir'] . '/frontis-blocks/global/global.css';
        $global_css_url = $this->upload_dir['baseurl'] . '/frontis-blocks/global/global.css';
        if (file_exists($global_css_path)) {
            $version = filemtime($global_css_path);
            wp_enqueue_style('frontis-blocks-global', $global_css_url, [], $version);
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
        wp_localize_script('frontis-blocks-frontend', 'frontisFormsAjax', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('fb_form_nonce'),
        ]);
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
        // Skip loading plugin assets on SureCart product edit page to avoid conflicts.
        if (isset($_GET['page']) && $_GET['page'] === 'sc-products') {
            return;
        }

        wp_enqueue_script('frontis-responsive-css', FB_PLUGIN_URL . 'assets/js/backend/responsive-css.js', [], FB_VERSION, true);
        wp_register_style('frontis-swiper-style', FB_PLUGIN_URL . 'assets/css/backend/swiper/swiper-bundle.min.css', [], FB_VERSION);
        wp_enqueue_script('frontis-swiper-script', FB_PLUGIN_URL . 'assets/js/backend/swiper/swiper-bundle.min.js', [], FB_VERSION, true);
    }
    public function load_google_font()
    {
        $google_font_url = '';
        $current_post_id = get_queried_object_id();

        if (!empty($current_post_id)) {
            $google_font_url = get_post_meta($current_post_id, 'fb_page_google_fonts_url', true);
        }

        if (!$google_font_url) {
            $google_font_url = get_option('fb_google_fonts_url');
        }

        $normalized_google_font_url = AssetsGenerator::normalize_google_font_url($google_font_url);

        if ($normalized_google_font_url !== $google_font_url) {
            $google_font_url = $normalized_google_font_url;

            if (!empty($current_post_id) && get_post_meta($current_post_id, 'fb_page_google_fonts_url', true)) {
                update_post_meta($current_post_id, 'fb_page_google_fonts_url', $google_font_url);
            } else {
                update_option('fb_google_fonts_url', $google_font_url);
            }
        }

        if (!$google_font_url) {
            $this->google_fonts_preload = false;
            return;
        }

        $is_preload = get_option('fb_google_fonts_preload', 'false');
        $this->google_fonts_preload = filter_var($is_preload, FILTER_VALIDATE_BOOLEAN);

        wp_enqueue_style($this->google_fonts_handle, esc_url_raw($google_font_url), [], null);
    }

    public function add_google_font_resource_hints($urls, $relation_type)
    {
        if ($relation_type !== 'preconnect' || !wp_style_is($this->google_fonts_handle, 'enqueued')) {
            return $urls;
        }

        $urls[] = 'https://fonts.googleapis.com';
        $urls[] = [
            'href' => 'https://fonts.gstatic.com',
            'crossorigin' => 'anonymous',
        ];

        return $urls;
    }

    public function filter_google_font_style_tag($html, $handle, $href, $media)
    {
        if ($handle !== $this->google_fonts_handle || $this->google_fonts_preload !== true) {
            return $html;
        }

        return sprintf(
            '<link rel="preload" as="style" href="%1$s" media="%2$s" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="%1$s" media="%2$s"></noscript>',
            esc_url($href),
            esc_attr($media)
        );
    }
}
