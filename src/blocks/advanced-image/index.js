import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import FB_Block_Icons from "@Config/fb-blocks-icons";
import {__} from "@wordpress/i18n";

registerBlockType( 'frontis-blocks/advanced-image', {
	title: __( 'Advanced Image', 'frontis-blocks' ),
	attributes,
	category: 'frontis-blocks',
	icon: FB_Block_Icons.advanced_image,
	edit: Edit,
	save
} );
