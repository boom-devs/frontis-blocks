const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    FeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature 1', Description: 'Description for feature 1', FeatureIcon: 'circle-check', },
            { id: 'item-2', Title: 'Feature 2', Description: 'Description for feature 2', FeatureIcon: 'circle-check', },
            { id: 'item-3', Title: 'Feature 3', Description: 'Description for feature 3', FeatureIcon: 'circle-check', },
            { id: 'item-4', Title: 'Feature 4', Description: 'Description for feature 4', FeatureIcon: 'circle-check', },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                Title: {
                    type: "string",
                    default: ""
                },
                Description: {
                    type: "string",
                    default: ""
                },
                FeatureIcon: {
                    type: 'string',
                    default: 'circle-check',
                },
                FeatureIconAlign: {
                    type: "string",
                    default: "icon",
                },
            }
        }
    }
};

export default attributes;
