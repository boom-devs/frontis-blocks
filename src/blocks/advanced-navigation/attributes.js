const attributes = {
    blockId: {
        type: "string"
    },
    navigationLayout: {
        type: "string",
        default: "is-horizontal"
    },
    navigationHorizontalAlign: {
        type: "string",
        default: "items-justified-left"
    },
    navigationVerticalAlign: {
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
    hamburgerCloseIconAlign: {
        type: "string",
        default: "close-icon-right"
    },
    classHook: {
        type: "string",
        default: ""
    },
    
};

export default attributes;