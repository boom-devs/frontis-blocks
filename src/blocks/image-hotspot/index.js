/**
 * index.js
 * Registers the frontis-blocks/image-hotspot block.
 */

import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit       from './edit';
import attributes from './attributes';
import metadata   from './block.json';
import FB_Block_Icons from '@Config/fb-blocks-icons';
import './editor.scss';

registerBlockType( metadata.name, {
	attributes,
	icon: FB_Block_Icons.advanced_image,
	edit: Edit,
	save: () => null,
} );
