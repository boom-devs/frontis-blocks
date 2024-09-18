import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import flipBoxFrontIconAttributes from './style-attributes/flip-box-front-icon.js';
import flipBoxBackIconAttributes from './style-attributes/flip-box-back-icon.js';
import flipBoxFrontTitleAttributes from './style-attributes/flip-box-front-title.js';
import flipBoxBackTitleAttributes from './style-attributes/flip-box-back-title.js';
import flipBoxFrontContentAttributes from './style-attributes/flip-box-front-content.js';
import flipBoxBackContentAttributes from './style-attributes/flip-box-back-content.js';
import boxBorderAttributes from './style-attributes/box-border.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...flipBoxFrontIconAttributes,
	...flipBoxBackIconAttributes,
	...flipBoxFrontTitleAttributes,
	...flipBoxBackTitleAttributes,
	...flipBoxFrontContentAttributes,
	...flipBoxBackContentAttributes,
	...boxBorderAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
