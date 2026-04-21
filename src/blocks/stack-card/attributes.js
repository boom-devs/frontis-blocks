const attributes = {
	blockID: {
        type: 'string',
        default: ''
    },
    deviceType: {
        type: 'string',
        default: 'Desktop'
    },
	blockStyle: {
        type: 'string',
        default: '',
    },
	stackCardsDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	stackCardsCustomCSS : {
        type: 'string',
        default: '',
    },
	stackCardsGlobalWraperID : {
		type: 'string',
		default: ''
	},
	stackCardsGlobalWraperClass : {
		type: 'string',
		default: ''
	},

	/** Start Global Setting */
	stackCardsGlobalZIndex : {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
    stackCardsOverflow: {
        type: 'string',
        default: 'default',
    },
	/** Start Padding */
	stackCardsGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalPaddingDesktop: {
		type: 'object', 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	stackCardsGlobalPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	stackCardsGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */


    /** Start Background */
	stackCardsGlobalBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	stackCardsGlobalBgNormalBackgroundType: {  
		type: 'string',
		default: 'classic',
	},
	stackCardsGlobalBgNormalClassicColor: {
		type: 'string',
		default: '#fefaf3',
	},
	stackCardsGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardsGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardsGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	stackCardsGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	stackCardsGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	stackCardsGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardsGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardsGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	stackCardsGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	stackCardsGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	stackCardsGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	stackCardsGlobalBorderHoverColor: {
		type: 'string',
	},
	stackCardsGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalBorderDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	stackCardsGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	stackCardsGlobalBorderRadiusDesktop: {
		type: 'object', 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	stackCardsGlobalBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardsGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    stackCardsGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	stackCardsGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    stackCardsGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    stackCardsGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    stackCardsGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
    
    stackCardsGlobalDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsGlobalTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    stackCardsGlobalMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    /** Start Global Setting */
    stackCardsGlobalCustomCSS : {
        type: 'string',
        default: '',
    },

    stackCardsPositionType: {
        type: 'string',
        default: 'default'
    },
    stackCardsHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    stackCardsVROrientationType: {
        type: 'string',
        default: 'top'
    },
    stackCardsHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    stackCardsHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    stackCardsVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    stackCardsVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    stackCardsVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

};
export default attributes;