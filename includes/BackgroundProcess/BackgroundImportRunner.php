<?php
namespace FrontisBlocks\BackgroundProcess;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Admin\Ajax\TemplateLibrary;
use FrontisBlocks\Utils\Helper;

defined('ABSPATH') || exit;

class BackgroundImportRunner {
    use Singleton;

    const OPTION_KEY = 'fb_import_state';
    const CRON_HOOK  = 'fb_process_import_step';

    private static $all_steps = [
        'fetch_site',
        'upload_files',
        'theme',
        'plugins',
        'headers_footers',
        'templates',
        'pages',
        'posts',
        'global_styles',
        'asset_generation',
        'finalize',
    ];

    private static $step_labels = [
        'fetch_site'       => 'Fetching site data...',
        'upload_files'     => 'Uploading and extracting files...',
        'theme'            => 'Installing & activating theme...',
        'plugins'          => 'Installing & activating plugins...',
        'headers_footers'  => 'Creating headers & footers...',
        'templates'        => 'Creating templates...',
        'pages'            => 'Creating pages...',
        'posts'            => 'Creating posts...',
        'global_styles'    => 'Updating global styles...',
        'asset_generation' => 'Generating assets...',
        'finalize'         => 'Finalizing setup...',
    ];

    public function __construct() {
        add_action(self::CRON_HOOK, [$this, 'process_next_step']);
    }

    // ─── Public API ───────────────────────────────────────────

    /**
     * Start a new import. Returns the initial state.
     */
    public static function start_import( array $params ): array {
        // Prevent concurrent imports
        $existing = self::get_state();
        if ( $existing && $existing['status'] === 'running' ) {
            return $existing;
        }

        $steps = [];
        foreach ( self::$all_steps as $key ) {
            $steps[] = [
                'key'    => $key,
                'label'  => self::$step_labels[ $key ] ?? $key,
                'status' => 'pending',
            ];
        }

        $state = [
            'status'              => 'running',
            'current_step'        => self::$all_steps[0],
            'current_step_index'  => 0,
            'total_steps'         => count( self::$all_steps ),
            'progress'            => 0,
            'steps'               => $steps,
            'site_id'             => $params['site_id'] ?? '',
            'template_data'       => $params['template_data'] ?? [],
            'site_url'            => $params['site_url'] ?? '',
            'site_name'           => $params['site_name'] ?? '',
            'site_tagline'        => $params['site_tagline'] ?? '',
            'site_logo'           => $params['site_logo'] ?? '',
            'global_styles_data'  => $params['global_styles_data'] ?? [],
            'uploads_updated'     => false,
            'navigation_mapping'  => [],
            'site_data'           => null,
            'error'               => null,
            'started_at'          => current_time('mysql'),
            'updated_at'          => current_time('mysql'),
        ];

        self::save_state($state);
        self::schedule_next();

        return $state;
    }

    /**
     * Get current import status (called by polling).
     */
    public static function get_status(): array {
        $state = self::get_state();
        if ( ! $state ) {
            return [ 'status' => 'idle' ];
        }
        return $state;
    }

    /**
     * Cancel current import.
     */
    public static function cancel_import(): array {
        $state = self::get_state();
        if ( $state && $state['status'] === 'running' ) {
            $state['status'] = 'cancelled';
            $state['updated_at'] = current_time('mysql');
            self::save_state($state);
            wp_clear_scheduled_hook(self::CRON_HOOK);
        }
        return $state ?: [ 'status' => 'idle' ];
    }

    // ─── Cron Handler ─────────────────────────────────────────

    public function process_next_step() {
        $state = self::get_state();
        if ( ! $state || $state['status'] !== 'running' ) {
            return;
        }

        $step_key   = $state['current_step'];
        $step_index = $state['current_step_index'];

        // Mark step as running
        $state['steps'][$step_index]['status'] = 'running';
        $state['updated_at'] = current_time('mysql');
        self::save_state($state);

        try {
            $result = $this->execute_step( $step_key, $state );
            $state  = self::get_state(); // re-read (step may have updated it)

            $state['steps'][$step_index]['status'] = $result['step_status'] ?? 'success';

            // Merge any data the step wants to persist
            if ( isset($result['merge']) && is_array($result['merge']) ) {
                $state = array_merge($state, $result['merge']);
            }

            if ( ($result['step_status'] ?? 'success') === 'running' ) {
                // Step needs more time, just save and schedule again
                $state['updated_at'] = current_time('mysql');
                self::save_state($state);
                self::schedule_next();
                return;
            }

            // Advance to next step
            $next_index = $step_index + 1;
            if ( $next_index < $state['total_steps'] ) {
                $state['current_step_index'] = $next_index;
                $state['current_step']       = self::$all_steps[$next_index];
                $state['progress']           = (int) round( ($next_index / $state['total_steps']) * 100 );
                $state['updated_at']         = current_time('mysql');
                self::save_state($state);
                self::schedule_next();
            } else {
                // All done
                $state['status']   = 'completed';
                $state['progress'] = 100;
                $state['updated_at'] = current_time('mysql');
                self::save_state($state);
            }
        } catch ( \Exception $e ) {
            error_log('FB Import Error at step ' . $step_key . ': ' . $e->getMessage());
            $state['steps'][$step_index]['status'] = 'failed';

            // Mark remaining steps as failed
            for ( $i = $step_index + 1; $i < $state['total_steps']; $i++ ) {
                $state['steps'][$i]['status'] = 'failed';
            }

            $state['status']     = 'failed';
            $state['error']      = $e->getMessage();
            $state['updated_at'] = current_time('mysql');
            self::save_state($state);
        }
    }

    // ─── Step Executor ────────────────────────────────────────

    private function execute_step( string $step_key, array $state ): array {
        $tl = TemplateLibrary::get_instance();

        switch ( $step_key ) {

            case 'fetch_site':
                return $this->step_fetch_site($state);

            case 'upload_files':
                return $this->step_upload_files($state, $tl);

            case 'theme':
                return $this->step_theme($state, $tl);

            case 'plugins':
                return $this->step_plugins($state, $tl);

            case 'headers_footers':
                return $this->step_headers_footers($state, $tl);

            case 'templates':
                return $this->step_templates($state, $tl);

            case 'pages':
                return $this->step_pages($state, $tl);

            case 'posts':
                return $this->step_posts($state, $tl);

            case 'global_styles':
                return $this->step_global_styles($state);

            case 'asset_generation':
                return $this->step_asset_generation($state);

            case 'finalize':
                return $this->step_finalize($state);

            default:
                return ['step_status' => 'skipped'];
        }
    }

    // ─── Individual Steps ─────────────────────────────────────

    private function step_fetch_site( array $state ): array {
        $site_id    = $state['site_id'];
        $portal_api = defined('PORTAL_API') ? PORTAL_API : 'https://template-library.frontiswp.com';
        $token      = 'nbcnrqfyorftyzpiojzfnjbidchpgnawnifdbnhhbxbuedphusbaunvecxtvvjvnrehznbmccyanndwrjloncuhobjtfbkcazfjtbbvtsuvgiokjknvgrwdwfgfsonbw';

        $response = wp_remote_post( $portal_api . '/api/import/site', [
            'timeout' => 120,
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type'  => 'application/json',
                'Accept'        => 'application/json',
            ],
            'body' => wp_json_encode([ 'site_id' => $site_id ]),
        ]);

        if ( is_wp_error($response) ) {
            throw new \Exception('Failed to fetch site data: ' . $response->get_error_message());
        }

        $body = json_decode( wp_remote_retrieve_body($response), true );
        if ( empty($body['data']) ) {
            throw new \Exception('Failed to fetch site data: empty response');
        }

        return [
            'step_status' => 'success',
            'merge'       => [ 'site_data' => $body['data'] ],
        ];
    }

    private function step_upload_files( array $state, $tl ): array {
        $uploads_url = $state['site_data']['uploads_url'] ?? '';
        if ( empty($uploads_url) ) {
            return [ 'step_status' => 'skipped', 'merge' => [ 'uploads_updated' => false ] ];
        }

        $result = $tl->do_upload_files($uploads_url);
        return [
            'step_status' => $result['success'] ? 'success' : 'skipped',
            'merge'       => [ 'uploads_updated' => $result['success'] ],
        ];
    }

    private function step_theme( array $state, $tl ): array {
        $template_data = $state['template_data'];
        $theme_slug    = $template_data['theme'] ?? 'frontis';
        $result        = $tl->do_activate_theme($theme_slug);
        return [ 'step_status' => $result['success'] ? 'success' : 'skipped' ];
    }

    private function step_plugins( array $state, $tl ): array {
        $template_data = $state['template_data'];
        $plugins       = $template_data['dependencies'] ?? [];
        if ( empty($plugins) ) {
            return [ 'step_status' => 'skipped' ];
        }
        $result = $tl->do_install_plugins($plugins);
        return [ 'step_status' => $result['success'] ? 'success' : 'skipped' ];
    }

    private function step_headers_footers( array $state, $tl ): array {
        $site_url        = $state['template_data']['preview_url'] ?? $state['site_url'];
        $uploads_updated = $state['uploads_updated'];

        $result = $tl->do_import_headers_footers($site_url, $uploads_updated);
        if ( ! $result['success'] ) {
            throw new \Exception('Header/Footer import failed');
        }

        return [
            'step_status' => 'success',
            'merge'       => [ 'navigation_mapping' => $result['mapping'] ?? [] ],
        ];
    }

    private function step_templates( array $state, $tl ): array {
        $site_url           = $state['template_data']['preview_url'] ?? $state['site_url'];
        $uploads_updated    = $state['uploads_updated'];
        $navigation_mapping = $state['navigation_mapping'];

        $result = $tl->do_import_templates($site_url, $navigation_mapping, $uploads_updated);
        return [ 'step_status' => $result['success'] ? 'success' : 'warning' ];
    }

    private function step_pages( array $state, $tl ): array {
        $pages           = $state['site_data']['pages'] ?? [];
        $site_url        = $state['template_data']['preview_url'] ?? $state['site_url'];
        $uploads_updated = $state['uploads_updated'];
        $site_name       = $state['site_name'];
        $site_tagline    = $state['site_tagline'];
        $site_logo       = $state['site_logo'];

        // Update site settings first
        if ( ! empty($site_name) )    update_option('blogname', $site_name);
        if ( ! empty($site_tagline) ) update_option('blogdescription', $site_tagline);
        if ( ! empty($site_logo) )    set_theme_mod('custom_logo', intval($site_logo));

        if ( empty($pages) ) {
            return [ 'step_status' => 'skipped' ];
        }

        $failed = 0;
        foreach ( $pages as $page ) {
            $result = $tl->do_import_page($page, $site_url, $uploads_updated);
            if ( ! $result['success'] ) $failed++;
        }

        return [ 'step_status' => $failed === 0 ? 'success' : 'warning' ];
    }

    private function step_posts( array $state, $tl ): array {
        $posts           = $state['site_data']['posts'] ?? [];
        $site_url        = $state['template_data']['preview_url'] ?? $state['site_url'];
        $uploads_updated = $state['uploads_updated'];

        if ( empty($posts) ) {
            return [ 'step_status' => 'skipped' ];
        }

        $failed = 0;
        foreach ( $posts as $post ) {
            $result = $tl->do_import_post($post, $site_url, $uploads_updated);
            if ( ! $result['success'] ) $failed++;
        }

        return [ 'step_status' => $failed === 0 ? 'success' : 'warning' ];
    }

    private function step_global_styles( array $state ): array {
        $gs_data = $state['global_styles_data'];
        if ( empty($gs_data) ) {
            return [ 'step_status' => 'skipped' ];
        }

        $option_map = [
            'colors'           => 'fb_global_colors',
            'customColors'     => 'fb_custom_colors',
            'gradientColors'   => 'fb_gradient_colors',
            'customGradients'  => 'fb_custom_gradient_colors',
            'typography'       => 'fb_typography',
            'customTypography' => 'fb_custom_typography',
            'fontFamilies'     => 'fb_fontfamilies',
            'globalTypo'       => 'fb_globaltypo',
        ];

        foreach ( $option_map as $key => $option_name ) {
            if ( isset($gs_data[$key]) ) {
                update_option($option_name, $gs_data[$key], true);
            }
        }

        // Regenerate global assets
        if ( class_exists('\\FrontisBlocks\\Assets\\AssetsGenerator') ) {
            \FrontisBlocks\Assets\AssetsGenerator::generate_global_assets();
        }

        return [ 'step_status' => 'success' ];
    }

    private function step_asset_generation( array $state ): array {
        if ( ! class_exists('\\FrontisBlocks\\Admin\\Ajax\\Settings') ) {
            return [ 'step_status' => 'skipped' ];
        }

        try {
            $settings = \FrontisBlocks\Admin\Ajax\Settings::get_instance();
            $batch = isset($state['asset_batch']) ? (int) $state['asset_batch'] : 0;
            $batch_size = 10;
            
            $response = $settings->generate_assets_for_post( $batch, $batch_size );
            
            if ( isset($response['completed']) && $response['completed'] ) {
                return [ 'step_status' => 'success' ];
            } else {
                return [ 
                    'step_status' => 'running',
                    'merge' => [ 'asset_batch' => $batch + 1 ]
                ];
            }
        } catch (\Exception $e) {
            error_log('FB Import: Asset generation warning: ' . $e->getMessage());
        }

        return [ 'step_status' => 'success' ];
    }

    private function step_finalize( array $state ): array {
        // Update permalink structure
        if ( get_option('permalink_structure') !== '/%postname%/' ) {
            update_option('permalink_structure', '/%postname%/');
            flush_rewrite_rules();
        }

        return [ 'step_status' => 'success' ];
    }

    // ─── Helpers ──────────────────────────────────────────────

    private static function get_state(): ?array {
        $state = get_option(self::OPTION_KEY, null);
        return is_array($state) ? $state : null;
    }

    private static function save_state( array $state ): void {
        update_option(self::OPTION_KEY, $state, false);
    }

    private static function schedule_next(): void {
        if ( ! wp_next_scheduled(self::CRON_HOOK) ) {
            wp_schedule_single_event( time() + 1, self::CRON_HOOK );
        }
        // Also trigger immediately via loopback
        spawn_cron();
    }
}
