const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    TestimonialAlignment: {
        type: "string",
        default: "center",
    },

    TestimonialImageSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialImageUrl : {
        type: "string",
    },
    TestimonialImageAlt : {
        type: "string",
    },
    TestimonialImageID : {
        type: "number",
    },

    TitleSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialTitle: {
        type: "string",
        default: "A game changer for us"
    },

    DescSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialDesc: {
        type : "string",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    AuthorSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialAuthor: {
        type : "string",
        default: "John Doe"
    },

    DesignationSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialDesignation: {
        type : "string",
        default: "CEO, Company Name"
    },

    RatingSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialRatingNumber: {
        type : "number",
        default: 5,
    },
    TestimonialRatingicon: {
        type: 'string',
        default: 'star',
    },
    TestimonialRatinIconAlign: {
        type: "string",
        default: "icon",
    },
    QuoteIconSwitcher: {
        type: "boolean",
        default: true,
    },
    TestimonialQuoteIcon: {
        type: 'string',
        default: 'quote-left',
    },
    TestimonialQuoteIconAlign: {
        type: "string",
        default: "icon",
    },


    TestimonialImageWidth: {
        type: "object",
        default: {
            Desktop: 100,
            Tablet: 100,
            Mobile: 100
        }
    },
    TestimonialImageWidthUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        }
    },

    TestimonialImageRadiusUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
    },
    TestimonialImageDesktopRadiusWidth: {
        type: "object", 
        default: {
            top: "50",
            bottom: "50",
            left: "50",
            right: "50",
        },
    },
    TestimonialImageTabRadiusWidth: {
        type: "object", 
        default: {
            top: "50",
            bottom: "50",
            left: "50",
            right: "50",
        },
    },
    TestimonialImageMobileRadiusWidth: {
        type: "object", 
        default: {
            top: "50",
            bottom: "50",
            left: "50",
            right: "50",
        },
    },
    TestimonialImageRadiusLink : {
        type : "boolean",
        default: true
    },

    TestimonialQuoteIconSize: {
        type: 'object',
        default: {
            Desktop: 100,
            Tablet: 100,
            Mobile: 100
        }
    },
    TestimonialQuoteIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialQuoteIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    TestimonialQuoteIconColor: {
        type: "string",
        default: "#399CFF"
    },
    TestimonialQuoteIconHoverColor: {
        type: 'string',
        default: "#399CFF"
    },

    TestimonialTitleFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialTitleFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialTitleFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialTitleFontWeight: {
        type: "string",
        default: "600"
    },
    TestimonialTitleFontStyle: {
        type: "string",
        default: "normal"
    },
    TestimonialTitleTextTransform: {
        type: "string",
        default: "none"
    },
    TestimonialTitleTextDecoration: {
        type: "string",
        default: "none"
    },
    TestimonialTitleLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialTitleLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialTitleLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialTitleLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialTitleColorSwitcher: {
        type: "string",
        default: "normal"
    },
    TestimonialTitleColor: {
        type: "string",
        default: ""
    },
    TestimonialTitleHoverColor: {
        type: 'string',
        default: ""
    },


    TestimonialDescFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialDescFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialDescFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialDescFontWeight: {
        type: "string",
        default: "400"
    },
    TestimonialDescFontStyle: {
        type: "string",
        default: "normal"
    },
    TestimonialDescTextTransform: {
        type: "string",
        default: "none"
    },
    TestimonialDescTextDecoration: {
        type: "string",
        default: "none"
    },
    TestimonialDescLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialDescLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialDescLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialDescLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialDescColorSwitcher: {
        type: "string",
        default: "normal"
    },
    TestimonialDescColor: {
        type: "string",
        default: ""
    },
    TestimonialDescHoverColor: {
        type: 'string',
        default: ""
    },


    TestimonialAuthorFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialAuthorFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialAuthorFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialAuthorFontWeight: {
        type: "string",
        default: "700"
    },
    TestimonialAuthorFontStyle: {
        type: "string",
        default: "normal"
    },
    TestimonialAuthorTextTransform: {
        type: "string",
        default: "none"
    },
    TestimonialAuthorTextDecoration: {
        type: "string",
        default: "none"
    },
    TestimonialAuthorLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialAuthorLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialAuthorLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialAuthorLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialAuthorColorSwitcher: {
        type: "string",
        default: "normal"
    },
    TestimonialAuthorColor: {
        type: "string",
        default: ""
    },
    TestimonialAuthorHoverColor: {
        type: 'string',
        default: ""
    },


    TestimonialDesignationFontFamily: {
        type: "string",
        default: "inherit",
    },
    TestimonialDesignationFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialDesignationFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialDesignationFontWeight: {
        type: "string",
        default: ""
    },
    TestimonialDesignationFontStyle: {
        type: "string",
        default: ""
    },
    TestimonialDesignationTextTransform: {
        type: "string",
        default: ""
    },
    TestimonialDesignationTextDecoration: {
        type: "string",
        default: ""
    },
    TestimonialDesignationLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialDesignationLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialDesignationLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialDesignationLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    TestimonialDesignationColorSwitcher: {
        type: "string",
        default: "normal"
    },
    TestimonialDesignationColor: {
        type: "string",
        default: ""
    },
    TestimonialDesignationHoverColor: {
        type: 'string',
        default: ""
    },


    TestimonialRatingIconSize: {
        type: 'object',
        default: {
            Desktop: 20,
            Tablet: 20,
            Mobile: 20
        }
    },
    TestimonialRatingIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialRatingIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    TestimonialRatingIconColor: {
        type: "string",
        default: "#FFB400"
    },
    TestimonialRatingIconHoverColor: {
        type: 'string',
        default: "#FFB400"
    },


	/** Start Global Setting */
	TestimonialGlobalZIndex : {
        type: "number",
    },
	/** Start Padding */
	TestimonialGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	TestimonialGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	TestimonialGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	TestimonialGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	TestimonialGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	TestimonialGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	TestimonialGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	TestimonialGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	TestimonialGlobalBgColor : {
		type: "string",
	},
	TestimonialGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	TestimonialGlobalBorder: {
		type: 'string',
		default: "none",
	},
	TestimonialGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	TestimonialGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	TestimonialGlobalBorderHoverColor: {
		type: 'string',
	},
	TestimonialGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	TestimonialGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	TestimonialGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	TestimonialGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	TestimonialGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	TestimonialGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	TestimonialGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	TestimonialGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    TestimonialGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
    
};

export default attributes;