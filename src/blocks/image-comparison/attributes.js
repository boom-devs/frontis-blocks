const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },

    /** Start Class & ID Setting */
    imageComparisonCustomCSS: {
        type: "string",
        default: "",
    },
    imageComparisonWraperID: {
        type: "string",
        default: ""
    },

    imageComparisonWraperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */

    /** Start Image Comparison Attributes */
    beforeImageUrl: {
        type: "string",
        default: ""
    },
    beforeImageAlt: {
        type: "string",
        default: ""
    },
    beforeImageId: {
        type: "number",
        default: 0
    },
    afterImageUrl: {
        type: "string",
        default: ""
    },
    afterImageAlt: {
        type: "string",
        default: ""
    },
    afterImageId: {
        type: "number",
        default: 0
    },
    /** End Image Comparison Attributes */

    /** Start Comparison Height */
    comparisonHeight: {
        type: 'object',
        default: {
            Desktop: '500',
            Tablet: '400',
            Mobile: '300'
        }
    },
    comparisonHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Comparison Height */

    /** Start Before Image */
    beforeImgShowLabelSwitcher: {
        type: "boolean",
        default: true,
    },
    /** End Before Image */

    /** Start After Image */
    afterImgShowLabelSwitcher: {
        type: "boolean",
        default: true,
    },
    /** End After Image */

    /** Start After Image */
    afterImageLabel: {
        type: "string",
        default: "After"
    },
    /** End After Image */

    /** Start Before Image */
    beforeImageLabel: {
        type: "string",
        default: "Before"
    },
    /** End Before Image */

    /** Start Initial Offset */
    comparisonInitialOffset: {
        type: "number",
        default: 50,
    },
    /** End Initial Offset */

    /** Start Comparison Settings */
    hoverToSlideSwitcher: {
        type: "boolean",
        default: false,
    },
    clickToMoveSwitcher: {
        type: "boolean",
        default: true,
    },
    disableOverlaySwitcher: {
        type: "boolean",
        default: false,
    },
    /** End Comparison Settings */

    /** Start Comparison Drag Direction */
    comparisonDragDirection: {
        type: 'string',
        default: 'horizontal',
    }
    /** End Comparison Drag Direction */


}

export default attributes;
