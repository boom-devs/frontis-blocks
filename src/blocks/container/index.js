import variations from "@Blocks/container/variations";
import FB_Block_Icons from "@Config/fb-blocks-icons";
import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import './style.scss';


registerBlockType(metadata.name, {
	...metadata,
	icon: FB_Block_Icons.container,
	attributes,
	variations,
	edit: ( props ) => <Edit { ...props } deviceType="Desktop" />,
	save,
});
