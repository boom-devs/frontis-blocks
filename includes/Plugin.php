<?php

namespace FrontisBlocks;

use FrontisBlocks\Admin\Admin;
use FrontisBlocks\Core\Blocks;
use FrontisBlocks\Utils\Enqueue;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Admin\Ajax\Settings;
use FrontisBlocks\Admin\Ajax\GlobalSettings;
use FrontisBlocks\Assets\GenerateFrontendCss;
use FrontisBlocks\Core\InitialActivatedBlocks;

final class Plugin {
    /**
     * Plugin version
     *
     * @var string
     */
    const VERSION = '1.0.0';

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

		add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

	public function enqueue_scripts(){
		wp_enqueue_script('frontis-countdown', FB_PLUGIN_URL . 'assets/public/countdown.js',  array('jquery'), '1.0.0', true);
		wp_enqueue_script('frontis-counter', FB_PLUGIN_URL . 'assets/public/counter.js',  array('jquery'), '1.0.0', true);
	}


    /**
     * Get plugin instance
     *
     * @return Plugin
     */
    public static function get_instance() {
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
        define('FB_UPGRADE_PRO_URL', 'https://frontis.co/frontis-blocks-pro');
        define('FB_IS_PRO_ACTIVE', class_exists( 'FrontisBlocks\Pro\Plugin' ) ? true : false );
    }

    /**
     * Set locale
     */
    private function set_locale() {
        add_action('plugins_loaded', function() {
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
        // Additional plugin initialization if needed

        Blocks::get_instance();

        Admin::get_instance();

        Settings::get_instance()->register_ajax_events();

        InitialActivatedBlocks::blocks();

        GlobalSettings::get_instance()->register_global_settings_events();
        
    }
}
