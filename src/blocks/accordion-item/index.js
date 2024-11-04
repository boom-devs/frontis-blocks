
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';


import metadata from './block.json';
import Edit from "./edit";
import Save from "./save";
import attributes from './attributes.js';


registerBlockType( metadata.name, {
	attributes: attributes,
	edit: Edit,
    save: Save,
} );


