const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: "string",
        default: "",
    },
	categorySwitcher: {
		type: "boolean",
		default: true
	},
	titleSwitcher: {
		type: "boolean",
		default: true
	},
	postMetaSwitcher: {
		type: "boolean",
		default: true
	},
	// category styling
	categoryGlobalTypographyData: {
		type: "object",
		default: {}
	},
	categoryGlobalTypoSwitcher: {
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
	categoryGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	categoryGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	categoryFontFamily: {
		type: "string",
		default: "Default",
	},
	categoryFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	categoryFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	categoryFontWeight : {
		type: "string",
		default: ""
	},
	categoryFontStyle : {
		type: "string",
		default: ""
	},
	categoryTextTransform : {
		type: "string",
		default: ""
	},
	categoryTextDecoration : {
		type: "string",
		default: ""
	},
	categoryLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	categoryLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	categoryLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	categoryLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// category color
	categoryColorSwitcher : {
		type: "string",
		default: "normal"
	},
	categoryColor : {
		type: "string"
	},
	categoryHoverColor: {
		type: 'string',
	},
	categoryBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	categoryBgColor: {
		type: 'string',
	},
	categoryBgColorHover: {
		type: 'string',
	},	
	categoryMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    categoryDesktopMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryTabMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryMobileMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryMarginLink : {
        type : "boolean",
        default: true
    },
    categoryPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    categoryDesktopPadding: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryTabPadding: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryMobilePadding: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryPaddingLink : {
        type : "boolean",
        default: true
    },
	categoryBorder: {
        type: 'string',
        default: "none",
    },
    categoryBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    categoryBorderColor: {
        type: 'string',
    },
    categoryBorderHoverColor: {
        type: 'string',
    },
    categoryBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    categoryDesktopBorder: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryTabBorder: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryMobileBorder: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryBorderLink : {
        type : "boolean",
        default: true
    },
    categoryBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    categoryDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryTabBorderRadius: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryMobileBorderRadius: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    categoryBorderRadiusLink : {
        type : "boolean",
        default: true
    },
	// title typography
	titleGlobalTypographyData: {
		type: "object",
		default: {}
	},
	titleGlobalTypoSwitcher: {
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
	titleGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	titleGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	titleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	titleFontWeight : {
		type: "string",
		default: ""
	},
	titleFontStyle : {
		type: "string",
		default: ""
	},
	titleTextTransform : {
		type: "string",
		default: ""
	},
	titleTextDecoration : {
		type: "string",
		default: ""
	},
	titleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	titleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	titleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	titleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// category color
	titleColorSwitcher : {
		type: "string",
		default: "normal"
	},
	titleColor : {
		type: "string"
	},
	titleHoverColor: {
		type: 'string',
	},
	titleBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	titleBgColor: {
		type: 'string',
	},
	titleBgColorHover: {
		type: 'string',
	},	
	titleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	titleDesktopMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleTabMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleMobileMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleMarginLink : {
		type : "boolean",
		default: true
	},
	titlePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	titleDesktopPadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleTabPadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleMobilePadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titlePaddingLink : {
		type : "boolean",
		default: true
	},
	titleBorder: {
		type: 'string',
		default: "none",
	},
	titleBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	titleBorderColor: {
		type: 'string',
	},
	titleBorderHoverColor: {
		type: 'string',
	},
	titleBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	titleDesktopBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleTabBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleMobileBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleBorderLink : {
		type : "boolean",
		default: true
	},
	titleBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	titleDesktopBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleTabBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleMobileBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	titleBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	authorGlobalTypographyData: {
		type: "object",
		default: {}
	},
	authorGlobalTypoSwitcher: {
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
	authorGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	authorGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	authorFontFamily: {
		type: "string",
		default: "Default",
	},
	authorFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	authorFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	authorFontWeight : {
		type: "string",
		default: ""
	},
	authorFontStyle : {
		type: "string",
		default: ""
	},
	authorTextTransform : {
		type: "string",
		default: ""
	},
	authorTextDecoration : {
		type: "string",
		default: ""
	},
	authorLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	authorLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	authorLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	authorLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// author color
	authorColorSwitcher : {
		type: "string",
		default: "normal"
	},
	authorColor : {
		type: "string"
	},
	authorHoverColor: {
		type: 'string',
	},
	authorBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	authorBgColor: {
		type: 'string',
	},
	authorBgColorHover: {
		type: 'string',
	},	
	authorMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	authorDesktopMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorTabMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorMobileMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorMarginLink : {
		type : "boolean",
		default: true
	},
	authorPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	authorDesktopPadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorTabPadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorMobilePadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorPaddingLink : {
		type : "boolean",
		default: true
	},
	authorBorder: {
		type: 'string',
		default: "none",
	},
	authorBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	authorBorderColor: {
		type: 'string',
	},
	authorBorderHoverColor: {
		type: 'string',
	},
	authorBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	authorDesktopBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorTabBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorMobileBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorBorderLink : {
		type : "boolean",
		default: true
	},
	authorBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	authorDesktopBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorTabBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorMobileBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	authorBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	// date style
	dateGlobalTypographyData: {
		type: "object",
		default: {}
	},
	dateGlobalTypoSwitcher: {
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
	dateGlobalTypoType: {
		type: "string",
		default: 'default',
	},
	dateGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	dateFontFamily: {
		type: "string",
		default: "Default",
	},
	dateFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	dateFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	dateFontWeight : {
		type: "string",
		default: ""
	},
	dateFontStyle : {
		type: "string",
		default: ""
	},
	dateTextTransform : {
		type: "string",
		default: ""
	},
	dateTextDecoration : {
		type: "string",
		default: ""
	},
	dateLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	dateLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	dateLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	dateLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// date color
	dateColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dateColor : {
		type: "string"
	},
	dateHoverColor: {
		type: 'string',
	},
	dateBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	dateBgColor: {
		type: 'string',
	},
	dateBgColorHover: {
		type: 'string',
	},	
	dateMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dateDesktopMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateTabMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateMobileMargin: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateMarginLink : {
		type : "boolean",
		default: true
	},
	datePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dateDesktopPadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateTabPadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateMobilePadding: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	datePaddingLink : {
		type : "boolean",
		default: true
	},
	dateBorder: {
		type: 'string',
		default: "none",
	},
	dateBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dateBorderColor: {
		type: 'string',
	},
	dateBorderHoverColor: {
		type: 'string',
	},
	dateBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dateDesktopBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateTabBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateMobileBorder: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateBorderLink : {
		type : "boolean",
		default: true
	},
	dateBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dateDesktopBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateTabBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateMobileBorderRadius: {
		type: "object", 
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	dateBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	
};

export default attributes;