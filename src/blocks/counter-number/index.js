import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import counterItemSizeAttributes from "./attributes/counter-item-size-attribute.js";
import counterItemBorderTypeAttributes from "./attributes/counter-item-border-type-attribute.js";
import counterItemBorderRadiusAttributes from "./attributes/counter-item-border-radius-attribute.js";
import counterItemBgColorControl from "./attributes/counter-item-bg-color-attribute.js";
import counterNumberAttributes from "./attributes/counter-number-attribute.js";
import counterNumberTitleAttributes from "./attributes/counter-number-title-attribute.js";

// Merge attributes
const combinedAttributes = {
	...attributes,
	...counterItemSizeAttributes,
	...counterItemBorderTypeAttributes,
	...counterItemBorderRadiusAttributes,
	...counterItemBgColorControl,
	...counterNumberAttributes,
	...counterNumberTitleAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
