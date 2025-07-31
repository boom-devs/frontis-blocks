import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import attributes from './attributes.js';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import deprecated from './deprecated';

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	save,
	deprecated,
	icon: FB_Block_Icons.post_grid
} );

