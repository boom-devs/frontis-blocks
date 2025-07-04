const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    progressGlobalZIndex : {
        type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
    progressbarOverflow: {
        type: 'string',
        default: "default",
    },
    progressbarType: {
        type: "string",
        default: "horizontal",
    },
    progressTextPosition: {
        type: "string",
        default: "text-outSide",
    },
    progressNumberPosition: {
        type: "string",
        default: "default",
    },
    progressNumber: {
        type: "number",
        default: 50
    },

    progressbarVrAlignment: {
        type: "object",
        default: {
            Desktop: "left",
            Tablet: "left",
            Mobile: "left",
        }
    },


    progressColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressColorType: {
        type: "string",
        default: "classic"
    },
    progressColor: {
        type: "string",
        default: "#399CFF"
    },
    progressGradientColor: {
        type: "string",
    },
    progressCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    progressCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    progressColorStyle: {
        type: "string",
        default: ""
    },
    progressImageUrl: {
        type: "string",
        default: ""
    },
    progressImageAlt: {
        type: "string",
        default: ""
    },
    progressImageID: {
        type: "string",
        default: ""
    },
    progressImagePosition: {
        type: "string",
        default: ""
    },
    progressImageAttachment: {
        type: "string",
        default: ""
    },
    progressImageSize: {
        type: "string",
        default: ""
    },
    progressImageRepeat: {
        type: "string",
        default: ""
    },

    progressZebraTrackSwitcher: {
        type: "boolean",
        default: false
    },
    progressZebraTrackWidth: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },

    progressTitleColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressTitleColor: {
        type: "string",
        default: "#000000"
    },
    progressTitleHoverColor: {
        type: 'string',
        default: "#000000"
    },

    progressNumberColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressNumberColor: {
        type: "string",
        default: "#000000"
    },
    progressNumberHoverColor: {
        type: 'string',
        default: "#000000"
    },


    progressBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressBgColorType: {
        type: "string",
        default: "classic"
    },
    progressBgColor: {
        type: "string",
        default: "#EBF5FF"
    },
    progressBgGradientColor: {
        type: "string",
    },
    progressBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    progressBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    progressBgColorStyle: {
        type: "string",
        default: ""
    },
    progressBgImageUrl: {
        type: "string",
        default: ""
    },
    progressBgImageAlt: {
        type: "string",
        default: ""
    },
    progressBgImageID: {
        type: "string",
        default: ""
    },
    progressBgImagePosition: {
        type: "string",
        default: ""
    },
    progressBgImageAttachment: {
        type: "string",
        default: ""
    },
    progressBgImageSize: {
        type: "string",
        default: ""
    },
    progressBgImageRepeat: {
        type: "string",
        default: ""
    },
    progressBgZebraTrackSwitcher: {
        type: "boolean",
        default: false
    },
    progressBgZebraTrackWidth: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },
    
    progressTitle: {
        type: "string",
        default: "Progress Bar"
    },
    progressHeadingTag: {
        type: "string",
        default: "span"
    },
    progressBarHeight: {
        type: "object",
        default: {
            Desktop: '14',
            Tablet: '14',
            Mobile: '14'
        }
    },
    progressBarHeightUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },

    progressBarWidth: {
        type: "object",
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100'
        }
    },
    progressBarWidthUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },

    progressBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    progressBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    progressBgBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    progressBgBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressBgBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressBgBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressBgBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    progressTitleGlobalTypographyData: {
        type: "object",
        default: {}
    },
    progressTitleGlobalTypoSwitcher: {
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
    progressTitleGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    progressTitleGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
    progressTitleFontFamily: {
        type: "string",
        default: "Default",
    },
    progressTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    progressTitleFontWeight: {
        type: "string",
        default: "",
    },
    progressTitleFontStyle: {
        type: "string",
        default: "",
    },
    progressTitleTextTransform: {
        type: "string",
        default: "",
    },
    progressTitleTextDecoration: {
        type: "string",
        default: "",
    },
    progressTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    progressTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    progressTitleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    progressTitleMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressTitleMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressTitleMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressTitleMarginLink : {
        type : "boolean",
        default: true
    },

    progressNumberMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    progressNumberMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressNumberMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressNumberMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressNumberMarginLink : {
        type : "boolean",
        default: true
    },

    progressNumberGlobalTypographyData: {
        type: "object",
        default: {}
    },
    progressNumberGlobalTypoSwitcher: {
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
    progressNumberGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    progressNumberGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
    progressNumberFontFamily: {
        type: "string",
        default: "Default",
    },
    progressNumberFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressNumberFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    progressNumberFontWeight: {
        type: "string",
        default: "",
    },
    progressNumberFontStyle: {
        type: "string",
        default: "",
    },
    progressNumberTextTransform: {
        type: "string",
        default: "",
    },
    progressNumberTextDecoration: {
        type: "string",
        default: "",
    },
    progressNumberLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressNumberLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    progressNumberLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressNumberLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    blockStyle: {
        type: "string",
        default: "",
    },

    progressbarDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    progressbarTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    progressbarMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Global Setting */
    progressGlobalCustomCSS : {
        type: "string",
        default: "",
    },
	progressGlobalWraperID : {
		type: "string",
		default: ""
	},
	progressGlobalWraperClass : {
		type: "string",
		default: ""
	},

    progressbarPositionType: {
        type: "string",
        default: "default"
    },
    progressbarHZOrientationType: {
        type: "string",
        default: "left"
    },
    progressbarVROrientationType: {
        type: "string",
        default: "top"
    },
    progressbarHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    progressbarHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    progressbarHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    progressbarHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    progressbarVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    progressbarVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    progressbarVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    progressbarVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    progressbarGlobalBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressbarGlobalBgType: {
        type: "string",
        default: "classic"
    },
    progressbarGlobalBgClassicColor: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgGradientColor: {
        type: "string",
    },
    progressbarGlobalBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    progressbarGlobalBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgColorStyle: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImageUrl: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImageAlt: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImageID: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImagePosition: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImageAttachment: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImageSize: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgImageRepeat: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverType: {
        type: "string",
        default: "classic"
    },
    progressbarGlobalBgHoverClassicColor: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverGradientColor: {
        type: "string",
    },
    progressbarGlobalBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    progressbarGlobalBgHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImageID: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImageSize: {
        type: "string",
        default: ""
    },
    progressbarGlobalBgHoverImageRepeat: {
        type: "string",
        default: ""
    },

    progressbarGlobalPaddingUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    progressbarGlobalPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalPaddingLink : {
        type : "boolean",
        default: true
    },
    
    progressbarGlobalMarginUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    progressbarGlobalMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalMarginLink : {
        type : "boolean",
        default: true
    },
    
    
    progressbarGlobalBorder: {
        type: 'string',
        default: "none",
    },
    progressbarGlobalBorderColor: {
        type: 'string',
    },
    progressbarGlobalBorderHoverColor: {
        type: 'string',
    },
    progressbarGlobalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    
    progressbarGlobalBorderUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    progressbarGlobalDesktopBorder: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalTabletBorder: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalMobileBorder: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalBorderLink : {
        type : "boolean",
        default: true
    },
    
    progressbarGlobalBorderRadiusUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    progressbarGlobalDesktopBorderRadius: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalTabletBorderRadius: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalMobileBorderRadius: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    progressbarGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    progressbarGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    progressbarGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    progressbarGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    progressbarGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    progressbarGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
};
export default attributes;
