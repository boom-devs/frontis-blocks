<?php

namespace FrontisBlocks\Forms;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

defined('ABSPATH') || exit;

class ContactForms7
{
	use Singleton;

	public static function check_enable()
	{
		$active_plugins = Helper::get_active_plugin_list();
		if ( in_array( 'contact-form-7/wp-contact-form-7.php', $active_plugins ) ) {
			return true;
		}
		return false;
	}

	public static function form_list() {
		global $wpdb;

	 	$options = [  ];
		$options[ 0 ][ 'value' ] = '';
		$options[ 0 ][ 'label' ] = __( 'Select a form', 'frontis-blocks' );
		$html_form = [ ];

		$result = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT * FROM {$wpdb->prefix}posts WHERE post_type = %s AND post_status = %s",
                'wpcf7_contact_form',
                'publish'
            )
        );

		if ( $result ) {
			foreach ( $result as $key => $form ) {
                $options[$key + 1]['value'] = $form->ID;
                $options[$key + 1]['label'] = $form->post_title;
			}
		}

		return $options;
	}

	public static function wf7_form_html() {
    		global $wpdb;

    	 	$options = [  ];

    		$result = $wpdb->get_results(
                $wpdb->prepare(
                    "SELECT * FROM {$wpdb->prefix}posts WHERE post_type = %s AND post_status = %s",
                    'wpcf7_contact_form',
                    'publish'
                )
            );

    		if ( $result ) {
    			foreach ( $result as $key => $form ) {
    				$contact_7_html = do_shortcode('[contact-form-7 id="' . $form->ID . '" title="' . $form->post_title . '"]');
                    $options[$form->ID] = $contact_7_html;
    			}
    		}

    		return $options;
    	}
}
