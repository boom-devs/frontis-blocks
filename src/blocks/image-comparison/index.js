import { __, sprintf } from '@wordpress/i18n';
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import attributes from "./attributes";
import Edit from "./edit";
import save from "./save";
import './style.scss';
import './editor.scss';
import FB_Block_Icons from '@Config/fb-blocks-icons';

registerBlockType(metadata.name, {
    attributes: attributes,
    icon: FB_Block_Icons.image_comparison,
    edit: Edit,
    save,
});