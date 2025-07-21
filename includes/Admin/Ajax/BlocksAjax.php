<?php

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;

/**
 * Return blocks settings content
 *
 * @package FrontisBlocks
 */
class BlocksAjax extends AjaxBase
{

	use Singleton;

	public function __construct()
	{

	}
	/**
	 * register_global_settings_events
	 *
	 * @return void
	 */
	public function register_blocks_ajax_events()
	{
		$events = [
			'get_post'
		];

		$this->init_ajax_events($events);
	}

	/**
	 * handle_option_update
	 *
	 * @param string $option_name
	 * @param string $type
	 * @return void
	 */
	private function check_authorized()
	{
		$this->validate_nonce();
		$this->validate_permissions();
	}

	/**
	 * validate_nonce
	 *
	 * @return void
	 */
	private function validate_nonce()
	{
		if (!wp_verify_nonce($_POST['nonce'], 'fb_blocks_ajax')) {
			wp_send_json_error('Invalid nonce');
		}
	}

	/**
	 * check permissions
	 *
	 * @return void
	 */
	private function validate_permissions()
	{
		if (!current_user_can('manage_options')) {
			wp_send_json_error('Insufficient permissions');
		}
	}

	public function get_post() {
		$this->check_authorized();


	}
}
