const attributes = {
    blockID: {
        type: 'string',
        default: ''
    },
	blockStyle: {
        type: 'string',
        default: '',
    },

	/** Start Global Setting */
	coverflowCarouselGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	coverflowCarouselOverflow: {
        type: 'string',
        default: 'default',
    },
	/** Start Padding */
	coverflowCarouselGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalPaddingDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	coverflowCarouselGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background */
	coverflowCarouselGlobalBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	coverflowCarouselGlobalBgColor : {
		type: 'string',
	},
	coverflowCarouselGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	coverflowCarouselGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	coverflowCarouselGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	coverflowCarouselGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalBorderHoverColor: {
		type: 'string',
	},
	coverflowCarouselGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalBorderDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	coverflowCarouselGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	coverflowCarouselGlobalBorderRadiusDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	coverflowCarouselGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	coverflowCarouselGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    coverflowCarouselGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

	coverflowCarouselDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    coverflowCarouselTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    coverflowCarouselMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	coverflowCarouselPositionType: {
        type: 'string',
        default: 'default'
    },
    coverflowCarouselHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    coverflowCarouselVROrientationType: {
        type: 'string',
        default: 'top'
    },
    coverflowCarouselHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    coverflowCarouselHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    coverflowCarouselHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    coverflowCarouselHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    coverflowCarouselVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    coverflowCarouselVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    coverflowCarouselVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    coverflowCarouselVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	/** Start Class & ID Setting */
	coverflowCarouselGlobalWraperCustomCSS : { 
		type: 'string',
		default: '',
	},
	coverflowCarouselGlobalWraperID : {
		type: 'string',
		default: ''
	},
	coverflowCarouselGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */
};

export default attributes;
