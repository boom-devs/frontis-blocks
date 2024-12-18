const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
	counterMediaUrl: {
		type: 'string',
		default: ''
	},
	icon: {
		type: 'string',
		default: 'star',
	},
    counterNumber: {
        type: "number",
        default: 100
    },
	counterPrefix: {
		type: "string",
		default: "+"
	},
	counterSuffix: {
		type: "string",
		default: "M"
	},
    counterTitle: {
        type: "string",
        default: "Happy Clients"
    },
    showThousandsSeparator: {
        type: "boolean",
        default: true
    },
	
	/** Start Global Setting */
	counterGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	/** Start Padding */
	counterGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	counterGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	counterGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	counterGlobalBgColor : {
		type: "string",
	},
	counterGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	counterGlobalBorder: {
		type: 'string',
		default: "none",
	},
	counterGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	counterGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	counterGlobalBorderHoverColor: {
		type: 'string',
	},
	counterGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	counterGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	counterGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    counterGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
};

export default attributes;
