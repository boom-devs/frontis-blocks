<?php
namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

/**
 * Class Enqueues
 *
 * @package FrontisBlocks\Enqueues
 */
class Enqueues {

    use Singleton;

    private $upload_dir = '';

    /**
     * Constructor
     */
    public function __construct() {
        $this->upload_dir = wp_upload_dir();
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_scripts']);
        add_action('wp_head', [$this, 'add_preconnect_to_head']);
        add_action('wp_footer', [$this, 'enqueue_assets_footer']);
    }

    public function get_page_name(){
        $page_name = Helper::get_page_name();
        $post = get_post(get_the_ID());
        $frontis_used = get_post_meta(get_the_ID(), 'frontis_blocks_used', true);
    
        if (is_home()) {
            $page_name = 'home';
        }
    
        if (is_single()) {
            $page_name = 'single';
        }
    
        if (is_archive()) {
            $page_name = 'archive';
        }
    
        if (is_search()) {
            $page_name = 'search';
        }
    
        if (is_404()) {
            $page_name = '404';
        }
    
        if ($frontis_used) {
            if (Helper::is_custom_post_type(get_the_ID()) || (get_post_type(get_the_ID()) === 'post' && !in_array($page_name, ['home', 'archive']))) {
                $page_name = $post->post_name;
            }
        } else {
            if (get_the_ID() && (Helper::is_custom_post_type(get_the_ID()) || (get_post_type(get_the_ID()) === 'post' && !in_array($page_name, ['home', 'archive'])))) {
                $assigned_template = get_post_meta(get_the_ID(), '_wp_page_template', true);
                if ($assigned_template !== '' && $assigned_template !== 'default') {
                    $page_name = $assigned_template;
                }
            }
        }

        return $page_name;
    }

    public function enqueue_scripts() {
        $frontis_critical_css_generation = get_post_meta(get_the_ID(), 'generate_critical_css', true);
        $page_name = $this->get_page_name();
        $frontend_dir = $this->upload_dir['basedir'] . '/frontis-blocks/' . $page_name . '/';
        $frontend_url = $this->upload_dir['baseurl'] . '/frontis-blocks/' . $page_name . '/';

        // CSS and JS file paths
        $css_file_system_path = $frontend_dir . $page_name . '.min.css';
        $css_file_url = $frontend_url . $page_name . '.min.css';
        
    
        // Critical CSS file enqueue (remains in header for performance)
        if ($frontis_critical_css_generation) {
            $critical_css_file_system_path = $frontend_dir . $page_name . '-critical.min.css';
            $critical_css_file_url = $frontend_url . $page_name . '-critical.min.css';
            if (file_exists($critical_css_file_system_path)) {
                $version = filemtime($critical_css_file_system_path);
                wp_enqueue_style('frontis-blocks-frontend-critical', $critical_css_file_url, [], $version);
            }

            // Enqueue CSS and JS in footer
            add_action('wp_footer', function() use ($css_file_system_path, $css_file_url) {
                // Enqueue page CSS and print it in footer
                if (file_exists($css_file_system_path)) {
                    $version = filemtime($css_file_system_path);
                    wp_enqueue_style('frontis-blocks-frontend', $css_file_url, [], $version);
                    wp_print_styles('frontis-blocks-frontend'); // Outputs the CSS in the footer
                }
            }, 100);
        } else {
            // Enqueue page CSS in header
            if (file_exists($css_file_system_path)) {
                $version = filemtime($css_file_system_path);
                wp_enqueue_style('frontis-blocks-frontend', $css_file_url, [], $version);
            }
        }
    }

    public function enqueue_assets_footer() {
        
        $page_name = $this->get_page_name();
        $frontend_dir = $this->upload_dir['basedir'] . '/frontis-blocks/' . $page_name . '/';
        $frontend_url = $this->upload_dir['baseurl'] . '/frontis-blocks/' . $page_name . '/';

        $js_file_system_path = $frontend_dir . $page_name . '.js';
        $js_file_url = $frontend_url . $page_name . '.js';

         // Enqueue JS in footer with defer
        if (file_exists($js_file_system_path)) {
            $version = filemtime($js_file_system_path);
            wp_enqueue_script('frontis-blocks-frontend', $js_file_url, [], $version, true);
            add_filter('script_loader_tag', function($tag, $handle) {
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
            'nonce'   => wp_create_nonce('frontis_loop_nonce'),
        ];
    
        wp_localize_script('frontis-blocks-frontend', 'FrontisBlocksData', $localize_array);
    }

    public function enqueue_editor_scripts() {
        wp_enqueue_script('frontis-responsive-css', FB_PLUGIN_URL . 'assets/js/backend/responsive-css.js', [], FB_VERSION, true);
        wp_register_style('frontis-swiper-style', FB_PLUGIN_URL . 'assets/css/backend/swiper/swiper-bundle.min.css', [], FB_VERSION);
        wp_enqueue_script('frontis-swiper-script', FB_PLUGIN_URL . 'assets/js/backend/swiper/swiper-bundle.min.js', [], FB_VERSION, true);

        wp_register_style('frontis-slick-style', FB_PLUGIN_URL . 'assets/css/backend/slick/slick.css', [], FB_VERSION);
        wp_register_style('frontis-slick-theme-style', FB_PLUGIN_URL . 'assets/css/backend/slick/slick-theme.css', [], FB_VERSION);
        wp_register_script('frontis-slick-script', FB_PLUGIN_URL . 'assets/js/backend/slick/slick.min.js', [], FB_VERSION, true);
    }

    public function add_preconnect_to_head() {
        // Enqueue google fonts
        $google_font_url = get_option('fb_google_fonts_url');
        if ($google_font_url) {
            echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
            echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
            echo '<link rel="preload" as="style" href="' . $google_font_url . '" onload="this.onload=null;this.rel=\'stylesheet\'">';
            echo '<noscript><link rel="stylesheet" href="' . $google_font_url . '"></noscript>';
        }
    }
}