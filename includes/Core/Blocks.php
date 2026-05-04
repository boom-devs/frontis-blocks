<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Frontend\Blocks\LoopBuilder;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Forms\FluentForms;
use FrontisBlocks\Forms\ContactForms7;
use FrontisBlocks\Assets\AssetsGenerator;

defined('ABSPATH') || exit;

/**
 * Core orchestrator for registering blocks and hooking into the render cycle.
 */
class Blocks
{
	use Singleton;

	private $registered_blocks = [];
	private $gfonts = [];

	/**
	 * Wire up all required WordPress hooks when the class instantiates.
	 */
	public function __construct()
	{
		add_action('init', [$this, 'register_blocks']);
		add_filter('block_categories_all', [$this, 'register_block_categories'], 10, 1);
		add_filter('render_block', [$this, 'render_block'], 10, 3);
		add_action('save_post', [$this, 'get_blocks_on_save'], 10, 3);

		// Cache invalidation hooks - clear caches when content changes
		add_action('save_post', [Helper::class, 'clear_frontis_caches'], 20);
		add_action('created_term', [Helper::class, 'clear_frontis_caches']);
		add_action('edited_term', [Helper::class, 'clear_frontis_caches']);
		add_action('delete_term', [Helper::class, 'clear_frontis_caches']);
		add_action('profile_update', [Helper::class, 'clear_frontis_caches']);
		add_action('user_register', [Helper::class, 'clear_frontis_caches']);
	}

	/**
	 * Register each block directory, enqueue assets, and localize runtime data.
	 */
	public function register_blocks()
	{
		$blocks_list = BlockList::get_instance()->get_blocks();
		$active_blocks = get_option('fb_active_blocks');

		$default_container_width = $this->normalize_responsive_keys(get_option('fb_default_content_width'));
		$container_column_gap = $this->normalize_responsive_keys(get_option('fb_container_column_gap'));
		$container_row_gap = $this->normalize_responsive_keys(get_option('fb_container_row_gap'));
		$container_padding = $this->normalize_responsive_keys(get_option('fb_container_padding'));

		$container_widths = is_array($default_container_width) ? $default_container_width : json_decode($default_container_width, true);

		$desktop_breakpoint = isset($container_widths['Desktop']) ? intval($container_widths['Desktop']) : 1200;
		$tablet_breakpoint = isset($container_widths['Tablet']) ? intval($container_widths['Tablet']) : 1024;
		$mobile_breakpoint = isset($container_widths['Mobile']) ? intval($container_widths['Mobile']) : 767;

		// Convert back to JSON for localization if they were fetched as strings/arrays
		$container_column_gap = is_array($container_column_gap) ? json_encode($container_column_gap) : $container_column_gap;
		$container_row_gap = is_array($container_row_gap) ? json_encode($container_row_gap) : $container_row_gap;
		$container_padding = is_array($container_padding) ? json_encode($container_padding) : $container_padding;

		// Pre-load all expensive data ONCE before the loop (Performance optimization)
		$license_options = get_option('frontisblockspro_license_options');
		$sc_license_id = is_array($license_options) && !empty($license_options['sc_license_id']) ? (string) $license_options['sc_license_id'] : '';
		$sc_license_key = is_array($license_options) && !empty($license_options['sc_license_key']) ? (string) $license_options['sc_license_key'] : '';

		// Pre-load admin data once (these are now cached via transients)
		$admin_localize_array = [];
		if (is_admin()) {
			$admin_localize_array = [
				'admin_nonce' => wp_create_nonce('admin-nonce'),
				'fluent_plugin_active' => FluentForms::check_enable(),
				'fluent_form_lists' => json_encode(FluentForms::form_list()),
				'contact_form_active' => ContactForms7::check_enable(),
				'contact_form7_lists' => ContactForms7::form_list(),
				'contact_form7_html' => ContactForms7::wf7_form_html(),
				'post_types' => Helper::get_post_types(),
				'all_cats' => Helper::get_related_taxonomy(),
				'all_authors' => Helper::get_all_authors_with_posts(),
				'image_sizes' => Helper::get_image_sizes(),
				'desktop_breakpoint' => $desktop_breakpoint,
				'tablet_breakpoint' => $tablet_breakpoint,
				'mobile_breakpoint' => $mobile_breakpoint,
				'global_typography' => get_option('fb_globaltypo'),
				'sc_license_id' => $sc_license_id,
				'sc_license_key' => $sc_license_key,
			];
		}

		// Pre-load common data once
		$common_localize_array = [
			'site_url' => site_url(),
			'pluginUrl' => FB_PLUGIN_URL,
			'fluent_form_install_url' => admin_url('plugin-install.php?s=Fluent Forms&tab=search&type=term'),
			'contact_form7_install_url' => admin_url('plugin-install.php?s=Contact Form 7&tab=search&type=term'),
			'ajax_url' => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('fb_post_like_nonce'),
			'user_logged_in' => is_user_logged_in(),
			'prefix' => FB_PREFIX,
			'desktop_breakpoint' => $desktop_breakpoint,
			'tablet_breakpoint' => $tablet_breakpoint,
			'mobile_breakpoint' => $mobile_breakpoint,
			'container_column_gap' => $container_column_gap,
			'container_row_gap' => $container_row_gap,
			'container_padding' => $container_padding,
		];

		// Pre-load social share data once
		$social_share_data = [
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
		];

		// Merge all localize data once
		$localize_array = array_merge($admin_localize_array, $common_localize_array, $social_share_data);

		if (!empty($blocks_list)) {
			foreach ($blocks_list as $block) {
				$slug = $block['slug'];
				$complete = $block['complete'];
				$is_child_block = isset($block['child']) && $block['child'] === 'true';
				if (!$is_child_block && is_array($active_blocks) && !empty($active_blocks)) {
					if (array_key_exists($slug, $active_blocks) && !$active_blocks[$slug]) {
						continue;
					}
				}
				if ($complete !== 'true') {
					continue;
				}
				$plugin_dir = FB_PLUGIN_PATH;
				$blocks_dir = FB_BLOCKS_DIR . $slug;
				$plugin_slug = 'frontis-blocks';

				if (!file_exists($blocks_dir)) {
					continue;
				}

				// Enqueue block style in the editor
				register_block_type($blocks_dir);
				wp_set_script_translations("{$plugin_slug}-{$slug}-editor-script", $plugin_slug, $plugin_dir . 'languages');

				// Enqueue block editor script and pass localized data
				$editor_script_handle = "{$plugin_slug}-{$slug}-editor-script";
				$view_script_handle = "{$plugin_slug}-{$slug}-view-script";

				// Localize scripts (using pre-loaded data)
				wp_localize_script($editor_script_handle, 'FrontisBlocksData', $localize_array);
				wp_localize_script($view_script_handle, 'FrontisBlocksData', $localize_array);
				wp_localize_script('frontis-blocks-frontend', 'FrontisBlocksData', $localize_array);
			}
		}
	}

	/**
	 * Dynamically render a Contact Form 7 shortcode based on block attributes.
	 */
	public function render_contact_form_7_shortcode($attributes)
	{
		// Extract the ID and title from attributes, setting defaults if not provided
		$id = isset($attributes['id']) ? $attributes['id'] : '123'; // Default ID
		$title = isset($attributes['title']) ? $attributes['title'] : 'Contact Form'; // Default title

		// Prepare the Contact Form 7 shortcode with dynamic ID and title
		$shortcode = sprintf(
			'[contact-form-7 id="%s" title="%s"]',
			esc_attr($id),
			esc_attr($title)
		);

		// Dynamically render the Contact Form 7 form in the front-end
		return do_shortcode($shortcode);
	}

	/**
	 * Register a built block (from /build) that is not part of the dynamic list.
	 */
	private function register_block($slug, $data)
	{
		$block_dir = FB_PLUGIN_PATH . 'build/blocks/' . $slug;

		if (!file_exists($block_dir)) {
			return;
		}

		$block_json = $block_dir . '/block.json';
		if (!file_exists($block_json)) {
			return;
		}

		$registration = register_block_type($block_json);

		if ($registration) {
			$this->registered_blocks[$slug] = $data;

			// Set up translations
			wp_set_script_translations(
				'frontis-blocks-' . $slug . '-editor-script',
				'frontis-blocks',
				FB_PLUGIN_PATH . 'languages'
			);
		}
	}

	/**
	 * Add the "Frontis Blocks" category to the inserter palette.
	 */
	public function register_block_categories($categories)
	{
		return array_merge(
			array(
				array(
					'slug' => 'frontis-blocks',
					'title' => __('Frontis Blocks', 'frontis-blocks'),
				),
			),
			$categories
		);
	}

	/**
	 * Apply header/footer disable logic when rendering template part blocks.
	 */
	public function header_footer_settings($block_content, $block)
	{

		// Only process template-part blocks
		if (
			empty($block['blockName']) ||
			'core/template-part' !== $block['blockName']
		) {
			return $block_content;
		}

		// Current context post ID
		$post_id = get_queried_object_id();
		if (!$post_id) {
			$post_id = get_the_ID();
		}
		$post_id = absint($post_id);

		// Priority already handled here: default < global < template < page
		$settings = Helper::resolve_frontis_settings($post_id);

		// Detect template slug
		$template_slug = get_page_template_slug($post_id);
		$post = get_post($post_id);

		if (!$template_slug) {
			if ($post && $post->post_type === 'page') {
				$template_slug = 'page';
			} elseif ($post && $post->post_type === 'post') {
				$template_slug = 'single';
			}
		}

		$stylesheet = get_stylesheet();
		$template_id = $stylesheet . '//' . $template_slug;
		$template = get_block_template($template_id, 'wp_template');

		// Template parts
		// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query -- Required for theme template parts
		$template_part_posts = get_posts(
			array(
				'post_type' => 'wp_template_part',
				'post_status' => 'publish',
				// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query -- Required for theme template parts
				'tax_query' => array(
					array(
						'taxonomy' => 'wp_theme',
						'field' => 'name',
						'terms' => $stylesheet,
					),
				),
				'no_found_rows' => true,
			)
		);

		/**
		 * Correct Tag Detection
		 * =====================
		 * Use a single clean array and strictly match the slug.
		 */
		$tag = [];

		// Add the current block slug
		if (!empty($block['attrs']['slug'])) {
			$tag[] = $block['attrs']['slug'];
		}

		// Detect whether the template part is a header or footer
		if ($template_part_posts) {
			foreach ($template_part_posts as $template_part_post) {

				$block_template = _build_block_template_result_from_post($template_part_post);

				// Strict slug match
				if (
					!empty($block['attrs']['slug']) &&
					$block_template->slug === $block['attrs']['slug']
				) {
					if (isset($block_template->area)) {
						if ($block_template->area === 'header') {
							$tag[] = 'header';
						}
						if ($block_template->area === 'footer') {
							$tag[] = 'footer';
						}
					}
				}
			}
		}

		/**
		 * HANDLING DISABLE LOGIC
		 * ======================
		 * When the tag contains 'header', only the header will be disabled.
		 * When it contains 'footer', only the footer will be disabled.
		 */

		// Disable Header
		if (
			isset($settings['disableHeader']) &&
			$settings['disableHeader'] === true &&
			in_array('header', $tag)
		) {
			return '';
		}

		// Disable Footer
		if (
			isset($settings['disableFooter']) &&
			$settings['disableFooter'] === true &&
			in_array('footer', $tag)
		) {
			return '';
		}

		// Default return
		return $block_content;
	}

	/**
	 * Add custom class to block content.
	 *
	 * @param string $block_content Entire Block Content.
	 * @param string $class CSS class to add.
	 * @return string Modified block content with additional class.
	 */
	public function add_custom_class(string $block_content, string $class): string
	{
		// Add the custom class to the block's wrapper div.
		return preg_replace('/class="([^"]*)"/', 'class="$1 ' . esc_attr($class) . '"', $block_content, 1);
	}

	/**
	 * Central render filter to inject Frontis-specific behaviors.
	 */
	public function render_block($block_content, $parsed_block, $block_obj)
	{

		// 1) Get current post ID
		$post_id = get_queried_object_id();
		if (!$post_id) {
			$post_id = get_the_ID();
		}
		$post_id = absint($post_id);

		// 2) Get merged settings (global -> template -> page)
		$settings = Helper::resolve_frontis_settings($post_id);

		// 3) Handle Page Title disable for core/post-title block
		if (
			!empty($parsed_block['blockName'])
			&& $parsed_block['blockName'] === 'core/post-title'
			&& !empty($settings['disablePageTitle'])
		) {
			return ''; // Completely hide the title block
		}

		// echo get_the_ID();
		$block_content = $this->header_footer_settings($block_content, $parsed_block);

		if (Helper::is_frontis_block($block_content, $parsed_block)) {
			$block_content = $this->add_wrapper_class($block_content, $parsed_block);
			$block_content = $this->add_block_id($block_content, $parsed_block);
			$block_content = apply_filters('frontis_blocks_render_block', $block_content, $parsed_block, $block_obj);
		}
		return $block_content;
	}

	/**
	 * Regenerate assets when relevant blocks are detected on save.
	 */
	public function get_blocks_on_save($post_id, $post, $update)
	{
		// Skip autosaves and revisions
		if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
			return;
		}

		AssetsGenerator::generate_global_assets();

		$pattern = "/frontis-blocks/i";
		$has_frontis_block = preg_match_all($pattern, $post->post_content) > 0;

		if (!$has_frontis_block && !in_array(get_post_type($post_id), ['wp_template', 'wp_template_part'], true)) {
			return;
		}

		$critical_css_used = Helper::post_content_has_blocks_critical($post, $post_id);

		if ($update) {
			AssetsGenerator::get_instance()->generate_page_assets($post_id, $post, $critical_css_used);
		}
	}

	/**
	 * Ensure the rendered block markup has the expected wrapper class.
	 */
	private function add_wrapper_class($block_content, $parsed_block)
	{
		$block_name = str_replace('frontis-blocks/', '', $parsed_block['blockName']);
		$wrapper_class = 'wp-block-frontis-blocks-' . $block_name;

		$processor = new \WP_HTML_Tag_Processor($block_content);
		if ($processor->next_tag()) {
			$processor->add_class($wrapper_class);
			$block_content = $processor->get_updated_html();
		}

		return $block_content;
	}

	/**
	 * Apply the saved blockId attribute as an HTML id for styling/hooks.
	 */
	private function add_block_id($block_content, $parsed_block)
	{
		if (!isset($parsed_block['attrs']['blockId'])) {
			return $block_content;
		}

		$processor = new \WP_HTML_Tag_Processor($block_content);
		if ($processor->next_tag()) {
			$processor->set_attribute('id', $parsed_block['attrs']['blockId']);
			$block_content = $processor->get_updated_html();
		}

		return $block_content;
	}

	/**
	 * Return the list of block metadata registered during init.
	 */
	public function get_registered_blocks()
	{
		return $this->registered_blocks;
	}

	/**
	 * Normalize responsive keys to Uppercase (Desktop, Tablet, Mobile)
	 *
	 * @param mixed $value
	 * @return mixed
	 */
	private function normalize_responsive_keys($value)
	{
		if (empty($value)) {
			return $value;
		}

		$data = is_array($value) ? $value : json_decode($value, true);

		if (!is_array($data)) {
			return $value;
		}

		$normalized = [];
		foreach ($data as $key => $val) {
			$normalized_key = ucfirst(strtolower($key));
			$normalized[$normalized_key] = $val;
		}

		return is_array($value) ? $normalized : json_encode($normalized);
	}
}
