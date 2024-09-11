<?php
namespace FrontisBlocks\Core;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Utils\Helper;

defined('ABSPATH') || exit;

class Generate {
    use Singleton;

    public function __construct()
    {
        add_action( 'wp_ajax_generate_block', [$this, 'generate_block'] );
        add_action( 'wp_ajax_nopriv_generate_block', [$this, 'generate_block'] );
    }

    public function generate_block() {
        $block_name = $_POST['block_name'];
        $slug = $_POST['block_slug'];
        $title = $_POST['block_title'];
        // Define the folder path for 'advanced-heading'
        $folder = __DIR__ . '/src/blocks/'.$slug.'/';

        // Check if the 'advanced-heading' folder exists
        if (!is_dir($folder)) {
            // Create the 'advanced-heading' folder with permissions (e.g., 0755)
            mkdir($folder, 0755, true);
        }

        // Define the block name and slug


        // Content for block.json with placeholders replaced
        $block_json_content = <<<JSON
        {
            "\$schema": "https://schemas.wp.org/trunk/block.json",
            "apiVersion": 3,
            "name": "$block_name/$slug",
            "version": "0.1.0",
            "title": "$title",
            "category": "$block_name",
            "icon": "smiley",
            "description": "Example block scaffolded with Create Block tool.",
            "example": {},
            "supports": {
                "html": false
            },
            "textdomain": "$block_name",
            "editorScript": "file:./index.js",
            "editorStyle": "file:./index.css",
            "style": "file:./style-index.css",
            "render": "file:./render.php",
            "viewScript": "file:./view.js"
        }
        JSON;

        // Content for edit.js with placeholders replaced
        $edit_js_content = <<<JS
        /**
         * Retrieves the translation of text.
         *
         * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
         */
        import { __ } from '@wordpress/i18n';

        /**
         * React hook that is used to mark the block wrapper element.
         * It provides all the necessary props like the class name.
         *
         * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
         */
        import { useBlockProps } from '@wordpress/block-editor';

        /**
         * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
         * Those files can contain any CSS code that gets applied to the editor.
         *
         * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
         */
        import './editor.scss';

        /**
         * The edit function describes the structure of your block in the context of the
         * editor. This represents what the editor will render when the block is used.
         *
         * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
         *
         * @return {Element} Element to render.
         */
        export default function Edit() {
            return (
                <p { ...useBlockProps() }>
                    { __( '$title – hello from the editor!', '$slug' ) }
                </p>
            );
        }
        JS;

        // Content for index.js
        $index_js_content = <<<JS
        /**
         * Registers a new block provided a unique name and an object defining its behavior.
         *
         * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
         */
        import { registerBlockType } from '@wordpress/blocks';

        /**
         * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
         * All files containing `style` keyword are bundled together. The code used
         * gets applied both to the front of your site and to the editor.
         *
         * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
         */
        import './style.scss';

        /**
         * Internal dependencies
         */
        import Edit from './edit';
        import metadata from './block.json';

        /**
         * Every block starts by registering a new block type definition.
         *
         * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
         */
        registerBlockType( metadata.name, {
            /**
             * @see ./edit.js
             */
            edit: Edit,
        } );
        JS;

        // Content for editor.scss with placeholder replaced
        $editor_scss_content = <<<SCSS
        /**
         * The following styles get applied inside the editor only.
         *
         * Replace them with your own styles or remove the file completely.
         */

        .wp-block-$block_name-$slug {
            border: 1px dotted #f00;
        }
        SCSS;

        // Content for style.scss with placeholder replaced
        $style_scss_content = <<<SCSS
        /**
         * The following styles get applied both on the front of your site
         * and in the editor.
         *
         * Replace them with your own styles or remove the file completely.
         */

        .wp-block-$block_name-$slug {
            background-color: #21759b;
            color: #fff;
            padding: 2px;
        }
        SCSS;

        // Content for render.php with placeholders replaced
        $render_php_content = <<<PHP
        <?php
        /**
         * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
         */
        ?>
        <p <?php echo get_block_wrapper_attributes(); ?>>
            <?php esc_html_e( '$block_name – hello from a dynamic block!', '$slug' ); ?>
        </p>
        PHP;

        // Content for view.js with placeholders replaced
        $view_js_content = <<<JS
        /**
         * Use this file for JavaScript code that you want to run in the front-end 
         * on posts/pages that contain this block.
         *
         * When this file is defined as the value of the \`viewScript\` property
         * in \`block.json\` it will be enqueued on the front end of the site.
         *
         * Example:
         *
         * ```js
         * {
         *   "viewScript": "file:./view.js"
         * }
         * ```
         *
         * If you're not making any changes to this file because your project doesn't need any 
         * JavaScript running in the front-end, then you should delete this file and remove 
         * the \`viewScript\` property from \`block.json\`. 
         *
         * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
         */
        
        /* eslint-disable no-console */
        console.log("Hello World! (from $block_name-$slug block)");
        /* eslint-enable no-console */
        JS;

        // List of files to create
        $files = [
            'edit.js' => $edit_js_content,
            'index.js' => $index_js_content,
            'view.js' => $view_js_content,
            'render.php' => $render_php_content,
            'block.json' => $block_json_content,
            'style.scss' => $style_scss_content,
            'editor.scss' => $editor_scss_content
        ];

        // Loop through the files and create them with the content
        foreach ($files as $filename => $content) {
            $filePath = $folder . $filename;
            // Write the content to each file
            file_put_contents($filePath, $content);
        }

        echo "Folder and files have been created successfully!";
    }
}