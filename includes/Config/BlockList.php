<?php

namespace FrontisBlocks\Config;

use FrontisBlocks\Traits\Singleton;

class BlockList {
    use Singleton;

    private $blocks = [];

    public function __construct() {
        $this->init_blocks();
    }

    private function init_blocks() {
        $this->blocks = [
            'advanced-heading' => [
                'slug'      => 'advanced-heading',
                'title'     => 'Advanced Heading',
                'package'   => 'free',
                'category'  => 'post',
                'badge'     => 'freemium',
                'status'    => 'active',
            ],
            'container' => [
                'slug'      => 'container',
                'title'     => 'Container',
                'package'   => 'free',
                'category'  => 'layout',
                'badge'     => 'free',
                'status'    => 'active',
            ],
            // 'column' => [
            //     'slug'      => 'column',
            //     'title'     => 'Column',
            //     'package'   => 'free',
            //     'category'  => 'layout',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'advanced-image' => [
            //     'slug'      => 'advanced-image',
            //     'title'     => 'Advanced Image',
            //     'package'   => 'free',
            //     'category'  => 'media',
            //     'badge'     => 'freemium',
            //     'status'    => 'active',
            // ],
            // 'image-gallery' => [
            //     'slug'      => 'image-gallery',
            //     'title'     => 'Image Gallery',
            //     'package'   => 'free',
            //     'category'  => 'media',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'info-box' => [
            //     'slug'      => 'info-box',
            //     'title'     => 'Info Box',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'icon-box' => [
            //     'slug'      => 'icon-box',
            //     'title'     => 'Icon Box',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            'advanced-button' => [
                'slug'      => 'advanced-button',
                'title'     => 'Advanced Button',
                'package'   => 'free',
                'category'  => 'post',
                'badge'     => 'free',
                'status'    => 'active',
            ],
            // 'dual-button' => [
            //     'slug'      => 'dual-button',
            //     'title'     => 'Dual Button',
            //     'package'   => 'free',
            //     'category'  => 'general',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'advanced-navigation' => [
            //     'slug'      => 'advanced-navigation',
            //     'title'     => 'Advanced Navigation',
            //     'package'   => 'pro',
            //     'category'  => 'navigation',
            //     'badge'     => 'pro',
            //     'status'    => 'active',
            // ],
            // 'advanced-video' => [
            //     'slug'      => 'advanced-video',
            //     'title'     => 'Advanced Video',
            //     'package'   => 'free',
            //     'category'  => 'media',
            //     'badge'     => 'freemium',
            //     'status'    => 'active',
            // ],
            // 'countdown' => [
            //     'slug'      => 'countdown',
            //     'title'     => 'Countdown',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'flip-box' => [
            //     'slug'      => 'flip-box',
            //     'title'     => 'Flip Box',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            'features-list' => [
                'slug'      => 'features-list',
                'title'     => 'Features List',
                'package'   => 'free',
                'category'  => 'post',
                'badge'     => 'free',
                'status'    => 'active',
            ],
            'testimonial' => [
                'slug'      => 'testimonial',
                'title'     => 'Testimonial',
                'package'   => 'free',
                'category'  => 'content',
                'badge'     => 'free',
                'status'    => 'active',
            ],
            // 'counter-number' => [
            //     'slug'      => 'counter-number',
            //     'title'     => 'Counter Number',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'fluent-form' => [
            //     'slug'      => 'fluent-form',
            //     'title'     => 'Fluent Form',
            //     'package'   => 'free',
            //     'category'  => 'form',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'contact-form-7' => [
            //     'slug'      => 'contact-form-7',
            //     'title'     => 'Contact Form 7',
            //     'package'   => 'free',
            //     'category'  => 'form',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'call-to-action' => [
            //     'slug'      => 'call-to-action',
            //     'title'     => 'Call to Action',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'pricing-table' => [
            //     'slug'      => 'pricing-table',
            //     'title'     => 'Pricing Table',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'woo-product-grid' => [
            //     'slug'      => 'woo-product-grid',
            //     'title'     => 'Woo Product Grid',
            //     'package'   => 'free',
            //     'category'  => 'woocommerce',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            'social-icons' => [
                'slug'      => 'social-icons',
                'title'     => 'Social Icons',
                'package'   => 'free',
                'category'  => 'social',
                'badge'     => 'free',
                'status'    => 'active',
            ],
            'post-grid' => [
                'slug'      => 'post-grid',
                'title'     => 'Post Grid',
                'package'   => 'free',
                'category'  => 'post',
                'badge'     => 'free',
                'status'    => 'active',
            ],
            // 'team-member' => [
            //     'slug'      => 'team-member',
            //     'title'     => 'Team Member',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
            // 'slider' => [
            //     'slug'      => 'slider',
            //     'title'     => 'Slider',
            //     'package'   => 'free',
            //     'category'  => 'content',
            //     'badge'     => 'free',
            //     'status'    => 'active',
            // ],
        ];

        $this->blocks = apply_filters('frontis/blocks/list', $this->blocks);
    }

    public function get_blocks() {
        return $this->blocks;
    }

    public function get_block($slug) {
        return isset($this->blocks[$slug]) ? $this->blocks[$slug] : null;
    }
}