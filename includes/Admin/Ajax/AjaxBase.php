<?php 

namespace FrontisBlocks\Admin\Ajax;

abstract class AjaxBase {
    /**
     * Ajax events prefix.
     *
     * @var string
     */
    protected $prefix = 'fb';

    /**
     * Ajax events to be registered.
     *
     * @var array
     */
    protected $ajax_events = [];

    /**
     * Error messages.
     *
     * @var array
     */
    protected $errors = [
        'invalid_nonce' => 'Invalid security token sent.',
        'no_permission' => 'You do not have permission to do that.',
        'invalid_data'  => 'Invalid data provided.',
    ];

    /**
     * Constructor.
     */
    public function __construct() {
        
    }

    /**
     * Initialize Ajax events.
     *
     * @return void
     */
    public function init_ajax_events() {
        if (!empty($this->ajax_events)) {
            foreach ($this->ajax_events as $ajax_event) {
                add_action('wp_ajax_' . $this->prefix . '_' . $ajax_event, array($this, $ajax_event));
            }
        }
    }

    /**
     * Get error message.
     *
     * @param string $key Error key.
     * @return string
     */
    protected function get_error_msg($key) {
        return isset($this->errors[$key]) ? $this->errors[$key] : 'An unknown error occurred.';
    }
}
