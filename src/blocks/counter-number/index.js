import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import counterIconAttributes from "./attributes/counter-icon-attribute.js";
import counterItemSizeAttributes from "./attributes/counter-item-size-attribute.js";
import counterItemBorderTypeAttributes from "./attributes/counter-item-border-type-attribute.js";
import counterItemBorderRadiusAttributes from "./attributes/counter-item-border-radius-attribute.js";
import counterItemBgColorControl from "./attributes/counter-item-bg-color-attribute.js";
import counterNumberTypographyAttributes from "./attributes/counter-number-typography-attribute.js";
import counterNumberMarginAttribute from "./attributes/counter-number-margin-attribute.js";
import counterNumberTitleTypographyAttributes from "./attributes/counter-number-title-typography-attribute.js";
import counterNumberTitleMarginAttribute from "./attributes/counter-number-title-margin-attribute.js";

// Merge attributes
const combinedAttributes = {
	...attributes,
	...counterIconAttributes,
	...counterItemSizeAttributes,
	...counterItemBorderTypeAttributes,
	...counterItemBorderRadiusAttributes,
	...counterItemBgColorControl,
	...counterNumberTypographyAttributes,
	...counterNumberMarginAttribute,
	...counterNumberTitleTypographyAttributes,
	...counterNumberTitleMarginAttribute,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
