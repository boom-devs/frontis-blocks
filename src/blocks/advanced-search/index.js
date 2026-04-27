import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import deprecated from './deprecated.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
	attributes,
	icon: FB_Block_Icons.advanced_search,
	edit: Edit,
	save,
	deprecated
} );

