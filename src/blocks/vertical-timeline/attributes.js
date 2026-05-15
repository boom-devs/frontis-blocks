const attributes = {
    blockID: {
        type: "string",
        default: "",
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    timelineChildCount: {
        type: "number",
        default: 5,
    },

    /** Start Class & ID Setting */
    verticalTimelineGlobalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    verticalTimelineCustomCSS: {
        type: "string",
        default: "",
    },
    verticalTimelineWrapperID: {
        type: "string",
        default: ""
    },
    verticalTimelineWrapperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */
}
export default attributes
