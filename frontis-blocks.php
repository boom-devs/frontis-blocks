<?php

/**
 * Plugin Name:       Frontis Blocks – The Ultimate WordPress Block Plugin
 * Plugin URI:        https://wpmessiah.com/products/frontis-blocks/
 * Description:       The ultimate blocks library for Gutenberg editor.
 * Version:           1.1.0
 * Author:            WPmessiah
 * Author URI:        https://wpmessiah.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       frontis-blocks
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define things
define( 'FB_PLUGIN_FILE', __FILE__ );
define( 'PORTAL_API', 'https://template-library.boomdevshub.com' );
define( 'WORDPRESS_SYNC_API', 'https://frontis-sync.boomdevshub.com' );

/**
 * Autoloader
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Initialize plugin
 */
function frontis_blocks(){
    FrontisBlocks\Activator\Activator::get_instance();
    FrontisBlocks\Plugin::get_instance();
}

frontis_blocks();



function find_navigation_blocks( $content_text ) {
    // var_dump($html);

    var_dump($content_text);


    $results = [];

    // Match: <!-- wp:navigation {"ref":123,...} /-->  or with inner blocks
    // $pattern = '/<!--\s*wp:navigation\s*(\{[^}]*\})?\s*-->/is';
    $pattern = '/<!--\s*wp:navigation\s*/i';

    if (preg_match_all($pattern, $content_text, $wp_post_content_matchs) > 0) {
        var_dump(json_encode($wp_post_content_matchs));
        if(isset($wp_post_content_matchs[0])){
            
        }
    }

    // return $results;
}

$html_content = '<!-- wp:frontis-blocks/container {"p_block_id":"block-bd6aebd6-2b35-4d68-99a4-623326f20e54","blockStyle":"#block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{max-width: 100%;width: 100%;padding: 10px;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54 {max-width: 100%;width: 100%;padding: 10px;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54 {max-width: 100%;width: 100%;padding: 10px;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-bd6aebd6-2b35-4d68-99a4-623326f20e54.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"directionDesktop":"row","containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"variationSelected":true,"isBlockRootParent":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-bd6aebd6-2b35-4d68-99a4-623326f20e54 alignfull frontis-blocks-is-root-container" id="block-bd6aebd6-2b35-4d68-99a4-623326f20e54"><div class="frontis-blocks-container-inner-blocks-wrap " id=""><!-- wp:frontis-blocks/container {"p_block_id":"block-ac44a291-0126-4c4e-9a52-d0dc11119e60","blockStyle":"#block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: flex-start;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{max-width: 25%;width: 100%;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{display: flex;flex-direction: row;align-items: center;justify-content: flex-start;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60 {max-width: 25%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-ac44a291-0126-4c4e-9a52-d0dc11119e60.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60 {max-width: 100%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","customWidth":{"Desktop":25,"Tablet":25,"Mobile":100},"globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"containerJustify":{"Desktop":"flex-start","Tablet":"","Mobile":""},"containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"widthSetByUser":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-ac44a291-0126-4c4e-9a52-d0dc11119e60 child " id="block-ac44a291-0126-4c4e-9a52-d0dc11119e60"><!-- wp:site-logo /--></div>
<!-- /wp:frontis-blocks/container -->

<!-- wp:frontis-blocks/container {"p_block_id":"block-13613bfd-5231-4669-b7dd-c697f27d5e11","blockStyle":"#block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{max-width: 50%;width: 100%;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{display: flex;flex-direction: row;align-items: center;justify-content: center;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11 {max-width: 50%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-13613bfd-5231-4669-b7dd-c697f27d5e11.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11 {max-width: 100%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","customWidth":{"Desktop":50,"Tablet":50,"Mobile":100},"globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"widthSetByUser":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-13613bfd-5231-4669-b7dd-c697f27d5e11 child " id="block-13613bfd-5231-4669-b7dd-c697f27d5e11"><!-- wp:navigation {"ref":1047,"metadata":{"ignoredHookedBlocks":["woocommerce/customer-account","woocommerce/mini-cart"]}} /-->

<!-- wp:navigation {"ref":1047,"metadata":{"ignoredHookedBlocks":["woocommerce/customer-account"]}} /--></div>
<!-- /wp:frontis-blocks/container -->

<!-- wp:frontis-blocks/container {"p_block_id":"block-de53b0da-1f6b-4924-9f6e-a537b357d233","blockStyle":"#block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-top svg{width: calc( 100% + 1.3px );} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-top .frontis-blocks-container__shape-fill{fill: #333;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-bottom svg{width: calc( 100% + 1.3px );} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 \u003e .frontis-blocks-container__shape-bottom .frontis-blocks-container__shape-fill{fill: #333;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233 .frontis-blocks-container__video-wrap video{opacity: 1;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{display: flex;flex-direction: row;align-items: center;justify-content: flex-end;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container:not(.frontis-blocks-is-root-container){margin-left: 0px;margin-right: 0px;} .wp-block-frontis-blocks-container.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{max-width: 25%;width: 100%;margin-top: 0px;margin-bottom: 0px;margin-left: 0px;margin-right: 0px;position: relative;border-width: 0px 0px 0px 0px;border-radius: ;} .wp-block-frontis-blocks-container.child.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{display: flex;flex-direction: row;align-items: center;justify-content: flex-end;flex-wrap: wrap;row-gap: 0px;column-gap: 0px;} false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1200px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}@media only screen and (max-width: 1024px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{order: initial;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233 {max-width: 25%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 1024px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 1024px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,1024px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}@media only screen and (max-width: 767px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container .block-editor-inner-blocks .block-editor-block-list__layout .wp-block[data-type=\u0022core/quote\u0022]{margin-inline-start: 0px;margin-inline-end: 0px;}}@media only screen and (max-width: 767px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { #block-de53b0da-1f6b-4924-9f6e-a537b357d233.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{order: initial;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233 {max-width: 100%;width: 100%;border-width: ;border-radius: ;}}@media only screen and (max-width: 767px) { .wp-block-frontis-blocks-container.child.frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233{flex-wrap: wrap;row-gap: 0px;column-gap: 0px;}}@media only screen and (max-width: 767px) { false.wp-block-frontis-blocks-container \u003e .frontis-blocks-container-inner-blocks-wrap{\u002d\u002dinner-content-custom-width: min(100vw,767px);max-width: var(\u002d\u002dinner-content-custom-width);width: 100%;margin-left: auto;margin-right: auto;}}","customWidth":{"Desktop":25,"Tablet":25,"Mobile":100},"globalRowGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalColumnGap":{"Desktop":"0","Tablet":"0","Mobile":"0"},"globalFullWidthContentBoxedWidth":{"Desktop":"1200","Tablet":"1024","Mobile":"767"},"containerJustify":{"Desktop":"flex-end","Tablet":"","Mobile":""},"containerGlobalPadding":{"Desktop":"10","Tablet":"10","Mobile":"10"},"widthSetByUser":true} -->
<div class="wp-block-frontis-blocks-container frontis-blocks-block-de53b0da-1f6b-4924-9f6e-a537b357d233 child " id="block-de53b0da-1f6b-4924-9f6e-a537b357d233"><!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Contact us</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:frontis-blocks/container --></div></div>
<!-- /wp:frontis-blocks/container -->';


// preg_match_all('/<!--\s*wp:navigation\s+(\{.+?\})\s*\/-->/', $html_content, $matches);
// $navigation_ids = [];
// if (!empty($matches[1])) {
//     foreach ($matches[1] as $json_string) {
//         $data = json_decode($json_string, true);
//         if (isset($data['ref'])) {
//             $navigation_ids[] = $data['ref'];
//         }
//     }
// }


// var_dump($navigation_ids);

// if(!empty($navigation_ids)) {

// }

// 1. MAIN MENU: Design Library
function design_library_menu() {
    add_menu_page(
        'Design Library',
        'Design Library',
        'edit_posts',
        'design-library',
        'design_library_dashboard',
        'dashicons-layout',
        26
    );

    // Submenus
    add_submenu_page('design-library', 'Templates', 'Templates', 'edit_posts', 'edit.php?post_type=dl_template');
    add_submenu_page('design-library', 'Patterns', 'Patterns', 'edit_posts', 'edit.php?post_type=dl_pattern');
    add_submenu_page('design-library', 'Pages', 'Pages', 'edit_posts', 'edit.php?post_type=dl_page');
}
add_action('admin_menu', 'design_library_menu');

// Dashboard Page
function design_library_dashboard() {
    ?>
    <div class="wrap">
        <h1>Design Library</h1>
        <p>Welcome to your design system. Manage reusable:</p>
        <div class="card" style="max-width: 600px; padding: 20px; margin: 20px 0;">
            <ul>
                <li><strong>Templates</strong> – Full-page layouts</li>
                <li><strong>Patterns</strong> – Reusable sections (hero, pricing, etc.)</li>
                <li><strong>Pages</strong> – Saved full pages</li>
            </ul>
        </div>
        <p>
            <a href="post-new.php?post_type=dl_template" class="button button-primary">+ Add Template</a>
            <a href="post-new.php?post_type=dl_pattern" class="button">+ Add Pattern</a>
            <a href="post-new.php?post_type=dl_page" class="button">+ Add Page</a>
        </p>
    </div>
    <?php
}

// 2. REGISTER 3 POST TYPES
function register_design_library_post_types() {

    // TEMPLATES
    register_post_type('dl_template', array(
        'labels' => array(
            'name' => 'Templates',
            'singular_name' => 'Template',
            'add_new' => 'Add Template',
            'add_new_item' => 'Add New Template',
            'edit_item' => 'Edit Template',
            'all_items' => 'All Templates'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_menu' => false,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-layout',
        'rewrite' => array('slug' => 'template'),
    ));

    // PATTERNS
    register_post_type('dl_pattern', array(
        'labels' => array(
            'name' => 'Patterns',
            'singular_name' => 'Pattern',
            'add_new' => 'Add Pattern',
            'add_new_item' => 'Add New Pattern',
            'edit_item' => 'Edit Pattern',
            'all_items' => 'All Patterns'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_menu' => false,
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-grid-view',
        'rewrite' => array('slug' => 'pattern'),
    ));

    // PAGES
    register_post_type('dl_page', array(
        'labels' => array(
            'name' => 'Pages',
            'singular_name' => 'Page',
            'add_new' => 'Add Page',
            'add_new_item' => 'Add New Page',
            'edit_item' => 'Edit Page',
            'all_items' => 'All Pages'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_menu' => false,
        'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-admin-page',
        'rewrite' => array('slug' => 'saved-page'),
        'hierarchical' => true,
    ));
}
add_action('init', 'register_design_library_post_types');

// 3. REGISTER TAXONOMIES FOR EACH POST TYPE

function register_design_library_taxonomies() {

    // TEMPLATE CATEGORIES & TAGS
    register_taxonomy('dl_template_cat', 'dl_template', array(
        'label' => 'Template Categories',
        'hierarchical' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));
    register_taxonomy('dl_template_tag', 'dl_template', array(
        'label' => 'Template Tags',
        'hierarchical' => false,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));

    // PATTERN CATEGORIES & TAGS
    register_taxonomy('dl_pattern_cat', 'dl_pattern', array(
        'label' => 'Pattern Categories',
        'hierarchical' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));
    register_taxonomy('dl_pattern_tag', 'dl_pattern', array(
        'label' => 'Pattern Tags',
        'hierarchical' => false,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));

    // PAGE CATEGORIES & TAGS
    register_taxonomy('dl_page_cat', 'dl_page', array(
        'label' => 'Page Categories',
        'hierarchical' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));
    register_taxonomy('dl_page_tag', 'dl_page', array(
        'label' => 'Page Tags',
        'hierarchical' => false,
        'show_in_rest' => true,
        'show_admin_column' => true,
    ));
}
add_action('init', 'register_design_library_taxonomies');

// 4. ADD QUICK LINKS IN SUBMENU (Optional)
function add_design_library_quick_links() {
    add_submenu_page(
        'design-library',
        'Add New Template',
        '+ Add Template',
        'edit_posts',
        'post-new.php?post_type=dl_template'
    );
    add_submenu_page(
        'design-library',
        'Add New Pattern',
        '+ Add Pattern',
        'edit_posts',
        'post-new.php?post_type=dl_pattern'
    );
    add_submenu_page(
        'design-library',
        'Add New Page',
        '+ Add Page',
        'edit_posts',
        'post-new.php?post_type=dl_page'
    );
}
add_action('admin_menu', 'add_design_library_quick_links', 99);

function dl_enqueue_metabox_assets($hook) {
    global $post;
    if (!in_array($hook, ['post.php', 'post-new.php'])) return;
    if (!in_array($post->post_type, ['dl_template', 'dl_pattern', 'dl_page'])) return;

    wp_enqueue_style('dl-metabox', get_stylesheet_directory_uri() . '/dl-metabox.css', [], '1.0');
    wp_enqueue_script('dl-metabox', get_stylesheet_directory_uri() . '/dl-metabox.js', ['jquery'], '1.0', true);
}
add_action('admin_enqueue_scripts', 'dl_enqueue_metabox_assets');

// Create CSS file: wp-content/themes/your-theme/dl-metabox.css
function dl_create_metabox_css() {
    $css = "
    .dl-metabox {
        background: #fff;
        border: 1px solid #c3c4c7;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        margin: 20px 0;
        overflow: hidden;
    }
    .dl-metabox h2 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        margin: 0;
        padding: 16px 20px;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }
    .dl-metabox .inside {
        padding: 20px;
    }
    .dl-field {
        margin-bottom: 18px;
    }
    .dl-field label {
        display: block;
        font-weight: 600;
        margin-bottom: 6px;
        color: #1d2327;
    }
    .dl-field input[type=text],
    .dl-field textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #8c8f94;
        border-radius: 4px;
        font-size: 14px;
    }
    .dl-field textarea {
        min-height: 100px;
        font-family: Consolas, monospace;
    }
    .dl-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .dl-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .dl-slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }
    .dl-slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    input:checked + .dl-slider {
        background-color: #667eea;
    }
    input:checked + .dl-slider:before {
        transform: translateX(26px);
    }
    .dl-valid { border-color: #46b450; }
    .dl-invalid { border-color: #dc3232; }
    .dl-hint {
        font-size: 12px;
        color: #646970;
        margin-top: 4px;
    }
    ";
    file_put_contents(get_stylesheet_directory() . '/dl-metabox.css', $css);
}
add_action('after_switch_theme', 'dl_create_metabox_css');

// JS Validation
function dl_create_metabox_js() {
    $js = "
    jQuery(function($){
        $('#dl_preview_url').on('blur', function(){
            var url = $(this).val();
            var valid = /^https?:\\/\\/.+/i.test(url) || url === '';
            $(this).toggleClass('dl-valid', valid).toggleClass('dl-invalid', !valid && url);
        });
    });
    ";
    file_put_contents(get_stylesheet_directory() . '/dl-metabox.js', $js);
}
add_action('after_switch_theme', 'dl_create_metabox_js');

// Register Metaboxes
function dl_register_metaboxes() {
    // Common: Preview + Premium + JSON
    add_meta_box(
        'dl_common_settings',
        'Design Settings',
        'dl_common_metabox_callback',
        ['dl_template', 'dl_pattern', 'dl_page'],
        'normal',
        'high'
    );

    // Template Only: Advanced
    add_meta_box(
        'dl_template_advanced',
        'Template Builder',
        'dl_template_advanced_callback',
        'dl_template',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'dl_register_metaboxes');

// Common Metabox
function dl_common_metabox_callback($post) {
    wp_nonce_field('dl_save_meta', 'dl_nonce');
    $preview_url = get_post_meta($post->ID, '_dl_preview_url', true);
    $is_premium = get_post_meta($post->ID, '_dl_premium', true);
    $patterns_json = get_post_meta($post->ID, '_dl_patterns_json', true);
    ?>
    <div class="dl-metabox">
        <h2>Design Controls</h2>
        <div class="inside">

            <div class="dl-field">
                <label>Preview URL</label>
                <input type="text" id="dl_preview_url" name="dl_preview_url" value="<?php echo esc_attr($preview_url); ?>" placeholder="https://yoursite.com/preview/hero">
                <div class="dl-hint">Live demo link. Must start with http:// or https://</div>
            </div>

            <div class="dl-field">
                <label>
                    <span>Premium Design</span>
                    <label class="dl-switch">
                        <input type="checkbox" name="dl_premium" <?php checked($is_premium, 'yes'); ?>>
                        <span class="dl-slider"></span>
                    </label>
                </label>
            </div>

            <div class="dl-field">
                <label>Patterns JSON (Block Pattern Export)</label>
                <textarea name="dl_patterns_json" placeholder='{
  \"title\": \"Hero Banner\",
  \"categories\": [\"hero\"],
  \"content\": \"<!-- wp:cover ... -->\"
}'><?php echo esc_textarea($patterns_json); ?></textarea>
                <div class="dl-hint">Paste valid JSON for Gutenberg Block Pattern registration</div>
            </div>

        </div>
    </div>
    <?php
}

// Template Advanced Metabox
function dl_template_advanced_callback($post) {
    $uploads_url = get_post_meta($post->ID, '_dl_uploads_url', true);
    $header = get_post_meta($post->ID, '_dl_header', true);
    $footer = get_post_meta($post->ID, '_dl_footer', true);
    $wp_templates = get_post_meta($post->ID, '_dl_wp_templates', true);
    $pages_content = get_post_meta($post->ID, '_dl_pages_content', true);
    $posts_content = get_post_meta($post->ID, '_dl_posts_content', true);
    ?>
    <div class="dl-metabox">
        <h2>Template Builder (Full Site Editing)</h2>
        <div class="inside">

            <div class="dl-field">
                <label>Uploads URL (CDN)</label>
                <input type="text" name="dl_uploads_url" value="<?php echo esc_attr($uploads_url); ?>" placeholder="https://cdn.yoursite.com/uploads">
            </div>

            <div class="dl-field">
                <label>Header HTML/Blocks</label>
                <textarea name="dl_header" rows="4"><?php echo esc_textarea($header); ?></textarea>
            </div>

            <div class="dl-field">
                <label>Footer HTML/Blocks</label>
                <textarea name="dl_footer" rows="4"><?php echo esc_textarea($footer); ?></textarea>
            </div>

            <div class="dl-field">
                <label>WP Templates (template-parts)</label>
                <textarea name="dl_wp_templates" rows="6"><?php echo esc_textarea($wp_templates); ?></textarea>
                <div class="dl-hint">e.g. header-hero, footer-contact</div>
            </div>

            <div class="dl-field">
                <label>Pages Content (JSON)</label>
                <textarea name="dl_pages_content" rows="6"><?php echo esc_textarea($pages_content); ?></textarea>
            </div>

            <div class="dl-field">
                <label>Posts Archive Content</label>
                <textarea name="dl_posts_content" rows="6"><?php echo esc_textarea($posts_content); ?></textarea>
            </div>

        </div>
    </div>
    <?php
}

// Save Meta
function dl_save_metaboxes($post_id) {
    if (!isset($_POST['dl_nonce']) || !wp_verify_nonce($_POST['dl_nonce'], 'dl_save_meta')) return;
    if (!current_user_can('edit_post', $post_id)) return;

    $fields = [
        'dl_preview_url',
        'dl_uploads_url',
        'dl_header',
        'dl_footer',
        'dl_wp_templates',
        'dl_pages_content',
        'dl_posts_content',
        'dl_patterns_json'
    ];

    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }

    $premium = isset($_POST['dl_premium']) ? 'yes' : 'no';
    update_post_meta($post_id, '_dl_premium', $premium);
}
add_action('save_post', 'dl_save_metaboxes');