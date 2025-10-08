const attributes = {
    blockId: {
        type: "string",
        default: "",
    },

		// Internal
    blockStyle: {
        type: "string",
        default: "",
    },
    
    /** ============== General Settings ============== */
    isLink: {
        type: "boolean",
        default: false,
    },
    rel: {
        type: "string",
        default: "",
    },
    linkTarget: {
        type: "string",
        default: "_self",
    },
    useFirstImage: {
        type: "boolean",
        default: false,
    },
    
    // Image Settings
    imageSize: {
        type: "string",
        default: "large",
    },
    imageAlignment: {
        type: "object",
        default: {
            Desktop: "left",
            Tablet: "",
            Mobile: "",
        },
    },
    
    /** ============== Style Settings ============== */
		/** Image Size */
		mediaSize: {
			type: 'object',
			default: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			}
		},
		mediaHeight: {
			type: 'object',
			default: {
				Desktop: '',
				Tablet: '',
				Mobile: ''
			}
		},
		mediaSizeUnits: {
			type: 'object',
			default: {
				Desktop: '%',
				Tablet: '%',
				Mobile: '%',
			}
		},
		mediaHeightUnits: {
			type: 'object',
			default: {
				Desktop: 'px',
				Tablet: 'px',
				Mobile: 'px',
			}
		},

		autoHeightSwitch: {
			type: 'boolean',
			default: false,
		},

		autoFitSwitch: {
			type: 'boolean',
			default: false,
		},

		imageFit: {
			type: 'string',
			default: 'cover',
		},

    /** ============== Advanced Settings ============== */
    wrapperId: {
        type: "string",
        default: "",
    },
    wrapperClass: {
        type: "string",
        default: "",
    },
    featuredImageGlobalCustomCSS: {
        type: "string",
        default: "",
    },

		// Responsive Control
    featuredImageDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    featuredImageTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    featuredImageMobileSwitcher: {
        type: "boolean",
        default: false,
    },


		// Global
		postGlobalZIndex: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    
		postGlobalOverflow: {
			type: "string",
			default: "default",
		},

    /** Start Position */
    postGlobalPositionType: {
        type: "string",
        default: "default",
    },
    postGlobalHZOrientationType: {
		type: "string",
		default: "left",
	},
	postGlobalVROrientationType: {
		type: "string",
		default: "top",
	},
	postGlobalHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postGlobalVRBottomOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** End Position */
	/** Start Padding */
	postGlobalPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalPaddingDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalPaddingTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalPaddingMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalPaddingLink: {
		type: "boolean",
		default: true,
	},
	/** End Padding */

	/** Start Margin */
	postGlobalMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalMarginDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalMarginLink: {
		type: "boolean",
		default: true,
	},
	/** End Margin */

		/** Start Background */
	postGlobalBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postGlobalNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	postGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	postGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	postGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	postGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	postGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	postGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	postGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	postGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

		/** Start Border */
	postGlobalBorder: {
		type: "string",
		default: "none",
	},
	postGlobalBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	postGlobalBorderColor: {
		type: "string",
		default: "",
	},
	postGlobalBorderHoverColor: {
		type: "string",
	},
	postGlobalBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderLink: {
		type: "boolean",
		default: true,
	},
	/** End Border */

	/** Start Border Radius */
	postGlobalBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postGlobalBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	postGlobalBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	/** End Border Radius */

	/** Start Box Shadow */
	postGlobalBoxShadowSwitcher: {
		type: "string",
		default: "normal",
	},
	postGlobalBoxShadowValues: {
		type: "array",
		default: [],
	},
	postGlobalBoxShadowCssValue: {
		type: "string",
		default: "",
	},
	postGlobalBoxShadowHoverValues: {
		type: "array",
		default: [],
	},
	postGlobalBoxShadowHoverCssValue: {
		type: "string",
		default: "",
	},


};

export default attributes;