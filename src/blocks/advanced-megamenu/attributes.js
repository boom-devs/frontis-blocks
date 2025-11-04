export default {
    blockId: {
        type: "string",
    },
    blockStyle: {
        type: "string",
    },
    /** ================================
 * Start Mega Menu Style
 * ================================ */
    megaMenuGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    megaMenuGlobalTypoSwitcher: {
        type: 'object',
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
    megaMenuGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    megaMenuGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    megaMenuFontFamily: {
        type: 'string',
        default: 'Default',
    },
    megaMenuFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    megaMenuFontWeight: {
        type: 'string',
        default: ''
    },
    megaMenuFontStyle: {
        type: 'string',
        default: ''
    },
    megaMenuTextTransform: {
        type: 'string',
        default: ''
    },
    megaMenuTextDecoration: {
        type: 'string',
        default: 'none'
    },
    megaMenuLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    megaMenuLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    megaMenuTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuTextColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuTextShadowValues: {
        type: 'array',
        default: [],
    },
    megaMenuTextShadowCssValue: {
        type: 'string',
        default: '',
    },
    megaMenuTextStroke: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuTextStrokeColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuTextStrokeColor: {
        type: 'string',
        default: '#399CFF',
    },
    megaMenuTextStrokeHoverColor: {
        type: 'string',
        default: '',
    },

    megaMenuHighlightColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuHighlightColor: {
        type: 'string',
    },
    megaMenuHighlightHoverColor: {
        type: 'string',
    },

    megaMenuColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuColor: {
        type: 'string'
    },
    megaMenuHoverColor: {
        type: 'string',
    },
    megaMenuTextGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    megaMenuTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    megaMenuBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuBgColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuBgColor: {
        type: 'string',
    },
    megaMenuBgHoverColor: {
        type: 'string',
    },
    megaMenuBgGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    megaMenuBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    /** ================================
     * End Mega Menu Style
     * ================================ */
    megaMenuGlobalCustomCSS: {
        type: "string",
        default: "",
    },
    megaMenuDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    megaMenuTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    megaMenuMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    megaMenuGlobalWraperID: {
        type: 'string',
        default: ''
    },

    megaMenuGlobalWraperClass: {
        type: 'string',
        default: ''
    },
    menuLayout: {
        type: "string",
        default: "horizontal",
    },
    menuAlignment: {
        type: "string",
        default: "left",
    },
    menuSpacing: {
        type: "number",
        default: 15,
    },
    menuItemColor: {
        type: "string",
        default: "",
    },
    menuItemHoverColor: {
        type: "string",
        default: "",
    },
    menuItemBackgroundColor: {
        type: "string",
        default: "",
    },
    menuItemHoverBackgroundColor: {
        type: "string",
        default: "",
    },
    menuItemPadding: {
        type: "object",
        default: {
            top: "10px",
            right: "15px",
            bottom: "10px",
            left: "15px",
        },
    },
    submenuWidth: {
        type: "number",
        default: 220,
    },
    submenuBackgroundColor: {
        type: "string",
        default: "#ffffff",
    },
    megaMenuWidth: {
        type: "string",
        default: "container",
    },
    megaMenuBackgroundColor: {
        type: "string",
        default: "#ffffff",
    },
    megaMenuInteraction: {
        type: "string",
        default: "hover"
    },
    menuItems: {
        type: "array",
        default: []
    },
    triggerType: {
        type: "string",
        default: "hover"
    },
    /**
 * Start Mega Menu Border
 **/
    megaMenuBorder: {
        type: 'string',
        default: 'none',
    },
    megaMenuBorderColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuBorderColor: {
        type: 'string',
    },
    megaMenuBorderHoverColor: {
        type: 'string',
    },

    megaMenuBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuTabletBorder: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobileBorder: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuBorderLink: {
        type: 'boolean',
        default: true,
    },

    /** Border Radius */
    megaMenuBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuTabletBorderRadius: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuBorderRadiusLink: {
        type: 'boolean',
        default: true,
    },
    /** 
     * End Mega Menu Border
     *  */


    /** 
     * Start Mega Menu Box Shadow
     * */
    megaMenuBoxShadowValues: {
        type: 'array',
        default: [],
    },
    megaMenuBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** 
     * End Mega Menu Box Shadow
     *  */


    /**
     * Start Mega Menu Padding
     *  */
    megaMenuPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuTabletPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobilePadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuPaddingLink: {
        type: 'boolean',
        default: true,
    },
    /** 
     * End Mega Menu Padding
     * */


    /** 
     * Start Mega Menu Margin
     **/
    megaMenuMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
        },
    },
    megaMenuTabletMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobileMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMarginLink: {
        type: 'boolean',
        default: true,
    },

};