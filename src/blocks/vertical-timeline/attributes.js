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
    showSectionLabelSwitcher: {
        type: "boolean",
        default: true,
    },

    /** Start Progress Line */
    verticalTimelineItemlineColorSwitcher: {
        type: 'string',
        default: 'progress',
    },
    verticalTimelineItemProgressLineColor: {
        type: 'string',
        default: '#054699',
    },
    verticalTimelineItemBaseLineColor: {
        type: 'string',
        default: '#d0dff5',
    },
    /** End Progress Line */

    /** Start Base Line Width */
    verticalTimelineBaseLineWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    verticalTimelineBaseLineWidth: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },
    /** End Base Line Width */

    /** Start Progress Line Width */
    verticalTimelineProgressLineWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    verticalTimelineProgressLineWidth: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },
    /** End Progress Line Width */

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
