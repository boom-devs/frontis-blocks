<?php

namespace FrontisBlocks;

use FrontisBlocks\Admin\Admin;
use FrontisBlocks\Core\Blocks;
use FrontisBlocks\Utils\Enqueue;
use FrontisBlocks\Core\UsedBlocks;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Admin\Ajax\Settings;
use FrontisBlocks\Admin\Ajax\GlobalSettings;
use FrontisBlocks\Assets\GenerateFrontendCss;
use FrontisBlocks\Core\FontLoader;
use FrontisBlocks\Core\InitialActivatedBlocks;
use FrontisBlocks\Core\SupportSVG;
use FrontisBlocks\Admin\FullSiteImport;
final class Plugin
{
	/**
	 * Plugin version
	 *
	 * @var string
	 */
	const VERSION = '1.0.3';

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
		$this->set_locale();
		$this->init_classes();
		$this->init_hooks();

		add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
		add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_scripts']);
        register_activation_hook(FB_PLUGIN_FILE, [$this, 'set_activation_redirect']);
        add_action('admin_init', [$this, 'handle_activation_redirect'], 999);

	}

	public function enqueue_scripts()
	{

		if (has_block('frontis-blocks/advanced-video')) {
			wp_enqueue_script('frontis-advanced-video', FB_PLUGIN_URL . 'assets/js/react-player/react-player.standalone.min.js', [], FB_VERSION, true);;
		}
		if (has_block('frontis-blocks/slider')) {
			wp_register_style('frontis-swiper-style', FB_PLUGIN_URL . 'assets/css/swiper/swiper-bundle.min.css', [], FB_VERSION);
			wp_enqueue_script('frontis-swiper-script', FB_PLUGIN_URL . 'assets/js/swiper/swiper-bundle.min.js', [], FB_VERSION, true);
		}

		wp_enqueue_style('fb-responsive-control', FB_PLUGIN_URL . 'assets/css/fbf-common.css', [], FB_VERSION);
	}

	public function enqueue_editor_scripts()
	{
		wp_enqueue_script('frontis-responsive-css', FB_PLUGIN_URL . 'assets/js/responsive-css.js', array('jquery'), FB_VERSION, true);
		wp_enqueue_style('fb-responsive-control', FB_PLUGIN_URL . 'assets/css/fbe-common.css', [], FB_VERSION);
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
		// define('SCRIPT_DEBUG', true);
		define('FB_PLUGIN_BASENAME', plugin_basename(FB_PLUGIN_FILE));
		define('FB_UPGRADE_PRO_URL', 'https://wpmessiah.com/');
		define('FB_IS_PRO_ACTIVE', class_exists('FrontisBlocks\Pro\Plugin') ? true : false);
	}

	/**
	 * Set locale
	 */
	private function set_locale()
	{
		add_action('plugins_loaded', function () {
			load_plugin_textdomain(self::TEXT_DOMAIN, false, dirname(plugin_basename(FB_PLUGIN_FILE)) . '/languages');
		});
	}

	/**
	 * Initialize classes
	 */
	private function init_classes()
	{
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
	private function init_hooks()
	{
		add_action('plugins_loaded', [$this, 'init_plugin']);
	}

	/**
	 * Initialize plugin
	 */
	public function init_plugin()
	{
		// Additional plugin initialization if needed

		Blocks::get_instance();

		Admin::get_instance();

		Settings::get_instance()->register_ajax_events();

		InitialActivatedBlocks::blocks();

		GlobalSettings::get_instance()->register_global_settings_events();

		SupportSVG::get_instance();

		FullSiteImport::get_instance();

		// UsedBlocks::get_instance()->get_used_frontis_blocks();

	}

	/**
     * Set flag to trigger redirect on activation
     */
    public function set_activation_redirect() {
        add_option('frontis_blocks_do_activation_redirect', true);
    }

    /**
     * Handle redirect to settings page after activation
     */
    public function handle_activation_redirect() {
        if (
            get_option('frontis_blocks_do_activation_redirect', false) 
            && current_user_can('manage_options')
            && !isset($_GET['activate-multi'])
        ) {
            delete_option('frontis_blocks_do_activation_redirect');
            
            wp_safe_redirect(admin_url('admin.php?page=frontis-blocks'));
            exit;
        }
    }
}
