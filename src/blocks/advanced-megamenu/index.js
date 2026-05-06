import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType(metadata.name, {
    ...metadata,
    attributes,
    icon: FB_Block_Icons.advanced_navigation,
    edit: Edit,
    save,
});