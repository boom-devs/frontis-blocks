// attributes.js
const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    testBackgroundType: {
        type: "string",
        default: "classic"
    },
    testGlobalClassicColor: {
        type: "string",
    },
    testGlobalGradientColor: {
        type: "string",
    },
    testCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    testCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    testBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    testBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    testBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    testBackgroundImageID: {
        type: "string",
        default: ""
    },
    testBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    testBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    testBackgroundImageSize: {
        type: "string",
        default: ""
    },
    testBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
};

export default attributes;
