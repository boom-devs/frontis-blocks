
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

const attributes = {
	DeviceType: {
		type: 'string',
		default: 'Desktop'
	},
	formId: {
		type: 'string'
	},
	rangeValue: {
		type: 'object',
		default: {
			Desktop: 40,
			Tablet: 30,
			Mobile: 20
		}
	},
	rangeUnit: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: '%',
		}
	}
}

registerBlockType( metadata.name, {
	attributes,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
