<?php

namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;

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

        if (!empty($blocks_list)) {
            foreach ($blocks_list as $block) {
                $slug = $block['slug'];
                $package = $block['package'];

                $plugin_dir = FB_PLUGIN_PATH;
                $blocks_dir = FB_BLOCKS_DIR . $slug;
                $plugin_slug = 'frontis-blocks';

                // if ($package === 'pro' && defined('FB_PRO_PLUGIN_PATH')) {
                //     $plugin_dir = FB_PRO_PLUGIN_PATH;
                //     $blocks_dir = FB_PRO_PLUGIN_PATH . 'build/blocks/' . $slug;
                //     $plugin_slug = 'frontis-blocks-pro';
                // }

                if (!file_exists($blocks_dir)) {
                    error_log($blocks_dir);
                    continue;
                }

                $rb = register_block_type($blocks_dir);
                error_log(print_r($rb, true));

                wp_set_script_translations("{$plugin_slug}-{$slug}-editor-script", $plugin_slug, $plugin_dir . 'languages');

                if ($is_editor) {
                    wp_enqueue_block_style("{$plugin_slug}/{$slug}", $args);
                }
            }
        }
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