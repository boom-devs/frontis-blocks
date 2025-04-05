const attributes = {
	blockId: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	searchActive: {
		type: 'boolean',
		default: false
	},
	searchButtonWidth: {
		type: 'object',
		default: {
			Desktop: '88',
			Tablet: '88',
			Mobile: '88'
		}
	},
	searchButtonWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchButtonInputFieldWidth: {
		type: 'object',
		default: {
			Desktop: '1080',
			Tablet: '1080',
			Mobile: '1080'
		}
	},
	searchButtonInputFieldWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	/** Start Typography */
	buttonTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    buttonTextGlobalTypoSwitcher: {
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
    buttonTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    buttonTextGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    buttonTextFontFamily: {
        type: "string",
        default: "Default",
    },
    buttonTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    buttonTextFontWeight : {
        type: "string",
        default: ""
    },
    buttonTextFontStyle : {
        type: "string",
        default: ""
    },
    buttonTextTransform : {
        type: "string",
        default: ""
    },
    buttonTextDecoration : {
        type: "string",
        default: ""
    },
    buttonTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    buttonTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Typography */
	buttonTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	buttonTextColor: {
		type: "string",
		default: "",
	},
	buttonTextColorHover: {
		type: "string",
		default: "",
	},

	/** Start Button Border */
	buttonBorder: {
		type: 'string',
		default: "solid",
	},
	buttonBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	buttonBorderColorHover: {
		type: 'string',
		default: ""
	},
	buttonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonBorderDesktop: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	buttonBorderTablet: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	buttonBorderMobile: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	buttonBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	buttonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	buttonBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	buttonBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	buttonBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */


	/** Start Padding */
	buttonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonPaddingDesktop: {
		type: "object", 
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonPaddingTablet: {
		type: "object", 
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonPaddingMobile: {
		type: "object", 
		default: {
			top: '12',
			bottom: '12',
			left: '24',
			right: '24',
		},
	},
	buttonPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Icon Settings */
	searchIconAlign: {
		type: "string",
		default: "none",
	},
	searchIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	/** End Icon Settings */

	searchIconImageUrl : {
        type: 'string',
        default: '',
    },
    searchIconImageAlt : { 
        type: 'string',
        default: '',
    },
    searchIconImageID : {
        type: 'number',
    },
    searchIconImageWidth : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    searchIconImageWidthUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    searchIconImageHeight : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    searchIconImageHeightUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    searchIconImageDisplay : {
        type: 'string',
        default: 'none',
    },

	/** Icon Styles */
	searchIconSize: {
		type: 'object',
		default: {
			Desktop: '50',
			Tablet: '50',
			Mobile: '30'
		}
	},
	searchIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	searchIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	searchIconColor: {
		type: "string",
		default: "#000"
	},
	searchIconHoverColor: {
		type: 'string',
		default: ""
	},

	searchIconBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	searchIconBgColor : {
		type: "string",
		default: ""
	},
	searchIconBgHoverColor: {
		type: 'string',
		default: ""
	},

	searchIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchIconPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconPaddingTablet: {
		type: "object", 
		default: {
			top: '', 
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconPaddingLink : {
		type : "boolean",
		default: true
	},


	searchIconBorder: {
		type: 'string',
		default: "none",
	},
	searchIconBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	searchIconBorderColor: {
		type: 'string',
	},
	searchIconBorderHoverColor: {
		type: 'string',
	},
	searchIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchIconBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconBorderLink : {
		type : "boolean",
		default: true
	},
	searchIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchIconBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '', 
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	searchIconBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	searchIconRotateSwitcher: {
		type: 'string',
		default: 'normal',
	},
	searchIconRotate: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "", 
			Mobile: "",
		}
	},
	searchIconRotateHover: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},

	searchIconImageRotateSwitcher: {
		type: 'string',
		default: 'normal',
	},
	searchIconImageRotate: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "", 
			Mobile: "",
		}
	},
	searchIconImageRotateHover: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	/** End Icon Styles */
	
};

export default attributes;