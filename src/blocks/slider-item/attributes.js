const attributes = {
    blockId: {
        type: "string",
        default: ""
    },

    // Inherited Slider Settings
    sliderID: {
        type: "string",
        default: "", // Inherited from the parent slider block
    },
    transitionType: {
        type: "string",
        default: "slide", // Inherited from the parent slider block
    },
    displayIndicators: {
        type: "boolean",
        default: true, // Inherited from the parent slider block
    },
    indicatorColor: {
        type: "string",
        default: "#000000", // Inherited from the parent slider block
    },
    autoplay: {
        type: "boolean",
        default: false, // Inherited from the parent slider block
    },
    autoplaySpeed: {
        type: "number",
        default: 5000, // Inherited from the parent slider block
    },
    navigationArrows: {
        type: "boolean",
        default: true, // Inherited from the parent slider block
    },

    // Slide Content
    slideTitle: {
        type: "string",
        default: "Slide title from child",
    },
};

export default attributes;
