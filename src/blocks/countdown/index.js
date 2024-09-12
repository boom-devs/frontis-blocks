import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import digitAttributes from "./style-attributes/digit.js";
import labelAttributes from "./style-attributes/label.js";

// Merge attributes and digitAttributes
const combinedAttributes = {
	...attributes,
	...digitAttributes,
	...labelAttributes,
};

registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
