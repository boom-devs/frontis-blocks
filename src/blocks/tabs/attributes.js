import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: "",
	},

	tabHeaders: {
		type: 'array',
		default: [
			__( 'Tab 1', 'frontis-blocks' ),
			__( 'Tab 2', 'frontis-blocks' ),
			__( 'Tab 3', 'frontis-blocks' ),
		],
	},

	TabItems: {
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
