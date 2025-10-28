export default {
    blockId: {
        type: "string",
    },
    blockStyle: {
        type: "string",
    },
    navigationGlobalCustomCSS: {
        type: "string",
        default: "",
    },
    navigationDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    navigationTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    navigationMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    menuLayout: {
        type: "string",
        default: "horizontal",
    },
    menuAlignment: {
        type: "string",
        default: "left",
    },
    menuSpacing: {
        type: "number",
        default: 15,
    },
    menuItemColor: {
        type: "string",
        default: "",
    },
    menuItemHoverColor: {
        type: "string",
        default: "",
    },
    menuItemBackgroundColor: {
        type: "string",
        default: "",
    },
    menuItemHoverBackgroundColor: {
        type: "string",
        default: "",
    },
    menuItemPadding: {
        type: "object",
        default: {
            top: "10px",
            right: "15px",
            bottom: "10px",
            left: "15px",
        },
    },
    submenuWidth: {
        type: "number",
        default: 220,
    },
    submenuBackgroundColor: {
        type: "string",
        default: "#ffffff",
    },
    megaMenuWidth: {
        type: "string",
        default: "container",
    },
    megaMenuBackgroundColor: {
        type: "string",
        default: "#ffffff",
    },
    megaMenuInteraction: {
        type: "string",
        default: "hover"
    }
};