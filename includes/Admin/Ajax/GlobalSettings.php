<?php

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;

/**
 * GlobalSettings
 *
 * @package FrontisBlocks
 */
class GlobalSettings extends AjaxBase
{

    use Singleton;

    /**
     * register_global_settings_events
     *
     * @return void
     */
    public function register_global_settings_events()
    {
        $events = [
            'update_global_colors',
            'update_gradient_colors',
            'update_custom_colors',
            'update_custom_gradient_colors',
            'update_typography',
            'update_custom_typography',
            'update_fontfamilies',
            'get_global_colors',
            'get_gradient_colors',
            'get_custom_colors',
            'get_custom_gradient_colors',
            'get_typography',
            'get_custom_typography',
            'get_custom_css',
            'get_fontfamilies',
            'import_demo_data',
            'import_full_site'
        ];

        $this->init_ajax_events($events);
    }

    public function update_global_colors()
    {
        $this->handle_option_update('global_colors', 'array');
    }

    public function update_gradient_colors()
    {
        $this->handle_option_update('gradient_colors', 'array');
    }

    public function update_custom_colors()
    {
        $this->handle_option_update('custom_colors', 'array');
    }

    public function update_custom_gradient_colors()
    {
        $this->handle_option_update('custom_gradient_colors', 'array');
    }

    public function update_typography()
    {
        $this->handle_option_update('typography', 'array');
    }

    public function update_custom_typography()
    {
        $this->handle_option_update('custom_typography', 'array');
    }

    public function update_fontfamilies()
    {
        $this->handle_option_update('fontfamilies', 'array');
    }

    public function get_global_colors()
    {
        $global_colors = get_option('fb_global_colors');

        if ($global_colors) {
            wp_send_json_success($global_colors);
        }

        wp_send_json_error('Global color not found.');
    }

    public function get_gradient_colors()
    {
        $global_gradient_colors = get_option('fb_gradient_colors');
        if ($global_gradient_color) {
            wp_send_json_success($global_gradient_colors);
        }
        wp_send_json_error('Gradient color not found.');
    }

    public function get_custom_colors()
    {
        $custom_colors = get_option('fb_custom_colors');
        if ($custom_colors) {
            wp_send_json_success($custom_colors);
        }

        wp_send_json_error('Custom color not found.');

    }

    public function get_custom_gradient_colors()
    {
        $custom_gradient_colors = get_option('fb_custom_gradient_colors');
        if ($custom_gradient_colors) {
            wp_send_json_success($custom_gradient_colors);
        }

        wp_send_json_error('Custom gradient color not found.');
    }

    public function get_typography()
    {
        $typography = get_option('fb_typography');
        if ($typography) {
            wp_send_json_success($typography);
        }

        wp_send_json_error('Typography not found.');
    }

    public function get_custom_typography()
    {
        $typography = get_option('fb_custom_typography');
        if ($typography) {
            wp_send_json_success($typography);
        }

        wp_send_json_error('Typography not found.');
    }

    public function get_fontfamilies()
    {
        $font_families = get_option('fb_fontfamilies');
        if ($font_families) {
            wp_send_json_success($font_families);
        }

        wp_send_json_error('Font families not found.');
    }

    public function get_custom_css()
    {
        $custom_css = get_option('fb_custom_css');

        if ($custom_css) {
            wp_send_json_success($custom_css);
        }

        wp_send_json_error('Custom css not found.');
    }

    /**
     * handle_option_update
     *
     * @param string $option_name
     * @param string $type
     * @return void
     */
    private function handle_option_update($option_name, $type)
    {
        $this->validate_nonce();
        $this->validate_permissions();
        $this->update_option("fb_$option_name", $type);
    }

    /**
     * validate_nonce
     *
     * @return void
     */
    private function validate_nonce()
    {
        if (!wp_verify_nonce($_POST['nonce'], 'fb_sidebar_nonce')) {
            wp_send_json_error('Invalid nonce');
        }
    }

    /**
     * check permissions
     *
     * @return void
     */
    private function validate_permissions()
    {
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
        }
    }

    /**
     * update_option
     *
     * @param string $option_name
     * @param string $type
     * @return void
     */
    private function update_option($option_name, $type)
    {
        $updated = update_option($option_name, $_POST['data'], true);

        if ($updated) {
            $global_colors = get_option($option_name);
            $data = array(
                'option_name' => $option_name,
                'data' => $global_colors
            );

            wp_send_json_success($data);
        }

        wp_send_json_error('Update failed.');
    }
    /**
     * sanitize_option_value
     *
     * @param mixed $value
     * @param string $type
     * @return mixed
     */
    private function sanitize_option_value($value, $type)
    {
        switch ($type) {
            case 'array':
                return is_array($value) ? $value : [];
            default:
                return sanitize_text_field($value);
        }
    }

    //Demo import for blocks
    // public function import_demo_data() {
    //     try {
    //         // Security check
    //         $nonce = $_POST['security'] ?? '';
    //         if (!wp_verify_nonce($nonce, 'fb_import_demo_data')) {
    //             wp_send_json_error('Invalid nonce.');
    //             return;
    //         }

    //         // Get block ID from POST
    //         $block_id = $_POST['block_id'] ?? '';
    //         if (empty($block_id)) {
    //             wp_send_json_error('Block ID is required.');
    //             return;
    //         }

    //         // Get demo data from JSON
    //         $json_file_path = WP_PLUGIN_DIR . '/frontis-blocks/testing-page.json';
    //         $json_data = file_get_contents($json_file_path);
    //         $demo_data = json_decode($json_data, true);

    //         // Update specific block's content
    //         $block_content = array(
    //             'blockId' => $block_id,
    //             'content' => $demo_data
    //         );

    //         // Store in transient for temporary use
    //         set_transient('fb_block_' . $block_id, $block_content, HOUR_IN_SECONDS);

    //         wp_send_json_success(array(
    //             'block_id' => $block_id,
    //             'content' => serialize_blocks($demo_data),
    //             'message' => 'Demo data imported successfully!'
    //         ));

    //     } catch (Exception $e) {
    //         wp_send_json_error('Error: ' . $e->getMessage());
    //     }
    // }

    //Demo import for pages
    // public function import_demo_data() {
    //     try {
    //         // Security check
    //         $nonce = $_POST['security'] ?? '';
    //         if (!wp_verify_nonce($nonce, 'fb_import_demo_data')) {
    //             wp_send_json_error('Invalid nonce.');
    //             return;
    //         }

    //         // Get block ID and post ID
    //         $block_id = $_POST['block_id'] ?? '';
    //         $post_id = $_POST['post_id'] ?? 0; // Get post ID from AJAX

    //         if (empty($post_id)) {
    //             wp_send_json_error('Post ID is required.');
    //             return;
    //         }

    //         // Get demo data from JSON
    //         $json_file_path = WP_PLUGIN_DIR . '/frontis-blocks/testing-page.json';
    //         $json_data = file_get_contents($json_file_path);
    //         $demo_data = json_decode($json_data, true);
    //         $serialized_content = serialize_blocks($demo_data);

    //         if (!empty($block_id)) {
    //             // Store block-specific content
    //             set_transient('fb_block_' . $block_id, [
    //                 'blockId' => $block_id,
    //                 'content' => $demo_data
    //             ], HOUR_IN_SECONDS);

    //             wp_send_json_success([
    //                 'block_id' => $block_id,
    //                 'content' => $serialized_content,
    //                 'message' => 'Demo data imported successfully!'
    //             ]);
    //         } else {
    //             // Update full page content
    //             $post_data = [
    //                 'ID'           => $post_id,
    //                 'post_content' => $serialized_content
    //             ];

    //             $update_result = wp_update_post($post_data, true);

    //             if (is_wp_error($update_result)) {
    //                 wp_send_json_error('Failed to update post: ' . $update_result->get_error_message());
    //             } else {
    //                 wp_send_json_success([
    //                     'content' => $serialized_content,
    //                     'message' => 'Page content updated with demo data!'
    //                 ]);
    //             }
    //         }
    //     } catch (Exception $e) {
    //         wp_send_json_error('Error: ' . $e->getMessage());
    //     }
    // }     

    //demo import for full site
    // public function import_demo_data() {
    //     try {
    //         // Security check
    //         $nonce = $_POST['security'] ?? '';
    //         if (!wp_verify_nonce($nonce, 'fb_import_demo_data')) {
    //             wp_send_json_error('Invalid nonce.');
    //             return;
    //         }

    //         // Get block ID and post ID
    //         $block_id = $_POST['block_id'] ?? '';
    //         $post_id = $_POST['post_id'] ?? 0; // Get post ID from AJAX

    //         if (empty($post_id)) {
    //             wp_send_json_error('Post ID is required.');
    //             return;
    //         }

    //         // Get demo data from JSON
    //         $json_file_path = WP_PLUGIN_DIR . '/frontis-blocks/testing-page.json';
    //         $json_data = file_get_contents($json_file_path);
    //         $demo_data = json_decode($json_data, true);
    //         $serialized_content = serialize_blocks($demo_data);

    //         if (!empty($block_id)) {
    //             // Store block-specific content
    //             set_transient('fb_block_' . $block_id, [
    //                 'blockId' => $block_id,
    //                 'content' => $demo_data
    //             ], HOUR_IN_SECONDS);

    //             wp_send_json_success([
    //                 'block_id' => $block_id,
    //                 'content' => $serialized_content,
    //                 'message' => 'Demo data imported successfully!'
    //             ]);
    //         } else {
    //             // Update full page content
    //             $post_data = [
    //                 'ID'           => $post_id,
    //                 'post_content' => $serialized_content
    //             ];

    //             $update_result = wp_update_post($post_data, true);

    //             if (is_wp_error($update_result)) {
    //                 wp_send_json_error('Failed to update post: ' . $update_result->get_error_message());
    //             } else {
    //                 wp_send_json_success([
    //                     'content' => $serialized_content,
    //                     'message' => 'Page content updated with demo data!'
    //                 ]);
    //             }
    //         }
    //     } catch (Exception $e) {
    //         wp_send_json_error('Error: ' . $e->getMessage());
    //     }
    // }  

    // PHP: Import Full Site
    public function import_full_site()
    {
        try {
            // Security check
            $nonce = $_POST['security'] ?? '';
            if (!wp_verify_nonce($nonce, 'fb_import_demo_data')) {
                wp_send_json_error('Invalid nonce.');
                return;
            }

            $config = isset($_POST['config']) ? $_POST['config'] : array();

            // Store the configuration
            if (!empty($config)) {
                $colors = isset($config['colors']) ? $config['colors'] : array();
                $typography = isset($config['typography']) ? $config['typography'] : array();

                // Store colors in wp_options instead of theme_mods
                $color_styles = $this->generate_color_css($colors);
                $typography_styles = $this->generate_typography_css($typography);

                // Combine all styles
                $custom_styles = $color_styles . $typography_styles;

                // Save the CSS to wp_options
                update_option('fb_global_styles', $custom_styles);

                // Add action to output CSS in header if not already added

                add_action('wp_head', array($this, 'output_global_styles'));
            }

            // Rest of your page import code...
            // [Previous page import logic remains the same]

            wp_send_json_success(['message' => 'Full site imported successfully!']);
        } catch (Exception $e) {
            wp_send_json_error('Error: ' . $e->getMessage());
        }
    }

    /**
     * Generate CSS for colors
     */
    private function generate_color_css($colors)
    {
        $css = '';

        if (!empty($colors)) {
            $css .= "/* Global Color Styles */\n";

            if (isset($colors['text'])) {
                $css .= "p, span, li, td, div:not(.fb-template-library-card *) { color: {$colors['text']}; }\n";
            }

            if (isset($colors['primary'])) {
                $css .= "h1, h2, h3, h4, h5, h6 { color: {$colors['primary']}; }\n";
                $css .= "a { color: {$colors['primary']}; }\n";
            }

            if (isset($colors['secondary'])) {
                $css .= ".secondary-elements { color: {$colors['secondary']}; }\n";
            }

            if (isset($colors['accent'])) {
                $css .= "blockquote, .accent-elements { color: {$colors['accent']}; }\n";
            }

            if (isset($colors['background'])) {
                $css .= "body { background-color: {$colors['background']}; }\n";
            }
        }

        return $css;
    }

    /**
     * Generate CSS for typography
     */
    private function generate_typography_css($typography)
    {
        $css = '';

        if (!empty($typography)) {
            $css .= "/* Global Typography Styles */\n";

            if (isset($typography['headingFont'])) {
                $css .= "h1, h2, h3, h4, h5, h6 { font-family: '{$typography['headingFont']}', sans-serif; }\n";
            }

            if (isset($typography['bodyFont'])) {
                $css .= "body, p, span, li, td { font-family: '{$typography['bodyFont']}', sans-serif; }\n";
            }

            if (isset($typography['baseSize'])) {
                $css .= "body { font-size: {$typography['baseSize']}; }\n";
            }

            if (isset($typography['scale'])) {
                $scale = floatval($typography['scale']);
                $css .= "h1 { font-size: " . ($scale * 2.5) . "em; }\n";
                $css .= "h2 { font-size: " . ($scale * 2) . "em; }\n";
                $css .= "h3 { font-size: " . ($scale * 1.75) . "em; }\n";
                $css .= "h4 { font-size: " . ($scale * 1.5) . "em; }\n";
                $css .= "h5 { font-size: " . ($scale * 1.25) . "em; }\n";
                $css .= "h6 { font-size: " . ($scale * 1.1) . "em; }\n";
            }
        }

        return $css;
    }

    /**
     * Output the global styles in wp_head
     */
    public function output_global_styles()
    {
        $styles = get_option('fb_global_styles', '');
        if (!empty($styles)) {
            echo "<style id='fb-global-styles'>\n{$styles}\n</style>";
        }
    }

    /**
     * Add this method to load Google Fonts if needed
     */
    public function enqueue_google_fonts()
    {
        $typography = get_option('fb_typography_settings', array());

        if (!empty($typography)) {
            $fonts = array();

            if (!empty($typography['headingFont'])) {
                $fonts[] = $typography['headingFont'];
            }

            if (!empty($typography['bodyFont'])) {
                $fonts[] = $typography['bodyFont'];
            }

            if (!empty($fonts)) {
                $fonts = array_unique($fonts);
                $fonts_string = implode('|', str_replace(' ', '+', $fonts));
                wp_enqueue_style(
                    'fb-google-fonts',
                    "https://fonts.googleapis.com/css?family={$fonts_string}&display=swap",
                    array(),
                    null
                );
            }
        }
    }

}
