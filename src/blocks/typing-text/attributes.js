const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },

    typingTextPrefix: {
        type: "string",
        default: "This is "
    },
    typingTextPrefixTag: {
        type: "string",
        default: "span"
    },
    typingTextItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                typingTextTitle: 'Typing Text 1',
            },
            {
                id: 'item-2',
                typingTextTitle: 'Typing Text 2',
            },
            {
                id: 'item-3',
                typingTextTitle: 'Typing Text 3',
            },
            {
                id: 'item-4',
                typingTextTitle: 'Typing Text 4',
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                typingTextTitle: {
                    type: "string",
                    default: "Typing Text 1"
                },
            }
        }
    },

    typingTextCursorSwitch: {
        type: "boolean",
        default: true
    },

    typingTextCursor: {
        type: "string",
        default: "|"
    },

    typingTextSuffix: {
        type: "string",
        default: "Typing Text"
    },

    typingTextSuffixTag: {
        type: "string",
        default: "span"
    },

    /** Start Normal Typing Text Style */
    typingNormalTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    typingNormalTextGlobalTypoSwitcher: {
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
    typingNormalTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    typingNormalTextGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    typingNormalTextFontFamily: {
        type: "string",
        default: "Default",
    },
    typingNormalTextFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    typingNormalTextFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    typingNormalTextFontWeight : {
        type: "string",
        default: ""
    },
    typingNormalTextFontStyle : {
        type: "string",
        default: ""
    },
    typingNormalTextTextTransform : {
        type: "string",
        default: ""
    },
    typingNormalTextTextDecoration : {
        type: "string",
        default: ""
    },
    typingNormalTextLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    typingNormalTextLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    typingNormalTextLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    typingNormalTextLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    typingNormalTextColorSwitcher : {
        type: "string",
        default: "normal"
    },
    typingNormalTextColor : {
        type: "string"
    },
    typingNormalTextHoverColor: {
        type: 'string',
    },
    typingNormalTextBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    typingNormalTextBgColor: {
        type: 'string',
    },
    typingNormalTextBgColorHover: {
        type: 'string',
    },
    /** End Normal Typing Text Style */


    /** Start Typing Text Style */
    typingTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    typingTextGlobalTypoSwitcher: {
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
    typingTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    typingTextGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    typingTextFontFamily: {
        type: "string",
        default: "Default",
    },
    typingTextFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    typingTextFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    typingTextFontWeight : {
        type: "string",
        default: ""
    },
    typingTextFontStyle : {
        type: "string",
        default: ""
    },
    typingTextTextTransform : {
        type: "string",
        default: ""
    },
    typingTextTextDecoration : {
        type: "string",
        default: ""
    },
    typingTextLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    typingTextLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    typingTextLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    typingTextLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    typingTextColorSwitcher : {
        type: "string",
        default: "normal"
    },
    typingTextColor : {
        type: "string"
    },
    typingTextHoverColor: {
        type: 'string',
    },
    typingTextBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    typingTextBgColor: {
        type: 'string',
    },
    typingTextBgColorHover: {
        type: 'string',
    },
    /** End Typing Text Style */

    /** Start Typing Text Margin & Padding */
    textPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    textDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textTabletPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textPaddingLink : {
        type : "boolean",
        default: true
    },
    textMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    textDesktopMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    textTabletMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    textMobileMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    textMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Typing Text Margin & Padding */

    /** Start Typing Text Border */
    textBorder: {
        type: 'string',
        default: "none",
    },
    textBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    textBorderColor: {
        type: 'string',
    },
    textBorderHoverColor: {
        type: 'string',
    },
    textBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    textDesktopBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textTabletBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textMobileBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textBorderLink : {
        type : "boolean",
        default: true
    },
    textBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    textDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textTabletBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textMobileBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    textBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Typing Text Border */
}
export default attributes;