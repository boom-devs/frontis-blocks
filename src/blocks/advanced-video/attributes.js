const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    videoZIndex : {
        type: "number",
    },
    videoURL: {
        type: "string",
        default: "https://www.youtube.com/watch?v=WZdCL4Y5EBY",
    },
    autoPlaySwitcher: {
        type: "boolean",
        default: false,
    },
    muteSwitcher: {
        type: "boolean",
        default: false,
    },
    loopSwitcher: {
        type: "boolean",
        default: false,
    },
    showControlsSwitcher: {
        type: "boolean",
        default: false,
    },

};

export default attributes;
