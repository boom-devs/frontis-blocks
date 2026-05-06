<?php

namespace FrontisBlocks\BackgroundProcess;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\Core\PclZip;

defined('ABSPATH') || exit;

class BackgroundImportRunner
{
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

    public function __construct()
    {
        add_action(self::CRON_HOOK, [$this, 'process_next_step']);
    }

    // =========================================================================
    // PUBLIC API
    // =========================================================================

    public static function start_import(array $params): array
    {
        $existing = self::get_state();

        if ($existing && ($existing['status'] ?? '') === 'running') {
            return $existing;
        }

        $steps = [];

        foreach (self::$all_steps as $key) {
            $steps[] = [
                'key'    => $key,
                'label'  => self::$step_labels[$key] ?? $key,
                'status' => 'pending',
            ];
        }

        $state = [
            'status'              => 'running',
            'current_step'        => self::$all_steps[0],
            'current_step_index'  => 0,
            'total_steps'         => count(self::$all_steps),
            'progress'            => 0,
            'steps'               => $steps,
            'site_id'             => $params['site_id'] ?? '',
            'template_data'       => is_array($params['template_data'] ?? null) ? $params['template_data'] : [],
            'site_url'            => $params['site_url'] ?? '',
            'site_name'           => $params['site_name'] ?? '',
            'site_tagline'        => $params['site_tagline'] ?? '',
            'site_logo'           => $params['site_logo'] ?? '',
            'global_styles_data'  => is_array($params['global_styles_data'] ?? null) ? $params['global_styles_data'] : [],
            'uploads_updated'     => false,
            'navigation_mapping'  => [],
            'site_data'           => null,
            'asset_batch'         => 0,
            'error'               => null,
            'started_at'          => current_time('mysql'),
            'updated_at'          => current_time('mysql'),
        ];

        self::save_state($state);
        self::schedule_next();

        return $state;
    }

    public static function get_status(): array
    {
        $state = self::get_state();

        if (!$state) {
            return ['status' => 'idle'];
        }

        return $state;
    }

    public static function cancel_import(): array
    {
        $state = self::get_state();

        if ($state && ($state['status'] ?? '') === 'running') {
            $state['status']     = 'cancelled';
            $state['updated_at'] = current_time('mysql');

            self::save_state($state);
            wp_clear_scheduled_hook(self::CRON_HOOK);
        }

        return $state ?: ['status' => 'idle'];
    }

    // =========================================================================
    // CRON HANDLER
    // =========================================================================

    public function process_next_step(): void
    {
        $state = self::get_state();

        if (!$state || ($state['status'] ?? '') !== 'running') {
            return;
        }

        $step_key   = $state['current_step'] ?? '';
        $step_index = (int) ($state['current_step_index'] ?? 0);

        if (empty($step_key) || !isset($state['steps'][$step_index])) {
            $this->fail_import($state, $step_index, 'Invalid import state.');
            return;
        }

        $state['steps'][$step_index]['status'] = 'running';
        $state['updated_at'] = current_time('mysql');

        self::save_state($state);

        try {
            $result = $this->execute_step($step_key, $state);
            $state  = self::get_state();

            if (!$state) {
                return;
            }

            $step_status = $result['step_status'] ?? 'success';

            if (isset($result['merge']) && is_array($result['merge'])) {
                $state = array_merge($state, $result['merge']);
            }

            if ($step_status === 'failed') {
                throw new \Exception($result['message'] ?? 'Import step failed.');
            }

            $state['steps'][$step_index]['status'] = $step_status;

            if ($step_status === 'running') {
                $state['updated_at'] = current_time('mysql');

                self::save_state($state);
                self::schedule_next();

                return;
            }

            $next_index = $step_index + 1;

            if ($next_index < (int) $state['total_steps']) {
                $state['current_step_index'] = $next_index;
                $state['current_step']       = self::$all_steps[$next_index];
                $state['progress']           = (int) round(($next_index / $state['total_steps']) * 100);
                $state['updated_at']         = current_time('mysql');

                self::save_state($state);
                self::schedule_next();

                return;
            }

            $state['status']     = 'completed';
            $state['progress']   = 100;
            $state['updated_at'] = current_time('mysql');

            self::save_state($state);

        } catch (\Throwable $e) {
            error_log('FB Import Error at step ' . $step_key . ': ' . $e->getMessage());
            $this->fail_import($state, $step_index, $e->getMessage());
        }
    }

    private function fail_import(array $state, int $step_index, string $message): void
    {
        if (isset($state['steps'][$step_index])) {
            $state['steps'][$step_index]['status'] = 'failed';
        }

        for ($i = $step_index + 1; $i < (int) ($state['total_steps'] ?? 0); $i++) {
            if (isset($state['steps'][$i])) {
                $state['steps'][$i]['status'] = 'failed';
            }
        }

        $state['status']     = 'failed';
        $state['error']      = $message;
        $state['updated_at'] = current_time('mysql');

        self::save_state($state);
    }

    // =========================================================================
    // STEP EXECUTOR
    // =========================================================================

    private function execute_step(string $step_key, array $state): array
    {
        switch ($step_key) {
            case 'fetch_site':
                return $this->step_fetch_site($state);

            case 'upload_files':
                return $this->step_upload_files($state);

            case 'theme':
                return $this->step_theme($state);

            case 'plugins':
                return $this->step_plugins($state);

            case 'headers_footers':
                return $this->step_headers_footers($state);

            case 'templates':
                return $this->step_templates($state);

            case 'pages':
                return $this->step_pages($state);

            case 'posts':
                return $this->step_posts($state);

            case 'global_styles':
                return $this->step_global_styles($state);

            case 'asset_generation':
                return $this->step_asset_generation($state);

            case 'finalize':
                return $this->step_finalize();

            default:
                return ['step_status' => 'skipped'];
        }
    }

    // =========================================================================
    // INDIVIDUAL STEPS
    // =========================================================================

    private function step_fetch_site(array $state): array
    {
        $site_id = sanitize_text_field($state['site_id'] ?? '');

        if (empty($site_id)) {
            throw new \Exception('Site ID is missing.');
        }

        $portal_api = defined('PORTAL_API') ? PORTAL_API : 'https://template-library.frontiswp.com';

        $token = defined('FRONTIS_IMPORT_API_TOKEN')
            ? FRONTIS_IMPORT_API_TOKEN
            : 'nbcnrqfyorftyzpiojzfnjbidchpgnawnifdbnhhbxbuedphusbaunvecxtvvjvnrehznbmccyanndwrjloncuhobjtfbkcazfjtbbvtsuvgiokjknvgrwdwfgfsonbw';

        $response = wp_remote_post($portal_api . '/api/import/site', [
            'timeout' => 120,
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type'  => 'application/json',
                'Accept'        => 'application/json',
            ],
            'body' => wp_json_encode([
                'site_id' => $site_id,
            ]),
        ]);

        if (is_wp_error($response)) {
            throw new \Exception('Failed to fetch site data: ' . $response->get_error_message());
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body        = json_decode(wp_remote_retrieve_body($response), true);

        if ($status_code < 200 || $status_code >= 300 || empty($body['data']) || !is_array($body['data'])) {
            throw new \Exception('Failed to fetch site data: invalid response.');
        }

        return [
            'step_status' => 'success',
            'merge'       => [
                'site_data' => $body['data'],
            ],
        ];
    }

    private function step_upload_files(array $state): array
    {
        $uploads_url = $state['site_data']['uploads_url'] ?? '';

        if (empty($uploads_url)) {
            return [
                'step_status' => 'skipped',
                'merge'       => [
                    'uploads_updated' => false,
                ],
            ];
        }

        $result = $this->runner_upload_files($uploads_url);

        return [
            'step_status' => !empty($result['success']) ? 'success' : 'warning',
            'merge'       => [
                'uploads_updated' => !empty($result['success']),
            ],
        ];
    }

    private function step_theme(array $state): array
    {
        $template_data = is_array($state['template_data'] ?? null) ? $state['template_data'] : [];
        $theme_slug    = !empty($template_data['theme']) ? sanitize_text_field($template_data['theme']) : 'frontis';

        $result = $this->runner_activate_theme($theme_slug);

        return [
            'step_status' => !empty($result['success']) ? 'success' : 'warning',
        ];
    }

    private function step_plugins(array $state): array
    {
        $template_data = is_array($state['template_data'] ?? null) ? $state['template_data'] : [];
        $plugins       = $template_data['dependencies'] ?? [];

        if (empty($plugins) || !is_array($plugins)) {
            return ['step_status' => 'skipped'];
        }

        $result = $this->runner_install_plugins($plugins);

        return [
            'step_status' => !empty($result['success']) ? 'success' : 'warning',
        ];
    }

    private function step_headers_footers(array $state): array
    {
        $site_url        = $this->get_demo_site_url($state);
        $uploads_updated = !empty($state['uploads_updated']);

        if (empty($site_url)) {
            return ['step_status' => 'skipped'];
        }

        $result = $this->runner_import_headers_footers($site_url, $uploads_updated);

        if (empty($result['success'])) {
            throw new \Exception($result['message'] ?? 'Header/Footer import failed.');
        }

        return [
            'step_status' => 'success',
            'merge'       => [
                'navigation_mapping' => $result['mapping'] ?? [],
            ],
        ];
    }

    private function step_templates(array $state): array
    {
        $site_url           = $this->get_demo_site_url($state);
        $uploads_updated    = !empty($state['uploads_updated']);
        $navigation_mapping = is_array($state['navigation_mapping'] ?? null) ? $state['navigation_mapping'] : [];

        if (empty($site_url)) {
            return ['step_status' => 'skipped'];
        }

        $result = $this->runner_import_templates($site_url, $navigation_mapping, $uploads_updated);

        return [
            'step_status' => !empty($result['success']) ? 'success' : 'warning',
        ];
    }

    private function step_pages(array $state): array
    {
        $pages           = $state['site_data']['pages'] ?? [];
        $site_url        = $this->get_demo_site_url($state);
        $uploads_updated = !empty($state['uploads_updated']);

        if (!empty($state['site_name'])) {
            update_option('blogname', sanitize_text_field($state['site_name']));
        }

        if (!empty($state['site_tagline'])) {
            update_option('blogdescription', sanitize_text_field($state['site_tagline']));
        }

        if (!empty($state['site_logo'])) {
            set_theme_mod('custom_logo', intval($state['site_logo']));
        }

        if (empty($pages) || !is_array($pages)) {
            return ['step_status' => 'skipped'];
        }

        $failed = 0;

        foreach ($pages as $page) {
            $result = $this->runner_import_page($page, $site_url, $uploads_updated);

            if (empty($result['success'])) {
                $failed++;
                error_log('FB Import: Page import warning: ' . ($result['message'] ?? 'Unknown error'));
            }
        }

        return [
            'step_status' => $failed === 0 ? 'success' : 'warning',
        ];
    }

    private function step_posts(array $state): array
    {
        $posts           = $state['site_data']['posts'] ?? [];
        $site_url        = $this->get_demo_site_url($state);
        $uploads_updated = !empty($state['uploads_updated']);

        if (empty($posts) || !is_array($posts)) {
            return ['step_status' => 'skipped'];
        }

        $failed = 0;

        foreach ($posts as $post) {
            $result = $this->runner_import_post($post, $site_url, $uploads_updated);

            if (empty($result['success'])) {
                $failed++;
                error_log('FB Import: Post import warning: ' . ($result['message'] ?? 'Unknown error'));
            }
        }

        return [
            'step_status' => $failed === 0 ? 'success' : 'warning',
        ];
    }

    private function step_global_styles(array $state): array
    {
        $gs_data = is_array($state['global_styles_data'] ?? null) ? $state['global_styles_data'] : [];

        if (empty($gs_data)) {
            return ['step_status' => 'skipped'];
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

        foreach ($option_map as $key => $option_name) {
            if (array_key_exists($key, $gs_data)) {
                update_option($option_name, $gs_data[$key], true);
            }
        }

        if (class_exists('\FrontisBlocks\Assets\AssetsGenerator')) {
            \FrontisBlocks\Assets\AssetsGenerator::generate_global_assets();
        }

        return ['step_status' => 'success'];
    }

    private function step_asset_generation(array $state): array
    {
        if (!class_exists(\FrontisBlocks\Admin\Ajax\Settings::class)) {
            error_log('FB Import: Settings class not found during asset generation.');
            return ['step_status' => 'skipped'];
        }

        try {
            $settings   = \FrontisBlocks\Admin\Ajax\Settings::get_instance();
            $batch      = isset($state['asset_batch']) ? (int) $state['asset_batch'] : 0;
            $batch_size = 10;

            $response = $settings->generate_assets_for_post($batch, $batch_size);

            if (is_array($response) && !empty($response['completed'])) {
                $still_compiling = get_posts([
                    'post_type'      => ['page', 'post'],
                    'post_status'    => 'publish',
                    'posts_per_page' => -1,
                    'meta_query'     => [
                        [
                            'key'   => 'fb_page_assets_generation',
                            'value' => 'compiling',
                        ],
                    ],
                    'fields'         => 'ids',
                ]);

                if (!empty($still_compiling)) {
                    return [
                        'step_status' => 'running',
                        'merge'       => [
                            'asset_batch' => 0,
                        ],
                    ];
                }

                return [
                    'step_status' => 'success',
                    'merge'       => [
                        'asset_batch' => 0,
                    ],
                ];
            }

            return [
                'step_status' => 'running',
                'merge'       => [
                    'asset_batch' => $batch + 1,
                ],
            ];

        } catch (\Throwable $e) {
            error_log('FB Import: Asset generation failed: ' . $e->getMessage());

            return [
                'step_status' => 'warning',
                'merge'       => [
                    'error' => 'Asset generation warning: ' . $e->getMessage(),
                ],
            ];
        }
    }

    private function step_finalize(): array
    {
        if (get_option('permalink_structure') !== '/%postname%/') {
            update_option('permalink_structure', '/%postname%/');
            flush_rewrite_rules();
        }

        return ['step_status' => 'success'];
    }

    // =========================================================================
    // RUNNER IMPORT METHODS
    // =========================================================================

    private function runner_upload_files(string $zip_url): array
    {
        global $wpdb;

        $zip_url = esc_url_raw($zip_url);

        if (empty($zip_url)) {
            return [
                'success' => false,
                'message' => 'No uploads URL provided.',
            ];
        }

        $uploads_dir = wp_upload_dir();
        $destination = trailingslashit($uploads_dir['basedir']);

        if (!is_dir($destination)) {
            wp_mkdir_p($destination);
        }

        $temp_zip_file = tempnam(sys_get_temp_dir(), 'downloaded_zip_');

        try {
            $response = wp_safe_remote_get($zip_url, [
                'timeout'   => 300,
                'sslverify' => true,
            ]);

            if (is_wp_error($response)) {
                throw new \Exception('Download Error: ' . $response->get_error_message());
            }

            $http_code = wp_remote_retrieve_response_code($response);

            if ($http_code !== 200) {
                throw new \Exception('Failed to download zip file. HTTP ' . $http_code);
            }

            $data = wp_remote_retrieve_body($response);

            if (empty($data)) {
                throw new \Exception('Downloaded file is empty.');
            }

            file_put_contents($temp_zip_file, $data);

            $zip     = new PclZip($temp_zip_file);
            $content = $zip->listContent();

            if ($content == 0) {
                throw new \Exception('Failed to read zip content.');
            }

            $extracted_files      = [];
            $dangerous_extensions = ['php', 'php3', 'php4', 'php5', 'php7', 'php8', 'phtml', 'phar', 'exe', 'sh', 'bat', 'htaccess'];

            foreach ($content as $file_info) {
                $file_path = $destination . $file_info['filename'];

                if (!empty($file_info['folder'])) {
                    if (!is_dir($file_path)) {
                        wp_mkdir_p($file_path);
                    }
                    continue;
                }

                $ext = strtolower(pathinfo($file_info['filename'], PATHINFO_EXTENSION));

                if (in_array($ext, $dangerous_extensions, true)) {
                    continue;
                }

                $result = $zip->extractByIndex(
                    $file_info['index'],
                    PCLZIP_OPT_PATH,
                    $destination,
                    PCLZIP_OPT_REPLACE_NEWER
                );

                if ($result != 0 && file_exists($file_path)) {
                    $extracted_files[] = $file_info['filename'];
                }
            }

            unlink($temp_zip_file);

            require_once ABSPATH . 'wp-admin/includes/image.php';
            require_once ABSPATH . 'wp-admin/includes/media.php';
            require_once ABSPATH . 'wp-admin/includes/file.php';

            $registered_count = 0;

            foreach ($extracted_files as $relative_file_path) {
                $full_path = $destination . $relative_file_path;

                if (!file_exists($full_path) || is_dir($full_path)) {
                    continue;
                }

                if (preg_match('/-(\d+)x(\d+)\.(jpg|jpeg|png|gif|webp|svg|avif)$/i', basename($full_path))) {
                    continue;
                }

                $existing_attachment = $wpdb->get_var($wpdb->prepare(
                    "SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_wp_attached_file' AND meta_value = %s LIMIT 1",
                    $relative_file_path
                ));

                if ($existing_attachment) {
                    continue;
                }

                $filetype = wp_check_filetype(basename($full_path), null);

                $attachment = [
                    'guid'           => $uploads_dir['baseurl'] . '/' . $relative_file_path,
                    'post_mime_type' => $filetype['type'],
                    'post_title'     => preg_replace('/\.[^.]+$/', '', basename($full_path)),
                    'post_content'   => '',
                    'post_status'    => 'inherit',
                ];

                $attach_id = wp_insert_attachment($attachment, $full_path);

                if (!is_wp_error($attach_id)) {
                    $attach_data = wp_generate_attachment_metadata($attach_id, $full_path);
                    wp_update_attachment_metadata($attach_id, $attach_data);
                    $registered_count++;
                }
            }

            return [
                'success'    => true,
                'count'      => count($extracted_files),
                'registered' => $registered_count,
            ];

        } catch (\Throwable $e) {
            if (file_exists($temp_zip_file)) {
                unlink($temp_zip_file);
            }

            error_log('FB Import upload files error: ' . $e->getMessage());

            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        }
    }

    private function runner_activate_theme(string $theme_slug = 'frontis'): array
    {
        $theme_slug = sanitize_text_field($theme_slug ?: 'frontis');

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/misc.php';
        require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        require_once ABSPATH . 'wp-admin/includes/theme.php';
        require_once ABSPATH . 'wp-admin/includes/template.php';

        $wp_theme = wp_get_theme($theme_slug);

        if (!$wp_theme->exists()) {
            $theme_information = wp_remote_get("https://api.wordpress.org/themes/info/1.2/?action=theme_information&request[slug]={$theme_slug}");

            if (is_wp_error($theme_information)) {
                return [
                    'success' => false,
                    'message' => $theme_information->get_error_message(),
                ];
            }

            $theme_data   = json_decode(wp_remote_retrieve_body($theme_information), true);
            $download_url = $theme_data['download_link'] ?? null;

            if (!$download_url) {
                return [
                    'success' => false,
                    'message' => 'Theme download link not found.',
                ];
            }

            $upgrader       = new \Theme_Upgrader(new \Automatic_Upgrader_Skin());
            $install_result = $upgrader->install($download_url);

            if (!$install_result) {
                return [
                    'success' => false,
                    'message' => 'Theme installation failed.',
                ];
            }
        }

        switch_theme($theme_slug);

        return [
            'success' => true,
            'theme'   => $theme_slug,
        ];
    }

    private function runner_install_plugins(array $plugins): array
    {
        if (empty($plugins)) {
            return [
                'success' => true,
                'plugins' => [],
            ];
        }

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/misc.php';
        require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
        require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
        require_once ABSPATH . 'wp-admin/includes/update.php';

        $results     = [];
        $all_plugins = get_plugins();

        foreach ($plugins as $plugin) {
            $slug    = sanitize_text_field($plugin['slug'] ?? '');
            $version = sanitize_text_field($plugin['version'] ?? '');

            if (empty($slug)) {
                continue;
            }

            $plugin_main_file = $slug . '/' . $slug . '.php';
            $is_installed    = false;
            $installed_ver   = null;

            foreach ($all_plugins as $path => $meta) {
                if (strpos($path, $slug . '/') === 0) {
                    $is_installed    = true;
                    $installed_ver   = $meta['Version'] ?? null;
                    $plugin_main_file = $path;
                    break;
                }
            }

            $need_install = !$is_installed || ($version && $installed_ver && version_compare($installed_ver, $version, '<'));

            if ($need_install) {
                $download_url = $version
                    ? "https://downloads.wordpress.org/plugin/{$slug}.{$version}.zip"
                    : "https://downloads.wordpress.org/plugin/{$slug}.zip";

                $upgrader       = new \Plugin_Upgrader(new \Automatic_Upgrader_Skin());
                $install_result = $upgrader->install($download_url);

                if (!$install_result) {
                    $results[$slug] = 'install_failed';
                    $all_plugins    = get_plugins();
                    continue;
                }

                $all_plugins = get_plugins();
                $found       = false;

                foreach ($all_plugins as $path => $meta) {
                    if (strpos($path, $slug . '/') === 0) {
                        $plugin_main_file = $path;
                        $found            = true;
                        break;
                    }
                }

                if (!$found) {
                    $results[$slug] = 'installed_but_entry_not_found';
                    continue;
                }
            }

            if (!is_plugin_active($plugin_main_file)) {
                $activate_result = activate_plugin($plugin_main_file);

                $results[$slug] = is_wp_error($activate_result)
                    ? 'activation_failed: ' . $activate_result->get_error_message()
                    : 'installed_and_activated';
            } else {
                $results[$slug] = $need_install ? 'installed_and_already_active' : 'already_active';
            }
        }

        return [
            'success' => true,
            'plugins' => $results,
        ];
    }

    private function runner_import_headers_footers(string $site_url, bool $uploads_updated): array
    {
        $site_url = esc_url_raw($site_url);

        if (empty($site_url)) {
            return [
                'success' => false,
                'message' => 'Site URL is required.',
            ];
        }

        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/layout';

        $response = wp_remote_get($remote_url, [
            'timeout' => 90,
        ]);

        if (is_wp_error($response)) {
            return [
                'success' => false,
                'message' => $response->get_error_message(),
            ];
        }

        $payload = json_decode(wp_remote_retrieve_body($response), true);

        if (!$payload || !is_array($payload)) {
            return [
                'success' => false,
                'message' => 'Invalid JSON payload from ' . $remote_url,
            ];
        }

        $headers = $payload['header'] ?? [];
        $footers = $payload['footer'] ?? [];

        $navigation_mapping = [];
        $stats = [
            'nav_created'  => 0,
            'nav_skipped'  => 0,
            'part_created' => 0,
            'part_skipped' => 0,
            'errors'       => [],
        ];

        $parts_to_process = [
            'header' => is_array($headers) ? $headers : [],
            'footer' => is_array($footers) ? $footers : [],
        ];

        foreach ($parts_to_process as $items) {
            foreach ($items as $item) {
                if (empty($item['navigations']) || !is_array($item['navigations'])) {
                    continue;
                }

                foreach ($item['navigations'] as $nav) {
                    $old_id  = $nav['id'] ?? null;
                    $content = $nav['content'] ?? '';
                    $title   = $nav['title'] ?? ('Imported Nav ' . $old_id);

                    if (!$old_id || empty($content)) {
                        continue;
                    }

                    if ($uploads_updated) {
                        $content = $this->runner_replace_media_urls($content);
                    }

                    $content = $this->runner_replace_demo_urls($content, $site_url);
                    $content = $this->runner_clean_navigation_block_content($content);

                    $slug     = 'imported-nav-' . $old_id;
                    $existing = get_page_by_path($slug, OBJECT, 'wp_navigation');

                    if ($existing) {
                        wp_update_post([
                            'ID'           => $existing->ID,
                            'post_content' => wp_slash($content),
                            'post_title'   => $title,
                        ]);

                        wp_set_object_terms($existing->ID, get_stylesheet(), 'wp_theme');

                        $navigation_mapping[$old_id] = $existing->ID;
                        $stats['nav_skipped']++;
                    } else {
                        $new_id = wp_insert_post([
                            'post_title'   => $title,
                            'post_name'    => $slug,
                            'post_content' => wp_slash($content),
                            'post_status'  => 'publish',
                            'post_type'    => 'wp_navigation',
                        ]);

                        if (!is_wp_error($new_id)) {
                            wp_set_object_terms($new_id, get_stylesheet(), 'wp_theme');

                            $navigation_mapping[$old_id] = $new_id;
                            $stats['nav_created']++;
                        }
                    }
                }
            }
        }

        foreach ($parts_to_process as $area => $items) {
            foreach ($items as $item) {
                $slug    = $item['slug'] ?? '';
                $title   = $item['title'] ?? $slug;
                $content = $item['content'] ?? '';

                if (empty($slug)) {
                    continue;
                }

                if ($uploads_updated) {
                    $content = $this->runner_replace_media_urls($content);
                }

                $content = $this->runner_replace_demo_urls($content, $site_url);
                $content = $this->runner_replace_navigation_refs($content, $navigation_mapping);
                $content = $this->runner_replace_theme_refs($content);

                $existing = get_posts([
                    'post_type'      => 'wp_template_part',
                    'name'           => $slug,
                    'post_status'    => 'any',
                    'posts_per_page' => 1,
                    'tax_query'      => [
                        [
                            'taxonomy' => 'wp_theme',
                            'field'    => 'slug',
                            'terms'    => get_stylesheet(),
                        ],
                    ],
                    'fields' => 'ids',
                ]);

                if (!empty($existing)) {
                    $id = $existing[0];

                    wp_update_post([
                        'ID'           => $id,
                        'post_content' => wp_slash($content),
                        'post_title'   => $title,
                    ]);

                    wp_set_object_terms($id, get_stylesheet(), 'wp_theme');

                    $stats['part_skipped']++;
                } else {
                    $id = wp_insert_post([
                        'post_title'   => $title,
                        'post_name'    => $slug,
                        'post_content' => wp_slash($content),
                        'post_status'  => 'publish',
                        'post_type'    => 'wp_template_part',
                    ]);

                    if (!is_wp_error($id)) {
                        wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                        wp_set_object_terms($id, $area, 'wp_template_part_area');

                        $stats['part_created']++;
                    } else {
                        $stats['errors'][] = $slug;
                    }
                }

                if (!is_wp_error($id) && $id > 0) {
                    $logo_id = 0;

                    if (preg_match('/<!--\s+wp:site-logo\s+({.*?})\s+\/-->/s', $content, $logo_matches)) {
                        $logo_attrs = json_decode($logo_matches[1], true);

                        if (!empty($logo_attrs['id'])) {
                            $logo_id = (int) $logo_attrs['id'];
                        }
                    }

                    if (!$logo_id && preg_match('/<img[^>]+src=["\']([^"\']+)["\'][^>]*>/i', $content, $img_matches)) {
                        $logo_id = attachment_url_to_postid($img_matches[1]);
                    }

                    if ($logo_id) {
                        set_theme_mod('custom_logo', $logo_id);
                    }
                }
            }
        }

        return [
            'success' => true,
            'stats'   => $stats,
            'mapping' => $navigation_mapping,
        ];
    }

    private function runner_import_templates(string $site_url, array $mapping, bool $uploads_updated): array
    {
        $templates = $this->runner_fetch_remote_templates($site_url);

        if (!is_array($templates)) {
            $templates = [];
        }

        $created = 0;
        $skipped = 0;

        foreach ($templates as $tmpl) {
            $slug    = $tmpl['slug'] ?? '';
            $title   = $tmpl['title'] ?? $slug;
            $content = $tmpl['content'] ?? '';

            if (empty($slug)) {
                continue;
            }

            if ($uploads_updated) {
                $content = $this->runner_replace_media_urls($content);
            }

            $content = $this->runner_replace_demo_urls($content, $site_url);
            $content = $this->runner_replace_navigation_refs($content, $mapping);
            $content = $this->runner_replace_theme_refs($content);

            $existing = get_posts([
                'post_type'      => 'wp_template',
                'name'           => $slug,
                'posts_per_page' => 1,
                'post_status'    => 'any',
                'fields'         => 'ids',
                'tax_query'      => [
                    [
                        'taxonomy' => 'wp_theme',
                        'field'    => 'slug',
                        'terms'    => get_stylesheet(),
                    ],
                ],
            ]);

            if (!empty($existing)) {
                $update_res = wp_update_post([
                    'ID'           => $existing[0],
                    'post_content' => wp_slash($content),
                    'post_title'   => $title,
                ]);

                if ($update_res) {
                    wp_set_object_terms($existing[0], get_stylesheet(), 'wp_theme');
                    $skipped++;
                }
            } else {
                $id = wp_insert_post([
                    'post_title'   => $title,
                    'post_name'    => $slug,
                    'post_content' => wp_slash($content),
                    'post_status'  => 'publish',
                    'post_type'    => 'wp_template',
                ]);

                if (!is_wp_error($id)) {
                    wp_set_object_terms($id, get_stylesheet(), 'wp_theme');
                    $created++;
                }
            }
        }

        return [
            'success' => true,
            'created' => $created,
            'skipped' => $skipped,
        ];
    }

    private function runner_import_page(array $page, string $site_url, bool $uploads_updated): array
    {
        $title    = sanitize_text_field($page['title'] ?? '');
        $slug     = sanitize_title($page['slug'] ?? '');
        $template = sanitize_text_field($page['template'] ?? '');
        $badge    = sanitize_text_field($page['badge'] ?? '');

        if (empty($title)) {
            return [
                'success' => false,
                'message' => 'Page title is required.',
            ];
        }

        if (empty($slug)) {
            $slug = sanitize_title($title);
        }

        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/content/' . $slug;

        $response = wp_remote_get($remote_url, [
            'timeout' => 90,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        if (is_wp_error($response)) {
            return [
                'success' => false,
                'message' => $response->get_error_message(),
            ];
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body        = wp_remote_retrieve_body($response);

        if (200 !== $status_code || empty($body)) {
            return [
                'success' => false,
                'message' => 'Page import failed. HTTP ' . $status_code,
            ];
        }

        $payload = json_decode($body, true);

        if (JSON_ERROR_NONE !== json_last_error() || !is_array($payload) || empty($payload['success'])) {
            return [
                'success' => false,
                'message' => 'Invalid page payload for ' . $slug,
            ];
        }

        $title   = (string) ($payload['title'] ?? $title);
        $slug    = (string) ($payload['slug'] ?? $slug);
        $content = (string) ($payload['content'] ?? '');

        if (empty(trim($content))) {
            return [
                'success' => false,
                'message' => 'Page content is empty for ' . $slug,
            ];
        }

        if ($uploads_updated) {
            $content = $this->runner_replace_media_urls($content);
        }

        $content = $this->runner_replace_demo_urls($content, $site_url);

        $existing = get_page_by_path($slug, OBJECT, 'page');

        $post_data = [
            'post_title'   => wp_strip_all_tags($title),
            'post_name'    => sanitize_title($slug),
            'post_content' => wp_slash($content),
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ];

        if ($existing && !empty($existing->ID)) {
            $post_data['ID'] = $existing->ID;
            $page_id         = wp_update_post($post_data, true);
        } else {
            $page_id = wp_insert_post($post_data, true);
        }

        if (is_wp_error($page_id)) {
            return [
                'success' => false,
                'message' => $page_id->get_error_message(),
            ];
        }

        if (!empty($template)) {
            update_post_meta($page_id, '_wp_page_template', $template);
        }

        if ($badge === 'front-page') {
            update_option('page_on_front', $page_id);
            update_option('show_on_front', 'page');
        } elseif ($badge === 'blog-page') {
            update_option('page_for_posts', $page_id);
        }

        if (!empty($badge)) {
            update_post_meta($page_id, '_fb_page_badge', $badge);
        }

        update_post_meta($page_id, 'fb_page_assets_generation', 'compiling');

        return [
            'success' => true,
            'page_id' => $page_id,
        ];
    }

    private function runner_import_post(array $post, string $site_url, bool $uploads_updated): array
    {
        $title    = sanitize_text_field($post['title'] ?? '');
        $slug     = sanitize_title($post['slug'] ?? '');
        $template = sanitize_text_field($post['template'] ?? '');

        if (empty($title)) {
            return [
                'success' => false,
                'message' => 'Post title is required.',
            ];
        }

        if (empty($slug)) {
            $slug = sanitize_title($title);
        }

        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/content/' . $slug;

        $response = wp_remote_get($remote_url, [
            'timeout' => 90,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        if (is_wp_error($response)) {
            return [
                'success' => false,
                'message' => $response->get_error_message(),
            ];
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body        = wp_remote_retrieve_body($response);

        if (200 !== $status_code || empty($body)) {
            return [
                'success' => false,
                'message' => 'Post import failed. HTTP ' . $status_code,
            ];
        }

        $payload = json_decode($body, true);

        if (JSON_ERROR_NONE !== json_last_error() || !is_array($payload) || empty($payload['success'])) {
            return [
                'success' => false,
                'message' => 'Invalid post payload for ' . $slug,
            ];
        }

        $content = (string) ($payload['content'] ?? '');

        if (empty(trim($content))) {
            return [
                'success' => false,
                'message' => 'Post content is empty for ' . $slug,
            ];
        }

        if ($uploads_updated) {
            $content = $this->runner_replace_media_urls($content);
        }

        $content = $this->runner_replace_demo_urls($content, $site_url);

        $existing = get_page_by_path($slug, OBJECT, 'post');

        $post_data = [
            'post_title'    => wp_strip_all_tags($title),
            'post_name'     => sanitize_title($slug),
            'post_content'  => wp_slash($content),
            'post_status'   => 'publish',
            'post_type'     => 'post',
            'post_date'     => current_time('mysql'),
            'post_date_gmt' => current_time('mysql', 1),
        ];

        if ($existing && !empty($existing->ID)) {
            $post_data['ID'] = $existing->ID;
            $post_id         = wp_update_post($post_data, true);
        } else {
            $post_id = wp_insert_post($post_data, true);
        }

        if (is_wp_error($post_id)) {
            return [
                'success' => false,
                'message' => $post_id->get_error_message(),
            ];
        }

        if (!empty($template)) {
            update_post_meta($post_id, '_wp_page_template', $template);
        }

        update_post_meta($post_id, 'fb_page_assets_generation', 'compiling');

        if (class_exists('FrontisBlocks\Utils\Helper')) {
            Helper::insert_job($post_id, $title . '-' . $post_id);
        }

        return [
            'success' => true,
            'post_id' => $post_id,
        ];
    }

    // =========================================================================
    // CONTENT HELPERS
    // =========================================================================

    private function get_demo_site_url(array $state): string
    {
        $template_data = is_array($state['template_data'] ?? null) ? $state['template_data'] : [];

        $site_url = $template_data['preview_url'] ?? ($state['site_url'] ?? '');

        return esc_url_raw($site_url);
    }

    private function runner_fetch_remote_templates(string $site_url): array
    {
        if (empty($site_url)) {
            return [];
        }

        $remote_url = untrailingslashit($site_url) . '/wp-json/gb/v1/templates';

        $response = wp_remote_get($remote_url, [
            'timeout' => 90,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        if (is_wp_error($response)) {
            error_log('FB Import: Templates REST failed: ' . $response->get_error_message());
            return [];
        }

        $status = wp_remote_retrieve_response_code($response);
        $body   = wp_remote_retrieve_body($response);

        if (200 !== $status || empty($body)) {
            error_log('FB Import: Templates REST HTTP ' . $status . ' for ' . $remote_url);
            return [];
        }

        $payload = json_decode($body, true);

        if (JSON_ERROR_NONE !== json_last_error() || !is_array($payload)) {
            error_log('FB Import: Invalid JSON from templates REST: ' . $remote_url);
            return [];
        }

        if (empty($payload['success']) || empty($payload['templates']) || !is_array($payload['templates'])) {
            return [];
        }

        return $payload['templates'];
    }

    private function runner_replace_media_urls(string $content): string
    {
        if (empty($content)) {
            return $content;
        }

        $regex = '/https?(?::|\\\\:)\/\/(?:[^"\'\s>]+?)(?:wp-content(?:\/|\\\\\/)uploads(?:\/|\\\\\/))([^"\'\s>]+)/i';

        preg_match_all($regex, $content, $matches);

        if (empty($matches[0])) {
            return $content;
        }

        $found_urls        = array_unique($matches[0]);
        $upload_dir        = wp_upload_dir();
        $local_upload_base = trailingslashit($upload_dir['baseurl']);

        foreach ($found_urls as $original_url) {
            $is_escaped = strpos($original_url, '\/') !== false;
            $search_str = $is_escaped ? 'wp-content\/uploads\/' : 'wp-content/uploads/';
            $pos        = strpos($original_url, $search_str);

            if ($pos === false) {
                continue;
            }

            $relative_path = substr($original_url, $pos + strlen($search_str));
            $relative_path = rtrim($relative_path, '"\'\\ ');
            $relative_path = preg_replace('/^sites(?:\/|\\\\\/)\d+(?:\/|\\\\\/)/', '', $relative_path);
            $local_url     = $local_upload_base . $relative_path;

            if ($is_escaped) {
                $local_url = str_replace('/', '\/', $local_url);
            }

            $content = str_replace($original_url, $local_url, $content);
        }

        return $content;
    }

    private function runner_replace_demo_urls(string $content, string $site_url): string
    {
        if (empty($content) || empty($site_url)) {
            return $content;
        }

        $demo_url         = trailingslashit($site_url);
        $escaped_demo_url = str_replace('/', '\/', $demo_url);

        $content = str_replace($demo_url, '/', $content);
        $content = str_replace($escaped_demo_url, '\/', $content);

        $content = preg_replace(
            '/(wp-content(?:\/|\\\\\/)uploads(?:\/|\\\\\/))sites(?:\/|\\\\\/)\d+(?:\/|\\\\\/)/i',
            '$1',
            $content
        );

        return $content;
    }

    private function runner_clean_navigation_block_content(string $content): string
    {
        if (empty($content)) {
            return $content;
        }

        $content = preg_replace('/("kind"\s*:\s*)"post-type"/', '$1"custom"', $content);
        $content = preg_replace('/(\\\\"kind\\\\"\\s*:\\s*)\\\\"post-type\\\\"/', '$1\\"custom\\"', $content);

        $content = preg_replace('/"id"\s*:\s*\d+\s*,?/', '', $content);
        $content = preg_replace('/\\\\"id\\\\"\\s*:\\s*\\d+\\s*,?/', '', $content);

        $content = preg_replace('/"type"\s*:\s*"[^"]*"\s*,?/', '', $content);
        $content = preg_replace('/\\\\"type\\\\"\\s*:\\s*\\\\"[^"]*\\\\"\\s*,?/', '', $content);

        $content = preg_replace('/,\s*}/', '}', $content);
        $content = preg_replace('/,\s*\\\\}/', '\\}', $content);

        return $content;
    }

    private function runner_replace_navigation_refs(string $content, array $mapping): string
    {
        foreach ($mapping as $old => $new) {
            $old_str = preg_quote((string) $old, '/');
            $content = preg_replace('/((\\\\*)"ref"(\\\\*)\s*:\s*)' . $old_str . '\b/', '${1}' . $new, $content);
        }

        return $content;
    }

    private function runner_replace_theme_refs(string $content): string
    {
        $theme = get_stylesheet();

        return preg_replace(
            '/((\\\\*)"theme"(\\\\*)\s*:\s*(\\\\*)")[^"\\\\]*(\\\\*")/',
            '${1}' . $theme . '${5}',
            $content
        );
    }

    // =========================================================================
    // STATE HELPERS
    // =========================================================================

    private static function get_state(): ?array
    {
        $state = get_option(self::OPTION_KEY, null);

        return is_array($state) ? $state : null;
    }

    private static function save_state(array $state): void
    {
        update_option(self::OPTION_KEY, $state, false);
    }

    private static function schedule_next(): void
    {
        if (!wp_next_scheduled(self::CRON_HOOK)) {
            wp_schedule_single_event(time() + 1, self::CRON_HOOK);
        }

        spawn_cron();
    }
}