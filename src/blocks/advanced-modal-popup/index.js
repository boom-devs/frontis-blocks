import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit.js';
import save from './save.js';
import metadata from './block.json';
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
    attributes,
    icon: FB_Block_Icons.off_canvas_menu,
    edit: Edit,
    save,
} );

