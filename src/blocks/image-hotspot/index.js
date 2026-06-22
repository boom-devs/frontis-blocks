import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import attributes from './attributes';
import metadata from './block.json';
import FB_Block_Icons from '@Config/fb-blocks-icons';

registerBlockType(metadata.name, {
	...metadata,
	attributes: attributes,
	icon: FB_Block_Icons.image_hotspot,
	edit: Edit,
	save: Save
});
