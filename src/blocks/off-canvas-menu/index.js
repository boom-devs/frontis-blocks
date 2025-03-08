import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import './style.scss';


registerBlockType(metadata.name, {
    ...metadata,
    icon: FB_Block_Icons.advanced_navigation,
    attributes,
    edit: Edit,
    save,
});