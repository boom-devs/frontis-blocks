<?php
namespace FrontisBlocks\Updater;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Interface AdapterInterface
 *
 * Contract for update source adapters.
 *
 * @package FrontisBlocks\Updater
 */
interface AdapterInterface
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

    /**
     * Clears all cached transient data related to this update adapter.
     *
     * @return void
     */
    public function clearCache(): void;
}
