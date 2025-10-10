
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

registerBlockType( metadata.name, {
	...metadata,
	attributes: {
		...metadata.attributes,
		...attributes,
	},
	edit: Edit,
	save,
	icon: FB_Block_Icons.loop_builder
} );
