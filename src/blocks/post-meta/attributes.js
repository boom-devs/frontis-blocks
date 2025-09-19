const attributes = {
    blockID: {
        type: 'string',
        default: 'fb-post-meta-1',
    },
    postMetaterms: {
        type: 'array',
        default: [
            {
                id: 'item-2',
                metaType: 'author',
                metaLabel: 'Post Author',
                metaColor: '#000000',
                metaHoverColor: '#555555',
            },
            {
                id: 'item-3',
                metaType: 'date',
                metaLabel: 'Post Date',
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
