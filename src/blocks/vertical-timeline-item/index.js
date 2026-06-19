import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';
import Edit from "./edit";
import Save from "./save";
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
	attributes: attributes,
	icon: FB_Block_Icons.vertical_timeline,
	edit: Edit,
    save: Save,
} );
