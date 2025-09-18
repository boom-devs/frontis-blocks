<?php

namespace FrontisBlocks\Utils;

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
        return in_array($pagenow, ['post.php', 'post-new.php', 'site-editor.php', 'widgets.php']);
    }

    public static function get_post_id_by_slug($post_name, $post_type = 'post') {
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
    public static function get_related_taxonomy(){


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

    public static function get_all_authors_with_posts()
    {
        $args = array(
            'has_published_posts' => true,
            'fields' => 'all_with_meta',
        );
        return get_users($args);
    }

    public static function get_page_name($post_id)
    {
        $frontis_used = get_post_meta(get_the_ID(), 'frontis_blocks_used', true);
        $page_name = get_post_field( 'post_name', $post_id );
        
        if($frontis_used) {
            return $page_name;
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
	public static function determine_template_post_type( $post_id ) {

		// Check if post id is passed.
		if ( ! empty( $post_id ) ) {
			$template_slug = get_page_template_slug( $post_id );
			if ( ! empty( $template_slug ) ) {
				return $template_slug;
			}
		}

		$conditional_to_post_type = array(
			'is_attachment' => 'attachment',
			'is_embed'      => 'embed',
			'is_front_page' => 'home',
			'is_home'       => 'home',
			'is_search'     => 'search',
			'is_paged'      => 'paged',
		); // Conditional tags to post type.

		$what_post_type     = '404'; // Default to '404' if no condition matches.
		$object             = get_queried_object();
		$template_types     = get_block_templates();
		$template_type_slug = array_column( $template_types, 'slug' );

        // var_dump(is_singular());

		// Determines whether the query is for an existing single page.
		$is_regular_page        = is_page() && ! is_front_page();
		$is_front_page_template = is_front_page() && get_front_page_template();
		$is_static_front_page   = 'page' === get_option( 'show_on_front' ) && get_option( 'page_on_front' ) && is_front_page() && ! is_home() && ! $is_front_page_template;

		if ( $is_regular_page || $is_static_front_page ) { // Run only for page and any page selected as home page from settings > reading > static page.
			return ( $object instanceof WP_Post && in_array( 'page-' . $object->post_name, $template_type_slug ) ) ? 'page-' . $object->post_name : 'page';
		} elseif ( $is_front_page_template ) { // Run only when is_home and is_front_page() and get_front_page_template() is true. i.e front-page template.
			return 'front-page';
		} elseif ( is_archive() ) { // Applies to archive pages.
			// If none of the above condition matches, return archive template.
			return ( $object instanceof WP_Post || $object instanceof WP_Post_Type || $object instanceof WP_Term || $object instanceof WP_User ) ? self::get_archive_page_template( $object, $template_type_slug ) : 'archive';
		} else {
			if (! empty( $object->post_type ) ) {
				if ( is_singular() ) { // Applies to single post of any post type ( attachment, page, custom post types).
					$name_decoded = urldecode( $object->post_name );
					if ( in_array( 'single-' . $object->post_type . '-' . $name_decoded, $template_type_slug ) ) {
						return 'single-' . $object->post_type . '-' . $name_decoded;
					} elseif ( in_array( 'single-' . $object->post_type, $template_type_slug ) ) {
						return 'single-' . $object->post_type;
					} else { // If none of the above condition matches, return single template.
						return 'single';
					}
				}
			}
		}

		foreach ( $conditional_to_post_type as $conditional => $post_type ) {
			if ( $conditional() ) {
				$what_post_type = $post_type;
				break;
			}
		}

		return $what_post_type;
	}

	public function get_archive_page_template( $archive_object, $template_type_slug ) {
		if ( is_author() && $archive_object instanceof WP_User ) { // For author archive or more specific author template.
			$author_slug = 'author-' . $archive_object->user_nicename;
			return in_array( $author_slug, $template_type_slug ) ? $author_slug : ( in_array( 'author', $template_type_slug ) ? 'author' : 'archive' );
		} elseif ( $archive_object instanceof WP_Term ) {
			if ( is_category() ) { // For category archive or more specific category template.
				$category_slug = 'category-' . $archive_object->slug;
				return in_array( $category_slug, $template_type_slug ) ? $category_slug : ( in_array( 'category', $template_type_slug ) ? 'category' : 'archive' );
			} elseif ( is_tag() ) { // For tag archive or more specific tag template.
				$tag_slug = 'tag-' . $archive_object->slug;
				return in_array( $tag_slug, $template_type_slug ) ? $tag_slug : ( in_array( 'tag', $template_type_slug ) ? 'tag' : 'archive' );
			} elseif ( is_tax() ) {
				$tax_slug          = 'taxonomy-' . $archive_object->taxonomy;
				return in_array( $tax_slug, $template_type_slug ) ? $tax_slug : 'archive';
			}
		} elseif ( is_date() && in_array( 'date', $template_type_slug ) ) { // For date archive template.
			return 'date';
		} elseif ( $archive_object instanceof WP_Post_Type && is_post_type_archive() ) { // For custom post type archive or more specific custom post type archive template.
			$post_type_archive_slug = 'archive-' . $archive_object->name;
			return in_array( $post_type_archive_slug, $template_type_slug ) ? $post_type_archive_slug : ( in_array( 'archive', $template_type_slug ) ? 'archive' : 'archive-' . $archive_object->name );
		}
		return 'archive';
	}

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

    public static function load_google_font($fonts)
    {
        if (is_array($fonts) && !empty($fonts)) {

            $font_url = "https://fonts.googleapis.com/css?family=";
            $font_url .= implode("|", array_map(function($font) {
                return str_replace(' ', '+', $font) . ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
            }, $fonts));

//            echo $font_url;
            // $gfonts = '';
            // $gfonts_attr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';

            // foreach ($fonts as $font) {
            //     $gfonts .= str_replace(' ', '+', trim($font)) . $gfonts_attr . '|';
            // }

            // $gfonts = rtrim($gfonts, '|');

            // if (!empty($gfonts)) {
            //     $query_args = [
            //         'family' => $gfonts,
            //         'display' => 'swap'
            //     ];

            //     wp_enqueue_style(
            //         'frontis-blocks-preconnect',
            //         'https://fonts.googleapis.com',
            //         [],
            //         null
            //     );

            //     wp_style_add_data('frontis-blocks-preconnect', 'crossorigin', 'anonymous');

            //     wp_register_style(
            //         'frontis-blocks-fonts',
            //         add_query_arg($query_args, 'https://fonts.googleapis.com/css2'),
            //         [],
            //         FB_VERSION
            //     );

            //     wp_enqueue_style('frontis-blocks-fonts');
            // }

            // Reset.
            $gfonts = '';
        }
    }

        /**
     * Generate Font family from Blocks Attributes
     *
     * @since 4.0.0
     * @access public
     */
    public static function get_fonts_family( $attributes )
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

	public static function option_exists($option_name, $site_wide = false) {
		global $wpdb;
		$table = $site_wide ? $wpdb->base_prefix . 'options' : $wpdb->prefix . 'options';
		$row = $wpdb->get_row($wpdb->prepare("SELECT option_value FROM $table WHERE option_name = %s LIMIT 1", $option_name));
		return is_object($row);
	}

    // Get font families from global settings
    public static function extract_font_families($data) {
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

            if(array_key_exists($fontFamily, $fontFamilies)) {
                $fontFamilies[$fontFamily][] = $fontWeight;
            } else {
                $fontFamilies[$fontFamily][] = $fontWeight;
            }
        }

        return $fontFamilies;
    }

    public static function get_css_files($dir) {
		$cssFiles = [];
		$files = scandir($dir);
		foreach ($files as $file) {
			if ($file == '.' || $file == '..') continue;

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

    public static function current_page_url() {
        return wp_get_referer();
    }

    public static function check_url_has_fse_template() {
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

    public static function get_js_files($dir) {
		$jsFiles = [];
		$files = scandir($dir);
		foreach ($files as $file) {
			if ($file == '.' || $file == '..') continue;

			$path = $dir . '/' . $file;
			if (is_dir($path)) {
				$jsFiles = array_merge($jsFiles, self::get_js_files($path));
			} else if (pathinfo($path, PATHINFO_EXTENSION) == 'js') {
				$jsFiles[] = $path;
			}
		}

		return $jsFiles;
	}

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

    public static function create_value_with_unit($value, $unit) {
        return $value . $unit;
    }

	public static function is_custom_post_type( $post_id = null ) {
		// Get the post type of the given post or current post in the loop
		$post_type = get_post_type( $post_id ?: get_the_ID() );

		// List of WordPress default post types
		$default_post_types = array( 'post', 'page', 'attachment', 'revision', 'nav_menu_item', 'wp_template', 'wp_template_part' );

		// Check if the post type is not in the default list
		return ! in_array( $post_type, $default_post_types );
	}

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

	public static function get_all_posts() {
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
			$posts_by_type[$post_type->name] = array_map(function($post_id) {
				return array(
					'ID' => $post_id,
					'title' => get_the_title($post_id) === '' ? 'No title' : get_the_title($post_id),
				);
			}, $posts);
		}

		return $posts_by_type;
	}

    public static function get_all_post_ids() {
        global $wpdb;

        $query = "SELECT ID
          FROM {$wpdb->posts}
          WHERE post_status = 'publish'
          AND post_type NOT IN ('wp_font_family', 'acf-field', 'acf-field-group', 'wp_navigation', 'wp_global_styles', 'wp_font_face', 'attachment', 'mc4wp-form', 'acf-post-type', 'wp_template_part', 'acf-taxonomy', 'wphb_minify_group', 'wp_block')
          ORDER BY post_date DESC";

		$results = $wpdb->get_results($query);

        if(!empty($results)) {
            return array_map(function($result) {
                return $result->ID;
            }, $results);
        }
        
        return [];
    }

	// Render dynamic content for block
	public static function render_dynamic_content($block_data) {
	}

	public static function get_single_field($post_id, $field) {
		global $wpdb;
		$query = $wpdb->prepare(
			"SELECT $field FROM $wpdb->posts WHERE ID = %d",
			$post_id
		);

		return $wpdb->get_var($query) ?: '';
	}

	public static function json_success($data) {
		wp_send_json_success($data, 200 );
	}

    public static function get_template_part_content($post, $part) {
        $block_template = _build_block_template_result_from_post( $post );

        if ( isset( $block_template->area ) && $block_template->area === $part ) {
            return $block_template->content;
        }

        return false;
    }

    public static function post_content_has_blocks_critical($post, $post_id) {
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

		if(preg_match_all($pattern, $post->post_content) > 0) {
			update_post_meta($post_id, 'frontis_blocks_used', true);
		}

		$critical_css_used = preg_match_all("/frontis-blocks\/critical-css/i", $post->post_content) > 0;

		if($critical_css_used) {
			update_post_meta($post_id, 'generate_critical_css', $critical_css_used);
		}

        return $critical_css_used;
    }

    public static function insert_job($post_id, $post_name) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'fb_job_schedule';
        
        // check $post_id not exist then insert
        $check_post_id = $wpdb->get_var($wpdb->prepare("SELECT job_id FROM $table_name WHERE job_id = %d", $post_id));
        if(!$check_post_id) {
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
}
