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
		default: true,
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
        default: 'creative'
    },
    displayArrows: {
		type: 'boolean',
		default: true,
	},
	displayDots: {
		type: 'boolean',
		default: true,
	},



	/*{Arrows Style}*/
	sliderArrowColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    sliderArrowColor: {
        type: 'string',
        default: '',
    },
    sliderArrowHoverColor: {
        type: 'string',
        default: '',
    },
	sliderArrowBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    sliderArrowBgColor: {
        type: 'string',
        default: '',
    },
    sliderArrowBgHoverColor: {
        type: 'string',
        default: '',
    },
    /** Arrow Size */
    arrowSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '18',
            Mobile: '16'
        }
    },
    arrowSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** Arrow Space From Edges */
    arrowSpaceFromEdges: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '0',
            Mobile: '0'
        }
    },
    arrowSpaceFromEdgesUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** Arrow Spacing */
    arrowPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowTabPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowPaddingLink: {
        type: "boolean",
        default: true
    },
    arrowMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    arrowTabMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    arrowMobileMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    arrowMarginLink: {
        type: "boolean",
        default: true
    },
    
    /** Arrow Border */
    arrowBorder: {
        type: 'string',
        default: "none",
    },
    arrowBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    arrowBorderColor: {
        type: 'string',
    },
    arrowBorderHoverColor: {
        type: 'string',
    },
    arrowBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowTabletBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowMobileBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowBorderLink: {
        type: "boolean",
        default: true
    },
    arrowBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowTabletBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowMobileBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    /** Arrow Space From Edges */
    dotsSpacingFromTop: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '0',
            Mobile: '0'
        }
    },
    dotsSpacingFromTopUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	/*{Arrows Style}*/
	sliderArrowColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    sliderArrowColor: {
        type: 'string',
        default: '',
    },
    sliderArrowHoverColor: {
        type: 'string',
        default: '',
    },
	sliderArrowBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    sliderArrowBgColor: {
        type: 'string',
        default: '',
    },
    sliderArrowBgHoverColor: {
        type: 'string',
        default: '',
    },
    /** Arrow Size */
    arrowSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '18',
            Mobile: '16'
        }
    },
    arrowSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** Arrow Space From Edges */
    arrowSpaceFromEdges: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '0',
            Mobile: '0'
        }
    },
    arrowSpaceFromEdgesUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** Arrow Spacing */
    arrowPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowTabPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowPaddingLink: {
        type: "boolean",
        default: true
    },
    arrowMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    arrowTabMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    arrowMobileMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    arrowMarginLink: {
        type: "boolean",
        default: true
    },
    
    /** Arrow Border */
    arrowBorder: {
        type: 'string',
        default: "none",
    },
    arrowBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    arrowBorderColor: {
        type: 'string',
    },
    arrowBorderHoverColor: {
        type: 'string',
    },
    arrowBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowTabletBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowMobileBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowBorderLink: {
        type: "boolean",
        default: true
    },
    arrowBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    arrowDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowTabletBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowMobileBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    arrowBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    /** Arrow Space From Edges */
    dotsSpacingFromTop: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '0',
            Mobile: '0'
        }
    },
    dotsSpacingFromTopUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    
    

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
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
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
};

export default attributes;
