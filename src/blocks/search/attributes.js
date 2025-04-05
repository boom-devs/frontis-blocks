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

	searchIconGap: {
		type: 'object',
		default: {
			Desktop: '5',
			Tablet: '5',
			Mobile: '5'
		}
	},
	searchIconGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
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

	/** Start Button Text Color */
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
	/** End Button Text Color */	

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

	/** Start Typography */
	inputFieldTextGlobalTypographyData: {
		type: "object",
		default: {}
	},
	inputFieldTextGlobalTypoSwitcher: {
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
	inputFieldTextGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	inputFieldTextGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	inputFieldTextFontFamily: {
		type: "string",
		default: "Default",
	},
	inputFieldTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	inputFieldTextFontWeight : {
		type: "string",
		default: ""
	},
	inputFieldTextFontStyle : {
		type: "string",
		default: ""
	},
	inputFieldTextTransform : {
		type: "string",
		default: ""
	},
	inputFieldTextDecoration : {
		type: "string",
		default: ""
	},
	inputFieldTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	inputFieldTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	inputFieldTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Field Typography */

	/** Start Input Field Text Color */
	inputFieldTextColorSwitcher: {
		type: "string",
		default: "normal",
	},
	inputFieldTextColor: {
		type: "string",
		default: "",
	},
	inputFieldTextColorHover: {
		type: "string",
		default: "",
	},
	/** End Input Field Text Color */

	/** Start Input Field Border */
	inputFieldBorder: {
		type: 'string',
		default: "solid",
	},
	inputFieldBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	inputFieldBorderColor: {
		type: 'string',
		default: "#A4A7AE"
	},
	inputFieldBorderColorHover: {
		type: 'string',
		default: ""
	},
	inputFieldBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	inputFieldBorderDesktop: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	inputFieldBorderTablet: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	inputFieldBorderMobile: {
		type: "object", 
		default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
	},
	inputFieldBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Input Field Border */

	/** Start Input Field Border Radius */
	inputFieldBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	inputFieldBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	inputFieldBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	inputFieldBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	inputFieldBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Input Field Border Radius */


	/** Start Padding */
	inputFieldPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	inputFieldPaddingDesktop: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	inputFieldPaddingTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	inputFieldPaddingMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '24',
			right: '24',
		},
	},
	inputFieldPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Input Field Padding */



	searchIconZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
	
};

export default attributes;