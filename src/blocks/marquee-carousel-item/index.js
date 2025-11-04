
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
	attributes,
	icon: FB_Block_Icons.carousel,
	edit: Edit,
	parent: ['frontis-blocks/marquee-carousel'],
	save,
} );
