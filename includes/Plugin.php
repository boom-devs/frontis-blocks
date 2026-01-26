<?php

namespace FrontisBlocks;

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Admin\Admin;
use FrontisBlocks\Admin\Ajax\BlocksAjax;
use FrontisBlocks\Core\Blocks;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Admin\Ajax\Settings;
use FrontisBlocks\Admin\Ajax\GlobalSettings;
use FrontisBlocks\Admin\Ajax\TemplateLibrary;
use FrontisBlocks\Core\InitialActivatedBlocks;
use FrontisBlocks\Core\SupportSVG;
use FrontisBlocks\Core\SupportRive;
use FrontisBlocks\Core\Enqueues;
use FrontisBlocks\RestApi\RestApi;
use FrontisBlocks\BackgroundProcess\AssetsGenerationProcess;
use FrontisBlocks\Assets\AssetsGenerationStatus;

final class Plugin
{
	/**
	 * Plugin version
	 *
	 * @var string
	 */
	const VERSION = '1.1.7';

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
	private function __construct()
	{
		$this->define_constants();
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
	private function define_constants()
	{
		define('FB_VERSION', self::VERSION);
		define('FB_SLUG', self::SLUG);
		define('FB_PREFIX', self::PREFIX);
		define('FB_TEXT_DOMAIN', self::TEXT_DOMAIN);
		define('FB_PLUGIN_PATH', plugin_dir_path(FB_PLUGIN_FILE));
		define('FB_BLOCKS_DIR', FB_PLUGIN_PATH . 'build/blocks/');
		define('FB_PLUGIN_URL', plugin_dir_url(FB_PLUGIN_FILE));
		define('FB_PLUGIN_BASENAME', plugin_basename(FB_PLUGIN_FILE));
		define('FB_UPGRADE_PRO_URL', 'https://frontiswp.com/frontis-blocks/pricing');
		define('FB_IS_PRO_ACTIVE', class_exists('FrontisBlocks\Pro\Plugin') ? true : false);
	}

	/**
	 * Initialize classes
	 */
	private function init_classes()
	{
		//load blocks
		self::$blocks = BlockList::get_instance()->get_blocks();
	}

	/**
	 * Initialize hooks
	 */
	private function init_hooks()
	{
		add_action('plugins_loaded', [$this, 'init_plugin']);
	}

	/**
	 * Initialize plugin
	 */
	public function init_plugin()
	{
		Blocks::get_instance();
		Enqueues::get_instance();
		Admin::get_instance();
		Settings::get_instance()->register_ajax_events();
		InitialActivatedBlocks::blocks();
		GlobalSettings::get_instance()->register_global_settings_events();
		BlocksAjax::get_instance()->register_blocks_ajax_events();
		TemplateLibrary::get_instance()->register_ajax_events();
		SupportSVG::get_instance();
		SupportRive::get_instance();
		RestApi::get_instance();
		AssetsGenerationStatus::get_instance();
		AssetsGenerationProcess::get_instance();
	}
}
