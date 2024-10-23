<?php

namespace FrontisBlocks\Admin;

use FrontisBlocks\Traits\Singleton;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('init', [$this, 'frontis_custom_icons']);
        add_action('add_meta_boxes', [$this, 'frontis_uploads_meta']);
    }

    function frontis_custom_icons() {

    	$labels = array(
    		'name'                  => _x( 'Custom Icons', 'Post Type General Name', 'frontis-blocks' ),
    		'singular_name'         => _x( 'Custom Icons', 'Post Type Singular Name', 'frontis-blocks' ),
    		'menu_name'             => __( 'Custom Icons', 'frontis-blocks' ),
    		'name_admin_bar'        => __( 'Custom Icon', 'frontis-blocks' ),
    		'archives'              => __( 'Item Archives', 'frontis-blocks' ),
    		'attributes'            => __( 'Item Attributes', 'frontis-blocks' ),
    		'parent_item_colon'     => __( 'Parent Item:', 'frontis-blocks' ),
    		'all_items'             => __( 'All Items', 'frontis-blocks' ),
    		'add_new_item'          => __( 'Add New Item', 'frontis-blocks' ),
    		'add_new'               => __( 'Add New', 'frontis-blocks' ),
    		'new_item'              => __( 'New Item', 'frontis-blocks' ),
    		'edit_item'             => __( 'Edit Item', 'frontis-blocks' ),
    		'update_item'           => __( 'Update Item', 'frontis-blocks' ),
    		'view_item'             => __( 'View Item', 'frontis-blocks' ),
    		'view_items'            => __( 'View Items', 'frontis-blocks' ),
    		'search_items'          => __( 'Search Item', 'frontis-blocks' ),
    		'not_found'             => __( 'Icons not found', 'frontis-blocks' ),
    		'not_found_in_trash'    => __( 'Not found in Trash', 'frontis-blocks' ),
    		'featured_image'        => __( 'Featured Image', 'frontis-blocks' ),
    		'set_featured_image'    => __( 'Set featured image', 'frontis-blocks' ),
    		'remove_featured_image' => __( 'Remove featured image', 'frontis-blocks' ),
    		'use_featured_image'    => __( 'Use as featured image', 'frontis-blocks' ),
    		'insert_into_item'      => __( 'Insert into item', 'frontis-blocks' ),
    		'uploaded_to_this_item' => __( 'Uploaded to this item', 'frontis-blocks' ),
    		'items_list'            => __( 'Items list', 'frontis-blocks' ),
    		'items_list_navigation' => __( 'Items list navigation', 'frontis-blocks' ),
    		'filter_items_list'     => __( 'Filter items list', 'frontis-blocks' ),
    	);
    	$args = array(
    		'label'                 => __( 'Custom Icons', 'frontis-blocks' ),
    		'description'           => __( 'Custom Icons Description', 'frontis-blocks' ),
    		'labels'                => $labels,
    		'supports'              => array( 'title' ),
    		'hierarchical'          => false,
    		'public'                => false,
    		'show_ui'               => true,
    		'show_in_menu'          => false,
    		'menu_position'         => 5,
    		'show_in_admin_bar'     => false,
    		'show_in_nav_menus'     => false,
    		'can_export'            => true,
    		'has_archive'           => false,
    		'exclude_from_search'   => false,
    		'publicly_queryable'    => false,
    		'capability_type'       => 'page',
    		'show_in_rest'          => true,
    	);
    	register_post_type( 'frotis_icons', $args );

    }

    public function add_menu_page(){
        add_menu_page(
            __('Frontis Blocks', 'frontis-blocks'),
            __('Frontis Blocks', 'frontis-blocks'),
            'manage_options',
            'frontis-blocks',
            array( $this, 'display_page' ),
            'dashicons-admin-generic',
            30
        );

        // Submenu Custom icons
		add_submenu_page(
			'frontis-blocks',
			__('Custom Icons', 'frontis-blocks'),
			__('Custom Icons', 'frontis-blocks'),
			'manage_options',
			'/edit.php?post_type=frotis_icons',
			''
		);
    }

	// Uploading system for custom icons
	public function frontis_uploads_meta() {
		add_meta_box(
			'frontis_custom_icons_uploader',
			__('Custom Icons', 'frontis-blocks'),
			[$this, 'frontis_custom_icons_up_fn'],
			'frotis_icons',
			'normal'
		);
	}

	public function frontis_custom_icons_up_fn() {
		global $post, $meta_boxes_bp, $key_bp;
            ?>

			<div class="parent-div">
				<div id="fileUpload"></div>
			</div>
        <?php
	}


    public function display_page(){
        echo "<div id='frontis-blocks-admin'></div>";
    }

    public function enqueue_styles($hook){
    	wp_enqueue_script('frontis-blocks-admin-uploader', FB_PLUGIN_URL . 'assets/fileUpload.js', 'jQuery', '1.0.0', true);
    	wp_enqueue_script('frontis-blocks-admin-custom', FB_PLUGIN_URL . 'assets/custom.js', 'jQuery', '1.0.0', true);

        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }
        $script_path = FB_PLUGIN_PATH . 'assets/admin/index.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        wp_enqueue_script('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.js', $script_asset['dependencies'], '1.0.0', true);
    }

    public function enqueue_scripts($hook){
    	wp_enqueue_style('frontis-blocks-uploader', FB_PLUGIN_URL . 'assets/fileUpload.css', array(), '1.0.0');

        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }

        wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.css', array(), '1.0.0');
    }
}
