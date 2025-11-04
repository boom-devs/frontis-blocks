const attributes = {
    blockID: {
        type: "string"
    },
    menuItems: {
        type: "array",
        default: []
    },
    menuPosition: {
        type: "string",
        default: "horizontal"
    },
    iconStyle: {
        type: "string",
        default: "none"
    },
    selectedTemplate: {
        type: "string",
        default: "default"
    },
    customItems: {
        type: "array",
        default: []
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },
};

export default attributes;