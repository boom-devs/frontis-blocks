export default {
    blockId: {
        type: "string",
    },
    menuLabel: {
        type: "string",
        default: "Menu Item",
    },
    menuUrl: {
        type: "string",
        default: "",
    },
    openInNewTab: {
        type: "boolean",
        default: false,
    },
    hasSubmenu: {
        type: "boolean",
        default: false,
    },
    isMegaMenu: {
        type: "boolean",
        default: false,
    },
    selectedPattern: {
        type: "string",
        default: "",
    },
    patternContent: {
        type: "string",
        default: "",
    },
    menuLayout: {
        type: "string",
        default: "horizontal",
    },
};