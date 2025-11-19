const attributes = {
	blockId: {
		type: 'string',
		default: ''
	},
    postMetaterms: {
        type: 'array',
        default: [
            {
                id: 'item-1',
                metaIcon: 'behance',
				metaIconFrontEnd: '',
                metaType: 'date',
                metaLabel: 'Post Date',
                metaColor: '#000000',
                metaHoverColor: '#555555',
            },
            {
                id: 'item-2',
                metaIcon: 'behance',
				metaIconFrontEnd: '',
                metaType: 'author',
                metaLabel: 'Post Author',
                metaColor: '#000000',
                metaHoverColor: '#555555',
            },
            {
                id: 'item-3',
                metaIcon: 'behance',
				metaIconFrontEnd: '',
                metaType: 'category',
                metaLabel: 'Post Category',
                metaColor: '#000000',
                metaHoverColor: '#555555',
            },
            {
                id: 'item-4',
                metaIcon: 'behance',
				metaIconFrontEnd: '',
                metaType: 'comments',
                metaLabel: 'Post Comments',
                metaColor: '#000000',
                metaHoverColor: '#555555',
            },

        ],
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    default: '',
                },
                metaIcon: {
                    type: 'string',
                    default: 'behance',
                },
				metaIconFrontEnd: {
                    type: 'string',
                    default: '',
                },
                metaType: {
                    type: 'string',
                    default: 'author',
                },
                metaLabel: {
                    type: 'string',
                    default: 'Post Date',
                },
                metaColor: {
                    type: 'string',
                    default: '#000000',
                },
                metaHoverColor: {
                    type: 'string',
                    default: '#555555',
                },
            },
        },
    },
    /** Repeater item style */
    singleItemColorStyle: {
        type: 'string',
        default: '',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },

    /** Preset & alignment */
    alignment: {
        type: 'string',
        default: 'left',
    },
};

export default attributes;
