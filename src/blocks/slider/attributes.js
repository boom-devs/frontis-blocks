const slideCount = 3;
const slideContent = [];

for ( let i = 1; i <= slideCount; i++ ) {
	slideContent.push( {
		isPreview: false,
	} );
}

const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    slideContent: {
        type: "array",
		default: slideContent
    },
    slideItem: {
        type: "number",
        default: slideCount
    },

    slidePerView: {
		type: 'number',
		default: 1,
	},
    spaceBetween: {
		type: 'number',
		default: 0,
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	autoplay: {
		type: 'boolean',
		default: false,
	},
    autoplaySpeed: {
        type: 'number',
        default: 2000,
    },
	loop: {
		type: 'boolean',
		default: true,
	},
    allowTouchMove: {
		type: 'boolean',
		default: true,
	},
    pauseOnHover: {
        "type": "boolean",
        "default": false
    },
    stopOnLastSlide: {
        "type": "boolean",
        "default": false
    },
    reverseDirection: {
        "type": "boolean",
        "default": false
    },
    enableKeyboardControl: {
        "type": "boolean",
        "default": true
    },
    enableMouseWheel: {
        "type": "boolean",
        "default": false
    },
    effect: {
        type: 'string',
        default: 'slide'
    },
    displayArrows: {
		type: 'boolean',
		default: true,
	},
	displayDots: {
		type: 'boolean',
		default: true,
	},
	paginationType: {
        type: "string",
        default: "bullets"
    },

	/** Start Arrows Style */
	sliderArrowsSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16',
		},
	},
	sliderArrowsSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderArrowsColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderArrowsColor: {
		type: 'string',
		default: '#333333',
	},
	sliderArrowsColorHover: {
		type: 'string',
		default: '',
	},

    /** Start Background */
	sliderArrowsBgColorSwitcher : { 
		type: "string",
		default: "normal"
	},
	sliderArrowsBgColor: {
		type: 'string',
		default: '#efefef',
	},
	sliderArrowsBgColorHover: {
		type: 'string',
		default: '',
	},
	/** End Background */

	sliderArrowsWidth: {
		type: 'object',
		default: {
			Desktop: '46',
			Tablet: '46',
			Mobile: '46',
		},
	},
	sliderArrowsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderArrowsHeight: {
		type: 'object',
		default: {
			Desktop: '46',
			Tablet: '46',
			Mobile: '46',
		},
	},
	sliderArrowsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	sliderArrowsBorder: { 
		type: 'string',
		default: "none",
	},
	sliderArrowsBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	sliderArrowsBorderColor: {
		type: 'string',
		default: ""
	},
	sliderArrowsBorderHoverColor: {
		type: 'string',
	},
	sliderArrowsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderArrowsBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderArrowsBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderArrowsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderArrowsBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderArrowsBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderArrowsBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderArrowsBorderRadiusLink : {
		type : "boolean",
		default: true
	},

	/** Start Box Shadow */
	sliderArrowsBoxShadowSwitcher: { 
		type: 'string',
		default: 'normal',
	},
	sliderArrowsBoxShadowValues: {
		type: 'array',
		default: [],
	},
	sliderArrowsBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	sliderArrowsBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	sliderArrowsBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */

	sliderArrowsPosition: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '50',
			Mobile: '50',
		},
	},
	sliderArrowsPositionUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},
	sliderArrowsRightOffset: {
		type: 'object',
		default: {
			Desktop: '-20',
			Tablet: '-20',
			Mobile: '-20',
		},
	},
	sliderArrowsRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderArrowsLeftOffset: {
		type: 'object',
		default: {
			Desktop: '-20',
			Tablet: '-20',
			Mobile: '-20',
		},
	},
	sliderArrowsLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	/** End Arrows Style */

	/** Start Dots Style */
	sliderDotsMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderDotsMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderDotsMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderDotsMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderDotsMarginLink : {
		type : "boolean",
		default: true
	},

	sliderDotsPosition: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderDotsPositionUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		},
	},

	sliderDotsSwitcher: {
		type: 'string',
		default: 'normal',
	},
	sliderNormalDotsBgColor: {
		type: 'string',
		default: '#333333',
	},
	sliderActiveDotsBgColor: {
		type: 'string',
		default: '',
	},
	sliderNormalDotsWidth: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '8',
			Mobile: '8',
		},
	},
	sliderNormalDotsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderNormalDotsHeight: {
		type: 'object',
		default: {
			Desktop: '8',
			Tablet: '8',
			Mobile: '8',
		},
	},
	sliderNormalDotsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	sliderNormalDotsBorder: { 
		type: 'string',
		default: "none",
	},
	sliderNormalDotsBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	sliderNormalDotsBorderColor: {
		type: 'string',
		default: ""
	},
	sliderNormalDotsBorderHoverColor: {
		type: 'string',
	},
	sliderNormalDotsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderNormalDotsBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderNormalDotsBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderNormalDotsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderNormalDotsBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderNormalDotsBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderNormalDotsBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	sliderNormalDotsBorderRadiusLink : {
		type : "boolean",
		default: true
	},

	sliderActiveDotsWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderActiveDotsWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	sliderActiveDotsHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	sliderActiveDotsHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},

	/** Start Border */
	sliderActiveDotsBorder: { 
		type: 'string',
		default: "none",
	},
	sliderActiveDotsBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	sliderActiveDotsBorderColor: {
		type: 'string',
		default: ""
	},
	sliderActiveDotsBorderHoverColor: {
		type: 'string',
	},
	sliderActiveDotsBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderActiveDotsBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	sliderActiveDotsBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	sliderActiveDotsBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderActiveDotsBorderRadiusLink : {
		type : "boolean",
		default: true
	},


	/** End Dots Style */

    /** Start Global Setting */
	sliderGlobalZIndex: {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderOverflow: {
        type: 'string',
        default: "default",
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
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	sliderGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	sliderGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	sliderGlobalPaddingLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

    /** Start Background */
	sliderGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	sliderGlobalBgNormalBackgroundType: {  
		type: "string",
		default: "classic",
	},
	sliderGlobalBgNormalClassicColor: {
		type: "string",
		default: "",
	},
	sliderGlobalBgNormalGradientColor: {
		type: "string",
		default: null,
	},
	sliderGlobalBgNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	sliderGlobalBgNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	sliderGlobalBgHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	sliderGlobalBgHoverClassicColor: {
		type: "string",
		default: "",
	},
	sliderGlobalBgHoverGradientColor: {
		type: "string",
		default: null,
	},
	sliderGlobalBgHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	sliderGlobalBgHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	sliderGlobalBorder: {
		type: 'string',
		default: "none",
	},
	sliderGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	sliderGlobalBorderColor: {
		type: 'string',
		default: ""
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
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderLink : {
		type : "boolean",
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
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	sliderGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	sliderGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	sliderGlobalBorderRadiusLink : {
		type : "boolean",
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

    sliderDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    sliderTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    sliderMobileSwitcher: {
        type: "boolean",
        default: false,
    },


    /** Start Class & ID Setting */
    sliderGlobalWraperClass : {
        type: "string",
        default: ""
    },
    sliderGlobalCustomCSS : {
        type: "string",
        default: "",
    },
    /** End Class & ID Setting */

    /** Start Position */
    sliderPositionType: {
        type: "string",
        default: "default"
    },
    sliderHZOrientationType: {
        type: "string",
        default: "left"
    },
    sliderVROrientationType: {
        type: "string",
        default: "top"
    },
    sliderHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    sliderHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    sliderVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    sliderVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sliderVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Position */

    /** Start Dots Style */
	sliderDotsSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16',
		},
	},
	sliderDotsSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
};

export default attributes;
