const slideCount = 3;
const slideContent = [];

for ( let i = 1; i <= slideCount; i++ ) {
	slideContent.push( {
		isPreview: false,
	} );
}

const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    slideContent: {
        type: "array",
		default: slideContent
    },
    slideItem: {
        type: "number",
        default: slideCount
    },

    // Slider Settings
    transitionType: {
        type: "string",
        default: "slide",
    },
    displayIndicators: {
        type: "boolean",
        default: true,
    },
    indicatorColor: {
        type: "string",
        default: "#000000", // Default color for the indicator
    },
    autoplay: {
        type: "boolean",
        default: false,
    },
    autoplaySpeed: {
        type: "number",
        default: 1000,
    },
    navigationArrows: {
        type: "boolean",
        default: true,
    },
};

export default attributes;
