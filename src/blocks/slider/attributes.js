const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    blockStyle: {
        type: "string",
        default: ""
    },
    sliderItems: {
        type: "array",
        default: [
            { id: 'item-1',
                title: 'Slider Item 1',
                nestedItems: [
                    { id: 'item-1-1',
                        title: 'Slider Item 1',
                        image: ''
                    },
                ],
            },
            { id: 'item-2',
                title: 'Slider Item 2',
                nestedItems: [
                    { id: 'item-2-1',
                        title: 'Slider Item 2',
                        image: ''
                    },
                ],
            },
            { id: 'item-3',
                title: 'Slider Item 3',
                nestedItems: [
                    { id: 'item-3-1',
                        title: 'Slider Item 3',
                        image: ''
                    },
                ],
            },
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
                nestedItems: {
                    type: "array",
                    default: [],
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
                            image: {
                                type: "string",
                                default: ""
                            },
                        }
                    }
                },
            }
        }
    },

};

export default attributes;
