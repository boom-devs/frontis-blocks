<?php

namespace FrontisBlocks;

use FrontisBlocks\Admin\Admin;
use FrontisBlocks\Admin\Ajax\BlocksAjax;
use FrontisBlocks\Core\Blocks;
use FrontisBlocks\Utils\Enqueue;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Admin\Ajax\Settings;
use FrontisBlocks\Admin\Ajax\GlobalSettings;
use FrontisBlocks\Core\FontLoader;
use FrontisBlocks\Core\InitialActivatedBlocks;
use FrontisBlocks\Core\SupportSVG;
use FrontisBlocks\Core\Enqueues;
use FrontisBlocks\RestApi\RestApi;

final class Plugin {
	/**
	 * Plugin version
	 *
	 * @var string
	 */
	const VERSION = '1.0.9';

	/**
	 * Plugin slug
	 *
	 * @var string
	 */
	const SLUG = 'frontis-blocks';

	/**
	 * Plugin prefix
	 *
	 * @var string
	 */
	const PREFIX = 'fb_';

	/**
	 * Plugin text domain
	 *
	 * @var string
	 */
	const TEXT_DOMAIN = 'frontis-blocks';

	/**
	 * Admin instance
	 *
	 * @var Admin
	 */
	public $admin;

	/**
	 * Asset instance
	 *
	 * @var Asset
	 */
	public $asset;

	/**
	 * Plugin settings
	 *
	 * @var array|null
	 */
	public static $settings = null;

	/**
	 * Loaded blocks
	 *
	 * @var array
	 */
	public static $blocks = [];

	/**
	 * Plugin instance
	 *
	 * @var Plugin|null
	 */
	private static $instance = null;

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->define_constants();
		$this->set_locale();
		$this->init_classes();
		$this->init_hooks();
	}

	/**
	 * Get plugin instance
	 *
	 * @return Plugin
	 */
	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Define constants
	 */
	private function define_constants() {
		define('FB_VERSION', self::VERSION);
		define('FB_SLUG', self::SLUG);
		define('FB_PREFIX', self::PREFIX);
		define('FB_TEXT_DOMAIN', self::TEXT_DOMAIN);
		define('FB_PLUGIN_PATH', plugin_dir_path(FB_PLUGIN_FILE));
		define('FB_BLOCKS_DIR', FB_PLUGIN_PATH . 'build/blocks/');
		define('FB_PLUGIN_URL', plugin_dir_url(FB_PLUGIN_FILE));
		define('FB_PLUGIN_BASENAME', plugin_basename(FB_PLUGIN_FILE));
		define('FB_UPGRADE_PRO_URL', 'https://wpmessiah.com/');
		define('FB_IS_PRO_ACTIVE', class_exists('FrontisBlocks\Pro\Plugin') ? true : false);
	}

	/**
	 * Set locale
	 */
	private function set_locale() {
		add_action('plugins_loaded', function () {
			load_plugin_textdomain(self::TEXT_DOMAIN, false, dirname(plugin_basename(FB_PLUGIN_FILE)) . '/languages');
		});
	}

	/**
	 * Initialize classes
	 */
	private function init_classes() {
		$this->asset = Enqueue::get_instance(FB_PLUGIN_URL, FB_PLUGIN_PATH, self::VERSION);

		//load blocks
		self::$blocks = BlockList::get_instance()->get_blocks();

		//load blocks
		self::$blocks = BlockList::get_instance()->get_blocks();

		// Load google font
		FontLoader::get_instance();
	}

	/**
	 * Initialize hooks
	 */
	private function init_hooks() {
		add_action('plugins_loaded', [$this, 'init_plugin']);
	}

	/**
	 * Initialize plugin
	 */
	public function init_plugin() {
		Blocks::get_instance();
		Enqueues::get_instance();
		Admin::get_instance();
		Settings::get_instance()->register_ajax_events();
		InitialActivatedBlocks::blocks();
		GlobalSettings::get_instance()->register_global_settings_events();
		BlocksAjax::get_instance()->register_blocks_ajax_events();
		SupportSVG::get_instance();
		RestApi::get_instance();
	}
}


//register_block_type( 'frontis-blocks/post-meta', [
//    'render_callback' => function( $attributes ) {
//        $post_id = get_the_ID();
//        $items_html = '';
//
//        if ( ! empty( $attributes['postMetatems'] ) ) {
//            foreach ( $attributes['postMetatems'] as $item ) {
//                $meta_output = '';
//
//                if ( $item['metaType'] === 'author' ) {
//                    $meta_output = get_the_author_meta( 'display_name', get_post_field( 'post_author', $post_id ) );
//                } elseif ( $item['metaType'] === 'date' ) {
//                    $meta_output = get_the_date( '', $post_id );
//                } elseif ( $item['metaType'] === 'comments' ) {
//                    $meta_output = get_comments_number( $post_id ) . ' ' . __( 'Comments', 'frontis-blocks' );
//                }
//
//                $items_html .= sprintf(
//                    '<li class="fb-post-meta-item"><span class="fb-post-meta-value">%s</span></li>',
//                    esc_html( $meta_output )
//                );
//            }
//        }
//
//        return sprintf(
//            '<div class="fb-post-meta-wrapper"><ul class="fb-post-meta">%s</ul></div>',
//            $items_html
//        );
//    }
//] );
