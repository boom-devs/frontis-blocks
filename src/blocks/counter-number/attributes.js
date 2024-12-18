const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
	counterMediaUrl: {
		type: 'string',
		default: ''
	},
	icon: {
		type: 'string',
		default: 'star',
	},
    counterNumber: {
        type: "number",
        default: 100
    },
	counterPrefix: {
		type: "string",
		default: "+"
	},
	counterSuffix: {
		type: "string",
		default: "M"
	},
    counterTitle: {
        type: "string",
        default: "Happy Clients"
    },
    showThousandsSeparator: {
        type: "boolean",
        default: true
    },
	counterNumberFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterNumberFontColor: {
		type: "string",
		default: "#0D173B"
	},
	counterNumberFontHoverColor: {
		type: 'string',
		default: "#0D173B"
	},
	counterNumberFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	counterNumberFontSize: {
		type: 'object',
		default: {
			Desktop: '62',
			Tablet: '58',
			Mobile: '52'
		}
	},
	counterNumberFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberFontWeight: {
		type: 'string',
		default: '700'
	},
	counterNumberFontStyle: {
		type: 'string',
		default: ''
	},
	counterNumberTextTransform: {
		type: 'string',
		default: ''
	},
	counterNumberTextDecoration: {
		type: 'string',
		default: ''
	},
	counterNumberLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	// margin
	counterNumberMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterNumberMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterNumberMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterNumberMarginLink : {
		type : "boolean",
		default: true
	},

	/** Number Title **/
	counterNumberTitleFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterNumberTitleFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	counterNumberTitleFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	counterNumberTitleFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	counterNumberTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '16',
			Mobile: '16'
		}
	},
	counterNumberTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberTitleFontWeight: {
		type: 'string',
		default: '400'
	},
	counterNumberTitleFontStyle: {
		type: 'string',
		default: ''
	},
	counterNumberTitleTextTransform: {
		type: 'string',
		default: ''
	},
	counterNumberTitleTextDecoration: {
		type: 'string',
		default: ''
	},
	counterNumberTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	// margin
	counterNumberTitleMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberTitleMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterNumberTitleMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterNumberTitleMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterNumberTitleMarginLink : {
		type : "boolean",
		default: true
	},
	// Item Border Type
	counterItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterItemBgColor: {
		type: "string",
		default: ""
	},
	counterItemBgHoverColor: {
		type: 'string',
		default: ""
	},
	counterItemBorderBorder: {
		type: 'string',
		default: "none",
	},
	counterItemBorderColor: {
		type: 'string',
	},
	counterItemBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterItemBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterItemBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterItemBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterItemBorderTypeLink : {
		type : "boolean",
		default: true
	},
	// Item Border Radius
	counterItemBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	counterItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	counterItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	counterItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** Start Global Setting */
	counterGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	/** Start Padding */
	counterGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	counterGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	counterGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	counterGlobalBgColor : {
		type: "string",
	},
	counterGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	counterGlobalBorder: {
		type: 'string',
		default: "none",
	},
	counterGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	counterGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	counterGlobalBorderHoverColor: {
		type: 'string',
	},
	counterGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	counterGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	counterGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	counterGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    counterGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
};

export default attributes;
