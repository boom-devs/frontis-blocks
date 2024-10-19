const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    headingAlignment: {
        type: "string",
        default: "left",
    },
    headingText: {
        type : "string",
        default: "Advanced Heading"
    },
    headingTag: {
        type : "string",
        default: "h2" 
    },
    headingFontFamily: {
        type: "string",
        default: "inherit",
    },
    headingFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingFontWeight : {
        type: "string",
        default: ""
    },
    headingFontStyle : {
        type: "string",
        default: ""
    },
    headingTextTransform : {
        type: "string",
        default: ""
    },
    headingTextDecoration : {
        type: "string",
        default: ""
    },
    headingLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

    headingLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingColorSwitcher : {
        type: "string",
        default: "normal"
    },
    headingColor : {
        type: "string"
    },
    headingHoverColor: {
        type: 'string',
    },
    headingBackgroundColor: {
        type: 'string',
    },
    headingBorder: {
        type: 'string',
        default: "none",
    },
    headingBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    headingBorderColor: {
        type: 'string',
    },
    headingBorderHoverColor: {
        type: 'string',
    },
    headingBorderUnits : {
        type: "string",
        default: "px"
    },
    headingBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobileBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingBorderLink : {
        type : "boolean",
        default: true
    },
    headingBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobileBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    headingPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingPaddingLink : {
        type : "boolean",
        default: true
    },
    headingMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMarginLink : {
        type : "boolean",
        default: true
    },
    subHeadingText: {
        type: "string",
        default: "Advanced Sub Heading"
    },
    subHeadingTag: {
        type : "string",
        default: "p" 
    },
    subHeadingSwitcher: {
        type: "boolean",
        default: false,
    },
    subHeadingPosition: {
        type: "string",
        default: "bottom",
    },
    separator: {
        type: "string",
        default: "solid",
    },
    showSeparatorSwitcher: {
        type: "boolean",
        default: false,
    },
    separatorPosition: {
        type: "string",
        default: "bottom",
    },

    headingZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingZIndexUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    
}
export default attributes;