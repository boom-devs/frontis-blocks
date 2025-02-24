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

    public function __construct()
    {
        // Other initialization code...
        add_action('wp_head', array($this, 'output_global_styles'), 999);
        add_action('rest_api_init', array($this, 'typography_init'), 999);
    }
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
            'update_globaltypo',
            'update_fontfamilies',
            'get_global_colors',
            'get_gradient_colors',
            'get_custom_colors',
            'get_custom_gradient_colors',
            'get_typography',
            'get_custom_typography',
            'get_globaltypo',
            'get_custom_css',
            'get_fontfamilies',
            'import_demo_data',
            'import_full_site',
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

    public function update_globaltypo()
    {
        $this->handle_option_update('globaltypo', 'array');
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

    public function get_globaltypo()
    {
        $global_typography = get_option('fb_globaltypo');
        if ($global_typography) {
            wp_send_json_success($global_typography);
        }

        wp_send_json_error('Global Typography not found.');
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

            // Get data from AJAX request
            $config = $_POST['config'] ?? [];
            $block_id = sanitize_text_field($_POST['block_id'] ?? '');
            $post_id = intval($_POST['post_id'] ?? 0);

            if (empty($post_id)) {
                wp_send_json_error('Error: Post ID is required.');
                return;
            }

            // Handle global colors and typography
            if (!empty($config)) {
                $colors = $config['colors'] ?? [];
                $typography = $config['typography'] ?? [];
            
                // Update colors
                update_option('global_site_colors', $colors);
                
                // Update typography for each element
                if (!empty($typography)) {
                    foreach ($typography as $element => $settings) {
                        update_option("fb_typography_{$element}", $settings);
                    }
                }
                
                // Generate and save combined styles
                $custom_styles = $this->generate_color_css($colors) . $this->generate_typography_css($typography);
                update_option('fb_global_styles', $custom_styles);
            }

            // Validate demo content file existence
            $json_file_path = WP_PLUGIN_DIR . '/frontis-blocks/full-site.json';
            if (!file_exists($json_file_path)) {
                wp_send_json_error('Error: Demo data file not found.');
                return;
            }

            // Read and decode demo content
            $json_data = file_get_contents($json_file_path);
            $demo_data = json_decode($json_data, true);

            if (json_last_error() !== JSON_ERROR_NONE || empty($demo_data)) {
                wp_send_json_error('Error: Invalid or empty demo content.');
                return;
            }

            // Ensure proper block serialization
            $serialized_content = serialize_blocks($demo_data['blocks'] ?? $demo_data);

            if (!empty($block_id)) {
                // Store block-specific content using transient
                set_transient('fb_block_' . $block_id, [
                    'blockId' => $block_id,
                    'content' => $demo_data
                ], HOUR_IN_SECONDS);

                wp_send_json_success([
                    'block_id' => $block_id,
                    'content' => $serialized_content,
                    'message' => 'Block imported successfully with global settings!',
                ]);
            } else {
                // Update full post content
                $post_data = [
                    'ID' => $post_id,
                    'post_content' => $serialized_content,
                ];

                $update_result = wp_update_post($post_data, true);

                if (is_wp_error($update_result)) {
                    wp_send_json_error('Error: Failed to update post - ' . $update_result->get_error_message());
                } else {
                    wp_send_json_success([
                        'content' => $serialized_content,
                        'message' => 'Full site imported successfully with global settings!',
                    ]);
                }
            }
        } catch (Exception $e) {
            wp_send_json_error('Error: ' . $e->getMessage());
        }
    }


    private function generate_color_css($colors)
    {
        if (empty($colors) || !is_array($colors)) {
            return '';
        }

        $css = ':root {';
        $color_map = [];

        foreach ($colors as $index => $color) {
            $slug = sanitize_key($color['slug']);
            $hex = sanitize_hex_color($color['hex']);
            $css .= "--{$slug}: {$hex};\n";
            $color_map[$slug] = $hex;
        }

        $css .= "}\n";

        // Apply primary color to all text elements (p, span, h1-h6)
        if (!empty($colors[0])) {
            $primary_slug = sanitize_key($colors[0]['slug']);
            $css .= "body p, body span, body h1, body h2, body h3, body h4, body h5, body h6 { color: var(--{$primary_slug}); }\n";
        }

        // Apply secondary color to all anchor (a) elements
        if (!empty($colors[1])) {
            $secondary_slug = sanitize_key($colors[1]['slug']);
            $css .= "body a { color: var(--{$secondary_slug}); }\n";
        }

        // Apply remaining colors to other elements
        $extra_elements = ['body button', 'body input', 'body blockquote', 'body label', 'body code'];
        foreach (array_slice($colors, 2) as $index => $color) {
            $element = $extra_elements[$index % count($extra_elements)];
            $slug = sanitize_key($color['slug']);
            $css .= "{$element} { color: var(--{$slug}); }\n";
        }

        return $css;
    }


    private function generate_typography_css($typography)
    {
        if (empty($typography)) {
            return '';
        }

        $css = '';
        $elements = ['text', 'link', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

        foreach ($elements as $element) {
            $settings = get_option("fb_typography_{$element}"); 
            if (empty($settings)) {
                continue;
            }

            $settings = json_decode($settings, true);
            if (empty($settings)) {
                continue;
            }

            // Determine CSS selector based on element type
            $selector = match ($element) {
                'text' => 'body p, body span',
                'link' => 'a',
                'button' => 'button, .button',
                default => $element,
            };

            $css .= "{$selector} {\n";

            // Font Family
            if (!empty($settings['fontFamily'])) {
                $css .= "  font-family: {$settings['fontFamily']};\n";
            }

            // Font Size with units
            if (!empty($settings['fontSize']['desktop'])) {
                $css .= "  font-size: {$settings['fontSize']['desktop']}{$settings['fontSizeUnit']};\n";
            }

            // Font Weight
            if (!empty($settings['fontWeight'])) {
                $css .= "  font-weight: {$settings['fontWeight']};\n";
            }

            // Font Style
            if (!empty($settings['fontStyle'])) {
                $css .= "  font-style: {$settings['fontStyle']};\n";
            }

            // Text Transform
            if (!empty($settings['textTransform'])) {
                $css .= "  text-transform: {$settings['textTransform']};\n";
            }

            // Text Decoration
            if (!empty($settings['textDecoration'])) {
                $css .= "  text-decoration: {$settings['textDecoration']};\n";
            }

            // Letter Spacing
            if (!empty($settings['letterSpacing']['desktop'])) {
                $css .= "  letter-spacing: {$settings['letterSpacing']['desktop']}{$settings['letterSpacingUnit']};\n";
            }

            // Line Height
            if (!empty($settings['lineHeight']['desktop'])) {
                $css .= "  line-height: {$settings['lineHeight']['desktop']}{$settings['lineHeightUnit']};\n";
            }

            $css .= "}\n\n";

            // Add responsive styles if needed
            $css .= $this->add_responsive_typography($selector, $settings);
        }

        return $css;
    }

    private function add_responsive_typography($selector, $settings)
    {
        $css = '';

        // Tablet styles
        if (!empty($settings['fontSize']['tablet'])) {
            $css .= "@media (max-width: 768px) {\n";
            $css .= "  {$selector} {\n";
            $css .= "    font-size: {$settings['fontSize']['tablet']}{$settings['fontSizeUnit']};\n";

            if (!empty($settings['letterSpacing']['tablet'])) {
                $css .= "    letter-spacing: {$settings['letterSpacing']['tablet']}{$settings['letterSpacingUnit']};\n";
            }

            if (!empty($settings['lineHeight']['tablet'])) {
                $css .= "    line-height: {$settings['lineHeight']['tablet']}{$settings['lineHeightUnit']};\n";
            }

            $css .= "  }\n";
            $css .= "}\n\n";
        }

        // Mobile styles
        if (!empty($settings['fontSize']['mobile'])) {
            $css .= "@media (max-width: 480px) {\n";
            $css .= "  {$selector} {\n";
            $css .= "    font-size: {$settings['fontSize']['mobile']}{$settings['fontSizeUnit']};\n";

            if (!empty($settings['letterSpacing']['mobile'])) {
                $css .= "    letter-spacing: {$settings['letterSpacing']['mobile']}{$settings['letterSpacingUnit']};\n";
            }

            if (!empty($settings['lineHeight']['mobile'])) {
                $css .= "    line-height: {$settings['lineHeight']['mobile']}{$settings['lineHeightUnit']};\n";
            }

            $css .= "  }\n";
            $css .= "}\n";
        }

        return $css;
    }

    public function output_global_styles()
    {
        $styles = get_option('fb_global_styles', '');
        if (!empty($styles)) {
            echo "<style id='fb-global-styles'>\n" . esc_html($styles) . "\n</style>";
        }
    }

    public function typography_init()
    {
        $elements = ['text', 'link', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

        foreach ($elements as $element) {
            register_setting(
                'fb_typography',
                'fb_typography_' . $element,
                [
                    'type' => 'string',
                    'show_in_rest' => true,
                    'default' => ''
                ]
            );
        }
    }

}
