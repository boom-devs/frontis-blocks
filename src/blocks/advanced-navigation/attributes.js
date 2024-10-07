const attributes = {
    blockId: {
        type: "string"
    },
    resOption: {
        type: "string",
        default: "Desktop"
    },
    blockMeta: {
        type: "object"
    },
    blockRoot: {
        type: "string",
        default: "frontis_block"
    },
    layout: {
        type: "string",
        default: "is-horizontal"
    },
    preset: {
        type: "string",
        default: "preset-1"
    },
    verticalPreset: {
        type: "string",
        default: "vertical-preset-1"
    },
    navAlign: {
        type: "string",
        default: "items-justified-left"
    },
    dropdownOpenOnClick: {
        type: "boolean",
        default: false
    },
    showDropdownIcon: {
        type: "boolean",
        default: true
    },
    navBtnType: {
        type: "boolean",
        default: true
    },
    flexWrap: {
        type: "boolean",
        default: false
    },
    hamburgerMenu: {
        type: "string",
        default: "mobile"
    },
    navVerticalAlign: {
        type: "string",
        default: "items-justified-left"
    },
    hamburgerCloseIconAlign: {
        type: "string",
        default: "close-icon-right"
    },
    classHook: {
        type: "string",
        default: ""
    }
};

export default attributes;