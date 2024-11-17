<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Forms\FluentForms;
use FrontisBlocks\Forms\ContactForms7;
use FrontisBlocks\Assets\GenerateFrontendCss;
use FrontisBlocks\Assets\EnqueueBlocksCss;

defined('ABSPATH') || exit;

class Blocks
{
    use Singleton;

    private $registered_blocks = [];

    public function __construct()
    {
        add_action('init', [$this, 'register_blocks']);
        add_filter('block_categories_all', [$this, 'register_block_categories'], 10, 1);
        add_filter('render_block', [$this, 'render_block'], 10, 3);
        add_action( 'enqueue_block_assets', [$this, 'combined_frontis_blocks_assets'] );
    }

    public function register_blocks()
    {
        global $pagenow;

        $is_editor = $pagenow === 'post.php' || $pagenow === 'post-new.php' || $pagenow === 'site-editor.php' || $pagenow === 'widgets.php';

        $args = [
            'handle' => 'frontis-blocks-editor-global',
            'src'    => FB_PLUGIN_URL . 'build/frontis/global.css',
            'deps'   => [],
            'ver'    => FB_VERSION,
            'media'  => 'all',
        ];

        $blocks_list = BlockList::get_instance()->get_blocks();
        $active_blocks = get_option('fb_active_blocks');

        if (!empty($blocks_list)) {
            foreach ($blocks_list as $block) {
                $slug = $block['slug'];
                if(is_array($active_blocks) && !empty($active_blocks)) {
				 	if(array_key_exists($slug, $active_blocks) && !$active_blocks[$slug]) {
						continue;
					}
                }

                $package = $block['package'];
                $plugin_dir = FB_PLUGIN_PATH;
                $blocks_dir = FB_BLOCKS_DIR . $slug;
                $plugin_slug = 'frontis-blocks';

                if (!file_exists($blocks_dir)) {
                    // error_log($blocks_dir);
                    continue;
                }

                $localize_array = [];

                // Register the block
                $rb = register_block_type($blocks_dir);

                // Register translations
                wp_set_script_translations("{$plugin_slug}-{$slug}-editor-script", $plugin_slug, $plugin_dir . 'languages');

                // Enqueue block style in the editor
                if ($is_editor) {
                    wp_enqueue_block_style("{$plugin_slug}/{$slug}", $args);
                }

                // Enqueue block editor script and pass localized data
                $editor_script_handle = "{$plugin_slug}-{$slug}-editor-script";
                wp_enqueue_script($editor_script_handle, FB_PLUGIN_URL . "build/blocks/{$slug}/editor.js", ['wp-blocks', 'wp-element', 'wp-editor'], FB_VERSION, true);

				if ( is_admin() ) {

					$admin_localize_array = [
						'admin_nonce'         => wp_create_nonce( 'admin-nonce' ),
						'fluent_plugin_active' => FluentForms::check_enable(),
						'fluent_form_lists'   => json_encode( FluentForms::form_list() ),
						'contact_form_active' => ContactForms7::check_enable(),
						'contact_form7_lists'  => ContactForms7::form_list(),
						'contact_form7_html'  => ContactForms7::wf7_form_html(),
                        'post_types' => Helper::get_post_types(),
                        'all_cats' => Helper::get_related_taxonomy()
					];

					$localize_array = array_merge( $localize_array, $admin_localize_array );
				}

                $localize_array['pluginUrl'] = FB_PLUGIN_URL;
                $localize_array['fluent_form_install_url'] = admin_url('plugin-install.php?s=Fluent Forms&tab=search&type=term');
                wp_localize_script($editor_script_handle, 'FrontisBlocksData', $localize_array);
            }
        }
    }

    public function render_contact_form_7_shortcode($attributes) {
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

    public function combined_frontis_blocks_assets() {
        EnqueueBlocksCss::combined_css_files();
    }

    public function register_block_categories( $categories ) {
		return array_merge(
			array(
				array(
					'slug'  => 'frontis-blocks',
					'title' => __( 'Frontis Blocks', 'frontis-blocks' ),
				),
			),
			$categories
		);
	}

    public function render_block($block_content, $parsed_block, $block_obj)
    {
        if (Helper::is_frontis_block($block_content, $parsed_block)) {
            $block_content = $this->add_wrapper_class($block_content, $parsed_block);
            $block_content = $this->add_block_id($block_content, $parsed_block);
            $block_content = apply_filters('frontis_blocks_render_block', $block_content, $parsed_block, $block_obj);
        }

        GenerateFrontendCss::get_instance()->generate_css($block_content, $parsed_block);

        return $block_content;
    }

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

    public function get_registered_blocks()
    {
        return $this->registered_blocks;
    }
}
