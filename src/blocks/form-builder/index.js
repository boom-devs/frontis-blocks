
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import FrontisForms_Block_Icons from "@Config/fb-blocks-icons";
import deprecated from './deprecated';

registerBlockType( metadata.name, {
	attributes,
	icon: FrontisForms_Block_Icons.accordion,
	edit: Edit,
	save,
	// deprecated,
} );

