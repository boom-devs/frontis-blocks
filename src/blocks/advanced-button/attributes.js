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
    buttonTextSwitcher: {
        type: "boolean",
        default: true,
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
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
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
    buttonGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
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
        type: "string",
        default: "#ffffff"
    },
    buttonHoverColor: {
        type: 'string',
    },
    buttonTextColorType: {     
		type: "string",
		default: "classic",
	},
    buttonTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    buttonTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    buttonTextGradientColor: {
        type: 'string',
        default: null
    },
    buttonTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    buttonTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    buttonTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    buttonTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    /** Start Background */
    buttonBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonNormalBackgroundType: {     
		type: "string",
		default: "classic",
	},
	buttonBgColor: {
		type: "string",
		default: "#399CFF",
	},
	buttonNormalGradientColor: {
		type: "string",
		default: null,
	},
	buttonNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	buttonNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	buttonHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	buttonBgHoverColor: {
		type: "string",
		default: "",
	},
	buttonHoverGradientColor: {
		type: "string",
		default: null,
	},
	buttonHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	buttonHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

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
    buttonIconFrontend:{
        type: 'string',
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

    /** Start Background */
    buttonIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    buttonIconNormalBackgroundType: {     
        type: "string",
        default: "classic",
    },
    buttonIconBgColor: {
        type: "string",
        default: "",
    },
    buttonIconNormalGradientColor: {
        type: "string",
        default: null,
    },
    buttonIconNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    buttonIconNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    buttonIconHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
     buttonIconBgHoverColor: {
        type: "string",
        default: "",
    },
    buttonIconHoverGradientColor: {
        type: "string",
        default: null,
    },
    buttonIconHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    buttonIconHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Background */

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

    /** Start Icon Padding */
	buttonIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonIconPaddingDesktop: { 
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Icon Padding */

    /** Start Icon margin */
	buttonIconMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	buttonIconMarginDesktop: { 
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	buttonIconMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Icon Margin */

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
    buttonIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    buttonIconRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    buttonIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },

    buttonImageRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    buttonImageRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    buttonImageRotateHover: {
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
	buttonGlobalNormalBackgroundType: { 
		type: "string",
		default: "classic",
	},
	buttonGlobalNormalClassicColor: {
		type: "string",
		default: "",
	},
	buttonGlobalNormalGradientColor: {
		type: "string",
		default: null,
	},
	buttonGlobalNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	buttonGlobalNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	buttonGlobalHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	buttonGlobalHoverClassicColor: {
		type: "string",
		default: "",
	},
	buttonGlobalHoverGradientColor: {
		type: "string",
		default: null,
	},
	buttonGlobalHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	buttonGlobalHoverCustomGradientInputValue: {
		type: "string",
		default: "",
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

    buttonTransformSwitcher: {
        type: "string",
        default: "normal",
    },
    buttonTransformNormalProportions: {
        type: "boolean",
        default: false,
    },
    buttonTransformNormalScale: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    buttonTransformNormalScaleX: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    buttonTransformNormalScaleY: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    buttonTransformHoverProportions: {
        type: "boolean",
        default: false,
    },
    buttonTransformHoverScale: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    buttonTransformHoverScaleX: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    buttonTransformHoverScaleY: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    
    /** Start Dynamic Text */
    dynamicTextEnabled : {
        type: 'boolean',
        default: false
    },
    dynamicTextSource: {
        type: 'string',
        default: 'current_post'
    },
    dynamicTextPostId: {
        type: 'number',
        default: 0
    },
    dynamicTextPostType: {
        type: 'string',
        default: ''
    },
    dynamicTextPostLabel: {
        type: 'string',
        default: ''
    },
    dynamicTextField: {
        type: 'string',
        default: 'post_title'
    },
    dynamicFeaturedImageField:{
        type: 'string',
        default: 'title'
    },
    dynamicTextDateType: {
        type: 'string',
        default: 'published'
    },
    dynamicTextDateFormat: {
        type: 'string',
        default: 'default'
    },
    dynamicTextTimeType: {
        type: 'string',
        default: 'published'
    },
    dynamicTextTimeFormat: {
        type: 'string',
        default: 'default'
    },
    dynamicTextCommentsZeroText: {
        type: 'string',
        default: 'No Response',
    },
    dynamicTextCommentsOneText: {
        type: 'string',
        default: 'One Response',
    },
    dynamicTextCommentsManyText: {
        type: 'string',
        default: '{num} Response',
    },   
    dynamicTextTermsTaxonomy: {
        type: 'string',
        default: 'category',
    },
    dynamicTextTermsSeparator: {
        type: 'string',
        default: ', ',
    },
    dynamicTextEnableLink: {
        type: 'boolean',
        default: false
    },
    dynamicTextLinkSource: {
        type: 'string',
        default: 'post_permalink',
    },
    loopAutoApplied: {
        type: 'boolean',
        default: false
    },
    /** End Dynamic Text */
}
export default attributes;