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
    progressNumber: {
        type: "number",
        default: 95
    },

    progressColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressColor: {
        type: "string",
        default: "#399CFF"
    },
    progressHoverColor: {
        type: 'string',
        default: "#399CFF"
    },

    progressColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressType: {
        type: "string",
        default: "classic"
    },
    progressClassicColor: {
        type: "string",
        default: "#EBF5FF"
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
    progressBgColor: {
        type: "string",
        default: "#e8e8e8"
    },
    progressBgHoverColor: {
        type: 'string',
        default: "#e8e8e8"
    },

    progressBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressBgType: {
        type: "string",
        default: "classic"
    },
    progressBgClassicColor: {
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
        default: "div"
    },
    progressBarHeight: {
        type: "object",
        default: {
            Desktop: '10',
            Tablet: '10',
            Mobile: '10'
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

    progressbarBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressbarBgType: {
        type: "string",
        default: "classic"
    },
    progressbarBgClassicColor: {
        type: "string",
        default: "#EBF5FF"
    },
    progressbarBgGradientColor: {
        type: "string",
    },
    progressbarBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    progressbarBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    progressbarBgColorStyle: {
        type: "string",
        default: ""
    },
    progressbarBgImageUrl: {
        type: "string",
        default: ""
    },
    progressbarBgImageAlt: {
        type: "string",
        default: ""
    },
    progressbarBgImageID: {
        type: "string",
        default: ""
    },
    progressbarBgImagePosition: {
        type: "string",
        default: ""
    },
    progressbarBgImageAttachment: {
        type: "string",
        default: ""
    },
    progressbarBgImageSize: {
        type: "string",
        default: ""
    },
    progressbarBgImageRepeat: {
        type: "string",
        default: ""
    },
    progressbarBgHoverType: {
        type: "string",
        default: "classic"
    },
    progressbarBgHoverClassicColor: {
        type: "string",
        default: "#399CFF"
    },
    progressbarBgHoverGradientColor: {
        type: "string",
    },
    progressbarBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    progressbarBgHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    progressbarBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImageID: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImageSize: {
        type: "string",
        default: ""
    },
    progressbarBgHoverImageRepeat: {
        type: "string",
        default: ""
    },
};
export default attributes;
