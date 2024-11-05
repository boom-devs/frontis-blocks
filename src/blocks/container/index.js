import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import './style.scss';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import variations from "@Blocks/container/variations";

registerBlockType(metadata.name, {
	...metadata,
	icon: FB_Block_Icons.container,
	attributes,
	variations,
	edit: Edit,
	save,
});
