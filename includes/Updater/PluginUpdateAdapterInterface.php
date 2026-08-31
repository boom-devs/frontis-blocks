<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Interface PluginUpdateAdapterInterface
 *
 * Contract for update source adapters.
 *
 * @package FrontisBlocks\Updater
 */
interface PluginUpdateAdapterInterface
{
    /**
     * Checks if a new release/version is available.
     *
     * @return object|null Normalized update info object or null
     */
    public function getUpdateInfo(): ?object;

    /**
     * Retrieves plugin information for the "View details" popup modal.
     *
     * @param string $action Action name
     * @param object $args Query arguments
     * @return object|false
     */
    public function getPluginDetails(string $action, object $args);
}
