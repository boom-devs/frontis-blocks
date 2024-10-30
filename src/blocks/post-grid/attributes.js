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
    backgroundType: {
        type: "string",
        default: "classic"
    },
    globalClassicColor: {
        type: "string",
    },
    globalGradientColor: {
        type: "string",
    },
    customGradientSwitcher: {
        type: "boolean",
        default: false
    },
    customGradientInputValue: {
        type: "string",
        default: ""
    }
};

export default attributes;
