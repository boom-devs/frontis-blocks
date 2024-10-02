const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
	fluentFormGlobalZIndex : {
        type: "number",
    },
	formId: {
		type: 'string'
	},
	showLabels: {
        type: "boolean",
        default: true,
    },
    showPlaceholder: {
        type: "boolean",
        default: true,
    },
    showErrorMessage: {
        type: "boolean",
        default: true,
    },







	fluentFormGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalPaddingDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalMarginDesktop: {
        type: "object", 
        default: {
            top: 30,
            bottom: 30,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalMarginTablet: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalMarginMobile: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalMarginLink : {
        type : "boolean",
        default: true
    },
    fluentFormGlobalBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormGlobalBgColor : {
        type: "string",
    },
    fluentFormGlobalBgHoverColor: {
        type: 'string',
    },


    fluentFormGlobalBorder: {
        type: 'string',
        default: "none",
    },
    fluentFormGlobalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormGlobalBorderColor: {
        type: 'string',
    },
    fluentFormGlobalBorderHoverColor: {
        type: 'string',
    },
    fluentFormGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalBorderDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderLink : {
        type : "boolean",
        default: true
    },
    fluentFormGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },
}
export default attributes;
