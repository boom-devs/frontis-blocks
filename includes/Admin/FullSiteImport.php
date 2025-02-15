<?php
namespace FrontisBlocks\Admin;

class FullSiteImport {
    private static $instance = null;
    private $demo_data_dir;
    private $imported_posts = [];
    
    private function __construct() {
        $this->demo_data_dir = WP_PLUGIN_DIR . '/frontis-blocks/demo-data/';
        
        // Register AJAX action for logged-in users
        add_action('wp_ajax_fb_import_site_demo_data', array($this, 'import_site_demo_data'));
        
        // Add nonce for security
        add_action('admin_enqueue_scripts', array($this, 'add_nonce'));
    }

    // Add this new method to provide the nonce
    public function add_nonce() {
        wp_localize_script('fb-import-site-demo-data', 'fbSiteImport', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('fb_import_site_demo_data')
        ));
    }

    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    // Prevent cloning of the instance
    public function __clone() {}

    // Prevent unserializing of the instance
    public function __wakeup() {}

    public function import_site_demo_data() {
        try {
            // Security check
            if (!wp_verify_nonce($_POST['security'], 'fb_import_site_demo_data')) {
                wp_send_json_error('Invalid security token.');
                return;
            }

            // Check if user has permission
            if (!current_user_can('edit_pages')) {
                wp_send_json_error('Insufficient permissions.');
                return;
            }

            // Start transaction
            global $wpdb;
            $wpdb->query('START TRANSACTION');

            // Load site structure from JSON
            $site_structure = $this->load_site_structure();
            
            // Clear existing demo content (optional)
            $this->clear_existing_demo_content();

            // Import pages
            foreach ($site_structure['pages'] as $page_data) {
                $imported_page_id = $this->import_single_page($page_data);
                
                if (is_wp_error($imported_page_id)) {
                    throw new Exception('Failed to import page: ' . $imported_page_id->get_error_message());
                }
                
                $this->imported_posts[$page_data['slug']] = $imported_page_id;
            }

            // Update menu structure
            if (!empty($site_structure['menus'])) {
                $this->import_menus($site_structure['menus']);
            }

            // Update homepage settings
            if (!empty($site_structure['homepage'])) {
                update_option('page_on_front', $this->imported_posts[$site_structure['homepage']]);
                update_option('show_on_front', 'page');
            }

            $wpdb->query('COMMIT');

            wp_send_json_success([
                'message' => 'Site demo data imported successfully!',
                'redirect_url' => home_url(),
                'imported_pages' => count($this->imported_posts)
            ]);

        } catch (Exception $e) {
            global $wpdb;
            $wpdb->query('ROLLBACK');
            wp_send_json_error('Error importing site demo: ' . $e->getMessage());
        }
    }

    private function load_site_structure() {
        $structure_file = $this->demo_data_dir . 'site-structure.json';
        if (!file_exists($structure_file)) {
            throw new Exception('Site structure file not found.');
        }
        
        $json_data = file_get_contents($structure_file);
        return json_decode($json_data, true);
    }

    private function import_single_page($page_data) {
        // Load page content from separate JSON file
        $content_file = $this->demo_data_dir . 'pages/' . $page_data['content_file'];
        if (!file_exists($content_file)) {
            throw new Exception("Content file not found: {$page_data['content_file']}");
        }

        $content = file_get_contents($content_file);
        $blocks = json_decode($content, true);
        
        $post_data = [
            'post_title' => $page_data['title'],
            'post_name' => $page_data['slug'],
            'post_content' => serialize_blocks($blocks),
            'post_status' => 'publish',
            'post_type' => 'page',
            'post_author' => get_current_user_id()
        ];

        // Set page template if specified
        if (!empty($page_data['template'])) {
            $post_data['page_template'] = $page_data['template'];
        }

        // Set parent page if specified
        if (!empty($page_data['parent'])) {
            $post_data['post_parent'] = $this->imported_posts[$page_data['parent']] ?? 0;
        }

        $page_id = wp_insert_post($post_data, true);

        if (!is_wp_error($page_id)) {
            // Import page meta data
            if (!empty($page_data['meta'])) {
                foreach ($page_data['meta'] as $meta_key => $meta_value) {
                    update_post_meta($page_id, $meta_key, $meta_value);
                }
            }
        }

        return $page_id;
    }

    private function import_menus($menus_data) {
        foreach ($menus_data as $menu_location => $menu_items) {
            // Create menu
            $menu_name = ucwords(str_replace('-', ' ', $menu_location)) . ' Menu';
            $menu_id = wp_create_nav_menu($menu_name);

            if (is_wp_error($menu_id)) {
                continue;
            }

            // Add menu items
            foreach ($menu_items as $item) {
                $this->add_menu_item($menu_id, $item);
            }

            // Assign menu to location
            $locations = get_theme_mod('nav_menu_locations');
            $locations[$menu_location] = $menu_id;
            set_theme_mod('nav_menu_locations', $locations);
        }
    }

    private function add_menu_item($menu_id, $item_data, $parent_id = 0) {
        $item_url = !empty($item_data['custom_url']) 
            ? $item_data['custom_url'] 
            : get_permalink($this->imported_posts[$item_data['page_slug']] ?? 0);

        $item = wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' => $item_data['title'],
            'menu-item-url' => $item_url,
            'menu-item-status' => 'publish',
            'menu-item-parent-id' => $parent_id,
            'menu-item-position' => $item_data['order'] ?? 0
        ));

        // Recursively add child items
        if (!empty($item_data['children'])) {
            foreach ($item_data['children'] as $child_item) {
                $this->add_menu_item($menu_id, $child_item, $item);
            }
        }
    }

    private function clear_existing_demo_content() {
        // Implement if needed - be careful with this!
        // Could delete previously imported demo content
        // based on some identifier (meta key, etc.)
    }
}