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
    buttonFontFamily: {
        type: "string",
        default: "inherit",
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
        type: "string"
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
    buttonboxShadowValues: {
        type: 'array',
        default: [],
    },
    buttonboxShadowCssValue: {
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
            top: 12,
            bottom: 12,
            left: 24,
            right: 24,
        },
    },
    buttonTabPadding: {
        type: "object", 
        default: {
            top: 12,
            bottom: 12,
            left: 24,
            right: 24,
        },
    },
    buttonMobilePadding: {
        type: "object", 
        default: {
            top: 12,
            bottom: 12,
            left: 24,
            right: 24,
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
    buttonIconAlign: {
        type: "string",
        default: "no-icon",
    },
    buttonIcon: {
		type: 'string',
		default: 'circle-check',
	},
    buttonZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonZIndexUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    customCSS: {
        type: 'string',
        default: '',
    },
}
export default attributes;