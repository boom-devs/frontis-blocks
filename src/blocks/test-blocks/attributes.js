const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },
    testImageUrl: { 
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: ""
        }
    },
    // testImageAlt: {
    //     type: "object",
    //     default: {
    //         Desktop: "",
    //         Tablet: "",
    //         Mobile: ""
    //     }
    // },
    // testImageID: {
    //     type: "object",
    //     default: {
    //         Desktop: "",
    //         Tablet: "",
    //         Mobile: ""
    //     }
    // },
    testImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: 0.5, y: 0.5 },
            Tablet: { x: 0.5, y: 0.5 },
            Mobile: { x: 0.5, y: 0.5 }
        }
    },
    testImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    testImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    testImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    overlayType: {
        type: 'string',
        default: 'color'
    }
}
export default attributes;