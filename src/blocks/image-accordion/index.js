/**
 * index.js
 * Registers the Image Accordion Gutenberg block.
 */

import { registerBlockType } from "@wordpress/blocks";
//import "./style.scss";

import metadata from "./block.json";
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

registerBlockType(metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save: Save,
});

// import { registerBlockType } from '@wordpress/blocks';
// import './style.scss';

// /**
//  * Internal dependencies
//  */
// import Edit from './edit';
// import save from './save';
// import metadata from './block.json';
// import attributes from './attributes.js';
// import FB_Block_Icons from "@Config/fb-blocks-icons";
// import deprecated from './deprecated';

// registerBlockType( metadata.name, {
//      attributes,
//      icon: FB_Block_Icons.countdown,
//      edit: Edit,
//      save,
//      deprecated
// } );
