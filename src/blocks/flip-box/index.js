import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import flipBoxItemAttributes from './attributes/flip-box-item-attribute.js';
import flipBoxFrontIconAttributes from './attributes/flip-box-front-icon.js';
import flipBoxBackIconAttributes from './attributes/flip-box-back-icon.js';
import flipBoxFrontTitleAttributes from './attributes/flip-box-front-title.js';
import flipBoxBackTitleAttributes from './attributes/flip-box-back-title.js';
import flipBoxFrontContentAttributes from './attributes/flip-box-front-content.js';
import flipBoxBackContentAttributes from './attributes/flip-box-back-content.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...flipBoxItemAttributes,
	...flipBoxFrontIconAttributes,
	...flipBoxBackIconAttributes,
	...flipBoxFrontTitleAttributes,
	...flipBoxBackTitleAttributes,
	...flipBoxFrontContentAttributes,
	...flipBoxBackContentAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
