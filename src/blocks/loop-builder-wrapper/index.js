
import { registerBlockType } from '@wordpress/blocks';
// import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import attributes from "@Blocks/loop-builder-wrapper/attributes";

registerBlockType( metadata.name, {
	attributes,
	icon: FB_Block_Icons.slider,
	edit: Edit,
	parent: ['frontis-blocks/loop-builder'],
	save,
});
