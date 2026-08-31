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
        $endpoint = 'https://wpmessiah.com/api/updates/' . FB_SLUG;

        $adapter = new JsonAdapter(
            $endpoint,
            FB_VERSION,
            FB_PLUGIN_FILE,
            FB_SLUG
        );

        $manager = new UpdaterManager($adapter, FB_PLUGIN_FILE);
        $manager->register();
    }
}
