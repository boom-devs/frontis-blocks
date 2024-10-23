<?php

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;

class GlobalSettings extends AjaxBase {

    use Singleton;

    public function register_global_settings_events() {
        $events = [
            'update_global_colors',
        ];

        $this->init_ajax_events($events);
    }

}