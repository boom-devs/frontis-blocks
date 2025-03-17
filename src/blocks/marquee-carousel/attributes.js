const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },
    sliderItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                marqueeCarouselImageUrl:'',
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
                showContentSwitcher: true,
                marqueeCarouselText: 'Carousel Text',
                marqueeCarouseHoverText: '',
            },
            {
                id: 'item-2',
                marqueeCarouselImageUrl:'',
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
                showContentSwitcher: true,
                marqueeCarouselText: 'Carousel Text',
                marqueeCarouseHoverText: '',
            },
            {
                id: 'item-3',
                marqueeCarouselImageUrl: '',
                marqueeCarouselImageAlt: '',
                marqueeCarouselImageID: '',
                showContentSwitcher: true,
                marqueeCarouselText: 'Carousel Text',
                marqueeCarouseHoverText: '',
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                marqueeCarouselImageUrl: {
                    type: "string",
                    default: ''
                },
                marqueeCarouselImageAlt: {
                    type: "string",
                    default: ""
                },
                marqueeCarouselImageID: {
                    type: "number",
                    default: ""
                },
                showContentSwitcher: {
                    type: "boolean",
                    default: true
                },
                marqueeCarouselText    : {
                    type: "string",
                    default: "Carousel Text"
                },
                marqueeCarouseHoverText: {
                    type: "string",
                    default: ""
                },
            }
        }
    },

    speed: {
        type: 'number',
        default: 1500,
    },
    autoplay: {
        type: 'boolean',
        default: false,
    },
    autoplayDirection: {
        type: 'string',
        default: false,
    },
    showNavigation: {
		type: 'boolean',
		default: false,
	},
	showPagination: {
		type: 'boolean',
		default: false,
	},

    /** Start Width */
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
    /** End Width */

    /** Start Padding */
    slidePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    slideDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    slideTabletPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    slideMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    slidePaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Padding */

    /** Start Margin */ 
    slideMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    slideDesktopMargin: {
        type: "object", 
        default: {
            top: "30",
            bottom: "30",
            left: "30",
            right: "30",
        },
    },
    slideTabletMargin: {
        type: "object", 
        default: {
            top: "20",
            bottom: "20",
            left: "20",
            right: "20",
        },
    },
    slideMobileMargin: {
        type: "object", 
        default: {
            top: "10",
            bottom: "10",
            left: "10",
            right: "10",
        },
    },
    slideMarginLink: {
        type: "boolean",
        default: true
    },
    /** End Style */

    slideTextColorSwitcher: {
        type: "string",
        default: "normal"
    },
    slideTextColor: {
        type: "string",
        default: ""
    },
    slideTextHoverColor: {
        type: "string",
        default: ""
    },


    slideTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    slideTextGlobalTypoSwitcher: {
        type: "object",
        default: {
            fontFamily: false,
            fontSize: false,
            fontWeight: false,
            fontStyle: false,
            textTransform: false,
            textDecoration: false,
            letterSpacing: false,
            lineHeight: false,
        },
    },
    slideTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    slideTextGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
    slideTextFontFamily: {
        type: "string",
        default: "Default",
    },
    slideTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    slideTextFontWeight : {
        type: "string",
        default: ""
    },
    slideTextFontStyle : {
        type: "string",
        default: ""
    },
    slideTextTransform : {
        type: "string",
        default: ""
    },
    slideTextDecoration : {
        type: "string",
        default: ""
    },
    slideTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    slideTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	slideTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    /** Start Margin */ 
    slideImageMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    slideImageDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    slideImageTabletMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    slideImageMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    slideImageMarginLink: {
        type: "boolean",
        default: true
    },

    /** Start Z Index */
    sliderGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    /** End Z Index */
    
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
	sliderGlobalBgColor : {
		type: "string",
	},
	sliderGlobalBgHoverColor: {
		type: 'string',
	},

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
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	sliderGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
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
    /** End Box Shadow */
    
};

export default attributes;
