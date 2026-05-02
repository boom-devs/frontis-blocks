<?php

namespace FrontisBlocks\Core;

if (!defined('ABSPATH')) {
    exit;
}

final class DemoContentImporter
{
    private static $instance = null;

    private const DEFAULT_SOURCE_URL = 'https://demo.frontiswp.com/templates/auditus/wp-json/gb/v1/content/home';

    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct()
    {
        add_action('init', [$this, 'maybe_import_home_content']);
    }

    public function maybe_import_home_content()
    {
        if (!isset($_GET['import'])) {
            return;
        }

        $import_flag = sanitize_text_field(wp_unslash($_GET['import']));
        if ('true' !== strtolower($import_flag)) {
            return;
        }

        if (!is_user_logged_in() || !current_user_can('manage_options')) {
            wp_die('Only administrators can run this import.');
        }

        $source_url = self::DEFAULT_SOURCE_URL;
        if (!empty($_GET['source'])) {
            $custom = esc_url_raw(wp_unslash($_GET['source']));
            if ($custom) $source_url = $custom;
        }

        $response = wp_remote_get($source_url, [
            'timeout' => 90,
            'headers' => ['Accept' => 'application/json'],
        ]);

        if (is_wp_error($response)) {
            wp_die('Import failed: ' . $response->get_error_message());
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body        = wp_remote_retrieve_body($response);

        if (200 !== $status_code || empty($body)) {
            wp_die('Import failed: Empty or non-200 API response (HTTP ' . $status_code . ').');
        }

        /*
         * The API returns standard single-encoded JSON.
         * json_decode() correctly converts \u003e → > and \u002d → - etc.
         *
         * The Gutenberg block comment attributes contain nested JSON (blockStyle),
         * so their inner escapes like \\u003e are intentional and must be preserved
         * as-is — they are part of the block grammar.
         *
         * The ONLY fix needed: wp_insert_post / wp_update_post internally calls
         * wp_unslash() on the content, so we must pre-add slashes with wp_slash()
         * to prevent WordPress from stripping the backslashes in the block attributes.
         */
        $payload = json_decode($body, true);

        if (JSON_ERROR_NONE !== json_last_error() || !is_array($payload)) {
            wp_die('Import failed: Invalid JSON payload — ' . json_last_error_msg());
        }

        if (empty($payload['success'])) {
            wp_die('Import failed: API returned success=false.');
        }

        $title   = (string) ($payload['title']   ?? 'Home');
        $slug    = (string) ($payload['slug']     ?? 'home');
        $content = (string) ($payload['content']  ?? '');

        if (isset($_GET['debug'])) {
            echo '<pre style="background:#111;color:#0f0;padding:20px;overflow:auto;font-family:monospace;">';
            echo '<strong>=== CONTENT LENGTH ===</strong> ' . strlen($content) . "\n";
            echo '<strong>=== FIRST 800 CHARS ===</strong>' . "\n" . htmlspecialchars(substr($content, 0, 800)) . "\n";
            echo '</pre>';
            exit;
        }

        if (empty(trim($content))) {
            wp_die('Import failed: Content field is empty in the API response.');
        }

        $existing = get_page_by_path($slug, OBJECT, 'page');

        $post_data = [
            'post_title'   => wp_strip_all_tags($title),
            'post_name'    => sanitize_title($slug),
            /*
             * wp_slash() is REQUIRED here.
             *
             * wp_insert_post() and wp_update_post() call wp_unslash() internally
             * before saving to the database. This strips backslashes from the
             * Gutenberg block JSON attributes (e.g. \"blockStyle\":\"...\").
             * Pre-slashing with wp_slash() balances that unslash so the saved
             * content is exactly what was decoded from the API.
             */
            'post_content' => wp_slash($content),
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ];

        if ($existing && !empty($existing->ID)) {
            $post_data['ID'] = $existing->ID;
            $result          = wp_update_post($post_data, true);
            $action          = 'updated';
        } else {
            $result = wp_insert_post($post_data, true);
            $action = 'created';
        }

        if (is_wp_error($result)) {
            wp_die('Import failed: ' . $result->get_error_message());
        }

        update_post_meta($result, 'fb_page_assets_generation', 'compiling');

        wp_die(sprintf(
            '✅ Import Successful!<br>Page "<strong>%s</strong>" has been %s (ID: %d)<br><br><a href="%s" target="_blank">View Imported Page</a>',
            esc_html($title),
            $action,
            (int) $result,
            get_permalink($result)
        ));
    }
}