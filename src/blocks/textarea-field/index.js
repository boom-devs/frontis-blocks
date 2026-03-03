
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';


import metadata from './block.json';
import Edit from "./edit";
import Save from "./save";
import attributes from './attributes.js';
import FrontisForms_Block_Icons from "@Config/fb-blocks-icons";
import deprecated from './deprecated';

registerBlockType( metadata.name, {
	attributes: attributes,
	icon: FrontisForms_Block_Icons.accordion,
	edit: Edit,
    save: Save,
	// deprecated,
} );


