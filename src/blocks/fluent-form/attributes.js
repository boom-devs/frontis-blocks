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
    fluentFormInputBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormInputBgColor: {
        type: 'string',
    },
    fluentFormInputBgHoverColor: {
        type: 'string',
    },
    fluentFormInputColorSwitcher : {
        type: "string",
        default: "normal"
    },
    fluentFormInputColor: {
        type: 'string',
    },
    fluentFormInputHoverColor: {
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
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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
            Desktop: 25,
            Tablet: 25,
            Mobile: 25
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
            Desktop: 25,
            Tablet: 25,
            Mobile: 25
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
            Desktop: 25,
            Tablet: 25,
            Mobile: 25
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
            Desktop: 25,
            Tablet: 25,
            Mobile: 25
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
            Desktop: 25,
            Tablet: 25,
            Mobile: 25
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormPaddingTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormPaddingMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormRadioBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormRadioBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormCheckBoxBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormCheckBoxBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormCheckBoxBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    fluentFormRadioCheckBoxItemSpacing: {
		type: 'object',
		default: {
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalPaddingTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalPaddingMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderRadiusTablet: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderRadiusMobile: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    fluentFormGlobalBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Global Setting */
}
export default attributes;
