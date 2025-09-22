const attributes = {
    blockId: {
        type: 'string',
        default: ''
    },
    blockStyle: {
        type: 'string',
        default: ''
    },

    postTitleTag: {
        type: 'string',
        default: 'h2'
    },
    titleExcerptLength: {
        type: 'number'
    },
    titleAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: 'left',
            Mobile: 'left',
        },
    },
    isLink: {
        type: 'boolean',
        default: false
    },
    rel: {
        type: 'string',
        default: ''
    },
    linkTarget: {
        type: 'string',
        default: '_self'
    },
    
	/** Start Title */
	postTitleGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	postTitleGlobalTypoSwitcher: {
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
	postTitleGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	postTitleGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	postTitleFontFamily: {
		type: 'string',
		default: 'inherit',
	},
	postTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postTitleFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTitleFontWeight: {
		type: 'string',
		default: '600'
	},
	postTitleFontStyle: {
		type: 'string',
		default: 'normal'
	},
	postTitleTextTransform: { 
		type: 'string',
		default: 'none'
	},
	postTitleTextDecoration: {
		type: 'string',
		default: 'none'
	},
	postTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	postTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	postTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	postTitleColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	postTitleColor : {
		type: 'string',
		default: ''
	},
	postTitleHoverColor: {
		type: 'string',
		default: ''
	},

    titleTextShadowValues: {
		type: "array",
		default: [],
	},
	titleTextShadowCssValue: {
		type: "string",
		default: "",
	},
	titleTextStroke: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	titleTextStrokeColorSwitcher: {
		type: "string",
		default: "normal",
	},
	titleTextStrokeColor: {
		type: "string",
		default: "#399CFF",
	},
	titleTextStrokeHoverColor: {
		type: "string",
		default: "#399CFF",
	},

    /** End Title */

    /** Start Global Setting */
    wrapperId: {
        type: 'string',
        default: ''
    },
    wrapperClass: {
        type: 'string',
        default: ''
    },
    postTitleGlobalCustomCSS: {
        type: 'string',
        default: ''
    },
    postTitleGlobalZIndex: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    postTitleOverflow: {
        type: "string",
        default: "default",
    },

    /** Responsive Control */
    postTitleDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    postTitleTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    postTitleMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Position */
    postTitlePositionType: {
        type: "string",
        default: "default",
    },
    postTitleHZOrientationType: {
		type: "string",
		default: "left",
	},
	postTitleVROrientationType: {
		type: "string",
		default: "top",
	},
	postTitleHZLeftOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleHZLeftOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postTitleHZRightOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleHZRightOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postTitleVRTopOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleVRTopOffsetUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	postTitleVRBottomOffset: {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		},
	},
	postTitleVRBottomOffsetUnits: {
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