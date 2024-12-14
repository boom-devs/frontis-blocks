export const attributes = {
	DeviceType: {
		type: 'string',
		default: 'Desktop'
	},
	formId: {
		type: 'string'
	},
	spacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: "string",
        default: "",
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},
	contactFormGlobalZIndex : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
	},
	showPlaceholder: {
		type: "boolean",
		default: true,
	},
	showErrorMessage: {
		type: "boolean",
		default: true,
	},
	/** Start Label */
	contactFormLabelColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormLabelColor: {
		type: 'string',
	},
	contactFormLabelHoverColor: {
		type: 'string',
	},
	contactFormLabelFontFamily: {
		type: "string",
		default: "inherit",
	},
	contactFormLabelFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '18',
			Mobile: '16'
		}
	},
	contactFormLabelFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormLabelFontWeight : {
		type: "string",
		default: "500"
	},
	contactFormLabelFontStyle : {
		type: "string",
		default: "normal"
	},
	contactFormLabelTextTransform : {
		type: "string",
		default: "none"
	},
	contactFormLabelTextDecoration : {
		type: "string",
		default: "none"
	},
	contactFormLabelLetterSpacing : {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormLabelLetterSpacingUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormLabelLineHeight : {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormLabelLineHeightUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	/** End Label */

	/** Start Input & Textarea */
	contactFormInputBgColor: {
		type: 'string',
	},
	contactFormInputColor: {
		type: 'string',
	},
	contactFormInputFocusColor: {
		type: 'string',
		default: "#399CFF",

	},
	contactFormInputFontFamily: {
		type: "string",
		default: "inherit",
	},
	contactFormInputFontSize: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormInputFontSizeUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormInputFontWeight : {
		type: "string",
		default: "300"
	},
	contactFormInputFontStyle : {
		type: "string",
		default: "normal"
	},
	contactFormInputTextTransform : {
		type: "string",
		default: "none"
	},
	contactFormInputTextDecoration : {
		type: "string",
		default: "none"
	},
	contactFormInputLetterSpacing : {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormInputLetterSpacingUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormInputLineHeight : {
		type: "object",
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormInputLineHeightUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	/** End Input & Textarea */

	/** Start Text Indent */
	contactFormTextIndentSize: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	contactFormTextIndentSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Text Indent */

	/** Start Input Width */
	contactFormInputWidthSize: {
		type: 'object',
		default: {
			Desktop: "100",
			Tablet: "100",
			Mobile: "100"
		}
	},
	contactFormInputWidthSizeUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	/** End Input Width */

	/** Start Input Height */
	contactFormInputHeightSize: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormInputHeightSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Input Height */

	/** Start Textarea Width */
	contactFormTextareaWidthSize: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormTextareaWidthSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Textarea Width */

	/** Start Textarea Height */
	contactFormTextareaHeightSize: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormTextareaHeightSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Textarea Height */

	/** Start Spacing Height */
	contactFormSpacingSize: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: ""
		}
	},
	contactFormSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Spacing Height */

	/** Start Style Setting */
	contactFormPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormPaddingDesktop: {
		type: "object",
		default: {
			top: "11",
			bottom: "11",
			left: "15",
			right: "15",
		},
	},
	contactFormPaddingTablet: {
		type: "object",
		default: {
			top: "11",
			bottom: "11",
			left: "15",
			right: "15",
		},
	},
	contactFormPaddingMobile: {
		type: "object",
		default: {
			top: "11",
			bottom: "11",
			left: "15",
			right: "15",
		},
	},
	contactFormPaddingLink : {
		type : "boolean",
		default: true
	},
	contactFormBorder: {
		type: 'string',
		default: "solid",
	},
	contactFormBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormBorderColor: {
		type: 'string',
		default: "#dadbdd",
	},
	contactFormBorderHoverColor: {
		type: 'string',
	},
	contactFormBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormBorderDesktop: {
		type: "object",
		default: {
			top: "1",
			bottom: "1",
			left: "1",
			right: "1",
		},
	},
	contactFormBorderTablet: {
		type: "object",
		default: {
			top: "1",
			bottom: "1",
			left: "1",
			right: "1",
		},
	},
	contactFormBorderMobile: {
		type: "object",
		default: {
			top: "1",
			bottom: "1",
			left: "1",
			right: "1",
		},
	},
	contactFormBorderLink : {
		type : "boolean",
		default: true
	},
	contactFormBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "7",
			bottom: "7",
			left: "7",
			right: "7",
		},
	},
	contactFormBorderRadiusTablet: {
		type: "object",
		default: {
			top: "7",
			bottom: "7",
			left: "7",
			right: "7",
		},
	},
	contactFormBorderRadiusMobile: {
		type: "object",
		default: {
			top: "7",
			bottom: "7",
			left: "7",
			right: "7",
		},
	},
	contactFormBorderRadiusLink : {
		type : "boolean",
		default: true
	},


	contactFormFocusBorder: {
        type: 'string',
        default: "solid",
    },
    contactFormFocusBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    contactFormFocusBorderDesktop: {
        type: "object", 
        default: {
            top: "1",
            bottom: "1",
            left: "1",
            right: "1",
        },
    },
    contactFormFocusBorderTablet: {
        type: "object", 
        default: {
            top: "1",
            bottom: "1",
            left: "1",
            right: "1",
        },
    },
    contactFormFocusBorderMobile: {
        type: "object", 
        default: {
            top: "1",
            bottom: "1",
            left: "1",
            right: "1",
        },
    },
    contactFormFocusBorderLink : {
        type : "boolean",
        default: true
    },
    contactFormFocusBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    contactFormFocusBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: "7",
            bottom: "7",
            left: "7",
            right: "7",
        },
    },
    contactFormFocusBorderRadiusTablet: {
        type: "object", 
        default: {
            top: "7",
            bottom: "7",
            left: "7",
            right: "7",
        },
    },
    contactFormFocusBorderRadiusMobile: {
        type: "object", 
        default: {
            top: "7",
            bottom: "7",
            left: "7",
            right: "7",
        },
    },
    contactFormFocusBorderRadiusLink : {
        type : "boolean",
        default: true
    },
	/** End Style Setting */

	/** Start Placeholder Setting */
	contactFormPlaceholderColor: {
		type: 'string',
		default: "#606266"
	},
	/** End Placeholder Setting */


	/** Start Submit Setting */
	contactFormSubmitAlignment: {
		type: "string",
		default: "left",
	},
	contactFormSubmitHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSubmitHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	contactFormSubmitWidthSelect: {
		type: 'string',
		default: 'custom',
	},
	contactFormSubmitWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSubmitWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	contactFormSubmitColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormSubmitColor: {
		type: 'string',
		default: "#FFFFFF",
	},
	contactFormSubmitHoverColor: {
		type: 'string',
	},
	contactFormSubmitBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormSubmitBgColor: {
		type: 'string',
		default: "#399CFF",
	},
	contactFormSubmitBgHoverColor: {
		type: 'string',
	},
	contactFormSubmitFontFamily: {
		type: "string",
		default: "inherit",
	},
	contactFormSubmitFontSize: {
		type: "object",
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
		}
	},
	contactFormSubmitFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormSubmitFontWeight : {
		type: "string",
		default: "500"
	},
	contactFormSubmitFontStyle : {
		type: "string",
		default: "normal"
	},
	contactFormSubmitTextTransform : {
		type: "string",
		default: "none"
	},
	contactFormSubmitTextDecoration : {
		type: "string",
		default: "none"
	},
	contactFormSubmitLetterSpacing : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSubmitLetterSpacingUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormSubmitLineHeight : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSubmitLineHeightUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormSubmitPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormSubmitPaddingDesktop: {
		type: "object",
		default: {
			top: '8',
			bottom: '8',
			left: '20',
			right: '20',
		},
	},
	contactFormSubmitPaddingTablet: {
		type: "object",
		default: {
			top: '8',
			bottom: '8',
			left: '20',
			right: '20',
		},
	},
	contactFormSubmitPaddingMobile: {
		type: "object",
		default: {
			top: '8',
			bottom: '8',
			left: '20',
			right: '20',
		},
	},
	contactFormSubmitPaddingLink : {
		type : "boolean",
		default: true
	},
	contactFormSubmitMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormSubmitMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSubmitMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSubmitMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSubmitMarginLink : {
		type : "boolean",
		default: true
	},
	contactFormSubmitBorder: {
		type: 'string',
		default: "none",
	},
	contactFormSubmitBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormSubmitBorderColor: {
		type: 'string',
	},
	contactFormSubmitBorderHoverColor: {
		type: 'string',
	},
	contactFormSubmitBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormSubmitBorderDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSubmitBorderTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSubmitBorderMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSubmitBorderLink : {
		type : "boolean",
		default: true
	},
	contactFormSubmitBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormSubmitBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '7',
			bottom: '7',
			left: '7',
			right: '7',
		},
	},
	contactFormSubmitBorderRadiusTablet: {
		type: "object",
		default: {
			top: '7',
			bottom: '7',
			left: '7',
			right: '7',
		},
	},
	contactFormSubmitBorderRadiusMobile: {
		type: "object",
		default: {
			top: '7',
			bottom: '7',
			left: '7',
			right: '7',
		},
	},
	contactFormSubmitBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Submit Setting */

	/** Start Success Message Setting */
	contactFormSuccessColor: {
		type: 'string',
	},
	contactFormSuccessBgColor: {
		type: 'string',
	},
	contactFormSuccessFontFamily: {
		type: "string",
		default: "inherit",
	},
	contactFormSuccessFontSize: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSuccessFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormSuccessFontWeight : {
		type: "string",
	},
	contactFormSuccessFontStyle : {
		type: "string",
		default: "normal"
	},
	contactFormSuccessTextTransform : {
		type: "string",
		default: "none"
	},
	contactFormSuccessTextDecoration : {
		type: "string",
		default: "none"
	},
	contactFormSuccessLetterSpacing : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSuccessLetterSpacingUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormSuccessLineHeight : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormSuccessLineHeightUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormSuccessBorder: {
		type: 'string',
		default: "none",
	},
	contactFormSuccessBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormSuccessBorderColor: {
		type: 'string',
	},
	contactFormSuccessBorderHoverColor: {
		type: 'string',
	},
	contactFormSuccessBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormSuccessBorderDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSuccessBorderTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSuccessBorderMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSuccessBorderLink : {
		type : "boolean",
		default: true
	},
	contactFormSuccessBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormSuccessBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSuccessBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSuccessBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormSuccessBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Success Message Setting */

	/** Start Error message Setting */
	contactFormErrorColor: {
		type: 'string',
		default: "#f56c6c" 
	},
	contactFormErrorFontFamily: {
		type: "string",
		default: "inherit",
	},
	contactFormErrorFontSize: {
		type: "object",
		default: {
			Desktop: '13',
			Tablet: '13',
			Mobile: '13'
		}
	},
	contactFormErrorFontSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormErrorFontWeight : {
		type: "string",
	},
	contactFormErrorFontStyle : {
		type: "string",
		default: "normal"
	},
	contactFormErrorTextTransform : {
		type: "string",
		default: "none"
	},
	contactFormErrorTextDecoration : {
		type: "string",
		default: "none"
	},
	contactFormErrorLetterSpacing : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormErrorLetterSpacingUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormErrorLineHeight : {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	contactFormErrorLineHeightUnits : {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	contactFormErrorPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormErrorPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormErrorPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormErrorPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormErrorPaddingLink : {
		type : "boolean",
		default: true
	},
	contactFormErrorMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormErrorMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormErrorMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormErrorMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormErrorMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Error Message Setting */



	/** Start Global Setting */
	contactFormGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormGlobalPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	contactFormGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormGlobalMarginDesktop: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 0,
			right: 0,
		},
	},
	contactFormGlobalMarginTablet: {
		type: "object",
		default: {
			top: 20,
			bottom: 20,
			left: 0,
			right: 0,
		},
	},
	contactFormGlobalMarginMobile: {
		type: "object",
		default: {
			top: 20,
			bottom: 20,
			left: 0,
			right: 0,
		},
	},
	contactFormGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	contactFormGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormGlobalBgColor : {
		type: "string",
	},
	contactFormGlobalBgHoverColor: {
		type: 'string',
	},

	contactFormGlobalBorder: {
		type: 'string',
		default: "none",
	},
	contactFormGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	contactFormGlobalBorderColor: {
		type: 'string',
	},
	contactFormGlobalBorderHoverColor: {
		type: 'string',
	},
	contactFormGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormGlobalBorderDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalBorderTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalBorderMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	contactFormGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	contactFormGlobalBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	contactFormGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
}
