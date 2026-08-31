<?php
namespace FrontisBlocks\Updater;

use FrontisBlocks\Traits\Singleton;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Class Updater
 *
 * Facade / Initializer for Frontis Blocks self-hosted updater.
 * Follows the existing FrontisBlocks Singleton architecture.
 *
 * @package FrontisBlocks\Updater
 */
class Updater
{
    use Singleton;

    /**
     * Updater constructor.
     */
    public function __construct()
    {
        $this->init();
    }

    /**
     * Initializes and registers the plugin updater.
     */
    private function init(): void
    {
        $slug = \FrontisBlocks\Plugin::SLUG;
        $version = \FrontisBlocks\Plugin::VERSION;
        $endpoint = 'https://wpmessiah.com/api/updates/' . $slug;

        $adapter = new JsonAdapter(
            $endpoint,
            $version,
            FB_PLUGIN_FILE,
            $slug
        );

        $manager = new UpdaterManager($adapter, FB_PLUGIN_FILE);
        $manager->register();
    }
}
