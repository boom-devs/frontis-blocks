import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import {attributes} from "@Blocks/contact-form-7/attributes";

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
} );
