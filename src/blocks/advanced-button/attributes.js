const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    buttonAlignment: {
        type: "string",
        default: "left",
    },
    buttonText: {
        type: "string",
        default: "Add Text",
    },
    buttonUrl: {
        type: "string",
        default: "",
    },
    buttonTargetUrl: {
        type: "boolean",
    },
    /** Start Button Text Style */
    buttonWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},

    buttonGlobalTypographyData: {
        type: "object",
        default: {}
    },
    buttonGlobalTypoSwitcher: {
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
    buttonGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    buttonFontFamily: {
        type: "string",
        default: "Default",
    },
    buttonFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    buttonFontWeight: {
        type: "string",
        default: ""
    },
    buttonFontStyle: {
        type: "string",
        default: ""
    },
    buttonTextTransform: {
        type: "string",
        default: ""
    },
    buttonTextDecoration: {
        type: "string",
        default: ""
    },
    buttonLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    buttonLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    buttonColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonColor: {
        type: "string"
    },
    buttonHoverColor: {
        type: 'string',
    },
    buttonBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonBgColor: {
        type: "string",
        default: "#399CFF"
    },
    buttonBgHoverColor: {
        type: 'string',
    },
    buttonBorder: {
        type: 'string',
        default: "none",
    },
    buttonBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonBorderColor: {
        type: 'string',
    },
    buttonBorderHoverColor: {
        type: 'string',
    },
    buttonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    buttonDesktopBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonTabBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonMobileBorderWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonBorderLink: {
        type: "boolean",
        default: true
    },
    buttonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    buttonDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    buttonTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: "4",
            bottom: "4",
            left: "4",
            right: "4",
        },
    },
    buttonBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    buttonBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    buttonBoxShadowValues: { 
        type: 'array',
        default: [],
    },
    buttonBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    buttonBoxShadowHoverValues: { 
        type: 'array',
        default: [],
    },
    buttonBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    buttonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    buttonDesktopPadding: {
        type: "object", 
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    buttonTabPadding: {
        type: "object", 
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    buttonMobilePadding: {
        type: "object", 
        default: {
            top: '12',
            bottom: '12',
            left: '24',
            right: '24',
        },
    },
    buttonPaddingLink: {
        type: "boolean",
        default: true
    },
    buttonMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    buttonDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonTabMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    buttonMarginLink: {
        type: "boolean",
        default: true
    },
    /** End Style */    


    /** Icon Settings */
    buttonIconAlign: {
        type: "string",
        default: "none",
    },
    buttonIcon: {
		type: 'string',
		default: 'angle-right',
	},
    buttonIconPosition: {
        type: "string",
        default: "right",
    },
    /** End Icon Settings */

    /** Icon Styles */
    buttonIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    buttonIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    buttonIconColor: {
        type: "string",
        default: "#fff"
    },
    buttonIconHoverColor: {
        type: 'string',
        default: ""
    },

    buttonIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    buttonIconBgColor : {
        type: "string",
        default: ""
    },
    buttonIconBgHoverColor: {
        type: 'string',
        default: ""
    },
    buttonIconBorder: {
        type: 'string',
        default: "none",
    },
    buttonIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    buttonIconBorderColor: {
        type: 'string',
    },
    buttonIconBorderHoverColor: {
        type: 'string',
    },
    buttonIconBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    buttonIconBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    buttonIconBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    buttonIconBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    buttonIconBorderLink : {
        type : "boolean",
        default: true
    },
    buttonIconBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    buttonIconBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    buttonIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    buttonIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    buttonIconBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    buttonIconGapSize: {
        type: 'object',
        default: {
            Desktop: '10',
            Tablet: '10',
            Mobile: '10'
        }
    },
    buttonIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonIconRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    /** End Icon Styles */

	/** Start Global Setting */
	buttonGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },

    advancedBtnOverflow: {
        type: 'string',
        default: "default",
    },
	/** Start Padding */
	buttonGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	buttonGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	buttonGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonGlobalBgColor : {
		type: "string",
	},
	buttonGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	buttonGlobalBorder: {
		type: 'string',
		default: "none",
	},
	buttonGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	buttonGlobalBorderHoverColor: {
		type: 'string',
	},
	buttonGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	buttonGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    buttonGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	buttonGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    buttonGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    buttonGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    buttonGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

    blockStyle: {
        type: 'string',
        default: '',
    },

    buttonIconImageUrl : {
        type: 'string',
        default: '',
    },
    buttonIconImageAlt : { 
        type: 'string',
        default: '',
    },
    buttonIconImageID : {
        type: 'number',
    },
    buttonIconImageWidth : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    buttonIconImageWidthUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonIconImageHeight : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    buttonIconImageHeightUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    buttonIconImagedisplay : {
        type: 'string',
        default: 'none',
    },

    advancedBtnDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    advancedBtnTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    advancedBtnMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    buttonGlobalWraperID : { 
        type: "string",
        default: ""
    },

    buttonGlobalWraperClass : {
        type: "string",
        default: ""
    },
    
    advancedBtnPositionType: {
        type: "string",
        default: "default"
    },
    advancedBtnHZOrientationType: {
        type: "string",
        default: "left"
    },
    advancedBtnVROrientationType: {
        type: "string",
        default: "top"
    },
    advancedBtnHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedBtnHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedBtnHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedBtnHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedBtnVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedBtnVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedBtnVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedBtnVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    buttonCustomCSS : { 
        type: "string",
        default: "",
    },
}
export default attributes;