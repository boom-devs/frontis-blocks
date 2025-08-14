const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },

    speed: {
        type: 'number',
        default: 3000,
    },
	reverseDirection : {
		type: 'boolean',
		default: false,
	},

    /** Start Width Height */
    slideWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    slideHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideHeightUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Width Height */

	/** Start slide Padding */
	slidePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	slidePaddingDesktop: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '5',
		},
	},
	slidePaddingTablet: {	
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '5',
		},
	},
	slidePaddingMobile: {
		type: 'object',
		default: {
			top: '0',
			bottom: '0',
			left: '5',
			right: '5',
		},
	},
	slidePaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End slide Padding */

    /** Start Overlay */
    sliderOverlaySwitcher: {
        type: 'boolean',
        default: true,
    },
    sliderOverlayStartColor: {
        type: 'string',
        default: '#FFFFFF',
    },
    sliderOverlayEndColor: {
        type: 'string',
        default: '#FFFFFF00',
    },
    sliderOverlayWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100',
        },
    },
    sliderOverlayWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    /** End Overlay */

    /** Start Global Setting */
	sliderGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderGlobalOverflow: {
        type: 'string',
        default: 'default',
    },
    sliderGlobalWraperID : {
        type: 'string',
        default: ''
    },

    sliderGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	sliderGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	sliderGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

    /** Start Background Normal for slider */
	sliderGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	sliderGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	sliderGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	sliderGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	sliderGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for slider */
	sliderGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    sliderGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

	/**Bg Hover for slider */
	sliderGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	sliderGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	sliderGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	sliderGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	sliderGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	/** Hover Image for slider */
	sliderGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	sliderGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	sliderGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for slider */

	/** Start Border */
	sliderGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	sliderGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	sliderGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	sliderGlobalBorderHoverColor: {
		type: 'string',
	},
	sliderGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    sliderGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	sliderGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    sliderGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    sliderGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    sliderGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    sliderGlobalCustomCSS : { 
        type: 'string',
        default: '',
    },
    /** End Global Style */
    
};

export default attributes;
