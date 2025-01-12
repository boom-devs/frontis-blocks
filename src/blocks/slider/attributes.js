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
    transitionSwitcher : {
		type: "string",
		default: "slide"
	},
	transitionSpeed: {
		type: 'number',
		default: 800,
	},
    displayArrows: {
		type: 'boolean',
		default: true,
	},
	displayDots: {
		type: 'boolean',
		default: true,
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'number',
		default: 3000,
	},
	infiniteLoop: {
		type: 'boolean',
		default: true,
	},
    allowTouchMove: {
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

    /** Start Global Setting */
	arrowGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	/** Start Padding */
	arrowGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	arrowGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	arrowGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	arrowGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	arrowGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	arrowGlobalBgColor : {
		type: "string",
	},
	arrowGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	arrowGlobalBorder: {
		type: 'string',
		default: "none",
	},
	arrowGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	arrowGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	arrowGlobalBorderHoverColor: {
		type: 'string',
	},
	arrowGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	arrowGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	arrowGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	arrowGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	arrowGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    arrowGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	arrowGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    arrowGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    arrowGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    arrowGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

};

export default attributes;
