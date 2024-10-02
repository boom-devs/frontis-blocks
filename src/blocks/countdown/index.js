import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import countDownItemSizeAttributes from "./attributes/countdown-item-size-attribute.js";
import countDownItemGapAttributes from "./attributes/countdown-item-gap-attribute.js";
import countDownItemBorderTypeAttributes from "./attributes/countdown-item-border-type-attribute.js";
import countDownItemBorderRadiusAttributes from "./attributes/countdown-item-border-radius-attribute.js";
import countDownItemBgColorControl from "./attributes/countdown-item-bg-color-attribute.js";
import digitAttributes from "./attributes/digit.js";
import labelAttributes from "./attributes/label.js";

// Merge attributes and digitAttributes
const combinedAttributes = {
	...attributes,
	...countDownItemSizeAttributes,
	...countDownItemGapAttributes,
	...countDownItemBorderTypeAttributes,
	...countDownItemBorderRadiusAttributes,
	...countDownItemBgColorControl,
	...digitAttributes,
	...labelAttributes,
};

registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
