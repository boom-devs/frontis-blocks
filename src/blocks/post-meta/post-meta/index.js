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

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	save,
	deprecated,
} );
