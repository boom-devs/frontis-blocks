const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
	riveAnimationJsonTypeSwitcher: {
        type: 'string',
        default: 'json-file',
    },
	riveAnimationImageUrl: {
		type: 'string',
		default: ''
	},
	riveAnimationImageAlt: {
		type: 'string',
		default: ''
	},	
	riveAnimationImageID: {
		type: 'string',
		default: ''
	},
	riveAnimationJsonUrl: {
        type: "string",
        default: "",
    },
    riveAnimationJsonTargetUrl: {
        type: "boolean",
    },
	riveAnimationDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    riveAnimationTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    riveAnimationMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	riveOpacitySwitcher: {
        type: 'string',
        default: 'normal',
    },
	riveRenderer: {
        type: 'string',
		default: 'canvas'
    },
	riveLoop: {
        type: 'boolean',
		default: true
    },
	riveAutoplay: {
        type: 'boolean',
		default: true
    },
	riveAnimationReverse: {
        type: 'boolean',
		default: false
    },
	riveAnimationSpeed: {
        type: 'number',
    },
	riveAnimationNormalOpacity: {
        type: 'number',
    },
	riveAnimationHoverOpacity: {
        type: 'number',
    },
    riveEffectsOnHover: {
        type: 'string',
    },
	riveAnimationContainerHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    riveAnimationContainerHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	riveAnimationContainerWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    riveAnimationContainerWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	riveAnimationCanvasWidth: {
		type: "object",
        default: {
            Desktop: '500',
            Tablet: '',
            Mobile: '',
        }
	},
	riveAnimationCanvasHeight: {
		type: "object",
        default: {
            Desktop: '300',
            Tablet: '',
            Mobile: '',
        }
	},
	/** Start Class & ID Setting */
	riveAnimationGlobalWraperCustomCSS : {
		type: 'string',
		default: '',
	},
	riveAnimationGlobalWraperID : {
		type: 'string',
		default: ''
	},

	riveAnimationGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** Start Global Setting */
	riveAnimationPositionType: {
        type: "string",
        default: "default"
    },
    riveAnimationHZOrientationType: {
        type: "string",
        default: "left"
    },
    riveAnimationVROrientationType: {
        type: "string",
        default: "top"
    },
    riveAnimationHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    riveAnimationHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    riveAnimationHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    riveAnimationHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    riveAnimationVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    riveAnimationVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    riveAnimationVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    riveAnimationVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	riveAnimationGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },

    riveAnimationOverflow: {
        type: 'string',
        default: "default",
    },
	/** Start Padding */
	riveAnimationGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	riveAnimationGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	riveAnimationGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	riveAnimationGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	riveAnimationGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	riveAnimationGlobalNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	riveAnimationGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	riveAnimationGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	riveAnimationGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	riveAnimationGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	riveAnimationGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	riveAnimationGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	riveAnimationGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	riveAnimationGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	riveAnimationGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	riveAnimationGlobalBorder: {
		type: 'string',
		default: "none",
	},
	riveAnimationGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	riveAnimationGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	riveAnimationGlobalBorderHoverColor: {
		type: 'string',
	},
	riveAnimationGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	riveAnimationGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	riveAnimationGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	riveAnimationGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	riveAnimationGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    riveAnimationGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	riveAnimationGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    riveAnimationGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    riveAnimationGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    riveAnimationGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
};
export default attributes;
