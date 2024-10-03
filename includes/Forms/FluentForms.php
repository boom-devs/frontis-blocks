<?php

namespace FrontisBlocks\Forms;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FluentForm\App\Helpers\Helper as FluentFormHelper;

defined('ABSPATH') || exit;

class FluentForms
{
	use Singleton;

	public function __construct() {

	}

	/**
	 * Get form meta using FluentForm Helpers.
	 *
	 * @param mixed $id
	 *
	 * @return mixed
	 *
	 * @suppress PHP0413
	 */
	public static function get_form_meta( $id )
	{
		return FluentFormHelper::getFormMeta( $id, 'template_name' );
	}

	public static function check_enable()
	{
		$active_plugins = Helper::get_active_plugin_list();
		if ( in_array( 'fluentform/fluentform.php', $active_plugins ) ) {
			return true;
		}
		return false;
	}

	public static function form_list() {
		 $options = [  ];

		if ( defined( 'FLUENTFORM' ) ) {
			global $wpdb;
			$options[ 0 ][ 'value' ] = '';
			$options[ 0 ][ 'label' ] = __( 'Select a form', 'frontis-blocks' );
			$result                  = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}fluentform_forms" );
			if ( $result ) {
				foreach ( $result as $key => $form ) {
					$options[ $key + 1 ][ 'value' ] = $form->id;
					$options[ $key + 1 ][ 'label' ] = $form->title;
					$options[ $key + 1 ][ 'attr' ]  = self::get_form_meta( $form->id );
				}
			}
		}
		return $options;
	}
}
