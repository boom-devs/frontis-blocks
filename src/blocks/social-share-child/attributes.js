const attributes = {
    blockID: {
        type: 'string',
        default: '',
    },
    blockStyle: {
        type: "string",
        default: "",
    },
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	icon: {
		type: 'string',
		default: '',
	},
    shareNetworks: {
        type: 'array',
        default: [
            { id: 'facebook', enabled: true, label: 'Facebook' },
        ]
    },
    socialMediaType : {
		type: "string",
		default: "facebook"
	},
    socialMediaSwitcher : {
		type: "string",
		default: "facebook"
	},
    iconSize: {
        type: 'number',
        default: 20
    },
    displayStyle: {
        type: 'string',
        default: 'icon'
    },
    alignment: {
        type: 'string',
        default: 'left'
    },
    socialIcon: {
		type: 'string',
		default: '',
	},
    socialItemColorSwitcher : {
        type: "string",
        default: "normal"
    },
    socialItemColor : {
        type: "string"
    },
    socialItemHoverColor: {
        type: 'string',
    },
    socialItemBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    socialItemBgColor: {
        type: 'string',
    },
    socialItemBgColorHover: {
        type: 'string',
    },
    socialIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconPaddingDesktop: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	socialIconPaddingTablet: {
		type: "object", 
		default: {
			top: '8',
			bottom: '8',
			left: '8',
			right: '8',
		},
	},
	socialIconPaddingMobile: {
		type: "object", 
		default: {
			top: '8',
			bottom: '8',
			left: '8',
			right: '8',
		},
	},
	socialIconPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	socialIconMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconMarginLink : {
		type : "boolean",
		default: true
	},
    socialIconBorder: {
		type: 'string',
		default: "none",
	},
	socialIconBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	socialIconBorderColor: {
		type: 'string',
	},
	socialIconBorderHoverColor: {
		type: 'string',
	},
	socialIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	socialIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBorderRadiusLink : {
		type : "boolean",
		default: true
	},
};

export default attributes;