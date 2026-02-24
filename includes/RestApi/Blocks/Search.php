<?php

namespace FrontisBlocks\RestApi\Blocks;

if (!defined('ABSPATH')) {
    exit;
}

class Search
{
    private static $instance = null;

    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function __construct()
    {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    public function register_routes()
    {
        register_rest_route('frontis-blocks/v1', '/search', [
            'methods'             => \WP_REST_Server::READABLE, // GET
            'callback'            => [$this, 'handle_search'],
            'permission_callback' => '__return_true', // public endpoint
            'args'                => [
                'query' => [
                    'required'          => true,
                    'type'              => 'string',
                    'sanitize_callback' => 'sanitize_text_field',
                    'validate_callback' => function ($value) {
                        return strlen($value) >= 2;
                    },
                ],
            ],
        ]);
    }

    public function handle_search(\WP_REST_Request $request)
    {
        $search_term = $request->get_param('query');

        $query = new \WP_Query([
            's'              => $search_term,
            'post_status'    => 'publish',
            'posts_per_page' => 8,
            'post_type'      => ['post', 'page'],
            'no_found_rows'  => true,
        ]);

        $results = [];

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();

                $thumbnail = get_the_post_thumbnail_url(get_the_ID(), 'thumbnail');

                $results[] = [
                    'id'        => get_the_ID(),
                    'title'     => get_the_title(),
                    'permalink' => get_permalink(),
                    'excerpt'   => wp_trim_words(get_the_excerpt(), 12, '...'),
                    'thumbnail' => $thumbnail ?: '',
                    'type'      => get_post_type(),
                    'date'      => get_the_date('M j, Y'),
                ];
            }
            wp_reset_postdata();
        }

        return rest_ensure_response(['results' => $results]);
    }
}