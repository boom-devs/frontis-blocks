const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    
    animatedHeadingAlignment: {
        type: "object",
        default: {
            Desktop: "left",
            Tablet: "left",
            Mobile: "left",
        },
    },

    animatedHeadingMainTag: {
        type: "string",
        default: "span"
    },
    animatedHeadingGap: {
        type: "object",
        default: {
            Desktop: "8",
            Tablet: "8",
            Mobile: "8"
        }
    },
    animatedHeadingGapUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px"
        }
    },

    animatedHeadingPrefix: {
        type: "string",
        default: "We create"
    },
    animatedHeadingItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                animatedHeadingTitle: 'WordPress Plugins',
            },
            {
                id: 'item-2',
                animatedHeadingTitle: 'WordPress Themes',
            },
            {
                id: 'item-3',
                animatedHeadingTitle: 'WooCommerce Extensions',
            },
            {
                id: 'item-4',
                animatedHeadingTitle: 'Custom Web Solutions',
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                animatedHeadingTitle: {
                    type: "string",
                    default: "WordPress Plugins"
                },
            }
        }
    },

    animatedHeadingCursorSwitch: {
        type: "boolean",
        default: true
    },

    animatedHeadingCursor: {
        type: "string",
        default: "|"
    },

    animatedHeadingSuffix: {
        type: "string",
        default: ""
    },

    /** Start Normal Typing Text Style */
    animatedHeadingNormalTextGlobalTypographyData: {
        type: "object",
        default: {}
    },
    animatedHeadingNormalTextGlobalTypoSwitcher: {
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
    animatedHeadingNormalTextGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    animatedHeadingNormalTextGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    animatedHeadingNormalTextFontFamily: {
        type: "string",
        default: "Default",
    },
    animatedHeadingNormalTextFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingNormalTextFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingNormalTextFontWeight : {
        type: "string",
        default: ""
    },
    animatedHeadingNormalTextFontStyle : {
        type: "string",
        default: ""
    },
    animatedHeadingNormalTextTextTransform : {
        type: "string",
        default: ""
    },
    animatedHeadingNormalTextTextDecoration : {
        type: "string",
        default: ""
    },
    animatedHeadingNormalTextLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingNormalTextLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingNormalTextLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingNormalTextLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    animatedHeadingNormalTextColorSwitcher : {
        type: "string",
        default: "normal"
    },
    animatedHeadingNormalTextColor : {
        type: "string"
    },
    animatedHeadingNormalTextHoverColor: {
        type: 'string',
    },
    animatedHeadingNormalTextBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    animatedHeadingNormalTextBgColor: {
        type: 'string',
    },
    animatedHeadingNormalTextBgColorHover: {
        type: 'string',
    },
    /** End Normal Typing Text Style */


    /** Start Typing Text Style */
    animatedHeadingGlobalTypographyData: {
        type: "object",
        default: {}
    },
    animatedHeadingGlobalTypoSwitcher: {
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
    animatedHeadingGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    animatedHeadingGlobalTypoOption: {
        type: "object",
        default: {label: 'Default', value: 'default'},
    },
    animatedHeadingFontFamily: {
        type: "string",
        default: "Default",
    },
    animatedHeadingFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingFontWeight : {
        type: "string",
        default: ""
    },
    animatedHeadingFontStyle : {
        type: "string",
        default: ""
    },
    animatedHeadingTextTransform : {
        type: "string",
        default: ""
    },
    animatedHeadingTextDecoration : {
        type: "string",
        default: ""
    },
    animatedHeadingLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingColorSwitcher : {
        type: "string",
        default: "normal"
    },
    animatedHeadingColor : {
        type: "string"
    },
    animatedHeadingHoverColor: {
        type: 'string',
    },
    animatedHeadingBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    animatedHeadingBgColor: {
        type: 'string',
    },
    animatedHeadingBgColorHover: {
        type: 'string',
    },
    /** End Typing Text Style */

    animatedHeadingGlobalBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    animatedHeadingGlobalBgColor: {
        type: 'string',
        default: ""
    },
    animatedHeadingGlobalBgColorHover: {
        type: 'string',
        default: ""
    },

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

    /** Start Typing Text Global Z-Index */
    animatedHeadingGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    /** Start Class & ID Setting */
    animatedHeadingGlobalWraperID : {
        type: "string",
        default: ""
    },
    animatedHeadingGlobalWraperClass : {
        type: "string",
        default: ""
    },
	/** End Class & ID Setting */
    animatedHeadingCustomCSS : {
        type: "string",
        default: "",
    },
}
export default attributes;