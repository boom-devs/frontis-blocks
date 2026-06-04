const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	blockStyle: {
		type: 'string',
		default: ''
	},

	// Responsive gutter / gap (px)
	gutter: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '8',
			Mobile: '6'
		}
	},
	gutterUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// Layout behavior
	compactType: {
		type: 'string',
		default: 'vertical'
	},
	allowOverlap: {
		type: 'boolean',
		default: false
	},

	// Master layout store — per-breakpoint positions
	layouts: {
		type: 'object',
		default: {
			Desktop: [],
			Tablet: [],
			Mobile: []
		}
	},


    /** Start Global Setting */
	gridLayoutGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

    gridLayoutGlobalWraperID : {
        type: 'string',
        default: ''
    },

    gridLayoutGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	gridLayoutGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	gridLayoutGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	gridLayoutGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	gridLayoutGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

    /** Start Global Background */
    gridLayoutGlobalBgColorTypeSwitcher: { 
        type: 'string',
        default: 'normal'
    },
    gridLayoutGlobalBgColorType: {  
        type: 'string',
        default: 'classic',
    },
    gridLayoutGlobalBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    gridLayoutGlobalBgColor: {
        type: 'string',
    },
    gridLayoutGlobalBgHoverColor: {
        type: 'string',
    },
    gridLayoutGlobalBgGradientColor: {
        type: 'string',
        default: null
    },
    gridLayoutGlobalBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    gridLayoutGlobalBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    gridLayoutGlobalBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    gridLayoutGlobalBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    gridLayoutGlobalBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
	/** End Global Background */

	/** Start Global Border */
	gridLayoutGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	gridLayoutGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	gridLayoutGlobalBorderColor: {  
		type: 'string',
		default: ''
	},
	gridLayoutGlobalBorderHoverColor: {
		type: 'string',
	},
	gridLayoutGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	gridLayoutGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	gridLayoutGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	gridLayoutGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	gridLayoutGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    gridLayoutGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	gridLayoutGlobalBoxShadowValues: { 
        type: 'array',
        default: [],
    },
    gridLayoutGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    gridLayoutGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    gridLayoutGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    gridLayoutGlobalCustomCSS : { 
        type: 'string',
        default: '',
    },
    /** End Global Box Shadow */
};

export default attributes;
