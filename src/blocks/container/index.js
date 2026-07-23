import FB_Block_Icons from "@Config/fb-blocks-icons";
import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import Save from './save';
import deprecated from './deprecated.js';
import './style.scss';
import './blockStylePersistence';

registerBlockType(metadata.name, {
	...metadata,
	icon: FB_Block_Icons.container,
	attributes,
	edit: ( props ) => <Edit { ...props }/>,
	save: ( props ) => <Save { ...props }/>,
	deprecated,
});
