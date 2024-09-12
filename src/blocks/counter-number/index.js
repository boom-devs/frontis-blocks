import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import counterNumberAttributes from './style-attributes/counter-number.js';
import counterTitleAttributes from './style-attributes/counter-title.js';
import boxBorderAttributes from './style-attributes/box-border.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...counterNumberAttributes,
	...counterTitleAttributes,
	...boxBorderAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
