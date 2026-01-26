const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
	blockStyle: {
        type: "string",
        default: "",
    },
	lottieAnimationJsonTypeSwitcher: {
        type: 'string',
        default: 'json-file',
    },
	lottieAnimationImageUrl: {
		type: 'string',
		default: ''
	},
	lottieAnimationImageAlt: {
		type: 'string',
		default: ''
	},	
	lottieAnimationImageID: {
		type: 'string',
		default: ''
	},
	lottieAnimationJsonUrl: {
        type: "string",
        default: "",
    },
    lottieAnimationJsonTargetUrl: {
        type: "boolean",
    },
	lottieAnimationDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    lottieAnimationTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    lottieAnimationMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
	lottieOpacitySwitcher: {
        type: 'string',
        default: 'normal',
    },
	lottieRenderer: {
        type: 'string',
		default: 'canvas'
    },
	lottieLoop: {
        type: 'boolean',
		default: true
    },
	lottieAutoplay: {
        type: 'boolean',
		default: true
    },
	lottieAnimationReverse: {
        type: 'boolean',
		default: false
    },
	lottieAnimationSpeed: {
        type: 'number',
    },
	lottieAnimationNormalOpacity: {
        type: 'number',
    },
	lottieAnimationHoverOpacity: {
        type: 'number',
    },
    lottieEffectsOnHover: {
        type: 'string',
    },
	lottieAnimationContainerHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    lottieAnimationContainerHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	lottieAnimationContainerWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    lottieAnimationContainerWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	/** Start Class & ID Setting */
	lottieAnimationGlobalWraperCustomCSS : {
		type: 'string',
		default: '',
	},
	lottieAnimationGlobalWraperID : {
		type: 'string',
		default: ''
	},

	lottieAnimationGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** Start Global Setting */
	lottieAnimationPositionType: {
        type: "string",
        default: "default"
    },
    lottieAnimationHZOrientationType: {
        type: "string",
        default: "left"
    },
    lottieAnimationVROrientationType: {
        type: "string",
        default: "top"
    },
    lottieAnimationHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    lottieAnimationHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    lottieAnimationHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    lottieAnimationHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    lottieAnimationVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    lottieAnimationVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    lottieAnimationVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    lottieAnimationVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	lottieAnimationGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },

    lottieAnimationOverflow: {
        type: 'string',
        default: "default",
    },
	/** Start Padding */
	lottieAnimationGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	lottieAnimationGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	lottieAnimationGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	lottieAnimationGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	lottieAnimationGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	lottieAnimationGlobalNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	lottieAnimationGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	lottieAnimationGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	lottieAnimationGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	lottieAnimationGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	lottieAnimationGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	lottieAnimationGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	lottieAnimationGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	lottieAnimationGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	lottieAnimationGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	lottieAnimationGlobalBorder: {
		type: 'string',
		default: "none",
	},
	lottieAnimationGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	lottieAnimationGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	lottieAnimationGlobalBorderHoverColor: {
		type: 'string',
	},
	lottieAnimationGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	lottieAnimationGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	lottieAnimationGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	lottieAnimationGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	lottieAnimationGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    lottieAnimationGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	lottieAnimationGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    lottieAnimationGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    lottieAnimationGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    lottieAnimationGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
};
export default attributes;
