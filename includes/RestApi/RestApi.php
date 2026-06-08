<?php
namespace FrontisBlocks\RestApi;

if (!defined('ABSPATH')) {
    exit;
}

use WP_REST_Response;
use WP_Error;
use WP_REST_Request;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;
use FrontisBlocks\RestApi\Blocks\PostGrid;
use FrontisBlocks\RestApi\Blocks\PostCategory;
use FrontisBlocks\RestApi\Blocks\Search;


class RestApi
{
    use Singleton;

    /**
     * Constructor.
     */
    public function __construct()
    {
        add_action('init', [$this, 'fb_init_rest_api_blocks']);
        add_filter('rest_post_query', [$this, 'fb_filter_rest_post_query'], 10, 2);
    }

    /**
     * Initialize the REST API blocks.
     */
    public function fb_init_rest_api_blocks()
    {
        PostGrid::get_instance();
        PostCategory::get_instance();
        Search::get_instance();
    }

    /**
     * Filter REST API post query arguments to support ignore_sticky.
     */
    public function fb_filter_rest_post_query($args, $request)
    {
        $ignore_sticky = $request->get_param('ignore_sticky');
        if (isset($ignore_sticky)) {
            $args['ignore_sticky_posts'] = filter_var($ignore_sticky, FILTER_VALIDATE_BOOLEAN);
        }
        return $args;
    }
}