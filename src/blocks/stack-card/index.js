import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import StackCardItemEdit from './stack-card-item-edit';
import StackCardItemSave from './stack-card-item-save';
import metadata from './block.json';
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";
// import deprecated from './deprecated';

const stackCardItemAttributeKeys = [
	'itemNumber',
	'stackCardItemBgColorSwitcher',
	'stackCardItemBgNormalBackgroundType',
	'stackCardItemBgNormalClassicColor',
	'stackCardItemBgNormalGradientColor',
	'stackCardItemBgNormalCustomGradientSwitcher',
	'stackCardItemBgNormalCustomGradientInputValue',
	'stackCardItemBgHoverBackgroundType',
	'stackCardItemBgHoverClassicColor',
	'stackCardItemBgHoverGradientColor',
	'stackCardItemBgHoverCustomGradientSwitcher',
	'stackCardItemBgHoverCustomGradientInputValue',
	'stackCardItemBorderColorSwitcher',
	'stackCardItemBorderColor',
	'stackCardItemBorderHoverColor',
];

const stackCardItemBlockAttributes = stackCardItemAttributeKeys.reduce((accumulator, key) => {
	if (attributes[key]) {
		accumulator[key] = attributes[key];
	}
	return accumulator;
}, {});

registerBlockType( metadata.name, {
	attributes,
	icon: FB_Block_Icons.rive_animation,
	edit: Edit,
	save,
	// deprecated
} );

registerBlockType( 'frontis-blocks/stack-card-item', {
	title: __( 'Stack Card Item', 'frontis-blocks' ),
	description: __( 'Nested content item for the Stack Card block.', 'frontis-blocks' ),
	category: 'frontis-blocks',
	parent: [ 'frontis-blocks/stack-card' ],
	icon: 'index-card',
	supports: {
		inserter: false,
		reusable: false,
		html: false,
		customClassName: false,
	},
	attributes: stackCardItemBlockAttributes,
	edit: StackCardItemEdit,
	save: StackCardItemSave,
} );