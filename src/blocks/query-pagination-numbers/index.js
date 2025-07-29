import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import attributes from './attributes.js';
import Edit from './edit';
import metadata from './block.json';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	icon: FB_Block_Icons.post_grid
} );
