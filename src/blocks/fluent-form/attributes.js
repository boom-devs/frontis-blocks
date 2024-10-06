const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
	fluentFormGlobalZIndex : {
        type: "number",
    },
	formId: {
		type: 'string'
	},
	showLabels: {
        type: "boolean",
        default: true,
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
    fluentFormLabelColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormLabelColor: {
        type: 'string',
    },
    fluentFormLabelHoverColor: {
        type: 'string',
    },
    fluentFormLabelFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormLabelFontSize: {
        type: "number",
    },
    fluentFormLabelFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormLabelFontWeight : {
        type: "string",
    },
    fluentFormLabelFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormLabelTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormLabelTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormLabelLetterSpacing : {
        type: "number",
    },
    fluentFormLabelLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormLabelLineHeight : {
        type: "number",
    },
    fluentFormLabelLineHeightUnits : {
        type: "string",
        default: "px"
    },
    /** End Label */

    /** Start Input & Textarea */
    fluentFormInputBgColor: {
        type: 'string',
    },
    fluentFormInputColor: {
        type: 'string',
    },
    fluentFormInputFocusColor: {
        type: 'string',
    },
    fluentFormInputFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormInputFontSize: {
        type: "number",
    },
    fluentFormInputFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormInputFontWeight : {
        type: "string",
    },
    fluentFormInputFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormInputTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormInputTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormInputLetterSpacing : {
        type: "number",
    },
    fluentFormInputLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormInputLineHeight : {
        type: "number",
    },
    fluentFormInputLineHeightUnits : {
        type: "string",
        default: "px"
    },
    /** End Input & Textarea */

    /** Start Text Indent */
    fluentFormTextIndentSize: {
		type: 'object',
		default: {
			Desktop: "",
			Tablet: "",
			Mobile: "",
		}
	},
	fluentFormTextIndentSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** End Text Indent */

    /** Start Input Width */
    fluentFormInputWidthSize: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: ""
        }
    },
    fluentFormInputWidthSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Input Width */

    /** Start Input Height */
    fluentFormInputHeightSize: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: ""
        }
    },
    fluentFormInputHeightSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Input Height */

    /** Start Textarea Width */
    fluentFormTextareaWidthSize: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: ""
        }
    },
    fluentFormTextareaWidthSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Textarea Width */

    /** Start Textarea Height */
    fluentFormTextareaHeightSize: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: ""
        }
    },
    fluentFormTextareaHeightSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Textarea Height */

    /** Start Spacing Height */
    fluentFormSpacingSize: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: ""
        }
    },
    fluentFormSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Spacing Height */

    /** Start Style Setting */
	fluentFormPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormPaddingDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormPaddingTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormPaddingMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormBorder: {
        type: 'string',
        default: "none",
    },
    fluentFormBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormBorderColor: {
        type: 'string',
    },
    fluentFormBorderHoverColor: {
        type: 'string',
    },
    fluentFormBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormBorderDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormBorderTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormBorderMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormBorderLink : {
        type : "boolean",
        default: true
    },
    fluentFormBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormBorderRadiusTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormBorderRadiusMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Style Setting */

    /** Start Placeholder Setting */
    fluentFormPlaceholderColor: {
        type: 'string',
    },
    /** End Placeholder Setting */


    /** Start Radio & Checkbox Setting */
    fluentFormRadioFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	fluentFormRadioFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    fluentFormRadioColor: {
        type: 'string',
    },
    fluentFormRadioCheckedColor: {
        type: 'string',
    },
    fluentFormRadioBorderWidth: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	fluentFormRadioBorderWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    fluentFormRadioBorderColor: {
        type: 'string',
    },
    fluentFormRadioBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormRadioBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormRadioBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormRadioBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormRadioBorderRadiusLink : {
        type : "boolean",
        default: true
    },


    fluentFormCheckBoxBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormCheckBoxBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormCheckBoxBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormCheckBoxBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormCheckBoxBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    fluentFormRadioCheckBoxItemSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	fluentFormRadioCheckBoxItemSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** End Radio & Checkbox Setting */

    /** Start Section Break Title Setting */
    fluentFormSectionBreakAlignment: {
        type: "string",
        default: "left",
    },
    fluentFormSectionBreakTitleColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormSectionBreakTitleColor: {
        type: 'string',
    },
    fluentFormSectionBreakTitleHoverColor: {
        type: 'string',
    },
    fluentFormSectionBreakTitleFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormSectionBreakTitleFontSize: {
        type: "number",
    },
    fluentFormSectionBreakTitleFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormSectionBreakTitleFontWeight : {
        type: "string",
    },
    fluentFormSectionBreakTitleFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormSectionBreakTitleTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormSectionBreakTitleTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormSectionBreakTitleLetterSpacing : {
        type: "number",
    },
    fluentFormSectionBreakTitleLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSectionBreakTitleLineHeight : {
        type: "number",
    },
    fluentFormSectionBreakTitleLineHeightUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSectionBreakTitlePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSectionBreakTitlePaddingDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakTitlePaddingTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakTitlePaddingMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakTitlePaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormSectionBreakTitleMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSectionBreakTitleMarginDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakTitleMarginTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakTitleMarginMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakTitleMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Section Break Title Setting */


    /** Start Section Break Description Setting */
    fluentFormSectionBreakDescColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormSectionBreakDescColor: {
        type: 'string',
    },
    fluentFormSectionBreakDescHoverColor: {
        type: 'string',
    },
    fluentFormSectionBreakDescFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormSectionBreakDescFontSize: {
        type: "number",
    },
    fluentFormSectionBreakDescFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormSectionBreakDescFontWeight : {
        type: "string",
    },
    fluentFormSectionBreakDescFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormSectionBreakDescTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormSectionBreakDescTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormSectionBreakDescLetterSpacing : {
        type: "number",
    },
    fluentFormSectionBreakDescLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSectionBreakDescLineHeight : {
        type: "number",
    },
    fluentFormSectionBreakDescLineHeightUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSectionBreakDescPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSectionBreakDescPaddingDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakDescPaddingTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakDescPaddingMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakDescPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormSectionBreakDescMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSectionBreakDescMarginDesktop: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakDescMarginTablet: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakDescMarginMobile: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    fluentFormSectionBreakDescMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Section Break Description Setting */

    /** Start HTML Setting */
    fluentFormHtmlAlignment: {
        type: "string",
        default: "left",
    },
    fluentFormHtmlColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormHtmlColor: {
        type: 'string',
    },
    fluentFormHtmlHoverColor: {
        type: 'string',
    },
    fluentFormHtmlFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormHtmlFontSize: {
        type: "number",
    },
    fluentFormHtmlFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormHtmlFontWeight : {
        type: "string",
    },
    fluentFormHtmlFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormHtmlTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormHtmlTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormHtmlLetterSpacing : {
        type: "number",
    },
    fluentFormHtmlLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormHtmlLineHeight : {
        type: "number",
    },
    fluentFormHtmlLineHeightUnits : {
        type: "string",
        default: "px"
    },
    fluentFormHtmlPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormHtmlPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormHtmlPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormHtmlPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormHtmlPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormHtmlMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormHtmlMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormHtmlMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormHtmlMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormHtmlMarginLink : {
        type : "boolean",
        default: true
    },
    /** End HTML Setting */

    /** Start Submit Setting */
    fluentFormSubmitAlignment: {
        type: "string",
        default: "left",
    },
    fluentFormSubmitHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    fluentFormSubmitHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    fluentFormSubmitWidthSelect: {
		type: 'string',
        default: 'custom',
	},
    fluentFormSubmitWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    fluentFormSubmitWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    fluentFormSubmitColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormSubmitColor: {
        type: 'string',
    },
    fluentFormSubmitHoverColor: {
        type: 'string',
    },
    fluentFormSubmitBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormSubmitBgColor: {
        type: 'string',
    },
    fluentFormSubmitBgHoverColor: {
        type: 'string',
    },
    fluentFormSubmitFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormSubmitFontSize: {
        type: "number",
    },
    fluentFormSubmitFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormSubmitFontWeight : {
        type: "string",
    },
    fluentFormSubmitFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormSubmitTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormSubmitTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormSubmitLetterSpacing : {
        type: "number",
    },
    fluentFormSubmitLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSubmitLineHeight : {
        type: "number",
    },
    fluentFormSubmitLineHeightUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSubmitPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSubmitPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormSubmitMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSubmitMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitMarginLink : {
        type : "boolean",
        default: true
    },
    fluentFormSubmitBorder: {
        type: 'string',
        default: "none",
    },
    fluentFormSubmitBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormSubmitBorderColor: {
        type: 'string',
    },
    fluentFormSubmitBorderHoverColor: {
        type: 'string',
    },
    fluentFormSubmitBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSubmitBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitBorderLink : {
        type : "boolean",
        default: true
    },
    fluentFormSubmitBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormSubmitBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSubmitBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Submit Setting */

    /** Start Success Message Setting */
    fluentFormSuccessColor: {
        type: 'string',
    },
    fluentFormSuccessBgColor: {
        type: 'string',
    },
    fluentFormSuccessFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormSuccessFontSize: {
        type: "number",
    },
    fluentFormSuccessFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormSuccessFontWeight : {
        type: "string",
    },
    fluentFormSuccessFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormSuccessTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormSuccessTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormSuccessLetterSpacing : {
        type: "number",
    },
    fluentFormSuccessLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSuccessLineHeight : {
        type: "number",
    },
    fluentFormSuccessLineHeightUnits : {
        type: "string",
        default: "px"
    },
    fluentFormSuccessBorder: {
        type: 'string',
        default: "none",
    },
    fluentFormSuccessBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormSuccessBorderColor: {
        type: 'string',
    },
    fluentFormSuccessBorderHoverColor: {
        type: 'string',
    },
    fluentFormSuccessBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    fluentFormSuccessBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSuccessBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSuccessBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSuccessBorderLink : {
        type : "boolean",
        default: true
    },
    fluentFormSuccessBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    fluentFormSuccessBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSuccessBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSuccessBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormSuccessBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Success Message Setting */

    /** Start Error message Setting */
    fluentFormErrorColor: {
        type: 'string',
    },
    fluentFormErrorFontFamily: {
        type: "string",
        default: "inherit",
    },
    fluentFormErrorFontSize: {
        type: "number",
    },
    fluentFormErrorFontSizeUnits: {
        type: "string",
        default: "px"
    },
    fluentFormErrorFontWeight : {
        type: "string",
    },
    fluentFormErrorFontStyle : {
        type: "string",
        default: "normal"
    },
    fluentFormErrorTextTransform : {
        type: "string",
        default: "none"
    },
    fluentFormErrorTextDecoration : {
        type: "string",
        default: "none"
    },
    fluentFormErrorLetterSpacing : {
        type: "number",
    },
    fluentFormErrorLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    fluentFormErrorLineHeight : {
        type: "number",
    },
    fluentFormErrorLineHeightUnits : {
        type: "string",
        default: "px"
    },
    fluentFormErrorPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormErrorPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormErrorPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormErrorPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormErrorPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormErrorMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormErrorMarginDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormErrorMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormErrorMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormErrorMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Error Message Setting */



    /** Start Global Setting */
	fluentFormGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalPaddingDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalPaddingLink : {
        type : "boolean",
        default: true
    },
    fluentFormGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalMarginDesktop: {
        type: "object", 
        default: {
            top: 30,
            bottom: 30,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalMarginTablet: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalMarginMobile: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalMarginLink : {
        type : "boolean",
        default: true
    },
    fluentFormGlobalBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormGlobalBgColor : {
        type: "string",
    },
    fluentFormGlobalBgHoverColor: {
        type: 'string',
    },

    fluentFormGlobalBorder: {
        type: 'string',
        default: "none",
    },
    fluentFormGlobalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormGlobalBorderColor: {
        type: 'string',
    },
    fluentFormGlobalBorderHoverColor: {
        type: 'string',
    },
    fluentFormGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalBorderLink : {
        type : "boolean",
        default: true
    },
    fluentFormGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    fluentFormGlobalBorderRadiusDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    fluentFormGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Global Setting */
}
export default attributes;
