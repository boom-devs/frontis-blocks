const attributes = {
    blockID: {
        type: 'string',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    parentBlockID: {
        type: 'string',
    },
    title: {
        type: 'string',
        default: 'Timeline Item Title',
    },
    content: {
        type: 'string',
    },
    /** Start Class & ID Setting */
    verticalTimelineItemGlobalZIndex: {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    verticalTimelineItemCustomCSS: {
        type: "string",
        default: "",
    },
    verticalTimelineItemWraperID: {
        type: "string",
        default: ""
    },
    verticalTimelineItemWraperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */
};

export default attributes;
