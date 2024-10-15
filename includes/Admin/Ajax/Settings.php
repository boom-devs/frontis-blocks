<?php 

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;

class Settings extends AjaxBase {

    use Singleton;

    
    public function register_ajax_events() {
        $ajax_events = [
            'generate_assets',
        ];

        $this->init_ajax_events($ajax_events);
    }

    public function generate_assets() {
        
    }
}