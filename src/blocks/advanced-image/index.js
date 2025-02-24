import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import deprecated from './deprecated';

registerBlockType( metadata.name, {
	attributes,
	icon: FB_Block_Icons.advanced_image,
	edit: Edit,
	save,
	deprecated,
} );
