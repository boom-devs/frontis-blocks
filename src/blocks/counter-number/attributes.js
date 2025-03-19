const attributes = {
    blockID: {
        type: "string",
        default: ""
    },

	counterAlignment: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        },
    },

	blockStyle: {
        type: "string",
        default: "",
    },
	
	deviceType: {
		type: "string",
		default: "Desktop"
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
	counterMediaId: {
		type: 'number',
		default: 0
	},
	counterMediaImagedisplay: {
		type: 'string',
		default: 'none'
	},
	counterMediaUrl: {
		type: 'string',
		default: ''
	},
	counterMediaAlt: {
		type: 'string',
		default: ''
	},
	icon: {
		type: 'string',
		default: 'star',
	},
	iconPosition: {
		type: 'string',
		default: 'top',
	},
	counterCardAlignment: {
		type: 'string',
		default: 'center',
	},
	titlePosition: {
		type: 'string',
		default: 'bottom',
	},
	

    counterNumberStart: {
        type: "number",
        default: 0
    },
	counterNumberEnd: {
		type: "number",
		default: 1000
	},
	counterDuration: {
		type: "number",
		default: 2000
	},
	counterPrefix: {
		type: "string",
		default: "+"
	},
	counterPrefixSwitch: {
		type: "boolean",
		default: true
	},
	counterSuffix: {
		type: "string",
		default: "M"
	},
	counterSuffixSwitch: {
		type: "boolean",
		default: true
	},
    counterTitle: {
        type: "string",
        default: "Happy Clients"
    },
	counterTitleTag: {
		type: "string",
		default: "span"
	},
	counterTitleSwitch: {
		type: "boolean",
		default: true
	},
    showThousandsSeparator: {
        type: "boolean",
        default: true
    },
	showThousandsSeparatorType: {
		type: "string",
		default: "comma"
	},

	// Icon Size
	counterIconSize: {
		type: 'object',
		default: {
			Desktop: '60',
			Tablet: '',
			Mobile: ''
		}
	},
	counterIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	counterIconSizeRatio: {
		type: 'boolean',
		default: true,
	},

	// Icon Color
	counterIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterIconColor: {
		type: "string",
		default: "#1C274C"
	},
	counterIconHoverColor: {
		type: 'string',
		default: "#1C274C"
	},

	// margin
	counterIconMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterIconMarginDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterIconMarginTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterIconMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterIconMarginLink : {
		type : "boolean",
		default: true
	},
	/** Counter Number */
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
	counterNumberGlobalTypographyData: {
		type: "object",
		default: {}
	},
	counterNumberGlobalTypoSwitcher: {
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
	counterNumberGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	counterNumberGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	counterNumberFontFamily: {
		type: 'string',
		default: ''
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
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	counterNumberMarginTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	counterNumberMarginMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
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
	counterNumberTitleGlobalTypographyData: {
		type: "object",
		default: {}
	},
	counterNumberTitleGlobalTypoSwitcher: {
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
	counterNumberTitleGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	counterNumberTitleGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterNumberTitleMarginTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterNumberTitleMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
	counterItemBorder: {
		type: 'string',
		default: "none",
	},
	counterItemBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterItemBorderColor: {
		type: 'string',
		default: ""
	},
	counterItemBorderHoverColor: {
		type: 'string',
		default: ""
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterItemBorderTypeTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterItemBorderTypeMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},

	counterItemSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterItemSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	counterItemRatio: {
		type: 'boolean',
		default: false,
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
	counterOverflow: {
        type: 'string',
        default: "default",
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	counterGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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

	counterDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    counterTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    counterMobileSwitcher: {
        type: "boolean",
        default: false,
    },

	counterPositionType: {
        type: "string",
        default: "default"
    },
    counterHZOrientationType: {
        type: "string",
        default: "left"
    },
    counterVROrientationType: {
        type: "string",
        default: "top"
    },
    counterHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    counterHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    counterHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    counterHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    counterVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    counterVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    counterVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    counterVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	/** Start Class & ID Setting */
	counterGlobalWraperCustomCSS : { 
		type: "string",
		default: "",
	},
	counterGlobalWraperID : {
		type: "string",
		default: ""
	},
	counterGlobalWraperClass : {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */
};

export default attributes;
