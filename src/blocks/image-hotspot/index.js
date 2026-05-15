import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import attributes from './attributes';
import metadata from './block.json';

registerBlockType( metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save: Save
} );