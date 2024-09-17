const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    FeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', title: 'Feature 1', description: 'Description for feature 1' },
            { id: 'item-2', title: 'Feature 2', description: 'Description for feature 2' },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                title: {
                    type: "string",
                    default: ""
                },
                description: {
                    type: "string",
                    default: ""
                }
            }
        }
    },
    FeatureIconAlign: {
        type: "string",
        default: "no-icon",
    },
    FeatureIcon: {
		type: 'string',
		default: 'circle-check',
	},
};

export default attributes;
