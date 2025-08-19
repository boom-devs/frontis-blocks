import { __ } from '@wordpress/i18n';
const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	blockId: {
		type: 'string',
		default: "",
	},
	id: {
		type: 'number',
		default: 0,
	},
	header: {
		type: 'html',
	},
	tabActive: {
		type: 'number',
	}
};
export default attributes;