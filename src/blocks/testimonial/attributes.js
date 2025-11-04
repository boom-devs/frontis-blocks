const attributes = {
    blockID: {
        type: 'string',
        default: ''
    },
    deviceType: {
        type: 'string',
        default: 'Desktop'
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },
    TestimonialPresetStyle: {
        type: 'string',
        default: 'preset-1',
    },
    TestimonialAlignment: {
        type: 'string',
        default: 'left',
    },

    TestimonialImageSwitcher: {
        type: 'boolean',
        default: true,
    },
    TestimonialImageUrl : {
        type: 'string',
    },
    TestimonialImageAlt : {
        type: 'string',
        default: 'Testimonial Image',
    },
    TestimonialImageID : {
        type: 'number',
    },

    TitleSwitcher: {
        type: 'boolean',
        default: true,
    },
    TestimonialTitle: {
        type: 'string',
        default: 'A game changer for us'
    },

    DescSwitcher: {
        type: 'boolean',
        default: true,
    },
    TestimonialDesc: {
        type : 'string',
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    AuthorSwitcher: {
        type: 'boolean',
        default: true,
    },
    TestimonialAuthor: {
        type : 'string',
        default: 'John Doe'
    },

    DesignationSwitcher: {
        type: 'boolean',
        default: true,
    },
    TestimonialDesignation: {
        type : 'string',
        default: 'CEO, Company Name'
    },

    RatingSwitcher: {
        type: 'boolean',
        default: true,
    },
    TestimonialRatingNumber: {
        type : 'number',
        default: 5,
    },
    TestimonialRatingicon: {
        type: 'string',
        default: 'star',
    },
    TestimonialRatingImageUrl: {
        type: 'string',
        default: '',
    },
    TestimonialRatingImageAlt: {
        type: 'string',
        default: '',
    },
    TestimonialRatingImageID: {
        type: 'number',
        default: '',
    },
    TestimonialRatinIconAlign: {
        type: 'string',
        default: 'icon',
    },
    QuoteIconSwitcher: {
        type: 'boolean',
        default: false,
    },
    TestimonialQuoteIcon: {
        type: 'string',
        default: 'quote-left',
    },
    TestimonialQuoteImageUrl: {
        type: 'string',
        default: '',
    },
    TestimonialQuoteImageAlt: {
        type: 'string',
        default: '',
    },
    TestimonialQuoteImageID: {
        type: 'number',
        default: '',
    },
    TestimonialQuoteIconAlign: {
        type: 'string',
        default: 'icon',
    },


    TestimonialImageWidth: {
        type: 'object',
        default: {
            Desktop: '60',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialImageWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },

    TestimonialImageObjectFit: {
        type: 'string',
        default: 'default',
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
        type: 'object', 
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    TestimonialImageTabRadiusWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialImageMobileRadiusWidth: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialImageRadiusLink : {
        type : 'boolean',
        default: true
    },

    /** Start Margin */
    TestimonialImageMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialImageMarginDesktop: {
        type: 'object', 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '14',
        },
    },
    TestimonialImageMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialImageMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialImageMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Margin */

    /** Start Image Icon Position */
    TestimonialImagePositionSwitcher: {
        type: 'boolean',
        default: false,
    },
    TestimonialImageTopPosition: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialImageTopPositionUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },

    TestimonialImageLeftPosition: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '',
            Mobile: ''
        }
    },  
    TestimonialImageLeftPositionUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },
    /** End Image Icon Position */


    TestimonialQuoteIconSize: {
        type: 'object',
        default: {
            Desktop: '60',
            Tablet: '',
            Mobile: ''
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
        type: 'string',
        default: 'normal'
    },
    TestimonialQuoteIconColor: {
        type: 'string',
        default: '#399CFF'
    },
    TestimonialQuoteIconHoverColor: {
        type: 'string',
        default: ''
    },
    TestimonialQuoteIconPositionSwitcher: {
        type: 'boolean',
        default: false,
    },
    TestimonialQuoteIconTopPosition: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '',
            Mobile: ''
        }
    },
    TestimonialQuoteIconTopPositionUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },

    TestimonialQuoteIconLeftPosition: {
        type: 'object',
        default: {
            Desktop: '0',
            Tablet: '',
            Mobile: ''
        }
    },  
    TestimonialQuoteIconLeftPositionUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },
    
    /** Start Quote Icon Margin */
    TestimonialQuoteIconMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialQuoteIconMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialQuoteIconMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialQuoteIconMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialQuoteIconMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Quote Icon Margin */



    /** Start Title */
    TestimonialTitleTag: {
        type: 'string',
        default: 'h3'
    },
    TestimonialTitleGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    TestimonialTitleGlobalTypoSwitcher: {
        type: 'object',
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
    TestimonialTitleGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    TestimonialTitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
    TestimonialTitleFontFamily: {
        type: 'string',
        default: 'Default',
    },
    TestimonialTitleFontSize: {
        type: 'object',
        default: {
            Desktop: '24',
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
        type: 'string',
        default: ''
    },
    TestimonialTitleFontStyle: {
        type: 'string',
        default: 'normal'
    },
    TestimonialTitleTextTransform: {
        type: 'string',
        default: 'none'
    },
    TestimonialTitleTextDecoration: {
        type: 'string',
        default: 'none'
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
        type: 'string',
        default: 'normal'
    },
    TestimonialTitleColor: {
        type: 'string',
        default: ''
    },
    TestimonialTitleHoverColor: {
        type: 'string',
        default: ''
    },

    /** Start Margin */
    TestimonialTitleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	TestimonialTitleMarginDesktop: {
		type: 'object', 
		default: {
			top: '14',
			bottom: '14',
			left: '0',
			right: '0',
		},
	},
	TestimonialTitleMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialTitleMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialTitleMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

    TestimonialDescGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    TestimonialDescGlobalTypoSwitcher: {
        type: 'object',
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
    TestimonialDescGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    TestimonialDescGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
    TestimonialDescFontFamily: {
        type: 'string',
        default: 'Default',
    },
    TestimonialDescFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
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
        type: 'string',
        default: ''
    },
    TestimonialDescFontStyle: {
        type: 'string',
        default: 'normal'
    },
    TestimonialDescTextTransform: {
        type: 'string',
        default: 'none'
    },
    TestimonialDescTextDecoration: {
        type: 'string',
        default: 'none'
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
        type: 'string',
        default: 'normal'
    },
    TestimonialDescColor: {
        type: 'string',
        default: ''
    },
    TestimonialDescHoverColor: {
        type: 'string',
        default: ''
    },
    /** Start Margin */
    TestimonialDescMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialDescMarginDesktop: {
        type: 'object', 
        default: {
            top: '0',
            bottom: '24',
            left: '0',
            right: '0',
        },
    },
    TestimonialDescMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialDescMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialDescMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Margin */


    TestimonialAuthorGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    TestimonialAuthorGlobalTypoSwitcher: {
        type: 'object',
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
    TestimonialAuthorGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    TestimonialAuthorGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
    TestimonialAuthorFontFamily: {
        type: 'string',
        default: 'Default',
    },
    TestimonialAuthorFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
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
        type: 'string',
        default: '700'
    },
    TestimonialAuthorFontStyle: {
        type: 'string',
        default: 'normal'
    },
    TestimonialAuthorTextTransform: {
        type: 'string',
        default: 'none'
    },
    TestimonialAuthorTextDecoration: {
        type: 'string',
        default: 'none'
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
        type: 'string',
        default: 'normal'
    },
    TestimonialAuthorColor: {
        type: 'string',
        default: ''
    },
    TestimonialAuthorHoverColor: {
        type: 'string',
        default: ''
    },

    /** Start Margin */
    TestimonialAuthorMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialAuthorMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialAuthorMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialAuthorMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialAuthorMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Margin */


    TestimonialDesignationGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    TestimonialDesignationGlobalTypoSwitcher: {
        type: 'object',
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
    TestimonialDesignationGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    TestimonialDesignationGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
    TestimonialDesignationFontFamily: {
        type: 'string',
        default: 'Default',
    },
    TestimonialDesignationFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
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
        type: 'string',
        default: ''
    },
    TestimonialDesignationFontStyle: {
        type: 'string',
        default: ''
    },
    TestimonialDesignationTextTransform: {
        type: 'string',
        default: ''
    },
    TestimonialDesignationTextDecoration: {
        type: 'string',
        default: ''
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
        type: 'string',
        default: 'normal'
    },
    TestimonialDesignationColor: {
        type: 'string',
        default: ''
    },
    TestimonialDesignationHoverColor: {
        type: 'string',
        default: ''
    },

        /** Start Margin */
    TestimonialDesignationMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    TestimonialDesignationMarginDesktop: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialDesignationMarginTablet: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialDesignationMarginMobile: {
        type: 'object', 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    TestimonialDesignationMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Margin */

    TestimonialRatingIconAlign: {
        type: 'string',
        default: 'flex-start',
    },
    TestimonialRatingIconGap: {
        type: 'object',
        default: {
            Desktop: '5',
            Tablet: '',
            Mobile: '',
        },
    },
    TestimonialRatingIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },

    TestimonialRatingIconSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '',
            Mobile: ''
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
        type: 'string',
        default: 'normal'
    },
    TestimonialRatingIconColor: {
        type: 'string',
        default: '#FFB400'
    },
    TestimonialRatingIconHoverColor: {
        type: 'string',
        default: ''
    },

    /** Start Margin */
	TestimonialRatingIconMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	TestimonialRatingIconMarginDesktop: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialRatingIconMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialRatingIconMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialRatingIconMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */


	/** Start Global Setting */
	TestimonialGlobalZIndex : {
        type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
    TestimonialOverflow: {
        type: 'string',
        default: 'default',
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
		type: 'object', 
		default: {
			top: '30',
			bottom: '30',
			left: '30',
			right: '30',
		},
	},
	TestimonialGlobalPaddingTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalPaddingMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalPaddingLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalMarginTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalMarginMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */


        /** Start Background */
	TestimonialGlobalBgColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	TestimonialGlobalBgNormalBackgroundType: {  
		type: 'string',
		default: 'classic',
	},
	TestimonialGlobalBgNormalClassicColor: {
		type: 'string',
		default: '#fefaf3',
	},
	TestimonialGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	TestimonialGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	TestimonialGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	TestimonialGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	TestimonialGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	TestimonialGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	TestimonialGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	TestimonialGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** End Background */

	/** Start Border */
	TestimonialGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	TestimonialGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	TestimonialGlobalBorderColor: {
		type: 'string',
		default: ''
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
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderLink : {
		type : 'boolean',
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
		type: 'object', 
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	TestimonialGlobalBorderRadiusTablet: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderRadiusMobile: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	TestimonialGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    TestimonialGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	TestimonialGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    TestimonialGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    TestimonialGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    TestimonialGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
    blockStyle: {
        type: 'string',
        default: '',
    },
    
    testimonialDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    testimonialTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    testimonialMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    /** Start Global Setting */
    testimonialCustomCSS : {
        type: 'string',
        default: '',
    },
	testimonialGlobalWraperID : {
		type: 'string',
		default: ''
	},
	testimonialGlobalWraperClass : {
		type: 'string',
		default: ''
	},

    testimonialPositionType: {
        type: 'string',
        default: 'default'
    },
    testimonialHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    testimonialVROrientationType: {
        type: 'string',
        default: 'top'
    },
    testimonialHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    testimonialHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    testimonialHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    testimonialHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    testimonialVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    testimonialVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    testimonialVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    testimonialVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
};

export default attributes;