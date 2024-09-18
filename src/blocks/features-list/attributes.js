const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    FeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature Item 1', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
            { id: 'item-2', Title: 'Feature Item 2', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
            { id: 'item-3', Title: 'Feature Item 3', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
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
                    default: 'check',
                },
                FeatureIconAlign: {
                    type: "string",
                    default: "icon",
                },
            }
        }
    },
    FeatureTag: {
        type : "string",
        default: "h3"
    },
    FeatureIconShape: {
        type: "string",
        default: "circle"
    },
    
};

export default attributes;
