import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import flipBoxItemFrontAttributes from './attributes/flip-box-item-front-attribute.js';
import flipBoxItemBackAttributes from './attributes/flip-box-item-back-attribute.js';
import flipBoxFrontIconAttributes from './attributes/flip-box-front-icon.js';
import flipBoxBackIconAttributes from './attributes/flip-box-back-icon.js';
import flipBoxFrontTitleAttributes from './attributes/flip-box-front-title-attribute.js';
import flipBoxBackTitleAttributes from './attributes/flip-box-back-title-attribute.js';
import flipBoxFrontContentAttributes from './attributes/flip-box-front-content.js';
import flipBoxBackContentAttributes from './attributes/flip-box-back-content.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...flipBoxItemFrontAttributes,
	...flipBoxItemBackAttributes,
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
