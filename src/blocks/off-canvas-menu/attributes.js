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
    },

    advancedNavigationDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    advancedNavigationTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    advancedNavigationMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    advancedNavigationPositionType: {
        type: "string",
        default: "default"
    },
    advancedNavigationHZOrientationType: {
        type: "string",
        default: "left"
    },
    advancedNavigationVROrientationType: {
        type: "string",
        default: "top"
    },
    advancedNavigationHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedNavigationHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedNavigationHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedNavigationHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedNavigationVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedNavigationVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedNavigationVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedNavigationVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    
};

export default attributes;