
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( 'frontis-blocks/advanced-heading', {
	title: __( 'Heading', 'frontis-blocks' ),
	description: __( 'Add heading, sub heading and a separator using one block.', 'frontis-blocks' ),
	icon: FB_Block_Icons.advanced_heading,
	keywords: [
		__( 'creative heading', 'frontis-blocks' ),
		__( 'heading', 'frontis-blocks' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: 'frontis-blocks',
	edit: Edit,
	save,
} );
