import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import deprecated from './deprecated.js';

registerBlockType( metadata.name, {
	attributes: attributes,
	edit: Edit,
	save,
	icon: FB_Block_Icons.team_members,
	deprecated,
} );
	


