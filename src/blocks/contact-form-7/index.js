import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import {attributes} from "@Blocks/contact-form-7/attributes";
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	icon: FB_Block_Icons.contact_form,
} );
