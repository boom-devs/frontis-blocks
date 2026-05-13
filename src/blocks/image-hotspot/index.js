import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import attributes from './attributes';
import metadata from './block.json';

registerBlockType( metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save: () => null
} );
