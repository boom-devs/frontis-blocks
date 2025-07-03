const attributes = {
    blockId: {
        type: "string"
    },
    blockStyle: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
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
    hamburgerMenuIconType: {
        type: "string",
        default: "icon"
    },
    dropdownOpenOnClick: {
        type: "boolean",
        default: false
    },
    showDropdownIcon: {
        type: "boolean",
        default: true
    },
    navigationFlexWrapSwitcher: {
        type: "boolean",
        default: false
    },



    /** Start Global Setting */
	navigationGlobalZIndex : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	navigationOverflow: {
        type: 'string',
        default: "default",
    },
    /** Start Position */
    navigationPositionType: {
        type: "string",
        default: "default"
    },
    navigationHZOrientationType: {
        type: "string",
        default: "left"
    },
    navigationVROrientationType: {
        type: "string",
        default: "top"
    },
    navigationHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    navigationHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    navigationVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    navigationVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    navigationVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Position */
	/** Start Padding */
	navigationGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalPaddingMobile: { 
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalPaddingLink : { 
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	navigationGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	navigationGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	navigationGlobalNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	navigationGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	navigationGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	navigationGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	navigationGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	navigationGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	navigationGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	navigationGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	navigationGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	navigationGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	navigationGlobalBorder: {
		type: 'string',
		default: "none",
	},
	navigationGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	navigationGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	navigationGlobalBorderHoverColor: {
		type: 'string',
	},
	navigationGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	navigationGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	navigationGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	navigationGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	navigationGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	navigationGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	navigationGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	navigationGlobalBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	navigationGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},

    /** Start Responsive Control */

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
    /** End Responsive Control */

	/** Start Class & ID Setting */
	navigationGlobalCustomCSS : {
        type: "string",
        default: "",
    },
	navigationGlobalWraperID : {
		type: "string",
		default: ""
	},

	navigationGlobalWraperClass : {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */
    
};

export default attributes;