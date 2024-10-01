const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    videoGlobalZIndex : {
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



    videoGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalPaddingDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalPaddingLink : {
        type : "boolean",
        default: true
    },
    videoGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalMarginDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalMarginTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalMarginMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalMarginLink : {
        type : "boolean",
        default: true
    },
    videoGlobalBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoGlobalBgColor : {
        type: "string",
    },
    videoGlobalBgHoverColor: {
        type: 'string',
    },
    videoGlobalBorder: {
        type: 'string',
        default: "none",
    },
    videoGlobalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    videoGlobalBorderColor: {
        type: 'string',
    },
    videoGlobalBorderHoverColor: {
        type: 'string',
    },
    videoGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalBorderDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalBorderLink : {
        type : "boolean",
        default: true
    },
    videoGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    videoGlobalBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    videoGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },

};

export default attributes;
