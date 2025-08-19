import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: "",
	},

    blockStyle: {
        type: 'string',
        default: '',
    },

    tabLayoutSwitcher: {
        type: 'string',
        default: 'horizontal',
    },

	tabItems: {
        type: 'array',
        default: [
            // You can define some default items if needed
            { id: 'item-1',
                title: 'Tab 1',
            },
			{ id: 'item-2',
                title: 'Tab 2',
            },
			{ id: 'item-3',
                title: 'Tab 3',
            },
        ],
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    default: ''
                },
                title: {
                    type: 'string',
                    default: ''
                },
            }
        }
    },

	tabActive: {
		type: 'number',
		default: 0,
	},

	tabActiveFrontend: {
		type: 'number',
		default: 0,
	},
};

export default attributes;
