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
        type: "number",
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
    progressTextColorSwitcher: {
        type: "string",
        default: "normal"
    },
    progressTextColor: {
        type: "string",
        default: "#000000"
    },
    progressTextHoverColor: {
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
    progressTitle: {
        type: "string",
        default: "Progress Bar"
    },
    progressHeadingTag: {
        type: "string",
        default: "div"
    },
    progressBarHeight: {
        type: "number",
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

    progressFontFamily: {
        type: "string",
        default: "",
    },
    progressFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    progressFontWeight: {
        type: "string",
        default: "",
    },
    progressFontStyle: {
        type: "string",
        default: "",
    },
    progressTextTransform: {
        type: "string",
        default: "",
    },
    progressTextDecoration: {
        type: "string",
        default: "",
    },
    progressLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    progressLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	progressLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
};
export default attributes;
