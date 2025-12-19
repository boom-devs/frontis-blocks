<?php

namespace FrontisBlocks\Utils;
use FrontisBlocks\Config\BlockList;

/**
 * Collection of utility helpers shared across the plugin.
 */
class Helper
{
    /**
     * Check if the given block is a Frontis block
     *
     * @param string $block_content The block content
     * @param array $parsed_block The parsed block
     * @param string $class_attr The class attribute to check
     * @return bool
     */
    public static function is_frontis_block($block_content, $parsed_block, $class_attr = 'blockClass')
    {
        return isset($parsed_block['blockName']) && str_contains($parsed_block['blockName'], 'frontis-block');
    }

    /**
     * Generate a unique ID
     *
     * @return string
     */
    public static function generate_unique_id()
    {
        return 'fb-' . uniqid();
    }

    /**
     * Get block assets URL
     *
     * @param string $path The relative path to the asset
     * @return string
     */
    public static function get_block_asset_url($path)
    {
        return plugin_dir_url(FB_PLUGIN_PATH) . 'build/blocks/' . $path;
    }

    /**
     * Get plugin settings
     *
     * @param string $key The setting key
     * @param mixed $default The default value if the setting doesn't exist
     * @return mixed
     */
    public static function get_plugin_setting($key, $default = null)
    {
        $settings = get_option('frontis_blocks_settings', []);
        return isset($settings[$key]) ? $settings[$key] : $default;
    }

    /**
     * Check if the current page is a Gutenberg editor page
     *
     * @return bool
     */
    public static function is_gutenberg_editor()
    {
        global $pagenow;
        return in_array($pagenow, ['post.php', 'post-new.php', 'site-editor.php', 'widgets.php', 'index.php']);
    }

    /**
     * Resolve a post ID from its slug and post type.
     */
    public static function get_post_id_by_slug($post_name, $post_type = 'post')
    {
        $post = get_page_by_path($post_name, OBJECT, $post_type);
        return $post ? $post->ID : 0;
    }

    /**
     * Get size information for all currently-registered image sizes.
     *
     * @global $_wp_additional_image_sizes
     * @uses   get_intermediate_image_sizes()
     * @link   https://codex.wordpress.org/Function_Reference/get_intermediate_image_sizes
     * @since  1.9.0
     * @return array $sizes Data for all currently-registered image sizes.
     */
    public static function get_image_sizes()
    {

        global $_wp_additional_image_sizes;

        // Define essential sizes
        $essential_sizes = array('full', 'thumbnail', 'medium', 'medium_large', 'large');

        $sizes = get_intermediate_image_sizes();
        $image_sizes = array();

        // Add the 'Full' size option
        $image_sizes[] = array(
            'value' => 'full',
            'label' => esc_html__('Full', 'frontis-blocks'),
        );

        foreach ($sizes as $size) {
            // Include only essential sizes
            if (in_array($size, $essential_sizes, true)) {
                $image_sizes[] = array(
                    'value' => $size,
                    'label' => ucwords(trim(str_replace(array('-', '_'), array(' ', ' '), $size))),
                );
            } elseif (isset($_wp_additional_image_sizes[$size])) {
                // Include additional sizes if they are essential
                if (in_array($size, $essential_sizes, true)) {
                    $image_sizes[] = array(
                        'value' => $size,
                        'label' => sprintf(
                            '%1$s (%2$sx%3$s)',
                            ucwords(trim(str_replace(array('-', '_'), array(' ', ' '), $size))),
                            $_wp_additional_image_sizes[$size]['width'],
                            $_wp_additional_image_sizes[$size]['height']
                        ),
                    );
                }
            }
        }

        // Apply the filter for additional customization
        $image_sizes = apply_filters('fb_post_featured_image_sizes', $image_sizes);

        return $image_sizes;
    }

    /**
     * Get all taxonomies.
     *
     * @since 1.11.0
     * @access public
     */
    public static function get_related_taxonomy()
    {
        $post_types = self::get_post_types();
        $return_array = array();

        foreach ($post_types as $key => $value) {
            $post_type = $value['value'];

            $taxonomies = get_object_taxonomies($post_type, 'objects');
            $data = array();

            foreach ($taxonomies as $tax_slug => $tax) {
                if (!$tax->public || !$tax->show_ui || !$tax->show_in_rest) {
                    continue;
                }

                $data[$tax_slug] = $tax;
                $terms = get_terms($tax_slug);
                $related_tax = array();

                if (!empty($terms)) {
                    foreach ($terms as $t_index => $t_obj) {
                        $related_tax[] = array(
                            'id' => $t_obj->term_id,
                            'name' => $t_obj->name,
                            'child' => get_term_children($t_obj->term_id, $tax_slug),
                        );
                    }
                    $return_array[$post_type]['terms'][$tax_slug] = $related_tax;
                }
            }

            $return_array[$post_type]['taxonomy'] = $data;
        }

        return apply_filters('fb_post_loop_taxonomies', $return_array);
    }

    /**
     * Return authors who have at least one published post.
     */
    public static function get_all_authors_with_posts()
    {
        $args = array(
            'has_published_posts' => true,
            'fields' => 'all_with_meta',
        );
        return get_users($args);
    }

    /**
     * Fetch the slug for a page when Frontis blocks are enabled there.
     */
    public static function get_page_name($post_id)
    {
        $frontis_used = get_post_meta(get_the_ID(), 'frontis_blocks_used', true);
        $page_name = get_post_field('post_name', $post_id);

        if ($frontis_used) {
            return $page_name;
        }
        return false;
    }


    /**
     * Get WooCommerce Template.
     *
     * @since 2.9.1
     * @return bool|string The WooCommerce template if found, or false if not found.
     */
    public static function get_woocommerce_template()
    {
        // Check if WooCommerce is active.
        if (class_exists('WooCommerce')) {
            $is_order_received_page = function_exists('is_order_received_page') && is_order_received_page();
            $is_checkout = function_exists('is_checkout') && is_checkout();
            $is_wc_order_received_endpoint_url = function_exists('is_wc_endpoint_url') && is_wc_endpoint_url('order-received');
            // Check other WooCommerce pages.
            switch (true) {
                // Check if the current page is the shop page.
                case is_cart():
                    return 'page-cart';

                // Check if the current page is the checkout page.
                case $is_checkout:
                    // Check if the current page is the order received page.
                    if ($is_order_received_page) {
                        return 'order-confirmation';
                    }
                    return 'page-checkout';

                // Check if the current page is the order received page.
                case $is_wc_order_received_endpoint_url:
                    return 'order-confirmation';

                // Check if the current page is a product page.
                case is_product():
                    // Retrieve the queried object.
                    $object = get_queried_object();
                    // Get all block templates.
                    $template_types = get_block_templates();
                    // Extract the 'slug' column from the block templates array.
                    $template_type_slug = array_column($template_types, 'slug');
                    return (in_array('single-product-' . $object->post_name, $template_type_slug)) ? 'single-product-' . $object->post_name : 'single-product';

                // Check if the current page is an archive page.
                case is_archive():
                    // Retrieve the queried object.
                    $object = get_queried_object();

                    // Get all block templates.
                    $template_types = get_block_templates();

                    // Extract the 'slug' column from the block templates array.
                    $template_type_slug = array_column($template_types, 'slug');

                    // Check if the current request is a search and if the post type archive is for 'product'.
                    $searchCondition = is_search() && is_post_type_archive('product');

                    // Switch statement to determine the template based on various conditions.
                    switch (true) {
                        // Case when the current page is a product taxonomy and the taxonomy is 'product_tag'.
                        case (is_product_taxonomy() && is_tax('product_tag')) && $object instanceof WP_Term && !in_array('taxonomy-' . $object->taxonomy . '-' . $object->slug, $template_type_slug):
                            // Return the appropriate template based on the search condition.
                            return $searchCondition ? 'product-search-results' : 'archive-product';

                        // Case when the current page is a product taxonomy and the object is a term.
                        case is_product_taxonomy() && $object instanceof WP_Term:
                            // Check if the taxonomy is a product attribute.
                            if (taxonomy_is_product_attribute($object->taxonomy)) {
                                // Return the 'product-search-results' or 'taxonomy-product_attribute' template based on the search condition.
                                return $searchCondition ? 'product-search-results' : 'taxonomy-product_attribute';
                            } elseif ((is_tax('product_cat') || is_tax('product_tag')) && in_array('taxonomy-' . $object->taxonomy . '-' . $object->slug, $template_type_slug)) {
                                // Return the specific taxonomy template based on the search condition.
                                return $searchCondition ? 'product-search-results' : 'taxonomy-' . $object->taxonomy . '-' . $object->slug;
                            } else {
                                // Return the appropriate template based on the search condition.
                                return $searchCondition ? 'product-search-results' : 'archive-product';
                            }
                            break;

                        // Case when the current page is the shop page.
                        case is_shop():
                            // Return the appropriate template based on the search condition.
                            return $searchCondition ? 'product-search-results' : 'archive-product';

                        default:
                            // Return the appropriate template based on the search condition and the type of the queried object.
                            return $searchCondition ? 'product-search-results' : (($object instanceof WP_Post || $object instanceof WP_Post_Type || $object instanceof WP_Term || $object instanceof WP_User) ? self::get_archive_page_template($object, $template_type_slug) : 'archive-product');
                    }
                    break;

                default:
                    // Handle other cases if needed.
                    break;
            }
        }
        return false;
    }

    /**
     * Determine template post type function.
     *
     * @param int $post_id of current post.
     * @since 2.9.1
     * @return string The determined post type.
     */
    public static function determine_template_post_type($post_id)
    {

        $get_woocommerce_template = self::get_woocommerce_template(); // Get WooCommerce template.

        if (is_string($get_woocommerce_template)) { // Check if WooCommerce template is found.
            return $get_woocommerce_template; // WooCommerce templates to post type.
        }

        // Check if post id is passed.
        if (!empty($post_id)) {
            $template_slug = get_page_template_slug($post_id);
            if (!empty($template_slug)) {
                return $template_slug;
            }
        }

        $conditional_to_post_type = array(
            'is_attachment' => 'attachment',
            'is_embed' => 'embed',
            'is_front_page' => 'home',
            'is_home' => 'home',
            'is_search' => 'search',
            'is_paged' => 'paged',
        );

        $what_post_type = '404';
        $object = get_queried_object();
        $template_types = get_block_templates();
        $template_type_slug = array_column($template_types, 'slug');
        $is_regular_page = is_page() && !is_front_page();
        $is_front_page_template = is_front_page() && get_front_page_template();
        $is_static_front_page = 'page' === get_option('show_on_front') && get_option('page_on_front') && is_front_page() && !is_home() && !$is_front_page_template;

        if ($is_regular_page || $is_static_front_page) {
            return (is_a($object, 'WP_Post') && in_array('page-' . $object->post_name, $template_type_slug)) ? 'page-' . $object->post_name : 'page';
        } elseif ($is_front_page_template) {
            return 'front-page';
        } elseif (is_archive()) {
            return (is_a($object, 'WP_Post') || is_a($object, 'WP_Post_Type') || is_a($object, 'WP_Term') || is_a($object, 'WP_User')) ? self::get_archive_page_template($object, $template_type_slug) : 'archive';
        } else {
            if (!empty($object->post_type)) {
                if (is_singular()) {
                    $name_decoded = urldecode($object->post_name);
                    if (in_array('single-' . $object->post_type . '-' . $name_decoded, $template_type_slug)) {
                        return 'single-' . $object->post_type . '-' . $name_decoded;
                    } elseif (in_array('single-' . $object->post_type, $template_type_slug)) {
                        return 'single-' . $object->post_type;
                    } else {
                        return 'single';
                    }
                }
            }
        }

        foreach ($conditional_to_post_type as $conditional => $post_type) {
            if ($conditional()) {
                $what_post_type = $post_type;
                break;
            }
        }

        return $what_post_type;
    }

    /**
     * Determine which archive template slug should be loaded.
     */
    public static function get_archive_page_template($archive_object, $template_type_slug)
    {
        if (is_author() && is_a($archive_object, 'WP_User')) {
            $author_slug = 'author-' . $archive_object->user_nicename;
            return in_array($author_slug, $template_type_slug) ? $author_slug : (in_array('author', $template_type_slug) ? 'author' : 'archive');
        } elseif (is_a($archive_object, 'WP_Term')) {
            if (is_category()) {
                $category_slug = 'category-' . $archive_object->slug;
                return in_array($category_slug, $template_type_slug) ? $category_slug : (in_array('category', $template_type_slug) ? 'category' : 'archive');
            } elseif (is_tag()) {
                $tag_slug = 'tag-' . $archive_object->slug;
                return in_array($tag_slug, $template_type_slug) ? $tag_slug : (in_array('tag', $template_type_slug) ? 'tag' : 'archive');
            } elseif (is_tax()) {
                $tax_slug = 'taxonomy-' . $archive_object->taxonomy;
                return in_array($tax_slug, $template_type_slug) ? $tax_slug : 'archive';
            }
        } elseif (is_date() && in_array('date', $template_type_slug)) {
            return 'date';
        } elseif (is_a($archive_object, 'WP_Post_Type') && is_post_type_archive()) {
            $post_type_archive_slug = 'archive-' . $archive_object->name;
            return in_array($post_type_archive_slug, $template_type_slug) ? $post_type_archive_slug : (in_array('archive', $template_type_slug) ? 'archive' : 'archive-' . $archive_object->name);
        }
        return 'archive';
    }

    /**
     * Clean previously generated Frontis CSS files except the shared bundle.
     */
    public static function remove_css_files()
    {
        $upload_dir = wp_upload_dir();
        $css_dir = trailingslashit($upload_dir['basedir']) . 'frontis-blocks/';
        $css_files = glob($css_dir . '*.css');
        foreach ($css_files as $file) {
            if (basename($file) !== 'frontis-blocks.css') {
                unlink($file);
            }
        }
    }

    /**
     * Return all public post types that expose a REST schema.
     */
    public static function get_post_types()
    {
        $post_types = get_post_types(
            array(
                'public' => true,
                'show_in_rest' => true,
            ),
            'objects'
        );

        $options = array();

        foreach ($post_types as $post_type) {

            if ('attachment' === $post_type->name) {
                continue;
            }

            $options[] = array(
                'value' => $post_type->name,
                'label' => $post_type->label,
            );
        }

        return apply_filters('fb_loop_post_types', $options);
    }

    /**
     * Sanitize HTML classes
     *
     * @param string|array $classes The classes to sanitize
     * @return string
     */
    public static function sanitize_html_classes($classes)
    {
        if (!is_array($classes)) {
            $classes = explode(' ', $classes);
        }

        $classes = array_map('sanitize_html_class', $classes);
        return implode(' ', $classes);
    }

    /**
     * Get responsive breakpoints
     *
     * @return array
     */
    public static function get_responsive_breakpoints()
    {
        return [
            'mobile' => 767,
            'tablet' => 1024,
            'desktop' => 1200,
        ];
    }

    /**
     * Get installed WordPress Plugin List
     *
     * @return array
     */
    public static function get_plugins()
    {
        if (!function_exists('get_plugins')) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }
        return get_plugins();
    }

    /**
     * Get Active Plugins List
     */
    public static function get_active_plugin_list()
    {
        $active_plugins = get_option('active_plugins');
        if (is_multisite()) {
            $all = wp_get_active_network_plugins();
            if ($all) {
                $active_plugins = array_merge($active_plugins, array_map(function ($each) {
                    $arr = explode('/', $each);
                    return $arr[count($arr) - 2] . DIRECTORY_SEPARATOR . end($arr);
                }, $all));
            }
        }
        return $active_plugins;
    }

    /**
     * Parse block content for specific data
     *
     * @param string $content The block content
     * @param string $search The string to search for
     * @return string|null
     */
    public static function parse_block_content($content, $search)
    {
        preg_match('/' . preg_quote($search, '/') . '="([^"]*)"/', $content, $matches);
        return isset($matches[1]) ? $matches[1] : null;
    }

    /**
     * Check if a plugin is active
     *
     * @param string $plugin_path The path to the plugin file
     * @return bool
     */
    public static function is_plugin_active($plugin_path)
    {
        return in_array($plugin_path, (array) get_option('active_plugins', []), true) || self::is_plugin_active_for_network($plugin_path);
    }

    public static function generate_css($styles, $container_css)
    {
        // Generate CSS for the block ID
        $css = array_map(
            function ($selector, $styles) {
                $filtered_styles = implode("; ", array_map(
                    fn($key, $value) => (trim($value) !== "" && preg_match('/^\D+$/', $value) === 0) ? "$key: $value" : "",
                    array_keys($styles),
                    $styles
                ));

                // Return CSS if styles are valid
                return $filtered_styles ? "#$selector { $filtered_styles; }" : "";
            },
            array_keys($container_css),
            $container_css
        );

        // Filter out empty styles and combine
        return implode("\n", array_filter($css));
    }

    /**
     * Check if a plugin is active for the entire network
     *
     * @param string $plugin_path The path to the plugin file
     * @return bool
     */
    public static function is_plugin_active_for_network($plugin_path)
    {
        if (!is_multisite()) {
            return false;
        }

        $plugins = get_site_option('active_sitewide_plugins');
        if (isset($plugins[$plugin_path])) {
            return true;
        }

        return false;
    }

    /**
     * Generate Font family from Blocks Attributes
     *
     * @since 4.0.0
     * @access public
     */
    public static function get_fonts_family($attributes)
    {
        $font_family_keys = preg_grep('/^(\w+)FontFamily/i', array_keys($attributes), 0);
        $font_weight_keys = preg_grep('/^(\w+)FontWeight/i', array_keys($attributes), 0);

        $font_data = [];

        foreach ($font_family_keys as $key) {
            $prefix = preg_replace('/FontFamily$/', '', $key); // Extract the prefix (e.g., 'heading', 'body')

            // Find the corresponding font weight key
            $weight_key = $prefix . 'FontWeight';
            $font_family = $attributes[$key] ?? '';
            $font_weight = $attributes[$weight_key] ?? '';

            if (!empty($font_family) && !isset($font_data[$font_family])) {
                $font_data[$font_family] = $font_weight;
            }
        }

        return $font_data;
    }

    public static function option_exists($option_name, $site_wide = false)
    {
        global $wpdb;
        $table = $site_wide ? $wpdb->base_prefix . 'options' : $wpdb->prefix . 'options';
        $row = $wpdb->get_row($wpdb->prepare("SELECT option_value FROM $table WHERE option_name = %s LIMIT 1", $option_name));
        return is_object($row);
    }

    // Get font families from global settings
    public static function extract_font_families($data)
    {
        $fontFamilies = array();

        // Convert the array to a string representation
        $dataString = var_export($data, true);

        // Pattern to match fontFamily and fontWeight pairs
        $pattern = '/\'fontFamily\'\s*=>\s*\'([^\']*)\',(?:.*?)\'fontWeight\'\s*=>\s*\'([^\']*)\'/s';

        // Perform the regex matching
        preg_match_all($pattern, $dataString, $matches, PREG_SET_ORDER);

        // Process matches
        foreach ($matches as $match) {
            $fontFamily = $match[1];
            $fontWeight = $match[2];

            if (array_key_exists($fontFamily, $fontFamilies)) {
                $fontFamilies[$fontFamily][] = $fontWeight;
            } else {
                $fontFamilies[$fontFamily][] = $fontWeight;
            }
        }

        return $fontFamilies;
    }

    public static function get_css_files($dir)
    {
        $cssFiles = [];
        $files = scandir($dir);
        foreach ($files as $file) {
            if ($file == '.' || $file == '..')
                continue;

            $path = $dir . '/' . $file;
            if (is_dir($path)) {
                // Recursively scan subdirectories
                $cssFiles = array_merge($cssFiles, self::get_css_files($path));
            } else if (pathinfo($path, PATHINFO_EXTENSION) == 'css') {
                $cssFiles[] = $path;
            }
        }

        return $cssFiles;
    }

    public static function current_page_url()
    {
        return wp_get_referer();
    }

    /**
     * Determine whether the current referer URL points to the Site Editor template UI.
     */
    public static function check_url_has_fse_template()
    {
        // Parse the URL
        $url = self::current_page_url();
        $parsed_url = parse_url($url);

        // Check if path contains 'site-editor.php'
        $path = isset($parsed_url['path']) ? $parsed_url['path'] : '';
        $contains_site_editor = strpos($path, 'site-editor.php') !== false;

        // Check query string for wp_template, wp_block, or wp_template_part
        $query = isset($parsed_url['query']) ? $parsed_url['query'] : '';
        parse_str($query, $query_params);

        $contains_template_terms = false;
        if (isset($query_params['p'])) {
            $param_p = $query_params['p'];
            // Check if any of the terms exist in the 'p' parameter
            $contains_template_terms = (
                strpos($param_p, 'wp_block') !== false ||
                strpos($param_p, 'wp_template_part') !== false
            );
        }

        // Return true if both conditions are met
        return $contains_site_editor && $contains_template_terms;
    }

    public static function get_js_files($dir)
    {
        $jsFiles = [];
        $files = scandir($dir);
        foreach ($files as $file) {
            if ($file == '.' || $file == '..')
                continue;

            $path = $dir . '/' . $file;
            if (is_dir($path)) {
                $jsFiles = array_merge($jsFiles, self::get_js_files($path));
            } else if (pathinfo($path, PATHINFO_EXTENSION) == 'js') {
                $jsFiles[] = $path;
            }
        }

        return $jsFiles;
    }

    /**
     * Quickly check if a wp_template contains a specific block slug.
     */
    public static function get_blocks_inside_template($block_name)
    {
        global $wpdb;
        $template_post = get_posts([
            'post_type' => $wpdb->prefix . 'template',
            'numberposts' => 1,
        ]);

        if (!empty($template_post)) {
            $template_content = $template_post[0]->post_content;
            return strpos($template_content, $block_name) !== false;
        }
        return false;
    }

    /**
     * Helper to concatenate numeric values with CSS units.
     */
    public static function create_value_with_unit($value, $unit)
    {
        return $value . $unit;
    }

    /**
     * Detect whether a post ID is using a custom post type.
     */
    public static function is_custom_post_type($post_id = null)
    {
        // Get the post type of the given post or current post in the loop
        $post_type = get_post_type($post_id ?: get_the_ID());

        // List of WordPress default post types
        $default_post_types = array('post', 'page', 'attachment', 'revision', 'nav_menu_item', 'wp_template', 'wp_template_part');

        // Check if the post type is not in the default list
        return !in_array($post_type, $default_post_types);
    }

    /**
     * Extract reusable block contents referenced inside synced patterns.
     */
    public static function check_patterns_used($post_content)
    {
        $pattern_contents = []; // Store pattern contents
        $pattern_ids = [];

        // Extract synced pattern IDs
        preg_match_all('/<!--\s*wp:block\s*{"ref":\s*(\d+)\}\s*\/-->/', $post_content, $matches);

        if (!empty($matches[1])) {
            $pattern_ids = $matches[1]; // Array of synced pattern IDs
        }

        // Fetch pattern content for each ID
        if (!empty($pattern_ids)) {
            foreach ($pattern_ids as $pattern_id) {
                $pattern_post = get_post($pattern_id);
                if ($pattern_post && $pattern_post->post_type === 'wp_block') {
                    $pattern_contents[] = $pattern_post->post_content; // Collect pattern content
                }
            }
        }

        return $pattern_contents; // Return array of pattern contents
    }

    /**
     * Gather all published posts grouped by post type for quick selectors.
     */
    public static function get_all_posts()
    {
        // Get all public post types except the excluded ones
        $excluded_post_types = array('attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_global_styles');
        $args = array(
            'public' => true,
        );
        $post_types = get_post_types($args, 'objects');

        // Initialize the array to hold posts grouped by post type
        $posts_by_type = array();

        foreach ($post_types as $post_type) {
            // Skip excluded post types
            if (in_array($post_type->name, $excluded_post_types)) {
                continue;
            }

            // Get all published posts for this post type
            $posts = get_posts(array(
                'post_type' => $post_type->name,
                'post_status' => 'publish',
                'numberposts' => -1, // Get all posts
                'fields' => 'ids', // First get just IDs for better performance
            ));

            // If no posts found, skip
            if (empty($posts)) {
                continue;
            }

            // Now get ID and title for each post
            $posts_by_type[$post_type->name] = array_map(function ($post_id) {
                return array(
                    'ID' => $post_id,
                    'title' => get_the_title($post_id) === '' ? 'No title' : get_the_title($post_id),
                );
            }, $posts);
        }

        return $posts_by_type;
    }

    /**
     * Retrieve a flat list of published post IDs excluding WP internal types.
     */
    public static function get_all_post_ids()
    {
        global $wpdb;

        $query = "SELECT ID
          FROM {$wpdb->posts}
          WHERE post_status = 'publish'
          AND post_type NOT IN ('wp_font_family', 'acf-field', 'acf-field-group', 'wp_navigation', 'wp_global_styles', 'wp_font_face', 'attachment', 'mc4wp-form', 'acf-post-type', 'wp_template_part', 'acf-taxonomy', 'wphb_minify_group', 'wp_block')
          ORDER BY post_date DESC";

        $results = $wpdb->get_results($query);

        if (!empty($results)) {
            return array_map(function ($result) {
                return $result->ID;
            }, $results);
        }

        return [];
    }

    /**
     * Placeholder for dynamic content rendering (extends inside Pro).
     */
    public static function render_dynamic_content($block_data)
    {
    }

    /**
     * Query a specific post field directly from the database.
     */
    public static function get_single_field($post_id, $field)
    {
        global $wpdb;
        $query = $wpdb->prepare(
            "SELECT $field FROM $wpdb->posts WHERE ID = %d",
            $post_id
        );

        return $wpdb->get_var($query) ?: '';
    }

    /**
     * Convenience wrapper around wp_send_json_success.
     */
    public static function json_success($data)
    {
        wp_send_json_success($data, 200);
    }

    /**
     * Pull raw block markup for a template part area (header/footer).
     */
    public static function get_template_part_content($post, $part)
    {
        $block_template = _build_block_template_result_from_post($post);

        if (isset($block_template->area) && $block_template->area === $part) {
            return $block_template->content;
        }

        return false;
    }

    public static function get_completed_blocks()
    {
        // 1. Get the master list of all blocks (slug => data)
        $allBlocks = BlockList::get_instance()->get_blocks();

        // 2. Get the saved active blocks (array of slugs that are enabled)
        $activeBlocks = get_option('fb_active_blocks', []);

        // 3. Build the final array in the required shape
        $output = [];

        foreach ($allBlocks as $slug => $blockData) {

            // Default fields that are always present
            $item = [
                'slug' => $slug,
                'title' => $blockData['title'] ?? ucwords(str_replace('-', ' ', $slug)),
                'package' => $blockData['package'] ?? 'free',
                'category' => $blockData['category'] ?? 'content',
                'badge' => $blockData['badge'] ?? 'free',
                'status' => (!empty($activeBlocks[$slug])) ? '1' : '0',
                'icon' => $blockData['icon'] ?? "http://licenseschoole.test/wp-content/plugins/frontis-blocks/assets/icons/{$slug}.svg",
                'doc' => $blockData['doc'] ?? 'https://wpmessiah.com/',
                'demo' => $blockData['demo'] ?? 'https://wpmessiah.com/',
                'complete' => $blockData['complete'] ?? 'true',
                'child' => $blockData['child'] ?? 'false',
            ];

            // Optional: you can add extra safety checks here if some keys are missing
            $output[] = $item;
        }

        return $output;
    }

    public static function system_requirements()
    {
        return [
            [
                'label' => __('PHP Version', 'frontis-blocks'),
                'value' => phpversion(),
                'status' => version_compare(phpversion(), '7.4', '>=') ? 'good' : 'error',
            ],
            [
                'label' => __('WordPress Version', 'frontis-blocks'),
                'value' => get_bloginfo('version'),
                'status' => version_compare(get_bloginfo('version'), '5.8', '>=') ? 'good' : 'warning',
            ],
            [
                'label' => __('Memory Limit', 'frontis-blocks'),
                'value' => ini_get('memory_limit'),
                'status' => (intval(ini_get('memory_limit')) >= 256) ? 'good' : 'warning',
            ],
            [
                'label' => __('Max Execution Time', 'frontis-blocks'),
                'value' => ini_get('max_execution_time') . 's',
                'status' => (ini_get('max_execution_time') >= 30) ? 'good' : 'warning',
            ],
            [
                'label' => __('Frontis Blocks Version', 'frontis-blocks'),
                'value' => FB_VERSION,
                'status' => version_compare(FB_VERSION, '1.0.0', '>=') ? 'good' : 'warning',
            ],
            [
                'label' => __('Upload max filesize', 'frontis-blocks'),
                'value' => ini_get('upload_max_filesize'),
                'status' => (intval(ini_get('upload_max_filesize')) >= 256) ? 'good' : 'warning',
            ],
            [
                'label' => __('Post max size', 'frontis-blocks'),
                'value' => ini_get('post_max_size'),
                'status' => (intval(ini_get('post_max_size')) >= 256) ? 'good' : 'warning',
            ],
            [
                'label' => __('Max input vars', 'frontis-blocks'),
                'value' => ini_get('max_input_vars'),
                'status' => (intval(ini_get('max_input_vars')) >= 1000) ? 'good' : 'warning',
            ],
            [
                'label' => __('Max execution time', 'frontis-blocks'),
                'value' => ini_get('max_execution_time') . 's',
                'status' => (ini_get('max_execution_time') >= 30) ? 'good' : 'warning',
            ],
            [
                'label' => __('SSL Active', 'frontis-blocks'),
                'value' => is_ssl() ? __('Yes', 'frontis-blocks') : __('No', 'frontis-blocks'),
                'status' => is_ssl() ? 'good' : 'error',
            ],
            [
                'label' => __('WP Debug', 'frontis-blocks'),
                'value' => (defined('WP_DEBUG') && WP_DEBUG ? __('Enabled', 'frontis-blocks') : __('Disabled', 'frontis-blocks')),
                'status' => (defined('WP_DEBUG') && WP_DEBUG) ? 'warning' : 'good',
            ],
        ];
    }

    public static function get_blocks_info()
    {
        return get_option('fb_active_blocks');
    }

    public static function post_content_has_blocks_critical($post, $post_id)
    {
        $pattern = "/frontis-blocks/i";

        $post_content = $post->post_content;

        // Get synced pattern contents
        $pattern_contents = Helper::check_patterns_used($post_content);

        foreach ($pattern_contents as $pattern_content) {
            $post_content .= "\n" . $pattern_content; // Append each pattern content
        }

        // Pass modified post object to generate_page_assets
        $post->post_content = $post_content;

        update_post_meta($post_id, 'frontis_blocks_used', false);
        update_post_meta($post_id, 'generate_critical_css', false);

        if (preg_match_all($pattern, $post->post_content) > 0) {
            update_post_meta($post_id, 'frontis_blocks_used', true);
        }

        $critical_css_used = preg_match_all("/frontis-blocks\/critical-css/i", $post->post_content) > 0;

        if ($critical_css_used) {
            update_post_meta($post_id, 'generate_critical_css', $critical_css_used);
        }

        return $critical_css_used;
    }

    public static function insert_job($post_id, $post_name)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'fb_job_schedule';

        // check $post_id not exist then insert
        $check_post_id = $wpdb->get_var($wpdb->prepare("SELECT job_id FROM $table_name WHERE job_id = %d", $post_id));
        if (!$check_post_id) {
            // update_post_meta($post_id, 'fb_page_assets_generation', 'compiling');
            $wpdb->insert(
                $table_name,
                array(
                    'job_id' => $post_id,
                    'job_name' => $post_name,
                    'job_status' => 0,
                    'job_created_at' => current_time('mysql'),
                    'job_attempts' => 0
                ),
                array('%s', '%s', '%s', '%d', '%d')
            );
        }
    }

    public static function get_template_content($post_id)
    {
        global $wpdb;

        $post_name = Helper::is_custom_post_type($post_id) || get_post_type($post_id) === 'post' ? 'single' : get_post_type($post_id);
        $assigned_template = get_post_meta($post_id, '_wp_page_template', true);

        if ($assigned_template !== '') {
            if ($assigned_template !== 'default') {
                $post_name = $assigned_template;
            }
        }

        $query = $wpdb->prepare(
            "SELECT
                ID,
                post_type,
                post_content
            FROM
                {$wpdb->posts}
            WHERE
                post_type = 'wp_template'
                AND post_status = 'publish'
                AND post_name = %s
            ORDER BY
                post_modified DESC",
            $post_name
        );

        // Execute the query
        $template_contents = $wpdb->get_results($query);
        return $template_contents;
    }

    public static function get_template_id($post_id)
    {
        global $wpdb;

        $post_name = Helper::is_custom_post_type($post_id) || get_post_type($post_id) === 'post' ? 'single' : get_post_type($post_id);
        $assigned_template = get_post_meta($post_id, '_wp_page_template', true);

        if ($assigned_template !== '') {
            if ($assigned_template !== 'default') {
                $post_name = $assigned_template;
            }
        }

        $query = $wpdb->prepare(
            "SELECT
                ID
            FROM
                {$wpdb->posts}
            WHERE
                post_type = 'wp_template'
                AND post_status = 'publish'
                AND post_name = %s
            ORDER BY
                post_modified DESC",
            $post_name
        );

        // Execute the query
        $template_id = $wpdb->get_var($query);

        return $template_id;
    }

    /**
     * Check if Pro is activated
     *
     * @return bool
     */
    public static function isProActivated(): bool
    {

        if (class_exists('SureCart\Licensing\Client')) {
            $activation_key = get_option('frontisblockspro_license_options');

            if ($activation_key && count($activation_key) > 0 && isset($activation_key['sc_license_key']) && $activation_key['sc_license_key'] !== '') {
                return true;
            }
        } else {
            global $frontisblockspro_license;
            if ($frontisblockspro_license) {
                return $frontisblockspro_license->is_valid();
            }
        }

        return false;
    }

    /**
     * Resolve frontis settings
     *
     * @param int $post_id
     * @param int $template_id
     * @return array
     */
    public static function resolve_frontis_settings( $post_id = 0, $template_id = 0 ) {
        $post_id   = $post_id ?: get_the_ID();
        $post_type = get_post_type( $post_id );

        // Only keep header/footer
        $default_settings = [
            'disableHeader' => false,
            'disableFooter' => false,
            'disablePageTitle'   => false,
        ];

        // Global settings (filtered to only allowed keys)
        $global_settings = get_option( 'frontis_theme_options', [] );
        $global_settings = is_array( $global_settings ) ? $global_settings : [];
        $global_settings = array_intersect_key( $global_settings, $default_settings );

        $template_settings = [];
        $page_settings     = [];

        if ( $post_type === 'wp_template' ) {

            $template_settings = get_post_meta(
                $post_id,
                '_frontis_template_settings',
                true
            );

        } else {

            // Assigned template ID
            $template_id = $template_id ?: Helper::get_template_id( $post_id );

            if ( $template_id ) {
                $template_settings = get_post_meta(
                    $template_id,
                    '_frontis_template_settings',
                    true
                );
            }

            $page_settings = get_post_meta(
                $post_id,
                '_frontis_page_settings',
                true
            );
        }

        // Ensure arrays + filter unwanted keys
        $template_settings = is_array( $template_settings )
            ? array_intersect_key( $template_settings, $default_settings )
            : [];

        $page_settings = is_array( $page_settings )
            ? array_intersect_key( $page_settings, $default_settings )
            : [];

        // Priority: default → global → template → page
        return array_merge(
            $default_settings,
            $global_settings,
            $template_settings,
            $page_settings
        );
    }
}
