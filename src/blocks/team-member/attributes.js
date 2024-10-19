const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	DeviceType: {
		type: "string",
		default: "Desktop"
	},

	teamMemberZIndex : {
        type: "number",
    },

    teamMemberPaddingUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberPaddingLink : {
        type : "boolean",
        default: true
    },

    teamMemberMarginUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobileMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMarginLink : {
        type : "boolean",
        default: true
    },

    teamMemberBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    teamMemberBgColor : {
        type: "string"
    },
    teamMemberBgHoverColor: {
        type: 'string',
    },



    teamMemberBorder: {
        type: 'string',
        default: "none",
    },
    teamMemberBorderColor: {
        type: 'string',
    },
    teamMemberBorderHoverColor: {
        type: 'string',
    },
    teamMemberBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    teamMemberBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberBorderLink : {
        type : "boolean",
        default: true
    },

    teamMemberBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    teamMemberDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    teamMemberTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    teamMemberMobileSwitcher: {
        type: "boolean",
        default: false,
    },
};

export default attributes;
